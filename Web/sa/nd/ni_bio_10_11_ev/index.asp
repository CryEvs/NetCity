<%@ Language=VBScript %>
<%
Dim strAT, strTTSURL, strRO
strAT		= Server.URLEncode( Request("AT") )
strTTSURL	= Server.URLEncode( Request("TTSURL") )
strRO		= Server.URLEncode( Request("RO") )
Response.Redirect "common/index.asp?AT=" & strAT & "&TTSURL=" & strTTSURL & "&RO=" & strRO
%>
