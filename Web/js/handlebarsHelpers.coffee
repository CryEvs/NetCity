# CoffeeScript
(() ->
	if typeof Handlebars == "undefined"
		return
	Handlebars.registerHelper('ifNull', (value, options) -> if value is null then options.fn(this) else options.inverse(this))
	Handlebars.registerHelper('ifNotNull', (value, options) -> if value isnt null then options.fn(this) else options.inverse(this))
	Handlebars.registerHelper('currentDate', (loginTime) ->
		loginTime = loginTime.substring(0, 19)
		time = dateUtils.castServerDateTimeToClient(loginTime)
		
		result = dateUtils.date2str(time) + " " + dateUtils.time2Str_ss(time)
	)
	
	Handlebars.registerHelper('date2str', (date) -> 
		if date is undefined or !date? then return ""
		if typeof date is 'string' then date = new Date date
		dateUtils.date2str date
	)
	Handlebars.registerHelper('uCase', (string) -> strCheckIsNull(string).toUpperCase())	
	Handlebars.registerHelper('lCase', (string) -> strCheckIsNull(string).toLowerCase())
	
	Handlebars.registerHelper('match', (value) -> value + 1)
	Handlebars.registerHelper('debug', (optionalValue) ->
		console.log("Current Context");
		console.log("====================");
		console.log(this);

		if optionalValue
			console.log("Value");
			console.log("====================");
			console.log(optionalValue);
	)
	
	Handlebars.registerHelper 'ifCond', (v1, operator, v2, options) ->
		switch operator
			when '==', '==='
				return if v1 is v2 then options.fn this else options.inverse this
			when '<'
				return if v1 < v2 then options.fn this else options.inverse this
			when '<='
				return if v1 <= v2 then options.fn this else options.inverse this
			when '>'
				return if v1 > v2 then options.fn this else options.inverse this
			when '>='
				return if v1 >= v2 then options.fn this else options.inverse this
			when '&&'
				return if v1 && v2 then options.fn this else options.inverse this
			when '||'
				return if v1 || v2 then options.fn this else options.inverse this
			else
				return options.inverse this
	
	Handlebars.registerHelper 'forLoop', (from, to, incr, block) ->
		accum = ''
		for i in [from..to] by incr
			accum += block.fn(i);
		accum

	return

).call(this)