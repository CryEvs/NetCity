<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE File="EditSchoolSubject_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objRSSubjectFields, bIsWizard

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSchoolSubjects
 End Function

Sub SpecialReadState()
	bIsWizard = False
End Sub

Sub SpecialMain()
	Set objRSSubjectFields = objNSNET.GetSubjectFieldList(strSchoolID)
	bIsSubjFieldsExists = Not objRSSubjectFields.EOF
End Sub

Sub onHead()
	Call onSpecialHead()
End Sub

Sub DrawSubGroups()
	Dim objRs
	Set objRs = objNSNET.GetSubjectGroupList(strSubjectID)
	
	OpenPanelEx obLanguage("SetupSchoolCalendar","kSubjectSubGroups"), "subjGroups", "", False, "panel-info"

	%><form name="GroupList" METHOD="post" action="EditGroup.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("SBJID", strSubjectID, "BackPage", strScriptName) )%><%
			
		OpenBtnGroup
			ButtonAdd "actionGroup(true)", obLanguage("SetupSchoolCalendar","kAddGroup")
			If Not objRs.Eof Then
				ButtonEdit "actionGroup(false)", obLanguage("SetupSchoolCalendar","kEditGroup")
				ButtonDel "removeGroup()", obLanguage("SetupSchoolCalendar","kDelGroup")
			End If
		CloseBtnGroup

		If objRs.Eof Then 
			DrawInfo obLanguage("Common","kNo"), False
		Else
			DrawSelectRsProp objRs, "GROUP", "GROUPID", "GROUPNAME", Null, Null, "_", "size=""4"""
		End If

	%></form><%
	ClosePanel
End Sub
%>
