<!-- #INCLUDE VIRTUAL="/angular_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/UserInfoParamsAccess_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Photo_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SMS_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/SmsAccess_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->

<!-- #INCLUDE VIRTUAL=/asp/scripts/FiltersCommon.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/firstLetter.asp" -->

<% ' © 2007-2021 IRTech. All rights reserved.
Const kLength = "200"

'*******************************************************************************************************************
' Следующие константы определяют - какие бывают атрибутивные параметры с точки зрения редактирующего интерфейса:
Const kParamStatus_Common = 0 ' обычный параметр - обрабатывается по общему алгоритму.
Const kParamStatus_Hidden = 1 ' непоказываемый параметр.
Const kParamStatus_RO	  = 2 ' readonly параметр.
Const kParamStatus_RO_NOTSHOW = 3 ' readonly параметр, не имеющий значения, показываемый в виде 'password' поля.

Const kAddrByPlaceParamName = "REG_ADD_BY_PLACE_STR" ' Имя атрибутивного параметра "Адрес регистрации по месту пребывания"

Dim bStudent, bPWDExpired
Dim bParents, bStaff, bParent
Dim strEditUserID
Dim strBackPage

Dim strFirstName, strLastName, strMiddleName, bNoMiddleName, strEMail, strLoginName
Dim strPrefCM, strDisplayName
Dim strDate, strHomePhone, strMobilePhone, strComments, bMale, nNation, rsNationList, strNation, strSnils
Dim strContact
Dim i, objInfo, objHomeAddress, objRegistrationAddress, objLocalRegistrationAddress, nChildrenID
Dim bIsTempRegistrationAddress
Dim strAddressID, strAddressID2, strAddressID3
Dim strWinLogon, strSertificateThumbprint, strEToken, strLoginType
Dim strECardID

Dim bNeedScanParams
Dim strOldTitle
Dim dtToday
Dim bLoginName_ADMIN, bMayMultiSetRegEqualHomeAddress, strConfirm_SetReg, bMoreThanOneLoginNameExist
Dim strScrollTop
Dim bWizard, bShowMPhone
Dim bRightOnDelete
Dim dtBirthDate
Dim bRoleSpecifiedEditing
Dim bFullAccessEditing, bCanSave
Dim bCanEditUserAccount, bCanShowUserAccount
Dim bShowECardAuth

Dim strFilesJson
Dim bExistsPhoto, strEditUserName
Dim bAddSchool, bAddSchoolPartEdit, bAddSchoolParentEdit

Dim bRegAddressByPlace
Dim bShowMnsForms, bModuleTalentStudents
Dim strSnilsParamName
Dim strPortfolioParamAlarmMessage
Dim strPortfolioParamAlarmHrefMessage
Dim strPortfolioParamAlarmHrefOnClick

Dim objUserComponent
Dim strPhoneTemplate
Dim bNewAttrParams, bDevelopMode

Function hasUserRightsOnPage()
	Call InitUserComponent()
	
	strEditUserID = Request("UID")
	hasUserRightsOnPage = objUserComponent.CheckPermissions(strEditUserID, GetRoleGroup(), Asc("R"))
End Function

Function IsPortfolioParam(strParamName)
	IsPortfolioParam = (strParamName = "TITLES" Or strParamName = "SCIENTIFIC__ACTIVITY" Or strParamName = "COURSES" Or strParamName = "RETRAINING" Or strParamName= "DIPL_VUZ" Or strParamName= "DIPL_DATE" Or strParamName= "DIPL_NUM" Or strParamName= "DIPL_SPEC" Or strParamName= "EXTRAMURAL_COURSES")
End Function

Function CanBack()
	CanBack = True
End Function

Sub ReadState()
	bNewAttrParams = obConfig.Environment <> Environment_Production
	bDevelopMode = obConfig.Environment = Environment_Development

	strAppPath = "school/userinfo"
	strAppModule = "irtech.netcity.school.userinfo"

	strPortfolioParamAlarmMessage = "В следующей версии системы это поле будет только в"
	strPortfolioParamAlarmHrefMessage = "Педагогическом портфолио"
	strPortfolioParamAlarmHrefOnClick = "if(isButtonsLock()) {return;} viewPortfolio();;return false;"
	bShowECardAuth		= False
	readonly			= objNSNET.IsYearClosed(strCurrYearID)

	bCanSave			= False
	bAddSchoolPartEdit	= False
	bAddSchoolParentEdit = False
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	strEditUserID		= Request("UID")
	If IsDull(strEditUserID) Then strEditUserID = obTokenMgr.GetData(strToken,stUsersStaffUserID)
	strEditUserID		= GetSafeID(strEditUserID, NULL)
	strBackPage			= GetSafeStr(Request("BACK"), 255, obTokenMgr.GetData(strToken,"BACK"))
	Call obTokenMgr.SetData(strToken,"BACK", strBackPage)
	strScrollTop		= GetSafeStr(Request("ScrollTop"), -1, "")

	strEditUserName		= objNSNET.GetUserNickName(strEditUserID)

	If bNewAttrParams Then
		Exit Sub
	End If

	bExistsPhoto		= Not IsDull(objNSNET.GetUserPhotoName(strEditUserID))
	bShowMnsForms = obContext.ServerSettings.SystemSettings.ShowMnsForms
	bModuleTalentStudents = obContext.ServerSettings.SystemSettings.ModuleTalentStudents
	strPhoneTemplate = obContext.LocalSettings.PhoneTemplate

	Call InitRegExpAlphabet()

	Call SpecialReadState()
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stUsersStaffUserID, strEditUserID)
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
	Call obTokenMgr.SetData(strToken, stValidIDs, Array(strEditUserID))
	Call SpecialWriteState()
	Call obTokenMgr.SetData(strToken, "QA_dct", Null)

	If bNewAttrParams Then
		Exit Sub
	End If
	Call CheckAccountRight()
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementUsers
End Function

Function GetUserListPage()
End Function

Sub CheckAccountRight()
	Dim bEditUserSchoolAdmin
	bCanEditUserAccount = False
	If Not readonly Then
		If bStaff Then
			bCanEditUserAccount = HasUserRight(arUsersEditAccountStaff)
		Else
			If HasUserRight(arUsersEditAccountStudentsParents) Then
				bCanEditUserAccount = True
			Else
				If HasUserRight(arUsersEditAccountStudentsParentsInClass) Then
					If bStudent Then
						bCanEditUserAccount = objNSNET.IsClassChiefForUser(strCurrYearID, strUserID, strEditUserID, True)
					ElseIf bParent Then
						bCanEditUserAccount = objNSNET.IsClassChiefForUser(strCurrYearID, strUserID, strEditUserID, False)
					End If
				End If
			End If
		End If
	End If

	If bIsEMForSchool Then
		bCanShowUserAccount = False
	Else
		bCanShowUserAccount = HasUserRole(rlAdmin) Or HasUserRole(rlPrincipal) Or HasUserRole(rlTeacher) Or HasUserRole(rlSecretary) Or HasUserRole(rlSpecialistStaff)
	End If

	If Not bStudent Then
		If bCanShowUserAccount Then
			If Not HasUserRole(rlAdmin) Then
				bEditUserSchoolAdmin = objUserComponent.UserIsSchoolAdmin(strEditUserID, strSchoolID)
				If bEditUserSchoolAdmin Then
					bCanShowUserAccount = False
				End If
			End If
		End If
	End If

	If bAddSchoolParentEdit Then
		bCanShowUserAccount = True
		'bCanEditUserAccount = True '#26521, пост 7
	End If

	If bAddSchoolPartEdit Then
		bCanEditUserAccount = False
	End If

	If CLng(strFunctionalityType)=kFuncType_PreSchool And bStudent Then
		' В детсаду для ребёнка не показываем
		bCanShowUserAccount = False
		bCanEditUserAccount = False
	End If
End Sub

Sub SpecialReadState()
	bWizard = False
End Sub

Sub SpecialWriteState()
End Sub

Function onLoad()
	If strScrollTop <> "" Then
		onLoad = "document.body.scrollTop=" & strScrollTop & ";"
	End If
	bMoreThanOneLoginNameExist = False
	If (bFullAccessEditing Or bAddSchoolParentEdit) And Not readonly And Not bWizard And Not bAddSchoolPartEdit Then
		If CLng(strFunctionalityType)<>kFuncType_PreSchool Or Not bStudent Then
			If objNSNET.DoesLoginNameAlreadyExist(strEditUserID, strSchoolYearID, strLoginName) Then
				bMoreThanOneLoginNameExist = True
				onLoad = onLoad & "JavaScript:alert('" & obLanguage("SetupSchoolUI","kWarnNameExists") & "');"
			End If
		End If
	End If
End Function

Sub InitUserComponent
	Set objUserComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
End Sub

Sub MainUserInfo()
	If bNewAttrParams Then
		Exit Sub
	End If
	Dim objRs, objSettings
	Dim strErr
	If Not objNSNET.IsCanConnect(TRUE, strErr) Then GenerateError obLanguage("Common","kErrorMsg")
	bPWDExpired = False
	bShowMPhone = True

	Set objSettings = objNSNET.GetUserSettings(strEditUserID)
	bShowMPhone = objSettings.ShowMobilePhone
	bPWDExpired = GetSafeLng(objSettings.PasswordExpired, 0) = 1

	dtToday = NSNow()

	'If Not bFullAccessEditing And Not bAddSchool Then ' #22418 для bAddSchool тоже надо вызывать GetUsersInfoParamsAccess
	If Not bFullAccessEditing Then
		Call GetUsersInfoParamsAccess
		If Not bAddSchool Then
			If GetUserAccessTypeToParam("COMMENTS") = 1 And Not readonly Then bCanSave = True
		End If
	End If

	bParent = False
	bStudent = objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlStudent)
	Set objInfo = objNSNET.GetSchoolUserInfo(strEditUserID, strSchoolID)
	bMale = (objInfo("GENDER") = obContext.LocalSettings.MaleLetter)
	strFirstName = objInfo("FIRSTNAME")
	strMiddleName = objInfo("MIDDLENAME")
	bNoMiddleName = objInfo("NOMIDDLENAME")
	strLastName = objInfo("LASTNAME")
	strPrefCm = objInfo("PREFFEREDCM")
	strEMail = objInfo("EMAIL")
	strHomePhone = objInfo("HOMEPHONE")
	strDate = objInfo("BIRTHDATE")

	If IsDull(strDate) Then
		dtBirthDate = Null
		strDate = ""
	Else
		dtBirthDate = strDate
		strDate = Date2Str(strDate)
	End If

	strLoginType = objInfo("LOGINTYPE")
	strEToken = objInfo("SERIALNUMBER")

	If Not readonly Then
		If IsDull( objInfo("SCHOOLID") ) Then readonly = True
	End If

	Call GetUserRightsToEditing
	Call obTokenMgr.SetData(strToken, stAddSchoolPartEdit, bAddSchoolPartEdit)
	Call obTokenMgr.SetData(strToken, stAddSchoolParentEdit, bAddSchoolParentEdit)

	strDisplayName = objInfo("NICKNAME")
	strLoginName = objInfo("LOGINNAME")
	strWinLogon = objInfo("WINACCOUNT")
	strSertificateThumbprint = objInfo("THUMBPRINT")

	'TODO. Почему поля "комментарий" и "мобильный телефон" не обрабатываются в атрибутивных параметрах?
	strMobilePhone = Trim(objNSNET.GetMobilePhoneForUser(strEditUserID))

	If Not bFullAccessEditing Then Exit Sub

	bLoginName_ADMIN = (UCase(strLoginName)=ADMIN_NAME)

	If Not bNewAttrParams Then
		InitAddresses
		InitNation
		InitAttachments

		'TODO. Почему поля "комментарий" и "мобильный телефон" не обрабатываются в атрибутивных параметрах?
		strComments = objNSNET.GetUserComment(strEditUserID, strCurrYearID)
	End If

	bStaff = False
End Sub

