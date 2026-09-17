<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/UI.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/stdhead.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/login.asp -->
<% ' © 2007-2015 IRTech. All rights reserved.

Const topbarStr = ""

Dim bShowGerb
bShowGerb = False

Const kSignatureLogonAccess = "SIGNATURE_LOGON_ACCESS"

' Parse parameters
Dim objRs

strFunctionalityType = FuncType_EducMgr

bLogin = (GetSafeStr(Request("AL"), 1, "N" ) = "Y")
bFailedSignatureLogon = ( GetSafeStr( Session("NSSession")( kSignatureLogonAccess ), 1, "N") = "Y" )

Dim bBindAccount

bBindAccount = ( GetSafeStr( Request("isBindAccount"), -1, Session("NSSession")("isBindAccount") ) = "1" )
If bBindAccount Then Session("NSSession")("isBindAccount") = "1"

Dim strIdpTitle
strIdpTitle = GetSafeStr(Request("IdpTitle"), -1, Session("NSSession")("IdpTitle"))

' Входящий параметр, который указывает, какую форму авторизации открыть при загрузке.
' Необходимо при переходе на страницу авторизации с кастомных страниц входа в систему заказчиков.
Dim strOpenForm
strOpenForm = GetSafeStr(Request("openForm"), -1, GetSafeStr(Request.Cookies("openForm"), -1, "School"))

'сегмент инициализации логина ОО
Response.Buffer = TRUE
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"
Session.CodePage = 65001
Response.Charset = "utf-8"

Session("NSSession")("ScreenName") = ""
bIsAbout = True

Randomize
nLT = Int(587654321 * Rnd) + 536427369
nVer = getVer() Mod nBaseGV
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title><%=NETSCHOOL_PRODUCT_NAME%></title>
	<meta http-equiv="Cache-Control" content="no-cache"/>
	<meta http-equiv="Pragma" content="no-cache"/>
	<meta http-equiv="Expires" content="0"/>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />

	<link rel="icon" type="image/gif" href="/images/Common/favicon<%=IIF(MODULE_EM,"netcity","")%>.gif" />
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/start-page.min.css")%>"/>
	<link rel="stylesheet" type="text/css" href="/vendor/custom/fonts/font-awesome/css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/extras/about.css")%>"/>
	<!--[if IE 9]>
	<link rel="stylesheet" type="text/css" href="/vendor/pages/css/about_ie9.css"/>
	<![endif]-->

	<script src="/js/libs/jquery-1.11.0.min.js" type="text/javascript"></script>
	<script src="/js/libs/underscore-min.js" type="text/javascript"></script>
	<script src="/js/libs/bowser.min.js" type="text/javascript"></script>
	<%Call DrawLngReference()%>
	<%Call DrawJsAppContext() %>
	<script src="<%=GetVersionedResLink("/js/core-scripts.min.js")%>" type="text/javascript"></script>

	<script type="text/javascript">
		deferredResLoader.loadStyle("/vendor/bootstrap/css/bootstrap.min.css");
		deferredResLoader.loadScript("/asp/md5r.min.js");
		deferredResLoader.loadScript("/js/winauth.js");
		deferredResLoader.loadScript("/js/PasswordRecovery.js");
		deferredResLoader.loadScript("/vendor/bootstrap/js/bootstrap.min.js");
		deferredResLoader.loadScript("/vendor/bootstrap3-dialog/js/bootstrap-dialog.min.js");

		var login_ctrl;
		var em_login_ctrl;

		var constants = {
			PswRecoveryType_MobPhone: <%=PswRecoveryType_MobPhone%>,
			bECardAuthentication: <%=Bool2Js(bECardAuthentication)%>,
			kUseSignatureLogon: <%=Bool2Js(kUseSignatureLogon)%>,
			schoolLogin: <%=Bool2Js((bIsRegionEMForSchool and bIsRegionEMWithOUDOD) or Not (bIsRegionEMForSchool or bIsRegionEMWithOUDOD))%>,
			emLogin: <%=Bool2Js(MODULE_EM)%>,
			loginType: {
				School: <%=LoginType_School%>,
				ECardSchool: <%=LoginType_ECardSchool%>,
			},
			salt: '<%=(nVer Mod nBaseVer)%><%=((nLT + nVer) Mod nBaseLT)%>',
			kMaxLengthEmail: <%=kMaxLengthEmail%>,
			kEsiaLoginPage: '<%=kEsiaLoginPage%>',
			kEsiaLoginPageReturnTo: '<%=kEsiaLoginPageReturnTo%>'
		};

		var words = {
			kMobileValueMustStartWith: '<%=obLanguage("SetupSchoolUI","kMobileValueMustStartWith").Format(Array(obLanguage("Common", "kMobilePhone"),7))%>',
			kFieldMobileHasOnlyNumbers: '<%=obLanguage.kFieldMobileHasOnlyNumbers%>',
			kMobileLenMustBe: '<%=obLanguage("SetupSchoolUI","kMobileLenMustBe").Format(Array(obLanguage("Common", "kMobilePhone"),"11"))%>'
		}

		$(document).ready(function() {
			var setUserNameFocus = function() {
				$('input[name="UN"]').focus();
			};

			if(bowser.msie) {
				setTimeout(setUserNameFocus, 1000);
			}
			else {
				setUserNameFocus();
			}
			
			<%If MODULE_EM Then %>
				<%If GetSafeLng(Session("NSSession")("FUNCTIONALITYTYPE"),FuncType_School) = FuncType_EducMgr Or bIsRegionEMForSchool Then%>
					//currLoginForm = $('#message-em');
				<%End If%>
			<%End If%>

		});

		function showLogin() {
			$(".tabs-form").css("display", "block");
			$('.box-form').filter('.visible').css('display', 'block');
			$(".box-form-auth").css("display", "none");
		}
	</script> 
