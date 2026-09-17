<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

'Const kOverTerms			= 5 'year+exam+verb.exam+wr.exam+total
Const kOverTerms			= 2 'year+total. Exams - теперь динамические и их кол-во опр-ся отдельно.
Const kArrTermID			= 0
Const kArrTermName			= 1
Const kArrSubjectID			= 0
Const kArrSubjectAbbrev		= 1
Const kArrIsGroupExist		= 2
Const bIupClassesExclude = False

Dim strClassID, strTeacherID, strSubjectTeacherId
Dim objSubjectsRs, arrSubjects, nSubjectsCnt
Dim objTermsRs, arrTerms, nTermsCnt
Dim objStudentsRs, objStudentsMarksRs
Dim arrExamTypes, nExamTypesCnt, arrDrawExams
Dim bAll, bNoMarks

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNGradeSummary")
End Function
Function GetTitleEx()
	GetTitleEx = GetSafeStr(objNSNET.GetClassName(strClassID), -1, Null)&" "& obLanguage("Movement","kOfClass",strFunctionalityType)
End Function
Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kClass",strFunctionalityType), objNSNET.GetClassName(strClassID), _
		obLanguage("Common","kClassChief",strFunctionalityType), objNSNET.GetUserNickName(strTeacherID) )
End Function

Sub specialRead()
	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0")
	strTeacherID = GetSafeID(Request("TID"), Null)

	If HasUserRight(arReportsForAllClasses) Then bAll = True : Exit Sub
	If HasUserRight(arReportsForAssignedClass) Then bAll = False
End Sub

Sub specialMain()
	Dim objExamTypes

	If Not bAll And Not objNSNET.IsClassChief(strClassID, strUserID) Then strSubjectTeacherId = strUserID
	Set objStudentsRs = objNSNET.GetClassStudentListForTerm_IUP(strClassID, Empty, strCurrYearID, -1, False, bIupClassesExclude)
	Set objSubjectsRs = objNSNET.GetSubjectsList(strClassID, 0, IIF(IsDull(strSubjectTeacherId), 0, strSubjectTeacherId))
	arrSubjects = objSubjectsRs.GetRows(,,Array("SUBJECTID", "SUBJECTNAME", "ISGROUPEXIST"))
	nSubjectsCnt = UBound(arrSubjects, 2)+1
	Set objStudentsMarksRs = objNSNET.GetStudentsSubjectsMarks(strClassID, strCurrYearID, IIF(IsDull(strSubjectTeacherId), 0, strSubjectTeacherId))
	bNoMarks = False
	If objStudentsMarksRs.EOF Then
		bNoMarks = True
		strErrMsg = obLanguage("Reports","kNoMarksForClass",strFunctionalityType)
		Exit Sub
	End If
	Set objTermsRs = objNSNET.GetClassTermList(strClassID)
	arrTerms = objTermsRs.GetRows(,,Array("TERMID", "TERMNAME"))
	nTermsCnt = UBound(arrTerms, 2)

	Set objExamTypes = objNSNET.GetExamTypesForClass(strClassID, -1)
	If objExamTypes.EOF Then
		ReDim arrExamTypes(1, 0)
		arrExamTypes(0,0) = 0
		arrExamTypes(1,0) = obLanguage("Reports","kExamMark")
	Else
		arrExamTypes = objExamTypes.GetRows(,,Array("PERIODTYPEID", "TITLE"))
	End If
	nExamTypesCnt = UBound(arrExamTypes, 2)
	ReDim arrDrawExams(nExamTypesCnt)
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num"">" & _
		"<tr><th class=""text-nowrap"">" & obLanguage("Filter","kN_PP") & "</th>" & _
		"<th><nobr>" & obLanguage("Reports","kFIOstud") & "</nobr><br>" & obLanguage("Reports","kOfStudent",strFunctionalityType) & "</th>" & _
		"<th>&nbsp;</th>"
End Function

