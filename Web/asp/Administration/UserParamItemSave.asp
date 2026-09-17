<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Const MaxItemNameSize = 200
Const MaxExamTitleSize = 50
Const MaxExamAbbrSize = 7

Dim strParamID
Dim arrItems, i, cnt
Dim strItemID, strItemName, strItemName2, strItemName3, nRes
Dim bStaffPos
Dim strAction, strNewItemID

If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")

strParamID = GetSafeID(Request("ParamID"), Null)
bStaffPos = (CStr(Request("StaffPos")) = "1")

strAction = GetSafeStr(Request("ACT"),-1,"") 
If strAction = "delete" Then
	cnt = Request("delItem").Count
	If cnt = 0 Then Call GenerateHTMLError ( obLanguage("Common","kInvalidParameter"),"/asp/administration/Refs.asp",strToken)
	ReDim arrItems(cnt-1)
	For i = 1 To cnt
		arrItems(i-1) = Request("delItem")(i)
	Next
	If strParamID = kExamTypeParID Then
		Call objNSNET.RemoveExamTypes(arrItems)
	ElseIf strParamID = kNationParID Then
		Call objNSNET.RemoveNationItems(arrItems)
	Else
		Call objNSNET.RemoveUserParamItems(arrItems)
	End If
	TestError obLanguage("ServAdmin","kCantDeleteItems")
Else
	strItemID = GetSafeID(Request("ItemID"), Null)

    If strAction = "replace" Then
	    strNewItemID = GetSafeID(Request("NItemID"), Null)	
	    If CLng(strNewItemID) = CLng(strItemID) Then GenerateHTMLError obLanguage("ServAdmin","kCantReplaceToSelf"), obTokenMgr.GetData(strToken, stBackPage), strToken
	    Call objNSNET.ReplaceParamItem(strParamID, strItemID, strNewItemID)
    Else
	
	    If strParamID = kExamTypeParID Then
		    strItemName = GetSafeStr(Request("ITEMNAME"), MaxExamTitleSize, "")
		    strItemName2 = GetSafeStr(Request("ITEMNAME2"), MaxExamAbbrSize, "")

		    nRes = objNSNET.SaveExamType(strItemID, strItemName, strItemName2)
		    TestError obLanguage("ServAdmin","kCantSaveItem")
		    If nRes = -1 Then GenerateError obLanguage("ServAdmin","kExamNameOrAbbrExists")
	    Else
		    strItemName = GetSafeStr(Request("ITEMNAME"), MaxItemNameSize, Null)
		    If strParamID <> kNationParID Then
			    strItemName2 = GetSafeStr(Request("ITEMNAME2"), MaxItemNameSize, "")
				strItemName3 = Empty
				If bStaffPos Then
					strItemName3 = GetSafeStr(Request("ITEMNAME3"), MaxItemNameSize, "")
					If strItemName3 = "-1" Then strItemName3 = ""
				End If
				nRes = objNSNET.SaveUserParamItem(strItemID, strParamID, 0, strItemName, strItemName2, strItemName3)
				TestError obLanguage("ServAdmin","kCantSaveItem")
		    Else
				strItemName2 = Empty
				strItemName3 = Empty
			    nRes = objNSNET.SaveNationItem(strItemID, strItemName)
			    TestError obLanguage("ServAdmin","kCantSaveItem")
		    End If
	    End If
	    If nRes = -1 Then GenerateError obLanguage("ServAdmin","kItemNameExists")
    End If
End If

RedirectTo "Refs.asp?", Array("ParamID", strParamID)

Function GetErrorPageMode
	GetErrorPageMode = kErrPageMode_Transfer
End Function
%>