Sub InitAddresses
	Dim objRs
	Set objRegistrationAddress = objNSNET.GetUserAddressByType(strEditUserID, "R") 'регистрации
	Set objHomeAddress = objNSNET.GetUserAddressByType(strEditUserID, "H") 'жительства
	Set objLocalRegistrationAddress = objNSNET.GetUserAddressByType(strEditUserID, "L") 'регистрации по месту жительства
	If objHomeAddress.EOF Then strAddressID = Null Else strAddressID = objHomeAddress("ADDRESSID")

	IF objRegistrationAddress.EOF THEN
		bIsTempRegistrationAddress = FALSE
	ELSE
		bIsTempRegistrationAddress = NOT IsDull(objRegistrationAddress("ISTEMP")) AND NOT IsDull(objRegistrationAddress("EXPIREDATE"))
	END IF

	bRegAddressByPlace = objNSNET.GetRegAddressByPlace(strEditUserID)

	bMayMultiSetRegEqualHomeAddress = False

	If Not ReadOnly Then
		bMayMultiSetRegEqualHomeAddress = objNSNET.MayMultiSetRegEqualHomeAddress(strEditUserID)
		If bMayMultiSetRegEqualHomeAddress Then
			Set objRs = objNSNET.GetUsersWithSameAddress(strEditUserID, strAddressID, 1)

			If objRs.EOF Then
				bMayMultiSetRegEqualHomeAddress = False
			Else
				strConfirm_SetReg = obLanguage("SetupSchoolUI","kLivingTogether")
				While Not objRs.EOF
					strConfirm_SetReg = strConfirm_SetReg & DB2Java(objRs("NICKNAME")) & "\n"
					objRs.MoveNext
				WEnd
				strConfirm_SetReg = strConfirm_SetReg & obLanguage("SetupSchoolUI","kLivingSamePlace") & obLanguage("SetupSchoolUI","kLivingOtherPlace")
			End If
		End If
	End If
End Sub

Sub InitNation
	nNation = objNSNET.GetUserCitizenship(strEditUserID)
	Set rsNationList =  objNSNET.GetCitizenshipList(bMale)
	If readonly Or bAddSchoolPartEdit Then
		Do While Not rsNationList.EOF
			If rsNationList("CITIZENSHIPID")=nNation Then strNation = rsNationList("ITEMNAME") : Exit Do
			rsNationList.MoveNext
		Loop
	End If
End Sub

Sub InitAttachments
	Dim oAttachmentsComponent, result
	strFilesJson = ""
	Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")

	Set result = oAttachmentsComponent.GetFileAttachmentInfoUser(strEditUserID)
	strFilesJson = ConvertJsonObject2Str(result)
ENd Sub

Sub OnScanParams(strParamName, strUniqueParamName)
End Sub

Function onKeyPress()
	If (bFullAccessEditing Or bAddSchoolParentEdit) And Not ReadOnly Then
		onKeyPress = "JavaScript:CheckEnter(event);"
	Else
		onKeyPress = ""
	End If
End Function

Sub onHead()
	onSpecialHead
	WriteAngularDeferBootstrap
End Sub

Sub onSpecialHead()
	Dim objGroup
	Dim nMaxValue
	Dim strParamName, strParamType, strParamTitle, strUniqueParamName, strParamID
	Dim nStatus ' - ParamStatus
	Dim nYear, dtStartDate, dtEndDate
	Dim strParamNameInGroup
	Dim strSYDepend
	Dim objLocalSettings

	nRoleFilter = GetRoleGroup()

	nYear = Year(dtToday)
	dtStartDate = NormalizeDate( DateSerial( nYear - 90, 1, 1 ) )
	dtEndDate = NormalizeDate( DateSerial( nYear+1, 12, 31 ) )

	Set objLocalSettings = obContext.LocalSettings

	%>
	<script src="/js/libs/jquery.inputmask.bundle.min.js" type="text/javascript"></script>
	<%

	scriptCalendarCommon

	If Not bNewAttrParams Then
		%><script src="<%=GetVersionedJsLink("maskedInputs.js")%>" type="text/javascript"></script><%
		If bStaff Then%>
			<script>
				$(function() {
					dateInput.initDateInput($('[name="P_38_D_REQ_ATT_DATE"]').parent(), <%=Date2Js(dtStartDate)%>, <%=Date2Js(NormalizeDate(DateSerial(nYear + 5, 12, 31)))%>);
					dateInput.initDateInput($('[name="P_43_D_REQ_ATT_DATE2"]').parent(), <%=Date2Js(dtStartDate)%>, <%=Date2Js(NormalizeDate(DateSerial(nYear + 5, 12, 31)))%>);
					dateInput.initDateInput($('[name="P_48_D_PENSION_DATE"]').parent(), <%=Date2Js(dtStartDate)%>, <%=Date2Js(NormalizeDate(DateSerial(nYear + 10, 12, 31)))%>);
					dateInput.initDateInput($('[name="P_4018_D_START_DATE_MILITARY"]').parent(), <%=Date2Js(dtStartDate)%>, <%=Date2Js(NormalizeDate(DateSerial(nYear + 10, 12, 31)))%>);
					dateInput.initDateInput($('[name="P_4019_D_END_DATE_MILITARY"]').parent(), <%=Date2Js(dtStartDate)%>, <%=Date2Js(NormalizeDate(DateSerial(nYear + 10, 12, 31)))%>);
				});
			</script><%
		ElseIf bStudent Then%>
			<script>
				$(function() {
					dateInput.initDateInput($('[name="P_1059_D_DISABILITY_END"]').parent(), <%=Date2Js(dtStartDate)%>, <%=Date2Js(NormalizeDate(DateSerial(nYear + 10, 12, 31)))%>);
				});
			</script><%
		End If

		Call BadFirstLetter()
	End If
	
	%>

	<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("uikit.validate.js")%>" type="text/javascript"></script>

	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/file-attachments.min.css")%>">
	<link rel="stylesheet" type="text/css" href="/vendor/components/angular-ui-select/dist/select.min.css">
<script><!--
var userInfoEdit, fileAttachmentCtrl, emailValidatorCtrl;

deferredResLoader.loadScript("/static/dist/common/js/fileUpload-bundle.min.js");

<%If Not bNewAttrParams Then%>
deferredResLoader.loadScript("/js/winauth.js");
deferredResLoader.loadScript("/js/fileAttachmentCtrl.min.js");
deferredResLoader.loadScript("/static/dist/pages/common/js/emailValidator.js");
<%End If%>

deferredResLoader.ready(function() {
	
	botstrapAngular($("div.content")).then(function(){
		if(userInfoEdit){
			userInfoEdit.showPage();
		}
	});
});

function Back() {
	goBack( document.UserInfo, '<%=GetUserListPage()%>' );
}

<%If Not bNewAttrParams Then%>

<%If Not bExistsPhoto Then%>
	$(function() {
		$('#delPhoto').hide();
	});
<%End If%>

function CheckIdentityDocsAccess(editUserId)	{
	jsSubmit({
		action: "/webapi/users/" + editUserId + "/info/identityDocuments/checkAccess",
		method: "GET",
		auth: true,
		nocache: true,
		showProcessing: false,
		defaultErrorHandling: false,
		onSuccess: function(result) { if (!result) {$(".panel-identity-documents").hide();}},
		onError: function() {$(".panel-identity-documents").hide();}
	});
}

function getSnilsControlSum(integralValue) {
	if (integralValue == 100 || integralValue == 101 || integralValue == 0) {
		return "00";
	} else if (integralValue < 100) {
		return integralValue < 10 ? "0" + integralValue.toString() : integralValue.toString();
	} else {
		return getSnilsControlSum(integralValue % 101);
	}
}

function getSnilsControlValue(valueWithoutControlSum) {
	if (valueWithoutControlSum && (valueWithoutControlSum.length == 9) && +valueWithoutControlSum > 001001998)
	{
		var sm = 0;
		for (i = 0; i < 9; i++) {
			sm = sm + +valueWithoutControlSum.charAt(i) * (9 - i);
		}
		return getSnilsControlSum(sm);
	}
	return "-1";
}

function isSnilsValid(value) {
	var form = document.UserInfo;
	var snilsCode = "";
	<%If bStaff Then%>
		snilsCode = "22";
	<%ElseIf bParent Then %>
		snilsCode = "2012";
	<%ElseIf bStudent Then %>
		snilsCode = "1052";
	<%End If%>
	var snilsParamName = "P_" + snilsCode + "_S_SNILS";
	if (snilsParamName)
	{
		var elSnils = form.elements[snilsParamName];
		var valSnils = value ? value : elSnils ? elSnils.value : undefined;
		if (valSnils != undefined && valSnils != '')
		{
			var digits = valSnils.match(/\d{1,3}/g);
			if (digits) {
				valSnils = digits.join("-").replace(/-(?!.*?-)/, ' ');
			}

			if (!/<%=kRegExp_Snils%>/.test(valSnils))
			{
				var messageText = language.Generic.SetupSchoolUI.kInvalidFormatSnils;
				return { error: true, message: messageText };
			} else {
				var valueWithoutControlSum = digits[0] + digits[1] + digits[2];
				var snilsControlValue = getSnilsControlValue(valueWithoutControlSum);
				if (snilsControlValue != digits[3]) {
					var messageText = "В СНИЛС неверно указана контрольная сумма, или ошибка в номере";
					return { error: true, message: messageText };
				}
			}


		}
		if (elSnils)
		{
			elSnils.value = valSnils;
		}
	}
	return { error: false };
}

function isMobileValid(value) {
	<%If bShowMPhone Then%>
		var i, j;
		var form = document.UserInfo;
		var elMobile = form.elements['MT'];
		var sMobile = value ? value : elMobile.value;
		sMobile = sMobile.replace(/\_+/g, "").replace(/\(+/g, "").replace(/\)+/g, "").replace(/\++/g, "").replace(/\-+/g, "");
		var messageText = "";
		if (sMobile.length == 0) return true;
		if( sMobile.indexOf('<%=objLocalSettings.PhoneStateCode%>') != 0 ){
			messageText = '<%=obLanguage("SetupSchoolUI","kMobileValueMustStartWith").Format(Array(obLanguage("Common", "kMobilePhone"), objLocalSettings.PhoneStateCode))%>';
			return { error: true, message: messageText };
		}

		for( i = 0; i < sMobile.length; i++ ) {

			if(isNaN( sMobile.charAt(i))){
				messageText = '<%=obLanguage("SetupSchoolUI","kFieldPhoneHasOnlyNumbers").Format(Array(obLanguage("Common", "kMobilePhone")))%>';
				return { error: true, message: messageText };
			}
		}

		if( sMobile.length != <%=objLocalSettings.PhoneNumberLength%> ){
			messageText = '<%=obLanguage("SetupSchoolUI","kMobileLenMustBe").Format(Array(obLanguage("Common", "kMobilePhone"), objLocalSettings.PhoneNumberLength))%>';
			return { error: true, message: messageText };
		}

	<%End If%>

	return { error: false };
}<%

If Not ReadOnly Then%>

	function photo() {
		var fileSizeAlert = '<div class="alert alert-info" role="alert">' + language.Generic.Photo.kPhotoFile_TooLarge + '<%=" " & obTokenMgr.Application()("UploadLimits").PhotoFileSizeLimit & " Kb"%></div>';
		var fileHeightAlert = '<div class="alert alert-info" role="alert">' + language.Generic.Photo.kPhotoSize + '</div>';

		$.show.fileDialog({
			title: language.Generic.Photo.kAttachPhoto,
			url: '/asp/SetupSchool/PhotoSave.asp',
			fileExts: ['png', 'jpg', 'gif', 'jpeg'],
			invalidFileExtMsg: language.Generic.Photo.kPhotoFileName_Ext,
			isAjax: true,
			submitParams: {
				userId: <%=strEditUserID%>
			},
			handlerAjaxSuccess: function() {
				var src = $('#photo').find('img')[0].src + '&' + Math.random();
				$('#photo').find('img')[0].src = src;

				$('#delPhoto').show();
			},
			contentHtml: fileSizeAlert + fileHeightAlert
		});
	}

	function deletePhoto() {
		$.show.confirmation(language.Generic.Photo.kRemovePhotoConfirm + '<%=((DB2Java(strEditUserName)) & "?")%>').then(function() {
			jsSubmit({
				action: '/asp/SetupSchool/PhotoDelete.asp',
				data: {userId: <%=strEditUserID%>},
				showProcessing: true,
				onSuccess: function(response) {
					var src = $('#photo').find('img')[0].src + '&' + Math.random();
					$('#photo').find('img')[0].src = src;

					$('#delPhoto').hide();
					alert(response.message);
				}
			});
		});
	}

