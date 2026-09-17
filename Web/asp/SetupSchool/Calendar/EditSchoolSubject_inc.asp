<% ' © 2007-2015 IRTech. All rights reserved.

Dim bIsSubjFieldsExists, bCreateNewSubject
Dim strSubjectShortName, strSubjectName, strSubjectID, strJSAction, strSubjectFieldName
Dim strSubjectFieldID, strBackPage, strPSJName, strSFName
Dim strGlobalSubjectID, strGlobalSubjectName
Dim objCodifiersEGERs, objCodifiersOGERs, objCodifiersGradeSchoolRs, strCodeBookGradeSchoolId, strCodeBookEGEId, strCodeBookOGEId, objQAComponent
Dim bShowCodifiers

Function GetPageTitle()
	GetPageTitle = IIF(strSubjectID <> "", obLanguage("SetupSchoolCalendar","kTitleEditSubject"), obLanguage("SetupSchoolCalendar","kTitleCreateSubject"))
End Function

Sub ReadState()
	strBackPage = obTokenMgr.GetData(strToken, stBackPage)
	Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")

	bCreateNewSubject = GetSafeParam("ACT", "EditSubjectAct", "edit") = "new"
	If Not bCreateNewSubject Then strSubjectID = GetSafeID(Request("SBJID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject), Empty))

	strSubjectShortName = ""
	strSubjectName = ""

	Call SpecialReadState()
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stCurrSubject, strSubjectID)
	Call obTokenMgr.SetData(strToken, "EditSubjectAct", Null)
End Sub

Sub Main()
	Dim objRs, currentCodeBooks, objCodifiersGradeSchool, objCodifiersOGE, objCodifiersEGE
	
	bShowCodifiers = (Module_QA_Available() And (CLng(strFunctionalityType) = kFuncType_Common) And Not bIsWizard)
	strCurrYearID = obTokenMgr.GetData(strToken, stCurrYear)
	strSubjectFieldID = "" : bIsSubjFieldsExists = False
	If Not isDull(strSubjectID) Then
		Set objRs = objNSNET.GetSubjectInfo(strSubjectID)
		If Not objRs.EOF Then
			strGlobalSubjectID = CLng(objRs("GLOBALSUBJID"))
			strGlobalSubjectName = CStr(objRs("SUBJNAME"))
			strSubjectName = CStr(objRs("SUBJECTNAME"))
			strSubjectShortName = CStr(objRs("SUBJECTABBREV"))
			strSubjectFieldID = objRs("FIELDID") & ""
			strPSJName = objRs("PSUBJECTNAME")
			strSubjectFieldName = objRs("FIELDNAME")
		End If
		objRs.Close
		Set objRs = Nothing
		Call obTokenMgr.SetData(strToken, stCurrSubject, strSubjectID)
	End If

	strCodeBookGradeSchoolId = 0
	strCodeBookOGEId = 0
	strCodeBookEGEId = 0

	If bShowCodifiers Then
		Set currentCodeBooks = objQAComponent.GetCodifiersCurrentCodeBooks(strCurrYearID, strSubjectID)
		Set objCodifiersGradeSchool = currentCodeBooks(CertificationType_GradeSchool)
		Set objCodifiersOGE = currentCodeBooks(CertificationType_OGE)
		Set objCodifiersEGE = currentCodeBooks(CertificationType_EGE)
		
		strCodeBookGradeSchoolId = objCodifiersGradeSchool.CurentCodeBook
		strCodeBookOGEId = objCodifiersOGE.CurentCodeBook
		strCodeBookEGEId = objCodifiersEGE.CurentCodeBook
	
		Set objCodifiersGradeSchoolRs = objCodifiersGradeSchool.Codifiers
		Set objCodifiersOGERs = objCodifiersOGE.Codifiers
		Set objCodifiersEGERs = objCodifiersEGE.Codifiers
	End If

	Call SpecialMain()
End Sub

Sub onSpecialHead()%>
	<script src="/vendor/bootstrap-select/bootstrap-select-js-bundle.min.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="/vendor/bootstrap-select/bootstrap-select-css-bundle.min.css"/>

	<script><!--
		$(function() {
			$('.select-picker').ajaxSelect();

			$("input[name='newGlobalSubject']").on("change", function () {
				var _checkbox = $(this);
				if(_checkbox.prop('checked')) {
					$.show.confirmation(language.Generic.SetupSchoolCalendar.kCreateNewGlobalSubjectConfirm).then(function() {
						$('div.select-picker').hide();
					}, function() {
						_checkbox.prop('checked', false);
					});
				}
				else {
					$('div.select-picker').show();
				}
			});

			<%If Not IsEmpty(strGlobalSubjectID) Then%>
				var globalSubjectId = <%=strGlobalSubjectID%>;
				var globalSubjectName = '<%=strGlobalSubjectName%>';

				var option = $('<option></option>').text(globalSubjectName).val(globalSubjectId);
				$("select[name='GLOBALSUBJID']").append(option).attr('title', globalSubjectName);

				$('div.select-picker button span.filter-option').text(globalSubjectName);
				$('div.select-picker button').attr('title', globalSubjectName);
			<%End If%>
		});
	
		var subjectId = <%=GetSafeLng(strSubjectID, 0)%>;
		var codeBookGradeSchoolId = 0;
		var codeBookEGEId = 0;
		var codeBookOGEId = 0;
		var codeBookGradeSchoolNewId = 0;
		var codeBookEgeNewId = 0;
		var codeBookOgeNewId = 0;

		function saveName() {
			var bExistsLessonsOrTestPlansGradeSchool = 0;
			var bExistsLessonsOrTestPlansEGE = 0;
			var bExistsLessonsOrTestPlansOGE = 0;
			codeBookGradeSchoolId = <%=strCodeBookGradeSchoolId%>;
			codeBookEGEId = <%=strCodeBookEGEId%>;
			codeBookOGEId = <%=strCodeBookOGEId%>;
		 
			if($('select[name=CODEBOOKGRADESCHOOLID]').find(':selected').val() != undefined) {
				codeBookGradeSchoolNewId = parseInt($('select[name=CODEBOOKGRADESCHOOLID]').find(':selected').val(), 10);
			}

			if($('select[name=CODEBOOKEGEID]').find(':selected').val() != undefined) {
				codeBookEgeNewId = parseInt($('select[name=CODEBOOKEGEID]').find(':selected').val(), 10);
			}

			if($('select[name=CODEBOOKOGEID]').find(':selected').val() != undefined) {
				codeBookOgeNewId = parseInt($('select[name=CODEBOOKOGEID]').find(':selected').val(), 10);
			}

			var confirms = new Array();
			var succ = function(){};
			var fail = function(){};

			var form = document.forms.main;
			
			if (!form.SUBJECTNAME.value) {
				focusAlert( form.SUBJECTNAME, language.Generic.SetupSchoolCalendar.kEnterSubjectName);
				return false;
			}

			if (!form.SUBJECTABBREV.value) {
				focusAlert( form.SUBJECTABBREV, language.Generic.SetupSchoolCalendar.kEnterSubjectShortName);
				return false;
			}

			var globalSubjectId = $("select[name='GLOBALSUBJID']").val();
			if((globalSubjectId == null || globalSubjectId == "") && !$("input[name='newGlobalSubject']").prop('checked')) {
				alert(language.Generic.SetupSchoolCalendar.kSelectGlobalSubjectEx);
				return;
			}

			if (form.SUBJECTNAME.value.search(/<%=obLanguage("SetupSchoolCalendar","kForeignLangRegExp")%>/i) 
					+ trimStr($("select[name='GLOBALSUBJID'] option:selected").text()).search(/<%=obLanguage("SetupSchoolCalendar","kForeignLangRegExp")%>/i) > -2) {
				confirms.push($.show.getConfirmation(language.Generic.SetupSchoolCalendar.kForeignLangRecomend));
			}

			var saveFormFunc = function() {
				if(bExistsLessonsOrTestPlansGradeSchool == 1) {
					confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.QualityAssessment.kConfirmExistsLessonsOrTestPlansForSubjectGradeSchool), succ, fail));
				}
				if(bExistsLessonsOrTestPlansEGE == 1) {
					confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.QualityAssessment.kConfirmExistsLessonsOrTestPlansForSubjectEGE), succ, fail));
				}
				if(bExistsLessonsOrTestPlansOGE == 1) {
					confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.QualityAssessment.kConfirmExistsLessonsOrTestPlansForSubjectOGE), succ, fail));
				}

				extDeferred.when(confirms).then(function() {
					var saveForm = document.forms['main'];

					<%If bCreateNewSubject Then%>
						$(document).trigger('showProcessing');
						DoSubmit(saveForm, '');
						return;
					<%End If%>

					jsSaveForm(saveForm);
				});
			}

			if(codeBookGradeSchoolId != codeBookGradeSchoolNewId ||codeBookEGEId != codeBookEgeNewId || codeBookOGEId != codeBookOgeNewId) {
				var params = {"SUBJECTID": subjectId };
				if(codeBookGradeSchoolId != codeBookGradeSchoolNewId) {
					params.CODEBOOKGRADESCHOOLID = codeBookGradeSchoolId;
				}
				if(codeBookEGEId != codeBookEgeNewId) {
					params.CODEBOOKEGEID = codeBookEGEId;
				}
				if(codeBookOGEId != codeBookOgeNewId) {
					params.CODEBOOKOGEID = codeBookOGEId;
				}

				jsSubmit({
							action: '/asp/ajax/CheckExistsTestPlansOrLessons.asp',
							data: params,
							showProcessing: true,
							onSuccess: function (response) {
								bExistsLessonsOrTestPlansGradeSchool = response.data.bExistsGradeSchool;
								bExistsLessonsOrTestPlansEGE = response.data.bExistsEGE;
								bExistsLessonsOrTestPlansOGE = response.data.bExistsOGE;
							}
						})
				.done(saveFormFunc);
			}
			else {
				saveFormFunc();
			}
		}

		function actionGroup(isNew) {
			var group;
			
			if (isNew) {
				group = 0;
			}
			else{
				group = document.forms.GroupList.GROUP.value;
			}
			checkForChanges().then(function() {
				postTo("/asp/SetupSchool/Calendar/EditGroup.asp", {GROUP: group, BackPage: "<%=DB2Java(strScriptName)%>"});
			});
		}
		
		function removeGroup() {
			$.show.confirmation(language.Generic.SetupSchoolCalendar.kRemoveGroup + ". " + language.Generic.Common.kContinue).then(function() {
				var form = document.forms.GroupList;
				var el = form.GROUP;
				
				if( el.type == "select-one") {
					el [el.selectedIndex].value = - el [el.selectedIndex].value ;
				}
				else{
					el.value = - el.value;
				}
				checkForChanges().then(function(){
					$(document).trigger('showProcessing');
					ok('GroupList', 'SaveGroup.asp');
				});
			});
		}

		function editTeachers(flag) {
			var form = document.forms.TeacherList;
			checkForChanges().then(function() {
				form.FLAG.value = flag;
				ok('TeacherList', 'EditSubjectTeachers.asp');
			});
		}

		function SubjectFieldChanged() {
			var subjectFieldName = $('select[name=SBJFIELDID]').find(':selected').text();
			if(subjectFieldName == language.Generic.SetupSchoolCalendar.kPhysicalCultureFull) {
				var optionGS = $('select[name=GLOBALSUBJID]').children('option').filter(function() {
						return $(this).text() == language.Generic.SetupSchoolCalendar.kPhysicalCultureShort
				});
				optionGS.prop('selected', true);
			}
		}

		function Back() {
			goBack(document.main,'<%=strBackPage%>');
		}
	//--></script><%
