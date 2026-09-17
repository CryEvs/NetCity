function LicenseController(params) {

	this.schoolId = params.schoolId;
	this.readonly = params.readonly;

	LicenseController.schoolId = params.schoolId;
	LicenseController.readonly = params.readonly;
}

LicenseController.licenseEnum = 201;
LicenseController.licenseAESEnum = 202;
LicenseController.accreditationEnum = 203;

LicenseController.when = function () {
	$(document).trigger("showProcessing");

	return $.when.apply(null, arguments).then(function () {
		$(document).trigger("closeProcessing");
		return $.Deferred().resolveWith(null, arguments);
	}, function () {
		$(document).trigger("closeProcessing");
	});
};
LicenseController.addLicenseListEmptyInfo = function () {
	var info = $('<div class="col-md-6 license-list-empty"></div>')
		.append(
			$("<div></div>")
				.addClass("alert alert-info")
				.text(language.Generic.SchoolInfo.kDocumentListEmpty)
		);

	$(".license-list").append(info);
};

LicenseController.validationConstraints = {
	rules: {
		seriaOfForm: {
			pattern: /^[а-я0-9\-/]*$/i
		},
		numberOfForm: {
			required: true,
			pattern: /^[0-9\-/]*$/
		},
		regNumber: {
			required: true,
			pattern: /^[а-я0-9\-/]*$/i
		},
		dateOfIssue: {
			required: true,
			validDate: true
		},
		expiryDate: {
			required: true,
			validDate: true
		},
		accreditationSeriesBlank: {
			pattern: /^[а-я0-9\-/]*$/i
		},
		accreditationNumberBlank: {
			required: true,
			pattern: /^[0-9\-/]*$/
		},
		accreditationRegNumber: {
			required: true,
			pattern: /^[а-я0-9\-/]*$/i
		},
		accreditationIssuedDate: {
			required: true,
			validDate: true
		},
		accreditationExpiredDate: {
			required: true,
			validDate: true
		},
		decisionOrderDate: {
			validDate: true
		},
		accreditationDecisionDate: {
			validDate: true
		},
		accreditationRenewDate: {
			validDate: true
		},
		accreditationSuspensionDate: {
			validDate: true
		},
		accreditationRenewalDate: {
			validDate: true
		},
		accreditationDeprivationOrderDate: {
			validDate: true
		},
		accreditationStopActionDate: {
			validDate: true
		}
	},
	messages: {
		seriaOfForm: {
			pattern: language.Generic.SchoolInfo.kEnterCorrectSeria
		},
		numberOfForm: {
			required: language.Generic.SchoolInfo.kMustFillNumberOfFormField,
			pattern: language.Generic.SchoolInfo.kEnterCorrectNumber
		},
		regNumber: {
			pattern: language.Generic.SchoolInfo.kEnterRegNumber
		},
		accreditationSeriesBlank: {
			pattern: language.Generic.SchoolInfo.kEnterCorrectSeria
		},
		accreditationNumberBlank: {
			pattern: language.Generic.SchoolInfo.kEnterCorrectNumber,
			required: language.Generic.SchoolInfo.kMustFillNumberOfFormField,
		},
		accreditationRegNumber: {
			pattern: language.Generic.SchoolInfo.kEnterRegNumber
		}
	}
};

LicenseController.loadPage = function () {
	window.uikitValidation.customOptions = {
		expiryDate: {
			errorPlacement: function (error, element) {
				var $element = $(element);
				var $elementParent = $element.parent().parent();

				error.insertAfter($elementParent);
			}
		},
		decisionOrderDate: {
			errorPlacement: function (error, element) {
				var $element = $(element);
				var $elementParent = $element.parent().parent();

				error.insertAfter($elementParent);
			}
		}
	};


	var getLicenseList = jsSubmit({
		method: "GET",
		action: "/webapi/schools/" + LicenseController.schoolId + "/licenses"
	});

	LicenseController.when(LicenseController.getLicenseTemplate(), getLicenseList).then(function (licenseTemplate, list) {
		licenseTemplate = licenseTemplate.replace(/(?:\r\n|\r|\n)/g, "");

		LicenseController.licenseContainer = list;

		licenseTemplate = Handlebars.compile(licenseTemplate);

		if (!LicenseController.readonly) {
			var button = LicenseController.getAddLicenseButton();

			//если есть все лицензии
			if (LicenseController.hasAllLicense(LicenseController.licenseContainer) && button) {
				button.hide();
			}

			$(".buttons-panel-left").append(button);
		}

		//если нет ни одной лицензии
		if (!LicenseController.hasAnyLicense(LicenseController.licenseContainer)) {
			$(".buttons-panel-right").hide();

			LicenseController.addLicenseListEmptyInfo();
		}

		var html = licenseTemplate({
			licenseAttachment: LicenseController.licenseAttachment,
			licenseAesAttachment: LicenseController.licenseAesAttachment,
			licenseAccredAttachment: LicenseController.licenseAccredAttachment,
			licenseContainer: LicenseController.licenseContainer,
			language: language,
			readonly: LicenseController.readonly,
		});


		//$(".license-list").append(html);
		$(".license-list").html(html);
	});
}


