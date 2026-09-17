<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim print
const kFormPageNum = 10

Sub ReadState()
	readonly = TRUE
	strCommonYearID = GetSafeStr(obTokenMgr.GetData( strToken, "stCommYearID" ),-1,"")
	Call InitializeCommonYears
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	print = TRUE
	Call LoadShoolInfoEx( 85, kFormPageNum, -1)
%>
<!-- #INCLUDE FILE="Sections/Section3.3_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section3.4_inc.asp" -->
<%
End Sub
%>
