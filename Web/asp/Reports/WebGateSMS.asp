<!-- #INCLUDE FILE=../headernoscreen.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SMS_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/SmsAccess_inc.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>

Const kEmptySMS = "Нет данных для отправки по SMS"
Const kSMSWasNotSent	= "Отчёт не был отправлен."
Const kSMSErrCodes = "Код ошибки"

Dim bEmptySMS, strXML, strErrMessage, strResult, nStatus
Dim objSchoolInfo, bSmartsSMS, strSMSView
Dim objSmsComponent

Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
arrWebGateSMS = obTokenMgr.GetData(strToken, stWebGateSMS)
strSMSView = obTokenMgr.GetData(strToken, "SMSView")
bEmptySMS = Not IsArray(arrWebGateSMS)

Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")

If bEmptySMS Then
	GenerateError(kEmptySMS)
End If

Dim objSmsSendedResult

bSmartsSMS = SendingSchoolSmsAvailable()

If bSmartsSMS Then
	Set objSmsSendedResult = objSmsComponent.SendMessages(strSchoolId, CLng(strSMSView), SmsEventType_Distribution, arrWebGateSMS)
Else
	Set objSmsSendedResult = objSmsComponent.SendMessagesWebGate(strSchoolId, SmsEventType_Distribution, arrWebGateSMS)
End If

TestError kSMSWasNotSent
If objSmsSendedResult.isSuccess Then
	Call obTokenMgr.SetData(strToken, stbTranslit, Null)
	Call obTokenMgr.SetData(strToken, stArbitrSMS, Null)
	Call obTokenMgr.SetData(strToken, stUseMorePartsSMS, Null)
	Call obTokenMgr.SetData(strToken, stHistoryDaysCount, Null)

	Call WriteJsonResult(obLanguage("Reports","kSMSWasSent"), False, 0)
Else
	If bSmartsSMS Then
		GenerateError objSmsSendedResult.Message
	End If
	strErrMessage = kSMSWasNotSent & vbLf & " (" & kSMSErrCodes & ": " & objSmsSendedResult.Message & ")"
	GenerateError.Message strErrMessage
End If%>
