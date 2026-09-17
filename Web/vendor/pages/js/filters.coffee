fpStatus = {
	init: "init",
	emptyChoice: "emptyChoice",
	ready: "ready"
}

#фильтр-панель
class filterPanel
	template = '<div class="filters-panel form-horizontal"></div>'
		
	constructor: (@container, @model, @sources, @filterPanelHandlers, @buttonsPanel, @listContainer, lazyInit, @checkChanges, @filterSize) ->
		@filters = []
		@handlers_ready = []
		@handlers_init = []
		@handlers_emptyChoice = []

		@filterSize = @filterSize or {}
		@filterSize.label = @filterSize.label or "control-label col-md-4 col-lg-3 col-sm-4"
		@filterSize.control = @filterSize.control or "col-md-8 col-lg-5 col-sm-8"
		
		if @buttonsPanel
			#если на вход подается элемен кнопочная панель - то прячем ее до момента готовности фильтр панели
			@handlers_init.push => 
				@buttonsPanel.hide()
				if @listContainer
					@listContainer.html '<div class="col-md-12 alert alert-info" role="alert">' + language.Generic.Movement.kMsgApplyBtnClick + '</div>'

			@handlers_ready.push => 
				@buttonsPanel.show()
				if window.buttonsPanelCtrl
					do window.buttonsPanelCtrl.init
			@handlers_emptyChoice.push => 
				@buttonsPanel.hide()
				if @listContainer
					@listContainer.html '<div class="col-md-12 alert alert-danger" role="alert">' + language.Generic.Movement.kMsgNoChoice + '</div>'
				return

		if @container.hasClass "filters-panel"
			@panel = @container
		else
			@panel = $(template)
			@container.append @panel

		if not lazyInit
			do @initPanel

	initPanel: () ->
		#инициализация фильтр-панели
		@changeStatus fpStatus.init

		if @model == null
			$.show.error "Ошибка инициализации фильтр-панели. Модель не заполнена."
			return

		for filterModel in _.sortBy(@model.filters, (item) -> item.order)
			active = true
			filterSource = _.findWhere @sources, {filterId: filterModel.id}
			if not filterSource
				active = false

			filterCtrl = null

			ctor = null
			#опеределяем соответствие FilterType - конструктор для фильтра
			switch filterModel.filterType
				when "List2"
					ctor = listFilter2
				when "List"
					ctor = listFilter
				when "ListWithArrows"
					ctor = listWithArrowsFilter
				when "DateRange"
					ctor = dateRangeFilter
				when "Date"
					ctor = dateFilter
				when "Checks2"
					ctor = checksFilter2
				when "Checks"
					ctor = checksFilter
				when "ListRange"
					ctor = listRangeFilter
				when "Text"
					ctor = textFilter
				else 
					$.show.error "Ошибка инициализации фильтр-панели. Неподдерживаемый тип фильтра #{filterModel.filterType}"
					return

			#построение фильтра
			filterCtrl = new ctor(this, filterModel)

			#определение статуса фильтра согласно условий его показа
			if filterModel.dependencies
				satisfied = do filterModel.control.dependenciesSatisfied
				if not satisfied
					active = false

			if filterSource
				filterCtrl.setSource filterSource

			@setFilterStatus(filterCtrl)

			#добавления фильтра в панель
			@filters.push filterCtrl
			if not active
				filterCtrl.changeStatus "inactive"
			filterCtrl.appendToPanel @panel

		@panel.find(".form-group.aux").insertAfter @panel.find('.form-group:last-child')

		#сигнализируем о завершении выбора
		@tryReady()
	
	#попытка установить статус ready
	tryReady: () ->
		if !@checkEmptyChoice()
			@changeStatus fpStatus.ready
	
	#изменение статуса
	changeStatus: (status) ->
		console.log status
		@panel.removeClass @status
		@status = status
		@panel.addClass @status
		if @status == fpStatus.ready
			fpValues = @getValues()
			for handler in @handlers_ready
				handler fpValues
		if @status == fpStatus.init
			for handler in @handlers_init
				do handler
		if @status == fpStatus.emptyChoice
			emptyChoiceFilter = _.find(@filters, (ft) -> ft.getStatus() == "emptyChoice" )
			for handler in @handlers_emptyChoice
				handler(emptyChoiceFilter)

	# изменяет статус фильтра
	setFilterStatus: (filterCtrl) ->
		if filterCtrl.emptyChoice
			if filterCtrl.model.optionalFlag
				filterCtrl.changeStatus "inactive"
			else
				filterCtrl.changeStatus "emptyChoice"
		else
			filterCtrl.changeStatus "active"

	#получение текущих значений фильтра в виде объекта {<filterId>: <filterVal>}
	getValues: (excludeFilters) ->
		values = {}
		activeFilters = _.filter(@filters, (ft) -> ft.getStatus() == "active" )
		if excludeFilters
			activeFilters = _.difference activeFilters, excludeFilters

		keyValues = _.map(activeFilters, (x) -> [x.id, x.getChoice()])
		values = _.object keyValues
		values

	#получение текущих значений фильтра в виде массива объектов [{filterId: <id>, filterVal: <val>}, ...]
	getCtxValues: (excludeFilters) ->
		activeFilters = _.filter(@filters, (ft) -> ft.getStatus() == "active")
		if excludeFilters
			activeFilters = _.difference activeFilters, excludeFilters
		_.map(activeFilters, (x) -> {filterId: x.id, filterValue: x.getChoice(), filterText: x.getChoiceText()})

	#получение текущих подписей/текстовых представлений фильтров в виде объекта  {<filterId>: <filterText>}
	getTexts: (forFilters) ->
		texts = {}
		filters = _.filter(@filters, (ft) -> ft.getStatus() == "active")

		if forFilters
			filters = _.filter(filters, (ft) -> _.contains(forFilters, ft.id))

		keyValues = _.map(filters, (x) -> [x.id, x.getChoiceText()])
		texts = _.object keyValues
		texts

	checkChoiceEnabling: () ->
		_.find(@filters, (ft) -> ft.getChoiceEnabling())

	checkEmptyChoice: () -> 
		for emptyFilter in (_.filter(@filters, (item) -> item.getStatus() == "active" || item.getStatus() == "emptyChoice"))
			if emptyFilter.emptyChoice && !emptyFilter.model.OptionalFlag
				@changeStatus fpStatus.emptyChoice
				return true
		return false
	
	#обработчик изменений значений в фильтре
	changedValue: (filter, value, prevValue) ->
		console.log "#{filter.id} = #{value}"

		if @status == fpStatus.init
			return

		preSendActionsPromise = true
		if @checkChanges
			preSendActionsPromise = window.checkForChanges

		extDeferred.when preSendActionsPromise
		.then () =>
			@changeStatus fpStatus.init

			dependentFilters = filter.getDependency()

			#подготовка запроса на получение значений фильтров
			vals = @getValues(dependentFilters)
		
			ctx = 
				selectedData: []
			
			for id, val of vals
				ctx.selectedData.push 
					filterId: id
					filterValue: val 
	
			nextFilters = _.chain(@filters)
				.sortBy (ft) -> ft.model.order
				.filter (ft) -> ft.model.order > filter.model.order
				.value()

			#поиск последующих фильтров. если их нет - то и нет необходимости обращения к серверу
			existNextFilter = false
		
			if !nextFilters
				@checkEmptyChoice()

			for nextFilter in nextFilters
				if not nextFilter.model.dependencies
					existNextFilter = true
					continue
				if not nextFilter.dependenciesSatisfied()
					nextFilter.changeStatus "inactive"
					continue
				existNextFilter = true

			requestOptions = 
				action: @filterPanelHandlers
				dataType: "json"
				contentType: 'application/json'
				forceData: JSON.stringify ctx
				showProcessing: dependentFilters.length or existNextFilter #показываем процессинг если есть зависящие фильтры, или последующие
				method: "post"

			if (!dependentFilters.length or !existNextFilter)
				#нет последующих безусловно показываемых или зависимых фильтров от данного.
				@tryReady()

				if filter.existStateProvider
					#если есть провайдер состояния - то делаем фоновый запрос для отправки текущего состояния
					requestOptions.showProcessing = false
					jsSubmit requestOptions 
				return

			#отправка запроса серверу на получение значений последующих фильтров
			jsSubmit requestOptions
			.fail (xhr) =>
				@changeStatus fpStatus.emptyChoice 
				for dependFilter in dependentFilters
					dependFilter.changeStatus "inactive"
			.then (response) =>
				for filterSrc in response
					filterCtrl = _.find dependentFilters, (ft) -> ft.id == filterSrc.filterId and (not ft.model.dependencies or ft.dependenciesSatisfied())

					if !filterCtrl
						continue

					#установка значений
					filterCtrl.setSource filterSrc
					@setFilterStatus(filterCtrl)
					#break

				vals = do @getValues
				for filterCtrl in nextFilters
					if filterCtrl.model.dependencies
						satisfied = do filterCtrl.dependenciesSatisfied
						if not satisfied
							filterCtrl.changeStatus "inactive"

				@tryReady()

	#обработчик выбора значения в фильтре
	choiceOnFilter: (filterId, val) ->

	#обработчик завершения выбора (т.е. выбраны все фильтры)
	choiceComplete: () ->

	#обработчик процесса выбора (т.е. выбраны не все фильтры)
	choiceInProgress: () ->
	
	# проверка валидности фильтров в панели
	validate: ->
		isValid = true
		
		_.each(this.filters, (filter) ->
			if filter.getStatus() != "active"
				return
				
			if !filter.validate
				return
			
			if !filter.validate()
				isValid = false
				return
		)
		
		return isValid

	#обработчик готовности панели
	ready: (handler) ->
		@handlers_ready.push handler

	#обработчик события подготовки панели
	init: (handler) ->
		@handlers_init.push handler

	#обработчик события пустого выбора
	emptyChoice: (handler) ->
		@handlers_emptyChoice.push handler

