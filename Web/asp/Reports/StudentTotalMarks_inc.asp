<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	CLID=<Class ID>
'	SID=<Student ID>
'	RP="R" - send report

Const kArrTermID		= 0
Const kArrTermName		= 1
Const kArrSubjectID		= 0
Const kArrSubjectName	= 1
'Const kOverTerms		= 5 'Total + exam + verbal exam + written exam + year
Const kOverTerms		= 2 'year+total. Exams - теперь динамические и их кол-во опр-ся отдельно.

Dim strClassID, strStudentID, strStudentName, strClassName
Dim rsSubjects, objTermsRs, arrTerms
Dim strSIDArray, bNoMarks, objDSCon
Dim bNoSeparate
Dim objStudents
Dim NumberMsgToParents, NumberMsgToStudents
Dim arrStudents
Dim nMaxSYMark, nMinSYMark
Dim bIsStaff, strReportName

Sub specialRead()
	bIsStaff = CBool(Request("ISTF") = "1")
	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0")
	bNoSeparate = CBool(GetSafeStr(Request("SPRT"), 1, "0") = "1")
	strStudentID = "-1"
	If Not bNoSeparate Then
		strStudentID = GetSafeID(Request("SID"), "0")
		strStudentName = objNSNET.GetUserNickName(strStudentID)
		strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
		If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then
			GenerateError obLanguage("Common","kNoAccess")
		End If
	End If
	strReportName = IIF(bIsStaff, obLanguage("ReportNames","kRNTotalReportsForStaff",strFunctionalityType), obLanguage("ReportNames","kRNTotals"))
End Sub

Sub specialMain()
	strClassName = objNSNET.GetClassName(strClassID)
	Set objStudents = objNSNET.GetStudentTotalMarks(strClassID, strStudentID, strCurrYearID)

	If objStudents.EOF Then 
		bNoMarks = True
	Else
		Set rsSubjects = objStudents("rsSubjects").Value
		If objStudents("MarksCount").Value = 0 Then
			bNoMarks = True
		Else
			bNoMarks = False
		End If

		If Not bNoMarks Then
			Set objTermsRs = objNSNET.GetClassTermList(strClassID)
			arrTerms = objTermsRs.GetRows(,,Array("TERMID", "TERMNAME"))

			Call InitSchoolSettings( objNSNET )
			nMaxSYMark = arrSchoolSettings( 1, kSSIndex_MaxMark )
			nMinSYMark = arrSchoolSettings( 1, kSSIndex_MinMark )
			Call GetMarkTypesInfo(True, nMinSYMark, nMaxSYMark) ' Если не известно точно значение bIsGradeSystemPass, то передаём True и получаем полный список
		End If
	End If

	If Not bNoMarks Then
		Call GetReport()
	End If
	obTokenMgr.SetData strToken, stSeparate, IIf(bNoSeparate, "1", "0")
End Sub

Function GetTableHeader()
End Function

Function GetTableHeaderString()
End Function