function checkNotEmpty(el, fieldname) {
	if(isEmptyValue(el)) {
		focusAlert(el, language.Generic.SetupSchoolUI.kErrEmpty + fieldname);
		return true;
	}

	return false;
}

var dtNow = <%=Date2Js(dtToday)%>;

//базовая проверка всех атрибутивных параметров с типом date
//проверяется корректность ввод при этом необязателен
function checkAttributeDateParam(fieldName, paramTitle, confirms) {
	var dateFilterInfo = dateInput.getDateFilterInfo(fieldName);
	if (dateFilterInfo != null)
	{
		if(!dateFilterInfo.check(null, false)){
			//некорректна дата
			return false;
		}
		var paramValue = dateFilterInfo.date();
		if(paramValue && paramValue && paramValue > dtNow){
			confirms.push(extDeferred.wrapPromise($.show.getConfirmation(paramTitle + language.Generic.SetupSchoolUI.kAttribParamDateLargeToday ), function(){}, function(){dateFilterInfo.element.focus();}));
		}
	}
	return true;
}

function checkDisabilityEnd(fieldName, paramTitle, confirms) {
	var dateFilterInfo = dateInput.getDateFilterInfo(fieldName);
	if(!dateFilterInfo.check(null, false)){
		//некорректная дата
		return false;
	}
	var paramValue = dateFilterInfo.date();
	if(paramValue && paramValue < dtNow){
		confirms.push(extDeferred.wrapPromise($.show.getConfirmation(paramTitle + language.Generic.SetupSchoolUI.kAttribParamDateBeforeToday ), function(){}, function(){dateFilterInfo.element.focus();}));
	}
	return true;
}

function checkValidDateInPast(fieldName){
	var dateFilterInfo = dateInput.getDateFilterInfo(fieldName);
	if(!dateFilterInfo.check(null, false)){
		//некорректна дата
		return false;
	}
	var paramValue = dateFilterInfo.date();
	if(paramValue && paramValue && paramValue > dtNow){
		focusAlert($("input[name='" + fieldName + "']").eq(0), language.Generic.SetupSchoolUI.kBirthdayLargeToday);
		return false;
	}
	return true;
}

function isEmptyValue(el) {
	el.value = trimStr(el.value);
	return (el.value == "");
}

function isNumValid(el, nMaxValue) {
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

function editMChoiceParam(nMChoiceParamID, sMChoiceParamTitle, sMChoiceSYDepend) {
	userInfoEdit.showDialogParamEdit({ paramId: nMChoiceParamID, title: language.Generic.SetupSchool.kChoiceParam + ": " + sMChoiceParamTitle });
}

function isUserAttributeParamsValid() {
	var confirms = new Array();
	var form = document.UserInfo;
	var el, dt;

	//-------------------------------
	<%
	If Not bNewAttrParams Then
	While Not objInfo.EOF

		strParamName = CStr(objInfo("NAME"))
		strSYDepend = CStr(objInfo("SYDEPEND"))
		nStatus = GetParamStatus(strParamName, strSYDepend)

		strParamType = CStr(objInfo("PARAMTYPE"))
		strParamID = Clng(objInfo("PARAMETERID"))
		strParamTitle = CStr(objInfo("TITLE"))
		If Not (bFullAccessEditing Or bAddSchoolParentEdit) Then
			Select Case paramShowStatusForSpecifiedRoles(GetSafeStr(strParamName, -1, strParamID))
				Case ParamAccess_Hidden: nStatus = kParamStatus_Hidden
				Case ParamAccess_Full: nStatus = kParamStatus_Common
				Case ParamAccess_ReadOnly: nStatus = kParamStatus_RO
				Case Else:  nStatus = kParamStatus_Hidden
			End Select
		End If
		If strParamType <> "G" Then
			strUniqueParamName = MakeUniqueName(objInfo)
			Call OnScanParams(strParamName, strUniqueParamName)
			If nStatus = kParamStatus_Common Then
				CheckParam strParamType, strParamTitle, strParamName, strUniqueParamName, objInfo
			End If
		Else ' "Group"
			Set objGroup = objInfo("groupParameters").Value
			While Not objGroup.EOF
				strParamType = CStr(objGroup("PARAMTYPE"))
				strUniqueParamName = MakeUniqueName(objGroup)
				strParamNameInGroup = CStr(objGroup("NAME"))
				Call OnScanParams(CStr(objGroup("NAME")), strUniqueParamName)

				If nStatus = kParamStatus_Common Then
					CheckParam strParamType, strParamTitle & ": " & CStr(objGroup("TITLE")), strParamNameInGroup, strUniqueParamName, objGroup
				End If
				objGroup.MoveNext
			WEnd
		End If
		objInfo.MoveNext
	WEnd
	If Not objInfo.BOF Then objInfo.MoveFirst
	End If

	%>
	//-------------------------------

	if (!isAttributeParamsHasValidValues())
	{
		return false;
	}
	return confirms;
}

function isAttributeParamsHasValidValues() {
<%If bStudent Or bParent or bStaff Then%>
	return isSnilsValid();
<%Else%>
	return true;
<%End If%>
}

<%End If%>

<% If (bFullAccessEditing Or bAddSchoolParentEdit) And Not readonly Then %>
	function CheckEnter(event) {
		if (event.ctrlKey && event.keyCode == 17){
			$.when(dataWereChanged && $.show.confirmation(language.Generic.SetupSchoolUI.kConfirmOnQuikSave)).then(function(){
				document.UserInfo["ScrollTop"].value = document.body.scrollTop;
				saveChanges();
			});
		}
	}

	function isUserFormValid( userId ){
		var dt;
		var form = document.UserInfo;
		var el
		if( checkNotEmpty( form.LN, language.Generic.SetupSchoolUI.kErrLastName ) ) return false;
		<%If Not bLoginName_ADMIN Then%>
			if( checkNotEmpty( form.FN, language.Generic.SetupSchoolUI.kErrFirstName ) ) return false;
			if( badFirstLetter( form.LN, true ) ) return false;
		<%End If%>
		if( badFirstLetter( form.FN, true ) ) return false;
		if( badFirstLetter( form.MN, true ) ) return false;

		if (! checkValidDateInPast("BDT") ) return false;

		if( checkNotEmpty( form.DN, language.Generic.Common.kDisplayName.toLowerCase() ) )	return false;
		if( badFirstLetter( form.DN, false ) ) return false;

		<%

		If CLng(strFunctionalityType) <> kFuncType_PreSchool Or (CLng(strFunctionalityType)=kFuncType_PreSchool And Not bStudent) Then
			If bCanShowUserAccount Then
				Call DrawLoginNameValidateJs()
			End If
		End If%>

				var checkEmail = $('input[name=PCM]').length != 0 && $('input[name=PCM]').eq(1).prop('checked');
				if (checkEmail) {
					var sEmail = $('input[name="EM"]').val();
					if (!emailValidatorCtrl.isEmailValid(sEmail)) {
						alert(language.Generic.SetupSchoolUI.kSetEMail);
						form.EM.focus();
						return false;
					}
				}
		<%

		If bETokenAuthentication Then
		%>
			if(!validateEtoken()){
				return false;
			}
		<%ElseIf bShowECardAuth Then%>
			var ecard = $('input[name=ECardID]')[0];
			el = $('input[name=TAUTH]')[0];
			if( el.checked && trimStr( ecard.value ) == "" ){
				focusAlert(ecard, language.Generic.SetupSchoolUI.kSetECardID);
				return false;
			}
			el = $('input[name=TAUTH]')[1];
			if( el.checked && trimStr( ecard.value ) != "" ){
				focusAlert(ecard, language.Generic.SetupSchoolUI.kResetECardID);
				return false;
			}
		<%End If%>

		if (isMobileValid($('[name="MT_MASK"]').inputmask("unmaskedvalue")).error) {
			$('#contactInfo').collapse('show');
			$('div.panel-collapse:not(#contactInfo)').removeClass('in');
			$(document).scrollTop($('[name="MT_MASK"]').offset().top);
			$('[name="UserInfo"]').valid();
			return false;
		}

		if ($('[name$="SNILS_MASK"]').length > 0)
		{
			if (isSnilsValid($('[name$="SNILS_MASK"]')[0].value).error) {
				$('#addInfo').collapse('show');
				$('div.panel-collapse:not(#addInfo)').removeClass('in');
				var buttonsPanel = $(".buttons-panel-fixed");
				var buttonsPanelHeight = 0;
				if (buttonsPanel)
				{
					buttonsPanelHeight = buttonsPanel.height() * 2;
				}
				$(document).scrollTop($('[name$="SNILS_MASK"]').offset().top - buttonsPanelHeight);
				$('[name="UserInfo"]').valid();
				return false;
			}
		}
		return true;
	}

	function setNewAddress(nIsFact, addressType) {
		checkForChanges().then(function() {
			dataWereChanged = false;
			var form = document.AddressInfo;
			form.IsFactAddress.value = nIsFact;
			if(addressType) form.AddressType.value = addressType;
			userInfoEdit.navigateToPage( document.AddressInfo, 'AddressInfoEdit.asp' );
		});
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
			<%If Not bStudent Then%>
					strDisplayName += ' '+ form.FN.value;
				if( form.MN.value != '' )
					strDisplayName += ' '+  form.MN.value;
			<%Else%>
					strDisplayName += ' '+ form.FN.value;
			<%End If%>
		}

		if( strDisplayName.length > maxlen )
			strDisplayName = strDisplayName.substr( 0, maxlen );
		form.DN.value = strDisplayName;
		dataChanged();
	}

	function isBirthDayEmpty(form) {
		return false;
	}

	function canSubmit() {
		<%If Not bAddSchoolPartEdit Then%>
		if(!isUserFormValid("<%=strEditUserID%>")){
			return false;
		}
		if (isBirthDayEmpty(document.UserInfo)) {
			return false;
		}
		<%End If%>

		if (!dataWereChanged){
			alert(language.Generic.SetupSchoolUI.kDataNotModified);
			return false;
		}
		return isUserAttributeParamsValid();
	}
<%ElseIf Not ReadOnly Then%>
	function canSubmit() {
		if (!dataWereChanged) {
			return false;
		}

		return isUserAttributeParamsValid();
	}
<% End If %>

<%If bETokenAuthentication Then Call DrawETokenJs%>

<%
'End If Not bNewAttrParams
End If
%>

//--></script>
<%	Call SpecialHead()


End Sub

Sub DrawLoginNameValidateJs()
	Dim strRegExpAlphabet, strRegExpLogin

	strRegExpAlphabet = obContext.LocalSettings.RegExpAlphabet
	strRegExpLogin = "[" & kRegExp_Login & strRegExpAlphabet & "]"
	%>
		if( checkNotEmpty( form.LON, language.Generic.SetupSchoolUI.kErrLoginName ) )	return false;
		if( /<%=strRegExpLogin%>/.test(form.LON.value) ) {
			focusAlert(form.LON, language.Generic.Common.kErrLoginValidSimbols + '\n' + '<%=kSimbolsForLogin%>');
			return false;
		}
		if( form.LON.value.length < <%=obContext.ServerSettings.SecuritySettings.MinLoginLength%> ) {
			focusAlert(form.LON, '<%=(DB2Java(obLanguage("Common","kErrorLoginMustHave").Format(Array(obContext.ServerSettings.SecuritySettings.MinLoginLength))))%>');
			return false;
		}
	<%
End Sub

