<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub SpecialRead()
	InitEM_NotArchivedGlobalYears
	If objCommonYears.EOF Then Exit Sub

	SetDefaultDates

	InitEM_PreSchools

End Sub

Sub SpecialWrite()
	Call WriteGlobalYear()
End Sub

Sub SpecialFilters( strForm )
	Call FilterYearAndDates()
	DrawEM_PreSchools
	Call DrawDOUGroupTypesFilter()
End Sub

%>
