<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objParentList, studID, strPID
Dim strStudentName, rsUserInfo
Dim bAdd, strAdd, strBackPage
Dim component, uow

Function GetPageTitle()
	GetPageTitle = IIF(bAdd, obLanguage("SetupSchool","kAddParent") & obLanguage("Common","kStudent_d",strFunctionalityType), obLanguage("SetupSchool","kDelParent")) &": " &GreenText( DB2HTML( objNSNET.GetUserNickName(studID) ) )
End Function

Sub ReadState()
	If Not HasUserRight(arEditInfoSelf) Then
		If Not HasUserRight(arUsersEditStudents) Then
			GenerateError obLanguage("Common","kErrPageAccess")
		End If
	End If

	strAdd = Request("Add")
	bAdd = (strAdd = "1")
	strPID = GetSafeID(Request("PID"),"-1")
	studID = GetSafeID(Request("UID"),GetSafeID(obTokenMgr.GetData(strToken,stUsersStaffUserID),"-1"))

	Set rsUserInfo = objNSNET.GetUserInfo(studID)
	TestError obLanguage("SetupSchool","kErrDisplayName")
	If rsUserInfo.EOF Then GenerateError obLanguage("SetupSchool","kErrDisplayName")
	nfindType = GetSafeLng(Request("FilterType"),GetSafeLng( obTokenMgr.GetData( strToken, stFindType ), 1))
	strStudentName = rsUserInfo("LASTNAME")
	If strPID = "-1" And bAdd Then Call ReadFilter()
End Sub

Sub WriteState()
	If strPID = "-1" And bAdd Then Call WriteFilter()
	Call obTokenMgr.SetData(strToken, stUsersStaffUserID, studID)
End Sub

Sub ReadFilter()
	Dim CurLetter
	Call ReadCommonUsersFilter(RoleGroup_Parents)
	CurLetter = UCase(Mid(strStudentName,1,1))
	strFirstLetter = GetSafeStr(Request("FL"),1,CurLetter)
	strLastLetter = GetSafeStr(Request("LL"),1,CurLetter)
	If strLastLetter <> " "  Then
		If obLanguage.Compare(strFirstLetter,strLastLetter, obContext.LocalSettings.DefaultLanguage) > 0 Then strLastLetter = strFirstLetter
	End If
End Sub

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbParents
 	bTabInternalPage = True
End	Function

Sub WriteFilter()
	Call obTokenMgr.SetData(strToken,"ROLEID",rlParent)
End Sub

Sub Main()
	Dim bLastChild
	strBackPage = "/angular/school/userinfo/students/" & studID

	If strPID <> "-1" Then
		Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
		Set uow = component.GetEditUserInfoWork(strUserId, studID, strSchoolId, strCurrYearId, strCurrGlobalYearId)

		If bAdd Then
			Call uow.SetParentToStudent(strPID)
			Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrAssociate") & obLanguage("Common","kStudent_d",strFunctionalityType))
		Else
			bLastChild = uow.RemoveParentFromStudent(strFunctionalityType, strPID)
			Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrDissociate") & obLanguage("Common","kStudent_r",strFunctionalityType))
			If bLastChild Then
				Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("SetupSchool", "kDissociateParentFromLastChild")))
			End If
		End If

		Call uow.Commit()
		Call uow.Dispose()

		Call obTokenMgr.SetData(strToken, stUsersStaffUserID, studID)
		RedirectTo strBackPage, Array("UID", studID)
	Else
		If bAdd Then
			If nFindType = FilterType_Search Then
				Set objParentList = objNSNET.SearchAvailableForStudentParents(studID, strSchoolID, strFio)
			Else
				Set objParentList = objNSNET.GetAvailableForStudentParentList(studID, strSchoolID, strGender, strFirstLetter, strLastLetter )
			End IF
		Else
			Set objParentList = objNSNET.GetAssignedToStudentParentList(studID, strCurrYearID)
		End If
	End If
End Sub

Sub onHead()
%>
<script><!--
function Back() {
	goBack(document.forms.MainForm, '<%=strBackPage%>');
}

function assignParent(id) {
	if( isDBBusy() ) return;
	var form = document.MainForm;
	form.elements["PID"].value = id;
	setDBBusy();
	DoSubmit( form, "" );
}

<%If bAdd Then%>
function addParent() {
	DoSubmit( document.forms.MainForm, "/asp/SetupSchool/ParentQAdd.asp?BACK=AssociateParent.asp?Add=1" );
}<%End IF%>
//--></script><%
	Call DrawUsersFiltersHeader()
End Sub

Sub DrawFilters( strForm )
	If bAdd Then
		Call DrawUsersFiltersBody(True, True)
		Call DrawUsersSearchHeader()
	End IF
End Sub
Sub DrawButtons()
	If bAdd Then ButtonAdd "addParent();", obLanguage("SetupSchoolUI","kAddUser")
End Sub

Sub onDrawPage()%>
	<form METHOD="POST" NAME="MainForm" ACTION="AssociateParent.asp" onsubmit="return false;">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("PID","-1", "UID",studID, "Add",strAdd) )%><%
		Call DrawButtonsFilters( True, "MainForm" )%>
	</form>
	<%If objParentList.EOF Then
		%><h3><%=obLanguage("SetupSchoolUI","kNoParentsList")%>.</h3><%
	Else 
		%><table class="table table-bordered">
			<tr>
				<th><%=obLanguage("Common","kDisplayName")%></th>
				<th><%=obLanguage("Common","kLastName")%></th>
				<th><%=obLanguage("Common","kFirstName")%></th>
				<th><%=obLanguage("Common","kMiddleName")%></th>
			</tr><%
			While Not objParentList.EOF
				%><tr>
					<td><%=ShowAnchor("assignParent('"&DB2Java(objParentList("USERID"))&"')", obLanguage("SetupSchool","kSelectParent"), DB2HTML(objParentList("NICKNAME")), "" )%></td>
					<td><%=DB2HTML(objParentList("LASTNAME"))%></td>
					<td><%=DB2HTML(objParentList("FIRSTNAME"))%></td>
					<td><%=DB2HTML(objParentList("MIDDLENAME"))%></td>
				</tr><%
				objParentList.MoveNext
			Wend
		%></table><%
	End If
End Sub
%>