Sub DrawETokenJs()
	%>
	function disabledETN(bDisable){
		$('input[name=ETN]')[0].disabled = bDisable;
		$('input[name=ETN]')[0].value = '';
		if (bowser.msie)
			$('input[name=ETN]').css({'backgroundColor': bDisable?'#F5F5F5':'#FFFFFF'});
	}
	function disableChildren(bDisable){
		if ($('select[name=children]').length)
			$('select[name=children]')[0].disabled = bDisable;
	}
	function setETokenLoginType(){
		dataWereChanged = true;
		disabledETN(false);
		disableChildren(true);
		$('input[name=ETN]')[0].value = '<%=strEToken%>';
	}
	function setUsualLoginType(){
		dataWereChanged = true;
		disabledETN(true);
		disableChildren(true);
	}
	function setFamilyLoginType(){
		dataWereChanged = true;
		disabledETN(true);
		if ($('[name=children]').length){
			$('input[name=ETN]')[0].value = $('input[name=children]').length ?
				$('input[name=children]').attr('sNumber') :
				$('select[name=children] option:selected').attr('sNumber');
				disableChildren(false);
		}
	}
	function onChangeChildren(){
		dataWereChanged = true;
		disabledETN(true);
		$('input[name=ETN]')[0].value = $('select[name=children] option:selected').attr('sNumber');
	}
	function resetDisabledElements(){
		disabledETN(!$('input[name=TAUTH]')[0].checked);
		$('input[name=ETN]')[0].value = '<%=strEToken%>';
		if ($('input[name=TAUTH]').length != 3)
			return;
		disableChildren(!$('input[name=TAUTH]')[1].checked);
	}
	function validateEtoken(){
		var etn = $('input[name=ETN]')[0];
		if (!etn.disabled){
			el = $('input[name=TAUTH]')[0];
			if( el.checked && trimStr( etn.value ) == "" ){
				focusAlert(etn, language.Generic.SetupSchoolUI.kSetSerialNumberEToken);
				return false;
			}
		}
		etn.disabled = false;
		return true;
	}
	<%
End Sub

Sub CheckParam(strParamType, strParamTitle, strParamName, strUniqueParamName, objInfo )
	strParamTitle = "<" & strParamTitle & ">"
	Select Case strParamType
		Case "A":
			%>
			if ( !checkAreaLength(form.<%=strUniqueParamName%>, <%=GetSafeLng(objInfo("EXTRAINFO"), Null)%>, '<%=(DB2Java(strParamTitle))%>')) return false;
			<%
		Case "N":
			nMaxValue = GetSafeLng(objInfo("EXTRAINFO"), 1000)
			%>
			if ( !isNumValid(form.<%=strUniqueParamName%>, <%=nMaxValue%>) ) return false;
			<%
		Case "D":
			'исключения
			If strParamName = "REQ_ATT_DATE" Or strParamName = "REQ_ATT_DATE2" Or strParamName = "REGISTRATION_END" Then Exit Sub

			If strParamName = "DISABILITY_END" Then%>
				if ( !checkDisabilityEnd("<%=strUniqueParamName%>", "<%=(DB2Java(strParamTitle))%>", confirms) ) return false;<%
			Else%>
				if ( !checkAttributeDateParam("<%=strUniqueParamName%>", "<%=(DB2Java(strParamTitle))%>", confirms) ) return false;<%
			End If
	End Select
End Sub

Sub SpecialHead()
End Sub

Sub DrawSpecialButtons()
End Sub

Sub DrawButtons()
	If (bCanSave Or bFullAccessEditing Or bAddSchoolParentEdit) And Not ReadOnly Then
		ButtonSave "saveChanges()", obLanguage("Common", "kSave")

		If bETokenAuthentication Then
			ButtonReset "userInfoEdit.resetScreenUI('UserInfo');resetDisabledElements();", obLanguage("Common","kReset")
		Else
			ButtonReset "userInfoEdit.resetScreenUI('UserInfo');", obLanguage("Common","kReset")
		End If

		If bRightOnDelete Then
			Call DrawButtonsDel()
		End If

		rw "<span id='delPhoto'>"
		ButtonDelEx "deletePhoto();", obLanguage("Photo","kDeletePhoto"), obLanguage("Photo","kDeletePhoto")
		rw "</span>"
	End If

	Call DrawButtonsBeforeBack()
	DrawSpecialButtons
End Sub

Sub DrawButtonsDel()
	ButtonDel "userInfoEdit.deleteUser();", obLanguage("Common","kRemove")
End Sub

Sub DrawButtonPanel
	If bNewAttrParams Then
		Exit Sub
	End If

	OpenBtnGroup
	%><div class="buttons-panel-left"><%
	DrawButtons
	%></div><%
	DrawLinkButtonPanel
	CloseBtnGroup
End Sub

Sub DrawLinkButtons()
	If HasUserRight(arBrowseAccessJournal) Then
		Call ButtonWithClass("", obLanguage("Common","kChangeHistory"), obLanguage("Common","kChangeHistory"), "", "btn-display-edit-journal")
	End If
End Sub

Sub DrawButtonsBeforeBack()
End Sub

Sub onDrawPage()
	%>
	<form NAME="UserInfoFormFix" METHOD="POST" ACTION="<%=strBackPage%>" class="form-horizontal form-edit form-sm" style="display: none;">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("UID", strEditUserID, "BackPage", strScriptName, "Back", strScriptName, "SMP", IIF(bShowMPhone, "1", "0")))%>
	</form>
	<user-info userId="<%=strEditUserID%>" roleType="<%=nRoleFilter + 1%>" wizard="<%=bWizard%>"></user-info>
	<%
End Sub

'блок Личные достижения
Sub DrawUserEvents()
	Dim strClass, strPanelId, strPanelTitle, bCollapsed
	strClass = "panel-info"
	strPanelId = "userawards"
	strPanelTitle = "Личные достижения"
	bCollapsed = True

	%><div class="panel <%=strClass%>" >
		<div class="panel-heading" role="tab" id="heading<%=strPanelId%>">
			<h4 class="panel-title">
				<a data-toggle="collapse" class="collapsed" data-target="#<%=strPanelId%>" aria-expanded="<%=Bool2Js(Not bCollapsed)%>" aria-controls="<%=strPanelId%>"><%=DB2Html(strPanelTitle)%></a>
			</h4>
		</div>
		<div id="<%=strPanelId%>" class="panel-collapse collapse <%=IIF(bCollapsed,"","in") %>" aria-labelledby="heading<%=strPanelId%>" role="tabpanel">
			<div class="panel-body">
				<user-event-list>
					<div class="alert" ng-hide="$ctrl.ready"><%=obLanguage("Movement","kPleaseWait")%></div>
				</user-event-list>
			</div>
		</div>
	</div><%

End Sub

'блок основная информация
Sub DrawCommonInfo()
	If bDevelopMode And Not bNewAttrParams Then
		OpenPanelEx obLanguage("Common","kCommonInfo") & " (angular)", "commonInfo_ang", "", False, "panel-info"
		%><user-info-common-data></user-info-common-data><%
		ClosePanel
	End If

	OpenPanelEx obLanguage("Common","kCommonInfo"), "commonInfo", "", False, "panel-info"
		If bNewAttrParams Then
			%><user-info-common-data></user-info-common-data><%
			ClosePanel
			Exit Sub
		End If
		%><div class="col-md-1 text-center"><%
			Call DrawPhoto()
		%></div><%
		%><div class="col-md-11"><%
			If ReadOnly Or bAddSchoolPartEdit Or Not (bFullAccessEditing Or bAddSchoolParentEdit) Then
				Call DrawReadonlyRow( obLanguage("Common","kLastName"), strLastName)
				Call DrawReadonlyRow( obLanguage("Common","kFirstName"), strFirstName )
				Call DrawReadonlyRow( obLanguage("Common","kMiddleName"), strMiddleName )

				Call DrawReadonlyRow( obLanguage("Common","kBDate"), strDate )
				Call DrawReadonlyRow( obLanguage("Common","kGender"), IIf( bMale, obLanguage("Common","kMale"), obLanguage("Common","kFemale")) )
			End If

			If ReadOnly Or bAddSchoolPartEdit Then
				If bFullAccessEditing Then
					Call DrawReadonlyRow( obLanguage("Common","kNation"), strNation )
					Call DrawReadonlyRow( obLanguage("Common","kDisplayName"), strDisplayName )

					If bCanShowUserAccount Then
						Call DrawReadonlyRow( obLanguage("Common","kUserName"), strLoginName )
						Call DrawReadonlyRow( obLanguage("SetupSchoolUI","kWinLogon"), strWinLogon )
					End If

					If bETokenAuthentication Then
						Call DrawReadonlyRow( obLanguage("SetupSchoolUI","kAuthenticationType"),  IIf(Clng(strLoginType) = kLoginType_Usual, obLanguage("SetupSchoolUI","kUsualPassword"), IIf(Clng(strLoginType) = kLoginType_EToken, obLanguage("Common","kSerialNumberEToken"), obLanguage("SetupSchoolUI","kFamilyLogin"))) )
						Call DrawReadonlyRow( obLanguage("Common","kSerialNumberEToken"), IIf(Clng(strLoginType) = kLoginType_EToken, strEToken, "") )
					End If
				End If
			Else
				If Not (bFullAccessEditing Or bAddSchoolParentEdit) Then
					If bETokenAuthentication Then
						Call DrawReadonlyRow( obLanguage("SetupSchoolUI","kAuthenticationType"), _
							IIf(Clng(strLoginType) = kLoginType_Usual, obLanguage("SetupSchoolUI","kUsualPassword"), _
							IIf( strLoginType = kLoginType_EToken, obLanguage("Common","kSerialNumberEToken"), _
							obLanguage("SetupSchoolUI","kFamilyLogin"))) )
					End If
				Else
					Call DrawInputRow( "*** "&obLanguage("Common","kLastName"), strLastName, "LN", "text", 25, kMaxLastname, "" )
					Call DrawInputRow( "*** "&obLanguage("Common","kFirstName"), strFirstName, "FN", "text", 25, kMaxLastname, "" )

					Call DrawInputRow( obLanguage("Common","kMiddleName"), strMiddleName, "MN", "text", 25, kMaxLastname, "" )
					OpenFormGroup ""
					rw ShowCheckbox( "NoMiddleName", "1", bNoMiddleName, obLanguage("Common","kNoMiddleName"), "" )
					CloseFormGroup

					Call DrawDateInfoRow(GetRequiredStarsForBirthDate() + obLanguage("Common","kBDate"), strDate, "BDT", obLanguage("SetupSchoolUI","kChooseBirthDate"))
					Call DrawGender()

					Call DrawNationRow()

					Call DrawInputGroupRow( "*** " & obLanguage("Common","kDisplayName"), strDisplayName, "DN", "", 40, kDisplayNameLen, Array("createDisplayName();", obLanguage("SetupSchoolUI","kAutoCreate"), "glyphicon glyphicon-hand-left", ""))

					If bCanShowUserAccount Then
						Dim arrLoginInputButtons
						If bCanEditUserAccount Then
							arrLoginInputButtons = Array("", obLanguage("Common","kChangePassword"), "", "btn-change-pwd")
						End If
						Call DrawInputGroupRowEx( "*** " & obLanguage("Common","kUserName"), strLoginName, "LON",  "text", "", IIf((bLoginName_ADMIN And Not bMoreThanOneLoginNameExist) Or Not bCanEditUserAccount, "disabled", ""), 25, kMaxLogin, arrLoginInputButtons)
						If bCanEditUserAccount Then
							OpenFormGroup ""
							rw ShowCheckbox( "ChangePW", "1", bPWDExpired, obLanguage("SetupSchoolUI","kPasswordPrompt"), "dataChanged()" )
							CloseFormGroup
						End If
						If obContext.ServerSettings.UserAuthorizationSettings.WindowsAuth Then
							Call DrawInputGroupRow( obLanguage("SetupSchoolUI","kWinLogon"), strWinLogon, "WLN", "", 25, 50, Array("BindWinAccout();", obLanguage("Login","kAssociateWithWindowsAccount"), "glyphicon glyphicon-log-in", ""))
						End If
					End If
					If bETokenAuthentication Then
						Call DrawEToken()
						If Clng(strLoginType) <> kLoginType_EToken Then
							Call DrawReadOnlyInputRow( obLanguage("Common","kSerialNumberEToken"), strEToken, "ETN", "text", 15, 12, "" )
						Else
							Call DrawInputRow( obLanguage("Common","kSerialNumberEToken"), strEToken, "ETN", "text", 15, 12, "" )
						End If
					ElseIf bShowECardAuth Then
						Call DrawECardAuth()
						Call DrawInputRow( obLanguage("SetupSchoolUI","kECardID"), strECardID, "ECardID", "text", 35, 50, "")
					End If
				End If
			End If
			Call DrawSpecialMainTable()
	%></div><%
	ClosePanel
