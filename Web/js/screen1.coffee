#© 2007-2015 IRTech. All rights reserved.
kClosingSes="Сейчас ваш сеанс работы будет завершён"
kDataWereChanged="Данные были изменены. Вы хотите продолжить без сохранения данных?"
dataWereChanged = false
bIsDBFree = true
childWindows = []

$(document).ready -> 
	#переключение учебного года текущий/будущий
	$(".switсh_year").click () -> $(".switсh_year").toggleClass("go_left")
	
	$('body').on('click', 'button:not([onclick])', ->
		isDblClickHandled = $.data(this, 'isDblClickHandled')

		if isDblClickHandled
			return
		
		events = $._data(this, 'events')
		if !events
			return
			
		handlers = events['click']
			
		$.data(this, 'lastClicked', new Date().getTime())
					
		$(this).click( (e) ->
			lastClicked = $.data(this, 'lastClicked')
			now = new Date().getTime()

			if lastClicked and (now - lastClicked < 200)
				e.stopImmediatePropagation()
			else
				$.data(this, 'lastClicked', now)
		)

		handler = handlers.pop()
		handlers.splice(0, 0, handler)

		$.data(this, 'isDblClickHandled', true)
	)
	
	addCheckLockEventToButtons()
	
addCheckLockEventToButtons = ->
	$buttons = $('button[onclick]')
	
	$buttons.each(->
		$button = $(this)
		
		onclickAttr = $button.attr('onclick')
		$button.attr('onclick', 'if(isButtonsLock()) {return;} ' + onclickAttr)
	)
		
	return

isButtonsLock = (->
	isLock = false

	return ->
		if isLock
			return true
	
		isLock = true
		
		setTimeout(
			-> isLock = false,
			200
		)
		
		return false
)()

dataChanged = () ->
	#по умолчанию контекст изменений - окно
	context = $(window)

	#поиск события для обработчика
	caller = dataChanged
	while caller
		event = caller.arguments[0]
		if event instanceof Event or event instanceof $.Event then break else event = null
		caller = caller.caller

	if event
		changedElement = event.target || event.srcElement
		modalDialog = $(changedElement).closest('div.modal.fade')
		if modalDialog.length
			#если изменяемый элемент находится внутри модального диалога, то устанавливаем в качестве контекста модальный диалог
			context = modalDialog
	context.prop "dataWereChanged", true

WasSaved = (text) ->
	if arguments.length is 0 then text = wasSavedMsg

	if not text or text.length < 1 then return
	
	#защита от показа сообщений из кэша при возврате на страницу через goHistoryBack
	#запоминаем в хранилище браузера все отображаемые сообщения
	#а перед показом - проверяем, не показывалось ли оно ранее
	if typeof Storage isnt "undefined"
		if typeof sessionStorage.showedWasSaved isnt "undefined" and  _.contains(sessionStorage.showedWasSaved.split(','), pageVer.toString())
			return
			
		if typeof sessionStorage.showedWasSaved is "undefined" then sessionStorage["showedWasSaved"] = '' 
		sessionStorage.showedWasSaved += pageVer + ','
		
	opts = {}
	if arguments[1] then opts = arguments[1]

	if text.length > 500 then opts.width = 600

	alert(text, opts)
	dataWereChanged = false

getEvent = (e) ->
	if not e then e=event #old IE
	e

cancel_event = (e) ->
	if e.stopPropagation then e.stopPropagation() else e.cancelBubble = true #old IE
	return

getKeyCode = (e) ->
	if e.which then return e.which
	e.keyCode

getTargetElement = (e) ->
	if e.target then return e.target
	e.srcElement

windows = {}
openPopupWindow = (wnd_to, url, width, height) ->
	wnd = windows[wnd_to]
	if wnd && !wnd.closed && wnd_to != "_qualityAssessmentAnalytics" && wnd_to != "_qualityAssessmentAnalyticsEM" && wnd_to != "_staffAttest"
		wnd.forceClosing = true
		wnd.close()

	if url.lastIndexOf("?") != -1
		url += "&"
	else
		url += "?"
	
	winOptions = { url: url + "AT=" + appContext.at + "&VER=" + getVer(), name: wnd_to, specs: "status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=" + width + ",height=" + height, winChild: wnd };
	if wnd && !wnd.closed && (wnd_to == "_qualityAssessmentAnalytics" || wnd_to == "_qualityAssessmentAnalyticsEM")
		wnd.focus()
	else
		windowOpen( winOptions )
		wnd = windows[wnd_to] = winOptions.winChild
		center wnd, width, height
	
