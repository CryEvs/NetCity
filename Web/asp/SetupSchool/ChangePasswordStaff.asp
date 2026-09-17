<!-- #INCLUDE VIRTUAL="/asp/headersimple.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strEditUserID, bUserEditHimself
Dim strLogin, strLastName, strFirstName, strMiddleName
Dim serverSettings
Dim nPWDExpired
Dim bSSOLogin
Dim strNextPage
Dim bSafe

Function GetPageTitle()
	If nPWDExpired = 1 Then
		GetPageTitle = obLanguage("Common", "kHaveToChangePWD_1")
	Else
		GetPageTitle = obLanguage("Common", "kHaveToChangePWD")
	End If
End Function

Function isDrawHeader()
	isDrawHeader = True
End Function

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnter(event);"
End Function

Sub ReadState()
	Dim objSettings

	strEditUserID = GetSafeID(Request("UID"), GetSafeID(obTokenMgr.GetData(strToken, stUsersStaffUserID), strUserID))

	Call obTokenMgr.SetData(strToken, stUsersStaffUserID, strEditUserID)
	bUserEditHimself = True
	
	nPWDExpired = 0

	Set objSettings = objNSNET.GetUserSettings(strUserID)
	nPWDExpired = GetSafeLng(objSettings.PasswordExpired, 0) = 1

	' strScriptName приходит пустой для администратора сервера и УО
	If bIsEducManager Or bIsAdminInterface Then
		strScriptName = Request.ServerVariables("SCRIPT_NAME")
	End If

	bSSOLogin = (GetSafeLng(obTokenMgr.GetData(strToken, stSingleSignOnLogin), 0) = 1)
	Call MarkEntryPage(strScriptName)
	strNextPage = IdentifyNextPage()

	bSafe = objNSNET.GetUserWithSafe(strUserID, strSchoolID, strEmID)
End Sub

Sub Main()
	Dim objInfo
	Dim obComponent, getSettingsRes

	Set objInfo = objNSNET.GetUserInfo(strEditUserID)
	strLogin		= ""
	strLastName		= ""
	strFirstName	= ""
	strMiddleName	= ""

	If Not objInfo.EOF Then
		strLogin		= DB2Java(UCase(objInfo("LOGINNAME")))
		strLastName		= DB2Java(UCase(objInfo("LASTNAME")))
		strFirstName	= DB2Java(UCase(objInfo("FIRSTNAME")))
		'проверить, если нет отчества
		strMiddleName	= DB2Java(GetSafeStr(UCase(objInfo("MIDDLENAME")), -1, ""))
	End If

	Set obComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IServerSettingsComponent")
	Set getSettingsRes = obComponent.GetServerSettings()
	TestResult getSettingsRes, Null

	Set serverSettings = getSettingsRes.Data
End Sub

Sub onHead()%>
	<script src="<%=GetVersionedResLink("/static/dist/pages/users/js/changePassword.js")%>" type="text/javascript"></script>
	<script type="text/javascript">
		var changePasswordCtrl = new changePasswordCtrl({ userEditHimself: true, minPasswordLength: <%=obContext.ServerSettings.SecuritySettings.MinPasswordLength%>, userId: <%=strUserID%>});
		isHaveToLogout = true;
		bNewWindow = true;

		function saveChanges() {
			var params = {
				loginName:	'<%=strLogin%>',
				lastName:	'<%=strLastName%>',
				firstName:	'<%=strFirstName%>',
				middleName: '<%=strMiddleName%>',

				restrictNumericPasswords: <%=Bool2Js(serverSettings.SecuritySettings.RestrictNumericPasswords)%>,
				inputOldPass: $('input[name=OP]'),
				inputOldPass2: $('input[name="OP2"]'),
				inputNewPass: $('input[name=NP]'),
				inputConfirmPass: $('input[name=NP2]'),
				inputNewPass3: $('input[name="NP3"]')
			};

			if(!changePasswordCtrl.canChangePassword(params)) {
				return;
			}

			$('input[name=OP]', document.ChangePassword).attr("disabled", "disabled");
			$('input[name=NP]', document.ChangePassword).attr("disabled", "disabled");
			$('input[name=NP2]', document.ChangePassword).attr("disabled", "disabled");

			jsSubmit({
				action: '/asp/ajax/ChangePassword.asp',
				form: document.ChangePassword,
				onSuccess: function(response) {
					alert(response.message).then(function() {
						DoSubmit(document.ChangePassword, "<%=strNextPage%>");
					});
				},
				onError: function () {
					$('input[name=OP]', document.ChangePassword).prop("disabled", false);
					$('input[name=NP]', document.ChangePassword).prop("disabled", false);
					$('input[name=NP2]', document.ChangePassword).prop("disabled", false);
				},
			});
		}

		function CheckEnter(event){ if (event.keyCode == 13) saveChanges(); }
	</script>

	<%
End Sub

Sub DrawButtons
	ButtonExit "postTo('/asp/logout.asp')", obLanguage("Common","kExit")
	Call ButtonSave("saveChanges();", obLanguage("Common","kbtnSavePassword"))
	If bSSOLogin And Not bSafe Then Call Button( "postTo('" & strNextPage & "')", obLanguage("Common","kSkip"), obLanguage("Common","kSkip"), "")
End Sub

Sub onDrawPage()%>
	<div class="container">
		<form name="ChangePassword" method="POST" action="ChangePasswordStaff.asp" class="form-horizontal" onsubmit="return false;">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags(Array("userId", strEditUserID, "NP3", "", "OP2", "", "NextPage", strNextPage, "act", "save"))%><%

			SetFiltersWidth "", "col-md-3", "col-md-9"

			DrawTitleRow obLanguage("Common","kUser"), objNSNET.GetUserNickName(strEditUserID)

			If bUserEditHimself Then
				Call DrawInputRowEx(obLanguage("Common","kCurrPassword"), "", "OP", "password", 15, kMaxPassword, obLanguage("Common","kEnterCurrPassword"), "autofocus")
			End If

			Call DrawInputRowEx(obLanguage("Common","kNewPassword"), "", "NP", "password", 15, kMaxPassword, IIF(bUserEditHimself, obLanguage("Common","kCreateNewPassword"), ""), IIF(bUserEditHimself, "", "autofocus"))
			Call DrawInputRow(obLanguage("Common","kConfirmPassword"), "", "NP2", "password", 15, kMaxPassword, "")%>
		</form>

		<div>
			<%Call DrawButtonPanel()%>
		</div>
	</div><%
End Sub%>