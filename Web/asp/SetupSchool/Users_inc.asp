<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/UserInfoParamsAccess_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim bFullAccessEditing
Dim bRightOnDelete
Dim bCommonSchool
Dim strInform, bInform
Dim strUserAddPage


Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementUsers
End Function

Sub ReadState()
	If IsEmpty(bInform) Then
		bInform = False
		strInform = ""
	End If
	Call ReadCommonUsersFilter(UserListForRole())
	Call ReadFilter()
	bCommonSchool = (CLng(strFunctionalityType) = kFuncType_Common)
	If UserListForRole() = RoleGroup_Students Then
		strUserAddPage = "./Movement/MoveBookEdit.asp"
	Else
		strUserAddPage = GetRole() & "QAdd.asp"
	End If
	If Not PERSON_DATA Then readonly = True

	

End Sub

Sub WriteState()
	Call WriteCommonUsersFilter(UserListForRole())
	Call WriteFilter()
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 col-lg-8"
End Function

Function OnKeypress()
End Function

Function GetRole()
	Select Case UserListForRole()
		Case RoleGroup_Students GetRole = "Student"
		Case RoleGroup_Parents GetRole = "Parent"
		Case Else GetRole = "Staff"
	End Select
End Function

Sub onHead()%>
<script src="<%=GetVersionedResLink("/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>

<script src="/js/libs/jquery.tmpl.js" type="text/javascript"></script>
<script src="/js/libs/knockout-1.2.1.js" type="text/javascript"></script>
<script src="/js/libs/knockout.jqueryui.js" type="text/javascript"></script>
<script src="/js/libs/knockout.mapping.js" type="text/javascript"></script>

<script src="/vendor/components/signalr/jquery.signalR.min.js" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/webapi/signalr/hubs")%>" type="text/javascript"></script>


<%
	Call DrawUsersFiltersHeader()
	Call DrawUsersSearchHeader() 
%>

<script><!--

deferredResLoader.loadScript("/js/cryptoRSA/BigInt.js");
deferredResLoader.loadScript("/js/cryptoRSA/Barrett.js");
deferredResLoader.loadScript("/js/cryptoRSA/RSA.js");
deferredResLoader.loadScript("/js/cryptoRSA/RSAHelper.js");
deferredResLoader.loadScript("/js/generateNewPassword.js");
deferredResLoader.loadScript("/js/exporter.js");
deferredResLoader.loadScript("/vendor/pages/common/js/queue.js");


deferredResLoader.loadScript("/js/ImportUpdatePersons.js");


<%If bRightOnDelete Then%>
	function deleteUsers() {
		var checked = whenChecked(document.forms.MainForm, "deluser")
		extDeferred.when(checked, confirmOnDeleteUser).then(function(){

			jsSubmit({
				action: "/asp/SetupSchool/DelUsers.asp",
				form: document.forms.MainForm,
				showProcessing: true
			})
			.then(function(response){
				setNewFilter();
			}, function(xhr){
				var response = xhr.responseJSON;
				if(response.data.deletedCount > 0){
					setNewFilter();
				}
			})
		});
	}
