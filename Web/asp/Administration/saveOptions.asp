<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SMS_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kSMSRegDataMaxLen = 100
Const kServerKeyMaxLen = 4

Dim objServerSettingsComponent
Dim bSMSReg, bSaveMailSettings, bSMSSettings
Dim objSchoolsSMSParam, bWebGate
'Dim strSchoolID, strUniSchoolID, strServerID, strXMLID
Dim strIPAddress, strProxyIPAddress, strServerKey, strFullURL, strCurSchoolName, strAuxAddresses
Dim objCmdURLReg, dtCurDate, strResult
Dim strXML, arrActions
Dim objCmdSMSReg, objRsSMSReg, objCmdSMSRegUpdate
Dim i
Dim nSuccess, nFailed, nAll, strMessage
Dim strErrCodes
Dim strRegType, strRegData, bInvalidFormat
Dim strRegID, strRegIDs
Dim bNeedMailAuth, strMailHost, nMailHostPort, strMailUser, strMailUserPass, strMailFrom, bMailUseSsl, strServAdminMail
Dim transaction
Dim strOldNum, strNewNum, arrNums
Dim saveResult
Dim bSaveIntegrationSettings
Dim strEServicesUrl, strEServicesExternalUrl, strContingentUrl, strNetCitySpoUrl, strRegionUrl, strMsokoUrl, strClientIdForSync, strYaCounterCode, strFiasAddressServiceUrl, strExternalFiasAddressServiceUrl
Dim bSaveUserAccountsSettings
Dim bBlockSimilars, bBlockFastInput, bQueueImportMode, bRequireIdentityData, bMoveInSourceEServiceOnly, bImportStaffFromOtherOrgs
Dim bSaveUserAuthorizationSettings
Dim bEsiaAuth, bIrtechAuth, strEsiaLoginPage, strEsiaLogoutUserPage, strEsiaLinkUserPage, bEsiaButtonAuth, bEsiaMainAuth, bWindowsAuth
' настройки авторизации по ЕСИА
Dim bEsiaOAuth, bEsiaSaml, bEsiaIrtechIdentityAuth, strEsiaOAuthICMnemonics, strEsiaOAuthCertificatePass, strEsiaOAuthServerUrl

Dim bBlockEsiaUserLogin, bRequireEsiaAdminLoginEachEntrance, bRequireEsiaAdminLoginAfterChangePass, bRequireEsiaAdminLoginNever, bRequireEsiaAdminLoginFirstEntrance
Dim bEnableNotice, strNoticeTitle, strNoticeDisplayText, strNoticeButtonText, dtNoticeStartDate, dtNoticeEndDate, strAllowedReturnUrl, strOpenAuthPublicKey
' Настройки безопасности
Dim bSaveSecuritySettings, bBlockAccess, bRestrictNumericPass, bBlockByIp, bBlockByEducOrgAndLogin, strMaxSessionIdleTime, strMinLoginLength, strMinPasswordLength
Dim strStaffAttestUrl, strStaffAttestLogin, strStaffAttestSecret, strEducPortalUrl, strEducPortalApiUrl, strPFDOClientId, strPFDOClientSecret, strPFDOUserName, strPFDOPassword
Dim strSoloEsaClientId, strSoloEsaClientSecret, strSoloEsaUrl, strSoloRbooApiUrl, strSoloRefsApiUrl, strIdentityServerUrl, strSoloEnrollmentUrl, strSoloSchoolEnrollmentUrl, strRabbitMqConnection

Dim bPopUpWindowOnLoginScreenSettings
Dim bEnablePopUp, strPopUpDisplayText, strPopUpButtonText, dtPopUpStartDate, dtPopUpEndDate

Dim bReasonForCheangeSchoolCardFlag
Dim bReasonForChangeSchoolCardVal
Dim bEM_MayEditExtraSchoolInfoVal
Dim bSaveSmsSettings
Dim objLocalSettings
Dim bSavePushSettings

' Настройки файловых вложений
Dim bSaveFileAttachmentsSettings
Dim bInternal, bFileStorage, fileStorageType, strFileStorageApiAddress

On Error resume next

If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")
Set objServerSettingsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IServerSettingsComponent")

Set objLocalSettings = obContext.LocalSettings




