<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE=em_inc.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function hasUserRightsOnPage()
	If bIsEducManager then hasUserRightsOnPage = true
End Function

Function GetPageTabItem()
	GetPageTabItem = ""
End Function

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Sub onHeadSpecial()
End Sub

Sub onHead()
	Call onHeadSpecial()
End Sub
%>