Function GetReportTable()
	Dim nStudentID, strReport
	Dim nCnt, nAllTermsCnt
	Dim i, bNewStudent
	Dim nMaxSYMark, nMinSYMark
	Dim strFullName

	strReport = GetTableHeader()
	For i = 0 To nSubjectsCnt-1
		strReport = strReport & "<th class=""vertical small""><i>" & DB_2_HTML(arrSubjects(kArrSubjectAbbrev, i)) & "</i></th>"
	Next

	strReport = strReport & "<th>" & obLanguage("Reports","kDecisionOfPedagCouncil") & "</th>"

	nAllTermsCnt = nTermsCnt + 1 + nExamTypesCnt + 1 + kOverTerms
	nStudentID = 0
	nCnt = 0

	Call InitSchoolSettings( objNSNET )
	nMaxSYMark = arrSchoolSettings( 1, kSSIndex_MaxMark )
	nMinSYMark = arrSchoolSettings( 1, kSSIndex_MinMark )
	Call GetMarkTypesInfo(True, nMinSYMark, nMaxSYMark) ' Если не известно точно значение bIsGradeSystemPass, то передаём True и получаем полный список
	
	Do
		If objStudentsMarksRs.EOF Then
			nStudentID=0
		Else
			nStudentID = GetSafeLng(objStudentsMarksRs("STUDENTID"), Null)
		End If
		Do
			nCnt = nCnt + 1
			strFullName = DB2HTML(MakeFullNickName(objStudentsRs))
			strReport = strReport & DrawNewStudent(nAllTermsCnt, nCnt, strFullName)
			If nStudentID = GetSafeLng(objStudentsRs("STUDENTID"), Null) Then Exit Do

			' ученики без оценок
			bNewStudent = True
			strReport = strReport & DrawEmptyPeriodBlock(0, bNewStudent)
			strReport = strReport & YearCell() & DrawEmptyMarksRow()
			strReport = strReport & DrawEmptyExamMarks()
			strReport = strReport & TotalCell() & DrawEmptyMarksRow()
			objStudentsRs.MoveNext
		Loop Until objStudentsRs.EOF
		If objStudentsRs.EOF Then Exit Do

		' ученик с оценками
		strReport = strReport & DrawPeriodBlock(nStudentID )
		strReport = strReport & DrawYearBlock(nStudentID )
		strReport = strReport & DrawExamBlock(nStudentID )
		strReport = strReport & DrawTotalBlock(nStudentID )
		objStudentsRs.MoveNext
	Loop Until objStudentsRs.EOF

	strReport = strReport & "</tr></table>"
	GetReportTable = strReport
End Function

Function IsStudentCurrent(nStudentID)
	IsStudentCurrent = False
	If objStudentsMarksRs.EOF Then Exit Function
	If nStudentID <> GetSafeLng(objStudentsMarksRs("STUDENTID"), 0) Then Exit Function
	IsStudentCurrent = True
End Function
Function IsPeriodTypeCurrent(nStudentID, nTermType, nPeriodID)
	IsPeriodTypeCurrent = False
	If Not IsStudentCurrent(nStudentID) Then Exit Function
	If nTermType <> GetSafeLng(objStudentsMarksRs("PERIODTYPE"), 0) Then Exit Function
	If nTermType=kTermType And nPeriodID>0 Then
		If nPeriodID <> GetSafeLng(objStudentsMarksRs("PERIODID"), 0) Then Exit Function
	End If
	IsPeriodTypeCurrent = True
End Function
Function IsSubjectCurrent(nStudentID, nTermType, nPeriodID, nSubjectID)
	IsSubjectCurrent = False
	If Not IsPeriodTypeCurrent(nStudentID, nTermType, nPeriodID) Then Exit Function
	If nSubjectID <> GetSafeLng(objStudentsMarksRs("SUBJECTID"), 0) Then Exit Function
	IsSubjectCurrent = True
End Function

Function DrawTotalBlock(nStudentID)
	Dim strReport, bExit
	bExit = Not IsPeriodTypeCurrent(nStudentID, kTotalType, -1)
	strReport = TotalCell()
	If Not bExit Then
		strReport = strReport & DrawMarksRow(nStudentID, kTotalType, -1)
	Else
		strReport = strReport & DrawEmptyMarksRow()
	End If
	DrawTotalBlock = strReport
End Function

Function DrawYearBlock(nStudentID)
	Dim strReport, bExit
	bExit = Not IsPeriodTypeCurrent(nStudentID, kYearType, -1)
	strReport = YearCell()
	If Not bExit Then
		strReport = strReport & DrawMarksRow(nStudentID, kYearType, -1)
	Else
		strReport = strReport & DrawEmptyMarksRow()
	End If
	DrawYearBlock = strReport
End Function

Function DrawExamBlock(nStudentID)
	Dim strReport, i, bExit, nTermType
	strReport = ""
	bExit = False
	For i = 0 To nExamTypesCnt
		nTermType = arrExamTypes(0, i)
		bExit = Not IsPeriodTypeCurrent(nStudentID, nTermType, -1)
		strReport = strReport & ExamCell(i)
		If Not bExit Then
			strReport = strReport & DrawMarksRow(nStudentID, nTermType, -1)
		Else
			strReport = strReport & DrawEmptyMarksRow()
		End If
	Next
	DrawExamBlock = strReport
End Function

