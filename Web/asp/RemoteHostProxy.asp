<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.Charset = "utf-8"
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<%
Sub RedirectTo( strURL )
	If (strURL <> "") Then
		objNSNET.CheckActivityUrl(strURL )
	End If

	Dim i, queryString, name, value
	queryString = Request.ServerVariables("QUERY_STRING")
	If (queryString <> "") Then
		strURL = strURL & "?" & queryString
	End If

	If (False And Request.Form.Count = 0) Then
		Response.Redirect strURL
	Else
		Response.Write "<html>"
		Response.Write "<head>"
%>
<script language="javascript"><!--
function center( wnd )
{
	var info = navigator.userAgent; 
	var isIE = (info.indexOf("MSIE") > 0 && info.indexOf("Win") > 0 && info.indexOf("Windows 3.1") < 0);

	if( isIE && wnd.screen && wnd.moveTo && wnd.document.body.clientWidth && wnd.document.body.clientHeight) {
		var dw, dh;
		dw = (wnd.screen.availWidth -  wnd.document.body.clientWidth)/2;
		dh = (wnd.screen.availHeight - wnd.document.body.clientHeight)/2;
		wnd.moveTo(dw,dh);
	}
}
//--></script>
<%
		Response.Write "</head>"

		Response.Write "<body>"
		Response.Write "<center><h3>Пожалуйста, подождите...</h3></center>"
		Dim strMethod, strLAID, strForm
		strLAID = Request.QueryString("LAID")
		strMethod = "post"
		Response.Write "<FORM NAME='RF' METHOD='" & strMethod & "' ACTION='" & strURL & "'>"
		For i = 1 To Request.Form.Count
			name = Request.Form.key(i)
			value = Request.Form(i)
			Response.Write "<INPUT TYPE='HIDDEN' NAME='" & name & "' VALUE='" & value & "'>"
		Next
		Response.Write "</FORM>"
		Response.Write "<script>"
		Response.Write "center(self);"
		Response.Write "document.forms['RF'].submit();"
		Response.Write "</script>"
		Response.Write "</body></html>"
	End If
End Sub

	RedirectTo( DB2HTML(Request("PROXYURL")) )
%>
