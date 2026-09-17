# CoffeeScript$
(($) ->
	#метод используемый для трансформации различных вариантов описания кнопок
	#в вариант используемый сторонним плагином
	mapButtons = (btnsObject) ->
		
		if btnsObject.length
			btnsObject
		else
			for btnName, action of btnsObject
				{label: btnName, action: action}
		#var i = 0;
		#var buts = new Object();
		
		#if (arguments.length == 1 && typeof (arguments[0]) == 'object') {
		#	buts = arguments[0];
		#} else {
		#	while (i < arguments.length / 2) {
		#		buts[arguments[i * 2]] = arguments[i * 2 + 1];
		#		i++;
		#	}
		#}
	
	mergeBtn = (btnArr, addBtn) ->
		for btn, btnInd in btnArr
			if btn.label == addBtn.label
				btnArr[btnInd] = $.extend addBtn, btn
				return

		btnArr.push addBtn
		
	#метод трансформации прежних, привычных настроек alert
	#в настройки используемые сторонним плагином
	mapOpts2VendorOpts = (options) ->
		if !options
			return {}
			
		mappedObg = $.extend {}, options
		mappedObg.onhide = options.close
		mappedObg

	deferredArgs = []
	opts = {}
	
	$.show = 
		defaults:
			#Текст кнопки 'ОК'
			okText: language.Generic.Common.kOk,
			#Текст заголовка окна-ошибка
			errorTitle: language.Generic.Common.kErrorMsgEmotional,
			#Текст заголовка окна-сообщения
			messageTitle: language.Generic.Announcement.kDescription,
			#Текст заголовка окна-подтверждение
			confirmationTitle: language.Generic.Common.kAttention,
			#Текст кнопки 'Да'
			yesText: language.Generic.Common.kYes,
			#Текст кнопки 'Нет'
			noText: language.Generic.Common.kNo,
			#Текст заголовка окна-обработка
			processingTitle: language.Generic.Common.kWait,
			#Текст сообщения окна-обработка
			processingText: language.Generic.Common.kProcessing,
			#Текст заголовка окна-загрузка
			loadingText: language.Generic.Common.kLoad,
			#Текст ошибки собстветтного неверного вызова.
			selfErrorText: language.Generic.Common.kPageErrWrongCall,
			#Текст CheckBox "Больше не спрашивать"
			noAskText: language.Generic.Common.kNoAsk,
			#Id of CheckBox
			checkBoxId: 'MyCheckBox',
			#Текст кнопки 'Отмена'
			cancelText: language.Generic.Buttons.kCancel
			
		#--------------Базовые методы------------#
		#----------------------------------------#
		###
		* @method message - базовый метод для показа сообщений. По умолчанию содержит одну кнопку ОК - закрывающиее окно
		* @param {Object} message - текст сообщения (может быть строкой, массивом строк или jQuery-объектов	или jQuery-объектом).
		* @param {String} title - текст заголовка.
		###
		message: (message, title, options) ->
			if typeof (message) == 'undefined'
				$.show.error(opts.selfErrorText + ' "$.show.message"')
				return

			deferred = $.Deferred()

			defOpts =
				title: if typeof (title) == 'string' then title else opts.messageTitle
				message: message
				type: BootstrapDialog.TYPE_INFO
				buttons: [
					{
						label: opts.okText
						hotkey: 13
						icon: 'glyphicon glyphicon-ok-sign'
						action: (dialog) -> dialog.close()
					}
				]

			msgOptions = $.extend {}, defOpts, mapOpts2VendorOpts(options)

			if msgOptions.onhide
				extHandler = msgOptions.onhide
				msgOptions.onhide = (dialog) ->
					extHandler dialog
					deferred.resolve dialog
			else
				msgOptions.onhide = (dialog) ->
					deferred.resolve dialog

			messageDialog = BootstrapDialog.show msgOptions
			
			messageDialog.getModal().on 'keyup', (event) ->
				if event.which == 32
					messageDialog.close()

			messageDialog.isMessage = true

			deferred.promise()

		###
		@method dialog - показывает окно с произвольным контентом.
		@param {Object} options - настройки диалога
			content - jquery объект - содержимое.
			title - заголовок
			buttons - массив кнопок
		###
		dialog: (options) ->
			if options.message?.jquery && options.message.prop("tagName").toLowerCase() == "script"
				options.message = options.message.html().replace(/(?:\r\n|\r|\n)/g, '')
			options.draggable = true
			
			setDefButtonStyle = (btn, icon, cssClass) -> 
				if not btn.icon
					btn.icon = icon
				if not btn.cssClass
					btn.cssClass = cssClass
			
			if options.buttons
				existsCancel = false
				for button in options.buttons
					switch button.label
						when language.Generic.Common.kOk then setDefButtonStyle button, "glyphicon glyphicon-ok-sign", "btn-primary"
						when language.Generic.Common.kYes then setDefButtonStyle button, "glyphicon glyphicon-ok-sign", "btn-primary"
						when language.Generic.Common.kNo then setDefButtonStyle button, "glyphicon glyphicon-remove-sign", "btn-default"
						when language.Generic.Buttons.kAdd then setDefButtonStyle button, "glyphicon glyphicon-plus-sign", "btn-primary"
						when language.Generic.Buttons.kCreate then setDefButtonStyle button, "glyphicon glyphicon-file", "btn-primary"
						when language.Generic.Buttons.kApply then setDefButtonStyle button, "glyphicon glyphicon-ok-sign", "btn-primary"
						when language.Generic.Buttons.kSave then setDefButtonStyle button, "glyphicon glyphicon-floppy-save", "btn-primary"
						when language.Generic.Buttons.kEdit then setDefButtonStyle button, "glyphicon glyphicon-pencil", "btn-primary"
						when language.Generic.Buttons.kRemove then setDefButtonStyle button, "glyphicon glyphicon-minus-sign", "btn-danger"
						when language.Generic.Buttons.kContinue then setDefButtonStyle button, "glyphicon glyphicon-new-window", "btn-primary"
						when language.Generic.Buttons.kRefresh then setDefButtonStyle button, "glyphicon glyphicon-refresh", "btn-default"
						when language.Generic.Calendar.kClose
							existsCancel = true
							setDefButtonStyle button, "glyphicon glyphicon-remove", "btn-default"
						when language.Generic.Buttons.kCancel
							existsCancel = true
							setDefButtonStyle button, "glyphicon glyphicon-ban-circle", "btn-default"
					button.action = _.debounce(button.action, 500, true)

				#если в опциях нет кнопки "Отмена", добавляем ее
				if not existsCancel && not options.withoutCancelButton
					options.closeByKeyboard = false
					options.buttons.push 
						hotkey: 27
						label: language.Generic.Buttons.kCancel
						action: (dialog) -> 
							$(document.activeElement).blur()
							dialog.close()
						icon: "glyphicon glyphicon-ban-circle"
						cssClass: "btn-default"
		
			ext_onshown = options.onshown
			options.onshown = (dialog) ->
				$("input:visible, select:visible", dialog.$modalContent).first().focus()
				if ext_onshown
					ext_onshown(dialog)

			ext_onhide = options.onhide
			options.onhide = (dialog) ->
				if dialog.$modal.prop "forceClose"
					#принудительно закрываем. важно! тут не нужно вызывать пришедший извне onhide
					return true
			
				if not dialog.$modal.prop "dataWereChanged"
					return not ext_onhide or ext_onhide(dialog)

				#если были изменения - сперва выводим подтверждение
				$.show.confirmation(kDataWereChanged).then -> 
					if not ext_onhide or ext_onhide(dialog)
						#важно! используем forceClose для того, чтобы пришедший извне onhide не вызывался дважды 
						dialog.forceClose()
					dialog.$modal.prop "dataWereChanged", false

				return false

			dialog = new BootstrapDialog(options)

			dialog = $.extend dialog, 
				forceClose: ->
					dialog.$modal.prop "forceClose", true
					dialog.close()
				successClose: ->
					dialog.$modal.prop "dataWereChanged", false
					dialog.forceClose()
			$(document).trigger('dialog-opened')

			if not options.deferredOpen
				dialog.open()

			return dialog

		###
		* @method confirmation - показывает окно-подтвержние, может содержать несколько кнопок, см. описание параметров.
		* @param {Object} message - текст сообщения (может быть строкой, массивом строк или jQuery-объектов
		* 		или jQuery-объектом).
		* @param {String} title - текст заголовка.
		*
		* @param {JSON Object} objButtons - набор соответствий "Название кнопки" -> Функция, функция вызывается
		* 		после закрытия окна. К передаваемому набору добавляются две дефолтные кпопки opts.yesText, opts.noText,
		* 		но только если их явно нет в передаваемом наборе.
		*
		* @param {Bool} isEscapeDisabled - запрещение реакции на нажатие кнопки Escape.
		* @param {String} escapeCookie - выводится чекбокс "Больше не спрашивать", и соответствующая работа с куками.
		*
		###
		confirmation: (message, title, objButtons, isEscapeDisabled, escapeCookie) ->
			if typeof (message) == 'undefined'
				$.show.error opts.selfErrorText + ' "$.show.confirmation" (p1)'
				return;

			defButtons = [
				{
					label: opts.yesText
					cssClass: 'btn-primary'
					icon: 'glyphicon glyphicon-ok-sign'
					hotkey: 13
					action: -> 
				},
				{
					label: opts.noText
					icon: 'glyphicon glyphicon-remove-sign'
					action: -> 
				}
			];
			
			if !objButtons
				objButtons = []

			buttons = mapButtons objButtons

			for defBtn in defButtons
				mergeBtn buttons, defBtn
				
			deferred = $.Deferred()

			if typeof escapeCookie != 'undefined'
				for btn in buttons
					if btn.label == opts.yesText then btnYesAction = btn.action

				if $.cookie(escapeCookie) == "1"
					btnYesAction()
					deferred.resolve opts.yesText
					return deferred.promise()

				buttons.unshift 
					label: opts.yesText + ", " + opts.noAskText
					action: () ->
						$.cookie escapeCookie, 1, { expires: 30, path: '/' }
						btnYesAction()

			for btn in buttons
				if typeof (btn.action) != 'function'
					$.show.error(opts.selfErrorText + ' "$.show.confirmation" ' + btn.label + '');
					return
					
				btn.action = do -> 
					btninfo =
						action: btn.action
						label: btn.label
					(dialog) ->
						dialog.close()
						btninfo.action()

						if btninfo.label  == opts.noText
							deferred.reject btninfo.label
						else
							deferred.resolve btninfo.label

			cfrmOpts =
				title: if typeof (title) == 'string' then title else opts.confirmationTitle
				message: message
				type: BootstrapDialog.TYPE_PRIMARY
				buttons: buttons

			if typeof (isEscapeDisabled) != 'undefined' && isEscapeDisabled
				cfrmOpts.closable = false;

			BootstrapDialog.show(cfrmOpts)
			deferred.promise()

		getConfirmation: (message, title, objButtons, isEscapeDisabled, escapeCookie) ->
			-> $.show.confirmation(message, title, objButtons, isEscapeDisabled, escapeCookie)
			
		prompt: (message, title, checkFuncExt) ->
			if typeof (message) == 'undefined'
				$.show.error(opts.selfErrorText + ' "$.show.message"')
				return

			content = message + ': <input type="text" class="form-control">'

			deferred = $.Deferred()
			
			getText = (dialog) ->
				$('input', dialog.getModalContent()).val()
			
			checkFunc = (dialog) ->
				text = getText(dialog)
				if !checkFuncExt
					return true
				checkFuncExt text

			options =
				title: if typeof (title) == 'string' then title else opts.messageTitle
				message: content
				closable : true
				type: BootstrapDialog.TYPE_INFO
				buttons: [
					{
						label: opts.okText,
						hotkey: 13,
						action: (dialog) ->
							if !checkFunc(dialog)
								return false
							
							text = getText(dialog)
							dialog.close()
							deferred.resolve(text)
					}
					{
						label: opts.cancelText,
						action: (dialog) ->
							text = getText(dialog)
							dialog.close()
							deferred.reject
					}
				]

			BootstrapDialog.show options

			deferred.promise()

		#--------------короткие методы------------#
			
		fileDialog: (options) ->
			### возможные опции
				title					- заголовок
				content					- текст внутри окна
				fileExts				- разрешенные расширения файлов (массив)
				url						- для сабмита формы
				target					- в это же окно, или в отдельное
				queryStringParams		- дополнительный параметры передаваемые в querystring
				submitParams			- дополнительные параметры для сабмита
				invalidFileExtMsg		- сообщение о разрешенных файловых расширений
				additionalContent		- дополнительный контент в HTML
				handlerApplyBtn			- дополнительные действия после выбора файла
				customCheck				- уникальные проверки
				onShownDlg				- дополнительные действия при открытии диалогового окна
				contentHtml				- html-содержимое внутри окна
				isAjax					- выполнение добавления файла Ajax-запросом
				handlerAjaxSuccess		- обработчик success callback
				maxFileSize				- максимальный размер файла, Кб
				formAppendContent       - дополнительный контент вначале формы
				preSubmit				- функция выполняется перед отправкой формы
				applyBtnText			- текст кнопки Ок
			###
			
			deferred = $.Deferred()
			
			_createHiddenField = (_form, key, value) ->
				hiddenField = document.createElement("input")
				hiddenField.setAttribute("type", "hidden")
				hiddenField.setAttribute("name", key)
				hiddenField.setAttribute("value", value)

				_form.appendChild(hiddenField)
			
			#функция проверяет, выбран ли файл, если выбран, то проверяет его расширение
			_check = () ->
				fullFileName = $('#fileName').val()
				
				if not fullFileName 
					alert(language.Generic.SetupSchoolUI.kMsgSelectFileName)
					return false
				
				if options.fileExts
					elements = fullFileName.split('\\')
					fileName = elements[elements.length - 1]
					lowerFileName = fileName.toLowerCase()
					
					isMatch = false
					
					for fileExt in options.fileExts
						len = fileExt.length
						
						if lowerFileName.substr(lowerFileName.length - len, len) is fileExt
							isMatch = true
					
					if not isMatch 
						alert(if options.invalidFileExtMsg then options.invalidFileExtMsg else language.Generic.Curriculum.kInvalidImportFileFormat)
						return false
							
				if options.customCheck then return options.customCheck()
				
					
				return true
			
			_datasubmit = null
			
			cancelBtn = (dialog) -> dialog.close()
			applyBtn = (dialog) ->
				extDeferred
					.when(_check)
					.then(->

						if options.preSubmit then  options.preSubmit()
						

						if options.isAjax
							_datasubmit.submit()
							$(document).trigger('showProcessing')
						else
							form = document.forms.selectFile
					
							if options.target
								form.target = options.target
								winOptions = { url: '/asp/blank.htm', name: options.target, specs: 'status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no, width=1200px, height=500px' }
								windowOpen( winOptions )
								wnd = winOptions.winChild
							else
								$(document).trigger('showProcessing')
					
							if options.handlerApplyBtn then options.handlerApplyBtn(wnd)
						
							_createHiddenField(form, 'VER', getVer())
							_createHiddenField(form, 'AT', strATTok)
					
							if options.submitParams
								for key of options.submitParams
									_createHiddenField(form, key, options.submitParams[key])
				
							if options.isHeavyAction
								heavyAction(
									() -> DoSubmit(form, options.url), 
									() -> wnd.close())
							else
								DoSubmit(form, options.url)
							dialog.close()
						return
					);
				
			content =	'{0}
						<form name="selectFile" method="post" enctype="multipart/form-data">
							{2}
							<div class="form-group">
								<div class="input-group">
									<span class="btn btn-primary btn-file input-group-addon">
										' + language.Generic.Common.kSelectFile + '<input type="file" name="file" id="fileupload">
									</span>
									<input type="text" class="form-control" disabled id="fileName">
								</div>
							</div>
							{1}
							<div class="alert alert-info" role="alert" style="display: none;" id="explanation"></div>
						</form>'
				
			content = content.replace('{0}', if typeof options.contentHtml isnt 'undefined' then options.contentHtml else "")
			content = content.replace('{1}', if typeof options.additionalContent isnt 'undefined' then options.additionalContent else "")
			content = content.replace('{2}', if typeof options.formAppendContent isnt 'undefined' then options.formAppendContent else "")
			
			$.show.dialog
				title: options.title
				message: content
				onshown: (dialog) ->
					$('input[name="file"]').on 'change', ->
						elements = this.value.split('\\')
						fileName = elements[elements.length - 1]
						
						$(this).parent().parent().find('#fileName').val(fileName).attr('title', fileName)
						
						if options.maxFileSize and this.files && this.files[0] && this.files[0].size > options.maxFileSize * 1024
							return alert(language.Generic.SetupSchoolPortfolio.kFileSizeCantBeGreaterThan + options.maxFileSize + ' KB')
					
					if options.content
						$('#explanation').show()
						$('#explanation').text(options.content)
						
					if options.onShownDlg
						options.onShownDlg()
					
					if options.isAjax
						$('#fileupload').bind 'fileuploadsubmit', (e, data) ->
							_params = 
								fileName: $('#fileName').val()
							
							if $('input[name="Separator"]').length
								_params.Separator = $('input[name="Separator"]').val()

							for formParam in $('form[name=selectFile]').find("input,select").serializeArray()
								if not options.submitParams?[formParam.name]
									_params[formParam.name] = formParam.value

							data.formData = $.extend({}, _params, options.submitParams)
							return

						queryStringParams = $.extend({}, {"_AJAXCALL_": 1}, options.queryStringParams)
						url = urlHelper.makeUrl options.url, queryStringParams

						$('#fileupload').fileupload
							url: url
							dataType: 'json'
							add: (e, data) -> _datasubmit = data
							done: (e, response) ->
								# в этом колбэке также добавлена обработка ошибок, так как при работе в Chrome 
								# response error также обрабатывается здесь, а не идет в fail (непонятная особенность)
								$(document).trigger('closeProcessing')
								if !response.result
									$.show.error(language.Generic.Common.kUnexpErr)
								else if response.result.isError
									$.show.error(response.result.message)
								else
									if options.handlerAjaxSuccess
										options.handlerAjaxSuccess(response.result)
									dialog.close()
									deferred.resolve(response.result)
							fail: (e, response) ->
								# response error в IE обрабатывается в этом колбэке
								$(document).trigger('closeProcessing')
								if response.jqXHR.status is 401
									authError = response.jqXHR.getResponseHeader("auth-error")
									if authError is 'SessionExpired'
										$.show.error(language.Generic.Common.kTimeOutOccured4Ajax ? "Ваш сеанс работы был завершен")
									else
										$.show.error(language.Generic.Common.kErrPageAccess ? "Ошибка доступа")
									return
								if response.jqXHR.responseJSON.isError || response.jqXHR.responseJSON.message
									$.show.error(response.jqXHR.responseJSON.message)

				buttons: [
					{ label: options.applyBtnText ? language.Generic.Common.kOk	, action: applyBtn }, 
					{ label: language.Generic.Buttons.kCancel, action: cancelBtn }
					]

			return deferred.promise()

		alert: (message, options) ->
			exists = false;
			#todo. реализовать отложенный показ
			$.each BootstrapDialog.dialogs, (id, dialog) -> 
				if !dialog.closing && dialog.isMessage then exists = true

			if exists
				deferredArgs.push(arguments);
				return;

			focusElement = null;

			if document.activeElement
				activeElementTagName = document.activeElement.tagName.toUpperCase()
				if activeElementTagName == "INPUT" or activeElementTagName == "SELECT"
					focusElement = document.activeElement;

			$.show.message(message, language.Generic.Common.kAttention, options)
				.then( (closeDlg) ->
					#помечаем закрывающийся диалог, чтобы
					#потом его исключить из общей коллекции диалогов для определения закрыты ли все алерты
					closeDlg.closing = true
				
					if focusElement
						setTimeout (() -> focusElement.focus()), 200

					if deferredArgs.length > 0
						$.show.alert.apply this, deferredArgs[0]
						deferredArgs.shift();
				)
				
		longWork: (message, title, settings, getProgress) ->
			settings = settings or {}

			if typeof (message) == 'undefined'
				$.show.error(opts.selfErrorText + ' "$.show.longWork"')
				return

			if typeof title is 'undefined' then title = language.Generic.Curriculum.kPleaseWait
				
			content = $("<div><div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' style='width: 1%'></div></div></div>")
			content.prepend("<span class='dialog-message'>" + message + "</span>")

			if settings.content 
				content.append settings.content

			progressBar = $(".progress-bar", content)

			if not getProgress
				getProgress = () ->
					current = progressBar.width() / progressBar.parent().width() * 100;
					incr = inc(current / 100) * 100 * 2
					current = current + incr
					return current

			setProgress = () ->
				current = getProgress()
				progressBar.css("width", current + "%")

			timer = null
			setTimeout () -> 
					timer = setInterval setProgress, 100
				, 200

			inc = (current) ->
				if current >= 1
					clearInterval timer
					return 0

				rnd = 0

				if current >= 0 && current < 0.25
					rnd = (Math.random() * (5 - 3 + 1) + 3) / 100		# Start out between 3 - 6% increments
				else if current >= 0.25 && current < 0.65
					rnd = (Math.random() * 3) / 100						# increment between 0 - 3%
				else if current >= 0.65 && current < 0.9
					rnd = Math.random() / 100							# increment between 0 - 1%
				else if current >= 0.9 && current < 0.99
					rnd = 0.001											# finally, increment it .1 %
				else
					clearInterval timer
					rnd = 0												# after 99%, don't increment:
				rnd

			

			options = $.extend({}
				, {
					message: content
					title: title
					closable: false
					closeByBackdrop: false
					closeByKeyboard: false
				}
				, settings
			)

			options.onshow = (dialog) -> 
				$('body').css("cursor","wait")
				if settings.onshow
					settings.onshow dialog
			
			options.onhide = (dialog) -> 
				clearInterval timer
				$('body').css("cursor","")

				if settings.onhide
					settings.onhide dialog

			BootstrapDialog.show options

		error: (message, title) ->
			$.show.message message, title or opts.errorTitle, {type: BootstrapDialog.TYPE_DANGER}
			
		success: (message, title) ->
			$.show.message message, title or opts.messageTitle, {type: BootstrapDialog.TYPE_SUCCESS}

		processing: (message, title) ->
			$.show.processing.current = $.show.longWork message ? opts.processingText, "<span class=\"glyphicon glyphicon-time\"></span> " + (title or opts.processingTitle)

		loading: ->
			$.show.loading.current = $.show.longWork opts.loadingText, opts.loadingText
			
		modelDialog: (parametrs) ->
			okButtonHanler = ->
			cancelButtonHandler = ->
		
			cancelButton = (dialog) -> 
				dialog.close()
				cancelButtonHandler dialog

			okButton = (dialog) ->
				okButtonHanler dialog

			tmp = Handlebars.compile parametrs.template
			content = tmp parametrs.model

			parametrs.message = content;
			parametrs.buttons = [
				{label: language.Generic.Buttons.kSave, action: okButton},
				{label: language.Generic.Buttons.kCancel , action: cancelButton}
				];

			promiseSubst =
				then: (okHandler, cancelHandler) ->
					okButtonHanler = okHandler
					cancelButtonHandler = cancelHandler if cancelHandler
					return
				done: (okHandler) ->
					okButtonHanler = okHandler
					return
				fail: (cancelHandler) ->
					cancelButtonHandler = cancelHandler
					return

			$.show.dialog parametrs
			promiseSubst

	opts = $.extend {}, $.show.defaults
	window.alert = $.show.alert
	##Инициализация обработчиков.
	##ВНИМАНИЕ: данная функция должна быть выполнена до первого броска event'а.
	$( ->
		$doc = $(document)
		$doc.bind 'showError', (event, data) -> $.show.error(data.message, data.onClose);
		$doc.bind 'showMessage', (event, data) -> $.show.message(data.message, data.title);
		$doc.bind 'showConfirmation', (event, data) -> $.show.confirmation(data.message, data.title, data.yesFunc, data.noFunc)
		$doc.bind 'showProcessing', (event, data) -> if !$.show.processing.current then $.show.processing();
		$doc.bind 'closeProcessing', (event, data) -> 
			if $.show.processing.current 
				$.show.processing.current.close()
				$.show.processing.current = null
		$doc.bind 'showLoading', (event, data) -> $.show.loading()
		$doc.bind 'closeLoading', (event, data) ->if $.show.processing.current then $.show.loading.current.close()
	)
	return

)(jQuery)
