<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strAssignmentName, strAssignmentType, strStartDate, strDueDate, strDescription
Dim strASL, arASLNames, strProblemName, strParameters
Dim strDestination, strCMID, strBack, bReqMark, strRIJ, nWeight
Dim nChangeKTP, nHALessonID
Dim strLessonName, strLessonHours, strLessonDescription, strHomework, strDetails, strBookRef
Dim strDetailInfComponent, strTotalLearningAndSubjectSkills, strValuablyFocusedComponent, strTeachConditionAndImplementer
Dim bFromEditLesson

Dim strStudentIds, strAllStudents
Dim nKTPAttachmentId, nAttachmentId

strAssignmentType = GetSafeLng(Request("AType"), 0)
If strAssignmentType = PreDefinedAssignmentType_HomeWork Then
	nChangeKTP					= GetSafeLng(Request("changeKTP"), 0)
	nHALessonID					= GetSafeLng(Request("HALESSON"), 0)
	nKTPAttachmentId			= GetSafeLng(Request("ktpAttachment"), 0)
End If

strAssignmentName	= Trim(GetSafeStr(Request.Item("AN"), kAssignmentNameLength, ""))
strDescription		= GetSafeStr(Request.Item("AD"), 2000, "")
strStartDate		= Str2Date(Request.Item("ADT"))
strDueDate			= Str2Date(Request.Item("DDT"))
strASL				= Request.Item("ASL")
strProblemName		= GetSafeStr(Request.Item("PROBLEMNAME"),200, "")
bReqMark			= GetSafeLng(Request.Item("ReqMark"), "0")
nWeight				= GetSafeLng(Request.Item("Weight"), -1)
strStudentIds		= GetSafeStr(Request.Item("students"), -1, "")
strAllStudents		= GetSafeStr(Request.Item("all_students"), -1, "1")
strRIJ				= GetSafeStr(Request.Item("RIJ"), 1, "1")
strParameters		= GetSafeStr(Request.Item("PARAMETERS"), 4000, "") 

nAttachmentId		= GetSafeLng(Request.Item("newAttachment"), 0)
If nAttachmentId = 0 Then nAttachmentId = GetSafeLng(Request.Item("currAttachment"), 0)

strCMID				= GetSafeID(Request.Item("CMID"), GetSafeID(obTokenMgr.GetData(strToken,stCrMngmCMID), "0"))
Call obTokenMgr.SetData(strToken,stCrMngmCMID, strCMID)

'UNID - UnitID (передается только со страницы EditLesson) 
bFromEditLesson = (GetSafeLng(Request("UNID"), 0) > 0)
If bFromEditLesson Then
	strLessonName						= Trim(GetSafeStr(Request("LN"), kLessonNameMaxLen_DB, ""))
	strLessonHours						= GetSafeStr(Request("NHOURS"), -1, "1")
	strLessonDescription				= GetSafeStr(Request("LD"), 2000, "")
	strHomework							= GetSafeStr(Request("HOMEASSIGNMENT"), kHomeWorkMaxLen_DB, "")
	strDetails							= GetSafeStr(Request("DETAILS"), 2000, "")
	strBookRef							= GetSafeStr(Request("BOOKREF"), 2000, "")
	strDetailInfComponent				= GetSafeStr(Request("EXTRAINFO1"), 2000, "")
	strTotalLearningAndSubjectSkills	= GetSafeStr(Request("EXTRAINFO2"), 2000, "")
	strValuablyFocusedComponent			= GetSafeStr(Request("EXTRAINFO3"), 2000, "")
	strTeachConditionAndImplementer		= GetSafeStr(Request("EXTRAINFO4"), 2000, "")
End If

Dim objForm

If IsObject(obTokenMgr.GetData(strToken, "QA_dct")) Then
	Set objForm = obTokenMgr.GetData(strToken, "QA_dct")
	strBack = GetSafeStr( objForm("BACK"), 200, CStr(obTokenMgr.GetData(strToken, stBackPage)))
Else
	strBack = GetSafeStr( Request("BACK"), 200, CStr(obTokenMgr.GetData(strToken, stBackPage))) 
End If

Set objForm = Server.CreateObject("NetCity.Storage")

objForm.Add "AType", strAssignmentType
objForm.Add "AN", strAssignmentName
objForm.Add "AD", strDescription
objForm.Add "ASL", strASL
objForm.Add "ADT", strStartDate
objForm.Add "DDT", strDueDate
objForm.Add "PROBLEMNAME", strProblemName
objForm.Add "PARAMETERS", strParameters
objForm.Add "MN", CStr(Request("MN"))
objForm.Add "ATTACHMENTID", nAttachmentID
objForm.Add "BACK", strBack
objForm.Add "ReqMark", bReqMark
objForm.Add "WEIGHT", nWeight
objForm.Add "students", strStudentIds
objForm.Add "all_students", strAllStudents
objForm.Add "RIJ", strRIJ
objForm.Add "CMID", strCMID

If strAssignmentType = PreDefinedAssignmentType_HomeWork Then
	objForm.Add "changeKTP", nChangeKTP
	objForm.Add "ktpAttachment", nKTPAttachmentId
	objForm.Add "HALESSON", nHALessonID
End If

If bFromEditLesson Then
	objForm.Add "LN", strLessonName
	objForm.Add "NHOURS", strLessonHours
	objForm.Add "LD", strLessonDescription
	objForm.Add "HOMEASSIGNMENT", strHomework
	objForm.Add "BOOKREF", strBookRef
	objForm.Add "EXTRAINFO1", strDetailInfComponent
	objForm.Add "EXTRAINFO2", strTotalLearningAndSubjectSkills
	objForm.Add "EXTRAINFO3", strValuablyFocusedComponent
	objForm.Add "EXTRAINFO4", strTeachConditionAndImplementer
End If

Call obTokenMgr.SetData(strToken, "QA_dct", objForm)
Call obTokenMgr.SetData(strToken, stBackPage, IIF(bFromEditLesson, strBack, ""))

strDestination = Request.Item("DESTINATION")
RedirectTo strDestination, Null%>