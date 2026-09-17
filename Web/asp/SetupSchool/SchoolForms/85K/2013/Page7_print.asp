<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim print
const kFormPageNum = 7

Sub ReadState()
	readonly = TRUE
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	print = TRUE
	Call LoadShoolInfoEx( 85, kFormPageNum, -1)
%>
<!-- #INCLUDE FILE="Sections/Section2.7_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section2.8_inc.asp" -->
<%
End Sub
%>
