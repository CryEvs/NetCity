<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim dtStartDate, dtEndDate, dtToday
Dim strReportFileName, strReportExportFileName
Dim strViolationID, objViolations

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewSpecialEducNeeds) Then hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialRead()
	Call InitDate()
	Call InitViolations()
End Sub

Sub InitViolations()
	strViolationID = GetSafeID(obTokenMgr.GetData(strToken, stViolationID), "-1")
	Set objViolations = objNSNET.GetUserEditableParamItems(Null, 1048, 0)
	If strViolationID <> "-1" Then
		strViolationID = CStr(GetSafeIDForRs(strViolationID, objViolations, "ITEMID"))
		If strViolationID = "0" Then strViolationID = "-1"
	End If
End Sub

Sub SpecialWrite()
End Sub

Sub SpecialHead()
	Call scriptCalendar( "Reports", dtStartDate, dtEndDate )
End Sub

Sub SpecialFilters( strForm )
	Call DrawDateRangeItem("DDT", dtToday, "kDate")
	DrawSelectInfoRow obLanguage("Reports","kViolationKind"), strViolationID, "Viol_ID", objViolations, "ITEMID", "ITEMNAME", obLanguage("Common","kAll"), ""
End Sub
%>
