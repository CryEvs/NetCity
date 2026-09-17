<%@ Language=VBScript %>
<% ' © 2007-2011 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
%>
<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/PageStates.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Popup.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Auth.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/stdhead.asp -->
<%
Dim nAttachmentID, strFileName, arrFileAttachments
Dim strDocIDs

Dim oAttachmentsComponent
Dim oGetAttachmentResult, oAttachemntData

nAttachmentID = GetSafeLng(Request("ATTACHMENTID"), Null)

strDocIDs = "," & CStr(obTokenMgr.GetData(strToken, stDocIDs))
If InStr(strDocIDs, "," & nAttachmentID & ",") = 0 Then
	strDocIDs = "," & CStr(obTokenMgr.GetData(strToken, stMsgDocIDs))
	If InStr(strDocIDs, "," & nAttachmentID & ",") = 0 Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
End If

Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")
Set oGetAttachmentResult = oAttachmentsComponent.GetFileAttachments(Array(nAttachmentID))
TestError obLanguage("Common", "kLoadError")

If Not oGetAttachmentResult.IsSuccess Then
	GenerateError oGetAttachmentResult.Message
End If

arrFileAttachments = oGetAttachmentResult.Data

strFileName = arrFileAttachments(0).FileName
oAttachemntData = arrFileAttachments(0).FileData

If Not UBound(oAttachemntData) > 0 Then
	Response.End
End If

Dim objDownloadComponent
Dim oTransferResult
Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")

'В IIS > 6 при указании хэдэра загрузка вложений не работает
'Response.AddHeader "Content-Length", oUpload.BlobExists(strAttachmentID)
Set oTransferResult = objDownloadComponent.TransferData(oAttachemntData, strFileName)
Call obComponentMgr.ReleaseComponent(objDownloadComponent)

If Not oTransferResult.IsSuccess Then
	GenerateError oTransferResult.Message
End If

Set oGetAttachmentResult = Nothing
Set oTransferResult = Nothing
Set objDownloadComponent = Nothing

TestError obLanguage("Common", "kLoadError")
%>