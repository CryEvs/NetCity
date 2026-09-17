<!-- #INCLUDE FILE="../headerUpload.asp" -->
<!-- #INCLUDE FILE="ReportImport_inc.asp" -->
<% ' © 2007-2011 IRTech. All rights reserved.
Dim fileStream, strFileName, strFormat
Dim aGroupID

aGroupID = GetSafeLng(requestData("GroupID"), Null) 'Спросить про INT
fileStream = requestData("file")
strFileName = requestData("file").Param.GetHeader("filename")

Call DisposeUpload()

obTokenMgr.SetData strToken, kImportReportFile, fileStream

If InStr(strFileName, ".json")  > 0 Then
	strFormat = "json"
Else
	strFormat = "xml"
End If

obTokenMgr.SetData strToken, kImportReportFormat, strFormat

RedirectTo "ReportImportXMLPrev.asp", Array("GroupID", aGroupID)
%>