<!-- #INCLUDE FILE="em_screen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objUserList
Dim arrRs,lngUserCnt, strCityName

Dim bRightOnDelete

Function GetPageTitle()
	GetPageTitle = 	obLanguage("ServAdmin","kTitleEmUsers")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Users
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_Users
 End Function

Function UserListForRole()
	UserListForRole = RoleGroup_Staffs
End Function

Sub ReadState()
	Call ReadCommonUsersFilter(UserListForRole())
	strGender = "" ' В интерфейсе УО нет пола
	bUseGender = false
	bRightOnDelete = HasUserRight(arEMUsersEdit)
	strScriptName = "emUsers.asp"
End Sub

Sub WriteState()
	Call WriteCommonUsersFilter(UserListForRole())
End Sub

Sub Main()
	If lngSortOrder > 1 Then lngSortOrder = 0
	If Not bFiltersUsed Then
		Set objUserList = Nothing
		bFiltersUsed = False
	ElseIf nFindType = FilterType_Search Then
		nCurrPage=0
		Set objUserList = objNSNET.SearchEMUsers(strFio, strEMID, lngSortOrder)
		bFiltersUsed = True
	ElseIf nFindType = FilterType_Filter Then
		Set objUserList = objNSNET.GetEMUserList(strEMID, strFirstLetter, strLastLetter, strGender, lngSortOrder, False, nPageSize, nCurrPage, pageCount)
		bFiltersUsed = True
	End If

	lngUserCnt = 0
	If Not objUserList Is Nothing Then lngUserCnt = objUserList.RecordCount

	readonly= Not HasUserRight(arEMUsersEdit)
End Sub

Sub DrawButtons()
	If Not readonly then
		ButtonAdd "editUser(0);", obLanguage("SetupSchoolUI","kAddUser")
		If bRightOnDelete Then ButtonDel "deleteUsers();", obLanguage("SetupSchoolUI","kDelUsers")
	End If
End Sub

Sub DrawLinkButtons()
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 col-lg-9 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
	Call DrawUsersFiltersBody(True, True)
End Sub

Function GetSortHeader( strName, lngSortOrder, lngCurrSortOrder )
	If Not bIsDebug Then On Error Resume Next
	Dim strImage
	If lngSortOrder = lngCurrSortOrder Then
		lngSortOrder = lngSortOrder + 1
		strImage = "<img src=""" & strCommonImgFolder & "/down.gif"" border=""0"" align=""middle"">"
	ElseIf lngSortOrder + 1 = lngCurrSortOrder Then
		strImage = "<img src=""" & strCommonImgFolder & "/up.gif"" border=""0"" align=""middle"">"
	Else
		strImage = "&nbsp;"
	End If
	GetSortHeader ="<nobr>" & strImage & ShowAnchor( "changeSortOrder(" & lngSortOrder &");", obLanguage("Common","kChangeSortOrder"), strName, "" )& strImage & "</nobr>"
End Function

Sub onHead()
%>
<script><!--
<%If bRightOnDelete Then%>
function deleteUsers() {
	if( isDBBusy() ) return false;
	var form = document.forms.MainForm;

	whenChecked(form, "deluser").then(function(){
		confirmOnDeleteUser().then(function(){
			setDBBusy();
			DoSubmit( document.MainForm, '' );
		});
	});
}
<%End If%>
function editUser( id ) {
	var form = document.forms.MainForm;
	form.UID.value = id;
	if (id==0)
		DoSubmit( form, "EMUserAdd.asp" );
	else
		DoSubmit( form, "EMUserInfoEdit.asp" );
}
function gotoPage(nPage) {
	var form = document.forms.MainForm;
	form.elements["cp"].value = nPage;
	DoSubmit( form, "<%=strScriptName%>" );
}
function changeSortOrder( nNewSortOrder ) {
	var form = document.forms.MainForm;
	form.elements["SORT"].value = ( nNewSortOrder == <%= lngSortOrder%> ) ? -nNewSortOrder : nNewSortOrder;
	DoSubmit( form, "<%=strScriptName%>?<%If Request("FT")="SRCH" Then Response.write "FT=SRCH" Else Response.write "FT=FLT"%>" );
}
function confirmOnDeleteUser() {
	return $.show.confirmation(language.Generic.SetupSchoolUI.kDeleteUsersInfo);
}
function HotKey(e) {
	e=getEvent(e);
	keycode = getKeyCode(e);

	numcheck = /[А-я]/
	keychar = String.fromCharCode(keycode)
	if ( numcheck.test(keychar) ){
		var destA ="#"+keychar;
		window.location.href = destA.toUpperCase();
	}
	return true;
}

$(document).bind('keypress', HotKey);

//--></script>
<%
	Call DrawUsersFiltersHeader()
	Call DrawUsersSearchHeader()
End Sub

Sub onDrawPage()
%><form Name="MainForm" class="form-horizontal" METHOD="POST" ACTION="/asp/EDUC_MANAGER/deleteUsers.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("cp", "", "UID", "0", "SORT", lngSortOrder, "BACK", strScriptName))%>
	<%Call DrawButtonsFilters( True, "MainForm" )%>
	<%If pageCount > 1 Then Call ShowPageList(pageCount,nCurrPage)
		%><div class="row"><div class="col-md-12 col-lg-9"><%
			If bFiltersUsed Then
				Call DrawListTable()
			Else
				DrawInfo IIF(nfindType=1,obLanguage("Common","kMustUseFilter"),obLanguage("Common","kMustUseFind")), False
			End If
		%></div></div><%
	If pageCount > 1 Then Call ShowPageList(pageCount,nCurrPage)
%></form><%
End Sub

Sub DrawListTable()
	Dim QuickLetter, CurLetter, CurName, strCurUserID, i
	Dim strLoginName
	Dim nStartNum

	If lngUserCnt=0 Then 
		DrawInfo obLanguage("ServAdmin","kNoUserList"), False
		Exit Sub
	End If
	%><table class="table table-bright-striped table-xs table-thin">
	<tr>
		<th><%=obLanguage("Filter","kN_PP")%></th>
		<th><%=GetSortHeader( obLanguage("Filter","kFIO"),0,lngSortOrder)%></th>
		<th><%=obLanguage("SetupSchoolUI","kUserRole")%></th>
		<%If bRightOnDelete Then%>
			<%=ShowDelCellHeader(1)%>
		<%End If%>
	</tr><%
	QuickLetter = ""
	nStartNum = nCurrPage * nPageSize
	i = 1
	While Not objUserList.EOF
		CurName = DB2HTML(objUserList("LASTNAME") & " " & objUserList("FIRSTNAME") & " " & objUserList("MIDDLENAME"))
		CurLetter = UCase(Left(objUserList("LASTNAME"),1))
		strCurUserID = objUserList("USERID")
		%><tr class="text-center">
			<td class="text-right"><%=nStartNum + i%>&nbsp;</td>
			<td class="text-left"><% If CurLetter<>QuickLetter Then Response.Write "<A NAME=""" & CurLetter & """></A>": QuickLetter=CurLetter
			rw ShowAnchor( "editUser('"&strCurUserID&"')", obLanguage("SetupSchoolUI","kEditUserInfo"), CurName, "" )%></td>
			<td><%=DB2HTML(objUserList("ROLENAME"))%></td><%
			If Not readonly And bRightOnDelete Then
				%><td><input type="checkbox" name="deluser" value="<%= strCurUserID %>"></td><%
			End If
		%></tr><%
		i = i + 1
		objUserList.MoveNext
	Wend%>
	</table><%
End Sub
%>
