<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportService_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames",IIf(bAge, "kRNAgeComposition","kRNCountComposByYears"))
End Function

Function GetTitleEx()
	GetTitleEx = obLanguage("Reports","kTitleStateOn2") & " " & strEndDate
End Function

Const kMaxYearNum = 12
Const kMaxAgeDelta = 14

Dim dtEndDate, strEndDate
Dim objCompos, objComposByTypes
Dim arrCompos, arrTotal
Dim bAge

Sub InitArrays()
	Dim i, j

	ReDim arrCompos(kMaxYearNum, 10)
	ReDim arrTotal(10)
	For i = 0 To kMaxYearNum
		For j = 0 To 10
			arrCompos(i, j) = 0
		Next
	Next
	For j = 0 To 10
		arrTotal(j) = 0
	Next
End Sub

Function GetReportInfoForSY(strSYID, strGlobalYearID)
	Dim i, j
	Dim nGrade, nStudCnt
	Dim nIndex

	Set objCompos = objNSNET.GetStudentsCountComposByYears(strSYID, dtEndDate)
	If Not objCompos.EOF Then
		Set objComposByTypes = objNSNET.GetStudentsCountComposByYearsBySchoolTypes(strSYID, strGlobalYearID, dtEndDate)

		While Not objCompos.EOF
			nGrade = GetSafeLng(objCompos("GRADE"), Null)
			nStudCnt = GetSafeLng(objCompos("STUD_CNT"), 0)

			If nGrade <= kMaxYearNum Then
				arrCompos(nGrade, 1) = arrCompos(nGrade, 1) + nStudCnt
				arrTotal(1) = arrTotal(1) + nStudCnt
			End If

			objCompos.MoveNext
		WEnd

		While Not objComposByTypes.EOF
			nGrade = GetSafeLng(objComposByTypes("GRADE"), Null)
			nStudCnt = GetSafeLng(objComposByTypes("STUD_CNT"), 0)

			If nGrade <= kMaxYearNum Then
				nIndex = GetIndexForReportSort(GetSafeLng(objComposByTypes("REPORTSORT"), Null))
				arrCompos(nGrade, nIndex) = arrCompos(nGrade, nIndex) + nStudCnt
				arrTotal(nIndex) = arrTotal(nIndex) + nStudCnt
			End If

			objComposByTypes.MoveNext
		WEnd

		GetReportInfoForSY = True
	Else
		GetReportInfoForSY = False
	End If
End Function

Function GetReportTable()
	If bAge Then
		GetReportTable = GetReportTableForAge()
	Else
		GetReportTable = GetReportTable1()
	End If
End Function

Function GetReportTable1()
	Dim strReportHeader
	Dim i, j

	strReportHeader = "<table class=""table-print-num"">" & GetHeader_TR() & _
		"<th rowspan=""2"">" & obLanguage("Reports","kYearNum2") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Reports","kCountTrained") & "</th>" & _
		"<th colspan=""9"">" & obLanguage("Reports","kFromThem") & "</th></tr>" & _
		GetHeader_TR() & _

		"<th>" & obLanguage("Reports","kMDOU2") & "</th>" & _
		"<th>" & obLanguage("Reports","kPreScoolNotOrg") & "</th>" & _
		"<th>" & obLanguage("Reports","kMOY2") & "</th>" & _
		"<th>" & obLanguage("Reports","kCKOY2") & "</th>" & _
		"<th>" & obLanguage("Reports","kNOY2") & "</th>" & _
		"<th>" & obLanguage("Reports","kUPO2") & "</th>" & _
		"<th>" & obLanguage("Reports","kWorkers2") & "</th>" & _
		"<th>" & obLanguage("Reports","kPoolCategoryOthers") & "</th>" & _
		"<th>" & obLanguage("Reports","kDeparted2") & "</th></tr>"
	strReport = strReportHeader

	For i = 0 To kMaxYearNum
		strReport = strReport & "<tr>"
		strReport = strReport & "<td>" & i & "</td>"
		For j = 1 To 10
			strReport = strReport & "<td>" & arrCompos(i, j) & "</td>"
		Next
		strReport = strReport & "</tr>"
	Next
	strReport = strReport & "<tr class=""totals"">"
	strReport = strReport & "<td>" & obLanguage("Reports","kTotalNumber") & "</td>"
	For j = 1 To 10
		strReport = strReport & "<td>" & arrTotal(j) & "</td>"
	Next
	strReport = strReport & "</tr>"
	strReport = strReport & "</table>"

	strReport = strReport & GetBottom()
	GetReportTable1 = strReport
End Function


'**************************************************************************************************
' AgeComposition part

Sub InitArraysForAge()
	Dim i, j

	ReDim arrCompos(kMaxAgeDelta, 12)
	ReDim arrTotal(12)
	For i = 0 To kMaxAgeDelta
		For j = 0 To 12
			arrCompos(i, j) = 0
		Next
	Next
	For j = 0 To 12
		arrTotal(j) = 0
	Next
End Sub

