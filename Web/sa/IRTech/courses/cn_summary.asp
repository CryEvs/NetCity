<%@ Language=VBScript %>
<%
Dim strAT, strTTSURL, strParameters
strAT			= Server.URLEncode( Request("AT") )
strTTSURL		= Server.URLEncode( Request("TTSURL") )
strParameters	= Server.URLEncode( Request("Parameters") )

Response.Redirect "Learn/cn_summary.asp?AT=" & strAT & "&TTSURL=" & strTTSURL & "&Parameters=" & strParameters & "&LAID=" & Request("LAID")
%>