' Здесь получается таблица отчёта для одного ученика
Function GetReportTable(objRs, strStudentID)
	Dim nTermTypeID, strReport, i, j
	Dim nCnt, nIndex, bDrawYear, bDrawExam, bDrawTotal, nPeriodsCnt, Cnt
	Dim rsSubjectMarks
	Dim bDrawVerbalExam, bDrawWrittenExam
	Dim bTypeWasFound
	Dim nOldPeriodID, nOldTypeOrder, bDubl
	Dim bIsGradeSystemPass, bIsExamType
	Dim nPeriodId, nTypeOrder
	Dim strNextStudentID
	Dim objExamTypes, arrExamTypes, nExamTypesCnt, arrDrawExams

	Set objExamTypes = objNSNET.GetExamTypesForClass(strClassID, strStudentID)
	If objExamTypes.EOF Then
		ReDim arrExamTypes(1, 0)
		arrExamTypes(0,0) = 0
		arrExamTypes(1,0) = obLanguage("Reports","kExamMark_") & obLanguage("Common","kMark_")
	Else
		arrExamTypes = objExamTypes.GetRows(,,Array("PERIODTYPEID", "TITLE"))
	End If
	nExamTypesCnt = UBound(arrExamTypes, 2)
	ReDim arrDrawExams(nExamTypesCnt)

	Cnt = UBound(arrTerms, 2)
	nPeriodsCnt = Cnt + 1 + nExamTypesCnt + 1 + kOverTerms

	strReport = GetTableHeader() & "<th rowspan=""2"">" & obLanguage("Reports","kOrderNumberS") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Filter","kCourseGB") & "</th>" & _
		"<th colspan=""" & Cnt + 1 & """>" & obLanguage("Common","kPeriods") &"</th>" & _
		"<th rowspan=""2"">" & obLanguage("Reports","kYearMark_") &"<br>"& obLanguage("Common","kMark_") & "</th>" & _
		"<th colspan=""" & nExamTypesCnt + 1 & """>" & obLanguage("Reports","kExamMark_") &"<br>"& obLanguage("Common","kMark_") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Reports","kTotalMark_") & "<br>" & obLanguage("Common","kMark_") & "</th></tr>" & "<tr>"
	For i = 0 To Cnt
		strReport = strReport & "<th>" & DB2HTML(arrTerms(kArrTermName, i)) & "</th>"
	Next
	For i = 0 To nExamTypesCnt
		strReport = strReport & "<th>" & DB2HTML(arrExamTypes(1, i))& "</th>"
	Next
	
	Do While Not objRs.EOF
		nCnt = nCnt + 1
		strReport = strReport & "</tr><tr><td>&nbsp;" & CStr(nCnt) & "&nbsp;</td>" & _
			"<td class=""cell-text"">" & db_2_html(GetSafeStr(objRs("SUBJECTNAME"), -1, Null)) 
		Set rsSubjectMarks = objRs("rsSubjectMarks").Value
		nIndex = 0
			
		bDrawYear = False : bDrawTotal = False ': bDrawExam = False : bDrawVerbalExam = False : bDrawWrittenExam = False

		For i = 0 To nExamTypesCnt
			arrDrawExams(i) = False
		Next

		bDubl=False
		nOldPeriodID=0
		nOldTypeOrder=0
		While Not rsSubjectMarks.EOF
			nPeriodId = GetSafeLng(rsSubjectMarks("PERIODID"), Null)
			nTypeOrder = GetSafeLng(rsSubjectMarks("TYPEORDER"), Null)
			nTermTypeID =GetSafeLng(rsSubjectMarks("PERIODTYPE"), Null)
			bIsExamType = (GetSafeStr(rsSubjectMarks("ISEXAM"), -1, "N") = "Y")

			'If bIsExamType Then
			'	bIsGradeSystemPass = False
			'Else
			'	bIsGradeSystemPass = (GetSafeLng(rsSubjectMarks("GRADINGSYS"), kGradingSystem_Mark) = kGradingSystem_Pass)
			'End If
			bIsGradeSystemPass = (GetSafeLng(rsSubjectMarks("GRADINGSYS"), kGradingSystem_Mark) = kGradingSystem_Pass)

			If nTermTypeID = kTermType Then
				If nPeriodId <> nOldPeriodID Then 
					nOldPeriodID = nPeriodId
					bDubl = False
					For i = nIndex to Cnt 
						If nPeriodId = arrTerms(kArrTermID, i) Then
							strReport = strReport & "</td><td>" & db_2_html(GetMark(rsSubjectMarks("MARK"), bIsGradeSystemPass))
							rsSubjectMarks.MoveNext
							nIndex=i
							Exit For
						Else
							strReport = strReport & "</td><td>&nbsp;"
						End If
					Next
				Else 
					bDubl = True
					strReport = strReport & "&nbsp;"  & db_2_html(GetMark(rsSubjectMarks("MARK"), bIsGradeSystemPass))
				End If
			Else
				If nTypeOrder <> nOldTypeOrder or nTypeOrder = 800 Then
					bDubl = False
					nOldTypeOrder = nTypeOrder
					If nTermTypeID = kYearType Then
						strReport = strReport & DrawEmptyCells(nIndex, Cnt, kBlank)
						strReport = strReport & "</td><td>" & db_2_html(GetMark(rsSubjectMarks("MARK"), bIsGradeSystemPass))
						bDrawYear = True
						rsSubjectMarks.MoveNext
					Else
						bTypeWasFound = False
						For i = 0 To nExamTypesCnt
							If nTermTypeID = arrExamTypes(0, i) Then
								strReport = strReport & DrawEmptyCells(nIndex, Cnt, kBlank)
								bTypeWasFound = True
								If Not bDrawYear Then
									strReport = strReport & "</td><td>&nbsp;"
									bDrawYear = True
									nIndex = nIndex + 1
								End If
								For j = 0 To i - 1
									If Not arrDrawExams(j) Then
										strReport = strReport & "</td><td>&nbsp;"
										arrDrawExams(j) = True
										nIndex = nIndex + 1
									End If
								Next
								strReport = strReport & "</td><td>" & db_2_html(GetMark(rsSubjectMarks("MARK"), bIsGradeSystemPass))
								arrDrawExams(i) = True
								rsSubjectMarks.MoveNext
							End If
						Next	

						If Not bTypeWasFound And (nTermTypeID = kTotalType) Then
							strReport = strReport & DrawEmptyCells(nIndex, Cnt, kBlank)
							If Not bDrawYear Then
								strReport = strReport & "</td><td>&nbsp;"
								bDrawYear = True
								nIndex = nIndex + 1
							End If
							For i = 0 To nExamTypesCnt
								If Not arrDrawExams(i) Then
									strReport = strReport & "</td><td>&nbsp;"
									arrDrawExams(i) = True
									nIndex = nIndex + 1
								End If
							Next
							strReport = strReport & "</td><td>" & db_2_html(GetMark(rsSubjectMarks("MARK"), bIsGradeSystemPass))
							bDrawTotal = True
							rsSubjectMarks.MoveNext
						End If
					End If
				Else
					bDubl = True
					strReport = strReport & "&nbsp;"  & db_2_html(GetMark(rsSubjectMarks("MARK"), bIsGradeSystemPass))
					rsSubjectMarks.MoveNext
				End IF
			End	If
			If Not bDubl Then 
				nIndex = nIndex + 1
			Else
				If nTermTypeID = kTermType Then rsSubjectMarks.MoveNext
			End IF
		Wend
		strReport = strReport & "</td>"
		strReport = strReport & DrawEmptyCells(nIndex, nPeriodsCnt - 1, kBlank)
		objRs.MoveNext

		If Not objRs.EOF Then
			strNextStudentID = GetSafeID(objRs("STUDENTID"), Null)
			If strStudentID <> strNextStudentID Then Exit Do
		End If
	Loop
	strReport = strReport & "</td></tr></table>"
	GetReportTable = strReport
End Function

Function DrawTableSTR(bIsExcel)
	Dim reportStringBuilder
	Dim strReportTable, k
	Dim strStudentFullName 

	k = -1
	ReDim arrStudents(1, k)
	Set reportStringBuilder = new StringBuilder

	While Not rsSubjects.EOF
		strStudentID = GetSafeID(rsSubjects("STUDENTID"), Null)
		strStudentFullName = MakeShortNickName(rsSubjects)
		If bNoSeparate Then
			Call reportStringBuilder.Append(GetHeader(strStudentID, strStudentFullName))
		Else
			If bIsExcel Then
				Call reportStringBuilder.Append(GetPageTitleExcel(strReportName, Array(obLanguage("Reports","kLastNameFirstName")&" "&obLanguage("Reports","kOfStudent",strFunctionalityType), strStudentFullName, obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),strClassName)))
			Else 
				Call reportStringBuilder.Append(GetPageTitlePrintWithUserPhoto(strReportName, strStudentID, Array(obLanguage("Reports","kLastNameFirstName")&" "&obLanguage("Reports","kOfStudent",strFunctionalityType), strStudentFullName, obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),strClassName)))
			End If
		End If

		strReportTable = GetReportTable(rsSubjects, strStudentID)
		Call reportStringBuilder.Append(strReportTable)
		Call reportStringBuilder.Append(GetFooter() & "<br />")

		k = k + 1
		ReDim Preserve arrStudents(1, k)
		arrStudents(0, k) = strStudentID
		arrStudents(1, k) = reportStringBuilder.ToString
		reportStringBuilder.Clear()
	WEnd

	DrawTableSTR = arrStudents
End Function
%>
