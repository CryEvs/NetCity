<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/TestEMail_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kMovePeriods_Max = 4
Const kIPAddressMaxLen = 100
Const kServerKeyMaxLen = 4
Const kServerKey = "4-х значный ключ (обязателен при создании записи на SMS гейте)"

Const kRequireLoginEachEntrance = 1
Const kRequireLoginAfterChangePass = 2
Const kRequireEsiaAdminLoginNever = 3

Dim bEmptySchools, strIPAddress, strProxyIPAddress, strServerS2, strServerKey, strAuxAddresses
Dim bNeedMailAuth, strMailHost, nMailHostPort, strMailUser, strMailUserPass, strMailFrom, bMailUseSsl, strServAdminMail
Dim objMovePeriods, objGlobalYears, bEmptyGlobalYears
Dim strGlobalYearID, bBlockAccess, bRestrictNumericPass, bBlockByIp, bBlockByEducOrgAndLogin, strMaxSessionIdleTime, nMinLoginLength, nMinPasswordLength
Dim strEServicesUrl, strEServicesExternalUrl, strContingentUrl, strNetCitySpoUrl, strRegionUrl, strClientIdForSync, strMsokoUrl, strYaCounterCode, strFiasAddressServiceUrl, strExternalFiasAddressServiceUrl
Dim bBlockSimilars, bBlockFastInput, bQueueImportMode, bRequireIdentityData, bImportStaffFromOtherOrgs, bMoveInSourceEServiceOnly
Dim bEsiaAuth, bIrtechAuth, strEsiaLoginPage, strEsiaLinkUserPage, strEsiaLogoutUserPage, bEsiaButtonAuth, bEsiaMainAuth, bWindowsAuth
Dim bEnableSms
' настройки авторизации по ЕСИА
Dim bEsiaOAuth, bEsiaSaml, bEsiaIrtechIdentityAuth, strEsiaOAuthICMnemonics, strEsiaOAuthCertificatePass, strEsiaOAuthServerUrl

Dim bBlockEsiaUserLogin, bRequireEsiaAdminLoginAfterChangePass, bRequireEsiaAdminLoginNever, bRequireEsiaAdminLoginFirstEntrance, strRequireEsiaAdminLoginInfo
Dim bEnableNotice, strNoticeTitle, strNoticeDisplayText, strNoticeButtonText, dtNoticeStartDate, dtNoticeEndDate, strAllowedReturnUrl, strOpenAuthPublicKey
Dim strStaffAttestUrl, strStaffAttestLogin, strStaffAttestSecret, bMODULE_StaffAttest, strEducPortalUrl, strEducPortalApiUrl, strPFDOClientId, strPFDOClientSecret, strPFDOUserName, strPFDOPassword
Dim strSoloEsaClientId, strSoloEsaClientSecret, strSoloEsaUrl, strSoloRbooApiUrl, strSoloRefsApiUrl, strIdentityServerUrl, strSoloEnrollmentUrl, strSoloSchoolEnrollmentUrl, strRabbitMqConnection
Dim bEnablePopUp, strPopupDisplayText, strPopupButtonText, dtPopupStartDate, dtPopupEndDate
Dim bReasonForChangeSchoolCard , EM_MayEditExtraSchoolInfo
Dim bPushNotificationsEnabled, strPushServerKey, strPushSenderId

' Настройки файловых вложений
Dim bFileStorage, strFileStorageApiAddress

Function IsTopPage()
	IsTopPage = True
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleOptions") & " <i>" & NETSCHOOL_PRODUCT_NAME & "</i>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Settings
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Settings
End Function

Sub Main() 
	Dim objSchools
	Dim objServerSettingsComponent
	Dim obServerSettings, result

	Set objServerSettingsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IServerSettingsComponent")


	Set result = objServerSettingsComponent.GetServerSettings()

	If Not result.IsSuccess Then
		GenerateError result.Message
	End If

	Set obServerSettings = result.Data
	strIPAddress = GetSafeStr(obServerSettings.Address, kIPAddressMaxLen, "")
	strAuxAddresses = obServerSettings.AuxAddresses
	strProxyIPAddress = GetSafeStr(obServerSettings.ProxyAddress, kIPAddressMaxLen, "")
	strServerS2 = obServerSettings.TrustedAppCode
	bBlockAccess = obServerSettings.SecuritySettings.FilteringIpAddresses
	bRestrictNumericPass = obServerSettings.SecuritySettings.RestrictNumericPasswords
	nMinLoginLength = GetSafeLng(obServerSettings.SecuritySettings.MinLoginLength, 3)
	nMinPasswordLength = GetSafeLng(obServerSettings.SecuritySettings.MinPasswordLength, 6)
	bBlockByIp = obServerSettings.SecuritySettings.BlockByIp
	bBlockByEducOrgAndLogin = obServerSettings.SecuritySettings.BlockByEducOrgAndLogin
	strMaxSessionIdleTime = obServerSettings.SecuritySettings.MaxSessionIdleTime
	bBlockSimilars = obServerSettings.UserAccountsSettings.BlockSimilars
	bMoveInSourceEServiceOnly = obServerSettings.UserAccountsSettings.MoveInSourceEServiceOnly
	bBlockFastInput = obServerSettings.UserAccountsSettings.BlockFastInput
	bQueueImportMode = obServerSettings.UserAccountsSettings.QueueImportMode
	bRequireIdentityData = obServerSettings.UserAccountsSettings.RequireIdentityData
	bImportStaffFromOtherOrgs = obServerSettings.UserAccountsSettings.ImportStaffFromOtherOrgs
	strMailHost = obServerSettings.MailSettings.MailHost
	nMailHostPort = GetSafeLng(obServerSettings.MailSettings.MailHostPort, 25)
	bMailUseSsl = obServerSettings.MailSettings.UseSsl
	strMailUser = obServerSettings.MailSettings.MailUser
	strMailUserPass = obServerSettings.MailSettings.MailPassword
	strMailFrom = obServerSettings.MailSettings.MailFrom
	strServAdminMail = obServerSettings.MailSettings.ServAdminMail
	strEServicesUrl = obServerSettings.IntegrationSettings.EServicesUrl
	strEServicesExternalUrl = obServerSettings.IntegrationSettings.EServicesExternalUrl
	strContingentUrl = obServerSettings.IntegrationSettings.ContingentUrl
	strFiasAddressServiceUrl = obServerSettings.IntegrationSettings.FiasAddressServiceUrl
	strExternalFiasAddressServiceUrl = obServerSettings.IntegrationSettings.ExternalFiasAddressServiceUrl
	strNetCitySpoUrl = obServerSettings.IntegrationSettings.NetCitySpoUrl
	strRegionUrl = obServerSettings.IntegrationSettings.RegionUrl
	strClientIdForSync = obServerSettings.IntegrationSettings.ClientIdForSync
	strMsokoUrl = obServerSettings.IntegrationSettings.MsokoUrl
	strYaCounterCode = obServerSettings.IntegrationSettings.YaCounterCode
	bEsiaAuth = obServerSettings.UserAuthorizationSettings.EsiaAuth

	bEnableSms = obServerSettings.SmsSettings.EnableSms

	' настройки авторизации по ЕСИА
	bEsiaOAuth = obServerSettings.UserAuthorizationSettings.EsiaOAuth
	bEsiaSaml = obServerSettings.UserAuthorizationSettings.EsiaSaml
	bEsiaIrtechIdentityAuth = obServerSettings.UserAuthorizationSettings.EsiaIrtechIdentityAuth
	strEsiaOAuthICMnemonics = obServerSettings.UserAuthorizationSettings.EsiaOAuthICMnemonics
	strEsiaOAuthCertificatePass = obServerSettings.UserAuthorizationSettings.EsiaOAuthCertificatePass
	strEsiaOAuthServerUrl = obServerSettings.UserAuthorizationSettings.EsiaOAuthServerUrl

	bEsiaButtonAuth = obServerSettings.UserAuthorizationSettings.EsiaButtonAuth
	bEsiaMainAuth = obServerSettings.UserAuthorizationSettings.EsiaMainAuth
	bIrtechAuth = obServerSettings.UserAuthorizationSettings.IrtechAuth
	strEsiaLoginPage = obServerSettings.UserAuthorizationSettings.EsiaLoginPage
	strEsiaLogoutUserPage = obServerSettings.UserAuthorizationSettings.EsiaLogoutUserPage
	strEsiaLinkUserPage = obServerSettings.UserAuthorizationSettings.EsiaLinkUserPage
	bWindowsAuth = obServerSettings.UserAuthorizationSettings.WindowsAuth
	bBlockEsiaUserLogin = obServerSettings.UserAuthorizationSettings.BlockEsiaUserLogin
	bRequireEsiaAdminLoginAfterChangePass = obServerSettings.UserAuthorizationSettings.RequireEsiaAdminLoginAfterChangePass
	bRequireEsiaAdminLoginNever = obServerSettings.UserAuthorizationSettings.RequireEsiaAdminLoginNever
	strRequireEsiaAdminLoginInfo = CStr(IIF(bRequireEsiaAdminLoginAfterChangePass, kRequireLoginAfterChangePass, IIF(bRequireEsiaAdminLoginNever, kRequireEsiaAdminLoginNever, kRequireLoginEachEntrance)))
	bRequireEsiaAdminLoginFirstEntrance = obServerSettings.UserAuthorizationSettings.RequireEsiaAdminLoginFirstEntrance
	bEnableNotice = obServerSettings.UserAuthorizationSettings.EnableNotice
	strNoticeTitle = obServerSettings.UserAuthorizationSettings.NoticeTitle
	strNoticeDisplayText = obServerSettings.UserAuthorizationSettings.NoticeDisplayText
	dtNoticeStartDate = obServerSettings.UserAuthorizationSettings.NoticeStartDate
	dtNoticeEndDate = obServerSettings.UserAuthorizationSettings.NoticeEndDate
	strAllowedReturnUrl = obServerSettings.UserAuthorizationSettings.AllowedReturnUrl
	strOpenAuthPublicKey = obServerSettings.UserAuthorizationSettings.OpenAuthPublicKey
	strStaffAttestUrl = obServerSettings.IntegrationSettings.StaffAttestUrl
	strEducPortalUrl = obServerSettings.IntegrationSettings.EducPortalUrl
	strEducPortalApiUrl = obServerSettings.IntegrationSettings.EducPortalApiUrl
	strPFDOClientId = obServerSettings.IntegrationSettings.PFDOClientId
	strPFDOClientSecret = obServerSettings.IntegrationSettings.PFDOClientSecret
	strPFDOUserName = obServerSettings.IntegrationSettings.PFDOUserName
	strPFDOPassword = obServerSettings.IntegrationSettings.PFDOPassword
	strSoloEsaClientId = obServerSettings.IntegrationSettings.SoloEsaClientId
	strSoloEsaClientSecret = obServerSettings.IntegrationSettings.SoloEsaClientSecret
	strSoloEsaUrl = obServerSettings.IntegrationSettings.SoloEsaUrl
	strSoloRbooApiUrl = obServerSettings.IntegrationSettings.SoloRbooApiUrl
	strSoloRefsApiUrl = obServerSettings.IntegrationSettings.SoloRefsApiUrl
	strSoloEnrollmentUrl = obServerSettings.IntegrationSettings.SoloEnrollmentUrl
	strSoloSchoolEnrollmentUrl = obServerSettings.IntegrationSettings.SoloSchoolEnrollmentUrl
	strIdentityServerUrl = obServerSettings.IntegrationSettings.IdentityServerUrl
	strRabbitMqConnection = obServerSettings.IntegrationSettings.RabbitMqConnection
	strStaffAttestLogin = obServerSettings.IntegrationSettings.StaffAttestLogin
	strStaffAttestSecret = obServerSettings.IntegrationSettings.StaffAttestSecret
	bMODULE_StaffAttest = IIF(obServerSettings.SystemSettings.MODULE_StaffAttest, 1, 0)
	bPushNotificationsEnabled = IIF(obServerSettings.SystemSettings.PushNotificationsEnabled, 1, 0)
	strPushServerKey = obServerSettings.PushSettings.ServerKey
	strPushSenderId = obServerSettings.PushSettings.SenderId

	' Настройки для Всплывающего окна на экране входа
	bEnablePopUp = obServerSettings.PopUpWindowOnLoginScreenSettings.EnablePopUp
	strPopupDisplayText = obServerSettings.PopUpWindowOnLoginScreenSettings.PopUpDisplayText
	strPopupButtonText = obServerSettings.PopUpWindowOnLoginScreenSettings.PopUpButtonText
	dtPopupStartDate = obServerSettings.PopUpWindowOnLoginScreenSettings.PopUpStartDate
	dtPopupEndDate = obServerSettings.PopUpWindowOnLoginScreenSettings.PopUpEndDate

	' настройки школы
	bReasonForChangeSchoolCard = obServerSettings.SchoolInfoSettings.RequireReasonChangeSchoolCard
	EM_MayEditExtraSchoolInfo = obServerSettings.SchoolInfoSettings.EM_MayEditExtraSchoolInfo

	' Настройки файловых вложений
	bFileStorage = obServerSettings.FileAttachmentsSettings.FileStorageType = 2
	strFileStorageApiAddress = obServerSettings.FileAttachmentsSettings.FileStorageApiAddress


	Set objSchools = objNSNET.GetSchools()
	bEmptySchools = objSchools.EOF

	bNeedMailAuth = (Len(strMailUser) > 0)

	Set objGlobalYears = objNSNET.GetGlobalYears(0)
	bEmptyGlobalYears = objGlobalYears.EOF

	If Not bEmptyGlobalYears Then
		strGlobalYearID = GetSafeGlobalYearID()

		Set objMovePeriods = objNSNET.GetMovePeriodsInfo(strGlobalYearID)
		If objMovePeriods.EOF And (Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool) Then
			GenerateError obLanguage("ServAdmin","kCantGetMovePeriodsInfo")
		End If
	End If
