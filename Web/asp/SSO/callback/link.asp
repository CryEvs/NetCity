<!-- #INCLUDE FILE=../../headernoscreen_PopupNo_AuthNo.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim obSecurityComponent
Dim setLinkResult
Dim strBackPage
Dim strIdp, objIdpInfo

Dim strAccessTokenUrl, arrAccessTokenParams, strAuthrorizationCode

On Error Resume Next

strBackPage = "/asp/CheckIdpUserDetails.asp"

strIdp = GetSafeStr(Request("idp"), -1, Null)
strToken = GetSafeStr(Request("at"), -1, "")

If IsDull( strToken ) Then
	Response.Redirect GetJumpPage()
End If

Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
TestError obLanguage("Security","LoginError")

Call GetTokenParams()

Call obSecurityComponent.SetLinkToIdp(strToken, strIdp)
TestError obLanguage("Common","kErrLinkToIdp")

Set objIdpInfo = obSecurityComponent.GetIdpInfo(strIdp)

Call obTokenMgr.SetData( strToken, stWasSaved, obLanguage("Common","kIdpAccountIsLinked").Format(Array(objIdpInfo.Title)) )

RedirectTo strBackPage, null 
%>
