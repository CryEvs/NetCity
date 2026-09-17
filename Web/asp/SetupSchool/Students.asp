<!-- #INCLUDE FILE="Users_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Const kImportExt = "Расширенный импорт"
Const kExportShort = "Краткий экспорт"

Dim blnFirstEntrance, strSaved, kExportExcelExt, kExportMoodle
Dim lngGrade, lngStudentCnt
Dim bAddSchool, bPreSchool
Dim objActivePeriods, nGRtype
Dim objInforms, bEmptyInforms
Dim strInformFilter
Dim dtPayMonth

Function hasUserRightsOnPage()
		If HasUserRight(arUsersEditStudents) Then hasUserRightsOnPage = True: Exit Function
		If HasUserRight(arEditInfoSelf) Then hasUserRightsOnPage = True: Exit Function
		If HasUserRight(arUsersEditStudentsMedInfo) Then hasUserRightsOnPage = True: Exit Function
		If HasUserRight(arUsersEditStudentsPsyInfo) Then hasUserRightsOnPage = True: Exit Function
		hasUserRightsOnPage = HasUserRight(arShortInfoStudents)
End Function

Function GetPageTitle()
		GetPageTitle = obLanguage("FilterUsers","kStudentList",strFunctionalityType)
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStudents
 End Function

Function UserListForRole()
	UserListForRole = RoleGroup_Students
End Function

Function OnKeypress()
End Function

Sub ReadFilter()
	lngGrade = GetSafeLng( obTokenMgr.GetData( strToken, stUsersStudentsGrades ), -5 )
	blnFirstEntrance = (lngGrade = -5)
	lngGrade = GetSafeLng(Request("GR"), GetSafeLng( obTokenMgr.GetData( strToken, stUsersStudentsGrades ), -1 ) )

	bPreSchool = CLng(strFunctionalityType) = kFuncType_PreSchool

		nGRtype = GetSafeLng(Request("GRtype"),GetSafeLng( obTokenMgr.GetData( strToken, stGRtype ), -3))

	bAddSchool = CLng(strFunctionalityType)=kFuncType_Add
	If bAddSchool Then
		bAllowNotEnrolledGRType = False
		If nGRtype = -2 Then nGRtype = -1
	End If

	Call InitLetter
End Sub

Sub WriteFilter()
	Call obTokenMgr.SetData(strToken,stUsersStudentsGrades, lngGrade)
	Call obTokenMgr.SetData(strToken,"ROLEID",rlStudent)
	Call obTokenMgr.SetData(strToken,"FROMWHERE","STUDENTS")
	Call obTokenMgr.SetData(strToken,stCurrClassLetter, strLetter)
	Call obTokenMgr.SetData(strToken,stShortInfo, IIF(bFullAccessEditing,"1","0"))
	Call obTokenMgr.SetData(strToken,stGRtype, nGRtype)
End Sub

Sub Main()

	kExportExcelExt = obLanguage("Common","kExportExcelExt")
	kExportMoodle = obLanguage("Common","kExport_Moodle")

	Set objActivePeriods = objNSNET.GetActiveMovePeriods(strCurrYearID)

	lngStudentCnt = 0

	If Not HasUserRight(arUsersEditStudents) Then readonly = True
	CheckRoleRights

	If strFunctionalityType = kFuncType_Add Then readonly = True
	If obTokenMgr.GetData(strToken, stFutureMode) Then readonly = True
End Sub

Function onLoad()
	If Not IsDull( strSaved ) Then onLoad = "JavaScript:WasSaved('" & strSaved & "');ChangeGrType();ChangeGr()" Else onLoad = "ChangeGrType();ChangeGr()"
End Function

