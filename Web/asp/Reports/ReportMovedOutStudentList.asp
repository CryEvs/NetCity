<!-- #INCLUDE FILE=../header1.asp -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strRepType
Dim dtStartDate, dtEndDate

Sub specialRead()
End Sub

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialWrite()
End Sub

Sub Main()
End Sub

Sub specialHead()
	bIsCheckDates=True

	Call InitMoveDateRange_Form3(dtMinDate, dtMaxDate, False)
	dtStartDate = dtMinDate
	dtEndDate = dtMaxDate
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
	'Call scriptCalendar( "Reports", Null,Null)'dtStartDate, dtEndDate )
End Sub

Sub specialFilters( strForm )
	Call DrawDateRange()
End Sub
%>
