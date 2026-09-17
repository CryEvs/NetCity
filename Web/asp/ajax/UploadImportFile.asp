<!-- #INCLUDE FILE="../headerupload.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim result, strImportFileText, strSeparator, strImportFileName
	
Set result = new JSONResult

strSeparator = GetSafeStr(requestData("Separator"), 1, ",")

strImportFileText = requestData("file").Value
strImportFileName = requestData("file").Param.GetHeader("filename")

Call obTokenMgr.SetData(strToken, "ImportFile", strImportFileText)
Call obTokenMgr.SetData(strToken, "ImportFileName", strImportFileName)
Call obTokenMgr.SetData(strToken, "Separator", strSeparator)

If Err.number <> 0 Then
	result.IsError = True
	result.Message = Err.Description
	Call result.AddData("Result", "ERROR")
End If

Call DisposeUpload()

Response.Write result%>