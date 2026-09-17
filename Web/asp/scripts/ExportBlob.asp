<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const maxContentLength = 1500000

Dim exportDataLen, filename, exportdata
Dim i, start, data, reportPartsLen

reportPartsLen = GetSafeLng(obTokenMgr.GetData(strToken, stMsgReport), 0)
obTokenMgr.SetData strToken, stMsgReport, Null

If reportPartsLen = 0 Then
	exportdata = GetSafeStr(Request("exportdata"), -1, "")
Else
	i = 0
	While i < reportPartsLen
		data = obTokenMgr.GetData(strToken, stMsgReport&"_"&CStr(i))
		exportdata = exportdata & data
		obTokenMgr.SetData strToken, stMsgReport&"_"&CStr(i), Null
		i = i + 1
	WEnd
End If

filename = GetSafeStr(Request("filename"), -1, "")

Response.Clear
Response.Cookies("fileDownloadToken") = Request("VER")
Response.AddHeader "Content-Disposition", "attachment; filename=" & filename
Response.CharSet = ""
Response.ContentType = "application/vnd.ms-excel"
	
exportDataLen = Len(exportdata)
start = 1
While start <= exportDataLen
	Response.Write Mid(exportdata, start, maxContentLength)
	Response.Flush
	start = start + maxContentLength
WEnd

Response.End
%>