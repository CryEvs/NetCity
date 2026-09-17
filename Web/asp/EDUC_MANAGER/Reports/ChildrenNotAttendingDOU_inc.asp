<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<!-- #INCLUDE FILE="ChildrenNotAttendingDOUAgeCategory_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim i, j
Dim strCurrSchoolID, strAgeCategoryID, strSchool, strCategory
Dim rsDOU
Dim nGlobalYearId

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNChildrenNotAttendingDOU")
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("EMReports","kDOU"), strSchool, _
		obLanguage("EMReports","kAges") + obLanguage("EMReports","kCategory"), strCategory _
		)
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	strCurrSchoolID = GetSafe("EMSCHOOLID", Null)
	strAgeCategoryID = GetSafe("AGECATEGORY", Null)
End Sub

Sub specialMain()
	Dim arrAgeCategory
	arrAgeCategory = InitArrType(arrAgeCategory)
	If strAgeCategoryID = "-1" Then
		strCategory = obLanguage("Common","kAll")
	Else
		strCategory = arrAgeCategory(1, strAgeCategoryID)
	End If
	If strCurrSchoolID = "-1" Then
		strSchool = obLanguage("Common","kAll")
	Else
		strSchool = objNSNET.GetSchoolName(strCurrSchoolID)
	End If

	Set rsDOU = objNSNET.GetChildrenNotAttendingDOU(strCurrSchoolID, nGlobalYearID, filterEMID)
	If rsDOU.EOF Then
		bOK = False
		strErrMsg = obLanguage("EMReports","kErrorMessage")
	End If
End Sub

Function GetTableHeader()
	GetTableHeader = GetTableHeader & "<table class=""table-print-text"">" & _
		"<tr><th class=""text-nowrap"">" & obLanguage("EMReports","kOrderNum") & "</th>" & _
			"<th>" & obLanguage("EMReports","kDOU") & "</th>" & _
			"<th>" & obLanguage("Filter","kFIO") & "</th>" & _
			"<th>" & obLanguage("EMReports","kAges") & "<br>" & obLanguage("EMReports","kCategory") & "</th>" & _
			"<th>" & obLanguage("EMReports","kBDate_") & "</th>" & _
			"<th>" & obLanguage("EMReports","kAge") & "</th>" & _
			"<th>" & obLanguage("EMReports","kAddress") & "</th>" & _
			"<th>" & obLanguage("EMReports","kGroupHealth") & "</th>" & _
			"<th>" & obLanguage("EMReports","kPhone") & "</th>" &_
			"<th>" & obLanguage("EMReports","kOtherNotes") & "</th>" & _
			"<th>" & obLanguage("EMReports","kNote") & "</th>" & _
		"</tr>"
End Function

Function GetReportTable()
	Dim strAgeCategory, arrAgeCategory, strAgeCategoryIDCurr, j, countRecord, strPageTitlePrint
	arrAgeCategory = InitArrType(arrAgeCategory)
	strPageTitlePrint = strReport
	strReport = GetTableHeader()
	For i = 1 To rsDOU.RecordCount
		Select Case GetSafeLng(rsDOU("AGE_MONTH"),0)
			Case 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
				strAgeCategory = arrAgeCategory(1, 0)
				strAgeCategoryIDCurr = arrAgeCategory(0, 0)
			Case 12, 13, 14, 15, 16, 17
				strAgeCategory = arrAgeCategory(1, 1)
				strAgeCategoryIDCurr = arrAgeCategory(0, 1)
			Case 18, 19, 20, 21, 22, 23
				strAgeCategory = arrAgeCategory(1, 2)
				strAgeCategoryIDCurr = arrAgeCategory(0, 2)
			Case 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
				strAgeCategory = arrAgeCategory(1, 3)
				strAgeCategoryIDCurr = arrAgeCategory(0, 3)
			Case 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47
				strAgeCategory = arrAgeCategory(1, 4)
				strAgeCategoryIDCurr = arrAgeCategory(0, 4)
			Case 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59
				strAgeCategory = arrAgeCategory(1, 5)
				strAgeCategoryIDCurr = arrAgeCategory(0, 5)
			Case 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71
				strAgeCategory = arrAgeCategory(1, 6)
				strAgeCategoryIDCurr = arrAgeCategory(0, 6)
			Case 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83
				strAgeCategory = arrAgeCategory(1, 7)
				strAgeCategoryIDCurr = arrAgeCategory(0, 7)
			Case Else
				strAgeCategory = arrAgeCategory(1, 8)
				strAgeCategoryIDCurr = arrAgeCategory(0, 8)
		End Select
		If CInt(strAgeCategoryID) <> -1 Then
			If CInt(strAgeCategoryID) = strAgeCategoryIDCurr Then
				j=j+1
				strReport = GetstrReport(strReport, strAgeCategory, j)
				countRecord = countRecord + 1
			End If
		Else
			strReport = GetstrReport(strReport, strAgeCategory, i)
			countRecord = countRecord + 1
		End If
		If Not rsDOU.EOF Then rsDOU.MoveNext
	Next
	If countRecord < 1 Then
		strReport = strPageTitlePrint & GetwarningPrint(obLanguage("EMReports","kErrorMessage"))
	End If
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

Function GetstrReport(strReport, strAgeCategory, m)
	Dim strYear, strMonth, strTemp, strAge
	strYear = rsDOU("AGE_MONTH")\12
	strMonth = rsDOU("AGE_MONTH") Mod 12
	If strYear > 1 And strYear < 5 Then strTemp = " года "
	If strYear >= 5 Or strYear = 0 Then strTemp = " лет "
	If strYear = 1 Then strTemp = " год "
	strAge = strYear & strTemp & strMonth & " мес."
	strReport = strReport & GetFounderHeader(11,rsDOU)
	strReport = strReport & "<tr>" & _
								"<td class=""cell-num"">" & m & "</td>" & _
								"<td>" & rsDOU("SCHOOLNAME") & "</td>" & _
								"<td>" & rsDOU("FIO") & "</td>" & _
								"<td>" & strAgeCategory & "</td>" & _
								"<td class=""cell-date"">" & Date2Str(rsDOU("BIRTHDATE")) & "</td>" & _
								"<td>" & strAge & "</td>" & _
								"<td>" & DB2HTML(rsDOU("ADDRESS")) & "</td>" & _
								"<td>" & DB2HTML(rsDOU("HEALTH")) & "</td>" &_
								"<td>" & DB2HTML(rsDOU("HOMEPHONE")) & "</td>" & _
								"<td>&nbsp</td>" & _
								"<td>&nbsp</td>" & _
							"</tr>"
	GetstrReport = strReport
End Function

%>
