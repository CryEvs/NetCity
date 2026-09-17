<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strEditUserID, resRequestParsing, objUploadComponent, requestData
Dim strFileName, result

On Error Resume Next

Set result = new JSONResult

Call InitializeComponents()

If InStr(Request.ServerVariables("CONTENT_TYPE"), "multipart/form-data") > 0 Then
	If obTokenMgr.Application()("UploadLimits").MaximumUploadRequestSizeLimit > 0 Then
		If Request.TotalBytes > obTokenMgr.Application()("UploadLimits").MaximumUploadRequestSizeLimit * 1024 Then GenerateError obLanguage("Common","kErrMaxAllowedAttachSizeWasReached")
	End If
	
	Set resRequestParsing = objUploadComponent.ParseRequest()
	Set objUploadComponent = Nothing

	If Not resRequestParsing.IsSuccess Then
		Call Dispose()
		GenerateError obLanguage("Common", "kUnexpErr")
	End If
	
	Set requestData = resRequestParsing.Data
	Set resRequestParsing = Nothing

	Call SavePhoto()
	Call Dispose()
Else
	Call Dispose()
	GenerateError obLanguage("Common", "kUnexpErr")
End If

Sub SavePhoto()
	strEditUserID = GetSafeID(requestData("userId").Param.Value, Null)

	strFileName = requestData("fileName").Param.Value
	If IsDull(strFileName) Then GenerateError obLanguage("Photo", "kPhotoFile_Empty")

	Dim imageData, nImageSize

	imageData = requestData("file").Param.Bytes
	nImageSize = UBound(imageData)

	If nImageSize = -1 Then
		Call Dispose()
		GenerateError obLanguage("Photo", "kPhotoFile_Empty")
	End If

	If nImageSize > obTokenMgr.Application()("UploadLimits").PhotoFileSizeLimit * 1024 Then
		Call Dispose()
		GenerateError obLanguage("Photo", "kPhotoFile_TooLarge") & obTokenMgr.Application()("UploadLimits").PhotoFileSizeLimit & " KB"
	End If

	Call objNSNET.SetUserPhoto(strEditUserID, strFileName, imageData)
	result.Message = CStr(obLanguage("Photo","kPhotoWasSaved"))
End Sub

Response.Write result

Sub Dispose
	Set objUploadComponent = Nothing
	Set resRequestParsing = Nothing
	Set requestData = Nothing
End Sub

Sub InitializeComponents()
	Set objUploadComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IUploadComponent")
End Sub%>