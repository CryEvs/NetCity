<!-- #INCLUDE FILE="../headerajax.asp" -->
<%On Error Resume Next

Dim objMailComponent, result, bMove
Dim arrDeletedMessages, nBoxId, strTextErr, setWasSaved

Call InitMailComponent

Set result = new JSONResult
nBoxId			= GetSafeLng(Request("nBoxId"), 0)
setWasSaved		= GetSafeBool(Request("setWasSaved"), False)
bMove			= nBoxId <> bxDeleted

arrDeletedMessages = Request("deletedMessages")

If bMove Then
	Call objMailComponent.MoveSelectedMessages(strUserId, nBoxId, bxDeleted, arrDeletedMessages)
Else
	Call objMailComponent.DeleteSelectedMessages(strUserId, nBoxId, arrDeletedMessages)
End If

strTextErr = obLanguage("Messages", "kErrDeleteSelectedMsgs")
	
If Err.number <> 0 Then
	result = "{""Result"" : ""ERROR"", ""Message"": """ & strTextErr & """ }"

	If setWasSaved Then Call obTokenMgr.SetData(strToken, stWasSaved, CStr(strTextErr))
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