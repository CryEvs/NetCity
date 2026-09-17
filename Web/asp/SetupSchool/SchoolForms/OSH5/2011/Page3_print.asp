<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim print
Const knFormNumber = 5
Const kFormPageNum = 3

Sub ReadState()
	readonly = TRUE
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	print = TRUE
	Call LoadShoolInfoEx( knFormNumber, kFormPageNum, -1 )
%>
<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
<%
End Sub
%>
