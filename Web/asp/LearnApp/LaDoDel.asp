<!-- #INCLUDE FILE=../headernoscreen_YearNo.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strDel, arrDel
Dim transaction

Sub ReadState()
	strDel = GetSafeStr( Request("DELSTR"), -1, null )
	arrDel = Split( strDel, "|" )
End Sub

Sub Main()
	Dim i

	On Error Resume Next

	transaction = objNSNET.GetTransaction()
	For i = 0 To Ubound( arrDel ) - 1
		If objLA.DeleteProductById(arrDel(i)) Then Call objNSNET.DeleteLACourse_WT(transaction, arrDel(i))
	Next
	objNSNET.CommitTransaction(transaction)

End Sub

Sub MakeRedirect()
	Call obTokenMgr.SetData( strToken, stCommonAlert, CStr(obLanguage("LearnApp","kLADeleted")))
	RedirectTo "LaList.asp", Null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>
