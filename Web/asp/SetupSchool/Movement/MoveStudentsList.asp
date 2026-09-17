<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<% ' © 2007-2016 IRTech. All rights reserved.

Dim strBackPage
Dim movementComponent
Dim objUserInfo, strCurrentUser, objSchoolInfo

'---source params
Dim objSourceInfo, objSourceInfoDto, strMovementSourceId

'---doc params
Dim nDocId, nDocType, nDocSubType
Dim dtDocDate, dtAdminDate, strDocNumber

'---move direction params
Dim nClassIdTo, nGradeTo
Dim nClassIdFrom, nGradeFrom

Dim arrSerializeParams

'-- pool params
Dim bIsOutOfSystemPool, bIsOutOfSystemPoolExists

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementMovements
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbMoveBook
	bTabInternalPage = True
End Function

Function GetPageTitle()
	GetPageTitle = objSourceInfoDto.MovementSourceInfo.Title
End Function

Sub ReadState()
	strBackPage = Request("BackPage")
	strMovementSourceId = GetSafeStr(Request("movementSourceId"), -1, "")

	If strMovementSourceId = kEnrollSource_Pool Or strMovementSourceId = kEnrollSource_Pool_OutOfSystem Then
		bIsOutOfSystemPoolExists = objNSNET.IsOutOfSchoolPoolExists()
		bIsOutOfSystemPool = False
		If bIsOutOfSystemPoolExists Then
			bIsOutOfSystemPool = (GetSafeLng(Request("outofsystempool"), GetSafeLng(obTokenMgr.GetData(strToken, stPseudoPool), 0)) = 1)
			'подменяем идентификатор источника
			strMovementSourceId = IIF(bIsOutOfSystemPool, kEnrollSource_Pool_OutOfSystem, kEnrollSource_Pool) 
		End If
	End If
End Sub

Sub Main()
	Dim objSavedData

	On Error Resume Next
	Set movementComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMovementComponent")
	Set objSourceInfoDto = movementComponent.GetSourceInfo(strMovementSourceId)
	TestError "Ошибка получения информации по списку учащихся"

	Set objUserInfo = objNSNET.GetUserInfo(strUserId)
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
		
	strCurrentUser = objUserInfo("LastName") & " " & objUserInfo("FirstName") & " " & objUserInfo("MiddleName")

	Set objSavedData = obTokenMgr.GetData(strToken, stMoveDocState)

	arrSerializeParams = Array("camelCase", "enumConverter")
	dtDocDate = CDate(Request("DocDate"))

	'//если тут использовать функцию: GetSafeDate(Request("AdminDate"), dtDocDate) - то когда в региональных настройках заданы нестандартные настройи даты, то дата портится
	If IsNull(Request("AdminDate")) or IsEmpty(Request("AdminDate")) Then
		dtAdminDate = dtDocDate
	Else
		dtAdminDate = CDate(Request("AdminDate"))
	End If

	strDocNumber = GetSafeStr(Request("DocNumber"), 20, "")

	nClassIdFrom = GetSafeLng(Request("CLASSID_FROM"), GetSafeLng(objSavedData("CLASSID_FROM"), -1))
	nGradeFrom = GetSafeLng(Request("GRADE_FROM"), GetSafeLng(objSavedData("GRADE_FROM"), -1))
	If nGradeFrom > -100 Then
		nGradeFrom = -nGradeFrom
	End If

	nClassIdTo = GetSafeLng(Request("CLASSID_TO"), GetSafeLng(objSavedData("CLASSID_TO"), -1))
	nGradeTo = GetSafeLng(Request("GRADE_TO"), GetSafeLng(objSavedData("GRADE_TO"), -1))
	If nGradeTo > -100 Then
		nGradeTo = -nGradeTo
	End If

	nDocId = GetSafeLng(Request("DocId"),0)
	nDocType = GetSafeLng(Request("DocType"), Null)
	nDocSubType = GetSafeLng(Request("DocSubType"), Null)


	If Not movementComponent.CheckSourceAccessibility(strMovementSourceId, nDocType) Then
		GenerateHTMLError obLanguage("Movement", "kNotAccessEnrollSource"), "/asp/SetupSchool/Movement/MoveBook.asp", strToken
	End If
End Sub

Function GetErrorPageMode
	GetErrorPageMode = kErrPageMode_Transfer
End Function

