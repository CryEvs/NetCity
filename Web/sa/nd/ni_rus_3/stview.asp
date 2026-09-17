<%@ Language=VBScript %>
<%
Dim strAT, strTTSURL, strEXTURL, strCID, strAID
strAT		= Server.URLEncode( Request("AT") )
strTTSURL	= Server.URLEncode( Request("TTSURL") )
strEXTURL	= Server.URLEncode( Request("EXTURL") )
strCID		= Server.URLEncode( Request("CID") )
strAID		= Server.URLEncode( Request("AID") )
Response.Redirect "common/stview.asp?AT=" & strAT & "&TTSURL=" & strTTSURL & "&EXTURL=" & strEXTURL & "&CID=" & strCID & "&AID=" & strAID
%>
