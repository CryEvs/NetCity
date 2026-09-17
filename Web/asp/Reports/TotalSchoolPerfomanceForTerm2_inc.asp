<% ' © 2007-2008 IRTech. All rights reserved.

Function FillStepResultRow( strStepName )
	FillStepResultRow = "<tr><th>" & DB2HTML(strStepName) & "</th>"
	FillStepResultRow = FillStepResultRow & "<th>" & nStudCntT & "</th><th>" & nSuccessT & "</th><th>" & nOnly5T & "</th><th>" & nOnly4And5T & "</th><th>" & nOne4T & "</th><th>" & nOne3T & "</th><th>" & nNotAdvanceT & "</th><th>" & nNotAdvanceByIllnessT & "</th><th>" & nNotAdvanceByHookyT & "</th><th>" & nFailingT & "</th><th>" & nFailingByOneST & "</th><th>" & nFailingByTwoST & "</th><th>" & nFailingByTwoAndMoreST & "</th>" &_
		"<th>" & DrawIntCell(nNotSettedMarkT) & "</th></tr>"  
End Function

Function FillSumStepsResultRow( nCntSumSteps )
	'nCntSumSteps:
	'2 = 1 + 2 
	'3 = 1 + 2 + 3
	Dim nStudCntT, nFailingByTwoAndMoreST, nFailingByTwoST, nFailingByOneST, nFailingT, i
	Dim nOne3T, nOnly4And5T, nOne4T, nOnly5T, nNotAdvanceByHookyT, nNotAdvanceByIllnessT, nNotAdvanceT, nNullMarkT, nNotSettedMarkT
	Dim nSuccessT
	Dim Title

	If nCntSumSteps = 2 Then
		Title = nGradeJuniorMin & "-" & nGradeMiddleMax & " " &obLanguage("ReportMovement", "kClass")
	ElseIF nCntSumSteps = 3 Then
		Title = nGradeJuniorMin & "-" & nGradeSeniorMax & " " & obLanguage("ReportMovement", "kClass")
	End If

	For i = 0 to nCntSumSteps-1
		nStudCntT = nStudCntT + arrStepsResults(i, 0)
		nSuccessT = nSuccessT + arrStepsResults(i, 1)
		nFailingByTwoAndMoreST = nFailingByTwoAndMoreST + arrStepsResults(i, 12)
		nFailingByTwoST = nFailingByTwoST + arrStepsResults(i, 11)
		nFailingByOneST = nFailingByOneST + arrStepsResults(i, 10)
		nFailingT = nFailingT + arrStepsResults(i, 9)
		nNotAdvanceByHookyT = nNotAdvanceByHookyT + arrStepsResults(i, 8)
		nNotAdvanceByIllnessT = nNotAdvanceByIllnessT + arrStepsResults(i, 7)
		nNotAdvanceT = nNotAdvanceT + arrStepsResults(i, 6)
		nOne3T = nOne3T + arrStepsResults(i, 5)
		nOnly4And5T = nOnly4And5T + arrStepsResults(i, 3)
		nOne4T = nOne4T + arrStepsResults(i, 4)
		nOnly5T = nOnly5T + arrStepsResults(i, 2)
		nNullMarkT = nNullMarkT + arrStepsResults( i, 13 )
		nNotSettedMarkT = nNotSettedMarkT + arrStepsResults( i, 17 )
	Next
	If nStudCnt = 0 Or nStudCntT = 0 Then
		nProcProgT = 0
		nProcQualT = 0
	Else
		nProcProgT = ((nStudCntT - nFailingT - nNotAdvanceT) * 100 ) \ (nStudCntT)
		nProcQualT = (nOnly4And5T * 100) \ (nStudCntT)
	End If
	FillSumStepsResultRow = "<tr><th>" & DB2HTML(Title) & "</th>"
	FillSumStepsResultRow = FillSumStepsResultRow & "<th>" & nStudCntT & "</th><th>" & nSuccessT & "</th><th>" & nOnly5T & "</th><th>" & nOnly4And5T & "</th><th>" & nOne4T & "</th><th>" & nOne3T & "</th><th>" & nNotAdvanceT & "</th><th>" & nNotAdvanceByIllnessT & "</th><th>" & nNotAdvanceByHookyT & "</th><th>" & nFailingT & "</th><th>" & nFailingByOneST & "</th><th>" & nFailingByTwoST & "</th><th>" & nFailingByTwoAndMoreST & "</th>" &_
	"<th>" & DrawIntCell(nNotSettedMarkT) & "</th></tr>" 
