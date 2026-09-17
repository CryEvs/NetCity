<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/Profiles_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleProfiles",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbCuriculumProfiles
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Sub specialMain
End Sub

Sub onHead()
	If readonly Then Exit Sub
	onSpecialHead%>

	<script>
		function TermTypes(){
			ok('MainForm', '/asp/SetupSchool/Calendar/TermTypes.asp');
		}
	</script>
	<%
End Sub

Sub DrawButtons()
	If readonly Then Exit Sub
	DrawSpecialButtons
End Sub

Sub DrawLinkButtons()
	If readonly Then Exit Sub

	If HasUserRight(arEditSchoolTermTypes) Then
		Call obTokenMgr.SetData(strToken, "backPg", strScriptName)
		Call Button("TermTypes()", obLanguage("SetupSchoolCalendar","kTermTypes"), obLanguage("SetupSchoolCalendar","kTermTypes"), "")
	End If
End Sub

Sub onDrawPage()
	Dim objTerms
	%><form name="MainForm" method="post" action="/asp/SetupSchool/Calendar/Curriculum/CuriculumProfilesSave.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("BackPage", strScriptName) ) %><%
		DrawButtonPanel
		If Not readonly And HasUserRight(arEditSchoolTermTypes) Then
			Set objTerms = objNSNET.GetTermList(strCurrYearID)
			If objTerms.EOF Then 
				DrawWarning GetNoTermsInYearDefineTermsTypes("MainForm", False)
			End If
		End If
		DrawTable
		%>
	</form><%
End Sub
%>

