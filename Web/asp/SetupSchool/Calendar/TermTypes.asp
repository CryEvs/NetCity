<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE FILE   ="TermTypes_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bCanEdit, bReadOnlyGradesAll, strBackPage

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTermTypes")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbYear
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arEditSchoolTermTypes)
End Function

Sub ReadState()
	bIsWizard = False
	strBackPage = GetSafeStr(Request("BackPage"), 255, "Years.asp")
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
End Sub

Sub onHead()
	onSpecialHead
	%>
<SCRIPT><!--
function Back() {
	goBack( document.MainForm, '<%=strBackPage%>');
}
//-->
</SCRIPT>
<%
End Sub

Sub DrawButtons()
	bReadOnlyGradesAll = False
	If Not (readonly Or bReadOnlyGradesAll) Then DrawSaveResetButtons
End Sub
%>
