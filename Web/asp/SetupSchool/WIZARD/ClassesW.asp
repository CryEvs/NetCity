<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/ClassManagement/Classes_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kStep = 9
Const kForClasses = False

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kWizardTitleClasses",strFunctionalityType)
End Function

Function CanBack()
	CanBack = False
End Function

Sub SpecialReadState()
	bWizard = True
End Sub

Sub SpecialMain()
	bAll = True 
	InitStep ' for GetPageTitle
	If objTeachersRs.EOF Then GenerateHTMLError obLanguage("Filter","kNoTeachersGB",strFunctionalityType), "/asp/SetupSchool/WIZARD/StaffW.asp", strToken & "&PT=" & GetPageTitle()
	If objGrades.EOF Then GenerateHTMLError obLanguage("ClassManagement","kNoHours"), "/asp/SetupSchool/WIZARD/Plan.asp", strToken & " & PT=" & GetPageTitle()
	strEditSubjectTeachersScriptName = "EditSubjectTeachers.asp"
	strClassesRelaysScriptName = "/asp/SetupSchool/WIZARD/ClassesRelaysW.asp"
End Sub

Sub DrawLinkButtons()
	DrawSpecialButtons
End Sub
%>
