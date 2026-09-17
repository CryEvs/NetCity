<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE

Dim nInitialSessionCodePage

nInitialSessionCodePage = Session.CodePage
Session.CodePage = 1251
Response.Charset = "windows-1251"
Response.ContentType = "text/xmlns"

%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/Popup.asp -->
<!-- #INCLUDE FILE=scripts/Auth.asp -->
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<!-- #INCLUDE FILE=scripts/PageStates.asp -->
<!-- #INCLUDE FILE=scripts/ScreenXML.asp -->
<%

' Перекрыта из Popup.asp
' Восстанавливаем Session.CodePage, иначе сообщения об ошибках на русском - портятся.
' Если вообще не выставлять Session.CodePage - сверху, то портится русский текст в результирующем XML.
Sub GenerateError( strText )
	Session.CodePage = nInitialSessionCodePage
	If Not bIsDebug Then Call SaveError : On Error Resume Next
	WriteToLog kUETError, strText
	If bIsAjaxCall Then Call WriteAjaxErrorResponse( -1, strText) : Exit Sub
	Response.Redirect "/asp/popuperror.asp?ET=" & Server.URLEncode( strText )
End Sub
%>
