<!-- #INCLUDE VIRTUAL="/asp/Educ_Manager/em_screen.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("StatReports", "kRelevanceData")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Reports
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StatReports
 End Function

Sub Main()
End Sub

Sub WritePostScripts
	%>
	<script src="/js/libs/angular/angular-bundle.min.js" type="text/javascript"></script>
	<script src="/js/libs/angular-locale/angular-locale_ru-ru.js" type="text/javascript"></script>

	<script src="/js/app/global/providers/netcity.helpers.js" type="text/javascript"></script>
	<script src="/js/app/global/providers/netcity.validation.js" type="text/javascript"></script>

	<script src="/js/app/global/providers/uikit-bundle.js" type="text/javascript"></script>
	<script src="/js/app/em/relevanceData/controller.js" type="text/javascript"></script>
	<script src="/js/app/global/providers/netcity.resources.js" type="text/javascript"></script>
	<script src="/js/app/em/relevanceData/app.js" type="text/javascript"></script>

	<script src="/js/libs/angular-ui-bootstrap/ui-bootstrap-tpls.min.js" type="text/javascript"></script>
	<%
End Sub

Sub onHeadSpecial()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/stat-reports.min.css")%>">

	<script>
		function Back() {
			goBack(document.MenuForm, 'StatReports.asp');
		}
	</script><%
End Sub

Sub OnDrawPage()%>
	<div ng-app="netcity.em.indicators">
		<div ng-controller="RelevanceData.View">
			<div class="row">
				<div class="col-lg-6 col-md-8">
					<form class="form-horizontal" role="form">
						<div class="form-group">
							<label for="indicatorLevel" class="col-md-4 control-label"><%=obLanguage("StatReports", "kIndicatorLevel")%></label>
							<div class="col-md-8">
								<select ng-model="indicatorLevel"   
										ng-options="level.name for level in indicatorLevels" 
										class="form-control"
										id="indicatorLevel">
								</select>
							</div>
						</div><%

						If obContext.ServerSettings.SystemSettings.ModuleRegion And (Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool) Then%>
							<div class="form-group">
								<label for="reportGroup" class="col-md-4 control-label">Группа отчетов</label>
								<div class="col-md-8">
									<select id="reportGroup" class="form-control" ng-model="reportGroup" ng-options="r.name for r in reportGroups"></select>
								</div>
							</div><%
						End If%>

						<div class="form-group" ng-show="rootGroups.length > 0">
							<label for="indicatorGroup" class="col-md-4 control-label"><%=obLanguage("StatReports", "kReport")%></label>
							<div class="col-md-8">
								<select ng-model="indicatorGroup"   
										ng-options="g.number + '. ' + g.name for g in rootGroups" 
										class="form-control"
										id="indicatorGroup">
									<option value="" selected="true"><%=obLanguage("StatReports", "kSelectIndicatorGroup")%></option>
								</select>
							</div>
						</div>
						<div class="form-group" ng-show="indicatorLevel.value == 0 && rootGroups.length > 0">
							<label for="em" class="col-md-4 control-label"><%=obLanguage("EM", "kManagement")%></label>
							<div class="col-md-8">
								<select ng-model="em"
										ng-options="em.name for em in ems" 
										class="form-control"
										id="em">
								</select>
							</div>
						</div>
						<div class="form-group" ng-show="indicatorLevel.value == 0 && rootGroups.length > 0">
							<label for="funcType" class="col-md-4 control-label"><%=obLanguage("Common", "kEOType")%></label>
							<div class="col-md-8">
								<select ng-model="funcType"
										ng-options="funcType.name for funcType in funcTypes" 
										class="form-control"
										id="funcType">
								</select>
							</div>
						</div>
						<div class="form-group" ng-show="rootGroups.length > 0">
							<div class="col-md-offset-4 col-md-8">
								<button type="button" ng-click="show()" class="btn btn-primary">
									<span class="glyphicon glyphicon-filter"></span>
									<%=obLanguage("Buttons", "kApply") %>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<div class="row" ng-show="rootGroups.length == 0 || indicatorAccessJournals.length == 0">
				<div class="col-md-8 col-lg-6">
					<div class="alert alert-info" ng-show="rootGroups.length == 0">
						<%=obLanguage("StatReports", "kIndicatorGroupListIsEmpty")%>
					</div>

					<div class="alert alert-info" ng-show="indicatorAccessJournals.length == 0">
						<%=obLanguage("StatReports", "kInfoNotFound")%>
					</div>
				</div>
			</div>

			<div class="row" ng-show="indicatorAccessJournals.length > 0">
				<div class="col-md-10 col-lg-8">
					<table class="table table-bordered table-condensed">
						<tr>
							<th>
								<%=obLanguage("SchoolInfo", "kEOName")%>
							</th>
							<th>
								<%=obLanguage("StatReports", "kDateAndAuthorLastEdit")%>
							</th>
							<th>
								<%=obLanguage("StatReports", "kDateAndAuthorLastApprove")%>
							</th>
							<th>
							</th>
						</tr>
						<tr ng-repeat="indicatorAccessJournal in indicatorAccessJournals">
							<td>
								{{indicatorAccessJournal.instName}}
							</td>
							<td>
								{{showAuthorAndDate(indicatorAccessJournal.lastEditAuthor, indicatorAccessJournal.lastEditDate)}}
							</td>
							<td>
								{{showAuthorAndDate(indicatorAccessJournal.approveAuthor, indicatorAccessJournal.approveDate)}}
							</td>
							<td style="width: 1%;">
								<button type="button" class="btn btn-primary" ng-click="approveEducInst(indicatorAccessJournal.schoolYearId, cnstApprovedValues)" ng-show="indicatorAccessJournal.approveAuthor == null && indicatorLevel.value == 0"><%=obLanguage("StatReports", "kApproveData")%></button>
								<button type="button" class="btn btn-primary" ng-click="approveEducInst(indicatorAccessJournal.schoolYearId, cnstDisapprovedValues)" ng-show="indicatorAccessJournal.approveAuthor != null && indicatorLevel.value == 0"><%=obLanguage("StatReports", "kOpenDataEditing")%></button>

								<button type="button" class="btn btn-primary" ng-click="approveEm(indicatorAccessJournal.emId, cnstApprovedValues)" ng-show="indicatorAccessJournal.approveAuthor == null && indicatorLevel.value == 1"><%=obLanguage("StatReports", "kApproveData")%></button>
								<button type="button" class="btn btn-primary" ng-click="approveEm(indicatorAccessJournal.emId, cnstDisapprovedValues)" ng-show="indicatorAccessJournal.approveAuthor != null && indicatorLevel.value == 1"><%=obLanguage("StatReports", "kOpenDataEditing")%></button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div><%
End Sub%>