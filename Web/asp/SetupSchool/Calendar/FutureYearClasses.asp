<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/ClassManagement/Classes_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim nMaster
Const kFilterForm = "FilterForm"
Const kForClasses = True
Dim nFutureYear

Function GetPageTitle()
	GetPageTitle = kTitleFutureClasses
End Function

Function GetPageMenuItem()
	GetPageMenuItem = miSetupSchoolCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = tbYear
End Function

Function hasUserRightsOnPage()
	If HasUserRight( arClassMgmCreateClass ) Then bAll=True :  hasUserRightsOnPage = True: Exit Function
	If HasUserRight( arClassMgmViewClassSubjAll ) Then bAll=False : hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialReadState()
    bFutureMode = True
End Sub

Sub SpecialMain()
	If objTeachersRs.EOF Then GenerateError Application("kNoTeachersGB")(strFunctionalityType)
	strEditSubjectTeachersScriptName = "/asp/SetupSchool/Calendar/EditSubjectTeachers.asp"
	If objGrades.EOF Then GenerateError kNoHours
	strClassesRelaysScriptName = "/asp/ClassManagement/ClassesRelays.asp"
End Sub

Sub onHead()
    onSpecialHead
End Sub

Sub DrawFilters( strForm )%>
<tr><td><form name="<%=strForm%>" method="post"><%=WriteObligatoryTags()%></form></td></tr><%
End Sub

Sub DrawButtons()
    DrawSpecialButtons
End Sub

Sub onDrawPage()
	Call DrawButtonsFilters( True , kFilterForm )
	DrawTable
End Sub
%>
