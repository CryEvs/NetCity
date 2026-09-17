<!-- #INCLUDE FILE="../../Reports/TitleListCmn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim strEOTypeID
Dim objSchoolsYears, bSchools
Dim bShowEOTypes, strEOTypeName
Dim arrTotals

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage( "EMReportNames", IIf(bTotalBySchools, "kRNTotalTitleList","kRNTitleListEM") )
End Function
Function GetPageTitleEx()
	GetPageTitle = obLanguage("SetupSchool","kTitleStateOn") & " " & strEndDate
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kEOType"), IIf(strEOTypeID <> "-1", strEOTypeName, obLanguage("Common","kAll")) , _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kDate"), strEndDate _
		)
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	SetScriptTimeOut 1800
	strEOTypeID = GetSafe("EOTYPEID", Null)
	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)

	bTotalBySchools = (GetSafe("Regime", "") = "2")
	strTotalByAll = "Всего по ОО"
End Sub

Sub specialMain()
	Dim strSYID
	Dim nMinGrade, nMaxGrade
	Dim objEOTypeInfo
	Dim nStep3_Max
	Dim i, j
	Dim bEmpty, bClasses
	Dim nInd

	bOK = True
	Set objSchoolsYears = objNSNET.GetEMShoolsYearsList(nGlobalYearID, strEOTypeID, kFuncType_Common, filterEMID, EXCLUDE_SOME_UDODS)
	bSchools = Not objSchoolsYears.EOF

	If strEOTypeID <> "-1" Then
		Set objEOTypeInfo = objNSNET.GetEOTypeInfo(strEOTypeID)
		If objEOTypeInfo.EOF Then
			GenerateError obLanguage("Common","kInvalidParameter")
		End If
		strEOTypeName = GetSafeStr(objEOTypeInfo("NAME"), -1, "")
	End If

	If Not bSchools Then
		strErrMsg = obLanguage("ReportMovement","kNoSchoolsForGlobalYear")
		bOK = False
		Exit Sub
	End If

	nStep3_Max = 11
	If bSchools Then
		' check max grade
		Do While Not objSchoolsYears.EOF
			strSYID = GetSafeID(objSchoolsYears("SCHOOLYEARID"), Null)
			Call objNSNET.GetMinMaxGrades(strSYID, nMinGrade, nMaxGrade)
			If nMaxGrade = 12 Then
				nStep3_Max = nMaxGrade
				Exit Do
			End If
			objSchoolsYears.MoveNext
		Loop  
		objSchoolsYears.MoveFirst
	End If

'	Call InitSchoolSettings( objNSNET )
	nGradeJuniorMin = 1
	nGradeJuniorMax = 4
	nGradeMiddleMin = 5
	nGradeMiddleMax = 9
	nGradeSeniorMin = 10
	nGradeSeniorMax = nStep3_Max

	ReDim arrData(26, kMaxGrade)
	For i = 0 To 26
		For j = 0 To kMaxGrade
			arrData(i, j) = 0
		Next
	Next

	Call GetParamsInfo()
	If bTotalBySchools Then
		ReDim arrTotals(2, objSchoolsYears.RecordCount - 1)

		bClasses = False
		nInd = 0
		While Not objSchoolsYears.EOF
			strSYID = GetSafeID(objSchoolsYears("SCHOOLYEARID"), Null)

			For i = 0 To 26
				For j = 0 To kMaxGrade
					arrData(i, j) = 0
				Next
			Next
			bEmpty = Not GetReportData(arrData, strSYID)
			If Not bEmpty Then
				arrTotals(0, nInd) = GetSafeStr(objSchoolsYears("SCHOOLNUMBER"), -1, "")
				arrTotals(1, nInd) = GetSumBySchool()
				arrTotals(2, nInd) = GetSafeStr(objSchoolsYears("FNAME"), -1, "")
			Else
				arrTotals(0, nInd) = Empty
				arrTotals(1, nInd) = Empty
				arrTotals(2, nInd) = Empty
			End If
			bClasses = bClasses Or Not bEmpty

			nInd = nInd + 1
			objSchoolsYears.MoveNext
		WEnd
	Else
		bClasses = False
		While Not objSchoolsYears.EOF
			strSYID = GetSafeID(objSchoolsYears("SCHOOLYEARID"), Null)

			bEmpty = Not GetReportData(arrData, strSYID)
			bClasses = bClasses Or Not bEmpty

			objSchoolsYears.MoveNext
		WEnd

	End If

	If Not bClasses Then
		strErrMsg = obLanguage("Reports","kNoClasses",0)
		bOK = False
	End If
