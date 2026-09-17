<!-- #INCLUDE FILE="../headerajax.asp" -->
<%On Error Resume Next

Dim objMailComponent, result
Dim markMessages, nBoxId, strTextErr, setWasSaved
Dim messageId
Dim unread

Call InitMailComponent

Set result = new JSONResult
nBoxId			= GetSafeLng(Request("nBoxId"), 0)
setWasSaved		= GetSafeBool(Request("setWasSaved"), False)
unread			= GetSafeBool(Request("unread"), False)
markMessages = Request("markMessages")
strTextErr = "Ошибка при отметке сообщения"
Call objMailComponent.MarkMessagesCom(markMessages, strUserId, nBoxId, unread)
If Err.number <> 0 Then
	result = "{""Result"" : ""ERROR"", ""Message"": """ & strTextErr & """ }"
End If
If setWasSaved Then 
	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(strTextErr))
ElseIf setWasSaved Then 
	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Messages", "kSuccessDeleteMsgs")))
End If

Response.Write result

Sub InitMailComponent
	Set objMailComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMailComponent")
	If Not IsObject(objMailComponent) Then
		GenerateError obLanguage("Messages","kCantCreateMailComponent")
	End If
End Sub
%>