</head>
<body style="text-align: center;">

	<!--[if lt IE 8]><style> .entry-form{ position: relative !important; } </style> <![endif]-->

	<!--preloader-->
	<div id="login-page-preloader" class="page-preloader">
		<div class="spinner"><span class="text">подождите...</span></div>
	</div>


	<div class="body">

		<%If Not IsDull(topbarStr) Then %>
		<div id="topbar"><div id="topbarStr"><%=topbarStr %></div></div>
		<%End If %>
	
			<div id="wrapper_inner">

				<!--[if lt IE 8]><div class="parent-ie6"><![endif]-->
				<div class="centered">
					<div class="entry-form loginbox">
						<!-- #INCLUDE VIRTUAL=/extras/about_header.html -->
						<div class="sectiontable">
							<%
							If MODULE_EM And MODULE_REGION And bIsRegionEMForSchool And bIsRegionEMWithOUDOD Then%>
								<!-- СРО (региональный сервер + ОДО) -->
								<ul class="tabs-form">  
									<li id="School" <%=IIF(strOpenForm = "School", "class=""current""", "")%>><%=obLanguage("Common", "kEO")%></li>  
									<li id="EM" <%=IIF(strOpenForm = "EM", "class=""current""", "")%>><%=obLanguage("Common", "kEMName")%></li>  
								</ul>
								<%
									DrawSchoolLogin()
									DrawEmLogin() 
								%>

							<%ElseIf MODULE_EM And MODULE_REGION And bIsRegionEMForSchool Then%>
								<!-- СРО (региональный сервер) -->
								<%DrawEmLogin() %>
								<script type="text/javascript">
									$(".box-form-departament").addClass("visible");
									$(".box-form-departament").css({'padding-top': '0px'});
									$(".sectiontable").css({ "border-top": "1px solid #225588" });
									$(".message-form").css({ "padding-top": "40px" });
								</script>

							<%ElseIf MODULE_EM And MODULE_REGION Then %>
								<!-- СРО (клиентский сервер) -->
								<ul class="tabs-form">  
									<li id="School" <%=IIF(strOpenForm = "School", "class=""current""", "")%>><%=obLanguage("Common", "kEO")%></li>  
									<li id="EM" <%=IIF(strOpenForm = "EM", "class=""current""", "")%>><%=obLanguage("Common", "kEMName")%></li>  
								</ul> 
								<%
									DrawSchoolLogin()  
									DrawEmLogin() 
								%>

							<%ElseIf MODULE_EM Then%>
								<!-- СГО -->
								<ul class="tabs-form">  
									<li id="School" <%=IIF(strOpenForm = "School", "class=""current""", "")%>><%=obLanguage("Common", "kEO")%></li>  
									<li id="EM" <%=IIF(strOpenForm = "EM", "class=""current""", "")%>><%=obLanguage("Common", "kEMName")%></li>   
								</ul><%

								DrawSchoolLogin()  
								DrawEmLogin() 
							Else%>
								<!-- NetSchool -->
								<%DrawSchoolLogin()%>

								<script type="text/javascript">
									$(".box-form").css({ 'padding-top': '0px' });
									$(".sectiontable").css({ "border-top": "1px solid #225588" });
									$(".message-form").css({ "padding-top": "40px" });
									$(".img-logo").attr({ "src": "/vendor/custom/img/logo_netscool.png" });
								</script>
							<%End If%>

							<%If kESIA_MAIN_AUTH And Not bBindAccount Then
								DrawMainAuthLogin()%>

								<script type="text/javascript">
									$(".tabs-form").css("display", "none");
									$(".box-form").css("display", "none");
								</script>
							<%End If%>

							<script type="text/javascript">
								$(".centered .span-product-name").text("<%=Application("NS_PRODUCT_NAME")%>");
							</script>
						</div>
						<!-- #INCLUDE VIRTUAL=/extras/about_footer.html -->
					</div>
				</div>
				<!--[if lt IE 8]></div><![endif]-->
			</div>
	
		<%Call DrawRecoveryModal()%>	

		<div id="overlay" style="display: none"></div>
	</div>

	<script src="<%=GetVersionedResLink("/vendor/pages/js/login.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/about.min.js")%>" type="text/javascript"></script>

	<div>
		<script type="text/javascript"> 
			var $buoop = { vs: { i: 8, f: 30, o: 20, s: 7 }, c: 2 };

			function $buo_f() { 
				var e = document.createElement("script");
		
				e.src = "//browser-update.org/update.min.js";
				document.body.appendChild(e);
			};
		
			try {
				document.addEventListener("DOMContentLoaded", $buo_f, false);
			}
			catch ( e ) {
				window.attachEvent("onload", $buo_f);
			}
		</script>
	</div>
