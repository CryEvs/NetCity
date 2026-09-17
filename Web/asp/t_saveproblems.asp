<!-- #INCLUDE FILE=scripts/common.asp -->
<% ' © 2007-2008 IRTech. All rights reserved.
'--------- Page Parameters -------
'	AT=<Access Token>
'	LAID=<Activity ID>
'	name=<Problem Name>
'	parameters=<Problem Parameters>

Function GenerateError( strText )
	If Not bIsDebug Then On Error Resume Next
'	Response.Clear
	Response.Write "<HTML lang=""" & obContext.LocalSettings.DefaultLanguage & """><HEAD></HEAD><BODY>"& obLanguage("Common","kErrorMsg") &": " & strText & "</BODY></HTML>"
	Response.End
End Function

Dim strTargetForm, strActivityID, lngPageNumber

strTargetForm = "AssignmentEdit"

strActivityID = DB2HTML(Request("LAID"))

%>
<html lang="<%=obContext.LocalSettings.DefaultLanguage%>">
<head>
<title>Задания</title>

<script>
<!--
var wndSubmit = null;
if( window.parent )
	wndSubmit = window.parent.window.opener;
else
	wndSubmit = window.opener;
if( wndSubmit && wndSubmit.addItem ){
<% 
If Request.Form("name").Count <> Request.Form("parameters").Count Then
	GenerateError("Неверные параметры")
End If
Dim i
For i=1 To Request.Form("name").Count
if IsEmpty(Request.Form("lexile")(i)) then
Response.Write "wndSubmit.addItem( """ & (DB2Java(Server.HTMLEncode(Request.Form("name")(i)))) & _
	""","""&(DB2Java(Server.HTMLEncode(Request.Form("parameters")(i))))&""", """&strActivityID&""",""" & "" & """ );" & CHR(10)
else
Response.Write "wndSubmit.addItem( """ & DB2Java(Server.HTMLEncode(Request.Form("name")(i))) & _
	""","""&(DB2Java(Server.HTMLEncode(Request.Form("parameters")(i))))&""", """&strActivityID&""",""" & (DB2Java(Request.Form("lexile")(i))) & """ );" & CHR(10)
end if
Next
%>
}

if( window.parent )
	window.parent.window.close();
else
	window.close();
if( wndSubmit && wndSubmit.AllItemsIsSent) {
	wndSubmit.AllItemsIsSent();
}

//--></script>
</head>
<body BGCOLOR="WHITE"  onLoad="window.focus();"></body>
</html>
