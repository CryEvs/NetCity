<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateInput.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim bIsWorkYear

Sub specialRead()
End Sub

Sub specialWrite()
End Sub

Function hasUserRightsOnPage()
	If bIsStaff Then
		If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
		If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
		hasUserRightsOnPage = False
	Else
		bAll = False
		hasUserRightsOnPage = True
	End If
End Function


Sub Main()
	'test for classes absence
	bIsWorkYear = IsWorkYear()
	If Not bIsWorkYear then Exit sub
End Sub

Sub specialHead()
	scriptCalendarCommon%>
	<script src="<%=GetVersionedResLink("/vendor/pages/common/js/queue.js")%>" type="text/javascript"></script>
	<script src="/vendor/components/signalr/jquery.signalR.min.js" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/webapi/signalr/hubs")%>" type="text/javascript"></script>
	<script>
		$("#buttonPanel").hide();

		$(document).ready(function() {

			var fp = null;
			var reportId = "TalentStudents";

			jsSubmit({
				action: "/webapi/reports/" + reportId,
				method: "GET",
				showProcessing: true
			}).then(function(response) {
				var model = response.report.filterPanel;
				var sources = response.filterSources;
				fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/reports/" + reportId + "/initfilters", $("#buttonPanel"))
			});
			
			$(document).off("click", ".generate-report-button");
			$(document).on("click", ".generate-report-button", function(){
					var selectedValues = fp.getCtxValues();

					taskQueue.execute({
						getTaskFunc: function() {
							return jsSubmit({
								action: "/webapi/reports/" + reportId + "/queue",
								method: "POST",
								contentType: "application/json",
								data: {	
									selectedData: selectedValues,
									params: [{ name: "SCHOOLYEARID", value: appContext.yearId }, { name: "DATEFORMAT", value: appContext.dateFormat }, { name: "FULLSCHOOLNAME", value: appContext.fullSchoolName }]
								},
								showProcessing: false
							})
						},
						hint: "Данное информационное окно можно закрыть не дожидаясь выполнения отчета. Результат выполнения отчета будет отправлен Вам на внутреннюю почту."
					})
					.fail(function(err){
						$("#report").addClass("hidden");
					})
					.then(function(reportHtml){
						$("#report").html(reportHtml);
						$("#report").removeClass("hidden");
						$("#actionPanel").removeClass("hidden");
					});
			});
		});
	</script><%
End Sub

Sub specialFilters( strForm )
End Sub

Sub specialDraw()
	If Not bIsWorkYear Then 
		DrawWarning  obLanguage("Common","kYearClosed")
		bExit = True
	End If

	If bExit Then Exit Sub
End Sub%>