dateInput = do () ->
	limits = 
		min: new Date(1753,0,1)		#минимальная дата в sql
		max: new Date(2100, 11, 31) #ввод в системе даты позже теряет всякий смысл 
	
	showDateErrorMsg = (startDate, endDate) ->
		if startDate
			if !endDate
				msg = language.Generic.Common.kErrInvalidStartDate
			else if endDate
				msg = language.Generic.Common.kErrInvalidEndDate
				
			msg += "\n" + language.Generic.Common.kStartEndDatesInCurrYear
		else
			msg = language.Generic.Common.kDateMustBeInCurrYear

		$.show.error msg 

	class calendar
		constructor: (@holidays, @vacations, @disabledDates, @disabledTooltip) ->
		
		checkEvents = (date, events) ->
			_.some(events, (event) -> return event.startDate <= date and event.endDate >= date)
		
		styleDay: (date) ->
			styleSettings =
				classes: ""
				enabled: true
				tooltip: ""
				
			if checkEvents date, @holidays
				styleSettings.classes += " holiday-day"
			if checkEvents date, @vacations
				styleSettings.classes += " vacation-day"
			if @disabledDates and @disabledDates.length > 0
				if _.some(@disabledDates, (disabledDate) -> disabledDate.equals date)
					styleSettings.enabled = false
					styleSettings.tooltip = @disabledTooltip
			styleSettings
	
	prepareCalendar = (calendarStartDate, calendarEndDate, disabledDates, disabledTooltip, calendarContext) ->
		deferred = $.Deferred()

		if not appContext.yearId
			deferred.resolve new calendar([], [], [], "")
			return deferred.promise()
		
		data =
			yearId: appContext.yearId
			startDate: if calendarStartDate then dateUtils.date2str calendarStartDate else ""
			endDate: if calendarEndDate then dateUtils.date2str calendarEndDate else ""
			
		data = $.extend data, calendarContext

		jsSubmit
			data: data
			action: "/webapi/calendar"
			method: "GET"
		.then (response) ->
			holidays = _.map response.holidays, (holiday) ->
				startDate: new Date(holiday.startDate)
				endDate: new Date(holiday.endDate)
			vacations = _.map response.vacations, (vacation) ->
				startDate: new Date(vacation.startDate)
				endDate: new Date(vacation.endDate)
						
			preparedCalendar = new calendar(holidays, vacations, disabledDates, disabledTooltip)
			deferred.resolve preparedCalendar

		deferred.promise()

	#обработчик изменения даты. общий на все календари
	onChangeHandler = () ->
		dataChanged()

	return {
		#функция инициализации поля для ввода даты
		initDateInput: (jqElement, calendarMinDate, calendarMaxDate, calendarSettings, datePickerOptions, noChangeData) ->
			currentCalendar = null
			initingCalendar = false

			options =
				autoclose: true,
				format: dateUtils.getDateFormat().format
				language: "ru"
				forceParse: false
				keyboardNavigation: false
				calendarWeeks: true
				beforeShowDay: (date) ->
					if not currentCalendar
						return true
					
					currentCalendar.styleDay date
					
			if typeof datePickerOptions isnt "undefined"
				$.extend(options, datePickerOptions)

			if calendarMinDate
				options.startDate = calendarMinDate
				
			if calendarMaxDate
				options.endDate = calendarMaxDate

			initingCalendar = true
			jqElement.prop("initingCalendar", true) 

			onShow = (e) ->
				if currentCalendar
					return

				if not calendarSettings
					calendarSettings = {}

				prepareCalendar(calendarMinDate, calendarMaxDate, calendarSettings.disabledDates, calendarSettings.disabledTooltip, calendarSettings.context)
					.then (calendar) ->
						currentCalendar = calendar
						jqElement.datepicker('update')
						
			onChangeDateInput = () ->
				if initingCalendar || noChangeData
					return
				onChangeHandler.apply this, arguments

			jqElement.datepicker(options)
				.on("changeDate", onChangeDateInput)
				.on("show", onShow)
			
			jqElement.each (ind, inputGroupElem) ->
				inputGroup = $(inputGroupElem)
				currDate = $("input[type='text']", inputGroup).val()
				if !currDate
					return
				normalizedDate = dateUtils.str2date currDate
				#inputGroup.datepicker("setDate", normalizedDate);

			releaseIniting = () -> 
				initingCalendar = false
				jqElement.prop("initingCalendar", false) 

			setTimeout releaseIniting, 50
		
		#функция инициализации всех полей для ввода даты
		initDateInputs: (calendarMinDate, calendarMaxDate, calendarSettings, datePickerOptions) ->
			this.initDateInput $(".input-group.date"), calendarMinDate, calendarMaxDate, calendarSettings, datePickerOptions
		
		setStartDate: (jqElement, startDate) ->
			jqElement.datepicker('setStartDate', startDate)
			return

		setEndDate: (jqElement, endDate) ->
			jqElement.datepicker('setEndDate', endDate)
			return

		#установка кастомного обработчика изменения даты
		onChange: (handler) ->
			onChangeHandler = handler

		getDateInputVal: (inputName) ->
			el = $("input[name='" + inputName + "']")
			el.val(trimStr(el.val()))
			el.val()

		getDateInputDate : (inputName) ->
			strVal = dateInput.getDateInputVal(inputName)
			if !strVal or strVal.length == 0
				return null
			dateUtils.str2date(strVal)
			
		getDateFilterInfo: (fieldName) ->
			elem = $("input[name='" + fieldName + "']")
	
			if elem.length == 0
				return null

			get_val = () -> 
				elem.val()
			get_date = () -> 
				val = get_val()
				dateUtils.str2date val
			
			return {
				element : elem,
				val: () -> get_val()
				date: () -> get_date()
				check: (message, required) ->
					if not get_val()
						if not required
							return true
						focusError( elem, message || language.Generic.Common.kErrInvalidDateNotEmpty)
						return false
					date = get_date()
					if date == null or date < limits.min or date > limits.max
						focusError( elem, message || language.Generic.Common.kErrInvalidDate)
						return false
					return true
				checkDateInterval: (minDate, maxDate, message, optional) ->
					checkDate = get_date()
					if checkDate == null
						if optional
							return true
						focusError( elem, message || language.Generic.Common.kErrInvalidDateNotEmpty)
						return false

					if checkDate < minDate or checkDate > maxDate
						if message
							focusError( elem, message)
						else
							showDateErrorMsg minDate, maxDate
						return false
					return true
			}

		checkDateInterval: (fieldName, minDate, maxDate) ->
			checkDate = getDateInputDate(fieldName)
			if !checkDate
				return true

			if checkDate < minDate
				showDateErrorMsg( minDate, maxDate)
				return false
				
			else if checkDate > maxDate
				showDateErrorMsg( minDate, maxDate)
				return false
			return true
	}
