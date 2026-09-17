<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/MySettings/MySettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SMS_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Photo_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/PasswordRecovery_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/SmsAccess_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nThemeId, nDefTab, strMobilePhone, strEMail
Dim bShowMPhone
Dim strFirstName, strMiddleName, strLastName, strPrefCm, strDate, strLoginName, dtBirthDate
Dim strWinLogon
Dim strQuestionForPswRecovery, AnswerToQuestionForPswRecovery
Dim strQuestion, strAnswer
Dim bUserHasMobilePhoneForSchoolSms
Dim obSecurityComponent

Dim bUserLinkedWithEsia, bUserLoggedViaEsia
Dim bUserLinkedWithIrtech, bUserLoggedViaIrtech
Dim bUserLinkedWithEsa, bUserLoggedViaEsa

Dim strEditUserName, bExistsPhoto
Dim bEsiaAuth, bIrtechAuth, bEsaAuth
Dim bIntegrationPFDO
Dim bEnableCertificatesDO, bPfdoIntegrationDontRequireEmail 
Dim bIntegrationPFDOType
Dim strStudentID, rsStudents, bStudentsIsEmpty
Dim bShowCertificateField
Dim bIsStudentOver14Years

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kMySettings")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSettings
End Function

Sub ReadState()
	Dim strIdpLogin
	bUserLinkedWithEsia = False
	bUserLoggedViaEsia = False

	strEditUserName		= objNSNET.GetUserNickName(strUserID)
	bExistsPhoto		= Not IsDull(objNSNET.GetUserPhotoName(strUserID))

	bEsiaAuth	= obContext.ServerSettings.UserAuthorizationSettings.EsiaAuth
	bIrtechAuth = obContext.ServerSettings.UserAuthorizationSettings.IrtechAuth
	bEsaAuth	= obContext.ServerSettings.SystemSettings.SoloIntegration

	bEnableCertificatesDO = obContext.ServerSettings.SystemSettings.EnableCertificatesDO
	bIntegrationPFDO = (obContext.ServerSettings.SystemSettings.IntegrationPFDOType = 3)
	bPfdoIntegrationDontRequireEmail = obContext.ServerSettings.SystemSettings.PfdoIntegrationDontRequireEmail
	bIntegrationPFDOType = obContext.ServerSettings.SystemSettings.IntegrationPFDOType

	If bEsiaAuth Or bIrtechAuth Or bEsaAuth Then
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
		If bEsaAuth Then
			bUserLinkedWithEsa = obSecurityComponent.IsUserLinkedWithIdp(CLng(strUserID), "esa")
			bUserLoggedViaEsa = (strIdpLogin = "esa")
		End If
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stBackPage, strScriptName)
End Sub

Sub Main()
	Dim objUserComponent
	Dim objSettings
	Dim bCollectParamsInfo, dctParamsUser
	Dim objRs, objInfo, objPswRecoveryInfo
	Dim questionsListValues
	Dim DefDesktopIfEmpty
	Dim nSessionRole
	Set objUserComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
	Call obTokenMgr.SetData(strToken, stValidIDs, Array(strUserID))
	Set objInfo = objNSNET.GetUserInfo(strUserID)
	Set objPswRecoveryInfo = objUserComponent.GetPasswordRecoveryInfo(strUserId)
	Set objSettings = objNSNET.GetUserSettings(strUserID)
	Call InitStudents()

	bUserHasMobilePhoneForSchoolSms = ParentHasMobilePhoneForSchoolSms(strUserID)
	If Not objInfo.EOF Then
		strLoginName = GetSafeStr(objInfo("LOGINNAME"), -1, kDefValue)
		strFirstName = GetSafeStr(objInfo("FIRSTNAME"), -1, "")
		strMiddleName = GetSafeStr(objInfo("MIDDLENAME"), -1, "")
		strLastName = GetSafeStr(objInfo("LASTNAME"), -1, "")
		strPrefCm = GetSafeStr(objInfo("PREFFEREDCM"), -1, "")
		strEMail = GetSafeStr(objInfo("EMAIL"), -1, "")
		strDate = GetSafeStr(objInfo("BIRTHDATE"), -1, "")
		dtBirthDate = objInfo("BIRTHDATE")
		strWinLogon = GetSafeStr(objInfo("WINACCOUNT"), -1, "")
	End IF

	If Not objPswRecoveryInfo.EOF Then
		strQuestion = GetSafeStr(objPswRecoveryInfo("RECOVERYQUESTION"), -1, "")
		strAnswer = GetSafeStr(objPswRecoveryInfo("RECOVERYANSWER"), -1, "")
	End IF

	DefDesktopIfEmpty = DefaultDesktop_Announcements
	nSessionRole =  CLng(Request("SESSIONROLE"))
	If HasUserRole(rlStudent) Or (HasUserRole(rlParent) And (nSessionRole = 0 Or nSessionRole = rlParent)) Then
		DefDesktopIfEmpty = DefaultDesktop_MainScreen
	End If
	bShowCertificateField = (bIntegrationPFDOType = 1 Or bIntegrationPFDOType = 3) And (HasUserRole(rlStudent) Or (HasUserRole(rlParent) And (nSessionRole = 0 Or nSessionRole = rlParent)))
	nDefTab = GetSafeLng(objSettings.DefaultDesktop, DefDesktopIfEmpty)

	nThemeId = GetSafeLng(objSettings.Theme, 0)
	bShowMPhone = objSettings.ShowMobilePhone
	strMobilePhone = GetSafeStr(objNSNET.GetMobilePhoneForUser(strUserID), 20, "")

	If Not Trim(strDate) = "" Then
		bIsStudentOver14Years = dateadd("yyyy",-14,DateValue(date)) >= DateValue(strDate)
	Else 
		bIsStudentOver14Years = false
	End If

	Call InitYears()
