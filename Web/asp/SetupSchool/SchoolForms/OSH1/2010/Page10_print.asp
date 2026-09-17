<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim print
const knFormNumber = 1
Const kFormPageNum = 10

Sub ReadState()
	readonly = TRUE
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	Call GetYearDatesInfo()
	print = TRUE
	Call LoadShoolInfoEx( knFormNumber, kFormPageNum, -1 )
%>
<!-- #INCLUDE FILE="Sections/Section19_inc.asp" -->
<%
End Sub
%>