bSMSReg = (CStr(Request("SMSReg")) = "1")
bSMSSettings = (CStr(Request("SMSSettings")) = "1")

If (IsEmpty(Request("SaveMailSettings"))) Then
	bSaveMailSettings = false
Else
	bSaveMailSettings = (CStr(Request("SaveMailSettings")) = "1")
End IF

If (IsEmpty(Request("SaveSmsSettings"))) Then
	bSaveSmsSettings = false
Else
	bSaveSmsSettings = (CStr(Request("SaveSmsSettings")) = "1")
End IF

If (IsEmpty(Request("SavePushSettings"))) Then
	bSavePushSettings = false
Else
	bSavePushSettings = (CStr(Request("SavePushSettings")) = "1")
End IF

If (IsEmpty(Request("SaveIntegrationSettings"))) Then
	bSaveIntegrationSettings = false
Else
	bSaveIntegrationSettings = (CStr(Request("SaveIntegrationSettings")) = "1")
End IF

If (IsEmpty(Request("SaveUserAccountsSettings"))) Then
	bSaveUserAccountsSettings = false
Else
	bSaveUserAccountsSettings = (CStr(Request("SaveUserAccountsSettings")) = "1")
End IF


If (IsEmpty(Request("SaveReasonForChangeSchoolCardSettings"))) Then
	bReasonForCheangeSchoolCardFlag = false
Else
	bReasonForCheangeSchoolCardFlag = (CStr(Request("SaveReasonForChangeSchoolCardSettings")) = "1")
End IF

If (IsEmpty(Request("SaveUserAuthorizationSettings"))) Then
	bSaveUserAuthorizationSettings = false
Else
	bSaveUserAuthorizationSettings = (CStr(Request("SaveUserAuthorizationSettings")) = "1")
End IF

If (IsEmpty(Request("SavePopUpWindowOnLoginScreenSettings"))) Then
	bPopUpWindowOnLoginScreenSettings = false
Else
	bPopUpWindowOnLoginScreenSettings = (CStr(Request("SavePopUpWindowOnLoginScreenSettings")) = "1")
End If

If (IsEmpty(Request("SaveSecuritySettings"))) Then
	bSaveSecuritySettings = false
Else
	bSaveSecuritySettings = (CStr(Request("SaveSecuritySettings")) = "1")
End IF

If (IsEmpty(Request("SaveFileAttachmentsSettings"))) Then
	bSaveFileAttachmentsSettings = false
Else
	bSaveFileAttachmentsSettings = (CStr(Request("SaveFileAttachmentsSettings")) = "1")
End If

If bSaveMailSettings Then
	strMailHost = GetSafeStr(Request("NSMailHost"),-1,"")
	nMailHostPort = GetSafeLng(Request("NSMailHostPort"),25)
	strMailFrom = GetSafeStr(Request("NSMailFrom"),-1,"")
	strServAdminMail = GetSafeStr(Request("NSServAdminMail"),-1,"")
	bMailUseSsl = (Request("NSMailHostUseSsl") = 1)
	If (Request("SMTPServerRequiresAuth") = "1") Then
		strMailUser = GetSafeStr(Request("NSMailUser"),-1,"")
		strMailUserPass = GetSafeStr(Request("NSMailPassword"),-1,"")
	Else
		strMailUser = ""
		strMailUserPass = ""
	End If

	Set saveResult = objServerSettingsComponent.SaveServerMailSettings(strMailHost, nMailHostPort, bMailUseSsl, strMailUser, strMailUserPass, strMailFrom, strServAdminMail)
	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If

	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kMailSettingsWasSaved")), False, 0)


ElseIf bSaveSmsSettings Then

	Dim benableSms 
	benableSms = (Request("EnableSMS") = 1)

	Set saveResult = objServerSettingsComponent.SaveSmsSettings(benableSms)

	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If

	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","SmsSettingsSaved")), False, 0)

ElseIf bSavePushSettings Then

	Dim strPushServerKey, strPushSenderId
	strPushServerKey = GetSafeStr(Request("PushServerKey"), -1, "")
	strPushSenderId = GetSafeStr(Request("PushSenderId"), -1, "")

	Set saveResult = objServerSettingsComponent.SavePushSettings(strPushServerKey, strPushSenderId)

	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If

	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","PushSettingsSaved")), False, 0)
	

