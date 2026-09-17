<!-- #INCLUDE FILE="em_screen.asp" -->

<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="../Administration/DatePeriod_inc.asp" -->

<!-- #INCLUDE FILE="../scripts/FiltersCommon.asp" -->
<!-- #INCLUDE FILE=../scripts/FilterEMs.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Statistics
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_Statistics
 End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleUserStat") &" <i>" & NETSCHOOL_PRODUCT_NAME & "</i><br>"
End Function

Sub onHead( )
	%><script src="<%=GetVersionedResLink("/static/dist/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/pages/js/UserStatEM.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/js/pagination.js")%>" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/report.min.css")%>"/>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print-tables.min.css")%>"/><%
	specialHead
End Sub

Sub specialHead()
	scriptCalendarCommon
	%>
	<script>
		$("#buttonPanel").hide();
	
		deferredResLoader.ready(function(){
			$("#actionPanel").hide();
			var container =  $(".userStatEMCtrl");
			jsSubmit({
				action: "/webapi/em/userstat/prepareFilterPanel",
				method: "GET",
				showProcessing: true
			}).then(function(response){
				var model = response.filterPanel;
				var sources = response.filterSources;
				var us =  $(".UserStatEMCtrl");
				fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/em/userstat/initFilters", $("#buttonPanel"));
				userStatEMCtrl = new UserStatEMCtrl(container, fp);
			});
			$("#actionPanel").show();
		});
	</script>
	<%
End Sub

Sub DrawButtons()
	%><div class="buttons-panel" id="buttonPanel">
		<div class="buttons-panel-left"><%
				ButtonRefresh "userStatEMCtrl.browseUserStatEM()", obLanguage("Buttons", "kRefresh")
		%></div>
		<div class="buttons-panel-right" id="actionPanel">
			<div class="display-inline buttons-panel-export-send"><%
				ButtonPrintCommon "userStatEMCtrl.print()", obLanguage("Buttons","kPrint")
				ButtonExport "userStatEMCtrl.exportUserStatEM()"%>
			</div>
		</div>
	</div><%
End Sub

Sub onDrawPage()%>
	<form class="form-horizontal form-xs" NAME="UserStatForm" ACTION="UserStat.asp" METHOD="POST">
		<div class="buttons-filters-panel form-horizontal">	
			<div class="row">
				<div class="filters-panel col-md-9 col-sm-12">
				</div>
			</div>
			<div class="row">
			</div>
			<hr>
		</div>
		<div class="row">
			<div class="col-md-12">
				<%Call DrawButtons%>
			</div>
		</div>
		<div class="userStatEMCtrl"></div>
	</form>
	<%
End Sub
%>