End Sub

Function GetSafeGlobalYearID()
	Dim strID

	strID = GetSafeID(Request("CMNYEAR"), "0")
	If strID = "0" Then
		GetSafeGlobalYearID = GetSafeID(objGlobalYears("GLOBALYEARID"), Null)
		Exit Function
	End If

	While Not objGlobalYears.EOF
		If strID = GetSafeID(objGlobalYears("GLOBALYEARID"), Null) Then
			GetSafeGlobalYearID = strID
			objGlobalYears.MoveFirst
			Exit Function
		End If
		objGlobalYears.MoveNext
	WEnd
	objGlobalYears.MoveFirst
	GetSafeGlobalYearID = GetSafeID(objGlobalYears("GLOBALYEARID"), Null)
End Function

Sub onHeadSpecial()
	Call scriptCalendar("UserAuthorizationSettings", Null, Null)
	%>
	<script src="<%=GetVersionedResLink("/static/dist/pages/users/js/changePassword.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("libs/jquery.validate/additional-methods.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("uikit.validate.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/pages/common/js/emailValidator.js")%>" type="text/javascript"></script>
	<script src="/js/libs/jquery.inputmask.bundle.min.js" type="text/javascript"></script>

	<script><!--


		var changePasswordCtrl = new changePasswordCtrl({userEditHimself: true, minPasswordLength: <%=obContext.ServerSettings.SecuritySettings.MinPasswordLength%>, userId: <%=strUserID%>});
		var emailValidatorCtrl = new EmailValidatorCtrl.EmailValidatorCtrl();
		<%Call DrawPrintOnlyScripts("SMSParamsPrint.asp") %>

		$(document).ready(function() {

			

			//чекбокс Включить возможность использования SMS-сервиса
			$('input[name="EnableSMS"]').on("change", function() {

				$(".smsOptionsBtn").removeClass( "disabled" )

				if(this.checked) {
					$(".smsOptionsBtn").prop('disabled',false);
				}
				else{
					$(".smsOptionsBtn").prop('disabled',true)
				}
			});


			if ( $('input[name="EnableSMS"]')[0].checked){
				$(".smsOptionsBtn").prop('disabled',false);
			}
			else {
				$(".smsOptionsBtn").prop('disabled',true)
			}

			$('input[name="NSMailHostPort"]').inputRules('inputNum', { allowFractional: false });
			$('input[name="NSYaCounterCode"]').inputRules('inputNum', { digits: true });

			var clientIdForSyncHandler = function() {
				var control = $(this);
				var value = control.val();

				if (_.isEmpty(value)) {
					return;
				}

				var intValue = parseInt(value);
				var isInt = +value === intValue;

				if (!isInt) {
					control.val("");
					focusAlert(control, "Введите целое число");
				}

				var min = 0;
				if (intValue < min) {
					control.val("");
					focusAlert(control, language.Generic.Common.kMinInput + min);
				}
			};

			$('input[name="NSClientIdForSync"]').on("change", clientIdForSyncHandler);
			$('input[name="NSMaxSessionIdleTime"]').inputRules('inputNum', { digits: true, minVal: 3, maxVal: 999 });
			setStateOfCookies();
			$('div.panel-collapse').on('shown.bs.collapse', function(event) {
				var activePanelId = event.target.id;
				$.cookie('server-settings-accordion_state', activePanelId);
				window.buttonsPanelCtrl.init();
			});
			enableNotice();
			enablePopUp();
			changeEsiaAuthProtocol();

			// инициализация маски
			$("[name=ProxyIPAddress]").inputmask();

			// валидация IP-адреса
			$(document.Options).validate({
				rules: {
					ProxyIPAddress: {
						required: false,
						ipv4: true
					}
				},
				messages: {
					ProxyIPAddress: language.Generic.ServAdmin.kInvalidIPAddress
				}
			});
			$(document.SecuritySettings).validate({
				rules: {
					NSMinLoginLength: {
						required: true,
						digits: true,
						min: 3,
						max: 20
					},
					NSMinPasswordLength: {
						required: true,
						digits: true,
						min: 3,
						max: 20
					}
				},
				messages: {
					NSMinLoginLength: "Не соответствует минимальная длина имени пользователя",
					NSMinPasswordLength: "Не соответствует минимальная длина пароля"
				}
			});
		});

		function SaveSettings() {
			var form = document.forms["Options"];

			if(!$(form).valid()) {
				return;
			}

			var ipAdress = form.elements["IPAddress"].value;

			if (trimStr(ipAdress) == "" || trimStr(ipAdress.replace("http://", "")) == "" || trimStr(ipAdress.replace("https://", "")) == "") {
				alert(language.Generic.ServAdmin.kIPAddressCantBeEmpty);
				form.elements["IPAddress"].focus();
				return;
			}

			if (ipAdress.indexOf("https://") != 0 && ipAdress.indexOf("http://") != 0) {
				alert(language.Generic.ServAdmin.kIPAddressMustBeginWithHttp);
				form.elements["IPAddress"].focus();
				return;
			}

			var codeInput = $('input[name=ServerS2]');
			var code = $('input[name=ServerS2]').val();

			if(code.length != 0 && code.length < <%=kMinTrustedAppCode%>) {
				alert(language.Generic.Common.kErrorTrustedAppCodeMustHave);
				codeInput.trigger("focus");
				return;
			}

			if(code.charAt(0) == ' ' || code.charAt(code.length-1) == ' ') {
				alert(language.Generic.Common.kErrTrustedAppCodeSurroundSpaces);
				codeInput.trigger("focus");
				return;
			}
			
			jsSaveForm(form);
		}

		function Save_Integration_Settings() {
			var form = document.forms["IntegrationSettings"];
			var MODULE_StaffAttest = form.elements["MODULE_StaffAttest"].value;
			if (MODULE_StaffAttest == 1) {
				var staffAttestUrl = form.elements["NSStaffAttestUrl"].value;
				var staffAttestLogin = form.elements["NSStaffAttestLogin"].value;
				var staffAttestSecret = form.elements["NSStaffAttestSecret"].value;
				var oneOfStaffAttest = staffAttestUrl || staffAttestLogin || staffAttestSecret;
				var allStaffAttest = staffAttestUrl && staffAttestLogin && staffAttestSecret;
				if (oneOfStaffAttest && !allStaffAttest) {
					alert(language.Generic.ServAdmin.kErrStaffAttestNotFilling);
					return;
				}
				if (staffAttestSecret && staffAttestSecret.length < 16) {
					alert(language.Generic.ServAdmin.kErrStaffAttestSecretTooShort);
					return;
				}
			}
			var ch = checkConnection("", form.elements["NSEServicesUrl"].value, false, 1);
		}

		function Save_SmsSettings() {
			var form = document.forms["SmsSettings"];
			jsSaveForm(form);
			
		}

		function Save_PushSettings() {
			var form = document.forms["PushSettings"];
			jsSaveForm(form);
			
		}

		function Save_Mail_Settings() {
			var form = document.forms["MailSettings"];
			var bSMTP = form.elements["SMTPServerRequiresAuth"].checked;
			var bUseSSL = form.elements["NSMailHostUseSsl"].checked;

			if (trimStr(form.elements["NSMailHost"].value) == "") {
				alert(language.Generic.ServAdmin.kOutMailServerAddressIsEmpty);
				form.elements["NSMailHost"].focus();
			}
			else if (trimStr(form.elements["NSMailFrom"].value) == "") {
				alert(language.Generic.ServAdmin.kMailFromIsEmpty);
				form.elements["NSMailFrom"].focus();
			}
			else if(!emailValidatorCtrl.isEmailValid(form.elements["NSMailFrom"].value)) {
				alert(language.Generic.ServAdmin.kMailFromIsNotValid);
				form.elements["NSMailFrom"].focus();
			}
			else if(bSMTP && trimStr(form.elements["NSMailUser"].value) == "") {
				alert(language.Generic.ServAdmin.kMailUserIsEmpty);
				form.elements["NSMailUser"].focus();
			}
			else if(bSMTP && trimStr(form.elements["NSMailPassword"].value) == "") {
				alert(language.Generic.ServAdmin.kMailPasswordIsEmpty);
				form.elements["NSMailPassword"].focus();
			}
			else if (trimStr(form.elements["NSServAdminMail"].value) == "") {
				alert(language.Generic.ServAdmin.kServAdminMailIsEmpty);
				form.elements["NSServAdminMail"].focus();
			}
			else if(!emailValidatorCtrl.isEmailValid(form.elements["NSServAdminMail"].value)) {
				alert(language.Generic.ServAdmin.kServAdminMailIsNotValid);
				form.elements["NSServAdminMail"].focus();
			}
			else if(bUseSSL && trimStr(form.elements["NSMailHostPort"].value) == "465") {
				$.show.confirmation('<%=obLanguage("ServAdmin","kConfirmSavePort465")%>').then(function() {
					jsSaveForm(form);
				});
			}
			else {
				jsSaveForm(form);
			}
		}

		function getAddress(addressNumber)
		{
			switch (addressNumber)
			{
				case 1:
					return document.forms["IntegrationSettings"].elements["NSEServicesUrl"].value;
				case 2: 
					return document.forms["IntegrationSettings"].elements["NSEServicesExternalUrl"].value;
				case 3:
					return document.forms["IntegrationSettings"].elements["NSContingentUrl"].value;
				case 4:
					return document.forms["IntegrationSettings"].elements["NSNetCitySpoUrl"].value;
				case 5:
					regionUrl = document.forms["IntegrationSettings"].elements["NSRegionUrl"];
					if (regionUrl) {return regionUrl.value} else {return "_empty_"};
				case 6:
					msokoUrl = document.forms["IntegrationSettings"].elements["NSMsokoUrl"];
					if (msokoUrl) {return msokoUrl.value} else {return "_empty_"};
				case 7:
					staffAttestUrl = document.forms["IntegrationSettings"].elements["NSStaffAttestUrl"];
					if (staffAttestUrl) {return staffAttestUrl.value} else {return "_empty_"};
				default:
					return "___";
			}
		}
		<%
			'Рекурентная проверка адресов сервисов
			'Магическая переменная paramNumber используется для получения адреса конкретного поля и выбора сервиса с помощью которого проверяется адрес
			'Магическое число 8 -- количество обрабатываемых параметров, если обработано 8 параметров, то можно сохранить
			'Магическое число 0 -- используется для однократной проверки адреса, тогда в функцию должен передавать адрес и имя поля (/webapi/checkserver)
			'Магическое число 10 -- используется для однократной проверки адреса, тогда в функцию должен передавать адрес и имя поля (/webapi/checkserverplus)
			'Строка _empty_ -- маркер того что поля нет, и его не надо обрабатывать (модуль может быть отключён, тогда поле не добавляется)
			'response -- принимает значения true/false, доступен/недоступен адрес

			'bShowInfo -- Показывать сообщения об ошибках
			'strAddressInfo -- имя поля, используется для отображения сообщений пользователю
			'strAddress -- адрес
			'paramNumber -- количество проверенных параметров, необходимость рекурентно проверять параметры, метод проверки адреса
		%>
		function checkConnection(strAddressInfo, strAddress, bShowInfo, paramNumber) {
			if (strAddress) {
				strAddress = strAddress.trim();
			}

			jsSubmit({
				action: paramNumber == 6 || paramNumber == 10 ? "/webapi/checkserverplus" : "/webapi/checkserver",
				data: "=" + strAddress,
				method: "POST",
				auth: true,
				showProcessing: true,
				nocache: true,
				defaultErrorHandling: false,
				onError: function() { alert(language.Generic.ServAdmin.kConnectionErrorMessage + strAddress); },
				onSuccess: function(response) {
					if (paramNumber == 8) { 
						var form = document.forms["IntegrationSettings"];

						// удаляет все пробелы в адресах при сохранении
						$(form).find(".input-group-btn").siblings("input:text").each(function() {
							if ($(this).val()) {
								$(this).val($(this).val().toString().trim());
							}
						});

						jsSaveForm(form);
					}
					if (response) {
						if (paramNumber != 0 && paramNumber != 10) { checkConnection("", getAddress(paramNumber + 1), false, paramNumber + 1); } 
					}
					else {
						if (paramNumber != 0 && paramNumber < 8) {
							if (strAddress != "_empty_") {
								$.show.confirmation(language.Generic.ServAdmin.kCheckConnectionErrorMessage.replace(/addr/g, strAddress))
									.then(function() { checkConnection("", getAddress(paramNumber + 1), false, paramNumber + 1); });
							}
							else {
								checkConnection("", getAddress(paramNumber + 1), false, paramNumber + 1);
							}
						};
					};
				}
			}).then (function(response) {
				if (bShowInfo) {
					if (strAddress == "") {
						$.show.message(language.Generic.ServAdmin.kEmptyUrl + strAddressInfo); 
					} else if (response) {  
						$.show.message(language.Generic.ServAdmin.kConnectionSuccess.replace(/addr/g, strAddress), language.Generic.ServAdmin.kConnectionInfo); 
					} else { 
						alert(language.Generic.ServAdmin.kConnectionErrorMessage + strAddress); 
					} 
				};
			});
		}

		function setStateOfCookies() {
			var activePanelId = $.cookie('server-settings-accordion_state');
			if ( activePanelId ) {
				$('#' + activePanelId).addClass('in');
				$('div.panel-collapse:not(#' + activePanelId + ')').removeClass('in');
			}
		}

		function onoffauth() {
			$('#MailAuthUserRow').css('display', $('#MailAuthUserRow').css('display') == 'none' ? '' : 'none' );
			$('#MailAuthPasswordRow').css('display', $('#MailAuthPasswordRow').css('display') == 'none' ? '' : 'none' );
		}

		function SMSRegisty() {
			extDeferred.when(checkForChanges, function() { return !isDBBusy(); }, $.show.getConfirmation(language.Generic.ServAdmin.kSMSRegistryConfirm))
				.then(function () {
					var form = document.forms["Options"];
					form.elements["SMSReg"].value = "1";
					jsSaveForm(form);
			});
		}

		function SaveMovePeriodPermission() {
			var form = document.forms["MovePeriods"];
			form.action = "saveMovePeriods.asp"
			jsSaveForm(form);
		}

		function EditMovePeriodsInfo() {
			checkForChanges().then(function () {
				if( isDBBusy() ) return false;
				var form = document.forms["MovePeriods"];
				setDBBusy();
				DoSubmit(form, "EditMovePeriods.asp");
			});
		}

		function Save_Security_Settings() {
			var saveForm = document.forms["SecuritySettings"];
			
			var bBlockByIp = $('input[name="BlockByIP"]').prop('checked');
			var bBlockByEducOrgAndLogin = $('input[name="BlockByEducOrgAndLogin"]').prop('checked');

			if (!bBlockByIp && !bBlockByEducOrgAndLogin) {
				return alert(language.Generic.ServAdmin.kBlockTypesLogonWarn);
			}

			if ($(saveForm).valid())
			{
				jsSaveForm(saveForm)
					.done(function() {
						var defNetworkBtn = $('button', $('#DFNW'));
						if ($('[name=BlockAccess]').prop('checked')) {
							if (defNetworkBtn.hasClass('disabled')) {
								defNetworkBtn.removeClass('disabled');
								defNetworkBtn.on("click", DefineNetwork);
							}
							return;
						}
						defNetworkBtn.addClass('disabled');
					});
			}
		}

		function Save_User_Accounts_Settings() {
			var saveForm = document.forms["UserAccountsSettings"];
			jsSaveForm(saveForm);
		};

		function Save_User_Authorization_Settings() {
			var saveForm = document.forms["UserAuthorizationSettings"];

			var repl = /<script>.*?<\/script>/g;

			var titleEl = $('input[name="NoticeTitle"]');
			var title = titleEl.val();
			titleEl.val(title.replace(repl, ""));

			var noticeEl = $('textarea[name="NoticeDisplayText"]');
			var notice = noticeEl.val();
			noticeEl.val(notice.replace(repl, ""));

			var el = $('input[name="EnableNotice"]');
			var checked = el.prop("checked");

			if (checked) {
				if (trimStr(titleEl.val()) == "" || trimStr(noticeEl.val()) == "") {
					alert(language.Generic.ServAdmin.kNoticeCantBeEmpty);
					return;
				}
			}

			jsSaveForm(saveForm);
		}

		function Save_Reason_For_ChangeSchoolCard(){
			var saveForm = document.forms["ReasonForChangeSchoolCardSettings"];

			jsSaveForm(saveForm);
		}

		function Save_Pop_Up_Window_On_Login_Screen_Settings() {
			var saveForm = document.forms["PopUpWindowOnLoginScreenSettings"];

			var repl = /<script>.*?<\/script>/g;

			var noticeEl = $('textarea[name="PopupDisplayText"]');
			var notice = noticeEl.val();
			noticeEl.val(notice.replace(repl, ""));

			var btnTitleEl = $('input[name="PopupButtonText"]');
			var btnTitle = btnTitleEl.val();
			btnTitleEl.val(btnTitle.replace(repl, ""));

			var el = $('input[name="EnablePopup"]');
			var checked = el.prop("checked");

			if (checked) {
				if (trimStr(noticeEl.val()) == "" || trimStr(btnTitleEl.val()) == "") {
					alert('Поля "Текст для отображения", "Текст на кнопке" не должны быть пустыми');
					return;
				}
			}

			jsSaveForm(saveForm);
		};

		function Save_File_Attachments_Settings() {
			var saveForm = document.forms["FileAttachmentsSettings"];

			var fileStorageType = $('input[name="FileStorageType"]:checked').val();
			var fileStorageApiAddress = $('input[name="FileStorageApiAddress"]').val();

			if (fileStorageType == 2 && !fileStorageApiAddress) {
				alert(language.Generic.ServAdmin.kEmptyUrl + language.Generic.ServAdmin.kFileStorageApiAddress);
				return;
			}

			jsSaveForm(saveForm);
		}

		function DefineNetwork() {
			if( isDBBusy() ) return false;
			var form = document.forms["SecuritySettings"];
			setDBBusy();
			DoSubmit(form, "DefineSafeNetworks.asp");
		}

		function EditReadOnlyAccess() {
			var form = document.forms["SecuritySettings"]
			DoSubmit(form, "EditReadOnlyAccess.asp");
		}

		function ShowFormTestEMail() {
			$.show.dialog({
				title: language.Generic.ServAdmin.kEnterMail,
				message: $('#testEMailDlgTmpl'),
				buttons: [{label: language.Generic.Buttons.kSend, action: SendTestMail, cssClass: 'btn-primary'}]
			});
		}

		function enableNotice() {
			var el = $('input[name="EnableNotice"]');
			var checked = el.prop("checked");

			if (!checked) {
				$('input[name="NoticeTitle"]').prop("disabled", true);
				$('textarea[name="NoticeDisplayText"]').prop("disabled", true);
				$('input[name="ENSDT"]').prop("disabled", true);
				$('input[name="ENEDT"]').prop("disabled", true);
			}
			else {
				$('input[name="NoticeTitle"]').removeProp("disabled");
				$('textarea[name="NoticeDisplayText"]').removeProp("disabled");
				$('input[name="ENSDT"]').removeProp("disabled");
				$('input[name="ENEDT"]').removeProp("disabled");
			}
		};

		function enablePopUp() {
			var el = $('input[name="EnablePopup"]');
			var checked = el.prop("checked");

			if (!checked) {
				$('textarea[name="PopupDisplayText"]').prop("disabled", true);
				$('input[name="PopupButtonText"]').prop("disabled", true);
				$('input[name="PSDT"]').prop("disabled", true);
				$('input[name="PEDT"]').prop("disabled", true);
			}
			else {
				$('textarea[name="PopupDisplayText"]').removeProp("disabled");
				$('input[name="PopupButtonText"]').removeProp("disabled");
				$('input[name="PSDT"]').removeProp("disabled");
				$('input[name="PEDT"]').removeProp("disabled");
			}
		};

		function canEditSamlSettings(edit) {
			if (edit) {
				$('input[name="EsiaLoginPage"]').removeProp("disabled");
				$('input[name="EsiaLogoutUserPage"]').removeProp("disabled");
				$('input[name="EsiaLinkUserPage"]').removeProp("disabled");
			}
			else {
				$('input[name="EsiaLoginPage"]').prop("disabled", true);
				$('input[name="EsiaLogoutUserPage"]').prop("disabled", true);
				$('input[name="EsiaLinkUserPage"]').prop("disabled", true);
			}
		}

		function canEditOAuthSettings(edit) {
			if (edit) {
				$('input[name="EsiaOAuthServerUrl"]').removeProp("disabled");
				$('input[name="EsiaOAuthICMnemonics"]').removeProp("disabled");
				$('input[name="EsiaOAuthCertificatePass"]').removeProp("disabled");
			}
			else {
				$('input[name="EsiaOAuthServerUrl"]').prop("disabled", true);
				$('input[name="EsiaOAuthICMnemonics"]').prop("disabled", true);
				$('input[name="EsiaOAuthCertificatePass"]').prop("disabled", true);
			}
		}

		function changeEsiaAuthProtocol() {
			// протоколы авторизации
			var esiaSaml = 1, esiaOAuth = 2, esiaIrtechIdentityAuth = 3;

			var authProtocolValue = $('input[name="EsiaAuthProtocol"]:checked').val();
			if (authProtocolValue == esiaSaml) {
				canEditSamlSettings(true);
				canEditOAuthSettings();
			}
			else {
				canEditSamlSettings();
				canEditOAuthSettings(true);
			}
		};
	//-->
	</script>
<%
End Sub

' Создаёт поле ввода адреса удалённого сервиса
' FieldName -- имя переменной в которую сохраняется адресс
' FieldTitle -- заголовок поля
' CurrentValue -- текущее значение поля
' MagicNumber -- магическое число используемое для определения метода проверки адреса
Sub AddressServiceField(FieldName, FieldTitle, CurrentValue, MagicNumber, params)
	OpenFormGroup obLanguage("ServAdmin",FieldTitle)%>
	<div class="input-group">
		<%Call DrawInput(CurrentValue, FieldName, "text", "", 100, 100, "")%>
		<span class="input-group-btn">
			<button class="btn btn-default" 
					onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin",FieldTitle))%>',form.elements['<%=FieldName %>'].value+'<%=params%>', true, <%=MagicNumber %>)" 
					type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
	</div>
	<%CloseFormGroup
End Sub

Sub onDrawPage()
	Dim ScriptName%>

	<div class="panel-group" id="server-settings-accordion" role="tablist" aria-multiselectable="true"><%
		OpenPanelEx obLanguage("ServAdmin","kTitleServerSettings"), "title_server_settings", "server-settings-accordion", False, "panel-info"

		If bEmptySchools Then
			DrawInfo obLanguage("ServAdmin","kEmptySchools"), False
		Else %>
			<form name="Options" class="form-horizontal" action="SaveOptions.asp" method="post">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags( Array("SMSReg", "0") )%>
				<%=WriteHiddenTags( Array("SMSSettings", "0") )%>
				<%
				OpenBtnGroup
				ButtonSave "SaveSettings();", obLanguage("ServAdmin","kSaveSettings")
				Button "postTo('/angular/admin/appid');", obLanguage("ServAdmin","kServerTrustedCodes"), obLanguage("ServAdmin","kServerTrustedCodes"), ""
				CloseBtnGroup
				Call DrawInputRow(obLanguage("ServAdmin","kServerIPAddress"), strIPAddress, "IPAddress", "text", 40, kIPAddressMaxLen, "")
				Call DrawInputRow(obLanguage("ServAdmin","kServerAuxAddresses"), strAuxAddresses, "AuxAddresses", "text", 200, 200, "")
				Call DrawInputRowEx(obLanguage("ServAdmin","kProxyServerIPAddress"), strProxyIPAddress, "ProxyIPAddress", "text", 40, kIPAddressMaxLen, "", "data-inputmask=""'mask': '9{1,3}.9{1,3}.9{1,3}.9{1,3}'""")
				Call DrawInputRow(obLanguage("ServAdmin","kServerS2"), strServerS2, "ServerS2", "text", 40, kIPAddressMaxLen, "")%>
			</form><%

			ClosePanel %>
		






			<%OpenPanelEx obLanguage("ServAdmin","kTitleSMSRegistry"), "title_sms_registry", "server-settings-accordion", True, "panel-info"%>
			
			<form name="SmsSettings" class="form-horizontal" action="SaveOptions.asp" method="post">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags( Array("SaveSmsSettings", "1") )%>

			

				<%OpenBtnGroup
				ButtonSave "Save_SmsSettings();", obLanguage("ServAdmin","kSaveSettings")
				CloseBtnGroup
			
				rw ShowCheckbox("EnableSMS", 1, bEnableSms, obLanguage("ServAdmin","kEnableSMS"), "")
			
				
				OpenBtnGroup

				Call ButtonWithClass("SMSRegisty();",obLanguage("ServAdmin","kSMSRegistry"),obLanguage("ServAdmin","kSMSRegistry"),"","smsOptionsBtn")
				Call ButtonWithClass("openPrint();", obLanguage("ServAdmin","kSMSParams"),obLanguage("ServAdmin","kSMSParams"),"","smsOptionsBtn")


				CloseBtnGroup %>

			</form>






		<%End If

		ClosePanel

		If bPushNotificationsEnabled = 1 Then
			OpenPanelEx obLanguage("SchoolSettings","kPushSettings"), "PushSettings", "server-settings-accordion", True, "panel-info"%>
				<form name="PushSettings" class="form-horizontal" action="SaveOptions.asp" method="post">
					<%=WriteObligatoryTags()%>
					<%=WriteHiddenTags( Array("SavePushSettings", "1") )%>
					<%OpenBtnGroup
						ButtonSave "Save_PushSettings()", obLanguage("ServAdmin","kSaveSettings")
					CloseBtnGroup
					Call DrawInputRow("Ключ сервера", strPushServerKey, "PushServerKey", "text", 200, 200, "")
					Call DrawInputRow("Идентификатор отправителя", strPushSenderId, "PushSenderId", "text", 200, 200, "")%>
				</form><%
			ClosePanel
		End If
	
		OpenPanelEx obLanguage("ServAdmin","kMailSettings"), "mail_settings", "server-settings-accordion", True, "panel-info"%>

		<form name="MailSettings" class="form-horizontal" action="SaveOptions.asp" method="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags( Array("SaveMailSettings", "1") )%><%

			OpenBtnGroup
			ButtonSave "Save_Mail_Settings()", obLanguage("ServAdmin","kSaveSettings")
			Button "ShowFormTestEMail()", obLanguage("ServAdmin","kBtnTesting"), obLanguage("ServAdmin","kMailTesting"), ""
			CloseBtnGroup

			Call DrawInputRow(obLanguage("ServAdmin","kOutMailServerAddress"), strMailHost, "NSMailHost", "text", 40, kIPAddressMaxLen, "")
			Call DrawInputRowExt(obLanguage("ServAdmin","kPort"), nMailHostPort, "NSMailHostPort", "text", "", 5, "", "")
			Call DrawCheckBox(obLanguage("ServAdmin","kMailUseSsl"), "NSMailHostUseSsl", "1", bMailUseSsl, "")
			Call DrawInputRow(obLanguage("ServAdmin","kMailFrom"), strMailFrom, "NSMailFrom", "text", 40, kIPAddressMaxLen, "")
			Call DrawCheckBox(obLanguage("ServAdmin","kMailServerRequiresAuth"), "SMTPServerRequiresAuth", "1", bNeedMailAuth, "onoffauth();")%>
			<div <%=IIF(bNeedMailAuth,"","style='display:none'")%> id="MailAuthUserRow"><%
				Call DrawInputRow(obLanguage("ServAdmin","kLoginName"), strMailUser, "NSMailUser", "text", 100, 100, "")%>
			</div>
			<div <%=IIF(bNeedMailAuth,"","style='display:none'")%> id="MailAuthPasswordRow"><%
				Call DrawInputRow(obLanguage("Common","kPassword"), strMailUserPass, "NSMailPassword", "password", 100, 100, "")%>
			</div><%
			Call DrawInputRow(obLanguage("ServAdmin","kServAdminMail"), strServAdminMail, "NSServAdminMail", "text", 40, kMaxLengthEmail, "")%>
		</form><%

		ClosePanel

		If Not bEmptyGlobalYears Then
			OpenPanelEx obLanguage("ServAdmin","kMovePeriods"), "move_periods", "server-settings-accordion", True, "panel-info"%>

			<form name="MovePeriods" class="form-horizontal" action="SaveMovePeriods.asp" method="post">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags( Array("Permit", "1") )%><%
				OpenBtnGroup
				ButtonSave "SaveMovePeriodPermission();", obLanguage("ServAdmin","kSaveMovePeriodPermission")
				ButtonEdit "EditMovePeriodsInfo();", obLanguage("ServAdmin","kEditMovePeriodsInfo")
				CloseBtnGroup

				ScriptName = Request.ServerVariables("SCRIPT_NAME")
				Call DrawSelectInfoRow( obLanguage("Common","kSchoolYear"), strGlobalYearID, "CMNYEAR", objGlobalYears, "GLOBALYEARID", "SCHOOLYEARNAME", Null, "OnChangeSelect('MovePeriods', '" & ScriptName & "');")
				Call DrawMovePeriods()%>
			</form><%

			ClosePanel
		End If
	
		OpenPanelEx obLanguage("ServAdmin","kTitleSecuritySettings"), "title_security_settings", "server-settings-accordion", True, "panel-info"

		OpenBtnGroup
		Call Button("changePasswordCtrl.changePassword()", obLanguage("Common","kChangePassword"), obLanguage("Common","kChangePassword"), "")
		CloseBtnGroup%>

		<form name="SecuritySettings" class="form-horizontal" action="SaveOptions.asp" method="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags( Array("SaveSecuritySettings", "1") )%>
			<table class="table table-bordered table-condensed">
				<tr>
					<td><%=ShowCheckbox("BlockAccess", 1, bBlockAccess, obLanguage("ServAdmin","kBlockUsersFromInsecureNetworks"), "")%></td>
					<td id="DFNW"><%
						If bBlockAccess Then
							Call ImageButton("DefineNetwork()", obLanguage("ServAdmin","kDefineNetworkSecurity"), "glyphicon glyphicon-wrench")
						Else
							Call DisabledButton("DefineNetwork()","", obLanguage("ServAdmin","kDefineNetworkSecurity"), "glyphicon glyphicon-wrench")
						End If%>
					</td>
				</tr>
				<tr><td colspan="2"><%=ShowCheckbox("RestrictNumericPasswords", 1, bRestrictNumericPass, obLanguage("ServAdmin","kRestrictNumericPasswords"), "")%></td></tr>
			</table>

			<div style="padding-bottom:15px;">
				<label><%=obLanguage("ServAdmin", "kBlockTypesLogon")%></label>
				<div style="padding-left:20px;">
				<%
					rw ShowCheckbox("BlockByIP", 1, bBlockByIp, obLanguage("ServAdmin","kBlockByIPAddress"), "")
					rw ShowCheckbox("BlockByEducOrgAndLogin", 1, bBlockByEducOrgAndLogin, obLanguage("ServAdmin","kBlockByEducOrgAndLogin"), "")
				%>
				</div>
			</div><%

			OpenFormGroup obLanguage("ServAdmin","kMaxSessionIdleTime")%>
			<div class="input-group">
				<%Call DrawInput(strMaxSessionIdleTime, "NSMaxSessionIdleTime", "text", "", 100, 100, "")%>
			</div>
			<%CloseFormGroup

			OpenFormGroup obLanguage("ServAdmin","kMinLoginLength")%>
			<div class="input-group">
				<%Call DrawInput(nMinLoginLength, "NSMinLoginLength", "text", "", 100, 100, "")%>
			</div>
			<%CloseFormGroup

			OpenFormGroup obLanguage("ServAdmin","kMinPasswordLength")%>
			<div class="input-group">
				<%Call DrawInput(nMinPasswordLength, "NSMinPasswordLength", "text", "", 100, 100, "")%>
			</div>
			<%CloseFormGroup


			OpenBtnGroup
			ButtonSave "Save_Security_Settings();", obLanguage("Common","kSave")%>
			<%If bUseReadOnlyAccess Then
				Call Button("EditReadOnlyAccess();", obLanguage("ServAdmin","kDefineModeAccess"), obLanguage("ServAdmin","kDefineModeAccess"), "")
			End If
			CloseBtnGroup%>
		</form><%
			
		ClosePanel
		If MODULE_EM Then
			OpenPanelEx obLanguage("ServAdmin","kTitleIntegrationSettings"), "title_integration_settings", "server-settings-accordion", True, "panel-info"%>
			<form name="IntegrationSettings" class="form-horizontal" action="SaveOptions.asp" method="post">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags( Array("SaveIntegrationSettings", "1", "MODULE_StaffAttest", bMODULE_StaffAttest) )%><%
				OpenBtnGroup
				ButtonSave "Save_Integration_Settings()", obLanguage("ServAdmin","kSaveSettings")
				CloseBtnGroup
				OpenFormGroup obLanguage("ServAdmin","kEServicesUrl")%>
				<div class="input-group">
					<%Call DrawInput(strEServicesUrl, "NSEServicesUrl", "text", "", 100, 100, "")%>
					<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kEServicesUrl"))%>',form.elements['NSEServicesUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
				</div>
				<%CloseFormGroup

				OpenFormGroup obLanguage("ServAdmin","kEServicesExternalUrl")%>
				<div class="input-group">
					<%Call DrawInput(strEServicesExternalUrl, "NSEServicesExternalUrl", "text", "", 100, 100, "")%>
					<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kEServicesExternalUrl"))%>',form.elements['NSEServicesExternalUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
				</div>
				<%CloseFormGroup

				AddressServiceField "FiasAddressServiceUrl", "kFiasAddressServiceUrl", strFiasAddressServiceUrl, 10, "?fiasaoId=bb035cc3-1dc2-4627-9d25-a1bf2d4b936b"
				AddressServiceField "ExternalFiasAddressServiceUrl", "kExternalFiasAddressServiceUrl", strExternalFiasAddressServiceUrl, 10, "?fiasaoId=bb035cc3-1dc2-4627-9d25-a1bf2d4b936b"

				OpenFormGroup obLanguage("ServAdmin","kContingentSystem")%>
				<div class="input-group">
					<%Call DrawInput(strContingentUrl, "NSContingentUrl", "text", "", 100, 100, "")%>
					<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kContingentSystem"))%>',form.elements['NSContingentUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
				</div>
				<%CloseFormGroup
				OpenFormGroup obLanguage("ServAdmin","kNetCitySpoUrl")%>
				<div class="input-group">
					<%Call DrawInput(strNetCitySpoUrl, "NSNetCitySpoUrl", "text", "", 100, 100, "")%>
					<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kNetCitySpoUrl"))%>',form.elements['NSNetCitySpoUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
				</div>
				<%CloseFormGroup
				If obContext.ServerSettings.SystemSettings.ModuleRegion Then
					OpenFormGroup obLanguage("ServAdmin","kRegionUrl")%>
					<div class="input-group">
						<%Call DrawInput(strRegionUrl, "NSRegionUrl", "text", "", 100, 100, "")%>
						<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kRegionUrl"))%>',form.elements['NSRegionUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin","kClientIdForSync")
					%><div class="input-group">
						<%Call DrawInput(strClientIdForSync, "NSClientIdForSync", "text", "", 100, 100, "")%>
					</div>
					<%CloseFormGroup
				End If
				If Module_QA_Available() Then
					OpenFormGroup obLanguage("ServAdmin","kMsokoUrl")%>
					<div class="input-group">
						<%Call DrawInput(strMsokoUrl, "NSMsokoUrl", "text", "", 100, 100, "")%>
						<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kMsokoUrl"))%>',form.elements['NSMsokoUrl'].value, true, 10)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
					</div>
					<%CloseFormGroup
				End If
				OpenFormGroup obLanguage("ServAdmin","kYaCounterCode")%>
				<div class="input-group">
					<%Call DrawInput(strYaCounterCode, "NSYaCounterCode", "text", "", 100, 100, "")%>
				</div>
				<%CloseFormGroup
				If obContext.ServerSettings.SystemSettings.MODULE_StaffAttest Then
					OpenFormGroup obLanguage("ServAdmin","kStaffAttestUrl")%>
					<div class="input-group">
						<%Call DrawInput(strStaffAttestUrl, "NSStaffAttestUrl", "text", "", 100, 100, "")%>
						<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kStaffAttestUrl"))%>',form.elements['NSStaffAttestUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kStaffAttestLogin")
					%><div class="input-group">
						<%Call DrawInput(strStaffAttestLogin, "NSStaffAttestLogin", "text", "", 100, 100, "")%>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kStaffAttestSecret")
					%><div class="input-group">
						<%Call DrawInput(strStaffAttestSecret, "NSStaffAttestSecret", "text", "", 100, 100, "")%>
					</div>
					<%CloseFormGroup
				End If

				If obContext.ServerSettings.SystemSettings.IntegrationPFDOType > 0 Then
					OpenFormGroup obLanguage("ServAdmin","kEducPortalUrl")%>
						<div class="input-group">
							<%Call DrawInput(strEducPortalUrl, "NSEducPortalUrl", "text", "", 100, 100, "")%>
							<span class="input-group-btn">
								<button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kEducPortalUrl"))%>',form.elements['NSEducPortalUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%>
								</button>
							</span>
						</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin","kEducPortalApiUrl")%>
						<div class="input-group">
							<%Call DrawInput(strEducPortalApiUrl, "NSEducPortalApiUrl", "text", "", 100, 100, "")%>
							<span class="input-group-btn">
								<button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kEducPortalApiUrl"))%>',form.elements['NSEducPortalApiUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%>
								</button>
							</span>
						</div>
					<%CloseFormGroup
				End If

				If obContext.ServerSettings.SystemSettings.SoloIntegration Then
					OpenFormGroup obLanguage("ServAdmin", "kSoloEsaClientId")
					%><div class="input-group">
						<%Call DrawInput(strSoloEsaClientId, "NSSoloEsaClientId", "text", "", 100, 100, "")%>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kSoloEsaClientSecret")
					%><div class="input-group">
						<%Call DrawInput(strSoloEsaClientSecret, "NSSoloEsaClientSecret", "text", "", 500, 500, "")%>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kSoloEsaUrl")
					%><div class="input-group">
						<%Call DrawInput(strSoloEsaUrl, "NSSoloEsaUrl", "text", "", 300, 300, "")%>
						<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kSoloEsaUrl"))%>',form.elements['NSSoloEsaUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kSoloRbooApiUrl")
					%><div class="input-group">
						<%Call DrawInput(strSoloRbooApiUrl, "NSSoloRbooApiUrl", "text", "", 300, 300, "")%>
						<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kSoloRbooApiUrl"))%>',form.elements['NSSoloRbooApiUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kSoloRefsApiUrl")
					%><div class="input-group">
						<%Call DrawInput(strSoloRefsApiUrl, "NSSoloRefsApiUrl", "text", "", 300, 300, "")%>
						<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kSoloRefsApiUrl"))%>',form.elements['NSSoloRefsApiUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kSoloEnrollmentUrl")
					%><div class="input-group">
						<%Call DrawInput(strSoloEnrollmentUrl, "NSSoloEnrollmentUrl", "text", "", 300, 300, "")%>
						<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kSoloEnrollmentUrl"))%>',form.elements['NSSoloEnrollmentUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kSoloSchoolEnrollmentUrl")
					%><div class="input-group">
						<%Call DrawInput(strSoloSchoolEnrollmentUrl, "NSSoloSchoolEnrollmentUrl", "text", "", 300, 300, "")%>
						<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kSoloSchoolEnrollmentUrl"))%>',form.elements['NSSoloSchoolEnrollmentUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
					</div>
					<%CloseFormGroup					
				End If

				If obContext.ServerSettings.SystemSettings.IntegrationPFDOType = 3 Then
					OpenFormGroup obLanguage("ServAdmin", "kPFDOClientId")
					%><div class="input-group">
						<%Call DrawInput(strPFDOClientId, "NSPFDOClientId", "text", "", 100, 100, "")%>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kPFDOClientSecret")
					%><div class="input-group">
						<%Call DrawInput(strPFDOClientSecret, "NSPFDOClientSecret", "text", "", 100, 100, "")%>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kPFDOUserName")
					%><div class="input-group">
						<%Call DrawInput(strPFDOUserName, "NSPFDOUserName", "text", "", 100, 100, "")%>
					</div>
					<%CloseFormGroup
					OpenFormGroup obLanguage("ServAdmin", "kPFDOPassword")
					%><div class="input-group">
						<%Call DrawInput(strPFDOPassword, "NSPFDOPassword", "text", "", 100, 100, "")%>
					</div>
					<%CloseFormGroup
				End If
				OpenFormGroup obLanguage("ServAdmin", "kIdentityServerUrl")%>
					<div class="input-group">
						<%Call DrawInput(strIdentityServerUrl, "NSIdentityServerUrl", "text", "", 300, 300, "")%>
						<span class="input-group-btn"><button class="btn btn-default" onclick="checkConnection('<%=DB2HTML(obLanguage("ServAdmin","kIdentityServerUrl"))%>',form.elements['NSIdentityServerUrl'].value, true, 0)" type="button"><%=obLanguage("ServAdmin", "kCheckConnection")%></button></span>
					</div>
				<%CloseFormGroup
				If obContext.ServerSettings.SystemSettings.ModuleInlearnoIntegration Then
					OpenFormGroup obLanguage("ServAdmin", "kRabbitMqConnection")%>
						<div class="input-group">
							<%Call DrawInput(strRabbitMqConnection, "NSRabbitMqConnection", "text", "", 300, 300, "")%>
						</div>
					<%CloseFormGroup
				End If
			%></form><%
			ClosePanel
		End If

		OpenPanelEx obLanguage("ServAdmin","kTitleUserAccountsSettings"), "title_useraccounts_settings", "server-settings-accordion", True, "panel-info"%>
		<div class="row">
			<div class="col-md-12">
				<%
				OpenBtnGroup
				ButtonSave "Save_User_Accounts_Settings();", obLanguage("Common","kSave")
				CloseBtnGroup
				%>
			</div>
		</div>
		<hr />
		<form name="UserAccountsSettings" class="form-horizontal" action="SaveOptions.asp" method="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags( Array("SaveUserAccountsSettings", "1") )%>

			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("BlockSimilars", 1, bBlockSimilars, obLanguage("ServAdmin","kBlockSimilars"), obLanguage("ServAdmin","kBlockSimilarsYesText"), obLanguage("ServAdmin","kBlockSimilarsNoText"), "")%>
				</div>
			</div><%
			If obContext.ServerSettings.SystemSettings.ModuleEServices Then%>
				<div class="row">
					<div class="col-md-12">
						<%Call ShowRadioYesNo("MoveInSourceEServiceOnly", 1, bMoveInSourceEServiceOnly, obLanguage("ServAdmin","kMoveInSourceEServiceOnly"), obLanguage("ServAdmin","kEServiceOnlyYesText"), obLanguage("ServAdmin","kEServiceOnlyNoText"), "")%>
					</div>
				</div><%
			End If%>
			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("BlockFastInput", 1, bBlockFastInput, obLanguage("ServAdmin","kBlockFastInput"), "", "", "")%>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("QueueImportMode", 1, bQueueImportMode, obLanguage("ServAdmin","kOnOrderImportMode"), "", "", "")%>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("RequireIdentityData", 1, bRequireIdentityData, obLanguage("ServAdmin","kRequireIdentityData"), obLanguage("ServAdmin","kRequireIdentityDataYes"), "", "")%>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("ImportStaffFromOtherOrgs", 1, bImportStaffFromOtherOrgs, obLanguage("ServAdmin","kImportStaffFromOtherOrgs"), obLanguage("ServAdmin","kImportStaffFromOtherOrgsYes"), "", "")%>
				</div>
			</div>
		</form><%
		ClosePanel

		OpenPanelEx obLanguage("ServAdmin","kTitleUserAuthorizationSettings"), "title_userauthorization_settings", "server-settings-accordion", True, "panel-info"%>
		<div class="row">
			<div class="col-md-12">
				<%
				OpenBtnGroup
				ButtonSave "Save_User_Authorization_Settings();", obLanguage("Common","kSave")
				CloseBtnGroup
				%>
			</div>
		</div>
		<hr />
		<form name="UserAuthorizationSettings" class="form-horizontal" action="SaveOptions.asp" method="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags( Array("SaveUserAuthorizationSettings", "1") )%>

			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("EsiaAuth", 1, bEsiaAuth, obLanguage("ServAdmin","kEsiaAuth"), "", "", "")%>
				</div>
			</div>

			<div style="padding-bottom:15px;">
				<label><%=obLanguage("ServAdmin", "kEsiaAuthProtocol")%></label>
				<div style="padding-left:20px;">
				<%
					DrawSimpleRadioList "EsiaAuthProtocol", Array(1, obLanguage("ServAdmin", "kSaml"), 2, obLanguage("ServAdmin","kOAuth"), 3, obLanguage("ServAdmin","kEsiaIrtechIdentityAuth")), CStr(IIf(bEsiaSaml, 1, IIf(bEsiaOAuth, 2, 3))), "changeEsiaAuthProtocol();"
				%>
				</div>
			</div>

			<%
				Call DrawInputRow(obLanguage("ServAdmin","kEsiaOAuthServerUrl"), strEsiaOAuthServerUrl, "EsiaOAuthServerUrl", "text", 400, 400, "")
				Call DrawInputRow(obLanguage("ServAdmin","kEsiaOAuthICMnemonics"), strEsiaOAuthICMnemonics, "EsiaOAuthICMnemonics", "text", 400, 400, "")
				Call DrawInputRow(obLanguage("ServAdmin","kEsiaOAuthCertificatePass"), strEsiaOAuthCertificatePass, "EsiaOAuthCertificatePass", "text", 400, 400, "")
			%>

			<%Call DrawInputRow(obLanguage("ServAdmin","kEsiaLoginPage"), strEsiaLoginPage, "EsiaLoginPage", "text", 400, 400, "")
			Call DrawInputRow(obLanguage("ServAdmin","kEsiaLogoutUserPage"), strEsiaLogoutUserPage, "EsiaLogoutUserPage", "text", 400, 400, "")
			Call DrawInputRow(obLanguage("ServAdmin","kEsiaLinkUserPage"), strEsiaLinkUserPage, "EsiaLinkUserPage", "text", 400, 400, "")%>

			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("IrtechAuth", 1, bIrtechAuth, IIf(obContext.ServerSettings.SystemSettings.SoloIntegration, obLanguage("ServAdmin","kSoloIrtechAuth"), obLanguage("ServAdmin","kIrtechAuth")), "", "", "")%>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("EsiaButtonAuth", 1, bEsiaButtonAuth, obLanguage("ServAdmin","kEsiaButtonAuth"), "", "", "")%>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("EsiaMainAuth", 1, bEsiaMainAuth, obLanguage("ServAdmin","kEsiaMainAuth"), "", "", "")%>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("WindowsAuth", 1, bWindowsAuth, obLanguage("ServAdmin","kWindowsAuth"), "", "", "")%>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<%Call ShowRadioYesNo("BlockEsiaUserLogin", 1, bBlockEsiaUserLogin, obLanguage("ServAdmin","kBlockEsiaUserLogin"), "", "", "")%>
				</div>
			</div>

			<div style="padding-bottom:15px;">
				<label><%=obLanguage("ServAdmin", "kRequireEsiaAdminLogin")%></label>
				<div style="padding-left:20px;">
				<%
					DrawSimpleRadioList "RequireEsiaAdminLogin", Array(kRequireLoginEachEntrance, obLanguage("ServAdmin","kRequireEsiaAdminLoginEachEntrance"), kRequireLoginAfterChangePass, obLanguage("ServAdmin","kRequireEsiaAdminLoginAfterChangePass"), kRequireEsiaAdminLoginNever, obLanguage("ServAdmin","kRequireEsiaAdminLoginNever")), strRequireEsiaAdminLoginInfo, null
				%>
				</div>
			</div>

			<%
				' Требование ввода логина/пароля при первом входе через ЕСИА администраторов
				Call DrawCheckBox(obLanguage("ServAdmin","kRequireEsiaAdminLoginFirstEntrance"), "RequireEsiaAdminLoginFirstEntrance", "1", bRequireEsiaAdminLoginFirstEntrance, "")
			%>

			<%
				Call DrawCheckBox(obLanguage("ServAdmin","kEnableNotice"), "EnableNotice", "1", bEnableNotice, "enableNotice();")
				Call DrawInputRow(obLanguage("ServAdmin","kNoticeTitle"), strNoticeTitle, "NoticeTitle", "text", 100, 100, "")
				Call DrawInputRow(obLanguage("ServAdmin","kNotice"), strNoticeDisplayText, "NoticeDisplayText", "area", null, 3, "")

				Call DrawDateIntervalRowEx(obLanguage("ServAdmin","kNoticeDateInterval"), "ENSDT", dtNoticeStartDate, "ENEDT", dtNoticeEndDate)

				' Разрешенные адреса возврата
				Call DrawInputRow(obLanguage("ServAdmin","kAllowedReturnUrl"), strAllowedReturnUrl, "AllowedReturnUrl", "text", 100, 500, "")
				Call DrawInputRow(obLanguage("ServAdmin","kOpenAuthPublicKey"), strOpenAuthPublicKey, "OpenAuthPublicKey", "area", null, 5, "")
			%>

		</form><%
		ClosePanel

		OpenPanelEx obLanguage("ServAdmin","kTitlePopUpWindowOnLoginScreenSettings"), "title_popupwindowonloginscreen_settings", "server-settings-accordion", True, "panel-info"%>
		<div class="row">
			<div class="col-md-12">
				<%
				OpenBtnGroup
				ButtonSave "Save_Pop_Up_Window_On_Login_Screen_Settings();", obLanguage("Common","kSave")
				CloseBtnGroup
				%>
			</div>
		</div>
		<hr />
		<form name="PopUpWindowOnLoginScreenSettings" class="form-horizontal" action="SaveOptions.asp" method="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags( Array("SavePopUpWindowOnLoginScreenSettings", "1") )%>
			
			<%
				Call DrawCheckBox(obLanguage("ServAdmin","kEnableNoticePopUpWindow"), "EnablePopup", "1", bEnablePopUp, "enablePopUp();")
				Call DrawInputRow(obLanguage("ServAdmin","kNoticeDisplayText"), strPopupDisplayText, "PopupDisplayText", "area", null, 3, "")
				Call DrawInputRow(obLanguage("ServAdmin","kNoticeButtonText"), strPopupButtonText, "PopupButtonText", "text", 100, 100, "")
				Call DrawDateIntervalRowEx(obLanguage("ServAdmin","kPopUpDateInterval"), "PSDT", dtPopupStartDate, "PEDT", dtPopupEndDate)
			%>

		</form><%
		ClosePanel%>

		<!--Сведения об образовательных организациях-->

		<%OpenPanelEx obLanguage("ServAdmin","kReasonForChangeSchoolCardSavedSuccessInfo"), "reason_for_cahnges_settings", "server-settings-accordion", True, "panel-info"%>
		<div class="row">
			<div class="col-md-12">
				<%
				OpenBtnGroup
				ButtonSave "Save_Reason_For_ChangeSchoolCard();", obLanguage("Common","kSave")
				CloseBtnGroup
				%>
			</div>
		</div>
		<hr />
		<form name="ReasonForChangeSchoolCardSettings" class="form-horizontal" action="SaveOptions.asp" method="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags( Array("SaveReasonForChangeSchoolCardSettings", "1") )%>
			
			<%
				'Требовать указания основания для внесения изменений в карточку ОО
				Call DrawCheckBox(obLanguage("ServAdmin", "kReasonForChangeSchoolCard"), "ReasonForChangeSchoolCard", "1", bReasonForChangeSchoolCard, "")
				
				'может ли УО изменять карточку ОО
				Call DrawCheckBox(obLanguage("ServAdmin", "kEM_MayEditExtraSchoolInfos"), "EM_MayEditExtraSchoolInfo", "1", EM_MayEditExtraSchoolInfo, "")

			%>

		</form><% 
		ClosePanel%>
		
		<!-- Настройки файловых вложений -->

		<%OpenPanelEx obLanguage("ServAdmin","kFileAttachmentsSettings"), "file_attachments_settings", "server-settings-accordion", True, "panel-info"%>
		<div class="row">
			<div class="col-md-12">
				<%
				OpenBtnGroup
				ButtonSave "Save_File_Attachments_Settings();", obLanguage("Common","kSave")
				CloseBtnGroup
		%>
			</div>
		</div>
		<hr />
		<form name="FileAttachmentsSettings" class="form-horizontal" action="SaveOptions.asp" method="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags( Array("SaveFileAttachmentsSettings", "1") )%>

			<div style="padding-bottom:15px;">
				<label><%=obLanguage("ServAdmin", "kFileStorageType")%></label>
				<div style="padding-left:20px;">
				<%
					DrawSimpleRadioList "FileStorageType", Array(1, obLanguage("ServAdmin", "kFileInternal"), 2, obLanguage("ServAdmin","kFileStorage")), CStr(IIf(bFileStorage, 2, 1)), null
				%>
				</div>
			</div>

			<%
				Call DrawInputRow(obLanguage("ServAdmin","kFileStorageApiAddress"), strFileStorageApiAddress, "FileStorageApiAddress", "text", 400, 400, "")
			%>

		</form><% 
		ClosePanel%>

	</div><%
	Call MakeTestEMailDialogForm()
