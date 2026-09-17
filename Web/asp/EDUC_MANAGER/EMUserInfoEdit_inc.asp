<!-- #INCLUDE VIRTUAL="/asp/scripts/dateinput.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/firstLetter.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Const kSaveUserFormScript = "/asp/EDUC_MANAGER/SaveUserInfo.asp"

Dim strStaffID, bCanSave
Dim objInfo, objFamRelTypes, objInfoRole, dctParamsUser
Dim strSaved
Dim strBackPage
Dim strEditUserID,bRightOnDelete,objInfoParam, nUserRoleID, strParamType, strUniqueParamName

Dim strFirstName, strMiddleName, strLastName , strPrefCxm, strEMail, strHomePhone, strDate,bPWDExpired, bShowMPhone
Dim strLoginType, strEToken, strDisplayName, strLoginName, strTitlePosition, strWorkPhone
Dim bMale,dtBirthDate,strPassDate,bLoginName_ADMIN, bIsEdit
Dim strSertificateThumbprint
Dim bUserLinkedWithEsia, bUserLoggedViaEsia
Dim bUserLinkedWithIrtech, bUserLoggedViaIrtech
Dim bEditSelf
Dim obSecurityComponent
Dim bEsiaAuth, bIrtechAuth

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolUI","kTitleUserInfoEdit") & GreenText(DB2HTML(objNSNET.GetUserNickName(strEditUserID)))
End	Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = bIsEducManager
End	Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Users
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_Users
 End Function

Sub ReadState()
	strEditUserID = GetSafeID(Request("UID"), GetSafeID(obTokenMgr.GetData(strToken,stUsersStaffUserID), strUserID))
	strBackPage = "/angular/em/users/"
	bEditSelf = (strEditUserID = strUserID)
	bIsEdit = Not (strEditUserID=strUserID)
	Set objInfoRole = objNSNET.GetEMUserRole(strEditUserID)
	nUserRoleID = objInfoRole("ROLEID")
	ReadOnly = Not HasUserRight(arEMUsersEdit) and strEditUserID <> strUserID
	bEsiaAuth = obContext.ServerSettings.UserAuthorizationSettings.EsiaAuth
	bIrtechAuth = obContext.ServerSettings.UserAuthorizationSettings.IrtechAuth
	Call InitRegExpAlphabet()
End	Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stUsersStaffUserID, strEditUserID)
End Sub

Sub Main
	Dim strIdpLogin
	Dim i, strErr
	Dim rsUserRoles
	Dim objRs, objSettings

	Set objInfoParam = objNSNET.GetUserInfoForRole(strSchoolID, strCurrYearID, 4, strEditUserID, "", "")
	Set objInfo = objNSNET.GetUserInfo(strEditUserID)
	Set dctParamsUser = CreateObject("NetCity.Storage")

	If Not objNSNET.IsCanConnect(TRUE, strErr) Then GenerateError obLanguage("Common","kErrorMsg")

	Set objSettings = objNSNET.GetUserSettings(strEditUserID)
		bShowMPhone = objSettings.ShowMobilePhone
		bPWDExpired = GetSafeLng(objSettings.PasswordExpired, 0) = 1

	strFirstName = objInfo("FIRSTNAME")
	strMiddleName = objInfo("MIDDLENAME")
	strLastName = objInfo("LASTNAME")
	strPrefCxm = objInfo("PREFFEREDCM")
	strEMail = objInfo("EMAIL")
	strHomePhone = objInfo("HOMEPHONE")
	dtBirthDate = Null
	strLoginType = objInfo("LOGINTYPE")
	strEToken = objInfo("SERIALNUMBER")
	strDisplayName = objInfo("NICKNAME")
	strLoginName = objInfo("LOGINNAME")
	strSertificateThumbprint = objInfo("THUMBPRINT")
	bLoginName_ADMIN = (UCase(strLoginName)=EM_ADMIN_NAME)

	If bEditSelf Then
		If bEsiaAuth Or bIrtechAuth Then
			Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
			TestError obLanguage("Security","LoginError")

			strIdpLogin = GetSafeStr(obTokenMgr.GetData(strToken, stIdpLogin), -1, "")
		
			If bEsiaAuth Then
				bUserLinkedWithEsia = obSecurityComponent.IsUserLinkedWithIdp(CLng(strUserID), "esia")
				bUserLoggedViaEsia = (strIdpLogin = "esia")
			End If
			If bIrtechAuth Then
				bUserLinkedWithIrtech = obSecurityComponent.IsUserLinkedWithIdp(CLng(strUserID), "irtech")
				bUserLoggedViaIrtech = (strIdpLogin = "irtech")
			End If
		End If
	End If