Sub SpecialHead()
	%>
		<script src="<%=GetVersionedResLink("/static/dist/pages/js/import.js")%>" type="text/javascript"></script>

		<script>
			<%Call DrawPrintOnlyScripts( "StudentsReport.asp" )%>
			var importWnd = null;
			function openExcel() {
				var form = document.forms['ExcelForm'];
				var parameters = {'Students' : 1};
				openExcelCommon(form, "ExportStudents.asp", parameters);
			}
	
			function openExcelExt() {
				var form = document.forms['ExcelForm'];
				var parameters = {'EXTERNAL' : 1};
				openExcelCommon(form, "ExportStudents.asp", parameters);
			}

			function openExcel_Moodle() {
				var form = document.forms['ExcelForm'];
				openExcelCommon(form, "ExportStudents_Moodle.asp");
			}

			function exportStudentsShort() {
				var form = document.forms['ExcelForm'];
				openExcelCommon(form, "ExportStudentsShort.asp");
			}

		function importStudents() {
				$.show.confirmation(language.Generic.SetupSchoolUI.kMsgImportExtUpdate).then(function(){
					var separator = '<div class="form-group"><div class="input-group"><div class="input-group-addon">Разделитель</div><input type="text" class="form-control" name="Separator" size="1" value=";" maxlength="1"></div></div>';
					var help;
					var sPageName = "/asp/SetupSchool/ImportExt/";

						help = '<a href="importCSV.asp" target="_helpExtImport"><%=obLanguage("SetupSchoolUI","kHowToUseExtImport")%></a>';
						sPageName += "importStudentsExt.asp";

						$.show.fileDialog({
							title: language.Generic.Movement.kMovementSoureTitle_Import + language.Common.kStudents_r,
							fileExts: ['.' + 'csv'],
							invalidFileExtMsg: language.Generic.Curriculum.kInvalidImportFile + 'csv',
							additionalContent: separator + help,
							url: "/asp/ajax/UploadImportFile.asp",
							isAjax: true,
							handlerAjaxSuccess: function() {
								var params = {
									importUrl: sPageName,
									customComplete: function(dialog) {
										dialog.setSize(BootstrapDialog.SIZE_FULL_SCREEN);
										dialog.setTitle(language.Movement.kImportStudentsExt);
									},
									beginImport: function() {
										heavyAction(function() {
											var message = '<%=obLanguage("Movement","kImportExtProcessPleaseWait",strFunctionalityType)%>. <%=obLanguage("Curriculum","kPleaseWait")%>...';
											$.show.processing(message);
											ok('MainForm', '/asp/SetupSchool/ImportExt/importStudentsExtSave.asp');
										});
									}
								};

								importHandler(params);
							},
							customCheck: function(form) {
								if (!$('input[name="Separator"]').val()) {
									alert(language.Generic.SetupSchoolUI.kMsgInpuDelimiter + ' (' + language.Generic.SetupSchoolUI.kMsgExample + ', \',\' <%=obLanguage("SetupSchoolUI","kMsgOr")%> \';\')' );
									return false;
								}

								return true;
							},
							onShownDlg: function() {
								$('input[name="Separator"]').val(';');
							}
						});
				});
			}

			function confirmOnDeleteUser() {
				var confirms = new Array();

				confirms.push($.show.getConfirmation(language.SetupSchoolUI.kDeleteStudentsInfo));
				confirms.push($.show.getConfirmation(language.SetupSchoolUI.kDeleteStudentsInfo1));

				return confirms;
			}

			function editUser(id) {
				var form = document.forms.MainForm;
				form.UID.value = id;

			if(id == 0) {
				<%If objActivePeriods.EOF Then Response.Write "alert('"&obLanguage("SetupSchoolUI","kMsgAllPeriodsForbid")&"');return false;"%>
					DoSubmit(form, "./Movement/MoveBookEdit.asp");
				}
				else {
					DoSubmit(form, "StudentInfoEdit.asp");
				}
			}
		</script>
	
	<script>
		function MoveTo(address){
			var form = document.forms.MainForm;
			DoSubmit(form, address);
		}

		var arrPreSchoolGrades;
		<%If bPreSchool Then%>
			arrPreSchoolGrades = new Array(8);
			arrPreSchoolGrades[0] = language.Generic.Common.kGr0;
			arrPreSchoolGrades[1] = language.Generic.Common.kGr1;
			arrPreSchoolGrades[2] = language.Generic.Common.kGr2;
			arrPreSchoolGrades[3] = language.Generic.Common.kGr3;
			arrPreSchoolGrades[4] = language.Generic.Common.kGr4;
			arrPreSchoolGrades[5] = language.Generic.Common.kGr5;
			arrPreSchoolGrades[6] = language.Generic.Common.kGr6;
			arrPreSchoolGrades[7] = language.Generic.Common.kGr7;
			arrPreSchoolGrades[8] = language.Generic.Common.kGr8;
		<%End If%>

		viewModel.loadDataPage = "/asp/ajax/Users/GetStudentsList.asp";

		var specUserMapping = function(user, data) {
			if(typeof(user.birthdate) == "function") {
				var fullstring = user.birthdate();

				if (fullstring != "") {
					var birthdate = new Date(fullstring);
					user.birthdate_short = dateUtils.date2str(birthdate);
				}
			}
			<%If bAddSchool Then%>
				var classes = "";
				for(var i = 0; i < user.rsClasses().length; i++) {
					classes += user.rsClasses()[i].CLASSNAME() + ", ";
				}

				if (classes.length > 0)
					classes = classes.substring(0, classes.length - 2);
				if (classes.length == 0)
					classes = language.Generic.Common.kOut;

				user.classname = classes;
			<%End If%>

			<%If bPreSchool Then%>
				var classname = user.classname();

				if(classname.length == 1) {
					var nonclass_grade = str2lng(classname);
					if(!isNaN(nonclass_grade) && nonclass_grade >= 0 && nonclass_grade <= 8) {
						user.classname = arrPreSchoolGrades[nonclass_grade];
					}
				}
			<%End If%>
			user.classname_final = user.classname;
		}

		viewModel.extendUserMapping(specUserMapping);
	</script>
	
	<style type="text/css">
		.wrapword {
			white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */
			white-space: -pre-wrap; /* Opera 4-6 */
			white-space: -o-pre-wrap; /* Opera 7 */
			white-space: pre-wrap; /* css-3 */
			word-wrap: break-word; /* Internet Explorer 5.5+ */
			word-break: break-all;
			white-space: normal;
		}
	</style><%