center = (wnd, width, height) ->
	if !wnd or !wnd.screen
		return
	if bowser.webkit and parseInt(bowser.version) < 20
		return
	dw = (wnd.screen.availWidth - width)/2
	dh = (wnd.screen.availHeight - height)/2
	wnd.moveTo(dw,dh)

maximize = ( wnd ) ->
	if !wnd or !wnd.screen
		return
	wnd.moveTo(0,0)
	wnd.resizeTo(wnd.screen.availWidth, wnd.screen.availHeight)

#базовая проверка на наличие отмеченных чекбоксов
#возвращает promise
whenChecked = (form, inputName) ->
	deferred = $.Deferred()
	promise = deferred.promise()
	promise.fail () -> $.show.message language.Generic.Common.kErrMsgNoChecks
	checkedCnt = $("input[name='" + inputName + "']:checkbox:checked", form).length
	if checkedCnt > 0
		deferred.resolve checkedCnt
	else
		deferred.reject checkedCnt
	promise

processKeyDown = (e) ->
	e=getEvent(e)
	keycode = getKeyCode(e)
	element = getTargetElement(e)
	if not shouldProcessKey(e, keycode, element) then return false
	KeyDown(e, keycode, element)

KeyDown = (e, keycode, element) -> true

Back = null
shouldProcessKey = (e, keycode, element) ->
	if keycode is 116
		# F5
		if document.forms.length > 0
			DoSubmit(document.forms[0], "#")
			return false
	if element.nodeName isnt "INPUT" and element.nodeName isnt "TEXTAREA"
		if keycode is 8 
			#backspace
			cancel_event(e)
			if Back then Back()
			return false
	true

$(document).bind('keydown', processKeyDown)

lalert = window.alert
nalert = do ->
	deferredArgs = []
	() ->
		focusElement = null

		curDlg = $('#dialog')
		if curDlg.length < 1
			curDlg = $('<div id="dialog"></div>')
			$('body').append(curDlg)
		else 
			if curDlg.dialog("isOpen")
				deferredArgs.push(arguments)
				return
	
		closeFunc = ->
			if focusElement isnt null
				focusElement.focus()
			if deferredArgs.length > 0
				nalert.apply(this, deferredArgs[0])
				deferredArgs.shift()
	
		options =
			modal: true
			autoOpen: false
			closeOnEscape: true
			dialogClass: 'alertDialog'
			buttons: 
				"Ok": ->
					$(this).dialog("close")
					return
			title: language.Generic.Common.kAttention
			resizable: false
			close: null
			bgiframe: false

		if bowser.msie and /6.0/.test(navigator.userAgent)
			options.bgiframe = true

		curDlg.html(arguments[0])

		if typeof arguments[1] isnt 'undefined'
			options[key] = arguments[1][key] for key of arguments[1]
	
		curDlg.dialog(options)
	
		if document.activeElement isnt null
			activeElementTagName = document.activeElement.tagName.toUpperCase()
			if activeElementTagName is "INPUT" then focusElement = document.activeElement

		curDlg.dialog('open');
	
		curDlg.bind 'dialogclose', (event) ->
			closeFunc()
			return
		return

window.alert = window.nalert

focusAlert = (el, msg) ->
	alert(msg)
	.then -> 
		setTimeout( () ->
			el.focus()
		, 100)

focusError = (el, msg) ->
	$.show.error(msg)
	.then -> 
		setTimeout( () ->
			el.focus()
		, 100)

isDBBusy = -> not bIsDBFree
setDBBusy = -> bIsDBFree = false
setDBFree = -> bIsDBFree = true

getFormsParams = (forms) ->
	arrAllParams = []
	for form in forms
		arrParams = $(form).serializeArray();
		arrAllParams = _.union(arrAllParams, arrParams)
		
	return arrAllParams
			
