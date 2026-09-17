<!-- #INCLUDE FILE="../headerUpload.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kFileMaxSizeMB = 8

Dim bMediaPresent
Dim nFileSize, strLAId
Dim strFileName, strFolderName, strExt, strFullFileName, strMediaFolder, strMediaFilesList
Dim strMessage
Dim arrRet
Dim objFSO, objFolder

Sub ReadState()
	strFileName = requestData("file").Param.GetHeader("filename")
	If IsDull( strFileName ) Then GenerateError obLanguage("LearnApp","kServErrFileEmpty")
	strLAId = requestData("LAN")
	If IsDull(strLAId) Then GenerateError obLanguage("LearnApp","kServErrLANameEmpty")
End Sub

Sub Main()
	Dim strRet, strPicFolder
	Dim objFolder

	On Error Resume Next
	Set objFSO = CreateObject("Scripting.FileSystemObject")

	strExt = objFSO.GetExtensionName(strFileName)
	If IsDull(strExt) Then GenerateError obLanguage("LearnApp","kServErrInvalidExt")

	strFolderName = GetDBFolder(objFSO) & "\" & strUserId

	If Not objFSO.FolderExists(strFolderName) Then
		objFSO.CreateFolder(strFolderName)
		TestError obLanguage("LearnApp","kServErrCantCreateFolder")
	End If

	strFullFileName = strFolderName & "\" & strUserId & "." & strExt
	
	If objFSO.FileExists(strFullFileName) Then objFSO.DeleteFile(strFullFileName)

	Dim oFileComponent, oResult
	Set oFileComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileSystemComponent")

	Dim fileData
	fileData = requestData("file").Param.Bytes

	nFileSize = UBound(fileData)
	If nFileSize = 0 Then
		GenerateError obLanguage("LearnApp","kServErrFileEmpty")
	End If

	If nFileSize > obTokenMgr.Application()("UploadLimits").LAImportFileSizeLimit * 1024 Then
		GenerateError obLanguage("LearnApp","kServErrFileTooLarge") & obTokenMgr.Application()("UploadLimits").LAImportFileSizeLimit & " Kb"
	End If

	Set oResult = oFileComponent.CreateFile(strFullFileName, fileData)
	If Not oResult.IsSuccess Then
		GenerateError obLanguage("LearnApp","kServErrCantSaveFile")
	End If
	
	strPicFolder = Server.MapPath("/sa/pictures/")

	Set objLA = obComponentMgr.Resolve("NetCity.Components.Abstraction.ILaComponent")
	strRet = objLA.LA_Import(strFullFileName, strLAId, strPicFolder)
	arrRet = Split(strRet, "|")
	strMessage = obLanguage("LearnApp","kLAImported") & ".\n" & obLanguage("LearnApp","kLAImportedTotal") & " " & Clng(arrRet(0)) + Clng(arrRet(1)) + Clng(arrRet(2)) & "\n" & " - "&obLanguage("LearnApp","kLAImportAdded") & ": " & arrRet(0) & "\n" &_
		" - " & obLanguage("LearnApp","kLAImportRefreshed") & ": " & arrRet(1) & "\n" & " - "&obLanguage("LearnApp","kLAImportSkipped") & ": " & arrRet(2) & "\n" & obLanguage("LearnApp","kLAImportedMedia") & " " & Clng(arrRet(3))
	
	TestError obLanguage("LearnApp","kServConvertError")
	
	objFSO.DeleteFolder(strFolderName)
	TestError obLanguage("LearnApp","kServErrCantDeleteFolder")

End Sub

Sub MakeRedirect()
		Call obTokenMgr.SetData(strToken, stCommonAlert, DB2HTML_BR(strMessage))
		RedirectTo "/angular/school/activities", Null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()%>