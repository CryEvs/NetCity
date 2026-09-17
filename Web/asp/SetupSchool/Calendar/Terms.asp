<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Terms_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strBackPage

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleTerms")
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCreateEditTerm)
End Function

Sub ReadState()
	bIsWizard = False
	strBackPage = GetSafeStr(Request("BackPage"), 255, "Years.asp")
End Sub

Sub onHead()
	Call onSpecialHead()%>
	<script><!--
		function Back(){
			goBack(document.MainForm, '<%=strBackPage%>');
		}
	//-->
	</script><%
End Sub

Sub DrawButtons()
	DrawSpecialButtons
End Sub
%>
