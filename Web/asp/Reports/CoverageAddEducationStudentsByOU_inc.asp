<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim dtEndDate, strEndDate
Dim arrClassStudentsCountFilling

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kCoverageAddEducationStudents", kFuncType_Common)
End Function

Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kDate"), strEndDate)
End Function

Sub specialRead()
	SetScriptTimeOut 900
	strEndDate = GetSafe("DDT",  "")
	dtEndDate = GetSafeDate(strEndDate, Null)
End Sub

Sub SpecialMain()
	Dim arrayList

	On Error Resume Next
	Set arrayList = objNSNET.GetSchoolCoverageAddEducation(strCurrYearID, dtEndDate)
	TestError obLanguage("Common","kUnexpErr")

	arrClassStudentsCountFilling = arrayList.ToArray()
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num""><tr><th>№ п.п</th><th>" & obLanguage("EMReports","kClass2") & "</th><th>" & obLanguage("Reports","kStudentsCount", kFuncType_Common) & _
	"</th><th>" & obLanguage("Reports","kStudentsUdodCount", kFuncType_Common) & "</th><th>" & obLanguage("Reports","kStudentsUdodPerc", kFuncType_Common) & "</th></tr>"
End Function

Function GetReportTable
	Dim strReport, i, objClassAddEducCoverage, countRecords
	Dim totalStudentsCount, totalStudentsCountAddEduc, totalPercCoverageAddEduc

	strReport = GetTableHeader()
	countRecords = UBound(arrClassStudentsCountFilling)

	If countRecords = -1 Then
		GetReportTable = GetWarningPrint(obLanguage("Reports", "kNoStudents"))
	Else
		For i = 0 To countRecords
			Set objClassAddEducCoverage = arrClassStudentsCountFilling(i)
			strReport = strReport & "<tr>" &_
			"<td>" & i + 1 & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objClassAddEducCoverage.ClassName) & "</td>" & _
			"<td>" & DB2HTML(objClassAddEducCoverage.StudentsCount) & "</td>" & _
			"<td>" & DB2HTML(objClassAddEducCoverage.StudentsCountAddEduc) & "</td>" & _
			"<td>" & DB2HTML(objClassAddEducCoverage.PercCoverageAddEduc) & "</td>"
			strReport = strReport & "</tr>"

			totalStudentsCount = totalStudentsCount + objClassAddEducCoverage.StudentsCount
			totalStudentsCountAddEduc = totalStudentsCountAddEduc + objClassAddEducCoverage.StudentsCountAddEduc
		Next
	
		totalPercCoverageAddEduc = Round(100 * totalStudentsCountAddEduc / totalStudentsCount)

		strReport = strReport & "<tr class=""totals""><td>" & obLanguage("EMReports","kTotal") & "</td><td></td><td>" & totalStudentsCount & "</td>" & _
		"<td>" & totalStudentsCountAddEduc & "</td>" & "<td>" & totalPercCoverageAddEduc & "</td></tr>"

		GetReportTable = strReport & "</table>"
	End If
End Function
%>