<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next

Dim result, oAttachmentsComponent
Dim nAnnouncementId, strAttachments
Dim i, strAttachmentsTknMgr

Server.ScriptTimeOut = Server.ScriptTimeOut * 100

Call InitializeComponents()
TestError Err.Description

'Проверка. Необходимо, чтобы идентификаторы файловых вложений, которые приходят в реквесте при сабмите формы, содержались в строке с идентификаторами,
'которые находятся в токен менеджере, таким образом, мы предохраняем от несанкционированного удаления другие файлы
strAttachments			= GetSafeStr(Request("attachments"), -1, "")
strAttachmentsTknMgr	= GetSafeStr(obTokenMgr.GetData(strToken, stAttachmentID), -1, "")

For i = 1 To Request.Form("attachments").Count
	If InStr(strAttachmentsTknMgr, Request.Form("attachments")(i)) = 0 Then GenerateError "Нельзя удалить выбранные файлы"
Next

Call oAttachmentsComponent.DetachAttachments(strAttachments)

TestError Err.Description

Set result = new JSONResult

If Err.number <> 0 Then
	result.IsError = True
	result.Message = Err.Description
	Call result.AddData("Result", "ERROR")
End If
Response.Write result

Sub InitializeComponents()
	Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")
End Sub%>