End	Sub

Sub	onSpecialHead()
	Dim i
	Dim strRegExpAlphabet, strRegExpLogin

	Call BadFirstLetter()
	strRegExpAlphabet = obContext.LocalSettings.RegExpAlphabet
	strRegExpLogin = "[" & kRegExp_Login & strRegExpAlphabet & "]"
%>
<script><!--
var changePasswordCtrl, emailValidatorCtrl;

deferredResLoader.loadScript("/static/dist/pages/users/js/changePassword.js");
deferredResLoader.loadScript("/js/winauth.js");
deferredResLoader.loadScript("/static/dist/pages/common/js/emailValidator.js");

deferredResLoader.ready(function() {
	changePasswordCtrl = new changePasswordCtrl({userEditHimself: <%=Bool2JS(strEditUserID = strUserID)%>, minPasswordLength: <%="6"%>, userId: <%=strEditUserID%>});

	emailValidatorCtrl = new EmailValidatorCtrl.EmailValidatorCtrl();
});

function saveChanges() {
	if( isDBBusy() ) return false;
	var form = document.UserInfo;
	if (!dataWereChanged)
		return

	extDeferred.when(canSubmit)
		.then(function(){
			//console.log('resolved');
			form.action = "<%=kSaveUserFormScript%>";
			jsSaveForm(form);
		});
}

function checkNotEmpty( el, fieldname ) {
	el.value = trimStr( el.value );
	if( el.value == "" )
	{
		el.focus();
		alert(language.Generic.SetupSchoolUI.kErrEmpty+fieldname);
		return true;
	}
	return false;
}
function isEmptyValue( el ) {
	el.value = trimStr(el.value);
	return (el.value == "");
}
function isNumValid( el, nMaxValue ){
	var n = trimStr(el.value);
	el.value = n;
	if( n != '' ) {
		n = str2lng(n);
		if( isNaN(n) || n < 1 || n > nMaxValue ) {
			alert(language.Generic.Common.kEnterIntegerFrom1To + '<%=(" ")%>' + nMaxValue);
			el.focus(); return false;
		}
	}
	return true;
}

function createDisplayName() {
	var maxlen = <%=kDisplayNameLen%>;
	var form = document.UserInfo;

	if( checkNotEmpty( form.LN, '<%=obLanguage("SetupSchoolUI","kErrLastName")%>' ) ) return;
	if( badFirstLetter( form.LN, true ) ) return;
	strDisplayName = form.LN.value;
	if( badFirstLetter( form.FN, true ) ) return;
	if( badFirstLetter( form.MN, true ) ) return;
	if( form.FN.value != '' ){
		strDisplayName += ' '+ form.FN.value;
	if( form.MN.value != '' )
		strDisplayName += ' '+  form.MN.value;
	}
	if( strDisplayName.length > maxlen )
		strDisplayName = strDisplayName.substr( 0, maxlen );
	form.DN.value = strDisplayName;
	dataChanged();
}

function setNewPassword( userId ) {
	changePasswordCtrl.changePassword();
}

