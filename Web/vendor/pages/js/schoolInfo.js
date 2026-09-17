var SchoolInfoController = (function (global) {
	function constructor(params) {
		this.isEMForSchool = params.isEMForSchool;
		this.canEditExtraSchoolInfo = params.canEditExtraSchoolInfo;
		this.okvedValue = params.okvedValue;
		this.emailValidator = params.emailValidator;
		this.internetAccessTechnology = params.internetAccessTechnology;
		this.typeOfOwnership = params.typeOfOwnership;
		this.reasonForChangeSchoolCard = params.reasonForChangeSchoolCard
		this.collegialOrgan = params.collegialOrgan;
		this.projectTypeForSchool = params.projectTypeForSchool;
	}

	var myScope = {};

	//справочник ОКВЕД
	var okvedValues = [
			{
				id: '85',
				text: 'Образование'
			},
			{
				id: '85.1',
				text: 'Образование общее'
			},
			{
				id: '85.11',
				text: 'Образование дошкольное'
			},
			{
				id: '85.12',
				text: 'Образование начальное общее'
			},
			{
				id: '85.13',
				text: 'Образование основное общее'
			},
			{
				id: '85.14',
				text: 'Образование среднее общее'
			},
			{
				id: '85.2',
				text: 'Образование профессиональное'
			},
			{
				id: '85.21',
				text: 'Образование профессиональное среднее'
			},
			{
				id: '85.22',
				text: 'Образование высшее'
			},
			{
				id: '85.22.1',
				text: 'Образование высшее – бакалавриат'
			},
			{
				id: '85.22.2',
				text: 'Образование высшее – специалитет'
			},
			{
				id: '85.22.3',
				text: 'Образование высшее – магистратура'
			},
			{
				id: '85.23',
				text: 'Подготовка кадров высшей квалификации'
			},
			{
				id: '85.3',
				text: 'Обучение профессиональное'
			},
			{
				id: '85.30',
				text: 'Обучение профессиональное'
			},
			{
				id: '85.4',
				text: 'Образование дополнительное'
			},
			{
				id: '85.41',
				text: 'Образование дополнительное детей и взрослых'
			},
			{
				id: '85.41.1',
				text: 'Образование в области спорта и отдыха'
			},
			{
				id: '85.41.2',
				text: 'Образование в области культуры'
			},
			{
				id: '85.41.9',
				text: 'Образование дополнительное детей и взрослых прочее, не включенное в другие группировки'
			},
			{
				id: '85.42',
				text: 'Образование профессиональное дополнительное'
			},
			{
				id: '85.42.1',
				text: 'Деятельность школ подготовки водителей автотранспортных средств'
			},
			{
				id: '85.42.2',
				text: 'Деятельность школ обучения вождению воздушных и плавательных судов, без выдачи коммерческих сертификатов и лицензий'
			},
			{
				id: '85.42.9',
				text: 'Деятельность по дополнительному профессиональному образованию прочая, не включенная в другие группировки'
			}
	];

	//справочник технологии доступа в интернет
	var internetAccessTechnologyValues = [
			{
				id: '3G/4G модем',
				text: '3G/4G модем'
			},
			{
				id: 'хDSL',
				text: 'хDSL'
			},
			{
				id: 'выделенный канал',
				text: 'выделенный канал'
			},
			{
				id: 'спутник',
				text: 'спутник'
			},
			{
				id: 'Dial-up модем',
				text: 'Dial-up модем'
			},
			{
				id: 'PON',
				text: 'PON'
			},
			{
				id: 'FTTx',
				text: 'FTTx'
			},
			{
				id: 'другое',
				text: 'другое'
			},


	]

	//справочник коллегиальных органов
	var collegialOrgans = [
		{
			id: 1,
			text: 'Общее собрание работников ОО',
		},
		{
			id: 2,
			text: 'Педагогический совет',
		},
		{
			id: 3,
			text: 'Попечительский совет',
		},
		{
			id: 4,
			text: 'Управляющий совет',
		},
		{
			id: 5,
			text: 'Наблюдательный совет',
		},
		{
			id: 6,
			text: 'Родительский комитет',
		}
	]

	//справочник форм собственности
	var typeOfOwnerships = [
			{
			id: '11',
			text: 'Государственная собственность'
		},
		{
			id: '12',
			text: 'Федеральная собственность'
		},
		{
			id: '13',
			text: 'Собственность субъектов Российской Федерации'
		},
		{
			id: '14',
			text: 'Муниципальная собственность'
		},
		{
			id: '16',
			text: 'Частная собственность'
		},
		{
			id: '18',
			text: 'Собственность российских граждан, постоянно проживающих за границей'
		},
		{
			id: '19',
			text: 'Собственность потребительской кооперации'
		},
		{
			id: '15',
			text: 'Собственность общественных и религиозных организаций (объединений)'
		},
		{
			id: '50',
			text: 'Собственность благотворительных организаций'
		},
		{
			id: '51',
			text: 'Собственность политических общественных объединений'
		},
		{
			id: '52',
			text: 'Собственность профессиональных союзов'
		},
		{
			id: '53',
			text: 'Собственность общественных объединений'
		},
		{
			id: '54',
			text: 'Собственность религиозных объединений'
		},
		{
			id: '17',
			text: 'Смешанная российская собственность'
		},
		{
			id: '21',
			text: 'Собственность международных организаций'
		},
		{
			id: '22',
			text: 'Собственность иностранных государств'
		},
		{
			id: '23',
			text: 'Собственность иностранных юридических лиц'
		},
		{
			id: '24',
			text: 'Собственность иностранных граждан и лиц без гражданства'
		},
		{
			id: '27',
			text: 'Смешанная иностранная собственность'
		},
		{
			id: '31',
			text: 'Совместная федеральная и иностранная собственность'
		},
		{
			id: '32',
			text: 'Совместная собственность субъектов Российской Федерации и иностранная собственность'
		},
		{
			id: '33',
			text: 'Совместная муниципальная и иностранная собственность'
		},
		{
			id: '34',
			text: 'Совместная частная и иностранная собственность'
		},
		{
			id: '35',
			text: 'Совместная собственность общественных и религиозных организаций (объединений) и иностранная собственность'
		},
		{
			id: '41',
			text: 'Смешанная российская собственность с долей федеральной собственности'
		},
		{
			id: '42',
			text: 'Смешанная российская собственность с долей собственности субъектов Российской Федерации'
		},
		{
			id: '43',
			text: 'Смешанная российская собственность с долями федеральной собственности и собственности субъектов Российской Федерации'
		},
		{
			id: '49',
			text: 'Иная смешанная российская собственность'
		},
		{
			id: '61',
			text: 'Собственность государственных корпораций'
		}
	]


	var canSubmit = function () {
		return global.checkForChanges;
	};

	var getSchoolCard = function () {
		var container = $('<div>');

		var schoolCard = $('div.print-block');
		var schoolCardClone = schoolCard.clone();

		schoolCardClone.find('#T00fio1').remove();

		var selects = schoolCard.find('select');

		schoolCardClone.find('select').each(function (index) {
			var options = $(this).find('option');

			selects.eq(index).children(':selected').each(function () {
				options.eq($(this).index()).attr('selected', true);
			});
		});

		schoolCardClone.find('.form-group').appendTo(container);

		return container;
	};

	var replace = function (printBlock, copyBlock) {
		$('div.text-left.text-nowrap', copyBlock).each(function () {
			$(this).replaceWith(this.innerHTML);
		});

		$('table', copyBlock).addClass('table table-xs');
		$('th', copyBlock).addClass('text-left');
		$('td', copyBlock).removeClass().addClass('cell-text');
	};

	var printOptions = {
		viewHeader: true,
		processingFunc: [replace]
	};

	constructor.prototype.init = function () {

		var datePickerOptions = {
			format: "d.mm.yyyy"
		};

		global.dateInput.initDateInputs(null, null, null, datePickerOptions);

        this.setOkvedValue();
        this.setInternetAccessTechnology();
        this.initValidationOptions(this.isEMForSchool);
        this.validator = $(global.document.SchoolEdit).validate(this.validationOptions);
        this.setTypeOfOwnershipValue();
        this.setCollegiateOrgan();
        this.setProjectTypeForSchool();
    };

	constructor.prototype.schoolInfoPrint = function () {
		getSchoolCard().printUtils().toPrint(printOptions);
	};

	constructor.prototype.schoolInfoExport = function () {
		getSchoolCard().printUtils().toExcel(printOptions);
	};

	constructor.prototype.gotoLicences = function () {
		global.extDeferred.when(canSubmit).then(function () {
			ok('SchoolEdit', '/asp/SetupSchool/SchoolForms/Licences/Licences.asp');
		});
	};

	constructor.prototype.initValidationOptions = function (isEmForSchool) {
		this.validationOptions = {
			ignore: '', //значение по умолчанию в плагине - :hidden, игнорировать скрытые элементы.
			highlight: function (element) {
				var panel = $(element).closest('div.panel-collapse');
				var isExpanded = panel.attr('aria-expanded');

				if (isExpanded !== 'true') {
					panel.collapse('show');
				}

				$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
				if (bowser && bowser.firefox && element.scrollIntoView) {
					element.scrollIntoView();
				}
			},
			rules: {
				FullName: {
					required: true
				},
				SchoolNumber: {
					required: true
				},
				FoundingDate: {
					validDate: true
				}
			}
		};

		if (!isEmForSchool) {
			this.validationOptions.rules.T00inn = {
				required: {
					depends: function() {
						return $('[name="T00ogrn"]').val() || $('[name="T00kpp"]').val();
					}
				},
				digits: true,
				permissibleLength: [10, 12]
			};

			this.validationOptions.rules.T00ogrn = {
				digits: true,
				required: true,
				dependsLength: {
					dependsField: {
						fieldName: language.Generic.SchoolInfo.kINN,
						element: $('[name="T00inn"]')
					},
					lengths: {
						10: 13,
						12: 15
					}
				}
			};

			this.validationOptions.rules.T00kpp = {
				digits: true,
				required: false,
				dependsLength: {
					dependsField: {
						fieldName: language.Generic.SchoolInfo.kINN,
						element: $('[name="T00inn"]')
					},
					lengths: {
						10: 9,
						12: 0
					}
				}
			};

			this.validationOptions.rules.T00bankKpp = {
				digits: true,
				permissibleLength: [9]
			};

			this.validationOptions.rules.T00okpo = {
				digits: true,
				permissibleLength: [8, 10]
			};

			this.validationOptions.rules.T00okato = {
				digits: true,
				permissibleLength: [8, 11]
			};

			this.validationOptions.rules.T00okogu = {
				digits: true,
				permissibleLength: [7]
			};

			this.validationOptions.rules.T00okopf = {
				digits: true,
				permissibleLength: [5]
			};

			this.validationOptions.rules.T00internetSpeedUnderContract = {
				number: true
			};

			this.validationOptions.rules.T00internetSpeedInFact = {
				number: true
			};

			this.validationOptions.rules.T00bankScore = {
				digits: true,
				permissibleLength: [20]
			};

			this.validationOptions.rules.T00corrScore = {
				digits: true,
				permissibleLength: [20]
			};

			this.validationOptions.rules.T00bik = {
				digits: true,
				permissibleLength: [9]
			};

			// Реквизиты поставщика питания
			this.validationOptions.rules.T00FoodPayInn = {
				required: {
					depends: function () {
						return $('[name="T00FoodPayKpp"]').val();
					}
				},
				digits: true,
				permissibleLength: [10, 12]
			};

			this.validationOptions.rules.T00FoodPayKpp = {
				digits: true,
				required: false,
				dependsLength: {
					dependsField: {
						fieldName: language.Generic.SchoolInfo.kINN,
						element: $('[name="T00FoodPayInn"]')
					},
					lengths: {
						10: 9,
						12: 0
					}
				}
			};

			this.validationOptions.rules.T00FoodPayBankScore = {
				digits: true,
				permissibleLength: [20]
			};

			this.validationOptions.rules.T00FoodPayBankCorrScore = {
				digits: true,
				permissibleLength: [20]
			};

			this.validationOptions.rules.T00FoodPayBankBik = {
				digits: true,
				permissibleLength: [9]
			};

			this.validationOptions.rules.T00FoodPayBankKpp = {
				digits: true,
				permissibleLength: [9]
			};
			//---

			this.validationOptions.rules.T00maxOccupancy = {
				digits: true
			};

			this.validationOptions.rules.T00maxOccupancyOnShift = {
				digits: true
			};
		}

		this.validationOptions.rules.T00phones = {
			pattern: /^\s*\d{10}\s*(,\s*\d{10}\s*)*$/,
		}

		this.validationOptions.rules.T00email = {
			pattern: (function(_this) {
				return _this.emailValidator.getPattern();
			})(this)
		};

		this.validationOptions.rules.T00web = {
			pattern: /^(http|https):\/\//,
			url: true
		};

		this.validationOptions.messages = {
				T00inn: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '10 или 12')
				},
				T00ogrn: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '13 или 15')
				},
				T00kpp: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '9')
				},
				T00okpo: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '8 или 10')
				},
				T00okato: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '8 или 11')
				},
				T00okogu: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '7')
				},
				T00okopf: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '5')
				},
				T00bankScore: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '20')
				},
				T00corrScore: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '20')
				},
				T00bik: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '9')
			},
			T00FoodPayInn: {
				permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '10 или 12')
			},
			T00FoodPayKpp: {
				permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '9')
			},
			T00FoodPayBankScore: {
                permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '20')
            },
            T00FoodPayBankCorrScore: {
                permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '20')
            },
            T00FoodPayBankBik: {
                permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '9')
			},
			T00FoodPayBankKpp: {
				permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '9')
			},
				T00email: {
					pattern: language.Generic.SchoolInfo.kEnterCorrectEmail
				},
				T00web: {
					pattern: language.Generic.SchoolInfo.kEnterProtocol
				},
				T00bankKpp: {
					permissibleLength: language.Generic.SetupSchoolUI.kFieldLengthMustBe.replace('{0}', '9')
				},
				T00phones: {
					pattern: language.Generic.SchoolInfo.kPhoneNoValidMessage
				},
			T00internetSpeedUnderContract: {
				pattern: "Пожалуйста, введите целое или дробное число."
			},
			T00internetSpeedInFact: {
				pattern: "Пожалуйста, введите целое или дробное число."
			}
		}
	};

	//Виды деятельности по ОКВЭД
	constructor.prototype.setOkvedValue = function () {
		var $T00okved = $('[name="T00okved"]');
		var self = this;



		var data = _.chain(self.okvedValue)
			.difference(_.pluck(okvedValues, "id"))
			.map(function (o) { return { id: o, text: '' } })
			.value();

		for (var i = 0; i < data.length; i++) {
			okvedValues.push(data[i]);
		}

		// Todo. Добавить проверку формата пользовательского кода ОКВЭД
		$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
			var cutomMatcher = function (value) {
				var regex = /^(\d{2})(\.\d{2})?(\.\d{1,2})?$/;
				return regex.test(value);
			}

			var okvedInput = $T00okved.select2({
				language: 'ru',
				data: okvedValues,
				templateResult: function (state) {
					if (!state.id) {
						return state.text;
					}
					if (state.text === state.id) {
						if (cutomMatcher(state.text)) {
							return $('<span style="display: inline-block; width: 70px;">' + state.id + '</span><span></span>');
						} else {
							return $('<span style="display: inline-block; width: 70px;">' + state.id + '</span><span>Недопустимый формат. Можно вводить только цифры, разделённые точками.</span>');
						}
					} else {
						return $('<span style="display: inline-block; width: 70px;">' + state.id + '</span><span>' + state.text + '</span>');
					}
				},
				matcher: oldMatcher(function (search, text, option) {
					if (!search) {
						return;
					}
					//добавляем к тексту(названию вида деятельности) идентификатор
					text = option.id + ' ' + option.text;

					return text.toUpperCase().indexOf(search.toUpperCase()) > -1;
				}),
				templateSelection: function (data) {
					return data.id;
				},
				multiple: true,
				tags: function (term) {
					if (!cutomMatcher(term)) {
						return;
					}
					return { id: term, value: term };
				}

			});

			okvedInput.val(self.okvedValue).trigger("change");
			// todo: костыль, так как за сохранение значений элемента отвечает плагин,
			// а тут установка происходит отдельно
				okvedInput.data("select2StoredState", self.okvedValue);
		});
	};

	//Технология доступа в сеть Интернет
	constructor.prototype.setInternetAccessTechnology = function () {

		var $T00internetAccessTech = $('[name="T00internetAccessTechnology"]');
		var self = this;

		var data = _.chain(self.internetAccessTechnology)
			.difference(_.pluck(internetAccessTechnologyValues, "id"))
			.map(function (o) { return { id: o, text: '' } })
			.value();

		for (var i = 0; i < data.length; i++) {
			internetAccessTechnologyValues.push(data[i]);
		}

		$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
			var internetAccessTechnologyInput = $T00internetAccessTech.select2({
				language: 'ru',
				data: internetAccessTechnologyValues,
				multiple: true,
			});

			internetAccessTechnologyInput.val(self.internetAccessTechnology).trigger("change");
			// todo: костыль, так как за сохранение значений элемента отвечает плагин,
			// а тут установка происходит отдельно
				internetAccessTechnologyInput.data("select2StoredState", self.internetAccessTechnology);
		});
	};


	//формы собственности
	constructor.prototype.setTypeOfOwnershipValue = function () {
		var $T00okfs = $('[name="T00okfs"]');
		var self = this;

		var data = _.chain(self.typeOfOwnership)
			.difference(_.pluck(typeOfOwnerships, "id"))
			.map(function (o) { return { id: o, text: '' } })
			.value();

		typeOfOwnerships = typeOfOwnerships
			.map(function(o) { 
				o.text = o.id + '. ' + o.text;
				return o;
			})
			.sort(function(a, b){
				return a.id - b.id;
			});			
			
		for (var i = 0; i < data.length; i++) {
			typeOfOwnerships.push(data[i]);
		}

		// Todo. Добавить проверку формата пользовательского кода ОКВЭД
		$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {

			var typeOfOwnershipInput = $T00okfs.select2({
				language: 'ru',
				data: typeOfOwnerships,
				multiple: false,
					placeholder: "",
					allowClear: true
			});

			typeOfOwnershipInput.val(self.typeOfOwnership).trigger("change");
			// todo: костыль, так как за сохранение значений элемента отвечает плагин,
			// а тут установка происходит отдельно
				typeOfOwnershipInput.data("select2StoredState", self.typeOfOwnership);
		});
	};


	constructor.prototype.setCollegiateOrgan = function () {
		let $T00CollegiateManagement = $('[name="T00CollegiateManagement"]');
		let self = this;

		let data = _.chain(self.collegialOrgan)
			.difference(_.pluck(collegialOrgans, "id"))
			.map(function (o) { return { id: o, text: '' } })
			.value();

		// collegialOrgans=collegialOrgans.map(function(o){
		//     o.text = o.id+''
		// })

		$.fn.select2.amd.require(['select2/compat/matcher'],
			function (oldMatcher) {

				var collegialOrganInput = $T00CollegiateManagement.select2({
					language: 'ru',
					data: collegialOrgans,
					multiple: true,
				});

				collegialOrganInput.val(self.collegialOrgan).trigger("change");
				// todo: костыль, так как за сохранение значений элемента отвечает плагин,
				// а тут установка происходит отдельно
				collegialOrganInput.data("select2StoredState", self.collegialOrgan);
			});
	}


    constructor.prototype.setProjectTypeForSchool = function () {
        var $T00ProjectTypeForSchool = $('[name="T00ProjectTypeForSchool"]');
        var self = this;

        var projectTypesForSchool;
        jsSubmit({ action: "/webapi/reference/ProjectTypeForSchool", method: "GET" })
            .then(function (referenceResponse) {
               projectTypesForSchool = referenceResponse.data.map(function (data) {
                    return {
                        id: data.id.toString(),
                        text: data.name
                    };
                });
            })
            .then(function () {
                var data = _.chain(self.projectTypeForSchool)
                    .difference(_.pluck(projectTypesForSchool, "id"))
                    .map(function (o) { return { id: o, text: '' } })
                    .value();

                for (var i = 0; i < data.length; i++) {
                    projectTypesForSchool.push(data[i]);
                }
            })
            .then(function () {
                $.fn.select2.amd.require(['select2/compat/matcher'],
                    function (oldMatcher) {

                        var projectTypeForSchoolInput = $T00ProjectTypeForSchool.select2({
                            language: 'ru',
                            data: projectTypesForSchool,
                            multiple: true,
                            allowClear: true
                        });

                        projectTypeForSchoolInput.val(self.projectTypeForSchool).trigger("change");
                        // todo: костыль, так как за сохранение значений элемента отвечает плагин,
                        // а тут установка происходит отдельно
                        projectTypeForSchoolInput.data("select2StoredState", self.projectTypeForSchool);
                    });
            });
    }

    constructor.prototype.prepareSavingData = function () {
		var form = global.document.SchoolEdit;

		if (this.canEditExtraSchoolInfo) {
			var bSelected = false;

			if (form.EOFORMID.value) {
				bSelected = true;
			}

			for (var i = 0; i < form.EOFORMID.length; i++) {
				if (form.EOFORMID[i].checked) {
					bSelected = true;
					break;
				}
			}

			if (!bSelected) {
				alert(language.Generic.ServAdmin.kErrEOFormMustBeSelected);
				return null;
			}
		}

		if (!$(form).valid()) {
			this.validator.focusInvalid();
			return null;
		}

		var data = {};
        if (this.canEditExtraSchoolInfo) {
			// #30659 Все поля ниже не редактируются в режиме canEditExtraSchoolInfo, поэтому их не надо передавать для сохранения.
			// Более универсальное решение - для каждого поля отдельно смотреть значение атрибута disabled, если оно выставлено, то
			// не передавать это поле, тогда можно и не смотреть флаг canEditExtraSchoolInfo.
			return data;
		}

		var okvedValue = $('[name="T00okved"]', global.document.SchoolEdit).serialize();
		var internetAccessTechnology = $('[name="T00internetAccessTechnology"]', global.document.SchoolEdit).serialize();
		var typeOfOwnership = $('[name="T00okfs"]', global.document.SchoolEdit).serialize();
		var collegialOrgan = $('[name="T00CollegiateManagement"]', global.document.SchoolEdit).serialize();
		var projectTypeForSchool = $('[name="T00ProjectTypeForSchool"]', global.document.SchoolEdit).serialize();

		if (!collegialOrgan) {
			data.collegialOrgan = { name: "T00CollegiateManagement", value: [] } // Заглушка для отправки коллегиального органа, даже если он пуст
		}

		if (!okvedValue) {
			data.okved = { name: "T00okved", value: [] }; // Заглушка для отправки ОКВЭД даже если он пуст
		}

		if (!internetAccessTechnology) { // Заглушка для отправки технологии доступа в интернет даже если он пуст
			data.internetAccessTechnology = { name: "T00internetAccessTechnology", value: [] };
		}

		if (!typeOfOwnership) { // Заглушка для отправки форм собственности даже если он пуст
			data.typeOfOwnership = { name: "T00okfs", value: [] };
		}

        if (!projectTypeForSchool) { // Заглушка для отправки 'является участником проекта' даже если он пуст
            data.projectTypeForSchool = { name: "T00ProjectTypeForSchool", value: [] };
        }

		return data;
	}

	//сохранение данных
	constructor.prototype.saveSchoolInfo = function () {

		var self = this;

		var saveData = this.prepareSavingData();
		if (!saveData) {
			return;
		}

		

		//если установлена опция "Требовать указания основания для внесения изменений в карточку ОО" в Администраторе сервера
		if (self.reasonForChangeSchoolCard && !self.isEMForSchool) {

			this.setBasisForChange()
				.then(function (reasonDocId) {
					saveData.reason = myScope.reasonForChangeText;
					saveData.reasonDocId = reasonDocId;
                }, function (err) {
						alert(err);
					})
				.then(function () {
					global.jsSaveForm(global.document.SchoolEdit, saveData);
                })
				.then(function() {
					self.fixRememberState();
				});
		} else { //иначе если не установлена опция...
            global.jsSaveForm(global.document.SchoolEdit, saveData)
				.then(function() {
					self.fixRememberState();
				});
		}
	};

	constructor.prototype.fixRememberState = function() {
		var $T00okved = $('[name="T00okved"]');
		var $T00internetAccessTechnology = $('[name="T00internetAccessTechnology"]');
		var $T00okfs = $('[name="T00okfs"]');
		var $T00CollegiateManagement = $('[name="T00CollegiateManagement"]');
        var $T00ProjectTypeForSchool = $('[name="T00ProjectTypeForSchool"]');

		$T00okved.data("storedState", null);
		$T00internetAccessTechnology.data("storedState", null);
		$T00okfs.data("storedState", null);
		$T00CollegiateManagement.data("storedState", null);
        $T00ProjectTypeForSchool.data("storedState", null);

		$T00okved.data("select2StoredState", $T00okved.val());
		$T00internetAccessTechnology.data("select2StoredState", $T00internetAccessTechnology.val());
		$T00okfs.data("select2StoredState", $T00okfs.val());
		$T00CollegiateManagement.data("select2StoredState", $T00CollegiateManagement.val());
        $T00ProjectTypeForSchool.data("select2StoredState", $T00ProjectTypeForSchool.val());
	};

	//основание для изменения в карточке ОО
	constructor.prototype.setBasisForChange = function () {

		var sself = {};

		sself.openFileDialogAppendContent = '<div class="form-group"> <label class="control-label">Основание</label> <div><input type="text" class="form-control" name="reasonText" size="4" maxlength="200" value=""  required></div> </div><label class="control-label">Документ</label>';

		function preSubmit() {
			myScope.reasonForChangeText = $("input[name=reasonText]").val();
		}

		function checkReasonFilled() {
			var reasonText = $("input[name=reasonText]").val();
			if (!reasonText) {
				alert("Пожалуйста, заполните основание");
				return false;
			}
			return true;
		}

		return $.show.fileDialog({
			title: "Основания для внесения изменений",
			formAppendContent: sself.openFileDialogAppendContent,
			isAjax: true,
			url: "/webapi/attachments",
			customCheck: checkReasonFilled,
			preSubmit: preSubmit,
			applyBtnText: language.Generic.Buttons.kSave,
			maxFileSize: 20480
		});
	}







	return constructor;
})(window);