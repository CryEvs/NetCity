<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = True
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
	strLogonPage = DB2HTML(Request("jmp"))
End If

Function IsWinLogonAccess()
End Function

%><!--Jumptologin page-->
<HTML>
<HEAD>
<TITLE></TITLE>
<SCRIPT LANGUAGE="JavaScript">
<!--
  function jumpTo()
  {
    <%If Not comHelper.AspHelper.IsAbsoluteUrl(strLogonPage) Then%>
      if (self.parent.frames.length!=0)
        self.parent.location.href = '<%=strLogonPage%>';
      else
        top.location.href = '<%=strLogonPage%>';
    <%End If%>
  }
//-->
</SCRIPT>
</HEAD>
<BODY OnLoad="jumpTo();">
</BODY>
</HTML>
