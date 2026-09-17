<%@ Language=VBScript %>
<% ' © 2007-2011 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Session.CodePage = 65001
Response.Charset = "utf-8"
Dim strHelpLink 
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/Popup.asp -->
<!-- #INCLUDE FILE=scripts/Auth.asp -->
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<!-- #INCLUDE FILE=scripts/PageStates.asp -->
<!-- #INCLUDE FILE=scripts/Screen.asp -->
<!-- #INCLUDE FILE=scripts/PageTitle.asp -->
<%

Function Quot2html( byVal theText)
	Quot2html = theText
End Function
%>