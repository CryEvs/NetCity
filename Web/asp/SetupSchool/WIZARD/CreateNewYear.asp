<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CreateNewYear_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kStep = 1

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kWizardTitleCreateYear")
End Function

Sub InitStep()
	Dim objRS

	nMaster = objNSNET.InitWizardStep(strSchoolID, kStep)
	If nMaster = 0 Then nMaster = kStep
	If( nMaster >= kWizardSteps ) Then nMaster = kWizardSteps-1
	Call InitDisplaySteps()
End Sub

Sub ReadState()
	InitStep
End Sub

Sub DrawLinkButtons()
	ButtonSave "ok_check_db('MainForm','SaveNewYearW.asp');", obLanguage("Common","kSave")
End Sub
%>
