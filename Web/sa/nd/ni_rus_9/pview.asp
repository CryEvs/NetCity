<%@ Language=VBScript %>
<%
Dim strAT, strTTSURL, strProblemName, strParameters
strAT		= Server.URLEncode( Request("AT") )
strTTSURL	= Server.URLEncode( Request("TTSURL") )
strProblemName	= Server.URLEncode( Request("PROBLEMNAME") )
strParameters	= Server.URLEncode( Request("PARAMETERS") )
Response.Redirect "common/pview.asp?AT=" & strAT & "&TTSURL=" & strTTSURL & "&PROBLEMNAME=" & strProblemName & "&PARAMETERS=" & strParameters
%>
