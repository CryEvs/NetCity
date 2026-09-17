<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim rsStudents
Dim bEmpty
Dim dtPrevMonth, nSYID, nGYID, nRepSchoolID
Dim strRepSchoolNumber
Dim bRepIsEM
Dim lngCurrMonth, lngCurrYear

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNInvalidsCount") & IIf(IsEmpty(strRepSchoolNumber), "", " " & strRepSchoolNumber)
End Function
Function GetTitleEx()
	GetTitleEx = obLanguage("Reports","kFor") & " " & obLanguage.GetMonthName(Month(dtPrevMonth), False) & " " & Year(dtPrevMonth)
End Function
Function GetPageParams()
	If strFunctionalityType = kFuncType_EM Then
		GetPageParams = Array(obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID))
	Else
		GetPageParams = Null
	End If
End Function

Sub specialRead()
	Dim objSchoolInfo
	lngCurrMonth = Request("Month")
	lngCurrYear = Request("Year")
	dtPrevMonth = DateSerial(lngCurrYear, lngCurrMonth, 1)

	nGYID = GetSafeLng(Request("CMNYEAR"), -1)
	bRepIsEM = (nGYID <> -1)

	If bRepIsEM Then
		nSYID = -1
		nRepSchoolID = GetSafeLng(Request("EMSCHOOLID"), Null)
	Else
		nSYID = strCurrYearID
		nRepSchoolID = strSchoolID
	End If

	strRepSchoolNumber = ""
	If nRepSchoolID <> -1 Then
		Set objSchoolInfo = objNSNET.GetSchoolInfo(nRepSchoolID)
		If objSchoolInfo.EOF Then
			GenerateError obLanguage("Common","kInvalidParameter")
		End If
		strRepSchoolNumber = GetSafeStr(objSchoolInfo("SCHOOLNAME"), -1, "")
	End If
End Sub

Sub specialMain()
	Dim dtPrevMonthEnd
	dtPrevMonthEnd = DateAdd("m", 1, dtPrevMonth)
	dtPrevMonthEnd = DateAdd("d", -1, dtPrevMonthEnd)
	Set rsStudents = objNSNET.GetInvalidsCount(filterEMID, nGYID, nSYID, nRepSchoolID, dtPrevMonth, dtPrevMonthEnd)
	bEmpty = rsStudents.EOF
	If bEmpty Then strErrMsg = obLanguage("Reports","kNoDataForMonth")
End Sub

Function GetReportTable()
	Dim strReport, i
	Dim strCurrStudentID
	strReport = "<table class=""table-print"">"
	strReport = strReport & "<tr><th rowspan=""2"">" & obLanguage("Reports","kOrderNumberS") & IIF(nSYID = -1, "</th><th rowspan=""2"">" & obLanguage("Reports","kMDOU2"), "") & _
		"</th><th rowspan=""2"">" & obLanguage("Filter","kFIO") & "</th><th rowspan=""2"">" & obLanguage("Reports","kBirthDate2") & "</th>" & _
		"</th><th colspan=""2"">" & obLanguage("Reports","kChildFinPeriod") & "</th><th rowspan=""2"">" & obLanguage("Reports","kOrderMSE") & "</th>" & _
		"</tr><tr>" & _
		"<th>" & obLanguage("Common","kStartDate") & "</th><th>" & obLanguage("Common","kEndDate") & "</th></tr>"

	i = 0
	While Not rsStudents.EOF
		i = i + 1
		strReport = strReport & "<tr>"
		strReport = strReport & "<td class=""cell-num"">" & i & "</td>"
		If nSYID = -1 Then
			strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("EONAME")) & "</td>"
		End If
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("LASTNAME") & " " & rsStudents("FIRSTNAME") & " " & rsStudents("MIDDLENAME")) & "</td>"
		strReport = strReport & "<td class=""cell-date"">" & Date2Str(rsStudents("BIRTHDATE")) & "</td>"
		strReport = strReport & "<td class=""cell-date"">" & Date2Str(rsStudents("FIN_STARTDATE")) & "</td>"
		strReport = strReport & "<td class=""cell-date"">" & Date2Str(rsStudents("FIN_ENDDATE")) & "</td>"
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("COMMISSNUM")) & "&nbsp;" & Date2Str(rsStudents("STARTDATE")) & "</td>"
		strReport = strReport & "</tr>"
		rsStudents.MoveNext
	Wend
	strReport = strReport & "</table><br>"
	If Not bRepIsEM Then
		strReport = strReport & GetReportSign()
	End If
GetReportTable = strReport 
End Function

Function GetReportSign()
	GetReportSign = "<div align=""left"" class=""select"">" &_
		obLanguage("Reports","kManager_FIO") & "<br>" &_
		obLanguage("Reports","kChiefAccountant_FIO") & "</div>"
End Function
%>
