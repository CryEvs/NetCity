<!-- #INCLUDE FILE=../headernoscreen_YearNo.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim obSecurityComponent
Dim strIdp, objIdpInfo
Dim strBackPage
Dim bUserLoggedViaIdp

On Error Resume Next

strIdp = GetSafeStr(Request("idp"), -1, Null)

Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")

Set objIdpInfo = obSecurityComponent.GetIdpInfo(strIdp)
TestError obLanguage("Common","kUnexpErr")

bUserLoggedViaIdp = (GetSafeLng(obTokenMgr.GetData(strToken, stSingleSignOnLogin), 0) = 1)
If bUserLoggedViaIdp Then
	bUserLoggedViaIdp = (obTokenMgr.GetData(strToken, stIdpLogin) = strIdp)
End If

If bUserLoggedViaIdp Then 
	strBackPage = "/asp/logout.asp"
Else
	strBackPage = Request("BackPage")
	If IsDull(strBackPage) Then strBackPage = obTokenMgr.GetData(strToken, "BackPage")
	If IsDull(strBackPage) Then strBackPage = obTokenMgr.GetData(strToken,stBackPage)
	If IsDull(strBackPage) Then strBackPage = Request.ServerVariables("HTTP_REFERER" )
End If


TestError obLanguage("Common","kUnexpErr")

Call obSecurityComponent.RemoveIdpLink(strIdp, strUserID)
TestError obLanguage("Common","kErrRemoveLinkToIdpAccount").Format(Array(objIdpInfo.Title))
	
Call obTokenMgr.SetData( strToken, stWasSaved, obLanguage("Common","kIdpAccountLinkIsRemoved").Format(Array(objIdpInfo.Title)) )

RedirectTo strBackPage, null 
%>
