<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kMinTimeout = 3

Dim nRoleID , strWasSaved
Dim arrRoles
Dim arrRoleRights, nLogoutTime
Dim objSecurityComponent
Dim bCanEditAccountRights

Function GetPageTitle()
	GetPageTitle = obLanguage("Secure","kTitleSecure")
End Function

Sub ReadState()
	nRoleID = GetSafeLng(Request("ROLEID"),GetSafeLng(obTokenMgr.GetData(strToken, stSecurityRolesCurRole),0))
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stSecurityRolesCurRole, nRoleID )
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementSchoolInfo
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSecRoles
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileDefineSecurityRoles)
End Function

Sub Main()
	Dim objRs

	Set objSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	arrRoles = objSecurityComponent.GetSchoolRoles()
	If Not IsArray(arrRoles) Then GenerateError (obLanguage("Secure","kErrListEmpty"))
	If UBound(arrRoles) < 1 Then GenerateError (obLanguage("Secure","kErrListEmpty"))
	If nRoleID = 0 Then nRoleID = CInt(arrRoles(0).Id)

	Set objRs = objNSNET.GetSchoolRoleRightList(strSchoolID, nRoleID)
	arrRoleRights = objRs.GetRows(,,Array("RIGHTID","RIGHTNAME","CHECKED"))

	nLogoutTime = objNSNET.GetSchoolLogoutTime(strSchoolID, nRoleID)
End Sub

Function onLoad()
End Function

Sub onHead()%>
<link rel="stylesheet" type="text/css" href="/vendor/pages/css/security-roles-setup.min.css"/>
<SCRIPT><!--
var personalDataRightsAccess = null
$(document).ready(function(){
	personalDataRightsAccess = (function(){
			var button = $(".btn-close-rights");
			var _checkBoxes = [52, 54, 64, 73, 74, 75];
			var _radios = ['R_STAFF', 'R_STUDENT'];
			var _check = function(){
				for(var ind in _checkBoxes)
				{
					var rightVal =  $('input[value=' + _checkBoxes[ind] + ']').prop("checked");
					if(rightVal !== undefined)
					{
						if( rightVal != false) 
						return rightVal;
					}
				}
				for(var ind in _radios)
				{
					var rightVal = $('input[name='+_radios[ind]+']:checked').val();
					if(rightVal !== undefined)
					{
						rightVal = rightVal !="0";
						if( rightVal != false) 
						return rightVal;
					}
				}
			}
			var _changeHandler = function() {
				if (_check())
				{
					_show();
				}
				else
				{
					_hide();
				}
			}
			var _hide = function() {
				button.hide();
			}
			var _show = function() {
				button.show();
			}

			return {
				init : function() {
					$('input[type=radio]').change(_changeHandler);
					$('input[type=checkbox]').change(_changeHandler);
					_changeHandler();
				},
				disable : function(){					
					for(var ind in _checkBoxes)
					{
						$('input[value=' + _checkBoxes[ind] + ']').prop('checked', false);
					}
					
					for(var ind in _radios)
					{
						$('input[name=' + _radios[ind] + ']').prop('checked', true);
					}
					_hide();
					dataWereChanged = true;
				},
				checkChanges : function(){
					_changeHandler();
				}
			}
		})();
	var nRoleId = $('select[name="ROLEID"]').val();
	if (nRoleId != 4 && nRoleId != 5 && nRoleId != 6)
	{
		personalDataRightsAccess.init();
	}
});

function setDefaultRigths()
{
	<%If Not PERSON_DATA Then%>
		alert(language.Generic.Secure.kEditRightsInLocalAccess);
	<%Else%>
		if( isDBBusy() ) return false;
		$.show.confirmation(language.Generic.Secure.kAreYouSureToSetByDefault + '\n\n' + language.Generic.Common.kMsgAreYouSure).then(function(){
			setDBBusy();
			DoSubmit( document.ROLESFORM, "SecurityRolesDefault.asp?ROLEID=<%=nRoleID%>" );
		});
	<%End If%>

}

