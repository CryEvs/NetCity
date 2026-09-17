<% ' © 2007-2013 IRTech. All rights reserved.

Dim objTerms, strTermID
Dim dtTermStart, dtTermEnd

Sub InitTermsForSubjectGroup(bAllowAll)
	strTermID = GetSafeID(Request("TERMID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), "0"))
	If Left(strTermID, 1) = "-" Then
		' Здесь либо strID = "-1" (Все), либо "-2", "-3", "-4" (-PeriodType), т.е. не настоящий ID.
		' Эта ф-ция работает только с термами, либо со значением "Все" (если bAllowAll).
		' Поэтому все "-PeriodType" переходят в "-1" (чтобы по возможности сохранить выбор на предыдущей стр.)
		' Для работы также с PeriodTypes - используйте DrawTermsAndYearTotals.
		strTermID = "-1"
	End If

	Set objTerms = objNSNET.GetSubjectGroupTermList(strSubjClassID)
	If Not (strTermID = "-1" Or strTermID = "0") Then
		If Not objTerms.ExistsByField("TERMID", strTermID) Then
			strTermID = "0"
		End If
	End If
	If Not bAllowAll And strTermId = "-1" Then
		' here strTermId = "-1" means that All
		strTermId = "0"
	End If
	If strTermID="0" Then
		If strCurrYearID = strSchoolYearID Then
			strTermID = objNSNET.GetCurrentSubjectGroupTermID(-1, -1, strSubjClassID)
		End If
	End If
	FixTerm(objTerms)
End Sub

'Инициализация для предмета фильтра учебный период с типами итогов
Sub InitTermsForSubjectGroupWithPeriods()
	strTermID = GetSafeID(Request("TERMID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), "0"))
	bYearTotal = IsYearTotalPeriod(strTermID)

	Set objTerms = objNSNET.GetSubjectGroupTermList(strSubjClassID)

	If bYearTotal Then
		' Здесь либо strTermID = "-1" (Все), либо "-2", "-3", "-4" (-PeriodType), т.е. не настоящий ID.
		Exit Sub
	End If

	If Not objTerms.ExistsByField("TERMID", strTermID) Then
		strTermID = "0"
	End If
	If strTermID = "0" Then
		If strCurrYearID = strSchoolYearID Then
			strTermID = objNSNET.GetCurrentSubjectGroupTermID(-1, -1, strSubjClassID)
		End If
	End If
	Call FixTerm(objTerms)
End Sub

Sub InitTermsForClassWithPeriods()
	strTermID = GetSafeID(Request("TERMID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), "0"))
	bYearTotal = IsYearTotalPeriod(strTermID)

	Set objTerms = objNSNET.GetClassTermList(strClassID)
	If objTerms.EOF Then GenerateError obLanguage("Filter","kErrTermNotFound")

	If bYearTotal Then
		' Здесь либо strTermID = "-1" (Все), либо "-2", "-3", "-4" (-PeriodType), т.е. не настоящий ID.
		Exit Sub
	End If

	strTermId = GetSafeIDForRs(strTermId, objTerms, "TERMID")
	If strTermId = "0" Then
		strTermID = objTerms("TERMID")
	End If
End Sub

Sub InitTermsForClass_IUP(bAllowAll)
	strTermID = GetSafeID(Request("TERMID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), "0"))
	If Left(strTermID, 1) = "-" Then
		' Здесь либо strID = "-1" (Все), либо "-2", "-3", "-4" (-PeriodType), т.е. не настоящий ID.
		' Эта ф-ция работает только с термами, либо со значением "Все" (если bAllowAll).
		' Поэтому все "-PeriodType" переходят в "-1" (чтобы по возможности сохранить выбор на предыдущей стр.)
		' Для работы также с PeriodTypes - используйте DrawTermsAndYearTotals.
		strTermID = "-1"
	End If

	If bIsIupGrade Then
		strTermID = objNSNET.GetSafeIupGradeTermID(strTermID, strCurrYearId, strIupGrade)	
	Else
		strTermID = objNSNET.GetSafeClassTermID(strTermID, strClassID)
	End If

	If Not bAllowAll And strTermId = "-1" Then
		' here strTermId = "-1" means that All
		strTermId = "0"
	End If
	If strTermID="0" Then
		If strCurrYearID = strSchoolYearID Then
			If bIsIupGrade Then
				strTermID = objNSNET.GetCurrentSubjectGroupTermID(strIupGrade, strCurrYearId, -1)
			Else
				strTermID = objNSNET.GetCurrentClassTermID(strClassID, strSchoolYearID)
			End If
		End If
	End If
	
	If bIsIupGrade Then
		Set objTerms = objNSNET.GetIupGradeTermList(strCurrYearId, strIupGrade)
	Else
		Set objTerms = objNSNET.GetClassTermList(strClassID)
	End If
	FixTerm(objTerms)
End Sub

Sub InitTermsForClass(bAllowAll, strClassID)
	strTermID = GetSafeID(Request("TERMID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), "0"))
	If Left(strTermID, 1) = "-" Then
		' Здесь либо strID = "-1" (Все), либо "-2", "-3", "-4" (-PeriodType), т.е. не настоящий ID.
		' Эта ф-ция работает только с термами, либо со значением "Все" (если bAllowAll).
		' Поэтому все "-PeriodType" переходят в "-1" (чтобы по возможности сохранить выбор на предыдущей стр.)
		' Для работы также с PeriodTypes - используйте DrawTermsAndYearTotals.
		strTermID = "-1"
	End If
	strTermID = objNSNET.GetSafeClassTermID(strTermID, strClassID)

	If Not bAllowAll And strTermId = "-1" Then
		' here strTermId = "-1" means that All
		strTermId = "0"
	End If
	If strTermID="0" Then
		If strCurrYearID = strSchoolYearID Then
			strTermID = objNSNET.GetCurrentClassTermID(strClassID, strSchoolYearID)
		End If
	End If
	
	Set objTerms = objNSNET.GetClassTermList(strClassID)
	FixTerm(objTerms)
End Sub

Function IsYearTotalPeriod(strTermID)
	IsYearTotalPeriod = False
	If Len(strTermID) Then IsYearTotalPeriod = (Left(strTermID, 1) = "-")
End Function

Sub FixTerm(objTerms)
	If strTermID <> "0" Then Exit Sub
	If objTerms.EOF Then Exit Sub
	strTermID=objTerms("TERMID") 
End Sub

Sub FixTermToken()
	Dim termInToken
	termInToken = Clng(GetSafe(stCurrTerm, -kExamType))
	If  termInToken <= -kExamType Then
		 ' Экзамен не разрешён и здесь индексация другая, поэтому: -3(Экзамен) и -4(Итог) превращаем в -2 (Итог)
		Call obTokenMgr.SetData(strToken, stCurrTerm, -2)
	'ElseIf termInToken = -kYearType Then
		 ' здесь индексация другая, поэтому: -2(Год) превращаем в -1 (Год)
		'Call obTokenMgr.SetData(strToken, stCurrTerm, -1)
	End If
End Sub

Sub InitSchoolTerms()
	Call FixTermToken()
	strTermID = GetSafeID(Request("TERMID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), "0"))
	Set objTerms = objNSNET.GetAssignedTermList(strCurrYearID)
	If objTerms.EOF Then strTermID = "0" : Exit Sub
	If CLng(strTermID) >= 0 Then strTermID = objNSNET.GetSafeTermIDForYear(strTermID, strCurrYearID)
	If strTermID <> "0" Then Exit Sub
	strTermID = GetSafeID(objTerms("TERMID"), Null)
End Sub

Sub InitYearTerms()
	strTermID = GetSafeID(Request("TERMID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), "0"))
	Set objTerms = objNSNET.GetTermList(strCurrYearID)
	If objTerms.EOF Then strTermID = "0" : Exit Sub
	strTermID = objNSNET.GetSafeTermIDForYear(strTermID, strCurrYearID)
	If strTermID <= 0 Then strTermID = GetSafeID(objTerms("TERMID"), Null)
End Sub

Sub TermLimits( strTermID )
	Dim objRs
	Set objRs = objNSNET.GetTermInfo(strTermID)
	If objRs.EOF Then GenerateError obLanguage("Filter","kErrTermNotFound")
	dtTermStart = objRs("STARTDATE")
	dtTermEnd = objRs("ENDDATE")
End Sub

Sub DrawTerms( theStrForm )
	If strTermID = "0" Then
		DrawWarning GetNoTermsInYearDefineTermsTypes(theStrForm, False)
		bExit = True
	ElseIf objTerms.EOF Then
		DrawWarning obLanguage("Common","kNoTermsInYear") & obLanguage("Common","kNoSubjectInTerms")
		 bExit = True
	Else
		DrawFilterRow theStrForm, obLanguage("Common","kPeriod"), "TERMID", objTerms, "TERMID", "TERMNAME", strTermID, False
	End If
End Sub

Sub DrawTermsAll( theStrForm )
	If strTermID = "0" Then
		DrawWarning obLanguage("Common","kNoTermsInYear")
		bExit = True
		Exit Sub
	End If
	DrawFilterRow theStrForm, obLanguage("Common","kPeriod"), "TERMID", objTerms, "TERMID", "TERMNAME", strTermID, True
End Sub

Sub DrawTermsYear( theStrForm )
	If strTermID = "0" Then
		DrawWarning GetNoTermsInYearDefineTermsTypes(theStrForm, False)
		bExit = True
		Exit Sub
	End If
	Call DrawFilterRow(theStrForm, obLanguage("Filter","kMarkFor"), "TERMID", objTerms, "TERMID", "TERMNAME", strTermID, obLanguage("Common","kYear"))
End Sub

Sub DrawPeriodsFilter( theStrForm, header, arr )
	Dim strChange
	Dim errMsg
	errMsg = GetNoTermsInYearDefineTermsTypes(theStrForm, False)
	If strTermID = "0" Then
		DrawWarning errMsg
		bExit = True
		Exit Sub
	End If
	strChange = IIF(theStrForm="", "dataChanged();", "OnChangeSelect('" & theStrForm & "','" & strScriptName & "');")
	OpenFormGroup header
		
		%>
			<select NAME="TERMID" class="form-control" onChange="<%=strChange%>"><%
				PopulateSelect objTerms, "TERMID", "TERMNAME", strTermID
				PopulateSelectArray convert1Dto2D(arr), strTermID %> 
			</select>
		<%
	CloseFormGroup
End Sub

Sub DrawTermsAndYearTotals( theStrForm )
	' См. Sub DrawFilterRow. Отличие: в конец добавлены "PeriodTypes" со знаком "-".
	Dim arr
	arr = Array( _
		CStr(-kYearType), obLanguage("Common","kYear"), _
		CStr(-kExamType), obLanguage("Common","kExam"), _
		CStr(-kTotalType), obLanguage("Common","kYearTotal"))

	Call DrawPeriodsFilter( theStrForm , obLanguage("Common","kPeriod"), arr )
End Sub

Function ReadTerm()
	ReadTerm = obTokenMgr.GetData(strToken, stCurrTerm )
End Function

Sub WriteTerm()
    Call obTokenMgr.SetData(strToken, stCurrTerm, strTermID)
End Sub

Function GetLastTermDate(SchoolYearID)
	GetLastTermDate = objNSNET.GetLastTermDate(SchoolYearID)
End Function

%>