#класс отвечающий за проверку удовлетворения зависимостей для текущих значений фильтра
class dependencyTracker 
	constructor: (@dependencies) ->

	checkDependency: (vals, dep) ->
		relObject = dep.relatedObject
		if relObject.type == "Param" 
			return true
							
		if relObject.type != "Filter"
			$.show.error "Неизвестный тип зависимости для фильтра"
			return false

		relFilterValue = vals[relObject.ref] 

		if typeof relFilterValue == 'undefined' or relFilterValue == null
			return false
							
		switch dep.condition
			when "Equals"
				relFilterValue == dep.relatedValue
			when "Greater"
				relFilterValue > dep.relatedValue
			when "Less"
				relFilterValue < dep.relatedValue
			when "NotEquals"
				relFilterValue != dep.relatedValue
			when "Any"
				true
			when "NotContains"
				typeof relFilterValue == 'string' and relFilterValue.toString().indexOf(dep.relatedValue) < 0
			when "Contains"
				typeof relFilterValue == 'string' and relFilterValue.toString().indexOf(dep.relatedValue) >= 0
			when "In"
				arrValue = JSON.parse dep.relatedValue
				if not Array.isArray(arrValue)
					return false
				return _.some(arrValue, (v) -> v == relFilterValue)
			else
				false

	isSatisfied: (vals) -> 
		_.every(@dependencies, (dep) => @checkDependency(vals, dep))
		

