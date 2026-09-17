# CoffeeScript
yearId = appContext.yearId
funcType = appContext.funcType

class RoomValidationError extends Error
	constructor: (targetElement, message) ->
		super(message)

		@name = @constructor.name
		if Error.captureStackTrace
			Error.captureStackTrace(@, @constructor)
		else
			@stack = (new Error()).stack

		@targetElement = targetElement
		@message = message

class Room
	constructor: (dto, yearFormationMode) ->
		if not dto
			dto = {}

		@addYearPostfix(dto, yearFormationMode)

		@id = dto.id
		@roomname = dto.roomname
		@floor = dto.floor
		@corpus = dto.corpus
		@length = dto.length
		@width = dto.width
		@area = dto.area
		@responsible = dto.responsible
		@study = dto.study
		@seats = dto.seats
		@classesnames = _.map(dto.classes, (cls) => cls.name).join(", ")
		@used = dto.used

	addYearPostfix: (room, yearFormationMode) ->
		if !appContext.readOnly && yearFormationMode
			_.each(room.classes, (c) =>
				if c.yearStatus == "Open"
					c.name += " (Тек.)"
				else if c.yearStatus == "Future"
					c.name += " (Буд.)"
			)

	#маппинг из строки таблицы
	mapFromContainer: (container) ->
		$container = $(container)
		@id = $container.find('input[name="RoomID"]').val()
		@roomname = $container.find('input[name="RoomName"]').val()
		@floor = parseInt $container.find('select[name="Floor"]').val()
		@corpus = $container.find('input[name="Corpus"]').val()
		
		lengthVal = $container.find('input[name="Length"]').val()
		widthVal = $container.find('input[name="Width"]').val()
		areaVal = $container.find('input[name="Area"]').val()
		
		@length = str2floatVal lengthVal
		@width = str2floatVal widthVal
		@area = str2floatVal areaVal

		@study = $container.find('input[name="Study"]').prop('checked')
		@seats = parseInt $container.find('input[name="Seats"]').val()
		
		if lengthVal == "" then @length = null
		if widthVal == "" then @width = null
		if areaVal == "" then @area = null

		# ответственный
		responsibleId = parseInt $container.find('select[name="RESPONSIBLEID"]').val()

		if responsibleId > 0
			@responsible = { id: responsibleId }

	#валидация
	validate: () ->
		if @roomname == ''
			return language.Calendar.kErrMsgEmpty

		if @length and (@length < 1 or @length > 100)
			return language.Generic.Calendar.kErrLen

		if @width and (@width < 1 or @width > 100)
			return language.Generic.Calendar.kErrWidth

		if not @seats or (@seats <= 0 or @seats > 100)
			return language.Calendar.kErrSeats2
		
		if @area and (@area < 1 or @area > 999)
			return language.Generic.Calendar.kErrArea

		return



