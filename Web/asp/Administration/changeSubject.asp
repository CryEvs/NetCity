<!-- #INCLUDE VIRTUAL="/asp/headersimple.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strSubjectID, strNewSubjectID, strSubjectName, strSubjectAbbrName, bIsFederal, strAction
Dim nResult
Dim cnt, arrItems, i

strAction = GetSafeStr(Request("ACT"),-1,"")
strSubjectID  = GetSafeID(Request("SubjectID"),"0")
Select Case strAction
Case "delete"
	cnt = Request("delItem").Count
	If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	ReDim arrItems(cnt-1)
	For i = 1 To cnt
		arrItems(i-1) = Request("delItem")(i)
	Next
	Call objNSNET.DeleteGlobalSubject(arrItems)
	TestError obLanguage("ServAdmin","kCantDeleteItems")
Case "replace"
	strNewSubjectID = GetSafeID(Request("NSubjectID"),"0")
	If CLng(strNewSubjectID) = CLng(strSubjectID) Then GenerateHTMLError obLanguage("ServAdmin","kCantReplaceToSelf"), obTokenMgr.GetData(strToken, stBackPage), strToken
	Call objNSNET.ReplaceGlobalSubject(strSubjectID, strNewSubjectID)
Case Else
	bIsFederal = GetSafeBool(Request("isFederal") = "on", False)
	if not bIsFederal Then
		strSubjectName  = GetSafeStr(Request("NYN"),100,GetSafeStr(Request("oldNYN"),100,""))
		strSubjectAbbrName  = GetSafeStr(Request("NAN"),70,GetSafeStr(Request("oldNAN"),70,""))
	Else
		strSubjectName  = GetSafeStr(Request("NYN"),100,"")
		strSubjectAbbrName  = GetSafeStr(Request("NAN"),70,"")
	End If
	nResult = objNSNET.EditGlobalSubject(strSubjectID, strSubjectName, strSubjectAbbrName, bIsFederal)
	TestError( obLanguage("ServAdmin","kErrorCantChangeGlobalSubject") )
	If nResult = 1 Then
		GenerateError obLanguage("ServAdmin","kErrorGlobalSubjectExists")
	End If
End Select

RedirectTo "Refs.asp", Array("ParamID", "-5")

Function GetErrorPageMode
	GetErrorPageMode = kErrPageMode_Transfer
End Function
%>
