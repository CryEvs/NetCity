<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/upload_inc.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next

Dim objUploadComponent, resRequestParsing, requestData, strPage
Dim nAttachmentID, nAnnouncementId, nMessageId, nPlanId, nLessonId
Dim oAttachmentsComponent
Dim result, strFileName, strDescription, nUserEditID
	
Call InitializeComponents()

TestError Err.Description

Set result = new JSONResult

If InStr(Request.ServerVariables("CONTENT_TYPE"), "multipart/form-data") > 0 Then
	If kMaximumUploadRequestSize > 0 Then
		If Request.TotalBytes > kMaximumUploadRequestSize * 1024 Then GenerateError obLanguage("Common","kErrMaxAllowedAttachSizeWasReached")
	End If
	
	Set resRequestParsing = objUploadComponent.ParseRequest()
	Set objUploadComponent = Nothing

	If Not resRequestParsing.IsSuccess Then
		Call Dispose()
		GenerateError obLanguage("Common", "kUnexpErr")
	End If
	
	Set requestData = resRequestParsing.Data
	Set resRequestParsing = Nothing

	Call SaveAttachment()
	Call Dispose()
Else
	Call Dispose()
	GenerateError obLanguage("Common", "kUnexpErr")
End If

TestError Err.Description

Response.Write result

Sub SaveAttachment()
	Dim blobData, nMaxSize, resultCreate, tempAttachmentId

	strPage = ""
	If Not IsDull(requestData("page")) Then
		strPage = requestData("page").Param.Value
	End If

	strDescription = ""
	If Not IsEmpty(requestData("description")) Then strDescription = requestData("description").Param.Value
	
	strFileName = requestData("fileName").Param.Value
	blobData = requestData("fileAttachment").Param.Bytes

	If IsDull(requestData("userId")) Then
		nUserEditID = 0
	Else
		nUserEditID = GetSafeLng(requestData("userId").Param.Value, 0)
	End If

	nMaxSize = CLng(IIF(strPage = "message", kMailFile_MaxSize_KB, kAnnounceAndOtheAttachFile_MaxSize_KB) * 1024)

	Set resultCreate = oAttachmentsComponent.CreateFileAttachment(blobData, strFileName, strDescription, nUserEditID, nMaxSize)
	If Not resultCreate.IsSuccess Then GenerateError resultCreate.Message

	nAttachmentID = resultCreate.Data
	
	If strPage = "subjectplan" Then
		If IsDull(requestData("planId")) Then
			nPlanId = 0
		Else
			nPlanId = GetSafeLng(requestData("planId").Param.Value, 0)
		End If
	
		If nPlanId <> 0 Then
			Call oAttachmentsComponent.AttachAttachmentToSubjectPlan(nPlanId, nAttachmentID)
		End If
	End If

	Call obTokenMgr.SetData(strToken, stDocIDs, nAttachmentID & ",")
	Call result.AddData("attachmentId", nAttachmentID)

	tempAttachmentId = obTokenMgr.GetData(strToken, stAttachmentID)
	
	If IsDull(tempAttachmentId) Then
		Call obTokenMgr.SetData(strToken, stAttachmentID, nAttachmentID)
	Else
		Call obTokenMgr.SetData(strToken, stAttachmentID, tempAttachmentId & "," & nAttachmentID)
	End If

	Set resultCreate = Nothing
End Sub

Sub InitializeComponents()
	Set objUploadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUploadComponent")
	Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")
End Sub

Sub Dispose
	Set oAttachmentsComponent = Nothing
	Set objUploadComponent = Nothing
	Set resRequestParsing = Nothing
	Set requestData = Nothing
End Sub%>