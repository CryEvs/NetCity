<% ' © 2007-2015 IRTech. All rights reserved.

'#### Init Subjects
'Инициализация предметов для учителя в диапазоне дат
Sub InitSubjectsForTeacherAndInterval_IUP( bAll, strTID, dtStart, dtEnd )
	Dim strMainTeacherID
	
	If bAll Then strMainTeacherID = "-1" Else strMainTeacherID = strUserID
	
	strSubjectID = GetSafeID(Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrSubject), "0"))
	If strSubjectID <> "0" And strSubjectID <> "-1" Then
		Set oSubjectsRs = objNSNET.GetSubjectListForTeacherAndInterval_IUP(strMainTeacherID, strTID, strSubjectID, strCurrYearID, dtStart, dtEnd)
		If oSubjectsRs.EOF Then strSubjectID = "0"
	End If
	Set oSubjectsRs = objNSNET.GetSubjectListForTeacherAndInterval_IUP(strMainTeacherID, strTID, -1, strCurrYearID, dtStart, dtEnd)
	If oSubjectsRs.EOF Then strSubjectID = "0" : Exit Sub
	If strSubjectID <> "0" Then Exit Sub
	strSubjectID = GetSafeID( oSubjectsRs("SUBJECTID"), NULL )
End Sub

'Инициализация предметов для ИУП-параллели
Sub InitSubjectsForIupGrade(bAllowAll, strGrade)
	strSubjectID = GetSafeID(Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrSubject), "-1"))
	If Not bAllowAll And  strSubjectID = "-1" Then
		strSubjectID = "0"
	End If 
	Set oSubjectsRs = objNSNET.GetSubjectListForIupGrade(strCurrYearId, strGrade, -1, -1)
	If oSubjectsRs.EOF Then strSubjectID = "0" : Exit Sub
	If strSubjectID <> "0" And strSubjectID <> "-1" Then strSubjectID = GetSafeIDForRs(strSubjectID, oSubjectsRs, "SUBJECTID")
	If strSubjectID = "0" Then strSubjectID = GetSafeID(oSubjectsRs("SUBJECTID"), NULL)
	WriteSubject
End Sub

'инициализация списка предметов по которым есть подгруппы класса или индивидульаные группы в параллели
Sub InitSubjectsWithGroups_IUP(bAllowAll, strTermID)
'	If IsDull(strClassID) Then
'		strClassID = GetSafeID(Request("PCLID"), Null)
'	End If

	If IsDull(strSubjectID) Then
		strSubjectID = GetSafeID(Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrSubject), IIf(bAllowAll, "-1", "0")))
	End If
	If Not bAllowAll And strSubjectID = "-1" Then
		strSubjectID = "0"
	End If

	If bIsIupGrade Then
		Set oSubjectsRs = objNSNET.GetSubjectListForIupGrade(strCurrYearId, strIupGrade, strTermID, -1)
	Else
		Set oSubjectsRs = objNSNET.GetClassSubjectListWithGroups(strClassID, strTermID)
	End IF
	If oSubjectsRs.EOF Then strSubjectID = "0" : Exit Sub

	If strSubjectID <> "0" And strSubjectID <> "-1" Then strSubjectID = GetSafeIDForRs(strSubjectID, oSubjectsRs, "SUBJECTID")
	If strSubjectID = "0" Then strSubjectID = GetSafeID(oSubjectsRs("SUBJECTID"), NULL)
End Sub

'#### Init SubjectGroups
' учитывает предметников
Sub InitTeacherSubjectGroups_IUP( strTeacherID ) 
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"-1"))
	If bIsIupGrade Then
		Set oSubjClassesRs = objNSNET.GetSubjectGroupsForTeacherGrade_IUP(strTeacherID, strCurrYearId, strIupGrade)
	Else
		Set oSubjClassesRs = objNSNET.GetSubjectGroupsForTeacherClass(strTeacherID, strClassID)
	End If
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	GetSafeSubjectGroup_IUP strTeacherID, -1
	InitSubjectBySubjectGroup
	WriteSubject
End Sub

