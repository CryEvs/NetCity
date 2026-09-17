<!-- #INCLUDE FILE="ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim nAppend
Dim strAppendTitle, strPageTitle_1, strPageTitle_2

Sub ReadStateCmn()
	SetScriptTimeOut 900
	ReadDateRange
	nAppend = GetSafeLng(Request("Append"), Null)
	Call GetAppendPageTitle()

	'WriteState - not called from Export to Excel
	Call obTokenMgr.SetData(strToken, stRepDoubling_Start, dtStartDate)
	Call obTokenMgr.SetData(strToken, stRepDoubling_End, dtEndDate)
End Sub

Sub SpecialMain()
	Call MainSpecial()
End Sub

Function GetReportTableHeader()
	Dim strReport, i

	strReport = "<table class=""table-print-text"">" & "<tr>"
	strReport = strReport & "<th>" & obLanguage("ReportMovement","kOrderNum") & "</th><th>" & obLanguage("ReportMovement","kFIO") & _
		"</th><th>" & obLanguage("Reports","kBirthdate") & "</th><th>" & obLanguage("ReportMovement","kSchoolNo") & _
		"</th><th>" & obLanguage("ReportMovement","kClass") & "</th><th>" & obLanguage("Common","kHomeAddress") & "</th>"

	If nAppend = 1 Then
		strReport = strReport & "<th>" & obLanguage("ReportMovement","kSchoolNoEnrollTo") & "</th><th>" & obLanguage("ReportMovement","kConfirm") & "</th>"
	ElseIf nAppend = 2 Then
		strReport = strReport & "<th>" & obLanguage("ReportMovement","kDepartPlace") & "</th><th>" & obLanguage("ReportMovement","kDepartReason") & "</th>" & _
			"<th>" & obLanguage("ReportMovement","kKDNResolution") & "</th><th>" & obLanguage("ReportMovement","kConfirmEducation") & "</th>"
	ElseIf nAppend = 3 Then
		strReport = strReport & "<th>" & obLanguage("ReportMovement","kDepartWhereTo") & "</th><th>" & obLanguage("ReportMovement","kConfirmRequest") & "</th>"
	ElseIf nAppend = 4 Then
		strReport = strReport & "<th>" & obLanguage("ReportMovement","kOtherReasonContent") & "</th><th>" & obLanguage("ReportMovement","kDocuments") & "</th>"
	Else
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	strReport = strReport & "</tr>"

	GetReportTableHeader = strReport
End Function

Function GetReportTableRow(strSYID, strSchName, nIndex)
	Dim strReport
	Dim objStudents
	Dim strCountryID_New, strCountryID_Old
	Dim strCityName, strSchoolTo, strEOName

	strReport = ""
	Set objStudents = objNSNET.GetDepartStudentsForAppend(strSYID, dtStartDate, dtEndDate, nAppend)

	While Not objStudents.EOF
		nIndex = nIndex + 1
		strReport = strReport & "<tr><td>" & nIndex & ".</td>" & _
			"<td>" & DB2HTML(objStudents("LASTNAME")) & " " & DB2HTML(objStudents("FIRSTNAME")) & " " & DB2HTML(objStudents("MIDDLENAME")) & "</td>" & _
			"<td class=""cell-date"">" & Date2Str(objStudents("BIRTHDATE")) & "</td>" & _
			"<td>" & DB2HTML(strSchName) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(objStudents("GRADE")) & "</td>" & _
			"<td>" & DB2HTML_BR(GetAddress(objNSNET.GetUserAddress( objStudents("USERID") , 1)) ) & "</td>"

		If nAppend = 1 Then
			strSchoolTo = GetSafeStr(objStudents("SCHOOLNUMBER"), -1, "")
			If strSchoolTo = "" Then
				strEOName = GetSafeStr(objStudents("EONAME"), -1, "")
				If strEOName <> "" Then strSchoolTo = "(" & strEOName & ")"
			End If
			strReport = strReport & "<td>" & DB2HTML(strSchoolTo) & "</td>" & "<td>&nbsp;</td>"
		ElseIf nAppend = 2 Then
			strSchoolTo = GetSafeStr(objStudents("SCHOOLNUMBER"), -1, "")
			If strSchoolTo = "" Then
				strEOName = GetSafeStr(objStudents("EONAME"), -1, "")
				If strEOName <> "" Then strSchoolTo = "(" & strEOName & ")"
			End If
			strReport = strReport & "<td>" & DB2HTML(strSchoolTo) & "</td>" & "<td>" & DB2HTML(objStudents("REASON")) & "</td>" & "<td>&nbsp;</td><td>&nbsp;</td>"
		ElseIf nAppend = 3 Then
			strCityName = obLanguage("ReportMovement","kCityS") & " " & GetSafeStr(objStudents("CITY_NAME"), -1, "")
			strCountryID_New = GetSafeID(objStudents("COUNTRYID_NEW"), Null)
			strCountryID_Old = GetSafeID(objStudents("COUNTRYID_OLD"), Null)
			If strCountryID_New <> strCountryID_Old Then strCityName = strCityName & " (" & GetSafeStr(objStudents("COUNTRYNAME"), -1, "") & ")"
			strReport = strReport & "<td>" & DB2HTML(strCityName) & "</td>" & "<td>&nbsp;</td>"
		ElseIf nAppend = 4 Then
			strReport = strReport & "<td>" & DB2HTML(objStudents("REASON")) & "</td>" & "<td>&nbsp;</td>"
		End If

		strReport = strReport & "</tr>"
		objStudents.MoveNext
	Wend

	GetReportTableRow = strReport
End Function

Function GetAddress( rsAddr )
	If rsAddr.EOF Then GetAddress = "" Else GetAddress = rsAddr("CITYNAME") & ", " & rsAddr("ADDRESS")
End Function

Sub GetAppendPageTitle()
	Dim strCityName

	Select Case nAppend
	Case 1:
		strAppendTitle = obLanguage("ReportMovement","kAppend_1")
		strCityName = GetCityName()
		strPageTitle_1 = obLanguage("ReportMovement","kTitle_Append_1_1") & " " & strCityName
		strPageTitle_2 = obLanguage("ReportMovement","kTitle_Append_1_2")
	Case 2:
		strAppendTitle = obLanguage("ReportMovement","kAppend_2")
		strPageTitle_1 = obLanguage("ReportMovement","kTitle_Append_2_1")
		strPageTitle_2 = obLanguage("ReportMovement","kTitle_Append_2_2")
	Case 3:
		strAppendTitle = obLanguage("ReportMovement","kAppend_3")
		strCityName = GetCityName()
		strPageTitle_1 = obLanguage("ReportMovement","kTitle_Append_3_1") & " " & strCityName
		strPageTitle_2 = obLanguage("ReportMovement","kTitle_Append_3_2")
	Case 4:
		strAppendTitle = obLanguage("ReportMovement","kAppend_4")
		strPageTitle_1 = obLanguage("ReportMovement","kTitle_Append_4_1")
		strPageTitle_2 = obLanguage("ReportMovement","kTitle_Append_4_2")
	Case Else
		GenerateError obLanguage("Common","kInvalidParameter")
	End Select
End Sub

Function GetCustomPageTitleHeader(strScName, strPageName)
	GetCustomPageTitleHeader = strScName & _
		"<h3 align=""right"">" & strAppendTitle & "</h3>" &_
		"<h2 align=""center"" >" & DB2HTML_BR(strPageName) & "</h2><br>"
End Function


Function GetPageTitle()
	GetPageTitle =  strPageTitle_1 &"\n"& strPageTitle_2
End Function
%>