function canSubmit()
{
	var form = document.ROLESFORM;
	var lt = form.elements['LOGOUTTIME'].value;
	if (str2lng(lt) >= <%=kMinTimeout%>)
		return true;
	else
		alert(language.Generic.Secure.kIdleTimeMustNotBeLessThan.replace("%","<%=kMinTimeout%>")); //form.elements['LOGOUTTIME'].focus();
	return false;
}

function set<%=arJournalEditLimitedTime%>AddParamValue(theObject)
{
	if (theObject && trimStr(theObject.value) != "")
	{
		var value = str2lngEx(theObject);
		if(!isNaN(value))
		{
			if(value > 0 && value <= 365)
			{
				dataChanged();
				return true;
			}
		}
	}
	theObject.value=<%=objNSNET.GetJournalEditTimeLimit( strSchoolID )%>;
	theObject.focus();
	return false;
}

function onkeypress<%=arJournalEditLimitedTime%>AddParamValue(e)
{
	e=getEvent(e);
	keycode = getKeyCode(e);
	element = getTargetElement(e);
	code = e.keyCode;

	if( code && (code == 8 || code == 37 || code == 39 || code == 46 ) && (keycode == 0 || keycode == 8 || keycode == 13) )
		return true;
	keychar = String.fromCharCode(keycode)
	numcheck = /\d/
	return numcheck.test(keychar) && (keycode != 4)
}

function doSave()
{
	<%If Not PERSON_DATA Then%>
		alert(language.Generic.Secure.kEditRightsInLocalAccess);
	<%Else%>
		document.ROLESFORM.ROLEID.value = getListValue(document.ROLESFILTER.ROLEID);
		extDeferred.when(canSubmit).then(function() {
			var saveForm = document.forms['ROLESFORM'];
			saveForm.action = '/asp/SetupSchool/SecurityRolesSave.asp';
			jsSaveForm (saveForm);
		});
	<%End If%>
}

function collapseAll() {
	$('.collapse').collapse('hide');
}

function expandAll() {
	$('.collapse').collapse('show');
}
//--></SCRIPT>
<%End Sub

Sub DrawFilters( strForm )
	OpenFormGroup obLanguage("Calendar","kRole")
		Call DrawSelectNamedEntitiesArr(arrRoles, "ROLEID", nRoleID, Null, "OnChangeSelect('ROLESFILTER','')")
	CloseFormGroup
End Sub

Sub DrawButtons()
	If Not readonly Then
		ButtonSave "doSave();", obLanguage("Common","kSave")%>
		<%=ShowButtonBase("setDefaultRigths()",obLanguage("Secure","kbtnSetDefault"), "", obLanguage("Secure","kbtnDefault"), "", False)%><%
		ButtonReset "resetScreen('ROLESFORM'); personalDataRightsAccess.checkChanges();", obLanguage("Common","kReset")%>
		<%=ShowButtonBase( "personalDataRightsAccess.disable();", obLanguage("Secure","kCloseAccess"), "glyphicon glyphicon-user", obLanguage("Secure","kCloseAccess"), "btn-close-rights", False)%><%
		Call ImageButton("collapseAll()", obLanguage("Secure","kCollapseAllPanels"), "glyphicon glyphicon-folder-close")
		Call ImageButton("expandAll()", obLanguage("Secure","kExpandAllPanels"), "glyphicon glyphicon-folder-open")
	End If
End Sub

