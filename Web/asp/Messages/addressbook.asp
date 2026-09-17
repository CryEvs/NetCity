<%@ Language=VBScript%>
<% ' © 2007-2013 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Session.CodePage = 65001
Response.Charset = "utf-8"
Response.ContentType = "text/html"

Dim strField, strAddrs, strForm
Dim strVer

strForm = Request("F")
strField = Request("FN")
strAddrs = Request("FA")

' Внимание!!! Если использовать getVer() для javascript:
' <frame ... VER=" + getVer()> - то кэширование не устраняется
' поэтому берём пришедший случайный параметр и его передаём как сейчас - кэширования нет
strVer = Request("VER")

%>
<html>
<head><title><%=obLanguage("Messages","kAddrBook")%></title>
<script>
<!--
var forceClosing = false;
function ResetOpener() { if( !forceClosing && opener ) opener.windABook=null; }
//-->
</script>
</head>
<frameset rows="*,60" cols="*" frameborder="YES" BORDER="1" framespacing="0" onUnload="ResetOpener()"> 
	<frameset rows="*" cols="50%,*">
	<!--frameset rows="*" cols="35%,35%,*"-->
		<frame scrolling="AUTO" name="addrbkleft" marginheight="3" src="/asp/Messages/addrbkleft.asp?AT=<%=Request("AT")%>&amp;VER=<%=strVer%>">
		<frame scrolling="AUTO" name="addrbkright" marginheight="3" src="/asp/Messages/addrbkright.asp?AT=<%=Request("AT")%>&amp;F=<%=strForm%>&amp;FN=<%=strField%>&amp;FA=<%=strAddrs%>&amp;VER=<%=strVer%>">
	</frameset>
	<frame scrolling="AUTO" rows="*" name="addrbkbottom" src="/asp/Messages/addrbkbottom.asp?AT=<%=Request("AT")%>&amp;VER=<%=strVer%>">
</frameset>
<noframes><body bgcolor="#FFFFFF"><%=obLanguage("Messages","kFramesAreNotSupported")%></body></noframes>
</html>
