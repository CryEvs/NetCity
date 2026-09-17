<% ' © 2007-2010 IRTech. All rights reserved.

Const kWebGateURL_Distrib = "http://ir-tech.ru:81/smscin/inject-answer.php"
Const kWebGateURL_Registr = "http://ir-tech.ru:81/smscin/inject-update.php"
Const kWebGateURL_CheckPhones = "http://ir-tech.ru:81/paid_check_arr.php"

Const kServerSMSResponsePage = "asp/SMSResponse.asp"

Const kSMSLogFileName = "SMSLog.txt"

Const kWebGateAction_Distrib = 1
Const kWebGateAction_Registr = 2

Const kSMSEventType_Distribution = 1
Const kSMSEventType_Request = 2
Const kSMSEventType_Response = 3

Const kInvalidWebGateAction = "Запрошено неизвестное действие"
Const kCantDefineSMSPWD = "Невозможно определить пароль"
Const kCantDefineServerID = "Невозможно определить идентификатор сервера школы"
Const kCantCreateXMLHTTPObject = "Невозможно создать XMLHTTP объект"
Const kErrorSendForm = "При отправке сообщения произошла ошибка."
Const kHTTPStatus = "HTTP Статус"
Const kProxyError = "Возможно, не настроен Proxy-сервер для связи с Web-шлюзом"

Const kErrorSendForm_CheckPhones = "При запросе сведений о подписке произошла ошибка."

Const HexDigit = "0123456789ABCDEF"

Dim strUniSchoolID, strServerID, strXMLID, arrWebGateSMS

Function str2hex(str)
    Dim i, n, res, hi, lo, c
    res = ""
    n = len(str)
    For i = 1 to n
	c = asc(mid(str,i,1))
	if c<16 Then
	   res = res + "%0" + hex(c)
	Else
	   res = res + "%" + hex(c)
	End If
    Next
    str2hex = res
End Function

Function hex2str(hexstr)
    Dim i, n, res, hi, lo
    res = ""
    n = len(hexstr)
'    if n=0 or (n mod 3 <> 0) Then
    if n=0 Then
	hex2str = ""
	Exit Function
    End If
    For i = 1 to n\3 
	if Mid(hexstr,(i-1)*3+1,1) <> "%" Then
   		hex2str = res
		Exit Function
	End If
	hi = Instr(HexDigit,Mid(hexstr,(i-1)*3+2,1))
	lo = Instr(HexDigit,Mid(hexstr,(i-1)*3+3,1))

	if (hi > 0) and (lo > 0) Then
		res = res + chr((hi-1)*16+lo-1)
	Else
   		hex2str = res
		Exit Function
	End if
    Next
    hex2str=res
End Function

Sub GetXMLKeyParameters()
	Dim objRS

	strUniSchoolID = ""
	strServerID = ""
	strXMLID = ""
	
	Set objRS = objNSNET.GetSchoolInfo(strSchoolID)
	If Not objRS.EOF Then
		strUniSchoolID = GetSafeStr(objRS("UNISCHOOLID"), -1, "")
		strServerID = GetSafeStr(objRS("SERVERID"), -1, "")
	End If
	If strUniSchoolID = "" Then
		GenerateError(kCantDefineSMSPWD)
	End If
	If strServerID = "" Then
		GenerateError(kCantDefineServerID)
	End If

	strXMLID = objNSNET.GenerateGUID()
End Sub

Function SendSMSXML(strXML, nAction)
	Dim objSrvHTTP
	Dim nStatus
	Dim strWebGateURL
	Dim strResponseText
	Dim strErrMessage
	
	On Error Resume Next

	If nAction = kWebGateAction_Distrib Then
		strWebGateURL = kWebGateURL_Distrib
	ElseIf nAction = kWebGateAction_Registr Then
		strWebGateURL = kWebGateURL_Registr
	Else
		GenerateError kInvalidWebGateAction
	End If