LicenseController.addHandlers = function () {
	var $body = $("body");

	//редактировать лицензию
	$body.on("click", "#btnEditLicense", function () {
		LicenseController.editLicense();
	});

	//редактировать лицензию на доп услуги
	$body.on("click", "#btnEditLicenseAES", function () {
		LicenseController.editLicenseAES();
	});

	//редактировать аккредитацию
	$body.on("click", "#btnEditAccreditation", function () {
		LicenseController.editAccreditation();
	});

	//удалить лицензию
	$body.on("click", "#btnRemoveLicense", function () {
		LicenseController.removeLicense();
	});

	//удалить лицензию на право доп обра услуг
	$body.on("click", "#btnRemoveLicenseAES", function () {
		LicenseController.removeLicenseAES();
	});

	//удалить аккредитацию
	$body.on("click", "#btnRemoveAccreditation", function () {
		LicenseController.removeAccreditation();
	});

	//при добавление новой лицензии пользователь меняет тип лицензии в селекте в зависимости от этого отображаются те или иные поля в модальном окне
	$body.on("change", ".addLicenseSelectLicenseType", function () {
		var selectedLicenseType = $(".addLicenseSelectLicenseType").val();

		LicenseController.selectedLicenseType = selectedLicenseType;

		LicenseController.schowBlock(selectedLicenseType);

		LicenseController.subscribeAddAction();
	});


	LicenseController.showFileAttachForLicense = function (licensesFilesEnum, block) {


		/*используется при добавлении новой лицензии*/



		/*
		licensesFilesEnum может быть: 
		201 - лицензия
		202 - лицензия доп деятельности
		203 - аккредитация
		*/

		var schoolId = LicenseController.schoolId;

		if (licensesFilesEnum === LicenseController.licenseEnum) {

			LicenseController.fileAttachControllerLicense = new FileAttachmentCtrl(
				{ block: $(block) },
				{
					wasChanged: true,
					context: { schoolId:schoolId, attachmentType: licensesFilesEnum }
				});
		} else if (licensesFilesEnum === LicenseController.licenseAESEnum) {
			LicenseController.fileAttachControllerLicenseAES = new FileAttachmentCtrl(
				{ block: $(block) },
				{
					wasChanged: true,
					context: { schoolId:schoolId, attachmentType: licensesFilesEnum }
				});
		} else if (licensesFilesEnum === LicenseController.accreditationEnum) {
			LicenseController.fileAttachControllerAccreditation = new FileAttachmentCtrl(
				{ block: $(block) },
				{
					wasChanged: true,
					context: { schoolId:schoolId, attachmentType: licensesFilesEnum }
				});
		}

	}

	LicenseController.schowBlock = function (selectedLicenseType) {


		if (selectedLicenseType === "license") {
			$(".accreDitationBlock").css("display", "none");
			$(".licenseBlock").css("display", "inline");

			var licenseEnum = 201;
			LicenseController.showFileAttachForLicense(licenseEnum, '#scanCopy');

		}

		else if (selectedLicenseType === "licenseAES") {
			$(".accreDitationBlock").css("display", "none");
			$(".licenseBlock").css("display", "inline");

			var licenseAesEnum = 202;
			LicenseController.showFileAttachForLicense(licenseAesEnum, '#scanCopy');

		}

		else if (selectedLicenseType === "accreditation") {
			$(".licenseBlock").css("display", "none");
			$(".accreDitationBlock").css("display", "inline");

			var licenseAccreditation = 203;
			LicenseController.showFileAttachForLicense(licenseAccreditation, '#scanCopyAccred');

		}

	};

	$body.on("change", '[name="without-life"]', function () {
		var expiryDate = $('input[name="expiryDate"]');
		var button = expiryDate.parent().find("button");

		var isChecked = $(this).prop("checked");

		expiryDate.prop("disabled", isChecked);
		button.prop("disabled", isChecked);

		if (isChecked) {
			expiryDate.val("");
			expiryDate.closest(".form-group").removeClass("has-error");
			expiryDate.closest(".form-group").validate().resetForm();
		}
	});

	$body.on("change", '[name="accreditationWithout-life"]', function () {
		var expiryDate = $('input[name="accreditationExpiredDate"]');
		var button = expiryDate.parent().find("button");

		var isChecked = $(this).prop("checked");

		expiryDate.prop("disabled", isChecked);
		button.prop("disabled", isChecked);

		if (isChecked) {
			expiryDate.val("");
			expiryDate.closest(".form-group").removeClass("has-error");
			expiryDate.closest(".form-group").validate().resetForm();
		}
	});
}


//init
LicenseController.init = function () {
	LicenseController.loadPage();
	LicenseController.addHandlers();
};


LicenseController.prototype.init = LicenseController.init;


LicenseController.addHandler = function () {
	//получить шаблон для модального окна - добавить лицензии
	LicenseController.getAddLicenseTemplate().then(function (addLicenseTmpl) {
		addLicenseTmpl = addLicenseTmpl.replace(/(?:\r\n|\r|\n)/g, "");
		addLicenseTmpl = Handlebars.compile(addLicenseTmpl);

		var html = addLicenseTmpl({
			language: language
		});

		//показать модальное окно - добавить лицензии
		LicenseController.schowAddLicenseDialog(html);
	});
};
LicenseController.schowAddLicenseDialog = function (html) {

	var addDialogProp = {
		title: language.Generic.Buttons.kAdd,
		//buttons: [{ label: language.Generic.Buttons.kAdd, action: LicenseController.addAction, cssClass: 'btn-primary' }],
		buttons: [{ label: language.Generic.Buttons.kAdd, cssClass: "btn-primary addBtn" }],
		message: html,
		size: BootstrapDialog.SIZE_WIDE,
		onshown: function () {
			LicenseController.fillLicenseTypeField();
			dateInput.initDateInputs(null, null, null, {
				format: "d.mm.yyyy"
			});

			LicenseController.form = $('form[name="add-license"]');

			LicenseController.validator = LicenseController.form.validate(LicenseController.validationConstraints);

			LicenseController.selectedLicenseType = $('[name="licenseType"]').val();

			LicenseController.schowBlock(LicenseController.selectedLicenseType);

			LicenseController.subscribeAddAction();
		}


	};
	LicenseController.addLicensesDialog = $.show.dialog(addDialogProp);
};

