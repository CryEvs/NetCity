<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim dtToday, rsFuncTypes
Dim strViolationID, objViolations

Sub SpecialRead()
	bExit = False
	InitEOTypesEM_FuncType_Add
	If bExit Then Exit Sub
	
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType(strFilterEMID, strEOTypeID)
	If objCommonYears.EOF Then Exit Sub
	
	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
	SetDefault_EndDate

	Call InitEM_ForEOType(strEOTypeID, nGlobalYearID)
	If bExit Then Exit Sub

	Call InitViolations()
End Sub

Sub InitViolations()
	strViolationID = GetSafeID(Request("Viol_ID"), GetSafeID(obTokenMgr.GetData(strToken, stViolationID), "-1"))
	Set objViolations = objNSNET.GetUserEditableParamItems(Null, 1048, 0)
	If strViolationID <> "-1" Then
		strViolationID = CStr(GetSafeIDForRs(strViolationID, objViolations, "ITEMID"))
		If strViolationID = "0" Then
			strViolationID = "-1"
		End If
	End If
End Sub

Sub SpecialWrite()
	If bExit Then Exit Sub
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
	Call obTokenMgr.SetData(strToken, "stCurrEOTypeID", strEOTypeID)
	Call obTokenMgr.SetData(strToken, stEMSchoolID, strEMSchoolID)
	Call obTokenMgr.SetData(strToken, stViolationID, strViolationID)
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
	Call DrawSelectInfoRow(obLanguage("EMReports","kViolationKind_EM"), strViolationID, "Viol_ID", objViolations, "ITEMID", "ITEMNAME", obLanguage("Common","kAll"), "")
End Sub

%>