function isUserFormValid( userId ){
	var dt;
	var form = document.UserInfo;
	var el
	if( checkNotEmpty( form.LN, '<%=obLanguage("SetupSchoolUI","kErrLastName")%>' ) ) return false;
	if( checkNotEmpty( form.FN, '<%=obLanguage("SetupSchoolUI","kErrFirstName")%>' ) ) return false;

	<%If Not bLoginName_ADMIN Then%>if( badFirstLetter( form.LN, true ) ) return false;<%End If%>
	if( badFirstLetter( form.FN, true ) ) return false;
	if( badFirstLetter( form.MN, true ) ) return false;

	if( checkNotEmpty( form.DN, '<%=LCase(obLanguage("Common","kDisplayName"))%>' ) )	return false;
	if( badFirstLetter( form.DN, false ) ) return false;
	if( checkNotEmpty( form.LON, '<%=obLanguage("SetupSchoolUI","kErrLoginName")%>' ) )	return false;
	if( /<%=strRegExpLogin%>/.test(form.LON.value) )
	{
		alert(language.Generic.Common.kErrLoginValidSimbols + '<br />' + '<%=kSimbolsForLogin%>');
		form.LON.focus();
		return false;
	}
	if( form.LON.value.length < <%=kMinLoginLength%> )
	{
		alert('<%=obLanguage("Common","kErrorLoginMustHave").Format(Array(kMinLoginLength))%>');
		form.LON.focus();
		return false;
	}


	var checkEmail = $('input[name=PCM]').length != 0 && $('input[name=PCM]').eq(1).prop('checked');
	if (checkEmail) {
		var sEmail = $('input[name="EM"]').val();
		if (!emailValidatorCtrl.isEmailValid(sEmail)) {
			alert(language.Generic.SetupSchoolUI.kSetEMail);
			form.EM.focus();
			return false;
		}
	}


	if( checkNotEmpty( form.P_4001_S_POSITION, '<%=obLanguage("SetupSchoolUI","kTitlePosition")%>' ) ) return false;
	if (!isPhoneNumberValid()) return false;
	<%If bETokenAuthentication Then%>
	var etn = $('input[name=ETN]')[0];
	if (!etn.disabled){
		el = $('input[name=TAUTH]')[0];
		if( el.checked && trimStr( etn.value ) == "" ){
			alert(language.Generic.SetupSchoolUI.kSetSerialNumberEToken);
			etn.focus();
			return false;
		}
	}
	etn.disabled = false;
	<%End If %>

	<%'If obContext.ServerSettings.SystemSettings.ModuleTalentStudents Then%>
	<%If False Then%>
	if(form.UR[form.UR.selectedIndex].value == '<%=role_EmCoordOD%>') {
		return jsSubmit({
			action: "/webapi/em/user/" + userId + "/role/" + '<%=role_EmCoordOD%>',
			method: "GET",
			showProcessing: true
		}).then(function(bOtherUserHasRole){
			if (bOtherUserHasRole) {
				alert(language.Generic.EM.kErrMustBeSingleEmUsesrCoordOD);
				return (new $.Deferred).reject();
			}
			return (new $.Deferred).resolve();
		});
	}
	<%End If %>

	return true;
}

function isPhoneNumberValid(){
	var i, j;
	var form = document.UserInfo;
	var elWPhone = form.elements['P_4002_S_WORKPHONE'];
	var sWPhone = elWPhone.value;

	if (sWPhone.length==0) return true;
	for( i = 0; i < sWPhone.length; i++ ){

		if( isNaN( sWPhone.charAt(i) ) ){
			alert('<%=obLanguage("SetupSchoolUI","kFieldPhoneHasOnlyNumbers").Format(Array(obLanguage("SetupSchoolUI", "kWorkPhone")))%>');
			elWPhone.focus();
			return false;
		}
	}
	return true;
}

function Back(){
	goBack( document.forms.UserInfo, '<%=strBackPage%>' );
}

function isUserAttributeParamsValid() {
	var form = document.UserInfo;
	var elem, dt;
<%While Not objInfoParam.EOF
	strParamType = CStr(objInfoParam("PARAMTYPE"))
	If strParamType <> "G" Then
		strUniqueParamName = MakeUniqueName(objInfoParam)
		dctParamsUser(strUniqueParamName) = Array(strParamType, CStr(objInfoParam("SYDEPEND")) = "Y")
	End If
	objInfoParam.MoveNext
WEnd
	If Not objInfoParam.BOF Then objInfoParam.MoveFirst
	Call obTokenMgr.SetData(strToken, stParamsInfoStaff, dctParamsUser)
%>
	return true;
}

function canSubmit() {
	var res = isUserFormValid( '<%= strEditUserID %>' );

	return extDeferred
		.when(res)
		.then(function() { return extDeferred.when(isUserAttributeParamsValid)})
}

