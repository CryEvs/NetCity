<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/TermTypes_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kStep = 7

Dim strBackPage

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kTermTypes")
End Function

Function CanBack()
	CanBack = False
End Function

Sub ReadState()
	bIsWizard = True
End Sub

Sub ReadState()
	strBackPage = Request.ServerVariables("SCRIPT_NAME")
End Sub

Sub WriteState()
	InitStep
	Call obTokenMgr.SetData(strToken, stBackPage, strBackPage)
End Sub

Sub DrawSpecialButtons()
	DrawSaveResetButtons
End Sub
%>
