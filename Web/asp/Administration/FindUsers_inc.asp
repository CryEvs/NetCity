<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/UserInfoParamsAccess_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim lngSortOrder, bFullAccessEditing
Dim bRightOnDelete, bFiltersUsed
Dim bCommonSchool
Dim nfindType
Dim strInform, bInform
Dim nAllCount

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementUsers
End Function

Sub ReadState()
    nfindType = GetSafeLng(Request("SelectFilter"),GetSafeLng( obTokenMgr.GetData( strToken, stFindType ), 1))
End Sub

Sub WriteState()
End Sub

Function onLoad()
	onLoad = "JavaScript:init();"
End Function

Function OnKeypress()
End Function

Function GetRole()
	Select Case Clng( obTokenMgr.GetData(strToken,"ROLEID") )
		Case rlStudent GetRole = "Student"
		Case rlParent GetRole = "Parent"
		Case Else GetRole = "Staff"
	End Select
End Function

Sub onHead()
%>
<SCRIPT>
	var myModel = {
		items: ko.observableArray([
				{ name: "Well-Travelled Kitten", sales: 352, price: 75.95 },
				{ name: "Speedy Coyote", sales: 89, price: 190.00 },
				{ name: "Furious Lizard", sales: 152, price: 25.00 },
				{ name: "Indifferent Monkey", sales: 1, price: 99.95 },
				{ name: "Brooding Dragon", sales: 0, price: 6350 },
				{ name: "Ingenious Tadpole", sales: 39450, price: 0.35 },
				{ name: "Optimistic Snail", sales: 420, price: 1.50 }
			]),
		sortByName: function () {
			this.items.sort(function (a, b) {
				return a.name < b.name ? -1 : 1;
			});
		}
	};
	myModel.gridViewModel = new ko.simpleGrid.viewModel({
		data: myModel.items,
		columns: [
				{ headerText: "Фамилия", rowText: "lastName" },
				{ headerText: "Имя на экране", rowText: "nickname" },
				{ headerText: "Роль", rowText: "role" }
			],
		pageSize: 4
	});

	function init() {
		ko.applyBindings(myModel);
	};

</SCRIPT>

<script type="text/html" id="filterResult">
	<div>
		<div data-bind="template : { name: 'inquiryResultTable',
			afterRender: function(e){ $(e).parent().hide().slideDown(); } }"></div>
		<div id="paging_PmInquiry"></div>
	</div>
</script>

<script type="text/html" id="filterResultNotFound">
	<div class="notLoadedData">Данные не найдены.</div>
</script>

<script type="text/html" id="inquiryResultTable">
	<table>
		<thead>
			<tr>
				<th><input type="checkbox" data-bind="checked: selectAll" /></th>
				<th>Фамилия</th>
				<th>Имя на экране</th>
				<th>Роль</th>
			</tr>
		</thead>
		<tbody data-bind="template: {
			name: 'inquiryTableRow',
			foreach: inquiries
			}"></tbody>
	</table>
</script>

<script type="text/html" id="inquiryTableRow">
	<tr>
		<td class="nowrap"><a data-bind="attr : { href : detailUrl }, text : inquiryNumber"></a></td>
		<td data-bind="text: dateCreate"></td>
		<td data-bind="text: applicantFIO"></td>
		{{if $item.showType}}
			<td data-bind="text: typeName"></td>
		{{/if}}
		{{if $item.showStatus}}
			<td data-bind="text: status"></td>
		{{/if}}
	</tr>
</script>
<%
	'Call DrawUsersFiltersHeader()
	'Call DrawUsersSearchHeader()
End Sub

Sub SpecialHead()
End Sub

Sub DrawFilters( strForm )
'	If bInform And nAllCount = 0 Then Exit Sub
	Call DrawUsersFiltersBody(True, True)
End Sub

Sub DrawButtons()
End Sub

Sub onDrawPage()
	%>
	<FORM Name="MainForm" METHOD="POST" ACTION="/asp/SetupSchool/delusers.asp" onsubmit="return false;">
	<%=WriteObligatoryTags()%><%
	Call DrawButtonsFilters( True, "MainForm" )%>
		<div id = "content"> 
			<div class=""SmallHeader""><%=obLanguage("SetupSchoolUI","kNoStaffList")%></div>
			<div data-bind="simpleGrid: gridViewModel"></div>
		</div>
	</FORM><%
End Sub

Sub ImportForm()
End Sub

Sub ExportForm()
End Sub

Sub BlankForm()
End Sub

Function DrawUsersFiltersBody_Special
	DrawUsersFiltersBody_Special = True
End Function

Function GetSortHeader( strName, lngSortOrder, lngCurrSortOrder )
	If Not bIsDebug Then On Error Resume Next
	Dim strImage

	If lngSortOrder = lngCurrSortOrder Then
		lngSortOrder = lngSortOrder + 1
		strImage = "<img src="""&strCommonImgFolder&"/down.gif"" border=""0"" align=""middle"">"
	ElseIf lngSortOrder + 1 = lngCurrSortOrder Then
		strImage = "<img src="""&strCommonImgFolder&"/up.gif"" border=""0"" align=""middle"">"
	Else
		strImage = "&nbsp;"
	End If

	GetSortHeader ="<nobr>" & strImage & ShowAnchor( "changeSortOrder(" & lngSortOrder &");", obLanguage("Common","kChangeSortOrder"), strName, "" )& strImage & "</nobr>"
End Function

Sub CheckRoleRights()
	bRightOnDelete = Not readonly And HasUserRight(arDeleteUsers)
	bFullAccessEditing = True
	If CLng(strFunctionalityType)=kFuncType_Add Then bFullAccessEditing = False
	If HasUserRight(arUsersEditStudents) Then
		If GetPageTabItem() = TabItem_tbParents Then Exit Sub
		If GetPageTabItem() = TabItem_tbStudents Then Exit Sub
	End If
	If HasUserRight(arUsersEditStaff) Then
		If GetPageTabItem() = TabItem_tbStaff Then Exit Sub
	End If
	bFullAccessEditing = False
End Sub
%>
