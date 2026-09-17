<!-- #INCLUDE FILE="../../headerPrint_s.asp" -->
<!-- #INCLUDE FILE="../../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nViewType
Dim arrNotFillingStaffData
Dim nPersonalCardFields, arrPersonalCardFields, strPersonalCardField, nFuncType, nSchoolId, nGlobalYearId, nEmId, dtCurrentDate, strGYName, strStartYear

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames", "kStaffDataFilling")
End Function

Function GetPageParams()
End Function

Sub specialRead()
	nPersonalCardFields = 0
	nFuncType = GetSafeLng(Request("funcTypeFilter"), -1)
	nSchoolId = GetSafeLng(Request("OrganizationFilter"), -1)
	dtCurrentDate = GetSafeDate(Request.Form("dateFilter"), Date)
	nEmId = GetSafeLng(Request("EMID"), -1)
	nGlobalYearId = GetSafeLng(Request("YEAR"), -1)
	strGYName = objNSNET.GetGlobalYearName(nGlobalYearId)
	strStartYear = Left(strGYName, 4)
	arrPersonalCardFields = Request("PersonalCardFields")
	For Each strPersonalCardField in Request("PersonalCardFields")
		nPersonalCardFields = nPersonalCardFields + CLng(strPersonalCardField)
	Next
	Call obTokenMgr.SetData(strToken, "NotFillingStaffFields", nPersonalCardFields)
End Sub

Sub specialMain()
	Dim component
	Dim objTempRs
	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReportsComponent")
	On Error Resume Next
	Set arrNotFillingStaffData = component.GetNotFillingStaffData(nPersonalCardFields, nFuncType, nSchoolId, nGlobalYearId, nEmId)
	TestError obLanguage("EMReports","kCantGetNotFillingStaffData")
	If arrNotFillingStaffData.Count = 0 Then strErrMsg = obLanguage("EMReports","kEmptyNotFillingStaffData")
End Sub

Function GetHeader_Table()
	GetHeader_Table = "<table class=""table-print"">"
End Function