End Sub

Function GetBottom()
	GetBottom = ""
End Function


Function GetSumBySchool()
	Dim i, j, nCnt
	Dim arrSumm

	ReDim arrSumm(26)
	For j = 0 To 26
		arrSumm(j) = 0
	Next
	
	For i = nGradeJuniorMin To nGradeSeniorMax
		For j = 0 To 26
			nCnt = arrData(j, i)
			arrSumm(j) = arrSumm(j) + nCnt
		Next
	Next
	GetSumBySchool = arrSumm
End Function

Function GetSchoolsData(arrSchoolsSumm)
	Dim strStep, i, j, nCnt
	Dim strSchoolNum, arrSumm
	Dim strSchoolsData
	Dim strFounderName

	strSchoolsData = ""
	For i = 0 To UBound(arrTotals, 2)

		If Not IsEmpty(arrTotals(0, i)) Then
			strSchoolNum = arrTotals(0, i)
			arrSumm = arrTotals(1, i)
			strFounderName = arrTotals(2, i)
			strSchoolsData = strSchoolsData & "<tr>"
			If subEms Then 
				strSchoolsData = strSchoolsData & "<td>" & DB2HTML(strFounderName) &"</td>"
			End If
			strSchoolsData = strSchoolsData & "<td>" & DB2HTML(strSchoolNum) & "</td><td class=""text-nowrap"">" & "Всего<br>по ОО" & "</td>"
			For j = 0 To 26
				If j = 18 Or j = 19 Then
					strSchoolsData = strSchoolsData & "<td>&nbsp;</td>"
				Else
					nCnt = arrSumm(j)
					strSchoolsData = strSchoolsData & "<td>" & nCnt & "</td>"
					arrSchoolsSumm(j) = arrSchoolsSumm(j) + nCnt
				End If
			Next
			strSchoolsData = strSchoolsData & "</tr>"

		End If
	Next
	GetSchoolsData = strSchoolsData
End Function

Function ShowSchoolsTotal(arrSchoolsSumm)
	Dim strSchoolsTotal, i, nCnt
	Dim nColSpan

	nColSpan = IIf(subEms, 3, 2)
	strSchoolsTotal = "<tr class=""totals""><td colspan=""" & nColSpan & """><b>" & "Итог" & "</b></td>"
	For i = 0 To 26
		If i = 18 Or i = 19 Then
			strSchoolsTotal = strSchoolsTotal & "<td>&nbsp;</td>"
		Else
			nCnt = arrSchoolsSumm(i)
			strSchoolsTotal = strSchoolsTotal & "<td><b>" & nCnt & "</b></td>"
		End If
	Next
	strSchoolsTotal = strSchoolsTotal & "</tr>"
	ShowSchoolsTotal = strSchoolsTotal
End Function

Function GetReportTable()
	If bTotalBySchools then
		GetReportTable = GetReportTable_TotalBySchools()
	Else
		GetReportTable = GetReportTable_Sum()
	End If
End Function

Function GetReportTable_TotalBySchools()
	Dim i
	Dim arrSchoolsSumm
	
	ReDim arrSchoolsSumm(26)
	For i = 0 To 26
		arrSchoolsSumm(i) = 0
	Next
	
	strReport = GetTableHeader()
	strReport = strReport & GetSchoolsData(arrSchoolsSumm)
	strReport = strReport & ShowSchoolsTotal(arrSchoolsSumm)

	strReport = strReport & "</table>"

	GetReportTable_TotalBySchools = strReport
End Function
%>
