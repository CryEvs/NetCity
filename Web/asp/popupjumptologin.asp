<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = True
Response.Charset = "utf-8"
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<%
Const kLogonPageStandard = "?AL=Y"
Const kLogonPageWinAuth = "/WinAuthWelcome.asp"
Const kWinLogonAccess = "WIN_LOGON_ACCESS"

Dim strLogonPage

If IsWinLogonAccess() Then 
	strLogonPage = kLogonPageWinAuth
Else
	strLogonPage = DB2Value(DB2Java(Request("jmp")))
End If

Function GetVersionedResLink(strResourceUrl)
	GetVersionedResLink = strResourceUrl & "?ver=" & Application("NS_VERSION") & "." & Application("NS_REVISION")
End Function

Function GetVersionedJsLink(strScriptName)
	GetVersionedJsLink = GetVersionedResLink("/js/" & strScriptName)
End Function
	
Function IsWinLogonAccess()
End Function
%>

<HTML>
<HEAD>
<TITLE></TITLE>
<SCRIPT><!--

function closeAllOpeners(window)
{
	if(window.opener && !window.opener.closed) {
		closeAllOpeners(window.opener);
		if(typeof window.closeChildWindows === 'function')
			window.closeChildWindows();
		if(!window.closed)
			window.close();
	}
	else {
		window.alert("<%=obLanguage("Login","kYouLoggedOutFromTheSystem")%>");
		if(window.isMainWindow != undefined) {
			window.focus();
			window.location.href='<%=strLogonPage%>';
		}
		else {
			window.close();
		}
	}
}

closeAllOpeners(window);

//-->
</SCRIPT>
</HEAD>
<BODY >
</BODY>
</HTML>
