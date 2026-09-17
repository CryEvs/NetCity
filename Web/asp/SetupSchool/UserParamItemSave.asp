<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const MaxItemNameSize = 200

Dim strParamID
Dim arrItems, i, cnt
Dim strItemID, strItemName, strItemName2, nRes

If Not HasUserRight(arEditReferenceBook) Then GenerateError obLanguage("Common","kErrPageAccess")

strParamID = GetSafeID(Request("ParamID"), Null)
If Request("ACT") = "delete" Then
	cnt = Request("delItem").Count
	If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	ReDim arrItems(cnt-1)
	For i = 1 To cnt
		arrItems(i-1) = Request("delItem")(i)
	Next
	Call objNSNET.RemoveUserParamItems(arrItems)
	TestError obLanguage("SetupSchool","kCantDeleteItems")
Else
	strItemID = GetSafeID(Request("ItemID"), Null)
	strItemName = GetSafeStr(Request("ITEMNAME"), MaxItemNameSize, Null)
	strItemName2 = GetSafeStr(Request("ITEMNAME2"), MaxItemNameSize, "")
	nRes = objNSNET.SaveUserParamItem(strItemID, strParamID, strSchoolID, strItemName, strItemName2, Empty)
	TestError obLanguage("SetupSchool","kCantSaveItem")
	If nRes = -1 Then GenerateError obLanguage("SetupSchool","kItemNameExists")
End If

RedirectTo "RefBooks.asp?", Array("ParamID", strParamID)
%>
