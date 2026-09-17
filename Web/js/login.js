var lngLogin = {
	kFirstYouShouldSelect: language.Generic.Login.kFirstYouShouldSelect,
	kEmptyAjaxAnswer: language.Generic.Login.kEmptyAjaxAnswer,
	kErrorAjaxListLoading: language.Generic.Login.kErrorAjaxListLoading,
	kFirstYouShouldSelectSchool: language.Generic.Login.kFirstYouShouldSelectSchool,
	kEnterLoginAndPassword: language.Generic.Login.kEnterLoginAndPassword,
	kLoginByECardPossibleViaIEorChrome: language.Generic.Login.kLoginByECardPossibleViaIEorChrome,
	kECardIDWasReset: language.Generic.Login.kECardIDWasReset,
	kECardIDWasRead: language.Generic.Login.kECardIDWasRead
};

var ajaxMethods = {
	kTestAjax: 'kTestAjax',
	kPrepareLoginForm: 'kPrepareLoginForm'
};

var login_ctor = function() {
	var _container;
	var _onChangeLastElem;

	//фильтры логина
	var _filters;
	var _loginAndPass;
	var _apply;

	var _submitFunc;

	var _initFilters = function(rawFilters) {
		_filters = function() {
			var __filters = rawFilters;
			var _getSelectByName = function(name) {
				return $('select[name=' + name + ']', _container);
			};
			var retObj = { };
			for (var fn in rawFilters) {
				retObj[fn] = _getSelectByName(__filters[fn].name);
			}

			$.extend(retObj,
				{
					showFilter: function (filterName) {
						this.getSelectByName(filterName).parent().parent().show();
					},
					hideFilter: function(filterName) {
						this.getSelectByName(filterName).parent().parent().hide();
					},
					readOnlyFilter: function (filterName) {
						var select = this.getSelectByName(filterName);
						var parent = select.parent();
						var text = $('option:selected', select).text();
						var span = $('<span />').text(text);
						parent.append(span);
						select.hide();
					},
					getNextFilter: function(filterName) {
						var filter = this.getByName(filterName);

						for (var fn in __filters) {
							var flt = __filters[fn];
							if (flt.order == filter.order + 1) {
								return flt;
							}
						}
						return null;
					},
					getSelectByName: _getSelectByName,
					getByName: function(name) {
						for (var fn in __filters) {
							var flt = __filters[fn];
							if (flt.name == name) {
								return flt;
							}
						}
						return null;
					},
					disableAfter: function(filterName) {
						var filter = this.getByName(filterName);

						for (var fn in __filters) {
							var flt = __filters[fn];
							if (flt.order > filter.order) {
								this.getSelectByName(flt.name).prop('disabled', true).val(0).show().nextAll().remove();;
							}
						}
					}
				});
			return retObj;
		}();

		_loginAndPass = $('input[name=UN], input[name=PW]', _container);
		_apply = $('.capply', _container);
	};

	var _setOptions = function(select, items, initItemText) {
		$(select).html('');
		if (!items || !items.length || items.length <= 0) {
			return;
		}
		var option = $('<option />').html(initItemText).attr('value', -1);
		$(select).append(option);
		for (var index in items) {
			var item = items[index];
			var option = $('<option />').html(item.name).attr('value', item.id);
			$(select).append(option);
		}
		$(select).prop('disabled', false);
		$(select).show();
	};

	var _initData = function() {
		var _initSuccess = function(response) {
			var selects = $('select', _container);
			var lastSelect = $('select:last', _container);

			for (var i = 0; i < selects.length; i++) {
				var select = selects[i];

				var id = $(select).attr('id');
				var name = $(select).attr('name');
				var flt = _filters.getByName(name);
				
				var isProvince = (id == 'provinces');

				var currId = response.data[name];
				var items = response.data[id];
				_setOptions(select, items, flt.initItemText);
				$(select).val(currId);
				if (!items || items.length != 1) {
					continue;
				}
				
				if (currId == -1 && !isProvince) {
					//item not selected but has single choise
					currId = items[0].id;
					$(select).val(currId);
					
					if(lastSelect.attr('id') != id)
						sendAjaxRequest($(select));
					else
						_filters.readOnlyFilter(name);
					break;
				}

				if (currId != -1 || isProvince) {
					//single item is selected, filter may be hidden
					if (flt.optional) {
						_filters.hideFilter(name);
					} else {
						_filters.readOnlyFilter(name);
					}
				}
			}
			var lastVal = lastSelect.val();
			if (lastVal && lastVal > -1) {
				allowEnterPair(lastSelect);
				if (_onChangeLastElem)
					_onChangeLastElem(lastSelect);
			}
		};
		jsSubmit({
			action: '/asp/scripts/ajaxmethods_login.asp',
			auth: false,
			data: { method: "InitLoginForm", t: 1, login: _container.attr('id') },
			onSuccess: _initSuccess
		});
	};

	var sendAjaxRequest = function($changedElement) {
		$('input[type=text], input[type=password]', _container).prop('disabled', true);
		_filters.disableAfter($changedElement.attr('name'));
		_apply.css('display', 'none');

		if ($changedElement.prop("selectedIndex") != 0) {
			var strAjaxQuery = $('select', _container).serialize();
			strAjaxQuery += "&LASTNAME=" + $changedElement.attr("name") + "&method=" + ajaxMethods.kPrepareLoginForm + "&login=" + _container.attr('id');
			jsSubmit({
				action: '/asp/scripts/ajaxmethods_login.asp',
				auth: false,
				data: strAjaxQuery,
				onSuccess: onSuccessList
			});
		}
	};

	var NavEnterKeyHandler = function(evt) {
		if (evt.which == 13)
			_login();
	};

	var onSuccessList = function(response) {
		var data = response.data;

		//hide optional previous filter
		var lastFilter = _filters.getByName(data.lastElem);
		var lastFilterSelect = _filters.getSelectByName(data.lastElem);
		if (lastFilterSelect.children().length == 2) {
			if (lastFilter.optional) {
				_filters.hideFilter(data.lastElem);
			}
			else {
				_filters.readOnlyFilter(data.lastElem);
			}
		}

		var currFilter = _filters.getNextFilter(data.lastElem);
		var currFilterSelect = _filters.getSelectByName(currFilter.name);
		_setOptions(currFilterSelect, data.items, currFilter.initItemText);
		currFilterSelect.nextAll().remove();
		//hide optional current filter

		if (data.items.length == 1) {
			currFilterSelect.val(data.items[0].id);
			if (_filters.getNextFilter(currFilter.name)) {
				sendAjaxRequest(currFilterSelect);
			} else {
				_filters.readOnlyFilter(currFilter.name);
				allowEnterPair(currFilterSelect);
			}
		} else {
			_filters.showFilter(currFilter.name);
		}
	};

	//Логин
	var _login = function () {
		var user = $('[name=UN]', _container);
		var pw = $('[name=PW]', _container);
		var pw2 = $('[name=PW2]', _container);
		if (_submitFunc(user, pw, pw2) && !isDBBusy()) {
			var form = $('form', _container)[0];
			form.elements["UN"].blur();
			form.elements["PW"].blur();
			setDBBusy();
			form.submit();
		}
	};

	var allowEnterPair = function($changedElement) {
		if ($changedElement.prop("selectedIndex") != 0) {
			_loginAndPass.prop('disabled', false);
			_apply.css('display', 'inline');
		} else {
			_loginAndPass.prop('disabled', true);
			_apply.css('display', 'none');
		}
	};

	return {
		//Инициализация компонента
		init: function(cont, filters, submit, onChangeLastElem) {
			_container = cont;
			_onChangeLastElem = onChangeLastElem;
			_initFilters(filters);
			_submitFunc = submit;
			_initData();

			var onChange = function(elem) {
				if (_onChangeLastElem) {
					_onChangeLastElem(elem);
				}
				allowEnterPair(elem);
			};

			$('select', _container).prop("selectedIndex", 0);
			$('select:not(:last)', _container).change(function() { sendAjaxRequest($(this)); });
			$('select:last', _container).change(function () { onChange($(this)); });
			$('select:first', _container).prop('disabled', false);
			$('select:not(:first)', _container).prop('disabled', true);

			$('input[type=text], input[type=password]', _container).keypress(function(e) {
				 NavEnterKeyHandler(e);
			});
		},
		//Логин
		login: _login
	};
};
