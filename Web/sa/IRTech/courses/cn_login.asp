<%@ Language=VBScript %>
<%
Dim strAT, strTTSURL, strClassID
strAT			= Server.URLEncode( Request("AT") )
strTTSURL		= Server.URLEncode( Request("TTSURL") )
strClassID		= Server.URLEncode( Request("CID") )

Response.Redirect "Learn/cn_login.asp?AT=" & strAT & "&TTSURL=" & strTTSURL & "&CID=" & strClassID & "&LAID=" & Request("LAID")
%>

