<!-- #INCLUDE FILE=../header1.asp -->
<!-- #INCLUDE FILE=../scripts/dateinput.asp -->
<!-- #INCLUDE FILE="../scripts/assignment.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterYears.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassMeetings.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE=../scripts/Calendar_inc.asp -->
<!-- #INCLUDE FILE=../scripts/attachments_inc.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.

Const kCMIndexCLASSMEETINGID = 1
Const kCMIndexDAY			 = 0
Const kCMIndexLESSONID		 = 2
Const kCMIndexLESSONNAME	 = 3

Dim bIsClassChief

Const kMaxAssignName = 400 ' В базе - 200, 10 - зарезервировано (урок 123?). 2011_10_31 - сделал одинаковыми, 200.

Dim strAssignmentID, bNewLAAssignment, bNewAssignment
Dim nAssignmentType, strAssignmentName, strStartDate, strDueDate, strDescription, strClassAssignment
Dim strASL, blnIsManual
Dim arASLNames, arASLParams, arASLLAID, arASLLexiles, ASLCount
Dim objAssignmentInfo, strOnLoad
Dim strActivityName, strProblemName, strParameters
Dim isEmptyProblemName
Dim strBack, bReqMark, nLessons
Dim bLimitedJournalEditing, nJournalEditingDayLimit, nFutureEditingDayLimit

Dim bNewHomeAssignment, bIsHomeAssignment, nHALessonID, bIsDKR, bConsiderDKR

Dim strActivityID
Dim bShowRecordInJournalFilter, bRecordInJournal, strRIJ
Dim bAll
Dim nWeight, bWeight
Dim strClassName, strSubjectName
Dim strTeacherID
Dim nCMID, nIssueCMID, objCMInfo, objClassMeetings
Dim bEditAss_RO ' внешний флаг RO
Dim strLA_Mode
Dim bLAMode		' эта переменная по смыслу не одинаковая с blnIsManual. Она зависит от того, откуда приходят в эту страницу,
				' она определяется и используется в hasUserRightsOnPage - в зависимости от неё права проверяются по-разному.
' А blnIsManual определяет - задание из учебного курса или нет. В общем случае strLA_Mode и blnIsManual могут не соответствовать
' друг другу (например, заход из EditJournalAssignments.asp для задания по учебному курсу).

Dim hasTestResults

Dim strJuniorLa, bIsDeleted
Dim bTKR, bDrawDKR, bModuleQaAvailable
Dim strFilesJson, strStudentListJson

Dim bExtraActivity, strEaParam, strEASGID
Dim strSubjectGroupName


Function GetPageTitle()
	Dim strPageTitle

	If Not bNewLAAssignment Then
		If readonly Then strPageTitle = obLanguage("Curriculum","kTitleView")  Else strPageTitle = obLanguage("Curriculum","kTitleEdit")
	Else
		strPageTitle = obLanguage("Curriculum","kTitleCreate")
	End If

	If blnIsManual Then
		strPageTitle = strPageTitle & " " & LCase(obLanguage("Assignment","kATAssignment"))
	Else
		strPageTitle = strPageTitle & " " & obLanguage("Curriculum","kAssignUsingLearnApp") & " <U>" & GreenText(DB2HTML(strActivityName) & IIF(bIsDeleted," "&obLanguage("LearnApp","kDeleted"),"")) & "</U>"
	End If

	GetPageTitle = strPageTitle
End Function

Function hasUserRightsOnPage()
	bEditAss_RO				= GetSafeBool(obTokenMgr.GetData(strToken, stEditAss_RO), True)
	strLA_Mode				= GetSafeID(Request("LA_Mode"), GetSafeID(obTokenMgr.GetData(strToken, stLA_Mode), "-1")) ' should be...
	bLAMode					= (strLA_Mode = "1")
	hasUserRightsOnPage		= True

	bAll = True
	' different rights for LA_Mode and not LA_Mode
	If Not bLAMode Then ' not LA_Mode
		If HasUserRight(arJournalEditAll) Then Exit Function
		If bEditAss_RO Then
			If HasUserRight(arJournalViewAll) Then Exit Function
		End If

		bAll = False
		hasUserRightsOnPage = HasUserRight(arJournalEditSelf)
	ElseIf bLAMode Then ' LA_Mode
		If bEditAss_RO Then
			If HasUserRight(arLAViewAll) Then Exit Function
		End If

		bAll = False
		hasUserRightsOnPage = HasUserRight(arLAEditSelf) Or HasUserRight(arLAViewSelf)
	End If
End Function

