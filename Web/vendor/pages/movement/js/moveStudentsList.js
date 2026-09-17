var moveStudentsListCtrl;

moveStudentsListCtrl = (function () {
	var moveStudentsListTmpl = '';
	var titlesTmpl = "";
	var selectedUsersTmpl = "";
	var pfdoEnrollSettingsTmpl = "";

	var loadTemplate = function (url, setFunc) {
		url = url + "?ver=" + appContext.version;
		return $.ajax({
			url: url,
			cache: true,
			success: function (data) {
				var html;
				html = data.replace(/(?:\r\n|\r|\n)/g, '');
				return setFunc(html);
			}
		});
	};

	var paymentTypesRef = [
		{ id: 1, key: "PayService", name: "Платно" },
		{ id: 2, key: "Budget", name: "Бюджет" },
		{ id: 3, key: "Certificate", name: "По сертификату" }];

	function moveStudentsListCtrl(container, filterPanel, sourceId, moveDocData, moveDirection, backPage, options) {
		this.container = container;
		this.filterPanel = filterPanel;
		this.sourceId = sourceId;
		this.moveDocData = moveDocData;
		this.moveDirection = moveDirection;
		this.backPage = backPage;

		this.currentUser = options.userFio;
		this.currentSchool = options.schoolId;
		this.productName = options.productName;
		this.queueImportMode = options.queueImportMode;
		this.similarsCtrl = options.similarsCtrl;
		this.pfdoIntegrationType = options.pfdoIntegrationType;

		this.currentPage = 0;
		this.checkedMovements = [];
		this.studentsInfo = [];
		this.selectUsers();
		this.clearSelectionFlag = true;

		var queries = [
			loadTemplate('/vendor/pages/movement/templates/movementUsersListTemplate.html', function (html) {
				return moveStudentsListTmpl = html;
			}), loadTemplate('/vendor/pages/movement/templates/movementUsersListCommonTemplate.html', function (html) {
				return titlesTmpl = html;
			}), loadTemplate('/vendor/pages/movement/templates/SelectedUsersTemplate.html', function (html) {
				return selectedUsersTmpl = html;
			}), loadTemplate('/vendor/pages/movement/templates/PfdoEnrollSettings.html', function (html) {
				return pfdoEnrollSettingsTmpl = html;
			})
		];

		Handlebars.registerHelper('ifEqual', function (nParam1, nParam2, opts) {
			if (nParam1 === nParam2) {
				return opts.fn(this);
			} else {
				return opts.inverse(this);
			}
		});

		Handlebars.registerHelper('ifNotEqual', function (nParam1, nParam2, opts) {
			if (nParam1 !== nParam2) {
				return opts.fn(this);
			} else {
				return opts.inverse(this);
			}
		});

		Handlebars.registerHelper('Inc', function (nParam, pageNum, pageSize) {
			return nParam + 1 + pageNum * pageSize;
		});

		Handlebars.registerHelper('FIO', function (objParam) {
			var lastName = objParam.lastName ? objParam.lastName : "";
			var firstName = objParam.firstName ? objParam.firstName : "";
			var middleName = objParam.middleName ? objParam.middleName : "";
			return (lastName + " " + firstName + " " + middleName).trim();
		});

		Handlebars.registerHelper('DateOnly2str', function (dateParam) {
			var dt;
			if (dateParam !== null) {
				dt = new Date(dateParam);
				return dateUtils.date2str(dt);
			}
		});

		Handlebars.registerHelper('GetDisabled', function (objPossibility) {
			if ((objPossibility != null ? objPossibility.status : void 0) === "Impossible") {
				return "disabled";
			} else {
				return "";
			}
		});

		Handlebars.registerHelper('GetTitle', function (objPossibility) {
			var ref;
			return (ref = objPossibility != null ? objPossibility.statusComment : void 0) != null ? ref : "";
		});

		Handlebars.registerHelper('setChecked', function (bSelected) {
			if (bSelected) {
				return "checked";
			} else {
				return "";
			}
		});

		this.delQuots = function (strValue) {
			return strValue.replace('"', '');
		};

		this.date2StrN = function (date) {
			var dd, mm, yyyy;
			yyyy = date.getFullYear().toString();
			mm = (date.getMonth() + 1).toString();
			dd = date.getDate().toString();
			if (mm.length === 1) {
				mm = '0' + mm;
			}
			if (dd.length === 1) {
				dd = '0' + dd;
			}
			return yyyy + '-' + mm + '-' + dd;
		};

		this.popupMoveStudentsList = function () {
			return this.container.printUtils().toPrint().then(function (window) {
				var popup;
				return popup = window;
			});
		};

		this.loadingDone = function (docId, outerMessage) {
			if (docId > 0) {
				return postTo(this.backPage, {
					DocId: docId,
					OUTERMESSAGE: outerMessage
				});
			}
		};

		this.loadingFail = function (exceptionInfo) {
			var errMessage, response;

			response = $.parseJSON(exceptionInfo.responseText || exceptionInfo);
			errMessage = response["message"];

			if (response["details"]) {
				errMessage += " (" + response["details"] + ")";

				if (response["details"] === "noDoc" || response["details"] === "noDocQueue") {
					postTo("/asp/SetupSchool/Movement/MoveBook.asp", {
						OUTERMESSAGE: response["details"] === "noDocQueue" ? response["message"] : ""
					});
					return;
				}
				else {
					$.show.error(errMessage);
				}
			}
			else {
				$.show.error(errMessage);
			}
		};

		this.showSelectedUsersAmount = function () {
			return $(".checked-students-btn").text(language.Movement.kSelectedStudents + " (" + this.checkedMovements.length + ")");
		};

		this.showButtonsAfterEmptyChoiceIfSelected = (function (_this) {
			return function () {
				if (_this.checkedMovements.length) {
					return $("#buttonPanel").show();
				}
			};
		})(this);

		this.filterPanel.handlers_emptyChoice.push(this.showButtonsAfterEmptyChoiceIfSelected);
		this.browseMoveStudentsListDetails = function (clearChoiceFlag) {
			var pagination, self;
			self = this;
			this.studentsInfo = [];
			if (clearChoiceFlag) {
				this.checkedMovements = [];
			}
			pagination = new Pagination({
				url: "/webapi/movement/sources/" + self.sourceId + "/getList",
				container: $('.moveStudentsListCtrl'),
				preloadPage: function () {
					return self.selectUsers();
				},
				render: function (moveStudentsList) {
					var commonTitlesRowspan, commonTitlesTmpl, getHeight, getTitles, getWidth, html, i, item, j, len, len1, maxLevel, model, ref, ref1, template, titleModel, titleTemplate, titlesList, titlesTmplInfo, user;
					if (!moveStudentsList.commonData.length) {
						self.showMsgInContainerHtml(language.Generic.Movement.kMsgNoStudentsForFilters);
						return;
					}
					model = {
						moveStudentsList: moveStudentsList
					};
					_.each(model.moveStudentsList.commonData, function (movedata) {
						var ref;
						return movedata.possible = ((ref = movedata.movementPossibility) != null ? ref.status : void 0) !== "Impossible";
					});
					titleTemplate = Handlebars.compile(titlesTmpl);
					if (model.moveStudentsList.additionalData) {
						model.moveStudentsList.additionalData.infoData.sort(function (a, b) {
							return a.order - b.order;
						});
						titlesList = [];
						maxLevel = 0;
						getTitles = function (infoData, level) {
							var existsItem, existsParent, newItem;
							if (infoData.parent) {
								infoData.parent.order = infoData.parent.order ? infoData.parent.order : infoData.order;
								maxLevel = maxLevel < level + 1 ? level + 1 : maxLevel;
								getTitles(infoData.parent, level + 1);
							}
							existsItem = _.find(titlesList, function (item) {
								return item.id === infoData.id;
							});
							if (!existsItem) {
								existsParent = infoData.parent ? _.find(titlesList, function (item) {
									return item.id === infoData.parent.id;
								}) : void 0;
								newItem = {
									title: infoData.title,
									order: infoData.order,
									id: infoData.id,
									parent: existsParent,
									childs: [],
									width: getWidth,
									level: level,
									height: getHeight
								};
								titlesList.push(newItem);
								if (existsParent) {
									existsParent.childs.push(newItem);
									if (level >= existsParent.level) {
										existsParent.level = level + 1;
									}
								}
							} else {
								if (existsItem.parent) {
									if (existsItem.level >= existsItem.parent.level) {
										existsItem.parent.level = existsItem.level + 1;
									}
								}
							}
						};
						getWidth = function () {
							var colWidth;
							if (this.childs && _.size(this.childs) !== 0) {
								colWidth = 0;
								_.each(this.childs, function (item) {
									return colWidth = colWidth + item.width();
								});
								return colWidth;
							} else {
								return 1;
							}
						};
						getHeight = function (maxLvl) {
							if (this.parent) {
								return this.parent.level - this.level;
							} else {
								return maxLvl - this.level + 1;
							}
						};
						_.each(model.moveStudentsList.additionalData.infoData, function (infoData) {
							return getTitles(infoData, 0);
						});
						titlesList = _.map(titlesList, function (item) {
							var ref, ref1, ref2;
							return {
								title: item.title,
								order: item.order,
								id: item.id,
								width: item.width(),
								level: ((ref = item.parent) != null ? ref.level : void 0) && item.level !== (((ref1 = item.parent) != null ? ref1.level : void 0) - 1) ? ((ref2 = item.parent) != null ? ref2.level : void 0) - 1 : (item.parent ? item.level : maxLevel),
								height: item.height(maxLevel)
							};
						});
						commonTitlesRowspan = maxLevel > 0 ? 'rowspan=' + (maxLevel + 1) + '' : ' ';
						titleModel = {
							language: language,
							commonTitlesRowspan: commonTitlesRowspan
						};
						commonTitlesTmpl = titleTemplate(titleModel);
						titlesTmplInfo = _.chain(titlesList).groupBy(function (item) {
							return item.level;
						}).sortBy(function (item) {
							return -item[0].level;
						}).map(function (item) {
							return '<tr>' + (item[0].level === maxLevel ? commonTitlesTmpl : " ") + _.toArray(_.map(_.sortBy(item, function (item2) {
								return item2.order;
							}), function (item1) {
								return '<th ' + (item1.width > 1 ? ' colspan="' + item1.width + '"' : "") + (item1.height > 1 ? ' rowspan="' + item1.height + '"' : "") + '>' + item1.title + '</th>';
							})).join("") + '</tr>';
						}).value().join("");
					} else {
						titleModel = {
							language: language,
							commonTitlesRowspan: ""
						};
						titlesTmplInfo = titleTemplate(titleModel);
					}
					model.moveStudentsList.titles = titlesTmplInfo;
					ref = self.checkedMovements;
					for (i = 0, len = ref.length; i < len; i++) {
						user = ref[i];
						ref1 = model.moveStudentsList.commonData;
						for (j = 0, len1 = ref1.length; j < len1; j++) {
							item = ref1[j];
							if (item.id === user.movementId) {
								item.selected = true;
							}
						}
					}
					self.studentsInfo = _.toArray(_.map(model.moveStudentsList.commonData, (function (_this) {
						return function (studentInfo) {
							var lastName = studentInfo.studentData.person.lastName ? studentInfo.studentData.person.lastName : "";
							var firstName = studentInfo.studentData.person.firstName ? studentInfo.studentData.person.firstName : "";
							var middleName = studentInfo.studentData.person.middleName ? studentInfo.studentData.person.middleName : "";

							return {
								movementId: studentInfo.id,
								lastName: lastName,
								firstName: firstName,
								middleName: middleName,
								birthDate: studentInfo.studentData.birthDate
							};
						};
					})(this)));
					if (model.moveStudentsList.additionalData && _.some(model.moveStudentsList.additionalData.infoData, function (info) { return info.id === "PaymentType"; })) {
						var paymentTypes = _.map(model.moveStudentsList.additionalData.movementsAdditionalData,
							function(mad) {
								return {
									movementId: mad.movementId,
									paymentType: _.find(mad.data, function(dt) { return dt.itemId === "PaymentType"; })
								};
							});
						_.each(self.studentsInfo, function (studentInfo) {
							var paymentTypeInfo = _.find(paymentTypes, function (pt) {return pt.movementId === studentInfo.movementId; });
							if (paymentTypeInfo) {
								studentInfo.paymentTypeInformation = paymentTypeInfo.paymentType.value;
							}
						});
						_.each(model.moveStudentsList.additionalData.movementsAdditionalData,
							function(info) {
								_.each(_.filter(info.data, function(idata) { return idata.itemId === "PaymentType"; }),
									function(item) {
										item.value = (_.find(paymentTypesRef, function(pt) { return pt.key === item.value; }) || { name: "" }).name;
									});
							}); 
					}
					
					template = Handlebars.compile(moveStudentsListTmpl);
					html = template(model);
					$("#actionPanel").show();
					return html;
				},
				postRender: function () {
					$('[data-original-title]').popover({
						placement: 'bottom',
						html: 'true',
						trigger: "hover"
					});
					$('input[name="Students"][type="checkbox"]').on('click', function () {
						self.selectUsers();
						return self.showSelectedUsersAmount();
					});
					self.showSelectedUsersAmount();
					window.floatingScroll.scanTables();
				},
				context: {
					filterContextData: {
						selectedData: this.filterPanel.getCtxValues()
					},
					moveDoc: this.moveDocData,
					direction: this.moveDirection
				},
				requestFieldName: 'pagedData',
				responseFieldName: 'pageResponseData'
			});
			pagination.setRecordsOnPage(this.filterPanel.getValues().PageRowsFilter);
			$('select[name="PageRowsFilter"]').on('change', function () {
				return pagination.setRecordsOnPage(this.value);
			});
			return pagination.init();
		};

		this.checkSimilars = function (checkedMovements, AddStudentsDTO, callbackFunc) {
			var i, len, checkedMovement;
			for (i = 0, len = checkedMovements.length; i < len; i++) {
				checkedMovement = checkedMovements[i];
				if (checkedMovement.internalId !== "") {
					return callbackFunc(AddStudentsDTO, new $.Deferred());
				}
			}

			return this.similarsCtrl.checkSimilars(AddStudentsDTO, callbackFunc);
		}

		this.extraAction = function (AddStudentsDTO, defObj, callbackFunc) {
			if (this.pfdoIntegrationType != "IRTechEes" || appContext.funcType != 3) {
				defObj.locked = false;
				callbackFunc();
				return;
			}

			if(this.moveDocData.docType != 2 && this.moveDocData.docType != 4 && this.moveDocData.docType != 3 && this.moveDocData.docType != 5){
				defObj.locked = false;
				callbackFunc();
				return;
			}

			var pfdoEnrollSettingsTemplate = Handlebars.compile(pfdoEnrollSettingsTmpl);
			var buttonOk = {
				label: language.Generic.Common.kOk,
				action: function (dialog) {
					defObj.locked = false;
					//todo. получить из таблицы выбранный спсоб оплаты для каждого ученика
					var paymentTypes = $('select[name|="payment"]').toArray().map(function (item) {
						return { movementId: item.name.slice(8), paymentType: +$(item).find("option:selected").val() };
					});
					var reasons = $('input[name|="reason"]').toArray().map(function (item) {
						return { movementId: item.name.slice(7), reason: $(item).val() };
					});
					_.each(paymentTypes, function(item) {
						var reasonInfo = _.find(reasons, function(rs) { return rs.movementId == item.movementId; });
						item.reason = reasonInfo ? reasonInfo.reason : null;
					});
					AddStudentsDTO.extraData = {
						paymentTypes: paymentTypes
					};
					callbackFunc();
				}
			};
			var buttonCancel = {
				label: "Отмена",
				action: function (dialog) {
					defObj.locked = false;
					return dialog.close();
				}
			};
			//todo. справочник взять из api
			var html = pfdoEnrollSettingsTemplate({
				movements: this.checkedMovements,
				language: language,
				paymentTypes: paymentTypesRef
			});
			this.paymentDialog = $.show.dialog({
				modal: true,
				title: 'Укажите способ оплаты',
				size: BootstrapDialog.SIZE_WIDE,
				message: html,
				buttons: [buttonOk, buttonCancel],
				onhidden: function () {
					defObj.locked = false;
				}
			});
		};
	}

	moveStudentsListCtrl.prototype.browseMoveStudentsList = function () {
		var buttonNo, buttonYes, buttonYesDefault, buttons, selfBrowseStudentsList, studentsAmountText;
		selfBrowseStudentsList = this;
		this.selectUsers();
		this.showSelectedUsersAmount();
		if (this.checkedMovements.length > 0) {
			if (this.clearSelectionFlag) {
				buttonYes = {
					label: language.Generic.Common.kYes,
					action: function (dialog) {
						selfBrowseStudentsList.browseMoveStudentsListDetails(false);
						return dialog.close();
					}
				};
				buttonYesDefault = {
					label: language.Generic.Common.kYes + ", " + language.Generic.Common.kNoAsk,
					action: function (dialog) {
						selfBrowseStudentsList.browseMoveStudentsListDetails(false);
						selfBrowseStudentsList.clearSelectionFlag = false;
						return dialog.close();
					}
				};
				buttonNo = {
					label: language.Generic.Common.kNo,
					action: function (dialog) {
						selfBrowseStudentsList.browseMoveStudentsListDetails(true);
						return dialog.close();
					}
				};
				buttons = [];
				buttons.push(buttonYesDefault);
				buttons.push(buttonYes);
				buttons.push(buttonNo);
				studentsAmountText = this.checkedMovements.length % 10 === 1 && this.checkedMovements.length !== 11 ? " " + this.checkedMovements.length + " " + language.Movement.kStudent : "о " + this.checkedMovements.length + " " + language.Movement.kStudents_genitive;
				return $.show.dialog({
					modal: true,
					title: 'Применение фильтров',
					size: BootstrapDialog.SIZE_NORMAL,
					withoutCancelButton: true,
					message: "Внимание! Выбран" + studentsAmountText + " из списка. Вы желаете запомнить текущий выбор?",
					buttons: buttons
				});
			} else {
				return this.browseMoveStudentsListDetails(false);
			}
		} else {
			return this.browseMoveStudentsListDetails(true);
		}
	};

	moveStudentsListCtrl.prototype.browseCheckedStudents = function () {
		var buttonClose, buttonRemove, buttons, selectedUsersModel, selectedUsersTemplate, selfCheckedStudents;
		if (!this.checkedMovements.length) {
			alert(language.Movement.kNoSelectedStudents);
			return;
		}
		selectedUsersTemplate = Handlebars.compile(selectedUsersTmpl);
		selfCheckedStudents = this;
		buttonClose = {
			label: language.Generic.Buttons.kClose,
			action: function (dialog) {
				$('input[name="Students"][type="checkbox"]:checked').each(function (indx, element) {
					var selectedStudentIndex;
					selectedStudentIndex = _.findIndex(selfCheckedStudents.checkedMovements, (function (_this) {
						return function (item) {
							return item.movementId === $(element).val();
						};
					})(this));
					if (selectedStudentIndex < 0) {
						return $(element).prop('checked', false);
					}
				});
				selfCheckedStudents.showSelectedUsersAmount();
				return dialog.close();
			}
		};
		buttonRemove = {
			label: language.Generic.Common.kRemove,
			action: function (dialog) {
				if ($('input[name="SelStudents"][type="checkbox"]:checked').length === 0) {
					alert(language.Movement.kNoSelectedStudents);
					return;
				}
				return $.show.confirmation(language.Movement.kRemoveSelectedStudents).then(function () {
					$('input[name="SelStudents"][type="checkbox"]:checked').each(function (indx, element) {
						var selectedStudentIndex;
						selectedStudentIndex = _.findIndex(selfCheckedStudents.checkedMovements, (function (_this) {
							return function (item) {
								return item.movementId === $(element).val();
							};
						})(this));
						return selfCheckedStudents.checkedMovements.splice(selectedStudentIndex, 1);
					});
					if (selfCheckedStudents.checkedMovements.length === 0) {
						$('input[name="Students"][type="checkbox"]:checked').prop('checked', false);
						selfCheckedStudents.showSelectedUsersAmount();
						return dialog.close();
					} else {
						return dialog.setMessage(selectedUsersTemplate(selectedUsersModel));
					}
				});
			}
		};
		buttons = [];
		buttons.push(buttonRemove);
		buttons.push(buttonClose);
		selectedUsersModel = {
			checkedMovements: this.checkedMovements,
			language: language
		};
		return $.show.dialog({
			modal: true,
			title: language.Movement.kSelectedStudents,
			size: BootstrapDialog.SIZE_WIDE,
			message: selectedUsersTemplate(selectedUsersModel),
			buttons: buttons,
			closeByKeyboard: false,
			closeByBackdrop: false
		});
	};

	moveStudentsListCtrl.prototype.selectAllUsers = function (currVal) {
		$('input[name="Students"][type="checkbox"]:not(:disabled)').each((function (_this) {
			return function (indx, element) {
				return $(element).prop("checked", currVal);
			};
		})(this));
		this.selectUsers();
		return this.showSelectedUsersAmount();
	};

	moveStudentsListCtrl.prototype.selectAllSelectedUsers = function (currVal) {
		return $('input[name="SelStudents"][type="checkbox"]:not(:disabled)').each((function (_this) {
			return function (indx, element) {
				return $(element).prop("checked", currVal);
			};
		})(this));
	};

	moveStudentsListCtrl.prototype.selectUsers = function () {
		$('input[name="Students"][type="checkbox"]:not(:checked)').each((function (_this) {
			return function (indx, element) {
				var indexUsers;
				indexUsers = _.findIndex(_this.checkedMovements, function (user) {
					return $(element).val() === user.movementId;
				});
				if (indexUsers >= 0) {
					return _this.checkedMovements.splice(indexUsers, 1);
				}
			};
		})(this));
		return $('input[name="Students"][type="checkbox"]:checked').each((function (_this) {
			return function (indx, element) {
				var indexUsers, newCheckedUserInfo;
				indexUsers = _.findIndex(_this.checkedMovements, function (user) {
					return $(element).val() === user.movementId;
				});
				if (indexUsers < 0) {
					newCheckedUserInfo = {
						movementId: $(element).val(),
						studentInfo: _.find(_this.studentsInfo, function (student) {
							return student.movementId === $(element).val();
						}),
						internalId: $(element).data("internalid")
					};
					return _this.checkedMovements.push(newCheckedUserInfo);
				}
			};
		})(this));
	};

	moveStudentsListCtrl.prototype.showMsgInContainerHtml = function (message) {
		return this.container.html('<div class="col-md-12 alert alert-info" role="alert">' + message + '</div>');
	};

	moveStudentsListCtrl.prototype.showWarningMsgInContainerHtml = function (message) {
		return this.container.html('<div class="col-md-12 alert alert-danger" role="alert">' + message + '</div>');
	};

	moveStudentsListCtrl.prototype.ExistsCheckedUsers = function () {
		return this.checkedMovements.length;
	};

	moveStudentsListCtrl.prototype.AddUsers = function () {
		var AddStudentsDTO, checkedMovement, docId, i, len, ref, requestSettings, save, selfAddUsers, similarsFlag, similarsManager, url;
		selfAddUsers = this;
		this.selectUsers();
		if (!this.checkedMovements.length) {
			alert(language.Movement.kSelectStudentsForDoc);
			return;
		}
		url = "/webapi/movement/documents/" + this.moveDocData.id + "/students";
		similarsFlag = true;
		ref = this.checkedMovements;
		for (i = 0, len = ref.length; i < len; i++) {
			checkedMovement = ref[i];
			if (checkedMovement.internalId !== "") {
				similarsFlag = false;
				break;
			}
		}
		AddStudentsDTO = {
			sourceId: this.sourceId,
			identifiers: _.toArray(_.pluck(this.checkedMovements, 'movementId')),
			moveDoc: this.moveDocData,
			moveDirection: this.moveDirection
		};
		requestSettings = {
			action: "/webapi/movement/documents/" + this.moveDocData.id + "/students",
			dataType: "json",
			contentType: 'application/json',
			data: AddStudentsDTO,
			showProcessing: true,
			method: "POST",
			defaultErrorHandling: false
		};
		if (this.queueImportMode && this.sourceId === "import") {
			docId = 0;
			save = (function (_this) {
				return function (model) {
					var getTaskFunc;
					getTaskFunc = function () {
						var deferr;
						requestSettings.showProcessing = false;
						requestSettings.action = "/webapi/movement/documents/" + _this.moveDocData.id + "/students/queue";
						deferr = $.Deferred();
						jsSubmit(requestSettings).fail(function (response) {
							selfAddUsers.loadingFail(response);
							return deferr.reject();
						}).then(function (response) {
							docId = response.moveDocId;
							return deferr.resolve(response.taskId);
						});
						return deferr.promise();
					};

					var userErrorHandled = false;

					return taskQueue.execute({
						getTaskFunc: getTaskFunc,
						userCloseHandler: function () {
							return postTo("/asp/SetupSchool/Movement/MoveBook.asp");
						},
						userErrorHandler: function(errorInfo) {
							try {
								// внимание! костыли
								// сюда передается объект errorInfo в queue.coffee в onErrorUser
								if (errorInfo && errorInfo.Details) {
									var details = JSON.parse(errorInfo.Details);

									if (details.details && details.details === "noDocQueue") {
										userErrorHandled = true;
										$.show.error(details.message || language.Generic.Common.kUnexpErr);
									}
								}
							}
							catch (ex) {
								// если строка не валидна, ошибка поглощается
								return false;
							}
						},
						hint: "Данное информационное окно можно закрыть не дожидаясь выполнения процесса импорта. \n\n" + "По завершению данного процесса Вам будет отправлено сообщение о результатах его выполнения.\n" + "Сообщение можно просмотреть во внутренней почте системы: для этого необходимо нажать на значок почты в правой верхней части меню"
					})
					.fail(function (response) {
						if (response) {
							if (userErrorHandled) {
								return false;
							}

							return _this.loadingFail(response);
						}
					})
					.then(function (response) {
						return _this.loadingDone(docId, response);
					});
				};
			})(this);
		}
		else {
			save = (function (_this) {
				return function () {
					return jsSubmit(requestSettings).fail(function (response) {
						return _this.loadingFail(response);
					})
					.then(function (docId) {
						return _this.loadingDone(docId, "");
					});
				};
			})(this);
		}

		return this.checkSimilars(this.checkedMovements, AddStudentsDTO,
			function (AddStudentsDTO, defObj) {
				selfAddUsers.extraAction(AddStudentsDTO, defObj, function() { save(); });
			});
	};

	return moveStudentsListCtrl;

})();
