<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Dim dtToday, rsFuncTypes

Sub SpecialRead()
	bExit = False
	InitEOTypesEM_FuncType_Add
	If bExit Then Exit Sub
	
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType(strFilterEMID, strEOTypeID)
	If objCommonYears.EOF Then Exit Sub
	
	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
	SetDefault_EndDate

	Call InitEM_ForEOType(strEOTypeID, nGlobalYearID)
End Sub

Sub SpecialWrite()
	If bExit Then Exit Sub
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
	Call obTokenMgr.SetData(strToken, "stCurrEOTypeID", strEOTypeID)
	Call obTokenMgr.SetData(strToken, stEMSchoolID, strEMSchoolID)
End Sub

Sub specialHead()
	bIsCheckDates=True

	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
End Sub

Sub SpecialFilters( strForm )
	Call DrawEOTypes(strForm)
	If bExit Then Exit Sub
	FilterYearAndOneDate
	If bExit Then Exit Sub

	DrawEM_EOs obLanguage("EMReports","kEMSchool")
End Sub
%>
