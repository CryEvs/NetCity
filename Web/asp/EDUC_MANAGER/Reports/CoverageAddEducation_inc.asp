<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportService_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

'Тип школ,в которые помещают дошкольниов,студентов,работающих и т.д...(В Тольятти)
'CONST EOFORMID=33

Dim nGlobalYearId, fromAge, toAge, dtDateForBirthday, ageViewType
DIM totalCountCert, totalCount, totalCountDOU, totalCountDOU2, totalCountMOU, totalCountNOU, totalCountGOU, totalCountStud, totalCountwork, i
Dim rsStudentCount, totalCountRecord, totalCountRetired, totalCountOthers

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNCoverageAddEducation")
End Function
Function GetPageParams()
	If (ageViewType > 0) Then
		GetPageParams = Array( _
			obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
			obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
			"Возраст учащихся", "В указанном диапазоне", _
			"Возрастной диапазон", "с " & fromAge & " до " & toAge, _
			"Возраст на дату", Date2Str(dtDateForBirthday) )
	Else
		GetPageParams = Array( _
			obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
			obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
			"Возраст учащихся", "Все" )
	End If
End Function

Function GetTableHeader()
	' Кол-во столбцов должно соответствовать параметру в GetFounderHeader(15, ... - сейчас 15
	GetTableHeader = "<table class=""table-print-num"">" & _
		"<tr><th rowspan=3>" & obLanguage("EMReports","kOrderNum") & "</th>" & _
		"<th rowspan=3>" & obLanguage("EMReports","kDistrictCity") & "</th><th rowspan=3>" & obLanguage("EMReports","kShortNameUDOD") & "</th><th rowspan=3>" & obLanguage("EMReports","kCoverage") & "</th>" & _
		"<th colspan=10>" & obLanguage("EMReports","kCountTrained") & "</th><th rowspan=3>" & obLanguage("EMReports","kCountSert") & "</th></tr>" & _
		"<tr><th rowspan=2>" & obLanguage("EMReports","kTotal") & "</th><th colspan=9>" & obLanguage("EMReports","kFromThem") & "</th></tr>" & _
		"<tr><th>" & obLanguage("EMReports","kMDOU") & "</th><th>" & obLanguage("EMReports","kPreScoolNotOrg") & "</th><th>" & obLanguage("EMReports","kMOY") &"</th><th>" & obLanguage("EMReports","kNOY") &"</th>" & _
		"<th>" & obLanguage("EMReports","kCKOY") & "</th><th>" & obLanguage("EMReports","kUPO") &"</th><th>" & obLanguage("EMReports","kWorkers") & "</th><th>" & obLanguage("Reports","kPoolCategoryOthers") & "</th><th>" & obLanguage("EMReports","kDeparted") & "</th></tr>"
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	fromAge = GetSafe("FROMAGE", 0)
	toAge = GetSafe("TOAGE", 0)
	dtDateForBirthday = GetSafeDate(GetSafe("dtDateForBirthday", ""), "")
	ageViewType = GetSafe("AGETYPE", "")
	bOk = True
	strErrMsg = ""
End Sub

Sub specialMain()
	SetScriptTimeOut 900

	If (ageViewType > 0) Then
		Set rsStudentCount = objNSNET.GetCountStudentsInUDODBYSchoolType(nGlobalYearID, filterEMID, True, fromAge, toAge, dtDateForBirthday)
	Else
		Set rsStudentCount = objNSNET.GetCountStudentsInUDODBYSchoolType(nGlobalYearID, filterEMID, False, fromAge, toAge, dtDateForBirthday)
	End If
	If rsStudentCount.EOF Then
		bOK = False
		strErrMsg = "Нет ОДО в данном учебном году"
	End If
End Sub

Function GetReportTable()
	Dim nOrder
	strReport = GetTableHeader()
	nOrder = 0
	While Not rsStudentCount.EOF
		nOrder = nOrder + 1
		strReport = strReport & GetFounderHeader(15, rsStudentCount) ' 15 - см. соответствие в GetTableHeader()
		strReport = strReport & "<tr><td>" & nOrder & "</td>" &_
		"<td class=""cell-text"">" & GetSafeStr(rsStudentCount("DISTRICT"),-1,"Не указан") & "</td><td class=""cell-text"">" & rsStudentCount("EONAME") & "</td>" & _
		"<td>" & rsStudentCount("COVERAGE") & "</td><td>" & rsStudentCount("TOTAL") & "</td>" & _
		"<td>" & rsStudentCount("DOU") & "</td><td>" & rsStudentCount("DOU2") & "</td><td>" & rsStudentCount("MOU") & "</td><td>" & rsStudentCount("NOU") & "</td>" & _
		"<td>" & rsStudentCount("GOU") & "</td><td>" & rsStudentCount("STUDENTS")  & "</td><td>" & rsStudentCount("WORKING") & "</td><td>" & rsStudentCount("OTHERS") & "</td>" & _
		"<td>" & rsStudentCount("TOTALRETIRED") & "</td><td>" & rsStudentCount("COUNTCERTIFICATE") & "</td></tr>"
		totalCountRecord = totalCountRecord + rsStudentCount("COVERAGE")
		totalCount = totalCount + rsStudentCount("TOTAL")
		totalCountDOU = totalCountDOU + rsStudentCount("DOU")
		totalCountDOU2 = totalCountDOU2 + rsStudentCount("DOU2")
		totalCountMOU = totalCountMOU + rsStudentCount("MOU")
		totalCountNOU = totalCountNOU + rsStudentCount("NOU")
		totalCountGOU = totalCountGOU + rsStudentCount("GOU")
		totalCountStud = totalCountStud + rsStudentCount("STUDENTS")
		totalCountwork = totalCountwork + rsStudentCount("WORKING")
		totalCountOthers = totalCountOthers + rsStudentCount("OTHERS")
		totalCountRetired = totalCountRetired + rsStudentCount("TOTALRETIRED")
		totalCountCert = totalCountCert + rsStudentCount("COUNTCERTIFICATE")
		rsStudentCount.MoveNext
	WEnd
	strReport = strReport & "<tr class=""totals""><td>" & obLanguage("EMReports","kTotal") & "</td><td>&nbsp</td><td>&nbsp</td><td>" & totalCountRecord & "</td>" & _
	"<td>" & totalCount & "</td><td>" & totalCountDOU & "</td><td>" & totalCountDOU2 & "</td><td>" & totalCountMOU & "</td><td>" & totalCountNOU & "</td>" & _
	"<td>" & totalCountGOU & "</td><td>" & totalCountStud & "</td><td>" & totalCountwork & "</td><td>" & totalCountOthers & "</td><td>" & totalCountRetired & "</td><td>" & totalCountCert & "</td></tr>"
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

%>