Sub ReadState()
	Dim arrProblemList
	Dim strCSGName, nPos
	Dim oLaRs
	Dim objRs
	Dim nSGYearID, bSGEA
	Dim arrAssignStudentList
	Dim teachersId
	Dim teacherId

	bExtraActivity = (LCase(Request("extraActivity") & "") = "true")
	If bExtraActivity Then
		strEaParam = "?extraActivity=true"
		strEASGID = GetSafeID(Request("SCLID"), Null)
	End If


	Call InitSchoolSettings(objNSNET)
	bModuleQaAvailable = Module_QA_Available()
	bDrawDKR = bModuleQaAvailable
	strTeacherID				= strUserID
	strJuniorLA					= GetSafeStr(obTokenMgr.GetData(strToken, stJuniorLA), -1, GetSafeStr(Request.Item("LAJID"), -1, ""))

	bLimitedJournalEditing		= objNSNETWork.IsLimitedEditingJournalMode()
	If bLimitedJournalEditing Then 
		nJournalEditingDayLimit = objNSNETWork.GetActualJournalEditTimeLimit(strSchoolID)
		nFutureEditingDayLimit = objNSNETWork.GetActualFutureEditTimeLimitForJournal(strSchoolID)
	End If
	If Not readonly Then readonly = bEditAss_RO
	If Request.Item("readonly").Count > 0 Then
		readonly = (Request.Item("readonly") = "1")
	End If

	bIsDeleted = False
	If GetSafeStr(obTokenMgr.GetData(strToken, stLADeleted), 1, "N")="Y" Then bIsDeleted = True
	strAssignmentID			= GetSafeID(Request.Item("AID"), GetSafeID(obTokenMgr.GetData(strToken, stCrMngmAssignmentID), "-1"))
	bNewAssignment			= (strAssignmentID = "-1")
	bNewLAAssignment		= (bNewAssignment And bLAMode)

	strASL					= Request("ASL")
	strActivityID			= ""
	If Not isDull(strASL) Then arrProblemList = Split(Trim(strASL), CHR(1))
	
	bWeight = (arrSchoolSettings(1, kSSIndex_MarksAveraging) = "1")

	If Not IsEmpty(arrProblemList) Then
		If Not IsDull(Trim(arrProblemList(2))) Then strActivityID=Trim(arrProblemList(2))
	End If
	ASLCount = 0

	' сначала надо определить флаг blnIsManual (это нужно для определения оценок: максимальной и по умолчанию)
	If strJuniorLA <> "" Then
		strActivityName = objLa.GetProductName(strJuniorLA)
		If Not bNewLAAssignment Then
			Set objAssignmentInfo = GetAssignmentInfo(CLng(strAssignmentID))
			strActivityID = GetSafeStr(objAssignmentInfo("ACTIVITYID"), 20, "")
		End If
	Else
		If Not bNewAssignment Then
			Set objAssignmentInfo	= GetAssignmentInfo(CLng(strAssignmentID))
			strActivityName			= Trim(GetSafeStr(objAssignmentInfo("ACTIVITYNAME"), 80, obLanguage("Common","kActivityName_Manual") ))
			strActivityID			= GetSafeStr(objAssignmentInfo("ACTIVITYID"), 20, kActivityID_Manual)
		Else
			strActivityName			= GetSafeStr(obTokenMgr.GetData(strToken,stActName), -1, obLanguage("Common","kActivityName_Manual"))
			strActivityId			= GetSafeStr(obTokenMgr.GetData(strToken,stActId), -1, kActivityID_Manual)
		End If
	End If
	blnIsManual = (strActivityID = kActivityID_Manual)
	' max mark
	
	If Not bNewAssignment Then
		nCMID					= GetSafeLng(objAssignmentInfo("CLASSMEETINGID"),0)
		nIssueCMID				= GetSafeLng(objAssignmentInfo("ISSUECMID"),0)
		strAssignmentName		= Trim(GetSafeStr(objAssignmentInfo("ASSIGNMENTNAME"), kMaxAssignName, "" ))
		nAssignmentType			= GetSafeLng(Request("AType"), GetSafeLng(objAssignmentInfo("TYPEID"), Null) )
		bIsDKR					= (nAssignmentType = PreDefinedAssignmentType_DKR)
		bIsHomeAssignment		= (nAssignmentType = PreDefinedAssignmentType_HomeWork)
		strClassAssignment		= GetSafeID(objAssignmentInfo("CLASSASSIGNMENT"), "1")
		bReqMark				= GetSafeStr(Request("ReqMark"), 1, IIF(strClassAssignment = "0", "1", "0")) = "1"

		If IsDull(objAssignmentInfo("CM_DAY")) Then
			strStartDate	= Date2Str(objAssignmentInfo("STARTDATE"))
			strDueDate		= Date2Str(objAssignmentInfo("DUEDATE"))
		Else
			strStartDate	= Date2Str(objAssignmentInfo("CM_DAY"))
			strDueDate		= Date2Str(objAssignmentInfo("CM_DAY"))
		End If

		strDescription		= Trim(GetSafeStr(Request("AD"),2000, GetSafeStr(objAssignmentInfo("DESCRIPTION"), 2000, "")))
		strProblemName		= GetSafeStr(objAssignmentInfo("PROBLEMNAME"), 200, "" )
		strParameters		= GetSafeStr(objAssignmentInfo("PROBLEMPARAMETERS"), 4000, "" )

		If bWeight Then nWeight = GetSafeLng(objAssignmentInfo("WEIGHT"), -1)
	Else
		nCMID				= GetSafeLng(Request("CMID"), 0)
		nIssueCMID			= GetSafeLng(Request("ISSUECMID"),0)
		nAssignmentType		= GetSafeLng(Request("AType"), 0)
		bIsDKR				= (nAssignmentType = PreDefinedAssignmentType_DKR)
		bIsHomeAssignment	= (nAssignmentType = PreDefinedAssignmentType_HomeWork)
		bNewHomeAssignment	= bIsHomeAssignment
		bReqMark = GetSafeStr(Request("ReqMark"), 1, "0" ) = "1"
		strAssignmentName	= ""
		nWeight				= objNSNET.GetDefaultWeightForAssignment(strSchoolID, nAssignmentType)

		If bNewLAAssignment Then
			strStartDate	= Date2Str(Now)
			strDueDate		= strStartDate
		Else
			'Set objCMInfo	= objNSNET.GetClassMeetingInfo(nCMID)
			'strStartDate	= Date2Str(objCMInfo("DAY"))
			'strDueDate		= strStartDate
		End If

		strDescription		= Trim(GetSafeStr(Request("AD"), 2000, ""))
	End If

	bTKR = (nAssignmentType = PreDefinedAssignmentType_TKR)

	
	If bExtraActivity Then
	
		strSubjClassID = strEASGID

	Else

		If bAll Then
			Call InitYearClasses_IUP()
			Call InitSubjectGroups_IUP()
		Else
			Call InitTeacherClasses_IUP(False)
			If bIsIupGrade Then
				bIsClassChief = objNSNET.IsClassChiefForSubjectGroup(strUserId, Request("SCLID")) 
			Else
				bIsClassChief = objNSNET.IsClassChief(strClassID, strUserId)
			End If

			If bIsClassChief Then
				Call InitSubjectGroups_IUP()
			Else
				If Not bLAMode Then ' not LA_Mode
					Call InitTeacherSubjectGroups_Ex_IUP(strUserID)
				Else ' LA_Mode
					Call InitTeacherSubjectGroups_IUP(strUserID)
				End If

				If strSubjClassID <> "0" And Not readonly Then
					' limits editing rights for substitute only
					Set teachersId = objNSNET.GetSubjectGroupTeachers(strSubjClassID)
					readonly = True
					For Each teacherId in teachersId
						If teacherId = Clng(strUserID) Then
							readonly = False
						End If
					Next
						If readonly Then
							If GetSafeBool(Request("CL_OR_SUBJ_CHANGE"), False) Then
								GenerateError obLanguage("Curriculum", "kYouCantEditThisClass", strFunctionalityType)
							End If
						End If
				End If
			End If
		End If

	End If

	strBack = GetSafeStr( Request.Item("BACK"), 200, GetSafeStr(obTokenMgr.GetData(strToken,stBackPage),200,"") )
	If IsDull(strBack) Then
		If blnIsManual or Not bNewLAAssignment Then strBack = "/angular/school/journal/assignments/" Else strBack = "/angular/school/activities"
	End If
	
	RedirectOnAngularPage

	If strSubjClassID <> "0" Then
		Set objRs		= objNSNET.GetSubjectGroupInfo(strSubjClassID)
		strSubjectName	= GetSafeStr(objRs("SUBJECTNAME"), -1, Null)
		strSubjectID	= GetSafeLng(objRs("SUBJECTID"), Null)
		strSubjectGroupName = GetSafeStr(objRs("NAME"), -1, "")

		strClassName = ""

		If bExtraActivity Then
			' Небольшая валидация
			nSGYearID = GetSafeLng(objRs("SCHOOLYEARID"), Null)
			bSGEA = GetSafeBool(objRs("EXTRACURRICULAR"), False)

			If nSGYearID <> CLng(strCurrYearID) Or Not bSGEA Then
				'GenerateError obLanguage("Common","kErrPageAccess")
				Call onAccessError()
			End If

		Else
			If bIsIupGrade Then 
				strClassName = strIupGrade & "*"
			Else
				Set objRs = objNSNET.GetClassSubjectGroupInfo(strSubjClassID)
				strClassName = GetSafeStr(objRs("CLASSNAME"), -1, Null)
			End If
		End If

	Else
		If bIsIupGrade Then
			strClassName = strIupGrade & "*"
		Else
			strClassName = objNSNET.GetClassName(strClassID)
		End If

		strSubjectName = objNSNET.GetSubjectName(strSubjectID)
	End If

	strRIJ = CStr(Request("RIJ"))

	isEmptyProblemName = IsEmpty(Request("PROBLEMNAME"))
	If GetSafeBool(Request("CL_OR_SUBJ_CHANGE"), False) Then nCMID = 0

	If Request("SaveForm") = "1" Then 'Reload data from form
		nAssignmentType			= GetSafeLng(Request("AType"), nAssignmentType)
		bIsHomeAssignment		= (nAssignmentType = PreDefinedAssignmentType_HomeWork)
		bIsDKR					= (nAssignmentType = PreDefinedAssignmentType_DKR)
		strAssignmentName		= GetSafeStr(Request("AN"), kMaxAssignName, strAssignmentName)
		strDescription			= GetSafeStr(Request("AD"), 2000, strDescription)
		bReqMark				= GetSafeStr(Request("ReqMark"), 1, "0") = "1"
		strStartDate			= GetSafeStr(Request("ADT"), 10, strStartDate)
		strDueDate				= GetSafeStr(Request("DDT"), 10, strDueDate)
		strADescription			= GetSafeStr(Request("ADESC"), 4000, strADescription)
	End If
	bExit = False

	If blnIsManual Then
		bShowRecordInJournalFilter = False
		bRecordInJournal = True
	Else
		bShowRecordInJournalFilter = True

		If strRIJ = "1" Then
			bRecordInJournal = True
		ElseIf strRIJ = "0" Then
			bRecordInJournal = False
		Else
			bRecordInJournal = (nCMID > 0)
		End If
	End If

	strStudentListJson = "[]"
	If Not bNewAssignment And strClassAssignment = "0" Then
		'получение списка должников
		Set arrAssignStudentList = objNSNET.GetStudentListForAssignment(strSubjClassID, nAssignmentType, CLng(strAssignmentID))
		strStudentListJson = comHelper.JsonHelper.SerializeObject(arrAssignStudentList)
	End If
	
	strFilesJson = ""
	If Not bNewAssignment Then
		Dim result, oAttachmentsComponent

		Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")

		Set result = oAttachmentsComponent.GetFileAttachmentInfoAssignment(strAssignmentID)
		strFilesJson = ConvertJsonObject2Str(result)
	End If

	If bIsDKR Then
		dim preConsider 
		preConsider = objAssignmentInfo("CONSIDERDKR")
		bConsiderDKR = IsNull(preConsider) or preConsider
	End If

	hasTestResults = objNSNET.CheckExistsTestResults(strAssignmentID)
