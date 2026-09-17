<%@ Language=VBScript CODEPAGE="65001" %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.Expires = 10
Response.AddHeader "pragma", "no-cache"

%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<!-- #INCLUDE FILE=scripts/PopupNo.asp -->
<%
Dim oLACCLogin

On Error Resume Next

' G Serge TODO: после добавления NetCity.Security, убрать это
If Request.Form("SFT").Item = Empty Then
	Dim objSchoolInfo
	Set objSchoolInfo = objNSNET.GetSchoolInfo(CLng(Request.Form("SCID").Item))
	Request.Form("SFT") = objSchoolInfo("FUNCTIONALITYTYPEID")
End If

Set oLACCLogin = Server.CreateObject("LACC.Login")
oLACCLogin.ProcessRequest Request, Response, Session, Application, obTokenMgr, bAllowAllIP
If Err.Number <> 0 Then 
    Session.CodePage = 65001
    GenerateError( Err.Description )
End If
Set oLACCLogin = Nothing
%>
