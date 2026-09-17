<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("StatReports", "kFillingIndicators")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStatReports
 End Function

Sub Main()
	If HasUserRight(arBrowseStatReports) And Not HasUserRight(arFillStatReports) Then readonly = True
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = obContext.ServerSettings.SystemSettings.ModuleStatReports And HasUserAnyRights(Array(arBrowseStatReports, arFillStatReports))
End Function

Sub onHead()
	%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/stat-reports.min.css")%>">

	<script src="/js/libs/angular/angular-bundle.min.js" type="text/javascript"></script>
	<script src="/js/libs/angular-locale/angular-locale_ru-ru.js" type="text/javascript"></script>

	<script src="/js/app/global/providers/netcity.helpers.js" type="text/javascript"></script>
	<script src="/js/app/global/providers/netcity.validation.js" type="text/javascript"></script>

	<script src="/js/app/global/providers/uikit-bundle.js" type="text/javascript"></script>

	<script src="/js/app/global/controllers/indicatorViewController.js" type="text/javascript"></script>
	<script src="/js/app/global/directives/recursiveDirective.js" type="text/javascript"></script>
	<script src="/js/app/global/providers/netcity.resources.js" type="text/javascript"></script>
	<script src="/js/app/school/indicators/app.js" type="text/javascript"></script>

	<script src="/js/libs/angular-ui-bootstrap/ui-bootstrap-tpls-2.5.7.min.js" type="text/javascript"></script>

	<script>
		function Back() {
			postTo('StatReports.asp');
		}
	</script>
	<%
End Sub

Sub OnDrawPage()%>
	<div ng-app="netcity.school.indicators">
		<div ng-controller="FillIndicators.View">
			<form name="fillIndicators">
				<div class="buttons-filters-panel form-horizontal">
					<div class="row" ng-show="indicator != null && !indicator.isApproved">
						<div class="col-md-12">
							<div class="buttons-panel">
								<div class="buttons-panel-left">
									<button type="button" class="btn btn-primary" 
										ng-click="save()" 
										ng-show="indicator != null && existsIndicatorGroups() && !indicator.isApproved" 
										ng-disabled="!bDataWasChanged">
											<span class="glyphicon glyphicon-save"></span>
											<%=obLanguage("Buttons", "kSave")%>
									</button>
									<button type="button" class="btn btn-primary" 
										ng-click="approveIndicatorGroup(indicatorGroup.id)" 
										ng-show="indicator != null && !indicator.isApproved">
											<span class="glyphicon glyphicon-saved"></span>
											<%=obLanguage("StatReports", "kApprove")%>
									</button>
									<button type="button" 
											class="btn btn-primary" 
											ng-show="indicator != null && indicator.isCalculated && !indicator.isApproved" 
											ng-click="calculate(indicatorGroup.id)">
										<%=obLanguage("SchoolInfo", "kbtnCalculate_")%>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="filters-panel col-md-6 col-lg-6">
							<div ng-show="existsIndicatorGroups()">
								<div class="form-group">
									<label for="indicatorGroup" class="control-label col-lg-3 col-md-4"><%=obLanguage("StatReports", "kReport")%></label>
									<div class="col-md-8">
										<select ng-model="indicatorGroup" 
												ng-options="indicator.name for indicator in indicatorGroupsList" 
												class="form-control"
												ng-change="indicatorGroupChange()"
												id="indicatorGroup">
										</select>
									</div>
								</div>
								<div class="explanation" ng-if="indicatorGroup.explanation != ''">
									<p>{{indicatorGroup.explanation}}</p>
								</div>
							</div>
							<div class="alert alert-info" ng-show="!existsIndicatorGroups()">
								<%=obLanguage("StatReports", "kIndicatorListIsEmpty")%>
							</div>
						</div>
					</div>
				</div>
					
				<div class="row" ng-show="existsIndicatorGroups()">
					<div class="col-lg-7 col-md-10">
						<h2 ng-show="indicator != null" ng-bind-template="{{indicator.fullNumber}}. {{indicator.name}}"></h2>
						<table class="table table-bordered indicators-table">
							<tr>
								<th><%=obLanguage("StatReports", "kIndicator")%></th>
								<th style="width: 150px;"><%=obLanguage("StatReports", "kValue")%></th>
							</tr>
							<tr ng-repeat="indicator in indicator.subIndicators" indicator-nodes></tr>
						</table>
					</div>
				</div>
			</form>
		</div>
	</div><%
End Sub%>