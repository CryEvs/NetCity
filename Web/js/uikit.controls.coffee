# CoffeeScript
(($) ->
	_prepareTitle = (title) ->
		child = $('span[class=text]', title)
		inputGroup = title.parent('.input-group')
		if inputGroup.length > 0
			inputWidth = child.width()
			btnWidth = inputGroup.find('.input-group-btn').width()
			width = inputWidth + btnWidth
			needWidth = inputGroup.parent().width()
		else
			needWidth = title.width()
			width = child.width()
		if needWidth <= width
			title.attr('data-original-title', child.text())
			title.popover
				placement : 'bottom',
				html: 'true', 
				trigger: "hover"
				
	$(document).ready () -> 
		$('span.form-control-title, span.form-control').each () -> _prepareTitle $(this)
	
	_noEnter = (input) -> 
		$(input).on('keypress': (e) ->
			e = e or window.event
			chr = String.fromCharCode e.charCode
			if e.keyCode is 13 
				return false
			)
		return
		
	$(document).ready () -> 
		$('form').each( ->
			$inputs = $(this).find('input[type="text"]')
			if $inputs.length is 1 then _noEnter($inputs)
		)
		
	$.uicontrols = 

		select: (options) ->
			control = $("<select></select>")
				.addClass("form-control")
				.attr("id", options.id)
				.attr("name", options.name)

			for item in options.items
				$("<option></option>")
					.val item.value
					.append item.title?.escapeHTML()
					.appendTo control

			return control


		#кнопка#
		button: (options) ->
			###возможные опции 
				id			- идентификатор кнопки
				size		- размер кнопки (btn-lg, btn-sm, btn-xs и по умолчанию)
				type		- btn-primary, btn-default
				icon		- иконка кнопки
				label		- текст кнопки
				name		- наименование кнопки
				title		- всплывающий текст при наведении на кнопку
				click		- обработчик события click
			###
			defOptions = 
				type: 'btn-default'
			
			options = $.extend({}, defOptions, options)
				
			button = $('<button></button>')
						.addClass('btn')
						.addClass(options.type)
						.attr('type', 'button')
						
			if options.size then button.addClass(options.size)
			if options.icon then button.append($('<span></span>').addClass('glyphicon glyphicon-' + options.icon))
			if options.id then button.attr('id', options.id)
			if options.label then button.append(' ' + options.label)
			if options.name then button.attr('name', options.name)
			if options.title then button.attr('title', options.title)

			if typeof options.click == 'function'
				button.on('click', options.click)
			else if typeof options.click == 'string'
				button.attr('onclick',options.click )
			
			return button
			
		linkButton: (options) ->
			### options - массив, где
				id			- идентификатор кнопки
				classButton	- класс
				title		- всплывающий текст при наведении на кнопку
				icon			- иконка кнопки
				click		- обработчик события click
			###
			divButtons = $('<div></div>')
			
			for option in options
				linkButton = $('<a></a>')
				if option.classButton then linkButton.addClass(option.classButton)
				if option.title then linkButton.attr('title', option.title)
				if options.id then linkButton.attr('id', options.id)
				if option.icon then linkButton.append($('<span></span>').addClass('glyphicon ' + option.icon))
				if option.click then linkButton.attr('href', option.click)
				divButtons.append(linkButton)
			
			return divButtons
			
		#заголовочный инпут#
		title: (text) ->
			control = $("<span></span>")
				.addClass "form-control"
				.addClass "form-control-title"

			$("<span></span>")
				.addClass "text"
				.append text 
				.appendTo control

			setTimeout( 
				-> _prepareTitle(control), 
				500)
			
			return control

		#заголовочный инпут#
		info: (html) ->
			control = $("<div></div>")
				.addClass "alert"
				.addClass "alert-info"
				.attr "role", "alert"
				.html html

			return control
	
	#select с подгрузкой значений асинхронным запросом с возможностью поиска по символам
	jQuery.fn.ajaxSelect = () ->		
		this.selectpicker(
				liveSearch: true
			)
			.ajaxSelectPicker(
				ajax: 
					data: () ->
						query: $('.bs-searchbox input').val()
						AT: strATTok
					type: 'GET'
				preprocessData: (response) ->
					#если требуется кастомная обработка полученных данных с сервера, то необходимо на странице определить 
					#customHandler функцию с входящим параметром response
					if typeof customHandler isnt 'undefined'
						customHandler(response)
						return
					
					values = []

					_.each(response.data.values, (value) ->
						values.push(
							'value': value.id
							'text': value.name
							'disable': false
						)
						return
					)
					
					return values
				preserveSelected: false
				requestDelay: 1000
			)
		return
	
	jQuery.fn.inputRules = do () ->
		
		inputRules =
			inputNum: (options) ->
				defRules = {
					minVal: 0.01,
					maxVal: null,
					allowFractional: true
				}
				
				settings = $.extend(defRules, options);
			

				$(this, 'input').on('keypress': (e) ->
					e = e or window.event
					chr = String.fromCharCode e.charCode
					if e.keyCode in [8,9,37,39,46] and (chr != ".")
						# tab, backspace, delete
						return true
					if "1234567890".indexOf(chr) > -1
						return true
					if settings.allowFractional and ".,".indexOf(chr) > -1 and not(/[.,]/.test(this.value))
						return true
					return false
					
					).blur ->
						control = $(this)
						# минимальное значение
						min = parseFloat(settings.minVal)
							
						# введенное значение
						value = parseFloat(control.val().replace(',', '.'))
						if isNaN(value) or value == 0
							control.val ''
							control.change()
							if (!this.wasChanged())
								window.dataWereChanged = false;
							return
							
						if settings.maxVal
							max = parseFloat(settings.maxVal)
							if value > max
								control.val ''
								control.change()
								window.dataWereChanged = false;
								return focusAlert control, language.Generic.Common.kMaxInput + max
						
						if value < min
							control.val ''
							control.change()
							window.dataWereChanged = false;
							focusAlert control, language.Generic.Common.kMinInput + min
						else
							res = value.toString().replace('.', ',')
							control.val res
				return
	
		return (rules) ->
			if inputRules[rules]
				return inputRules[ rules ].apply( this, Array.prototype.slice.call( arguments, 1 ));
			else
				$.error( 'Метод с именем ' +  rules + ' не существует для jQuery.inputRules' )
			return

	return
)(jQuery)