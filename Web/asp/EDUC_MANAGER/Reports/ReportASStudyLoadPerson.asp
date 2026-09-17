<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim objPoolCategories, nCategoryID
Dim nLoadNum, arrLoads

Sub SpecialRead()
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType( strFilterEMID, kFuncType_Add)
	If objCommonYears.EOF Then Exit Sub
	
	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)

	Set objPoolCategories = objNSNET.GetPoolCategories("-1")
	If objPoolCategories.EOF Then
		GenerateError obLanguage("Import","kCantGetPoolCategories")
	End If
	nCategoryID = GetSafe("selectType", "-1")

	nLoadNum = GetSafe("LOAD_NUM",-1)
	Call InitArrLoads()
End Sub

Sub SpecialFilters( strForm )
	FilterGlobalYear
	If objCommonYears.EOF Then Exit Sub
	DrawFilterRow "", obLanguage("EMReports","kCategoryLearning"), "selectType", objPoolCategories, "CATEGORYID", "REPORTNAME", nCategoryID, True
	DrawFilterRow "", obLanguage("EMReports","kStudyLoad"), "LOAD_NUM", arrLoads, "", "", nLoadNum, False
End Sub

Sub InitArrLoads()
	ReDim arrLoads(1, 4)

	arrLoads(0, 0) = 1
	arrLoads(1, 0) = obLanguage("EMReports","kLoad_Less_5")
	arrLoads(0, 1) = 2
	arrLoads(1, 1) = obLanguage("EMReports","kLoad_5_10")
	arrLoads(0, 2) = 3
	arrLoads(1, 2) = obLanguage("EMReports","kLoad_11_24")
	arrLoads(0, 3) = 4
	arrLoads(1, 3) = obLanguage("EMReports","kLoad_25_32")
	arrLoads(0, 4) = 5
	arrLoads(1, 4) = obLanguage("EMReports","kLoad_Greater_32")
End Sub
%>
