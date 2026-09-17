<!-- #INCLUDE File="sa_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PoolStudents_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strBackPage

Function IsTopPage()
	IsTopPage = True
End Function

Function GetPageTitle()
	GetPageTitle = IIf(bPseudoPool, obLanguage("FilterUsers","kStudentsOutOfSystem"), obLanguage("FilterUsers","kStudentList",0))
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Movement
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Movement
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = objNSNET.IsAdminOfServer(strUserID)
End Function

Sub ReadStateSpecial()
	strBackPage = strScriptName
End Sub

Sub onHeadSpecial()%>
	<script src="<%=GetVersionedResLink("/vendor/pages/movement/js/movement.js")%>" type="text/javascript"></script>
	<SCRIPT><!--
		function OnChangeSelect(fName, action) {
			$.show.processing();
			DoSubmit(GetForm(fName, this),action)
		}

		function changeView() {
			var form = document.MainForm;
			var val = getListValue(form.ViewType);
			$.show.processing();
			DoSubmit(form, "");
		}
	//--></SCRIPT><%
End Sub

Sub DrawFiltersSpecial(strForm)
	Call DrawAdminViewTypeFilters(strForm)
End Sub%>