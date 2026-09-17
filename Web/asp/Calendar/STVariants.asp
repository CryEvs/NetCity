<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE FILE="STVariants_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/firstLetter.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nClassesCountOnLine
Dim strClassesNewLineDispl


Dim bPreSchool, arrPreSchoolGrades
Dim bAddSchool
Dim objVariants, nVariantsCount

Function GetPageTitle()
	GetPageTitle = obLanguage("Calendar","kTitleLessonTimeVariants")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbTimes
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCalendarCreateCalendar)
End Function

Sub Main
	Dim objCMComponent, objResult
	Dim objTmp

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If

	Set objVariants = Nothing

	Set objCMComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IClassMeetingComponent")
	TestError obLanguage("ServAdmin", "kCantCreateObj")

	Set objResult = objCMComponent.GetScheduleTimeVariants(strCurrYearID)
	Call TestResult (objResult, obLanguage("Calendar","kErrGetInfoForSTVariants"))

	Set objVariants = objResult.Data
	nVariantsCount = objVariants.Count

	Call MakeArraySTVariantsLevels(objCMComponent)
	Set objCMComponent = Nothing
End Sub

Sub onEndPage()
	Set objResult = Nothing
	Set objVariants = Nothing
End Sub

Sub onHead()
	If Not readonly Then
		Call BadFirstLetter()
	End If%>

	<SCRIPT><!--
		<%If Not readonly Then%>
			function doSave(){
				var form = document.MainForm;
				var chkdCnt = 0;
				var el = form.VariantID, elVarName = form.VariantName, errMsg = '';

				if(el) {
					if(el.length) {
						for (var i = 0; i < el.length; i++) {
							if(badFirstLetter(elVarName[i]), false) return false;

							if(trimStr(elVarName[i].value ) == ''){
								alert('<%=obLanguage("SetupSchoolCalendar","kAlertCreateName")%>');
								elVarName[i].focus();

								return false;
							}
						}
					}
					else {
						if(badFirstLetter(elVarName), false) return false;

						if(trimStr(elVarName.value) == '') {
							alert('<%=obLanguage("SetupSchoolCalendar","kAlertCreateName")%>');
							elVarName.focus();

							return false;
						}
					}
				}
				jsSaveForm (form);
			}

			function addVariant() {
				var sendBtn = function(dialog) { 
					var form = document.forms["addNewVariant"];

					if (form.VAR_NEW.value == '') {
						alert(language.Generic.SetupSchoolCalendar.kEnterVariant);
					}
					else {
						$(document).trigger('showProcessing');
						ok("addNewVariant", "STVariantsSave.asp");
					}
				};

				$.show.dialog({
					title: '<%=obLanguage("Common","kAdd") & " " & LCase(obLanguage("Curriculum","kVariant"))%>',
					message: $('#addNewVariantTempl'),
					buttons: [{label: language.Generic.Common.kAdd, action: sendBtn, cssClass: 'btn-primary'}]
				});
			}

			function delVariants() {
				var form = document.MainForm;
				var el = $('input[name=VariantID]');
				var dltVariants = $('input[name="DEL"]:checked', document.forms['MainForm']);

				whenChecked(form, 'DEL').then(function(checkedCnt) {
					if(checkedCnt == el.length) {
						alert(language.Generic.SetupSchoolCalendar.kAlertDeleteAll);
					}
					else {
						$(document).trigger('showProcessing');
						postTo("STVariantsSave.asp", "ACT=delete&" + dltVariants.serialize());
					}
				});
			}
		<%End If%>

		function gotoVariant(variantId, variantName) {
			checkForChanges().then(function() {
				var form = document.MainForm;

				form.elements['STVariantID'].value = variantId;
				form.elements['STVariantName'].value = variantName;

				$(document).trigger('showProcessing');
				ok('MainForm', 'ScheduleTimes.asp');
			});
		}

		function gotoVariantsUsage() {
			checkForChanges().then(function() {
				$(document).trigger('showProcessing');
				postTo("/angular/school/schedule/variants/usage");
			});
		}
	//--></SCRIPT>
<%End Sub

Sub DrawFilters(strForm)
End Sub

Sub DrawLinkButtons()
	Button "gotoVariantsUsage()", obLanguage("Calendar","kSTVariantsAssignments"), obLanguage("Calendar","kSTVariantsAssignments"), "glyphicon glyphicon-check"
End Sub

Sub DrawButtons()
	ButtonSave "doSave();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
	ButtonAdd "addVariant()", obLanguage("Common","kAdd")& " "&LCase(obLanguage("Curriculum","kVariant"))
	ButtonDel "delVariants()", obLanguage("Curriculum","kDelVariants")
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" ACTION="STVariantsSave.asp">
		<%=WriteObligatoryTags()%><%

		Call DrawButtonsFilters(Not readonly, "MainForm")
		Call DrawTable()%>
	</form>

	<script id="addNewVariantTempl" type="text/html">
		<form class="form-horizontal" id="addNewVariant" name="addNewVariant" method="post">
			<%=WriteObligatoryTags()%><%
			SetFiltersWidth "", "col-md-4", "col-md-8"

			Call DrawInputRowWithClass(obLanguage("Curriculum","kVariant"), "", "VAR_NEW", "text", TextInputSize(35), kSTVariantNameLen, "", "FilterWhiteSpace")%>
			<input type="hidden" name="act" value="create"><%
			
			RestoreDefFiltersWidth%>
		</form>
	</script><%
End Sub

