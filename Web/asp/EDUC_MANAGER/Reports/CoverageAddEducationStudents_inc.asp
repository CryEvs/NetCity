<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<%	' © 2007-2014 IRTech. All rights reserved.

Dim nGlobalYearId
Dim strFilterEMID
Dim strEOTypeID
Dim dtEndDate, strEndDate
Dim arrSchoolStudentCountFilling
Dim totalStudentCount, totalUdodStudentCount, totalPercStudUdod

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNCoverageAddEducationStudents")
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kDate"), strEndDate _
		)
End Function

Sub SpecialRead()

	nGlobalYearID = GetSafe("CMNYEAR", Null)
	SetScriptTimeOut 900
	strEndDate = GetSafe("DDT",  "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	strFilterEMID = GetSafeLng(Request("FilterEMID"), Null)
	strEOTypeID = GetSafeLng(Request("EOTYPEID"), Null)
End Sub

Sub SpecialMain()
	Dim arrayList

	On Error Resume Next
	Set arrayList = objNSNET.GetEmCoverageAddEducation(strFilterEMID, nGlobalYearId, strEOTypeID, dtEndDate)
	TestError obLanguage("Common","kUnexpErr")

	arrSchoolStudentCountFilling = arrayList.ToArray()
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-text""><tr>"
	GetTableHeader = GetTableHeader & "<th>" & obLanguage("EMReports","kOrderNum") & "</th>"
	GetTableHeader = GetTableHeader & GetManagementColumn(1)
	GetTableHeader = GetTableHeader & "</th><th>" & obLanguage("Common","kCity") & _
		"</th><th>" & obLanguage("EMReports","kDistrictCity") & "</th><th>" & obLanguage("Common","kEOType") & _
		"</th><th>" & obLanguage("EMReports","kOU") & "</th><th>" & obLanguage("Common","kStudentsCount") & _
		"</th><th>" & obLanguage("Common","kStudentsUdodCount") & "</th><th>" & obLanguage("Common","kStudentsUdodPerc") & "</th></tr>"
End Function

Function GetReportTable
	Dim strReport, i, schoolStudentCount, countRecords

	strReport = GetTableHeader()
	countRecords = UBound(arrSchoolStudentCountFilling)

	If countRecords = -1 Then
		GetReportTable = GetWarningPrint(obLanguage("Reports", "kNoStudents"))
	Else
		For i = 0 To countRecords
			Set schoolStudentCount = arrSchoolStudentCountFilling(i)

			strReport = strReport & "<tr>" &_
			"<td class=""cell-num"">" & i + 1 & "</td>"
			If subEms Then
				strReport = strReport & "<td class=""text-nowrap"">" & DB2HTML(schoolStudentCount.EmName) & "</td>"
			End If
			strReport = strReport & "<td class=""text-nowrap"">" & DB2HTML(schoolStudentCount.CityName) & "</td>" & _
			"<td class=""text-nowrap"">" & DB2HTML(schoolStudentCount.DistrictName) & "</td>" & _
			"<td class=""text-nowrap"">" & DB2HTML(schoolStudentCount.EoTypeName) & "</td>" & _
			"<td class=""text-nowrap"">" & DB2HTML(schoolStudentCount.SchoolName) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(schoolStudentCount.StudentsCount) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(schoolStudentCount.StudentsCountAddEduc) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(schoolStudentCount.PercCoverageAddEduc) & "</td>"
			strReport = strReport & "</tr>"

			totalStudentCount = totalStudentCount + schoolStudentCount.StudentsCount
			totalUdodStudentCount = totalUdodStudentCount + schoolStudentCount.StudentsCountAddEduc
		Next

		totalPercStudUdod = Round(100 * totalUdodStudentCount / totalStudentCount)

		strReport = strReport & "<tr class=""totals""><td>" & obLanguage("EMReports","kTotal") & "</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>"
		If subEms Then
			strReport = strReport & "<td>&nbsp</td>"
		End If
		strReport = strReport & "<td>" & totalStudentCount & "</td>" & _
		"<td>" & totalUdodStudentCount & "</td>" & "<td>" & totalPercStudUdod & "</td></tr>"

		GetReportTable = strReport & "</table>"
	End If
End Function
%>