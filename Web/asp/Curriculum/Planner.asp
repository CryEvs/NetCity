<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->

<%'© 2007-2015 IRTech. All rights reserved.

Dim rsGrades, rsVariants
Dim strGradeID, strVariantID
Dim strCurrPlanID, strCurrUnitID, strCurrLessonID
Dim strCurrElemType, strNotSwitch
Dim bAll
Dim strForm, stPlanID, bVAr
Dim bTeacherOnly
Dim strPlanID
Dim strVariantName
Dim bImmediatelyLoad

Function hasUserRightsOnPage()
	bAll = False
	If HasUserRight(arCurrMgmViewAll) Then hasUserRightsOnPage = True : bAll = True : Exit Function
	If HasUserRight(arCurrMgmCreateAll) Then hasUserRightsOnPage = True : bAll = True : Exit Function
	If HasUserRight(arCurrMgmViewSelf) Then hasUserRightsOnPage = True : Exit Function
	hasUserRightsOnPage = HasUserRight(arCurrMgmCreate)
End Function

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-8"
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum", "kTitlePlanner", strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLessonPlanning
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbLessonsPlans
 End Function

Sub ReadState()
	bImmediatelyLoad = True'GetSafeStr(Request("Load"),1,"N") = "Y"

	strCurrUnitID = GetSafeID(Request("UNID"),GetSafeID(obTokenMgr.GetData(strToken,stCrMngmUnitID),"0"))
	strCurrLessonID = GetSafeID(Request("LSID"),GetSafeID(obTokenMgr.GetData(strToken,stCrMngmLessonID),"0"))
	strCurrElemType = GetSafeStr(Request("ELEMTYPE"),2,"")
	strNotSwitch = GetSafeStr(Request("NOTSWITCH"),1,"N")
	strCurrPlanID = GetSafeID(Request("PLANID"),GetSafeID(obTokenMgr.GetData(strToken,stCurrPlan),"0"))
End Sub

Sub WriteState()
	If strVariantID <> "0" Then Call obTokenMgr.SetData(strToken, "VARIANTID", strVariantID)
	Call obTokenMgr.SetData(strToken, stCrMgmAll, bAll)
	Call obTokenMgr.SetData(strToken, stCurrPlan, strCurrPlanID)
	Call obTokenMgr.SetData(strToken, stCrMngmUnitID, strCurrUnitID)
	Call obTokenMgr.SetData(strToken, stCrMngmLessonID, strCurrLessonID)
End Sub

Sub Main()
End Sub

Function onLoad()
End Function

Sub onHead()
	shortReportName = "Planner"
	printPostFix = "Print"
	Call DrawCommonScripts()
%>

<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/file-attachments.min.css")%>">
<script src="<%=GetVersionedJsLink("fileAttachmentCtrl.min.js")%>" type="text/javascript"></script>

<script src="<%=GetVersionedResLink("/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>

<script src="<%=GetVersionedResLink("/vendor/pages/js/filters.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/static/dist/pages/planner/js/planner.js")%>" type="text/javascript"></script>
<script src="/vendor/components/jqueryui/jquery-ui.min.js" type="text/javascript"></script>
<link href="/vendor/components/jqueryui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>

<script src="/vendor/components/jquery.dynatree/dist/jquery.dynatree.min.js" type="text/javascript"></script>
<link href="/vendor/components/jquery.dynatree/dist/skin-vista/ui.dynatree.css" rel="stylesheet" type="text/css"/>
<style>
	ul.dynatree-container {
		border: none;
	}
</style>
<script><!--

var currCtx = {
	elementType: '<%=strCurrElemType%>',
	<%If strCurrElemType="pl" Then %>
		elementId: '<%=strCurrPlanID%>',
	<%ElseIf strCurrElemType="un" Then %>
		elementId: '<%=strCurrUnitID%>',
	<%ElseIf strCurrElemType="ls" Then %>
		elementId: '<%=strCurrLessonID%>',
	<%End If %>
	planId: '<%=strCurrPlanID%>',
	unitId: '<%=strCurrUnitID%>',
	lessonId: '<%=strCurrLessonID%>'
};

var fileAttachmentCtrl;
var plannerCtrl;

$(document).ready(function() {
	plannerCtrl = new PlannerCtrl({
		ctx: currCtx,
		moduleQa: <%=Bool2Js(Module_QA_Available())%>,
		container: $("#tree"),
		readOnly: <%=Bool2Js(readonly)%>
	});
	plannerCtrl.init();
});

//-->
</script><%
End Sub

Sub DrawButtons()
End Sub

Sub DrawLinkButtons
	%>
		<button id="export-btn" title="<%=obLanguage("Curriculum","kExportVariant")%>" type="button" class="btn btn-default">
			<span class="glyphicon glyphicon-export"></span> 
			<span><%= obLanguage("Buttons","kExport")%></span>
		</button>

		<button id="import-btn" title="<%=obLanguage("Curriculum","kImportVariant")%>" type="button" class="btn btn-default btn-write-access">
			<span class="glyphicon glyphicon-import"></span> 
			<span><%= obLanguage("Buttons","kImport")%></span>
		</button>
	<%
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact form-inline"
End Function