'	Set objSrvHTTP = Server.CreateObject("MSXML2.ServerXMLHTTP.4.0")
	Set objSrvHTTP = Server.CreateObject("MSXML2.ServerXMLHTTP")
	TestError(kCantCreateXMLHTTPObject)

	'Call objSrvHTTP.setTimeouts(60 * 1000, 180 * 1000, 120 * 1000, 120 * 1000)
	Call objSrvHTTP.open("POST", strWebGateURL, false)
'	objSrvHTTP.setProxyCredentials "myUser", "myPassword" 

	Call objSrvHTTP.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
	Err.Clear
	Call objSrvHTTP.send("send=" & Server.URLEncode(strXML))
	If Err.number <> 0 Then
		strErrMessage = kErrorSendForm & " (" & Err.Description & ")"
		If Err.number = -2147012867 Then
			strErrMessage = strErrMessage & vbLf & kProxyError
		End If
		Err.Clear
		SendSMSXML = strErrMessage
		Exit Function
	End If
	
	nStatus = GetSafeLng(objSrvHTTP.Status, 0)
	If nStatus < 100 Or nStatus >=300 Then
'		GenerateError(kErrorSendForm & " (" & kHTTPStatus & ": " & nStatus & ")")
		' в некоторых случаях ф-я вызывается "в фоновом режиме" - поэтому явно генерировать ошибку нехорошо,
		' вызывающий код сам определяет, надо ли показать ошибку или нет, но не здесь!
		SendSMSXML = kErrorSendForm & " (" & kHTTPStatus & ": " & nStatus & ")"
		Exit Function
	End If
	'Call Response.Write(objSrvHTTP.ResponseText)
	strResponseText = CStr(objSrvHTTP.ResponseText)
	If strResponseText <> "" Then
		If Left(strResponseText, 1) = "0" Then
			strResponseText = "0" ' if first leading "0", then all - "0" (success)
		End If
	End If
	SendSMSXML = strResponseText
End Function

Function SendSMS_CheckPhone(strPhones, strError)
	Dim objSrvHTTP
	Dim nStatus
	Dim strWebGateURL
	Dim strResponseText
	Dim strErrMessage
	
	On Error Resume Next

	strWebGateURL = kWebGateURL_CheckPhones
	SendSMS_CheckPhone = ""
	strError = ""

	Set objSrvHTTP = Server.CreateObject("MSXML2.ServerXMLHTTP")
	TestError(kCantCreateXMLHTTPObject)

	'Call objSrvHTTP.setTimeouts(60 * 1000, 180 * 1000, 120 * 1000, 120 * 1000)
	Call objSrvHTTP.open("POST", strWebGateURL, false)
'	objSrvHTTP.setProxyCredentials "myUser", "myPassword" 

	Call objSrvHTTP.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
	Err.Clear
	Call objSrvHTTP.send("nmbr=" & Server.URLEncode(strPhones))
	If Err.number <> 0 Then
		strErrMessage = kErrorSendForm_CheckPhones & " (" & Err.Description & ")"
		If Err.number = -2147012867 Then
			strErrMessage = strErrMessage & vbLf & kProxyError
		End If
		Err.Clear
		strError = strErrMessage
		Exit Function
	End If
	
	nStatus = GetSafeLng(objSrvHTTP.Status, 0)
	If nStatus < 100 Or nStatus >=300 Then
'		GenerateError(kErrorSendForm_CheckPhones & " (" & kHTTPStatus & ": " & nStatus & ")")
		' в некоторых случаях ф-я вызывается "в фоновом режиме" - поэтому явно генерировать ошибку нехорошо,
		' вызывающий код сам определяет, надо ли показать ошибку или нет, но не здесь!
		strError = kErrorSendForm_CheckPhones & " (" & kHTTPStatus & ": " & nStatus & ")"
		Exit Function
	End If
	'Call Response.Write(objSrvHTTP.ResponseText)
	strResponseText = CStr(objSrvHTTP.ResponseText)
	strResponseText = Trim(strResponseText)
'	If strResponseText <> "" Then
'		If Left(strResponseText, 1) = "0" Then
'			strResponseText = "0" ' if first leading "0", then all - "0" (success)
'		End If
'	End If
	SendSMS_CheckPhone = strResponseText
End Function
%>
