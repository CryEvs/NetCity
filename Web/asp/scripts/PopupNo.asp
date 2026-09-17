<% ' © 2007-2013 IRTech. All rights reserved.
'--------------------------------------------------------------------
' GenerateError( strText )
' Redirect browser to the error message page
'
'	strText = This text will be displayed on the error page
'
'--------------------------------------------------------------------
Function isDrawHeader()
	isDrawHeader = False
End Function

Sub GenerateError( strText )
	If Not bIsDebug Then Call SaveError : On Error Resume Next
	WriteToLog kUETError, strText
	Call RedirectAnyError(-1, strText, Null)
End Sub

Sub GenerateErrorWithTransaction(transaction, strText )
	If Not bIsDebug Then On Error Resume Next
	objNSNET.RollbackTransaction(transaction)

	WriteToLog kUETError, strText
	Call RedirectAnyError(-1, strText, "")
End Sub

Sub GenerateHTMLError( strText, strDest, strAT )
	If Not bIsDebug Then On Error Resume Next
	WriteToLog kUETError, strText

	Call RedirectHTMLError( -1, strText, strDest, strAT, "", False )
End Sub

Sub GenerateHTMLErrorWT(transaction, strText, strDest, strAT )
	If Not bIsDebug Then On Error Resume Next
	objNSNET.RollbackTransaction(transaction)
	Call GenerateHTMLError( strText, strDest, strAT )
End Sub

Sub GenerateHTMLError_Token( strDest, strAT ) ' текст ошибки храниться в AT с ключём stHTMLError
	Dim strText
	If Not bIsDebug Then On Error Resume Next

	strText = CStr(obTokenMgr.GetData(strToken, stHTMLError))
	WriteToLog kUETError, strText
	Call RedirectHTMLError( -1, strText, strDest, strAT, "", True )
End Sub

Sub GenerateWarning( strText, dest )
	If Not bIsDebug Then On Error Resume Next

	WriteToLog kUETWarning, strText
	Call RedirectAnyError(-1, strText, dest)
End Sub

Sub RedirectJump( nErrorCode, strText )
	If IsEmpty( bIsAjaxCall ) Then bIsAjaxCall = CheckIsAjaxCall()
	If bIsAjaxCall Then Call WriteAjaxErrorResponse( nErrorCode, strText) : Exit Sub
	Response.Redirect( "/asp/jumptologin.asp?jmp=" & GetJumpPage() )
End Sub

Sub CheckUserID()
	Dim strSecrValue, strSecrName, strCookieVal
	If strUserID <> "0" Then
		strSecrName = obTokenMgr.GetData(strToken,"SECRNAME" )
		strSecrValue = obTokenMgr.GetData(strToken,"SECRVALUE" )
		If Not IsEmpty(strSecrName) Then strCookieVal = Request.Cookies("ESRNSec")(strSecrName)
		If IsEmpty(strCookieVal) OR strSecrValue <> strCookieVal Then
			Call RedirectJump( -1, "jump to login")
		End If
	End If
	If strUserID = "0" Then
		Call RedirectJump( -3, obLanguage("Common","kTimeOutOccured4Ajax") )
	End If
End Sub
%>
