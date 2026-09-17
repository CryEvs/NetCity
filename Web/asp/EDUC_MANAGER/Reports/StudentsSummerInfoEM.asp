<!-- #INCLUDE FILE="../../headerPrint_s.asp" -->
<!-- #INCLUDE FILE="../../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nGlobalYearId, nEmId, strGYName, strStartYear, arrStudentsSummerInfo, nMonthNumber, nSummerInfoTypeFilter, arrSummerBusyForms, arrConsolidatedInfo, nSchoolId

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames", "kStudentsSummerInfo")
	If nSummerInfoTypeFilter = 0 Then GetPageTitle = obLanguage("Reports", "kPersonalListReportName")
	If nSummerInfoTypeFilter = 1 Or nSummerInfoTypeFilter = -1 Then GetPageTitle = obLanguage("Reports", "kConsolidatedReportName")
	
End Function

Function GetPageParams()
End Function

Sub specialRead()
	nEmId = GetSafeLng(Request("EMID"), -1)
	nMonthNumber = GetSafeLng(Request("MONTHSFILTER"), -1)
	nSummerInfoTypeFilter = GetSafeLng(Request("SUMMERINFOTYPEFILTER"), -1)
	nSchoolId = GetSafeLng(Request("ORGANIZATIONFILTER"), -1)
	nGlobalYearId = GetSafeLng(Request("YEAR"), -1)
	strGYName = objNSNET.GetGlobalYearName(nGlobalYearId)
	strStartYear = Left(strGYName, 4)
End Sub

Sub specialMain()
	Dim component
	Dim objTempRs
	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReportsComponent")
	On Error Resume Next
	If nSummerInfoTypeFilter = 0 Then
		Set arrStudentsSummerInfo = component.GetStudentsSummerInfoEM(nGlobalYearId, nEmId, nMonthNumber, nSchoolId)
		Set arrConsolidatedInfo = component.GetConsolidatedStudentsSummerInfo(nGlobalYearId, -1, nMonthNumber, nSchoolId)
	Else
		If nSchoolId = -1 Then
			Set arrConsolidatedInfo = component.GetConsolidatedStudentsSummerInfoByEM(nGlobalYearId, nEmId, nMonthNumber, nSchoolId)
		Else
			Set arrConsolidatedInfo = component.GetConsolidatedStudentsSummerInfo(nGlobalYearId, -1, nMonthNumber, nSchoolId)
		End If
	End If
	Set arrSummerBusyForms = component.GetSummerBusyForms()
	TestError obLanguage("EMReports","kCantGetStudentsSummerInfo")
	If nSummerInfoTypeFilter = 0 Then
		If arrStudentsSummerInfo.Count = 0 Then strErrMsg = obLanguage("EMReports","kEmptyStudentsSummerInfo")
	Else
		If nSchoolId = -1 Then
			If arrConsolidatedInfo.Count = 0 Then strErrMsg = obLanguage("EMReports","kEmptyStudentsSummerInfo")
		End If
	End If
End Sub

Function GetHeader_Table()
	GetHeader_Table = "<table class=""table-print"">"
End Function

