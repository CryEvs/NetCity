<%@ Language=VBScript %>
<%
Dim nCLID, nTID
Dim strAT, strTTSURL, strRO

nCLID		= Server.URLEncode( Request("CLID") )
nTID		= Server.URLEncode( Request("TID") )
strAT		= Server.URLEncode( Request("AT") )
strTTSURL	= Server.URLEncode( Request("TTSURL") )
strRO		= Server.URLEncode( Request("RO") )

Response.Redirect "Learn/cn_articles.asp?AT=" & strAT & "&TTSURL=" & strTTSURL & "&CLID=" & nCLID & "&TID=" & nTID & "&RO=" & strRO & "&LAID=" & Request("LAID")
%>
