<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.ContentType = "application/vnd.ms-excel"
' when exporting to Excel 97, instead of DB2HTML use DB2HTML_BR
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/Popup.asp -->
<!-- #INCLUDE FILE=scripts/Auth.asp -->
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<!-- #INCLUDE FILE=scripts/SecurityRoles.asp -->
<!-- #INCLUDE FILE=scripts/PageStates.asp -->
<!-- #INCLUDE FILE=scripts/ScreenExcel.asp -->
<!-- #INCLUDE FILE=scripts/PageTitle.asp -->
<%
Response.CodePage = 1251
Response.AddHeader "Content-Disposition", "attachment; filename=""" & comHelper.AspHelper.NormalizeFileName(GetXlsFileName()) & """"
%>
