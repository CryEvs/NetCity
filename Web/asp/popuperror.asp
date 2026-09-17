<%@ Language=VBScript %>

<% ' © 2007-2008 IRTech. All rights reserved.

Option Explicit
Response.Buffer = TRUE
Response.Charset = "utf-8"
'--------- Page Parameters -------
'	AT=<Access Token>
'	ET=<Text of the error message>

Dim strErrorText, strFunctionalityType
strErrorText = DB2Value(DB2Java(Request("ET")))
strFunctionalityType = FuncType_EducMgr

%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/Popup.asp -->

<html>
<title><%=obLanguage("Common","kErrorMsg")%>...</title>
<head><%
	Call DrawCssLinks()
	Call DrawJSLibsLinks()%>
	<script>
	function ShowMessage() {
		$.show.error("<%= strErrorText %>")
			.then(function(){window.close();});
	}
	</script>
</head>
<BODY BGCOLOR="WHITE" COLOR="BLACK" VLINK="BLUE" LINK="BLUE" OnLoad="ShowMessage()">
<p>&nbsp;</p>
</body>
</html>