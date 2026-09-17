<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/MoveDoc_inc.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim bNoMovedStudentsFound
Dim strGrades1_4, strGrades5_9, strGrades10_x
Dim objMovedStudentsCurr, objYearInfo, objGrades
Dim arrStud, arrStudRes, arrStudMov, arrYearIndex, arrGrades
Dim nRes, nMaxGrades
Dim arrResNames, arrStudYear, arrStudSteps
Dim bPreSchool, arrPreSchoolGrades

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNStudentsMovementDyn",strFunctionalityType)
End Function
Function GetPageParams()
	GetPageParams = _
		Array( obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName") )
End Function

Function GetStepIndexByGrade(nGade)
	Dim nIndex

	nIndex = -1
	If (nGade >= Clng(arrSchoolSettings(1,kSSIndex_GradeJunior_Min))) And (nGade <= Clng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max))) Then
		nIndex = 0
	ElseIf (nGade >= Clng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Min))) And (nGade <= Clng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max))) Then
		nIndex = 1
	ElseIf (nGade >= Clng(arrSchoolSettings(1,kSSIndex_GradeSenior_Min))) And (nGade <= Clng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max))) Then
		nIndex = 2
	End If
	GetStepIndexByGrade = nIndex
End Function

Sub FindReasons(nPos)
	Dim bResFound
	Dim i
	Dim nStepIndex

	nStepIndex = arrStudSteps(nPos)
	bResFound = False
	i=0
	While bResFound = False And i < nRes
		If arrStud(3,nPos)=arrResNames(i) Then
			If nStepIndex > -1 Then
				arrStudRes(arrYearIndex(nPos))(nStepIndex,i)=arrStudRes(arrYearIndex(nPos))(nStepIndex,i)+1
			End If
			bResFound = True
		End If
		i=i+1
	WEnd

	If bResFound = False And Not IsDull(arrStud(3,nPos)) Then
		If nStepIndex > -1 Then
			arrStudRes(arrYearIndex(nPos))(nStepIndex,nRes)=arrStudRes(arrYearIndex(nPos))(nStepIndex,nRes)+1
		End If
		arrResNames(nRes)=arrStud(3,nPos)
		nRes=nRes+1
	End If
End Sub

Sub specialMain()
	Dim i, j
	Dim nStepIndex
	Dim objReasonCnt, nReasonCnt
	Dim nLastGrade, nTmpGrade

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0_s"), obLanguage("Common","kGr1_s"), obLanguage("Common","kGr2_s"), obLanguage("Common","kGr3_s"), obLanguage("Common","kGr4_s"), obLanguage("Common","kGr5_s"), obLanguage("Common","kGr6_s"), obLanguage("Common","kGr7_s"), obLanguage("Common","kGr8_s"))
	End If
	nLastGrade = CLng(Application("LASTGRADE")(strFunctionalityType))

	Call InitSchoolSettings( objNSNET )

	If Not bPreSchool Then
		strGrades1_4 = arrSchoolSettings(1,kSSIndex_GradeJunior_Min) & "-" & arrSchoolSettings(1,kSSIndex_GradeJunior_Max)
		strGrades5_9 = arrSchoolSettings(1,kSSIndex_GradeMiddle_Min) & "-" & arrSchoolSettings(1,kSSIndex_GradeMiddle_Max)
		If CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max)) > CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Min)) Then
			strGrades10_x = arrSchoolSettings(1,kSSIndex_GradeSenior_Min) & "-" & arrSchoolSettings(1,kSSIndex_GradeSenior_Max) & obLanguage("Reports","kNthGrades",strFunctionalityType)
		Else
			strGrades10_x = arrSchoolSettings(1,kSSIndex_GradeSenior_Min) & obLanguage("Reports","kNthGrade",strFunctionalityType)
		End If
	Else
		' 1-4
		nTmpGrade = CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Min))
		If nTmpGrade <= nLastGrade Then
			nTmpGrade = arrPreSchoolGrades(nTmpGrade)
		End If
		strGrades1_4 = nTmpGrade

		If CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max)) > CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Min)) Then
			nTmpGrade = CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max))
			If nTmpGrade <= nLastGrade Then
				nTmpGrade = arrPreSchoolGrades(nTmpGrade)
			End If
			strGrades1_4 = strGrades1_4 & "-" & nTmpGrade
		End If
		strGrades1_4 = strGrades1_4 & " " & obLanguage("SchoolSettings","kClasses",strFunctionalityType)

		' 5-9
		nTmpGrade = CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Min))
		If nTmpGrade <= nLastGrade Then
			nTmpGrade = arrPreSchoolGrades(nTmpGrade)
		End If
		strGrades5_9 = nTmpGrade

		If CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max)) > CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Min)) Then
			nTmpGrade = CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max))
			If nTmpGrade <= nLastGrade Then
				nTmpGrade = arrPreSchoolGrades(nTmpGrade)
			End If
			strGrades5_9 = strGrades5_9 & "-" & nTmpGrade
		End If
		strGrades5_9 = strGrades5_9 & " " & obLanguage("SchoolSettings","kClasses",strFunctionalityType)

		' 10-x
		nTmpGrade = CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Min))
		If nTmpGrade <= nLastGrade Then
			nTmpGrade = arrPreSchoolGrades(nTmpGrade)
		End If
		strGrades10_x = nTmpGrade

		If CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max)) > CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Min)) Then
			nTmpGrade = CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max))
			If nTmpGrade <= nLastGrade Then
				nTmpGrade = arrPreSchoolGrades(nTmpGrade)
			End If
			strGrades10_x = strGrades10_x & "-" & nTmpGrade
		End If
		strGrades10_x = strGrades10_x & " " & obLanguage("SchoolSettings","kClasses",strFunctionalityType)
	End If

	Redim arrStudMov(2,3)
	For i=0 to 2
		arrStudMov(0,i)=0
		arrStudMov(1,i)=0
	Next
	Set objMovedStudentsCurr = objNSNET.GetRemovedStudentsList(strCurrYearID, strSchoolId)
	bNoMovedStudentsFound = objMovedStudentsCurr.EOF
	If bNoMovedStudentsFound Then
		strErrMsg = obLanguage("Reports","kNoMovedStudents",strFunctionalityType)
		Exit Sub
	Else
		Set objGrades = objNSNET.GetGradesAndClasses(strCurrYearID)
		arrGrades = objGrades.GetRows(,,Array("GRADE"))
		nMaxGrades = arrGrades(0,Ubound(arrGrades,2))
		
		nReasonCnt = 0
		Set objReasonCnt = objNSNET.GetMoveReasonCount()
		If Not objReasonCnt.EOF Then
			nReasonCnt = GetSafeLng(objReasonCnt("CNT"), 0)
		End If

		arrStud = objMovedStudentsCurr.GetRows(,,Array("SCHOOLYEARID", "GRADE", "REASON", "ITEMNAME"))
		Redim arrYearIndex(Ubound(arrStud,2))
		Redim arrStudSteps(Ubound(arrStud,2))
		For i=0 to Ubound(arrStud,2)
			If CLng(arrStud(0,i))=CLng(strCurrYearID) Then
				arrYearIndex(i) = 1
			Else
				arrYearIndex(i) = 0
			End If
				
			nStepIndex = GetStepIndexByGrade(Clng(arrStud(1,i)))
			If nStepIndex > -1 Then
				arrStudMov(arrYearIndex(i),nStepIndex) = arrStudMov(arrYearIndex(i),nStepIndex) + 1
			End If
			arrStudSteps(i) = nStepIndex ' Запоминаем, чтобы затем уже не искать.
		Next

		Redim arrResNames(nReasonCnt)
		Redim arrStudRes(1)
		Redim arrStudYear(2,nReasonCnt)
		arrStudRes(0) = arrStudYear
		Redim arrStudYear(2,nReasonCnt)
		arrStudRes(1) = arrStudYear

		For j = 0 to 1
			For i = 0 to nReasonCnt
				arrStudRes(j)(0,i) = 0
				arrStudRes(j)(1,i) = 0
				arrStudRes(j)(2,i) = 0
			Next
		Next

		nRes=0
		For i = 0 to Ubound(arrStud,2)
			Call FindReasons(i)
		Next
	End If