End Sub

Function GetRequiredStarsForBirthDate()
	GetRequiredStarsForBirthDate = ""
End Function

'блок документы уд. личность
Sub DrawIdentityDocumnets()
	If bDevelopMode Or bNewAttrParams Then
		Dim strClass, strPanelId, strPanelTitle, bCollapsed
		strClass = "panel-warning panel-identity-documents"
		strPanelId = "identityDocuments"
		strPanelTitle = obLanguage("Common","kIdentityDocuments")
		bCollapsed = True
		%><div class="panel <%=strClass%>" >
			<div class="panel-heading" role="tab" id="heading<%=strPanelId%>">
				<h4 class="panel-title">
					<a data-toggle="collapse" class="collapsed" data-target="#<%=strPanelId%>" aria-expanded="<%=Bool2Js(Not bCollapsed)%>" aria-controls="<%=strPanelId%>"><%=DB2Html(strPanelTitle)%></a>
				</h4>
			</div>
			<div id="<%=strPanelId%>" class="panel-collapse collapse <%=IIF(bCollapsed,"","in") %>" aria-labelledby="heading<%=strPanelId%>" role="tabpanel">
				<div class="panel-body">
					<user-info-identity-docs>
						<div class="alert" ><%=obLanguage("Movement","kPleaseWait")%></div>
					</user-info-identity-docs>
				</div>
			</div>
		</div><%
	Else
		OpenPanelEx obLanguage("Common","kIdentityDocuments"), "identityDocuments", "", True, "panel-warning panel-identity-documents"
			%><div class="identityDocumentsCtrl"><%=obLanguage("Movement", "kPleaseWait")%></div><%
		ClosePanel
	End If
End Sub

'блок контактня информация
Sub DrawContacts()
	If bDevelopMode Or bNewAttrParams Then
		OpenPanelEx obLanguage("Common","kContactInfo") & IIF(Not bNewAttrParams, " (angular)", ""), "contactInfo_ang", "", True, "panel-success"
			%><user-info-contacts><%=obLanguage("Movement", "kPleaseWait")%></user-info-contacts><%
		ClosePanel
	End If

	If bNewAttrParams Then 
		Exit Sub
	End If

	OpenPanelEx obLanguage("Common","kContactInfo"), "contactInfo", "", True, "panel-success"
		If ReadOnly Or bAddSchoolPartEdit Then
			If bFullAccessEditing Then
				Call DrawAddressRow(True)
			End If
			Call DrawReadonlyRow( obLanguage("SetupSchoolUI","kHomePhone"), strHomePhone )
			If bShowMPhone Then
				Call DrawReadonlyRowEx( obLanguage("Common","kMobilePhone"), strMobilePhone, "MT_MASK" )
				WriteHiddenTags Array("MT", strMobilePhone)
			End If
			Call DrawReadonlyRow( DB2HTML_BR(obLanguage("SetupSchoolUI","kMailManner")),  IIf( strPrefCm = "C", obLanguage("SetupSchoolUI","kNSSchoolAnnoun") & NETSCHOOL_PRODUCT_NAME, IIf( strPrefCm = "E", "E-Mail", obLanguage("SetupSchoolUI","kPaperMail"))) )
		ElseIf Not (bFullAccessEditing Or bAddSchoolParentEdit) Then
			Call DrawReadonlyRow( obLanguage("SetupSchoolUI","kHomePhone"), strHomePhone )
			If bShowMPhone Then
				Call DrawReadonlyRowEx( obLanguage("Common","kMobilePhone"), strMobilePhone, "MT_MASK" )
				WriteHiddenTags Array("MT", strMobilePhone)
			End If
			Call DrawReadonlyRow( "E-Mail ", strEMail )
			Call DrawReadonlyRow( DB2HTML_BR(obLanguage("SetupSchoolUI","kMailManner")),  IIf( strPrefCm = "C", obLanguage("SetupSchoolUI","kNSSchoolAnnoun") & NETSCHOOL_PRODUCT_NAME, IIf( strPrefCm = "E", "E-Mail", obLanguage("SetupSchoolUI","kPaperMail"))) )
		Else
			If bFullAccessEditing Then
				Call DrawAddressRow(False)
			End If
			Call DrawInputRow( obLanguage("SetupSchoolUI","kHomePhone"), strHomePhone, "HT", "text", 30, 30, "" )
			If bShowMPhone Then
				Call DrawInputRow(obLanguage("Common","kMobilePhone"), strMobilePhone ,"MT_MASK","text",25,20,"")
				WriteHiddenTags Array("MT", strMobilePhone)
			End If
			Call DrawMailManner()
		End If
	ClosePanel
End Sub

'блок дополнительная информация
Sub DrawAdditionalInfo

	If bDevelopMode And Not bNewAttrParams Then
	OpenPanelEx "Дополнительная информация (angular)", "userinfoparameters", "", True, "panel-info"
		If bStudent Then
			%><student-parents></student-parents><%
		ElseIf bParent Then
			%><parent-students></parent-students><%
		End If

		%>
		<user-info-parameters>
			<div class="alert"><%=obLanguage("Movement","kPleaseWait")%></div>
		</user-info-parameters>

		<user-info-attachments></user-info-attachments>
		<%
	ClosePanel
	End If
	OpenPanelEx obLanguage("Common","kAddInfo"), "addInfo", "", True, "panel-danger"
		Call DrawSpecialTable()
	ClosePanel
End Sub

Sub DrawPhoto()
	Dim strFotoImg

	strFotoImg = GetPhotoImg(strEditUserID)
	If (bFullAccessEditing Or bAddSchoolParentEdit) And Not bAddSchoolPartEdit Then
		%><a href="JavaScript:photo()" title='<%=obLanguage("SetupSchoolUI","kSetPhoto")%>' id="photo"><%=strFotoImg%></a><%
	Else
		Response.Write strFotoImg
	End If
End Sub

Sub DrawNationRow()
	OpenFormGroup obLanguage("Common","kNation")
		Call DrawSelectRs( rsNationList, "CITIZENSHIP", "CITIZENSHIPID", "ITEMNAME", nNation, " ", "" )
	CloseFormGroup
End Sub

Sub DrawEToken()
	OpenFormGroup "*** " & obLanguage("SetupSchoolUI","kAuthenticationType")
	%>
		<div class="radio">
			<label><input type="radio" name="TAUTH" value="2" <%If Clng(strLoginType)=kLoginType_EToken Then%>checked<%End If%> OnClick="setETokenLoginType()"><%=obLanguage("SetupSchoolUI","kBibelotEToken")%></label> <br />
			<%If bParent Then
				If Not objChl.BOF Then objChl.MoveFirst
				If Not objChl.EOF Then%>
					<label><input type="radio" name="TAUTH" value="3" <%If Clng(strLoginType)=kLoginType_Family Then%>checked<%End If%> OnClick="setFamilyLoginType()"><%=obLanguage("SetupSchoolUI","kFamilyLogin")%></label><%
					PopulateSelectWithAttr objChl, "children", "STUDENTID", "STUDENTNAME", nChildrenID, "sNumber", "SERIALNUMBER", "onChangeChildren();"%><br /><%
				End If
			End If%>
			<label><input type="radio" name="TAUTH" value="1" <%If Clng(strLoginType)=kLoginType_Usual Then%>checked<%End If%> OnClick="setUsualLoginType()"><%=obLanguage("SetupSchoolUI","kUsualPassword")%></label>
		</div>
	<%
	CloseFormGroup
End Sub

Sub DrawECardAuth()
	OpenFormGroup "*** " & obLanguage("SetupSchoolUI","kAuthenticationType")
	%>
		<div class="radio">
			<label><input type="radio" name="TAUTH" value="<%=kLoginType_ECard%>" <%If Clng(strLoginType)=kLoginType_ECard Then%>checked<%End If%> OnClick="dataChanged()"><%=obLanguage("SetupSchoolUI","kECardLogin")%></label><br >
			<label><input type="radio" name="TAUTH" value="1" <%If Clng(strLoginType)=kLoginType_Usual Then%>checked<%End If%> OnClick="dataChanged()"><%=obLanguage("SetupSchoolUI","kUsualPassword")%></label>
		</div>
	<%
	CloseFormGroup
End Sub

Sub DrawComment()
	If bFullAccessEditing then
		If Not readonly  Then Call DrawInputRow( obLanguage("Common","kComment"), strComments, "CO", "area", 50, 8, "" ) : Exit Sub
		Call DrawTextRowBr( obLanguage("Common","kComment"), strComments, "" )
	End If
End Sub

Sub DrawAddressRs(objAddress)
	Dim addrPart, br
	br = "<br />"%>
	<address><%
		rw DB2HTML(objAddress("ADDRESS")) & br
		addrPart = objAddress("DISTRICT")
		If Not IsDull(addrPart) Then rw obLanguage("Common","kDistrict_") & " " & DB2HTML(addrPart) & br
		rw DB2HTML(objAddress("CITYNAME")) & br
		addrPart = objAddress("PROVINCENAME")
		If Not IsDull(addrPart) Then rw DB2HTML(addrPart ) & br
		rw DB2HTML(objAddress("STATEPROVINCENAME")) & br
		rw DB2HTML(objAddress("COUNTRYNAME")) & br
		rw DB2HTML(objAddress("ZIPCODE")) & br
		%>
	</address>
	<%
End Sub

Sub DrawExpireDate(objAddress)
	Dim addrPart, br
	br = "<br />"
	IF NOT IsDull(objAddress("ISTEMP")) AND NOT IsDull(objAddress("REGDOCDATE")) Then
		rw obLanguage("Common", "kRegDateTempAddress") & " "
		rw DB2HTML(objAddress("REGDOCDATE")) & br
	END IF
	IF NOT IsDull(objAddress("ISTEMP")) AND NOT IsDull(objAddress("EXPIREDATE")) Then
		rw obLanguage("Common", "kExpireDateTempAddress") & " "
		rw DB2HTML(objAddress("EXPIREDATE")) & br
	END IF
	IF NOT IsDull(objAddress("ISTEMP")) AND NOT IsDull(objAddress("REGDOCNUMBER")) Then
		rw DB2HTML(obLanguage("Movement", "kDocNumber")) & " "
		rw DB2HTML(objAddress("REGDOCNUMBER")) & br
	END IF
End Sub

