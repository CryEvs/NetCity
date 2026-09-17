<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kStep = 2

Dim objStaffList
Dim arrRs,lngStaffCnt
Dim pageCount, nCurrPage, nPageSize

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kWizardTitleStaff")
End Function

Function CanBack()
	CanBack = False
End Function

Sub ReadState()
	nPageSize = kDefaultUsersPageSize
	nCurrPage = GetSafeLng(Request("cp"), GetSafeLng( obTokenMgr.GetData( strToken, stCurrPage ),0) )
End Sub

Sub WriteState()
	InitStep
	Call obTokenMgr.SetData(strToken, stCurrPage, nCurrPage)
	Call obTokenMgr.SetData(strToken, stPageSize, nPageSize)
	Call obTokenMgr.SetData(strToken, "ROLEID", 0)
End Sub

Sub Main()
	Set objStaffList = objNSNET.GetStaffList(strSchoolID,strCurrYearID, " ", " ", "", 0, False, nPageSize, nCurrPage, pageCount, "", kWorkStatus_Working)
	lngStaffCnt = 0
	If Not objStaffList Is Nothing Then lngStaffCnt = objStaffList.RecordCount
	If lngStaffCnt < 2 Then pageCount = 1
	If Not HasUserRight(arUsersEditStaff) Then readonly = True

End Sub

Sub onSpecialHead()
%>
<script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/static/dist/pages/js/import.js")%>" type="text/javascript"></script>
<script><!--
function importStaff() {
	var separator = '<div class="form-group"><div class="input-group"><div class="input-group-addon">Разделитель</div><input type="text" class="form-control" name="Separator" size="1" value=";" maxlength="1"></div></div>';
	var help = '<a HREF="/asp/SetupSchool/import.asp?RT=1" target="_helpImport"><%=obLanguage("SetupSchoolUI", "kHowToUseImport")%></a>'

	$.show.fileDialog({
		title: language.Generic.Import.kStaffImport,
		fileExts: ['.csv'],
		invalidFileExtMsg: language.Generic.Curriculum.kInvalidImportFileCsv,
		additionalContent: separator + help,
		url: "/asp/ajax/UploadImportFile.asp",
		isAjax: true,
		handlerAjaxSuccess: function() {
			var params = {
				importUrl: '/asp/SetupSchool/importStaff.asp',
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

function gotoPage(nPage) {
	var form = document.forms.MainForm;
	form.elements["cp"].value = nPage;
	DoSubmit(form, "<%=strScriptName%>");
}

function editUser(id) {
	var form = document.MainForm;
	form.UID.value = id;
	if(id == 0)
		DoSubmit( form, "StaffQAdd.asp" );
	else
		DoSubmit( form, "StaffInfoEdit.asp" );
}

function deleteUsers() {
	if(isDBBusy()) return false;
	var form = document.forms.MainForm;
	var chkBox = form.elements.deluser, chkItems = 0;

	if (chkBox) {
		if (chkBox.length) {
			for (var j=0;j<chkBox.length;j++)
				if (chkBox[j].checked == true) { chkItems=1; break; }
		}
		else if (chkBox.checked == true)
			chkItems = 1;
	}

	if (chkItems > 0) {
		extDeferred.when( $.show.getConfirmation(language.Generic.SetupSchoolUI.kDeleteUsersInfo) ).then(function(){
			setDBBusy();
			var message = '<%=obLanguage("Curriculum","kPleaseWait")%>...';

			$.show.processing(message);
			DoSubmit( document.MainForm, '' );
		});
	}
	else { alert(language.Generic.Common.kErrMsgNoChecks); return };
}
//--></script>
<%
End Sub

Sub DrawLinkButtons()
	ButtonAdd "editUser(0);", obLanguage("SetupSchoolUI","kAddUser")
	If lngStaffCnt > 0 Then ButtonDel "deleteUsers();", obLanguage("SetupSchoolUI","kDelUsers")
	
	Call ButtonImport("importStaff()", obLanguage("Common","kImport"))
End Sub

Sub onDrawPage()
	DrawTable
End Sub

Sub DrawTable()%>
	<form name="MainForm" method="POST" action="/asp/SetupSchool/delusers.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("Back", strScriptName, "cp", "", "UID", "0" ) )%><%
		DrawButtonPanel
		If pageCount > 1 Then Call ShowPageList(pageCount,nCurrPage)%>
		<br><%Call DrawListTable()%><br><br><%
		If pageCount > 1 Then Call ShowPageList(pageCount,nCurrPage)%>
	</form><%
End Sub

Sub DrawListTable()
	Dim QuickLetter, CurLetter, CurName, strCurUserID,i
	Dim bCanDelete
	Dim nStartNum
	Dim objUserRoles

	If lngStaffCnt = 0 Then DrawInfo obLanguage("SetupSchoolUI","kNoStaffList"), False: Exit Sub%>
	<table class="table table-bordered table-condensed">
		<tr class="text-center info">
			<th>№</th><th><%=obLanguage("Common","kDisplayName")%></th>
			<th><%=obLanguage("Common","kGender")%></th><th><%=obLanguage("Common","kBDate")%></th>
			<th><%=obLanguage("Common","kUserRights")%></th>
			<%=ShowDelCellHeader(1)%>
		</tr><%
		nStartNum = nCurrPage * nPageSize
		i = 1
		While Not objStaffList.EOF
			CurName = DB2HTML(objStaffList("NICKNAME"))
			strCurUserID = objStaffList("USERID")%>
			
			<tr class="text-center">
				<td class="text-right"><%=nStartNum + i%>&nbsp;</td>
				<td width="30%" class="text-left">
					<%rw ShowAnchor( "editUser('" & strCurUserID & "')", obLanguage("SetupSchoolUI", "kEditUserInfo"), CurName, "")%>
				</td>
				<td><%=DB2HTML(objStaffList("GENDER"))%></td>
				<td><%=Date2Str(objStaffList("BIRTHDATE"))%></td>
				<td style="font-size: 10pt"><%
					Set objUserRoles = objStaffList("ROLESABBREV").value
					'bCanDelete = objUserRoles("ROLEID") <> 1 ' встретилось, что objUserRoles.EOF сразу
					bCanDelete = True
					While Not objUserRoles.EOF
						If bCanDelete Then
							bCanDelete = objUserRoles("ROLEID") <> 1
						End If
						Response.write "<b>" & objUserRoles("ABBREV") & "</b>" 
						objUserRoles.MoveNext
					Wend%>
				</td>
				<td><%
					If Not bCanDelete Then%><b>-</b><%
					Else%><input type="checkbox" name="deluser" value="<%=strCurUserID%>"><%
					End If%>
				</td>
			</tr><%
			i = i + 1
			objStaffList.MoveNext
		Wend%>
	</table><%
End Sub%>