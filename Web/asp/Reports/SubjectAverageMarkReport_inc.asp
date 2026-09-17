<% ' © 2007-2016 IRTech. All rights reserved.
Sub InitProfileSubjects()
	strTeacherID = IIF(bAll, -1, strUserID)
	InitTeacherSubjects
End Sub

Sub InitTeacherSubjects()
	strSubjectID = GetSafeID(Request("SUBJID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject), "0"))
	Set oSubjectsRs = objNSNET.GetSubjectsListForTeacher(strTeacherID, strCurrYearID, -1)
	If oSubjectsRs.EOF Then strSubjectID = "0" : Exit Sub
	If Clng(strSubjectID) >= 0 Then
		strSubjectID = GetSafeID(objNSNET.GetSafeSubjectIDForTeacher(strSubjectID, strTeacherID, strCurrYearID, -1), "-1")
		If Clng(strSubjectID) <= 0 Then strSubjectID = oSubjectsRs("SUBJECTID")
	End If
End Sub

Sub WriteTeacherSubject()
	Call obTokenMgr.SetData(strToken, stReportsViewAll, IIF(bAll, 1, 0))
	Call obTokenMgr.SetData(strToken,stCurrTeacher, strTeacherID)
	Call obTokenMgr.SetData(strToken, stCurrSubject, strSubjectID)
End Sub

Sub DrawSubjectsAll( theStrForm, bAllowAll, kEmptyMsg )
	If strSubjectID = "0" Then%><tr><td colspan="2" class="SmallHeader"><%=kEmptyMsg%></td></tr><% bExit = True
	Else
		DrawFilterRow theStrForm, obLanguage("Filter","kCourseGB"), "SUBJID", oSubjectsRs, "SUBJECTID", "SUBJECTNAME", strSubjectID, bAllowAll
	End If
End Sub
%>