End Sub

Function GetTableHeader()
	Dim strHeader, nRows

	nRows = IIf(nRes > 0, 2, 1)
	strHeader = "<table class=""table-print-num"">" & _
		"<tr><th rowspan=""" & nRows & """></th>" & _
		"<th rowspan=""" & nRows & """>" & obLanguage("Reports","kPrevYear") & "</th><th rowspan=""" & nRows & """>" & obLanguage("Reports","kCurrYear") & "</th>"
	If nRows > 0 Then
		strHeader = strHeader & "<th colspan=""" & nRes & """>" & obLanguage("Reports","kFollowingReasons") & "</th>"
	End If
	strHeader = strHeader & "</tr>"
		
	GetTableHeader = strHeader
End Function


Function GetReportTable()
	Dim i
	Dim strNthGrades
	
	strReport = GetTableHeader()

	if nRes > 0 Then
		strReport= strReport & "<tr>"
		For i=0 to nRes-1
			strReport= strReport & "<th>"&DB2HTML(arrResNames(i))&"</th>"
		Next
		strReport= strReport & "</tr>"
	End If

	strNthGrades = ""
	If Not bPreSchool Then
		strNthGrades = obLanguage("Reports","kNthGrades",strFunctionalityType)
	End If
	
	strReport = strReport & "<tr><td class=""cell-text"">" & strGrades1_4 & strNthGrades & "</td><td>" & arrStudMov(0,0) & "</td><td>" & arrStudMov(1,0) & "</td>"
	For i=0 to nRes-1
		strReport= strReport & "<td>"&arrStudRes(1)(0,i)&"</td>"
	Next
	strReport = strReport & "</tr>"
	
	strReport = strReport & "<tr><td class=""cell-text"">" & strGrades5_9 & strNthGrades &"</td><td>" & arrStudMov(0,1) & "</td><td>" & arrStudMov(1,1) & "</td>"
	For i=0 to nRes-1
		strReport= strReport & "<td>"&arrStudRes(1)(1,i)&"</td>"
	Next
	strReport = strReport & "</tr>"
	
	strReport = strReport & "<tr><td class=""cell-text"">" & strGrades10_x & "</td><td>" & arrStudMov(0,2) & "</td><td>" & arrStudMov(1,2) & "</td>"
	For i=0 to nRes-1
		strReport= strReport & "<td>"&arrStudRes(1)(2,i)&"</td>"
	Next
	strReport = strReport & "</tr>"
	
	strReport = strReport & "<tr class=""totals""><td class=""cell-text""><b>" & obLanguage("Reports","kOverall") & ":</b></td><td><b>" & arrStudMov(0,0)+arrStudMov(0,1)+arrStudMov(0,2) & "</b></td><td><b>" & arrStudMov(1,0)+arrStudMov(1,1)+arrStudMov(1,2) & "</b></td>"
	For i=0 to nRes-1
		strReport= strReport & "<td><b>" & arrStudRes(1)(0,i) + arrStudRes(1)(1,i) + arrStudRes(1)(2,i) & "</b></td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function
%>