<%End If%>

	function initViewModel( currentPage, qaddPage, editPage, searchEmptyMessage ) {
		var buildedModel = function(){
			//default sort order
			var _sortOrder = <%=lngSortOrder%>;
			var _usersCount = ko.observable(0);

			var mapping = {
				users : {
					key : function(data) {
						return ko.utils.unwrapObservable(data.id);
					},
					create : function(options) {
						return new userMapping(options.data);
					}
				},
				addData : {
					create : function(options) {
						return new addDataMapping(options.data);
					}
				}
			};

			var _filters = {
				filterType : function(){return parseInt($("input[name=FilterType][type=hidden]").val())}
			};

			var specificUserMaping;

			var addDataMapping = function(addData) {
				ko.mapping.fromJS(addData, {}, this);
			}

			var userMapping = function(user) {
				ko.mapping.fromJS(user, {}, this);
				this.fio = ko.observable($.trim(this.lastname() + " " + this.firstname() + " " + this.middlename()));
				if( specificUserMaping )
				{
					specificUserMaping(this, user);
				}
			};

			var on_load_succes = function(callback) {
				return function(response){
					if (response.data === "" || response.data.users === undefined || response.data.users.length < 1)
					{
						$("#UserList").hide();
						_usersCount(0);
						$(viewModel).trigger("onEmptyLoad");
						alert(language.Generic.SetupSchool.kNotFoundUsersByFilter);
						return;
					}
					_usersCount(response.data.users.length);
					ko.mapping.fromJS(response.data, mapping, viewModel);

					viewModel.pageCount = ko.observable(response.data.pageCount);
					viewModel.pageSize = ko.observable(response.data.pageSize);

					if(callback)
					{
						callback();
					}
					ko.applyBindings(viewModel);
					$(viewModel).trigger("onLoad");
				}
			}

			var _load = function(opt){
				var form = document.MainForm;
				if( _filters.filterType() == 2 && $.trim(form.elements["SRCH_TEXT"].value) == "")
				{
					alert(searchEmptyMessage);
					return;
				}
				$(document).trigger('showProcessing');
				var _defaultOptions = {
					page : viewModel.currPage(),
					beforeBind : function(){
						$("#UserList").show();
						if(viewModel.pageCount() > 1) {
							$(".paging").bootpag({
								total: viewModel.pageCount(),
								page : viewModel.currPage(),
								maxVisible: 25,
							}).on("page", function (event, page) {
								viewModel.currPage = ko.observable(page);
								viewModel.load( { "page" : page} );
							});
						}
						else {
							$(".paging > ul").html("");
						}
					}
				}
				if( !opt )
				{
					opt = _defaultOptions;
				}
				form.elements["cp"].value = opt.page - 1;
				
				jsSubmit({
					form: form,
					action: viewModel.loadDataPage,
					showProcessing:true,
					onSuccess: on_load_succes(opt.beforeBind)
				});
			};

			return {
				filters : _filters,
				userCount : _usersCount,
				pageCount : ko.observable(0),
				pageSize : function(){return parseInt($("input[name=PageSize]").val())},
				currPage : ko.observable(currentPage),
				extendUserMapping : function(handler){ specificUserMaping = handler; },
				initPaging : function(opt) {
					$("#UserList").show();
					if(viewModel.pageCount() > 1) {
						var defOptions = {
							total: viewModel.pageCount(),
							page : viewModel.currPage(),
							maxVisible: 25
						};
						var options = $.extend({}, opt, defOptions);

						$(".paging").bootpag(options)
							.on("page", function (event, page) {
								viewModel.currPage = ko.observable(page);
								viewModel.load( { "page" : page} );
							});	
					}
					else {
						$(".paging").html("");
					}
				},
				addUser : function() {
					var form = document.forms.MainForm;
					DoSubmit( form, qaddPage );
				},
				editUser : function editUser( id ) {
					<%If PERSON_DATA Then%>
					var form = document.forms.MainForm;
					form.UID.value = id;
					var url = urlHelper.makeUrl(editPage, {userid: <%=strUserId%>, editUserId: id}, true);
					DoSubmit( form, url );
					<%Else%>
					alert(language.Generic.SetupSchoolUI.kPersonDataInLocalAccess);
					<%End If%>
				},
				sortOrder : function() { return _sortOrder},
				changeSortOrder: function( baseSortOrder ) {
					var form = document.forms.MainForm;
					_sortOrder = (baseSortOrder == _sortOrder) ? (_sortOrder + 1) : baseSortOrder;
					form.elements["SORT"].value = _sortOrder;
					_load();
				},
				load : _load
			}
		}();

		var _processShowButtons = function() {
			var buttonPanel = $("#specialButtons");
			var btnAddDel = $("#add_delButtons");
			var selWorkStatus = $("#WorkStatus");
		
			if( viewModel.userCount() > 0) {
				buttonPanel.show();
			}
			else {
				buttonPanel.hide();
			}

			btnAddDel.show();
			if( selWorkStatus.length == 1 )
			{
				if ( selWorkStatus[0].value == "0" )
				{
					btnAddDel.hide();
				}
			}
		}

		$(buildedModel).bind("onLoad", _processShowButtons);
		$(buildedModel).bind("onEmptyLoad", _processShowButtons);

		return buildedModel;
	}

	window.viewModel = initViewModel(<%=nCurrPage%>,"<%=strUserAddPage%>","<%=GetRole()%>InfoEdit.asp","<%=GetMsgOnEmptySearch()%>");
	var setNewFilter = function() {
		viewModel.currPage = ko.observable(1);
		viewModel.load( {
			page: 1,
			beforeBind : function(){
				viewModel.initPaging();
			}
		});
	}
	var setNewSearch = setNewFilter;
	<%If bFiltersUsed Then%>
		deferredResLoader.ready(function(){
			viewModel.load( {
				beforeBind : function(){
					viewModel.initPaging();
				}
			});
		});
	<%End If%>
//--></script>
<%
	Call SpecialHead()
End Sub

Sub SpecialHead()
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
	Call DrawUsersFiltersBody(True, True)
End Sub

Sub specialButtons()
End Sub

