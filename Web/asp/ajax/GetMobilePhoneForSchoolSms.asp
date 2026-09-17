<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SMS_inc.asp" -->
<%
Dim objSmsComponent, result
Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
Set result = new JSONResult

Dim strReceiverNumber, strSenderNumber, strMessage
strReceiverNumber = GetSafeStrParam(objNSNET.GetMobilePhoneForUser(strUserID), kDefVAlue)
strSenderNumber = GetSafeStrParam(objSmsComponent.GetParentMobPhoneForSchoolSms(strUserId), kDefVAlue)

If strReceiverNumber = kDefVAlue Or strSenderNumber = kDefVAlue THEN
	result.Message = obLanguage("Messages","kNotFoundMobPhoneOrPhoneForSchoolSms")
Else
	strMessage = GetSafeStrParam(Request("message"),Null)
	Call objSmsComponent.SendMessage(strSenderNumber, strReceiverNumber, strMessage)
	TestError err.Description
	result.Message = obLanguage("Messages","kYourMessageWasSent")
End If

response.Write result
response.End
%>
