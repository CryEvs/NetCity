<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/SubjectGroups_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kBackPage = "/asp/SetupSchool/Calendar/SubjectGroups.asp"
Const kSelfPage = "/asp/SetupSchool/Calendar/EditSubjectGroup.asp"

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight( arSchoolSubjects )
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSchoolSubjects
 	bTabInternalPage = True
End Function

Function GetPageTitle()
	GetPageTitle = strTitle
End Function

Sub onHead()
	Call onSpecialHead()
End Sub%>
