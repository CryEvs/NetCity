<!-- #INCLUDE FILE=Menu/Menu.asp -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim TI, strScriptName
Dim currMenuItemId, currTabItemId
Dim bTabInternalPage ' Это флаг для разрешения/запрещения переключения перехода между прошлым и будущим годами,
' некое обобщение - переход разрешён из главных страниц, под главными понимаются - у которых перекрыты ф-ции
' GetPageMenuItem (или GetPageTabItem), остальные - внутренние (отсюда название флага bTabInternalPage),
' если bTabInternalPage не определён, то считаем, что False (т.е. главная страница),
' в большинстве главных страниц GetPageMenuItem (GetPageTabItem) - перекрыты, bTabInternalPage не определён (False, считаем, что главная страница),
' если надо, флаг явно можно выставить в нужное значение на определённой странице (например, SetUpSchool.asp, SummerMoveBook.asp)

strScriptName = Request.ServerVariables("SCRIPT_NAME")
strScriptName = Replace(strScriptName, "/asp/asp", "/asp")
%>
<!-- #INCLUDE FILE=Screen.asp -->
<!-- #INCLUDE FILE=ScreenNonPrint.asp -->
<%

Sub InitMenuPosition()
	' #10888. Иногда одна и та же страница может вызываться из страниц, относящихся к разным меню. К какому пункту меню тогда относить эту страницу?
	' Получается, надо отслежывать историю навигации. Это очень похоже на определение strBackPage.
	' В этом определении часто помогают сведения, полученные в ф-ции ReadState, поэтому оборачиваем работу с определением позиции меню для соответсвующей
	' страницы в отдельную ф-цию InitMenuPosition и вызываем её после ReadState.
	
	Dim pageMenuItem, requestMenuItem, pageTabItem, requestTabItem
	
	pageTabItem = GetSafeLng(GetPageTabItem(), 0)
	requestTabItem = GetSafeLng(Request("TabItem"), 0)
	pageMenuItem = GetSafeLng(GetPageMenuItem(), 0)
	requestMenuItem = GetSafeLng( Request("MenuItem"), 0)

	Call objContextComponent.InitMenu(pageMenuItem, requestMenuItem, pageTabItem, requestTabItem)
	currMenuItemId = objContextComponent.GetSelectedMenuItem().Id
	currTabItemId = objContextComponent.GetSelectedTabItem().Id
	TI = currTabItemId
End Sub

Function GetScreenType()
	GetScreenType = stNormal
End Function

Function onLoad()
	onLoad = onCheckSaveMsg()
End Function

Function IsShowYearsTabs
	' Переключаться на будущий год и обратно - можно только на главных страницах в табах
	If IsEmpty(bTabInternalPage) Then bTabInternalPage = False
	If bTabInternalPage Then IsShowYearsTabs = False : Exit Function
	IsShowYearsTabs = (bFutureMode Or IsWorkYear()) And (HasUserRight(Right_arCreateCloseEditYear) Or bIsStaff)
	If IsShowYearsTabs Then IsShowYearsTabs = GetSafeBool(obTokenMgr.GetData(strToken, stFutureYearExists), False)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = 0
	bTabInternalPage = True
End Function

Function GetPageTabItem()
	GetPageTabItem = 0
	bTabInternalPage = True
End Function

Function hasPageQHelp()
	hasPageQHelp = False
End Function

Sub onHelpHeader()
	Response.Write "&nbsp;"
End Sub

Sub onHelpContent()
	Response.Write "&nbsp;"
End Sub

Sub onHeadSpecialAdd()
	Response.write "&nbsp;"
End Sub

Sub onDrawHead()
	Call InitJsAppContext()
