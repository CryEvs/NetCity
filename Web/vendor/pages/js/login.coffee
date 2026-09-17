lngLogin =
	kFirstYouShouldSelect: language.Generic.Login.kFirstYouShouldSelect
	kEmptyAjaxAnswer: language.Generic.Login.kEmptyAjaxAnswer
	kErrorAjaxListLoading: language.Generic.Login.kErrorAjaxListLoading
	kFirstYouShouldSelectSchool: language.Generic.Login.kFirstYouShouldSelectSchool
	kEnterLoginAndPassword: language.Generic.Login.kEnterLoginAndPassword
	kLoginByECardPossibleViaIEorChrome: language.Generic.Login.kLoginByECardPossibleViaIEorChrome
	kECardIDWasReset: language.Generic.Login.kECardIDWasReset
	kECardIDWasRead: language.Generic.Login.kECardIDWasRead

ajaxMethods =
	kPrepareLoginForm: 'kPrepareLoginForm'

_cookies = _.chain ($.cookie("TTSLogin") or "").split('&')
	.map (cookie) -> cookie.split('=')
	.filter (cookieArr) -> typeof cookieArr[1] != "undefined" and cookieArr[1]
	#.filter (cookieArr) -> cookieArr[0] != "SCID"
	.object()
	.value()
#_cookies = _.object _cookies
	
class filter
	 constructor: (@name, @optional, @order, @initItemText) ->

	getCooketVal: () ->
		cookie = _.findWhere _cookies, name: @name
		return cookie?.val or -100
	