End Sub

Sub DrawButtons()
	If readonly Then Exit Sub
	ButtonSave "OnSave();", obLanguage("Common","kSave")
	ButtonReset "redirectYourSelf()", obLanguage("Common","kReset")
		
	rw "<span id=""delPhoto"">"
	ButtonDelEx "deletePhoto();", obLanguage("Photo","kDeletePhoto"), obLanguage("Photo","kDeletePhoto")
	rw "</span>"

	SimpleButton "changePasswordCtrl.changePassword()", obLanguage("Common","kChangePassword")

	Call DrawSSOLinkButtons

	If bIntegrationPFDO Then
		Call DrawPFDOButton()
	End If
End Sub

Sub DrawLinkButtons
	If obContext.ServerSettings.UserAccountsSettings.QueueImportMode And bIsStaff Then SimpleButton "taskQueue.showQueuedTasks();", obLanguage("Movement", "kImportProcessesQueue", strFunctionalityType)
	
	If MarksBySmsAvailable() And ParentHasMobilePhoneForSchoolSms(strUserId) Then
		SimpleButton "openMarksBySms()", obLanguage("MenuFolders","kMarksBySms")
	End If
End Sub

Function MarksBySmsAvailable()
	MarksBySmsAvailable = False
	If strFunctionalityType <> kFuncType_Common Then
		Exit Function
	End If
	If Not HasUserRole(rlParent) Then
		Exit Function
	End If
	MarksBySmsAvailable = SendingSchoolSmsAvailable()
End Function

Sub DrawPhoto()
	Dim strFotoImg

	If Not PERSON_DATA Then
		Response.Write "&nbsp;"
		Exit Sub
	End If

	strFotoImg = GetPhotoImg(strUserID)
	If HasUserRight(arSetPhoto) Then
		%><a href="JavaScript:photo()" title="<%=obLanguage("SetupSchoolUI","kSetPhoto")%>" id="photo"><%=strFotoImg%></a><%
	Else
		Response.Write strFotoImg
	End If
End Sub

Sub InitStudents()
	If HasUserRole(rlParent) Then
		If IsDull( Request("SID") ) Then
			strStudentID = GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0")
		Else
			strStudentID = GetSafeID( Request("SID"), "0")
		End If
		Set rsStudents = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, false, true)
		bStudentsIsEmpty = rsStudents.EOF
		If bStudentsIsEmpty Then Exit Sub
		If strStudentID = "0" Then strStudentID = GetSafeID( rsStudents("STUDENTID"), NULL )
	Else
		bStudentsIsEmpty = False 
		strStudentID = strUserID
	End If
End Sub

