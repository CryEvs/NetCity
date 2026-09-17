<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.Charset = "utf-8"
Dim strHelpLink 

strFunctionalityType = GetSafeLng(Request.Cookies("FUNCTIONALITYTYPE"),0)
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/PopupNo.asp -->
<!-- #INCLUDE FILE=scripts/PageStates.asp -->
<!-- #INCLUDE FILE=scripts/ScreenSimple.asp -->
