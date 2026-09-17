<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolForms/SchoolInfo_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateinput.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim objStateList, objSchoolInfo, objCity, objSchoolLocationInfo
Dim strSchoolDist
Dim bCanEditExtraSchoolInfo, objEOLegalForms, objEOLegalForms83, nEOTypeID
Dim objAuthorities
Dim nEOFormID
Dim bAddSchool, bPfdoPortalIntegration

Dim bReasonForChangeSchoolCard

Dim strSchoolInfoFilesJson

Dim tmpRO


Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileEditSchoolInfo) Or HasUserRight(arProfileViewSchoolInfo)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SchoolInfo", "kTitleSchoolInfoCard")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementSchoolInfo
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSchoolInfo
 End Function

Function AdditionArchCondition()
	AdditionArchCondition = True
End Function

Function ConnectionSwitchIsNeeded(bIsYearArchived)
	ConnectionSwitchIsNeeded = False
End Function

Sub ReadState()
	Dim EM_MayEditExtraSchoolInfoVal
	Dim obServerSettings

	Set obServerSettings = GetServerSettings()

	EM_MayEditExtraSchoolInfoVal = obServerSettings.SchoolInfoSettings.EM_MayEditExtraSchoolInfo

	bCanEditExtraSchoolInfo = (bIsEMForSchool And HasUserRight(arProfileEditSchoolInfo) And EM_MayEditExtraSchoolInfoVal)

	If bCanEditExtraSchoolInfo Then
		If Not IsEmpty(strCurrYearID) Then bCanEditExtraSchoolInfo = Not objNSNET.IsYearClosed(strCurrYearID) ' as readonly = ... in Screen.asp
	End If

	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	bPfdoPortalIntegration = (obServerSettings.SystemSettings.IntegrationPFDOType = 1)

	readonly = bIsEMForSchool or Not HasUserRight(arProfileEditSchoolInfo)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
End Sub

Sub Main()
	Dim oSchoolComponent
	Set oSchoolComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISchoolComponent")
	Dim obServerSettings

	Set obServerSettings = GetServerSettings()

	bReasonForChangeSchoolCard = obServerSettings.SchoolInfoSettings.RequireReasonChangeSchoolCard

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	Set objCity = objNSNET.GetCityInfo(objSchoolInfo("CITYID"))
	Set objSchoolLocationInfo = oSchoolComponent.GetSchoolLocationInfo(strSchoolID)
	TestError "Ошибка получения информации о местонахождении организации"

	Set objStaffList = objNSNET.GetStaffList(strSchoolID,strCurrYearID, " ", " ", "", 0, False, 10000, 1, 1, "", kWorkStatus_Working)

	If bCanEditExtraSchoolInfo Then
		Set objEOLegalForms83 = objNSNET.GetEOLegalForms83()
		Set objEOLegalForms = objNSNET.GetEOLegalForms()
		Set objAuthorities = objNSNET.GetAuthorities(strSchoolID)

		nEOFormID = GetSafeLng(objSchoolInfo("EOFORMID"), -1)
	End If
	nEOTypeID = GetSafeLng(objSchoolInfo("EOTYPEID"), -1)
	Call obTokenMgr.SetData(strToken, stEditExtraSchoolInfo, IIf(bCanEditExtraSchoolInfo, 1, 0))

	Call LoadShoolInfoEx(0, kMainSchoolInfoPage, -1)

	Dim oAttachmentsComponent, result
	Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")

	strSchoolInfoFilesJson = ""
	Set result = oAttachmentsComponent.GetFileAttachmentSchoolInfo(strSchoolID) 
	strSchoolInfoFilesJson = ConvertJsonObject2Str(result)
End Sub

Function GetServerSettings()
	Dim objServerSettingsComponent, result

	Set objServerSettingsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IServerSettingsComponent")
	Set result = objServerSettingsComponent.GetServerSettings(false)

	If Not result.IsSuccess Then
		GenerateError result.Message
	End If

	Set GetServerSettings = result.Data
End Function

Function onLoad()
	Dim blnWasSaved

	blnWasSaved = GetSafeStr(Request("SV"), 1, "N" ) = "Y"
	If blnWasSaved OR Not IsEmpty(Request("Save")) Then onLoad = "JavaScript:WasSaved('" & obLanguage("Common","kSchoolInfoWasSaved",strFunctionalityType) & "');"
End Function

Function ITWithClass(id, l, ml, strClass)
	Dim str, value, i, typ
	strClass = " class=""form-control " & strClass & """"
	ITWithClass = ITEx(id, l, ml, strClass)
End Function

Function ISelect(id, arrOpt, di)
	Dim strClass

	strClass = " class=""form-control"""
	ISelect = ISelectWithAuth(id, strClass, arrOpt, di)
