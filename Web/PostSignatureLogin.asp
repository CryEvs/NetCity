<%@ Language=VBScript %>
<% ' © 2007-2011 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"
%>
<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/stdhead.asp -->
<%
Const kSignatureLogonAccess = "SIGNATURE_LOGON_ACCESS"
Const kSignatureLogonData = "SIGNATURE_LOGON_DATA"
Const kSignatureLogonFirst = "SIGNATURE_LOGON_FIRST"
Const kSignatureLogonMode = "SIGNATURE_LOGON_MODE"

Const kURLCommonLogin = "login.asp"
Const kURLEmLogin = "/asp/EDUC_MANAGER/em_login.asp"

Dim bUserExists
Dim bIsWinAuthOn
Dim nUserID
Dim strSignedData, r

On Error Resume Next

strSignedData = DB2HTML(Request("SIGNEDDATA"))
if strSignedData = ""  Then Response.Redirect kURLCommonLogin	
'Response.Write(strSignedData)

Session("NSSession")( kSignatureLogonData ) = strSignedData

Dim obSecurityComponent
Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
'r = obSecurityComponent.Test()
'Response.Write("before end1" & r)
'Response.End
Call obSecurityComponent.DoLogin(Request, Response)

Session("NSSession")( kSignatureLogonAccess ) = "Y"
If Err.Number <> 0 Then 
    If GetSafeLng( Request("EMID"), -1) = -1 Then
        Server.Transfer kURLCommonLogin
    Else
        Server.Transfer kURLEmLogin
    End If
End If
%>
