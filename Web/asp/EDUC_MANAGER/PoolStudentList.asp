<!-- #INCLUDE FILE="em_screen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PoolStudents_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterEMs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strBackPage

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_PoolStudentList
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_PoolStudentList
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
End Function

Function GetPageTitle()
	GetPageTitle = IIf(bPseudoPool, obLanguage("FilterUsers","kStudentsOutOfSystem"), obLanguage("FilterUsers","kStudentList",0))
End Function

Sub ReadStateSpecial()
	strScriptName = "PoolStudentList.asp"
	strBackPage = Request.ServerVariables("SCRIPT_NAME")
	nPoolEMID = ReadEMRegionFilter(False)
End Sub

Sub WriteStateSpecial()
	Call WriteEMs()
	Call obTokenMgr.SetData(strToken, stfilterEmId, nPoolEMID)
End Sub

Sub onHeadSpecial()%>
	<script src="<%=GetVersionedResLink("/vendor/pages/movement/js/movement.js")%>" type="text/javascript"></script>
	<SCRIPT><!--
		function OnChangeSelect(fName, action) {
			$.show.processing();
			DoSubmit(GetForm(fName, this),action);
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
End Sub

Sub DrawEmFilter(strForm)
	Call DrawEMRegionFilter_2(strForm)
End Sub
%>
