<!-- #INCLUDE FILE="../headerPrint_s.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nViewType
Dim arrStudentsNotFillingOnly, arrNotFillingClassesFinalReport, arrNotFillingSchool
Dim nPersonalCardFields, arrPersonalCardFields, strPersonalCardField, dtCurrentDate, strGYName, strStartYear, nGlobalYearId
Dim nPdn, nNation

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames", "kStudentsDataFilling", strFunctionalityType)
End Function

Function GetPageParams()
End Function

Sub specialRead()
	nGlobalYearId = objNSNET.GetGlobalYearIdFromSchoolYearId(strSchoolYearId)
	strGYName = objNSNET.GetGlobalYearName(nGlobalYearId)
	strStartYear = Left(strGYName, 4)
	nViewType = GetSafeLng(Request("StudentsDataFillingViewType"), 0)
	nPdn = GetSafeLng(Request("StudentsDataFillingPdn"), -1)
	nNation = GetSafeLng(Request("StudentsDataFillingNation"), -1)
	strClassID = GetSafeLng(Request("PCLID"), 0)
	nPersonalCardFields = 0
	arrPersonalCardFields = Request("PersonalCardFields")
	dtCurrentDate = GetSafeDate(Request.Form("dateFilter"), Date)
	For Each strPersonalCardField in Request("PersonalCardFields")
		nPersonalCardFields = nPersonalCardFields + CLng(strPersonalCardField)
	Next
End Sub

Sub specialMain()
	Dim component
	Dim objTempRs
	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReportsComponent")
	On Error Resume Next
	If nViewType = 0 Then
		Set arrStudentsNotFillingOnly = component.GetStudentsDataNotFillingOnly(strCurrYearId, strClassID, nPersonalCardFields, dtCurrentDate, nPdn, nNation)
		TestError obLanguage("Reports","kCantGetNotFillingOnly")
		If arrStudentsNotFillingOnly.Count = 0 Then strErrMsg = obLanguage("Reports","kEmptyNotFillingOnly")
	Else
		Set arrNotFillingClassesFinalReport = component.GetNotFillingClassesFinalReport(strCurrYearId, nPersonalCardFields, dtCurrentDate, strClassID, nPdn, nNation)
		TestError obLanguage("Reports","kCantGetNotFillingFinalReport")
		If arrNotFillingClassesFinalReport.Count = 0 Then strErrMsg = obLanguage("Reports","kEmptyNotFillingFinalReport")
		Set arrNotFillingSchool = component.GetNotFillingBySchoolsFinalReport(nPersonalCardFields, -1, strSchoolId, nGlobalYearId, -1, dtCurrentDate, nPdn, nNation)
	End If
End Sub

Function GetHeader_Table()
	GetHeader_Table = "<table class=""table-print"">"
End Function