</body>
</html>

<%
Sub DrawFilter(strTitle, strFormElemId, strFormElemName)
	%><div class="row form-horizontal"><%
		If strTitle <> "" Then 
			%><span class="control-label col-md-4"><%=strTitle%></span><%
		End If %>
		<div class="col-md-6 select-main">
			<select id="<%=strFormElemId%>" name="<%=strFormElemName%>"></select>
		</div>
	</div><%
End Sub

Sub DrawInput(strTitle, strFormElemName, strType, size, length)
	%><div class="row form-horizontal row-center-inset">
		<input name="<%=strFormElemName%>" placeholder="<%=strTitle%>" type="<%=strType%>" class="control-input col-md-6" />
	</div><%
End Sub

Function WriteHiddenTags( theTags )
	Dim i

	Response.Write GetHiddenTags(theTags)
End Function

Function GetHiddenTags(theTags)
	Dim result
	Dim i
	For i = 0 To Ubound(theTags) Step 2
		result = result & "<input type=""hidden"" name=""" & theTags(i) & """ value=""" & theTags(i + 1) & """>"
	Next
	GetHiddenTags = result
End Function

Sub DrawLink(linkEvent, hint, txtBody, attr)
	%>
	<div class="row form-horizontal row-center-a" >
		<%=ShowAnchor(linkEvent, hint, txtBody, attr) %>
	</div>
	<%
End Sub

Sub DrawLoginForm()
	Dim obSecurityComponent, strIdpLoginUrl, objIdpInfo

	Call DrawFilter(obLanguage("Common","kCountry"), "countries", kCID)
	Call DrawFilter(obLanguage("Login","kLoginRegion"), "states", kSID)
	Call DrawFilter(obLanguage("Login","kLoginProvince"), "provinces", kPID)
	Call DrawFilter(obLanguage("Login","kLoginCity"), "cities", kCN)
	Call DrawFilter(obLanguage("Common","kEOType"), "funcs", kSFT)
	Call DrawFilter(obLanguage("Common","kEO"), "schools", kSCID)
	%><div class="two-lines-decoration"></div><%
	If bBindAccount And Not IsDull(strIdpTitle) Then
		%>
			<div style="white-space:normal; color:antiquewhite;">
		<%=obLanguage("Common", "kLoginAndBindNetCityAccount").Format(Array(Application("NS_PRODUCT_NAME"), strIdpTitle))%>
			</div>
		<%
	End If
	Call DrawInput(obLanguage("Common","kUser"), "UN", "text", TextInputSize(35), kMaxLogin)
	Call DrawInput(obLanguage("Common","kPassword"), "PW", "password", TextInputSize(35), kMaxPassword)
	Call DrawLink("", obLanguage("Login","kPasswordRecovery"), obLanguage("Login","kPasswordRecovery"), "id=""recovery""")
	Call DrawLink("winlogin();", obLanguage("Common", "kLoginWithWindowsAccount"), obLanguage("Common", "kLoginWithWindowsAccount"), "")
	
	If bECardAuthentication Then
		Call DrawLink("OpenECardWnd();", obLanguage("Login","kReadECardID"), obLanguage("Login","kReadECardID"), "id=ECardAuth")
	End If
	Call DrawIdpBindParams()
	Call DrawIdpLoginLinks()
