<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim dtStartDate, dtEndDate, dtEndDate2
Dim strViewType

Sub SpecialRead()
	strViewType = GetSafeStr(Request("ViewType"), -1, "0")
End Sub

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialWrite()
End Sub

Sub SpecialHead()
	Dim dtTmp
	If strViewType = 1 Then
		Call InitMoveDateRange_Form3(dtStartDate, dtEndDate2, True)
	Else
		Call CalcCurrYearLimits(dtStartDate, dtEndDate2)
		Call CalcMoveCurrYearLimits(dtTmp, dtEndDate, False)
	End If
	dtEndDate = dtEndDate2
	dtMinDate = dtStartDate
	dtMaxDate = dtEndDate
	bIsCheckDates=True

	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
End Sub

Sub SpecialFilters( strForm )
	Call DrawDateRange()
End Sub

Sub WriteMoreHiddenTags( )
	rw WriteHiddenTags(Array("ViewType", strViewType))
End Sub
%>