LicenseController.subscribeAddAction = function () {
	//отписываемся от предыдущих подписок
	$(".addBtn").off("click");

	//в зависимости от выбранного типа лицензии в комбобоксе выбираем дейсвтие для кнопки "добавить" в модальном окне
	if (LicenseController.selectedLicenseType == "license") {
		$(".addBtn").on("click", function () {

			LicenseController.addLicense();
			LicenseController.addLicensesDialog.$modal.prop("dataWereChanged", false);
			if (!LicenseController.form.valid()) {
				return;
			}
			LicenseController.addLicensesDialog.close();
		});
	}
	else if (LicenseController.selectedLicenseType == "licenseAES") {
		$(".addBtn").on("click", function () {
			LicenseController.addLicenseAES();
			LicenseController.addLicensesDialog.$modal.prop("dataWereChanged", false);
			if (!LicenseController.form.valid()) {
				return;
			}
			LicenseController.addLicensesDialog.close();
		});
	} else {
		$(".addBtn").on("click", function () {
			LicenseController.addAccreditation();
			LicenseController.addLicensesDialog.$modal.prop("dataWereChanged", false);
			if (!LicenseController.form.valid()) {
				return;
			}
			LicenseController.addLicensesDialog.close();
		});
	}
};

//добавить лицензию
LicenseController.addLicense = function () {

	var form = LicenseController.form;

	if (!form.valid()) {
		return;
	}

	//var licenseType       = $('select[name="licenseType"]', form).val();
	var seria = $('input[name="seriaOfForm"]', form).val();
	var number = $('input[name="numberOfForm"]', form).val();
	var regNumber = $('input[name="regNumber"]', form).val();
	var dateOfIssue = $('input[name="dateOfIssue"]', form).val();
	var expiryDate = $('input[name="expiryDate"]', form).val();
	var decisionOrderNumber = $('input[name="decisionOrderNumber"]', form).val();
	var decisionOrderDate = $('input[name="decisionOrderDate"]', form).val();
	var licenseOrgan = $('input[name="licenseOrganName"]', form).val();

	var linkToScanCopy = $('input[name="linkToScanCopy"]', form).val();
	var withoutLife = $('input[name="without-life"]', form);
	if (withoutLife.prop("checked")) {
		expiryDate = language.Generic.SchoolInfo.kWithoutLife;
	}

	var fileAttachment = {};
	if (LicenseController.fileAttachControllerLicense.fileAttachments.files[0]) {
		fileAttachment.fileAttachmentId = LicenseController.fileAttachControllerLicense.fileAttachments.files[0].Id;
		fileAttachment.description = LicenseController.fileAttachControllerLicense.fileAttachments.files[0].Description;
		fileAttachment.fileName = LicenseController.fileAttachControllerLicense.fileAttachments.files[0].Name;
		fileAttachment.fileData = {};
		fileAttachment.saved = true;
		fileAttachment.attachmentType = LicenseController.licenseEnum;
	}

	var licenseDto = {
		seriesBlank: seria,
		numberBlank: number,
		regNumber: regNumber,
		issuedDate: dateOfIssue,
		expiredDate: expiryDate,
		decisionOrderNumber: decisionOrderNumber,
		decisionDate: decisionOrderDate,
		licenseOrganName: licenseOrgan,
		linkScanCopy: fileAttachment,
	};

	LicenseController.when(LicenseController.getLicenseTemplate(),
		jsSubmit({
			method: "POST",
			action: "/webapi/schools/" + LicenseController.schoolId + "/addLicense",
			data: licenseDto,
			contentType: "application/json"
		})
	).then(function (template) {

		template = Handlebars.compile(template);

		licenseContainer = {
			license: licenseDto
		};
		var html = template({
			panelName: language.Generic.SchoolInfo.kLicense,
			licenseContainer: licenseContainer,
			language: language
		});

		$(".license-list").append(html);

		LicenseController.licenseContainer.license = licenseDto;

		//если заполнены все лицензии
		if (LicenseController.hasAllLicense(LicenseController.licenseContainer)) {
			$('button[name="add-license"]').hide();
		}

		$(".buttons-panel-right").show();
		$(".license-list-empty").remove();


		LicenseController.loadPage();
	});
};

