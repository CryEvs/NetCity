<!-- #INCLUDE FILE="YearDates_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim objPoolCategories, nTypeId

Sub SpecialFilters( strForm )
	Dim arr
	FilterGlobalYear
	If bExit Then Exit Sub
	DrawFilterRow "", obLanguage("EMReports","kCategoryLearning"), "selectType", objPoolCategories, "CATEGORYID", "REPORTNAME", nTypeId, True
End Sub

Sub SpecialRead()
	bIsCheckDates = False

	Set objPoolCategories = objNSNET.GetPoolCategories("-1")
	If objPoolCategories.EOF Then
		GenerateError obLanguage("Import","kCantGetPoolCategories")
	End If
	nTypeId = GetSafe("selectType", "-1")

	InitEM_NotArchivedGlobalYears
End Sub
%>
