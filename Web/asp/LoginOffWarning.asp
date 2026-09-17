<!-- #INCLUDE FILE="headersimple.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Dim strBackPage, nextPage, strGoBackEvent, strGoNextEvent

Function GetPageTitle()
	GetPageTitle = obContext.ServerSettings.UserAuthorizationSettings.NoticeTitle
End Function

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnter(event);"
End Function

Sub ReadState()
	Call GetScreenType()
	Call MarkEntryPage(strScriptName)
	nextPage = IdentifyNextPage()
End Sub

Sub Main()
End Sub

Sub WriteState()
	If Not IsDull(nextPage) Then
		Call obTokenMgr.SetData(strToken, stNextPage, nextPage)
	End If
End Sub

Sub onHead()%>
<script>
<!--
function doContinue()
{
	var form = document.forms[0];
	DoSubmit(form,'');
}
//-->
</script><%
End Sub

Sub onDrawPage()%>
	<div class="row">
		<div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
			<form name="LoginOffInfo" method="POST" ACTION="<%=nextPage%>">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("WorkPage", nextPage))%>
				<div class="row">
					<div class="col-md-12">
						<%DrawWarning obContext.ServerSettings.UserAuthorizationSettings.NoticeDisplayText%>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-center">
						<%ButtonContinue "doContinue();", obLanguage("Login","kBtnContinue") %>
					</div>
				</div>
			</form>
		</div>
	</div>
<%End Sub%>
