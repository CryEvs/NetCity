// контроллер для стат. отчетности
class StatFormsCtrl {

	constructor(yearId, formId, isMns) {
		// учебный год
		this.yearId = yearId;
		// идентификатор формы
		this.formId = formId;
		// МНС
		this.isMns = isMns;
		// шаблон
		this.statFormValidateErrorsTemplate = null;
	}

	// импорт форм фгсн
	ImportStatForm() {
		let self = this;

		// инициализирует шаблон
		let getStatFormValidateErrorsTemplate = $.ajax({
			url: "/vendor/pages/templates/statforms/validateErrors.html",
			cache: true,
			success: function (data) {
				self.statFormValidateErrorsTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
			}
		});

		let importShowDialogWrap = function(html) {
			// отложенный объект
			let deferred = $.Deferred();

			$.show.dialog({
				message: $(html),
				buttons: [{ label: language.Generic.Buttons.kContinue, action: function(dialog) {
					jsSubmit({
						action: `/webapi/schools/statforms/${self.formId}/import`,
						data: { isMns: self.isMns },
						method: "GET",
						showProcessing: true
					})
					.then(function () {
						// закрыть диалог
						dialog.successClose();
						// успех
						deferred.resolve();
					});
				}, cssClass: 'btn-primary' }]
			});

			return deferred.promise();
		}

		// функция импорта
		let importFunc = function () {
			// инициализирует файловый диалог
			$.show.fileDialog({
				title: language.Generic.Common.kSelectFile,
				fileExts: ['.xls'],
				url: `/webapi/schools/statforms/${self.formId}/years/${self.yearId}/validate`,
				invalidFileExtMsg: language.Generic.Curriculum.kInvalidImportFileFormat,
				isAjax: true
			})
			.then(function (data) {
				if (data.length) {
					// шаблон
					let template = Handlebars.compile(self.statFormValidateErrorsTemplate);
					let html = template({ errors: data, language: language });

					return importShowDialogWrap(html);
				} else {
					return jsSubmit({
						action: `/webapi/schools/statforms/${self.formId}/import`,
						data: { isMns: self.isMns },
						method: "GET",
						showProcessing: true
					});
				}
			})
			.then(function() {
				alert(language.Generic.Import.kImportFGSNSuccess);
			});
		}

		// коллекция последовательных запросов
		let queries = [ getStatFormValidateErrorsTemplate ];

		// выполнение запроса
		extDeferred.when(queries)
			.then(function () {
				importFunc();
			});
	}
}

module.exports = StatFormsCtrl;