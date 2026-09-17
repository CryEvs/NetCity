<!-- #INCLUDE VIRTUAL="/asp/headersimple.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strTypeID, strTypeName, strABBR, strAction
Dim nResult
Dim cnt, arrItems, i

strAction = GetSafeStr(Request("ACT"),-1,"")
strTypeID  = GetSafeID(Request("ItemID"),"0")

Select Case strAction
Case "delete"
	cnt = Request("delItem").Count
	If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	ReDim arrItems(cnt-1)
	For i = 1 To cnt
		arrItems(i-1) = Request("delItem")(i)
	Next
	Call objNSNET.DeleteAssignmentType(arrItems)
	TestError obLanguage("ServAdmin","kCantDeleteItems")
Case Else
	strTypeName = GetSafeStr(Request("TypeName"),30,"")
	strABBR = GetSafeStr(Request("AbbrName"),2,"")
	nResult = objNSNET.EditAssignmentType(strTypeID, strTypeName, strABBR)
	TestError(obLanguage("ServAdmin","kErrorCantChangeAssignmentType"))
	If nResult = -1 Then
		GenerateError obLanguage("ServAdmin","kErrorAssignmentTypeExists")
	End If
End Select

RedirectTo "Refs.asp", Array("ParamID", GetSafeStr(Request("ParamID"), -1, ""))

Function GetErrorPageMode
	GetErrorPageMode = kErrPageMode_Transfer
End Function
%>
