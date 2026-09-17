<%@ Language=VBScript %>
<% ' © 2007-2015 IRTech. All rights reserved.

Option Explicit
Response.Buffer = TRUE
Session.CodePage = 65001
Response.Charset = "utf-8"

%>
<!-- #INCLUDE FILE=../../scripts/common.asp -->
<!-- #INCLUDE FILE=../../scripts/PopupNo.asp -->
<!-- #INCLUDE FILE=../../scripts/stdhead.asp -->
<!-- #INCLUDE FILE=../../scripts/SecurityRoles.asp -->
<!-- #INCLUDE FILE=../../scripts/PageStates.asp -->
<!-- #INCLUDE FILE=../../scripts/ScreenSimple.asp -->
<!-- #INCLUDE FILE=../../scripts/readonlyaccess.asp -->
<!-- #INCLUDE FILE=../GetRandomKey.asp -->
<%
Dim strBackPage 
Dim strIdp, objIdpInfo, strIdpAccessToken, strIdpUserId
Dim strIdpTitle, strIdpEnterTitle
Dim obSecurityComponent
Dim singleRecord

Dim bNoUsers
Dim strIdpLogoutPage
Dim bPersonTrusted
Dim idpProvider

Dim arrIdpUsers
Dim arrRequestForward

Dim bMobileEntry, bMobileBind, bNoMobileAppUsers, arrIdpMobileAppUsers, singleMobileAppRecord

Dim strLoginState
Dim objCacheComponent

Function GetPageTitle()
	GetPageTitle = strIdpEnterTitle
End Function

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Function CanBack()
	CanBack = False
End Function

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnter(event);"
End Function

Sub ReadState()
	Dim arrayList
	Dim i, item
	On Error Resume Next

	strIdp = GetSafeStr(Request("idp"),-1, Null)

	If IsEmpty(strIdp) Then
		GenerateError "неизвестный провайдер"
	End If

	bNoUsers = False
	bPersonTrusted = False

	Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	TestError obLanguage("Security","LoginError")

	singleRecord = False

	Set objIdpInfo = obSecurityComponent.GetIdpInfo(strIdp)
	strIdpTitle = objIdpInfo.Title
	strIdpEnterTitle = objIdpInfo.EntryLinkName
	idpProvider = objIdpInfo.Id

	Call obSecurityComponent.GetIdpLoginAuthData(strIdpAccessToken, strIdpUserId)
	TestError obLanguage("Security","LoginError")

	If idpProvider = IdentityProvider_Esia Then
		' проверка является ли учетная запись в госуслугах подтвержденной
		bPersonTrusted = obSecurityComponent.CheckEsiaUserIsTrusted(strIdpAccessToken)
	End If

	Set arrayList = obSecurityComponent.GetIdpUserList(idpProvider, strIdpUserId, strIdpAccessToken)
	TestError obLanguage("Common","kErrGetListOfUsersWithIdpAccount").Format(Array(objIdpInfo.Title))

	arrIdpUsers = arrayList.ToArray()

	strIdpLogoutPage = obSecurityComponent.GetIdpLogoutUrl(strIdp, strIdpAccessToken)

	If arrayList.Count = 0 Then
		bNoUsers = True
	ElseIf arrayList.Count = 1 Then
		singleRecord = True
	End If

	' чтение парметров
	ReDim arrRequestForward(0)

	i = 0
	For Each item In Request.QueryString
		ReDim Preserve arrRequestForward(i*2+1)
		arrRequestForward(i*2) = item
		arrRequestForward(i*2+1) = Request(item)
		i = i + 1
	Next
	For Each item In Request.Form
		If Request.ServerVariables(item).Count = 0 Then 
			ReDim Preserve arrRequestForward(i*2+1)
			arrRequestForward(i*2) = item
			arrRequestForward(i*2+1) = Request(item)
			i = i + 1
		End If
	Next

	Set objCacheComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ICacheComponent")
	TestError obLanguage("Security","LoginError")

	Call MobileAppInit(arrayList)

	Call comHelper.ArrayHelper.AppendArray(arrRequestForward, Array("LoginType", LoginType_Idp, "IdpAccessToken", strIdpAccessToken))
End Sub

Function GetContextCache()
	Dim objCache

	If IsDull(strLoginState) Then
		Set GetContextCache = Server.CreateObject( "NetCity.Storage" )
		Exit Function
	End If

	If objCacheComponent.Exists(strLoginState) Then
		Set objCache = objCacheComponent.Get(strLoginState)
		TestError "login state is empty or expired"
	End If

	If IsNull( objCache ) Or IsEmpty( objCache ) Then
		GenerateError "login state is empty or expired"
	End If

	Set GetContextCache = objCache