#базовый класс - фильтр
class filter
	constructor: (@panel, @model) ->
		@id = @model.id
		@emptyChoice = false
		@childFilters = []
		@filterRow = null
		@choice = null
		@control = @control ? null
		@status = @status ? null
		@choiceEnabling = true
		@existStateProvider = @model.existStateProvider

		@model.control = this

		filterSize = @panel.filterSize
		label = "<label class=\"" + filterSize.label + "\">{{{title}}}</label>" 
		control = "<div class=\"" + filterSize.control + "\">"

		template = Handlebars.compile(
			'<div class="form-group">' +
				label +
				control +
					'<div id="filter-control"></div>
				</div>
			</div>')

		titleInfo = @model.title
		html = template {title: titleInfo}
		@filterRow = $(html)
		@filterRow.find("#filter-control").replaceWith @control

	appendToPanel: (panel) ->
		panel.append @filterRow

	#protected members
	changeStatus: (status) ->
		@filterRow.removeClass @status
		@status = status
		@filterRow.addClass @status
		switch status
			when "inactive" then do @disable
			when "active" then do @enable

	getChoiceEnabling: () ->
		@choiceEnabling
		
	setChoiceEnabling: (choiceEnabling) ->
		@choiceEnabling = choiceEnabling

	getStatus: () ->
		@status

	#public members
	addChild: (filter) ->
		@childFilters.push filter
		
	getChoice: () ->
		@choice

	getChoiceText: () ->
		@choice

	setChoice: (choice) ->
		prevChoice = @choice
		@choice = choice
		@panel.changedValue this, choice, prevChoice
		@filterRow.trigger(@id + ':change', [choice, prevChoice, this])	
		
	setSource: (src) ->
		if src.defaultValue || (src.defaultValue == "")
			@setChoice src.defaultValue
			
	getDependency: () ->
			testFilters = _.filter @panel.filters, (item) => item.model.order > @model.order
			dependentFilters = []
			
			for testFilter in testFilters
				testFilterModel = testFilter.model
				if not testFilterModel.dependencies
					#у тестируемого фильтра нет зависимостей
					continue
				
				fltFunc = (dependency) => (dependency.relatedObject.type == "Filter") and dependency.relatedObject.ref == @model.id
				if not _.some testFilterModel.dependencies, fltFunc
					#у тестируемого фильтра нет зависимостей от данного фильтра
					continue
				dependentFilters.push testFilter
			
			#сбор у зависимых фильтров их дочерних зависимых фильтров
			for dependentFilter in dependentFilters
				subDependentFilters = dependentFilter.getDependency()
				if subDependentFilters?.length == 0
					continue
				
				subDependentFilters = _.reject(subDependentFilters, (subDepFlt) -> _.findWhere(dependentFilters, {id: subDepFlt.id}))
				if subDependentFilters.length == 0
					continue

				dependentFilters = _.union dependentFilters, subDependentFilters

			dependentFilters

	dependenciesSatisfied: () ->
		vals = do @panel.getValues
		tracker = new dependencyTracker(@model.dependencies)
		tracker.isSatisfied(vals)

#фильтр - список
class listFilter extends filter
	allOptionVal = "-1"
	nullOptionVal = "-2"

	constructor: (@panel, @model) ->
		ctrl = this
		@sourceIds = []
		@control = $("<select></select>")
			.addClass("form-control")
			.attr("name", @model.id)
			.on "change", () -> 
				ctrl.setChoice $(this).val()
				
		super @panel, @model
		
	setSource: (src) ->
		ctrl = this
		src.items = src.items or []
		@sourceIds = []
		if @model.nullOption
			src.items.unshift 
				title: @model.nullOption
				value: nullOptionVal

		if @model.allOption
			@sourceIds.unshift allOptionVal

		#итоговый список всех возможных значений фильтра
		@sourceIds = @sourceIds.concat _.pluck(src.items, "value")

		itemsCount = src.items.length
		@emptyChoice = !itemsCount
		do @control.empty

		if itemsCount > 0
			if itemsCount == 1
				@setChoiceEnabling false
				item = src.items[0]
		
				@setLabel item.title, item.value
				if src.defaultValue
					src.defaultValue = item.value
				if @model.hideSingleOption
					ctrl.filterRow.addClass "hidden"
			else
				@setList src.items
		else
			@setChoiceEnabling false
			@setLabel @model.emptyText

		if @model.hideSingleOption && itemsCount != 1
			ctrl.filterRow.removeClass "hidden"

		super src
		
	#установка списка значений
	setList: (items) ->
		do @control.show
		do @enable
		if @labelBlock
			do @labelBlock.remove
			@labelBlock = null

		actualItems = items

		if @model.allOption
			actualItems.unshift 
				title: @model.allOption
				value: allOptionVal
			
		for item in actualItems
			$("<option></option>")
				.val item.value
				.append item.title?.escapeHTML()
				.appendTo @control
	
	#установка подписи или одного единственного значения
	setLabel: (title, value) ->
		do @control.hide
		do @disable
		if @labelBlock
			do @labelBlock.remove
			@labelBlock = null

		@labelBlock = $("<div></div>")
		@labelBlock.append $("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(title)

		if value
			valInput = $("<input type=\"hidden\" />")
				.attr "name", @model.id
				.val value
			@labelBlock.append valInput
			
		@labelBlock.insertAfter @control

	setChoice: (choice) ->
		if !_.contains(@sourceIds, choice)
			#если устанавливается неизвестный элемент то выбираем первый
			choice = _.first(@sourceIds)
		@control.val choice
		super choice
			

	getChoiceText: ->
		if @labelBlock
			return @labelBlock.find('input[type=text]').val()
		else
			return $("option:selected", @control).text()

	enable: () ->
		if @labelBlock
			@labelBlock.find("input[type=hidden]").prop "disabled", false
		else
			@control.prop "disabled", false

	disable: () ->
		if @labelBlock
			@labelBlock.find("input[type=hidden]").attr "disabled", "disabled"
		else
			@control.attr "disabled", "disabled"


#класс описывающий диапазон дат
class dateRange
	constructor: (@startDate, @endDate) ->

	@parseDate = (str) ->
		strDate = str.substring(0, 19)
		date = if strDate.length is 19 then new Date(strDate) else dateUtils.str2date(strDate)
		return date
			
	@parseRange = (str) ->
		rangeArr = str.split " - "
		
		if rangeArr[0]
			startDate = dateRange.parseDate(rangeArr[0])
				
		if rangeArr[1]
			endDate = dateRange.parseDate(rangeArr[1])
			
		range = new dateRange(startDate, endDate)
		range.source = str
		
		return range

	#представление диапазона в виде строки
	toString: ->
		#используем штатную сериализацию даты
		#она приводит дату в utc формат
		#соответственно в рамках контрола работа с датами проходит с часами: дата (+часовой пояс)
		ret = ""
		if @startDate
			ret += JSON.stringify(dateUtils.asUTCDate(@startDate))
		ret += " - "
		if @endDate
			ret += JSON.stringify(dateUtils.asUTCDate(@endDate))

		return ret.replace(/"/g, "")
	isValid: ->
		return this.startDate <= this.endDate

#фильтр - выбор диапазона дат
class dateRangeFilter extends filter
	constructor: (@panel, @model) ->
		ctrl = this
		
		@startDateIsChanged = false
		@endDateIsChanged = false

		baseName = @model.id

		startControl = $("<input type=\"text\" class=\"input-md form-control start-date\"/>")
			.attr "name", baseName + "_start"

		endControl = $("<input type=\"text\" class=\"input-md form-control end-date\"/>")
			.attr "name", baseName + "_end"

		separatorCtrl = $("<span class=\"input-group-addon\">—</span>")
		@control = $("<div class=\"input-daterange input-group date\"></div>")
			.append startControl
			.append separatorCtrl
			.append endControl

		dateInput.initDateInput @control, "", "", "", { autoCorrectDates: false, keepEmptyField: true }, true
		
		dateChanged = () =>
			if this.status is 'inactive'
				return
			
			startDate	= @control.find('.start-date').val()
			endDate		= @control.find('.end-date').val()
			
			range = if !startDate && !endDate then null else startDate + " - " + endDate
			@setChoice range, true

		startDateBlur = () =>
			if @startDateIsChanged
				@startDateIsChanged = false
				startDate	= @control.find('.start-date').val()
				endDate		= @control.find('.end-date').val()

				if startDate && endDate 
					dtStartDate = dateRange.parseDate(startDate)
					if dtStartDate > dateRange.parseDate(endDate)
						if @validateDate(dtStartDate)
							@control.find('.end-date').val(startDate)

				dateChanged()

		endDateBlur = () =>
			if @endDateIsChanged
				@endDateIsChanged = false
				startDate	= @control.find('.start-date').val()
				endDate		= @control.find('.end-date').val()

				if startDate && endDate 
					dtEndDate = dateRange.parseDate(endDate)

					if dtEndDate < dateRange.parseDate(startDate)
						if @validateDate(dtEndDate)
							@control.find('.start-date').val(endDate)
				dateChanged()
		
		startDateChanged = () =>
			@startDateIsChanged = true
			return

		endDateChanged = () =>
			@endDateIsChanged = true
			return

		startDateChangedAndBlur = () =>
			if !@startDateIsChanged
				startDateChanged()
				startDateBlur()

		endDateChangedAndBlur = () =>
			if !@endDateIsChanged
				endDateChanged()
				endDateBlur()

		@control.find('.start-date').on "blur", startDateBlur
		@control.find('.end-date').on "blur", endDateBlur
		@control.find('.start-date').on "change", startDateChanged
		@control.find('.end-date').on "change", endDateChanged
		@control.find('.start-date').datepicker().on("changeDate", startDateChangedAndBlur)
		@control.find('.end-date').datepicker().on("changeDate", endDateChangedAndBlur)
		super @panel, @model

	setSource: (src) ->
		#требуется дата в локальном часовом поясе без часов
		minDate = moment(src.minValue).toDate()
		maxDate = moment(src.maxValue).toDate()

		@control.find('.start-date, .end-date').datepicker "setStartDate", minDate
		@control.find('.start-date, .end-date').datepicker "setEndDate", maxDate
		
		this.src = src
		range = new dateRange(minDate, maxDate)
		@setChoice range, true
		super src

	getChoice:  ->
		currChoice = this.choice
		currRange = new dateRange(currChoice.startDate,  currChoice.endDate)
		return currRange.toString()

	getChoiceText: ->
		currChoice = this.choice
		return moment(currChoice.startDate).format('DD.MM.YYYY') + " - " + moment(currChoice.endDate).format('DD.MM.YYYY');

	setChoice: (choice, internal) ->
		if not choice
			return
			
		if this.choice and this.choice.source and this.choice.source is choice
			return
			
		range = if choice.startDate or choice.endDate then choice else dateRange.parseRange(choice)

		super range
		
		if internal 
			return
			
		if range.startDate
			@control.find('.start-date').datepicker 'update', dateUtils.date2str(range.startDate)
		if range.endDate
			@control.find('.end-date').datepicker 'update', dateUtils.date2str(range.endDate)
		
		# возможна ситуация, когда заданная дата не входит в диапазон minValue - maxValue
		# в таком случае datepicker затирает поле, поэтому необходимо выполнить проверку заполненности полей
		# и обновить модель (choice)
		
		startDate	= @control.find('.start-date').val()
		endDate		= @control.find('.end-date').val()
		
		if not startDate or not endDate
			range = startDate + " - " + endDate
			@setChoice range, true

	validateDate: (dt) ->
		minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue))
		maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue))

		return dt >= minValue and dt <= maxValue
	
	validate: ->
		if this.choice.startDate is null or not this.choice.startDate
			$.show.error(language.Generic.Common.kErrInvalidStartDate)
			return false
			
		if this.choice.endDate is null or not this.choice.endDate
			$.show.error(language.Generic.Common.kErrInvalidEndDate)
			return false
		
		minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue))
		maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue))

		startDate = dateUtils.asUTCDate(this.choice.startDate.clone())
		endDate = dateUtils.asUTCDate(this.choice.endDate.clone())

		# проверить вхождение в диапазон minValue - maxValue
		# проверить вхождение startDate в диапазон
		if startDate < minValue or startDate > maxValue
			$.show.error(language.Generic.Common.kErrInvalidStartDate+'\n'+language.Generic.Common.kStartEndDatesInCurrYear)
			return false
		
		# проверить вхождение endDate в диапазон
		if endDate < minValue or endDate > maxValue
			$.show.error(language.Generic.Common.kErrInvalidEndDate+'\n'+language.Generic.Common.kStartEndDatesInCurrYear)
			return false
		
		# проверить startDate <= endDate
		if not this.choice.isValid()
			$.show.error(language.Generic.Common.kMsgStartBeforeEnd)
			return false
			
		return true

	enable: () ->
		@control.find("input").prop "disabled", false

	disable: () ->
		@control.find("input").attr "disabled", "disabled"
	
	
