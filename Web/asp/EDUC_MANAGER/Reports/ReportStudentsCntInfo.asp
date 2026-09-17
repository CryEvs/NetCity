<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub SpecialRead()
	InitEM_NotArchivedGlobalYears
	If objCommonYears.EOF Then Exit Sub

	SetDefault_EndDate
End Sub

Sub SpecialWrite()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
End Sub

Sub SpecialFilters( strForm )
	FilterYearAndOneDate
End Sub
%>
