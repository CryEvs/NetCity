<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"
Session.CodePage = 65001
Response.Charset = "utf-8"

strFunctionalityType = GetSafeLng(Request.Cookies("FUNCTIONALITYTYPE"),0)
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/PopupNo.asp -->
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<!-- #INCLUDE FILE=scripts/PageStates.asp -->
