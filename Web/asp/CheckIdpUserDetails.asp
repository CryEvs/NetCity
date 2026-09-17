<!-- #INCLUDE VIRTUAL=/asp/headersimple.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strWorkPage, obSecurityComponent, idpUserDetails
Dim strIdpSnils, strIdpMobilePhone, strIdpEmail
Dim strIdpTitle

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kCopyInfoFromAccountIdentityProvider").Format( Array(strIdpTitle) )
End Function

Sub ReadState()
	Call MarkEntryPage(strScriptName)
	strWorkPage = IdentifyNextPage()
	strIdpTitle = GetSafeStr( Request("IdpTitle"), -1, Session("IdpTitle") )
End Sub

Sub WriteState()
	If Not IsDull(strWorkPage) Then
		Call obTokenMgr.SetData(strToken, stNextPage, strWorkPage)
	End If
End Sub

Sub Main()
	Dim strIdpFio, strFio
	Dim strSGOUserSnils, strSGOUserMobilePhone, strSGOEMail

	If bIsEducManager Then
		RedirectTo strWorkPage, Null
	End If

	Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	Set idpUserDetails = obSecurityComponent.GetIdpUserSessionDetails()

	' ФИО пользователя в провайдере идентификации
	strIdpFio = GetSafeStrParam(idpUserDetails("IDPFIO"), "")
	' ФИО пользователя СГО
	strFio = GetSafeStrParam(idpUserDetails("FIO"), "")

	' Получение параметров пользователя из провайдера идентификации
	strIdpSnils = GetSafeStrParam(idpUserDetails("SNILS"), "")
	strIdpMobilePhone = GetSafeStrParam(idpUserDetails("PHONE"), "")
	strIdpEmail = GetSafeStrParam(idpUserDetails("EMAIL"), "")

	' Получение параметров пользователя СГО
	strSGOUserSnils = GetSafeStrParam(objNSNET.GetSnilsForUser(strUserId, bIsStaff), "")
	strSGOUserMobilePhone = GetSafeStrParam(objNSNET.GetMobilePhoneForUser(strUserId), "")
	strSGOEMail = GetSafeStrParam(objNSNET.GetEMailForUser(strUserId), "")

	If ( strIdpFio <> strFio ) Or (IsDull(strIdpSnils) And IsDull(strIdpMobilePhone) And IsDull(strIdpEmail) ) Or ( strIdpSnils = strSGOUserSnils And strIdpMobilePhone = strSGOUserMobilePhone And strIdpEmail = strSGOEMail) Then 
		RedirectTo strWorkPage, Null
	End If
End Sub

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnterOrF5(event);"
End Function

Sub onHead()%>
	<script>
		var workPage = '<%=strWorkPage%>';
		$(document).ready(function() {
			$('input[type="checkbox"]').prop( "checked", true );
		})

		function save() {
			ok_check_db('SaveIdpUserInfo', '');
		}

		function doContinue() {
			postTo(workPage);
		}

		function CheckEnterOrF5(event) {
			if (event.keyCode == 13 || event.keyCode == 116) {
				doContinue();
			}
		}
	</script><%
End Sub

Sub onDrawPage()%>
	<div class="container">
		<form method="POST" action="/asp/SaveIdpUserInfo.asp" class="form form-horizontal" name="SaveIdpUserInfo" onsubmit="return false;">
			<%=WriteObligatoryTags()%>
			<div class="row">
				<div class="col-md-12"><%
					Call SetFiltersWidth("col-md-6 col-lg-6 col-sm-12", "col-md-4 col-lg-3 col-sm-4", "col-md-8 col-lg-9 col-sm-8")

					If Not IsDull(strIdpSnils) Then
						OpenFormGroup obLanguage("Common", "kSnils")%>
							<div class="input-group"><%
								DrawInput strIdpSnils, "SNILS", "text", "", 47, 39, "readonly=""readonly"""%>
								<span class="input-group-addon"><input type="checkbox" name="SN" disabled></span>
							</div><%
						CloseFormGroup
					End If

					If Not IsDull(strIdpMobilePhone) Then
						OpenFormGroup obLanguage("Common", "kMobilePhone")%>
							<div class="input-group"><%
								DrawInput strIdpMobilePhone, "MOBILEPHONE", "text", "", 47, 39, "readonly=""readonly"""%>
								<span class="input-group-addon"><input type="checkbox" name="MP"></span>
							</div><%
						CloseFormGroup
					End If

					If Not IsDull(strIdpEmail) Then
						OpenFormGroup obLanguage("Import","kEMail")%>
							<div class="input-group"><%
								DrawInput strIdpEmail, "EMAIL", "text", "", 47, 39, "readonly=""readonly"""%>
								<span class="input-group-addon"><input type="checkbox" name="EM"></span>
							</div><%
						CloseFormGroup
					End If%>
				</div>
			</div>

			<%DrawInfo obLanguage("Common", "kSaveIdpUserDetails").Format(Array(strIdpTitle)), False%>

		</form>
		
		<div><%
			OpenBtnGroup
				ButtonCopy "save();", obLanguage("Common", "kSave")
				ButtonContinue "doContinue();", obLanguage("Login","kBtnContinue")
			CloseBtnGroup%>
		</div>
	</div><%
End Sub
%>