End Function

Sub MobileAppInit(arrayList)
	Dim arrayMobileAppList, objCache

	strLoginState = GetSafeStr(Request(stLoginContextId), -1, "")

	bMobileEntry = False
	bMobileBind = False

	If IsDull(strLoginState) Then Exit Sub

	Set objCache = GetContextCache()

	bMobileEntry = objCache.Exists("mobile")
	bMobileBind = Not IsDull(GetSafeStr(objCache.GetData("mobileAccessToken"), -1, ""))

	bNoMobileAppUsers = False
	singleMobileAppRecord = False

	If bMobileEntry Then
		Set arrayMobileAppList = obSecurityComponent.GetIdpMobileAppUserList(arrayList, bMobileBind)
		TestError obLanguage("Common","kErrGetListOfUsersWithIdpAccount").Format(Array(objIdpInfo.Title))

		arrIdpMobileAppUsers = arrayMobileAppList.ToArray()

		If arrayMobileAppList.Count = 0 Then
			bNoMobileAppUsers = True
		ElseIf arrayMobileAppList.Count = 1 Then
			singleMobileAppRecord = True
		End If
	End If
End Sub

Sub Main()
	Dim objCache

	If bNoUsers Then
		' объект кэша
		Set objCache = GetContextCache()

		' складывается в кэш
		objCache.Add stIdpLogin, strIdp
		objCache.Add stIdpAccessToken, strIdpAccessToken
		objCache.Add stIdpUserId, strIdpUserId
		objCache.Add stIdpTitle, strIdpTitle
		objCache.Add stSingleSignOnLogin, 1
		objCache.Add stIdpBindUser, 1
		objCache.Add "nssessionid", Cstr(Request.Cookies("NSSESSIONID"))
		' для авторизации во внешнем приложении
		objCache.Add stExternalApplicationReturnUrl, Cstr(Request.QueryString(stExternalApplicationReturnUrl))

		If IsDull(strLoginState) Then
			strLoginState = GetUniqueKey(objCacheComponent)
		End If

		Call objCacheComponent.Add(strLoginState, objCache, 60 * 7)
	ElseIf Not IsDull(strLoginState) Then
		' объект кэша
		Set objCache = GetContextCache()
		' складывается в кэш
		objCache.Add stIdpAccessToken, strIdpAccessToken
		objCache.Add stIdpUserId, strIdpUserId
		' кэш действителен в течение 10ти минут
		Call objCacheComponent.Add(strLoginState, objCache, 60 * 10)
	End If

End Sub

Sub onHead()
	If bNoUsers Then Exit Sub
%>
<script type="text/javascript" src="/js/md5r.min.js"></script>
<script type="text/javascript" src="/static/dist/pages/about/js/sso.login.js?ver"></script>

<script><!--
	var arrRequestForward = <%=comHelper.JsonHelper.SerializeObject(comHelper.ArrayHelper.ToKeyValue(arrRequestForward))%>;
	var idpUserList = [];
	var mobileInfo = { isMobile: <%=Bool2Js(bMobileEntry)%>, isMobileBind: <%=Bool2Js(bMobileBind)%> };

	<%If Not bNoUsers Then%>
		idpUserList = <%=comHelper.JsonHelper.SerializeObject(arrIdpUsers)%>;
	<%End If%>

	var $ctrl = new SsoLoginModule.SsoLoginController(idpUserList, arrRequestForward, mobileInfo);

	// инициализация контейнера и других параметров, необходимых для авторизации
	$ctrl.init();

	function CheckEnter(event) {
		$ctrl.CheckEnter(event);
	}
//--></script>
<% 
End Sub

Sub DrawNoMobileAppUsersState()
	%>
	<div class="row">
		<div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
			<div class="row">
				<div class="col-md-12 text-center">
					<%
						If bMobileBind Then
							DrawInfo "Не найдено пользователей системы с ролью ""Родитель"" связанных с учетной записью " & strIdpTitle, False
						Else
							DrawInfo "Не найдено пользователей системы с ролью ""Родитель""и ""Ученик"" связанных с учетной записью " & strIdpTitle, False
						End If

						OpenBtnGroup
							Call ButtonExit("window.location.href='" & strIdpLogoutPage & "'", obLanguage("Common","kExit"))
						CloseBtnGroup
					%>
				</div>
			</div>
		</div>
	</div>
	<%
End Sub

