<%@ Language=VBScript %>
<%
Dim strAT, strTTSURL, strStudentID, strAssignmentID
strAT			= Server.URLEncode( Request("AT") )
strTTSURL		= Server.URLEncode( Request("TTSURL") )
strStudentID    = Server.URLEncode( Request("STUDENTID") )  
strAssignmentID = Server.URLEncode( Request("AID") )  

Response.Redirect "Learn/cn_results.asp?AT=" & strAT & "&TTSURL=" & strTTSURL & "&STUDENTID=" & strStudentID & "&AID=" &strAssignmentID & "&LAID=" & Request("LAID")
%>

