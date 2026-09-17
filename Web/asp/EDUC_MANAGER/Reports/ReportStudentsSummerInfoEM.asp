<!-- #INCLUDE FILE="../em_screen.asp" -->
<!-- #INCLUDE FILE="../../Reports/Reports_inc.asp" -->
<!-- #INCLUDE FILE="../../scripts/FiltersCommon.asp" -->
<!-- #INCLUDE FILE=../../scripts/FilterEMs.asp -->
<!-- #INCLUDE FILE="../../scripts/dateInput.asp" -->

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
	<script src="<%=GetVersionedResLink("/static/dist/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>

	<script>
		$("#buttonPanel").hide();

		$(document).ready(function() {
			jsSubmit({
				action: "/webapi/reports/studentsSummerInfoEM",
				method: "GET",
				showProcessing: true
			}).then(function(response) {
				var model = response.report.filterPanel;
				var sources = response.filterSources;
				fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/reports/studentsSummerInfoEM/initfilters", $("#buttonPanel"))
			});
		});
	</script><%
End Sub

Sub specialFilters( strForm )
End Sub

Sub specialDraw()

End Sub%>