#фильтр - выбор даты
class dateFilter extends filter
	constructor: (@panel, @model) ->
		ctrl = this
		
		baseName = @model.id

		control = $("<input type=\"text\" class=\"input-md form-control filter-date\"></input>")
			.attr "name", baseName

		buttonCtrl = $("<button type=\"button\" class=\"btn btn-primary\">")
			.append($("<span class=\"glyphicon glyphicon-calendar\"></span>"))
			.append($("</button>"))

		inputCtrl = $("<span class=\"input-group-btn\">")
			.append(buttonCtrl)
			.append($("</span>"))

		@control = $("<div class=\"input-group date\">")
			.append(control)
			.append(inputCtrl)
			.append($("</div>"))

		dateInput.initDateInput @control, null, null, null, { autoCorrectDates: false, keepEmptyField: true, autoclose: true }, true

		dateChanged = () =>
			if this.status is 'inactive'
				return
			
			filterDate	= dateUtils.str2date(@control.find('.filter-date').val())

			@setChoice filterDate, true
		
		@control.find('.filter-date').on "change", dateChanged

		super @panel, @model
		
	setSource: (src) ->

		#требуется дата в локальном часовом поясе без часов
		minDate = moment(src.minValue).toDate()
		maxDate = moment(src.maxValue).toDate()

		@control.datepicker "setStartDate", minDate
		@control.datepicker "setEndDate", maxDate

		filterDate = moment(src.defaultValue).toDate()
		@control.datepicker "setDate", filterDate
		@setChoice filterDate, true

		this.src = src

	setChoice: (choice, internal) ->
		if not choice
			super null
			return
			
		if this.choice and this.choice.source and this.choice.source is choice
			return
			

		if !internal 
			@control.datepicker 'update', choice
		
		filterDate	= dateUtils.str2date(@control.find('.filter-date').val())
		
		super filterDate
	
	validate: ->
		if this.choice is null or not this.choice
			$.show.error(language.Generic.Common.kErrInvalidDate)
			return false
		
		minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue))
		maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue))

		filterDate = dateUtils.asUTCDate(this.choice.clone())

		# проверить вхождение в диапазон minValue - maxValue
		# проверить вхождение startDate в диапазон
		if filterDate < minValue or filterDate > maxValue
			$.show.error(language.Generic.Common.kErrInvalidDate+'\n'+language.Generic.Common.kDateMustBeInCurrYear)
			return false

		return true

	enable: () ->
		@control.find("input").prop "disabled", false

	disable: () ->
		@control.find("input").attr "disabled", "disabled"
	
	
