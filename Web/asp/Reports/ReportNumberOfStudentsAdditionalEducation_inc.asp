<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	RPTID=<Report ID>
	
Sub SpecialRead()
End Sub

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialWrite()
End Sub

Sub SpecialHead()
End Sub

%>
