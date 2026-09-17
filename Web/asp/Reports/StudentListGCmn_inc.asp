<!-- #INCLUDE FILE="ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.
Dim bIsEM
Dim	dtEndDate, strEndDate

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNStudentListG",strFunctionalityType)
End Function

Function GetPageParams()
	Dim arrFilters, nUbound

	arrFilters = Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType), strGradeName)
	If bPreSchool Then
		nUbound = UBound(arrFilters)
		ReDim Preserve arrFilters(nUbound + 2)
		arrFilters(nUbound + 1) = obLanguage("EMReports","kDOUGroupType")
		arrFilters(nUbound + 2) = strDGT
	End If
	nUbound = UBound(arrFilters)
	ReDim Preserve arrFilters(nUbound + 4)

	arrFilters(nUbound + 1) = obLanguage("Filter","kClassGB",strFunctionalityType)
	arrFilters(nUbound + 2) = strClassName

	arrFilters(nUbound + 3) = obLanguage("Common","kDate")
	arrFilters(nUbound + 4) = strEndDate

	GetPageParams = arrFilters
End Function


Function GetTableHeader(nCurrFuncType)
	Dim strHeader
	strHeader = "<table class=""table-print-text""><tr><th>" &_
					IIf(bIsEM, obLanguage("EMReports","kNumberOU"), obLanguage("Reports","kOrderNumberS")) & "</th><th>" & obLanguage("EMReports","kEnrollDate")
	If nCurrFuncType = kFuncType_PreSchool Then
		strHeader = strHeader & "</th><th>" & obLanguage("EMReports","kDOUGroupName") & "</th><th>" & obLanguage("EMReports","kDOUGroupType")
	ElseIf nCurrFuncType = kFuncType_Common Then
		strHeader = strHeader & "</th><th>" & obLanguage("EMReports","kClass2") & "</th><th>" & obLanguage("Calendar","kRelay")
	End If
	strHeader = strHeader & "</th><th>" & obLanguage("Common","kLastName") & "</th><th>" & obLanguage("Common","kFirstName") & "</th><th>" & obLanguage("Common","kMiddleName") & "</th><th>" & obLanguage("Reports","kBirthdate") & "</th><th>" &_
					obLanguage("Movement","kDocType") & "</th><th>" & obLanguage("EMReports","kSeriesDocument") & "</th><th>" & obLanguage("EMReports","kDocNumber") & "</th><th>" & obLanguage("EMReports","kIssueDate") & "</th><th>" & obLanguage("EMReports","kIssueWho") &_
					"</th><th>" & obLanguage("Common","kSnils") & "</th><th>" & obLanguage("EMReports","kLocationName") & "</th><th>" & obLanguage("EMReports","kLocationType") & "</th><th>" & obLanguage("Common","kHouse") & "</th><th>" & obLanguage("Common","kCorp") & "</th><th>" & obLanguage("Common","kFlat")

	If nCurrFuncType = kFuncType_PreSchool Then
		strHeader = strHeader & "</th><th>" & obLanguage("SetupSchoolUI","kApplicantLastName") & "</th><th>" & obLanguage("SetupSchoolUI","kApplicantFirstName") & "</th><th>" & obLanguage("SetupSchoolUI","kApplicantMiddleName")
	ElseIf nCurrFuncType = kFuncType_Common Then
		strHeader = strHeader & "</th><th>" & obLanguage("Reports","kEducationForm")
	End If

	GetTableHeader = strHeader & "</th></tr>"
End Function

Function GetTableLine(nCurrFuncType, nPP)
	Dim strReport
	
	If nCurrFuncType = kFuncType_PreSchool Then
		strReport = strReport & GetFounderHeader(22,objRs)
	ElseIf nCurrFuncType = kFuncType_Common Then
		strReport = strReport & GetFounderHeader(20,objRs)
	Else
		strReport = strReport & GetFounderHeader(17,objRs)
	End If

	strReport = strReport & "<tr><td class=""cell-num"">" & IIf(bIsEM, DB2HTML(objRs("SCHOOLNAME")), nPP) & "</td><td class=""cell-date"">" & Date2Str(objRs("DATEIN")) & "</td><td>"
	If nCurrFuncType = kFuncType_PreSchool Then
		strReport = strReport & DB2HTML(objRs("CLASSNAME")) & "</td><td>" & DB2HTML(objRs("GROUPTYPE")) & "</td><td>"
	ElseIf nCurrFuncType = kFuncType_Common Then
		strReport = strReport & DB2HTML(objRs("CLASSNAME")) & "</td><td class=""cell-num"">" & DB2HTML(objRs("RELAY")) & "</td><td>"
	End If
	strReport = strReport & DB2HTML(objRs("LASTNAME")) & "</td><td>" & DB2HTML(objRs("FIRSTNAME")) & "</td><td>" & DB2HTML(objRs("MIDDLENAME")) &_
		"</td><td class=""cell-date"">" & Date2Str(objRs("BIRTHDATE")) & "</td><td>" & DB2HTML(objRs("BCF_DOCTYPE")) & "</td><td>" & DB2HTML(objRs("BCF_SERIES")) & "</td><td>" & DB2HTML(objRs("BCF_NO")) &_
		"</td><td class=""cell-date"">" & Date2Str(objRs("BCF_DATE")) & "</td><td>" & DB2HTML(objRs("BCF_WHOM")) & "</td><td>" & DB2HTML(objRs("SNILS")) & "</td><td>" & DB2HTML(objRs("LNAME")) &_
		"</td><td>" & DB2HTML(objRs("SHORTNAME")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("HOUSE")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("CORP")) &_
		"</td><td class=""cell-text"">" & DB2HTML(objRs("ROOM"))

	If nCurrFuncType = kFuncType_PreSchool Then
		strReport = strReport & _
		"</td><td>" & DB2HTML(objRs("PARENT_LASTNAME")) & "</td><td>" & DB2HTML(objRs("PARENT_FIRSTNAME")) & "</td><td>" & DB2HTML(objRs("PARENT_MIDDLENAME"))
	ElseIf nCurrFuncType = kFuncType_Common Then
		strReport = strReport & _
		"</td><td>" & DB2HTML(objRs("EDUCFORM"))
	End If

	strReport = strReport & "</td></tr>"
	GetTableLine = strReport
End Function
%>