Sub DrawTable()
	Dim objVariant, bIsVariantUsed
	Dim strVariantUsage
	Dim objGrades, objClasses, objClass, objIupGrades
	Dim strICPPostfix, strTemp
	Dim hint, k, i
	Dim nGrade, strGrade

	nClassesCountOnLine = 7
	strClassesNewLineDispl = "       "
	If bAddSchool Then
		nClassesCountOnLine = 1
		strClassesNewLineDispl = " - "
	End If

	hint = obLanguage("Calendar","kGoToScheduleTimes")
	WriteHiddenTags(Array("STVariantID", "", "STVariantName", ""))%>

	<div class="row">
		<div class="col-md-12">
			<table class="table table-bordered table-condensed table-thin">
				<tr>
					<th><%=obLanguage("Curriculum","kVariant")%></th>
					<th><%=obLanguage("Calendar","kSTVariantsAssignments")%></th>
					<th><%=obLanguage("Calendar","kSchedTimes")%></th>
					<%If Not readonly Then%><th><%=obLanguage("Common","kDeletingMark")%></th><%End If%>
				</tr><%
				For k = 0 To nVariantsCount - 1
					Set objVariant = objVariants(k)%>
					<tr>
						<td>
							<%If readonly Then%>
								<%=DB2HTML(objVariant.VariantName)%><%
							Else%>
								<%WriteHiddenTags(Array("VariantID", objVariant.Id))%>
								<input type="text" name="VariantName" class="form-control" value="<%=DB2Value(objVariant.VariantName)%>" size="<%=TextInputSize(35)%>" maxlength="<%=kSTVariantNameLen%>" OnChange="dataChanged()"><%
							End If%>
						</td><%
						bIsVariantUsed = False%>
						<td style="white-space: pre;"><%
							strVariantUsage = ""
							If objVariant.IsSchoolYearVariant Then
								bIsVariantUsed = True
								strVariantUsage = arrSTVariantsLevels(1, kVarUsageLevel_School)
							End If

							Set objGrades = objVariant.GetGrades()
							Set objClasses = objVariant.GetClasses()
							Set objIupGrades = objVariant.GetIupGrades()
							'strICPPostfix = IIf(Not bExistsIupClasses And objIupGrades.Count = 0, "", " " & obLanguage("Curriculum","kClassicCP_S"))

							If objGrades.Count > 0 Then
								bIsVariantUsed = True
								strVariantUsage = IIf(strVariantUsage = "", "", strVariantUsage & vbCrLf)
								strVariantUsage = strVariantUsage & arrSTVariantsLevels(1, kVarUsageLevel_Grade) & ": "
								strTemp = ""

								If bPreSchool Then
									For i = 0 To objGrades.Count - 1
										nGrade = GetSafeLng(objGrades(i), Null)

										If nGrade >= 0 And nGrade <= 8 Then
											strGrade = arrPreSchoolGrades(nGrade)
										Else
											strGrade = CStr(nGrade)
										End If

										strTemp = strTemp & strGrade & ", "
									Next
								Else
									For i = 0 To objGrades.Count - 1
										strTemp = strTemp & objGrades(i) & ", "
									Next
								End If

								strTemp = Left(strTemp, Len(strTemp) - 2)
								strVariantUsage = strVariantUsage & strTemp
							End If

							If objClasses.Count > 0 Then
								bIsVariantUsed = True
								strVariantUsage = IIf(strVariantUsage = "", "", strVariantUsage & vbCrLf)
								strVariantUsage = strVariantUsage & arrSTVariantsLevels(1, kVarUsageLevel_Class) & ": "
								strTemp = IIF(bAddSchool, vbCrLf & strClassesNewLineDispl, "")

								For i = 0 To objClasses.Count - 1
									Set objClass = objClasses(i)
									If ((i >= nClassesCountOnLine) And ((i Mod nClassesCountOnLine) = 0)) Then
										strTemp = strTemp & vbCrLf & strClassesNewLineDispl
									End If
									strTemp = strTemp & objClass.Classname & ", "
								Next

								If Not bAddSchool Then
									strTemp = Left(strTemp, Len(strTemp) - 2)
								End If
								strVariantUsage = strVariantUsage & strTemp
							End If

							If objIupGrades.Count > 0 Then
								bIsVariantUsed		= True
								strVariantUsage		= IIf(strVariantUsage = "", "", strVariantUsage & vbCrLf)
								strVariantUsage		= strVariantUsage & arrSTVariantsLevels(1, kVarUsageLevel_IupGrade) & ": "
								strTemp = ""

								For i = 0 To objIupGrades.Count - 1
									strTemp = strTemp & objIupGrades(i) & ", "
								Next

								strTemp = Left(strTemp, Len(strTemp) - 2)
								strVariantUsage = strVariantUsage & strTemp
							End If%>
							<%=DB2HTML_BR(strVariantUsage)%>
						</td>
						<td style="text-align: center;"><%
							ImageButton "gotoVariant(" & objVariant.Id & ", '" & DB2Value(DB2Java(objVariant.VariantName)) & "')", "", "glyphicon glyphicon-zoom-in"
							%>
						</td><%
						If Not readonly Then%>
							<td style="text-align: center;"><%
								If bIsVariantUsed Then%>
									<%=obLanguage("SetupSchoolCalendar","kProfileUse")%><%
								Else
									%><input type="checkbox" name="DEL" value="<%=objVariant.Id%>" OnChange="dataChanged()"><%
								End If%>
							</td><%
						End If%>
					</tr><%
				Next%>
			</table>
		</div>
	</div><%
End Sub%>