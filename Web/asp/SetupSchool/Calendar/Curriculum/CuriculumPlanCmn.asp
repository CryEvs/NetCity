<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterProfiles.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterDirections.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanDraw_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'Const kMinCurHours = 0.01 - см. valMinCurHours в JavaScript. Если здесь определить 0.01, то она появляется в JavaScript как 0,01 (десятичный разделитель меняется!) и выдаёт ошибку.
Const kMinCurHours = "0.01" ' Надо обязательно определить как строку, чтобы избежать неправильного преобразования (в 0,01 в JavaScript)!

Dim bEmptyTerms

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Sub ReadStateSpecial()
End Sub

Sub ReadState()
	Call ReadStateSpecial()
	Call InitCuriculum()
End Sub

Sub WriteState()
	Call WriteTerm()

	If Not bIsIUPCuriculum Then
		Call WriteProfile()
		If bAddSchool Then
			Call WriteDirection()
		End If
	End If

	WriteStateCmn
End Sub

Sub Main
	Call InitYearTerms()
	bEmptyTerms = CLng(strTermID) = 0
	If bEmptyTerms Then Exit Sub
	InitMain

	arrCuriculumGrades = Empty
	Call GetCurriculumColumnsCmn()
End Sub

Sub onHeadSpecial()
End Sub

Sub onHead()
	Dim bCanCopy
	If bEmptyTerms Then Exit Sub
	If nPCount <= 0 Then Exit Sub
	If objComponentListAll.EOF Then Exit Sub

	bCanCopy = CanCopyCuriculum(strCurrYearID, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID)

	%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/curiculum-plan.min.css")%>">
	<script src="<%=GetVersionedResLink("/vendor/pages/js/curiculum-plan.js")%>" type="text/javascript"></script>
	<!-- #INCLUDE FILE=Float_js_inc.asp -->
	<%
	onHeadSpecial
	If objCuriculum.EOF Then Exit Sub%>
	<script type="text/javascript">
		function getCurriculumPlan() {
			controller = new curiculumPlanCtrl()
			addLimitCtrl = new addLimitsToPlanCtrl({minGrade: <%=nFilterGradeMin%>, maxGrade: <%=nFilterGradeMax%>, isIUP: <%=Bool2Js(bIsIUPCuriculum)%>})

			var options = {
				colsCount: nColsCount,
				readonly: <%=Bool2Js(readonly) %>,
				scrollBarWidth: <%=nScrolBarWidth%>,
				parentSubjectsView: <%=Bool2Js(nCuriculum_SubjGroups = 0)%>,
				canCopy: <%=Bool2Js(bCanCopy)%>,
				minGrade: <%=nFilterGradeMin%>,
				maxGrade: <%=nFilterGradeMax%>,
				yearId: <%=strCurrYearID%>,
				termId: <%=strTermID%>,
				profileId: <%=strProfileID%>,
				directionId: <%=strDirectionID%>,
				isIup: <%=Bool2Js(bIsIUPCuriculum)%>,
				addToPlan: true
			};
			if (typeof specificOptions != "undefined"){
				options = $.extend(options, specificOptions);
			}
			var initModel = {
				subjects: _.indexBy(<%=comHelper.DataSetAdapterHelper.ToJSON(objSchoolSubjectList, Array("subjectId", "subjectName", "parentSubjectId"), Array("subjectId", "subjectName", "parentSubjectId"), Array("escapeTags"))%>, "subjectId"),
				components: <%=comHelper.DataSetAdapterHelper.ToJSON(objComponentListAll, Array("componentId", "componentName"))%>
			};
			if(typeof modelExt != "undefined") {
				initModel = $.extend({}, initModel, modelExt);
			}
			//modelExt - расширение модели. задается в скрипте конкретного УП
			controller.initPlan(options, initModel);
		};

		$(document).ready(function() {
			getCurriculumPlan();
		});
	</script><%
	objComponentListAll.MoveFirst
End Sub

Function ButtonPrintHandler()
	ButtonPrintHandler = "controller.printPlan()"
End Function

Function ButtonExportHandler()
	ButtonExportHandler = "controller.exportPlan()"
End Function

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
	Call DrawTerms(strForm)
	If bEmptyTerms Then Exit Sub

	Call DrawSimpleFilterRow(obLanguage("SetupSchoolCurPlan","kGrades"), "Curiculum_Grades", Array( _
			-1, obLanguage("SetupSchoolCurPlan","kGradesAll"), _
			1, obLanguage("SetupSchoolCurPlan","kGradeJunior"), _
			2, obLanguage("SetupSchoolCurPlan","kGradeMiddle"), _
			3, obLanguage("SetupSchoolCurPlan","kGradeSenior")), _
			nCuriculum_Grades, False, "OnChangeSelect('" & strForm & "','CuriculumPlan.asp')")

	If nCuriculum_Grades <> -1 Then
		Call DrawFilterRow(strForm, obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType), "Curiculum_Grade", objGrades, "GRADE", "GRADENAME", nCuriculum_Grade, True)
	End If

	If bShowProfilesFilter Then
		Call DrawProfiles(strForm, True)
	End If

	If bShowDirectionsFilter Then
		Call DrawDirections(strForm, True)
	End If

	Call DrawCuriculumView(strForm)

	If bCuriculum_SubjGroups Then
		Call DrawSimpleFilterRow(obLanguage("SetupSchoolCurPlan","kSubjectGroups"), "Curiculum_SubjGroups", Array( _
				1, obLanguage("SetupSchoolCurPlan","kSubjectGroups_Subjects"), _
				0, obLanguage("SetupSchoolCurPlan","kSubjectGroups_GroupName")), _
				nCuriculum_SubjGroups, False, "OnChangeSelect('" & strForm & "','CuriculumPlan.asp')")
	End If
