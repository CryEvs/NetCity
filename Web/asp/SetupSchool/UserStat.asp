<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="../scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bIsWorkYear
Dim nViewType
Dim nUserCategoryType
Dim dtStartDate
Dim dtEndDate

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementUsers
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbUserStat
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arUserStat)
End Function


Sub Main()
	bIsWorkYear = IsWorkYear()
	If Not bIsWorkYear then Exit sub
End Sub

Sub onHead( )
	%><script src="<%=GetVersionedResLink("/static/dist/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/pages/js/UserStat.js")%>" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/report.min.css")%>"/>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print-tables.min.css")%>"/><%

	specialHead
End Sub

Sub DrawButtons()
	If bExit Then Exit Sub
	%><div class="buttons-panel" id="buttonPanel">
		<div class="buttons-panel-left"><%
			ButtonRefresh "userStatCtrl.browseUserStat()", obLanguage("Buttons", "kRefresh")
		%></div>
		<div class="buttons-panel-right" id="actionPanel">
			<div class="display-inline buttons-panel-export-send"><%
				ButtonPrintCommon "userStatCtrl.print()", obLanguage("Buttons","kPrint")
				ButtonExport "userStatCtrl.exportUserStat()"%>
			</div>
		</div>
	</div><%
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kFNUserStat") + " в '" + obTokenMgr.GetData(strToken, stSchoolShortName) + "'"
End Function

Sub specialHead()
	scriptCalendarCommon
	%>
<script>
	var schoolId = <%=strSchoolId%>;
	var schoolYearId = <%=strSchoolYearId%>;
	$("#buttonPanel").hide();
	
	$(document).ready(function(){
		$("#actionPanel").hide();
		jsSubmit({
			action: "/webapi/schools/userstat/prepareFilterPanel",
			method: "GET",
			showProcessing: true
		}).then(function(response){
			var model = response.filterPanel;
			var sources = response.filterSources;
			var us =  $(".UserStatCtrl");
			fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/schools/userstat/initfilters", $("#buttonPanel"));
			userStatCtrl = new UserStatCtrl({schoolId : schoolId, schoolYearId : schoolYearId}, us, fp);
		});
		$("#actionPanel").show();
	});
</script>
	<%
End Sub

Sub onDrawPage()
%>
	<div class="buttons-filters-panel form-horizontal">
		<div class="row">
			<div class="filters-panel <%=GetFiltersPanelWidth()%>">
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
	<div class="UserStatCtrl">
	</div>
<%
End Sub
%>
