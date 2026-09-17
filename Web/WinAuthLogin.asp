<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_PopupNo_AuthNo.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kWinLogonAccount = "WIN_LOGON_ACCOUNT"
Const kWinLogonUser = "WIN_LOGON_USER"
Const kURLCommonLogin = "about.asp"

Dim strRemoteUser
Dim bUserExists
Dim bIsWinAuthOn
Dim nUserID
Dim bAuthUser
bAuthUser = Request("CU").Count <> 0
On Error Resume Next
strRemoteUser = CStr( Request.ServerVariables( "REMOTE_USER" ) )

If bIsAjaxCall Then
	If IsDull( strRemoteUser ) Then
		GenerateError obLanguage("Login","kWinAuthError") & "\n" & obLanguage("Login","kRequiredConfigurationWebServer")
	End If

	Dim result
	Set result = new JSONResult
	If bAuthUser Then 
		Call result.AddData("RemoteUser", strRemoteUser)
		Response.Write result
		Response.End
	End If

	Session("NSSession")( kWinLogonAccount ) = strRemoteUser

	nUserID = objNSNET.IsWinLogonUserExists(strRemoteUser, 0 )
	If nUserID > 0 Then 
		bIsWinAuthOn = CBool( objNSNET.IsWinAuthOnForAccount(strRemoteUser ) )
		TestError obLanguage("Login","kWinAuthError")
		If Not bIsWinAuthOn Then GenerateError obLanguage("Login","kWinAuthDisabledInSchool")
	Else
		GenerateError obLanguage("Login","kWinAccountNotRelatedWithUser")
	End If
	Response.Write result
	Response.End
End If

If IsDull(Session("NSSession")( kWinLogonAccount )) Then
	GenerateError obLanguage("Login","kWinAuthError")
End If

Server.Transfer("/asp/postlogin.asp")
 %>
