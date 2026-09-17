<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Session.CodePage = 65001
Response.Charset = "utf-8"
Response.ContentType = "text/html"

Dim objUploadComponent, resRequestParsing, requestData
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/PopupNo.asp -->
<%

If InStr(Request.ServerVariables("CONTENT_TYPE"), "multipart/form-data") > 0 Then
	If obTokenMgr.Application()("UploadLimits").MaximumUploadRequestSizeLimit > 0 Then
		'maximum uploaded attachments size limit setted
		If Request.TotalBytes > obTokenMgr.Application()("UploadLimits").MaximumUploadRequestSizeLimit * 1024 Then 
			GenerateError obLanguage("Common","kErrMaxAllowedAttachSizeWasReached")
		End If
	End If
	Set objUploadComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IUploadComponent")
	Set resRequestParsing = objUploadComponent.ParseRequest()
	Call obComponentMgr.ReleaseComponent(objUploadComponent)
	
	Set objUploadComponent = Nothing
	If Not resRequestParsing.IsSuccess Then
		GenerateError obLanguage("Common","kUnexpErr")
	End If

	Set requestData = resRequestParsing.Data
	Set resRequestParsing = Nothing

	strToken = GetSafeStr(requestData("AT"), MAX_AT_SIZE, "")
	If IsDull(strToken) Then
		strToken = GetSafeStr(Request.QueryString("AT"), MAX_AT_SIZE, Null)
	End If
	Call GetTokenParams()
Else
	GenerateError obLanguage("Common","kUnexpErr")
End If

Set objUploadComponent = NOTHING
Set resRequestParsing = NOTHING
%>
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<!-- #INCLUDE FILE=scripts/SecurityRoles.asp -->
<!-- #INCLUDE FILE=scripts/PageStates.asp -->

<%
Sub DisposeUpload()
	Set requestData = Nothing
End Sub
%>