postTo = (path, params, formParams, auth) ->
	defparams = 
		path: ''
		method: "POST"
		params: undefined
		formParams: undefined
		auth: true
		nocache: true

	if typeof path is 'string'
		parameters = defparams
		if path then parameters.path = path
		if params then parameters.params = params
		if formParams then parameters.formParams = formParams
		if auth is false then parameters.auth = false
	else
		parameters = $.extend({}, defparams, path)

	createHiddenField = (form, key, value) ->
		hiddenField = document.createElement("input")
		hiddenField.setAttribute("type", "hidden")
		hiddenField.setAttribute("name", key)
		hiddenField.setAttribute("value", value)

		form.appendChild(hiddenField)
	
	# The rest of this code assumes you are not using a library.
	# It can be made less wordy if you use one.
	form = document.createElement("form")
	form.setAttribute("method", parameters.method)
	form.setAttribute("action", parameters.path)
	
	if parameters.formParams isnt "undefined" then form.setAttribute(key, parameters.formParams[key]) for key of parameters.formParams

	parameters.auth = parameters.auth and typeof strATTok isnt "undefined"

	if parameters.auth
		createHiddenField(form, 'at', strATTok)
	
	if parameters.nocache
		vers = getVer().toString()
		createHiddenField(form, 'VER', vers)
	
	if parameters.formParams && parameters.formParams.download
		finishDownload = ->
			window.clearInterval fileDownloadCheckTimer
			$.cookie('fileDownloadToken', null) #clears this cookie value
			$(document).trigger('closeProcessing')
			
		checkFunc = ->
			cookieVal = $.cookie('fileDownloadToken')
			if cookieVal != vers
				return
			finishDownload()

		fileDownloadCheckTimer = window.setInterval checkFunc, 1000
		$(document).trigger('showProcessing')
	
	urlHelper.iterateParams(parameters.params,
		(name, value) ->
			if parameters.auth and name == 'AT'
				return
			createHiddenField(form, name, value)
			return
	)

	document.body.appendChild(form)
	DoSubmit(form,'')

#выполняет проверку наличия изменений. при наличии таковых выводится соответствующее подтверждение
checkForChanges = -> extDeferred.when(!dataWereChanged || $.show.getConfirmation(kDataWereChanged))

leaveConfirmFunc = ->
	true

leaveAndConfirm = -> 
	leaveConfirmFunc()