End Sub

Sub RedirectOnAngularPage()
	Dim arrParams
	Dim strFixedActivityId

	If strJuniorLA <> "" Then
		strFixedActivityId = "courses"
	Else
		strFixedActivityId = strActivityID
	End If

	If strAssignmentID > 0 Then
		arrParams = Array()
	Else
		arrParams = Array("sgId", strSubjClassID, "activityId", strFixedActivityId)
	End If

	If InStr(LCase(strBack), "laassignments.asp" ) Then
		Call comHelper.ArrayHelper.AppendArray(arrParams, Array("back", "laassignments"))
	ElseIf InStr(LCase(strBack), "/angular/school/activities" ) Then
		Call comHelper.ArrayHelper.AppendArray(arrParams, Array("back", "activities"))
	End If

	If Not IsDull(strAsl) Then
		Call comHelper.ArrayHelper.AppendArray(arrParams, Array("asl", Server.URLEncode(strASL)))
	End If

	RedirectTo "/angular/school/journal/assignments/" & strAssignmentID & "?", arrParams
End Sub

Sub WriteState()
	Dim t1, t2, item

	If not readonly Then
		WriteClass_IUP
		Call obTokenMgr.SetData(strToken, stCurrSubjClass, strSubjClassID)
		Call obTokenMgr.SetData(strToken, stBackPage, strBack)

		If Not bExit Then
			Call obTokenMgr.SetData(strToken, stCrMngmCMID, nCMID)
			Call obTokenMgr.SetData(strToken, stCrMngmAssignmentID, strAssignmentID)
		End If
	End If

	Call obTokenMgr.SetData(strToken, stLA_Mode, strLA_Mode)
	Call obTokenMgr.SetData(strToken, stActName, strActivityName)
	Call obTokenMgr.SetData(strToken, stActId, strActivityID)
	' передача внешнего состояния для экрана Journal.asp
	Call obTokenMgr.SetData(strToken, stJournalStateId, "edit-assignment")
End Sub

Sub Main()
	Dim strClause, objRs

	nLessons = 0
	Call InitAssignmentTypesHelper()

	If bNewLAAssignment Then  'New assignment
		Dim arASLNamesInt(), arASLParamsInt(), arASLLAIDInt(), arASLLexilesInt()

		If Not strASL = "" Then
			Dim fp, lp

			ASLCount = 0
			fp = 1 : lp = 1

			Do
				ASLCount = ASLCount + 1
				ReDim Preserve arASLNamesInt(ASLCount), arASLParamsInt(ASLCount), arASLLAIDInt(ASLCount), arASLLexilesInt(ASLCount)
				lp = InStr(fp,strAsl,CHR(1))
				arASLNamesInt(ASLCount) = mid(strASL,fp,lp-fp)
				fp = lp + 1
				lp = InStr(fp,strAsl,CHR(1))
				arASLParamsInt(ASLCount) = mid(strASL,fp,lp-fp)
				fp = lp + 1
				lp = InStr(fp,strAsl,CHR(1))
				arASLLAIDInt(ASLCount) = mid(strASL,fp,lp-fp)
				fp = lp + 1
				lp = InStr(fp,strAsl,CHR(1))
				If lp<fp Then lp = len(strASL)
				arASLLexilesInt(ASLCount) = mid(strASL,fp,lp-fp)
				fp = lp + 1
			Loop While fp < len(strASL)

			arASLNames = arASLNamesInt
			arASLParams = arASLParamsInt
			arASLLAID = arASLLAIDInt
			arASLLexiles = arASLLexilesInt
		End If
	End If 'strAssignmentID

	If strSubjClassID = "0" Then Exit Sub

	Call InitYearInfo()
		
	Set objClassMeetings = objNSNET.GetClassMeetingsForCSG(strSubjClassID, dtYearStart, dtYearEnd, IIf(bTKR, nCMID, "0"), False, False, False)
	If Not bIsHomeAssignment Then
		If objClassMeetings.EOF Then
			nCMID = 0
			bExit = True ' ClassMeetings does not exist
		Else
			nLessons = objClassMeetings.RecordCount
		End If
	End If

	If nCMID > 0 Then 
		Set objCMInfo = objNSNET.GetClassMeetingInfo(nCMID)
		If bNewAssignment And Not bNewLAAssignment Then
			'при создании "обычных" заданий устанавливаем им даты согласно дню задания
			strStartDate	= Date2Str(objCMInfo("DAY"))
			strDueDate		= strStartDate
		End If
	End If

	If bExit Then Exit Sub
	If (Not blnIsManual) And (Not readonly) Then strOnLoad = "ParseASL();"
End Sub

Function onLoad()
	onLoad = strOnLoad
End Function

Function onUnload()
	If Not bExit And Not readonly Then
		onUnload = "closeProblemView()"
	Else
		onUnload = ""
	End If
End Function

Sub onHead()
Call scriptCalendar("AssignmentEdit", dtYearStart, dtYearEnd)%>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/file-attachments.min.css")%>">

<script src="<%=GetVersionedResLink("/static/dist/pages/grade/js/editAssignments.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("fileAttachmentCtrl.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>

<script><!--
<%Call DrawAttachmentsScripts()%>

var lessons = <%=comHelper.DataSetAdapterHelper.ToJSON(objClassMeetings, Array("cmid", "lessonId", "day"), Array("CMID", "LID", "DAY"))%>;


<%objClassMeetings.MoveFirst() %>

controlEditAssignments.isHomeAssignment = <%=Bool2JS(bIsHomeAssignment)%>;
controlEditAssignments.readonly = <%=Bool2JS(readonly)%>;
controlEditAssignments.assignmentId = <%=strAssignmentID%>;
controlEditAssignments.classAssignment = <%=Bool2JS(strClassAssignment = "1")%>;
controlEditAssignments.CMId = <%=nCMID%>;
controlEditAssignments.sgId = <%=strSubjClassID%>;
controlEditAssignments.studentList = <%=strStudentListJson%>;
controlEditAssignments.cms = lessons;
controlEditAssignments.hasTestResults = <%=Bool2JS(hasTestResults) %>;

var blnIsManual = <%=IIF(blnIsManual, "true", "false")%>;
var fileAttachmentCtrl;

$(document).ready(function() {

	<%If bNewAssignment Then %>
	var cmId = $("[name=CMID]").val();

	if (cmId){
		syncAssignDates(cmId);
	}
	<%End If %>

	fileAttachmentCtrl = new FileAttachmentCtrl({
			multiple: true,
			showDescription: true,
			readonly: <%=Bool2JS(readonly)%>,
			block: $('#attachFiles')
		}, {
			wasChanged: true,
			context: {
				AssignmentId: <%=GetSafeLng(strAssignmentID, 0)%>
			}
			<%If Not IsDull(strFilesJson) Then%>,
				files: <%=strFilesJson%>
			<%End If%>
		}
	);

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip();
	});
});

