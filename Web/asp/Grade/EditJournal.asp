<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nMaxMark, nMinMark
Dim strBackPage, bModuleQA

'Data
Dim objClassMeetings

'Vars
Dim nTermID, nClassMeetingId, nSubjectGroupId
Dim strSubjectGroupName, strTermName
Dim dtDate

'Flags
Dim bCreateTestPlanAllowed, bRestrictAddHomeAssign, bPhysicalCulture
Dim bSubjectGroupCmTeacher
Dim bAll

Dim bExtraActivity


Function GetPageTitle()
	GetPageTitle = obLanguage("Grade", "kEditJournal")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = IIf(bExtraActivity, MenuItem_miEA_Journal, MenuItem_miJournal)
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf(bExtraActivity, TabItem_tbEA_Jurnal, TabItem_tbJurnal)
 	bTabInternalPage = True
End Function

Function hasUserRightsOnPage()
	If HasUserRight(arJournalEditAll) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = HasUserRight(arJournalEditSelf)
End Function

Sub ReadState()

	If readonly Then GenerateError obLanguage("Filter","kErrorEditClosedYear")

	nSubjectGroupId = "0"
	bExtraActivity = (LCase(Request("extraActivity") & "") = "true")
	If bExtraActivity Then
		nSubjectGroupId = GetSafeID(Request("SCLID"), "0")
	End If

	If nSubjectGroupId = "0" Then
		nSubjectGroupId = GetSafeLng(obTokenMgr.GetData(strToken, stCurrSubjClass), Null)
	End If
	strSubjectGroupName = GetSafeStrParam(objNSNET.GetSubjectClassName(nSubjectGroupId), Null)


	If Not bExtraActivity Then
		strClassID_IUP = GetSafeIupClassId("PCLID_IUP", stCurrClass_IUP)
		Call InitIUPClassID(strClassID_IUP)
		'добавил сохранение/восстановление strClassID через obTokenMgr, это из-за возможности редактировать задание и обратно сюда возвращаться после редактирования.
	End If

	dtDate = GetSafeDate(GetSafeParam("DATE", stAssignmentDate, Null), Null)
	nClassMeetingId = GetSafeParam("CMID", stClassMeetingID, "0")
	strBackPage = GetSafeStr(Request("BACK"), 200, "Journal.asp")
	nTermID = CLng(GetSafeParam("TERMID", stCurrTerm, Null))

	If Not bAll Then
		If Not IsSubjectGroupOrCmTeacher() Then
			If Not IsClassChief() Then
				GenerateError obLanguage("Curriculum", "kYouCantEditThisClass", strFunctionalityType)
			End If
		End If
	End If

	If (CLng(strFunctionalityType) = kFuncType_Common) Then
		bModuleQA = Module_QA_Available()
	End If
End Sub

Function IsSubjectGroupOrCmTeacher()
	Dim objRs
	IsSubjectGroupOrCmTeacher = False

	If objNSNET.GetSubjectGroupTeacher(nSubjectGroupId) = Clng(strUserID) Then
		IsSubjectGroupOrCmTeacher = True
		bSubjectGroupCmTeacher = True
		Exit Function
	End If

	Set objRs = objNSNET.GetClassMeetingInfo(nClassMeetingId)
	If objRs.EOF Then GenerateError obLanguage("Common","kUnexpErr")
	IsSubjectGroupOrCmTeacher = (GetSafeLng(objRs("TEACHERID"), 0) = CLng(strUserID))
	bSubjectGroupCmTeacher = IsSubjectGroupOrCmTeacher
End Function


Function IsClassChief()
	If Not bIsIupGrade Then 
		IsClassChief = objNSNET.IsClassChief(GetSafeLng(strClassID, Null), strUserId)
	Else
		IsClassChief = objNSNET.IsClassChiefForSubjectGroup(strUserId, nSubjectGroupId)
	End If
End Function

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stBackPage, "/asp/grade/EditJournal.asp")

	'Clean activity name
	Call obTokenMgr.SetData(strToken, stActName, Null)
	Call obTokenMgr.SetData(strToken, stActId, Null)
	Call obTokenMgr.SetData(strToken, stJuniorLA, Null)
End Sub

Sub Main
	Dim bLimitedJournalEditing, nJournalEditingDayLimit
	Call InitSchoolSettings(objNSNET)

	nMaxMark = arrSchoolSettings(1, kSSIndex_MaxMark)
	nMinMark = arrSchoolSettings(1, kSSIndex_MinMark)

	strTermName = objNSNET.GetTermName(nTermID)
	bRestrictAddHomeAssign = HasUserRight(arJournalEditHAOnlyOnFuture)
	bPhysicalCulture = False' objNSNET.IsPhysicalCulture(nSubjectGroupId)'Смотретит связь выбранного предмета с глобальным предметом "Физкультура", если связь есть то добавляем ти пропуска "ОСВ"

	nJournalEditingDayLimit = -1
	If Not bAll Then
		bLimitedJournalEditing = objNSNETWork.IsLimitedEditingJournalMode(strSchoolID, strUserID)
		If bLimitedJournalEditing Then 
			nJournalEditingDayLimit = objNSNETWork.GetJournalEditTimeLimit(strSchoolID)
		End If
	End If

	If bModuleQA Then
		If IsEmpty(bSubjectGroupCmTeacher) Then
			bSubjectGroupCmTeacher = IsSubjectGroupOrCmTeacher()
		End If
		bCreateTestPlanAllowed = bSubjectGroupCmTeacher 
	End If

	Set objClassMeetings = objNSNET.GetClassMeetingsForSGAndTerm(nSubjectGroupId, nTermID, NSNow(), nJournalEditingDayLimit)