Function GetReportTable()
	Dim studentInfo, bEmptyRecord, strBuilder, rowNumber, strClassName, strClassNames, strNotFillingField, strNotFillingFieldsNames, classInfo
	Dim nAllPersonalCardsSum, nNotFillingPersonalCardsSum, nPlannedOccupancyAmountSum, nAllPersonalCardsOccupancySum, nNotFillingPersonalCardsOccupancySum, nNoDataClassesAmount
	rowNumber = 1
	Set strBuilder = new StringBuilder

	If nViewType = 0 Then
		strBuilder.Append GetHeader_Table() & "<tr>"
		strBuilder.Append 		"<th>" & obLanguage("Reports","kOrderNum") & "</th>" 
		strBuilder.Append 		"<th>" & obLanguage("Common","kClass",strFunctionalityType) & "</th>" 
		strBuilder.Append 		"<th>" & obLanguage("Common","kLastName") & "</th>" 
		strBuilder.Append 		"<th>" & obLanguage("Common","kFirstName") & "</th>" 
		strBuilder.Append 		"<th>" & obLanguage("Reports","kNoFillingFields") & "</th>" 
		strBuilder.Append 		"</tr>"

		For Each studentInfo in arrStudentsNotFillingOnly
			strBuilder.Append	"<tr>"
			strBuilder.Append	"<td class=""cell-num"">" & rowNumber & "</td>"
			strBuilder.Append	"<td class=""cell-text"">" & Join(studentInfo.ClassNames.ToArray(), ",") & "</td>"
			strBuilder.Append	"<td class=""cell-text"">" & studentInfo.LastName & "</td>"
			strBuilder.Append	"<td class=""cell-text"">" & studentInfo.FirstName & "</td>"
			strBuilder.Append	"<td class=""cell-text"">" & Join(studentInfo.NotFillingFieldsNames.ToArray(), ",") & "</td>"
			strBuilder.Append	"</tr>"
			rowNumber = rowNumber + 1
		Next
	Else
		nAllPersonalCardsSum = 0
		nNotFillingPersonalCardsSum = 0
		nPlannedOccupancyAmountSum = 0
		nAllPersonalCardsOccupancySum = 0
		nNotFillingPersonalCardsOccupancySum = 0
		strBuilder.Append GetHeader_Table() & "<tr>"
		strBuilder.Append 		"<th>" & obLanguage("Reports","kOrderNum") & "</th>" 
		strBuilder.Append 		"<th>" & obLanguage("Common","kClass",strFunctionalityType) & "</th>"
		strBuilder.Append 		"<th>" & obLanguage("Reports","kAllPersonalCards") & "</th>"
		strBuilder.Append 		"<th>" & obLanguage("Reports","kFillingPersonalCards") & "</th>"
		strBuilder.Append 		"<th>" & obLanguage("Reports","kNotFillingPersonalCards") & "</th>"
		strBuilder.Append 		"<th>" & Replace(obLanguage("Reports","kPlannedOccupancyAmount"), "ГГГГ", strStartYear) & "</th>"
		strBuilder.Append 		"<th>" & Replace(obLanguage("Reports","kPlannedOccupancyFillingPercent"), "ГГГГ", strStartYear) & "</th>"
		strBuilder.Append 		"</tr>"	

		For Each classInfo in arrNotFillingClassesFinalReport
			strBuilder.Append	"<tr>"
			strBuilder.Append	"<td class=""cell-num"">" & rowNumber & "</td>"
			strBuilder.Append	"<td class=""cell-text"">" & classInfo.ClassName & "</td>"
			strBuilder.Append	"<td class=""cell-num"">" & classInfo.AllPersonalCards & "</td>"
			nAllPersonalCardsSum = nAllPersonalCardsSum + classInfo.AllPersonalCards
			strBuilder.Append	"<td class=""cell-num"">" & classInfo.AllPersonalCards - classInfo.NotFillingPersonalCards & "</td>"
			strBuilder.Append	"<td class=""cell-num"">" & classInfo.NotFillingPersonalCards & "</td>"
			nNotFillingPersonalCardsSum = nNotFillingPersonalCardsSum + classInfo.NotFillingPersonalCards
			If classInfo.PlannedOccupancyAmount > 0 Then
				nPlannedOccupancyAmountSum = nPlannedOccupancyAmountSum + classInfo.PlannedOccupancyAmount
				nAllPersonalCardsOccupancySum = nAllPersonalCardsOccupancySum + classInfo.AllPersonalCards
				nNotFillingPersonalCardsOccupancySum = nNotFillingPersonalCardsOccupancySum + classInfo.NotFillingPersonalCards
				strBuilder.Append	"<td class=""cell-num"">" & classInfo.PlannedOccupancyAmount & "</td>"
				strBuilder.Append	"<td class=""cell-num-2"">" & Round((classInfo.AllPersonalCards - classInfo.NotFillingPersonalCards) / classInfo.PlannedOccupancyAmount * 100, 2) & "</td>"
			Else
				strBuilder.Append	"<td class=""cell-text-center"" colspan=""2"">" & obLanguage("Reports","kDataNotSet") & "</td>"
			End If
			strBuilder.Append	"</tr>"
			rowNumber = rowNumber + 1
		Next
		nAllPersonalCardsSum = arrNotFillingSchool(0).AllPersonalCards
		nNotFillingPersonalCardsSum = arrNotFillingSchool(0).NotFillingPersonalCards
		nPlannedOccupancyAmountSum = arrNotFillingSchool(0).PlannedOccupancyAmount
		nNoDataClassesAmount = arrNotFillingSchool(0).NoDataClassesAmount
		strBuilder.Append		"<tr>"
		strBuilder.Append		"<td class=""cell-text"" colspan=""2"">" & obLanguage("Reports","kAllByOrg") & "</td>"
		strBuilder.Append		"<td class=""cell-num"">" & nAllPersonalCardsSum & "</td>"
		strBuilder.Append		"<td class=""cell-num"">" & nAllPersonalCardsSum - nNotFillingPersonalCardsSum & "</td>"
		strBuilder.Append		"<td class=""cell-num"">" & nNotFillingPersonalCardsSum & "</td>"
		If nNoDataClassesAmount > 0 Then
			strBuilder.Append	"<td class=""cell-text"" colspan=""2"">" & obLanguage("Reports", "kNoDataClassesAmount") & nNoDataClassesAmount & "</td>"
		ElseIf nPlannedOccupancyAmountSum > 0 Then
			strBuilder.Append	"<td class=""cell-num"">" & nPlannedOccupancyAmountSum & "</td>"
			strBuilder.Append	"<td class=""cell-num-2"">" & Round((nAllPersonalCardsOccupancySum - nNotFillingPersonalCardsOccupancySum) / nPlannedOccupancyAmountSum * 100, 2) & "</td>"
		Else
			strBuilder.Append	"<td class=""cell-text-center"" colspan=""2"">" & obLanguage("Reports","kDataNotSet") & "</td>"
		End If
		strBuilder.Append		"</tr>"
	End If

	strBuilder.Append "</table>"


	GetReportTable = strBuilder.ToString()
End Function

%>
