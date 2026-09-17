<!-- #INCLUDE FILE="../headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim partIndex, reportPart, reportPartsLen
Dim reportParts

partIndex = GetSafeLng(Request("PARTINDEX"), 0)
reportPart = GetSafeStr(Request("REPORTPART"), -1, "")
reportPartsLen = GetSafeLng(Request("REPORTPARTSLEN"), 0) 

Call obTokenMgr.SetData(strToken, stMsgReport, reportPartsLen)
Call obTokenMgr.SetData(strToken, stMsgReport&"_"&CStr(partIndex), reportPart)

if Err.number <> 0 Then
	obTokenMgr.SetData strToken, stMsgReport&"_"&CStr(partIndex), Null
End If

TestError "Ошибка части "&CStr(partIndex)
Call WriteJsonResult(Empty, False, 0)%>