Sub DrawAddressRow(bRO)
	Dim strRoom, strCorp

	OpenFormGroup obLanguage("Common","kHomeAddress")

	%><div class="row"><%
		If Not objHomeAddress.EOF Then
			%><div class="col-md-8"><%
				DrawAddressRs(objHomeAddress)
			%></div><%
		End If
		If Not bRO Then
			%><div class="<%=IIF(Not objHomeAddress.EOF, "col-md-4", "col-md-12")%>"><%
				Call DrawContextButtons(Array("setNewAddress('1', 'H')", obLanguage("SetupSchoolUI","kBtnEditHomeAddress"), "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")
				If GetPageTabItem() = TabItem_tbParents Then
					If bChildsAssociated And Not bChildsHomeAddressesIsDifferent And (strAddressID <> strChildsHomeAddress Or IsDull(strAddressID)) And Not IsDull(strChildsHomeAddress) Then
						'// кнопка установить адрес проживания как у ребенка
						Call ImageButton( "setEqualChildHomeAddress('1','" & strChildsHomeAddress & "');", obLanguage("SetupSchoolUI","kBtnAddrEqualChildHomeAddress"), "glyphicon glyphicon-user" )
					End If
				End IF
			%></div><%
		End If
	%></div><%
	CloseFormGroup
	%><hr/><%

	OpenFormGroup obLanguage("Common","kRegistrationAddress")

	%><div class="row"><%
		Dim bEqual
		bEqual = False
		If Not objRegistrationAddress.EOF Then
			%><div class="col-md-8"><%
				If Not objHomeAddress.EOF Then bEqual = (objRegistrationAddress("ADDRESSID") = objHomeAddress("ADDRESSID"))
				If bEqual Then
					rw DB2Html(obLanguage("SetupSchoolUI","kEqualAddress"))
					rw "<br />"
				Else
					DrawAddressRs(objRegistrationAddress)
				End If

			DrawExpireDate(objRegistrationAddress)

			%></div><%
		Else
			If objHomeAddress.EOF Then bEqual = True
		End If

		If Not bRO Then
			%><div class="<%=IIF(Not objRegistrationAddress.EOF, "col-md-4", "col-md-12")%>"><%
			Call DrawContextButtons(Array("setNewAddress('0', 'R')", obLanguage("SetupSchoolUI","kBtnEditRegistrationAddress"), "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")
			If GetPageTabItem() = TabItem_tbParents Then
				If objRegistrationAddress.EOF Then strAddressID2 = Null Else strAddressID2 = objRegistrationAddress("ADDRESSID")
				If bChildsAssociated And Not bChildsRegAddressesIsDifferent And (strAddressID2 <> strChildsRegAddress Or IsDull(strAddressID2)) And Not IsDull(strChildsRegAddress) Then
					'//кнопка адрес установить адрес регистрации как у ребенка
					Call ImageButton( "setEqualChildHomeAddress('0','" & strChildsRegAddress & "');", obLanguage("SetupSchoolUI","kBtnAddrEqualChildRegAddress"), "glyphicon glyphicon-user" )
				End If
			End IF
			If Not objHomeAddress.EOF Then
				If Not bEqual Then
					Call ImageButton("userInfoEdit.setRegEqualHomeAddress();", obLanguage("SetupSchoolUI","kBtnRegEqualHomeAddress"), "glyphicon glyphicon-home")
				End If
			End If
			%></div><%
		End If
	%></div><%

	IF bIsTempRegistrationAddress THEN%>
		<div class="alert alert-info" role="alert">
			 <%=obLanguage("Common","kRegistrationAddressIsLocalRegistrationAddress")%>
		</div>
	<%END IF

	CloseFormGroup

	If bRegAddressByPlace Then
		OpenFormGroup ""
		%><input class="form-control" type="text" disabled="disabled" value="<%=obLanguage("SetupSchoolUI","kRegAddressByPlace_Yes")%>"><%
		CloseFormGroup
	End If

	%><hr/><%
	If Not objLocalRegistrationAddress.EOF Then
	OpenFormGroup obLanguage("Common","kLocalRegistrationAddress")
		%><div class="row"><%
			%><div class="col-md-8"><%
				DrawAddressRs(objLocalRegistrationAddress)
			%></div><%
		%></div><%
	CloseFormGroup
	%><hr/><%
	End If
End Sub

Sub DrawGender()
	OpenFormGroup obLanguage("Common","kGender")
		%>
			<div class="radio">
				<label><input type="radio" name="Gender" value="<%=obContext.LocalSettings.MaleLetter%>" <% If bMale Then%>checked<% End If %> OnClick="dataChanged();<%=IIF(bStaff, "ChangeFamilyInfo(true);","")%>" /> <%=obLanguage("Common","kMale")%></label>
				<label><input type="radio" name="Gender" value="<%=obContext.LocalSettings.FemaleLetter%>" <% If Not bMale Then%>checked<% End If %> OnClick="dataChanged();<%=IIF(bStaff, "ChangeFamilyInfo(false);","")%>" /> <%=obLanguage("Common","kFemale")%></label>
			</div>
		<%
	CloseFormGroup
End Sub

Sub DrawMailManner()
	If Not (CLng(strFunctionalityType)=kFuncType_PreSchool And bStudent) Then
		OpenFormGroup DB2HTML_BR(obLanguage("SetupSchoolUI","kMailManner"))

		%>
			<div class="radio">
				<label><input type="radio" name="PCM" value="C" <% If strPrefCm = "C" Then %> checked <% End If %> OnClick="dataChanged()" /><%=obLanguage("SetupSchoolUI","kNSSchoolAnnoun")%><%=NETSCHOOL_PRODUCT_NAME%></label><br />
				<label><input type="radio" name="PCM" value="E" <% If strPrefCm = "E" Then %> checked <% End If %> OnClick="dataChanged()" /> E-Mail</label><br />
				<label><input type="radio" name="PCM" value="P" <% If strPrefCm = "P" Then %> checked <% End If %> OnClick="dataChanged()" /><%=obLanguage("SetupSchoolUI","kPaperMail")%></label><br />
			</div>
		<%
		CloseFormGroup

		OpenFormGroup "E-Mail"
			DrawInput strEMail, "EM", "text", "", 35, kMaxLengthEmail, ""
		CloseFormGroup
	End If
End Sub

Sub DrawAttachments()
	OpenFormGroup obLanguage("SetupSchoolUI","kAttachedFiles")
	%><div id="attachFiles"></div><%
	CloseFormGroup
End Sub

'************************************************************************************************
'************************************************************************************************
' New attribute user info structure

Function MakeUniqueName(objInfoRs)
	MakeUniqueName = "P" & "_" & CStr(objInfoRs("PARAMETERID")) & "_" & CStr(objInfoRs("PARAMTYPE")) & "_" & CStr(objInfoRs("NAME"))
End Function

Function GetAreaHeight(nMaxLength)
	Dim nAreaHeight
	If nMaxLength >= 800 Then
		nAreaHeight = 8
	Else
		nAreaHeight = nMaxLength \ 100
		If nAreaHeight = 1 Then nAreaHeight = 2
	End If
	GetAreaHeight = nAreaHeight
End Function

'//отрисовка параметров у которых есть GROUPID
Sub DrawInfoGroup(objInfo)

	Dim objGroup, bShowItemTitle
	Dim nMaxValue, nAreaHeight
	Dim objListItems
	Dim strDate
	Dim nParamCount, nInputSize
	Dim strUniqueParamName
	Dim strOnChange
	Dim objCurrMultiChoiceRs
	Dim strParamType

	Set objGroup = objInfo("groupParameters").Value
	If objGroup.EOF Then
		%>&nbsp;<%
		Exit Sub
	End If

	nParamCount = objGroup.RecordCount
	nInputSize = IIf(nParamCount > 2, 17, 25)
	bShowItemTitle = GetSafeLng(objInfo("EXTRAINFO"), 0) <> 0

	%><div class="row"><%

	While Not objGroup.EOF
		strUniqueParamName = MakeUniqueName(objGroup)
		strParamType = CStr(objGroup("PARAMTYPE"))

		If strParamType = "A" Or strParamType = "M" Then
			%><div class="col-md-12 group-item"><%
		Else
			%><div class="col-md-4 group-item"><%
		End If

		If bShowItemTitle And Not IsDull(objGroup("TITLE")) Then
			%><label for="<%=strUniqueParamName%>"><%=DB2HTML_BR(objGroup("TITLE"))%></label><%
		End If

		Select Case strParamType
		Case "S":
			nMaxValue = GetSafeLng(objGroup("EXTRAINFO"), Null)
			DrawInput objGroup("PARAMVALUE"), strUniqueParamName, "text", "", nInputSize, nMaxValue, " id=""" & strUniqueParamName & """"
		Case "A":
			nAreaHeight = GetAreaHeight(GetSafeLng(objGroup("EXTRAINFO"), Null))
			rw ShowTextArea(strUniqueParamName, nAreaHeight, nInputSize, "", objGroup("PARAMVALUE"))
		Case "N":
			nMaxValue = GetSafeLng(objGroup("EXTRAINFO"), Null)
			DrawInput objGroup("PARAMVALUE"), strUniqueParamName, "text", "", 10, Len(CStr(nMaxValue)), " id=""" & strUniqueParamName & """"
		Case "D":
			strDate = objGroup("PARAMVALUE_DT")
			If IsDull(strDate) Then strDate = "" Else strDate = Date2Str(strDate)
			Call DrawDateInput(strUniqueParamName, strDate, DB2Java(objGroup("TITLE")))
		Case "B":

				Dim  selectedValueId
				If IsDull( objGroup("PARAMVALUE")) Then
					selectedValueId = -1
				Else
					selectedValueId  = objGroup("PARAMVALUE")
				End If

				Dim arr1
				arr1 = Array(-1, " ", 0, "Нет", 1, "Да")
				strOnChange = GetSpecialOnChangeForList(CStr(objGroup("NAME")))
				Call DrawSimpleFilterRowWidouthRowName(strUniqueParamName, arr1, selectedValueId, false, strOnChange)

		Case "L":
			If Not DrawParamFeatures(Cstr(objGroup("NAME"))) Then
				Set objListItems = objGroup("chaptListItems_Group").Value
				strOnChange = GetSpecialOnChangeForList(CStr(objGroup("NAME")))
				Call DrawSelectRs( objListItems, strUniqueParamName, "ITEMID", "ITEMNAME", GetSafeStrParam(objGroup("PARAMVALUE_ID"), "-1"), " ", strOnChange )
			Else
				Call DrawParameterFeatures(objGroup, strUniqueParamName )
			End If
		Case "P":
			If Not DrawParamFeatures(Cstr(objGroup("NAME"))) Then
				Set objListItems = objGroup("chaptListItems_Group").Value
				strOnChange = GetSpecialOnChangeForList(CStr(objGroup("NAME")))
				Call DrawSelectRs( objListItems, strUniqueParamName, "ITEMID", "ITEMNAME", GetSafeStrParam(objGroup("PARAMVALUE_ID"), "-1"), " ", strOnChange )
			Else
				Call DrawParameterFeatures(objGroup, strUniqueParamName )
			End If
		Case "F":
			%><input type="hidden" disabled name="<%=strUniqueParamName%>" /><%
			Call DrawFreeParam(objGroup, kParamStatus_RO) ' Сейчас нет параметров с таким типом в Группе, просто передаём kParamStatus_RO. Если появятся такие параметры, то надо будет транслировать реальный статус.
		Case "M": '  not used now
			'Set objCurrMultiChoiceRs = objGroup("chaptMultiChoiceItems_Group").Value
			'Call DrawMChoiceParam(objGroup("PARAMETERID"), IIf(IsDull(objGroup("TITLE")), objInfo("TITLE"), objGroup("TITLE")), strUniqueParamName, objGroup("SYDEPEND"), objCurrMultiChoiceRs, False)
		Case Else
			Call GenerateError(obLanguage("SetupSchoolUI","kInvalidParameterType"))
		End Select

		%></div><%

		objGroup.MoveNext
	Wend
	%></div><%
End Sub




Sub DrawInfoElement(objInfo, nElementStatus)
	Dim nMaxValue, nAreaHeight
	Dim objListItems
	Dim strDate
	Dim strOnChange, strParamName
	Dim strParamType, strUniqueParamName
	Dim objCurrMultiChoiceRs

	strParamType = CStr(objInfo("PARAMTYPE"))
	If strParamType <> "G" Then
		strUniqueParamName = MakeUniqueName(objInfo)
	End If

	Select Case strParamType
	Case "S":
		If Not OnSpecialDrawParameter(CStr(objInfo("NAME")), objInfo, strUniqueParamName) Then
			Call DrawInputRow(DB2HTML_BR(objInfo("TITLE")), objInfo("PARAMVALUE"), strUniqueParamName, "text", 50, GetSafeLng(objInfo("EXTRAINFO"), Null), "")
		End If
	Case "A":
		nAreaHeight = GetAreaHeight(GetSafeLng(objInfo("EXTRAINFO"), Null))
		Call DrawInputRow(DB2HTML_BR(objInfo("TITLE")), objInfo("PARAMVALUE"), strUniqueParamName, "area", 50, nAreaHeight, "")
	Case "N":
		nMaxValue = GetSafeLng(objInfo("EXTRAINFO"), 1000)
		Call DrawInputRow(DB2HTML_BR(objInfo("TITLE")), objInfo("PARAMVALUE"), strUniqueParamName, "text", 15, Len(CStr(nMaxValue)), "")
	Case "D":
		strDate = objInfo("PARAMVALUE_DT")
		If IsDull(strDate) Then strDate = Null Else strDate = Date2Str(strDate)
		OpenFormGroup DB2HTML_BR(objInfo("TITLE"))
		DrawDateInput strUniqueParamName, strDate, DB2Java(objInfo("TITLE"))
		CloseFormGroup
	Case "B":
			'//отобразить комбобокс в зависимости от paramvalue 1=да   0=нет  -1=пустое

			Dim  selectedValueId
			If IsDull( objInfo("PARAMVALUE")) Then
				selectedValueId = -1
			Else
				selectedValueId  = objInfo("PARAMVALUE")
			End If

			Dim arr1
			arr1 = Array(-1, " ", 0, "Нет", 1, "Да")
			strOnChange = GetSpecialOnChangeForList(CStr(objInfo("NAME")))
			Call DrawSimpleFilterRow(DB2HTML_BR(objInfo("TITLE")), strUniqueParamName, arr1, selectedValueId, false, strOnChange)

	Case "L":
		If Not DrawParamFeatures(Cstr(objInfo("NAME"))) Then
			Set objListItems = objInfo("chaptListItems").Value
			If objListItems.EOF Then
				DrawTitleRow DB2HTML_BR(objInfo("TITLE")), ""
			Else
				strOnChange = GetSpecialOnChangeForList(CStr(objInfo("NAME")))
				Call DrawSelectInfoRow(DB2HTML_BR(objInfo("TITLE")), GetSafeStrParam(objInfo("PARAMVALUE_ID"), "-1"), strUniqueParamName, objListItems, "ITEMID", "ITEMNAME", " ", strOnChange)
			End If
		Else
			OpenFormGroup DB2HTML_BR(objInfo("TITLE"))
			Call DrawParameterFeatures(objInfo, strUniqueParamName )
			CloseFormGroup
		End If
	Case "P":
		If Not DrawParamFeatures(Cstr(objInfo("NAME"))) Then
			Set objListItems = objInfo("chaptListItems").Value
			If objListItems.EOF Then
				DrawTitleRow DB2HTML_BR(objInfo("TITLE")), ""
			Else
				strOnChange = GetSpecialOnChangeForList(CStr(objInfo("NAME")))
				Call DrawSelectInfoRow(DB2HTML_BR(objInfo("TITLE")), GetSafeStrParam(objInfo("PARAMVALUE_ID"), "-1"), strUniqueParamName, objListItems, "ITEMID", "ITEMNAME", " ", strOnChange)
			End If
		Else
			OpenFormGroup DB2HTML_BR(objInfo("TITLE"))
			Call DrawParameterFeatures(objInfo, strUniqueParamName )
			CloseFormGroup
		End If
	Case "M", "R":
		If GetSafeStr(objInfo("TITLE"), -1, "") <> strOldTitle Then
			If strParamType = "M" Then
				Set objCurrMultiChoiceRs = objInfo("chaptMultiChoiceItems").Value
			Else
				Set objCurrMultiChoiceRs = objInfo("chaptRMultiChoiceItems").Value
			End If
			OpenFormGroup DB2HTML_BR(objInfo("TITLE"))
			Call DrawMChoiceParam(objInfo("PARAMETERID"), objInfo("TITLE"), strUniqueParamName, objInfo("SYDEPEND"), objCurrMultiChoiceRs, False)
			CloseFormGroup
		End If
		strOldTitle = GetSafeStr(objInfo("TITLE"), -1, "")
	Case "G":
		DrawGroup objInfo("TITLE"), objInfo
	Case "F":
		OpenFormGroup DB2HTML_BR(objInfo("TITLE"))
		%><input type="hidden" disabled name="<%=strUniqueParamName%>" /><%

		Call DrawFreeParam(objInfo, nElementStatus)
		CloseFormGroup
	Case Else
		Call GenerateError(obLanguage("SetupSchoolUI","kInvalidParameterType"))
	End Select
End Sub

Sub DrawGroup(strTitle, objInfo)
	%>
	<div class="form-group">
		<div class="visible-xs-block visible-sm-block text-center"><label class="control-label <%=GetFiltersLabelWidth()%>"><%=strTitle%></label></div>
		<label class="control-label hidden-xs hidden-sm <%=GetFiltersLabelWidth()%>"><%=strTitle%></label>
		<div class="<%=GetFiltersWidth()%>">
			<%Call DrawInfoGroup(objInfo)%>
		</div>
	</div>
	<%
End Sub

Sub DrawMChoiceParam(strParamID, strParamTitle, strParamName, strSYDepend, objMChoiceParam, bRO)
	Dim mdClass

	mdClass = "col-md-12"
	%><div class="row"><%
		If Not objMChoiceParam.EOF Then
			mdClass = "col-md-2"
			%><div class="col-md-10"><%
			While Not objMChoiceParam.EOF%>
				<%=DB2HTML(objMChoiceParam("ITEMNAME"))%><br><%
				objMChoiceParam.MoveNext
			Wend
			%></div><%
		End If
		If Not readonly And Not bRO Then
			%><div class="<%=mdClass%>">
				<input type="hidden" disabled name="<%=strParamName%>"/>
				<%DrawMchoiceParamEdit strParamID, strParamTitle, strSYDepend%>
			  </div><%
		End If
	%></div><%
End Sub

Sub DrawMchoiceParamEdit(strParamID, strParamTitle, strSYDepend)
	Call DrawContextButtons(Array("editMChoiceParam(" & strParamID & ", '" & (DB2Java(strParamTitle)) & "', '" & strSYDepend & "')", obLanguage("SetupSchoolUI","kBtnEditParam"), "primary edit-mchoice", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")
End Sub

' common for readonly and not readonly!
Sub DrawFreeParam(objInfo, nElementStatus)
	%>&nbsp;<%
End Sub

Function OnSpecialDrawParameter(strParamName, objInfo, strUniqueParamName)
	If InStr(strParamName, "SNILS") > 0 Then
		strSnils = objInfo("PARAMVALUE")
		Call DrawInputRow(DB2HTML_BR(objInfo("TITLE")), strSnils, strUniqueParamName + "_MASK", "text", 25, 20, "")
		WriteHiddenTags Array(strUniqueParamName, strSnils)
		OnSpecialDrawParameter = True
	Else
		OnSpecialDrawParameter = False
	End If
End Function

Function GetSpecialOnChangeForList(strParamName)
	GetSpecialOnChangeForList = ""
End Function

Function DrawParamFeatures( strParamName )
	DrawParamFeatures = False
End Function

Function GetNameFromList(strValue, objList, strID, strName)
	GetNameFromList = ""
	If IsDull(strValue) Then
		Exit Function
	End If
	While Not objList.EOF
		If CStr(strValue) = CStr(objList(strID)) Then
			GetNameFromList = CStr(objList(strName))
			Exit Function
		End If
		objList.MoveNext
	WEnd
End Function

Sub DrawPedagogicalPortfolioLabel()
	%><label style="color:red"><%=strPortfolioParamAlarmMessage%><a href="#" onclick="<%=strPortfolioParamAlarmHrefOnClick%>"> <%=strPortfolioParamAlarmHrefMessage%></a></label><%
End Sub

Sub DrawInfoGroup_RO(objInfo)
	Dim objGroup, bShowItemTitle
	Dim nParamCount
	Dim objCurrMultiChoiceRs
	Dim strParamType
	Dim strBoolValDB, strBoolVal

	Set objGroup = objInfo("groupParameters").Value
	If objGroup.EOF Then
		Response.Write "&nbsp;"
		Exit Sub
	End If

	nParamCount = objGroup.RecordCount

	bShowItemTitle = GetSafeLng(objInfo("EXTRAINFO"), 0) <> 0
	%><div class="row"><%
	While Not objGroup.EOF
		strParamType = CStr(objGroup("PARAMTYPE"))
		If strParamType = "A" Or strParamType = "M" Then
			%><div class="col-md-12 group-item"><%
		Else
			%><div class="col-md-4 group-item"><%
		End If

		If bShowItemTitle And Not IsDull(objGroup("TITLE")) Then
			%><label><%=DB2HTML_BR(objGroup("TITLE"))%></label><br /><%
		End If

		Select Case strParamType
		Case "S", "A", "N", "F":
			rw DB2HTML(objGroup("PARAMVALUE"))
		Case "D":
			rw Date2Str(objGroup("PARAMVALUE_DT"))
		Case "B":
			strBoolValDB = GetSafeStr(objInfo("PARAMVALUE"), -1, "")
			strBoolVal = ""
			If strBoolValDB = "1" Then
				strBoolVal = obLanguage("Common","kYes")
			ElseIf strBoolValDB = "0" Then
				strBoolVal = obLanguage("Common","kNo")
			End If
			If Not IsDull(strBoolVal) Then rw DB2HTML(strBoolVal)
		Case "L", "P":
			If Not IsDull(objGroup("PARAMVALUE_ID")) Then rw DB2HTML(objNSNET.GetUserParamItemInfo(objGroup("PARAMVALUE_ID"))("ITEMNAME") )
		Case "M":
			'Set objCurrMultiChoiceRs = objGroup("chaptMultiChoiceItems_Group").Value
			'Call DrawMChoiceParam("", "", "", "", objCurrMultiChoiceRs, True)
		Case Else
			Call GenerateError(obLanguage("SetupSchoolUI","kInvalidParameterType"))
		End Select
		%></div><%

		objGroup.MoveNext
	WEnd

	%></div><%
End Sub

Sub DrawInfoElement_RO(objInfo)
	Dim strParamType
	Dim strDate
	Dim strValue
	Dim objCurrMultiChoiceRs
	Dim strItemName
	Dim strBoolValDB, strBoolVal
	Dim strUniqueParamName
	Dim strParamName
	Dim strParameterId
	strParamName = CStr(objInfo("NAME"))
	strParameterId = CStr(objInfo("PARAMETERID"))
	strParamType = CStr(objInfo("PARAMTYPE"))
	Select Case strParamType
	Case "S", "A", "N":
		strValue = objInfo("PARAMVALUE")
		If InStr(objInfo("NAME"), "SNILS") > 0 Then
			strUniqueParamName = MakeUniqueName(objInfo)
			Call DrawInputRowEx(DB2HTML_BR(objInfo("TITLE")), strValue, strUniqueParamName + "_MASK", "text", 25, 20, Null, "disabled=""disabled""")
			WriteHiddenTags Array(strUniqueParamName, strValue)
		Else
			If Len(strValue) > 50 Then
				If kShowReadonlyOldParameters And IsPortfolioParam(strParamName) Then
					Call DrawReadonlyRowExPlus(DB2HTML_BR(objInfo("TITLE")), objInfo("PARAMVALUE"), "", strPortfolioParamAlarmMessage, strPortfolioParamAlarmHrefMessage, strPortfolioParamAlarmHrefOnClick)
				Else
					Call DrawInputRowEx(DB2HTML_BR(objInfo("TITLE")), objInfo("PARAMVALUE"), "", "area", 5, 5, Null, "disabled=""disabled""")
				End If
			Else
				If kShowReadonlyOldParameters And IsPortfolioParam(strParamName) Then
					Call DrawReadonlyRowExPlus(DB2HTML_BR(objInfo("TITLE")), objInfo("PARAMVALUE"), "", strPortfolioParamAlarmMessage, strPortfolioParamAlarmHrefMessage, strPortfolioParamAlarmHrefOnClick)
				Else
					Call DrawReadonlyRow(DB2HTML_BR(objInfo("TITLE")), objInfo("PARAMVALUE"))
				End If
			End If
		End If
	Case "D":
		If IsDull(objInfo("PARAMVALUE_DT")) Then
			strDate = ""
		Else
			strDate = Date2Str(objInfo("PARAMVALUE_DT"))
		End If
		Call DrawReadonlyRow(DB2HTML_BR(objInfo("TITLE")), strDate)
	Case "B":
		strBoolValDB = GetSafeStr(objInfo("PARAMVALUE"), -1, "")
		strBoolVal = ""
		If strBoolValDB = "1" Then
			strBoolVal = obLanguage("Common","kYes")
		ElseIf strBoolValDB = "0" Then
			strBoolVal = obLanguage("Common","kNo")
		End If
		Call DrawReadonlyRow(DB2HTML_BR(objInfo("TITLE")), strBoolVal)
	Case "L","P":
		' Почему-то в случае пустого значения - вообще весь параметр не выводился.
		strItemName = ""
		If Not IsDull(objInfo("PARAMVALUE_ID")) Then
			strItemName = objNSNET.GetUserParamItemInfo(objInfo("PARAMVALUE_ID"))("ITEMNAME")
		End If
		Call DrawReadonlyRow(DB2HTML_BR(objInfo("TITLE")), strItemName)
	Case "M", "R":
		If GetSafeStr(objInfo("TITLE"), -1, "") <> strOldTitle Then
			If strParamType = "M" Then
				Set objCurrMultiChoiceRs = objInfo("chaptMultiChoiceItems").Value
			Else
				Set objCurrMultiChoiceRs = objInfo("chaptRMultiChoiceItems").Value
			End If
			OpenFormGroup DB2HTML_BR(objInfo("TITLE"))
			Call DrawMChoiceParam("", "", "", "", objCurrMultiChoiceRs, True)
			CloseFormGroup
		End If
		strOldTitle = GetSafeStr(objInfo("TITLE"), -1, "")
	Case "G":
		OpenFormGroup DB2HTML_BR(objInfo("TITLE"))
		Call DrawInfoGroup_RO(objInfo)
		If kShowReadonlyOldParameters And strParameterId = "26" Then
			Call DrawPedagogicalPortfolioLabel()
		End If
		CloseFormGroup
	Case "F":
		OpenFormGroup DB2HTML_BR(objInfo("TITLE"))
		Call DrawFreeParam(objInfo, kParamStatus_RO)
		CloseFormGroup
	Case Else
		Call GenerateError(obLanguage("SetupSchoolUI","kInvalidParameterType"))
	End Select
End Sub

Sub DrawInfoElement_RO_NOTSHOW(objInfo)
	Dim strUniqueParamName
	Dim i, strPassValue

	strUniqueParamName = MakeUniqueName(objInfo)
	OpenFormGroup DB2HTML_BR(objInfo("TITLE"))
		strPassValue = ""
		For i = 1 To Len(Cstr(objInfo("PARAMVALUE")))
			strPassValue = strPassValue & "*"
		Next
		DrawInput strPassValue, "", "password", "", 0, 0, "readonly"
	CloseFormGroup
End Sub

Function ParamShowStatusForSpecifiedRoles(strParamName)
	Dim i, arrRoleGroupFilter, rightFilter, paramFilter
	Dim retAccess
	If IsArray(arrUserInfoParamsAccess) Then
		For i = 0 to UBound(arrUserInfoParamsAccess,2)
			rightFilter = arrUserInfoParamsAccess(0, i)
			If HasUserRight(rightFilter) Then
				arrRoleGroupFilter = arrUserInfoParamsAccess(1, i)
				If arrRoleGroupFilter(nRoleFilter) Then
					paramFilter = arrUserInfoParamsAccess(2, i)
					If paramFilter = strParamName Then
						retAccess = arrUserInfoParamsAccess(3, i)
						If retAccess = ParamAccess_Full Then
							If readonly Then
								retAccess = ParamAccess_ReadOnly
							Else
								bCanSave = True
							End If
						End If
						ParamShowStatusForSpecifiedRoles = retAccess
						Exit Function
					End IF
				End If
			End If
		Next
	End If
	ParamShowStatusForSpecifiedRoles = ParamAccess_Hidden
End Function

Function GetUserAccessTypeToParam(strParamName)
	Dim i

	GetUserAccessTypeToParam = 0
	For i = 0 To nLastRightParamAccess
		If HasUserRight(arrUserInfoParamsAccess(0,i)) And arrUserInfoParamsAccess(2,i) = strParamName And arrUserInfoParamsAccess(1,i)(nRoleFilter) Then
			If arrUserInfoParamsAccess(3,i) = 1 Then
				GetUserAccessTypeToParam = arrUserInfoParamsAccess(3,i): Exit Function
			ElseIF arrUserInfoParamsAccess(3,i) > GetUserAccessTypeToParam Then
				GetUserAccessTypeToParam = arrUserInfoParamsAccess(3,i)
			End If
		End If
	Next
End Function

'// отрисовка параметров у кторых нет GroupId
Sub DrawAttributeParams()
	Dim nStatus
	Dim paramReadonly
	Dim strParamName
	Dim strParameterId

	If bNewAttrParams Then
			%>
		<user-info-parameters>
			<div class="alert"><%=obLanguage("Movement","kPleaseWait")%></div>
		</user-info-parameters>
		<user-info-attachments>
		</user-info-attachments>
			<%
		Exit Sub
	End If

	strOldTitle = ""
	If readonly Then
		While Not objInfo.EOF
			strParamName = objInfo("NAME").Value
			If not(kAddrByPlaceParamName = strParamName And IsDull(objInfo("PARAMVALUE"))) Then
				nStatus = CustomDrawInfoElement(objInfo)
				If ((kShowReadonlyOldParameters And IsPortfolioParam(strParamName)) Or (strParamName = "REG_ADD_BY_PLACE_STR")) And (nStatus = kParamStatus_Common) Then
					'Параметры, связанные с аттестацией, переведены пока в режим ReadOnly
					nStatus = kParamStatus_RO
				End If

				Select Case nStatus
					Case kParamStatus_RO_NOTSHOW
						DrawInfoElement_RO_NOTSHOW(objInfo)
					Case kParamStatus_Hidden
					Case Else
						DrawInfoElement_RO(objInfo)
				End Select
			End If
			objInfo.MoveNext
		Wend
	Else
		While Not objInfo.EOF
			strParamName = objInfo("NAME").Value
			If not(kAddrByPlaceParamName = strParamName And IsDull(objInfo("PARAMVALUE"))) Then
				strParameterId = objInfo("PARAMETERID").Value
				nStatus = CustomDrawInfoElement(objInfo)
				If ((kShowReadonlyOldParameters And (IsPortfolioParam(strParamName) Or strParameterId = "26")) Or (strParamName = "REG_ADD_BY_PLACE_STR")) And (nStatus = kParamStatus_Common) Then
					'Параметры, связанные с аттестацией, переведены пока в режим ReadOnly
					nStatus = kParamStatus_RO
				End If

				If nStatus = kParamStatus_Common Then
					Call DrawInfoElement(objInfo, nStatus)
				ElseIf nStatus = kParamStatus_RO Then
					DrawInfoElement_RO(objInfo)
				ElseIF nStatus = kParamStatus_RO_NOTSHOW Then
					DrawInfoElement_RO_NOTSHOW(objInfo)
				End If
			end if
			objInfo.MoveNext
		WEnd
	End If
End Sub

Sub DrawSpecials()
End Sub

Sub DrawSpecialTable()
	Call DrawSpecials()
	Call DrawAttributeParams()
	If bNewAttrParams Then Exit Sub
	If bFullAccessEditing Then Call DrawAttachments()
	Call DrawComment()
End Sub

Sub DrawSpecialMainTable()
End Sub

Sub DrawParameterFeatures( objInfo, strUniqueParamName )
End Sub

Sub GetUserRightsToEditing
End Sub

' Это чтобы вообще переделать показ элемента, в частности вообще не показывать его
Function CustomDrawInfoElement(objInfo)
	Dim strParamName, strParamID, nStatus, strSYDepend
	strParamName = CStr(objInfo("NAME"))
	strParamID = CLng(objInfo("PARAMETERID"))
	strSYDepend = CStr(objInfo("SYDEPEND"))
	nStatus = GetParamStatus(GetSafeStr(strParamName,-1, strParamID), strSYDepend)
	CustomDrawInfoElement = nStatus
End Function

Function GetParamStatusCommon(strParamName, strSYDepend)
	Dim nStatus
	If bFullAccessEditing Then
		nStatus = kParamStatus_Common
	Else
		Select Case paramShowStatusForSpecifiedRoles(strParamName)
			Case ParamAccess_Full
				nStatus = kParamStatus_Common
			Case ParamAccess_ReadOnly
				nStatus = kParamStatus_RO
			Case Else
				nStatus = kParamStatus_Hidden
		End Select
	End If

	If ReadOnly Then
		If nStatus = kParamStatus_Common Then
			nStatus = kParamStatus_RO
		End If
	End If
	GetParamStatusCommon = nStatus
End Function

Function GetParamStatus(strParamName, strSYDepend)
	GetParamStatus = GetParamStatusCommon(strParamName, strSYDepend)
End Function

'************************************************************************************************
'************************************************************************************************

Sub DrawReadOnlyInputRow( InfoName, strInfo, inputName, inputType, size, length, strAux )
	OpenFormGroup InfoName
		%><input type="text" name="<%=inputName%>" disabled="disabled" size="<%=TextInputSize(size)%>" maxlength="<%=length%>" value="<%=DB2Value(strInfo) %>" OnChange="dataChanged()"><%
		rw "&nbsp;" & strAux
	CloseFormGroup
	%><script>if (bowser.msie) $('input[name=ETN]').css({'backgroundColor': '#F5F5F5'});</script><%
End Sub

Function PopulateSelectWithAttr( objRs, strName, strIDField, strNameField, strCurID, strNameAttr, strValueAttr, strChange)
	If Not bIsDebug Then On Error Resume Next
	Dim bSelected, strCCurID, nCount, arr, i, arrItem
	bSelected = False
	strCCurID = ""
	nCount = 0
	i = 0
	If Not IsNull(strCurID) Then strCCurID = DB2Value( strCurID )
	ReDim arrItem(2)
	ReDim arr(0)
	While Not objRs.EOF
		If Not IsDull(objRs("SERIALNUMBER")) Then
			arrItem(0) = DB2Value(objRs(strIDField))
			arrItem(1) = DB2HTML(objRs(strNameField))
			arrItem(2) = DB2HTML(objRs(strValueAttr))
			arr(Ubound(arr)) = arrItem
			Redim Preserve arr(1 + Ubound(arr))
		End If
		i = i + 1
		objRs.MoveNext
	Wend
	If UBound(arr) <> 0 Then
		If UBound(arr) > 1 Then
			Response.Write "<nobr>&nbsp;&nbsp;&nbsp;<SELECT Name=""" & strName & """ onChange=""" & strChange & """>"
			For i = 0 to UBound(arr) - 1
				Response.Write "<OPTION VALUE=""" & arr(i)(0) & """" & " " & strNameAttr & "=""" & arr(i)(2) & """"
				If (IsNull(strCurID) Or arr(i)(0) = strCCurID) And Not bSelected Then
					Response.Write " SELECTED "
					bSelected = True
				End If
				Response.Write ">" & arr(i)(1)
				Response.Write "</OPTION>"
				nCount = nCount + 1
			Next
			Response.Write "</SELECT>"
		Else
			Response.Write "<nobr>&nbsp;&nbsp;&nbsp;<b>" & DB2HTML( arr(0)(1) ) & "</b></nobr>"
			Response.Write "<input type=hidden name=""" & strName & """ value=""" & arr(0)(0)& """" & " " & strNameAttr & "=""" & arr(0)(2) & """>"
		End If
	Else
		%><script>$('input[name=TAUTH]')[1].disabled = true;</script><%
		PopulateSelectWithAttr = nCount
		Exit Function
	End If
	If Clng(strLoginType) <> kLoginType_Family Then
		%><script>if ($('select[name=children]').length) $('select[name=children]')[0].disabled = true;</script><%
	End If
	PopulateSelectWithAttr = nCount
End Function%>