ElseIf bReasonForCheangeSchoolCardFlag Then

	bReasonForChangeSchoolCardVal = (Request("ReasonForChangeSchoolCard") = 1)
	bEM_MayEditExtraSchoolInfoVal = (Request("EM_MayEditExtraSchoolInfo") = 1)
	
	Set saveResult = objServerSettingsComponent.SaveSchoolInfoSettings(bReasonForChangeSchoolCardVal, bEM_MayEditExtraSchoolInfoVal)
	
	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If
	
	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kSchoolSettingsSaved")), False, 0)

ElseIf bSaveIntegrationSettings Then
	strEServicesUrl = GetSafeStr(Request("NSEServicesUrl"), -1, "")
	strEServicesExternalUrl = GetSafeStr(Request("NSEServicesExternalUrl"), -1, "")
	strFiasAddressServiceUrl = GetSafeStr(Request("FiasAddressServiceUrl"), -1, "")
	strExternalFiasAddressServiceUrl = GetSafeStr(Request("ExternalFiasAddressServiceUrl"), -1, "")
	strContingentUrl = GetSafeStr(Request("NSContingentUrl"), -1, "")
	strNetCitySpoUrl = GetSafeStr(Request("NSNetCitySpoUrl"), -1, "")
	strClientIdForSync = GetSafeStr(Request("NSClientIdForSync"), -1, "")
	strYaCounterCode = GetSafeStr(Request("NSYaCounterCode"), -1, "")
	If Request("NSRegionUrl").Count > 0 Then
		strRegionUrl = GetSafeStr(Request("NSRegionUrl"), -1, "")
	Else
		strRegionUrl = "_empty_"
	End If
	If Request("NSMsokoUrl").Count > 0 Then
		strMsokoUrl = GetSafeStr(Request("NSMsokoUrl"), -1, "")
	Else
		strMsokoUrl = "_empty_"
	End If
	strStaffAttestUrl = GetSafeStr(Request("NSStaffAttestUrl"), -1, "")

	If Request("NSEducPortalUrl").Count > 0 Then
		strEducPortalUrl = GetSafeStr(Request("NSEducPortalUrl"), -1, "")
	Else
		strEducPortalUrl = "_empty_"
	End If

	If Request("NSEducPortalApiUrl").Count > 0 Then
		strEducPortalApiUrl = GetSafeStr(Request("NSEducPortalApiUrl"), -1, "")
	Else
		strEducPortalApiUrl = "_empty_"
	End If

	strPFDOClientId = GetSafeStr(Request("NSPFDOClientId"), -1, "")
	strPFDOClientSecret = GetSafeStr(Request("NSPFDOClientSecret"), -1, "")
	strPFDOUserName = GetSafeStr(Request("NSPFDOUserName"), -1, "")
	strPFDOPassword = GetSafeStr(Request("NSPFDOPassword"), -1, "")

	strSoloEsaClientId = GetSafeStr(Request("NSSoloEsaClientId"), -1, "")
	strSoloEsaClientSecret = GetSafeStr(Request("NSSoloEsaClientSecret"), -1, "")
	strSoloEsaUrl = GetSafeStr(Request("NSSoloEsaUrl"), -1, "")
	strSoloRbooApiUrl = GetSafeStr(Request("NSSoloRbooApiUrl"), -1, "")
	strSoloRefsApiUrl = GetSafeStr(Request("NSSoloRefsApiUrl"), -1, "")
	strSoloEnrollmentUrl = GetSafeStr(Request("NSSoloEnrollmentUrl"), -1, "")
	strSoloSchoolEnrollmentUrl = GetSafeStr(Request("NSSoloSchoolEnrollmentUrl"), -1, "")
	strIdentityServerUrl = GetSafeStr(Request("NSIdentityServerUrl"), -1, "")
	strRabbitMqConnection = GetSafeStr(Request("NSRabbitMqConnection"), -1, "")
	
	strStaffAttestLogin = GetSafeStr(Request("NSStaffAttestLogin"), -1, "")
	strStaffAttestSecret = GetSafeStr(Request("NSStaffAttestSecret"), -1, "")
	Set saveResult = objServerSettingsComponent.SaveIntegrationSettings(strEServicesUrl, strEServicesExternalUrl, strContingentUrl, strNetCitySpoUrl, strRegionUrl, strMsokoUrl, strClientIdForSync, strYaCounterCode, strStaffAttestUrl, strStaffAttestLogin, strStaffAttestSecret, strFiasAddressServiceUrl, strExternalFiasAddressServiceUrl, strEducPortalUrl, strEducPortalApiUrl, strPFDOClientId, strPFDOClientSecret, strPFDOUserName, strPFDOPassword, strSoloEsaUrl, strSoloEsaClientId, strSoloEsaClientSecret, strSoloRbooApiUrl, strSoloRefsApiUrl, strIdentityServerUrl, strSoloEnrollmentUrl, strSoloSchoolEnrollmentUrl, strRabbitMqConnection)
	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If
	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kIntegrationSettingsWasSaved")), False, 0)
