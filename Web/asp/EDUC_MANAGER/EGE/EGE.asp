<!-- #INCLUDE VIRTUAL="/asp/EDUC_MANAGER/em_screen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/EGE/EGE_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterEMs.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strFilterEMID, strFuncTypeID, strGlobalYearID
Dim objEMSchools, strEMSchoolID
Dim bCanEgeImport, bCanDeleteEgeResults
Dim strConfirmEGEResultsDeleting, strConfirmEGEResultsDeletingInOldYear
Dim bNoResults
Dim objCommonYears

Function GetPageTitle()
	GetPageTitle = obLanguage("EGE","kEGEResults")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Management
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_EGEInfo
 End Function

Sub ReadState()
	Dim dtToday, objYearInfo, dtYearEnd, strYearName
	Dim nYearToday, nYearGlobalYearEnd

	bCanEgeImport = False
	bCanDeleteEgeResults = False

	strFilterEMID = ReadEMRegionFilter(False)
	strFuncTypeID = kFuncType_Common
	bExit = False

	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать учебные года подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set objCommonYears = objNSNET.GetEMGlobalYearsForFuncType(strFilterEMID, strFuncTypeID)
	If objCommonYears.EOF Then
		bExit = True
		Exit Sub
	End If
	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
	strGlobalYearID = CStr(nGlobalYearID)

	strEMSchoolID = GetSafeID(Request("EMSCHOOLID"), GetSafeID(obTokenMgr.GetData(strToken, stEMSchoolID), "0"))
	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать ОО подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set objEMSchools = objNSNET.GetEMSchoolsForFuncTypes(strFilterEMID, kWizardSteps, strFuncTypeID, strGlobalYearID)
	If objEMSchools.EOF Then Exit Sub
	
	strEMSchoolID = CStr(GetSafeIDForRs(strEMSchoolID, objEMSchools, "SCHOOLID"))
	If strEMSchoolID = "0" Then
		strEMSchoolID = GetSafeID(objEMSchools("SCHOOLID"), Null)
	End If

	Set objYearInfo = objNSNET.GetGlobalYears(strGlobalYearID)
	If Not objYearInfo.EOF Then
		dtYearEnd = GetSafeDate(objYearInfo("ENDDATE"), Null)
		dtToday = NSNow()

		nYearToday = Year(dtToday)
		nYearGlobalYearEnd = Year(dtYearEnd)

		bCanEgeImport = (nYearToday = nYearGlobalYearEnd)
		bCanDeleteEgeResults = (nYearToday >= nYearGlobalYearEnd)

		If bCanDeleteEgeResults Then
			strYearName = GetSafeStr(objYearInfo("SCHOOLYEARNAME"), -1, "")
			strConfirmEGEResultsDeleting = Replace(obLanguage("Import","kConfirmEGEResultsDeleting"), "%", strYearName)
				
			If Not bCanEgeImport Then
				strConfirmEGEResultsDeletingInOldYear = Replace(obLanguage("Import","kConfirmEGEResultsDeletingInOldYear"), "%", strYearName)
			End If
		End If
	End If
End Sub

Sub InitEgeClasses()
	nEgeClassId = GetSafeLng(Request("EGE_CLASSID"), -1)
	Set arrEgeClasses = objEgeComponent.GetEgeClassses(strGlobalYearID, strEMSchoolID)
	If nEgeClassId <> -1 Then
		If Not objEgeComponent.IsSafeEgeClassId(strGlobalYearID, strEMSchoolID, nEgeClassId) Then
			nEgeClassId = -1
		End If
	End If
End Sub

Sub InitEgeSubjects()
	nEgeSubjectId = GetSafeLng(Request("EGE_SUBJECTID"), -1)
	Set arrEgeSubjects = objEgeComponent.GetEgeClassEgeSubjects(strGlobalYearID, strEMSchoolID, nEgeClassId)
	If nEgeSubjectId <> -1 And nEgeClassId <> -1 Then
		If Not objEgeComponent.IsSafeEgeSubjectId(nEgeClassId, nEgeSubjectId) Then
			nEgeSubjectId = -1
		End If
	End If
End Sub

Sub Main()
	If bExit Then
		bNoResults = True
		Exit Sub
	End If

	Call InitEgeComponent()
	Call InitEgeClasses()
	Call InitEgeSubjects()

	arrEgeResults = objEgeComponent.GetResultsView(strGlobalYearID, strFilterEMID, strEMSchoolID, nEgeClassId, nEgeSubjectId)
	bNoResults = UBound(arrEgeResults) = -1 And nEgeClassId = -1 And nEgeSubjectId = -1
End Sub

Sub WriteState()
	Call WriteEMs()
	Call obTokenMgr.SetData(strToken, stEMSchoolID, strEMSchoolID)
	Call obTokenMgr.SetData(strToken, stGlobalYearID, strGlobalYearID)