%>
	<script type="text/javascript">
		var dom=(document.getElementById)? true: false;
		var ie4=(!dom && document.all)? true: false;
		var ie5=(dom && document.all)? true: false;
		var ie=(ie4 || ie5)
		var opera=(dom && navigator.appName == "Opera")? true : false;

		var wndAltPrintVersion = null;
		var isMainWindow = true;

		function ShowChats() {
			checkForChanges().then(function() {
				postTo("/angular/school/chats");
			})
		}

		function ShowAnnouncements() {
			checkForChanges().then(function () {
				if (appContext.schoolId) {
					postTo("/angular/school/announcements/");
				}
				else {
					postTo("/angular/em/announcements/");
				}
				
			});
		}

		<%If HasUserRight(arForumSendReceive) Then%>
		function ShowForum() {
			openPopupWindow("_forum", "/asp/Forum/Forum.asp", 950, 660)
		}
		<%End If%>
	
		function changeYear(yearId) {
			checkForChanges().then(function(){
				postTo("/asp/SetupSchool/ChangeYear.asp", { SCHOOLYEARID: yearId })
			});
		}

		function openPersonalSettings() {
			checkForChanges().then(function(){
				postTo("<%=GetPersonalSettingsPage()%>");
			});
		}

		function initSignalR() {
			deferredResLoader.loadJsScript("/js/libs/signalr/jquery.signalR-2.2.0.min.js")
				.then(function(){return deferredResLoader.loadJsScript("/webapi/signalr/hubs")})
				.then(function(){
					$.connection.hub.qs = { "at" : appContext.at };
					var notices = $.connection.systemNoticesHub;
			
					notices.client.handleSysNotice = function(message) {
						alert(message);
					};

					$.connection.hub.start().done();
				});
		}
	</script>

<%

	Call onHeadNonPrint()
	Call onHead()
End Sub

Sub RW(str)
	Response.Write str
End Sub

Function GetPersonalSettingsPage()
	If bIsAdminInterface Then
		GetPersonalSettingsPage = "#"
	Else
		If bIsEducManager Then
			GetPersonalSettingsPage = "/angular/em/mysettings/"
		Else
			GetPersonalSettingsPage = "/angular/school/mysettings/"
		End If
	End If
End Function

Function GetScreenContext()
	GetScreenContext = ""
	If bFutureMode Then
		GetScreenContext = " future"
	End If
End Function

Sub DrawLeftMenu()
	Dim bIsFutureMode, img
	bIsFutureMode = GetSafeBool(obTokenMgr.GetData( strToken, stFutureMode), False)
	Call DrawMenu()
End Sub

Function CanBack()
	Dim strTabURLUpper, strScriptUpper
	Dim nPos
	CanBack = False

	strTabURLUpper = UCase(objContextComponent.GetUrlSelectebTabItem())
	If TI >= 0 And strTabURLUpper<>"" Then
		nPos = InStr(strTabURLUpper, "?")
		If nPos > 0 Then
			strTabURLUpper = Left(strTabURLUpper, nPos - 1)
		End If
		strScriptUpper = UCase(strScriptName)
		If strTabURLUpper <> strScriptUpper Then
			CanBack = True
			If InStr(strScriptUpper, "/") = 0 Then
				' Может быть strScriptName="emUsers.asp", а arrTabURLs(TI)="/asp/educ_manager/emUsers.asp"
				CanBack = (Right(strTabURLUpper, Len(strScriptUpper) + 1) <> ("/" & strScriptUpper))
			End If
		End If
	End If
End Function

