<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim bAge

Sub SpecialRead()
	bAge = GetSafeBool(GetSafe("Age", false), false)
	'Подсовываем strFilterEMID из Report_inc.asp
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType(strFilterEMID, kFuncType_Add)
	If objCommonYears.EOF Then Exit Sub
	
	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
	SetDefault_EndDate
	
End Sub

Sub WriteMoreHiddenTags()
	WriteHiddenTags Array("Age", bAge)
End Sub

Sub SpecialWrite()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
End Sub

Sub SpecialFilters( strForm )
	If bExit Then Exit Sub
	
	FilterYearAndOneDate
End Sub
%>