ElseIf bSaveUserAccountsSettings Then 

	bBlockSimilars =  (Request("BlockSimilars") = 1)
	bMoveInSourceEServiceOnly =  (Request("MoveInSourceEServiceOnly") = 1)
	bImportStaffFromOtherOrgs =  (Request("ImportStaffFromOtherOrgs") = 1)
	bBlockFastInput =  (Request("BlockFastInput") = 1)
	bQueueImportMode =  (Request("QueueImportMode") = 1)
	bRequireIdentityData =  (Request("RequireIdentityData") = 1)
	Set saveResult = objServerSettingsComponent.SaveUserAccountsSettings(bBlockSimilars, bBlockFastInput, bQueueImportMode, bRequireIdentityData, bMoveInSourceEServiceOnly, bImportStaffFromOtherOrgs)
	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If
	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kUserAccountsSettingsWasSaved")), False, 0)
ElseIf bSaveUserAuthorizationSettings Then
	bEsiaAuth =  (Request("EsiaAuth") = 1)

	' настройки авторизации по ЕСИА
	bEsiaSaml = (Request("EsiaAuthProtocol") = 1)
	bEsiaOAuth = (Request("EsiaAuthProtocol") = 2)
	bEsiaIrtechIdentityAuth = (Request("EsiaAuthProtocol") = 3)
	strEsiaOAuthServerUrl = GetSafeStr(Request("EsiaOAuthServerUrl"), -1, "")
	strEsiaOAuthICMnemonics = GetSafeStr(Request("EsiaOAuthICMnemonics"), -1, "")
	strEsiaOAuthCertificatePass = GetSafeStr(Request("EsiaOAuthCertificatePass"), -1, "")

	bIrtechAuth =  (Request("IrtechAuth") = 1)
	bWindowsAuth = (Request("WindowsAuth") = 1)
	strEsiaLoginPage = GetSafeStr(Request("EsiaLoginPage"), -1, "")
	strEsiaLogoutUserPage = GetSafeStr(Request("EsiaLogoutUserPage"), -1, "")
	strEsiaLinkUserPage = GetSafeStr(Request("EsiaLinkUserPage"), -1, "")
	bEsiaButtonAuth =  (Request("EsiaButtonAuth") = 1)
	bEsiaMainAuth =  (Request("EsiaMainAuth") = 1)
	bBlockEsiaUserLogin = (Request("BlockEsiaUserLogin") = 1)
	bRequireEsiaAdminLoginEachEntrance = (Request("RequireEsiaAdminLogin") = 1)
	bRequireEsiaAdminLoginAfterChangePass = (Request("RequireEsiaAdminLogin") = 2)
	bRequireEsiaAdminLoginNever = (Request("RequireEsiaAdminLogin") = 3)
	bRequireEsiaAdminLoginFirstEntrance = (Request("RequireEsiaAdminLoginFirstEntrance") = 1)
	bEnableNotice = (Request("EnableNotice") = 1)
	strNoticeTitle = GetSafeStr(Request("NoticeTitle"), -1, "")
	strNoticeDisplayText = GetSafeStr(Request("NoticeDisplayText"), -1, "")
	strNoticeButtonText = GetSafeStr(Request("NoticeButtonText"), -1, "")
	If IsDull(Request("ENSDT")) Then dtNoticeStartDate = Empty Else dtNoticeStartDate = GetSafeDate(Request("ENSDT"), Null)
	If IsDull(Request("ENEDT")) Then dtNoticeEndDate = Empty Else dtNoticeEndDate = GetSafeDate(Request("ENEDT"), Null)
	' Разрешенные адреса возврата
	strAllowedReturnUrl = GetSafeStr(Request("AllowedReturnUrl"), -1, "")
	strOpenAuthPublicKey = GetSafeStr(Request("OpenAuthPublicKey"), -1, "")
	Set saveResult = objServerSettingsComponent.SaveUserAuthorizationSettings(bEsiaAuth, bEsiaSaml, bEsiaOAuth, bEsiaIrtechIdentityAuth, strEsiaOAuthServerUrl, strEsiaOAuthICMnemonics, strEsiaOAuthCertificatePass, strEsiaLoginPage, strEsiaLogoutUserPage, strEsiaLinkUserPage, bIrtechAuth, bEsiaButtonAuth, bEsiaMainAuth, bWindowsAuth, bBlockEsiaUserLogin, bRequireEsiaAdminLoginEachEntrance, bRequireEsiaAdminLoginAfterChangePass, bRequireEsiaAdminLoginNever, bRequireEsiaAdminLoginFirstEntrance, bEnableNotice, strNoticeTitle, strNoticeDisplayText, strNoticeButtonText, dtNoticeStartDate, dtNoticeEndDate, strAllowedReturnUrl, strOpenAuthPublicKey)
	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If
	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kUserAuthorizationSettingsWasSaved")), False, 0)
