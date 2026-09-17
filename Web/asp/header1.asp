<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Session.CodePage = 65001
Response.Charset = "utf-8"
Response.ContentType = "text/html"
Dim strHelpLink 
' INCLUDE PopupNo and Auth

Dim objContextComponent
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/PopupNo.asp -->
<!-- #INCLUDE FILE=scripts/Auth.asp -->
<%
	Set objContextComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IContextComponent")
	Call objContextComponent.CheckSystemNotices()
%>
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<!-- #INCLUDE FILE=scripts/SecurityRoles.asp -->
<!-- #INCLUDE FILE=scripts/PageStates.asp -->
<!-- #INCLUDE FILE=scripts/Screen1.asp -->
<!-- #INCLUDE FILE=scripts/readonlyaccess.asp -->