#фильтр - множественный выбор
class checksFilter extends filter
	constructor: (@panel, @model) ->
		ctrl = this

		checkboxChanged = () =>
			if this.status is 'inactive'
				return

			if @model.hasSureCheckedFlag && !@control.find("input:checked").length>0
				alert(language.Generic.Filter.kSureCheckedMsg.replace('{0}', @model.title))
				return false
			
			# массив значений чекбоксов
			checkboxValues = @control.find 'input:checked'
				.map () -> $(this).prop('value')
				.get()
				.join()
			
			ctrl.setChoice checkboxValues
		
		@control = $("<div></div>").on "change", checkboxChanged

		super @panel, @model

	setSource: (src) ->
		@emptyChoice = false
		do @control.empty
		itemsCount =  src.items?.length
		if itemsCount > 0
			@setChecks src.items
			if src.defaultValue
				@setChoice src.defaultValue
		else
			if (@model.emptyText)
				@labelBlock = $("<div></div>")
				@labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(@model.emptyText))
				@labelBlock.appendTo(@control)
				@emptyChoice = true
			@setChoiceEnabling false
	
	getChoice: ->
		@control.find 'input:checked'
			.map () -> $(this).prop('value')
			.get()
			.join()
	
	getChoiceText: ->
		@control.find 'input:checked'
			.map () -> $(this).parent().text()
			.get()
			.join()

	# todo
	setChoice: (choice) ->

		if choice
			checkedItems = choice.split(',')
			for item in checkedItems
				if item || item == "0"
					@control.find('input:checkbox[value=' + item + ']').attr("checked", "")

		super choice

	#установка списка значений
	setChecks: (items) ->
		actualItems = items
		for item in actualItems
			chk = $("<input type=\"checkbox\" />").attr("name", @model.id).val(item.value)
			if item.readOnly
				chk.on "click", () -> false
			###
			if item.checked
				chk.attr("checked", "")
			###
			lbl = $("<label></label>").text(item.title).prepend chk
			$("<div class=\"checkbox\"></div>")
				.append lbl
				.appendTo @control


	enable: () ->

	disable: () ->

	validate: ->
		choice = @getChoice()
		if @model.hasSureCheckedFlag and (choice is null or choice is "")
			$.show.error("Не выбраны значения фильтра \"" + @model.title + "\"")
			return false

		return true

