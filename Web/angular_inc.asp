<!-- #INCLUDE FILE=asp/scripts/dateInput.asp -->
<% ' © 2007-2017 IRTech. All rights reserved.

Dim strModule, strSubModule, strAppPath, strRoute, strSearch
Dim strAppModule
Dim strAngularUrlSegment
Dim bDrawByAngular

Function CanBack()
	CanBack = False
End Function

Sub onHead()
	%>
	<base href="/<%=strAngularUrlSegment%>/<%=strAppPath%>/"/>
	<style>
		.ns-cloak {
		  display: none !important;
		}
	</style>

	<!--TODO. убрать стили в портфолио или общие-->
	<style>
		.doc-item .doc-type {
			display: block;
			margin: 8px 0 7px 0;
			position: relative;
			padding-left: 45px;
			color: black;
		}

		.doc-item .doc-type:before {
			position: absolute;
			width: 18px;
			height: 25px;
			left: 0;
			content: '';
			border: solid 2px #920035;
		}

		.doc-item .doc-type .fileCorner {
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 8px 0 0 8px;
			border-color: white transparent transparent #920035;
			position: absolute;
			top: 0px;
			left: 10px;
		}

		dl.doc-item{
			margin: 0px;
		}

		dd.doc-data {
			margin-left: 30px;
		}

		.doc-item .doc-type:after {
			content: 'file';
			content: attr(fileExt);
			left: -4px;
			padding: 0px 2px;
			text-align: right;
			line-height: 1.3;
			position: absolute;
			background-color: #000;
			color: #fff;
			font-size: 7px;
			text-transform: uppercase;
			letter-spacing: 1px;
			top: 10px;
		}
	</style>
	
	<%
	Call onHeadSpec()
End Sub

Sub ReadState
End Sub

Sub onHeadSpec()
End Sub

Sub Main()
	strModule = LCase(Request("module"))
	strSubModule = LCase(GetSafeStr(Request("submodule"), -1, ""))
	strRoute = LCase(GetSafeStr(Request.Form("route"), -1, Request("route")))
	strSearch = GetSafeStr(Request.Form("search"), -1, Request("search"))
	strAppModule = "irtech.netcity." & strModule
	strAppPath = strModule
	If strSubModule <> "" Then
		strAppPath = strAppPath & "/" & strSubModule
		strAppModule = strAppModule & "." & strSubModule
	End If
	bDrawByAngular = False
	Call MainSpec()
End Sub

Sub MainSpec()
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
End Function

Function isHelpAvailable()
	If bIsEMForSchool Or bIsEducManager Then
		isHelpAvailable = False
	Else
		isHelpAvailable = True
	End If
End Function

Sub WriteAngularBootstrap()
%>
<script type="text/javascript">
	var bodyClone = $('body').clone();
	$(function(){
		angular.element(".block-content").find("h1.title").attr("page-title", "");
		angular.element(".block-content").find("a.back").attr("href","").attr("onclick","").attr("page-back", "");
		angular.element(".switch-year-btn").attr("onclick","")

		//временно закомментировано, до реализации отрисовки меню в angular
		//angular.element(".navbar-inner").attr("ns-menu", "").attr("menu-ctx", "menuCtx");
		var module = "<%=strAppModule%>";
		window.route = "<%=strRoute%>";

		angular.element("body").attr("ng-controller", "NetCityController");

		//angular.element("#header").attr("ng-if", "!page.screenSimple");
		angular.bootstrap(angular.element("body"), [module]);

		//перключение модуля, без перезагрузки страницы
		function switchModule(app, moduleName){
			var js = "/static/dist/app/" + app + "/app-bundle.js";
			deferredResLoader.loadJsScript(js).then(function(){
				$("body").replaceWith(bodyClone.clone());
				angular.element(".block-content").find("h1.title").attr("page-title", "");
				$("base").attr("href", "/<%=strAngularUrlSegment%>/" + app + "/");
				angular.bootstrap(angular.element("body"), [moduleName]);
			});
		}
	});

</script>

<script type="text/javascript">
	var context = {
		app: "<%=strAppPath%>",
		route: "<%=strRoute%>",
		search: "<%=DB2Java(strSearch)%>",
		roles: <%=comHelper.JsonHelper.SerializeObject(obContext.AppContext.Principal.GetRoles()) %>,
		rights: <%=comHelper.JsonHelper.SerializeObject(obContext.AppContext.Principal.GetRights()) %>
	};

	<%If obContext.ServerSettings.SecuritySettings.SecureApi Then%>
	context.apikey = "<%=obTokenMgr.GetData(strToken,"SECRNAME")%>";
	<%End If%>

	$(function(){
		document.forms.refreshfix.search.value = context.search;
	})
</script>
<%
End Sub

Sub WriteAngularBundleScripts
	%>
	<script src="/vendor/components/angular-bundle.min.js" type="text/javascript"></script>
	<script src="/js/libs/angular-locale/angular-locale_ru-ru.js" type="text/javascript"></script>
	<%
