<% ' © 2007-2017 IRTech. All rights reserved.

Sub SetDefaultParameters_WT(transaction)
	Call objNSNETWork.SetDefaultParameters_WT(transaction, nQueryID)
End Sub

Sub UpdateQueryObjects_WT(transaction)
	Dim arrQObjInfo
	Dim nCnt, i
	Dim strQObjID, strIsLeft

	nCnt = Request("QObjID").Count
	If nCnt = 0 Then Exit Sub

	ReDim arrQObjInfo(1, nCnt - 1)
	For i = 1 To nCnt
		strQObjID = GetSafeID(Request("QObjID")(i), Null)
		arrQObjInfo(0, i - 1) = CLng(strQObjID)
		strIsLeft = GetSafeStr(Request("ISLEFT_" & strQObjID), 1, "")
		arrQObjInfo(1, i - 1) = strIsLeft
	Next
	
	Call objNSNETWork.UpdateQueryObjects_WT(transaction, arrQObjInfo)
End Sub
%>
