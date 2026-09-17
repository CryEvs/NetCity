<% ' © 2007-2008 IRTech. All rights reserved.
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

Function GetScreenColorScheme
	GetScreenColorScheme = "school"
End Function

Sub GenerateError( strText )
	If Not bIsDebug Then Call SaveError : On Error Resume Next
	WriteToLog kUETError, strText
	If bIsAjaxCall Then Call WriteAjaxErrorResponse( -1, strText) : Exit Sub
	Response.Redirect "/asp/popuperror.asp?ET=" & Server.URLEncode( strText )
End Sub

Sub GenerateErrorWithTransaction(transaction,  strText )
	objNSNET.RollbackTransaction(transaction)
	If Not bIsDebug Then On Error Resume Next
	WriteToLog kUETError, strText
	If bIsAjaxCall Then Call WriteAjaxErrorResponse( nErrorCode, strText) : Exit Sub
	Response.Redirect "/asp/popuperror.asp?ET=" & Server.URLEncode( strText )
End Sub

Sub GenerateWarning( strText, dest )
	If Not bIsDebug Then On Error Resume Next
	WriteToLog kUETWarning, strText
	If bIsAjaxCall Then Call WriteAjaxErrorResponse( -1, strText) : Exit Sub
	Response.Redirect "/asp/popuperror.asp?ET=" & Server.URLEncode( strText )
End Sub

Sub RedirectJump( nErrorCode, strText )
	If IsEmpty( bIsAjaxCall ) Then bIsAjaxCall = CheckIsAjaxCall()
	If bIsAjaxCall Then Call WriteAjaxErrorResponse( nErrorCode, strText) : Exit Sub
	Response.Redirect( "/asp/popupjumptologin.asp?jmp=" & GetJumpPage() )
End Sub

Sub CheckUserID()
	If strUserID = "0" Then
		Call RedirectJump( -3, obLanguage("Common","kTimeOutOccured4Ajax") )
	End If
End Sub
%>
