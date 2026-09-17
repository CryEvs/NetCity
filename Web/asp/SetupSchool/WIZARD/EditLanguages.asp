<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/SubjectGroups_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kStep = 3

Const kBackPage = "/asp/SetupSchool/Wizard/Subjects.asp"
Const kSelfPage = "/asp/SetupSchool/Wizard/EditLanguages.asp"

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kWizardTitleLanguages",strFunctionalityType)
End Function
Function isHelpAvailable()
	isHelpAvailable = False
End Function%>