<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

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

				if(_.contains(response.report.presentTypes, "EmailDelivery")){
					$(".generate-report-button-emaildelivery").removeClass("hide");
				}

				fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/reports/" + reportId + "/initfilters", $("#buttonPanel"));
			});

			var generateReport = _.debounce(function (options, extraParams) {
				if (!fp.validate()) {
					return;
				}

				options = options || {};
				extraParams = extraParams || [];

				var reportParams = [
					{ name: "SCHOOLYEARID", value: appContext.yearId },
					{ name: "SERVERTIMEZONE", value: appContext.serverTimeZone },
					{ name: "FULLSCHOOLNAME", value: appContext.fullSchoolName },
					{ name: "DATEFORMAT", value: appContext.dateFormat }
				];

				reportParams = reportParams.concat(extraParams);

				var selectedValues = fp.getCtxValues();
				taskQueue.execute({
					getTaskFunc: function(){
						return jsSubmit({
							action: "/webapi/reports/" + reportId + "/queue",
							method: "POST",
							contentType: "application/json",
							queryData: options,
							data: {	
								selectedData: selectedValues,
								params: reportParams
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
						return;
					}
					else if(options.output == "EmailDelivery"){
						var message = reportResult || "Отчет успешно отправлен получателям";
						alert(message);
						return;
					}
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
			$(document).on("click", ".generate-report-button-emaildelivery", function() { 
				$.show.confirmation("Получать подтверждения о прочтении сообщений?").then(
					function(){
						generateReport({output: "EmailDelivery"}, [{ name: "neednotify", value: 1 }]);
					},
				function(){
						generateReport({output: "EmailDelivery"});
					}
				);
				
			});
		});
	</script><%
End Sub

Sub specialFilters( strForm )
End Sub

Sub specialDraw()
End Sub
%>