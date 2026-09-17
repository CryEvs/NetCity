<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/Profiles_inc.asp -->

<% ' © 2007-2016 IRTech. All rights reserved.
Const kStep = 4

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kTitleProfiles", strFunctionalityType)
End Function

Function CanBack()
	CanBack = False
End Function

Sub specialMain
	InitStep
End Sub

Function CmdCheckClass()
	Set CmdCheckClass = objNSNET.IsProfileGradeInTemplate_Prepare(strSchoolID)
End Function

%>