Function GetReportTable()
	Dim rowNumber, studentInfo, strBuilder, busyForm, emInfo, arrConsolidatedData, busyInfo, totalAmount, arrTotals, indexTotals
	rowNumber = 1
	Set strBuilder = new StringBuilder
	strBuilder.Append GetHeader_Table() & "<tr>"
	If nSummerInfoTypeFilter = 0 Then
		strBuilder.Append 		"<th rowspan=2>" & obLanguage("Reports","kOrderNum") & "</th>" 
		strBuilder.Append 		"<th rowspan=2>" & obLanguage("Reports","kFIOstud") & "</th>" 
		strBuilder.Append 		"<th rowspan=2>" & obLanguage("Reports","kFullYearsCount") & "</th>" 
		strBuilder.Append		"<th colspan=3>" & obLanguage("Reports","kOrgRestTypes") & "</th>"
		strBuilder.Append		"<th colspan=4>" & obLanguage("Reports","kEmployment") & "</th>"
		strBuilder.Append		"<th colspan=3>" & "" & "</th>"
		strBuilder.Append		"</tr>"
		strBuilder.Append		"<tr>"
		For Each busyForm in arrSummerBusyForms
			strBuilder.Append "<th>" + busyForm.Name + "</th>"
		Next
		strBuilder.Append 		"<th>" & obLanguage("Reports","kAnotherSummerBusy") & "</th>" 
		strBuilder.Append 		"</tr>"
		For Each studentInfo in arrStudentsSummerInfo
			strBuilder.Append	"<tr>"
			strBuilder.Append	"<td class='cell-num'>" & rowNumber & "</td>"
			strBuilder.Append	"<td class='cell-text'>" & studentInfo.LastName & " " & studentInfo.FirstName & " " & studentInfo.MiddleName & "</td>"
			strBuilder.Append	"<td class='cell-num-center'>" & studentInfo.Age & "</td>"
			For Each busyForm in arrSummerBusyForms
				strBuilder.Append "<td>" & IIF((CLng(busyForm.Id) And CLng(studentInfo.SummerInfo)) > 0, obLanguage("Common", "kYes"), "-") & "</td>"
			Next
			strBuilder.Append	"<td class='cell-text'>" & studentInfo.SummerInfoComment & "</td>"
			strBuilder.Append	"</tr>"
			rowNumber = rowNumber + 1
		Next
		strBuilder.Append	"<tr>"
		Set arrConsolidatedData = arrConsolidatedInfo.GetSummerInfoArrayList()
		strBuilder.Append	"<td colspan=3 class='cell-text'>" & obLanguage("EMReports","kTotal") & ": " & arrConsolidatedInfo.StudentsAmount & "</td>"
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
		If nSchoolId = -1 Then
			strBuilder.Append 		"<th rowspan='3'>" & obLanguage("Common","kEMName") & "</th>" 
		End If
		strBuilder.Append		"<th rowspan=3>" & obLanguage("Reports", "kCountStudents") & "</th>"
		strBuilder.Append		"<th colspan=6>" & obLanguage("Reports","kOrgRestTypes") & "</th>"
		strBuilder.Append		"<th colspan=8>" & obLanguage("Reports","kEmployment") & "</th>"
		strBuilder.Append		"<th colspan=6>" & "" & "</th>"
		strBuilder.Append		"</tr>"
		strBuilder.Append		"<tr>"
		For Each busyForm in arrSummerBusyForms
			strBuilder.Append "<th colspan=2>" & busyForm.Name & "</th>"
		Next
		strBuilder.Append	"</tr>"
		strBuilder.Append	"<tr>"
		For Each busyForm in arrSummerBusyForms
			strBuilder.Append "<th>" & obLanguage("EMReports", "kAbsoluteMark") & "</th>"
			strBuilder.Append "<th>%</th>"
		Next
		strBuilder.Append	"</tr>"
		If nSchoolId = -1 Then
			totalAmount = 0
			If arrConsolidatedInfo.Count > 0 Then
				ReDim arrTotals(arrSummerBusyForms.Count)
			End If
			For Each emInfo in arrConsolidatedInfo
				strBuilder.Append	"<tr>" 
				strBuilder.Append	"<td class='cell-text'>" & emInfo.Name & "</td>"
				strBuilder.Append	"<td class='cell-num'>" & emInfo.StudentsAmount & "</td>"
				Set arrConsolidatedData = emInfo.GetSummerInfoArrayList()
				indexTotals = 0
				For Each busyForm in arrSummerBusyForms
					For Each busyInfo in arrConsolidatedData
						If busyInfo.SummerBusyForm = busyForm.Id Then
							strBuilder.Append "<td class='cell-num'>" & busyInfo.StudentsAmount & "</td>"
							If emInfo.StudentsAmount > 0 Then
								strBuilder.Append "<td class='cell-num-2'>" & Round(busyInfo.StudentsAmount / emInfo.studentsAmount * 100 * 100) / 100 & "</td>"
							Else
								strBuilder.Append "<td class='cell-num-2'>" & "</td>"
							End If
							arrTotals(indexTotals) = arrTotals(indexTotals) + busyInfo.StudentsAmount
							Exit For
						End If
					Next
					indexTotals = indexTotals + 1
				Next
				totalAmount = totalAmount + emInfo.StudentsAmount
				strBuilder.Append	"</tr>" 
			Next

			If arrConsolidatedData.Count > 1 Then
				strBuilder.Append	"<tr>"
				strBuilder.Append	"<td class='cell-text'>" & obLanguage("EMReports","kTotal") & "</td>"
				strBuilder.Append	"<td class='cell-num'>" & totalAmount & "</td>"
				For indexTotals = 0 To arrConsolidatedData.Count - 1
					strBuilder.Append "<td class='cell-num'>" & arrTotals(indexTotals) & "</td>"
					If arrTotals(indexTotals) > 0 Then
						strBuilder.Append "<td class='cell-num-2'>" & Round(arrTotals(indexTotals) / totalAmount * 100 * 100) / 100 & "</td>"
					Else
						strBuilder.Append "<td class='cell-num-2'>" & "</td>"
					End If				
				Next
				strBuilder.Append	"</tr>"
			End If
		Else
			strBuilder.Append "<td class='cell-num'>" & arrConsolidatedInfo.StudentsAmount & "</td>"
			
			For Each busyForm in arrSummerBusyForms
				For Each busyInfo in arrConsolidatedData
					If busyInfo.SummerBusyForm = busyForm.Id Then
						strBuilder.Append "<td class='cell-num'>" & busyInfo.StudentsAmount & "</td>"
						If busyInfo.StudentsAmount > 0 Then
							strBuilder.Append "<td class='cell-num-2'>" & Round(busyInfo.StudentsAmount / arrConsolidatedInfo.studentsAmount * 100 * 100) / 100 & "</td>"
						Else
							strBuilder.Append "<td class='cell-num-2'>" & "</td>"
						End If				
						Exit For
					End If
				Next
			Next
		End If
	End If
	strBuilder.Append "</table>"
	GetReportTable = strBuilder.ToString()
End Function
%>
