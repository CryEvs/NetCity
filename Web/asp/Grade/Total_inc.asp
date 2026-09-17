<!-- #INCLUDE FILE="Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const ind_TermID	= 0
Const ind_TermName	= 1
Const ind_TermStart	= 2

Const kIndYearType		= 0
Const kIndYearGSPass	= 1
Const kIndTotalType		= 2
Const kIndTotalGSPass	= 3

Const indExamTypeID = 0
Const indExamAbbr	= 1

Dim bEmptyExamTypes, arrExamTypes, nExamTypesCnt
Dim bIsGradeSystemPass, nGradeSystem

Function GetPageTitle()
	GetPageTitle = obLanguage("Grade","kTotals") + " (старые)"
End Function

Function GetExamTypes()
	Dim objSGExamTypes
	GetExamTypes = Empty
	Set objSGExamTypes = objNSNET.GetSGExamTypes(strSubjClassID, -1)
	If objSGExamTypes.EOF Then
		Exit Function
	End If
	GetExamTypes = objSGExamTypes.GetRows( ,,Array("PERIODTYPEID", "ABBR") )
End Function

Sub	DrawTotalTable( adoStudentMarksRs )
	Dim i, j, nListNum
	Dim adoTermMarksRs
	Dim arrTotals, ind
	Dim arrExamsMarks
	Dim objCSGInfo
	Dim nMaxSYMark, nMinSYMark
	Dim bPass
	Dim arrStudentOnIndividualEducForm
	Dim strStudentRowClass
	Dim nStudentID

	If adoStudentMarksRs.EOF Then Exit Sub
	Set arrStudentOnIndividualEducForm = obTokenMgr.GetData( strToken, stStudentsOnIndividualEducForm )
	Set objCSGInfo = objNSNET.GetSubjectGroupInfo(strSubjClassID)
	If objCSGInfo.EOF Then
		GenerateError obLanguage("Common","kUnexpErr")
	Else
		bIsGradeSystemPass = (GetSafeLng(objCSGInfo("GRADINGSYS"), Null) = kGradingSystem_Pass)
		nGradeSystem = IIf(bIsGradeSystemPass, kGradingSystem_Pass, kGradingSystem_Mark)
	End If

	Call InitSchoolSettings( objNSNET )
	nMaxSYMark = arrSchoolSettings( 1, kSSIndex_MaxMark )
	nMinSYMark = arrSchoolSettings( 1, kSSIndex_MinMark )

	Call GetMarkTypesInfo(True, nMinSYMark, nMaxSYMark)

	arrExamTypes = GetExamTypes()
	bEmptyExamTypes = IsEmpty(arrExamTypes)
	nExamTypesCnt = 0
	If Not bEmptyExamTypes Then
		nExamTypesCnt = Ubound( arrExamTypes, 2 ) + 1
	End If

	Call GetTotalMarks( adoStudentMarksRs, arrTotals, arrExamsMarks )
	adoStudentMarksRs.MoveFirst

	Response.Write "<table class=""table table-bordered table-hover table-striped table-xs print-block"">"
	Call DrawTableHeader()

	Set adoTermMarksRs = adoStudentMarksRs("chapTermMarks").Value
	ind = 0

	While Not adoStudentMarksRs.EOF
		nStudentID = CLng(adoStudentMarksRs("ID"))
		Response.Write "<tr class=""text-center" & IIF(arrStudentOnIndividualEducForm.Contains(nStudentID), " individual-educ", "") & """><td align=""left"" nowrap class=""student-name text-nowrap"">" &  "<span>" & (ind + 1) & ". " & DB2HTML_BR(adoStudentMarksRs("Name")) & "</span>" & "</td>"
		For i = 0 To UBound(arrTerms, 2)
			Do While Not adoTermMarksRs.EOF
				If DateDiff("d", CDate(adoTermMarksRs("STARTDATE")), CDate(arrTerms(ind_TermStart, i)), 0, 0) <= 0 Then Exit Do
				adoTermMarksRs.MoveNext
			Loop
			If Not adoTermMarksRs.EOF Then
				If CLng(arrTerms(ind_TermID, i)) = CLng(adoTermMarksRs("PERIODID")) Then
					bPass = (GetSafeLng(adoTermMarksRs("GRADINGSYS"), Null) = kGradingSystem_Pass)
					Call DrawMark( adoTermMarksRs("MARK"), bPass )
					adoTermMarksRs.MoveNext
				Else
					Call DrawMark(Empty, bIsGradeSystemPass)
				End If
			Else
				Call DrawMark(Empty, bIsGradeSystemPass)
			End If
		Next
		
		Call DrawMark(arrTotals(kIndYearType, ind), arrTotals(kIndYearGSPass, ind))

		If bEmptyExamTypes Then
			Call DrawMark(Empty, bIsGradeSystemPass)
		Else
			For j = 0 To nExamTypesCnt - 1
				Call DrawMark(arrExamsMarks(j, ind), False)
			Next
		End If

		Call DrawMark(arrTotals(kIndTotalType, ind), arrTotals(kIndTotalGSPass, ind))
		
		Response.Write "</tr>"
		ind = ind + 1
		adoStudentMarksRs.MoveNext
	WEnd
	Response.Write "</table><br>"
End	Sub

Sub GetTotalMarks( adoStudentMarksRs, arrTotals, arrExamsMarks )
	Dim nCurrMark, i, j
	Dim adoTotalMarksRs
	Dim nCurrExamTypeID
	Dim bCurrPass
	
	ReDim arrTotals(3, adoStudentMarksRs.RecordCount - 1)
	If bEmptyExamTypes Then
		arrExamsMarks = Empty
	Else
		ReDim arrExamsMarks(nExamTypesCnt - 1, adoStudentMarksRs.RecordCount - 1)
	End If

	i = 0
	Set adoTotalMarksRs = adoStudentMarksRs("chapTotalMarks").Value

	While Not adoStudentMarksRs.EOF
		' non exams
		bCurrPass = bIsGradeSystemPass
		nCurrMark = GetCurrTotalMark( adoTotalMarksRs, kYearType, bCurrPass )
		arrTotals(kIndYearType, i) = nCurrMark
		arrTotals(kIndYearGSPass, i) = bCurrPass

		bCurrPass = bIsGradeSystemPass
		nCurrMark = GetCurrTotalMark( adoTotalMarksRs, kTotalType, bCurrPass )
		arrTotals(kIndTotalType, i) = nCurrMark
		arrTotals(kIndTotalGSPass, i) = bCurrPass

		' exams
		If Not bEmptyExamTypes Then
			For j = 0 To nExamTypesCnt - 1
				nCurrExamTypeID = GetSafeLng(arrExamTypes(indExamTypeID, j), Null)

				nCurrMark = GetCurrTotalMark( adoTotalMarksRs, nCurrExamTypeID, bIsGradeSystemPass )
				arrExamsMarks(j, i) = nCurrMark
			Next
		End If

		i = i + 1
		adoStudentMarksRs.MoveNext
	WEnd
End	Sub

Function GetCurrTotalMark( adoTotalMarksRs, nType, ByRef bCurrPass )
	Dim nCurrMark

	nCurrMark = Empty
	bCurrPass = bIsGradeSystemPass
	If Not adoTotalMarksRs.EOF Then
		If CLng(adoTotalMarksRs("PERIODTYPE")) = nType Then
			nCurrMark = adoTotalMarksRs("MARK")
			bCurrPass = (GetSafeLng(adoTotalMarksRs("GRADINGSYS"), nGradeSystem) = kGradingSystem_Pass)
			adoTotalMarksRs.MoveNext
		End If
	End If
	GetCurrTotalMark = nCurrMark
End	Function

Sub DrawMark(ByVal nMark, bIsGradeSystemPass)
	Response.Write "<td>" & DB2HTML(GetMark(nMark, bIsGradeSystemPass)) & "</td>"
End	Sub

Sub PrepareExamColumn(nExamRowSpan, nExamColSpan, strExamTitle)
	If bEmptyExamTypes Then
		nExamColSpan = 1
	Else
		nExamColSpan = nExamTypesCnt
	End If

	strExamTitle = obLanguage("Grade","kExamTitle")
	If nExamColSpan = 1 Then
		If Not bEmptyExamTypes Then
			strExamTitle = strExamTitle & " " & GetSafeStr(arrExamTypes(indExamAbbr, 0), -1, "")
		End If
		nExamRowSpan = 2
	Else
		nExamRowSpan = 1
	End If
End Sub

Sub DrawExamSubColumn(nExamColSpan, bLink)
	Dim j, strCurrAbbr, nLen
	Dim strText, strExamTypeID

	If nExamColSpan > 1 Then
		For j = 0 To nExamTypesCnt - 1
			strCurrAbbr = GetSafeStr(arrExamTypes(indExamAbbr, j), -1, "")
			nLen = Len(strCurrAbbr)

			If nLen = 0 Then
				If bLink Then
					strText = "&nbsp;&nbsp;&nbsp;"
				Else
					strText = "&nbsp;_&nbsp;"
				End If
			ElseIf nLen = 1 Then
				strText = "&nbsp;" & DB2HTML(strCurrAbbr) & "&nbsp;"
			Else
				strText = DB2HTML(strCurrAbbr)
			End If

			If bLink Then
				strExamTypeID = GetSafeID(arrExamTypes(indExamTypeID, j), Null)
				Response.write GetGradeLink(strText, strExamTypeID, 1, 1)
			Else
				Response.write "<th>" & strText & "</th>"
			End If
		Next
	End If
End Sub
%>