End Sub

Sub DrawEmLoginForm()
	Call DrawFilter(obLanguage("Common","kCountry"), "countries", kEM_CID)
	Call DrawFilter(obLanguage("Login","kLoginRegion"), "states", kEM_SID)
	Call DrawFilter(obLanguage("ServAdmin","kHierarchyLevel"), "hlevels", kEM_HL)
	Call DrawFilter(obLanguage("Common","kEMName"), "ems", kEM_EMID)
	%><div class="two-lines-decoration"></div><%
	If bBindAccount And Not IsDull(strIdpTitle) Then
	%><div style="white-space:normal; color:antiquewhite;">
		<%=obLanguage("Common", "kLoginAndBindNetCityAccount").Format(Array(Application("NS_PRODUCT_NAME"), strIdpTitle))%>
	  </div><%
	End If
	Call DrawInput(obLanguage("Common","kUser"), "UN", "text", TextInputSize(35), kMaxLengthEmail)
	Call DrawInput(obLanguage("Common","kPassword"), "PW", "password", TextInputSize(35), kMaxPassword)
	Call DrawIdpBindParams()
	Call DrawIdpLoginLinks()
End Sub

Sub DrawEsiaButton()
	Dim obSecurityComponent, strIdpLoginUrl
	Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	strIdpLoginUrl = obSecurityComponent.GetIdpLoginUrl("esia")
	%>
	<div class="row-center row-submit">
		<a class="button-login button-login-esia" style="display: inline;" href="JavaScript:window.location.href='<%=strIdpLoginUrl%>'">
			<div class="button-login-title button-login-title-esia">
				<span class="text-title">Войти через</span>
				<span class="logo-title"></span>
			</div>
		</a>
	</div>
	<%
End Sub

Sub DrawIdpLoginLinks()
	Dim obSecurityComponent, strIdpLoginUrl, objIdpInfo

	On Error Resume Next
	If kESIA_AUTH Or kIRTECH_AUTH Then
		Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
		
		If kIRTECH_AUTH Then
			strIdpLoginUrl = obSecurityComponent.GetIdpLoginUrl("irtech")
			' Если адрес не прошел проверку, то переадресация на перекрестную страницу
			If Not CheckIsExternalAddress() Then strIdpLoginUrl = obSecurityComponent.GetIdpCrossLoginUrl("irtech")
			Set objIdpInfo = obSecurityComponent.GetIdpInfo("irtech")
			Call DrawLink("window.location.href='" & strIdpLoginUrl & "'", objIdpInfo.EntryLinkName, objIdpInfo.EntryLinkName, "class='sso-irtech'")
		End If

		If kESIA_AUTH And Not kESIA_BUTTON_AUTH Then
			strIdpLoginUrl = obSecurityComponent.GetIdpLoginUrl("esia")
			Set objIdpInfo = obSecurityComponent.GetIdpInfo("esia")
			Call DrawLink("window.location.href='" & strIdpLoginUrl & "'", objIdpInfo.EntryLinkName, objIdpInfo.EntryLinkName, "")
		End If
	End If
End Sub

Sub DrawIdpBindParams()
	If bBindAccount And Not IsDull(strIdpTitle) Then
		%><input type="hidden" name="IsBindAccount" value="1"/><%
	End If
End Sub

Sub DrawMainAuthForm()
	Dim obSecurityComponent, strIdpLoginUrl

	Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	strIdpLoginUrl = obSecurityComponent.GetIdpLoginUrl("esia")
	Call DrawEsiaButton()
	%>
	<div style="margin-top: 10px">
		<%Call DrawLink("showLogin()", obLanguage("Common", "kLogInWithLoginAndPassword"), obLanguage("Common", "kLogInWithLoginAndPassword"), "")%>
	</div>
	<%
End Sub

Sub DrawMainAuthLogin()%>
	<div class="box-form-auth">
		<!--ОКНО ФОРМЫ АВТОРИЗАЦИИ-->
		<div class="message-form">
			<!--ФОРМА-->
			<div class="info">
				<form method="post" name="AuthForm" id="signup" onsubmit="return false;">
					<div class="row">
						<%Call DrawMainAuthForm()%>
					</div>
				</form>
			</div>
		</div>
	</div><%
