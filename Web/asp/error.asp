<!-- #INCLUDE FILE=headersimple_PopupNo_AuthNo.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.
Dim strToken, strSchoolID, strCurrGlobalYearId
Dim bIsEducManager, bIsAdminInterface, strFunctionalityType, readonly
Dim strFormMethod

Dim bHtmlError, strDestPage, strErrorText, strLogoutPage

Response.Buffer = True
readonly = False

Function GetPageTitle()
	GetPageTitle = GetSafeStr(DB2HTML(Request("PT")), -1, obLanguage("Common","kErrorMsg"))
End Function

Function ReadError(strErrorId)
	Dim objCacheComponent, cache
	Set objCacheComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ICacheComponent")

	If Not objCacheComponent.Exists("error:" & strErrorId) Then
		Set cache = Server.CreateObject("NetCity.Storage")
		cache("ET") = obLanguage("ServAdmin", "kUnknownError")
		Set ReadError = cache
	Else 
		Set ReadError = objCacheComponent.Get("error:" & strErrorId) 
		Call objCacheComponent.Remove("error:" & strErrorId)
	End If
End Function

Sub ReadState()
	Dim oParamsStorage, bErrorTextInSession
	Dim strErrorId
	Dim error
	Dim nsSessionStorage
	Dim nsSessionFlag

	strLogoutPage = "/asp/logout.asp"
	If kLoginPage = "/authorize" Or kLoginPage = "/login" Then
		strLogoutPage = "/webapi/auth/logout"
	End If

	Set nsSessionStorage = GetNsSessionStorage()
	strErrorId = GetSafeStr(Request("ERRID"), -1, "")
	If Not IsDull(strErrorId) And Not IsEmpty(strErrorId) Then
		Set oParamsStorage = ReadError(DB2HTML(strErrorId))
	ElseIf Not IsEmpty(nsSessionStorage) And IsObject(nsSessionStorage) Then
		'Подробности ошибки в сессии пользователя (в рамках рабочего процесса)
		If Not IsDull(nsSessionStorage("ET")) Then
			Set oParamsStorage = nsSessionStorage
			nsSessionFlag = True
		End If
	End If
	If IsEmpty(oParamsStorage) Then
		'Подробности ошибки в запросе
		Set oParamsStorage = Request
	End if

	strToken = oParamsStorage("AT")
	strFormMethod = "get"
	bErrorTextInSession = (oParamsStorage("TOK") = "YES")

	If bErrorTextInSession Then 
		strErrorText = CStr(obTokenMgr.GetData(strToken, stHTMLError)) 
	Else 
		strErrorText = oParamsStorage("ET")
		If nsSessionFlag Then
			oParamsStorage.Remove("ET")
		End If
	End If

	strDestPage = GetSafeStr(oParamsStorage("DEST"),-1, "")
	If InStr(strDestPage, "angular") > -1 Then
		strFormMethod = "post"
	End If
	If strDestPage = "" Then strDestPage = GetSafeStr(oParamsStorage("PR"),-1, "")

	bHtmlError = (oParamsStorage("HTML") = "YES") 
End Sub

Sub onDrawPage()%>
	<form name="MenuForm" method="<%=strFormMethod%>"><%=WriteObligatoryTags()%></form>
	<script>
		function Back() {
			let backPage = "<%=EscapeTags(DB2Java(strDestPage))%>";
			if(backPage.endsWith(".html")){
				window.location.href = backPage;
			}
			else{
				goBack(document.MenuForm, backPage);
			}
		}
	</script><%
	If bHtmlError Then'показ html сообщения об ошибке
		OpenBtnGroup
			If strDestPage <> "" Then
				ButtonCancel "Back()", obLanguage("Common","kBack")
			End If
			ButtonExit "bNewWindow=false; Logout();", obLanguage("Common","kExit")
		CloseBtnGroup%>

		<div class="row">
			<div class="col-md-12 font-lg">
				<%Call DrawMessage(DB2HTML_BR(strErrorText), "danger", False)%>
			</div>
		</div>
		<%If strDestPage <> "" Then%>
			<script>
				isHaveToLogout = true; bNewWindow = true;
				function Logout() {
					if(bNewWindow) document.MenuForm.target ="_blank";
					document.MenuForm.action = "<%=strLogoutPage%>";
					document.MenuForm.submit();
				}
			</script>
		<%End If
	Else
		'показ ошибки во всплывающем окне%>
		<script>
			$(document).ready(function(){
				isHaveToLogout = false;
				var opts = { close: _errorCallBack };
				var text = "<%=DB2Value(DB2Java(strErrorText))%>";

				if (text.length > 500) {
					opts.width = 600;
				}

				function _errorCallBack() {
					<%If strDestPage = "" Then%>
						history.go(-1);
					<%ElseIf comHelper.AspHelper.IsAbsoluteUrl(strDestPage) Then%>
						history.go(-1);
					<%Else%>
						Back();
					<%End If%>
				}

				$.show.error(text).then(_errorCallBack);
			});
		</script><%
	End If
End Sub

Function NSNow()
End Function%>