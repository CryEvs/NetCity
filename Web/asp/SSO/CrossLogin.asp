<!-- #INCLUDE FILE=../headernoscreen_PopupNo_AuthNo.asp -->
<% ' © 2007-2021 IRTech. All rights reserved.
Dim obSecurityComponent
Dim strIdp, strIdpLoginUrl
Dim bEsiaAuth, bEsiaIrtechIdentityAuth, bIrtechAuth, bEsaAuth, strIrtechTitle
Dim strQueryParams
Dim bMobileEntry, strLoginState

bMobileEntry = Request("mobile").Count > 0
strLoginState = GetSafeStr(Request("loginState"), -1, "")

strIdp = GetSafeStr(Request("idp"), -1, Null)
bEsiaAuth	= obContext.ServerSettings.UserAuthorizationSettings.EsiaAuth
bIrtechAuth = obContext.ServerSettings.UserAuthorizationSettings.IrtechAuth
bEsaAuth	= obContext.ServerSettings.SystemSettings.SoloIntegration
strIrtechTitle = IIf(obContext.ServerSettings.SystemSettings.SoloIntegration, "Мобильный ID", "Мобильный ID ИрТех")

If bEsiaAuth Or bIrtechAuth Or bEsaAuth Then Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")

If strIdp = "esia" And bEsiaAuth Then
	If Not IsDull(strLoginState) Then
		strQueryParams = "loginState=" & strLoginState
	End If
	strIdpLoginUrl = obSecurityComponent.GetIdpLoginUrl("esia", strQueryParams)
	TestError "Ошибка перехода на страницу авторизации ЕСИА"

	If obContext.ServerSettings.UserAuthorizationSettings.EsiaSaml Then
		RedirectTo strIdpLoginUrl, Null
	Else
		Response.Redirect strIdpLoginUrl
	End If
ElseIf strIdp = "irtech" And bIrtechAuth Then
	strIdpLoginUrl = obSecurityComponent.GetIdpLoginUrl("irtech")
	TestError "Ошибка перехода на страницу авторизации " & strIrtechTitle
	Response.Redirect strIdpLoginUrl
ElseIf strIdp = "esa" And bEsaAuth Then
	strIdpLoginUrl = obSecurityComponent.GetIdpLoginUrl("esa")
	TestError "Ошибка перехода на страницу авторизации ЕСА"
	Response.Redirect strIdpLoginUrl
Else
	GenerateError obLanguage("Login", "kAuthProviderNotConfigured")
End If
%>
