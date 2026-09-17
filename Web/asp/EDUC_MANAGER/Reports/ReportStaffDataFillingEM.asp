<!-- #INCLUDE VIRTUAL="/asp/Educ_Manager/em_screen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/Reports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/EDUC_MANAGER/Reports/ReportsNames_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterEMs.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateInput.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub specialRead()
End Sub

Sub specialWrite()
End Sub
	
Sub Main()

End Sub

Sub specialHead()
	scriptCalendarCommon
	%>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>

	<script>
		$("#buttonPanel").hide();

		$(document).ready(function() {
			jsSubmit({
				action: "/webapi/reports/staffdata_filling",
				method: "GET",
				auth: false,
				showProcessing: true
			}).then(function(response) {
				var model = response.report.filterPanel;
				var sources = response.filterSources;
				fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/reports/staffdata_filling/initfilters", $("#buttonPanel"))
			});
		});
	</script><%
End Sub

Sub specialFilters( strForm )
End Sub

Sub specialDraw()

End Sub%>