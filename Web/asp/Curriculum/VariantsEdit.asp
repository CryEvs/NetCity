<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kVariantNameMaxLength = 100
Const kVariantInputLength = 75

Dim objParams, strParamID, objItems, arrPreGrades, bPreSchool, strGradeName, objTeachers
Dim strGradeID
Dim rsVariants
Dim bTeacherOnly
Dim bAll, rsGrades


Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum","kTitlePlannerVar",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLessonPlanning
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbLessonsPlans
 End Function

Function hasUserRightsOnPage()
	bAll = False
	If HasUserRight(arCurrMgmCreateAll) Then hasUserRightsOnPage = True : bAll = True : Exit Function
	If HasUserRight(arCurrMgmCreate) Then hasUserRightsOnPage = True : Exit Function
	hasUserRightsOnPage = False
End Function

Sub ReadState()

	strSubjectID = GetSafeID( Request("SJID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject),"0"))
	strGradeID = GetSafeID( Request("GRADEID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrGrade), "-1"))
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)

	Set objTeachers = objNSNET.GetTeacherList(strCurrYearID)

	If bPreSchool Then
		arrPreGrades = GetArrGrades(strFunctionalityType,1,0,0)

		if Not strGradeID = "-1" Then
			strGradeName = arrPreGrades (1,Clng(strGradeID))
		End If

	End If

	Dim strTeacherID
	strTeacherID = IIf(bAll, 0, strUserID )

	'//получаем список предметов доступных для данного пользователя которые есть в учебном плане текущего уч года
	Set oSubjectsRs = objNSNET.GetSchoolYearSubjectList(strCurrYearID, strTeacherID)
	IF oSubjectsRs.EOF Then
		strSubjectID = 0
	End If

	strSubjectID = GetSafeRs(strSubjectID, oSubjectsRs, "SUBJECTID")

	If Not HasUserRight(arCurrMgmCreateAll) Then
		If Not objNSNET.IsSubjectTeacher(strSubjectID, strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")
	End If

	Set rsGrades = objNSNET.GetSubjectGradeList(strFunctionalityType, strCurrYearID, strSubjectID, strTeacherID)
	
	If rsGrades.EOF Then Exit Sub
	strGradeID = GetSafeRs(strGradeID, rsGrades, "GRADEID")

	Call obTokenMgr.SetData(strToken,stBackPage, "VariantsEdit.asp")
	bTeacherOnly = Not HasUserAnyRoles(Array(rlAdmin, rlPrincipal))
End Sub



Sub Main()
	Set rsVariants = objNSNET.GetSubjectPlanVariants(strCurrYearID, strSubjectID, strGradeID)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stCurrGrade, strGradeID)
	WriteSubject
End Sub

Sub onHead()%>
<SCRIPT type="text/javascript"><!--
	function AddVariant() {
		if(isDBBusy()) return false;

		var addBtn = function(dialog) {
			if(isValid()) {
				$(document).trigger('showProcessing');
				ok('addVariant', 'VariantsSave.asp');
			}
		};

		$.show.dialog({
			title: language.Curriculum.kAddVariantPlanLesson,
			message: $('#addVariantTmpl'),
			buttons: [{label: language.Generic.Buttons.kAdd, action: addBtn, cssClass: 'btn-primary'}]
		});
	}

	function isValid() {
		var addForm = document.forms.addVariant;
		var form = document.forms.MainForm;

		if(trimStr(addForm.VARIANTNAME_NEW.value) == "") {
			alert(language.Generic.Curriculum.kErrEmptyVariantName);
			addForm.VARIANTNAME_NEW.focus();

			return false;
		}

		if (form.VARIANTNAME) {
			if (form.VARIANTNAME.length > 0) {
				for (var j = 0; j < form.VARIANTNAME.length; j++) {
					if(trimStr(form.VARIANTNAME[j].value) == trimStr(addForm.VARIANTNAME_NEW.value)) {
						alert(language.Generic.Curriculum.kErrVariantNameRepeat);
						form.VARIANTNAME[j].focus();

						return false;
					}
				}
			}
			else if(trimStr(form.VARIANTNAME.value) == trimStr(addForm.VARIANTNAME_NEW.value)) {
					alert(language.Generic.Curriculum.kErrVariantNameRepeat);
					form.VARIANTNAME.focus();

					return false;
			}
		}

		return true;
	}

	function Back() {
		goBack(document.MainForm, '/angular/school/planning/subjectplans/');
	}

	<%If Not rsVariants.EOF Then%>
		function SaveChanges() {
			if(isDBBusy()) return false;

			var form = document.forms['MainForm'];
			form.ACT.value = 'edit';

			if(form.VARIANTNAME) {
				if (form.VARIANTNAME.length > 0) {
					for (var j = 0; j < form.VARIANTNAME.length; j++) {
						if(trimStr(form.VARIANTNAME[j].value) == "") {
							alert(language.Generic.Curriculum.kErrEmptyVariantName);
							form.VARIANTNAME[j].focus();

							return false;
						}

						for (var k = j+1;k<form.VARIANTNAME.length;k++) {
							if(trimStr(form.VARIANTNAME[k].value)==trimStr(form.VARIANTNAME[j].value)) {
								alert(language.Generic.Curriculum.kErrVariantNameRepeat);
								form.VARIANTNAME[k].focus();

								return false;
							}
						}
					}
				}
				else {
					if(trimStr(form.VARIANTNAME.value) == "") {
						alert(language.Generic.Curriculum.kErrEmptyVariantName);
						form.VARIANTNAME.focus();

						return false;
					}
				}
			}

			setDBBusy();
			ok('MainForm', '');
		}

		function DeleteVariants() {
			if(isDBBusy()) return false;

			var form = document.forms['MainForm'];
			var chkBox = form.elements.delVariant, chkItems = 0;

			if (chkBox) {
				if (chkBox.length) {
					for (var j = 0; j < chkBox.length; j++) {
						if (chkBox[j].checked == true) {
							chkItems = 1; 
							break;
						}
					}
				}
				else if (chkBox.checked == true) {
					chkItems = 1;
				}
			}

			if (chkItems > 0) {
				$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function() {
					form.ACT.value = 'delete';
					setDBBusy();
					ok('MainForm', '');
				});
			}
			else {
				alert(language.Generic.Common.kErrMsgNoChecks); 
				
				return;
			}
		}
	<%End If%>
//--></SCRIPT><%
End Sub

Sub DrawFilters(strForm)



	Dim strCurrYearName

	strCurrYearName = obTokenMgr.GetData(strToken, "CurrYearName")
	DrawTitleRow obLanguage("Common","kSchoolYear"), strCurrYearName

	Call DrawSubjects_Ex( strForm, IIf(bAll, obLanguage("Curriculum","kNoSubjectsInYear_All"), obLanguage("Curriculum","kNoSubjectsInYear_Teacher")), False)
	Call DrawSelectInfoRow (obLanguage("Filter","kGradeKTP",strFunctionalityType), strGradeID, "GRADEID", rsGrades, "GRADEID", "GRADENAME", Null, "OnChangeSelect('"&strForm&"','"&strScriptName&"')")
End Sub

Sub DrawButtons()
	If Not rsVariants.EOF Then ButtonSave "SaveChanges()", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
	
	'//отображение кнопки "Добавить"
	If Not strSubjectID = "0" Then
		ButtonAdd "AddVariant();", obLanguage("Curriculum","kAddVariantPlanLesson", strFunctionalityType)
	End If

	If Not rsVariants.EOF Then
		ButtonDel "DeleteVariants();", obLanguage("Common","kRemove")
	End If
End Sub

Sub DrawLinkButtons
	If Not rsVariants.EOF Then
		If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
			SimpleButton "ok('MainForm', 'VariantsCSGs.asp')", obLanguage("Curriculum","kBtnUseInJournal")
		End If
	End If
End Sub

Sub onDrawPage()%>
	<form name="MainForm" action="VariantsSave.asp" method="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ACT", ""))%><%

		Call DrawButtonsFilters(True, "MainForm")%>
		<div class="row">
			<div class="col-md-12">
				<%Call DrawVariantsTable() %>
			</div>
		</div>
	</form>

	<script id="addVariantTmpl" type="text/html">
		<form class="form-horizontal" id="addVariant" name="addVariant" method="post">
			<%=WriteObligatoryTags()%><%

			SetFiltersWidth "", "col-md-4", "col-md-8"

			Call DrawInputTextRow(obLanguage("Curriculum","kVariantName"), "", "VARIANTNAME_NEW", kVariantInputLength, kVariantNameMaxLength, "", "")

			OpenFormGroup "Автор"
				If Not bTeacherOnly Then%>
					<select name="AUTHORID_NEW" class="form-control">
						<option value="-1"><%=obLanguage("Curriculum","kNotAssign")%></option><%
						PopulateSelect objTeachers,"TEACHERID", "NICKNAME", strUserID%>
					</select><%
				Else%>
					<%=strUserName%><%
				End If
			CloseFormGroup%>

			<input type="hidden" name="ACT" value="add"><%
			
			RestoreDefFiltersWidth%>
		</form>
	</script><%