//добавить лицензия доп обр услуг
LicenseController.addLicenseAES = function () {
	var form = LicenseController.form;

	if (!form.valid()) {
		return;
	}

	//var licenseType       = $('select[name="licenseType"]', form).val();
	var seria = $('input[name="seriaOfForm"]', form).val();
	var number = $('input[name="numberOfForm"]', form).val();
	var regNumber = $('input[name="regNumber"]', form).val();
	var dateOfIssue = $('input[name="dateOfIssue"]', form).val();
	var expiryDate = $('input[name="expiryDate"]', form).val();
	var decisionOrderNumber = $('input[name="decisionOrderNumber"]', form).val();
	var decisionOrderDate = $('input[name="decisionOrderDate"]', form).val();
	var licenseOrgan = $('input[name="licenseOrganName"]', form).val();
	var withoutLife = $('input[name="without-life"]', form);
	var linkToScanCopy = $('input[name="linkToScanCopy"]', form).val();


	if (withoutLife.prop("checked")) {
		expiryDate = language.Generic.SchoolInfo.kWithoutLife;
	}

	

	var fileAttachment = {};
	if (LicenseController.fileAttachControllerLicenseAES.fileAttachments.files[0]) {
		fileAttachment.fileAttachmentId = LicenseController.fileAttachControllerLicenseAES.fileAttachments.files[0].Id;
		fileAttachment.description = LicenseController.fileAttachControllerLicenseAES.fileAttachments.files[0].Description;
		fileAttachment.fileName = LicenseController.fileAttachControllerLicenseAES.fileAttachments.files[0].Name;
		fileAttachment.fileData = {};
		fileAttachment.saved = true;
		fileAttachment.attachmentType = LicenseController.licenseAESEnum;
	}

	var licenseDto = {
		seriesBlank: seria,
		numberBlank: number,
		regNumber: regNumber,
		issuedDate: dateOfIssue,
		expiredDate: expiryDate,
		decisionOrderNumber: decisionOrderNumber,
		decisionDate: decisionOrderDate,
		licenseOrganName: licenseOrgan,
		linkScanCopy: fileAttachment,
	};

	LicenseController.when(LicenseController.getLicenseTemplate(),
		jsSubmit({
			method: "POST",
			action: "/webapi/schools/" + LicenseController.schoolId + "/addLicenseAES",
			data: licenseDto,
			contentType: "application/json"
		})
	).then(function (template) {

		template = Handlebars.compile(template);

		licenseContainer = {
			licenseAES: licenseDto
		};
		var html = template({
			panelName: language.Generic.SchoolInfo.kLicenseAES,
			licenseContainer: licenseContainer,
			language: language
		});

		$(".license-list").append(html);

		LicenseController.licenseContainer.licenseAES = licenseDto;

		//если заполнены все лицензии
		if (LicenseController.hasAllLicense(LicenseController.licenseContainer)) {
			$('button[name="add-license"]').hide();
		}

		$(".buttons-panel-right").show();
		$(".license-list-empty").remove();

		LicenseController.loadPage();
	});
};

//добавить аккредитацию
LicenseController.addAccreditation = function () {
	var form = LicenseController.form;

	if (!form.valid()) {
		return;
	}

	//считываем значения из модального окна
	//var licenseType          = $('select[name="licenseType"]'                    , form).val();
	var seriesBlank = $('input[name="accreditationSeriesBlank"]', form).val();
	var numberBlank = $('input[name="accreditationNumberBlank"]', form).val();
	var regNumber = $('input[name="accreditationRegNumber"]', form).val();
	var issuedDate = $('input[name="accreditationIssuedDate"]', form).val();
	var expiredDate = $('input[name="accreditationExpiredDate"]', form).val();
	var licenseOrganName = $('input[name="accreditationLicenseOrganName"]', form).val();
	var status = $('input[name="accreditationStatus"]', form).val();
	var decisionOrderNumber = $('input[name="accreditationDecisionOrderNumber"]', form).val();
	var decisionDate = $('input[name="accreditationDecisionDate"]', form).val();
	var renewOrderNumber = $('input[name="accreditationRenewOrderNumber"]', form).val();
	var renewDate = $('input[name="accreditationRenewDate"]', form).val();
	var renewRegNumber = $('input[name="accreditationRenewRegNumber"]', form).val();
	var suspensionOrderNumber = $('input[name="accreditationSuspensionOrderNumber"]', form).val();
	var suspensionDate = $('input[name="accreditationSuspensionDate"]', form).val();
	var renewalOrderNumber = $('input[name="accreditationRenewalOrderNumber"]', form).val();
	var renewalDate = $('input[name="accreditationRenewalDate"]', form).val();
	var deprivationOrderNumber = $('input[name="accreditationDeprivationOrderNumber"]', form).val();
	var deprivationOrderDate = $('input[name="accreditationDeprivationOrderDate"]', form).val();
	var stopActionOrderNumber = $('input[name="accreditationStopActionOrderNumber"]', form).val();
	var stopActionDate = $('input[name="accreditationStopActionDate"]', form).val();

	var select = document.getElementById("isRenewId");
	var isRenewCertificate = select.options[select.selectedIndex].value;

	var withoutLife = $('input[name="accreditationWithout-life"]', form);
	if (withoutLife.prop("checked")) {
		expiredDate = language.Generic.SchoolInfo.kWithoutLife;
	}


	var linkToScanCopy = $('input[name="linkToScanCopyAccred"]', form).val();



	var fileAttachment = {};
	if (LicenseController.fileAttachControllerAccreditation.fileAttachments.files[0]) {
		fileAttachment.fileAttachmentId = LicenseController.fileAttachControllerAccreditation.fileAttachments.files[0].Id;
		fileAttachment.description = LicenseController.fileAttachControllerAccreditation.fileAttachments.files[0].Description;
		fileAttachment.fileName = LicenseController.fileAttachControllerAccreditation.fileAttachments.files[0].Name;
		fileAttachment.fileData = {};
		fileAttachment.saved = true;
		fileAttachment.attachmentType = LicenseController.accreditationEnum;
	}


	var licenseDto = {
		seriesBlank: seriesBlank,
		numberBlank: numberBlank,
		regNumber: regNumber,
		issuedDate: issuedDate,
		expiredDate: expiredDate,
		decisionOrderNumber: decisionOrderNumber,
		decisionDate: decisionDate,
		licenseOrganName: licenseOrganName,
		status: status,
		isRenewCertificate: isRenewCertificate,
		renewOrderNumber: renewOrderNumber,
		renewDate: renewDate,
		renewRegNumber: renewRegNumber,
		suspensionOrderNumber: suspensionOrderNumber,
		suspensionDate: suspensionDate,
		renewalOrderNumber: renewalOrderNumber,
		renewalDate: renewalDate,
		deprivationOrderNumber: deprivationOrderNumber,
		deprivationOrderDate: deprivationOrderDate,
		stopActionOrderNumber: stopActionOrderNumber,
		stopActionDate: stopActionDate,
		linkScanCopy: fileAttachment,
	};

	LicenseController.when(LicenseController.getLicenseTemplate(),
		jsSubmit({
			method: "POST",
			action: "/webapi/schools/" + LicenseController.schoolId + "/addAccreditation",
			data: licenseDto,
			contentType: "application/json"
		})
	).then(function (template) {

		template = Handlebars.compile(template);

		licenseContainer = {
			accreditation: licenseDto
		};
		var html = template({
			panelName: language.Generic.SchoolInfo.kCertificateAccreditation,
			licenseContainer: licenseContainer,
			language: language
		});

		$(".license-list").append(html);

		LicenseController.licenseContainer.accreditation = licenseDto;

		//если заполнены все лицензии
		if (LicenseController.hasAllLicense(LicenseController.licenseContainer)) {
			$('button[name="add-license"]').hide();
		}

		$(".buttons-panel-right").show();
		$(".license-list-empty").remove();

		LicenseController.loadPage();
	});
};

