<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/MoveDoc_inc.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGradeJuniorMin, nGradeJuniorMax, nGradeMiddleMin, nGradeMiddleMax, nGradeSeniorMin, nGradeSeniorMax
Dim dtEndDate, strEndDate
Dim arrClasses, nClassCnt, arrGrades
Dim arrClassFillings
Dim arrStepFillings, arrAllFillings
Dim bPreSchool, bAddSchool
Dim objStudCount

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNClassesFilling",strFunctionalityType)
End Function
Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kDate"), strEndDate)
End Function

Sub specialRead()
	ReadSingleDate
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
End Sub

Sub specialMain()
	
	Dim i, j
	Dim nClassID
	Dim nCurGrade, nCurStep

	bOK = True
	Call InitSchoolSettings( objNSNET )
	nGradeJuniorMin = CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Min))
	nGradeJuniorMax = CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max))
	nGradeMiddleMin = CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Min))
	nGradeMiddleMax = CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max))
	nGradeSeniorMin = CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Min))
	nGradeSeniorMax = CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max))

	ReDim arrStepFillings(1, 2) ' 1 индекс: 0 - кол-во учеников, 1 - кол-во классов; 2 индекс - для ступени.
	ReDim arrAllFillings(1)

	arrStepFillings(0, 0) = 0
	arrStepFillings(1, 0) = 0
	arrStepFillings(0, 1) = 0
	arrStepFillings(1, 1) = 0
	arrStepFillings(0, 2) = 0
	arrStepFillings(1, 2) = 0

	arrAllFillings(0) = 0
	arrAllFillings(1) = 0

	Set objStudCount = objNSNET.GetStudentsCountByClasses(strCurrYearID, dtEndDate)
	If objStudCount.EOF Then
		strErrMsg = obLanguage("Reports","kNoClasses",strFunctionalityType)
		bOK = False
		strReport = GetReport()
		Exit Sub
	End If
	arrClasses = objStudCount.GetRows(,,Array("GRADE", "CLASSID", "CLASSNAME", "NICKNAME", "CNT"))

	nClassCnt = UBound(arrClasses, 2) ' realy (Cnt - 1)
	ReDim arrGrades(1, kMaxGrade)
	ReDim arrClassFillings(nClassCnt)
	nCurGrade = -1
	For i = 0 To kMaxGrade
		arrGrades(0, i) = 0
		arrGrades(1, i) = 0
	Next
	For i = 0 To nClassCnt
		arrClassFillings(i) = CLng(arrClasses(4, i)) ' "CNT"
		nCurGrade = CLng(arrClasses(0, i))
		
		arrGrades(0, nCurGrade) = arrGrades(0, nCurGrade) + arrClassFillings(i)
		arrGrades(1, nCurGrade) = arrGrades(1, nCurGrade) + 1
	Next
	If nCurGrade <> -1 Then
		ReDim Preserve arrGrades(1, nCurGrade)
	End If
	
	' Смотрим "по ступеням" и "всего", причём независимо, т.к. между "ступенями" в общем случае могут быть "дырки"
	' из параллелей, не входящих ни в какие "ступени".
	For i = 0 To UBound(arrGrades, 2)
		If Not IsEmpty(arrGrades(0, i)) Then
			nCurStep = GetStepForGrade(i)
			If nCurStep <> -1 Then
				arrStepFillings(0, nCurStep) = arrStepFillings(0, nCurStep) + arrGrades(0, i)
				arrStepFillings(1, nCurStep) = arrStepFillings(1, nCurStep) + arrGrades(1, i)
			End If
			
			arrAllFillings(0) = arrAllFillings(0) + arrGrades(0, i)
			arrAllFillings(1) = arrAllFillings(1) + arrGrades(1, i)
		End If
	Next
End Sub