#фильтр - множественный выбор (панель)
class checksFilter2 extends filter
	constructor: (@panel, @model) ->
		ctrl = this

		checkboxChanged = () =>
			if this.status is 'inactive'
				return

			if @model.hasSureCheckedFlag && !@control.find("input:checked").length>0
				alert(language.Generic.Filter.kSureCheckedMsg.replace('{0}', @model.title))
				return false
			
			# массив значений чекбоксов
			checkboxValues = (@control.find 'input:checked')
				.map () -> $(this).prop('value')
				.get()
				.join()
			
			ctrl.setChoice checkboxValues
		
		@control = $("<div></div>")

		
		@control.on "change", checkboxChanged

		super @panel, @model

	setSource: (src) ->
		@emptyChoice = false
		do @control.empty
		itemsCount =  src.items?.length
		if itemsCount > 0
			@setChecks src.items
			if src.defaultValue
				@setChoice src.defaultValue
		else
			if (@model.emptyText)
				@labelBlock = $("<div></div>")
				@labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(@model.emptyText))
				@labelBlock.appendTo(@control)
				@emptyChoice = true
			@setChoiceEnabling false
	
	getChoice: ->
		(@control.find 'input:checked')
			.map () -> $(this).prop('value')
			.get()
			.join()

	getChoiceText: ->
		@control.find 'input:checked'
			.map () -> $(this).parent().text()
			.get()
			.join()
	
	# todo
	setChoice: (choice) ->

		if choice
			checkedItems = choice.split(',')
			for item in checkedItems
				if item || item == "0"
					@control.find('input:checkbox[value=' + item + ']').attr("checked", "")

		super choice

	#установка списка значений
	setChecks: (items) ->
		actualItems = items
		for item in actualItems
			chk = $("<input type=\"checkbox\" />").attr("name", @model.id).val(item.value)
			if item.readOnly
				chk.on "click", () -> false
			###
			if item.checked
				chk.attr("checked", "")
			###
			lbl = $("<label></label>").text(item.title).prepend chk
			$("<div class=\"checkbox checkbox-inline checkbox-row\"></div>")
				.append lbl
				.appendTo(@control)


	enable: () ->

	disable: () ->

	validate: ->
		choice = @getChoice()
		if @model.hasSureCheckedFlag and (choice is null or choice is "")
			$.show.error("Не выбраны значения фильтра \"" + @model.title + "\"")
			return false

		return true