End Function

Sub onHead()
	Call scriptCalendarCommon()%>

	<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("uikit.validate.js")%>" type="text/javascript"></script>

	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>


	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/file-attachments.min.css")%>">

	
	<script src="<%=GetVersionedJsLink("fileAttachmentCtrl.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>

	<script type="text/javascript">
		var browseSchoolInfoAccessJournalCtrl, schoolInfoCtrl, emailValidatorCtrl;

		deferredResLoader.loadScript("/vendor/pages/js/browseSchoolInfoAccessJournal.js");
		deferredResLoader.loadScript("/vendor/pages/js/schoolInfo.js");
		deferredResLoader.loadScript("/static/dist/pages/common/js/emailValidator.js");

		var bAddSchool = <%=Bool2Js(bAddSchool)%>;
		var pfdoPortalIntegration = <%=Bool2Js(bPfdoPortalIntegration)%>;

		var pfdoNavId = "<%=objSchoolInfo("PFDO_NAV_ID")%>";
		var pfdoNavDate = null;
		var pfdoNavStatus = "";

		<%If Not IsDull(objSchoolInfo("PFDO_NAV_DATE")) Then%>
		pfdoNavDate = <%=Date2Js(objSchoolInfo("PFDO_NAV_DATE"))%>;
		<%End If%>

		deferredResLoader.ready(function () {
			var field = $("select[name=DIRECTORID]");

			if (T00fio1 != null && T00fio1 != "" && field.val() == "") {
				staffList.push({
					id: "-1" + T00fio1,
					text: T00fio1
				});
				field.select2({
					data: staffList
				});
				field.val("-1" + T00fio1);
				field.data("storedState", "-1" + T00fio1); //запись последних зачений полей для восстановления не умеет рабоать с select2
			}

			field.select2({
				tags: true,
				createTag: function (params) {
					var term = params.term? params.term.toString().trim() :'';

					if (term === '') {
						return null;
					}

					return {
						id: "-1" + term,
						text: term,
						newTag: false // add additional parameters
					}
				}
			});

			field.on('select2:select', function (e) {
				var data = e.params.data;
				var el = $("input[name=T00fio1]");
				console.log(data);
				if (!data.id) {
					el.val("");
					el.data("storedState", "");
				} else {
					el.val(data.text);
					el.data("storedState", data.text);
				}
			});
			
			browseSchoolInfoAccessJournalCtrl = new BrowseSchoolInfoAccessJournalCtrl({
				schoolId: <%=strSchoolId%>
			});

			var okvedValue = '<%=GetParamValue("T00okved")%>';
			if(okvedValue) {
				okvedValue = okvedValue.split(', ');
			}
			else {
				okvedValue = null;
			}

			var internetAccessTechnology = '<%=GetParamValue("T00internetAccessTechnology")%>';
			if(internetAccessTechnology) {
				internetAccessTechnology = internetAccessTechnology.split(', ');
			}
			else {
				internetAccessTechnology = null;
			}

			var typeOfOwnership = '<%=GetParamValue("T00okfs")%>';
			if(typeOfOwnership) {
				typeOfOwnership = typeOfOwnership.split(', ');
			}
			else {
				typeOfOwnership = null;
			}

			var collegialOrgan =  '<%=GetParamValue("T00CollegiateManagement")%>';
			if(collegialOrgan) {
				collegialOrgan = collegialOrgan.split(', ');
			} else {
				collegialOrgan = null;
			}

			var projectTypeForSchool = '<%=GetParamValue("T00ProjectTypeForSchool")%>';
			if(projectTypeForSchool) {
				projectTypeForSchool = projectTypeForSchool.split(', ');
			}
			else {
				projectTypeForSchool = null;
			}

			emailValidatorCtrl = new EmailValidatorCtrl.EmailValidatorCtrl();

			var params = {
				canEditExtraSchoolInfo: <%=Bool2Js(bCanEditExtraSchoolInfo)%>,
				isEMForSchool: <%=Bool2Js(bIsEMForSchool)%>,
				okvedValue: okvedValue,
				emailValidator: emailValidatorCtrl,
				internetAccessTechnology: internetAccessTechnology,
				typeOfOwnership: typeOfOwnership,
				reasonForChangeSchoolCard: <%=Bool2Js(bReasonForChangeSchoolCard)%>,
				collegialOrgan: collegialOrgan,
				projectTypeForSchool: projectTypeForSchool
			};

			schoolInfoCtrl = new SchoolInfoController(params);

			$(function() {
				schoolInfoCtrl.init();
			});
		});

		function OSHdataChanged(theObject, theType) {
			return true;
		}


		var schoolPhotoFilesCtrl, ustavFileCtrl;

		$(document).ready(function () {

		var elIndependOpt = $('#T00Independ option[value=""]');
		if (elIndependOpt.length && elIndependOpt.length > 0) {
			elIndependOpt[0].remove();
		}
	
		var schoolId = <%=strSchoolID%>;

		var files = <%=GetSafeStr(strSchoolInfoFilesJson, -1, "[]")%>;

		var charterAttachType = 200;
		var ustavFile = _.where(files, { AttachmentType: charterAttachType });

		var photoFileExts = [ '.pdf',  '.bmp', '.ecw', '.gif','.ico','.ilbm','.jpeg','.jpeg 2000','.vil','.pcx','.png','.psd','.tga','.tiff','.xps','.xbm','.rla','.rpf','.pnm','.tif','.tiff','.jpg','.jp2'];

		var ustavFileExtsLower = ['.pdf',  '.bmp', '.ecw', '.gif','.ico','.ilbm','.jpeg','.jpeg 2000','.vil','.pcx','.png','.psd','.tga','.tiff','.xps','.xbm','.rla','.rpf','.pnm','.tif','.tiff','.jpg','.jp2','.doc', '.docx', '.pdf', '.rtf', '.jpg', '.png', '.odt', '.txt','.xls', '.xlsx'];
		var ustavFileExtsUpper = ['.PDF',  '.BMP', '.ECW', '.GIF','.ICO','.ILBM','.JPEG','.JPEG 2000','.VIL','.PCX','.PNG','.PSD','.TGA','.TIFF','.XPS','.XBM','.RLA','.RPF','.PNM','.TIF','.TIFF','.JPG','.JP2','.DOC', '.DOCX', '.PDF', '.RTF', '.JPG', '.PNG', '.ODT', '.TXT','.XLS', '.XLSX'];

		var ustavFileExts  = ustavFileExtsLower.concat(ustavFileExtsUpper);

		ustavFileCtrl = new FileAttachmentCtrl(
			{block: $('#ustavFile'), filesExtensions: ustavFileExts}, 
			{wasChanged: true, files: ustavFile, context: {schoolId: schoolId, attachmentType: charterAttachType}
		});

		jsSubmit({
			action:"/webapi/attachments/types",
			contentType: "application/json",
			method: "GET",
			showProcessing: false,
			queryData: { group: 1 } 
		})
		.then(function(response){

			var photoTypes = response;

			var isPhoto = function(f){return _.findWhere(photoTypes, {id: f.AttachmentType})};
			var photoFiles = _.filter(files, isPhoto);

			schoolPhotoFilesCtrl = new FileAttachmentCtrl(		
				{
					multiple: true,
					showDescription: true,
					block: $('#attachFiles'),
					filesExtensions: photoFileExts
				}, 
				{
					wasChanged: true,
					context: { schoolId: schoolId },
					files: photoFiles
				},
				photoTypes);
			});

		});

		updateOrganizationPublishStatus();

		function updateOrganizationPublishStatus() {
			if (bAddSchool && pfdoPortalIntegration && pfdoNavId) {
				jsSubmit({
					action: "/webapi/integration/pfdo/organizationstatus",
					method: "get",
					data: { schoolId: appContext.schoolId }
				})
					.then(function (state) {
						$("#PfdoPublishStatus").val(state.status);
						$("#PfdoPublishExtendStatus").val(state.extendStatus);
					});
			}
		}

		function checkChanges() {
			return changed($('[name="T00okved"]')) ||
				changed($('[name="T00internetAccessTechnology"]')) ||
				changed($('[name="T00okfs"]')) ||
				changed($('[name="T00CollegiateManagement"]')) ||
				changed($('[name="T00ProjectTypeForSchool"]'));
		}

		function changed(element) {
			var curValue = element.val();
			var storedValue = element.data("select2StoredState");

			curValue = curValue ? curValue.toString() : "";
			storedValue = storedValue ? storedValue.toString() : "";

			return curValue !== storedValue;
		}

		function reset() {
			var form = $(document.forms['SchoolEdit']);
			var changed = form.dataChanged() || checkChanges();

			if (!changed) {
				alert(language.Generic.SetupSchoolUI.kDataNotModified);
				return;
			}

			form.resetState();
			fixReset();

			dataWereChanged = false;
			alert(language.Generic.Common.kResetChanges)
		}

		function fixReset() {
			resetElement($('[name="T00okved"]'));
			resetElement($('[name="T00internetAccessTechnology"]'));
			resetElement($('[name="T00okfs"]'));
			resetElement($('[name="T00CollegiateManagement"]'));
			resetElement($('[name="T00ProjectTypeForSchool"]'));
			resetElement($('[name="T00ProjectTypeForSchool"]'));
			resetElement($('[name="T00ProjectTypeForSchool"]'));
		}

		function resetElement(element) {
			var curValue = element.val();
			var savedValue = element.data("select2StoredState");
			var storedValue = savedValue;

			curValue = curValue ? curValue.toString() : "";
			storedValue = storedValue ? storedValue.toString() : "";

			if (curValue !== storedValue) {
				element.val(savedValue).trigger("change");
			}
		}

		function saveSchoolCard() {
			var changed = $(document.forms['SchoolEdit']).dataChanged() || checkChanges();

			if (!changed) {
				alert(language.Generic.SetupSchoolUI.kDataNotModified);
			} else {
			schoolPhotoFilesCtrl.appendInputToForm(document.forms['SchoolEdit']); 
			schoolInfoCtrl.saveSchoolInfo();
			updateOrganizationPublishStatus();
		}
		}

		function pfdoPublish() {
			$.show.confirmation("Внимание! Сейчас будет отправлена заявка на публикацию сведений о поставщике услуг дополнительного образования. Вы желаете продолжить?")
				.then(function () {
					jsSubmit({
						action: "/webapi/integration/pfdo/publishorganization",
						method: "post",
						queryData: { organizationId: appContext.schoolId },
						showProcessing: true,
						defaultErrorHandling: false,
						onError: function (xml) {
							updateOrganizationPublishStatus();
							var msg = null;
							if (xml.responseJSON && xml.responseJSON.message) {
								msg = xml.responseJSON.message;
							} else {
								msg = "<%=obLanguage("Common", "kUnexpErr")%>";
							}
							$.show.error(msg);
						}
					})
					.then(function (state) {
						$("#PfdoPublishStatus").val(state.status);
						$("#PfdoPublishExtendStatus").val(state.extendStatus);
						if (state.statusDate) {
							$("#PfdoNavDate").val(dateUtils.date2str(new Date(state.statusDate)) + " " + dateUtils.time2Str_ss(new Date(state.statusDate)));
						} else {
							$("#PfdoNavDate").val("");
						}
						alert('Заявка на публикацию успешно отправлена')
					});
				});
		}

	</script><%