Function GetStepForGrade(nGrade)
	Dim nStep
	nStep = -1 ' undef
	If nGradeJuniorMin <= nGrade And nGrade <= nGradeJuniorMax Then
		nStep = 0 ' Junior
	ElseIf nGradeMiddleMin <= nGrade And nGrade <= nGradeMiddleMax Then
		nStep = 1 ' Middle
	ElseIf nGradeSeniorMin <= nGrade And nGrade <= nGradeSeniorMax Then
		nStep = 2 ' Senior
	End If
	GetStepForGrade = nStep
End Function
	
Function GetStepTitle(nStep)
	Dim strStepTitle
	If nStep = 0 Then
		strStepTitle = nGradeJuniorMin & "-" & nGradeJuniorMax
	ElseIf nStep = 1 Then
		strStepTitle = nGradeMiddleMin & "-" & nGradeMiddleMax
	ElseIf nStep = 2 Then
		strStepTitle = nGradeSeniorMin & "-" & nGradeSeniorMax
	Else
		strStepTitle = ""
	End If
	GetStepTitle = CStr(strStepTitle)
End Function
Function Rpad(strAverage)
	Rpad = strAverage '& Replace(String(5-Len(strAverage),"-"), "-", "&nbsp;")
End Function

Function GetReportTable()
	Dim i
	Dim nPrevGrade, nPrevStep, nCurGrade, nCurStep
	Dim strAverage
	Dim strClassChiefs

	strReport = GetTableHeader()
	
	nPrevGrade = CLng(arrClasses(0, 0))
	nPrevStep = GetStepForGrade(nPrevGrade)
	For i = 0 To nClassCnt
		nCurGrade = CLng(arrClasses(0, i))
		nCurStep = GetStepForGrade(nCurGrade)
		
		If nCurGrade <> nPrevGrade Then
			' show PrevGrade
			strAverage = CStr(Round(CDbl(arrGrades(0, nPrevGrade)) / CDbl(arrGrades(1, nPrevGrade)), 2))
			
			If bPreSchool Then
				strReport= strReport & "<tr class=""subtotals2""><td></td><td class=""text-right"">" & obLanguage("Reports","kByGrade",strFunctionalityType) & "</td><td></td><td class=""cell-num"">" & arrGrades(0, nPrevGrade) & "</td><td class=""cell-num-2"">" & Rpad(strAverage)  & "</td></tr>"
			Else
				strReport= strReport & "<tr class=""subtotals2""><td class=""text-right"">" & obLanguage("Reports","kByGrade",strFunctionalityType) & "</td><td></td><td class=""cell-num"">" & arrGrades(0, nPrevGrade) & "</td><td class=""cell-num-2"">" & Rpad(strAverage)  & "</td></tr>"
			End If
			If nCurStep <> nPrevStep Then
				If nPrevStep <> -1 And Not bPreSchool Then
					' show PrevStep
					strAverage = CStr(Round(CDbl(arrStepFillings(0, nPrevStep)) / CDbl(arrStepFillings(1, nPrevStep)), 2))
					strReport= strReport & "<tr class=""subtotals""><td class=""text-center"">" & GetStepTitle(nPrevStep) & "</td><td></td><td class=""cell-num-center"">" & arrStepFillings(0, nPrevStep) & "</td><td class=""cell-num-2"">" & Rpad(strAverage) & "</td></tr>"
				End If
				nPrevStep = nCurStep
			End If
			nPrevGrade = nCurGrade
		End If
		' show Class
		If bPreSchool Or bAddSchool Then
			strClassChiefs = GetClassChiefs(arrClasses(1, i))
		Else
			strClassChiefs = "&nbsp;" & DB2HTML(GetSafeStr(arrClasses(3, i), -1, Null))
		End If
		If bPreSchool Then
			strReport= strReport & "<tr><td class=""cell-num"">" & CLng(i + 1) & ".</td><td class=""cell-text"">" & DB2HTML(GetSafeStr(arrClasses(2, i), -1, Null)) & "&nbsp;</td>" &_
				"<td class=""cell-text"">" & strClassChiefs & "</td><td class=""cell-num"">" & arrClassFillings(i) & "&nbsp;</td><td>&nbsp;</td></tr>"
		Else
			strReport= strReport & "<tr><td class=""cell-text"">" & DB2HTML(GetSafeStr(arrClasses(2, i), -1, Null)) & "&nbsp;</td>" &_
				"<td class=""cell-text"">" & strClassChiefs & "</td><td class=""cell-num"">" & arrClassFillings(i) & "&nbsp;</td><td>&nbsp;</td></tr>"
		End If
	Next
	' show LastGrade
	strAverage = CStr(Round(CDbl(arrGrades(0, nCurGrade)) / CDbl(arrGrades(1, nCurGrade)), 2))
	If bPreSchool Then
		strReport= strReport & "<tr class=""subtotals2""><td></td><td class=""text-right"">" & obLanguage("Reports","kByGrade",strFunctionalityType) & "</td><td></td><td class=""cell-num"">" & arrGrades(0, nCurGrade) & "</td><td class=""cell-num-2"">" & Rpad(strAverage)  & "</td></tr>"
	Else
		strReport= strReport & "<tr class=""subtotals2""><td class=""text-right"">" & obLanguage("Reports","kByGrade",strFunctionalityType) & "</td><td></td><td class=""cell-num"">" & arrGrades(0, nCurGrade) & "</td><td class=""cell-num-2"">" & Rpad(strAverage)  & "</td></tr>"
	End If
	' show LastStep
	If nCurStep <> -1 And Not bPreSchool Then
		' show PrevStep
		strAverage = CStr(Round(CDbl(arrStepFillings(0, nCurStep)) / CDbl(arrStepFillings(1, nCurStep)), 2))
		strReport= strReport & "<tr class=""subtotals""><td class=""text-center"">" & GetStepTitle(nCurStep) & "</td><td></td><td class=""cell-num-center"">" & arrStepFillings(0, nCurStep) & "</td><td class=""cell-num-2"">" & Rpad(strAverage)  & "</td></tr>"
	End If
	' show All
	strAverage = CStr(Round(CDbl(arrAllFillings(0)) / CDbl(arrAllFillings(1)), 2))
	If bPreSchool Then
		strReport= strReport & "<tr class=""totals""><td></td><td class=""text-center"">" & obLanguage("Reports","kBySchool",strFunctionalityType) & "</td><td></td><td class=""cell-num-center"">" & arrAllFillings(0) & "</td><td class=""cell-num-2"">" & Rpad(strAverage)  & "</td></td>"
	Else
		strReport= strReport & "<tr class=""totals""><td class=""text-center"">" & obLanguage("Reports","kBySchool",strFunctionalityType) & "</td><td></td><td class=""cell-num-center"">" & arrAllFillings(0) & "</td><td class=""cell-num-2"">" & Rpad(strAverage)  & "</td></td>"
	End If
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print"">" & _
		IIF(bPreSchool, "<tr><th>" & obLanguage("Reports", "kOrderNum"), "") & "</th><th>" & obLanguage("Filter","kClassGB",strFunctionalityType) & "</th>" & _
		"<th>" & obLanguage("Reports","kClass_Chief",strFunctionalityType) & "</th><th>" & obLanguage("Reports","kStudentsCount",strFunctionalityType) & "</th><th>" & obLanguage("Reports","kAverageFilling") & "</th></tr>"
End Function

Function GetClassBoldLeft()
End Function

Function GetClassChiefs(strClsId)
	Dim strClsChiefs, objClsTeachers
	Set objClsTeachers = objNSNET.GetClassChiefs(strClsId)
	strClsChiefs = ""
	While Not objClsTeachers.EOF
		strClsChiefs = strClsChiefs & "&nbsp;" & DB2HTML(objClsTeachers("NICKNAME")) & "<br>"
		objClsTeachers.MoveNext
	Wend
	strClsChiefs = Left(strClsChiefs, Len(strClsChiefs) - 4)
	GetClassChiefs = strClsChiefs
End Function

%>
