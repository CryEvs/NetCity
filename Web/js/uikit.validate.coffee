uikitValidation = (($) ->
	#Инициализация настроек отображения ошибок валидации по умолчанию
	#С учетом шаблона верстки bootstrap
	self = this

	fixDateInputs = (validator, dateInput, element) ->
		validator.dateInputs = validator.dateInputs or {}
		
		#если данные календарь уже обработан - то выходим
		if validator.dateInputs[element.name]
			return 
		
		#добавляем процедуру перевалидации формы при смене даты
		dateInput.on 'changeDate', () ->
			if Event.type is "keyup"
				#не обрабатываем события ввода с клавиатуры - в противном случае преждевременно теряется фокус
				return
			input = $(this).find('.date-input')
			input.validate().resetForm()
			input.trigger('blur')

		#устанавливаем признак того, что поле уже обработано
		validator.dateInputs[element.name] = true

	options =
		highlight: (element) ->
			$(element).closest('.form-group').addClass('has-error')

			dateInput = $(element).closest(".input-group.date")
			if dateInput.length
				fixDateInputs this, dateInput, element

		unhighlight: (element) ->
			formGroup = $(element).closest('.form-group')
			
			helpBlocks = formGroup.find('[id*="-error"]:visible')
			
			if helpBlocks.length == 0
				$(element).closest('.form-group').removeClass('has-error')
				
		errorElement: "span"
		errorClass: "help-block"
		errorPlacement: (error, element) ->
			$element = $(element)
			elementName = $element.attr('name')
			
			if self.customOptions and self.customOptions[elementName] and self.customOptions[elementName].errorPlacement
				return self.customOptions[elementName].errorPlacement(error, element)
			
			$elementParent = $element.parent()
			
			if $elementParent.is('.input-group')
				error.insertAfter($elementParent)
			else
				error.insertAfter(element)

	$.validator.setDefaults(options)
	
	$.validator.addMethod('permissibleLength', (value, element, params) ->
		return !value or _.some(params, (length) -> return value.length == length)
	)
	
	$.validator.addMethod('pattern', (value, element, pattern) -> return @optional(element) or pattern.test(value))
	
	$.validator.addMethod('selectRequired', (value, element) -> return value != '-1')
	
	$.validator.addMethod('validDate', 
		(value, element) ->  return !value or str2date(value), 
		language.Generic.Common.kErrInvalidDate
	)
	
	$.validator.addMethod('dependLists', 
		(value, element, params) -> 
			# params.dependsField - поле, от значения которого зависят значения текущего
			
			dependsFieldElementVal = $(params.dependsField.selector).val()
			
			# наличие ограничений для текущего значения dependsField
			matches = params.matchesDictionary[dependsFieldElementVal]
			
			if !matches
				return true
			
			# если есть ограничения, то проверить, удовлетворяет ли выбранное значение текущего поля
			return matches.indexOf(parseInt(value)) > -1
		, 
		(params) ->
			dependsField = params.dependsField
			
			element = $(dependsField.selector)
			dependsFieldElementVal = element.val()
			
			# получить название выбранного значения в списке dependsField
			text = element.find(':selected').text()
			
			# получить список разрешенных значений
			itemIds = params.matchesDictionary[dependsFieldElementVal]
			
			# получить options у контрола
			itemOpts = arguments[1].childNodes
			itemDct = { }
			
			# сформировать словарь с элементами {value: text}
			for itemOpt in itemOpts
				itemDct[itemOpt.value] = itemOpt.text
			
			# преобразовать в текстовый вид
			str = 'Для поля "' + dependsField.fieldName + '" со значением "' + text + '" разрешены следующие значения текущего поля: <ul>'
			
			for itemId in itemIds
				str += '<li>' + itemDct[itemId] + '</li>'
			
			return str + '</ul>'
	)

	$.validator.addMethod('dependElements', 
		(value, element, params) -> 
			dependFunc = params.dependFunc
			
			if !dependFunc
				return true

			return dependFunc()
		,
		(params) ->
			return params.message
	)
	
	$.validator.addMethod('dependsLength', 
		(value, element, params) -> 
			dependsField = params.dependsField
			
			#получить значение поля, от которого зависит длина текущего
			dependsFieldElementVal = dependsField.element.val()
			
			#длина значения
			valueLength = dependsFieldElementVal.length
			
			#если поле пустое, то не валидируем
			if !valueLength
				return true
			
			#получить требуемую длину значения текущего поля
			parity = params.lengths[valueLength.toString()]
			
			#сравнить с текущей длиной
			return typeof parity is 'undefined' or parity == value.length
		, 
		(params) ->
			dependsField = params.dependsField
			dependsFieldElementVal = dependsField.element.val()
			valueLength = dependsFieldElementVal.length
			
			parity = params.lengths[valueLength.toString()]
			
			subText = 'символ'
			if valueLength > 1 and valueLength < 5
				subText = 'символа'
			else if valueLength > 4
				subText = 'символов'
			
			if parity == 0
				return $.validator.format('Для поля {0} длиной {1} {2} данное поле заполнять не нужно', [dependsField.fieldName, valueLength.toString(), subText])
			
			return $.validator.format('Для поля {0} длиной {1} {2} длина данного поля должна быть равна {3} символам', [dependsField.fieldName, valueLength.toString(), subText, parity])
	)
	
	return this
)(jQuery)