Sub onDrawPage()

	bCanEditAccountRights = nRoleID = rlAdmin Or nRoleID = rlPrincipal Or nRoleID = rlTeacher Or nRoleID = rlSecretary Or nRoleID = rlSpecialistStaff
	SetFiltersWidth "col-md-6 col-md-offset-4", "col-md-4 col-lg-2", "col-md-6 col-lg-6"%>

	<form name="ROLESFILTER" method="POST" action="/asp/SetupSchool/SecurityRolesSetup.asp">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonsFilters( True, "ROLESFILTER" )%>
	</form>
	
	<form name="ROLESFORM" method="POST" action="/asp/SetupSchool/SecurityRolesSave.asp">
		<%=WriteObligatoryTags()%>
		<input type="HIDDEN" name="ROLEID" value="">
		<%Call DrawRolePanels%>
	</form><%
End Sub

Sub DrawRolePanels()%>
	<div class="row"><%
		Select Case nRoleID
			Case rlStudent, rlParent:%>
				<div class="col-md-6 col-lg-4"><%
					DrawSchedulePanel
					DrawSchoolReportsPanel
					DrawAnnouncementsPanel
					DrawLearningApplicationsPanel%>
				</div><%
			Case rlMinorStaff%>
				<div class="col-md-6 col-lg-4"><%
					DrawSchedulePanel
					DrawUsersPanel
					DrawClassManagementPanel
					DrawAnnouncementsPanel%>
				</div><%
			Case Else%>
				<div class="col-md-6 col-lg-4"><%
					DrawSchoolInfoPanel
					DrawUsersPanel
					DrawCurriculumPlanPanel
					DrawMovement
					DrawClassManagementPanel
					DrawSchedulePanel%>
				</div>
				<div class="col-md-6 col-lg-4"><%
					DrawLearningApplicationsPanel
					DrawJournalPanel
					DrawSchoolReportsPanel
					DrawSchoolResources
					DrawAnnouncementsPanel
					DrawCurriculumManagementPanel%>
				</div><%
		End Select
		If nRoleID = rlParent Then%>
			<div class="col-md-6 col-lg-4"><%
				DrawMessagesPanel
				DrawForumPanel
				DrawMySettingsPanel
				DrawLogoutPanel%>
			</div>
			<div class="col-md-6 col-lg-4"><%
				If Module_IndividualSupport_Available() Then
					DrawIndividualSupportPanel
				End If
				DrawSchoolDocsPanel%>
			</div><%
		Else%>
			<div class="col-md-6 col-lg-4"><%
				If nRoleID <> rlStudent And nRoleID <> rlMinorStaff And Module_IndividualSupport_Available() Then
					DrawIndividualSupportPanel
				End If

				DrawMessagesPanel
				DrawForumPanel
				DrawMySettingsPanel
				DrawLogoutPanel
				If nRoleID <> rlStudent And nRoleID <> rlMinorStaff Then
					DrawSchoolDocsPanel
				End If%>
			</div><%
		End If%>
	</div><%
End Sub

'Методы отрисовки панелей
Sub DrawSchoolDocsPanel()
	OpenPanel obLanguage("MenuFolders","kSchoolDocs"), "school_docs", True
		If nRoleID = rlParent Then
			Call ShowRCheckbox(Right_arSchoolPublicDocsView)
		ElseIf nRoleID <> rlStudent And nRoleID <> rlMinorStaff Then
			Call ShowRCheckbox(Right_arSchoolDocsView)
			Call ShowRCheckbox(Right_arSchoolDocsEdit)
		End If
	ClosePanel
End Sub

