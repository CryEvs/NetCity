<% ' © 2007-2008 IRTech. All rights reserved.
Function GetTitle()
	GetTitle = NETSCHOOL_PRODUCT_NAME
End Function

Sub ReadState()
End Sub

Sub Main()
End Sub

Sub onCurrentDate()
	Response.Write FormatDateTime(NSNow,vbLongDate)
End Sub

Sub onDrawPageBody()
	Call onDrawPage()
End Sub

Sub onDrawPage()
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
End Function

If Not hasUserRightsOnPage() Then RedirectTo "/ASP/errorAccess.asp?", null

strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
Call ReadState()
Call TestError( obLanguage("Common","kUnexpErr") )
Call Main()
Call TestError( obLanguage("Common","kUnexpErr") )
%><?xml version="1.0" encoding="windows-1251" ?><%
Call onDrawPageBody()
Call TestError( obLanguage("Common","kUnexpErr") )
%>
