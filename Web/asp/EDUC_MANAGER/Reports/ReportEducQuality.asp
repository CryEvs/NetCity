<!-- #INCLUDE FILE="YearDates_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim bSecondaryEduc

Sub SpecialRead()
	bSecondaryEduc = GetSafeBool(GetSafe("SecondaryEduc", false), false)
	bIsCheckDates = False
	Call InitEOTypesDOU

	InitEM_NotArchivedGlobalYears
	If objCommonYears.EOF Then Exit Sub

End Sub

Sub SpecialWrite()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
	Call obTokenMgr.SetData(strToken, "stCurrEOTypeID", strEOTypeID)
End Sub

Sub WriteMoreHiddenTags()
	WriteHiddenTags Array("SecondaryEduc", bSecondaryEduc)
End Sub

Sub SpecialFilters( strForm )

	Call DrawEOTypes2(strForm)
	FilterGlobalYear
End Sub

%>
