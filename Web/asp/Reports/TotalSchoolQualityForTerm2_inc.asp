<% ' © 2007-2012 IRTech. All rights reserved.

Function FillStepResultRow( strStepName )
	FillStepResultRow = "<tr><th>" & DB2HTML(strStepName) & "</th>"
	FillStepResultRow = FillStepResultRow & "<th>" & nProcProgT & "</th><th>" & nProcQualT & "</th></tr>"  
End Function

Sub CalculateTotalByStep(nClassCount)
	If nClassCount > 0 Then
		nProcProgT = Round(nProcProgT / nClassCount)
		nProcQualT = Round(nProcQualT / nClassCount)
	Else 
		nProcProgT = 0
		nProcQualT = 0
	End If
End Sub

Sub CalculateTotal( nCntSumSteps )
Dim i
Dim nStepCount
	nProcProgT = 0: nProcQualT = 0: nStepCount = 0
	For i = 0 To nCntSumSteps
		nProcProgT = nProcProgT + arrStepsResults( i, 15 )
		nProcQualT = nProcQualT + arrStepsResults( i, 16 )
		If Not (arrStepsResults( i, 15 ) = 0) _
		or Not (arrStepsResults( i, 16 ) = 0) Then
			nStepCount = nStepCount + 1
		End If
	Next
	CalculateTotalByStep(nStepCount)
End Sub

Function FillSumStepsResultRow( nCntSumSteps )
	'nCntSumSteps:
	'2 = 1 + 2 
	'3 = 1 + 2 + 3
	Dim nStudCntT, nFailingByTwoAndMoreST, nFailingByTwoST, nFailingByOneST, nFailingT, i
	Dim nOne3T, nOnly4And5T, nOne4T, nOnly5T, nNotAdvanceByHookyT, nNotAdvanceByIllnessT, nNotAdvanceT, nNullMarkT
	Dim Title, nCntStudNullMarkT, nSuccessT
	Title = nGradeJuniorMin & "-" & IIf(nCntSumSteps=2,nGradeMiddleMax,nGradeSeniorMax) & " " & obLanguage("ReportMovement", "kClass")
	For i = 0 to nCntSumSteps-1
		nStudCntT = nStudCntT + arrStepsResults(i, 0)
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
		nCntStudNullMarkT = nCntStudNullMarkT + arrStepsResults( i, 14 )
		nSuccessT = nStudCntT - nFailingT - nNotAdvanceT - nCntStudNullMarkT
	Next
	CalculateTotal(nCntSumSteps - 1)
	FillSumStepsResultRow = "<tr><th>" & DB2HTML(Title) & "</th>"
	FillSumStepsResultRow = FillSumStepsResultRow & "<th>" & nProcProgT & "</th><th>" & nProcQualT & "</th></tr>" 
End Function

Function FillGradeResultRow( nGrade )
	FillGradeResultRow = "<tr><td>" & DB2HTML(nGrade) & "</td>"
	FillGradeResultRow = FillGradeResultRow & "<td>" & nProcProg & "</td><td>" & nProcQual & "</td></tr>" 
End Function
%>
