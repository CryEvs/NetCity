<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim print
const knFormNumber = 1
Const kFormPageNum = 5

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
<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section9_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section10_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section11_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section12_inc.asp" -->
<%
End Sub
%>
