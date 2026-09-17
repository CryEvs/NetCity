<!-- #INCLUDE FILE="../headerajax.asp" -->
<%On Error Resume Next

Dim objMailComponent, result
Dim arrMovedMessages, nFromBoxId, nToBoxId, setWasSaved
	
Call InitMailComponent

Set result = new JSONResult
	
arrMovedMessages = Request("movedMessages")
nFromBoxId = GetSafeLng(Request("nFromBoxId"), 0)
nToBoxId = GetSafeLng(Request("nToBoxId"), 0)
setWasSaved = GetSafeBool(Request("setWasSaved"), False)

Call objMailComponent.MoveSelectedMessages(strUserId, nFromBoxId, nToBoxId, arrMovedMessages)

If Err.number <> 0 Then
	result = "{""Result"" : ""ERROR"", ""Message"": """ & obLanguage("Messages", "kErrMoveSelectedMsgs") & """ }"

	If setWasSaved Then Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Messages", "kErrMoveSelectedMsgs")))
ElseIf setWasSaved Then 
	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Messages", "kSuccessMoveMsgs")))
End If

Response.Write result

Sub InitMailComponent
	Set objMailComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMailComponent")
	If Not IsObject(objMailComponent) Then
		GenerateError obLanguage("Messages","kCantCreateMailComponent")
	End If
End Sub
%>