Function DrawPeriodBlock(nStudentID )
	Dim strReport, nTermIndex, nPeriodID, bNewRow
	strReport = ""
	nTermIndex=0
	bNewRow=True
	Do While nTermIndex <= nTermsCnt And IsPeriodTypeCurrent(nStudentID, kTermType, -1)
		nPeriodID = GetSafeLng(objStudentsMarksRs("PERIODID"), 0)
		strReport = strReport & TermCell(nTermIndex, bNewRow)
		If nPeriodID = arrTerms(kArrTermID, nTermIndex) Then
			strReport = strReport & DrawMarksRow(nStudentID, kTermType, nPeriodID)
		Else
			strReport = strReport & DrawEmptyMarksRow()
		End If
		nTermIndex = nTermIndex + 1
	Loop 
	DrawPeriodBlock = strReport & DrawEmptyPeriodBlock(nTermIndex, bNewRow)
End Function

Function DrawMarkCell(nStudentID, nTermType, nPeriodID, nSubjectID)
	Dim strReport, bIsExamType, bIsGradeSystemPass, mark
	strReport="<td>"
	Do
		bIsExamType = (GetSafeStr(objStudentsMarksRs("ISEXAM"), 1, "N") = "Y")

'		bIsGradeSystemPass = False
'		If Not bIsExamType Then bIsGradeSystemPass = (GetSafeLng(objStudentsMarksRs("GRADINGSYS"), kGradingSystem_Mark) = kGradingSystem_Pass)
		bIsGradeSystemPass = (GetSafeLng(objStudentsMarksRs("GRADINGSYS"), kGradingSystem_Mark) = kGradingSystem_Pass)

		mark = DB_2_HTML(GetMark(objStudentsMarksRs("MARK"), bIsGradeSystemPass))
		strReport = strReport & "&nbsp;"
		strReport = strReport & mark
		objStudentsMarksRs.MoveNext
	Loop While IsSubjectCurrent(nStudentID, nTermType, nPeriodID, nSubjectID)

	strReport=strReport&"</td>"
	DrawMarkCell=strReport
End Function

Function DrawMarksRow(nStudentID, nTermType, nPeriodID)
	Dim cell, strReport, nSubjectID, nSubjIndex
	strReport=""
	nSubjIndex=0
	Do
		nSubjectID = GetSafeLng(objStudentsMarksRs("SUBJECTID"), 0)
		If nSubjectID <> CLng(arrSubjects(kArrSubjectID, nSubjIndex)) Then
			cell = "<td>&nbsp;</td>"
		Else
			cell = DrawMarkCell(nStudentID, nTermType, nPeriodID, nSubjectID)
		End If
		strReport = strReport & cell
		nSubjIndex = nSubjIndex + 1
	Loop While IsPeriodTypeCurrent(nStudentID, nTermType, nPeriodID)

	DrawMarksRow = strReport & DrawEmptyCells(nSubjIndex, nSubjectsCnt, kBlank)
End Function

Function DrawNewStudent(nAllTermsCnt, nCnt, name)
	Dim rspan
	rspan = " rowspan='" & nAllTermsCnt & "'"
	DrawNewStudent = "</tr><tr><td" & rspan & ">" & CStr(nCnt) & "</td>" & _
			"<td class=""cell-text"" " & rspan & ">" & name & "</td>"
End Function

Function TotalCell()
		TotalCell = NewRow(obLanguage("Reports","kTotalMark"))
End Function
Function YearCell()
		YearCell = NewRow(obLanguage("Reports","kYearMark"))
End Function
Function ExamCell(i)
		ExamCell = NewRow(arrExamTypes(1, i))
End Function

Function DrawEmptyExamMarks()
	Dim txt, strReport, i
	strReport=""
	For i = 0 To nExamTypesCnt
		strReport = strReport & ExamCell(i)
		strReport = strReport & DrawEmptyMarksRow()
	Next
	DrawEmptyExamMarks = strReport
End Function

Function DrawEmptyPeriodBlock(ByVal nTermIndex, ByRef bNewRow)
	Dim strReport
	strReport = ""
	Do While nTermIndex <= nTermsCnt
		strReport = strReport & TermCell(nTermIndex, bNewRow)
		strReport = strReport & DrawEmptyMarksRow()
		nTermIndex = nTermIndex + 1
	Loop
	DrawEmptyPeriodBlock = strReport
End Function

Function DrawCell(txt)
		DrawCell = "<td class=""cell-text"">" & DB_2_HTML(txt) & "</td>"
End Function
Function NewRow(txt)
		NewRow = "</tr><tr>" & DrawCell(txt)
End Function

Function TermCell(ByVal nTermIndex, ByRef bNewRow)
	Dim cell
	cell = arrTerms(kArrTermName, nTermIndex)
	If bNewRow Then
		TermCell = DrawCell(cell)
		bNewRow = False
	Else
		TermCell = NewRow(cell)
	End If
End Function

Function DrawEmptyMarksRow()
	Dim nValue
	nValue = 0
	DrawEmptyMarksRow = DrawEmptyCells(nValue, nSubjectsCnt, kBlank)
End Function

%>