' учитывает предметников и заместителей
Sub InitTeacherSubjectGroups_Ex_IUP( strTeacherID )
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"-1"))
	If bIsIupGrade Then
		Set oSubjClassesRs = objNSNET.GetSubjectGroupsForTeacherGrade_IUP_EX(strTeacherID, strCurrYearId, strIupGrade, -1)
	Else
		Set oSubjClassesRs = objNSNET.GetSubjectGroupsForTeacherClass_Ex(strTeacherID, strClassID)
	End If
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	GetSafeSubjectGroup_IUP_Ex strTeacherID
	InitSubjectBySubjectGroup
	WriteSubject
End Sub

'Инициализация списка ПГ для классных руководителей. 
'Для обычных классов	- все ПГ класса
'для ИУП параллели		- список ПГ связанных с классом кл. руководителя + ПГ, в которых преподает учитель
Sub InitClassChiefSubjectGroups_IUP( strTeacherId )
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"-1"))
	If bIsIupGrade Then
		Call InitSubjectsForIupGrade(False, strIupGrade)
		Set oSubjClassesRs = objNSNET.GetSubjectGroupsForClassChief_IUP(strTeacherID, strCurrYearId, strIupGrade, strSubjectId)
	Else
		strSubjectID = GetSafeID(Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject),"-1"))
		Set oSubjClassesRs = objNSNET.GetSubjectsListForClass(strClassID)
	End If
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	
'	GetSafeSubjectGroup_IUP -1, strSubjectId
	strSubjClassID = GetSafeIDForRs2_Ex( strSubjClassID, strSubjectID, oSubjClassesRs, "ID", "SUBJECTID", "0" )
	If CStr(strSubjClassID) = "0" Then
		strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )
	End If

	InitSubjectBySubjectGroup
	WriteSubject
End Sub

'Инициализация ПГ для выбранного класса/иуп-параллели.
'Важно! Для ИУП-параллели для удобства выбора дополнительно инициализируется фильтр предметов связанных с ППГ. И список ППГ фильтруются уже по выбранному предмету.
Sub InitSubjectGroupsBySubject_IUP()
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"0"))
	If bIsIupGrade Then
		Call InitSubjectsForIupGrade(False, strIupGrade)
		Set oSubjClassesRs = objNSNET.GetSubjectGroupsListForGrade_IUP(strCurrYearId, strIupGrade, strSubjectId)
	Else
		Set oSubjClassesRs = objNSNET.GetSubjectGroupsListForClass_IUP(strClassID)
	End IF
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	GetSafeSubjectGroup_IUP -1, strSubjectId
	InitSubjectBySubjectGroup
	WriteSubject
ENd Sub

'Инициализация ПГ для выбранного класса/иуп-параллели
Sub InitSubjectGroups_IUP()
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"0"))
	If bIsIupGrade Then
		Set oSubjClassesRs = objNSNET.GetSubjectGroupsListForGrade_IUP(strCurrYearId, strIupGrade, -1)
	Else
		Set oSubjClassesRs = objNSNET.GetSubjectGroupsListForClass_IUP(strClassID)
	End IF
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	GetSafeSubjectGroup_IUP -1, -1
	InitSubjectBySubjectGroup
	WriteSubject
End Sub

'Инициализация списка ПГ ученика в году
Sub InitStudentYearSubjects_IUP( strStudentID, strCurrYearId )
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"0"))
	Set oSubjClassesRs = objNSNET.GetYearSubjectListForStudent_IUP(strStudentID, strCurrYearId, False)
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	If CLng(strSubjClassID) = -1 Then Exit Sub
	If not oSubjClassesRs.ExistsByField("ID", strSubjClassID) Then strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )
	InitSubjectBySubjectGroup
End Sub

