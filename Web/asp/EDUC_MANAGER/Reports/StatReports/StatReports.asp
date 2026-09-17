<!-- #INCLUDE VIRTUAL="/asp/Educ_Manager/em_screen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim gyRs
Dim bModuleStatReports

Function GetPageTitle()
	GetPageTitle = obLanguage("StatReports", "kStatReports")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StatReports
 End Function

Function hasUserRightsOnPage()
	if bModuleStatReports = Empty then
		Call ReadState()
	end if
	hasUserRightsOnPage = bModuleStatReports
End Function

Sub ReadState()
	bModuleStatReports = obContext.ServerSettings.SystemSettings.ModuleStatReports
End Sub

Sub Main()
	Call InitYears()
End Sub

Sub WriteState()
End Sub

Sub InitYears()
	Set gyRs = objNSNET.GetGlobalYearList()
End Sub

Sub DrawYears(theStrForm)
	DrawFilterRow theStrForm, obLanguage("Common","kSchoolYear"), "CURRGLOBALYEAR", gyRs, "GLOBALYEARID", "SCHOOLYEARNAME", strCurrGlobalYearId, False
End Sub

Sub onHeadSpecial()%>
	<script>
		function goSchoolIndicators(){
			postTo("Indicators.asp", {IT: <%=IndicatorLevel_EducInstitution%>});
		}
		function goEmIndicators(){
			postTo("Indicators.asp", {IT: <%=IndicatorLevel_EducManagement%>});
		}
		function viewReport(){
			postTo("StatReport.asp");
		}
		function fillSelfIndicators() {
			postTo("FillIndicators.asp");
		}
		function goRelevanceData() {
			postTo("RelevanceData.asp");
		}
	</script><%
End Sub

Sub DrawFilters(strForm)
	Call DrawYears("StatReports")
End Sub

Sub onDrawPage()
	Dim i%>

	<form name="StatReports" method="POST" action="" onsubmit="return canSubmit();">
		<%=WriteObligatoryTags()%>

		<%Call DrawButtonsFilters(False, "StatReports")%>
		<%DrawButtons()%>
	</form><%
End Sub

Sub DrawButtons
	OpenBtnGroup
	SimpleButton "fillSelfIndicators();", obLanguage("StatReports", "kFillingStatIndicators")
	CloseBtnGroup%>
	<hr />

	<h3><%=obLanguage("StatReports", "kIndicators")%></h3><%
	OpenBtnGroup
	SimpleButton "goSchoolIndicators();", obLanguage("StatReports", "kSchoolIndicators")
	SimpleButton "goEmIndicators();", obLanguage("StatReports", "kEmIndicators")
	CloseBtnGroup%>
	<hr />

	<h3><%=obLanguage("MenuFolders", "kSchoolReports")%></h3><%
	OpenBtnGroup
		SimpleButton "viewReport();", obLanguage("StatReports", "kViewStatIndicatorData")
		SimpleButton "goRelevanceData();", obLanguage("StatReports", "kRelevanceData")
	CloseBtnGroup
End Sub%>