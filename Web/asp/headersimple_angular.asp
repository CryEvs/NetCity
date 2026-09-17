<!-- #INCLUDE FILE="headersimple.asp" -->
<!-- #INCLUDE FILE="../angular_inc.asp" -->

<% ' © 2007-2019 IRTech. All rights reserved.

Dim bIsMobileApp

Function GetScreenType()
	GetScreenType = stSimple
End Function

Sub SetViewPort
	If strModule = "mobile" Then
		%><meta name="viewport" content="width=600"><%
	Else
		%><meta name="viewport" content="width=device-width, initial-scale=1.0"><%
	End If
End Sub

Sub ReadState
	strAngularUrlSegment = "app/simple"
End Sub

Sub MainSpec
	bIsMobileApp = (strModule = "mobile")
End Sub

Sub OnDrawPageBody()
	'копия OnDrawPageBody из screensimple.asp.
	'для bIsMobileApp - выключено отображение шапки и прочего

	If bIsMobileApp Then
		%><app-component></app-component><%
		Call DrawRefreshForm
		Exit Sub
	End If

	If isDrawHeader() Then
		If Not IsDull(strSchoolID) Then
			%>
			<div class="header">
				<!--блок правая половина "шапки"-->
				<!--логотип-->
				<div class="block-logo">
					<a class="logo logo-<%=GetScreenScheme()%>" href="#"></a>
					<p class="title_product"><%=NETSCHOOL_PRODUCT_NAME%></p>
					<p class="school"><% Call onCurrentSchool() %>.<%=IIF(strSchoolYearID<>0, " "&obLanguage("Common","kSchoolYear")&" "&DB2HTML( strSchoolYearName ) & ".","")%></p>
				</div>
				<div class="slide-menu-left">&nbsp;</div>
				<div class="slide-menu-right">&nbsp;</div>
			</div>
			<%
		End If
	End If
	%>
	<div class="block-content">
		<%ShowBack%>
		<h1 class="title"><%=GetPageTitle()%></h1>
		<ul class="top-right-menu">
			<%If isHelpAvailable() Then%>
				<li><a href="JavaScript:ShowHelp();"><span class="icon-question-sign"></span></a></li>
			<%End If %>
		</ul>
		<div class="content">
			<div class="container-fluid">
				<%Call DrawAppLoader() %>
				<%Call onDrawPageWrap()%>
			</div>
		</div>
	</div><%
End Sub

Function WithPageFooter
	WithPageFooter = Not bIsMobileApp
End Function

Function CanBack()
	CanBack = True
End Function

Function GetPageTitle()
	GetPageTitle = ""
End Function

Function isDrawHeader()
	If strModule = "wizard" Then
		isDrawHeader = True
	End If
End Function

Function GetPageCrumbs()
	GetPageCrumbs = ""
End Function

Sub WritePostScripts
	Call scriptCalendarCommon()
	Call WriteAngularBundleScripts()
	Call WriteAngularScripts()
	
	If bIsMobileApp Then
		Call WriteAngularBootstrapMobile
	Else 
		Call WriteAngularBootstrap		
	End If

	Call WriteAngularScripts2()

	If strAppPath <> "em/statreports" Then
		'почему-то не работает с WPT
		%><script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script><%
	End If

	Call WritePostModuleDependencies

	%><div id="modals-holder"></div><%
End Sub

Sub WriteAngularBootstrapMobile()
	%>
	<script type="text/javascript">
		$(function () {
			var module = "<%=strAppModule%>";
			window.route = "<%=strRoute%>";

			angular.bootstrap(angular.element("body"), [module]);
		});

	</script>
	<%
End Sub

Sub DrawRefreshForm
	%>
	<div>
		<form name="refreshfix" method="post" class="hidden">
			<input type="hidden" name="at" value="<%=strToken%>"/>
			<input type="hidden" name="baseurl" value="<%=strAppPath%>"/>
			<input type="hidden" name="route" value="<%=strRoute%>"/>
			<input type="hidden" name="search"/>
			<input type="hidden" name="TabItem" value=""/>
		</form>
		<div ng-view autoscroll="true" id="view"></div>
	</div>
	<%
End Sub


%>