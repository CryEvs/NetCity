<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_PopupNo_AuthNo.asp -->
<% ' © 2013 IRTech. All rights reserved.
Dim userComponent, obSecurityComponent, obSchoolComponent
Dim recoveryType, recoveryValue, result, newPassword
Dim bCheckedAnswer, obResult, objServerSettings
Dim objServerSettingsComponent

Call InitializeComponents()

Set result = new JSONResult
recoveryType = GetSafeLng(Request("recoveryType"), Null)
recoveryValue = GetSafeStr(Request("recoveryValue"), -1, "")
bCheckedAnswer = cBool(Request("CheckedAnswer") = "True")

If Not bCheckedAnswer Then
	Dim userId, data, obUserInfoResult, schoolId, bIsOnlyOneSchoolAdmin, bUserSchoolAdmin

	If recoveryType = PswRecoveryType_Email THEN 
		Call CheckMailSettings()

		Set obUserInfoResult = userComponent.GetUsersInfoByEmail(recoveryValue)
	Else
		Set obUserInfoResult = userComponent.GetUserInfoByPhoneNumber(recoveryValue)
	End If
	TestError Err.Description

	If Not obUserInfoResult.isSuccess Then GenerateError obUserInfoResult.Message

	userId = GetSafeLng(obUserInfoResult.Data()("USERID"), Null)
	schoolId = GetSafeLng(obUserInfoResult.Data()("SCHOOLID"), Null)

	Set obResult = userComponent.GetUserSettings(userId)
	If Not obResult.isSuccess Then GenerateError obResult.Message

	IF IsDull(obResult.Data.RECOVERYANSWER) AND IsDull(obResult.Data.RECOVERYQUESTION) THEN 
		bIsOnlyOneSchoolAdmin = obSchoolComponent.IsOnlyOneSchoolAdmin(schoolId)
		bUserSchoolAdmin = userComponent.UserIsSchoolAdmin(userId, schoolId)
		IF bUserSchoolAdmin AND bIsOnlyOneSchoolAdmin THEN 
			GenerateError "" & obLanguage("Messages","kContactYourServAdmin") & ""
		ELSE
			GenerateError "" & obLanguage("Messages","kContactYourSchoolAdmin") & ""
		END IF
	END IF

	Call result.AddData("recoveryQuestion", obResult.Data.RecoveryQuestion)
	Call result.AddData("userId", userId)

	Response.Write result
	Response.End
End If

Sub InitializeComponents()
	Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	Set userComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
	Set obSchoolComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISchoolComponent")
	Set objServerSettingsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IServerSettingsComponent")
End Sub

Sub CheckMailSettings()
	Dim serverSettingsResult

	Set serverSettingsResult = objServerSettingsComponent.GetServerSettings()
	If Not serverSettingsResult.IsSuccess Then GenerateError serverSettingsResult.Message
	IF IsDull(serverSettingsResult.Data.MailSettings.MailHost) THEN GenerateError "" & obLanguage("ServAdmin","MailSettingsNotFound") & ""
End Sub
%>
