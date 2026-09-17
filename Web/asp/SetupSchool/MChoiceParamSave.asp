<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strEditUserID, strBackPage, strParamID, strSYDepend
Dim arrItems, i, cnt

strEditUserID = GetSafeID(Request("UID"), Null)
strBackPage = GetSafeStr(Request("BackPage"), 255, Null)
strParamID = GetSafeID(Request("MChoiceParamID"), Null)
strSYDepend = GetSafeStr(Request("MChoiceSYDepend"), 1, Null)

cnt = Request("MCHOICEITEMS").Count
If cnt = 0 Then
	arrItems = Empty
Else
	ReDim arrItems(cnt-1)
	For i = 1 To cnt
		arrItems(i-1) = Request("MCHOICEITEMS")(i)
	Next
End If

Call objNSNET.SetMChoiceParam(strEditUserID, IIf(strSYDepend = "Y", strCurrYearID, Null), strParamID, arrItems)
TestError obLanguage("SetupSchool","kErrCannotUpdate")

RedirectTo strBackPage & "?", Null
%>
