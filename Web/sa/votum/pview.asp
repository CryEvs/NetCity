<%@ Language=VBScript %>
<%
Dim strAT, strTTSURL, strRO
strAT		= Server.URLEncode( Request("AT") )
strTTSURL	= Server.URLEncode( Request("TTSURL") )
Response.Redirect "common/index.asp?AT=" & strAT & "&TTSURL=" & strTTSURL & "&RO=1"
%>