//удалить лицензию
LicenseController.removeLicense = function () {
	$.show.confirmation(language.Generic.SchoolInfo.kAreSureDeleteDocument).then(function () {
		jsSubmit({
			method: "DELETE",
			action: "/webapi/schools/" + LicenseController.schoolId + "/deleteLicense/",
			showProcessing: true,
			onSuccess: function () {

				LicenseController.licenseContainer.license = null;

				$(".license").remove();

				$('button[name="add-license"]').show();

				//если нет ни одной лицензии
				if (!LicenseController.hasAnyLicense(LicenseController.licenseContainer)) {
					$(".buttons-panel-right").hide();

					LicenseController.addLicenseListEmptyInfo();
				}

				alert(language.Generic.SchoolInfo.kDocumentSuccessDeleted);
			}
		});
	});
};

//удалить лицензию на ведение доп обр услуг
LicenseController.removeLicenseAES = function () {
	$.show.confirmation(language.Generic.SchoolInfo.kAreSureDeleteDocument).then(function () {
		jsSubmit({
			method: "DELETE",
			action: "/webapi/schools/" + LicenseController.schoolId + "/deleteLicensesAES/",
			showProcessing: true,
			onSuccess: function () {
				LicenseController.licenseContainer.licenseAES = null;

				$(".licenseAES").remove();

				$('button[name="add-license"]').show();

				//если нет ни одной лицензии
				if (!LicenseController.hasAnyLicense(LicenseController.licenseContainer)) {
					$(".buttons-panel-right").hide();

					LicenseController.addLicenseListEmptyInfo();
				}

				alert(language.Generic.SchoolInfo.kDocumentSuccessDeleted);
			}
		});
	});
};

//удалить аккредитацию
LicenseController.removeAccreditation = function () {
	$.show.confirmation(language.Generic.SchoolInfo.kAreSureDeleteDocument).then(function () {
		jsSubmit({
			method: "DELETE",
			action: "/webapi/schools/" + LicenseController.schoolId + "/deleteAccreditation/",
			showProcessing: true,
			onSuccess: function () {
				LicenseController.licenseContainer.accreditation = null;

				$(".accreditation").remove();

				$('button[name="add-license"]').show();

				//если нет ни одной лицензии
				if (!LicenseController.hasAnyLicense(LicenseController.licenseContainer)) {
					$(".buttons-panel-right").hide();

					LicenseController.addLicenseListEmptyInfo();
				}

				alert(language.Generic.SchoolInfo.kDocumentSuccessDeleted);
			}
		});
	});
};

LicenseController.getAddLicenseButton = function () {

	var addButtons = $('button[name="add-license"]');

	if (addButtons.length >= 1)
		return;

	return $.uicontrols.button({
		label: language.Generic.SchoolInfo.kAddDocument,
		title: language.Generic.SchoolInfo.kAddDocument,
		icon: "plus-sign",
		name: "add-license",
		click: "LicenseController.addHandler()"
	});
};

//при добавлении лицензии отрисовать типы лицензий в выпадающем списке
LicenseController.fillLicenseTypeField = function () {
	var licenseTypeField = $('[name="licenseType"]');

	if (!this.licenseContainer.license) {
		var option = $("<option>").val("license").text(language.Generic.SchoolInfo.kLicense);
		licenseTypeField.append(option);
	}

	if (!this.licenseContainer.licenseAES) {
		var option = $("<option>").val("licenseAES").text(language.Generic.SchoolInfo.kLicenseAES);
		licenseTypeField.append(option);
	}

	if (!this.licenseContainer.accreditation) {
		var option = $("<option>").val("accreditation").text(language.Generic.SchoolInfo.kCertificateAccreditation);
		licenseTypeField.append(option);
	}
};

LicenseController.getLicenseTemplate = function () {
	return LicenseController.getTemplate("/vendor/pages/templates/license/licenses1.html");
};

LicenseController.getEditLicenseTemplate = function () {
	return LicenseController.getTemplate("/vendor/pages/templates/license/editLicense1.html");
};

