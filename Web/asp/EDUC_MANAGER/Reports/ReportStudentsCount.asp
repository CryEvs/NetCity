<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub SpecialRead()
	Call InitEOTypesEM

	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType(strFilterEMID, strEOTypeID)
	If objCommonYears.EOF Then Exit Sub

	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
	SetDefault_EndDate
End Sub

Sub SpecialFilters( strForm )
	Call DrawEOTypes(strForm)
	FilterYearAndOneDate
End Sub
%>
