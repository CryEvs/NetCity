<!-- #INCLUDE FILE=sa_inc.asp -->

<%' © 2007-2015 IRTech. All rights reserved.

Dim bSaveAll, strSaveAll, strBackPage, strRangeID
Dim strLeftBound, strRightBound, i

On Error resume next
If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")

Sub ReadState()
	strSaveAll = Request("SaveAll")
	bSaveAll = (strSaveAll = "1")
	strRangeID = GetSafeID(Request("RangeID"), "-1")
	strSchoolID = GetSafeID(Request("SCHOOLID"), GetSafeID(obTokenMgr.GetData(strToken, stEMSchoolID), "-1"))
End Sub

Sub Main()
	If bSaveAll Then
		For i=1 To Request("RID").Count
			strRangeID = GetSafeID(Request("RID")(i), "-1")
			strLeftBound = GetSafeStr(Request("LB")(i), 39,"")
			strRightBound = GetSafeStr(Request("RB")(i), 39,"")
			If strRangeID <> "-1" Then Call objNSNET.SaveAllowedIPRanges(strRangeID, strSchoolID, strLeftBound, strRightBound)
		Next
		i = Request("RID").Count+1
		strLeftBound = GetSafeStr(Request("LB")(i), 39,"")
		strRightBound = GetSafeStr(Request("RB")(i), 39,"")
		If Not IsDull(strLeftBound) Then Call objNSNET.SaveAllowedIPRanges(-1, strSchoolID, strLeftBound, strRightBound)
	Else
		Call objNSNET.DeleteAllowedIPRanges(strRangeID)
	End If
	RedirectTo "DefineSafeNetworks.asp", Array("SCHOOLID", GetSafeLng( Request("SCHOOLID"),0 ))
End Sub

%>
