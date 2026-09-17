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
		return cookie?.val or -999999
	
login_ctor = () ->
	_container = null
	_onChangeLastElem = null
	_cacheVer = null
	
	_constants =
		#должно соответствовать kUnsel в ajaxmethods_login
		unselectedVal: -999999

	#фильтры логина
	_filters = null
	_loginAndPass = null
	_apply = null

	_validateFunc = null


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

		option = $('<option />').html(initItemText).attr('value', _constants.unselectedVal)
		jqSelect.append option
		
		for item in items
			option = $('<option />').html(item.name).attr('value', item.id)
			$(select).append(option)

		jqSelect.prop('disabled', false)
		jqSelect.show()

	#первичная инициализация данных формы логина
	#если у пользователя в cookies хранится информация - то с сервера придут полностью подготовленные данные для фильтров
	_initData = () ->
		deferred = $.Deferred()

		_initSuccess = (response) ->
			data = response
			selects = $('select', _container)
			lastSelect = $('select:last', _container)
			
			firstParam = selects.first().attr('id')
			#отображать незаполненные формы так как данных в базе нет
			if data[firstParam].length != 0
				for select in selects
					jqSelect = $(select)
					id = jqSelect.attr('id')
					name = jqSelect.attr('name')
					flt = _filters.getByName(name)
				
					currId = data[name]
					items = data[id]
				
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
				allowEnterPair(lastSelect)
			deferred.resolve()
			onLoginFormReady()

		initData = $.extend {}, _cookies, 
			cacheVer: _cacheVer

		prepareSuffix = _container.attr('id').replace("message","").replace("-", "")
		prepareAction = '/webapi/prepare' + prepareSuffix + 'loginform'

		jsSubmit
			#action: '/asp/scripts/ajaxmethods_login.asp',
			action: prepareAction
			method: "get"
			auth: false
			defaultErrorHandling: false
			cache: true
			data: initData
			onError: (response) ->
				if response.status == 0
					deferred.reject "canceled"
					return
				msg = response?.responseJSON?.message or language.Generic.Common.kUnexpErr
				window.lalert(msg)
				deferred.reject msg
			onSuccess: _initSuccess

		return deferred.promise()

	sendAjaxRequest = ($changedElement) ->
		$('input[type=text], input[type=password]', _container).prop('disabled', true)
		_filters.disableAfter($changedElement.attr('name'))
		_apply.css('display', 'none')

		if $changedElement.prop("selectedIndex") != 0 
			strAjaxQuery = $('select', _container).serialize()
			strAjaxQuery += "&LASTNAME=" + $changedElement.attr("name") + "&cacheVer=" + _cacheVer

			jsSubmit
				action: '/webapi/loginform'
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
		data = response

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

	_getAuthData = (pw) =>
		deferred = $.Deferred()

		jsSubmit 
			action: "/webapi/auth/getdata"
			method: "POST"
			auth: false
			showProcessing: false
		.then (authData) ->
			pw2 = hexMD5_(authData.salt + hexMD5_(pw.val()))
			pw.val(pw2.substr(0, pw.val().length));
				
			deferred.resolve
				"lt": authData.lt
				"pw2": pw2
				"ver": authData.ver
		.fail () ->
			deferred.reject()

		deferred.promise()

	#Логин
	_login = (container, validateFunc, addOpts) ->
		_container = _container || container

		user = $('[name=UN]', _container)
		pw = $('[name=PW]', _container)

		_validateFunc = if typeof _validateFunc is "function" then _validateFunc else validateFunc

		addOpts = addOpts || []
		
		if _validateFunc(user, pw)
			_container.find("input[name=UN]").blur()
			_container.find("input[name=PW]").blur()

			processing = $.show.processing()

			_getAuthData(pw).then (authData) ->

				authParams = _container.find('select, input').serializeArray()

				authParams.push name: "lt", value: authData.lt
				authParams.push name: "pw2", value: authData.pw2
				authParams.push name: "ver", value: authData.ver

				authParams.push.apply(authParams, addOpts)

				jsSubmit 
					action: "/webapi/login"
					data: authParams
					showProcessing: false
					auth: false
					defaultErrorHandling: false
					onError: (response) ->
						processing.close()
						msg = response?.responseJSON?.message or language.Generic.Common.kUnexpErr
						$.show.error(msg).then () ->
							user.focus()
							pw.val("")
				.then (response) ->
					if !response.at
						processing.close()
						$.show.error("ошибка авторизации")
						return
					data = response.requestData or {}
					data.at = response.at

					defOpts =
						path: response.entryPoint
						auth: false
						nocache: false
						params: data

					if response.errorMessage
						processing.close()
						$.show.error(response.errorMessage).then () ->
							options = $.extend {}, defOpts,
								method: "GET"
							delete options.params
							postTo options
						return
					postTo defOpts
				.always () ->
					setDBFree()
			.fail () ->
				processing.close()


	allowEnterPair = ($changedElement) ->
		if $changedElement.prop("selectedIndex") != 0
			_loginAndPass.prop('disabled', false)
			_apply.css('display', 'inline')
		else
			_loginAndPass.prop('disabled', true)
			_apply.css('display', 'none')

	return {
		init: (cont, filters, validateFunc, cacheVer) ->
			_container = cont
			_initFilters(filters)
			_validateFunc = validateFunc
			_cacheVer = cacheVer;

			initPromise = _initData()

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

			return initPromise
		#Логин
		login: _login
	}