ElseIf bSaveSecuritySettings Then




	bBlockAccess = (GetSafeLng(Request("BlockAccess"), 0) = 1)
	bRestrictNumericPass = (GetSafeLng(Request("RestrictNumericPasswords"), 0) = 1)
	bBlockByIp = (GetSafeLng(Request("BlockByIP"), 0) = 1)
	bBlockByEducOrgAndLogin = (GetSafeLng(Request("BlockByEducOrgAndLogin"), 0) = 1)
	strMaxSessionIdleTime = GetSafeStr(Request("NSMaxSessionIdleTime"), -1, "")
	strMinLoginLength = GetSafeStr(Request("NSMinLoginLength"), -1, "3")
	strMinPasswordLength = GetSafeStr(Request("NSMinPasswordLength"), -1, "6")
	

	Set saveResult = objServerSettingsComponent.SaveSecuritySettings(bBlockAccess, bRestrictNumericPass, bBlockByIp, bBlockByEducOrgAndLogin, strMaxSessionIdleTime, strMinLoginLength, strMinPasswordLength)
	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If
	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(obLanguage("ServAdmin","kSaveSecuritySettings"), False, 0)
ElseIf bSMSSettings Then


	Set objSchoolsSMSParam = objNSNET.GetSchoolsSMSParam()
	If objSchoolsSMSParam.EOF Then GenerateError obLanguage("ServAdmin","kCantGetSchoolsInfo")

	transaction = objNSNET.GetTransaction()
	' save url registry to log
	dtCurDate = NSNow()
	strIPAddress = GetSafeStr(Request("IPAddress"), kSMSRegDataMaxLen, Null)
	strFullURL = strIPAddress & kServerSMSResponsePage
	Set objCmdURLReg = objNSNET.AddSMSRegistry_Prepare_WT(transaction, dtCurDate)

	TestErrorWithTransaction transaction, obLanguage("ServAdmin","kCantSaveSMSRegistryInfo")

	ReDim arrActions(1, 0)
	arrActions(0, 0) = "2"
	'TODO. Зарефакторить!. Вынести в отдельный thread отправку регистрационных данных школ
	While Not objSchoolsSMSParam.EOF
		strSchoolID = GetSafeID(objSchoolsSMSParam("SCHOOLID"), Null)
		strCurSchoolName = objNSNET.GetSchoolName(strSchoolID)
		strUniSchoolID = GetSafeStr(objSchoolsSMSParam("UNISCHOOLID"), -1, "")
		arrActions(1, 0) = strFullURL & ";" & strServerKey & ";" & strUniSchoolID & ";" & strCurSchoolName

		strResult = "1"

		bWebGate = (GetSafeStr(objSchoolsSMSParam("PARAMETERVALUE"), 1, Null) = "0")
		If bWebGate Then

			strServerID = GetSafeStr(objSchoolsSMSParam("SERVERID"), -1, "")
			If strUniSchoolID = "" Then
			
				GenerateErrorWithTransaction transaction,kCantDefineSMSPWD
				
			End If
			If strServerID <> "" Then
				strXMLID = objNSNET.GenerateGUID()
				
				strXML = GetRegistryXML(strXMLID, strServerID, strUniSchoolID, arrActions)
				strResult = SendSMSXML(strXML, kWebGateAction_Registr)
				If strResult <> "0" Then ' Сейчас только 0/1.
					strResult = "1"
				End If
			End If
		End If
		
		Call objNSNET.AddSMSRegistry_Execute(objCmdURLReg, strSchoolID, strFullURL, 2, CLng(strResult))
		
		TestErrorWithTransaction transaction,obLanguage("ServAdmin","kCantSaveSMSRegistryInfo")
		
		objSchoolsSMSParam.MoveNext
	WEnd
	objNSNET.CommitTransaction(transaction)
	Call objNSNET.DisposeCommand(objCmdURLReg)

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kServerSettingsWasSaved")), False, 0)
ElseIf bPopUpWindowOnLoginScreenSettings Then
	bEnablePopUp = (Request("EnablePopup") = 1)
	strPopUpDisplayText = GetSafeStr(Request("PopupDisplayText"), -1, "")
	strPopUpButtonText = GetSafeStr(Request("PopupButtonText"), -1, "")
	If IsDull(Request("PSDT")) Then dtPopUpStartDate = Empty Else dtPopUpStartDate = GetSafeDate(Request("PSDT"), Null)
	If IsDull(Request("PEDT")) Then dtPopUpEndDate = Empty Else dtPopUpEndDate = GetSafeDate(Request("PEDT"), Null)
	Set saveResult = objServerSettingsComponent.SavePopUpWindowOnLoginScreenSettings(bEnablePopUp, strPopUpDisplayText, strPopUpButtonText, dtPopUpStartDate, dtPopUpEndDate)
	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If
	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kPopUpWindowOnLoginScreenSettingsWasSaved")), False, 0)
