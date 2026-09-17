# CoffeeScript
extDeferred = do ->
	handleDef = (condition) ->
		condition = condition() while typeof condition is 'function'
		if Array.isArray(condition) 
			condition = extDeferred.when(condition)
			
		if typeof condition is 'undefined' or typeof condition is 'boolean'
			internalDef = $.Deferred()
			if condition
				internalDef.resolve()
			else
				internalDef.reject()
			return internalDef.promise()

		condition
			
	wrapPromise : (promiseFunc, success, fail) ->
		() -> $.when(promiseFunc()).then(success, fail)

	wrapAlwaysPromise : (promiseFunc) -> 
		() -> 
			deferred = $.Deferred()
			funcResolve = -> deferred.resolve()
			extDeferred.wrapPromise(promiseFunc, funcResolve, funcResolve)()
			deferred.promise()
	resolve : ->
		deferred = $.Deferred()
		deferred.resolve()
		return deferred.promise()
	when : -> 
		deferred = $.Deferred()
		arrDeferred = arguments

		if arguments.length == 1 and typeof (arguments[0]) is 'object'
			arrDeferred = arguments[0]
		
		if arrDeferred.length == 0
			deferred.resolve()
			return deferred.promise()

		rejectFunc = ->
			deferred.reject()
			return
		successFunc = ->
			deferred.resolve()
			return

		recThen = (index) -> 
			nextDefFunc = -> handleDef(arrDeferred[index])
			if index < arrDeferred.length - 1
				() ->
					$.when(nextDefFunc()).then(recThen(index + 1), rejectFunc)
			else if index == arrDeferred.length - 1
				() -> 
					$.when(nextDefFunc()).then(successFunc, rejectFunc)
			else
				successFunc

		$.when(handleDef(arrDeferred[0])).then(recThen(1), rejectFunc)
		deferred.promise()