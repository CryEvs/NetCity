(function() {
	var mainFunc = {
		personsData: null,
		htmlNewPassportInfo: null,
		printNewPasswordsInfo: null
	};

	mainFunc.printNewPasswordsInfo = function (html) {
		if (!mainFunc.htmlNewPassportInfo)
			throw 'не опеределен html для вывода на печать';

		$(mainFunc.htmlNewPassportInfo).printUtils().toPrint();
	}

	function hasPaging() {
		var res = $('.pagination').length > 0;
		return res;
	}

	//переключатель для дом элементов которые отвечают за генерацию новых паролей (display=none/display=inline)
	var displaySwitcher = {
		isDisplay: false,
		hide: function () {
			$('.generateNewPassword').addClass('hide');
			this.isDisplay = false;
		},
		show: function () {
			$('.generateNewPassword').removeClass('hide');
			this.isDisplay = true;
		},
		action: function () {
			//если нет ни одной записи в таблице (не нажали кнопку применить)
			if (!$('#UserListTable > tbody > tr > td').length) {
				return;
			}

			if (this.isDisplay === false) {
				this.show();
			}
		},
	}

	//объект управляет переключением чекбоксов (выбрать всех, не выбрать всех)
	var checkboxSwitcher = {
		isCheckedAll: false,

		checkAll: function () {
			$('input:checkbox.generateNewPassword').prop("checked", true);
			this.isCheckedAll = true;
				
			//если есть несколько страниц
			if (hasPaging()) {
				alert(language.Generic.Common.kWarnSelectAllUsers);
			}
		},
		uncheckAll: function () {
			$('input:checkbox.generateNewPassword').prop("checked", false);
			this.isCheckedAll = false;
		},

		action: function () {
			if (this.isCheckedAll === false) {
				this.checkAll();
			} else {
				this.uncheckAll();
			}
		}
	}

	//объект отправлятель значений на сервер
	var ajaxSender = {
		send: function(url, personIds) {
			const deferr = $.Deferred();

			const tplReady = $.ajax({ //получить шаблон для модального окна
				url: '/vendor/pages/templates/User/passwordChangedTemplate.html',
				cache: true
			});

			jsSubmit({
				method: 'POST',
				contentType: "application/json",
				data: personIds,
				action: url,
				showProcessing: true
			}).then(function(response) {
				if (response.length === 0) {
					alert(language.Generic.Common.kPasswordsWereNotChanged);
					deferr.reject();
					return;
				}
				mainFunc.personsData = response;
				return tplReady;
			}).then(function(templModal) {
				//checkboxSwitcher.uncheckAll();
				//displaySwitcher.hide();

				var template = templModal.replace(/(?:\r\n|\r|\n)/g, '');

				//получаю данные для отображении в шаблоне handlebars
				var fullPersonsData = _.map(mainFunc.personsData,
					function(current) {
						var userWithdecodedPasswArr = _.filter(mainFunc.userPasswordArr,
							function(o) {
								return o.userId == current.userId;
							});

						var newPassw = "";
						if (userWithdecodedPasswArr.length > 0) {
							newPassw = userWithdecodedPasswArr[0].newPassword;
						}

						return {
							userId: current.userId,
							fullname: current.fullname,
							nickname: current.nickname,
							loginName: current.loginName,
							password: newPassw
						};
					});

				var context = {
					language: language,
					persons: fullPersonsData
				};

				var emptyHtml = Handlebars.compile(template);

				var html = emptyHtml(context);

				mainFunc.htmlNewPassportInfo = html;

				mainFunc.dialog = $.show.dialog({
					title: language.Generic.Common.kGeneratedPasswordInfo,
					message: html,
					size: BootstrapDialog.SIZE_WIDE,
					buttons: [
						{
							label: language.Generic.Buttons.kPrint,
							action: mainFunc.printNewPasswordsInfo,
							cssClass: 'btn-primary'
						},
						{
							label: language.Generic.Buttons.kClose,
							action: function() {
								deferr.resolve();
								mainFunc.dialog.close();
							},
							cssClass: 'btn-primary'
						}
					]
				});

				return mainFunc.dialog;
			});

			return deferr.promise();
		}
	};

	var generatePassword = function (perosnIds) {
		if (perosnIds.length === 0) {
			alert(language.Generic.Common.kNotSelectedUsers);
			return;
		}
			//генератор случайных паролей
		var passwordGenerator = {
			getRandomCharFromStr: function (arr) {
				var length = 8;
				var res = arr.charAt(Math.floor(Math.random() * arr.length));

				return res;
			},
			generateOnePassoword: function () {
				var i;
				var resPassw = '';

				resPassw += this.getRandomCharFromStr('abcdefghijklmnopqrstuvwxyz');
				resPassw += this.getRandomCharFromStr('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
				resPassw += this.getRandomCharFromStr('0123456789');
				resPassw += this.getRandomCharFromStr('~!@#$%^&*()_-+={}[]\|:;<>?-');
				resPassw += this.getRandomCharFromStr('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
				resPassw += this.getRandomCharFromStr('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
				resPassw += this.getRandomCharFromStr('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
				resPassw += this.getRandomCharFromStr('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');

				return resPassw;
			},

			//сгеренировать коллекцию объектов {userid, secretPassword} где secretPassword - сгенерированный зашифрованный пароль
			generateSecretPasswordForSelectedUser: function (userIds) {
				//сгенерировать коллекцию {userId, newPassword} где newPassword - незашифрованный пароль
				var userPasswArr = this.generatePasswordForSelectedUsers(userIds);

				//создать коллекцию {userId, secretPassword} где secretPassword - зашифрованный пароль
				var userPasswSecretArr = _.map(userPasswArr, function (current) {
					var secretPassw = rsaHelper.encode(current.newPassword);
					return { userId: current.userId, secretPassword: secretPassw, IsRsa: true }
				});

				return userPasswSecretArr;
			},
			//создать коллекцию объектов - {userId, newPassword} - где newPassword - сгенерированный незашифрованный пароль
			generatePasswordForSelectedUsers: function (userIds) {
				mainFunc.userPasswordArr = [];

				for (var i = 0; i < userIds.length; i++) {
					var userPassw = {};
					userPassw.userId = userIds[i];
					userPassw.newPassword = this.generateOnePassoword();

					mainFunc.userPasswordArr.push(userPassw);
				}

				return mainFunc.userPasswordArr;
			}
		}

		return $.show.confirmation(language.Generic.Common.kWarnChengePasswords)
			.then(function() {
				var newUserPasswords = passwordGenerator.generateSecretPasswordForSelectedUser(perosnIds);
				return ajaxSender.send('/webapi/users/passwords', newUserPasswords);
			});
	}

	//подписка событий
	$(document).ready(function () {

		//подписка на событие кнопки применить (фильтр студентов)
		$('#FindByFilter :button').click(function() {
			checkboxSwitcher.uncheckAll();
			displaySwitcher.hide();
		});

		//скрыть элементы генерации пароля при клике на пейджинге
		$(document).on("click", ".paging a", function () {
			checkboxSwitcher.uncheckAll();
			displaySwitcher.hide();
		});

		//подписка на событие кнопки поиск по имени
		$(document).on("click", "#FindByFam :button", function () {
			checkboxSwitcher.uncheckAll();
			displaySwitcher.hide();
		});

		//подписка кнопки СформироватьНовыеПароли на событие (отобразить/скрыть элементы в дом дереве для генерации новых паролей)
		$('.btnGenerateNewPassword').click(function() {
			displaySwitcher.action();
		});

		//подписка кнопки выбратьВсех на событие клик
		$('.btnCheckAllNewPassword').click(function() {
			checkboxSwitcher.action();
		});

		//подписка кнопки отмена на событие клик
		$('.btnCancelNewPassword').click(function() {
			checkboxSwitcher.uncheckAll();
			displaySwitcher.hide();
		});

		//подписка кнопки продолжить на событие клик
		$('.btnContinueNewPassword').click(function() {
			//получить все id пользователей из чекнутых чекбоксов
			var perosnIds = _.toArray($('input:checkbox:checked.generateNewPassword').map(function() {
				return $(this).attr('data-personId');
			}));

			generatePassword(perosnIds).then(function() {
				checkboxSwitcher.uncheckAll();
				displaySwitcher.hide();
			});
		});

	});
	//ready
	
	//для поддержки js модульности
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) { 
			exports = module.exports = generatePassword;
		}
		exports = generatePassword;
	} else if (typeof window !== 'undefined') {
		window['generatePassword'] = generatePassword;
	} else if (typeof exports !== 'undefined') {
		root['generatePassword'] = generatePassword;
	}

})();