ElseIf bSaveFileAttachmentsSettings Then
	' Тип хранилища файловых вложений
	fileStorageType = GetSafeLng( Request("FileStorageType"), 1)
	' Адрес сервиса файловых вложений
	strFileStorageApiAddress = GetSafeStr(Request("FileStorageApiAddress"), -1, "")

	Set saveResult = objServerSettingsComponent.SaveFileAttachmentsSettings(fileStorageType, strFileStorageApiAddress)
	If Not saveResult.IsSuccess Then
		GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
	End If
	TestError(obLanguage("ServAdmin","kCantSaveServerSettings"))

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kFileAttachmentsSettingsWasSaved")), False, 0)
ElseIf Not bSMSReg Then

	Dim strTrustedAppCode
	TestError obLanguage("ServAdmin","kCantSaveServerSettings")
	strIPAddress = GetSafeStr(Request("IPAddress"), kSMSRegDataMaxLen, Null)
	strAuxAddresses = GetSafeStr(Request("AuxAddresses"), 200, "")
	strProxyIPAddress = GetSafeStr(Request("ProxyIPAddress"), kSMSRegDataMaxLen, "")
	strServerKey = GetSafeStr(Request("ServerKey"), kServerKeyMaxLen, "")
	strTrustedAppCode = GetSafeStr(Request("ServerS2"), kSMSRegDataMaxLen, "")
	If Right(strIPAddress, 1) <> "/" Then strIPAddress = strIPAddress & "/"

	transaction = objNSNET.GetTransaction()

	Set saveResult = objServerSettingsComponent.SaveServerSetting(transaction, ServerSetting_Address, strIPAddress)
	If Not saveResult.IsSuccess Then
		GenerateErrorWithTransaction transaction, obLanguage("ServAdmin","kCantSaveServerSettings")
	End If

	Set saveResult = objServerSettingsComponent.SaveServerSetting(transaction, ServerSetting_AuxAddresses, strAuxAddresses)
	If Not saveResult.IsSuccess Then
		GenerateErrorWithTransaction transaction, obLanguage("ServAdmin","kCantSaveServerSettings")
	End If

	Set saveResult = objServerSettingsComponent.SaveServerSetting(transaction, ServerSetting_ProxyAddress, strProxyIPAddress)
	If Not saveResult.IsSuccess Then
		GenerateErrorWithTransaction transaction, obLanguage("ServAdmin","kCantSaveServerSettings")
	End If

	Set saveResult = objServerSettingsComponent.SaveServerSetting(transaction, ServerSetting_TrustedAppCode, strTrustedAppCode)
	If Not saveResult.IsSuccess Then
		GenerateErrorWithTransaction transaction, obLanguage("ServAdmin","kCantSaveServerSettings")
	End If

	TestErrorWithTransaction transaction,obLanguage("ServAdmin","kCantSaveServerSettings")

	objNSNET.CommitTransaction(transaction)

	Call objServerSettingsComponent.SetContextServerSettings()
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kServerSettingsWasSaved")), False, 0)
Else

	Set objSchoolsSMSParam = objNSNET.GetSchoolsSMSParam()
	If objSchoolsSMSParam.EOF Then GenerateError obLanguage("ServAdmin","kCantGetSchoolsInfo")

	' registry SMS parameters (parents mobiles and URL)
	Set objCmdSMSReg = objNSNET.GetSMSRegistryUnreg_Prepare()
	TestError(obLanguage("ServAdmin","kCantGetSMSRegistryInfo"))

