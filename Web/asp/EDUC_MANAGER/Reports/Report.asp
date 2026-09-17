<!-- #INCLUDE FILE="../em_screen.asp" -->
<!-- #INCLUDE FILE="../../Reports/Reports_inc.asp" -->
<!-- #INCLUDE FILE="../../scripts/FiltersCommon.asp" -->
<!-- #INCLUDE FILE="../../scripts/dateInput.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Reports
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StandardReports 
End Function

Sub specialRead()
End Sub

Sub specialWrite()
End Sub
	
Sub Main()
	bDrawButtonPdf = True
End Sub

Sub specialHead()
	scriptCalendarCommon
	%>
	<script src="<%=GetVersionedResLink("/static/dist/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/pages/common/js/queue.js")%>" type="text/javascript"></script>

	<script src="/vendor/components/signalr/jquery.signalR.min.js" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/webapi/signalr/hubs")%>" type="text/javascript"></script>

	<script>
		$("#buttonPanel").hide();
		var reportId = "<%=strReportId%>";

		$(document).ready(function() {

			var fp = null;

			jsSubmit({
				action: "/webapi/reports/" + reportId,
				method: "GET",
				showProcessing: true
			}).then(function(response) {
				var model = response.report.filterPanel;
				var sources = response.filterSources;
				fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/reports/" + reportId + "/initfilters", $("#buttonPanel"));
			});

			var generateReport = _.debounce(function (options) {
				if (!fp.validate()) {
					return;
				}

				options = options || {};
				var selectedValues = fp.getCtxValues();
				taskQueue.execute({
					getTaskFunc: function(){
						return jsSubmit({
							action: "/webapi/reports/" + reportId + "/queue",
							method: "POST",
							contentType: "application/json",
							queryData: options,
							data: {	
								selectedData: selectedValues
							},
							showProcessing: false
						})
					},
					hint: "Данное информационное окно можно закрыть, не дожидаясь выполнения отчета. Результат выполнения отчета будет отправлен Вам на внутреннюю почту."
				})
				.fail(function(err){
					$("#report").addClass("hidden");
				})
				.then(function(reportResult){
					if(options.output == "Pdf"){
						var fileId = reportResult;
						postTo({ path: "/webapi/files/" + fileId, method: "GET" });
					}
					else {
						//загрузка html файла отчета с сервера
						var fileId = reportResult;
						jsSubmit({
							action: "/webapi/files/" + fileId, 
							method: "get",
							dataType: "html"
						})
						.then(function(reportHtml){
							$("#report").html(reportHtml);
							$("#report").removeClass("hidden");
							$("#actionPanel").removeClass("hidden");
						});
					}
				});
			}, 500, true);


			$(document).off("click", ".generate-report-button");
			$(document).off("click", ".generate-report-button-pdf");

			$(document).on("click", ".generate-report-button", function() { 
				generateReport();
			});
			$(document).on("click", ".generate-report-button-pdf", function() { 
				generateReport({output: "Pdf"});
			});
		});
	</script><%
End Sub

Sub specialFilters( strForm )
End Sub

Sub specialDraw()
End Sub
%>