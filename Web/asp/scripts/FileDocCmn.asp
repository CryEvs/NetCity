<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim oDownLoad, objFSO
Dim strFileName, strFileNameOrig
Dim strDBFolder, strFolder1, strFullFileName
Dim nPos
Dim strDocFolder
Dim strDocIDs, strID
Dim objFileSystemComponent, fileData, nFileSize, oTransferResult, objDownloadComponent

On Error Resume Next

Call Main()

strDocIDs = "," & CStr(obTokenMgr.GetData(strToken, stDocIDs))
If InStr(strDocIDs, "," & strID & ",") = 0 Then 
	strDocIDs = "," & CStr(obTokenMgr.GetData(strToken, stMsgDocIDs))
	If InStr(strDocIDs, "," & strID & ",") = 0 Then 
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
End If

Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")

Set oTransferResult = objDownloadComponent.TransferData(fileData, strFileNameOrig)
Call obComponentMgr.ReleaseComponent(objDownloadComponent)

TestResult oTransferResult, obLanguage("Common", "kLoadError")

Set objFSO = Nothing
Set oDownLoad = Nothing
Set objFileSystemComponent = Nothing
Set objDownloadComponent = Nothing

TestError obLanguage("Common", "kLoadError")

' as popup!
Sub GenerateError( strText )
	If Not bIsDebug Then On Error Resume Next
	WriteToLog kUETError, strText
	Response.Redirect "/asp/popuperror.asp?ET=" & Server.URLEncode( strText )
End Sub
%>