End Sub

Sub DrawVariantsTable()
	Dim lngAuthorID
	Dim bRO

	If Not rsVariants.EOF Then%>
		<table class="table table-bordered table-thin table-xs">
			<tr>
				<th><%=obLanguage("Curriculum","kVariantName")%>
				<th>Автор</th></th><%rw ShowDelCellHeader(1)%>
			</tr><%
				While Not rsVariants.EOF
					lngAuthorID = GetSafeLng(rsVariants("AUTHORID"), -1)
					bRO = bTeacherOnly And (lngAuthorID <> CLng(strUserID)) And (lngAuthorID > 0)%>

					<tr>
						<td><%
							If bRO Then
								rw DB2HTML(rsVariants("VARIANTNAME"))
							Else
								Call DrawInputText(rsVariants("VARIANTNAME"), "VARIANTNAME", kVariantInputLength, kVariantNameMaxLength)%>
								<input type="hidden" name="VARIANTID" value="<%=rsVariants("VARIANTID")%>">
								<input type="hidden" name="OLDNAME" value="<%=rsVariants("VARIANTNAME")%>"><%
							End If%>
						</td>
						<td class="text-center"><%
							If Not bTeacherOnly Then %>
								<select name="AUTHORID" class="form-control">
									<option value="-1" <%If lngAuthorID=-1 Then%>selected="selected"<%End If%>><%=obLanguage("Curriculum","kNotAssign")%></option>
									<% 
										PopulateSelect objTeachers,"TEACHERID", "NICKNAME", lngAuthorID %>
									<% objTeachers.MoveFirst %>
								</select><%
							Else %>
								<%=DB2Value(rsVariants("NICKNAME")) %>
								<%If Not bRO Then%><input type="hidden" name="AUTHORID" value="<%=lngAuthorID%>"><%End If
							End If%>
						</td>
						<td class="text-center"><%
							If CLng(rsVariants("VARIANTID_SP")) > 0 Then%>
								<input type="checkbox" disabled title="<%=obLanguage("Common", "kEmploy")%>"/><%
							ElseIf bRO Then
								%>&nbsp;<%
							Else
								%><input TYPE="checkbox" NAME="delVariant" VALUE="<%=rsVariants("PLANID")%>"><%
							End If%>
						</td>
					</tr><%
					rsVariants.MoveNext
				WEnd%>
		</table><%
	End If
End Sub

Sub DrawInputText( strValue, inputName, size, length )%>
	<input type="text" class="form-control FilterWhiteSpace" name="<%=inputName%>" size="<%=TextInputSize(size)%>" maxlength="<%=length%>" value="<%=DB2Value(strValue) %>" OnChange="dataChanged()"><%
End Sub%>