'	Set objCmdSMSRegUpdate = obNS2.UpdateSMSRegistry_Prepare(objCon)
'	TestError(obLanguage("ServAdmin","kCantSaveSMSRegistryInfo"))

	nSuccess = 0
	nFailed = 0
	While Not objSchoolsSMSParam.EOF
		bWebGate = (GetSafeStr(objSchoolsSMSParam("PARAMETERVALUE"), 1, Null) = "0")
		If bWebGate Then

			strSchoolID = GetSafeID(objSchoolsSMSParam("SCHOOLID"), Null)
			strUniSchoolID = GetSafeStr(objSchoolsSMSParam("UNISCHOOLID"), -1, "")
			strServerID = GetSafeStr(objSchoolsSMSParam("SERVERID"), -1, "")
			If strUniSchoolID = "" Then
				GenerateError(kCantDefineSMSPWD)
			End If
			If strServerID <> "" Then
				strXMLID = objNSNET.GenerateGUID()

				Set objRsSMSReg = objNSNET.GetSMSRegistryUnreg_Execute(objCmdSMSReg, strSchoolID)
				TestError(obLanguage("ServAdmin","kCantGetSMSRegistryInfo"))
				
				If Not objRsSMSReg.EOF Then
					ReDim arrActions(1, objRsSMSReg.RecordCount - 1)
					
					strRegIDs = ""
					i = 0
					While Not objRsSMSReg.EOF
						strRegType = GetSafeStr(objRsSMSReg("REGTYPE"), 1, Null)
						strRegData = GetSafeStr(objRsSMSReg("REGDATA"), kSMSRegDataMaxLen, Null)
						bInvalidFormat = False
						If strRegType = "1" Then
							' Регистрация тлф.
							If Len(strRegData) <> objLocalSettings.PhoneNumberLength Then
								bInvalidFormat = True
							ElseIf Not IsNumeric(strRegData) Then
								bInvalidFormat = True
							ElseIf InStr(strRegData, ",") <> 0 Then
								bInvalidFormat = True
							End If
						End If
						If strRegType = "3" Then 'change mobile number
							arrNums = Split(strRegData, ",")
							strOldNum = arrNums(0)
							strNewNum = arrNums(1)
							' Регистрация тлф.
							If Len(strNewNum) <> objLocalSettings.PhoneNumberLength Then
								bInvalidFormat = True
							ElseIf Not IsNumeric(strNewNum) Then
								bInvalidFormat = True
							End If
						End If

						If Not bInvalidFormat Then
							arrActions(0, i) = strRegType
							arrActions(1, i) = strRegData
							i = i + 1
						Else
							strRegID = GetSafeID(objRsSMSReg("REGID"), Null)
							strRegIDs = strRegIDs & strRegID & ","
						End If
						objRsSMSReg.MoveNext
					WEnd

					If strRegIDs <> "" Then
						ReDim Preserve arrActions(1, i - 1)
						strRegIDs = Left(strRegIDs, Len(strRegIDs) - 1)
					Else
						strRegIDs = "0"
					End If

					strXML = GetRegistryXML(strXMLID, strServerID, strUniSchoolID, arrActions)
					strResult = SendSMSXML(strXML, kWebGateAction_Registr)
					If strResult <> "0" Then ' Сейчас только 0/1.
						strErrCodes = strErrCodes & strResult & vbLf ' save original error code
						strResult = "1"
						nFailed = nFailed + i
					End If

					If strResult = "0" Then ' Отмечаем в логе успешную регистрацию