End Sub

Sub WriteAngularScripts
	%>
	<script src="/vendor/components/ng-file-upload/ng-file-upload.js" type="text/javascript"></script>
	<script src="/vendor/components/angular-ui-tree/dist/angular-ui-tree.js" type="text/javascript"></script>
	<link rel="stylesheet" href="/vendor/components/angular-ui-tree/dist/angular-ui-tree.min.css">
	<link rel="stylesheet" type="text/css" href="/vendor/components/angular-treeview/css/angular.treeview.css">
	<%
End Sub



Sub WriteAngularDeferBootstrap
	%>
	<script>
		function botstrapAngular(container){
			var queries = [
				deferredResLoader.loadJsScript("/vendor/components/angular-bundle.min.js"),
				deferredResLoader.loadJsScript("/vendor/components/ng-file-upload/ng-file-upload.js"),
				deferredResLoader.loadJsScript("/vendor/components/angular-ui-tree/dist/angular-ui-tree.js"),
				deferredResLoader.loadJsScript("/js/libs/angular-locale/angular-locale_ru-ru.js"),

				deferredResLoader.loadJsScript("/vendor/components/angular-ui-select/dist/select.min.js"),
			
				deferredResLoader.loadJsScript("<%=GetVersionedResLink("/static/dist/app/app-common-bundle.js")%>"),
				deferredResLoader.loadJsScript("<%=GetVersionedResLink("/static/dist/app/" & strAppPath & "/app-bundle.js")%>"),
				
				deferredResLoader.loadJsScript("/vendor/components/angular-bootstrap/ui-bootstrap-tpls-2.5.7.min.js")
			];

			return extDeferred.when(queries).then(function(){
				angular.bootstrap(container[0], ['<%=strAppModule%>']);
			});
		}
	</script>
	<%
End Sub

Sub WriteAngularScripts2
	%>
	<script src="/vendor/components/angular-ui-select/dist/select.min.js" type="text/javascript"></script>
	<link href="/vendor/components/angular-ui-select/dist/select.min.css" rel="stylesheet" type="text/css" >

	<script src="<%=GetVersionedResLink("/static/dist/app/app-common-bundle.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/app/" & strAppPath & "/app-bundle.js")%>" type="text/javascript"></script>

	<script src="/vendor/components/angular-bootstrap/ui-bootstrap-tpls-2.5.7.min.js" type="text/javascript"></script>
	<%
End Sub

Sub DrawRefreshForm
	%>
	<div>
		<form name="refreshfix" method="post" class="hidden">
			<input type="hidden" name="at" value="<%=strToken%>"/>
			<input type="hidden" name="baseurl" value="<%=strAppPath%>"/>
			<input type="hidden" name="route" value="<%=strRoute%>"/>
			<input type="hidden" name="TabItem" value="<%=nTabItem%>"/>
			<input type="hidden" name="search"/>
		</form>
		<div ng-view autoscroll="true" id="view"></div>
	</div>
	<%
End Sub

Sub OnDrawPage()
	Call DrawRefreshForm
End Sub

Sub WriteHeadModuleDependencies
	If strAppPath = "school/studentdiary" Or strAppPath = "school/journal" Then
		IncludeJQLinkify
	End If
	If strAppPath = "em/statreports" Then
		%>
		<script src="/vendor/components/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
		<script src="/vendor/components/jquery.dynatree/dist/jquery.dynatree.min.js" type="text/javascript"></script>
		<link href="/vendor/components/jquery.dynatree/dist/skin-vista/ui.dynatree.css" rel="stylesheet" type="text/css"/>
		<link rel='stylesheet' href='/js/libs/wpt/brightsea/wpt/wpt.css'>
		<script type="text/javascript" src="/js/libs/wpt/brightsea/dojo/dojo.js" data-dojo-config="async:1"></script>
		<script type="text/javascript" src="/js/libs/wpt/highcharts/4.0.1/highcharts-all.js"></script>
		<script type="text/javascript" src="/js/libs/wpt/highcharts/group_categories/grouped-categories.js"></script>
		<%
	End If
	If strAppPath = "em/diagnosticworks" or strAppPath = "em/announcements" or strAppPath = "school/planning" or strAppPath = "school/journal" or strAppPath = "admin/serversettings" or strAppPath = "admin/founders" Then
		' Деревья
		%>
		<script src="/vendor/components/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
		<script src="/vendor/components/jquery.dynatree/dist/jquery.dynatree.min.js" type="text/javascript"></script>
		<link href="/vendor/components/jquery.dynatree/dist/skin-vista/ui.dynatree.css" rel="stylesheet" type="text/css"/>
		<%
	End If

	If strAppPath = "school/classmanagement" Or strAppPath = "admin/support" Or strAppPath = "school/users" Or strAppPath = "em/clones" Then%>
		<script src="/vendor/components/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
		<link href="/vendor/components/jtable/lib/themes/lightcolor/blue/jtable.min.css" rel="stylesheet" type="text/css"/>
		<script src="<%=GetVersionedResLink("/vendor/components/jtable-bundle.min.js")%>" type="text/javascript"></script><%
	End If

	'<link href="/vendor/components/jquery-ui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
