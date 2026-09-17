<!-- #INCLUDE VIRTUAL=/asp/headersimple.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CreateNewYear_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strNext
Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleCreateNewYear")
End Function

Sub ReadState()
End Sub

Sub onHead()
	onSpecialHead
End Sub

Sub DrawButtons()
	ButtonSave "ok_check_db('MainForm','');", obLanguage("Common","kSave")
	ButtonCancel "goBack(document.MainForm, 'Years.asp')", obLanguage("Common","kBack")
End Sub
%>