LicenseController.getEditLicenseAESTemplate = function () {
	return LicenseController.getTemplate("/vendor/pages/templates/license/editLicenseAES1.html");
};

LicenseController.getEditAccreditationTemplate = function () {
	return LicenseController.getTemplate("/vendor/pages/templates/license/editAccreditation1.html");
};

LicenseController.getAddLicenseTemplate = function () {
	return LicenseController.getTemplate("/vendor/pages/templates/license/addLicenses1.html");
};

LicenseController.getTemplate = function (url) {
	return jsSubmit({
		method: "GET",
		action: url,
		auth: false,
		dataType: "html",
		contentType: "text/plain"
	})
};

LicenseController.getIndexBy = function (name, value) {
	for (var i = 0; i < this.length; i++) {
		if (this[i][name] === value) {
			return i;
		}
	}

	return -1;
};

LicenseController.isAccreditation = function (licenseType) {
	return licenseType === "accreditation";
};
LicenseController.hasAnyLicense = function (licenseContainer) {
	if (licenseContainer.license || licenseContainer.licenseAES || licenseContainer.accreditation)
		return true;
	return false;
};
LicenseController.hasAllLicense = function (licenseContainer) {
	if (licenseContainer.license && licenseContainer.licenseAES && licenseContainer.accreditation)
		return true;
	return false;
};