function changeRecordInJournal() {
	var value = $('select[name="RIJ"] option:selected').val();
	
	if (value == '1') {
		$('select[name="CMID"]').parent().parent().show();
		$('input[name="Weight"]').parent().parent().show();
		
		$('#dates').hide();
		$('#readonly-dates').show();
	}
	else {
		$('select[name="CMID"]').parent().parent().hide();
		$('input[name="Weight"]').parent().parent().hide();

		$('#dates').show();
		$('#readonly-dates').hide();
	}
}

function Back() {
	<%If IsDull(strBACK) Then	%>
		goBack(document.MenuForm, "/angular/school/activities");
	<%Else%>
		goBack(document.MenuForm, "<%=strBACK%>");
	<%End If%>
}
//--></script>

<%If bExit Or (strSubjClassID = "0") Or readonly Then Exit Sub%>

<script><!--
var wndProblemView = null;

var dtStartYDate = null;
var dtEndYDate = null;
dtStartYDate = <%=Date2Js(dtYearStart)%>;
dtEndYDate = <%=Date2Js(dtYearEnd)%>;

function closeProblemView() {
	if(wndProblemView && !wndProblemView.closed)
		wndProblemView.close();
}

var considerDkrValue = Boolean(<%=CInt(bConsiderDKR)%>);
	
function checkConsidersDkr(element){
	var condition = element.value == "-1_-1";
	var additionCondition = 
		$("#blockConiderDKR").children("div.form-group")[1].hidden == !condition;

	$("#blockConiderDKR").children("div.form-group")[1].hidden = !condition;

	var considerDkr = $("[name='CONSIDERDKR']")[0];
	// Save last result
	if(!additionCondition){
		if(condition)
		{
			considerDkr.checked = considerDkrValue;
		}
		else
		{
			considerDkrValue = considerDkr.checked;
			considerDkr.checked = false;
		}
	}
}

function Disable(element){
	element.prop("disabled",true);
}

function showConsiderDKR(elem) {
	var condition = elem.value == <%=PreDefinedAssignmentType_DKR%>;
	$("#blockConiderDKR").trigger(condition ? "show" : "hide");
}

$(document).ready(function(){
	<%if hasTestResults Then%>
		Disable($("[name='DiagnosticWork']"));
		Disable($("[name='AType']"));
	<%end if%>

	$(document.MenuForm).append(("<input type='hidden' name='CMID' value='<%=nCMID %>'>"));
	$(document.MenuForm).append(("<input type='hidden' name='ExtraActivity' value='<%=IIf(bExtraActivity, "true", "false")%>'>"));

	$("[name='CONSIDERDKR']").prop("checked", considerDkrValue);
});

<%  If Not blnIsManual Then
	'	firstDate < secondDate -> -1
	'	firstDate = secondDate ->  0
	'	firstDate > secondDate ->  1
%>
	function compareDate(firstDate, secondDate) {
		if (firstDate.getFullYear() < secondDate.getFullYear())
			return -1;
		if (firstDate.getFullYear() > secondDate.getFullYear())
			return 1;
		if (firstDate.getMonth() < secondDate.getMonth())
			return -1;
		if (firstDate.getMonth() > secondDate.getMonth())
			return 1;
		if (firstDate.getDate() < secondDate.getDate())
			return -1;
		if (firstDate.getDate() > secondDate.getDate())
			return 1;
		return 0;
	}

	<%If Not bNewLAAssignment Then%>
		function openProblem() {
			closeProblemView();

			var params = { TF: "AssignmentEdit", AURL: "<%=DB2Value(objAssignmentInfo("PROBLEMURL"))%>", TTSURL: "<%=DB2Value(GetTTSURL())%>" };
			<%If strJuniorLA <> "" Then%>
				params.LAID = '<%=strJuniorLA%>';
			<%End If%>
			var url = urlHelper.makeUrl("/asp/Curriculum/ViewActivityProxy.asp", params);
			var winOptions = {url: url, name: '_blank', specs: 'status=yes, toolbar=yes, menubar=yes, location=no, scrollbars=yes, resizable=yes, directories=no, width=750, height=560', winChild: wndProblemView}
			windowOpen( winOptions );
			wndProblemView = winOptions.winChild;
			center(wndProblemView, 750, 560);
		}
	<%End If%>

	var jarrHoliDays = new Array();
	var jarrVacations = new Array();

	<%Dim j, dt
		j = 0
		arrHoliDays = InitDays(kHoliday, dtYearStart, dtYearEnd)

		If IsArray(arrHoliDays) Then
			For posH = 0 To Ubound(arrHoliDays, 2)
				dt = arrHoliDays( 0, posH )%>jarrHoliDays[<%=j%>]= <%=Date2Js(dt)%>;<%
				j = j + 1
				dt = arrHoliDays( 1, posH )%>jarrHoliDays[<%=j%>]= <%=Date2Js(dt)%>;<%
				j = j + 1
			Next
		End If%>
	var nHoliDays = <%=j%>;<%
		j = 0
		arrVacations = InitSgVacations( strSubjClassID, dtYearStart, dtYearEnd)
		If IsArray( arrVacations ) Then
			For posV = 0 To Ubound( arrVacations, 2 )
				dt = arrVacations( 0, posV )%>jarrVacations[<%=j%>]=<%=Date2Js(dt)%>;<%
				j = j + 1
				dt = arrVacations( 1, posV )%>jarrVacations[<%=j%>]=<%=Date2Js(dt)%>;<%
				j = j + 1
			Next
		End If%>
	var nVacations = <%=j%>;
<%End If%>

