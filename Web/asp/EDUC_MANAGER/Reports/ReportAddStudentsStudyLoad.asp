<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim objPoolCategories, nCategoryID

Sub SpecialRead()
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType( strFilterEMID, kFuncType_Add)
	If objCommonYears.EOF Then Exit Sub
	
	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)

	Set objPoolCategories = objNSNET.GetPoolCategories("-1")
	If objPoolCategories.EOF Then
		GenerateError obLanguage("Import","kCantGetPoolCategories")
	End If
	nCategoryID = GetSafe("selectType", "-1")
End Sub

Sub SpecialFilters( strForm )
	FilterGlobalYear
	If objCommonYears.EOF Then Exit Sub
	DrawFilterRow "", obLanguage("EMReports","kCategoryLearning"), "selectType", objPoolCategories, "CATEGORYID", "REPORTNAME", nCategoryID, True
End Sub
%>