End Sub

Sub DrawLinkButtons()
	If bEmptyTerms Then Exit Sub
	If nPCount <= 0 Then Exit Sub
	If objCuriculum.EOF Then Exit Sub
	DrawPrintButtons
End Sub

Sub DrawButtons()
	If bEmptyTerms Then Exit Sub
	If objCuriculum.EOF Then Exit Sub
	If IsEmpty(arrCuriculumGrades) Then Exit Sub
	If nPCount <= 0 Then Exit Sub
	If objComponentListAll.EOF Then Exit Sub

	If Not readonly Then
		If Not objComponentListAll.EOF Then
			ButtonSave "controller.save()", obLanguage("Common","kSave")
			ButtonReset "dataWereChanged = false;getCurriculumPlan()", obLanguage("Common","kReset")
			%><div id="copy-btn-block" class="hidden display-inline"><%ButtonCopy "controller.copy()", obLanguage("Buttons","kCopy")%></div><%

			rw ShowButtonBase( "addLimitCtrl.addLimits()", obLanguage("SetupSchoolCurPlan","kAddLimit"), "glyphicon glyphicon-plus-sign", obLanguage("SetupSchoolCurPlan","kAddLimit"), "btn-info add-limits-button", False ) 
			ButtonDelEx "controller.clearPlan()", obLanguage("SetupSchoolCurPlan","kClearCurriculumPlan"), obLanguage("SetupSchoolCurPlan","kClearCurriculumPlanBtn")
		End If
	End If
End Sub

Sub onDrawPage()
	%><form name="Filter" method="post" action="CuriculumPlan.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("GradeMin", nFilterGradeMin, "GradeMax", nFilterGradeMax, "bAdd", "True") )%>

		<%Call DrawButtonsFilters(Not IsEmpty(arrCuriculumGrades), "Filter")%>
	</form><%
	
	If bEmptyTerms Then Exit Sub
	
	If IsEmpty(arrCuriculumGrades) Then
		DrawInfo DB2HTML_BR(obLanguage("SetupSchoolCurPlan","kNoIUPClassesForTermTypeAndIUPLimits",strFunctionalityType)), False
		Exit Sub
	End If

	If nPCount <= 0 Then
		DrawInfo obLanguage("SetupSchoolCurPlan", "kNoClassesForGradeAndPeriodType", strFunctionalityType), False
		Exit Sub
	End If

	If objCuriculum.EOF Then
		DrawInfo obLanguage("SetupSchoolCurPlan","kCurriculumEmpty") & ". " & obLanguage("SetupSchoolCurPlan","kFillHours"), False
		Exit Sub
	End If

	If objComponentListAll.EOF Then
		DrawInfo obLanguage("SetupSchoolCalendar","kCurriculumLimitsNotDefined"), False
		Exit Sub
	End If

	Call DrawTablePlan()
	Call DrawLegend()

	objCuriculum.Close
	Set objCuriculum = Nothing
End Sub

Sub DrawTablePlan()
	%><span class="content-page-preloader" id="process-message"><span><%=obLanguage("Curriculum","kPleaseWait")%>...</span></span>
	<div id="plan-container" style="visibility:hidden; width: 100%">
		<div id="plan-header" style="max-width: 1200px; overflow-x: hidden">
			<table border="1" id="plan-table-header" class="curiculum-plan table-xs"><%
				Call PrintTableHeader(IIf(bIsFieldExists, obLanguage("SetupSchoolCalendar","kSubjectFields"), "&nbsp;"), False)%>
			</table>
		</div>
		<div id="plan-body" style="max-width: 1200px; max-height: 500px; overflow: auto; display:inline-block;"></div>
	</div>

		<script type="text/javascript">
			var nColsCount = <%=nColsCount%>;
		</script>
	<%
End Sub

Sub DrawLegend()
%><div class="legend hidden">
	<div>
		<%If Not readonly Then %>
		<p><span class="legend-label legend-changes"></span><span class="legend-description"> — Измененные часы УП</span></p>
		<%End If %>
		<p><span class="legend-label legend-overflow"></span><span class="legend-description"> — Превышение нагрузок УП</span></p>
	</div>
	<%DrawSpecificLegend%>
</div><%

End Sub

Sub DrawSpecificLegend()
End Sub
%>
