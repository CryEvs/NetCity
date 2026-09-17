<% ' © 2007-2015 IRTech. All rights reserved.

Dim currMenuItem, TI, strScriptName
strScriptName = Request.ServerVariables("SCRIPT_NAME")
strScriptName = Replace(strScriptName, "/asp/asp", "/asp")

%>
<!-- #INCLUDE FILE=Screen.asp -->
<!-- #INCLUDE FILE=ScreenNonPrint.asp -->
<%

Function GetScreenType()
	If CheckIsAjaxCall() Then
		GetScreenType = stAjax
	Else
		GetScreenType = stSimple
	End If
End Function

Function isDrawHeader()
End Function

Sub onDrawHead()
	Call InitJsAppContext()
	Call onHeadNonPrint()
	Call onHead()
End Sub

Sub onHeadSpecialAdd()
	Response.write "&nbsp;"
End Sub

Function CanBack()
	CanBack = True
End Function

Sub ShowBack()
	rw ShowAnchor(IIF(CanBack,"goCommonBack()","void(0)"), obLanguage("Common","kBack"), "<span class=""icon-signout""></span>", "class=""back" & IIF(CanBack,""," active") & """" )
End Sub

Sub OnDrawPageBody()
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

Sub DrawAppLoader
	%>
	<div class="apploader">
		<div class="placeholder">
			<span class="arrows"></span>
			<span class="title"><%=obLanguage("Movement","kPleaseWait")%></span>
		</div>
	</div>
	<%
End Sub
%>