Sub DrawSchedulePanel()
	OpenPanel obLanguage("Common","kSchedule"), "schedule", True
		If nRoleID = rlStudent or nRoleID = rlParent Then
			Call ShowRCheckbox(Right_arCalendarViewSelf)
		ElseIf nRoleID = rlMinorStaff Then%>
			<div class="checkbox">
				<label>
					<input name="RIGHTS" type="checkbox" value="<%=arCalendarViewAll%>" <%  If IsRightInRole(arCalendarViewAll) Then Response.Write " checked "%> onchange="dataChanged();">&nbsp;<%=obLanguage("Secure","kViewSchedule")%>
				</label>
			</div><%
		ElseIf nRoleId = rlTeacher Then
			Call ShowRRadioArray( obLanguage("Secure","kViewSchedule")&":", "R_CALVIEW",  Array( Right_arCalendarViewAll, Right_arCalendarViewSelf ) )
			Call ShowRRadioArray( obLanguage("Secure","kDefineClassEvents",strFunctionalityType)&":", "R_CECREATE",  Array( Right_arClassMgmPostClassEventAll, Right_arClassMgmPostClassEventSelf ) )
			Call ShowRCheckbox(Right_arCalendarCreateCalendar)
			Call ShowRCheckbox(Right_arPostSchoolEvent)
		Else
			Call ShowRCheckbox(Right_arCalendarViewAll)
			Call ShowRCheckbox(Right_arCalendarCreateCalendar)
			Call ShowRCheckbox(Right_arPostSchoolEvent)
			Call ShowRCheckbox(Right_arClassMgmPostClassEventAll)
		End If
	ClosePanel
End Sub

Sub DrawJournalPanel()
	OpenPanel obLanguage("Common","kJournal",strFunctionalityType), "journal", True
		If nRoleID = rlTeacher Then
			Call ShowRRadioArray( obLanguage("SetupSchool","kViewMarksAttendance",strFunctionalityType)&":", "R_JVIEW",  Array( Right_arJournalViewAll, Right_arJournalViewSelf ) )
			Call ShowRRadioArray( obLanguage("SetupSchool","kEditMarksAttendance",strFunctionalityType)&":", "R_JEDIT",  Array( Right_arJournalEditAll, Right_arJournalEditSelf ) )
						
			If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
				Call ShowRRadioArray( obLanguage("Secure","kViewMarks")&":", "R_TVIEW",  Array(Right_arTotalsViewAll, Right_arTotalsViewSelf))
				Call ShowRRadioArray( obLanguage("Secure","kEditMarks")&":", "R_TEDIT",  Array(Right_arTotalsEditAll, Right_arTotalsEditSelf))
				Call ShowRRadioArray( obLanguage("Security","kResultsEGE"), "R_RESULTS_EGE",  Array( Right_arBrowseResultsEGEAllClasses, Right_arBrowseResultsEGEHisClassesOrSubjects) )
				Call ShowRCheckbox(Right_arJournalEditHAOnlyOnFuture)
			End If
			Call ShowRCheckboxWithAddParam( Right_arJournalEditLimitedTime, objNSNET.GetJournalEditTimeLimit( strSchoolID ), "JOURNALEDITTIMELIMIT")
		ElseIf Not IsArrayContainsItem(Array(rlParent, rlStudent, rlMinorStaff), CInt(nRoleID)) Then
			Call ShowRCheckbox(Right_arJournalViewAll)
			Call ShowRCheckbox(Right_arJournalEditAll)

			If CLng(strFunctionalityType)<>kFuncType_PreSchool Then
				If nRoleID = rlAdmin Or nRoleID = rlPrincipal Then
					Call ShowRCheckbox(Right_arJournalEditHAOnlyOnFuture)
				End If
				Call ShowRCheckbox(Right_arTotalsViewAll)
				Call ShowRCheckbox(Right_arTotalsEditAll)
				If rlPrincipal = nRoleID Or rlAdmin = nRoleID Then Call ShowRRadioArray( obLanguage("Security","kResultsEGE"), "R_RESULTS_EGE",  Array( Right_arBrowseResultsEGEAllClasses, Right_arBrowseResultsEGEHisClassesOrSubjects) )
			End If
		End If
	ClosePanel
End Sub

