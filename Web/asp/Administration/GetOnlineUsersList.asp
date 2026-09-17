<!-- #INCLUDE Virtual="/asp/headersimple.asp" -->
<!-- #INCLUDE Virtual="/asp/Administration/usermon_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
	
Function GetPageTitle()
	GetPageTitle = obLanguage("Common","kCBUpdateWrkCnt")
End Function

Sub onDrawPage()
	Call DrawUsermonTable()
End Sub%>