<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	RPTID=<Report ID>

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialRead()
End Sub

Sub SpecialWrite()
End Sub

Sub SpecialFilters( strForm )
End Sub

Sub SpecialHead()
End Sub
%>
