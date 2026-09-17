<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.
Const MaxAidCommentSize = 2000

Dim strParentID
Dim dtAid, strAidType, strAidResult, strAidComment
Dim arrAids, i, cnt, nIndex
Dim nRes

If Not (HasUserRight(arUsersEditStudents) Or HasUserRight(arEditInfoSelf)) Then GenerateError obLanguage("Common","kErrPageAccess")

strParentID = GetSafeID(Request("UID"), Null)

If Request("ACT") = "delete" Then
	cnt = Request("delAid").Count
	If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	ReDim arrAids(1, cnt-1)
	' (0, i) - AidDate, (1, i) - AidType
	For i = 1 To cnt
		nIndex = Request("delAid")(i)
		arrAids(0, i-1) = Str_YYYYMMDD2Date(GetSafeStr(Request("AIDDATE")(nIndex), 8, Null))
		arrAids(1, i-1) = GetSafeID(Request("AIDTYPE")(nIndex), Null)
	Next

	Call objNSNET.RemoveParentAids(strParentID, strCurrYearID, arrAids)
	TestError obLanguage("SetupSchool","kCantDeleteAids")
Else

	If Request("ACT") = "save" Then
		cnt = Request("AIDDATE").Count
		If cnt > 0 Then
			ReDim arrAids(3, cnt-1)
			' (0, i) - AidDate, (1, i) - AidType, (2, i) - AidResult, (3, i) - AidComment
			For i = 1 To cnt
				arrAids(0, i-1) = Str_YYYYMMDD2Date(GetSafeStr(Request("AIDDATE")(i), 8, Null))
				arrAids(1, i-1) = GetSafeID(Request("AIDTYPE")(i), Null)
				strAidResult = GetSafeID(Request("AIDRESULT")(i), "-1")
				If strAidResult = "-1" Then strAidResult = Null
				arrAids(2, i-1) = strAidResult
				arrAids(3, i-1) = GetSafeStr(Request("AIDCOMMENT")(i), MaxAidCommentSize, "")
			Next
			'dbgstr cnt
			Call objNSNET.SaveParentAids(strParentID, strCurrYearID, arrAids)
			TestError obLanguage("SetupSchool","kCantSaveAids")
		End If
	End If

	If Not IsDull(Request("ADT")) Then
		' create new aid
		dtAid = GetSafeDate(Request("ADT"), Null)
		strAidType = GetSafeID(Request("AidTypeNew"), Null)
		strAidResult = GetSafeID(Request("AidResultNew"), "-1")
		If strAidResult = "-1" Then strAidResult = Null
		strAidComment = GetSafeStr(Request("AidCommentNew"), MaxAidCommentSize, "")

		nRes = objNSNET.CreateParentAid(strParentID, strCurrYearID, dtAid, strAidType, strAidResult, strAidComment)
		TestError obLanguage("SetupSchool","kCantCreateAid")
		If nRes = -1 Then GenerateError obLanguage("SetupSchool","kAidExists")
	End If

End If

RedirectTo "ParentAidEdit.asp", Array("UID", strParentID)

Function Str_YYYYMMDD2Date(strDate)
	Str_YYYYMMDD2Date = DateSerial(Left(strDate, 4), Mid(strDate, 5, 2), Right(strDate, 2))
End Function
%>
