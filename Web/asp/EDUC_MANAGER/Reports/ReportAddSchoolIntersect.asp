<!-- #INCLUDE FILE="YearDates_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub SpecialRead()
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType( strFilterEMID, kFuncType_Add)
	If objCommonYears.EOF Then Exit Sub
	
	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
End Sub

Sub SpecialFilters( strForm )
	FilterGlobalYear
End Sub
%>
