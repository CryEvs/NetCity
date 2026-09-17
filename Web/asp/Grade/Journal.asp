<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<!-- #INCLUDE VIRTUAL="asp/SetupSchool/Calendar/Curriculum/Float_js_inc.asp" -->
<%' © 2007-2015 IRTech. All rights reserved.

Dim objFilterPanel
Dim bImmediatelyLoad
Dim bExtraActivity

Function GetPageMenuItem()
	GetPageMenuItem = IIf(bExtraActivity, MenuItem_miEA_Journal, MenuItem_miJournal)
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf(bExtraActivity, TabItem_tbEA_Jurnal, TabItem_tbJurnal)
 End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Common","kJournal",strFunctionalityType)
End Function

Function hasUserRightsOnPage()
	If HasUserRight(arJournalEditAll) Then 
		hasUserRightsOnPage = True
		Exit Function
	End If
	If HasUserRight(arJournalViewAll) Then hasUserRightsOnPage = True :Exit Function
	If HasUserRight(arJournalEditSelf) Then hasUserRightsOnPage = True :Exit Function
	hasUserRightsOnPage = HasUserRight(arJournalViewSelf)
End Function

Sub ReadState()
	Dim objGradingComponent

	'bExtraActivity = GetSafeBool(Request("extraActivity"), False)
	bExtraActivity = (LCase(Request("extraActivity") & "") = "true")

	bImmediatelyLoad = (GetSafeLng(obTokenMgr.GetData(strToken, "JOURNAL_IMMEDIATELY_LOAD"), 0) = 1)
	Set objGradingComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")
	Set objFilterPanel = objGradingComponent.GetPreparedJournalFilterPanel(bExtraActivity)
	Call obTokenMgr.SetData(strToken, stLA_Mode, empty)
	Call obTokenMgr.SetData(strToken, stJuniorLA, empty)
End Sub

Sub onHead()
	%>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/pages/grade/js/journal-bundle.js")%>" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/grade/css/journal.css")%>">
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/grade/css/edit-journal.css")%>">
	<script src="<%=GetVersionedJsLink("tableExt.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/common/js/checkUserActivity.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/components/linkifyjs/linkify.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/components/linkifyjs/linkify-jquery.min.js")%>" type="text/javascript"></script>
	
	<script><!--
		var pageController;
		var preparedfp = <%=comHelper.JsonHelper.SerializeObject(objFilterPanel, Array("camelCase", "enumConverter", "ignoreNullValues", "formattingNone"))%>;
		
		var immediatelyLoad = <%=Bool2Js(bImmediatelyLoad)%>;

		$(document).ready(function(){
			pageController = new PageController(preparedfp, <%If bExtraActivity Then%>true<%Else%>false<%End If%>);
			$(document).trigger("pageReady");
		});
	//-->
	</script>
	<%
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
End Sub

Sub DrawButtons()
End Sub

Function ButtonPrintHandler()
	ButtonPrintHandler = ""
End Function

Function ButtonExportHandler()
	ButtonExportHandler = ""
End Function

Sub DrawLinkButtons
	%>
	<button title="<%=obLanguage("Grade","kEditJournalAssignments", strFunctionalityType)%>" type="button" class="btn btn-default hide assign-themes-btn">
		<span><%=obLanguage("Grade","kEditJournalAssignments", strFunctionalityType)%></span>
	</button>
	<button title="<%=obLanguage("Buttons","kPrint")%>" type="button" class="btn btn-default journal-print-btn">
		<span class="glyphicon glyphicon-print"></span>
		<span><%=obLanguage("Buttons","kPrint")%></span>
	</button>
	<button title="<%=obLanguage("Common","kBtnExcel")%>" type="button" class="btn btn-default journal-export-btn">
		<span class="glyphicon glyphicon-export"></span>
		<span><%=obLanguage("Common","kBtnExcel")%></span>
	</button>
	<%
End Sub

