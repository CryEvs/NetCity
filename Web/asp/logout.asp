<!-- #INCLUDE FILE="headersimple.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kWinLogonAccess = "WIN_LOGON_ACCESS"
Dim strLoginPage

Function GetPageTitle()
	GetPageTitle = "<h4 class=""text-center"">"& obLanguage("Login","kYouLoggedOutFromTheSystem") &" <i>" & NETSCHOOL_PRODUCT_NAME & "</i>.</h4>"
End Function

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Function isDrawHeader()
	isDrawHeader = False
End Function

Function CanBack()
	CanBack = False
End Function

Sub Main()
	Dim bSSOLogin, strIdp, strIdpAccessToken, strIdpLogoutUrl
	Dim obSecurityComponent

	On Error Resume Next

	bIsEducManager = False
	bIsAdminInterface = False
	bIsEMForSchool = False
	strLoginPage = kStartPage

	If strToken = "" Then
		Exit Sub
	End If

	Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")

	bSSOLogin = (GetSafeStr(obTokenMgr.GetData(strToken, stSingleSignOnLogin, 0), -1, 0) = 1)
	if bSSOLogin Then
		strIdp = GetSafeStr(obTokenMgr.GetData(strToken, stIdpLogin), -1, Null)
		strIdpAccessToken = GetSafeStr(obTokenMgr.GetData(strToken, stIdpAccessToken), -1, Null)
		
		'Выход в identity провайдере
		strIdpLogoutUrl = obSecurityComponent.GetIdpLogoutUrl(strIdp, strIdpAccessToken)
		Call obTokenMgr.SetData(strToken, stSingleSignOnLogin, 0)
		TestError "Ошибка выхода во внешнем провайдере аутентификации"
		RedirectToGate strIdpLogoutUrl
	End If

	bIsEducManager = GetSafeBool(obTokenMgr.GetData(strToken, "bIsEducManager"),False)
	bIsAdminInterface = (GetSafeLng(obTokenMgr.GetData(strToken, "AdminInterface"), 0) = 1)
	bIsEMForSchool = GetSafeBool(obTokenMgr.GetData(strToken, "IsEMForSchool"), False)
	Dim strSecrName
	strSecrName = obTokenMgr.GetData(strToken, "SECRNAME" )

	Call obSecurityComponent.DoLogout()
	TestError obLanguage("Common","kErrCantLogUserEvent")
End Sub

Sub RedirectToGate(strAction)
	Dim i
	'Response.Redirect strAction
	Response.Clear%>
	<html>
		<head></head>
		<body>
			<script>window.location.replace("<%=strAction%>");</script>
		</body>
	</html><%
	Response.End
End Sub

Sub onHead()
	%>
	<script><!--
	var isMainWindow = true;

	<%If bIsEMForSchool Then %>
	window.close();
	<%End If %>

	$(document).ready(function(){
		isHaveToLogout = false;
		if(window.opener) {
			window.opener.isHaveToLogout = false;
			window.opener.close();
		}
	});

	function enter(){
		var url = "<%=strLoginPage%>";
		window.location = url;
	}
	--></script>
	<%
End Sub

Sub onDrawPage()%>
	<h3 class="text-center"><%=obLanguage("Login","kYouCanCloseThisWindow") & " """ & obLanguage("Login","kLoginIntoTheSystem") & """."%></h3>
	<br /><br />
	<div class="text-center">
		<%Call Button("enter()", obLanguage("Login","kLoginIntoTheSystem"), obLanguage("Login","kLoginIntoTheSystem"), "glyphicon glyphicon-new-window")%>
	</div><%
	If IsWinLogonAccess() Then
		%><div class="text-center"><a href="/WinAuthLogin.asp"><%=obLanguage("Login","kLoginUsingWinAccount")%></a></div><%
	End If
End Sub
%>