<%If Not readonly And (bEsiaAuth Or bIrtechAuth) Then%>
function Link(idp) {
	postTo('/asp/sso/link.asp?idp=' + idp);
}

function RemoveLink(idp, confirmText) {
	$.show.confirmation(confirmText).then(function() {
		postTo('/asp/sso/RemoveLink.asp?idp=' + idp);
	});
}
<%End If%>

<%If bETokenAuthentication Then%>
function setETokenLoginType(){
	dataWereChanged = true;
	$('input[name=ETN]')[0].disabled = false;
	$('input[name=ETN]')[0].value = '';
	if ($('select[name=children]').length)
		$('select[name=children]')[0].disabled = true;
	if (bowser.msie)
		$('input[name=ETN]').css({'backgroundColor': '#FFFFFF'});
}
function setUsualLoginType(){
	dataWereChanged = true;
	$('input[name=ETN]')[0].disabled = true;
	$('input[name=ETN]')[0].value = '';
	if ($('select[name=children]').length)
		$('select[name=children]')[0].disabled = true;
	if (bowser.msie)
		$('input[name=ETN]').css({'backgroundColor': '#F5F5F5'});
}
function setLoginType(){
	var loginType = parseInt($("input[name='TAUTH']").val());

	if(loginType == 2) {
		setETokenLoginType();
	}
	else {
		setUsualLoginType();
	}
}
function resetDisabledElements(){
	if ($('input[name=TAUTH]')[0].checked)
		 $('input[name=ETN]')[0].disabled = false;
		 if (bowser.msie)
			 $('input[name=ETN]').css({'backgroundColor': '#FFFFFF'});
	else
		$('input[name=ETN]')[0].disabled = true;
	if ($('input[name=TAUTH]').length == 3)
		if ($('input[name=TAUTH]')[1].checked){
			$('input[name=ETN]')[0].value = '<%=strEToken%>';
			 if ($('select[name=children]').length)
				 $('select[name=children]')[0].disabled = false;}
		else{
			if ($('select[name=children]').length)
				$('select[name=children]')[0].disabled = true;
			if (bowser.msie)
				$('input[name=ETN]').css({'backgroundColor': '#F5F5F5'});
		}
}
<% End If %>
//--></script>
<%End Sub

Sub DrawFilters(strForm)
End Sub

Sub DrawButtons()
	Dim objIdpInfo
	If ReadOnly Then Exit Sub

	ButtonSave "saveChanges()", obLanguage("Common","kSave")
	ButtonReset "resetScreen('UserInfo');", obLanguage("Common","kReset")
	If bRightOnDelete Then
		ButtonDel "deleteUser();", obLanguage("Common","kRemove")
	End If

	If Not bEditSelf Then Exit Sub

	If bIrtechAuth And CheckIsExternalAddress() Then
		Set objIdpInfo = obSecurityComponent.GetIdpInfo("irtech")
		If bUserLinkedWithIrtech Then
			SimpleButton "RemoveLink('irtech','" & obLanguage("Common","kAreYouSureToDeleteLinkWithIdp").Format(Array(objIdpInfo.Title)) & "')", obLanguage("Common","kRemoveLinkToIdpAccount").Format(Array(objIdpInfo.Title))
		Else
			SimpleButton "Link('irtech')", obLanguage("Common","kLinkWithIdpAccount").Format(Array(objIdpInfo.Title))
		End If
	End If
	If bEsiaAuth Then
		Set objIdpInfo = obSecurityComponent.GetIdpInfo("esia")
		If Not bUserLinkedWithEsia Then
			SimpleButton "Link('esia');", obLanguage("Common","kLinkWithIdpAccount").Format(Array(objIdpInfo.Title))
		Else
			SimpleButton "RemoveLink('esia', '" & obLanguage("Common","kAreYouSureToDeleteLinkWithIdp").Format(Array(objIdpInfo.Title)) & "');", obLanguage("Common","kRemoveLinkToIdpAccount").Format(Array(objIdpInfo.Title))
		End If
	End If
End Sub

