<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateInput.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Sub Main()
End Sub

Sub onHead( )
	%><script src="<%=GetVersionedResLink("/vendor/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/fillingStatFormInfo.js")%>" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/report.min.css")%>"/>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print-tables.min.css")%>"/><%

	specialHead
End Sub

Sub DrawButtons()
	If bExit Then Exit Sub
	%><div class="buttons-panel" id="buttonPanel">
		<div class="buttons-panel-left">
			<button id="refreshButton" title="<%=obLanguage("Buttons", "kRefresh")%>" type="button" class="btn btn-default" onclick="fillingStatFormInfoCtrl.browseStatFormInfo();return false;">
				<span class="glyphicon glyphicon-refresh"></span>
				<span><%=obLanguage("Buttons", "kRefresh")%></span>
			</button>
		</div>
		<div class="buttons-panel-right" id="actionPanel">
			<div class="display-inline buttons-panel-export-send">
				<button id="openToEditButton" title="<%=obLanguage("SetupSchool", "kOpenForEditing")%>" type="button" class="btn btn-default" onclick="fillingStatFormInfoCtrl.openToEdit();return false;">
					<span><%=obLanguage("SetupSchool", "kOpenForEditing")%></span>
				</button>
				<%
				ButtonPrintCommon "fillingStatFormInfoCtrl.print()", obLanguage("Buttons","kPrint")
				ButtonExport "fillingStatFormInfoCtrl.export()"%>
			</div>
		</div>
	</div><%
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames", "kFillingControl")
End Function

Sub specialHead()
	%>
<script>
	$(document).ready(function() {
		$("#openToEditButton").hide();

		jsSubmit({
			action: "/webapi/em/schools/statforms/filterpanels/fillingInfo",
			method: "GET",
			showProcessing: true
		}).then(function(response) {
			var model = response.filterPanel;
			var sources = response.filterSources;
			
			// проверка все ли фильтры готовы к выбору
			for ( var i = 0; i < sources.length; i ++ ) {
				if (!sources[i].items.length) {
					$('#refreshButton').hide();
					alert(language.Generic.EMReports.kFiltersNotReadyToSelect);
					break;
				}
			}

			var sfp = $('#statFormInfoPanel');
			fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/em/schools/statforms/fillingInfo/initfilters", $("#buttonPanel"));
			fillingStatFormInfoCtrl = new FillingStatFormInfoCtrl(sfp, fp);
		},
		function() {
			$('#buttonPanel').hide();
		});
	});


</script>
	<%
End Sub

Function GetFiltersPanelWidth()
	GetFiltersPanelWidth = "col-md-6 col-lg-8 col-sm-12"
End Function

Sub onDrawPage()
%>
	<div class="row">
		<div class="col-md-12">
			<div class="buttons-filters-panel form-horizontal">	
				<div class="filters-panel <%=GetFiltersPanelWidth()%>">
				</div>
				<hr>
			</div>
		</div>
	</div>
	
	<div class="row">
		<div class="col-md-12">
			<%Call DrawButtons%>
		</div>
	</div>

	<div id="statFormInfoPanel">
	</div>

<%
End Sub
%>
