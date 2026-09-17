<!-- #INCLUDE FILE="asp/header1.asp" -->
<!-- #INCLUDE FILE="angular_inc.asp" -->

<% ' © 2007-2019 IRTech. All rights reserved.

Dim nTabItem, nMenuItem

Function GetScreenType()
	bTabInternalPage = False
	GetScreenType = stNormal
End Function

Sub ReadState
	nMenuItem = GetSafeLng(Request("MenuItem"), 0)
	nTabItem = GetSafeLng(Request("TabItem"), 0)
	strAngularUrlSegment = "angular"
End Sub

Function GetPageTitle()
	GetPageTitle = ""
End Function

Function GetPageCrumbs()
	GetPageCrumbs = ""
End Function

Sub InitMenuPosition()
	Dim pageMenuItem, requestMenuItem, pageTabItem, requestTabItem

	pageTabItem = 0
	requestTabItem = GetSafeLng(Request("TabItem"), 0)

	'на angular страницах menuitem заранее неизвестен. вычисляем по tabitem из запроса
	pageMenuItem = -1
	requestMenuItem = GetSafeLng( Request("MenuItem"), 0)

	Call objContextComponent.InitMenu(pageMenuItem, requestMenuItem, pageTabItem, requestTabItem)
	currMenuItemId = objContextComponent.GetSelectedMenuItem().Id
	currTabItemId = objContextComponent.GetSelectedTabItem().Id

	TI = currTabItemId
End Sub

Function GetPageTitle()
	GetPageTitle = objContextComponent.GetSelectedTabItem().Name
End Function

Function GetPageCrumbs()
	GetPageCrumbs = ""
End Function

Sub DrawParentStudents()
	'здесь отрисовывается шаблон контрола для выбора детей в родительском интерфейсе
	'модель описывается в netcityController.js
	%>
	<parent-students-list></parent-students-list>
	<%
End Sub

Sub DrawParentStudentsMobile()
	%>
	<parent-students-list mobile="true"></parent-students-list>
	<%
End Sub

Sub onHeadSpec()
	Call WriteHeadModuleDependencies
End Sub

Sub WritePostScripts
	If strAppPath <> "em/statreports" Then
		'почему-то не работает с WPT
		Call scriptCalendarCommon()
	End If
	%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/portfolio/css/portfolio.min.css")%>">

	<%Call WriteAngularBundleScripts()%>
	<%Call WriteAngularScripts()%>
	<%Call WriteAngularBootstrap()%>
	<script type="text/javascript">
		context.tabItem = <%=nTabItem %>;
		context.menuItem = <%=nMenuItem %>;
	</script>
	<%Call WriteAngularScripts2()%>

	<%
	If strAppPath <> "em/statreports" Then
		'почему-то не работает с WPT
		%><script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script><%
	End If

	Call WritePostModuleDependencies
	
	%><div id="modals-holder"></div><%
	
End Sub

Sub OnDrawPageBody()
	Dim objSettings, bShowSferumBanner

	If bDrawByAngular Then
		%>
		<app-component>
			<%DrawAppLoader%>
		</app-component>
		<%
		Exit Sub
	End If

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

				<sferum-banner></sferum-banner>

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
%>