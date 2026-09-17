<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const MaxSubjFieldNameSize = 50

If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim strSubjectFieldID, strSubjectFieldName, nRes
Dim strAction

strSubjectFieldID = GetSafeLng(Request("SBJFID"), 0)
strAction = Request("act")

If strAction = "add" then
	strSubjectFieldName = Trim(GetSafeStr(Request("SUBJECTFIELDNAME"), MaxSubjFieldNameSize, NULL))
	nRes = objNSNET.CreateSubjectField(strSubjectFieldName)
	TestError obLanguage("SetupSchoolCalendar","kCantAddSubjectField")
	If nRes = -1 Then GenerateError obLanguage("SetupSchoolCalendar","kSubjFieldNameExists")
Elseif strAction = "remove" Then
	Call objNSNET.RemoveSubjectField(CLng(strSubjectFieldID), 0)    
	TestError obLanguage("SetupSchoolCalendar","kCantRemoveSubjectField")
Else 'edit
	strSubjectFieldName = Trim(GetSafeStr(Request("SUBJECTFIELDNAME"), MaxSubjFieldNameSize, NULL))
	nRes = objNSNET.EditSubjectField(strSubjectFieldID, strSubjectFieldName)
	TestError obLanguage("SetupSchoolCalendar", "kCantChangeFieldName")
	If nRes = -1 Then GenerateError obLanguage("SetupSchoolCalendar","kSubjFieldNameExists")
End If

Response.Redirect "SchoolSubjects.asp?" & Ver() & "&AT=" & strToken%>