' Для Screen1 - по умолчанию и в основном определён тип stNormal. Но может быть и тип stSimple (для интерфейсов админа сервера и Упр. обр.).
' Считается, что для stNormal - есть LeftMenu, для stSimple - нет. Это проявляется также в Screen.asp - там background для stNormal ориентирован на LeftMenu.
' В ф-ции OnDrawPageBody для этих типов реализованы немного разные отрисовки.
Sub OnDrawPageBody()
	Dim lngScreenType

	nCurrTheme = obTokenMgr.GetData( strToken, stCurrTheme )
	lngScreenType = GetScreenType()

	Call DrawHeader()%>

	<div class="block-content">
		<%=ShowAnchor(IIF(CanBack,"goCommonBack()","void(0)"), obLanguage("Common","kBack"), "<span class=""icon-signout""></span>", "class=""back" & IIF(CanBack,""," active") & """" )%>
		<h1 class="title"><%=GetPageCrumbs()%> <%=GetPageTitle()%></h1>

		<%Call DrawHeaderButtons()%>

		<!--content-->
		<div class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<%Call DrawAppLoader() %>
						<%Call onDrawPageWrap()%>
					</div>
				</div>
			</div>
		</div>
		<!--content-->
		<div class="height-footer-empty"></div>
	</div>

	<%
	Call DrawMenuForm
End Sub

Sub DrawAppLoader
	%>
	<div class="apploader">
		<div class="placeholder">
			<span class="arrows"></span>
			<span class="title">Пожалуйста, подождите...</span>
		</div>
	</div>
	<%
End Sub

Function GetPageCrumbs()
	Dim strTabURL, name
	GetPageCrumbs = ""
	
	strTabURL = objContextComponent.GetUrlSelectebTabItem()
	name = objContextComponent.GetSelectedTabItem().Name
	If InStrRev( LCase(strScriptName), LCase(strTabURL)) > 0 or IsDull(strTabURL) or IsDull(name) Then
		Exit Function
	End If
	GetPageCrumbs = ShowAnchor( "SetSelectedTab(" & TI & ",'" & strTabURL & "')", "", name, "" ) & "<span class=""title-delim"">/</span>"
End Function

Function GetUserName()
	If bIsAdminInterface Then
		GetUserName = obLanguage("ServAdmin","kSAName")
	Else
		GetUserName = strUserName
	End If
End Function

Sub DrawHeader()
	Dim bIsEMForSchool_TM ' #23965

	bIsEMForSchool_TM = GetSafeBool(obTokenMgr.GetData(strToken, "IsEMForSchool"), False)
	%>
	<div class="header">

		<!--блок правая половина "шапки"-->
		<div class="block-personal-cabinet">
			<div class="number-employees-in-system hidden-scr-sm hidden-scr-xs">
				<p><%Call onCurrentDate()%> - <%=obLanguage("Common","kWorkingInSystem")%> <span class="number-employees-span" id="WorkingInSystemCnt"><%=onCurrentWorkingUsers()%></span>
					<a href="#" type="button" onclick="UpdateWorkInSystemCnt()" title="<%=obLanguage("Common","kCBUpdateWrkCnt")%>" >
						<span class="glyphicon glyphicon-user"></span>
						<span class="glyphicon glyphicon-user"></span>
					</a>
				</p>
			</div>
			<ul class="pull-right">
				<%Call onCurrentYear()
				If bIsAdminInterface Or bIsEMForSchool_TM Then%>
					<li class="separator_small"><a><span class="glyphicon glyphicon-user"></span><span class="hidden-scr-sm"><%=DB2HTML(GetUserName())%></span></a></li>
				<%Else%>
					<li class="separator_small"><a href="JavaScript:openPersonalSettings()"><span class="glyphicon glyphicon-user" title="<%=obLanguage("MenuFolders","kMySettings")%>"></span><span class="hidden-scr-sm" title="<%=obLanguage("MenuFolders","kMySettings")%>"><%=DB2HTML(GetUserName())%></span></a></li>
				<%End If%>
				<li class="no_separator"><a href="JavaScript:Logout(true);"><span class="icon-off" title="<%=obLanguage("Common","kExit")%>"></span><span class="hidden-scr-sm"><%=obLanguage("Common","kExit")%></span></a></li>
			</ul>
		</div>

		<!--логотип-->
		<div class="block-logo">
			<a class="logo <%=GetLogoClass()%>" href="#"></a>
			<p class="title_product"><%=NETSCHOOL_PRODUCT_NAME%></p>
			<p class="school" title="<%=obLanguage("SchoolInfo","kTitleSchoolInfoCard")%>" onclick="openSchoolInfo(<%=strSchoolID%>, <%=Bool2Js(CLng(kFuncType_PreSchool) = CLng(strFunctionalityType))%>, <%=Bool2Js(CLng(kFuncType_Add) = CLng(strFunctionalityType))%>, <%=Bool2Js(CLng(kFuncType_Orphanage) = CLng(strFunctionalityType))%>)" style="cursor: pointer;">
				<% Call onCurrentSchool() %>
			</p>
		</div>

		<%If GetScreenType() = stNormal Then%>
			<%Call DrawLeftMenu()%>

			<div class="slide-menu-left">&nbsp;</div>
			<div class="slide-menu-right">&nbsp;</div>
		<%End If%>
	</div>
	<%
End Sub

Function GetLogoClass
	GetLogoClass = "logo-" & GetScreenScheme()
End Function

Sub onCurrentYear()
	Dim objYearComponent, getYearResult, classSwitchButton
	
	Dim strTabStyle, strTabClasses, strTabText

	If bIsEducManager Or bIsAdminInterface Then
		Exit Sub
	End If

	%><li class="switch-year-text hidden-scr-xs"><p><span class="hidden-scr-sm"><%=LCase(IIF(bFutureMode, obLanguage("Common", "kFuture"), obLanguage("Common", "kCurrent")))%> </span><%=DB2HTML( obTokenMgr.GetData( strToken, "CurrYearName" ) )%> <span class="hidden-scr-sm"><%=obLanguage("Common", "kShortSchoolYear")%></span></p></li><%
End Sub

Sub DrawSwitchYear()
	Dim futureYear, strYearId
	Dim objYearComponent, getYearResult, classSwitchButton
	Set objYearComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.ISchoolYearComponent")
	Set getYearResult = objYearComponent.GetFutureYear(strSchoolId)
	TestResult getYearResult, obLanguage("Common","kUnexpErr")

	Set futureYear = getYearResult.Data
	If Not bFutureMode Then classSwitchButton = "go_left"

	strYearId = IIF(bFutureMode,strSchoolYearID,CStr(futureYear.Id))

	%>
	<div class="switch-year" ng-show="showYearsTab()">
		<button class="switch-year-btn <%=classSwitchButton%>" ng-click="changeYear(<%=strYearId%>); $event.stopPropagation()" onclick="changeYear(<%=strYearId%>);">
			<div id="flip_container">
				<div id="current">В <%=LCase(obLanguage("Common", "kCurrent")) & " " & obLanguage("Common","kShortSchoolYear")%></div><div class="lever-switch"><span></span></div><div id="future">В <%=LCase(obLanguage("Common", "kFuture")) & " " & obLanguage("Common","kShortSchoolYear")%></div>
			</div>
		</button>
	</div><%
End Sub

Sub DrawParentStudents()
	'это заглушка. перекрывается в экранах где есть выбор ребенка в родительском интерфейсе
End Sub

Sub DrawParentStudentsMobile()
	'это заглушка. перекрывается в экранах где есть выбор ребенка в родительском интерфейсе
End Sub

Sub DrawHeaderButtons()
	Dim bIsWorkConnection
	Dim bDrawMail, bDrawForum, bShowAnnouncements, bDrawHelp, bShowChats
	Dim bMessageInBox, nMsgCount

	bIsWorkConnection = objNSNET.IsWorkConnection()
	bDrawMail = HasUserRight(arMessagesSendReceive) And bIsSchool And bIsWorkConnection Or bIsEducManager
	bDrawForum = HasUserRight(arForumSendReceive) And bIsWorkConnection
	bShowAnnouncements = HasUserAnyRights(Array(arAnnouncementView, arAnnouncementPost)) And bIsWorkConnection
	bDrawHelp = isHelpAvailable() And Not bIsAdminInterface
	bShowChats = obContext.ServerSettings.SystemSettings.ModuleChats And bIsSchool And bIsWorkConnection%>
		<!--мини-меню, расположенное в правой части главного заголовка 1-->
		<ul class="top-right-menu">

			<%
			If HasUserRole(rlParent) Then
				Call DrawParentStudents()
			End If

			If bShowChats Then
				%><li><%=ShowAnchor ("ShowChats()", "Чаты", "<span class=""cb-chats""></span>", "style=""margin-top: 0px;""")%></li><%
			End If

			If bShowAnnouncements Then
				%><li><%=ShowAnchor ("ShowAnnouncements()", obLanguage("MenuFolders","kAnnouncements"), "<span class=""cb-announcements""></span>", "style=""margin-top: 0px;""")%></li><%
			End If

			If bDrawMail Then
				Dim strInnerHtml
				
				nMsgCount = objNSNET.GetNumberOfNewMessages(strUserID, bxInbox)

				strInnerHtml = "<span class=""cb-mail mail"">"
				If nMsgCount > 0 Then strInnerHtml = strInnerHtml & "<span class=""numberMail"" title=""" & nMsgCount & """>" & nMsgCount & "</span>"
				strInnerHtml = strInnerHtml & "</span>"

				%><li><%=ShowAnchor("sys.mail.inbox()", obLanguage("Common","kCBMail"), strInnerHtml, "")%></li><%
			End If
			If bDrawForum Then 
				%><li><%=ShowAnchor ("ShowForum()", obLanguage("Common","kCBForum"), "<span class=""cb-forum""></span>", "style=""font-size: 26px; margin-top: -2px;""")%></li><%
			End If
			If bDrawHelp Then
				%><li><%=ShowAnchor ("ShowHelp()", obLanguage("Common","kCBHelp"), "<span class=""cb-help""></span>", "")%></li><%
			End If%>
		</ul>
	<%
	If HasUserRole(rlParent) Then
		Call DrawParentStudentsMobile()
	End If 
End Sub

Sub DrawMenuForm()%>
	<form NAME="MenuForm" method="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array( "MenuItem", currMenuItemId, "TabItem", currTabItemId, "optional", "optional" ) ) %>
	</form><%
End Sub%>