End Sub



Sub WritePostModuleDependencies
	If strAppPath = "school/announcements" or strAppPath = "em/announcements" Then
		%>
		<script src="/vendor/components/tinymce/tinymce.min.js" type="text/javascript"></script>
		<script src="/vendor/components/tinymce/langs/ru.js" type="text/javascript"></script>
		<%
	End If
	If strAppPath = "school/calendar" Or strAppPath = "school/journal" Or strAppPath = "em/diagnosticworks" Or strAppPath = "admin/serversettings" Then
		IncludeJQSortable
	End If

	If strAppPath = "school/users" Or strAppPath = "em/clones" Or strAppPath = "school/planning" Or strAppPath = "school/classmanagement" Or strAppPath = "admin/schools" Or strAppPath = "school/schedule" Or strAppPath = "admin/support" Or strAppPath = "school/calendar"  Or strAppPath = "school/movement" Or strAppPath = "em/parentpay" Or strAppPath = "school/reports" Or strAppPath = "em/reports" Or strAppPath = "wizard" Or strAppPath = "school/socialpassportreports" Or strAppPath = "school/chats" Then
		%>
		<script src="<%=GetVersionedResLink("/vendor/pages/common/js/queue.js")%>" type="text/javascript"></script>
		<script src="/vendor/components/signalr/jquery.signalR.min.js" type="text/javascript"></script>
		<script async src="<%=GetVersionedResLink("/webapi/signalr/hubs")%>" type="text/javascript"></script>
		<%
	End If

	If strAppPath = "school/userinfo" Or strAppPath = "em/users" Or strAppPath = "admin/serversettings"  Then
		Call IncludeSelect2()
		%>
		<script src="/js/libs/jquery.inputmask.bundle.min.js" type="text/javascript"></script>
		<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.js")%>" type="text/javascript"></script>
		<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
		<script src="<%=GetVersionedJsLink("uikit.validate.js")%>" type="text/javascript"></script>
		<%
	End If

	If strAppPath = "school/reports" Or strAppPath = "em/reports" Or strAppPath = "school/socialpassportreports" Then
		%>
		<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/report.min.css")%>"/>
		<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print-tables.min.css")%>"/>
		<%
	End If

	If strAppPath = "em/reports" Or strAppPath = "em/eminfo" Or strAppPath = "school/orginfo" Or strAppPath = "em/events" Or strAppPath = "school/foodpay" Or strAppPath = "school/schedule" Or strAppPath = "school/movement" Or strAppPath = "em/pool" Or strAppPath = "em/statforms" Or strAppPath = "admin/pool" Or strAppPath = "admin/support" Or strAppPath = "school/portfolio" Or strAppPath = "school/planning" Or strAppPath = "school/calendar" Or strAppPath = "school/classmanagement" Or strAppPath = "school/studentdiary" Or strAppPath = "school/journal" Or strAppPath = "school/talents" Then
		Call IncludeSelect2()
	End If


	If strAppPath = "em/statreports" Or strAppPath = "school/statreports" Then
		%>
		<link href="<%=GetVersionedResLink("/static/dist/pages/stat-reports/css/stat-reports.min.css")%>" rel="stylesheet" type="text/css">
		<%
	End If
End Sub

Sub IncludeSelect2()
	%>
		<script src="<%=GetVersionedResLink("/vendor/components/select2/dist/js/select2.full.min.js")%>" type="text/javascript"></script>
		<script src="<%=GetVersionedResLink("/vendor/components/select2/dist/js/i18n/ru.js")%>" type="text/javascript"></script>
		<script type="text/javascript">$.fn.select2.defaults.set("language", "ru"); $.fn.select2.defaults.set("dropdownAutoWidth", "true");</script>
	<%
End Sub

Sub IncludeJQSortable()
	%>
		<script src="<%=GetVersionedResLink("/vendor/components/jQuery UI Sortable/jquery-ui-sortable.min.js")%>" type="text/javascript"></script>
		<script src="<%=GetVersionedResLink("/vendor/components/angular-ui-sortable/sortable.min.js")%>" type="text/javascript"></script>
	<%
End Sub

Sub IncludeJQLinkify()
	%>
		<script src="<%=GetVersionedResLink("/vendor/components/linkifyjs/linkify.min.js")%>" type="text/javascript"></script>
		<script src="<%=GetVersionedResLink("/vendor/components/linkifyjs/linkify-jquery.min.js")%>" type="text/javascript"></script>
	<%
End Sub
%>