End Sub

Sub onHead()%>
	<script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>

	<style>
		.monos {
			font-family: Consolas, DejaVu Sans Mono, Liberation Mono, Lucida Console, Courier New, Batang, Gulim, Dotum;
			font-size: 12px;
		}
	</style>
	<script><!--
		function goEOsCodes() {
			var form = document.forms.MainForm;
			form.Back.value = '/asp/EDUC_MANAGER/EGE/EGE.asp';

			$(document).trigger('showProcessing');
			DoSubmit(form, "/asp/EDUC_MANAGER/Schoolcodes.asp");
		}

		function reload() {
			var form = document.forms.MainForm;

			$(document).trigger('showProcessing');
			DoSubmit(form, "EGE.asp");
		}

		<%If bCanDeleteEgeResults Then%>
			function delEGE() {
				var defArgs = new Array();

				defArgs.push(function(){return !isDBBusy()}); 
				defArgs.push($.show.getConfirmation('<%=strConfirmEGEResultsDeleting%>'));

				<%If Not bCanEgeImport Then%>
					defArgs.push($.show.getConfirmation('<%=strConfirmEGEResultsDeletingInOldYear%>'));
				<%End If%>

				extDeferred.when(defArgs).then(function(){
					var form = document.forms.MainForm;
					
					$(document).trigger('showProcessing');
					DoSubmit(form, "DeleteResults.asp");
				});
			}
		<%End If%>

		function Back() {
			goBack(document.forms.MainForm,'/asp/EDUC_MANAGER/em_options.asp');
		}

		<%
		If bCanEgeImport Then%>
			function onChange() {
				$(document).trigger('showProcessing');
				DoSubmit(document.MainForm, "");
			}

			function importEgeResults() {
				$.show.fileDialog({
					title: language.Generic.EM.kImportEGE,
					isAjax: true,
					fileExts: ['.xls'],
					url: "/asp/EDUC_MANAGER/EGE/EGEImport.asp",
					handlerAjaxSuccess: function(response) {
						if(response.IsErorr) {
							$.show.error(response.Message);
							return;
						}

						$.show.dialog({
							title: "<%= oblanguage("EM","kImportEGE")%>",
							message: response.message,
							buttons: [{
										label: "<%=obLanguage("Import","kBeginImport")%>",
										cssClass: "btn-primary",
										action: function(dialog){
											jsSubmit({
												form: document.MainForm,
												action: "EGEImportSave.asp",
												showProcessing: true,
												onSuccess: function(response){
													dialog.close();
													$.show.message(response.message)
														.then(reload);
												}
											});
										}
									}]
						});
					}
				});
			}
		<%End If%>
	//--></script><%
End Sub

Sub onDrawPage()%>
	<FORM Name="MainForm" METHOD="POST" ACTION="EGE.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("Back", ""))%><%

		Call DrawButtonsFiltersSingleRow("MainForm")
		If Not bExit Then
			Call DrawEgeResults()
		End If%>
	</FORM><%
End Sub

Sub DrawEgeResults()
	Call DrawEgeResultsTable(arrEgeResults)
End Sub

Sub DrawButtons()
End Sub

Sub DrawLinkButtons()
	If bCanEgeImport Then
		Call ButtonImport("importEgeResults()", oblanguage("EM","kImportEGE"))
	End If
	If bCanDeleteEgeResults Then
		Call ButtonDelEx("delEGE()", obLanguage("EM","kDelEGE"), obLanguage("EM","kDelEGE"))
	End If
	SimpleButton "goEOsCodes()", oblanguage("EM","kEOsCodes")
End Sub

Sub DrawFilters(strForm)
	Call DrawEMRegionFilter_2(strForm)
	If Not bExit Then
		Call DrawFilterRow(strForm, obLanguage("EMReports","kEMSchool"), "EMSCHOOLID", objEMSchools, "SCHOOLID", "SCHOOLNAME", strEMSchoolID, False)
		Call DrawFilterRow(strForm, obLanguage("Common","kSchoolYear"), "CMNYEAR", objCommonYears, "GLOBALYEARID", "SCHOOLYEARNAME", strGlobalYearID, False)
		If bNoResults Then Exit Sub
		Call DrawEnumFilterRow(strForm, obLanguage("Common","kClass", strFunctionalityType), "EGE_CLASSID", arrEgeClasses, nEgeClassId, obLanguage("Common","kAll"))
		Call DrawEnumFilterRow(strForm, obLanguage("Common","kSubject"), "EGE_SUBJECTID", arrEgeSubjects, nEgeSubjectId, obLanguage("Common","kAll"))
	Else
		Call DrawInfo(obLanguage("EMReports","kNoSchoolYearsInDB"), False)
	End If
End Sub%>