End Sub

'Образовательная организация
Sub DrawSchoolLogin()%>
	<div class="box-form <%=IIF(strOpenForm = "School", "visible", "")%>">  
		<!--ОКНО ФОРМЫ АВТОРИЗАЦИИ-->
		<div id="message" class="message-form" >
			<!--САМА ФОРМА-->
			<div class="info">
				<form method="POST" action="/asp/postlogin.asp" name="MainForm" onsubmit="return false;">
					<%=WriteHiddenTags(Array("VER", nVer, "PW2", "", "LT", nLT, "LoginType", LoginType_School, "ECardID", "")) %>
					<div class="row">
						<!--ВЫВОД ПОЛЕЙ "ПОЛЬЗОВАТЕЛЬ" И "ПАРОЛЬ"-->
						<%
							Call DrawLoginForm()
							Call ButtonSubmit("login_ctrl.login();", "Войти")
							If kESIA_BUTTON_AUTH Then
								Call DrawEsiaButton()
							End If
						%>
					</div>
				</form>
			</div>
		</div>
	</div><%
End Sub

'Управление образования
Sub DrawEmLogin()%>
	<div class="box-form box-form-departament <%=IIF(strOpenForm = "EM", "visible", "")%>">
		<div id="message-em" class="message-form">
			<div class="info">
				<form method="POST" action="/asp/postlogin.asp" name="EmForm" onsubmit="return false;">
					<%=WriteHiddenTags(Array("VER", nVer, "PW2", "", "LT", nLT, "LoginType", LoginType_EducManager)) %>
					<div class="row form-horizontal">
						<%
							Call DrawEmLoginForm()
							If kUseSignatureLogon Then 
								Call ButtonSubmit("signatureLogin();", obLanguage("Common", "kLoginWithSignature"))
							End If
							Call ButtonSubmit("em_login_ctrl.login();", obLanguage("Common", "kLoginWithSignatureEnter"))
							If kESIA_BUTTON_AUTH Then
								Call DrawEsiaButton()
							End If
						%>
					</div>
				</form>
			</div>
		</div>
	</div><%
End Sub

Sub DrawRecoveryModal
	%><div id="message-password-recovery" class="message" style="display: none">
		<div class="close">
			<a id="cexit_recovery" style="display: block"><img src="/vendor/custom/img/login_close.gif"></a>
		</div>
		<div class="head">
			<span class="text-restore-password"><%=obLanguage("Messages", "kPasswordRecovery")%></span>
			<!-- <img src="/images/about/remember_password.png"> -->
		</div>
		<div class="text">
			<%=DB2HTML_BR(obLanguage("Login","kBriefInstructions1")) & Application("NS_PRODUCT_NAME") & DB2HTML_BR(obLanguage("Login","kBriefInstructions2")) & Application("NS_PRODUCT_NAME")%>
		</div>
		<div class="info">
			<form method="POST" action="/asp/postlogin.asp" name="PasswordRecoveryForm" onsubmit="return false;">
				<input type="hidden" name="VER" value="<%=nVer%>" />
				<input type="hidden" name="PW2" value="" />
				<input type="hidden" name="LT" value="<%=nLT%>" />
				<input type="hidden" name="LoginType" value="<%= LoginType_School %>"/>
				<input type="radio"  name="recoveryType" value="<%=PswRecoveryType_Email%>" checked /> <%=obLanguage("UsersExport_1C","kEMail") %><br />
				<input type="radio" name="recoveryType" value="<%=PswRecoveryType_MobPhone%>" /> <%=obLanguage("Common","kMobilePhone") %>
				<div>
					<% Call DrawInput("", "recoveryValue", "text", TextInputSize(35), kMaxLengthEmail) %>
				</div>
				<div class="row-recovery">
					<a class="button-login" href="JavaScript:recoveryPassword();" onclick="recoveryPassword(); return false;">
						<span class="button-login-title"><%=obLanguage("Common", "kApplyData")%></span>
					</a>
				</div>
			</form>
		</div>
		<div class="text">
			<%=DB2HTML_BR(obLanguage("Login","kBriefInstructions3"))%>
		</div>
	</div><%
End Sub

Sub ButtonSubmit(theJSCall, name)
	%>
	<div class="row-center row-submit">
		<a class="button-login" style="display: none" href="JavaScript:<%=theJSCall%>" onclick="<%=theJSCall%>return false;">
			<span class="button-login-title"><%=name %> </span>
		</a>
	</div>
	<%
End Sub
%> 
