<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/Limits_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bCanIUP
Dim objIUPCuriculumLimits

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleLimits")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbCuriculumLimits
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Sub ReadState()
	bCanIUP = (strFunctionalityType = kFuncType_Common Or strFunctionalityType = kFuncType_Profession)
	If bCanIUP Then
		' Дополнительная проверка, чтобы лишний раз не показывать раздел для ИУП, если нагрузка для него не задана
		If readonly Then
			Set objIUPCuriculumLimits = objNSNET.GetIUPLimitList(strCurrYearID)
			If objIUPCuriculumLimits.EOF Then
				bCanIUP = False
			End If
		End If
	End If
End Sub

Sub SpecialMain
End Sub

Sub onHead()
	If readonly Then Exit Sub
	onSpecialHead
End Sub

Sub DrawButtons()
	If readonly Then Exit Sub

	DrawSpecialButtons
End Sub

Sub DrawLinkButtons()
	If False Then Response.Write ShowButton("EditSteps","EditSteps", "JavaScript:DoSubmit( document.MainForm, 'CuriculumSteps.asp');", "EditSteps", "EditSteps")
End Sub

Sub onDrawPage()
	OpenPanelEx "Предельные нагрузки", "title_UPLimits", "", False, "panel-danger"%>
		<form name="MainForm" method="post" ACTION="/asp/SetupSchool/Calendar/Curriculum/CuriculumLimitsSave.asp">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags(Array("MAX_GRADE", nSchoolMaxGrade))%>
			<%Call DrawButtonPanel()%>
			<%Call DrawTable(True)%>
		</form>
		<form name="FilterForm" method="post"><%=WriteObligatoryTags()%></form><%
	ClosePanel
	If bCanIUP Then
		Call DrawIUPForm()
	End If
End Sub


Sub DrawIUPForm()
	OpenPanelEx obLanguage("SetupSchoolCalendar","kTitleIUPLimits"), "title_IUPLimits", "", False, "panel-success"%>
		<form name="IUPForm" method="post" ACTION="/asp/SetupSchool/Calendar/Curriculum/CuriculumLimitsSave.asp">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags(Array("MAX_GRADE", nSchoolMaxGrade, "IUP", 1))%><%

			Call DrawIUPButtonsFilters()

			Set objComponentList = objNSNET.GetUnusedIUPComponentList(strCurrYearID)
			If Not IsEmpty(objIUPCuriculumLimits) Then
				Set objCuriculumLimits = objIUPCuriculumLimits
			Else
				Set objCuriculumLimits = objNSNET.GetIUPLimitList(strCurrYearID)
			End If

			Call DrawTable(False)%>
		</form><%
	ClosePanel
End Sub

' См. Function DrawButtonsFilters
Function DrawIUPButtonsFilters()
	DrawIUPButtons
End Function

Sub DrawIUPButtons()
	If readonly Then Exit Sub

	OpenBtnGroup
	ButtonSave "controller.doSave('IUPForm', true);", obLanguage("Common","kSave")
	ButtonReset "resetScreen('IUPForm');", obLanguage("Common","kReset")
	ButtonAdd "controller.addLimits('IUPForm', true)", obLanguage("Common","kAdd")
	CloseBtnGroup
End Sub
%>