# контроллер комнат
class RoomsCtrl

	constructor: () ->
		# private variables
		ctrl = this

		# шаблон
		@roomsInfoTmpl

		# шаблон этажей
		@floorsTmpl

		# название класса
		@kClasses = language.SchoolSettings.kClasses.charAt(0).toUpperCase() + language.SchoolSettings.kClasses.slice(1)

		# контекст
		@context =
			language: language
			readonly: appContext.readOnly
			staffs: staffs
			floors: [1..9]
			kClasses: @kClasses
		
		# параметры для валидации
		@validationParams = do () ->
			validRules = {}
			validMessages = {}

			# todo здесь будет ошибка, когда несколько правил добавляется для поля
			addRule: (field, rules, messages) ->
				validRules[field] = rules

				if messages then validMessages[field] = messages

			getRules: () -> validRules
			getMessages: () -> validMessages

		$.validator.addMethod "validateRoomName",
			(value, element) => not _.some(@context.rooms, (checkRoom) -> trimStr(checkRoom.roomname) == value),
			language.Generic.Common.kErrMsgExist

		@validationParams.addRule 'RoomName',
			{required: true
			validateRoomName: true},
			required: language.Calendar.kErrMsgEmpty

		@validationParams.addRule 'Seats',
			required: true
			digits: true
			min: 1
			max: 100
			language.Calendar.kErrSeats2

		@validationParams.addRule 'Length',
			required: false
			number: true
			min: 1
			max: 100
			language.Generic.Calendar.kErrLen

		@validationParams.addRule 'Width',
			required: false
			number: true
			min: 1
			max: 100
			language.Generic.Calendar.kErrWidth

		@validationParams.addRule 'Area',
			required: false
			number: true
			min: 1
			max: 999
			language.Generic.Calendar.kErrArea

		@yearFormationMode

		#methods

		# добавляет кнопки на экран
		@addButtons = () ->
			if appContext.readOnly then return

			buttonPanelLeft = $('.buttons-panel-left')
			reset = $.uicontrols.button({type:'btn-warning', label: language.Generic.Buttons.kReset, icon: "repeat", click: "roomsInfoCtrl.ResetRoomsScreen()" })
			save = $.uicontrols.button({type:'btn-primary', label: language.Generic.Buttons.kSave, icon: "floppy-save", click: "roomsInfoCtrl.SaveChanges()" })
			remove = $.uicontrols.button({type:'btn-danger', label: language.Generic.Buttons.kRemove, icon: "minus-sign", click: "roomsInfoCtrl.RemoveRooms()" })
			replace = $.uicontrols.button({type:'btn-warning', label: language.Generic.SetupSchool.kReplace, icon: "replace", click: "roomsInfoCtrl.MergeRooms()" })

			if @context?.rooms?.length
				$(reset).prependTo(buttonPanelLeft)
				$(save).prependTo(buttonPanelLeft);
				$(remove).appendTo(buttonPanelLeft)
				$(replace).appendTo(buttonPanelLeft)

		@setEventHandlers = ->
			#обработчик изменения названий кабинетов
			onChangeRoomName = (theElement) =>

				setRoomName = trimStr theElement.value

				rowId = $(theElement).closest('tr').attr('id')
				editRoomId = parseInt rowId.replace("room-", "")
				existsSameRoomName = _.some @context.rooms, (room) -> room.id != editRoomId and room.roomname == setRoomName

				if existsSameRoomName
					alert(language.Calendar.kMsgRoomExist).then () => $(theElement).val $(theElement).data("storedstate") 
				else
					dataChanged()
				return

			#обработчик изменений в числовых полях
			onChangeNumField = (el, min, max) ->
				dataChanged()

				if trimStr(el.value) == "" then return

				setLoad = str2floatVal(el.value)

				if setLoad is 0 then return el.value = ""

				#if setLoad < min or setLoad > max then return el.value = ""

				if setLoad % 1 > 0 then setLoad = parseFloat(setLoad.toFixed(2))
				el.value = setLoad.toString()

			$("#rooms-table").on("change", "input[name='RoomName']", (event) => onChangeRoomName(event.currentTarget))
			$("#rooms-table").on("change", "input[name='Width']", (event) => onChangeNumField(event.currentTarget, 1, 100))
			$("#rooms-table").on("change", "input[name='Length']", (event) => onChangeNumField(event.currentTarget, 1, 100))
			$("#rooms-table").on("change", "input[name='Area']", (event) => onChangeNumField(event.currentTarget, 1, 999))

		# получает список помещений
		@getRooms = () ->

			queries = []
			getRoomsInfoTemplate = $.ajax
				url: "/vendor/pages/templates/rooms/rooms.html"
				cache: true
				success: (data) =>
					@roomsInfoTmpl = data.replace(/(?:\r\n|\r|\n)/g, '')

			getRoomsInfo = jsSubmit
				action: "/webapi/rooms"
				data: { detailed: true }
				showProcessing: true
				method: "GET"

				onSuccess: (rooms) =>
					$.extend @context,
						rooms: _.map rooms, (dto) -> new Room(dto, @yearFormationMode)

			queries.push getRoomsInfoTemplate
			queries.push getRoomsInfo

			extDeferred.when(queries)
				.then =>
					template = Handlebars.compile @roomsInfoTmpl
					html = template @context
					$('#roomsInfo').html html

					if @context.rooms
						do @setEventHandlers
		
		# удаляет помещения
		@removeRooms = () ->
			# идентификаторы помещений
			id = _.toArray($('input[name="DeleteID"]:checked').map () -> this.value)
			confirms = []

			jsSubmit
				action: "/webapi/rooms/used"
				method: "GET"
				queryData: { id: id }
				contentType: "application/json"
				showProcessing: true
			.then (roomsDtos) =>
				if roomsDtos && roomsDtos.length
					confirms.push($.show.getConfirmation(language.Calendar.kDeleteRoomsWarn))

				extDeferred.when confirms
				.then () =>
					jsSubmit
						action: "/webapi/rooms"
						method: "DELETE"
						queryData: { id: id }
						contentType: "application/json"
						showProcessing: true
						onSuccess: () =>
							@getRooms()

		@getValidRoom = (container) ->
			empty = ''

			$container = $(container)
		
			# target elements
			roomNameElement	=	$container.find('input[name="RoomName"]').get(0)
			lengthElement	=	$container.find('input[name="Length"]').get(0)
			widthElement	=	$container.find('input[name="Width"]').get(0)
			seatsElement	=	$container.find('input[name="Seats"]').get(0)
			areaElement		=	$container.find('input[name="Area"]').get(0)
			
			room = new Room()
			room.mapFromContainer(container)

			if room.roomname == empty
				throw new RoomValidationError(roomNameElement, language.Calendar.kErrMsgEmpty)

			if room.length and (room.length < 1 or room.length > 100)
				throw new RoomValidationError(lengthElement, language.Generic.Calendar.kErrLen)

			if room.width and (room.width < 1 or room.width > 100)
				throw new RoomValidationError(widthElement, language.Generic.Calendar.kErrWidth)

			if not room.seats or (room.seats <= 0 or room.seats > 100)
				throw new RoomValidationError(seatsElement, language.Calendar.kErrSeats2)
		
			if room.area and (room.area < 1 or room.area > 999)
				throw new RoomValidationError(areaElement, language.Generic.Calendar.kErrArea)

			return room


		# сохраняет помещения
		@saveChanges = () ->

			rooms = []
			_.each $('table tr'), (row, index) =>
					if index == 0
						return

					room = @getValidRoom(row)
					rooms.push room

			jsSubmit
				action: "/webapi/rooms"
				method: "POST"
				data: rooms
				contentType: "application/json"
				showProcessing: true
				onSuccess: () =>
					@getRooms().then () ->
						window.dataWereChanged = false
						alert language.Generic.Common.kDataSaved

		# подсвечивает невалидную ячейку
		@setInvalidCell = (cell) ->
			if cell then $(cell).addClass 'room-cell-invalid'

		# очищает невалидные ячейки
		@clearInvalidCells = () ->
			$('.room-cell-invalid').removeClass 'room-cell-invalid'

		# создает помещение
		@createRoom = (addRoomForm) ->
			if not addRoomForm.valid()
				return (new $.Deferred).reject()

			room = new Room()
			room.mapFromContainer(addRoomForm)

			return jsSubmit
				action: "/webapi/rooms"
				method: "PUT"
				data: room
				contentType: "application/json"
				showProcessing: true
				onSuccess: () =>
					@getRooms()

		@hasRoomWithHimself = () ->
			mergeRoomId = $('select[name="MERGEROOMID"]').val()
			roomId = $('select[name="ROOMID"]').val()
			
			mergeRoomId is roomId

		# сливает помещения
		@mergeRooms = () ->
			mergeRoomId = $('select[name="MERGEROOMID"]').val()
			roomId = $('select[name="ROOMID"]').val()

			jsSubmit
				action: "/webapi/rooms/integrated"
				queryData: { mergeRoomId: mergeRoomId, roomId: roomId }
				method: "POST"
				showProcessing: true
		
		@hasSameRoomname = () ->
			_.some _.groupBy(_.toArray($('input[name = "RoomName"]').map () -> trimStr(this.value))), (gr) -> gr.length > 1

	NotifyUserOfDuplicateTitles: () =>
		groups = _.groupBy(_.toArray($('input[name = "RoomName"]')).map((el) -> { name: trimStr(el.value), element: el }), 'name')
		keys = Object.keys(groups)

		_.each(keys, (key) =>
			maps = groups[key]
			if maps.length > 1
				_.each(maps, (map) => @setInvalidCell(map.element))
		)

		if @hasSameRoomname() then alert("Внимание! В поле 'Номер/название' имеются дублирующиеся значения. Необходимо отредактировать значения поля c соблюдением условия уникальности и нажать кнопку 'Сохранить'.")

	# инициализирует первоначальное состояние экрана
	InitRooms: () =>
		queries = new Array()

		# признак формирования нового года
		getYearFormationMode = () -> 
			jsSubmit
				action: "/webapi/years/yearFormationMode"
				showProcessing: true
				method: "GET"

				onSuccess: (yearFormationMode) =>
					@yearFormationMode = yearFormationMode

		queries.push getYearFormationMode()
		queries.push @getRooms()

		extDeferred.when(queries).then () =>
			@addButtons()

	# добавляет помещение
	AddNew: () ->
		if @hasSameRoomname() then return

		#форма
		addRoomForm = null

		createButtonHandler = (dialog) =>
			try
				@createRoom(addRoomForm).then () => 
					dialog.forceClose()
					alert @context.language.Calendar.kCreateRoomsSuccess
			catch error
				console.log error
				$.show.message error

		$.ajax
			url: "/vendor/pages/templates/rooms/addRoom.html"
			cache: true
			success: (data) =>
				roomsAddTmpl = data.replace(/(?:\r\n|\r|\n)/g, '')
				template = Handlebars.compile roomsAddTmpl
				html = template @context
				
				$.show.dialog
					title: language.Calendar.kAddRoom
					message: $(html)
					buttons: [
						label: language.Generic.Buttons.kAdd
						action: createButtonHandler
						cssClass: 'btn-primary'
					],
					onshown: () =>
						addRoomForm = $(document.addNewRoom)
						addRoomForm.validate
							rules: @validationParams.getRules()
							messages: @validationParams.getMessages()

	# сохраняет изменения
	SaveChanges: () ->
		if @hasSameRoomname() then return
		try
			@clearInvalidCells()
			@saveChanges()
		catch error
			if error instanceof RoomValidationError
				@setInvalidCell(error.targetElement)

			console.log error.stack
			if error instanceof RoomValidationError
				alert error.message
			else
				$.show.error error.message

	# удаляет помещения
	RemoveRooms: () ->
		if @hasSameRoomname() then return
		
		chkBox = $('input[name="DeleteID"]')
		bOk = false

		if chkBox.length
			for i in [0...chkBox.length] by 1
				if chkBox[i].checked then bOk = true
		else 
			bOk = chkBox.checked

		if not bOk
			alert language.Calendar.kErrMsgNotChecked
			return

		$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then () => @removeRooms()

	# сбрасывает изменения
	ResetRoomsScreen: () ->
		if @hasSameRoomname() then return

		@clearInvalidCells()
		@getRooms()

	# сливает помещения
	MergeRooms: () ->
		if @hasSameRoomname() then return
		
		sendBtn = (dialog) =>
			if @hasRoomWithHimself()
				return alert language.Calendar.kMergeRoomWithHimself

			$.show.confirmation(language.Calendar.kMergeRoomsWarn)
			.then () =>
				@mergeRooms()
				.then () =>
					alert @context.language.Calendar.kMergeRoomsSuccess
					@getRooms().then () -> dialog.forceClose()

		$.ajax
			url: "/vendor/pages/templates/rooms/mergeRooms.html"
			cache: true
			success: (data) =>
				mergeRoomsTmpl = data.replace(/(?:\r\n|\r|\n)/g, '')
				
				template = Handlebars.compile mergeRoomsTmpl
				html = template @context
				
				$.show.dialog
					title: language.Calendar.kReplaceRoom
					message: $(html)
					buttons: [label: language.Generic.SetupSchool.kReplace, action: sendBtn, cssClass: 'btn-primary']