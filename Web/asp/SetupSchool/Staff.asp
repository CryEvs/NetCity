<!-- #INCLUDE FILE="Users_inc.asp" -->
<!-- #INCLUDE file="SchoolSettings_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Const kImportExt = "Расширенный импорт"

Dim nWorkStatus
Dim bMayMoveStaff
Dim kExportMoodle, kImport, kEasyImport

Function GetPageTitle()
	GetPageTitle = obLanguage("FilterUsers","kStaffList")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStaff
 End Function

Function UserListForRole()
	UserListForRole = RoleGroup_Staffs
End Function

Function OnKeypress()
End Function

Sub ReadFilter()
	nCurrPage = GetSafeLng(Request("cp"), GetSafeLng( obTokenMgr.GetData( strToken, stCurrPage ),0) )

	If bIsEMForSchool Then
		nWorkStatus = kWorkStatus_Working
	Else
		nWorkStatus = GetSafeLng(Request("WorkStatus"), GetSafeLng(obTokenMgr.GetData(strToken, stWorkStatus), kWorkStatus_All))
	End If
End Sub

Sub WriteFilter()
	Call obTokenMgr.SetData(strToken,"ROLEID", RoleGroup_Staffs)
	Call obTokenMgr.SetData(strToken, stShortInfo, IIF(bFullAccessEditing,"1","0"))
	Call obTokenMgr.SetData(strToken, stWorkStatus, nWorkStatus)
	Call obTokenMgr.SetData(strToken, stMayMoveStaff, bMayMoveStaff)
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arUsersEditStaff) Or HasUserRight(arShortInfoStaff) or HasUserRight(arUsersEditStaffMedInfo)
End Function

Sub Main()
	Dim futureYear
	Dim objYearComponent, getYearResult

	kImport = obLanguage("Common","kImport")
	kEasyImport = obLanguage("Common","kEasyImport")
	kExportMoodle = obLanguage("Common","kExport_Moodle")

	If Not HasUserRight(arUsersEditStaff) Then readonly = True

	CheckRoleRights

	bMayMoveStaff = False
	Set objYearComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.ISchoolYearComponent")
	Set getYearResult = objYearComponent.GetFutureYear(strSchoolId)
	If Not getYearResult.IsSuccess Then GenereateError getYearResult.Message
	If IsDull(getYearResult.Data) Then
		bMayMoveStaff = (CLng(strCurrYearID) = CLng(strSchoolYearID))
	Else
		Set futureYear = getYearResult.Data
		bMayMoveStaff = (CLng(strCurrYearID) = CLng(futureYear.Id))
	End If

	If Not bIsEMForSchool Then
		If Not bMayMoveStaff Then
			nWorkStatus = kWorkStatus_All
		End If
	End If
End Sub

Sub SpecialHead()%>

<script src="<%=GetVersionedResLink("/static/dist/pages/js/import.js")%>" type="text/javascript"></script>
<script><!--

		viewModel.loadDataPage = "/asp/ajax/Users/GetStaffList.asp";
	
		<%Call DrawPrintScripts("StaffReport.asp","ExportStaff.asp")%>

		function importStaff() {
			var separator = '<div class="form-group"><div class="input-group"><div class="input-group-addon">Разделитель</div><input type="text" class="form-control" name="Separator" size="1" value=";" maxlength="1"></div></div>';
			var help = '<a HREF="import.asp?RT=1" target="_helpImport"><%=obLanguage("SetupSchoolUI", "kHowToUseImport")%></a>'

			$.show.fileDialog({
				title: language.Generic.Import.kStaffImport,
				fileExts: ['.csv'],
				invalidFileExtMsg: language.Generic.Curriculum.kInvalidImportFileCsv,
				additionalContent: separator + help,
				url: "/asp/ajax/UploadImportFile.asp",
				isAjax: true,
				handlerAjaxSuccess: function() {
					var params = {
						importUrl: 'importStaff.asp',
						customComplete: function(dialog) {
							dialog.setTitle(language.Generic.Import.kStaffImport);
						},
						beginImport: function() {
							heavyAction(function() {
								var message = '<%=obLanguage("Import","kImportStaffProcessPleaseWait")%>. <%=obLanguage("Curriculum","kPleaseWait")%>...';
								$.show.processing(message);
								ok('MainForm', '/asp/SetupSchool/importStaffSave.asp');
							});
						}
					};

					importHandler(params);
				},
				customCheck: function(form) {
					if(!$('input[name="Separator"]').val()) {
						alert(language.Generic.SetupSchoolUI.kMsgInpuDelimiter + ' (' + language.Generic.SetupSchoolUI.kMsgExample + ', \',\' <%=obLanguage("SetupSchoolUI","kMsgOr")%> \';\')');
						return false;
					}

					return true;
				},
				onShownDlg: function() {
					$('input[name="Separator"]').val(';');
				}
			});
		}

		function importStaff_Easy() {
			setDBBusy();
			DoSubmit( document.MainForm, 'importStaff_Easy.asp' );
		}

		function openExcel_Moodle() {
			var form = document.forms['ExcelForm'];
			openExcelCommon(form, "ExportStaff_Moodle.asp", '');
		}

		function confirmOnDeleteUser() {
			return $.show.getConfirmation(language.Generic.SetupSchoolUI.kDeleteUsersInfo);
		}
	//-->



