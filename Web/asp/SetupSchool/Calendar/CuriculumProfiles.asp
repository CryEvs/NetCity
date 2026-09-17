<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Profiles_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleProfiles",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = miSetupSchoolCalendar
End Function
Function GetPageTabItem()
	GetPageTabItem = tbCuriculumProfiles
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Sub specialMain
End Sub

Sub onHead()
	If readonly Then Exit Sub
	onSpecialHead
End Sub

Sub DrawFilters( strForm )
End Sub

Sub DrawButtons()
	If readonly Then Exit Sub
	DrawSpecialButtons
End Sub

Sub onDrawPage()
	Call DrawButtonsFilters( True , "MainForm" )%>
	<form name="MainForm" method="post" ACTION="/asp/SetupSchool/Calendar/CuriculumProfilesSave.asp"><%=WriteObligatoryTags()%><%DrawTable%></form><%
End Sub
%>