End Sub

Sub DrawButtons()
	If Not readonly Or bCanEditExtraSchoolInfo Then
		ButtonSave "saveSchoolCard()", obLanguage("Common","kSave")
		ButtonReset "reset()", obLanguage("Common","kCancel")
		If bAddSchool And bPfdoPortalIntegration Then
			Button "pfdoPublish()", "Опубликовать в Навигаторе", "Опубликовать в Навигаторе", "glyphicon glyphicon-transfer"
		End If
	End If
End Sub

Function ButtonPrintHandler()
	ButtonPrintHandler = "schoolInfoCtrl.schoolInfoPrint()"
End Function

Function ButtonExportHandler()
	ButtonExportHandler = "schoolInfoCtrl.schoolInfoExport()"
End Function

Sub DrawLinkButtons()
	Call DrawLicencesButton()
	Call ButtonStr("browseSchoolInfoAccessJournalCtrl.browseAccessJournal()", obLanguage("Common","kChangeHistory"), obLanguage("Common","kChangeHistory"), "")
	Call DrawPrintButtons()
End Sub

Sub DrawLicencesButton()
	If bIsEMForSchool Or (Not readonly) Then 
		Button "schoolInfoCtrl.gotoLicences()", obLanguage("SchoolInfo","kLicences"), obLanguage("SchoolInfo","kLicences"), "glyphicon glyphicon-lock"
	End If
