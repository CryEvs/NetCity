<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE Virtual="/asp/Administration/usermon_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function IsTopPage()
	IsTopPage = True
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleUsermon") & " <i>" & NETSCHOOL_PRODUCT_NAME & "</i><br><br>"
End Function

Sub onDrawPage()
	Call DrawUsermonTable()
End Sub%>