Sub onHead() %>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/movement/js/moveStudentsList.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/movement/js/similars.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/mail.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/common/js/queue.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/js/pagination.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>

	<script src="/vendor/components/signalr/jquery.signalR.min.js" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/webapi/signalr/hubs")%>" type="text/javascript"></script>

	<script src="<%=GetVersionedResLink("/js/libs/jquery-bootpag-master/jquery.bootpag.min.js")%>" type="text/javascript"></script>

	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/print-tables.min.css")%>"/>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/movement/css/movestudentslist.css")%>"/>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/movement/css/similarsStudentsList.css")%>"/>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/popover.css")%>">

	<style>
		@media (min-width: 810px) {
			.select2-dropdown {
				width: 350px !important;
			}
		}
	</style>

	<script>
		function Back() {
			var form = document.MainForm;
			goBack(form, "<%=strBackPage%>");
		}

		function switchPool(setOutOfSystemPool) {
			document.MainForm.outofsystempool.value = setOutOfSystemPool;
			DoSubmit(document.MainForm, "");
		}

		var schoolId = <%=strSchoolId%>;
		var schoolYearId = <%=strCurrYearId%>;
		var strMovementSourceId = "<%=strMovementSourceId%>";
		$("#buttonPanel").hide();

		deferredResLoader.ready(function(){
			var filterPanelModel = <%=comHelper.JsonHelper.SerializeObject(objSourceInfoDto.FilterPanel, arrSerializeParams)%>;
			var filterPanelSources = <%=comHelper.JsonHelper.SerializeObject(objSourceInfoDto.FilterSources, arrSerializeParams)%>;

			var container =  $(".moveStudentsListCtrl");

			var moveDocData = {
				id: <%=nDocId%>,
				docDate: <%=Date2Js(dtDocDate)%>,
				adminDate: <%=Date2Js(dtAdminDate)%>,
				docName: "<%=strDocNumber%>",
				schoolYearId: schoolYearId,
				docType: <%=nDocType%>,
				docSubType: <%=nDocSubType%>
			};

			var backPage = "<%=strBackPage%>";
			var queueImportMode = <%=Bool2Js(obContext.ServerSettings.UserAccountsSettings.QueueImportMode)%>

			var moveDirection = {}
			<%If nDocType = kDocType_MOVE Or nDocType = kDocType_OUT Or nDocType = kDocType_GRADUATE Or nDocType = kDocType_YEAR Or nDocType = kDocType_STAY Then %>
				moveDirection.educGroupFrom = <%Call DrawEducGroupJsScript(nClassIdFrom, nGradeFrom)%>;
			<%End If %>
			<%If nDocType = kDocType_MOVE Or nDocType = kDocType_ENROLL Or nDocType = kDocType_YEAR Or nDocType = kDocType_STAY Then %>
				moveDirection.educGroupTo = <%Call DrawEducGroupJsScript(nClassIdTo, nGradeTo)%>;
			<%End If %>

			var currentUser = "<%=DB2Java(strCurrentUser)%>";
			var currentSchool = "<%=strSchoolId%>";
			var productName = "<%=DB2Java(NETSCHOOL_PRODUCT_NAME)%>";

			fp = new filterPanel($(".filters-panel"), filterPanelModel, filterPanelSources, "/webapi/movement/sources/" + strMovementSourceId + "/filterpanel", $("#buttonPanel"), container);
			fp.emptyChoice(function(){
				$("#applybtn").hide();
			});
			fp.ready(function(){
				$("#applybtn").show();
			});

			similarsController = new similarsCtrl(currentUser, currentSchool, null)
			var options = {
				userFio: currentUser,
				schoolId: currentSchool,
				productName: productName,
				queueImportMode: queueImportMode,
				similarsCtrl: similarsController,
				pfdoIntegrationType: "<%=GetPfdoIntegrationType()%>"
			}
			moveStudentsListCtrl = new moveStudentsListCtrl(container, fp, strMovementSourceId, moveDocData, moveDirection, backPage, options);

			if(fp.status === "emptyChoice"){
				$("#buttonPanel").find(".btn-default").hide();
				$("#applybtn").hide();
			}

			<%If objSourceInfoDto.MovementSourceInfo.AutoLoadOnInit Then%>
				moveStudentsListCtrl.browseMoveStudentsList();
			<%Else %>
				if (!fp.checkChoiceEnabling()) { moveStudentsListCtrl.browseMoveStudentsList(); }
			<%End If %>

			window.leaveConfirmFunc = function() {
				if (moveStudentsListCtrl.ExistsCheckedUsers()) {
					alert("Чтобы завершить создание приказа, нужно нажать кнопку \"Добавить учеников в приказ\". Если вы хотите перейти на другой экран, снимите все галочки");
					return false;
				}
				return true;
			}

			$("#actionPanel").show();
		});
		
	</script><%
