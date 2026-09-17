<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objComponentList, strComponentName
Dim bCanIUP

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleCurriculumComponents")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbCuriculumComponents
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Sub Main
	Set objComponentList = objNSNET.GetCurriculumComponentList(strSchoolID)
'	objComponentList.MoveNext ' пропускаем "Предельно допустимую нагрузку", теперь этого значения в запросе нет.

	bCanIUP = (strFunctionalityType = kFuncType_Common Or strFunctionalityType = kFuncType_Profession)
End Sub

Sub onHead()%>
<SCRIPT><!--
function createNew() {
	var sendBtn = function(dialog) { 
		if(isDBBusy()) return false;

		var form = document.forms["createNewComponent"];

		if (form.COMPONENTNAME.value == '') {
			alert(language.Generic.SetupSchoolCalendar.kEnterComponentName);
		}
		else {
			setDBBusy();
			ok("createNewComponent", "CuriculumComponentsSave.asp");
		}
	};
	$.show.dialog({
		title: '<%=obLanguage("SetupSchoolCalendar","kCreateNewComponent")%>',
		message: $('#createNewComponentTempl'),
		buttons: [{label: language.Generic.Buttons.kCreate, action: sendBtn, cssClass: 'btn-primary'}]
	});
}

function removeClass() {
	if(isDBBusy()) return false;

	var i;
	var bNoSelected = true;
	var form = document.forms["List"];

	if (form.COMPONENTS)
		if(form.COMPONENTS.length)
			for (i=0; i<form.COMPONENTS.length; i++)  {
				 bNoSelected = (bNoSelected && !form.COMPONENTS[i].checked);
			}
		else
			bNoSelected = (!form.COMPONENTS.checked);

	if (bNoSelected)
		alert(language.Generic.SetupSchoolCalendar.kChooseComponentsForDeleting);
	else {
		$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function(){
			form.elements["ACT"].value = "remove";
			setDBBusy();
			DoSubmit( form, "" );
		});
	}
}

//--></SCRIPT>
<%End Sub

Sub DrawButtons()
	If not readonly Then
		Call ButtonCreate("createNew()", obLanguage("SetupSchoolCalendar","kCreateNewComponent"))
		Call ButtonDel("removeClass()", obLanguage("SetupSchoolCalendar","kDeleteComponent"))
	End If
End Sub

Sub onDrawPage()%>
	<form class="form-horizontal" name="List" method="post" action="CuriculumComponentsSave.asp">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="ACT" value="new"><%
		Call DrawComponentsTable
		If bCanIUP Then
			Call DrawIUPComponents()
		End If%>
	</form> 
	<script id="createNewComponentTempl" type="text/html">
		<form class="form-horizontal" id="createNewComponent" name="createNewComponent" method="post">
			<%=WriteObligatoryTags()%><%
			SetFiltersWidth "", "col-md-4", "col-md-8"

			Call DrawInputRowWithClass(obLanguage("SetupSchoolCalendar","kComponent"), "", "COMPONENTNAME", "text", TextInputSize(20), 80, "", "FilterWhiteSpace")%>
			<input type="hidden" name="act" value="new"><%
			
			RestoreDefFiltersWidth%>
		</form>
	</script><%
End Sub

Sub PopulateComponentCheck(objRs)
	Dim strID, nTemplate, nInUse

	If Not bIsDebug Then On Error Resume Next%>

	<table class="col-md-4 table table-bordered table-md">
		<tr>
			<th><%=obLanguage("SetupSchoolCalendar","kComponent")%></th>
			<th><%=obLanguage("Common","kDeletingMark")%></th>
		</tr><%
	
		Do While Not objRs.EOF
			strID = GetSafeID(objRs("COMPONENTID"), Null)
			nTemplate = GetSafeLng(objRs("C0"), Null)
			nInUse = GetSafeLng(objRs("C1"), Null)%>

			<tr>
				<td><%=DB2HTML(objRs("COMPONENTNAME"))%></td>
				<td class="text-center"><%
					If nTemplate = 0 And nInUse = 0 Then%>
						<input type="checkbox" name="COMPONENTS" value="<%=strID%>" <%=IIF(readonly, " disabled=""disabled"" ","")%>><%
					Else%>
						<%=obLanguage("Common","kEmploy")%><%
					End If%>
				</td>
			</tr><%

			objRs.MoveNext
		Loop%>

	</table><%
End Sub

Sub DrawComponentsTable()%>
	<div class="row">
		<div class="col-md-8 col-lg-6"><%
			OpenPanelEx obLanguage("SetupSchoolCalendar","kComponents"), "components", "", False, "panel-warning"
				Call DrawButtonPanel
				If objComponentList.EOF Then
					DrawInfo obLanguage("SetupSchoolCalendar","kEmptyComponentsList"), False
				Else
					Call PopulateComponentCheck(objComponentList)
				End If
			ClosePanel%>
		</div>
	</div><%
End Sub

Sub DrawIUPComponents()
	Dim objIUPComps

	Set objIUPComps = objNSNET.GetIUPComponentList()

	If objIUPComps.EOF Then
		GenerateError obLanguage("Common","kUnexpErr")
	End If%>

	<div class="row">
		<div class="col-md-8 col-lg-6"><%
			OpenPanelEx obLanguage("SetupSchoolCalendar","kIUPComponents"), "iup_components", "", False, "panel-success"%>
				<div class="list-group list-group-sm"><%
					While Not objIUPComps.EOF%>
						<label class="list-group-item">
							<%=DB2HTML(objIUPComps("COMPONENTID") & ". " & objIUPComps("COMPONENTNAME"))%>
						</label><%
						objIUPComps.MoveNext
					WEnd%>
				</div><%
			ClosePanel%>
		</div>
	</div><%
End Sub%>