jsSubmit = (inparams) ->
	defparams = 
		form: ''
		action: ''
		auth: true
		nocache: false
		method: 'POST'
		data: null
		queryData: null
		forceData: null
		dataType: "JSON"
		showProcessing: false
		showSuccessMessage: false
		contentType: "application/x-www-form-urlencoded; charset=UTF-8"
		streamed: false #потоковая обработка ответа от сервера. части ответа обрабатываются в onStreamRead, полный ответ в - onSuccess
		streamReadInterval: 200 #интервал проверки ответа от сервера при потоковой обработке
		defaultErrorHandling: true #обработка ошибок по умолчанию. Если response.IsError автоматически отображается окно с response.message
		onStreamRead: (streamPart) -> #обработчик пришедшей части запроса. используется при параметре streamed = true
		onSuccess: (response) -> #обработчик успешного обращения к серверу
		onError: (xhr, message, error) -> # обработчик только ошибок HTTP. если defaultErrorHandling то автоматически отображается сообщение "Неожиданная ошибка"
		onComplete: (xhr, message, error) -> # обработчик завершения обращения к серверу успешное и неуспешное
		rawSettings: null #прямые настройки jquery.ajax
	
	parameters = $.extend({}, defparams, inparams)
	paramsToSend = ""
	useFormAuth = false

	if parameters.form
		useformAuth = parameters.form.elements["AT"] != undefined
		if not inparams.action then parameters.action = parameters.form.action
		paramsToSend += '&' + $(parameters.form).serialize()

	if parameters.auth and not useformAuth and parameters.action.indexOf("webapi") == -1 then paramsToSend += "&AT=" + strATTok
	if parameters.nocache then paramsToSend += "&ver=" + getVer()

	if parameters.queryData
		queryParams = $.param(parameters.queryData)
		if queryParams.length > 0
			if parameters.action.indexOf("?") == -1
				parameters.action += "?" + queryParams
			else
				parameters.action += "&" + queryParams

	if parameters.data
		if parameters.contentType is "application/json"
			#если формат запроса - json, то объекты сериализуем
			if typeof parameters.data is 'object'
				paramsToSend = '&' + JSON.stringify parameters.data
		else
			if typeof parameters.data is 'string'
				paramsToSend += '&' + parameters.data
			else
				urlHelper.iterateParams(parameters.data, (name, value) ->
					paramsToSend += '&' + encodeURIComponent(name) + "=" + encodeURIComponent(value)
					return
				)
			
	if paramsToSend.length > 0
		paramsToSend = paramsToSend.substring(1)

	deferred = $.Deferred()
	
	#@
	internal_error = (xml, message, error) ->
		if parameters.showProcessing then $(document).trigger('closeProcessing')
		if parameters.streamed 
			clearInterval streamInterval
			do streamPartHandler
			
		if xml.status is 401
			authError = xml.getResponseHeader("auth-error")
			if authError is 'SessionExpired'
				show_error_message(language.Generic.Common.kTimeOutOccured4Ajax ? "Ваш сеанс работы был завершен", "/")
			else
				show_error_message(language.Generic.Common.kErrPageAccess ? "Ошибка доступа")
			#тут спорный момент. нужно ли вызывать внешний обработчик ошибки (parameters.onError) в случае ошибки авторизаци... 
			#по факту появления проблем с этим еще раз обдумать
			deferred.reject()
			return
		else if parameters.defaultErrorHandling
			msg = null
			if xml.responseJSON and xml.responseJSON.message
				msg = xml.responseJSON.message

			if xml.responseJSON
				show_error_message(msg, null, xml.responseJSON.isInformation)
			else
				show_error_message(msg)

		parameters.onError(xml, message, error)
		deferred.reject(xml)

	#@
	handle_error = (response) ->
		if response && response.message
			show_error_message(response.message)
		else
			show_error_message()
		deferred.reject()
		return

	#@
	show_error_message = (message, redirectUrl, isInformation) ->

		if isInformation is undefined
			isInformation = null

		if message and typeof message is 'string'

			if isInformation
				show = $.show.message
			else
				show = $.show.error

			show message
				.then () -> 
					if redirectUrl
						window.location.pathname = redirectUrl
		else
			$.show.error language.Generic.Common.kUnexpErr
				.then () -> 
					if redirectUrl
						window.location.pathname = redirectUrl
		return
	
	internal_Success = (response, textStatus, jqXHR) ->
		if parameters.showProcessing 
			$(document).trigger('closeProcessing')
			
		if parameters.streamed 
			clearInterval streamInterval
			do streamPartHandler
		
		if parameters.defaultErrorHandling
			if parameters.dataType != "JSON"
				parameters.onSuccess(response)
				deferred.resolve(response)
				return
			if typeof(response) == "undefined"
				if jqXHR.status isnt 204
					handle_error()
			else if response.isError
				handle_error(response)
				return
				
		if parameters.showSuccessMessage and response.message
			$.show.message response.message

		parameters.onSuccess(response)
		deferred.resolve(response)

	if parameters.showProcessing then $(document).trigger('showProcessing')

	jqAjaxParams = 
		type: parameters.method
		url: parameters.action
		contentType: parameters.contentType
		data: if parameters.forceData then parameters.forceData else paramsToSend
		dataType: parameters.dataType
		success: internal_Success
		error: internal_error
		complete: parameters.onComplete
		
	if parameters.auth and typeof strATTok != "undefined"
		jqAjaxParams.headers =
			at: strATTok

	if parameters.streamed
		xhr = jQuery.ajaxSettings.xhr()
		jqAjaxParams.xhr = () -> xhr
		streamReadPos = 0
		streamPartHandler = () ->
			try
				currentFullReponseText = xhr.responseText
				currentPart = currentFullReponseText.substring streamReadPos
				if currentPart
					streamReadPos = streamReadPos + currentPart.length
					parameters.onStreamRead currentPart
				streamReadPos
			catch err
		streamInterval = setInterval streamPartHandler, parameters.streamReadInterval

	if parameters.rawSettings
		jqAjaxParams = $.extend(jqAjaxParams, parameters.rawSettings)
		
	jQuery.ajax jqAjaxParams

	deferred.promise()
	
jsSaveForm = (saveForm, data, action) ->
	onSave = (response) ->
		if response.message
			alert response.message
		dataWereChanged = false
		$(saveForm).rememberState()
	
	data = data or {}
	
	jsSubmit
		form: saveForm
		action: action or saveForm.action
		data: data
		showProcessing: true
		onSuccess: onSave