function canSubmitForm() {
	var confirms = new Array();
	var form = document.AssignmentEdit;

	var $weight = $('input[name="Weight"]');
	if($weight.length && !$weight.is(":hidden")) {
		var weight = $weight.val();
		var isValid = false;

		if(weight) {
			isValid = !/\D/g.test(weight);

			if(isValid) {
				weight = +weight;

				isValid = !(weight < <%=kMarksWeightMin%> || weight > <%=kMarksWeightMax%>);
			}
		}

		if(!isValid) {
			focusAlert($weight, language.Generic.SchoolSettings.kInputIntegerInRange + ' [<%=kMarksWeightMin%> ; <%=kMarksWeightMax%>]');
			return;
		}
	}

	if ($('select[name="CMID"]').length) {
		if(trimStr($('select[name="CMID"]').val()) == "-1" && $('select[name="CMID"]').parent().parent().css('display') != 'none') {
			alert(language.Generic.Curriculum.kChooseClassMeetingDay);
			return false;
		}
	}

	<%If Not bTKR Then%>
		if ($('select[name=AType]').length) {
			if( trimStr($('select[name=AType]')[0].value) == "0") {
				alert(language.Generic.Assignment.kATPleaseSelectAssignmentType);
				return false;
			}
		}
	<%End If%>

	if (trimStr(form.AN.value) == "") {
		alert( "<%=IIF(bIsHomeAssignment,obLanguage("Assignment","kATEnterHomeAssignmentTheme"),obLanguage("Assignment","kATEnterAssignmentTheme"))%>" );
		form.AN.focus();
		return false;
	}

	var an = trimStr(form.AN.value);
	if (an.length > <%=kMaxAssignName%>) {
		alert(language.Generic.Assignment.kATAssignmentThemeNotMayBe);
		form.AN.focus();
		return false;
	}

	var recordInJournal = $('select[name="RIJ"]').val() == 1;
	var cmId = parseInt($('select[name="CMID"]').val());

	if (recordInJournal) {
		<%If nLessons > 0 Then%>
			
			var cmInfo = _.findWhere(lessons, {cmid: cmId});
			$('input[name=ADT]').val(cmInfo.day);
			$('input[name=DDT]').val(cmInfo.day);
		<%Else%>
			var val = $('select[name=CMID] option:selected').text();

			$('input[name=ADT]').val(val);
			$('input[name=DDT]').val(val);
		<%End If%>
	}

	<%If Not blnIsManual Then %>
		if(!recordInJournal) {
			var adt = $('input[name="ADT"]:not(:disabled)');
			var ddt = $('input[name="DDT"]:not(:disabled)');
			var startDate = str2date(adt.val()), dueDate = str2date(ddt.val());

			if(startDate == null) {
				focusAlert(adt, language.Generic.Common.kErrInvalidStartDate);
				return false;
			}

			if(dueDate == null) {
				focusAlert(ddt, language.Generic.Curriculum.kErrorBadDueDate);
				return false;
			}

			if(compareDate(startDate, dueDate) == 1) {
				focusAlert(ddt, language.Generic.Curriculum.kErrorStartDateGTDueDate);
				return false;
			}

			if(startDate < dtStartYDate || startDate > dtEndYDate) {
				focusAlert(adt, language.Generic.Curriculum.kErrorStartDateGTDateYear + "<%=( " " & Date2Str(dtYearStart) & " " & obLanguage("Curriculum","kAnd") & " " & Date2Str(dtYearEnd))%>");
				return false;
			}

			if(dueDate < dtStartYDate || dueDate > dtEndYDate) {
				focusAlert(ddt, language.Generic.Curriculum.kErrorDueDateGTDateYear + "<%=( " " & Date2Str(dtYearStart) & " " & obLanguage("Curriculum","kAnd") & " " & Date2Str(dtYearEnd))%>");
				return false;
			}

			<%	' NoSchoolDays divides on 3 part now
			' 1 - WeekEnd
			' 2 - Holidays
			' 3 - Vacations
			%>
			if((Math.pow(2, dueDate.getDay()) & <%=nWeekEndSet%>) != 0)
				confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.Curriculum.kYourAssignmentOnWeekEnd), function(){}, function(){form.DDT.focus();}));

			for (var j = 0; j < nVacations; j += 2) {
				if(jarrVacations[j] <= dueDate && dueDate <= jarrVacations[j+1]) {
					confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.Curriculum.kYourAssignmentOnVacations), function(){}, function(){form.DDT.focus();}));
					break;
				}
			}

			for (var j = 0; j < nHoliDays; j += 2) {
				if (jarrHoliDays[j] <= dueDate && dueDate <= jarrHoliDays[j+1]) {
					confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.Curriculum.kYourAssignmentOnHoliday), function(){}, function(){form.DDT.focus();}));
					break;
				}
			}
		}
	<%End IF%>

	if(form.AD.value.length > 1800) {
		focusAlert(form.AD, language.Curriculum.kStudentDescrLimit);
		return false;
	}

	<%If Not blnIsManual And bNewLAAssignment Then%>
		var i;
		var listElement = form.PID;

		if(listElement.type != 'hidden') {
			var assignText = "";

			for(i = 0; i < listElement.options.length; i++) {
				if(listElement.options[i].value > 0) {
					assignText += listElement.options[i].text + "\001";
					assignText += arrCustomParam[i] + "\001";
					assignText += arrLAID[i] + "\001";
					assignText += arrLexile[i] + "\001";
				}
			}

			if(assignText == "") {
				alert(language.Generic.Curriculum.kNoElementsInAssignment);
				return false;
			}

			form.ASL.value = assignText;
		}
	<%End If%>

	var bReqMark = $('select[name="ReqMark"]').val() == "1";

	if(bReqMark) {
		var bAllStudents = $('input[name="all_students"]').val() == "1";
		var _existStudents = $('input[name="students"]').val() != "";

		if(!bAllStudents && !_existStudents) {
			alert(language.Generic.Curriculum.kAtLeastOneStudentMustBeSelected + language.Common.kStudent.toLowerCase());
			return false;
		}
	}

	document.AssignmentEdit.CL_OR_SUBJ_CHANGE.value = "0";

	return confirms;
}

function saveAssignment() {
	var defArgs = new Array();
	if(isDBBusy()) return false;

	var form = document.AssignmentEdit;

	form.DESTINATION.value = '/asp/Curriculum/SaveAssignment.asp';
	<%If bIsHomeAssignment Then%>
		if(typeof(controlEditAssignments.lessonInfo) !== 'undefined' && controlEditAssignments.lessonInfo.relatedSgCount > 1 && controlEditAssignments.bChangeKTP) {
			defArgs = $.show.getConfirmation(language.Generic.Assignment.KHomeAssignmentWillBeSave4AllClasses.replace('{0}', controlEditAssignments.lessonInfo.relatedSgCount));
		}
	<%End If%>

	extDeferred.when(defArgs).then(
		function() {
			extDeferred.when(canSubmitForm).then(function() {
				setDBBusy();
				$("select:disabled", document.AssignmentEdit).prop("disabled", false);
				fileAttachmentCtrl.appendInputToForm(document.forms['AssignmentEdit']);
				DoSubmit(form, "/asp/Curriculum/SaveAssignment.asp");
			});
		}
	);
}

<%If Not blnIsManual Then%>
	var id = 0;
	var arrCustomParam = new Array();
	var arrLAID = new Array();
	var arrLexile = new Array();

	function ParseASL() {
		var listForm = document.AssignmentEdit;

		if(listForm) {
			var listElement = listForm.PID;

			if(listElement && listElement.type != 'hidden') {
				var i;
				var item;

				if (typeof(listForm.ANAME.length) == 'undefined') {
					item = new Option(listForm.ANAME.value, ++id);
					arrCustomParam[listElement.options.length] = listForm.APARAM.value;
					arrLAID[listElement.options.length] = listForm.LAID.value;
					arrLexile[listElement.options.length] = listForm.ALexile.value;

					listElement.options[listElement.options.length]= item;
				}
				else {
					for (i = 0; i < listForm.ANAME.length; i++) {
						item												= new Option(listForm.ANAME[i].value, ++id);
						arrCustomParam[listElement.options.length]			= listForm.APARAM[i].value;
						arrLAID[listElement.options.length]					= listForm.LAID[i].value;
						arrLexile[listElement.options.length]				= listForm.ALexile[i].value;
						listElement.options[listElement.options.length]		= item;
					}
				}
			}
		}
	}

<%End If%>

