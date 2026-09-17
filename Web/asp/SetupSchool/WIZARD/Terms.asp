<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Terms_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kStep = 8

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kTitleTerms")
End Function

Function CanBack()
	CanBack = False
End Function

Sub ReadState()
	bIsWizard = True
	InitStep
End Sub

Sub WriteState()
	If objTerms.EOF Then strNext=""
End Sub

'Sub DrawLinkButtons
'End Sub
'
'Sub DrawButtons
'	DrawSpecialButtons
'End Sub
'%>
