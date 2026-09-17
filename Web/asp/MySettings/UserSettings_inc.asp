<% ' © 2015 IRTech. All rights reserved.
Dim obRecoveryInfo, question, answer, strBackPage, nThemeId, strMobilePhone, strEMail, nShowMPhone, strLanguage, strEditUserID
Dim obUserComponent
Dim strWinAccount, bUsedWinAccount
Dim result
Dim bQuestionChange, bAnswerChange

Sub InitComponents()
	Set obUserComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
End Sub

Sub InitVariables()
	strCurrYearID = Request("CurrYear")
	nShowMPhone = Request("SHOWMOBILEPHONE")
	strMobilePhone = Cstr(Request("MOBILEPHONE"))
    strEmail = Request("EMAIL")
	nThemeId = Clng(Request("THEME"))
	strLanguage = GetSafeStr(Request("LNG"),10,obContext.LocalSettings.DefaultLanguage)
	strBackPage = GetSafeStr(Request("BackPage"), 255, Request.ServerVariables("HTTP_REFERER" ))
	strEditUserID = GetSafeLng(Request("UID"),Null)

	Set obRecoveryInfo = obUserComponent.GetPasswordRecoveryInfo(strUserId)

	question = GetSafeStr(Request("RecoveryQuestion"), -1, "0")
	answer = GetSafeStr(Request("RecoveryAnswer"), -1, "")

	' в базе может не быть записей в USERSETTINGS
	If Not obRecoveryInfo.EOF Then
		bQuestionChange = question <> GetSafeStrParam(obRecoveryInfo("RecoveryQuestion"), "0")
		bAnswerChange = answer <> GetSafeStrParam(obRecoveryInfo("RecoveryAnswer"), "")
	Else
		bQuestionChange = question <> "0"
		bAnswerChange = answer <> ""
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stCurrTheme, nThemeId)
	Call obTokenMgr.SetData(strToken, stUserLanguage, strLanguage)
End Sub

Sub SaveUsersettings()
	Dim saveResult, bYearChanged
	Call objNSNET.SetMobilePhoneForUser(strUserID,strMobilePhone)
	Call objNSNET.SetEmailForUser(strUserID, strEMail)
	Call objNSNET.SetUserSettings(Empty, strUserID, Request("TAB"), nThemeId, -1, nShowMPhone, strLanguage)
	Set result = new JSONResult
	bYearChanged = CLng(obTokenMgr.GetData(strToken,stCurrYear)) <> CLng(strCurrYearID)
	If obContext.ServerSettings.UserAuthorizationSettings.WindowsAuth Then
		bUsedWinAccount = False
		If Not IsDull(strWinAccount) Then
			bUsedWinAccount = obUserComponent.CheckWinAccount(strUserID, strWinAccount)
		End If
	
		strWinAccount = GetSafeStrParam(Request("WLN"), "")

		If bUsedWinAccount Then
			result.Message = CStr(obLanguage("MySettings","kWinAccountAlreadyAssociated"))
			If bYearChanged Then Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("MySettings","kWinAccountAlreadyAssociated")))
		Else
			Call obUserComponent.SetWinAccountForUser(strUserID, strWinAccount)
		End If
		result.Message = CStr(obLanguage("MySettings","kSettingsAreSaved"))
		If bYearChanged Then Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("MySettings","kSettingsAreSaved")))
	End If

	If bQuestionChange or bAnswerChange Then
		Set saveResult = obUserComponent.SaveRecoveryInfo(question, answer, strUserId)
		If Not saveResult.IsSuccess THEN GenerateError saveResult.Message
		TestError Err.Description
	End If
End Sub

Sub ChangeLanguage()
	Dim ContextComponent

	Set ContextComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IContextComponent")
	ContextComponent.ChangeUserLanguage(strLanguage)
	TestError obLanguage("SchoolSettings","kCantSetSettings")

	Session.LCID = obLanguage.LCID 'после смены языка, обновляем LCID сессии - пока это не перенёс в ContextComponent.ChangeUserLanguage()
End Sub
%>