End Sub

Function GetPfdoIntegrationType()
	Dim nSetting
	nSetting = GetSafeLng(obContext.ServerSettings.SystemSettings.IntegrationPFDOType, 0)
	Select Case nSetting
		Case 1: GetPfdoIntegrationType = "IRTechEes"
		Case 2: GetPfdoIntegrationType = "IRTech"
		Case 3: GetPfdoIntegrationType = "Volgograd"
		Case Else: GetPfdoIntegrationType = ""
	End Select
End Function

Sub DrawEducGroupJsScript(nClassId, nGrade)
	%>(function(){
		var refEducGroup = {
			internalId: null,
			grade: null,
			type: null,
			educationLevel: <%=GetSafeLng(strFunctionalityType, 2)%>
		};

		<%If nClassId > 0 Then%>
			refEducGroup.internalId = <%=nClassId%>;
			refEducGroup.type = "Educational";
		<%ElseIf nGrade >= 0 Then %>
			refEducGroup.grade = <%=nGrade%>;
			refEducGroup.type = "Attached";
			
		<%End If %>

		return refEducGroup;
	})();<%
End Sub

Sub DrawPoolButtons()
	If bIsOutOfSystemPool Then
		Call SimpleButton("switchPool(0);", obLanguage("PoolStudents","kInSystem"))
	Else
		Call SimpleButton("switchPool(1);", obLanguage("PoolStudents","kOutOfSystem"))
	End If
End Sub

Sub DrawButtons()%>
	<div class="buttons-panel" id="buttonPanel">
		<div class="buttons-panel-left">
			<button title="<%=obLanguage("Buttons", "kChoose")%>" type="button" class="btn btn-primary" onclick="moveStudentsListCtrl.AddUsers()"><span class="glyphicon glyphicon-ok-sign"></span> <span><%=obLanguage("Movement", "kAddStudentsToDoc", strFunctionalityType)%></span></button>
			<%ButtonClass "moveStudentsListCtrl.browseCheckedStudents()", "Выбранные учащиеся", "", "checked-students-btn"%>
		</div>
		<div class="buttons-panel-right" id="actionPanel">
			<div class="display-inline buttons-panel-export-send"><%
				If bIsOutOfSystemPoolExists Then
					Call DrawPoolButtons
				End If%>
			</div>
		</div>
	</div><%
End Sub

Sub onDrawPage()%>
	<form Name="MainForm" METHOD="POST" ACTION="<%=strScriptName%>" OnSubmit="return false" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("BackPage", strBackPage, "outofsystempool", IIf(bIsOutOfSystemPool, 1, 0), "movementSourceId", strMovementSourceId, "DocId", CStr(nDocId), "DocDate", CStr(dtDocDate), "AdminDate", CStr(dtAdminDate), "DocNumber", CStr(strDocNumber), "DocType", CStr(nDocType), "DocSubType", CStr(nDocSubType)))%>
		
		<%OpenPanel obLanguage("FilterUsers", "kFilter"), "filters", objSourceInfoDto.MovementSourceInfo.CollapsedFilter%>
		<div class="buttons-filters-panel form-horizontal">	
			<div class="row">
				<div class="filters-panel col-md-12 filters-panel-compact <%=GetFiltersPanelWidth()%>">
					<div class="form-group active aux">
						<div class="col-md-12">
							<button id="applybtn" title="<%=obLanguage("Buttons", "kApply")%>" type="button" class="btn btn-warning" onclick="moveStudentsListCtrl.browseMoveStudentsList()"><span class="glyphicon glyphicon-search"></span> <span><%=obLanguage("Buttons", "kApply")%></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<%ClosePanel%>
		
		<div class="row">
			<div class="col-md-12">
				<%Call DrawButtons%>
			</div>
		</div>
		<div class="moveStudentsListCtrl"></div>
	</form><%
End Sub%>