End Function

Function FillGradeResultRow( nGrade )
	FillGradeResultRow = "<tr><td>" & DB2HTML(nGrade) & "</td>"
	FillGradeResultRow = FillGradeResultRow & "<td>" & nStudCnt & "</td><td>" & DrawIntCell(nSuccess) & "</td><td>" & DrawIntCell(nOnly5) & "</td><td>" & DrawIntCell(nOnly4And5) & "</td><td>" & DrawIntCell(nOne4) & "</td><td>" & DrawIntCell(nOne3) & "</td><td>" & DrawIntCell(nNotAdvance) & "</td><td>" & DrawIntCell(nNotAdvanceByIllness) & "</td><td>" & DrawIntCell(nNotAdvanceByHooky) & "</td><td>" & DrawIntCell(nFailing) & "</td><td>" & DrawIntCell(nFailingByOneS) & "</td><td>" & DrawIntCell(nFailingByTwoS) & "</td><td>" & DrawIntCell(nFailingByTwoAndMoreS) & "</td>" &_
		"<td>" & DrawIntCell(nNotSettedMark) & "</td></tr>" 
End Function

'Function GetTableHeader()
'	GetTableHeader = "<table class=""ThinTable""  border=""1"" cellspacing=""0"">" &_
'			"<tr><th rowspan='4'>" & obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType) & "</th>" &_
'				"<th rowspan='4'>" & obLanguage("Reports","kStudentsCnt_br") & "</th>" & _
'				"<th colspan='5'>" & obLanguage("Reports","kProgress") & "</th><th colspan='3'>" & obLanguage("Reports","kNotAttested") & "</th>" &_
'				"<th colspan='4'>" & obLanguage("Reports","kNotSuccesBySybjects") & "</th>" &_
'				"<th rowspan='4'>" & obLanguage("Reports","kNotSettedMarks") & "</th></tr>" &_
'			"<tr><th rowspan='3'>" & obLanguage("Reports","kTotalNumber") & "</th>" &_
'				"<th colspan='4'>" & obLanguage("Reports","k_FromThem_") & "</th>" &_
'				"<th rowspan='3'>" & obLanguage("Reports","kTotalNumber") & "</th>" &_
'				"<th colspan='2'>" & obLanguage("Reports","k_FromThem_") & "</th>" &_
'				"<th rowspan='3'>" & obLanguage("Reports","kTotalNumber") & "</th>" &_
'				"<th colspan='3'>" & obLanguage("Reports","k_FromThem_") & "</th></tr>" &_
'			"<tr><th rowspan='2'>" & obLanguage("Reports","kWith") & " «" & kMark_5 & "»" & "</th>" &_
'				"<th colspan='2'>" & obLanguage("Reports","kWith") & " «" & kMark_4 & "»&nbsp;" & obLanguage("Reports","kAnd") & "&nbsp;«" & kMark_5 & "»" & "</th>" &_
'				"<th rowspan='2'>" & obLanguage("Reports","kWithOne") & " «" & kMark_3 & "»" & "</th>" &_
'				"<th rowspan='2'>" & obLanguage("Reports","kIncludingFailByGoodReason") & "</th>" &_
'				"<th rowspan='2'>" & obLanguage("Reports","kIncludingFailByHooky")& "</th>" &_
'				"<th rowspan='2'>" & obLanguage("Reports","kUnsuccessfulByOneSubject") & "</th>" &_
'				"<th rowspan='2'>" & obLanguage("Reports","kUnsuccessfulByTwoSubjects") & "</th>" &_
'				"<th rowspan='2'>" & obLanguage("Reports","kUnsuccessfulByMoreThanTwoSubjects") & "</th></tr>" &_
'			"<tr><th>" & obLanguage("Reports","kTotalNumber") & "</th><th>" & obLanguage("Reports","kFromThem") & obLanguage("Reports","kWithOne") & " «" & kMark_4 & "»" & "</th></tr>" &_			
'			"<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th></tr>"
'End Function

'Function GetReport()
'	GetReport = GetPageTitlePrint(strTitle, Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Common","kSchoolPeriod"),strTermName)) & GetReportTable(False) & GetPageVerPrint()
'End Function
%>
