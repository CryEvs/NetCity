<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"
Response.AddHeader "Access-Control-Allow-Origin", "*"
Response.Charset = "windows-1251"

Dim objPageEventsHook
Set objPageEventsHook = Server.CreateObject("NetCity.Common.Legacy.Hooks.PageExecutionEventsHook")
Dim objLACCProc
Set objLACCProc = Server.CreateObject("LACC.Processor")
Call objLACCProc.ProcessRequest( Request, Response, obTokenMgr, obSecurityHelper )

Call objPageEventsHook.OnEndPage()
Set objPageEventsHook = Nothing
%>
