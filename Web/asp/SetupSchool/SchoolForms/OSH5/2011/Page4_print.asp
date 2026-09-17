<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim print
Const knFormNumber = 5
Const kFormPageNum = 4

Sub ReadState()
	readonly = TRUE
	strShoolYearStart =  GetSafeStr(Request("strShoolYearStart"), 4, "")
	strShoolYearEnd = GetSafeStr(Request("strEndSchoolYear"), 4, "")
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	print = TRUE
	Call LoadShoolInfoEx( knFormNumber, kFormPageNum, -1 )
%>
<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
<%
End Sub
%>