Sub DrawFilters(strForm)
End Sub

Sub onDrawPage()%>
	<form NAME="FilterForm" METHOD="post" ACTION="/asp/Curriculum/Planner.asp" style="margin-bottom: 0;">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("VariantChanged", 0, "PlanID", strPlanID))%>

		<%Call DrawButtonsFiltersSingleRow("FilterForm")%>
	</form>

	<div class="row">
		<div class="col-md-12 col-lg-12">
			<div class="form-horizontal">
				<div class="form-group">
					<div class="col-md-12"> 
						<button id="load-plan-btn" title="Загрузить" type="button" class="btn btn-primary btn-sm">
							<span class="glyphicon glyphicon-search"></span>
							<span><%=obLanguage("Buttons","kLoad")%></span>
						</button>

						<div class="action-panel hide" style="display: inline;">
							<button id="view-btn" title="<%=obLanguage("Curriculum","kBtnViewUnitLesson")%>" type="button" class="btn btn-sm btn-info btn-readonly-access">
								<span><%=obLanguage("Buttons","kView")%></span>
							</button>

							<button id="create-btn" title="<%=obLanguage("Curriculum","kBtnCreateUnitLesson")%>" type="button" class="btn btn-sm btn-write-access">
								<span class="glyphicon glyphicon-plus-sign"></span>
								<span><%=obLanguage("Buttons","kAdd")%></span>
							</button>

							<button id="edit-btn" title="<%=obLanguage("Curriculum","kBtnEditUnitLesson")%>" type="button" class="btn btn-sm btn-warning btn-write-access">
								<span class="glyphicon glyphicon-pencil"></span>
								<span><%=obLanguage("Buttons","kEdit")%></span>
							</button>

							<button id="copy-btn" title="<%=obLanguage("Curriculum","kBtnCopyUnitLesson")%>" type="button" class="btn btn-sm btn-write-access">
								<span class="glyphicon glyphicon-duplicate"></span>
								<span><%=obLanguage("Buttons","kCopy")%></span>
							</button>

							<button id="del-btn" title="<%=obLanguage("Curriculum","kBtnDeleteUnitLesson")%>" type="button" class="btn btn-sm btn-danger btn-write-access">
								<span class="glyphicon glyphicon-minus-sign"></span>
								<span><%=obLanguage("Buttons","kRemove")%></span>
							</button>

							<button id="variants-btn" title="<%=obLanguage("Curriculum","kBtnSPVariants")%>" type="button" class="btn btn-sm">
								<span><%=obLanguage("Curriculum","kBtnSPVariants")%></span>
							</button>

							<div id="plan-extra-buttons" style="display: inline">

								<button id="report-btn" title="<%=obLanguage("Curriculum", "kViewReport")%>" type="button" class="btn btn-sm btn-info">
									<span>Отчет</span>
								</button>

							</div>

						</div>

					</div> 
				</div>
			</div>
		</div>
	</div>
	<%
		'If Not readonly Then
			If Not bFutureMode And GetSafeBool(obTokenMgr.GetData(strToken, stFutureYearExists), False) Then
				DrawWarning DB2HTML_BR(obLanguage("Curriculum","kCurriculumNotTransferedToFutureYear"))
			End If
		'End If
	%>

	<div class="row">
		<div class="col-md-12 col-lg-12">
			<div class="content-preloader hide" id="process-message-journal">
				<span class="arrows"></span>
				<span class="title"><%=obLanguage("Movement","kPleaseWait")%></span>
			</div>
			<div id="empty-plan-panel" class="alert alert-info hide" role="alert">Нет вариантов КТП для данных значений фильтра</div>
			<div id="plan-container" class="hide">

				<button id="expand-btn" title="<%=obLanguage("Curriculum","kBtnExpandAll")%>" type="button" class="btn btn-sm btn-default">
					<span class="glyphicon glyphicon-folder-open"></span>
				</button>
				<button id="collapse-btn" title="<%=obLanguage("Curriculum","kBtnCollapseAll")%>" type="button" class="btn btn-sm btn-default">
					<span class="glyphicon glyphicon-folder-close"></span>
				</button>

				<div id="tree" class="cast-a-shadow" style="margin-top: 10px;"></div>
			</div>
		</div>
	</div>

	<form NAME="Planner" METHOD="post" ACTION="/asp/Curriculum/planner.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PLANID",strCurrPlanID, "UNID",strCurrUnitID, "LSID",strCurrLessonID, "ELEMTYPE",strCurrElemType, "NOTSWITCH","N", "EXPCOL","", "GRADEID","", "RO", ""))%>
	</form><%

	Call DrawExcelForm()
End Sub%>