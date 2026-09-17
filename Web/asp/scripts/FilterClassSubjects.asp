<% ' © 2007-2016 IRTech. All rights reserved.
Dim strSubjClassID, oSubjClassesRs, strSubjectID, oSubjectsRs

'#### Init Subjects
'КПГ. not used
Sub InitSubjectsForTeacherAndInterval( bAll, strTID, dtStart, dtEnd )
	Dim strMainTeacherID

	If bAll Then strMainTeacherID = "-1" Else strMainTeacherID = strUserID

	strSubjectID = GetSafeID(Request("SJID"),GetSafeID(obTokenMgr.GetData(strToken,stCurrSubject),"0"))
	If strSubjectID <> "0" And strSubjectID <> "-1" Then
		Set oSubjectsRs = objNSNET.GetSubjectListForTeacherAndInterval(strMainTeacherID, strTID, strSubjectID, strCurrYearID, dtStart, dtEnd)
		If oSubjectsRs.EOF Then strSubjectID = "0"
	End If
	Set oSubjectsRs = objNSNET.GetSubjectListForTeacherAndInterval(strMainTeacherID, strTID, -1, strCurrYearID, dtStart, dtEnd)
	If oSubjectsRs.EOF Then strSubjectID = "0" : Exit Sub
	If strSubjectID <> "0" Then Exit Sub
	strSubjectID = GetSafeID( oSubjectsRs("SUBJECTID"), NULL )
End Sub

Sub InitSubjectsForTeacher(strTID)
	strSubjectID = GetSafeID(Request("SJID"),GetSafeID(obTokenMgr.GetData(strToken,stCurrSubject),"0"))
	Set oSubjectsRs = objNSNET.GetSubjectsListForTeacher(strTID, strCurrYearID, -1)

	IF oSubjectsRs.EOF Then
		strSubjectID = 0
	ElseIf Clng(strSubjectID) >= 0 Then
		strSubjectID = GetSafeID(objNSNET.GetSafeSubjectIDForTeacher(strSubjectID, strTID, strCurrYearID, -1), "-1")
		If Clng(strSubjectID) <= 0 Then strSubjectID = GetSafeID(oSubjectsRs("SUBJECTID"), Null)
	End If
End Sub

Sub InitSubjectsWithTotalMarksForTerm( strTermID )
	strSubjectID = GetSafeID(Request("SJID"),GetSafeID(obTokenMgr.GetData(strToken,stCurrSubject),"0"))
	strSubjectID = objNSNET.GetSafeSubjectIDWithTotalMarksForTerm(strSubjectID, strTermID, strCurrYearID)
	Set oSubjectsRs = objNSNET.GetSubjectsWithTotalMarksForTerm(strTermID, strCurrYearID)
	If oSubjectsRs.EOF Then
		strSubjectID = 0
	Else
		If strSubjectID = 0 Then strSubjectID = oSubjectsRs("SUBJECTID")
    End If
End Sub

Sub InitSubjectBySubjectGroup()
	strSubjectID = GetSafeID(objNSNET.GetSGSubjectID(strSubjClassID),"0")
End Sub


'#### Draw Subjects

' Здесь theEmptyMessage передаётся в ф-цию - это более универсально, чем забивать константу прямо в ф-цию Draw...,
' т.к. позволяет более точно сообщать, по какой причине что-то пусто.
' Нужно следить за тем, чтобы theEmptyMessage в Draw... соответствовало тому, что получалось в соответствующем Init...
' Это общее замечание - касается всех пар Init... - Draw... Из-за этого несоответствия появляются баги.
Sub DrawSubjects_Ex( theStrForm, theEmptyMessage, bAllowAll )
	If strSubjectID = "0" Then
		Call DrawInfo(theEmptyMessage, False)
		bExit = True
	Else
		DrawFilterRow theStrForm, obLanguage("Filter","kCourseGB"), "SJID", oSubjectsRs, "SUBJECTID", "SUBJECTNAME", strSubjectID, bAllowAll
	End If
End Sub