End Sub

Sub specialButtons()
	Dim bIsSummerTimeAvailable
	If bSummerTimeSpending And bCommonSchool Then
		bIsSummerTimeAvailable = False
		'Кнопка для перехода в функционал "Летняя занятость"
		If HasUserAnyRoles(Array(rlAdmin, rlPrincipal)) Then
			bIsSummerTimeAvailable = True
		ElseIf HasUserRole(rlTeacher) Then
			'todo. здесь что-то не так. почему не уточняется уч. год?
			bIsSummerTimeAvailable = objNSNET.IsSomeChief()
	End If
		If bIsSummerTimeAvailable Then
			SimpleButton "MoveTo('/angular/school/SummerBusy')", "Летняя занятость"
		End If
	End If
End Sub

Sub AdditionButtons()
	if bSummerTimeSpending and (HasUserAnyRoles(Array(rlAdmin, rlPrincipal)) or (HasUserRole(rlTeacher) and objNSNET.IsSomeChief())) Then
		SimpleButton "MoveTo('/angular/school/SummerBusy')", "Летняя занятость"
	end if
End Sub

Sub ExportForm()
End Sub

Sub ImportForm()
	Dim arrButtons
	Dim arrButtonsImportUpdate

	If bIsEMForSchool Then
		If PERSON_DATA Then
		SimpleButton "openExcelExt()", kExportExcelExt
		End If
			Exit Sub
	End If

	arrButtons = Array("exporter.exportStudents('/webapi/users/students/export')", kExportExcelExt, "", kExportExcelExt)
	If Not readonly Then
		Call comHelper.ArrayHelper.AppendArray(arrButtons, Array("openExcel_Moodle()", kExportMoodle, "", kExportMoodle))
	End If

	If PERSON_DATA Then
		'Кнопка импорт/экспорт
		DropDownButton obLanguage("Buttons","kImportExportBtn"), arrButtons
	End If


	'//todo: кнопка для вызова нового пакетного обновления
	'//arrButtonsImportUpdate = Array( _
	'//		"importUpdatePerson.execute()", "ОБНОВЛЕНИЕ ДАННЫХ", "", "ОБНОВЛЕНИЕ ДАННЫХ" )
	'//DropDownButton "НОВОЕ ПАКЕТНОЕ ОБНОВЛЕНИЕ", arrButtonsImportUpdate

	If readonly Then Exit Sub

	If IMPORT_EXT Then
		'Кнопка пакетное обновление
		DropDownButtonEx "Пакетное обновление", "glyphicon glyphicon-import", "btn-warning", Array( _
			"openExcelExt()", "Выгрузка данных", "", "1. Выгрузка данных", _
			"importStudents()", "Обновление данных", "", "2. Обновление данных" _
		)
		End If
End Sub

Sub WritaAddHiddenParams()
End Sub

Sub DrawListTable()
	%>
	<div class="row">
		<div class="col-md-12">
			<div class="paging"></div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12">
			<table class="table table-bordered table-bright-hover table-xs table-bright-striped" id="UserListTable">
				<thead>
					<th><%=obLanguage("Filter","kN_PP")%></th><%
					Call DrawSortHeader(obLanguage("Common","kDisplayName"), 0)
					Call DrawSortHeader(obLanguage("Common","kBDate"), 2)
					%><th><%=obLanguage("Common","kGender")%></th><%
					Call DrawSortHeader(obLanguage("Common","kClass", strFunctionalityType), 4)%>
					<th><%=obLanguage("SetupSchoolUI","kHomePhone")%></th>
					<th class="generateNewPassword hide"><%=obLanguage("Common","kNewPassword") %></th>
				</thead>
				<tbody data-bind="template: {name: 'usersRows', templateOptions: { users: users }}"></tbody>
			</table>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12">
			<div class="paging"><ul class="sync-pagination pagination-md pagination"></ul></div>
		</div>
	</div>

	<script type="text/html" id="usersRows">
		{{each users}}
			<tr>
				<td class="text-right">${(parseInt(viewModel.pageSize()) * (parseInt(viewModel.currPage())-1)) + $index + 1}</td>
				<td><a href="${'JavaScript:void(0)'};" onclick="${'JavaScript:viewModel.editUser(' + $value.id() + ')'};">${$value.nickname}</a></td>
				<td class="text-center">${$value.birthdate_short}&nbsp;</td>
				<td class="text-center">${$value.gender}</td>
				<td class="text-center">${$value.classname_final}</td>
				<td class="text-center">${$value.homephone()}&nbsp;</td>
				<td class="text-center generateNewPassword hide">
					<input class="generateNewPassword" type="checkbox" data-personId ="${$value.id()}"  />
				</td>
			</tr>
		{{/each}}
	</script
	><%
End Sub
%>