Sub DrawSortHeader(strTitle, nBaseSortOrder)
	%>
	<th>
		<div class="sortHeader" data-bind="css: { ascsort: viewModel.sortOrder() == <%=nBaseSortOrder%>, descsort: viewModel.sortOrder() == <%=nBaseSortOrder + 1%> }">
			<span class="sortIcon"></span>
			<span class="sortTitle"><a href="#" onclick="viewModel.changeSortOrder(<%=nBaseSortOrder%>)"><%=strTitle%></a></span>
			<span class="sortIcon"></span>
		</div>
	</th>
	<%
End Sub

Sub DrawLinkButtons
	If PERSON_DATA Then
		Call DrawPrintButtons()
	Else
		Call DrawPrintOnlyButton()
	End If
End Sub

Sub DrawButtons()
	If Not readonly then

	%><div id='add_delButtons' style='display: inline-block'><%
		ButtonAdd "viewModel.addUser();", obLanguage("SetupSchoolUI","kAddUser")
			
		If UserListForRole() <> RoleGroup_Students And UserListForRole() <> RoleGroup_Staffs Then
			If bRightOnDelete Then ButtonDel "deleteUsers();", obLanguage("SetupSchoolUI","kDelUsers")
		End If

		Dim bPreSchool, bAddSchool, isShowCreateNewPassword, isStudentPageInPreSchool, isStudentPageInAddSchool, isParentPageInAddSchool

		bPreSchool = CLng(strFunctionalityType) = kFuncType_PreSchool
		bAddSchool = CLng(strFunctionalityType)=kFuncType_Add

		isStudentPageInPreSchool = bPreSchool and UserListForRole() = RoleGroup_Students
		isStudentPageInAddSchool = bAddSchool and UserListForRole() = RoleGroup_Students
		isParentPageInAddSchool = bAddSchool and UserListForRole() = RoleGroup_Parents

		'//показываем кнопку сформировать новые пароли для пользователя с правами админа за ИСКЛЮЧЕНИЕМ если это [дет сад и страница воспитанников],[доп образование и страница учеников],[доп образование и страница родителей]
		isShowCreateNewPassword = HasUserRole(rlAdmin) and not isStudentPageInPreSchool and not isStudentPageInAddSchool and not isParentPageInAddSchool

		If(isShowCreateNewPassword) Then
			Call ButtonClass("",obLanguage("Common","kCreateNewPasswords"), obLanguage("Common","kCreateNewPasswords"),"btnGenerateNewPassword")
		End If

		Call ExportForm()
	%></div><%
	End If

	Call specialButtons()
	Call ImportForm() 
End Sub

Sub onDrawPage()
	%>
	<form name="MainForm" method="POST" action="/asp/SetupSchool/delusers.asp" onsubmit="return false;">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ENROLLFROM",4,"DOCTYPE","2","cp", nCurrPage, "ROLEGROUP", UserListForRole(), "UID", "0","SORT", lngSortOrder, "BACK", strScriptName, "Inform", strInform))%><%
			Call WritaAddHiddenParams()
			Call DrawButtonsFilters( True, "MainForm" ) %>

		<div id="UserList" style="display: none">
			<div class="row generateNewPassword hide">
				<div class="col-md-12">
					<div class="alert alert-danger" role="alert">
						<p style="padding-bottom: 5px;">
							<%=obLanguage("Common","kSelectUsersAndPushContinue")%>
						</p>
						<% 
							Call ButtonClass("", obLanguage("Common","kSelectAll"), obLanguage("Common","kSelectAll"), "btnCheckAllNewPassword btn-sm")
							Call ButtonClass("", obLanguage("Common","kContinue"), obLanguage("Common","kContinue"), "btnContinueNewPassword btn-sm")
							Call ButtonClass("", obLanguage("Buttons","kCancel"), obLanguage("Buttons","kCancel"), "btnCancelNewPassword btn-sm")
						%>
					</div>
				</div>
			</div>
			<%Call DrawListTable()%>
		</div>
	</form>
	<%
	Call DrawExcelForm()
End Sub

Sub ImportForm()
End Sub

Sub ExportForm()
End Sub

Sub WritaAddHiddenParams()
End Sub

Sub CheckRoleRights()
	bRightOnDelete = Not readonly And HasUserRight(arDeleteUsers)
	bFullAccessEditing = True
	If HasUserRight(arUsersEditStudents) Then
		If GetPageTabItem() = TabItem_tbParents Or GetPageTabItem() = TabItem_tbStudents Then
			If CLng(strFunctionalityType) = kFuncType_Add Then bFullAccessEditing = False
			Exit Sub
		End If
	End If
	If HasUserRight(arUsersEditStaff) Then
		If GetPageTabItem() = TabItem_tbStaff Then Exit Sub
	End If
	bFullAccessEditing = False
End Sub
%>