function viewLessonDetails(cmElemName) {
	var form = document.AssignmentEdit;

	var cmId = parseInt($(form[cmElemName]).val());

	if(cmId <= 0) {
		alert(language.Generic.Curriculum.kChooseClassMeetingDay);
		return;
	}

	var cmInfo = _.findWhere(lessons, {cmid: cmId});
	var lessonId = cmInfo.lessonId;

	if(!lessonId) {
		//разобраться в сообщениях
		if(arguments.length) {
			alert(language.Generic.Curriculum.kNoLessonInJournal0 + ' ' + language.Generic.Curriculum.kNoLessonInJournal2);
			return;
		}
		alert(language.Curriculum.kNoLessonInJournal1 + ' ' + getListText(form.CMID) + ' ' + language.Generic.Curriculum.kNoLessonInJournal2);
		return;
	}

	jsSubmit({
		action: '/asp/ajax/GetFullLessonInfo.asp',
		data: {
			lessonId: lessonId
		},
		showProcessing: true,
		onSuccess: function(response) {
			var source =	'<form name="FullLessonInfo" class="form-horizontal form-xs">' + 
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Curriculum.kLesTheme + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{lessonData.lessonName}}">' + 
									'</div>' +
								'</div>' +
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Generic.Curriculum.kUnit + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{unitData.unitName}}">' + 
									'</div>' +
								'</div>' +
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Generic.Common.kSubject + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{unitData.subjectName}}/{{unitData.grade}} ' + language.Curriculum.kClassSmall + '/{{unitData.variantName}}">' + 
									'</div>' +
								'</div>' +
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Curriculum.kNumLessonInUnit + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{lessonData.nLessonInUnit}}">' + 
									'</div>' +
								'</div>' +
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Generic.Curriculum.kDescription + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{lessonData.description}}">' + 
									'</div>' +
								'</div>' +
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Generic.Curriculum.kBookRef + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{lessonData.bookRef}}">' + 
									'</div>' +
								'</div>' +
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Generic.Curriculum.kLessonHomework + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{lessonData.homeAssignment}}">' + 
									'</div>' +
								'</div>' +
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Curriculum.kLessonDetails + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{lessonData.lessonDetails}}">' + 
									'</div>' +
								'</div>' +
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Generic.Curriculum.kCodeElementContent + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{lessonData.codeContentElements}}">' + 
									'</div>' +
								'</div>' +
								'<div class="form-group">' + 
									'<label class="control-label col-md-4 col-sm-4">' + language.Generic.Curriculum.kElementContent + '</label>' + 
									'<div class="col-md-8 col-sm-8">' +
										'<input class="form-control" type="text" disabled="disabled" value="{{lessonData.contentElements}}">' + 
									'</div>' +
								'</div>' +
								'{{#if filesData}}' + 
									'<div class="form-group">' + 
										'<label class="control-label col-md-4 col-sm-4">' + language.Generic.Common.kAttachedFiles + '</label>' + 
										'<div class="col-md-8 col-sm-8">' +
											'<div class="file-attachment-block multiple">' +
												'{{#each filesData}}' +
													'<div class="file-attachment" onclick="FileAttachmentCtrl.openAttachment(\'{{FileName}}\', {{FileAttachmentId}});" title="{{FileName}} {{#if Description}}{{Description}}{{/if}}">' + 
														'<span class="file-name">{{FileName}}</span>' + 
														'{{#if Description}} <span class="file-description">{{Description}}</span>{{/if}}' + 
													'</div>' +
												'{{/each}}' +
											'</div>' +
										'</div>' +
									'</div>' +
								'{{/if}}' + 
							'</form>';

			var model = {
				lessonData: response.data.lessonData[0],
				unitData: response.data.unitData[0]
			};

			if(response.data.filesData && response.data.filesData.length) {
				model.filesData = response.data.filesData;
			}

			var template = Handlebars.compile(source);
			var message = template(model);

			$.show.dialog({
				size: BootstrapDialog.SIZE_WIDE,
				title: language.Curriculum.kTitleLessonView,
				message: message
			});
		}
	});
}

function syncAssignDates(cmId) {
	cmId = parseInt(cmId);
	var cmInfo = _.findWhere(lessons, {cmid: cmId});

	if(cmInfo){
		var cmDay = new Date(cmInfo.day);
		$('input[name="ADT"]').val(dateUtils.date2str(cmDay));
		$('input[name="DDT"]').val(dateUtils.date2str(cmDay));
	}
}

function lessonChanged() {
	dataChanged();
	var form	= document.AssignmentEdit;
	var el		= form.CMID;
	var assn	= form.AN;

	var ind		= $("[name=CMID]").prop("selectedIndex");

	if (ind == 0) {
		assn.value = "";
		return;
	}

	var cmId = $("[name=CMID]").val();
	if (cmId){
		syncAssignDates(cmId);
	}
}
//--></script><%
End Sub

Sub DrawButtons()
	Call ButtonSave("saveAssignment()", obLanguage("Common", "kSave"))
End Sub

Sub onDrawPage()
	Dim i

	If Not Response.IsClientConnected() Then Response.End
	
	If Not bExit And (strSubjClassID <> "0") Then
		If Not readonly Then
			Call DrawButtonPanel()
		End If
	Else
		Call DrawInfo(obLanguage("Curriculum", "kNoClassMeetingsForSubjClass", strFunctionalityType), False)
	End If%>

	<div class="row">
		<div class="col-md-9">
			<form NAME="AssignmentEdit" class="form-horizontal form-sm" METHOD="post" ACTION="/asp/Curriculum/SaveAssignment.asp" OnSubmit="return canSubmitForm();">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("AID",strAssignmentID, "DESTINATION",""))%>
				<%=WriteHiddenTags(Array("ExtraActivity", IIf(bExtraActivity, "true", "false")))%>
				<%=WriteHiddenTags(Array("MN",CStr(blnIsManual), "ASL",strASL, "CL_OR_SUBJ_CHANGE","0", "CLASSNAME", DB2Value(strClassName), "SUBJNAME",DB2Value(strSubjectName)))%><%
				If blnIsManual Then	rw WriteHiddenTags(Array("ADT", strStartDate, "DDT", strDueDate))
	
				If Not bNewAssignment Then
					If isEmptyProblemName Then%>
						<%=WriteHiddenTags(Array("EDITABLE", "Y", "PROBLEMNAME",DB2Value(objAssignmentInfo("PROBLEMNAME")), "PARAMETERS",DB2Value(objAssignmentInfo("PROBLEMPARAMETERS"))))%><%
					Else%>
						<%=WriteHiddenTags(Array("EDITABLE", "Y", "PROBLEMNAME",strProblemName, "PARAMETERS",strParameters))%><%
					End If
				End If
	
				If bIsHomeAssignment Then Response.Write WriteHiddenTags(Array("AType", PreDefinedAssignmentType_HomeWork))

				For i = 1 To ASLCount%>
					<%=WriteHiddenTags(Array("ANAME",arASLNames(i), "APARAM",arASLParams(i), "LAID",arASLLAID(i), "ALexile",arASLLexiles(i)))%><%
				Next
					
				If Not bExit And strSubjClassID <> "0" And (Not bRecordInJournal Or nLessons > 0 Or bIsHomeAssignment) Then
					Call DrawFilters()
					Call DrawEditForm()
				End If

				If Not readonly Then
					rw WriteHiddenTags(Array("SaveForm", 1))
				End If%>
			</form>
		</div>
	</div><%
End Sub

