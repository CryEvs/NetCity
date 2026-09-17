<!-- #INCLUDE FILE="../headersimple.asp" -->
<!-- #INCLUDE FILE="PasswordRecovery_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strBackPage, nextPage, strGoBackEvent, strGoNextEvent

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kSetSecretQuestionAndAnswer") & GreenText(objNSNET.GetUserNickName(strUserID))
End Function

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnter(event);"
End Function

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Sub ReadState()
	Call MarkEntryPage(strScriptName)
	nextPage = IdentifyNextPage()
	Call InitButtonEventParameters()
End Sub

Sub Main()
End Sub

Sub InitButtonEventParameters()
	strBackPage = "/asp/logout.asp"
	strGoBackEvent = "goBack( document.SaveRecoveryPasswordInfo, '"&strBackPage&"' )"
	strGoNextEvent = "goBack( document.SaveRecoveryPasswordInfo, '"&nextPage&"' )"
End Sub

Sub WriteState()
	If Not IsDull(nextPage) Then
		Call obTokenMgr.SetData(strToken, stNextPage, nextPage)
	End If
End Sub

Sub onHead()%>
	<script>
		$(document).ready(function () {
			$("[name=RecoveryQuestion]").parent().parent().hide();
		});

		function Back() {
			goBack( document.SaveRecoveryPasswordInfo, '<%=strBackPage%>');
		}
	</script>
	<script language="JavaScript" src="/asp/md5r.min.js"></script>
	<script language="JavaScript" src="/js/PasswordRecovery.js"></script><%
End Sub

Sub onDrawPage()%>
	<div class="container">
		<form name="SaveRecoveryPasswordInfo" method="POST" class="form form-horizontal" action="/asp/SavePasswordRecoveryInfo.asp" onsubmit="return false;">
			<%=WriteObligatoryTags()%><% 

			SetFiltersWidth "", "col-md-3", "col-md-9"
			Call DrawQuestionsSelect()
			Call DrawCustomQuestionInput()
			Call DrawAnswerInput()
			DrawInfo obLanguage("SetupSchool","kRecoveryHelpMessage"), False%>
		</form>

		<div><%
			OpenBtnGroup
				Call ButtonSave("saveChanges();", obLanguage("Common","kbtnSavePassword"))
				Call ButtonContinue(strGoNextEvent, obLanguage("Buttons","kContinue"))
			CloseBtnGroup%>
		</div>
	</div><%
End Sub%>