urlHelper = do (() ->
	url = (url) ->
		_url = url
		_params = ''
		url: () -> _url
		params: () -> _params
		addParam: (paramName, paramValue) ->
			if _params.length isnt 0 then _params += "&"
			
			_params += encodeURIComponent(paramName) + "=" + encodeURIComponent(paramValue)
			return
		getFullUrl: ->
			if _params.length > 0 
				if _url.indexOf('?') > 0
					return _url + '&' + _params
				else
					return _url + '?' + _params
			else
				return _url

	_iterateParams = (params, func) ->
		if typeof params is 'string'
			arrParamValues = params.split('&')
			for i in [0..arrParamValues.length-1] by 1
				arrPair = arrParamValues[i].split('=')
				func(arrPair[0], decodeURIComponent(arrPair[1]))
		else
			for key of params
				item = params[key]
				if item instanceof Array
					for i of item
						func(key, item[i])
				else if (item instanceof Object) and typeof item.name isnt 'undefined'
					func(item.name, item.value)
				else
					func(key, item)
		return

	iterateParams: _iterateParams

	makeUrl: (in_url, params, withoutObligatory) ->
		retUrl = new url(in_url)
		
		if not withoutObligatory 
			if typeof window.strATTok isnt "undefined"
				retUrl.addParam('at', strATTok)
				vers = getVer()
				retUrl.addParam('ver', vers)

		_iterateParams(params, 
			(name, value) ->
				retUrl.addParam(name, value)
				return)
		retUrl.getFullUrl()

	getParameterByName: (name, url) ->
		if not url
			url = window.location.href
		name = name.replace(/[\[\]]/g, "\\$&")

		regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
		results = regex.exec(url)

		if not results
			return null

		if not results[2] 
			return ''

		value = results[2].replace(/\+/g, " ")
		return decodeURIComponent(value)
)

getVer = ->
	d = new Date()
	d.getTime()

jumpVer = ( win, page, params ) ->
	win.location.href = page + "?" + params + '&ver=' + getVer()
	return

setFocus = ->
	elems = $('input[type=text]:enabled:visible').not('.date-input,.date input');
	#if elems.length <= 0 then elems = $('[type=button]:enabled:visible');
	windowHeight = $(window).height()
	if elems.length > 0
		focusElement = $(elems[0])
		if (focusElement.height() + focusElement.offset().top) < windowHeight
			focusElement.focus()
	
	return

if not String.prototype.trim then String.prototype.trim = () -> this.replace(/^\s+|\s+$/g,'')

setImgState = ( img, imgId, state ) ->
	newImg = new Image()
	
	if state is 1 then newImg.src = img + '_on.gif' else newImg.src = img + '.gif'
	
	document[imgId].src = newImg.src

checkAreaLength = (elTextArea, nMaxLength, sElementTitle) ->
	if elTextArea.value.length > nMaxLength
		alert("Поле '" + sElementTitle + "' должно содержать не более " + nMaxLength + " символов" )
		elTextArea.focus()
		return false
	true

bNewWindow = false
Logout = (bAskConf) ->
	if bAskConf?
		checkForChanges()
		.then () ->	$.show.confirmation("Вы решили выйти из программы?")
		.then () -> postTo ("/asp/logout.asp")
	else
		if not appContext?.at
			return
		#ВАЖНО! Нельзя использовать функцию windowOpen
		window.open urlHelper.makeUrl('/asp/logout.asp')
	return

do () ->
	wasLogouting = false
	
	$(document).ready () ->
		if $("body").hasClass "print"
			#при закрытии страниц печати не выполняем logout
			return

		if window.opener? and not window.opener.closed
			#при закрытии popup окон не выполняем logout
			return

		window.onunload = (evt) ->
			if wasLogouting 
				return
	
			if !haveToLogout() 
				return

			#if not bowser.msie
				#В IE отключен поскольку при любом нажатии на ссылку имеющую href - браузер в первую очередь обрабатывает событие onunload. 
				#таким образом флаг isHaveToLogout не успевает выставиться в нужное значение.
		
				#в остальных браузерах - срабатывает при нажатии на браузерные навигационные стрелки и при изменении адресной строки
				#при нажатии F5 - данное событие не вызывается
			do Logout
			return

		#в FF при закрытии окна событие onunload не срабатывает. Поэтому по возможности используем beforeunload. 
		$(window).on "beforeunload", () ->
			if !haveToLogout() 
				return

			wasLogouting = true
			do Logout
			return