Function GetReportInfoForSYForAge(strSYID, strGlobalYearID)
	Dim i, j
	Dim nGrade, nStudCnt
	Dim nIndex, nIndexAge
	Dim nAge, strGender

	Set objCompos = objNSNET.GetStudentsAgeComposition(strSYID, dtEndDate)
	If Not objCompos.EOF Then
		Set objComposByTypes = objNSNET.GetStudentsAgeCompositionBySchoolTypes(strSYID, strGlobalYearID, dtEndDate)

		While Not objCompos.EOF
			nAge = GetSafeLng(objCompos("STUD_YEAR"), Null)
			nStudCnt = GetSafeLng(objCompos("STUD_CNT"), 0)
			strGender = GetSafeStr(objCompos("GENDER"), 1, Null)
			nIndexAge = GetIndexForAge(nAge) ' i
			nIndex = GetIndexForGender(strGender) ' j

			arrCompos(nIndexAge, nIndex) = arrCompos(nIndexAge, nIndex) + nStudCnt
			arrTotal(nIndex) = arrTotal(nIndex) + nStudCnt

			objCompos.MoveNext
		WEnd

		While Not objComposByTypes.EOF
			nAge = GetSafeLng(objComposByTypes("STUD_YEAR"), Null)
			nStudCnt = GetSafeLng(objComposByTypes("STUD_CNT"), 0)

			nIndexAge = GetIndexForAge(nAge) ' i
			nIndex = GetIndexForReportSort(GetSafeLng(objComposByTypes("REPORTSORT"), Null))
			If nIndex > 0 Then
				arrCompos(nIndexAge, nIndex) = arrCompos(nIndexAge, nIndex) + nStudCnt
				arrTotal(nIndex) = arrTotal(nIndex) + nStudCnt
			End If

			objComposByTypes.MoveNext
		WEnd

		GetReportInfoForSYForAge = True
	Else
		GetReportInfoForSYForAge = False
	End If
End Function

' !!! Внимание, здесь значения из таблицы POOL_CATEGORIES, поле REPORTSORT, используются как индексы массива.
' #10754 - привела к изменению REPORTSORT так, что все их сейчас нельзя использовать для индексов, поэтому здесь подправляем.
Function GetIndexForReportSort(nReportSort)
	Dim nIndex
	nIndex = nReportSort
	If nReportSort = 50 Then
		nIndex = 8
	ElseIf nReportSort = 100 Then
		nIndex = 9
	End If
	GetIndexForReportSort = nIndex + 1
End Function

Function GetIndexForAge(nAge)
	Dim nInd

	nInd = 0
	If nAge < 6 Then
		nInd = 0
	ElseIf nAge > 18 Then
		nInd = kMaxAgeDelta ' 14
	Else
		nInd = nAge - 5
	End If

	GetIndexForAge = nInd
End Function

Function GetIndexForGender(strGender)
	If strGender = obLanguage("Common","kMaleLet") Then
		GetIndexForGender = 11
	Else
		GetIndexForGender = 12
	End If
End Function

Function GetReportTableForAge()
	Dim strReportHeader
	Dim i, j

	' Здесь определяем некоторые суммарные значения, когда уже всё подсчитано.
	For i = 0 To kMaxAgeDelta
		arrCompos(i, 1) = arrCompos(i, 11) + arrCompos(i, 12)
	Next
	arrTotal(1) = arrTotal(11) + arrTotal(12)
	
	strReportHeader = "<table class=""table-print-num"">" & GetHeader_TR() & _
		"<th rowspan=""3"">" & obLanguage("Reports","kFullYearsCount") & "</th>" & _
		"<th colspan=""10"">" & obLanguage("Reports","kCountTrained") & "</th>" & _
		"<th colspan=""2"">" & obLanguage("Reports","kQuantity") & "</th></tr>" & _
		GetHeader_TR() & _
		"<th rowspan=""2"">" & obLanguage("Reports","kTotalNumber") & "</th>" & _
		"<th colspan=""9"">" & obLanguage("Reports","kFromThem") & "</th>" & _
		"<th rowspan=""2"">" & LCase(obLanguage("Reports","kOfBoys")) & "</th>" & _
		"<th rowspan=""2"">" & LCase(obLanguage("Reports","kOfGirls")) & "</th></tr>" & _
		GetHeader_TR() & _
		"<th>" & obLanguage("Reports","kMDOU2") & "</th>" & _
		"<th>" & obLanguage("Reports","kPreScoolNotOrg") & "</th>" & _
		"<th>" & obLanguage("Reports","kMOY2") & "</th>" & _
		"<th>" & obLanguage("Reports","kCKOY2") & "</th>" & _
		"<th>" & obLanguage("Reports","kNOY2") & "</th>" & _
		"<th>" & obLanguage("Reports","kUPO2") & "</th>" & _
		"<th>" & obLanguage("Reports","kWorkers2") & "</th>" & _
		"<th>" & obLanguage("Reports","kPoolCategoryOthers") & "</th>" & _
		"<th>" & obLanguage("Reports","kDeparted2") & "</th></tr>"
	strReport = strReportHeader

	For i = 0 To kMaxAgeDelta
		strReport = strReport & "<tr>"
		strReport = strReport & "<td>" & IIf(i = 0, obLanguage("Reports","kBefore_6"), IIf(i = kMaxAgeDelta, obLanguage("Reports","kAfter_18"), i + 5)) & "</td>"
		For j = 1 To 12
			strReport = strReport & "<td>" & arrCompos(i, j) & "</td>"
		Next
		strReport = strReport & "</tr>"
	Next
	strReport = strReport & "<tr class=""totals"">"
	strReport = strReport & "<td>" & obLanguage("Reports","kTotalNumber") & "</td>"
	For j = 1 To 12
		strReport = strReport & "<td>" & arrTotal(j) & "</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & "</table>"

	strReport = strReport & GetBottom()
	GetReportTableForAge = strReport
End Function
%>