</script>
<%
End Sub

Sub ImportForm()
	Dim arrButtons, ub

	If bIsEMForSchool Then
		Exit Sub
	End If

	If readonly Then Exit Sub

	arrButtons = Array( "importStaff()", kImport, "", kImport )
	If IMPORT_EASY Then
		ub = Ubound(arrButtons)
		Redim Preserve arrButtons(ub+4)
		arrButtons(ub+1)= "importStaff_Easy()"
		arrButtons(ub+2)= kEasyImport
		arrButtons(ub+4)= kEasyImport
	End If

	If IMPORT_EXT And bCommonSchool Then
		If Not obTokenMgr.GetData(strToken, stFutureMode) Then
			ub = Ubound(arrButtons)
			Redim Preserve arrButtons(ub+4)
			arrButtons(ub+1)= "openExcel_Moodle()"
			arrButtons(ub+2)= kExportMoodle
			arrButtons(ub+4)= kExportMoodle
		End If
	End If
	DropDownButton obLanguage("Buttons","kImportExportBtn"), arrButtons
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
					<tr>
						<th><%=obLanguage("Filter","kN_PP")%></th>
						<%Call DrawSortHeader(obLanguage("Filter","kFIO"), 0)%>
						<th><%=obLanguage("Common","kGender")%></th>
						<th><%=obLanguage("Filter","kBasePosition")%></th>
						<th><%=obLanguage("Common","kUserRights")%></th>
						<th class="generateNewPassword hide"><%=obLanguage("Common","kNewPassword") %></th>
					</tr>
				</thead>
				<tbody data-bind="template: { name: 'usersRows', templateOptions: { users: users } }"></tbody>
			</table>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12">
			<div class="paging"></div>
		</div>
	</div>

	<script type="text/html" id="usersRows">
		{{each users}}
				<tr>
					<td class="text-right">${(parseInt(viewModel.pageSize()) * (parseInt(viewModel.currPage())-1)) + $index + 1}</td>
					<td><a href="${'JavaScript:void(0)'};" onclick="${'JavaScript:viewModel.editUser(' + $value.id() + ')'};">${$value.fio}</a></td>
					<td class="text-center">${$value.gender}</td>
					<td>${$value.position()}&nbsp;</td>
					<td class="text-center" data-bind="template: { name: 'userRowRoleCell', foreach: $value.roles }"></td>
				
					<td class="text-center generateNewPassword hide">
						<input class="generateNewPassword" type="checkbox" data-personId ="${$value.id()}"  />
					</td>
				</tr>
		{{/each}}
	</script>

	<script type="text/html" id="userRowRoleCell">
		<span data-bind="text: ABBREV"></span>&nbsp;
	</script>
	<%
End Sub

Function DrawUsersFiltersBody_Special()
	Dim arrWorkStatuses

	' Здесь readonly = (год не закрыт) и HasUserRight(arUsersEditStaff)
	If bMayMoveStaff Then
		arrWorkStatuses = Array(kWorkStatus_All, obLanguage("Common","kAll"), kWorkStatus_Working, obLanguage("Common","kWorking"), kWorkStatus_Dismissed, obLanguage("Common","kDismissed"))
		DrawSimpleFilterRow obLanguage("Common","kWorkStatus"), "WorkStatus", arrWorkStatuses, nWorkStatus, False, " "
	End If

	DrawUsersFiltersBody_Special = True
End Function%>