<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim dtStartDate, dtEndDate, dtToday
Dim strReportFileName, strReportExportFileName

Sub SpecialRead()
End Sub

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialWrite()
End Sub

Sub specialHead()
	Call InitDate()

	Call scriptCalendar( "Reports", dtStartDate, dtEndDate )
End Sub

Sub SpecialFilters( strForm )
	Call DrawDateInfoRow( obLanguage("Common", "kDate"), dtToday, "DDT", "")
End Sub
%>
