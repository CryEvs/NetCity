<!-- #INCLUDE FILE="../headerPrint_s.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strGYName, strStartYear, nGlobalYearId, arrStudentsSummerInfo, nMonthNumber, nSummerInfoTypeFilter, arrSummerBusyForms, nSchoolYearId, objConsolidatedInfo

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames", "kStudentsSummerInfo", strFunctionalityType)
	If nSummerInfoTypeFilter = 0 Then GetPageTitle = obLanguage("Reports", "kPersonalListReportName")
	If nSummerInfoTypeFilter = 1 Or nSummerInfoTypeFilter = -1 Then GetPageTitle = obLanguage("Reports", "kConsolidatedReportName")
End Function

Function GetPageParams()
End Function

Sub specialRead()
	nMonthNumber = GetSafeLng(Request("MONTHSFILTER"), -1)
	nSummerInfoTypeFilter = GetSafeLng(Request("SUMMERINFOTYPEFILTER"), -1)
	nSchoolYearId = GetSafeLng(Request("YEARFILTER"), -1)
	nGlobalYearId = objNSNET.GetGlobalYearIdFromSchoolYearId(nSchoolYearId)
	strGYName = objNSNET.GetGlobalYearName(nGlobalYearId)
	strStartYear = Left(strGYName, 4)
End Sub

Sub specialMain()
	Dim component
	Dim objTempRs
	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReportsComponent")
	On Error Resume Next
	If nSummerInfoTypeFilter = 0 Then
		Set arrStudentsSummerInfo = component.GetStudentsSummerInfo(nGlobalYearId, nSchoolYearId, nMonthNumber)
		Set objConsolidatedInfo = component.GetConsolidatedStudentsSummerInfo(nGlobalYearId, nSchoolYearId, nMonthNumber, -1)
	Else
		Set objConsolidatedInfo = component.GetConsolidatedStudentsSummerInfo(nGlobalYearId, nSchoolYearId, nMonthNumber, -1)
	End If
	Set arrSummerBusyForms = component.GetSummerBusyForms()
	TestError obLanguage("Reports","kCantGetStudentsSummerInfo")
	If nSummerInfoTypeFilter = 0 Then
		If arrStudentsSummerInfo.Count = 0 Then strErrMsg = obLanguage("Reports","kEmptyStudentsSummerInfo")
	End If
End Sub

Function GetHeader_Table()
	GetHeader_Table = "<table class=""table-print"">"
End Function

Function GetReportTable()
	Dim rowNumber, studentInfo, strBuilder, busyForm, busyInfo, arrConsolidatedData, consolidatedInfo
	rowNumber = 1
	Set strBuilder = new StringBuilder
	strBuilder.Append GetHeader_Table() & "<tr>"
	If nSummerInfoTypeFilter = 0 Then
		strBuilder.Append 		"<th>" & obLanguage("Reports","kOrderNum") & "</th>" 
		strBuilder.Append 		"<th>" & obLanguage("Reports","kFIOstud") & "</th>" 
		strBuilder.Append 		"<th>" & obLanguage("Reports","kFullYearsCount") & "</th>" 
		For Each busyForm in arrSummerBusyForms
			strBuilder.Append "<th>" & busyForm.Name & "</th>"
		Next
		strBuilder.Append 		"<th>" & obLanguage("Reports","kAnotherSummerBusy") & "</th>" 
		strBuilder.Append 		"</tr>"
		For Each studentInfo in arrStudentsSummerInfo
			strBuilder.Append	"<tr>"
			strBuilder.Append	"<td class='cell-num'>" & rowNumber & "</td>"
			strBuilder.Append	"<td class='cell-text'>" & studentInfo.LastName & " " & studentInfo.FirstName & " " & studentInfo.MiddleName & "</td>"
			strBuilder.Append	"<td class='cell-num-center'>" & studentInfo.Age & "</td>"
			For Each busyForm in arrSummerBusyForms
				strBuilder.Append "<td class='cell-text-center'>" & IIF((CLng(busyForm.Id) And CLng(studentInfo.SummerInfo)) > 0, obLanguage("Common", "kYes"), "-") & "</td>"
			Next
			strBuilder.Append	"<td class='cell-text'>" & studentInfo.SummerInfoComment & "</td>"
			strBuilder.Append	"</tr>"
			rowNumber = rowNumber + 1
		Next
		strBuilder.Append	"<tr>"
		strBuilder.Append	"<td colspan=3 class='cell-text'>" & obLanguage("EMReports","kTotal") & ": " & objConsolidatedInfo.StudentsAmount & "</td>"
		Set arrConsolidatedData = objConsolidatedInfo.GetSummerInfoArrayList()
		For Each busyForm in arrSummerBusyForms
			For Each busyInfo in arrConsolidatedData
				If busyInfo.SummerBusyForm = busyForm.Id Then
					strBuilder.Append "<td class='cell-num'>" & busyInfo.StudentsAmount & "</td>"
					Exit For
				End If
			Next
		Next
		strBuilder.Append	"<td></td>"
		strBuilder.Append	"</tr>"	
	Else
		strBuilder.Append	"<th>" & obLanguage("Reports", "kCountStudents") & "</th>"
		For Each busyForm in arrSummerBusyForms
			strBuilder.Append "<th>" & busyForm.Name & "</th>"
		Next
		strBuilder.Append 		"</tr>"
		strBuilder.Append		"<td>" & objConsolidatedInfo.StudentsAmount & "</td>"
		Set arrConsolidatedData = objConsolidatedInfo.GetSummerInfoArrayList()
		For Each busyForm in arrSummerBusyForms
			For Each busyInfo in arrConsolidatedData
				If busyInfo.SummerBusyForm = busyForm.Id Then
					strBuilder.Append "<td class='cell-num'>" & busyInfo.StudentsAmount & "</td>"
					Exit For
				End If
			Next
		Next
	End If

	strBuilder.Append "</table>"

	GetReportTable = strBuilder.ToString()
End Function
%>