login_ctor = () ->
	_container = null
	_onChangeLastElem = null
	
	_constants =
		#должно соответствовать kUnsel в ajaxmethods_login
		unselectedVal: -100

	

	#фильтры логина
	_filters = null
	_loginAndPass = null
	_apply = null

	_submitFunc = null

	_initFilters = (rawFilters) ->
		_filters = do () ->
			__filters = rawFilters;
			_getSelectByName = (name) ->
				$('select[name=' + name + ']', _container)

			retObj = {}
			retObj = _.map rawFilters, (filter) -> _getSelectByName filter.name

			$.extend retObj,
				showFilter: (filterName) ->
					this.getSelectByName(filterName).closest(".row").show()

				hideFilter: (filterName) ->
					this.getSelectByName(filterName).closest(".row").hide()

				readOnlyFilter: (filterName) ->
					select = this.getSelectByName(filterName)
					parent = select.parent()
					text = $('option:selected', select).text()
					span = $('<span />').text(text)
					parent.append(span)
					select.hide()

				getNextFilter: (filterName) ->
					filter = this.getByName(filterName)
					_.find __filters, (testFilter) -> testFilter.order == filter.order + 1

				getSelectByName: _getSelectByName

				getByName: (name) ->
					_.find __filters, (filter) -> filter.name == name 

				disableAfter: (filterName) ->
					filter = this.getByName(filterName)
					
					for index, curFilter of __filters
						if curFilter.order <= filter.order
							continue
						_filters.getSelectByName(curFilter.name)
							.prop('disabled', true)
							.val(0).show()
							.nextAll().remove()

			retObj

		_loginAndPass = $('input[name=UN], input[name=PW]', _container)
		_apply = $('.button-login:not(.button-login-esia)', _container)

	_setOptions = (select, items, initItemText) ->
		jqSelect = $(select)
		jqSelect.html('')
		
		if !items or !items.length or items.length <= 0
			return;

		option = $('<option />').html(initItemText).attr('value', -100)
		jqSelect.append option
		
		for item in items
			option = $('<option />').html(item.name).attr('value', item.id)
			$(select).append(option)

		jqSelect.prop('disabled', false)
		jqSelect.show()

	#первичная инициализация данных формы логина
	#если у пользователя в cookies хранится информация - то с сервера придут полностью подготовленные данные для фильтров
	_initData = () ->
		_initSuccess = (response) ->
			selects = $('select', _container)
			lastSelect = $('select:last', _container)
			
			firstParam = selects.first().attr('id')
			#отображать незаполненные формы так как данных в базе нет
			if response.data[firstParam].length != 0
				for select in selects
					jqSelect = $(select)
					id = jqSelect.attr('id')
					name = jqSelect.attr('name')
					flt = _filters.getByName(name)
				
					currId = response.data[name]
					items = response.data[id]
				
					_setOptions(select, items, flt.initItemText)
					jqSelect.val currId
				
					if !items or items.length != 1
						continue;

					if currId == _constants.unselectedVal
						#фильтр не выбран, но элемент в списке единственный
						#item not selected but has single choise
						currId = items[0].id
						jqSelect.val currId
					
						if lastSelect.attr('id') != id
							sendAjaxRequest jqSelect
						else
							_filters.readOnlyFilter name
						break

					if currId != _constants.unselectedVal
						#единственный элемент в списке выбран
						if flt.optional
							#если фильтр опциональный - можно его спрятать
							_filters.hideFilter name
						else
							#иначе делаем фильтр readonly
							_filters.readOnlyFilter name
			
				lastVal = lastSelect.val()

				if lastVal and lastVal > _constants.unselectedVal
					allowEnterPair(lastSelect)
					if _onChangeLastElem
						_onChangeLastElem(lastSelect)
				onLoginFormReady()
			else
				onLoginFormReady()

		initData = $.extend {}, _cookies, 
			method: "InitLoginForm"
			login: _container.attr('id')
			t: 1

		jsSubmit
			action: '/asp/scripts/ajaxmethods_login.asp',
			method: "get"
			auth: false,
			cache: true
			data: initData
			onSuccess: _initSuccess

	sendAjaxRequest = ($changedElement) ->
		$('input[type=text], input[type=password]', _container).prop('disabled', true)
		_filters.disableAfter($changedElement.attr('name'))
		_apply.css('display', 'none')

		if $changedElement.prop("selectedIndex") != 0 
			strAjaxQuery = $('select', _container).serialize()
			strAjaxQuery += "&LASTNAME=" + $changedElement.attr("name") + "&method=" + ajaxMethods.kPrepareLoginForm + "&login=" + _container.attr('id')

			jsSubmit
				action: '/asp/scripts/ajaxmethods_login.asp'
				method: "get"
				cache: true
				auth: false
				data: strAjaxQuery
				onSuccess: onSuccessList

	NavEnterKeyHandler = (evt) ->
		if evt.which == 13
			_login();
			
	onLoginFormReady = () ->
		$(document).trigger("login_form_ready")

	#метод обработки успешной асинхронной подгрузки значений для фильтров
	onSuccessList = (response) ->
		data = response.data

		#предыдущие фильтры можно скрыть
		lastFilter = _filters.getByName(data.lastElem);
		lastFilterSelect = _filters.getSelectByName(data.lastElem)
		
		if lastFilterSelect.children().length == 2
			if lastFilter.optional
				_filters.hideFilter data.lastElem
			else
				_filters.readOnlyFilter data.lastElem

		currFilter = _filters.getNextFilter data.lastElem
		currFilterSelect = _filters.getSelectByName currFilter.name

		#устанавливаем элементы в фильтр
		_setOptions(currFilterSelect, data.items, currFilter.initItemText)
		currFilterSelect.nextAll().remove()

		if data.items.length == 1
			#если выбора нет - то выбираем и грузим следующий фильтр
			currFilterSelect.val data.items[0].id
			if _filters.getNextFilter currFilter.name
				sendAjaxRequest currFilterSelect
			else
				_filters.readOnlyFilter currFilter.name
				allowEnterPair currFilterSelect
				onLoginFormReady()
		else
			#иначе отображаем фильтр и ждем выбора пользователя
			_filters.showFilter currFilter.name
			onLoginFormReady()

	#Логин
	_login = () ->
		user = $('[name=UN]', _container)
		pw = $('[name=PW]', _container)
		pw2 = $('[name=PW2]', _container)
		
		if _submitFunc(user, pw, pw2) and !isDBBusy()
			form = $('form', _container)[0]
			form.elements["UN"].blur()
			form.elements["PW"].blur()
			setDBBusy()

			processing = $.show.processing()

			jsSubmit 
				action: "/webapi/auth/getdata"
				method: "POST"
				auth: false
				showProcessing: false
			.then (authData) ->
				pw2.val(hexMD5_(authData.salt + hexMD5_(pw.val())));
				pw.val(pw2.val().substr(0, pw.val().length));

				authParams = getFormsParams form

				authParams.push name: "lt", value: authData.lt
				authParams.push name: "ver", value: authData.ver

				jsSubmit 
					action: "/asp/postlogin.asp"
					data: authParams
					showProcessing: false
					auth: false
					defaultErrorHandling: false
					onError: (response) ->
						processing.close()
						msg = response?.responseJSON?.message or 'Ошибка авторизации'#language.Generic.Common.kUnexpErr
						$.show.error(msg).then () ->
							user.focus()
							pw.val("")
							pw2.val("")
				.then (response) ->
					if !response.AT
						processing.close()
						$.show.error("Ошибка авторизации")
						return
					data = response.RequestData or {}
					data.at = response.AT
					postTo 
						path: response.EntryPoint
						nocache: false
						params: data
				.always () ->
					setDBFree()


	allowEnterPair = ($changedElement) ->
		if $changedElement.prop("selectedIndex") != 0
			_loginAndPass.prop('disabled', false)
			_apply.css('display', 'inline')
		else
			_loginAndPass.prop('disabled', true)
			_apply.css('display', 'none')

	return {
		init: (cont, filters, submit, onChangeLastElem) ->
			_container = cont
			_onChangeLastElem = onChangeLastElem
			_initFilters(filters)
			_submitFunc = submit
			_initData();

			onChange = (elem) ->
				if _onChangeLastElem
					_onChangeLastElem(elem)

				allowEnterPair(elem)

			$('select', _container).prop("selectedIndex", 0)
			$('select:not(:last)', _container).change () -> sendAjaxRequest $(this)
			$('select:last', _container).change () -> onChange $(this)
			$('select:first', _container).prop('disabled', false)
			$('select:not(:first)', _container).prop('disabled', true)

			$('input[type=text], input[type=password]', _container).keypress (e) -> NavEnterKeyHandler(e)
		#Логин
		login: _login
	}
