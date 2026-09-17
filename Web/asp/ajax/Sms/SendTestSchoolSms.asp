<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SMS_inc.asp" -->
<%Dim objSmsComponent, result

Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
Set result = new JSONResult

Dim strReceiverNumber, strSenderNumber, strMessage
	
strReceiverNumber = objNSNET.GetMobilePhoneForUser(strUserID)
strSenderNumber = objSmsComponent.GetParentMobPhoneForSchoolSms(strUserId)
	
If IsDull(strReceiverNumber) Or IsDull(strSenderNumber) THEN
	result.Message = obLanguage("Messages","kNotFoundMobPhoneOrPhoneForSchoolSms")
	response.Write result
	response.End	
End If

strMessage = obLanguage("Messages","kTestMessage")

Call objSmsComponent.SendMessage(strSenderNumber, strReceiverNumber, strMessage, strUserID, strSchoolId, SmsType_NoCheckBalance)
TestError err.Description

result.Message = obLanguage("Messages","kYourMessageWasSent")
response.Write result
response.End	
%>
