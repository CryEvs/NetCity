/// <reference path="../vendor/components/jquery/dist/jquery.js" />

var exporter =
	function () {
		//ПРИВАТНЫЕ ЧЛЕНЫ
		var strNames = {
			all: "all",
			allAttachments: "allAttachments",
			allEnrolled: "allEnrolled",
			male: "male",
			female: "female",
			shortExport: 1,
			fullExport: 2,
		}

		

		var filterHelper = {
			getFirstLetter: function () {
				var res = $("select[name=AbcFilter_start]").val();

				if (res === " ")
					res = 'latin'

				return res;
			},
			getLastLetter: function () {
				var res = $("select[name=AbcFilter_end]").val();
				return res;
			},
			getGender: function () {
				var genderFilter = $("select[name=GenderFilter]").val();

				if (genderFilter === "A") {
					res = strNames.all;
				} else if (genderFilter === "М") {
					res = strNames.male;
				} else if (genderFilter === "Ж") {
					res = strNames.female;
				}

				return res;
			},
			getGroupInfo: function () {
				var res = {
					groupType: "",
					group: "",
					letter: "",
				};

				var groupType = $("select[name=enroll-status]").val();

				var groupTypeEnum = {
					all: "-1",
					allEnrolled: "1",
					allAttachments: "2"
				}

				if (groupType === groupTypeEnum.all) { //если все
					res.groupType = strNames.all;
				} else if (groupType === groupTypeEnum.allEnrolled) { //если всеЗачисленные
					res.groupType = strNames.allEnrolled;

					res.group = $("select[name=grade]").val();
					res.letter = $("select[name=letter]").val();

					if (!res.letter)
						res.letter = "";

					var all = "-1"; //если выбраны все группы, то буква нам не нужна
					if (res.group === all) {
						res.letter = "";
						res.group = strNames.all;
					}
				} else if (groupType === groupTypeEnum.allAttachments) { //если всеПрикрепленные
					res.groupType = strNames.allAttachments;
					res.group = $("select[name=grade-attach]").val();

					if (res.group == "-1") {
						res.group = strNames.all;
					}
				}

				return res;
			},
			isFindByFam: function () {
				var res = $('div#FindByFam.panel-collapse.collapse.in').length > 0
				return res;
			},
			getFamFilter: function () {
				if (this.isFindByFam()) {
					var res = $('input[name=SRCH_TEXT]').val();
					return res;
				} else {
					return "";
				}
			}
		};

		var _url;

		//объект выбиратель типа экспорта
		var exportTypeSelector = {
			compileHtml: function (html) {
				template = html.replace(/(?:\r\n|\r|\n)/g, '');
				var compiledHtml = Handlebars.compile(template);
				return compiledHtml;
			},
			showCompiledHtml: function (compiledHtml) {
				return $.show.dialog({
					title: 'Выберите параметры экспорта',
					message: compiledHtml,
					size: BootstrapDialog.SIZE_WIDE,
					buttons: [
								{
									label: "Начать экспорт",
									action: sender.send,
									cssClass: 'btn-primary'
								}
					]
				});

			},
			showDialog: function (url) {

				_url = url;

				var htmlUrl = '/vendor/pages/templates/Export/SelectExportTypeTemplate.html';

				$.ajax({
					url: htmlUrl,
					cache: true,
					success: function (html) {
						var compiledHtml = exportTypeSelector.compileHtml(html);
						exportTypeSelector.showCompiledHtml(compiledHtml);
					}
				});
			},
		}

		//отправитель запроса на сервер
		var sender = {
			getStudentExportType: function () {
				var isShortStudentInfo = $("#shortStudentInfo").prop("checked");

				if (isShortStudentInfo) {
					return strNames.shortExport;
				}
				else {
					return strNames.fullExport;
				}

			},
			getParentExportType: function () {
				var isShortParentInfo = $("#shortParentInfo").prop("checked");

				if (isShortParentInfo) {
					return strNames.shortExport;
				} else {
					return strNames.fullExport;
				}
			},
			send: function (url) {

				if (_url) {
					url = _url;
				}

				if (!url) {
					alert("Error: не указан url контроллера!");
				}

				taskQueue.execute({
					getTaskFunc: function () {

						var studentExportType = sender.getStudentExportType();
						var parentExportType = sender.getParentExportType();

						return jsSubmit({
							action: url,
							method: "GET",
							data: {
								firstLetter: filterHelper.getFirstLetter(),
								lastLetter: filterHelper.getLastLetter(),
								gender: filterHelper.getGender(),
								groupType: filterHelper.getGroupInfo().groupType,
								group: filterHelper.getGroupInfo().group,
								groupLetter: filterHelper.getGroupInfo().letter,
								familyName: filterHelper.getFamFilter(),
								studentExportType: studentExportType,
								parentExportType: parentExportType,
							},

							showProcessing: false
						});
					},
					hint: "Данное информационное окно можно закрыть не дожидаясь выполнения экспорта. Результат будет отправлен Вам на внутреннюю почту."
				})
				.then(function (fileId) {
					postTo({ path: "/webapi/files/" + fileId, method: "GET" });
				});
			}
		};

		//ПУБЛИЧНЫЕ ЧЛЕНЫ
		return {
			exportUsers: sender.send, //полный экспорт по пользователям
			exportStudents: exportTypeSelector.showDialog, //выводит модальное окно для выбора типа импорта (короткий или полный) для студентов и родителей
		}
	}() //function (arg)