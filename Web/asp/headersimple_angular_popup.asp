<!-- #INCLUDE FILE="headersimplepopup.asp" -->
<!-- #INCLUDE FILE="../angular_inc.asp" -->

<% ' © 2007-2019 IRTech. All rights reserved.

Function GetScreenType()
	GetScreenType = stSimple
End Function

Sub ReadState
	strAngularUrlSegment = "app/popup"
End Sub

Function CanBack()
	CanBack = True
End Function

Function GetPageTitle()
	GetPageTitle = ""
End Function

Function GetPageCrumbs()
	GetPageCrumbs = ""
End Function

Sub WritePostScripts
	Call WriteAngularBundleScripts()
	Call WriteAngularScripts()
	
	Call WriteAngularBootstrap()
	Call WriteAngularScripts2()

	If strAppPath <> "em/statreports" Then
		'почему-то не работает с WPT
		%><script src="<%=GetVersionedResLink("/js/fileUpload-bundle.js")%>" type="text/javascript"></script><%
	End If
	%><div id="modals-holder"></div><%
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