Sub	onDrawPage()
	Dim param
	
	Call DrawButtonsFiltersEx(True, False, "UserInfo")%>

	<form NAME="DelUser" METHOD="POST" ACTION="/asp/SetupSchool/DelUsers.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("DelUser", strEditUserID, "BackPage", strBackPage, "Back", strScriptName, "DELUSERROLETYPE", 4) )%>
	</form>

	<form NAME="UserInfo" class="form-horizontal form-edit form-xs" METHOD="POST" ACTION="<%=strBackPage%>">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("UID", strEditUserID, "BackPage", strScriptName, "Back", strScriptName,"FullAccessEditing",IIF(ReadOnly,0,1) ))%><%

		If Not Readonly Then%><%=WriteHiddenTags(Array("MChoiceParamID", "", "MChoiceParamTitle", "", "MChoiceSYDepend", "", "ScrollTop", "0"))%><%End If%>
	
		<div class="row">
			<div class="col-md-12 col-lg-10"><%
				Call SetFiltersWidth("", "col-md-4", "col-md-8")
				If ReadOnly Then
					Call DrawReadonlyRow( obLanguage("Common","kLastName"), strLastName)
					Call DrawReadonlyRow( obLanguage("Common","kFirstName"), strFirstName )
					Call DrawReadonlyRow( obLanguage("Common","kMiddleName"), strMiddleName )
					If bETokenAuthentication Then
						Call DrawReadonlyRow( obLanguage("SetupSchoolUI","kAuthenticationType"),  IIf(Clng(strLoginType) = kLoginType_Usual, obLanguage("SetupSchoolUI","kUsualPassword"), IIf(Clng(strLoginType) = kLoginType_EToken, obLanguage("Common","kSerialNumberEToken"), obLanguage("SetupSchoolUI","kFamilyLogin"))) )
						Call DrawReadonlyRow( obLanguage("Common","kSerialNumberEToken"), IIf(Clng(strLoginType) = kLoginType_EToken, strEToken, "") )
					End If
					Call DrawReadonlyRow( obLanguage("Common","kDisplayName"), strDisplayName )
					Call DrawReadonlyRow( obLanguage("Common","kLogin"), strLoginName )
					Call DrawReadonlyRow( DB2HTML_BR(obLanguage("SetupSchoolUI","kMailManner")),  IIf( strPrefCxm = "C", obLanguage("SetupSchoolUI","kNSSchoolAnnoun") & NETSCHOOL_PRODUCT_NAME, IIf( strPrefCxm = "E", "E-Mail", obLanguage("SetupSchoolUI","kPaperMail"))) )
					Call DrawReadonlyRow( "E-Mail ", strEMail )
					Call DrawUserParam()
					'Call DrawReadonlyRow( obLanguage("SetupSchoolUI","kUserRole"), objInfoRole("ROLENAME"))
				Else
					Call DrawInputRow( "*** " & obLanguage("Common","kLastName"), strLastName, "LN", "text", 25, kMaxLastname, "" )
					Call DrawInputRow( "*** " & obLanguage("Common","kFirstName"), strFirstName, "FN", "text", 25, kMaxLastname, "" )
					Call DrawInputRow( obLanguage("Common","kMiddleName"), strMiddleName, "MN", "text", 25, kMaxLastname, "" )
					Call DrawInputGroupRow("*** " & obLanguage("Common","kDisplayName"), strDisplayName, "DN", "", 40, kDisplayNameLen, Array("createDisplayName()", obLanguage("SetupSchoolUI","kAutoCreate"), "glyphicon glyphicon-hand-left", ""))
					Call DrawInputGroupRowEx( "*** " & obLanguage("Common","kLogin"), strLoginName, "LON",  "text", "", IIf(bLoginName_ADMIN, "disabled", ""), 25, kMaxLogin, Array("setNewPassword('" & strEditUserID & "')", obLanguage("Common","kChangePassword"), "", ""))
					Call DrawCheckBox(obLanguage("SetupSchoolUI","kPasswordPrompt"),"ChangePW", 1, bPWDExpired,"dataChanged()" )
					Call DrawInputRow( obLanguage("SetupSchoolUI","kSertificateThumbprint"), strSertificateThumbprint, "STP", "text", 50, 60, "" )
				
					If bETokenAuthentication Then
						Call DrawEToken()
						if HasUserRight(arEMUsersEdit) Then
							If Clng(strLoginType) <> kLoginType_EToken Then
								Call DrawReadOnlyInputRow( obLanguage("Common","kSerialNumberEToken"), strEToken, "ETN", "text", 15, 12, "" )
							Else
								Call DrawInputRow( obLanguage("Common","kSerialNumberEToken"), strEToken, "ETN", "text", 15, 12, "" )
							End If
						End If
					End If
					
					Call DrawMailManner()
					Call DrawUserParam()
				End If
				Call DrawUserRoles(nUserRoleID, ReadOnly or Not bIsEdit)
			
				RestoreDefFiltersWidth%>
			</div>
		</div>
	</form><%