Sub DrawCurriculumManagementPanel()
	OpenPanel obLanguage("MenuFolders", "kCurriculumManagement", strFunctionalityType), "curriculum_management", True
		If Not IsArrayContainsItem(Array(rlParent, rlStudent, rlMinorStaff), CInt(nRoleID)) Then
			If nRoleID = rlTeacher Then
				Call ShowRRadioArray(obLanguage("SetupSchool", "kViewPlans", strFunctionalityType) & ":", "R_PLVIEW", Array(Right_arCurrMgmViewAll, Right_arCurrMgmViewSelf))
				Call ShowRRadioArray(obLanguage("SetupSchool", "kEditPlans", strFunctionalityType) & ":", "R_PLCREATE", Array(Right_arCurrMgmCreateAll, Right_arCurrMgmCreate))
			Else
				Call ShowRCheckbox(Right_arCurrMgmViewAll)
				Call ShowRCheckbox(Right_arCurrMgmCreateAll)
			End If
		End If
	ClosePanel
End Sub

Sub DrawLearningApplicationsPanel()
	OpenPanel obLanguage("MenuFolders","kLearningApplications"), "learning_applications", True
		If nRoleID = rlStudent or nRoleID = rlParent Then
			If nRoleID = rlStudent Then
				Call ShowRCheckbox(Right_arAssignmentsViewComplete)
			Else%>
				<div class="checkbox">
					<label>
						<input name="RIGHTS" type="checkbox" value="<%=arAssignmentsViewComplete%>" <%  If IsRightInRole(arAssignmentsViewComplete) Then Response.Write " CHECKED "%> onchange="dataChanged();">&nbsp;<%=obLanguage("Secure","kViewTasks")%>
					</label>
				</div><%
			End If
			Call ShowRCheckbox(Right_arLAViewMaterials)
		ElseIf nRoleID <> rlMinorStaff Then
			If nRoleID = rlTeacher Then
				Call ShowRRadioArray( obLanguage("SetupSchool", "kViewTasksMarks", strFunctionalityType) & ":", "R_LAVIEW", Array( Right_arLAViewAll, Right_arLAViewSelf ) )
				Call ShowRCheckbox(Right_arAddLA)
			Else
				Call ShowRCheckbox(Right_arLAViewAll)
				Call ShowRCheckbox(Right_arAddLA)
			End If
			Call ShowRCheckbox(Right_arLASetPolicies)
			If CLng(strFunctionalityType) <> kFuncType_PreSchool Then Call ShowRCheckbox(Right_arLACreateGradingScales)
			Call ShowRCheckbox(Right_arLAViewMaterials)
			Call ShowRCheckbox(Right_arLAEditSelf)
		End If
	ClosePanel
End Sub

Sub DrawSchoolReportsPanel()
	OpenPanel obLanguage("MenuFolders","kSchoolReports"), "school_reports", True
		If nRoleID = rlStudent or nRoleID = rlParent Then
			Call ShowRCheckbox(Right_arReportsViewForAssignedClass)
		ElseIf nRoleID <> rlMinorStaff Then
			Call ShowRRadioArray(obLanguage("StatReports", "kStatReports"), "R_STAT_REPORTS", Array(Right_arBrowseStatReports, Right_arFillStatReports))
			Call ShowRCheckbox(Right_arReportsViewAdministrativeReports)
			Call ShowRCheckbox(Right_arReportsForAssignedClass)
			Call ShowRCheckbox(Right_arReportsForAllClasses)
			Call ShowRCheckbox(Right_arReportsViewAdditionalReports)
			Call ShowRCheckbox(Right_arReportsUseReportConstructor)
			If CLng(strFunctionalityType) <> kFuncType_Add Then
				Call ShowRCheckbox(Right_arReportsViewSpecialEducNeeds)
			End If
		End IF
	ClosePanel
End Sub

Sub DrawAnnouncementsPanel()
	OpenPanel obLanguage("MenuFolders","kAnnouncements"), "announcements", True
		Call ShowRCheckbox(Right_arAnnouncementView)
		If nRoleID <> rlStudent And nRoleID <> rlParent Then
			Call ShowRCheckbox(Right_arAnnouncementPost)
		End If
	ClosePanel
End Sub