End Sub

Sub DrawButtons
	ButtonSave "saveName()", obLanguage("Common","kSave")
	ButtonReset "resetScreen('main');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()
	Dim objRs
	Dim strYearID

	Call DrawButtonPanel()

	Call SetFiltersWidth("", "col-md-4", "col-md-8")%>
	
	<div class="row">
		<div class="col-md-10 col-lg-8"><%
			OpenPanelEx obLanguage("Common","kCommonInfo"), "subject", "", False, "panel-success"
	
			%><form name="main" method="post" action="/asp/SetupSchool/Calendar/SaveSubject.asp" class="form-horizontal">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("SBJID", strSubjectID, "BackPage", strScriptName,"ACT",Request("ACT")))%><%
				If Not bIsSubjFieldsExists Then rw WriteHiddenTags(Array("SBJFIELDID", strSubjectFieldID))%>
				<%=WriteHiddenTags(Array("PREVCODEBOOKGRADESCHOOLID", strCodeBookGradeSchoolId, "PREVCODEBOOKEGEID", strCodeBookEGEId, "PREVCODEBOOKOGEID", strCodeBookOGEId))%><%

				If bIsSubjFieldsExists Then
					If Not IsDull(strPSJName) Then
						Call DrawReadOnlyRow( obLanguage("SetupSchoolCalendar","kSubjectGroup") & ":", strPSJName)
						Call DrawReadOnlyRow( obLanguage("SetupSchoolCalendar","kSubjField") & ":", strSubjectFieldName & WriteHiddenTags( Array("SBJFIELDID", strSubjectFieldID)))
					Else
						Call DrawSelectInfoRow( obLanguage("SetupSchoolCalendar","kSubjField")& ":", strSubjectFieldID, "SBJFIELDID", objRSSubjectFields, "FIELDID", "FIELDNAME", obLanguage("SetupSchoolCalendar","kEmptySubjectField"), "SubjectFieldChanged()" )
					End If
				ElseIf Not IsDull(strPSJName) Then
					Call DrawReadOnlyRow( obLanguage("SetupSchoolCalendar","kSubjectGroup") &":", strPSJName)
				End If

				Call DrawInputRowWithClass(obLanguage("SetupSchoolCalendar","kFullName") & ":", strSubjectName, "SUBJECTNAME", "text", 50, 100, "", "FilterWhiteSpace")
				Call DrawInputRowWithClass(obLanguage("SetupSchoolCalendar","kAbbrName") & ":", strSubjectShortName, "SUBJECTABBREV", "text", 50, 70, "", "FilterWhiteSpace")

				OpenFormGroup obLanguage("Common","kGlobalSubject") & ":"%>
					<select name="GLOBALSUBJID" class="form-control select-picker"
						data-abs-ajax-url="/asp/ajax/GetGlobalSubjects.asp"
						data-abs-locale-status-initialized="<%=obLanguage("Common","kEnterSearchQuery")%>"
						data-abs-locale-empty-title="<%=obLanguage("SetupSchoolCalendar","kSubjectNotSelected")%>"
						data-abs-locale-status-searching="<%=obLanguage("Common","kSearch")%>"
						data-abs-locale-search-placeholder="<%=obLanguage("SetupSchoolCalendar","kEnterSubjectName")%>"
						data-abs-locale-status-no-results="<%=obLanguage("SetupSchoolCalendar","kSubjectsNotFound")%>"
						data-abs-locale-error-text="<%=obLanguage("SetupSchoolCalendar","kReceivingSubjectsErr")%>">
					</select>
					<div class="checkbox">
						<label>
							<input type="checkbox" name="newGlobalSubject"> <%=obLanguage("SetupSchoolCalendar","kNewGlobalSubject")%>
						</label>
					</div>
				<%CloseFormGroup

				If bShowCodifiers Then
					Call DrawSelectInfoRow(obLanguage("QualityAssessment","kCodifierGradeSchool") & ":", IIF(IsDull(strCodeBookGradeSchoolId) Or strCodeBookGradeSchoolId = 0, -1, strCodeBookGradeSchoolId), "CODEBOOKGRADESCHOOLID", objCodifiersGradeSchoolRs, "Id", "Title", obLanguage("QualityAssessment","kDontBind"), "")
					Call DrawSelectInfoRow(obLanguage("QualityAssessment","kCodifierOGE") & ":", IIF(IsDull(strCodeBookOGEId) Or strCodeBookOGEId = 0, -1, strCodeBookOGEId), "CODEBOOKOGEID", objCodifiersOGERs, "Id", "Title", obLanguage("QualityAssessment","kDontBind"), "")
					Call DrawSelectInfoRow(obLanguage("QualityAssessment","kCodifierEGE") & ":", IIF(IsDull(strCodeBookEGEId) Or strCodeBookEGEId = 0, -1, strCodeBookEGEId), "CODEBOOKEGEID", objCodifiersEGERs, "Id", "Title", obLanguage("QualityAssessment","kDontBind"), "")
				End If
			%></form><%

			ClosePanel

			If IsDull(strSubjectID) Then%>
					</div>
				</div><%
				Exit Sub
			End If

			Call DrawSubGroups()

			OpenPanelEx obLanguage("SetupSchoolCalendar","kSubjTeachers"), "teachers", "", False, "panel-danger"
				%><form name="TeacherList" method="post" action="EditSubjectTeachers.asp">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("SBJID", strSubjectID, "FLAG", "NEWTEACHERS", "BackPage", strScriptName) )%><%
	
					OpenBtnGroup
					strYearID = obTokenMgr.GetData(strToken, stCurrYear)
					Set objRs = objNSNET.GetTeachers(strYearID, strSubjectID)
					If Not objNSNET.IsYearClosed(strYearID) Then
						ButtonAdd "editTeachers('NEWTEACHERS')", obLanguage("SetupSchoolCalendar","kAddTeachers")
						If Not objRs.Eof Then
							ButtonDel "editTeachers('DELTEACHERS')", obLanguage("SetupSchoolCalendar","kDelTeachers")
						End If
					End If
					CloseBtnGroup

					Set objRs = objNSNET.GetTeachers(strYearID, strSubjectID)
					If objRs.Eof Then 
						DrawInfo obLanguage("Common","kNo"), False
					Else
						DrawSelectRsProp objRs, "TEACHERS", "TEACHERID", "NICKNAME", Null, Null, "_", "size=""4"""
					End If

				%></form><%
			ClosePanel%>
			</div>
		</div><%
End Sub%>