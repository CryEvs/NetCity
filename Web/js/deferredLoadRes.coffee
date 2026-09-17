deferredResLoader = do () ->
	#define resource to load
	scriptsToLoad = []
	stylesToLoad = ["/static/dist/common/css/ext-styles.min.css"]
	head = document.getElementsByTagName("head")[0] or document.documentElement

	_allScriptLoadedDefer = $.Deferred()
	_allScriptLoadedPromise = _allScriptLoadedDefer.promise()

	scriptsAlreadyLoaded = 0
	onAllScriptsLoadedHandlers = []

	#базовый обработчик загрузки скрипта
	_baseLoadHandler = (src) -> 
		scriptsAlreadyLoaded = scriptsAlreadyLoaded + 1
		#console.log "loaded script -- #{src}. #{scriptsAlreadyLoaded}"
		if scriptsAlreadyLoaded == scriptsToLoad.length
			_allScriptLoadedDefer.resolve()
	
	#функция возвращающая прокси для внешнего обработчика
	_proxyLoadHandler = (handler) ->
		(src) ->
			if handler then handler src
			_baseLoadHandler src

	#функция загрузки css
	_loadStyleSheet = (src) ->
		src = getVersionedLink src
		if document.createStyleSheet
			document.createStyleSheet src
		else
			$("head").append $("<link rel='stylesheet' href='#{src}' type='text/css' media='screen' />")
	
	#функция загрузки скрипта
	_loadScript = (src, onLoadHandler) ->
		scriptLoadDeferred = $.Deferred()
		script = document.createElement("script")
		scriptUrl = getVersionedLink src
		script.src = scriptUrl
		script.async = false
		
		done = false
		
		afterLoad = ->
			if onLoadHandler 
				onLoadHandler src

			if head and script.parentNode
				head.removeChild script
				
		script.onload = ->
			if this.executed
				return
				
			this.executed = true
			afterLoad()
			scriptLoadDeferred.resolve()
		
		script.onreadystatechange = ->
			self = this
			
			if this.readyState == "complete" or this.readyState == "loaded"
				setTimeout( -> self.onload()
					, 
					0
				)

		head.insertBefore script, head.firstChild
		return scriptLoadDeferred.promise()

	#attach on window load event - deferred loading resources
	loadHandler = ->
		extScriptsFile = if appContext?.environment is "dev" then "/static/dist/common/js/ext-scripts.js" else "/static/dist/common/js/ext-scripts.min.js"
		scriptsToLoad.push src: extScriptsFile
		for src in stylesToLoad
			_loadStyleSheet src
		for info in scriptsToLoad
			info.handler = _proxyLoadHandler info.handler
			_loadScript info.src, info.handler

	if window.addEventListener
		window.addEventListener "load", loadHandler, false
	else if window.attachEvent
		window.attachEvent "onload", loadHandler
	else window.onload = loadHandler
	
	#public methods
	loadScript: (src, onScriptLoadHandler) ->
		scriptsToLoad.push {src: src, handler: onScriptLoadHandler}
	loadStyle: (src) ->
		stylesToLoad.push src
	loadJsScript: (src, onScriptLoadHandler) -> 
		_loadScript src, onScriptLoadHandler
	ready: (handler) ->
		_allScriptLoadedPromise.then handler
	promise: -> _allScriptLoadedPromise