heavyAction = (action, onError) ->
	handleError = -> if onError then onError()

	successCallBack = (response) ->
		if response.isError or not response.data
			alert(response.message or language.Generic.Common.kUnexpErr)
			handleError()
			return
			
		if not response.data.isPosible
			alert(language.Generic.Common.kMaxHeavySessionsReached)
			handleError()
			return
			
		action()
		return

	jsSubmit(
		action: '/asp/scripts/ajaxmethods.asp'
		data:
			method: "kHeavySessionIsPosible"
		showProcessing: true
		defaultErrorHandling: false
		onSuccess: successCallBack
	)

WorkInSystemUpdater = (code,response) -> $('#WorkingInSystemCnt').html(response)

GetForm = (fName, obj) ->
	if $(obj).parents().is('.ui-dialog')
		return $(obj).parents(".ui-dialog:last").find('form[name='+fName+']')[0]
	else
		### По какой-то причине выбор элементов, без предков .ui-dialog не работает, потому берем первый ###
		$('form[name='+fName+']:first')[0]

ShowInDialog = (objForm, action, onDataWereChanged, onShow) ->
	jsSubmit(
		form: objForm
		action: action
		dataType: "html"
		showProcessing: true
		onSuccess: (data, textStatus) ->
			if /"isError":true}/i.test(data)
				json = $.parseJSON(data)
				alert(json.message)
				return
			
			onclose = $(data).filter('script[rel~=onclose]').html()
			onopen = $(data).filter('script[rel~=onload]').html()
			
			_dialog = $.show.dialog(
				title: $('h1.title', data).text()
				size: BootstrapDialog.SIZE_WIDE
				onshown: (dialog) ->
					$('.bootstrap-dialog-message').html(data)
					$('h1.title', $('.bootstrap-dialog-message')).remove()
					
					if onShow then onShow()
					$.globalEval(onopen)
					
					return
				onhide: (dialog) ->
					$.globalEval(onclose)
					setDBFree()
					
					if dialog.$modal.prop("dataWereChanged") and onDataWereChanged
						do onDataWereChanged
					return true
			)
			
			_dialog.showInDialog = 'SID'
			return
		onError: (XMLHttpRequest, textStatus, errorThrown) ->
			alert(textStatus)
	)
	return

confirmExcel = () ->
	$.show.confirmation(language.Generic.Common.kExportIntoExcel, 0, null, false, 'ShowExcelConfirm')

openExcelCommon = (form, action, parameters) ->
	Yes = ->
		strParameters = action + '?VER=' + getVer() + '&AT=' + strATTok
		strParameters += '&' + i + '=' + parameters[i] for i of parameters	
		DoSubmit(form, strParameters)
	objButtons = {}
	objButtons[$.show.defaults.yesText] = Yes
	$.show.confirmation(language.Generic.Common.kExportIntoExcel, 0, objButtons, false, 'ShowExcelConfirm')

openExcelVersn = (form, action, parameters) ->
	Yes = ->
		action += i + '=' + parameters[i] + "&" for i of parameters
		DoSubmit(form, action)
	objButtons = {}
	objButtons[$.show.defaults.yesText] = Yes
	$.show.confirmation(language.Generic.Common.kExportIntoExcel, 0, objButtons, false, 'ShowExcelConfirm')

#Вычисляет "локальный" EmId из фильтров, исп-ся в отчетах УО, в которых отрисовываются фильтры УО
GetLocalEmId = (strEMID) ->
	EmID = $('select[name^=FilterEMID_] option:selected[value!=-1]').last().val()
	
	if EmID is undefined or EmID is -1 then EmID = strEMID

	EmID

blockMainWindow = (windowChild) ->
	info = navigator.userAgent
	isIE = !!info.match(/Trident\/7\./) or info.indexOf("MSIE") > 0

	if not isIE
		setTimeout(
			->
				$(document).trigger('showProcessing')
				return
			, 500)

		checkWindowIsClosed = ->
			if windowChild.closed
				$(document).trigger('closeProcessing')
				clearInterval(window.timer1)
			return

		window.timer1 = setInterval(checkWindowIsClosed, 500)
		return
	else
		isActive = true
		
		window.onblur = ->
			isActive = false
		
		checkWindowIsActive = ->
			if not isActive
				windowChild.focus()
				window.onblur = null
				clearInterval(window.timer1)
		
		window.timer1 = setInterval(checkWindowIsActive, 1000)

