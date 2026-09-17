<%@ Language=VBScript %>
<%
Option Explicit
On Error Resume Next
Response.Buffer = True
'Response.Expires = 0
Response.AddHeader "pragma", "no-cache"
Dim strPageTitle, strOnLoad, strOnUnLoad

nInfoType = 2
strOnLoad = ""
strOnUnLoad = ""
%>
<!-- #INCLUDE FILE=adovbs.asp -->
<!-- #INCLUDE FILE=common.asp -->
<!-- #INCLUDE FILE=screen.asp -->
