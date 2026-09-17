<!-- #INCLUDE FILE="../header1.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strBackPage 
Dim strIdp, strIdpTitle
Dim esiaLogin
Dim bIdpLogin
Dim obSecurityComponent
Dim bUserLinkedWithIdp
Dim strIdpLinkUrl

Function GetPageTitle()
	Dim strTitle
	GetPageTitle = obLanguage("SetupSchool","kTitleLinkToIdp").Format(Array(strIdpTitle))
End Function

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnter(event);"
End Function

Sub ReadState()
	Dim objIdpInfo
	strBackPage = Request("BackPage")
	strIdp = GetSafeStr(Request("idp"), -1, Null)

	If IsDull(strBackPage) Then strBackPage = obTokenMgr.GetData(strToken, "BackPage")
	If IsDull(strBackPage) Then strBackPage = obTokenMgr.GetData(strToken,stBackPage)
	If IsDull(strBackPage) Then strBackPage = Request.ServerVariables("HTTP_REFERER" )
	Call obTokenMgr.SetData(strToken,stBackPage, strBackPage)

	'TODO. Доработать
	bIdpLogin = (GetSafeLng(obTokenMgr.GetData(strToken, stSingleSignOnLogin), 0) = 1)
	If bIdpLogin Then
		bIdpLogin = (obTokenMgr.GetData(strToken, stIdpLogin) = strIdp)
	End If

	Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	Set objIdpInfo = obSecurityComponent.GetIdpInfo(strIdp)
	strIdpTitle = objIdpInfo.Title

	TestError obLanguage("Common","kErrLinkToIdp").Format(Array(strIdpTitle))

	strUserID = CStr(strUserID)
	strIdpLinkUrl = obSecurityComponent.GetIdpLinkUrl(strIdp)
	TestError obLanguage("Common","kErrLinkToIdp").Format(Array(strIdpTitle))

	bUserLinkedWithIdp = obSecurityComponent.IsUserLinkedWithIdp(CLng(strUserID), strIdp)
End Sub

Sub Main()
End Sub

Sub onHead()
%>
<SCRIPT><!--

	function LinkWithIdp() {
		isHaveToLogout = false;
		window.location.href = "<%=strIdpLinkUrl%>";
	}

    function CheckEnter(event) { if (event.keyCode == 13) LinkWithIdp(); }

	function Back(){
		goBack( document.LinkWithIdpForm, '<%=strBackPage%>');
	}
//-->
</SCRIPT>
<%
End Sub

Sub onDrawPage()
%>
<form name="LinkWithIdpForm" method="POST" onsubmit="return false;">
	<%=WriteObligatoryTags()%>
	<div class="row">
		<div class="col-md-12 col-lg-8 col-lg-offset-2 text-center">
				<% If bIdpLogin Then  %>    
					<br><%=obLanguage("SetupSchool","kAlreadyLoginWithIdpAccount").Format(Array(strIdpTitle))%><br><br>
				<% Else  %>    
					<%DrawWarning obLanguage("SetupSchool","kLinkToIdpAccount").Format(Array(strIdpTitle))%>
					<% If bUserLinkedWithIdp Then %>
						<%=obLanguage("SetupSchool","kAlreadyLinkedWithIdpAccount").Format(Array(strIdpTitle))%><br><br>
					<% End If  %>
				<% End If  %>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 text-center">
				<% 
				If Not bIdpLogin Then
					ButtonContinue "LinkWithIdp();", obLanguage("SetupSchool","kbtnGoToIdpAuthorization").Format(Array(strIdpTitle))
				End If
				%>
		</div>
	</div>
</form>
<%
End Sub
%>