'						Call obNS2.UpdateSMSRegistry_Execute(objCmdSMSRegUpdate, strSchoolID)
						Call objNSNET.UpdateSMSRegistry(strSchoolID, strRegIDs)
						TestError(obLanguage("ServAdmin","kCantSaveSMSRegistryInfo"))
						nSuccess = nSuccess + i
					End If
				
				End If
			End If
		End If
		
		objSchoolsSMSParam.MoveNext
	WEnd 
	If nFailed <> 0 And strErrCodes <> "" Then
		strErrCodes = Left(strErrCodes, Len(strErrCodes) - 1)
	End If

	If (nSuccess = 0) And (nFailed = 0) Then
		Call WriteJsonResult(CStr(obLanguage("ServAdmin","kSMSRegistry_NoData")), False, 0)
	Else
		nAll = nSuccess + nFailed
		strMessage = obLanguage("ServAdmin","kRecordsWasSend") & " " & CStr(nAll) & vbLf
		If nSuccess = nAll Then
			strMessage = strMessage & obLanguage("ServAdmin","kSMSRegistry_Success")
		ElseIf nFailed = nAll Then
			strMessage = strMessage & obLanguage("ServAdmin","kSMSRegistry_Failed") & vbLf
			strMessage = strMessage & " (" & obLanguage("ServAdmin","kSMSErrCodes") & ": " & vbLf & strErrCodes & ")"
		Else
			strMessage = strMessage & obLanguage("ServAdmin","kSMSRegistry_Success") & " " & obLanguage("ServAdmin","kForRecords") & ": " & nSuccess & vbLf
			strMessage = strMessage & obLanguage("ServAdmin","kSMSRegistry_Failed") & " " & obLanguage("ServAdmin","kForRecords") & ": " & nFailed & vbLf
			strMessage = strMessage & " (" & obLanguage("ServAdmin","kSMSErrCodes") & ": " & strErrCodes & ")"
		End If

		If nFailed = 0 Then
			Call WriteJsonResult(strMessage, False, 0)
		Else
			' сообщений об ошибках может быть много - поэтому показываем на отдельной странице
			Call objNSNET.DisposeCommand(objCmdSMSReg)
			Call WriteJsonResult(strMessage, True, nFailed)
		End If
		
	End If
	Call objNSNET.DisposeCommand(objCmdSMSReg)
End If

RedirectTo "options.asp?", Null

Function GetRegistryXML(strXMLID, strServerID, strUniSchoolID, arrActions)
	Dim strXML, i
	Dim objHelper
	Set objHelper = comHelper.AspHelper
	
	strXML = "" & _
	"<?xml version=""1.0"" encoding=""utf-8""?>" & _
	"<root>" & _
		"<id>" & strXMLID & "</id>" & _
		"<serverid>" & strServerID & "</serverid>" & _
		"<password>" & objHelper.MD5(CStr(strUniSchoolID) & strXMLID) & "</password>" & _
		"<actions>"
		For i = 0 To UBound(arrActions, 2)
			If (arrActions(0, i) <> 3) Then
				strXML = strXML & _
				"<action type=""" & arrActions(0, i) & """>" & arrActions(1, i) & "</action>"
			Else
				arrNums = Split(arrActions(1, i), ",")
				strOldNum = arrNums(0)
				strNewNum = arrNums(1)			
				strXML = strXML & _
				"<action type=""3""><oldNum>" & strOldNum & "</oldNum><newNum>" & strNewNum & "</newNum></action>"
			End If
		Next
		strXML = strXML & _
		"</actions>" & _
	"</root>"

	GetRegistryXML = strXML
End Function
%>
