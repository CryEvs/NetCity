<!-- #INCLUDE FILE="YearDates_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strReportPOOPath

Sub specialRead()
	strReportPOOPath = CStr(GetSafe("RPPOOPATH", Null))
End Sub

Sub specialHead()
	Dim strAction
	strAction = strReportPOOPath & "/reports/" & Replace(strReportId, "POO_", "")
	%>
	<script src="<%=GetVersionedResLink("/static/dist/pages/js/filters.js")%>" type="text/javascript"></script>
	<script><!--
		function Back() {
			DoSubmit(document.forms.Reports, 'Reports.asp');
		}

		var restApi = {
			initFilters: "<%=strAction%>/initFilter",
			getPreparedReport: "<%=strAction%>/prepared",
			generateReport: "<%=strAction%>/generate"
		}

		var fp;
		$(document).ready(function() {

			jsSubmit({
				action: restApi.getPreparedReport,
				auth: false,
				showProcessing: true,
				contentType: null
			})
			.then(function (response) {
				var reportInfo = response;
					var model = reportInfo.filterPanel;
					var sources = reportInfo.filterSource;

				fp = new filterPanel($(".filters-panel"), model, sources, restApi.initFilters, $("#buttonPanel"))
			}, function(response, error, cxt ) {
					var errMessage = 'Ошибка обращения к внешнему серверу отчетов'
					if (typeof cxt.getResponseHeader === 'function'){
						var origin = cxt.getResponseHeader('Access-Control-Allow-Origin')
						if (!origin) {
							errMessage = errMessage + '\nНа сервере ПОО не установлен "Access-Control-Allow-Origin".'
						}
					}
					$('#buttonPanel').hide();
					alert(errMessage);
			});

			$(document).off("click", ".generate-report-button");
			$(document).on("click", ".generate-report-button", function() {
			var data = fp.getCtxValues();
			data = JSON.stringify(data).replace(/\"/g, '');
			
			postTo({
					path: restApi.generateReport,
				method: "POST",
				params: {
					selectedData: data
				}
			});
			});
		});

		
	//--></script><%
End Sub

Sub DrawFilters( strForm )
End Sub

Sub DrawReportButtonPanel()
	%>
	<div class="buttons-panel" id="buttonPanel">
		<div class="buttons-panel-left <%=IIF(bDrawButtonExportBigRep, "hidden", "") %>"><%
			ButtonGenerate "", obLanguage("Buttons", "kGenerate")%>
		</div>
	</div>
	<%
End Sub

%>