Sub DrawFilters()
	Dim strText

	If strSubjClassID = "0" Then
		If not readonly Then
			Call DrawYearClasses_IUP("AssignmentEdit", False, IIf(bAll, obLanguage("Filter", "kNoYearClasses", strFunctionalityType), obLanguage("Filter", "kYouNotChiefAndHasNoSubj", strFunctionalityType)))
		Else
			Call DrawReadonlyRow(obLanguage("Filter", "kClassGB", strFunctionalityType), strClassName)
		End If
		Call DrawInfo(obLanguage("Filter", "kNoClassSubjectsGB", strFunctionalityType), False)
		Exit Sub
	End If

	If bExtraActivity Then
		Call DrawReadonlyRow(obLanguage("Filter", "kEAGroup"), strSubjectGroupName)
	Else
		Call DrawReadonlyRow(obLanguage("Filter", "kClassGB", strFunctionalityType), strClassName)
		Call DrawReadonlyRow(obLanguage("Filter", "kCourseGB"), strSubjectName)
	End If

	If bShowRecordInJournalFilter Then
		If not readonly Then
			Call DrawSimpleFilterRow(obLanguage("Curriculum","kRecordInJournal"), "RIJ", Array(0, obLanguage("Curriculum","kNotIncludeInJournal",strFunctionalityType), 1, obLanguage("Curriculum","kIncludeInJournal",strFunctionalityType)), IIF(bRecordInJournal, 1, 0), False, "changeRecordInJournal()")
		Else
			Call DrawReadonlyRow(obLanguage("Curriculum", "kRecordInJournal"), IIf(bRecordInJournal, obLanguage("Curriculum", "kIncludeInJournal", strFunctionalityType), obLanguage("Curriculum", "kNotIncludeInJournal", strFunctionalityType)))
		End If
	End If
		
	If bExit Then Exit Sub
	' ClassMeetings exists
	If Not readonly Then
		Dim strCmDate
		Dim strLimitDate
		ProcessCmName objClassMeetings, True

		If bIsHomeAssignment Then

			If nCMID = 0 Then
				'новые д.з. с неуказанным занятием к которому было выдано д.з.
				If nIssueCMID = 0 Then
					GenerateError "Идентификатор занятия не инициализрован"
				End If
				Set objCMInfo = objNSNET.GetClassMeetingInfo(nIssueCMID)
				DrawCmInput obLanguage("Grade", "kAssignmentIssueClassMeeting"), objCMInfo, "ISSUECMID", nIssueCMID

				'фильтрация списка занятий - позже даты выдачи д.з.
				strCmDate = DateTwoStr(objCMInfo("DAY"), Replace("yyyy mm dd -", " ", chr(1)))
				objClassMeetings.Filter = "DAY > #" & strCmDate  & "#"
				If bLimitedJournalEditing Then
					If nJournalEditingDayLimit > 0 Then
						strLimitDate = DateTwoStr(DateAdd("d", Now, -nJournalEditingDayLimit), Replace("yyyy mm dd -", " ", chr(1)))
						objClassMeetings.Filter = objClassMeetings.Filter & " AND DAY > #" & strLimitDate  & "#"
					End If
					If nFutureEditingDayLimit > 0 Then
						strLimitDate = DateTwoStr(DateAdd("d", Now, nFutureEditingDayLimit), Replace("yyyy mm dd -", " ", chr(1)))
						objClassMeetings.Filter =  objClassMeetings.Filter & " AND DAY < #" & strLimitDate  & "#"
					End If
				End If
				If objClassMeetings.EOF AND NOT bLimitedJournalEditing Then
					objClassMeetings.Filter = "DAY >= #" & strCmDate  & "#"
				End If

				If NOT objClassMeetings.EOF Then
					'Инициализируем первым заданием из списка
					nCMID = objClassMeetings("CMID")
				End If

				DrawCmSelect obLanguage("Curriculum", "kClassMeeting"), "CMID", nCMID, Null, "syncAssignDates($(this).val())"

				'сброс фильтра
				objClassMeetings.Filter = ""
			Else
				'редактируем занятие, на котором было выдано д.з.
				'ридонли занятие, к которому было выдано
				'фильтрация списка занятий - ранее даты проверки д.з.
				strCmDate = DateTwoStr(objCMInfo("DAY"), Replace("yyyy mm dd -", " ", chr(1)))
				objClassMeetings.Filter = "DAY < #" & strCmDate	& "#"
				If bLimitedJournalEditing Then
					If nJournalEditingDayLimit > 0 Then
						strLimitDate = DateTwoStr(DateAdd("d", Now, -nJournalEditingDayLimit), Replace("yyyy mm dd -", " ", chr(1)))
						objClassMeetings.Filter = objClassMeetings.Filter & " AND DAY > #" & strLimitDate  & "#"
					End If
					If nFutureEditingDayLimit > 0 Then
						strLimitDate = DateTwoStr(DateAdd("d", Now, nFutureEditingDayLimit), Replace("yyyy mm dd -", " ", chr(1)))
						objClassMeetings.Filter = objClassMeetings.Filter & " AND DAY < #" & strLimitDate  & "#"
					End If
				End If
				objClassMeetings.Filter = objClassMeetings.Filter & " OR CMID = " & nIssueCMID
				If objClassMeetings.EOF AND NOT bLimitedJournalEditing Then
					objClassMeetings.Filter = "DAY <= #" & strCmDate  & "#"
				End If

				If NOT objClassMeetings.EOF Then
					If nIssueCMID <= 0 Then
						'Инициализируем последним заданием из списка
						objClassMeetings.MoveLast()
						nIssueCMID = objClassMeetings("CMID")
					End If
				End If

				DrawCmSelect obLanguage("Grade", "kAssignmentIssueClassMeeting"), "ISSUECMID", nIssueCMID, Null, "dataChanged()"
				'сброс фильтра
				objClassMeetings.Filter = ""

				DrawCmInput obLanguage("Curriculum", "kClassMeeting"), objCMInfo, "CMID", nCMID
			End If
		Else
			If bLimitedJournalEditing Then
				If nJournalEditingDayLimit > 0 Then
					strLimitDate = DateTwoStr(DateAdd("d", Now, -nJournalEditingDayLimit), Replace("yyyy mm dd -", " ", chr(1)))
					objClassMeetings.Filter = "DAY > #" & strLimitDate  & "#"
				End If
				If nFutureEditingDayLimit > 0 Then
					strLimitDate = DateTwoStr(DateAdd("d", Now, nFutureEditingDayLimit), Replace("yyyy mm dd -", " ", chr(1)))
					objClassMeetings.Filter =  objClassMeetings.Filter & IIF(nJournalEditingDayLimit > 0, " AND ", "") & "DAY < #" & strLimitDate  & "#"
				End If
				If nCMID > 0 Then
					objClassMeetings.Filter = objClassMeetings.Filter & " OR CMID=" + CStr(nCMID)
				End If
			End If
			DrawCmSelect obLanguage("Curriculum", "kClassMeeting"), "CMID", nCMID, IIF(nCMID = 0, "-- " & obLanguage("Curriculum","kChooseClassMeetingDay") & " --", Null), "lessonChanged();"
		End If
	Else
		If bRecordInJournal Then
			If Not objCMInfo.EOF Then
				strText = objCMInfo("LESSONNAME")

				If Not IsNull(strText) Then
					strText = Date2Str(objCMInfo("DAY")) & kCMDay_LessonName_Delim & strText
				Else
					strText = Date2Str(objCMInfo("DAY"))
				End If
			End If

			Call DrawReadonlyRow(obLanguage("Curriculum", "kClassMeeting"), strText)
		End If
	End If
End Sub

Sub DrawCmSelect(strTitle, strParam, strCurrId, strNull, strChange)
	OpenFormGroup strTitle
		%>
		<div class="input-group">
			<%Call DrawSelectRs(objClassMeetings, strParam, "CMID", "CM_NAME", strCurrId, strNull, strChange)%>
			<span class="input-group-btn">
				<button class="btn btn-default" onclick="viewLessonDetails('<%=strParam%>');" type="button">
					<%=obLanguage("Curriculum", "kLessonDetails", strFunctionalityType)%>
				</button>
			</span>
		</div>
		<%
	CloseFormGroup
End Sub

Sub DrawCmInput(strTitle, objCMInfo, strParam, strCurrId)
	Dim strLessonName
	strLessonName = objCMInfo("LESSONNAME")
	If Not IsDull(strLessonName) Then
		strLessonName = objCMInfo("NUNITINPLAN") & "." & objCMInfo("NLESSONINUNIT") & " " & strLessonName
	End If
	OpenFormGroup strTitle
		%>
			<div class="input-group">
				<input type="hidden" name="<%=strParam%>" value="<%=strCurrId%>"/>
				<input type="text" class="form-control" readonly title="<%=GetMeetingName(objCMInfo("DAY"), "", strLessonName)%>" value="<%=GetMeetingName(objCMInfo("DAY"), "", strLessonName)%>" />
				<span class="input-group-btn">
					<button class="btn btn-default" onclick="viewLessonDetails('<%=strParam%>');" type="button">
						<%=obLanguage("Curriculum", "kLessonDetails", strFunctionalityType)%>
					</button>
				</span>
			</div>
		<%
	CloseFormGroup
End Sub