Sub DrawUsersPanel()
	Dim arrStudentsRights
	OpenPanel obLanguage("MenuFolders","kUsers"), "users", True
		If nRoleID = rlMinorStaff Then
			Call ShowRCheckbox(Right_arShortInfoStaff)
			Call ShowRCheckbox(Right_arShortInfoStudents)
		ElseIf nRoleID <> rlStudent and nRoleID <> rlParent Then
			Call ShowRRadioArray( obLanguage("Secure","kStaffInfo"), "R_STAFF",  Array( Right_arUsersEditStaff, Right_arUsersEditStaffMedInfo, Right_arShortInfoStaff) )

			If CLng(strFunctionalityType) <> kFuncType_Add And CLng(strFunctionalityType) <> kFuncType_EM Then
				If nRoleID=rlTeacher Then
					arrStudentsRights = Array(Right_arUsersEditStudents, Right_arEditInfoSelf, Right_arUsersEditStudentsMedInfo, Right_arShortInfoStudents)
				Else
					arrStudentsRights = Array(Right_arUsersEditStudents, Right_arUsersEditStudentsPsyInfo, Right_arUsersEditStudentsMedInfo, Right_arShortInfoStudents)
				End If
			Else
				If CLng(strFunctionalityType) = kFuncType_Add Then
					arrStudentsRights = Array(Right_arUsersEditStudents, Right_arShortInfoStudents)
				Else
					arrStudentsRights = Array(Right_arShortInfoStudents)
				End If
			End If
			Call ShowRRadioArray(obLanguage("Secure","kStudentInfo",strFunctionalityType), "R_STUDENT", arrStudentsRights)

			If bCanEditAccountRights Then
				Call ShowRCheckbox(Right_arUsersEditAccountStaff)
			End If

			If bCanEditAccountRights And CLng(strFunctionalityType) <> kFuncType_EM Then
				If nRoleID = rlTeacher Then
					Call ShowRCheckbox(Right_arUsersEditAccountStudentsParentsInClass)
				Else
					Call ShowRCheckbox(Right_arUsersEditAccountStudentsParents)
				End If
			End If

			Call ShowRCheckbox(Right_arDeleteUsers)
		End If

		Call ShowRCheckbox(Right_arBrowseAccessJournal)
		If Module_HealthMonitoring_Avalible() and CLng(strFunctionalityType) = kFuncType_Common Then
			Call ShowRCheckbox(Right_arViewHealthMonitoring)
			Call ShowRCheckbox(Right_arEditHealthMonitoring)
		End If
	ClosePanel
End Sub

Sub DrawMessagesPanel()
	OpenPanel obLanguage("Secure","kMessages"), "messages", True
		Call ShowRCheckbox(Right_arMessagesSendReceive)
	ClosePanel
End Sub

Sub DrawForumPanel()
	OpenPanel obLanguage("Secure","kForum"), "forum", True
		Call ShowRCheckbox(Right_arForumSendReceive)
		If Not IsArrayContainsItem(Array(rlParent, rlStudent, rlMinorStaff), CInt(nRoleID)) Then
			Call ShowRCheckbox(Right_arForumEdit)
		End If
	ClosePanel
End Sub

Sub DrawClassManagementPanel()
	OpenPanel obLanguage("MenuFolders","kClassManagement",strFunctionalityType), "class_management", True
		Call ShowRCheckbox(Right_arClassMgmViewClassSubjAll)
		If Not IsArrayContainsItem(Array(rlParent, rlStudent, rlMinorStaff), CInt(nRoleID)) Then
			Call ShowRCheckbox(Right_arClassMgmCreateClass)
			Call ShowRCheckbox(Right_arClassMgmEditSubjects)
			If nRoleID=rlTeacher Then
				Call ShowRRadioArray(obLanguage("Secure","kEnroll"), "R_ENROLL", Array(Right_arClassMgmEnrollClass, Right_arEnrollSelf))
			Else
				Call ShowRCheckbox(Right_arClassMgmEnrollClass)
			End If
		End If
	ClosePanel