'Инициализирует SG для всех классов, как ИУПовских, так и обычных
Sub InitSubjectGroupsForAllClasses(strClassID)
	strSubjClassID = GetSafeID( Request("SCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"0"))
	Set oSubjClassesRs = objNSNET.GetSubjectGroupsListForClass_IUP(strClassID)
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	If strSubjClassID <> "0" Then strSubjClassID = objNSNET.GetSafeSubjectGroupID(strSubjClassID, strCurrYearId, strClassID, -1, -1, -1)
	If strSubjClassID = "0" Then
		strSubjectID = GetSafeID(Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject),"-1"))
		If strSubjectID <> "-1" Then strSubjClassID = objNSNET.GetSafeSubjectGroupID(0, strCurrYearId, strClassID, -1, -1, strSubjectID)
		If strSubjClassID = "0" Then strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )
	End If
	InitSubjectBySubjectGroup
	WriteSubject
End Sub

' учитывает только предметников
Sub GetSafeSubjectGroup_IUP( strTeacherId, strFilterSubjectId )
	If strSubjClassID <> "0" Then
		If bIsIupGrade THen
			strSubjClassID = objNSNET.GetSafeSubjectGroupID(strSubjClassID, strCurrYearId, -1, strIupGrade, strTeacherID, strFilterSubjectId)
		Else
			strSubjClassID = objNSNET.GetSafeSubjectGroupID(strSubjClassID, -1, strClassID, -1, strTeacherID, strFilterSubjectId)
		End If
	End If
	If strSubjClassID = "0" Then
		strSubjectID = GetSafeID(strFilterSubjectId, GetSafeID(Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject),"-1")))
		If strSubjectID <> "-1" Then
			If bIsIupGrade THen
				strSubjClassID = objNSNET.GetSafeSubjectGroupID(0, strCurrYearId, -1, strIupGrade, strTeacherID, strSubjectID)
			Else
				strSubjClassID = objNSNET.GetSafeSubjectGroupID(0, strCurrYearId, strClassID, -1, strTeacherID, strSubjectID)
			End If
		End If
		If strSubjClassID = "0" Then strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )
	End If
End Sub

' учитывает предметников и заместителей
Sub GetSafeSubjectGroup_IUP_Ex( strTeacherId )
	If strSubjClassID <> "0" Then
		If bIsIupGrade THen
			strSubjClassID = objNSNET.GetSafeSubjectGroupID_Ex(strSubjClassID, strCurrYearId, -1, strIupGrade, strTeacherID, -1)
		Else
			strSubjClassID = objNSNET.GetSafeSubjectGroupID_Ex(strSubjClassID, -1, strClassID, -1, strTeacherID, -1)
		End If
	End If
	If strSubjClassID = "0" Then
		strSubjectID = GetSafeID(Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject),"-1"))
		If strSubjectID <> "-1" Then
			If bIsIupGrade THen
				strSubjClassID = objNSNET.GetSafeSubjectGroupID_Ex(0, strCurrYearId, -1, strIupGrade, strTeacherID, strSubjectID)
			Else
				strSubjClassID = objNSNET.GetSafeSubjectGroupID_Ex(0, -1, strClassID, -1, strTeacherID, strSubjectID)
			End If
		End If
		If strSubjClassID = "0" Then strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )
	End If
End Sub

'отрисовка фильтра Предмет/Группа. При выборе обычного класса - "Предмет", ИУП-класса - "Группа"
'для ИУП-параллелей дополнительно отрисовывается фильтр "Предмет" позволяющий отфильтровать ПГ по предмету
Sub DrawSubjectGroups_IUP( theStrForm, theAll, bShowSubjects )
	If bIsIupGrade And bShowSubjects Then
		Call DrawSubjects_Ex( theStrForm, obLanguage("Filter","kNoSubjectGroups"), False) : If bExit Then Exit Sub
	End If
	If strSubjClassID = "0" Then
		DrawInfo IIF(bIsIupGrade, obLanguage("Filter","kNoSubjectGroups"), obLanguage("Filter","kNoCoursesGB")), False
		bExit = True
	Else
		DrawFilterRow theStrForm, IIF(bIsIupGrade, obLanguage("Filter","kSubjectGroup"), obLanguage("Filter","kCourseGB")), "SCLID", oSubjClassesRs, "ID", "NAME", strSubjClassID, theAll
	End If
End Sub
%>
