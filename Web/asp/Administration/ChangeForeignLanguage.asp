<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strLanguageID, strNewLanguageID, strLanguageName, strAction
Dim nResult
Dim cnt, arrItems, i

strAction = GetSafeStr(Request("ACT"),-1,"") 
strLanguageID  = GetSafeID(Request("ForeignLangID"),"0")
Select Case strAction
Case "delete"
	cnt = Request("delItem").Count
	If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	ReDim arrItems(cnt-1)
	For i = 1 To cnt
		arrItems(i-1) = Request("delItem")(i)
	Next
	Call objNSNET.DeleteForeignLanguage(arrItems)
	TestError obLanguage("ServAdmin","kCantDeleteItems")
Case Else
	strLanguageName  = GetSafeStr(Request("LangName"),70,"")
	nResult = objNSNET.EditForeignLanguage(strLanguageID, strLanguageName)
	TestError( obLanguage("ServAdmin","kErrorCantChangeForeignLanguage") )
	If nResult = 1 Then
		GenerateError obLanguage("ServAdmin","kErrorForeignLanguageExists")
	End If
End Select

RedirectTo "Refs.asp", Array("ParamID", "-6")

Function GetErrorPageMode
	GetErrorPageMode = kErrPageMode_Transfer
End Function

%>
