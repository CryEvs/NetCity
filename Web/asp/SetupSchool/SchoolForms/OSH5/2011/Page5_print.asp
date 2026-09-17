<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim print
Const knFormNumber = 5
Const kFormPageNum = 5

Sub ReadState()
	readonly = TRUE
	strShoolPrevYearStart = GetSafeLng(Request("strShoolYearStart"), 2010) - 1
	strShoolPrevYearEnd = GetSafeStr(Request("strShoolYearStart"), 4, "")
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	print = TRUE
	Call LoadShoolInfoEx( knFormNumber, kFormPageNum, -1 )
%>
<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
<%
End Sub
%>
