<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
'--------- Page Parameters -------
Dim strErrorText, strPage
If Not IsEmpty(Session("LOGINERROR")) Then
	strErrorText = Session("LOGINERROR")("ET")
	strPage = Session("LOGINERROR")("PR")
	Set Session("LOGINERROR") = Nothing
Else
	strErrorText = DB2HTML_BR(Request("ET"))
	strPage = DB2HTML(Request("PR"))
End If%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<HTML>
<HEAD>
	<TITLE><%=obLanguage("Common","kErrorMsg")%></TITLE>
	<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8">
</HEAD>
<BODY BGCOLOR="WHITE" COLOR="BLACK" VLINK="BLUE" LINK="BLUE" >
<BR>
<%= strErrorText %><br>
<BR><BR><BR><BR><BR><BR><BR><BR><BR><BR>
<HR>
<i><%=NETSCHOOL_PRODUCT_NAME%></i>&nbsp;<%=NETSCHOOL_VERSION & "." & NETSCHOOL_REVISION%> &nbsp;&nbsp;<%=NETSCHOOL_VERSION_DATE%>
</BODY>
</HTML>
