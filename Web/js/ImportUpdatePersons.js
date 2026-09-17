/// <reference path="../vendor/components/jquery/dist/jquery.js" />

var importUpdatePerson = (function () {
	//ПРИВАТНЫЕ ЧЛЕНЫ

	var myScope = {};

	var fileDidalogHelper = {
		openFileDialog: function (callback) {
			//открыть диалог выбора файла
			myScope.dialog = $.show.fileDialog({
				title: language.Generic.Import.kImportStudents,
				fileExts: ['.xls','.xlsx'],
				invalidFileExtMsg:   language.Generic.Curriculum.kInvalidImportFileFormat, //"Недопустимый формат файла разрешаются форматы .xls , .xlsx",
				isAjax: true,
				url: "/webapi/users/importUpdatePerson/parsefile",
				handlerAjaxSuccess: callback,
				customCheck: function (form) { return true; },
				onShownDlg: function () { },
				isHeavyAction: false,
			});
		}
	}

	//отправить запрос на сервер запускающий задачу в очереди
	myScope.startImportTask = function (taskId) {
		var deferred = $.Deferred();
		deferred.resolve(taskId);
		taskQueue.execute({
			getTaskFunc: function () {
				return deferred.promise();
			},
			hint: "Данное информационное окно можно закрыть не дожидаясь выполнения импорта."

		})
		.then(function (text) {
			alert(text);
		});


	}

	var importer = {
		sendFile: function () {
			fileDidalogHelper.openFileDialog(importer.callBackSendFile);
		},
		callBackSendFile: function (result) {

			myScope.result = result;
			if (result.taskId) {
				//если в файле нет ошибок - то сразу возвращается id задачи в очереди
				myScope.startImportTask(result.taskId);
			}
			else {
				//иначе отображаем ошибки
				importer.showValidationErrors();
			}
		},

		showValidationErrors: function () {
			$.ajax({
				url: '/vendor/pages/movement/templates/ImportForUpdateValidationErrorsTemplate.html',
				cache: true,
				type: 'GET',
				success: function (html) {
					var i;

					//оборачиваю каждую ошибку в объект с флагами указывающими в каком виде показывать столбец возможные значения
					var errorsWraps = [];


					for (i = 0; i < myScope.result.errorList.errors.length ; i++) {
						var errWrap = {
							error: myScope.result.errorList.errors[i],
							showEnabledValues: (myScope.result.errorList.errors[i].enabledValues == null || myScope.result.errorList.errors[i].enabledValues.length <= 6),
							showSpoilerButtonEnabledValues: myScope.result.errorList.errors[i].enabledValues != null && myScope.result.errorList.errors[i].enabledValues.length > 6,
							emptyEnabledValues: myScope.result.errorList.errors[i].enabledValues == null

						};

						errorsWraps.push(errWrap);
					};

					myScope.showColumnEnabledValues = _.some(myScope.result.errorList.errors, function (error) {
						return error.enabledValues != null;
					});

					var model = {
						language: language,
						errorsWraps: errorsWraps,
						showColumnEnabledValues: myScope.showColumnEnabledValues,
						isAllRowsHasCriticalErrors: myScope.result.errorList.isAllRowsHasCriticalErrors,
					};

					html = html.replace(/(?:\r\n|\r|\n)/g, '');

					myScope.html = html;

					var compiledHtml = Handlebars.compile(html);

					template = compiledHtml(model);

					var dialog = $.show.dialog({
						size: BootstrapDialog.SIZE_FULL_SCREEN,
						title: "Ошибки",
						message: template,
						onshown: function (dialog) { myScope.modalOnshown(); },

						buttons: [
										{
											label: "Продолжить",
											action: function (dialog) { myScope.beginImport(); dialog.close() },
											cssClass: "Import",
										},
										{
											label: language.Generic.Buttons.kCancel,
											action: function (dialog) { dialog.close(); }
										},
										{
											label: language.Generic.Buttons.kPrint,
											action: function (dialog) { myScope.errorsPrint(); dialog.close() }
										}
						]
					}
							)

					myScope.addToolTipToButtons = function () {
						$('.Import').attr('title', 'Необходимо выбрать один из вариантов обработки ошибок');
					}

					myScope.disableImportButton = function () {
						$('.Import').attr('disabled', 'disabled');
					}

					myScope.enableImportButton = function () {
						$('.Import').removeAttr('disabled');
					}

					myScope.addEventToRadioButton = function () {
						$('#skipInvalidData').change(function () { myScope.enableImportButton(); })
						$('#skipInvalidStudents').change(function () { myScope.enableImportButton(); })
					}

					myScope.importTypeOnlyValidStudents = 1;
					myScope.importTypeOnlyValidColumns = 2;


					//отправить запрос на сервер инициирующий процесс импорта после показа ошибок валидации
					myScope.beginImport = function (skipInvalidData) {
						//если все строки с какими-то ошибками валидации
						if (myScope.result.errorList.isAllRowsHasCriticalErrors) {
							alert("Импорт невозможен т.к. все записи содержат КРИТИЧЕСКИЕ ошибки.");
							return;
						}

						//считываем настройку варианта импорта
						var skipWarnings = $('#skipInvalidData').is(':checked');

						jsSubmit({
							action: "/webapi/users/importUpdatePerson/import",
							method: "POST",
							data: "=" + skipWarnings,
							showProcessing: true
						})
						.then(function (taskId) {
							myScope.startImportTask(taskId);
						})
					}



					myScope.modalOnshown = function () {
						myScope.addToolTipToButtons();
						myScope.disableImportButton();
						myScope.addEventToRadioButton();
					}

					//печать ошибок
					myScope.errorsPrint = function () {
						var i;
						var errorsWrapsPrint = [];

						for (i = 0; i < myScope.result.errorList.errors.length; i++) {
							var errWrapPrint = {
								error: myScope.result.errorList.errors[i],
								showEnabledValues: true, //указываю необходимость отобразить все допустимые значения
								showSpoilerButtonEnabledValues: false,
								emptyEnabledValues: myScope.result.errorList.errors[i].enabledValues == null
							};

							errorsWrapsPrint.push(errWrapPrint);
						}

						var modelPrint = {
							language: language,
							errorsWraps: errorsWrapsPrint,
							showColumnEnabledValues: myScope.showColumnEnabledValues
						};

						var compiledHtml = Handlebars.compile(myScope.html);
						var htmlView = compiledHtml(modelPrint);
						htmlView = htmlView.replace('similar-user-resolve-dialog', '');
						htmlView = htmlView.replace('errorDescription', '');
						htmlView = htmlView.replace('radioImportOption', 'hideBtn')
						$(htmlView).printUtils().toPrint();
					}
				}
			});
		}
	}

	//ПУБЛИЧНЫЕ ЧЛЕНЫ
	return {
		execute: importer.sendFile
	}
})();