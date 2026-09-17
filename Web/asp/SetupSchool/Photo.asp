<!-- #INCLUDE FILE="../headernoscreen_Year.asp" -->
<!-- #INCLUDE file="Photo_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strEditUserID
Dim arrValidUserIDs, i, strFileName, transferResult
Dim objDownloadComponent, result

On Error Resume Next

Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")
TestError err.Description

strEditUserID = GetSafeID(Request("UID"), Null)

' validation
arrValidUserIDs = obTokenMgr.GetData(strToken, stValidIDs)
If Not IsArray(arrValidUserIDs) Then GenerateError obLanguage("Common", "kInvalidParameter")
If UBound(arrValidUserIDs) < 0 Then GenerateError obLanguage("Common", "kInvalidParameter")

Do
	For i = 0 To UBound(arrValidUserIDs)
		If strEditUserID = GetSafeID(arrValidUserIDs(i), Null) Then Exit Do
	Next
	GenerateError obLanguage("Common","kInvalidParameter")
	Exit Do
Loop

'get bytes
strFileName = objNSNET.GetUserPhotoName(strEditUserID)
Set result = objNSNET.GetUserPhoto(strEditUserID)

If Not result.IsSuccess Then
	Response.Redirect strCommonImgFolder & "/PhotoNo.jpg"
End If

If IsDull(strFileName) Then 
	Response.Redirect strCommonImgFolder & "/PhotoNo.jpg"
End If

Set transferResult = objDownloadComponent.TransferData(result.Data, strFileName)
If Not transferResult.IsSuccess Then
	GenerateError transferResult.Message
End If

Sub GenerateError(strErrorMsg)
	Response.Redirect strCommonImgFolder & "/PhotoError.gif"
End Sub%>