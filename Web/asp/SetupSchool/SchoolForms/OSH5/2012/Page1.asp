<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 1
End Function

Sub ReadState()
	Call InitSchoolFormComponent()
	Set objSchoolParams = objNSNET.GetSchoolInfoParams(strSchoolId)
	strFullSchoolName = strSchoolName & " (" & objNSNET.GetSchoolName(strSchoolId) & ")"
End Sub

Sub DrawPage()
	Call LoadShoolInfoEx( 0, kMainSchoolInfoPage, -1)%>
<!-- #INCLUDE FILE="Sections/Section0_inc.asp" -->
<%End Sub%>
