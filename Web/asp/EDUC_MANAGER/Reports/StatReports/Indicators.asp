<!-- #INCLUDE VIRTUAL="/asp/Educ_Manager/em_screen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nIndicatorLevel

Function GetPageTitle()
	GetPageTitle = IIF(nIndicatorLevel = IndicatorLevel_EducInstitution, obLanguage("StatReports", "kSchoolIndicators"), obLanguage("StatReports", "kEmIndicators")) 
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Reports
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StatReports
 End Function

Sub ReadState()
	nIndicatorLevel = GetSafeLng(Request("IT"), Empty)
End Sub

Sub Main()
End Sub

Sub WriteState()
End Sub

Sub WritePreScripts()
	%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/stat-reports.min.css")%>">
	<script src="/js/libs/angular/angular-bundle.min.js" type="text/javascript"></script>
	<script src="/js/libs/angular-locale/angular-locale_ru-ru.js" type="text/javascript"></script>
	<%
End Sub

Sub onHeadSpecial()%>
	<script type="text/javascript">
		var $indicatorLevel = <%=nIndicatorLevel%>;

		function Back() {
			goBack( document.MenuForm, 'StatReports.asp' );
		}

		function OnDocumentReady(){
			var element = $("<input>")
				.attr('type', 'hidden')
				.attr('name', 'IT')
				.attr('value', $indicatorLevel);

			$(document.forms.MenuForm).append(element)
		}
		$(document).ready(OnDocumentReady);
	</script><%
End Sub

Sub WritePostScripts
	%>
	<script src="/js/libs/angular.treeview/angular.treeview.js" type="text/javascript"></script>
	<link href="/js/libs/angular.treeview/css/angular.treeview.css" rel="stylesheet" type="text/css"/>

	<script src="/js/libs/angular-ui-tree/angular-ui-tree.js" type="text/javascript"></script>
	<link href="/js/libs/angular-ui-tree/angular-ui-tree.css" rel="stylesheet" type="text/css"/>

	<script src="/js/app/global/providers/netcity.helpers.js" type="text/javascript"></script>
	<script src="/js/app/global/providers/netcity.validation.js" type="text/javascript"></script>

	<script src="/js/app/global/providers/uikit-bundle.js" type="text/javascript"></script>

	<script src="/js/app/em/indicators/controllers.js" type="text/javascript"></script>
	<script src="/js/app/global/directives/directives.js" type="text/javascript"></script>
	<script src="/js/app/global/providers/netcity.resources.js" type="text/javascript"></script>
	<script src="/js/app/em/indicators/app.js" type="text/javascript"></script>
	<link href="/js/app/em/indicators/app.css" rel="stylesheet">

	<script src="/js/libs/angular-ui-bootstrap/ui-bootstrap-tpls.min.js" type="text/javascript"></script>
	<%
End Sub

Sub DrawTree%>
	<div ng-app="netcity.em.indicators">
		<div ng-controller="Em.Indicators.View">
			<div class="buttons-filters-panel form-horizontal">
				<div class="row">
					<div class="col-md-12">
						<div class="buttons-panel">
							<div class="buttons-panel-left">
								<button type="button" ng-click="addGroup()" class="btn btn-default">
									<span class="glyphicon glyphicon-plus"></span>
									<%=obLanguage("StatReports", "kCreateNewGroup") %>
								</button>

								<%If obContext.ServerSettings.SystemSettings.ModuleRegion And obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then%>
									<button type="button" ng-click="publish()" class="btn btn-default ng-hide" ng-show="!indicatorListEmpty()">
										<span class="glyphicon glyphicon-transfer"></span>
										<%=obLanguage("StatReports", "kPublish") %>
									</button>
								<%End If %>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="filters-panel col-md-10 col-lg-7">
						<div class="form-group" ng-show="!indicatorListEmpty()">
							<label for="indicatorGroup" class="col-md-2 control-label"><%=obLanguage("StatReports", "kReport") %></label>
							<div class="col-md-8" style="padding-right: 0;">
								<select id="indicatorGroup" class="form-control" ng-model="indicatorGroup" ng-options="g.number + ' ' + g.name for g in rootGroups" ng-change="load()">
								</select>
							</div>
							<div class="col-md-2" style="padding-left: 4px;">
								<button type="button" class="btn btn-default" ng-click="editExplanation()" data-toggle="tooltip" data-placement="top" title="<%=obLanguage("StatReports", "kEditExplanation") %>">
									<span class="glyphicon glyphicon-info-sign"></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10 col-lg-7">
					<div class="alert alert-info ng-hide" ng-show="indicatorListEmpty()">
						<%=obLanguage("StatReports", "kIndicatorListIsEmpty") %>
					</div>
					<div class="alert alert-info" ng-show="!indicatorListEmpty() && !indicatorSelected()">
						<%=obLanguage("StatReports", "kMustSelectReport")%>
					</div>
					<div ui-tree="sortableOptions" id="tree-root" ng-show="indicatorSelected()">
						<ol ui-tree-nodes="sortableOptions" ng-model="indicatorList">
							<li ng-repeat="node in indicatorList" ui-tree-node ng-include="'/js/app/em/indicators/templates/nestedTreeNode.html'" ng-click="selectNode(node)" ng-mouseenter="node.hover = true" ng-mouseleave="node.hover = false"></li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</div><%
End Sub

Sub OnDrawPage()
	Call DrawTree()
End Sub%>