Sub onDrawPage()
	%>
	<div id="state-journal" class="hide">
		<div class="buttons-filters-panel form-horizontal single-row">
			<div class="row journal-filters">
				<div class="buttons-panel">
					<%DrawLinkButtonPanel%>
				</div>
				<div class="filters-panel <%=GetFiltersPanelWidth()%>"></div>
			</div>
			<div id="quick-edit-panel" class="quick-edit-panel hide">
				<div id="quick-edit-options" class="filters-panel-compact form-horizontal hide">
					<div class="form-group"> 
						<label class="control-label col-md-4 col-lg-3 col-sm-4"><%=obLanguage("Assignment","kATAssignmentType")%></label> 
						<div class="col-md-8 col-lg-5 col-sm-8"> 
							<select class="form-control" style="display: inline-block;" id="quick-edit-assign-type-select"></select>
						</div> 
					</div>
					<div class="form-group"> 
						<label class="control-label col-md-4 col-lg-3 col-sm-4"><%=obLanguage("Common","kMark")%></label> 
						<div class="col-md-8 col-lg-5 col-sm-8"> 
							<select class="form-control visible-sm visible-xs" style="display: inline-block;" id="quick-edit-mark"></select>
							<div class="btn-group hidden-xs hidden-sm" role="group" id="quick-edit-mark-btns"></div>
						</div> 
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 col-lg-12">
				<div class="form-horizontal">
					<div class="form-group">
						<div class="col-md-12"> 
							<button id="load-journal-btn" title="Загрузить" type="button" class="btn btn-primary btn-sm">
								<span class="glyphicon glyphicon-search"></span>
								<span><%=obLanguage("Buttons","kLoad")%></span>
							</button>
							<button type="button" class="btn btn-warning btn-sm hide" data-toggle="button" aria-pressed="false" id="quick-edit-switch-btn">
								<span><%=obLanguage("Buttons","kQuickEditMode")%></span>
							</button>
							<div class="hide" id="quick-edit-controls" style="display: inline">
								<button title="Сохранить" type="button" class="btn btn-primary btn-sm" disabled="disabled" id="quick-edit-save-btn">
									<span><%=obLanguage("Buttons","kSave")%></span>
								</button>
								<button title="Отмена" type="button" class="btn btn-default btn-sm" disabled="disabled" id="quick-edit-cancel-btn">
									<span><%=obLanguage("Buttons","kCancel")%></span>
								</button>
							</div>
						</div> 
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 col-lg-12">
				<div class="info-message <%=IIF(bImmediatelyLoad, "hide", "") %>">
                    <%DrawInfo obLanguage("Grade", "kDisplayClassJournal", strFunctionalityType), False %>
				</div>
				<div class="content-preloader" id="process-message-journal">
					<span class="arrows"></span>
					<span class="title"><%=obLanguage("Movement","kPleaseWait")%></span>
				</div>
				<div id="journal-container" class="journal-wrapper state-content" style="max-height: none;"></div>
				<div id="journal-last-access-info"></div>
			</div>
		</div>
	</div>
	<div id="state-edit" class="hide">
		<div class="buttons-filters-panel form-horizontal">
			<%OpenBtnGroup%>
				<div class="buttons-panel-left">
					<button title="<%=obLanguage("Buttons","kSave")%>" type="button" class="btn btn-primary save-journal-btn">
						<span class="glyphicon glyphicon-floppy-save"></span>
						<span><%=obLanguage("Buttons","kSave")%></span>
					</button>
					<button title="<%=obLanguage("Buttons","kSaveAndBack")%>" type="button" class="btn btn-default save-journal-with-return-btn">
						<span class="glyphicon glyphicon-floppy-save"></span>
						<span><%=obLanguage("Buttons","kSaveAndBack")%></span>
					</button>
					<button title="<%=obLanguage("Grade","kAddAssignment")%>" type="button" class="btn btn-info hide add-assign-btn">
						<span class="glyphicon glyphicon-plus-sign"></span>
						<span><%=obLanguage("Grade","kAddAssignment")%></span>
					</button>
					<%If Not bExtraActivity Then%>
						<button title="<%=obLanguage("Grade","kCreateHomeAssignment")%>" type="button" class="btn btn-info hide add-homeAssign-btn">
							<span class="glyphicon glyphicon-plus-sign"></span>
							<span><%=obLanguage("Grade","kCreateHomeAssignmentOnCurrentLesson")%></span>
						</button>
					<%End If%>
				</div>
				<%If Not bExtraActivity Then%>
					<div class="buttons-panel-right">
						<button title="<%=obLanguage("Grade","kAddHomeAssignOnNextClassmeeting")%>" type="button" class="btn btn-info add-next-homeAssign-btn">
							<span class="glyphicon glyphicon-share-alt"></span>
							<span><%=obLanguage("Grade","kAddHomeAssignOnNextClassmeeting")%></span>
						</button>
					</div>
				<%End If%>
			<%CloseBtnGroup%>
			<div class="row">
				<div class="filters-panel col-md-6"></div>
			</div>
		</div>
		<div id="edit-journal-container" class="state-content"></div>
		
	</div>
	<div id="state-totals" class="hide">
		<div class="buttons-filters-panel form-horizontal">
			<%OpenBtnGroup%>
				<div class="buttons-panel-left">
					<%
					Call ShowButtonBaseId("", obLanguage("Buttons","kSave"), "glyphicon glyphicon-floppy-save", obLanguage("Common","kSave"), "btn-primary", "totalsSaveId", false, true) 
					Call ShowButtonBaseId("", obLanguage("Buttons","kReset"), "glyphicon glyphicon-repeat", obLanguage("Common","kReset"), "btn-warning", "totalsResetId", false, true) 
					%>
				</div>
			<%CloseBtnGroup%>
			<div class="row">
				<div class="filters-panel col-md-6"></div>
			</div>
		</div>
		<div id="journal-totals-container" class="state-content"></div>
	</div>
	<%
End Sub
%>