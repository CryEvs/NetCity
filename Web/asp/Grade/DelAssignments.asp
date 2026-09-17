<!-- #INCLUDE FILE="../headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim i, strAID, strVaildIDs
Dim cnt, arrData
Dim dtCurTime, strSubjClassID

If Not HasUserRight(arLAEditSelf) Then GenerateError obLanguage("Common","kErrPageAccess")

strVaildIDs = GetSafeStr(obTokenMgr.GetData(strToken, stAvailableSID), -1, "" )

cnt = Request.Form("AID").Count
If cnt > 0 Then ' delete Assignments
	ReDim arrData(cnt-1)
	For i = 1 To cnt
		arrData(i-1) = GetSafeID(Request.Form("AID")(i),Null)
		If InStr(strVaildIDs, "a" & arrData(i-1) & "a") = 0 Then GenerateError obLanguage("Grade","kErrDelAssigns")
	Next

	On Error Resume Next

	Call objNSNET.RemoveLaAssignments(arrData, False)
	TestError obLanguage("Grade","kErrDelAssigns")

	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Grade","kAssignsDeleteSuccess")))
End If

RedirectTo "LAAssignments.asp?", Null%>