Sub DrawMobileAppUsersState()
	Dim obIdpUserInfo

	If singleMobileAppRecord Then
		rw WriteHiddenTags(Array("LSCOPE", ""))%>
		<div class="form-group">
			<input type="text" class="form-control text-center" name="Screenname" disabled>
		</div><%
	Else
		Call DrawWarning(obLanguage("Common","kSelectUserForIdpLogin").Format(Array(strIdpTitle)))
		%>
		<div class="form-group">
			<select class="form-control" name="LSCOPE" onchange="$ctrl.onChangeSelect();">
				<%For Each obIdpUserInfo In arrIdpMobileAppUsers%>
					<option value="<%=obIdpUserInfo.Complexid%>"><%=obIdpUserInfo.Screenname%></option>
				<%Next%>
			</select>
		</div>
		<%
	End If
End Sub

Sub onDrawPage()
	Dim obIdpUserInfo

	If bNoUsers Then
		%>
		<div class="row">
			<div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
				<div class="row">
					<div class="col-md-12 text-center">
						<%DrawWarning obLanguage("Common","kErrNoUsersLinkedWithIdpAccount").Format(Array(strIdpTitle))%>
						<%DrawInfo obLanguage("Common", "kContinueBindAccount").Format(Array(Application("NS_PRODUCT_NAME"))), False%>
						<%If Not bPersonTrusted And idpProvider = IdentityProvider_Esia Then DrawWarning obLanguage("Login", "kPersonTrustedCheck")%>

						<%
							OpenBtnGroup
								Call ButtonExit("window.location.href='" & strIdpLogoutPage & "'", obLanguage("Common","kExit"))
								Call ButtonContinue("postTo({path: '" & kLoginPage & "', auth: false, nocache: false, method: 'GET',  params: { " & stLoginContextId & ": '" & strLoginState & "', idpBindUser: 1 }});", obLanguage("Login","kBtnContinue"))
							CloseBtnGroup
						%>
					</div>
				</div>
			</div>
		</div>
		<%
		Exit Sub
	ElseIf bMobileEntry And bNoMobileAppUsers Then
		DrawNoMobileAppUsersState
		Exit Sub
	End If


	'дальше отрисовывается скрытые элементы: 
	%>

	<div class="row entry-container hide">
		<div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 text-center">
			<div class="row">
				<div class="col-md-12">
					<%
					If Not bMobileEntry Then
						If singleRecord Then
							rw WriteHiddenTags(Array("LSCOPE", ""))%>
							<div class="form-group">
								<input type="text" class="form-control text-center" name="Screenname" disabled>
							</div><%
						Else
							Call DrawWarning(obLanguage("Common","kSelectUserForIdpLogin").Format(Array(strIdpTitle)))
							%>
							<div class="form-group">
								<select class="form-control" name="LSCOPE" onchange="$ctrl.onChangeSelect();">
									<%For Each obIdpUserInfo In arrIdpUsers%>
									<option value="<%=obIdpUserInfo.Complexid%>"><%=obIdpUserInfo.Screenname%></option>
									<%Next%>
								</select>
							</div>
							<%
						End If
					Else
						DrawMobileAppUsersState
					End If
					%>
				</div>
			</div>

			<div class="row role-form" style="display: none;">
				<div class="col-md-12">
					<div class="form-group">
						<select class="form-control" name="ROLEGROUP" onchange="$ctrl.changeRole();">
						</select>
					</div>
				</div>
			</div>

			<!-- Логин/пароль -->
			<div class="row entry-form">
				<div class="col-md-12">
					<%DrawWarning("Ваша учётная запись в " & """" & Application("NS_PRODUCT_NAME") & """" & " требует повышенной безопасности. Для подтверждения учётной записи, после успешной авторизации в ЕСИА, требуется ввести логин и пароль " & """" & Application("NS_PRODUCT_NAME") & """")%>
					<div style="margin-top: 5px;"></div>
					<div class="form-group">
						<label class="control-label col-md-3 text-left"><%=obLanguage("Common","kLogin")%></label>
						<div class="col-md-9">
							<input class="form-control" id="UN" name="UN" type="text">
							<div style="margin-top: 5px;"></div>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-md-3 text-left"><%=obLanguage("Common","kPassword")%></label>
						<div class="col-md-9">
							<input class="form-control" id="PW" name="PW" type="password">
							<div style="margin-top: 10px;"></div>
						</div>
					</div>
				</div>

			</div>

			<div class="row">
				<div class="col-md-12 text-center">
					<%
					OpenBtnGroup
						ButtonExit "window.location.href='" & strIdpLogoutPage & "'", obLanguage("Common","kExit")
						ButtonContinue "$ctrl.beContinue();", obLanguage("Common","kbtnLoginHint")
					CloseBtnGroup
					%>
				</div>
			</div>
		</div>
	</div>
	<%
End Sub
%>
