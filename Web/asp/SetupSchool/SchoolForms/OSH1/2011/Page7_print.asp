<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim print
Const knFormNumber = 1
Const kFormPageNum = 7

Sub ReadState()
	readonly = TRUE
	Call GetYearDatesInfo()
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	print = TRUE
	Call LoadShoolInfoEx( knFormNumber, kFormPageNum, -1 )
%>
<!-- #INCLUDE FILE="Sections/Section15_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section16_inc.asp" -->
<%
End Sub
%>
