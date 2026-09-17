<!-- #INCLUDE FILE=headernoscreen_PopupNo_AuthNo.asp -->

<% ' © 2013 IRTech. All rights reserved.
Dim userId, strUserAnswer, result, bSuccessVerification,obResult,obSecurityComponent, recoveryType, recoveryValue
Dim userComponent
Set userComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
Set result = new JSONResult

userId = GetSafeStrParam(Request("userId"), Null)
strUserAnswer = GetSafeStrParam(Request("answer"), Null)
recoveryType = GetSafeLng(Request("recoveryType"), Null)
recoveryValue = GetSafeStr(Request("recoveryValue"), -1, "")

bSuccessVerification = userComponent.RecoveryAnswerVerification(userId, strUserAnswer)
TestError Err.Description

If Not bSuccessVerification THEN
	result.IsError = True
	result.Message = obLanguage("Messages","kErrorAnswerToQuestion")
	Response.Write result
	Response.End
End If

Set obResult = obSecurityComponent.PasswordRecovery(recoveryType, recoveryValue)
TestError Err.Description
result.message = obResult.Message
Response.Write result
Response.End
%>
