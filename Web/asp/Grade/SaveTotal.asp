<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<!-- #INCLUDE FILE="Total_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	SID=<Students IDs>
'	MarkType{studentID}=<Type of mark: 1 - оценка, 0 - без оценки, -1: 'н/а', -2: 'осв.', может быть зачёт/незачёт>
'	Mark{studentID}=<Grade for Student>

Dim nPeriodID, strSubjClassID, nPeriodType
Dim arrMarks, nMarkType, i, j
Dim bExam, nExamTypeCnt, strExamTypeID
Dim transaction
Dim strBackPage
Dim bEditConditional ' Флаг для редактирования Условников в уже закрытом году
Dim yearIsClosed

strBackPage = GetSafeStr(Request("BACKPAGE"), -1, "/angular/school/journal/totals") & "?"
bEditConditional = (GetSafeLng(Request("EditConditional"), 0) = 1)

If Not bEditConditional Then
	yearIsClosed = objNSNET.IsYearClosed(strCurrYearID)
	If yearIsClosed Then GenerateError obLanguage("Common","kErrYearIsClosed")
End If

If (yearIsClosed And Not bEditConditional) Or Not (HasUserRight(arTotalsEditAll) Or HasUserRight(arTotalsEditSelf)) Then GenerateError obLanguage("Common","kErrPageAccess")

If Request("SID").Count > 0 Then
	strSubjClassID = obTokenMgr.GetData(strToken,stCurrSubjClass)
	nPeriodType = GetSafeLng( Request("TYPE"), NULL)
	nPeriodID = GetSafeID( Request("PERIODID"), NULL )
	bIsGradeSystemPass = obTokenMgr.GetData(strToken, stIsGradeSystemPass)

	bExam = Not ((nPeriodType = kTermType) Or (nPeriodType = kYearType) Or (nPeriodType = kTotalType))

	ReDim arrMarks(1, Request("SID").Count-1)

	For j = 0 To UBound(arrMarks, 2)
		arrMarks(0, j) = GetSafeLng( Request("SID")(j+1), NULL )
		arrMarks(1, j) = GetCurrMark(j+1, "Mark", "MarkType")
	Next

	If bExam Then
		For j = 0 To UBound(arrMarks, 2)
			If arrMarks(1, j) = 0 Then
				' Если оценки нет, тогда смотрим отметку "по выбору"
				If Not IsDull(Request("AtOpt_" & j)) Then
					arrMarks(1, j) = Null ' в этом случае будет запись в таблице YEARTOTALS с Null, а если arrMarks(1, j) = 0 - то записи не будет.
				End If
			End If
		Next
	End If
	Call objNSNET.SaveStudentsPeriodMarks(strCurrYearId, strSubjClassID, nPeriodID, nPeriodType, arrMarks)
	TestError obLanguage("Grade","kErrSaveGrades")
End If
	
If bIsAjaxCall Then
	Dim result
	Set result = new JSONResult
	Response.Write result
Else
	RedirectTo strBackPage , null
End If

Function GetCurrMark(ind, strMarkName, strMarkTypeName)
	Dim nMarkType, nMark

	nMarkType = GetSafeLng( Request(strMarkTypeName)(ind), NULL)

	If nMarkType < 0 Or bIsGradeSystemPass Then
		nMark = nMarkType
		If bIsGradeSystemPass And nMark = 0 Then
			nMark = Empty
		End If
	Else
		If IsDull(Request(strMarkName)(ind)) Then nMark = Empty Else nMark = GetSafeLng( Request(strMarkName)(ind), Null )
	End If

	GetCurrMark = nMark
End Function%>