End Sub

Sub DrawSchoolInfoPanel()
	OpenPanel obLanguage("MenuFolders","kSchoolInfo",strFunctionalityType), "school_info", True
		Call ShowRCheckbox(Right_arProfileEditSchoolInfo)
		Call ShowRCheckbox(Right_arProfileViewSchoolInfo)
		Call ShowRCheckbox(Right_arProfileEditRegionalSettings)
		Call ShowRCheckbox(Right_arEditSchoolSettings)
		If nRoleID <> rlAdmin Then Call ShowRCheckbox(Right_arProfileDefineSecurityRoles)
		Call ShowRCheckbox(Right_arEditReferenceBook)
		Call ShowRCheckbox(Right_arUserStat)
	ClosePanel
End Sub

Sub DrawCurriculumPlanPanel()
	OpenPanel obLanguage("MenuFolders","kCurriculumPlan"), "curriculum_plan", True
		Call ShowRCheckbox(Right_arCreateCloseEditYear)
		Call ShowRCheckbox(Right_arSchoolSubjects)
		Call ShowRCheckbox(Right_arCreateEditTerm)
		Call ShowRCheckbox(Right_arEditSchoolTermTypes)
	ClosePanel
End Sub

Sub DrawMovement()
	OpenPanel obLanguage("MenuFolders","kMovement"), "movement", True
		Call ShowRRadioArray(obLanguage("Secure", "kMoveBook", strFunctionalityType), "R_MOVE_BOOK", Array(Right_arMoveBookEdit, Right_arMoveBookView))
		Call ShowRCheckbox(Right_arMovePoolStudents)
	ClosePanel
End Sub

Sub DrawSchoolResources()
	OpenPanel obLanguage("MenuFolders", "kSchoolResources", strFunctionalityType), "school_resources", True
		Call ShowRCheckbox(Right_arEditSchoolResources)
	ClosePanel
End Sub

Sub DrawMySettingsPanel()
	OpenPanel obLanguage("MenuFolders","kMySettings"), "my_settings", True
		Call ShowRCheckbox(Right_arSetPhoto)
	ClosePanel
End Sub

Sub DrawLogoutPanel()
	OpenPanel obLanguage("Secure","kLogout"), "logout", True%>
		<%=obLanguage("Secure","kThrogh")%>&nbsp;<input type="text" name="LOGOUTTIME" size="<%=TextInputSize(5)%>" maxlength="3" value=<%=nLogoutTime%> OnChange="dataChanged()"><%
	ClosePanel
End Sub

Sub DrawIndividualSupportPanel()
	Dim measureEditRightsArr

	OpenPanel "Индивидуальная поддержка обучающихся", "individual_support", True
		Call ShowRCheckbox(Right_arIndividualSupportStudentsReestrView)

		If nRoleID <> rlParent Then Call ShowRCheckbox(Right_arAddIndividualSupportStudents)

		If nRoleID = rlParent Then
			measureEditRightsArr = Array(Right_arIndividualSupportMeasuresEditSelf)
		Else
			measureEditRightsArr = Array(Right_arIndividualSupportMeasuresEditAll, Right_arIndividualSupportMeasuresEditSelf)
		End If

		Call ShowRRadioArray(obLanguage("Security", "kIndividualSupportMeasuresEdit"), "R_INDIVIDUAL_SUPPORT", measureEditRightsArr)
	ClosePanel
End Sub

Function IsRightInRole(nRight)
	Dim i

	IsRightInRole = False

	For i = 0 To UBound(arrRoleRights,2)
		If CInt(arrRoleRights(0, i)) = nRight Then IsRightInRole = CBool(CInt(arrRoleRights(2, i)) = 1) : Exit Function
	Next
End Function

Function GetNameOfRight(nRight)
	Dim i

	GetNameOfRight = ""

	For i = 0 To UBound(arrRoleRights, 2)
		If CInt(arrRoleRights(0, i)) = nRight Then GetNameOfRight = arrRoleRights(1, i) : Exit Function
	Next
