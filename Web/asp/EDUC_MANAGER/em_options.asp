<!-- #INCLUDE FILE="em_screen.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/populate.asp -->
<!-- #INCLUDE FILE="em_address_filter_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const nBaseLT = 594161239
Const nBaseVer = 61
Const nBaseGV = 897695341

Dim nAttBegin_Day, nAttBegin_Month, arrMonths

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Management
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_Schools
 End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kFEOSchools")
End Function

Sub ReadState()
End Sub

Sub WriteState()
End Sub

Sub onHeadSpecial()
	Dim nLT

	Randomize
	nLT = Int(587654321 * Rnd) + 536427369%>

	<script src="<%=GetVersionedResLink("/vendor/pages/js/emCardInfo.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script type="text/javascript">
		var fp = null;
		var emCardInfoCtrl;

		$(document).ready(function() {
			emCardInfoCtrl = new EmCardInfoCtrl();

			// карточка УО
			emCardInfoCtrl.GetCardInfo()
				.then(function () {
					$('#geneos').addClass('collapse in');
				});

			// фильтр-панель
			var getFilterPanel = jsSubmit({
				action: "/webapi/em/card/filterpanel",
				method: "GET",
				showProcessing: true
			}).then(function(response) {
				var model = response.filterPanel;
				var sources = response.filterSources;
				fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/em/card/initfilters");

				var controlButtons = $("#preview-btn");

				fp.ready(function () {
					controlButtons.show();
				});

				fp.emptyChoice(function () {
					controlButtons.hide();
				});

				if (fp.status === "emptyChoice") {
					controlButtons.hide();
				}

				$('#eos').addClass('collapse in');
			});
		});

		function saveOptions() {
			var form = document.forms.EMOptions;

			form.act.value = 'save';
			ok_check_db("EMOptions", "");
		}

		function updatePosByAttest() {
			extDeferred.when(checkForChanges, $.show.getConfirmation(language.Generic.EM.kUpdatePosConfirm) ).then(function() {
				var form = document.forms.EMOptions;

				form.act.value = 'update_attest';
				ok_check_db("EMOptions", "");
			});
		}

		var wnd = null;

		function goSchool() {
			var formSchools = document.forms.EMSchools;

			var emSchoolId = fp.getValues().EMSCHOOLID;
			var formName = 'emSchool' + Math.floor(Math.random() * (9999));

			if (!emSchoolId) {
				return;
			}

			var winOptions = { 
				url: "/asp/blank.htm", 
				name: formName, 
				specs: 'status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no', 
				winChild: wnd 
			};

			windowOpen(winOptions);
			wnd = winOptions.winChild;

			postTo("/webapi/dologin", { 
					LT: <%=nLT%>,
					SCID: emSchoolId,
					EMID: <%=strEMID%>,
					<%=kInterfaceTypeKey%>: <%=LoginType_EducManagerForSchool%>
				},
				{
					target: formName
				}
			);

			isHaveToLogout = true;
		}
	</script><%
End Sub

Sub DrawButtons()
	If Not bIsEMRO Then ButtonSave "saveOptions()", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()
	Call DrawEMSchools()
End Sub

Sub DrawAttestBeginParams()
	Dim nDay, i%>

	&nbsp;&nbsp;<select name="AttBegin_Day" onChange="dataChanged();" disabled="disabled">
		<%For nDay = 1 To 31%>
		<option value="<%=nDay%>" <%If nDay = nAttBegin_Day Then%>selected<%End If%>><%=nDay%></option>
		<%Next%>
	</select>&nbsp;&nbsp;&nbsp;
	<select name="AttBegin_Month" onChange="dataChanged();" disabled="disabled">
		<%'For i = 1 To 12
		rw "<option value=""" & i & """" & IIf(i = nAttBegin_Month, ">selected", "") & ">&nbsp;</option>" ' & arrMonths(i)
		'Next
		%>
	</select><%
End Sub

Sub DrawUpdatePosStatistics()
	Dim arrUpdatePosStatistics, i

	arrUpdatePosStatistics = obTokenMgr.GetData(strToken, stUpdatePosStatistics)
	If Not IsArray(arrUpdatePosStatistics) Then Exit Sub%>
	<br><%
	If Ubound(arrUpdatePosStatistics, 2) = -1 Then%>
		<div class="SmallHeader"><%=oblanguage("EM","kNoSchoolsForEM")%></div><%
	Else%>
		<div class="SmallHeader"><%=oblanguage("EM","kUpdatePosStatistics")%></div><br>
		<table class="ThickTable" border="1" cellspacing="0" cellpadding=3>
			<tr><th style="height: 27px"><%=obLanguage("Common","kSchool",0)%></th><th style="height: 27px"><%=oblanguage("EM","kPosition")%></th><th style="height: 27px"><%=oblanguage("EM","kPosition2")%></th></tr><%
			For i = 0 To Ubound(arrUpdatePosStatistics, 2)%>
				<tr><td><%=arrUpdatePosStatistics(1, i)%></td><td align="center"><%=arrUpdatePosStatistics(2, i)%></td><td align="center"><%=arrUpdatePosStatistics(3, i)%></td></tr><%
			Next%>
		</table><%
	End If
	Call obTokenMgr.SetData(strToken, stUpdatePosStatistics, Null)
End Sub

Sub DrawEMSchools()
	Dim strEMFormName
	
	strEMFormName = "EMSchools"%>

	<div class="row">
		<div class="col-md-12">
			<div class="buttons-panel">
				<div class="buttons-panel-left">
					<%ButtonSave "emCardInfoCtrl.SaveCard()", obLanguage("Common","kSave")%>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12 col-lg-9">

			<form class="form-horizontal form-xs" method="POST" action="em_options.asp" name="<%=strEMFormName%>">
				<%=WriteObligatoryTags()%><%

				OpenPanelEx "Общая информация", "geneos", "", False, "panel-info"
					%><div id="cardInfo"></div><%
				ClosePanel

			%></form><%

				OpenPanel oblanguage("EM","kEM_EOsView"), "eos", False

				%>
				<div class="filters-panel form-horizontal form-xs"></div>
				<%
				OpenFormGroup ""
					%><div id="preview-btn"><%
					ButtonView "goSchool()", oblanguage("EM","kGoEO")
					%></div><%
				CloseFormGroup

				ClosePanel
					
			%>

			
		</div>
	</div><%
End Sub%>