End Sub

Sub DrawFoundersNames(infoName, foundersNames)
	Dim item, text

	For Each item In foundersNames
		text = text & item & ";" & vbLf
	Next

	text = Left(text, Len(text) - 1)%>

	<div class="form-group">
		<label class="control-label col-md-4 col-lg-3"><%=infoName%></label>
		<div class="col-md-8 col-lg-9">
			<%=ShowTextAreaEx("", 4, 40, "return OSHdataChanged(this, '0');", text, "", "maxlength=""2000"" disabled")%>
		</div>
	</div><%
End Sub

Sub onDrawPage()
	Call DrawButtonPanel()
	
	Call SetFiltersWidth("", "col-md-4 col-lg-3", "col-md-8 col-lg-9")%>
	
	<form name="SchoolEdit" method="POST" class="form-horizontal form-xs form-edit" action="/asp/SetupSchool/SchoolForms/SchoolInfoSave.asp">
		<%=WriteObligatoryTags()%>

		<div class="row">
			<div class="panel-group col-md-12 col-lg-9">
				<!-- #INCLUDE FILE="SchoolInfo0t_inc.asp" -->
				<!-- #INCLUDE FILE="SchoolInfo0b_inc.asp" -->
			</div>
		</div>
	</form><%
	
End Sub%>