Sub DrawParentStudents2()
	Dim strIdColumn, strNameColumn


	If IsEmpty(rsStudents) Then
		Exit Sub
	End If

	rsStudents.MoveFirst

	If rsStudents.Fields.Exists("STUDENTID") Then
		strIdColumn = "STUDENTID"
	ElseIf rsStudents.Fields.Exists("ID") Then
		strIdColumn = "ID"
	End If

	If rsStudents.Fields.Exists("STUDENTNAME") Then
		strNameColumn = "STUDENTNAME"
	ElseIf rsStudents.Fields.Exists("NICKNAME") Then
		strNameColumn = "NICKNAME"
	End If

	If IsEmpty(strIdColumn) Or IsEmpty(strNameColumn) Then
		Exit Sub
	End If

	%>
	<div class="form-group"><label class="control-label col-md-4">Дети: </label><div class="col-md-8"><select class="form-control" id="ch_select" onchange="GetUserCertificate()">
				<%PopulateSelect rsStudents, strIdColumn, strNameColumn, strStudentID %>
				</select
	></div></div>
	<%
End Sub

Sub onHead()
	Call MobileValidScript()
	Call DrawPasswordRecoveryScripts()%>

	<script src="/js/libs/jquery.inputmask.bundle.min.js" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("PasswordRecovery.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("winauth.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("maskedInputs.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/common/js/queue.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/pages/users/js/changePassword.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/pages/common/js/emailValidator.js")%>" type="text/javascript"></script>

	<script type="text/javascript">
		var changePasswordCtrl = new changePasswordCtrl({ userEditHimself: true, minPasswordLength: <%=obContext.ServerSettings.SecuritySettings.MinPasswordLength%>, userId: <%=strUserID%>});
		var emailValidatorCtrl;

	$(document).ready(function() {
		var recoveryAnswerInput = $("[name=RecoveryAnswer]");
		var question = $("[name=Questions]").val();

		if(question == 0) {
			recoveryAnswerInput.val("");
			if(!recoveryAnswerInput.prop("disabled")) {
				recoveryAnswerInput.prop("disabled", true);
			}
		}
		else{
			if(recoveryAnswerInput.prop("disabled")) {
				recoveryAnswerInput.removeProp("disabled");
			}

			recoveryAnswerInput.on("click", function() {
				recoveryAnswerInput.val("");
			});
		}

		<%If Not bExistsPhoto Then%>
			$('#delPhoto').hide();
		<%End If%>

		emailValidatorCtrl = new EmailValidatorCtrl.EmailValidatorCtrl();
		<% If bShowCertificateField Then %>
			GetUserCertificate();
		<% End If %>
	});

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
				userId: <%=strUserID%>
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
		$.show.confirmation(language.Generic.Photo.kRemovePhotoConfirm + '<%=(strEditUserName & "?")%>').then(function() {
			jsSubmit({
				action: '/asp/SetupSchool/PhotoDelete.asp',
				data: {userId: <%=strUserID%>},
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

	function OnChangeSelect(){};

	function redirectYourSelf() {
		postTo("MySettings.asp", {});
	}

	function openMarksBySms(){
		checkForChanges().then(function(){
			ok("Edit", "/asp/MySettings/MarksBySms.asp");
		});
	}

	function OnSave() {
		if (isMobileValid(document.Edit, <%=Bool2Js( Not bUserHasMobilePhoneForSchoolSms)%>) && isEMailValid() && isPswRecoveryInfoValid(false)){
			DetermineQuestion();

			var selectYear = $('select[name="CURRYEAR"]');
			if (selectYear.val() != selectYear.data("storedState")) {
				ok_check_db('Edit', '');
				return;
			}

			var saveForm = document.forms['Edit'];
			jsSaveForm(saveForm);
		
			return;
		}
	}

	function isEMailValid() {
		var form = document.Edit;
		var elEmail = form.elements['EMAIL'];
		var sEmail = elEmail.value;

		if (!emailValidatorCtrl.isEmailValid(sEmail)) {
			elEmail.focus();
			alert(language.Generic.SetupSchoolUI.kSetEMail);
			return false;
		}
		return true;
	}

	function Link(idp) {
		ok('Edit','/asp/sso/link.asp?idp=' + idp);
	}

	function OpenPFDO() {
		var wnd = null;
		var winOptions = {
			url: "/webapi/integration/pfdo/get?at=" + appContext.at, name: '_blank', specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=820,height=620', winChild: wnd };
		windowOpen( winOptions );
		wnd = winOptions.winChild;
		center(wnd, 750, 560);
		/*postTo({path: "/webapi/integration/pfdo/get?at=" + appContext.at, method: "get"});*/
	}

	function RemoveLink(idp, confirmText) {
		$.show.confirmation(confirmText).then(function() {
			ok('Edit','/asp/sso/RemoveLink.asp?idp=' + idp);
		});
	}
	<%If bShowCertificateField Then Call DrawPfdoScripts %>

	</script><%
End Sub

Sub DrawPfdoScripts
%>
	var statusDictionary = {
		0: "Не использован",
		1: "Актуален",
		2: "Неактивирован"
	}

	function CreateCertificate() {
		var studentId = <% If HasUserRole(rlParent) Then %> $("#ch_select").val() <% Else %><% =strUserID %> <% End IF %>;

<% If bIntegrationPFDOType = 3 Then %>
		var category =  $("#category").val();

		if($("#category")[0].options.length > 0 && category == -1) {
			alert("Необходимо выбрать категорию сертификата");
			return;
		}
<% End If %>
		jsSubmit({
			action: "/webapi/educcertificates/createById",
			method: "POST",
			queryData: {studentId: studentId, <% If bIntegrationPFDOType = 3 Then %> categoryId: category <% End If %> },
			showProcessing: true
		}).then(function (response) {
			DrawCertificate(response);
		});
	}

	function GetUserCertificate() {
		$("#certificateImg").hide();
		$("#categoryDiv").hide();
		$("#certificateAddButton").hide();
		
		var userId = <% If HasUserRole(rlParent) Then %> $("#ch_select").val() <% Else %><% =strUserID  %> <% End IF %>;
		jsSubmit({
			action: "/webapi/educcertificates/student/" + userId,
			method: "GET",
			showProcessing: true,
			defaultErrorHandling: false
		}).then(function (certificate) {
			DrawCertificate(certificate);
		});
	}

	function DrawCertificate(certificate) {
		var userId = <% If HasUserRole(rlParent) Then %> $("#ch_select").val() <% Else %><% =strUserID  %> <% End IF %>;
		if (certificate && certificate.studentId == userId) {
				$("#certificateImg").hide();
				jsSubmit({
							action: "/webapi/educcertificates/pdf/" + userId + "/exists",
							method: "GET",
							showProcessing: true
						}).then(function (response) {
					if(response)
						$("#certificateImg").show();
				})
				$("[name=certificateNumber]").val(certificate.number);
				$("[name=certificateStatus]").val(statusDictionary[certificate.status.id]);
				<% If bIntegrationPFDOType = 3 Then %>
				$("[name=certificateStartDate]").val(dateUtils.date2str(moment(certificate.startDate).toDate()));
				$("[name=certificateEndDate]").val(dateUtils.date2str(moment(certificate.endDate).toDate()));
				<% End If %>
				$("#categoryDiv").hide();
				$("#certificateAddButton").hide();
				$("#certificateForm").show();
			}
			else {
				$("#certificateImg").hide();
				$("#certificateAddButton").show();
				$("#certificateForm").hide();
<% If bIntegrationPFDOType = 3 Then %>
				getAddCertifCategories();
<% End If %>
				$("#categoryDiv").show();
			}
	}

	function GetCertificatePdf() {
		var userId = <% If HasUserRole(rlParent) Then %> $("#ch_select").val() <% Else %><% =strUserID  %> <% End IF %>;
		downloadFile( "/webapi/educcertificates/pdf/" + userId);
	}

	function GetCertificateBlank() {
		if (appContext.hasRole(4)) {
			var studentId = <% If HasUserRole(rlParent) Then %> $("#ch_select").val() <% Else %><% =strUserID %> <% End IF %>;
			downloadFile("/webapi/em/certifsettings/studentblank/" + studentId);
			return;
		}

		if (appContext.hasRole(5)) {
			var userId = <% If HasUserRole(rlParent) Then %> $("#ch_select").val() <% Else %><% =strUserID  %> <% End IF %>;
			downloadFile("/webapi/em/certifsettings/parentblank/" + userId);
			return;
		}
	}

	function getAddCertifCategories() {
		var studentId = <% If HasUserRole(rlParent) Then %> $("#ch_select").val() <% Else %><% =strUserID %> <% End IF %>;
		$("#categorySelect").hide();
		$("#selectWarning").hide();
		$("#noFounder").hide();
		$("#noValue").hide();

		jsSubmit({
			action: "/webapi/educcertificates/addcertifcategories/hasfounder",
			method: "GET",
			queryData: {studentId: studentId},
			showProcessing: true
		}).then(function (response) {
			if(response) {
				jsSubmit({
					action: "/webapi/educcertificates/addcertifcategories/",
					method: "GET",
					queryData: {studentId: studentId},
					showProcessing: true
				}).then(function (response) {
					if(response.length==0) {
						$("#selectWarning").show();
						$("#noValue").show();
						return;
					}
					var select = $("#category")[0];

					if(response.length>1) {
						select.options[0] = new Option("", "-1", true, true);
						for (index = 0; index < response.length; ++index) {
							var element = response[index];
							select.options[index + 1] = new Option(element.name, element.id);
						}
					}
					else {
						var element = response[0];
						select.options[0] = new Option(element.name, element.id, true);
					}
					$("#categorySelect").show();
				});
			}
			else {
				$("#selectWarning").show();
				$("#noFounder").show();
			}
		})
	}
	
<%
End Sub

Sub onDrawPage()
	Dim objStaffRoles, strRoles, strRole
	Dim objIdpInfo%>

	<form name="Edit" method="post" class="form-horizontal form-xs" action="<%If HasUserRole(rlParent) Then%>SaveParentSettings.asp<%Else%>SaveMySettings.asp<%End IF%>" >
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("UID", strUserID, "DESTINATION", "", "MOBILEPHONE", strMobilePhone))%>
		<%Call DrawButtonPanel()%>

		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-2 col-md-push-10 ">
				<div class="center-block">
					<%Call DrawPhoto()%>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-md-pull-2"><%
				Call SetFiltersWidth("", "col-md-4", "col-md-8")
				Call DrawReadonlyRow( obLanguage("Common","kLastName"), strLastName )
				Call DrawReadonlyRow( obLanguage("Common","kFirstName"), strFirstName )
				Call DrawReadonlyRow( obLanguage("Common","kMiddleName"), strMiddleName )
				Call DrawReadonlyRow( obLanguage("Common","kBDate"), strDate )
				Call DrawReadonlyRow( obLanguage("Common","kUserName"), strLoginName )
				
				If bIsStaff Then
					Set objStaffRoles = objNSNET.GetStaffUserRoles(strUserID, strSchoolID)
					If objStaffRoles.RecordCount = 1 Then
						strRoles = "<input class=""form-control"" type=""text"" disabled=""disabled"" value="& objStaffRoles("ROLENAME") &">"
					Else
						strRoles = "<ul>"
						While Not objStaffRoles.EOF
							strRole = objStaffRoles("ROLENAME")
							If IsArray(Application(strRole)) Then strRole = Application(strRole)(strFunctionalityType)
							strRole = "<li>" & strRole & "</li>"
							strRoles = strRoles & strRole
							objStaffRoles.MoveNext
						Wend
						strRoles = strRoles & "</ul>"
					End If
				ElseIf HasUserRole(rlParent) Then
					Set objStaffRoles = objNSNET.GetStaffUserRoles(strUserID, strSchoolID)
					If objStaffRoles.RecordCount = 1 Then
						strRoles = "<input class=""form-control"" type=""text"" disabled=""disabled"" value="& objStaffRoles("ROLENAME") &">"
					Else
						strRoles = "<ul>"
						While Not objStaffRoles.EOF
							strRole = objStaffRoles("ROLENAME")
							If IsArray(Application(strRole)) Then strRole = Application(strRole)(strFunctionalityType)
							strRole = "<li>" & strRole & "</li>"
							strRoles = strRoles & strRole
							objStaffRoles.MoveNext
						Wend
						strRoles = strRoles & "</ul>"
					End If
				Else
					strRoles = obLanguage("Common","kStudent", strFunctionalityType)
				End If

				If obContext.ServerSettings.UserAuthorizationSettings.WindowsAuth Then
					Call DrawInputGroupRow( obLanguage("SetupSchoolUI","kWinLogon"), strWinLogon, "WLN", "", 25, 50, Array("BindWinAccout();", obLanguage("Login","kAssociateWithWindowsAccount"), "glyphicon glyphicon-log-in", ""))
				End If
				Call DrawQuestionsSelect()
				Call DrawCustomQuestionInput()
				Call DrawAnswerInput()
				OpenFormGroup obLanguage("MySettings","kSystemRole")
					rw strRoles
				CloseFormGroup
				Call DrawReadonlyRow( DB2Html(obLanguage("SetupSchoolUI","kMailManner")), IIf( strPrefCm = "C", obLanguage("SetupSchoolUI","kNSSchoolAnnoun") & NETSCHOOL_PRODUCT_NAME, IIf( strPrefCm = "E", "E-Mail " & IIF(isNull(strEMail),"",strEMail), obLanguage("SetupSchoolUI","kPaperMail"))) )
				Call DrawFilterRow("Edit", obLanguage("MySettings","kCurrentSchoolYear"), "CURRYEAR", syRs, "SCHOOLYEARID", "SCHOOLYEARNAME", obTokenMgr.GetData(strToken,stCurrYear), False)

				OpenFormGroup obLanguage("MySettings","kDesktop")
					%><select name="TAB" onchange="dataChanged()" class="form-control" <%=IIF(readonly, " disabled=""disabled"" ","")%>>
						<%Call DesktopList( nDefTab )
					%></select><%
				CloseFormGroup

				Call DrawLanguageSelect()
				'Call DrawSimpleFilterRow(obLanguage("MySettings","kThemeVariant"), "THEME", Array(0, obLanguage("MySettings","kFullVariant"), 1, obLanguage("MySettings","kShortVariant")), nThemeId, False, "")
				Call DrawInputRowEx(obLanguage("Common","kMobilePhone"), strMobilePhone ,"MOBILEPHONE_MASK","text",25,20,"", "data-inputmask=""'mask': '+9-999-9999999'""")
				Call DrawInputRow(obLanguage("Import","kEMail"), strEmail, "EMAIL", "text", 25, kMaxLengthEmail, "")
				Call DrawCheckBox(obLanguage("MySettings","kShowMPhone"), "SHOWMOBILEPHONE", 1, bShowMPhone, "")
				
				If bShowCertificateField Then
					If HasUserRole(rlParent) And Not bStudentsIsEmpty Then
						DrawEducCertificateParentField
					ElseIf HasUserRole(rlStudent) Then
						DrawEducCertificateStudentField
					End If
				End If
				%>
			</div>
		</div>
	</form><%
End Sub

Sub DrawEducCertificateParentField
	OpenFormGroup "Сертификат дополнительного образования"
		Call DrawParentStudents2()
		If bIntegrationPFDOType = 3 Then
			%><div>
				<a href="JavaScript:GetCertificateBlank()" title="Шаблон заявления на получение сертификата">Скачать шаблон заявления на получение сертификата</a>
			</div><%
		End If
		%><div>
			<% If bIntegrationPFDOType = 3 Then %>
			<div id="categoryDiv" style="display: none;">
				<div id="categorySelect" class="form-group" style="display: none;">
					<label class="control-label col-md-4">Категория сертификата:</label>
					<div class="col-md-8">
						<select id="category" class="form-control" name="status"></select>
					</div>
				</div>
				<div id="selectWarning" class="alert alert-info" role="alert">
					<p id="noFounder" style="display: none;">Для образовательной организации не заполнен код муниципалитета</p>
					<p id="noValue" style="display: none;">Не заданы категории сертификатов для данного муниципалитета</p>
				</div>
			</div>
			<% End If %>
			<div id="certificateAddButton" style="display: none;"><%
				Call ButtonWithClass("CreateCertificate()", "Получить сертификат", "Получить сертификат", Null, "btn-default")
			%></div>
		</div><%
		If bIntegrationPFDOType = 3 Then
			If bPfdoIntegrationDontRequireEmail Then
				%><div id="certificateWithoutEmail">
					<a href="JavaScript:GetCertificatePdf()" style="display: none;" title="Файл с изображением сертификата" id="certificateImg">Файл с изображением сертификата</a>
				</div><%
			End If
		End If
		%><div id="certificateForm" style="display: none;"><%
			Call DrawReadonlyRowEx("Номер", "", "certificateNumber")
			Call DrawReadonlyRowEx("Статус","", "certificateStatus")
			If(bIntegrationPFDOType = 3) Then
				Call DrawReadonlyRowEx("Дата начала действия", "", "certificateStartDate")
				Call DrawReadonlyRowEx("Дата окончания действия", "", "certificateEndDate")
			End If
		%></div><%
	CloseFormGroup
End Sub

Sub DrawEducCertificateStudentField
	OpenFormGroup "Сертификат дополнительного образования"
			If bIntegrationPFDOType = 3 Then
				%><div>
					<a href="JavaScript:GetCertificateBlank()" title="Шаблон заявления на получение сертификата">Скачать шаблон заявления на получение сертификата</a>
				</div><%
			End If
		%><div>
			<% If bIntegrationPFDOType = 3 Then %>
			<div id="categoryDiv" style="display: none;">
				<div id="categorySelect" class="form-group" style="display: none;">
					<label class="control-label col-md-4">Категория сертификата:</label>
					<div class="col-md-8">
						<select id="category" class="form-control" name="status"></select>
					</div>
				</div>
				<div id="selectWarning" class="alert alert-info" role="alert">
					<p id="noFounder" style="display: none;">Для образовательной организации не заполнен код муниципалитета</p>
					<p id="noValue" style="display: none;">Не заданы категории сертификатов для данного муниципалитета</p>
				</div>
			</div>
			<% End If %>
			<div id="certificateAddButton" style="display: none;"><%
				Call ButtonWithClass("CreateCertificate()", "Получить сертификат", "Получить сертификат", Null, "btn-default")
			%></div>
		</div><%
		If bIntegrationPFDOType = 3 Then
			If bPfdoIntegrationDontRequireEmail Then
				%><div id="certificateWithoutEmail">
					<a href="JavaScript:GetCertificatePdf()" style="display: none;" title="Файл с изображением сертификата" id="certificateImg">Файл с изображением сертификата</a>
				</div><%
			End If
		End If
		%><div id="certificateForm" style="display: none;"><%
			Call DrawReadonlyRowEx("Номер", "", "certificateNumber")
			Call DrawReadonlyRowEx("Статус","", "certificateStatus")
			If(bIntegrationPFDOType = 3) Then
				Call DrawReadonlyRowEx("Дата начала действия", "", "certificateStartDate")
				Call DrawReadonlyRowEx("Дата окончания действия", "", "certificateEndDate")
			End If
		%></div><%
	CloseFormGroup
End Sub

Sub DrawSSOLinkButtons
	%><div style="display: inline"><%
	If bIrtechAuth Then
		Call DrawSSOIdpLinkButtons("irtech", bUserLinkedWithIrtech, "btn-primary")
	End If
	If bEsiaAuth Then
		Call DrawSSOIdpLinkButtons("esia", bUserLinkedWithEsia, "btn-success")
	End If
	If bEsaAuth Then
		Call DrawSSOIdpLinkButtons("esa", bUserLinkedWithEsa, "btn-success")
	End If
	%></div><%
End Sub

Sub DrawPFDOButton
	%><div style="display: inline"><%
	Dim bShowNavigator, dtToday
	
	If bIntegrationPFDOType = 3 And (HasUserRole(rlStudent) Or HasUserRole(rlParent) Or HasUserRole(rlAdmin) Or HasUserRole(rlPrincipal)) Then
		bShowNavigator = True
		If HasUserRole(rlStudent) Then
			dtToday = NSDate()
			If IsDull(dtBirthDate) Then
				bShowNavigator = False
			ElseIf DateAdd("yyyy", 18, dtBirthDate) <= dtToday Or DateAdd("yyyy", 5, dtBirthDate) > dtToday Then
				bShowNavigator = False
			End If
		End If
		If bShowNavigator Then
			Call ButtonWithClass("OpenPFDO()", "Войти в Навигатор", "Войти в Навигатор", Null, "btn-default")
		End If
	End If
	%></div><%
End Sub

Sub DrawSSOIdpLinkButtons(strIdpId, bExistsLink, strBtnLinkClass)
	Dim objIdpInfo, strLinkTitle, strRemoveQuestion, strRemoveTitle
	Set objIdpInfo = obSecurityComponent.GetIdpInfo(strIdpId)
	If bExistsLink Then
		strRemoveQuestion = obLanguage("Common","kAreYouSureToDeleteLinkWithIdp").Format(Array(objIdpInfo.Title))
		strRemoveTitle = obLanguage("Common","kRemoveLinkToIdpAccount").Format(Array(objIdpInfo.Title))

		ButtonWithClass "RemoveLink('" & strIdpId & "','" & (DB2Java(strRemoveQuestion)) & "')", strRemoveTitle, strRemoveTitle, Null, "btn-danger"
	Else
		strLinkTitle = obLanguage("Common","kLinkWithIdpAccount").Format(Array(objIdpInfo.Title))
		ButtonWithClass "Link('" & strIdpId & "')", strLinkTitle, strLinkTitle, Null, strBtnLinkClass
	End If
End Sub

Sub DrawLanguageSelect()
	Dim arrLanguges, i, value
	Set arrLanguges	= obLanguage.GetLanguageList()

	OpenFormGroup obLanguage("MySettings","kInterfaceLanguage")
		%><select name="LNG" class="form-control" <%=IIF(readonly, " disabled=""disabled"" ","")%>><%
			Dim lng
			For Each lng in arrLanguges
				value = lng.Name
				rw "<option value=""" & value & """" & IIF(UCase(strCurrLng) = UCase(value)," selected","") & ">" & lng.NativeName & "</option>"
			Next%>
		</select><%
	CloseFormGroup
End Sub

Sub DesktopList(strCurrent)
	If Not bIsDebug Then On Error Resume Next
	Dim arr, i, bAddJournal, bAddLA

	bAddJournal = HasUserRight(arAssignmentsViewComplete)

	bAddLA = False
	If HasUserRight(arLAViewMaterials) Then
		bAddLA = True
	ElseIf HasUserRight(arLAViewSelf) Then
		bAddLA = True
	ElseIf HasUserRight(arLAViewAll) Then
		bAddLA = True
	ElseIf HasUserRight(arLAEditSelf) Then
		bAddLA = True
	End If

	If bAddJournal And bAddLA Then
		arr = Array( obLanguage("Common","kDay"), obLanguage("Common","kWeek"), obLanguage("Common","kMonth"), obLanguage("MenuFolders","kAnnouncements"), obLanguage("MenuFolders","kStudentDiary"), obLanguage("MySettings","kLA") )
	ElseIf bAddJournal Then
		arr = Array( obLanguage("Common","kDay"), obLanguage("Common","kWeek"), obLanguage("Common","kMonth"), obLanguage("MenuFolders","kAnnouncements"), obLanguage("MenuFolders","kStudentDiary") )
		If strCurrent = obLanguage("MySettings","kLA") Then strCurrent = obLanguage("MenuFolders","kStudentDiary")
	ElseIf bAddLA Then
		arr = Array( obLanguage("Common","kDay"), obLanguage("Common","kWeek"), obLanguage("Common","kMonth"), obLanguage("MenuFolders","kAnnouncements"), obLanguage("MySettings","kLA") )
		If strCurrent = obLanguage("MenuFolders","kStudentDiary") Then strCurrent = obLanguage("MySettings","kLA")
	Else
		arr = Array( obLanguage("Common","kDay"), obLanguage("Common","kWeek"), obLanguage("Common","kMonth"), obLanguage("MenuFolders","kAnnouncements") )
		If strCurrent = obLanguage("MenuFolders","kStudentDiary") Or strCurrent = obLanguage("MySettings","kLA") Then strCurrent = obLanguage("MenuFolders","kAnnouncements")
	End If

	Dim obUserSettingsComponent
	Dim arrDesktops
	Set obUserSettingsComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IUserSettingsComponent")
	arrDesktops = obUserSettingsComponent.GetDefaultDesktops(strUserId, strSchoolId)

	Dim desktop
	For Each desktop in arrDesktops
		Response.Write "<option value=""" & desktop.Id & """ "
		If desktop.Id = strCurrent Then Response.Write "selected"
		Response.Write ">" & desktop.Name & "</option>"
	Next
End Sub

Function GetDisplayName(strValueName)
	Select Case strValueName
	Case obLanguage("Common","kDay")	GetDisplayName = obLanguage("MySettings","kCalendarDay")
	Case obLanguage("Common","kWeek")	GetDisplayName = obLanguage("MySettings","kCalendarWeek")
	Case obLanguage("Common","kMonth")	GetDisplayName = obLanguage("MySettings","kCalendarMonth")
	Case Else							GetDisplayName = strValueName
	End Select
End Function%>