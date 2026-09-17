<!-- #INCLUDE FILE="Users_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kImportExt = "Расширенный импорт"
Dim bAddSchool, bPreSchool

Dim lngGrade
Dim bEmpty,nGRtype

Function hasUserRightsOnPage()
	If HasUserRight(arUsersEditStudents) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arUsersEditStudentsPsyInfo) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = HasUserRight(arShortInfoStudents)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("FilterUsers","kParentList")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbParents
 End Function

Function UserListForRole()
	UserListForRole = RoleGroup_Parents
End Function

Function OnKeypress()
End Function

Sub ReadFilter()
	lngGrade = GetSafeLng(Request("GR"), GetSafeLng( obTokenMgr.GetData( strToken, stUsersStudentsGrades ), -1 ) )
	if lngGrade >= 0 Then
		strLetter = GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter), 60," "))
	Else
		strLetter = " "
	End If
	nGRtype = GetSafeLng(Request("GRtype"), GetSafeLng( obTokenMgr.GetData( strToken, stGRtype ), -3))

	bPreSchool = CLng(strFunctionalityType) = kFuncType_PreSchool
	bAddSchool = CLng(strFunctionalityType) = kFuncType_Add

	If bAddSchool Then
		bAllowNotEnrolledGRType = False
		If nGRtype = -2 Then nGRtype = -1
	End If

	Call InitLetter
End Sub

Sub WriteFilter()
	Call obTokenMgr.SetData(strToken,"ROLEID",rlParent)
	Call obTokenMgr.SetData(strToken,stUsersStudentsGrades, lngGrade)
	Call obTokenMgr.SetData(strToken,stCurrClassLetter, strLetter)
	Call obTokenMgr.SetData(strToken,stShortInfo, IIF(bFullAccessEditing,"1","0"))
	Call obTokenMgr.SetData(strToken,stGRtype, nGRtype)
End Sub

Sub Main()
	readonly = Not HasUserRight(arUsersEditStudents)
	CheckRoleRights
End Sub

Function onLoad()
	onLoad = "ChangeGrType();ChangeGr()"
End Function

Sub SpecialHead()
%>

<SCRIPT><!--
	<%Call DrawPrintScripts("ParentsReport.asp","ExportParents.asp")%>
	var wnd = null;

	viewModel.loadDataPage = "/asp/ajax/Users/GetParentsList.asp";

	function confirmOnDeleteUser(){
		return $.show.confirmation(language.Generic.SetupSchoolUI.kDeleteUsersInfo);
	}
	//-->
</SCRIPT>
<%

End Sub

Sub ImportForm()
	'Dim arrButtons
	'arrButtons = Array("exporter.exportUsers('/webapi/users/parents/export')", "", "", obLanguage("Common","kExportExcelExt"))
	'Call DropDownButton(obLanguage("Buttons","kImportExportBtn"),arrButtons)
End Sub

Sub DrawListTable()	%>
	<div class="paging"></div>
	<div>
		<table class="table table-bordered table-bright-hover table-xs table-bright-striped" id="UserListTable">
			<thead>
			<th><%=obLanguage("Filter","kN_PP")%></th>
			<th><%=obLanguage("Common","kDisplayName")%></th>
			<th><%=obLanguage("Common","kGender")%></th>
			<th><%=obLanguage("SetupSchoolUI","kHomePhone")%></th>
			<th><%=obLanguage("SetupSchoolUI","kWorkPhone")%></th>
			<%If Not readonly And bRightOnDelete Then%>
			<th><%=obLanguage("Common","kDeletingMark")%></th>
			<%End If%>
			<th class="generateNewPassword hide"><%=obLanguage("Common","kNewPassword") %></th>
			</thead>
			<tbody data-bind="template: {name: 'usersRows', templateOptions: { users: users }}"></tbody>
		</table>
	</div>
	<br />
	<div class="paging"></div>

	<script type="text/html" id="usersRows">
			{{each users}}
				<tr>
					<td align="right">${(parseInt(viewModel.pageSize()) * (parseInt(viewModel.currPage())-1)) + $index + 1}</td>
					<td><a href="${'JavaScript:void(0)'};" onclick="${'JavaScript:viewModel.editUser(' + $value.id() + ')'};">${$value.fio}</a></td>
					<td align="center">${$value.gender}</td>
					<td align="center">${$value.homephone()}&nbsp;</td>
					<td align="center">${$value.workphone()}&nbsp;</td>
					<%If Not readonly And bRightOnDelete Then%>
					<td align="center"><input type="checkbox" name="deluser" value="${$value.id}"></td>
					<%End If%>
					<td class="text-center generateNewPassword hide">
						<input class="generateNewPassword" type="checkbox" data-personId ="${$value.id()}"  />
					</td>
				</tr>
			{{/each}}
	</script><%
End Sub
%>