Sub DrawSubjects( theStrForm, theEmptyMessage )
	Call DrawSubjects_Ex(theStrForm, theEmptyMessage, True)
End Sub

Sub DrawSubjectsWithoutTotal( theStrForm, theEmptyMessage )
	Call DrawSubjects_Ex(theStrForm, theEmptyMessage, False)
End Sub


'#### Init SubjectGroups
Sub InitStudentClassSubjectGroups( strStudentID, strClassID )
	'InitStudentClassSubjectGroups ни разу не вызывается
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"0"))
	Set oSubjClassesRs = objNSNET.GetClassSubjectGroupsForStudent(strStudentID, strClassID, -1, False)
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	If CLng(strSubjClassID) = -1 Then Exit Sub
	If not oSubjClassesRs.ExistsByField("ID", strSubjClassID) Then strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )
	InitSubjectBySubjectGroup
End Sub

'только КПГ. not used
Sub InitTeacherClassSubjectGroups( strTeacherID, strClassID ) ' учитывает классных рук. и предметников (без заместителей!)
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"-1"))
	'oSubjClassesRs не учитывает год, иожно ли заменять objNSNET.GetSafeSubjectGroupID на oSubjClassesRs.ExistsByField(...)?
	Set oSubjClassesRs = objNSNET.GetSubjectGroupsForTeacherClass(strTeacherID, strClassID)
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	If strSubjClassID <> "0" Then strSubjClassID = objNSNET.GetSafeSubjectGroupID(strSubjClassID, strCurrYearId, strClassID, -1, strTeacherID, -1)
	If strSubjClassID = "0" Then
		strSubjectID = GetSafeID(Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject),"-1"))
		If strSubjectID <> "-1" Then strSubjClassID = objNSNET.GetSafeSubjectGroupID(0, strCurrYearId, strClassID, -1, strTeacherID, strSubjectID)
		If strSubjClassID = "0" Then strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )
	End If
	InitSubjectBySubjectGroup
	WriteSubject
End Sub

'только КПГ. not used
Sub InitTeacherClassSubjectGroups_Ex( strTeacherID, strClassID ) ' учитывает классных рук., предметников и заместителей
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"-1"))
	Set oSubjClassesRs = objNSNET.GetSubjectGroupsForTeacherClass_Ex(strTeacherID, strClassID)
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	If strSubjClassID <> "0" Then strSubjClassID = objNSNET.GetSafeSubjectGroupID_Ex(strSubjClassID, strCurrYearId, strClassID, -1, strTeacherID, -1)
	If strSubjClassID = "0" Then
		strSubjectID = GetSafeID(Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject),"-1"))
		If strSubjectID <> "-1" Then strSubjClassID = objNSNET.GetSafeSubjectGroupID_Ex(0, strCurrYearId, strClassID, -1, strTeacherID, strSubjectID)
		If strSubjClassID = "0" Then strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )
	End If
	InitSubjectBySubjectGroup
	WriteSubject
End Sub

Sub WriteSubject
	Call obTokenMgr.SetData(strToken, stCurrSubject, strSubjectID)
End Sub

Sub SOU_Filter()
	Dim maxMark
	maxMark = CLng(obTokenMgr.GetData(strToken, stMaxMark))
	if k_min_SOU_b <= maxMark And maxMark <= k_max_SOU_b And maxMark<>k_5-1 Or maxMark<=3 Then
		drawSimpleFilter "Reports","kSOU_Filter", IIF(isComplexTeacherReport,"kSOU_b","kSOU_p"), Array("kSOU_p", "kSOU_b")
	Else
		Call obTokenMgr.SetData(strToken, "kSOU_Filter", "kSOU_p")
	End If
End Sub

'#### Draw SubjectGroups
Sub DrawSubjectGroups( theStrForm, theAll )
	If strSubjClassID = "0" Then
		Call DrawInfo(obLanguage("Filter","kNoCoursesGB"), False)
	Else
		DrawFilterRow theStrForm, obLanguage("Filter","kCourseGB"), "SCLID", oSubjClassesRs, "ID", "NAME", strSubjClassID, theAll
	End If
End Sub
%>
