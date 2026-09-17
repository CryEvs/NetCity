<!-- #INCLUDE VIRTUAL="/asp/Educ_Manager/em_screen.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("StatReports", "kViewStatIndicatorData")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Reports
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StatReports
 End Function

Sub ReadState()
End Sub

Sub Main()
End Sub

Sub WriteState()
End Sub

Sub WritePostScripts
	%>
	<script src="/js/libs/angular/angular-bundle.min.js" type="text/javascript"></script>
	<script src="/js/libs/angular-locale/angular-locale_ru-ru.js" type="text/javascript"></script>

	<script src="/js/app/global/providers/netcity.helpers.js" type="text/javascript"></script>
	<script src="/js/app/global/providers/netcity.validation.js" type="text/javascript"></script>

	<script src="/js/app/global/providers/uikit-bundle.js" type="text/javascript"></script>

	<script src="/js/app/em/statReports/controllers.js" type="text/javascript"></script>
	<script src="/js/app/global/providers/netcity.resources.js" type="text/javascript"></script>
	<script src="/js/app/em/statReports/app.js" type="text/javascript"></script>

	<script src="/js/libs/angular-ui-bootstrap/ui-bootstrap-tpls.min.js" type="text/javascript"></script>

	<link rel='stylesheet' href='/js/libs/wpt/brightsea/wpt/wpt.css'>
	<script type="text/javascript" src="/js/libs/wpt/brightsea/dojo/dojo.js" data-dojo-config="async:1"></script>

	<script type="text/javascript" src="/js/libs/wpt/highcharts/4.0.1/highcharts-all.js"></script>
	<script type="text/javascript" src="/js/libs/wpt/highcharts/group_categories/grouped-categories.js"></script>
	<%
End Sub

Sub onHeadSpecial()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/stat-reports.min.css")%>">

	<script type="text/javascript">
		$(document).ready(function () {
				$('body').addClass("claro");
			});
		function Back(){
			goBack(document.MenuForm, 'StatReports.asp');
		}
	</script>

	<style>
		.dijitTooltipDialog {
			font: 12px Myriad,Helvetica,Tahoma,Arial,clean,sans-serif; 
			*font-size: 75%;
		}
		.wpt-header-pane{
			font: 12px Myriad,Helvetica,Tahoma,Arial,clean,sans-serif; 
			*font-size: 75%;
		}
		#wpt-container{
			font: 12px Myriad,Helvetica,Tahoma,Arial,clean,sans-serif; 
			*font-size: 75%;
		}
		.hidden{
			display:none;
		}
	</style><%
End Sub

Sub DrawTree%>
	<div ng-app="netcity.em.statReports">
		<div ng-controller="EmStatReports.View">

		<div class="row">
			<div class="col-md-12 col-lg-12">
				<div class="buttons-panel">
					<div class="buttons-panel-right">
						<button type="button" ng-click="exportAll()" class="btn btn-default">
							<span class="glyphicon glyphicon-export"></span>
							<%=obLanguage("StatReports", "kExportAllStatReports")%>
						</button>
					</div>
				</div>
			</div>
		</div>


			<div class="row">
				<div class="col-md-8 col-lg-6">
					<form class="form-horizontal" role="form">
						<div class="form-group">
							<label for="indicatorLevel" class="col-md-4 control-label"><%=obLanguage("StatReports", "kIndicatorLevel") %></label>
							<div class="col-md-8">
								<select id="indicatorLevel" class="form-control" ng-model="indicatorLevel" ng-options="l.name for l in indicatorLevels"></select>
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

						<div class="form-group">
							<label for="indicatorGroup" class="col-md-4 control-label"><%=obLanguage("StatReports", "kIndicatorGroup") %></label>
							<div class="col-md-8">
								<select id="indicatorGroup" class="form-control" ng-model="indicatorGroup" ng-options="g.number + ' ' + g.name for g in rootGroups">
									<option value="" selected><%=obLanguage("StatReports", "kSelectIndicatorGroup")%></option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-offset-4 col-md-8">
								<button type="button" ng-click="show()" class="btn btn-primary">
									<span class="glyphicon glyphicon-filter"></span>
									<%=obLanguage("Buttons", "kApply") %>
								</button>

								<button type="button" ng-click="export()" class="btn btn-default">
									<span class="glyphicon glyphicon-export"></span>
									<%=obLanguage("Common","kBtnExcel") %>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-8 col-md-10">
					<div class="alert alert-info" ng-show="dataLoaded && flatData.length < 1">
						<%=obLanguage("StatReports", "KIndicatorsDataNotFilled") %>
					</div>
					<div class="alert alert-info" ng-show="!dataLoaded">
						<%=obLanguage("StatReports", "kNeedLoadIndicatorsData") %>
					</div>
					<div class="wpt-styles">
						<div id="wpt-container" ng-show="dataLoaded && flatData.length > 0" style="height:1000px; width:1300px;"></div>
					</div>
				</div>
			</div>
		</div>
	</div><%
End Sub

Sub OnDrawPage()
	Call DrawTree()
End Sub%>