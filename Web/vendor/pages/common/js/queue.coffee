taskQueue = do () ->

	getTemplate = $.ajax
		url: '/vendor/pages/templates/queueTasks.html'
		dataType: 'html'

	prepareHub = (progressHandler, completeHandler, errorHandler) ->
		connDeferr = $.Deferred()

		if connectionInfo and connectionInfo.queueHub
			console.log("connection is ready")
			connDeferr.resolve connectionInfo
			return connDeferr.promise()
				
		connectionInfo =
			connection: $.connection.hub,
			queueHub: $.connection.queueHub

		connectionInfo.connection.qs = { "at" : appContext.at }

		connectionInfo.queueHub.client.progress = (data) ->
			console.log("progress")
			progressHandler(data)
			
		connectionInfo.queueHub.client.complete = (data) ->
			console.log("complete")
			completeHandler(data)
			connectionInfo.queueHub = null
			connectionInfo.connection.stop()

		connectionInfo.queueHub.client.error = (data) ->
			console.log("error")
			errorHandler(data)
			connectionInfo.queueHub = null
			connectionInfo.connection.stop()

		connectionInfo.connection.start()
			.done () ->
				console.log("connection started")
				connDeferr.resolve(connectionInfo)
			.fail () ->
				console.log("connection start fail")
				connectionInfo = null
				connDeferr.reject("Ошибка соединения с сервером")

		return connDeferr.promise()

	#выполнение задачи в очереди обработки
	execute: (opt) ->
		defOpts = 
			getTaskFunc: null
			closeOnStart: false
			hint: ""
			userErrorHandler: null
			userCloseHandler: null
		
		opts = $.extend {}, defOpts, opt
		
		workDefer = $.Deferred()

		ctx =
			taskId: null
			error: false
			progress: false
			connectionInfo: null

		dialogShowed = $.Deferred()
	
		dialogSettings = 
			closable: true
			closeByBackdrop: true
			closeByKeyboard: true
			buttons: [{
				id: 'queue-task-btn-close'
				cssClass: 'btn-primary hide'
				label: "Закрыть"
				hotkey: 13
				icon: "glyphicon glyphicon-ok-sign"
				action: (dialog) ->	
					dialog.close()
			}]
			onshown: () -> dialogShowed.resolve()
			onhide: () ->
				if !ctx.taskId && !ctx.error
					return false
				if !ctx.connectionInfo
					return false
				ctx.connectionInfo.queueHub = null
				if !ctx.connectionInfo.connection
					return false
				ctx.connectionInfo.connection.stop()
				if ctx.taskId && !ctx.error && opts.userCloseHandler
					opts.userCloseHandler()
		if opts.hint 
			dialogSettings.content = "<div id='queue-task-hint' class='alert alert-danger hide' role='alert'><strong>Внимание!</strong> #{opts.hint} </div>"
		
		processingDialog = $.show.longWork(
			"Постановка в очередь обработки"
			, "Подождите"
			, dialogSettings
		)

		setProgress = (progressText) ->
			console.log progressText
			$("div.bootstrap-dialog-message span.dialog-message").text(progressText)

		onProgress = (progressInfo) ->
			ctx.progress = true
			setProgress(progressInfo.Status)

		onComplete = (completeInfo) ->
			processingDialog.close()
			workDefer.resolve(completeInfo.Data)

		onErrorCommon = (errorInfo) ->
			ctx.error = true
			processingDialog.close()
			console.log(errorInfo)

		onError = (errorInfo) ->
			onErrorCommon(errorInfo)
			errMessage = errorInfo.Details or language.Generic.Common.kUnexpErr
			$.show.error(errMessage)
			workDefer.reject errMessage

		onErrorUser = (errorInfo) ->
			onErrorCommon(errorInfo)
			errMessage = errorInfo.Details or language.Generic.Common.kUnexpErr
			if !opts.userErrorHandler
				$.show.error(errMessage)
			else
				opts.userErrorHandler(errMessage)
			workDefer.reject errMessage

		prepareHub(onProgress, onComplete, onErrorUser)
			.fail onError
			.then (connectionInfo) ->
				ctx.connectionInfo = connectionInfo
				dialogShowed.then () ->
					opts.getTaskFunc()
					.fail () ->
						ctx.error = true
						processingDialog.close()
						workDefer.reject()
					.then (enqueueInfo) ->
						taskId = enqueueInfo.taskId or enqueueInfo
						activeConnectionTask = enqueueInfo.activeConnectionExec
						console.log("Успешно создана задача " + taskId)
						connectionInfo.queueHub.server.startTask(taskId)
							.done () ->
								console.log("Успешно запущена в обработку задача " + taskId)
								if not enqueueInfo.activeConnectionExec
									$("#queue-task-btn-close").removeClass "hide"
									$("#queue-task-hint").removeClass "hide"
								else
									##замена кнопки "закрыть" на "отмена"
									$("#queue-task-btn-close")
										.removeClass("hide")
										.removeClass("btn-primary").empty()
										.append("<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-ban-circle\"></span>" + language.Generic.Buttons.kCancel)

								ctx.taskId = taskId;

								if opts.closeOnStart
									connectionInfo.connection.stop()
									$.show.message "Отчет поставлен в очередь на обработку. \n Результат выполнения придет Вам на внутреннюю почту."
									processingDialog.close()
									return
								
								if not ctx.progress
									setProgress("В очереди обработки")
							.fail onError

		return workDefer.promise()

	showQueuedTasks: () ->
		ctrl = this
		jsSubmit
			action: "/webapi/queue/tasks"
			method: "GET"
			showProcessing: true
			onSuccess: (tasks) ->
				model = 
					tasks: tasks
					language: language

				getTemplate.then (html) ->
					compiledTpl = Handlebars.compile html
				
					if model.tasks.length
						message = compiledTpl model
					else
						message = language.Movement.kMsgNoActiveQueuedImportProcesses

					$.show.dialog
						title: language.Generic.Movement.kQueuedImportProcesses
						size: BootstrapDialog.SIZE_WIDE
						message: message
						buttons: [
							{
								label: language.Generic.Buttons.kRefresh
								action: (dialog) ->
									dialog.successClose()
									ctrl.showQueuedTasks()
							},
							{
								label: language.Generic.Calendar.kClose
								action: (dialog) -> dialog.close()
							},
						]


#для поддержки js модульности
((exp, name) ->

	exported = false
	if module?.exports
		module.exports = exp
		exported = true

	if !(exports is undefined)
		exports = exp
		exported = true

	if !exported and typeof window != 'undefined' and typeof name != "undefined"
		window[name] = exp

	if typeof root != 'undefined' and typeof (name) != "undefined"
		root[name] = exp
)(taskQueue, "taskQueue")   						