End	Sub

Sub DrawMailManner()
	OpenFormGroup DB2HTML_BR(obLanguage("SetupSchoolUI","kMailManner"))
	DrawSimpleRadioList "PCM", Array("C", obLanguage("SetupSchoolUI","kNSSchoolAnnoun") & NETSCHOOL_PRODUCT_NAME, "E", "E-Mail", "P", obLanguage("SetupSchoolUI","kPaperMail")), strPrefCxm, "dataChanged()"
	CloseFormGroup
	Call DrawInputRow( "E-Mail", strEMail, "EM", "text", 35, 80, "" )
End Sub

Sub DrawUserParam()
	If Not objInfoParam.BOF Then objInfoParam.MoveFirst
	While Not objInfoParam.EOF
		Call DrawInfoElement(objInfoParam)
		objInfoParam.MoveNext
	Wend
End Sub

Function MakeUniqueName(objInfoRs)
	MakeUniqueName = "P" & "_" & CStr(objInfoRs("PARAMETERID")) & "_" & CStr(objInfoRs("PARAMTYPE")) & "_" & CStr(objInfoRs("NAME"))
End Function

Sub DrawInfoElement(objInfo)
	Dim strParamName
	Dim strTitlePrepend

	If Not ReadOnly Then
		strParamType = CStr(objInfo("PARAMTYPE"))
		strParamName = objInfo("NAME")
		If strParamType <> "G" Then
			strUniqueParamName = MakeUniqueName(objInfo)
		End If
		Select Case strParamType
			Case "S":
				strTitlePrepend = ""
				If strParamName = "POSITION" Then
					strTitlePrepend = "*** "
				End If
				Call DrawInputRow(DB2HTML_BR(strTitlePrepend & objInfo("TITLE")), objInfo("PARAMVALUE"), strUniqueParamName, "text", 50, GetSafeLng(objInfo("EXTRAINFO"), Null), "")
			Case Else 
				Call GenerateError(obLanguage("SetupSchoolUI","kInvalidParameterType"))
		End Select
	Else
		Call DrawReadonlyRow( DB2HTML_BR(objInfo("TITLE")), objInfo("PARAMVALUE"))
	End if
End Sub

Sub DrawEToken()
	OpenFormGroup "*** " & obLanguage("SetupSchoolUI","kAuthenticationType")
	If HasUserRight(arEMUsersEdit) Then 
		DrawSimpleRadioList "TAUTH", Array(kLoginType_EToken, obLanguage("SetupSchoolUI","kBibelotEToken"), kLoginType_Usual, obLanguage("SetupSchoolUI","kUsualPassword")), strLoginType, "setLoginType()"
	Else
		rw WriteHiddenTags(Array("TAUTH", strLoginType, "ETN", strEToken))
		rw IIF(Clng(strLoginType) = kLoginType_Usual, obLanguage("SetupSchoolUI","kUsualPassword"), obLanguage("SetupSchoolUI","kBibelotEToken"))
	End If
	CloseFormGroup
End Sub

Sub DrawReadOnlyInputRow( InfoName, strInfo, inputName, inputType, size, length, strAux )
	OpenFormGroup InfoName
		%><input type="text" name="<%=inputName%>" class="form-control" disabled size="<%=TextInputSize(size)%>" maxlength="<%=length%>" value="<%=DB2Value(strInfo) %>" OnChange="dataChanged()"><%
		Response.Write "&nbsp;"&strAux
	CloseFormGroup
	%><script>if (bowser.msie) $('input[name=ETN]').css({'backgroundColor': '#F5F5F5'});</script><%
End Sub%>