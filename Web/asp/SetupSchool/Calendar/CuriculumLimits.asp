<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Limits_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleLimits")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = miSetupSchoolCalendar
End Function
Function GetPageTabItem()
	GetPageTabItem = tbCuriculumLimits
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Sub SpecialMain
End Sub

Sub onHead()
	If readonly Then Exit Sub
	onSpecialHead
End Sub

Sub DrawFilters( strForm )%>
<tr><td>
	<form name="<%=strForm%>" method="post"><%=WriteObligatoryTags()%></form>
</td></tr><%
End Sub

Sub DrawButtons()
	If readonly Then Exit Sub
	DrawSpecialButtons
	Response.Write "<br>"
	If False Then Response.Write ShowButton("EditSteps","EditSteps", "JavaScript:DoSubmit( document.MainForm, 'CuriculumSteps.asp');", "EditSteps", "EditSteps")
End Sub

Sub onDrawPage()
	Call DrawButtonsFilters( True , "FilterForm" )%>
	<form name="MainForm" method="post" ACTION="/asp/SetupSchool/Calendar/CuriculumLimitsSave.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("MAX_GRADE", nSchoolMaxGrade))%>
	<%DrawTable%>
	</form><%
End Sub
%>
