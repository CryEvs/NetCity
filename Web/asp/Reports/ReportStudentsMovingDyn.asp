<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

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

Sub SpecialFilters( strForm )
End Sub
%>
