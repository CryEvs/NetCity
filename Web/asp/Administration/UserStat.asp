<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateInput.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bIsWorkYear
Dim nViewType
Dim nUserCategoryType
Dim dtStartDate
Dim dtEndDate

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleUserStat") &" <i>" & NETSCHOOL_PRODUCT_NAME & "</i><br>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Statistics
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Statistics
End Function

Sub Main()
End Sub

Sub onHead( )
	%><script src="<%=GetVersionedResLink("/vendor/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/UserStatAdm.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/js/pagination.js")%>" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/report.min.css")%>"/>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print-tables.min.css")%>"/><%
	specialHead
End Sub

Sub DrawButtons()
	%><div class="buttons-panel" id="buttonPanel">
		<div class="buttons-panel-left"><%
				ButtonRefresh "userStatAdmCtrl.browseUserStatAdm()", obLanguage("Buttons", "kRefresh")
		%></div>
		<div class="buttons-panel-right" id="actionPanel">
			<div class="display-inline buttons-panel-export-send"><%
				ButtonPrintCommon "userStatAdmCtrl.print()", obLanguage("Buttons","kPrint")
				ButtonExport "userStatAdmCtrl.exportUserStatAdm()"%>
			</div>
		</div>
	</div><%
End Sub

Sub specialHead()
	scriptCalendarCommon
	%>
<script>
	$("#buttonPanel").hide();
	
	deferredResLoader.ready(function(){
		$("#actionPanel").hide();
		var container =  $(".userStatAdmCtrl");
		jsSubmit({
			action: "/webapi/admin/userstat/prepareFilterPanel",
			method: "GET",
			showProcessing: true
		}).then(function(response){
			var model = response.filterPanel;
			var sources = response.filterSources;
			var us =  $(".UserStatAdmCtrl");
			fp = new filterPanel($(".filters-panel"), model, sources,  "/webapi/admin/userstat/initFilters", $("#buttonPanel"));
			userStatAdmCtrl = new UserStatAdmCtrl(container, fp);
		});
		$("#actionPanel").show();
	});
</script>
	<%
End Sub

Sub onDrawPage()
%>
<form Name="MainForm" METHOD="POST" ACTION="<%=strScriptName%>" OnSubmit="return false" class="form-horizontal">
	<div class="buttons-filters-panel form-horizontal">	
		<div class="row">
			<div class="filters-panel col-md-12 <%=GetFiltersPanelWidth()%>">
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
	<div class="userStatAdmCtrl"></div>
</form>
<%
End Sub
%>
