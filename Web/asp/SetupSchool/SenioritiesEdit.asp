<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateinput.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Seniorities_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kSenYearsMin = 80

Dim strStaffID, arrSenior
Dim dtToday, dtSenMin

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleSenioritiesEdit") & " " & GreenText(DB2HTML(objNSNET.GetUserNickName(strStaffID))) & " " & obLanguage("SetupSchool","kTitleStateOn") & " " & GreenText(Date2Str(dtSeniorityOn))
End	Function

Function CanBack()
	CanBack = True
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStaff
 End Function

Function hasUserRightsOnPage()
	strStaffID = GetSafeID(Request("UID"), Null)
	hasUserRightsOnPage = checkRights(strStaffID)
End	Function

Sub ReadState()
	If readonly Then GenerateError obLanguage("Filter","kErrorEditClosedYear")
	dtToday = NSNow()
	dtSenMin = DateAdd("yyyy", -kSenYearsMin, dtToday)
End	Sub

Sub	Main
	Dim objCmd, objRs

	Set objCmd = objNSNET.GetStaffSeniorities_Prepare()
	Set objRs = objNSNET.GetStaffSeniorities_Execute(objCmd, strStaffID)
	Call objNSNET.DisposeCommand(objCmd)
	If objRs.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	arrSenior = GetSenArray(objRs)
End	Sub

Sub	onHead()
	Dim i, j
	Dim strSenType, arrSenForType, strSenID, strElNameStart, strElNameEnd, strElNameLast
	Dim nUbound

	Call scriptCalendarCommon()
	Call scriptInitCalendarSettings(dtSenMin, dtToday, Empty)%>

	<script type="text/javascript">
		var dtNow = <%=Date2Js(dtToday)%>;

		function removeSeniority(sSenID){
			if(isDBBusy()) return;
			
			checkForChanges().then(function() {
				$.show.confirmation(language.Generic.SetupSchool.kAreYouSureToDeleteSeniority).then(function() {
					var form = document.main;

					form.ACT.value = 'delete';
					form.delSenID.value = sSenID;
					setDBBusy();

					ok('main', 'SenioritiesSave.asp');
				});
			});
		}

		function Back() {
			goBack(document.main, '/angular/school/userinfo/staff/<%=strStaffID%>');
		}

		function doSave(){
			if(!dataWereChanged){
				alert(language.Generic.SetupSchoolUI.kDataNotModified);
				return false;
			};

			extDeferred.when(isSenRangesValid).then(function() {
				var saveForm = document.forms['main'];
				saveForm.ACT.value = 'save';
				ok('main', 'SenioritiesSave.asp');
				/*saveForm.action = 'SenioritiesSave.asp';
				jsSaveForm(saveForm);*/
			});
		}

		function save(saveAction, formName) {
			var saveForm = document.forms['main'];

			var onSucc = function(request) {
				if (request.message != null)
					alert(request.message);
				dataWereChanged = false;
			};

			jsSubmit({action: saveAction, form: saveForm, showProcessing: true, onSuccess: onSucc});
			$(saveForm).rememberState();
		}

		var elGreaterToday = null;
		function isValidRange(elStart, el, dtStart, dtEnd, dtLast) {
			var confirms = new Array();
			var succ = function(){};
			var fail = function(){};

			if(dtStart != null){
				if( dtLast == null ){
					focusAlert(elStart, language.Generic.Common.kErrInvalidDateNotEmpty);
					return false;
				}
				else if( dtLast >= dtStart ){
					focusAlert(elStart, language.Generic.SetupSchool.kErrRangeIntersection);
					return false;
				}
				if( elGreaterToday == null && dtStart > dtNow ){
					elGreaterToday = elStart;
					fail = function(){elGreaterToday.focus();};
					confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.SetupSchool.kSenDateGreaterToday), succ, fail));
				}
			}

			if( dtEnd != null ){
				if( dtStart == null ){
					focusAlert(elStart, language.Generic.SetupSchool.kErrNoStartDate);
					return false;
				}
				else if( dtStart > dtEnd ){
					focusAlert(elStart, language.Generic.SetupSchool.kErrStartGreaterEndDate);
					return false;
				}
				if( elGreaterToday == null && dtEnd > dtNow ){
					elGreaterToday = el;
					fail = function(){elGreaterToday.focus();};
					confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.SetupSchool.kSenDateGreaterToday), succ, fail));
				}
			}
			return confirms;
		}

		function isSenRangesValid(){
			var confirms = new Array();
			var result = null;
			var form = document.main;
			dtLast = dateUtils.getUTCDate(1900, 1, 1);
			elGreaterToday = null;

			var isSuccResult = function(result)
			{
				if (result) {
					confirms.concat(result);
				} else {
					return false;
				}
				return true;
			}

			<%
			For i = 0 To Ubound(arrSenior, 2)
				strSenType = arrSenior(0, i)
				arrSenForType = arrSenior(2, i)
				If IsArray(arrSenForType) Then
					nUbound = Ubound(arrSenForType, 2)%>
					dtLast = dateUtils.getUTCDate(1900, 1, 1);<%
					For j = 0 To nUbound
						strSenID = arrSenForType(0, j)

						strElNameStart = "Start_" & strSenID
						Call CheckDate( "dtStart", strElNameStart, True )
						strElNameEnd = "End_" & strSenID
						Call CheckDate( "dtEnd", strElNameEnd, (j <> nUbound) )%>

				if (!isSuccResult(isValidRange(dtStart_filter.element, dtEnd_filter.element, dtStart, dtEnd, dtLast))) return false;

				dtLast = dtEnd;
				<%
			Next

				If Not IsNull(arrSenForType(2, nUbound)) Then
						strElNameStart = "NewStart_" & strSenType
						Call CheckDate( "dtStart", strElNameStart, False )
						strElNameEnd = "NewEnd_" & strSenType
						Call CheckDate( "dtEnd", strElNameEnd, False )%>

				if (!isSuccResult(isValidRange(dtStart_filter.element, dtEnd_filter.element, dtStart, dtEnd, dtLast))) return false;

				<%End If
				Else
					strElNameStart = "NewStart_" & strSenType
					Call CheckDate( "dtStart", strElNameStart, False )
					strElNameEnd = "NewEnd_" & strSenType
					Call CheckDate( "dtEnd", strElNameEnd, False )%>
				dtLast = dateUtils.getUTCDate(1900, 1, 1);

				if (!isSuccResult(isValidRange(dtStart_filter.element, dtEnd_filter.element, dtStart, dtEnd, dtLast))) return false;
			<%End If
			Next%>
			/*if( elGreaterToday != null && !confirm(language.Generic.SetupSchool.kSenDateGreaterToday) ){
				elGreaterToday.focus();
				return false;
			}*/
			return confirms;
		}

		function initDateInput() {
			var settings = initCalendarSettings();
			var datePickerOptions = {};

			datePickerOptions.keepEmptyField = true;
			datePickerOptions.autoCorrectDates = false;

			dateInput.initDateInputs(settings.calendarMinDate, settings.calendarMaxDate, settings.calendarSettings, datePickerOptions);
		}

		$(document).ready(function() {
			initDateInput();
		});
	</script><%