//редактировать лицензию
LicenseController.editLicense = function () {
	var form;

	var edit = function (dialog) {
		if (!form.valid()) {
			return;
		}

		form = $('form[name="add-license"]');

		var seria = $('input[name="seriaOfForm"]', form).val();
		var number = $('input[name="numberOfForm"]', form).val();
		var regNumber = $('input[name="regNumber"]', form).val();
		var dateOfIssue = $('input[name="dateOfIssue"]', form).val();
		var expiryDate = $('input[name="expiryDate"]', form).val();
		var decisionOrderNumber = $('input[name="decisionOrderNumber"]', form).val();
		var decisionOrderDate = $('input[name="decisionOrderDate"]', form).val();
		var licenseOrgan = $('input[name="licenseOrgan"]', form).val();
		var linkToScanCopy = $('input[name="linkToScanCopy"]', form).val();
		var withoutLife = $('input[name="without-life"]', form);

		if (withoutLife.prop("checked")) {
			expiryDate = language.Generic.SchoolInfo.kWithoutLife;
		}

		var fileAttachment = {};
		if (LicenseController.fileAttachControllerLicense.fileAttachments.files[0]) {
			fileAttachment.fileAttachmentId = LicenseController.fileAttachControllerLicense.fileAttachments.files[0].Id;
			fileAttachment.description = LicenseController.fileAttachControllerLicense.fileAttachments.files[0].Description;
			fileAttachment.fileName = LicenseController.fileAttachControllerLicense.fileAttachments.files[0].Name;
			fileAttachment.fileData = {};
			fileAttachment.saved = true;
			fileAttachment.attachmentType = LicenseController.licenseEnum;
		}

		var licenseDto = {
			seriesBlank: seria,
			numberBlank: number,
			regNumber: regNumber,
			issuedDate: dateOfIssue,
			expiredDate: expiryDate,
			decisionOrderNumber: decisionOrderNumber,
			decisionDate: decisionOrderDate,
			licenseOrganName: licenseOrgan,
			linkScanCopy: fileAttachment,
		};

		LicenseController.when(
			LicenseController.getLicenseTemplate(),
			jsSubmit({
				method: "PUT",
				action: "/webapi/schools/" + LicenseController.schoolId + "/editLicense",
				data: licenseDto,
				contentType: "application/json"
			})
		).then(function (template) {

			template = Handlebars.compile(template);

			licenseContainer = {
				license: licenseDto
			};
			var html = template({
				panelName: language.Generic.SchoolInfo.kLicense,
				licenseContainer: licenseContainer,
				language: language
			});

			$(".license").replaceWith(html);

			LicenseController.licenseContainer.license = licenseDto;

			dialog.$modal.prop("dataWereChanged", false);
			window.dataWereChanged = false;
			dialog.close();
		});
	};



	LicenseController.getEditLicenseTemplate().then(function (template) {
		template = template.replace(/(?:\r\n|\r|\n)/g, "");
		template = Handlebars.compile(template);

		var html = template({
			language: language,
			license: LicenseController.licenseContainer.license
		});

		$.show.dialog({
			title: language.Generic.Buttons.kEdit,
			buttons: [{ label: language.Generic.Buttons.kSave, action: edit }],
			message: html,
			size: BootstrapDialog.SIZE_WIDE,
			onshown: function () {
				var option = $("<option>").text(language.Generic.SchoolInfo.kLicense);

				$('select[name="licenseType"]')
					.append(option)
					.prop("disabled", true);

				dateInput.initDateInputs(null, null, null, {
					format: "d.mm.yyyy"
				});

				form = $('form[name="add-license"]');

				LicenseController.validator = form.validate(LicenseController.validationConstraints);

				//ссылка на сканкопию лицензия
				var schoolId = LicenseController.schoolId;



				var licensesFilesEnum = 201;
				var file = LicenseController.licenseContainer.license.linkScanCopy;

				if (file) {
					file.isCanDeleteFromDb = false;
				}


				LicenseController.fileAttachControllerLicense = new FileAttachmentCtrl(
					{ block: $('#scanCopy') },
					{
						wasChanged: true,
						files: file,
						context: { schoolId:schoolId, attachmentType: licensesFilesEnum }
					});


			},
			onhide: function (dialog) {


				//перегружаем данные на главной странице с лицензиями
				LicenseController.loadPage();
			}
		});
	});
};
LicenseController.editLicenseAES = function () {
	var form;

	var edit = function (dialog) {
		if (!form.valid()) {
			return;
		}

		form = $('form[name="add-license"]');

		var seria = $('input[name="seriaOfForm"]', form).val();
		var number = $('input[name="numberOfForm"]', form).val();
		var regNumber = $('input[name="regNumber"]', form).val();
		var dateOfIssue = $('input[name="dateOfIssue"]', form).val();
		var expiryDate = $('input[name="expiryDate"]', form).val();
		var decisionOrderNumber = $('input[name="decisionOrderNumber"]', form).val();
		var decisionOrderDate = $('input[name="decisionOrderDate"]', form).val();
		var licenseOrgan = $('input[name="licenseOrgan"]', form).val();
		var linkToScanCopy = $('input[name="linkToScanCopy"]', form).val();
		var withoutLife = $('input[name="without-life"]', form);

		if (withoutLife.prop("checked")) {
			expiryDate = language.Generic.SchoolInfo.kWithoutLife;
		}


		var fileAttachment = {};
		if (LicenseController.fileAttachControllerLicenseAES.fileAttachments.files[0]) {
			fileAttachment.fileAttachmentId = LicenseController.fileAttachControllerLicenseAES.fileAttachments.files[0].Id;
			fileAttachment.description = LicenseController.fileAttachControllerLicenseAES.fileAttachments.files[0].Description;
			fileAttachment.fileName = LicenseController.fileAttachControllerLicenseAES.fileAttachments.files[0].Name;
			fileAttachment.fileData = {};
			fileAttachment.saved = true;
			fileAttachment.attachmentType = LicenseController.licenseAESEnum;
		}


		var licenseDto = {
			seriesBlank: seria,
			numberBlank: number,
			regNumber: regNumber,
			issuedDate: dateOfIssue,
			expiredDate: expiryDate,
			decisionOrderNumber: decisionOrderNumber,
			decisionDate: decisionOrderDate,
			licenseOrganName: licenseOrgan,
			linkScanCopy: fileAttachment,
		};

		LicenseController.when(LicenseController.getLicenseTemplate(),
			jsSubmit({
				method: "PUT",
				action: "/webapi/schools/" + LicenseController.schoolId + "/editLicenseAES",
				data: licenseDto,
				contentType: "application/json"
			})
		).then(function (template) {



			template = Handlebars.compile(template);

			licenseContainer = {
				licenseAES: licenseDto
			};
			var html = template({
				panelName: language.Generic.SchoolInfo.kLicense,
				licenseContainer: licenseContainer,
				language: language
			});

			$(".licenseAES").replaceWith(html);

			LicenseController.licenseContainer.licenseAES = licenseDto;

			dialog.$modal.prop("dataWereChanged", false);
			window.dataWereChanged = false;
			dialog.close();
		});
	};

	LicenseController.getEditLicenseAESTemplate().then(function (template) {
		template = template.replace(/(?:\r\n|\r|\n)/g, "");
		template = Handlebars.compile(template);

		var html = template({
			language: language,
			licenseAES: LicenseController.licenseContainer.licenseAES
		});

		$.show.dialog({
			title: language.Generic.Buttons.kEdit,
			buttons: [{ label: language.Generic.Buttons.kSave, action: edit }],
			message: html,
			size: BootstrapDialog.SIZE_WIDE,
			onshown: function () {
				var option = $("<option>").text(language.Generic.SchoolInfo.kLicenseAES);

				$('select[name="licenseType"]')
					.append(option)
					.prop("disabled", true);

				dateInput.initDateInputs(null, null, null, {
					format: "d.mm.yyyy"
				});

				form = $('form[name="add-license"]');

				LicenseController.validator = form.validate(LicenseController.validationConstraints);

				;

				//ссылка на сканкопию лицензия
				var schoolId = LicenseController.schoolId;

				var licensesFilesEnum = 202;
				var file = LicenseController.licenseContainer.licenseAES.linkScanCopy;

				if (file) {
					file.isCanDeleteFromDb = false;
				}

				LicenseController.fileAttachControllerLicenseAES = new FileAttachmentCtrl(
					{ block: $('#scanCopy') },
					{
						wasChanged: true,
						files: file,
						context: { schoolId:schoolId, attachmentType: licensesFilesEnum }
					});

			},
			onhide: function (dialog) {

				//перегружаем данные на главной странице с лицензиями
				LicenseController.loadPage();
			}
		});
	});
};
LicenseController.editAccreditation = function () {
	var form;

	//эта функция срабатывает при нажатии на кнопку редактировать в модельном окне
	var edit = function (dialog) {
		if (!form.valid()) {
			return;
		}

		form = $('form[name="add-license"]');

		//считываем значения из модального окна
		//var licenseType          = $('select[name="licenseType"]', form).val();
		var seriesBlank = $('input[name="accreditationSeriesBlank"]', form).val();
		var numberBlank = $('input[name="accreditationNumberBlank"]', form).val();
		var regNumber = $('input[name="accreditationRegNumber"]', form).val();
		var issuedDate = $('input[name="accreditationIssuedDate"]', form).val();
		var expiredDate = $('input[name="accreditationExpiredDate"]', form).val();
		var licenseOrganName = $('input[name="accreditationLicenseOrganName"]', form).val();
		var status = $('input[name="accreditationStatus"]', form).val();
		var decisionOrderNumber = $('input[name="accreditationDecisionOrderNumber"]', form).val();
		var decisionDate = $('input[name="accreditationDecisionDate"]', form).val();
		var renewOrderNumber = $('input[name="accreditationRenewOrderNumber"]', form).val();
		var renewDate = $('input[name="accreditationRenewDate"]', form).val();
		var renewRegNumber = $('input[name="accreditationRenewRegNumber"]', form).val();
		var suspensionOrderNumber = $('input[name="accreditationSuspensionOrderNumber"]', form).val();
		var suspensionDate = $('input[name="accreditationSuspensionDate"]', form).val();
		var renewalOrderNumber = $('input[name="accreditationRenewalOrderNumber"]', form).val();
		var renewalDate = $('input[name="accreditationRenewalDate"]', form).val();
		var deprivationOrderNumber = $('input[name="accreditationDeprivationOrderNumber"]', form).val();
		var deprivationOrderDate = $('input[name="accreditationDeprivationOrderDate"]', form).val();
		var stopActionOrderNumber = $('input[name="accreditationStopActionOrderNumber"]', form).val();
		var stopActionDate = $('input[name="accreditationStopActionDate"]', form).val();

		var select = document.getElementById("isRenewId");
		var isRenewCertificate = select.options[select.selectedIndex].value;

		var withoutLife = $('input[name="accreditationWithout-life"]', form);
		if (withoutLife.prop("checked")) {
			expiredDate = language.Generic.SchoolInfo.kWithoutLife;
		}

		var linkToScanCopy = $('input[name="linkToScanCopy"]', form).val();


		var fileAttachment = {};
		if (LicenseController.fileAttachControllerAccreditation.fileAttachments.files[0]) {
			fileAttachment.fileAttachmentId = LicenseController.fileAttachControllerAccreditation.fileAttachments.files[0].Id;
			fileAttachment.description = LicenseController.fileAttachControllerAccreditation.fileAttachments.files[0].Description;
			fileAttachment.fileName = LicenseController.fileAttachControllerAccreditation.fileAttachments.files[0].Name;
			fileAttachment.fileData = {};
			fileAttachment.saved = true;
			fileAttachment.attachmentType = LicenseController.accreditationEnum;
		}

		var licenseDto = {
			seriesBlank: seriesBlank,
			numberBlank: numberBlank,
			regNumber: regNumber,
			issuedDate: issuedDate,
			expiredDate: expiredDate,
			decisionOrderNumber: decisionOrderNumber,
			decisionDate: decisionDate,
			licenseOrganName: licenseOrganName,
			status: status,
			isRenewCertificate: isRenewCertificate,
			renewOrderNumber: renewOrderNumber,
			renewDate: renewDate,
			renewRegNumber: renewRegNumber,
			suspensionOrderNumber: suspensionOrderNumber,
			suspensionDate: suspensionDate,
			renewalOrderNumber: renewalOrderNumber,
			renewalDate: renewalDate,
			deprivationOrderNumber: deprivationOrderNumber,
			deprivationOrderDate: deprivationOrderDate,
			stopActionOrderNumber: stopActionOrderNumber,
			stopActionDate: stopActionDate,
			linkScanCopy: fileAttachment,

		};



		LicenseController.when(LicenseController.getLicenseTemplate(),
			jsSubmit({
				method: "PUT",
				action: "/webapi/schools/" + LicenseController.schoolId + "/editAccreditation",
				data: licenseDto,
				contentType: "application/json"

			})
		).then(function (template) {

			template = Handlebars.compile(template);

			licenseContainer = {
				accreditation: licenseDto
			};
			var html = template({
				panelName: language.Generic.SchoolInfo.kLicense,
				licenseContainer: licenseContainer,
				language: language
			});

			$(".accreditation").replaceWith(html);

			LicenseController.licenseContainer.accreditation = licenseDto;

			dialog.$modal.prop("dataWereChanged", false);
			window.dataWereChanged = false;
			dialog.close();
		});
	};

	LicenseController.getEditAccreditationTemplate().then(function (template) {
		template = template.replace(/(?:\r\n|\r|\n)/g, "");
		template = Handlebars.compile(template);

		var html = template({
			language: language,
			accreditation: LicenseController.licenseContainer.accreditation
		});

		$.show.dialog({
			title: language.Generic.Buttons.kEdit,
			buttons: [{ label: language.Generic.Buttons.kSave, action: edit }],
			message: html,
			size: BootstrapDialog.SIZE_WIDE,
			onshown: function () {
				var option = $("<option>").text(language.Generic.SchoolInfo.kCertificateAccreditation);

				$('select[name="licenseType"]')
					.append(option)
					.prop("disabled", true);

				dateInput.initDateInputs(null, null, null, {
					format: "d.mm.yyyy"
				});

				form = $('form[name="add-license"]');

				LicenseController.validator = form.validate(LicenseController.validationConstraints);



				///ссылка на сканкопию лицензия
				var schoolId = LicenseController.schoolId;

				var licensesFilesEnum = 203;
				var file = LicenseController.licenseContainer.accreditation.linkScanCopy;

				if (file) {
					file.isCanDeleteFromDb = false;
				}

				LicenseController.fileAttachControllerAccreditation = new FileAttachmentCtrl(
					{ block: $('#scanCopy') },
					{
						wasChanged: true,
						files: file,
						context: { schoolId:schoolId, attachmentType: licensesFilesEnum }
					});

			},
			onhide: function (dialog) {

				//перегружаем данные на главной странице с лицензиями
				LicenseController.loadPage();
			}
		});
	});
};