#фильтр - выбор диапазона из двух выпадающих списков
class listRangeFilter extends filter
	constructor: (@panel, @model) ->
		ctrl = this
		
		baseName = @model.id

		@startControl = $("<select></select>")
			.addClass("form-control")
			.attr("name", baseName + "_start")
			.on "change", () -> 
				ctrl.setChoice $(this).val(), 1

		@endControl = $("<select></select>")
			.addClass("form-control")
			.attr("name", baseName + "_end")
			.on "change", () -> 
				ctrl.setChoice $(this).val(), 2

		@separatorCtrl = $("<span class=\"input-group-addon\">-</span>")
		@control = $("<div class=\"input-group\"></div>")
			.append @startControl
			.append @separatorCtrl
			.append @endControl


		super @panel, @model
		
	setSource: (src) ->
		@emptyChoice = (src.itemsFrom?.length == 0)
		do @startControl.empty
		itemsCount = src.itemsFrom?.length
		if itemsCount > 0
			@setListFrom src.itemsFrom
		do @endControl.empty
		itemsCount = src.itemsTo?.length
		if itemsCount > 0
			@setListTo src.itemsTo
		
		@defVal = src.defaultValue
		if @defVal
			@setChoice @defVal
		super src
		
	#установка списка значений от
	setListFrom: (items) ->
		do @startControl.show
		do @enable	
	
		actualItems = items
		for item in actualItems
			$("<option></option>")
				.val item.value
				.append item.title?.escapeHTML()
				.appendTo @startControl
	
	#установка списка значений до
	setListTo: (items) ->
		do @endControl.show
		do @enable

		actualItems = items
		for item in actualItems
			$("<option></option>")
				.val item.value
				.append item.title?.escapeHTML()
				.appendTo @endControl

	setChoice: (choice, partNum) ->
		if typeof partNum != "undefined"
			if partNum == 1
				endChoice = @endControl.val()
				@startControl.val choice
				if choice && endChoice
					choiceIndex = $(this.startControl).find("option[value='" + choice + "']")[0].index
					endChoiceIndex = $(this.endControl).find("option[value='" + endChoice + "']")[0].index
					if endChoiceIndex < choiceIndex
						@endControl.val choice
			else if partNum == 2
				startChoice = @startControl.val()
				@endControl.val choice
				if choice && startChoice 
					choiceIndex = $(this.endControl).find("option[value='" + choice + "']")[0].index 
					startChoiceIndex = $(this.startControl).find("option[value='" + startChoice + "']")[0].index
					if choiceIndex < startChoiceIndex
						@startControl.val choice
			choice = @getChoice()
		else
			sepIndex = choice.indexOf(" - ")
			if sepIndex
				@startControl.val choice.substring(0, sepIndex), 1
				@endControl.val choice.substring(sepIndex + 3), 2

		super choice

	getChoice:  ->
		@startControl.val() + " - " + @endControl.val() 

	enable: () ->
		@control.prop "disabled", false

	disable: () ->
		@control.attr "disabled", "disabled"

