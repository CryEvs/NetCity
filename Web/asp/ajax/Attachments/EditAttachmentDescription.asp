<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next

Dim result, oAttachmentsComponent
Dim nAttachmentId, strAttachmentDescription

Call InitializeComponents()
TestError Err.Description

nAttachmentId				= GetSafeLng(Request("attachmentId"), 0)
strAttachmentDescription	= GetSafeStr(Request("attachmentDescr"), -1, "")

Call oAttachmentsComponent.EditAttachmentDescription(nAttachmentId, strAttachmentDescription)

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