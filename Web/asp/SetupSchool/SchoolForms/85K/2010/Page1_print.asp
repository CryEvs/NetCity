<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim print
const kFormPageNum = 1

Sub ReadState()
	readonly = TRUE
	Set objSchoolParams = objNSNET.GetSchoolInfoParams(strSchoolId)
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	print = TRUE
	Call LoadShoolInfoEx( 85, kFormPageNum,-1)
%>
<!-- #INCLUDE FILE="Sections/Section0_inc.asp" -->
<%
End Sub
%>