class listWithArrowsFilter extends listFilter
	constructor: (@panel, @model) ->
		super @panel, @model
		$(@control).addClass("list-with-arrows")
		$(@control).wrapAll('<div class="input-group">')
		leftButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-left"></span></button>')
			.on("click", (event) => 
				if isButtonsLock() 
					return
				newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").prev('option').val()
				@setChoice(newValue)
				return)
		rightButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-right"></span></button>')
			.on("click", (event) => 
				if isButtonsLock() 
					return
				newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").next('option').val()
				@setChoice(newValue)
				return)
		buttonGroup = $('<span class="input-group-btn"></span>').append(leftButton).append(rightButton)
		$(@control).parent().append(buttonGroup)

class listFilter2 extends listFilter
	setSource: (src) ->
		super src
		if src.items?.length > 1
			@select2Control =  @control.select2
				placeholder: "Введите наименование"
				language: "ru"
		else 
			@control.select2()
			@control.select2('close')
			@control.siblings('span.select2').hide()

class textFilter extends filter
	constructor: (@panel, @model) ->
		ctrl = this
		@validationExp = null
		@validationErrorMessage = null

		@control = $("<input></input>")
			.addClass("form-control")
			.attr("name", @model.id)
			.on "change", () -> 
				ctrl.setChoice $(this).val()
				
		super @panel, @model

	setSource: (src) ->
		@setChoice src?.defaultValue
		@validationExp = src?.validationExp
		@validationErrorMessage = src?.validationErrorMessage
		super src
		
	validate: ->
		if @validationExp
			choice = @getChoice()
			if !choice.match(@validationExp)
				$.show.error('Фильтр "' + @model.title + '": ' + @validationErrorMessage)
				return false
		return true

	getChoice: ->
		$(@control).val()

	setChoice: (choice) ->
		$(@control).val(choice)
		if @model.optionalFlag || choice
			@emptyChoice = false
		else
			@emptyChoice = true
		super choice
		
	enable: () ->
		@control.prop "disabled", false

	disable: () ->
		@control.attr "disabled", "disabled"

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
)({filterPanel, dependencyTracker, fpStatus})