Function GetReportTable()
	Dim studentInfo, bEmptyRecord, strBuilder, rowNumber, strClassName, strClassNames, strNotFillingField, strNotFillingFieldsNames, schoolInfo
	Dim nAllPersonalCardsSum, nNotFillingPersonalCardsSum, nPlannedOccupancyAmountSum, nAllPersonalCardsOccupancySum, nNotFillingPersonalCardsOccupancySum, nNoDataClassesAmount
	rowNumber = 1
	Set strBuilder = new StringBuilder

	nAllPersonalCardsSum = 0
	nNotFillingPersonalCardsSum = 0
	nPlannedOccupancyAmountSum = 0
	nAllPersonalCardsOccupancySum = 0
	nNotFillingPersonalCardsOccupancySum = 0
	nNoDataClassesAmount = 0
	strBuilder.Append GetHeader_Table() & "<tr>"
	strBuilder.Append 		"<th>" & obLanguage("Reports","kOrderNum") & "</th>" 
	strBuilder.Append 		"<th>" & obLanguage("Common","kEMName") & "</th>" 
	strBuilder.Append 		"<th>" & obLanguage("Common","kEO") & "</th>"
	strBuilder.Append 		"<th>" & obLanguage("Reports","kAllPersonalCardsStaff") & "</th>"
	strBuilder.Append 		"<th>" & obLanguage("Reports","kFillingPersonalCardsStaff") & "</th>"
	strBuilder.Append 		"<th>" & obLanguage("Reports","kNotFillingPersonalCardsStaff") & "</th>"
	strBuilder.Append 		"<th>" & Replace(obLanguage("Reports","kPlannedOccupancyAmountStaff"), "ГГГГ", strStartYear) & "</th>"
	strBuilder.Append 		"<th>" & Replace(obLanguage("Reports","kPlannedOccupancyFillingPercent"),"ГГГГ", strStartYear) & "</th>"
	strBuilder.Append 		"</tr>"	

	For Each schoolInfo in arrNotFillingStaffData
		strBuilder.Append	"<tr>"
		strBuilder.Append	"<td class=""cell-num"">" & rowNumber & "</td>"
		strBuilder.Append	"<td class=""cell-text"">" & schoolInfo.EducManager & "</td>"
		strBuilder.Append	"<td class=""cell-text"">" & schoolInfo.OrgName & "</td>"
		strBuilder.Append	"<td class=""cell-num"">" & schoolInfo.AllPersonalCards & "</td>"
		nAllPersonalCardsSum = nAllPersonalCardsSum + schoolInfo.AllPersonalCards
		strBuilder.Append	"<td class=""cell-num"">" & schoolInfo.AllPersonalCards - schoolInfo.NotFillingPersonalCards & "</td>"
		strBuilder.Append	"<td class=""cell-num"">" & schoolInfo.NotFillingPersonalCards & "</td>"
		nNotFillingPersonalCardsSum = nNotFillingPersonalCardsSum + schoolInfo.NotFillingPersonalCards
	'	If schoolInfo.NoDataClassesAmount > 0 Then
	'		nNoDataClassesAmount = nNoDataClassesAmount + schoolInfo.NoDataClassesAmount
	'		strBuilder.Append	"<td class=""cell-text"" colspan=""2"">" & obLanguage("Reports", "kNoDataClassesAmount") & schoolInfo.NoDataClassesAmount & "</td>"
		If schoolInfo.PlannedOccupancyAmount > 0 Then
			nPlannedOccupancyAmountSum = nPlannedOccupancyAmountSum + schoolInfo.PlannedOccupancyAmount
			nAllPersonalCardsOccupancySum = nAllPersonalCardsOccupancySum + schoolInfo.AllPersonalCards
			nNotFillingPersonalCardsOccupancySum = nNotFillingPersonalCardsOccupancySum + schoolInfo.NotFillingPersonalCards
			strBuilder.Append	"<td class=""cell-num"">" & schoolInfo.PlannedOccupancyAmount & "</td>"
			strBuilder.Append	"<td class=""cell-num-2"">" & Round((schoolInfo.AllPersonalCards - schoolInfo.NotFillingPersonalCards) / schoolInfo.PlannedOccupancyAmount * 100, 2) & "</td>"
		Else
			strBuilder.Append	"<td class=""cell-text-center"" colspan=""2"">" & obLanguage("Reports","kDataNotSet") & "</td>"
		End If
		strBuilder.Append	"</tr>"
		rowNumber = rowNumber + 1
	Next

	strBuilder.Append		"<tr>"
	strBuilder.Append		"<td class=""cell-text"" colspan=""3"">" & obLanguage("Reports","kTotalNumber") & "</td>"
	strBuilder.Append		"<td class=""cell-num"">" & nAllPersonalCardsSum & "</td>"
	strBuilder.Append		"<td class=""cell-num"">" & nAllPersonalCardsSum - nNotFillingPersonalCardsSum & "</td>"
	strBuilder.Append		"<td class=""cell-num"">" & nNotFillingPersonalCardsSum & "</td>"
	'If nNoDataClassesAmount > 0 Then
	'	strBuilder.Append	"<td class=""cell-text"" colspan=""2"">" & obLanguage("Reports", "kNoDataClassesAmount") & nNoDataClassesAmount & "</td>"
	If nPlannedOccupancyAmountSum > 0 Then
		strBuilder.Append	"<td class=""cell-num"">" & nPlannedOccupancyAmountSum & "</td>"
		strBuilder.Append	"<td class=""cell-num-2"">" & Round((nAllPersonalCardsOccupancySum - nNotFillingPersonalCardsOccupancySum) / nPlannedOccupancyAmountSum * 100, 2) & "</td>"
	Else
		strBuilder.Append	"<td class=""cell-text-center"" colspan=""2"">" & obLanguage("Reports","kDataNotSet") & "</td>"
	End If
	strBuilder.Append		"</tr>"

	strBuilder.Append "</table>"


	GetReportTable = strBuilder.ToString()
End Function

%>