checkFileExtension = (strFileExtension, arrPossibleExtensions) ->
	strListOfExtensions = ''
	bCorrespondsToExtension = false;
	for i in [0..arrPossibleExtensions.length-1] by 1
		strListOfExtensions = strListOfExtensions + ', ' + arrPossibleExtensions[i]
		if strFileExtension is arrPossibleExtensions[i] then bCorrespondsToExtension = true
	
	strListOfExtensions = strListOfExtensions.slice(1)
	if not bCorrespondsToExtension
		alert(language.Generic.SetupSchoolResources.kErrInvalidFileExt + strListOfExtensions)
		false
	else
		true

isEMailValid = (documentForm) ->
	form = documentForm
	elEmail = form.elements['EMAIL']
	sEmail = elEmail.value
	emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/
	if not emailRe.test(sEmail)
		elEmail.focus()
		alert(language.Generic.SetupSchoolUI.kSetEMail)
		return false
	true

showPrintVersion = (opts) ->
	defaults =
		viewHeader: true

	options = $.extend({}, defaults, opts)

	$('.print-block').printUtils().toPrint( options )
	
exportToExcel = (opts) ->
	defaults =
		viewHeader: true

	options = $.extend({}, defaults, opts)

	$('.print-block').printUtils().toExcel( options )

openSchoolInfo = (schoolId, isPreSchool, isAddSchool, isOrphanageSchool) ->
		schoolCardTemplate = null
		context = null
		queries = new Array()

		schoolCardPrint =
			replace: (printBlock, copyBlock) ->
				$('table', copyBlock).addClass('table table-xs')
			getSchoolCard: ->
				container = $('<div>')

				schoolCard = $('div.print-block')
				schoolCardClone = schoolCard.clone()

				schoolCardClone.find('.form-group').appendTo(container)
				return container

		getSchoolCardTemplate = $.ajax
			url: '/vendor/pages/templates/schoolCard/schoolCardTemplate.html'
			cache: true
			success: (data) ->
				schoolCardTemplate = data.replace(/(?:\r\n|\r|\n)/g, '')

		getFormGroupTemplate = $.ajax
			url: '/vendor/pages/templates/schoolCard/formGroupTemlate.html'
			cache: true
			success: (data) ->
				formGroupTemplate = data.replace(/(?:\r\n|\r|\n)/g, '')

				Handlebars.registerPartial('formGroup', formGroupTemplate)

		getSchoolCard = jsSubmit
			action: '/webapi/schools/' + schoolId + '/card'
			showProcessing: true
			method: 'GET'
			onSuccess: (schoolCard) ->
			
				if schoolCard.commonInfo.foundingDate
					schoolCard.commonInfo.foundingDate = dateUtils.date2str(new Date(schoolCard.commonInfo.foundingDate))

				if schoolCard.commonInfo.locationInfo
					schoolCard.commonInfo.locationInfo.inProvinceCenter = if schoolCard.commonInfo.locationInfo.inProvinceCenter then language.Generic.Common.kYes else language.Generic.Common.kNo
					schoolCard.commonInfo.locationInfo.isProvinceSchoolInCity = if schoolCard.commonInfo.locationInfo.isProvinceSchoolInCity then language.Generic.Common.kYes else language.Generic.Common.kNo

				context =
				schoolCard: schoolCard
				language: language
				functionalities:
					isSchool: appContext.funcType == 2
					isPreSchool: isPreSchool
					isAddSchool: isAddSchool
					isOrphanageSchool: isOrphanageSchool

		queries.push(getSchoolCardTemplate)
		queries.push(getFormGroupTemplate)
		queries.push(getSchoolCard)

		extDeferred.when(queries)
			.then(->
				template = Handlebars.compile(schoolCardTemplate)
				html = template(context);

				printBtn = ->
					options = 
						viewHeader: true 
						processingFunc: [schoolCardPrint.replace]
						header: language.Generic.SchoolInfo.kTitleSchoolInfoCard
						titleWindow: '<%=NETSCHOOL_PRODUCT_NAME%>' + '. ' + language.Generic.SchoolInfo.kTitleSchoolInfoCard
						showFilters: false

					
					
					html = html.split('background-color: RGB( 238, 238, 238);').join('padding:0;') #эта конструкция делает следующие: заменяет подстроку "background-color: RGB( 238, 238, 238);" на "padding:0;"
					

					

					$(html).printUtils().toPrint(options)


				$.show.dialog
					size: BootstrapDialog.SIZE_WIDE
					title: language.Generic.SchoolInfo.kTitleSchoolInfoCard
					message: html
					buttons: [{label: language.Generic.Buttons.kPrint, action: printBtn, cssClass: 'btn-primary'}]
		)