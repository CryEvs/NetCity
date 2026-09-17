<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim print
Const knFormNumber = 2

Function AdditionArchCondition()
	AdditionArchCondition = True
End Function

Function ConnectionSwitchIsNeeded( bIsYearArchived )
	ConnectionSwitchIsNeeded = False
End Function

Sub ReadState()
	readonly = TRUE
	strShoolYearStart = GetSafeStr(Request("strStartSchoolYear"), 4, "")
	Set objSchoolParams = objNSNET.GetSchoolInfoParams(strSchoolId)
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
	Call GetYearDatesInfo()
	Call LoadShoolInfoEx( 0,kMainSchoolInfoPage,-1)
%>
<!-- #INCLUDE FILE="Sections/Section0_inc.asp" -->
<%
End Sub
%>