End Sub

Sub onHead()
%>
<script src="<%=GetVersionedResLink("/static/dist/pages/grade/js/editJournal-bundle.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("extendSession.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("tableExt.js")%>" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/grade/css/edit-journal.css")%>">
<script><!--
var controller;

$(document).ready(function(){

	$(document.MenuForm).append(("<input type='hidden' name='ExtraActivity' value='<%=IIf(bExtraActivity, "true", "false")%>'>"));

	var container = $("#edit-journal-container");
	var classmeetings = <%=comHelper.DataSetAdapterHelper.ToJSON(objClassMeetings, Array("id", "date", "lessonId"), Array("CMID", "DAY", "LESSONID"))%>;
	classmeetings = _.map(classmeetings, function(cm){
		cm.date = new Date(cm.date);
		return cm;
	});

	var editCtx = {
		schoolYearId: appContext.yearId,
		subjectGroupId: <%=nSubjectGroupId%>,
		subjectGroupName: "<%=DB2Java(strSubjectGroupName)%>",
		termId: <%=nTermID%>,
		termName: "<%=DB2Java(strTermName)%>",
		extraActivity: <%=Bool2Js(bExtraActivity)%>
	};

	var settings = {
		markSettings: {
			maxMark: <%=nMaxMark %>,
			minMark: <%=nMinMark %>
		},
		allowAttendanceReleasedMark: <%=Bool2Js(bPhysicalCulture)%>,
		subjectPlan: {},
		editLimit: {
			limitPastEditHomeAssigns: <%=Bool2Js(bRestrictAddHomeAssign)%>
		},
		moduleQA: <%=Bool2Js(bModuleQA)%>
	};

	var classMeetingId = <%=nClassMeetingId%>;
	controller = new editJournalCtrl(container, classmeetings, editCtx, settings);
	controller.load(classMeetingId).then(function(){
		controller.display()
	});
});


function Back() {
	goBack( document.MenuForm, '<%=strBackPage%>')
}
//--></script>
<%
End Sub

Sub DrawFilters( strForm )
End Sub

Sub DrawButtons()
	%>
	<button title="<%=obLanguage("Buttons","kSave")%>" type="button" class="btn btn-primary save-journal-btn">
		<span class="glyphicon glyphicon-floppy-save"></span>
		<span><%=obLanguage("Buttons","kSave")%></span>
	</button>
	<button title="<%=obLanguage("Buttons","kSaveAndBack")%>" type="button" class="btn btn-default save-journal-with-return-btn">
		<span class="glyphicon glyphicon-floppy-save"></span>
		<span><%=obLanguage("Buttons","kSaveAndBack")%></span>
	</button>

	<button title="<%=obLanguage("Grade","kAddAssignment")%>" type="button" class="btn btn-info hide add-assign-btn">
		<span class="glyphicon glyphicon-plus-sign"></span>
		<span><%=obLanguage("Grade","kAddAssignment")%></span>
	</button>
	<button title="<%=obLanguage("Grade","kCreateHomeAssignment")%>" type="button" class="btn btn-info hide add-homeAssign-btn">
		<span class="glyphicon glyphicon-plus-sign"></span>
		<span><%=obLanguage("Grade","kCreateHomeAssignment")%></span>
	</button>
	<%
End Sub

Sub DrawLinkButtons()
	%>
	<button title="<%=obLanguage("Grade","kAddHomeAssignOnNextClassmeeting")%>" type="button" class="btn btn-info add-next-homeAssign-btn">
		<span class="glyphicon glyphicon-share-alt"></span>
		<span><%=obLanguage("Grade","kAddHomeAssignOnNextClassmeeting")%></span>
	</button>
	<%
End Sub

Sub onDrawPage()
	%>
	<div id="state-edit">
		<form name="Gradebook" method="POST">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonsFilters( True, "Gradebook" )%>
		</form>
		
		<div id="edit-journal-container"></div>

		<div id="legend">
			<%Call ShowAttendanceLegend()%>
			<div class="legend print-block">
				<div>
					<p><span class="glyphicon glyphicon-ok legend-label" style="padding: 5px 0 0 13px;"> </span><span class="legend-description"> — <%=DB2HTML(obLanguage("Grade", "kTickMarkMeans", strFunctionalityType))%></span></p>
				</div>
			</div>
		</div>
	</div>
	<%
End Sub
%>
