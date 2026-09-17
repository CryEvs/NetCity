<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim nVariantID, nSGID
Dim i, cnt, rsTmp, n
Dim arrData

If Not (HasUserRight(arCurrMgmCreateAll) Or HasUserRight(arCurrMgmCreate) )Then GenerateError obLanguage("Common","kErrPageAccess")
On Error Resume Next 
cnt = Request("SGID").Count
If cnt > 0 Then
	ReDim arrData(1,cnt-1)
	n = 0
	For i = 1 To cnt
		nSGID = Request("SGID")(i)
		nVariantID = Request("SGID_" & nSGID) 
		If Not IsDull( nVariantID ) Then
			arrData(0,n) = CLng(nVariantID)
			arrData(1,n) = CLng(nSGID)
			n=n+1
		End If
	Next
	If n > 0 Then
		ReDim Preserve arrData(1,n-1)
		On Error Resume Next
		Call objNSNET.AssignVariant2CSG(arrData)
		TestError(obLanguage("Curriculum","kCantAssignVariant2Class"))
	End If
	Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("Curriculum","kUsingVariantsInJournalWasSaved",strFunctionalityType)) )
End If

RedirectTo "VariantsCSGs.asp", null
%>