End Sub

Sub WritePeriodRow(strPeriodName, strSelectedClass, PeriodName, nPeriodID)%>
	<tr>
		<th><%=strPeriodName%></th>
		<td <%=strSelectedClass%>><%=DB2HTML(PeriodName)%></td>
		<td class="text-center <%=Mid(strSelectedClass,9,10)%>"><input type="radio" name="PeriodID" value="<%=nPeriodID%>" <%If strSelectedClass <> "" Then rw "checked"%> OnClick="dataChanged()"></td>
	</tr><%
End Sub

Sub DrawMovePeriods()
	Dim nStatus, nCurStatus
	Dim dtStart, dtEnd
	Dim nPeriodID, strPeriodName
	Dim selectedRowClass, strSelectedClass

	selectedRowClass = " class=""bg-success"""
	nStatus = 0
	While Not objMovePeriods.EOF
		nStatus = nStatus + GetSafeLng(objMovePeriods("STATUS"), Null)
		objMovePeriods.MoveNext
	WEnd
	objMovePeriods.MoveFirst
	strSelectedClass = ""
	%>
	<div class="row">
		<div class="col-lg-8">
			<table class="table table-bordered table-condensed">
				<tr>
					<th><%=obLanguage("ServAdmin","kPeriodName")%></th>
					<th><%=obLanguage("ServAdmin","kPeriodScope")%></th>
					<th><%=obLanguage("ServAdmin","kPeriodPermission")%></th>
				</tr><%

				If nStatus = kMovePeriods_Max Then
					strSelectedClass = selectedRowClass
					selectedRowClass = ""
				End If
				Call WritePeriodRow(obLanguage("ServAdmin","kAllPeriodsPermit"), strSelectedClass, "", -1)

				strSelectedClass = IIf(nStatus = 0, selectedRowClass, "")
				Call WritePeriodRow(obLanguage("ServAdmin","kAllPeriodsForbid"), strSelectedClass, "", 0)
				While Not objMovePeriods.EOF
					nPeriodID = GetSafeLng(objMovePeriods("PERIODID"), Null)
					nCurStatus = GetSafeLng(objMovePeriods("STATUS"), Null)
					dtStart = objMovePeriods("STARTDATE")
					dtEnd = objMovePeriods("ENDDATE")
					strSelectedClass = IIf(nCurStatus = 1, selectedRowClass, "")

					strPeriodName = CStr(nPeriodID) & " " & obLanguage("Common","kPeriod")
					If nPeriodID = 1 Then
						strPeriodName = strPeriodName & " (" & obLanguage("ServAdmin","kPeriod_Summer") & ")"
					End If
					Call WritePeriodRow(strPeriodName, strSelectedClass, (FormatDateTime(dtStart,vbLongDate) & " - " & FormatDateTime(dtEnd,vbLongDate)), nPeriodID)

					objMovePeriods.MoveNext
				WEnd%>
			</table>
		</div>
	</div><%
End Sub
%>
