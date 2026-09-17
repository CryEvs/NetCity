<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim print
Const kFormPageNum = 2

Sub ReadState()
	readonly = TRUE
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	print = TRUE
	Call LoadShoolInfoEx( StatForm_Osh5, kFormPageNum, -1 )
%>
<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
<%
End Sub
%>