End	Sub

Sub DrawFilters(strForm)
End Sub

Sub DrawButtons()
	ButtonSave "doSave();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('main');", obLanguage("Common","kReset")
End Sub

Sub DrawLinkButtons
	DrawPrintButtons
End Sub

Sub DrawSeniorInterval(strSenID, strStart, strEnd)%>
	<div style="position: relative; margin-bottom: 5px;">
		<div style="padding-right: 25px;"><%
			DrawDateInterval "Start_" & strSenID, strStart, "End_" & strSenID, strEnd%>
		</div>
		<div style="position: absolute; right: 0; top: 7px; width: 18px;"><%
			Call DrawContextButtons(Array("removeSeniority(" & strSenID & ");", obLanguage("SetupSchool","kDeleteSeniority"), "danger", "glyphicon glyphicon-remove"), True, , "ctx-btns-icons-md")%>
		</div>
	</div><%
End Sub

Sub DrawNewSeniorInterval(strSenType)
	DrawDateInterval "NewStart_" & strSenType, Null, "NewEnd_" & strSenType, Null
End Sub

Sub onDrawPage()
	Dim arrSenForType, arrTotals
	Dim strSenType, strSenName, strSenID, dtStart, dtEnd, strEnd
	Dim i, j%>

	<form name="main" METHOD="post" ACTION="SenioritiesSave.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("UID", strStaffID, "ACT", "", "delSenID", ""))%>

		<%Call DrawButtonsFilters(True, "main")%>

		<div class="row">
			<div class="col-md-12">
				<table class="table table-stripped table-thin print-block">
					<tr>
						<th><%=obLanguage("SetupSchool","kSenType")%></th>
						<th><%=obLanguage("SetupSchool","kSenStartDate")%>&nbsp;-&nbsp;<%=obLanguage("SetupSchool","kSenEndDate")%></th>
						<th><%=obLanguage("SetupSchool","kSeniorities")%></th>
					</tr><%

					For i = 0 To Ubound(arrSenior, 2)
						strSenType = arrSenior(0, i)
						strSenName = arrSenior(1, i)
						arrSenForType = arrSenior(2, i)%>
						
						<tr>
							<td valign="top"><%=DB2HTML(strSenName)%><%=WriteHiddenTags(Array("SenType", strSenType))%></td><%

							If IsArray(arrSenForType) Then%>
								<td><%
								dtEnd = Null
								For j = 0 To Ubound(arrSenForType, 2)
									strSenID = arrSenForType(0, j)
									dtStart = arrSenForType(1, j)
									dtEnd = arrSenForType(2, j)
									If IsNull(dtEnd) Then
										strEnd = ""
									Else
										strEnd = Date2Str(dtEnd)
									End If%>

									<%=WriteHiddenTags(Array("SenID", strSenID))%><%

									Call DrawSeniorInterval(strSenID, Date2Str(dtStart), strEnd)
								Next

								If Not IsNull(dtEnd) Then
									Call DrawNewSeniorInterval(strSenType)
								End If

								arrTotals = arrSenior(3, i)
								If IsArray(arrTotals) Then%>
									<td style="white-space: nowrap"><%=(arrTotals(0) & " " & obLanguage("SetupSchool","kYears") & ", " & arrTotals(1) & " " & obLanguage("SetupSchool","kMonthsS") & ", " & arrTotals(2) & " " & obLanguage("SetupSchool","kDaysS"))%></td><%
								Else%>
									<td>&nbsp;</td><%
								End If
							Else%>
								<td><%Call DrawNewSeniorInterval(strSenType)%></td><td>&nbsp;</td><%
							End If%>
						</tr><%
					Next%>
				</table>
			</div>
		</div>
	</form><%
End	Sub%>