End Function

Sub ShowRCheckbox( nRight )
	Dim rightEnumItem

	Set rightEnumItem = objSecurityComponent.GetRight(nRight)%>

	<div class="checkbox">
		<label>
			<input name="RIGHTS" type="checkbox" value="<%=rightEnumItem.Id%>" <%=IIF(IsRightInRole(rightEnumItem.Id)," checked", "")%> onchange="dataChanged();"<%=IIF(readonly, " disabled=""disabled"" ","")%>>&nbsp;<%=rightEnumItem.Name%>
		</label>
	</div><%
End Sub

Sub ShowRCheckboxWithAddParam( nRight, nValue, strParamName )
	Dim paramSymbol
	Dim rightEnumItem

	Set rightEnumItem = objSecurityComponent.GetRight(nRight)
	paramSymbol = obLanguage("Secure","kParamSpecSymbl")
	Dim strInputBoxHtml, strCheckBoxHtml, strCaptionHtml, strCaptionText, strControlHtml, strInputOnChange, strInputOnKeyPress
	strInputOnChange = "if( set" & nRight & "AddParamValue ) { set" & nRight & "AddParamValue(this); } else { dataChanged(); }"
	strInputOnKeyPress = "if( onkeypress" & nRight & "AddParamValue ) { return onkeypress" & nRight & "AddParamValue(event); }else{return true;}"
	strInputBoxHtml = "<input " & IIF(IsRightInRole(nRight), "", "disabled") & " type=""text"" id=""" & nRight & "_AddParam"" name=""" & strParamName & """ value=""" & nValue & """ size=""5"" maxlength=""3"" onchange=""" & strInputOnChange & """ onkeypress=""" & strInputOnKeyPress & """>"
	strCheckBoxHtml = "<input name=""RIGHTS"" id=""RIGHTS_" & nRight & """ TYPE=""checkbox"" VALUE=""" & nRight & """ " & IIF(IsRightInRole(nRight)," CHECKED","") & " onchange=""dataChanged(); $('#" & nRight & "_AddParam')[0].disabled=!$('#RIGHTS_" & nRight & "')[0].checked""" & IIF(readonly, " disabled=""disabled"" ","")&">"

	strCaptionHtml = "<span>" & rightEnumItem.Name & "</span>"
	strCaptionHtml = Replace(strCaptionHtml,paramSymbol,strInputBoxHtml)
	strControlHtml = "<div class=""checkbox""><label>" & strCheckBoxHtml & strCaptionHtml & "</label></div>"
	Response.Write strControlHtml
End Sub

Sub ShowRadioItem( strFieldName, nRightId, strRightName, bChecked)%>
	<div class="radio">
		<label>
			<input name="<%=strFieldName%>" type="radio" value="<%=nRightId%>" <%=IIF(bChecked," checked", "")%> onchange="dataChanged();"<%=IIF(readonly, " disabled=""disabled"" ","")%>>&nbsp;<%=strRightName%>
		</label>
	</div><%
End Sub

Sub ShowRRadioArray(strTitle, strFieldName, arrRights)
	Dim i, rightEnumItem
	Dim bChecked, bIsCheckedItem%>

	<div class="alert alert-info">
		<label class="control-label">
			<%=strTitle%>
		</label><%
		bChecked = False

		For i=0 To Ubound(arrRights)
			Set rightEnumItem = objSecurityComponent.GetRight(arrRights(i))
			bIsCheckedItem = IsRightInRole(rightEnumItem.Id)
			Call ShowRadioItem(strFieldName, rightEnumItem.Id, rightEnumItem.Name, bIsCheckedItem)
			If bIsCheckedItem Then bChecked = True
		Next
		Call ShowRadioItem(strFieldName, 0, obLanguage("Common","kNoAccess"), Not bChecked)%>
	</div><%
End Sub%>