Sub DrawEditForm()
	If Not blnIsManual Then
		Call DrawLaLink()
	End If
	
	Call DrawAssignmentTypeRow()

	If Not bExtraActivity Then

		Call DrawMarkRow()
		Call DrawWeightRow()

		OpenFormGroup(obLanguage("Assignment", "kAssignedToStudents"))%>
			<div id="assignToStudents">
				<input type="hidden" name="all_students" value="" />
				<input type="hidden" name="students" value="" />
				<div id="studentList" style="font-size: 13px; font-weight: bold;"></div>
			</div><%
		CloseFormGroup()

	End If

	Call DrawAssignmentTheme()

	If Not blnIsManual Then
		Call DrawAssignementDates()
	End If
	
	Call DrawDetails()

	OpenFormGroup(obLanguage("Common", "kAttachedFiles"))
		%><div id="attachFiles"></div><%
	CloseFormGroup()
End Sub

Sub DrawLaLink()
	If bNewLAAssignment Then
		OpenFormGroup obLanguage("Assignment", "kATAssignment")%>
			<select class="form-control" size="10" name="PID" style="height: 150px;">
				<option value="-1"><%=obLanguage("Curriculum","kAssignmentList")%></option>
			</select><%
		CloseFormGroup
	Else
		Dim strTmp
		strTmp = " (" & strActivityName & ")"
		If isEmptyProblemName Then 
			strTmp = objAssignmentInfo("PROBLEMNAME") & strTmp
		Else 
			strTmp = strProblemName & strTmp
		End If

		If readonly or bIsDeleted Then
			Call DrawReadonlyRow(obLanguage("Assignment", "kATAssignment"), strTmp)
		Else
			Call DrawLinkRow(obLanguage("Assignment", "kATAssignment"), DB2HTML(strTmp), "openProblem();")
		End If
	End If
End Sub

Sub DrawAssignmentTypeRow()
	Call WriteHiddenTags(Array("ATypeOld",nAssignmentType))
	If Not readonly And Not bIsHomeAssignment Then
		If Not bTKR Then
			OpenFormGroup(obLanguage("Assignment", "kATAssignmentType"))
			If Not bModuleQaAvailable And bIsDKR Then nAssignmentType = 0
			Call ShowTypesCombo(nAssignmentType, False, bDrawDKR)
			CloseFormGroup()

			If bModuleQaAvailable Then
				%>
				<div id="blockConiderDKR" style="display: none">
					<div class="form-group" id="diagnosticWork"></div>
					<%
						OpenFormGroup ""
						rw ShowCheckbox( "CONSIDERDKR", 1, bConsiderDKR, obLanguage("Curriculum", "kConsiderDKR"), "" )
						CloseFormGroup
					%>
				</div>
				<%
			End If
		Else
			Call DrawReadonlyRow(obLanguage("Assignment", "kATAssignmentType"), clsAssignmentTypes.GetType(nAssignmentType))
			Call WriteHiddenTags(Array("AType", nAssignmentType))
		End If
	Else
		Call DrawReadonlyRow(obLanguage("Assignment", "kATAssignmentType"), clsAssignmentTypes.GetType(nAssignmentType))
	End If
End Sub

Sub DrawMarkRow()
	If bTKR Then
		Call DrawReadonlyRow(obLanguage("Common", "kMark"), obLanguage("Curriculum","kMarkNecessaryForAll"))%>
		<input type="hidden" name="ReqMark" value="0"><%
	Else
		If Not readonly Then
			Call DrawSimpleFilterRow(obLanguage("Common","kMark"), "ReqMark", Array(0, obLanguage("Curriculum", "kMarkOptional"), 1, obLanguage("Curriculum", "kMarkNecessary", strFunctionalityType)), IIF(bReqMark, 1, 0), False, "dataChanged()")
		Else
			Call DrawReadonlyRow(obLanguage("Common", "kMark"), obLanguage("Curriculum","kMarkNecessaryForAll"))
		End If
	End If
End Sub

Sub DrawWeightRow()
	If Not bWeight Then Exit Sub
	
	If Not readonly Then
		Call DrawInputRowEx(obLanguage("Assignment", "kWeight"), IIF(nWeight = -1, "", nWeight), "Weight", "text", 3, 3, "", "")
	Else
		Call DrawReadonlyRow(obLanguage("Assignment", "kWeight"), IIF(nWeight = -1, "", nWeight))
	End If
End Sub

Sub DrawAssignmentTheme()
	Dim strTitle
	strTitle = IIF(bIsHomeAssignment, obLanguage("Assignment", "kHomeAssignment"), obLanguage("Assignment", "kATAssignmentTheme"))

	If Not readonly Then
		If Not bIsHomeAssignment Then
			Call DrawInputRowEx(strTitle, strAssignmentName, "AN", "text", 50, kMaxAssignName, "", "class=""FilterWhiteSpace""")
		Else
			Call DrawInputGroupRow(strTitle, strAssignmentName, "AN", "FilterWhiteSpace", 50, kMaxAssignName, Array("controlEditAssignments.fromKTP()", obLanguage("Assignment", "kFromKTP"), "", ""))
		End If
	Else
		Call DrawReadonlyRow(strTitle, strAssignmentName)
	End If
End Sub

Sub DrawAssignementDates()
	If Not readonly Then
		rw "<div id=""dates""" & IIF(bRecordInJournal, "style=""display: none;""", "") & ">"
			Call DrawDateInfoRow(obLanguage("Common","kStartDate"), strStartDate, "ADT", obLanguage("Common", "kCalendar"))
			Call DrawDateInfoRow(obLanguage("Assignment","kATDueDate"), strDueDate, "DDT", obLanguage("Common", "kCalendar"))
		rw "</div>"
	End If

	rw "<div id=""readonly-dates""" & IIF(Not bRecordInJournal, "style=""display: none;""", "") & ">"
		Call DrawReadonlyRowEx(obLanguage("Common","kStartDate"), strStartDate, "ADT")
		Call DrawReadonlyRowEx(obLanguage("Assignment","kATDueDate"), strDueDate, "DDT")
	rw "</div>"
End Sub

Sub DrawDetails()
	Dim strLabelName, strNote

	strLabelName = IIF(bIsHomeAssignment, obLanguage("Assignment", "kHADetailsFor") & obLanguage("Common", "kStudents_r", strFunctionalityType), obLanguage("Curriculum", "kStudentNote", strFunctionalityType))

	If Not readonly Then
		strNote = IIF(bIsHomeAssignment, obLanguage("Assignment", "kHAEnterNote", strFunctionalityType), obLanguage("Curriculum", "kEnterNote", strFunctionalityType))
		DrawInputRowAndNote strLabelName, strNote, strDescription, "AD", "area", 12, 10, "", ""
	Else
		Call DrawTextRow(strLabelName, strDescription, "")
	End If
End Sub

Function GetAssignmentInfo(strAssignmentID)
	If Not bIsDebug Then On Error Resume Next
	Dim RetObj
	Dim dayInterval

	Set RetObj = objNSNET.GetTeacherAssignmentInfo(strAssignmentID)
	TestError obLanguage("Curriculum","kCantGetAssignmentInfo")

	If RetObj.EOF Then GenerateError(obLanguage("Curriculum","kAssignmentNotExists"))

	If bLimitedJournalEditing Then
		dayInterval = NSDate() - RetObj("STARTDATE")
		If Not IsDull(nJournalEditingDayLimit) And Not IsDull(nFutureEditingDayLimit) Then
			readonly = (dayInterval >= nJournalEditingDayLimit Or dayInterval =< -nFutureEditingDayLimit)
		ElseIf Not IsDull(nJournalEditingDayLimit) Then
			readonly = dayInterval >= nJournalEditingDayLimit
		ElseIf Not IsDull(nFutureEditingDayLimit) Then
			readonly = dayInterval =< -nFutureEditingDayLimit
		End If
	End If

	Set GetAssignmentInfo = RetObj
End Function%>