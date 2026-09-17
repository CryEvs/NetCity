<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim print
const knFormNumber = 9
const kFormPageNum = 2

Function AdditionArchCondition()
	AdditionArchCondition = True
End Function

Function ConnectionSwitchIsNeeded( bIsYearArchived )
	ConnectionSwitchIsNeeded = False
End Function

Sub ReadState()
	readonly = TRUE
	strShoolYearStart = GetSafeStr(Request("strShoolYearStart"), 4, "")
End Sub

%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%

Sub onDrawPage()
	Call GetYearDatesInfo()
	print = TRUE
	Call LoadShoolInfoEx( knFormNumber, kFormPageNum, -1 )
%>
<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
<%
End Sub
%>
