# CoffeeScript

class moveStudentsListCtrl

	moveStudentsListTmpl = ''
	titlesTmpl = ""
	selectedUsersTmpl = ""

	#функция-загрузчик шаблонов
	loadTemplate = (url, setFunc) ->
		$.ajax
			url: url
			cache: true
			success: (data) ->
				html = data.replace(/(?:\r\n|\r|\n)/g, '')
				setFunc(html)
		
	$.ajax({
			url: '/vendor/pages/movement/templates/movementUsersListTemplate.html',
			cache: true,
			success: (data) ->
				moveStudentsListTmpl = data.replace(/(?:\r\n|\r|\n)/g, '')
			
		})
																				
	constructor: (@container, @filterPanel, @sourceId, @moveDocData, @moveDirection, @backPage, @currentUser, @currentSchool, @productName, @queueImportMode) ->
		@currentPage = 0
		@checkedMovements = []
		@studentsInfo = []
		@selectUsers()
		@clearSelectionFlag = true

		queries = [
			loadTemplate '/vendor/pages/movement/templates/movementUsersListTemplate.html', (html) -> moveStudentsListTmpl = html
			loadTemplate '/vendor/pages/movement/templates/movementUsersListCommonTemplate.html', (html) -> titlesTmpl = html
			loadTemplate '/vendor/pages/movement/templates/SelectedUsersTemplate.html', (html) -> selectedUsersTmpl = html
		]
		
		##extDeferred.when(queries).then -> 
		Handlebars.registerHelper 'ifEqual', (nParam1, nParam2, opts) ->
			if nParam1 == nParam2
				opts.fn(this)
			else
				opts.inverse(this);

		Handlebars.registerHelper 'ifNotEqual', (nParam1, nParam2, opts) ->
			if nParam1 != nParam2
				opts.fn(this)
			else
				opts.inverse(this);
			
		Handlebars.registerHelper 'Inc', (nParam, pageNum, pageSize) -> 
			return nParam + 1 + pageNum * pageSize

		Handlebars.registerHelper 'FIO', (objParam) -> 
			objParam.lastName + " " + objParam.firstName + " " + objParam.middleName

		Handlebars.registerHelper 'DateOnly2str', (dateParam) -> 
			if dateParam != null
				dt = new Date(dateParam) 
				dateUtils.date2str(dt) 
				
		Handlebars.registerHelper 'GetDisabled', (objPossibility) ->
			return if objPossibility?.status == "Impossible" then "disabled" else ""
		
		Handlebars.registerHelper 'GetTitle', (objPossibility) ->
			return objPossibility?.statusComment ? ""

		Handlebars.registerHelper 'setChecked', (bSelected) ->
			return if bSelected then "checked" else ""

		# private methods
		@delQuots = (strValue) ->
			strValue.replace('"', '')

									
		@date2StrN = (date) ->
			yyyy = date.getFullYear().toString()
			mm = (date.getMonth() + 1).toString()
			dd  = date.getDate().toString()
			if mm.length == 1
			  mm = '0' + mm
			if dd.length == 1
			  dd = '0' + dd
			return yyyy + '-' + mm + '-' + dd
			
		@popupMoveStudentsList = () ->
			 @container.printUtils().toPrint().then (window) -> popup = window
			 
		@loadingDone = (docId, outerMessage) ->
			if docId > 0
				postTo @backPage,
					DocId: docId
					OUTERMESSAGE: outerMessage

		@loadingFail = (exceptionInfo) ->
			response = $.parseJSON(exceptionInfo.responseText || exceptionInfo)
			errMessage = response["message"]
			if response["details"]
				errMessage += " (" + response["details"] + ")"
				if response["details"] == "noDoc" || response["details"] == "noDocQueue"
					postTo "/asp/SetupSchool/Movement/MoveBook.asp", 
						 OUTERMESSAGE: if response["details"] == "noDocQueue" then response["message"] else ""
					return
				else
					$.show.error errMessage
			else
				$.show.error errMessage
			return

		@showSelectedUsersAmount = () ->
			$(".checked-students-btn").text(language.Movement.kSelectedStudents + " (" + @checkedMovements.length + ")")

		@showButtonsAfterEmptyChoiceIfSelected = () =>
			if @checkedMovements.length
				$("#buttonPanel").show()

		@filterPanel.handlers_emptyChoice.push @showButtonsAfterEmptyChoiceIfSelected

		@browseMoveStudentsListDetails = (clearChoiceFlag) ->
			self = this
			@studentsInfo = []
			if clearChoiceFlag
				@checkedMovements = []
			pagination = new Pagination({
				url: "/webapi/movement/sources/#{self.sourceId}/getList"
				container: $('.moveStudentsListCtrl')
				preloadPage: ->
					self.selectUsers()
				render: (moveStudentsList) ->
				
					if not moveStudentsList.commonData.length
						self.showMsgInContainerHtml(language.Generic.Movement.kMsgNoStudentsForFilters)
						return

					model = 
						moveStudentsList: moveStudentsList

					#расширяем модель для удобства рендеринга
					_.each model.moveStudentsList.commonData, (movedata) -> movedata.possible = movedata.movementPossibility?.status != "Impossible"

					titleTemplate = Handlebars.compile(titlesTmpl)
					if model.moveStudentsList.additionalData
						model.moveStudentsList.additionalData.infoData.sort((a, b) -> (a.order - b.order))
						titlesList = []
						maxLevel = 0

						getTitles = (infoData, level) ->
							if infoData.parent
								infoData.parent.order = if infoData.parent.order then infoData.parent.order else infoData.order
								maxLevel = if maxLevel < level + 1 then level + 1 else maxLevel
								getTitles infoData.parent, level + 1
							existsItem = _.find(titlesList, (item) -> item.id == infoData.id)
							if !existsItem
								existsParent = if infoData.parent then _.find(titlesList, (item) -> item.id == infoData.parent.id)
								newItem = 
									title: infoData.title
									order: infoData.order
									id: infoData.id
									parent: existsParent
									childs: []
									width: getWidth
									level: level
									height: getHeight
								titlesList.push newItem
								if existsParent
									existsParent.childs.push newItem
									if level >= existsParent.level
										existsParent.level = level + 1
							else
								if existsItem.parent
									if existsItem.level >= existsItem.parent.level
										existsItem.parent.level = existsItem.level + 1
							return

						getWidth = () -> 
							if this.childs && _.size(this.childs) != 0
								colWidth = 0
								_.each(this.childs, (item) -> colWidth = colWidth + item.width())
								return colWidth
							else
								return 1
								
						getHeight = (maxLvl) -> 
							if this.parent
								return this.parent.level - this.level
							else
								return maxLvl - this.level + 1
						
						#Получаем дерево заголовков
						_.each(model.moveStudentsList.additionalData.infoData, (infoData) -> getTitles(infoData, 0))
						
						#Выгружаем его в структуру с определенными уровнем, шириной и высотой ячеек
						titlesList = _.map(titlesList, (item) -> 
							{title: item.title
							order: item.order
							id: item.id
							width: item.width()
							level: if item.parent?.level && item.level != (item.parent?.level - 1) then item.parent?.level - 1 else (if item.parent then item.level else maxLevel)
							height: item.height(maxLevel)})
								
						#Для общих столбцов определяем количество строк для rowspan
						commonTitlesRowspan = if maxLevel > 0 then 'rowspan=' + (maxLevel + 1) + '' else ' '
						
						titleModel =
							language: language
							commonTitlesRowspan: commonTitlesRowspan
						commonTitlesTmpl = titleTemplate(titleModel)
						
						#Строим html заголовка
						titlesTmplInfo =_.chain(titlesList)
							.groupBy (item) -> item.level
							.sortBy (item) -> -item[0].level
							.map (item) -> '<tr>' + (if item[0].level == maxLevel then commonTitlesTmpl else " ") +
									_.toArray(_.map(_.sortBy(item, (item2) -> item2.order), (item1) -> (
										'<th ' + 
											(if item1.width > 1 then ' colspan="' + item1.width + '"' else "") + 
											(if item1.height > 1 then ' rowspan="' + item1.height + '"' else "") +
											'>' + 
											item1.title + 
										'</th>'))).join("") + 
								'</tr>'
							.value()
							.join("")
					else
						titleModel =
							language: language
							commonTitlesRowspan: ""
						titlesTmplInfo = titleTemplate(titleModel)
					
					model.moveStudentsList.titles = titlesTmplInfo

					for user in self.checkedMovements
						for item in model.moveStudentsList.commonData when item.id is user.movementId
							item.selected = true
					self.studentsInfo = _.toArray(_.map(model.moveStudentsList.commonData, (studentInfo) => 
											movementId: studentInfo.id
											lastName: studentInfo.studentData.person.lastName
											firstName: studentInfo.studentData.person.firstName
											middleName: studentInfo.studentData.person.middleName
											birthDate: studentInfo.studentData.birthDate))	

					template = Handlebars.compile(moveStudentsListTmpl)
					html = template(model)
					
					$("#actionPanel").show()
					
					return html
				postRender: () ->
					$('[data-original-title]').popover
						placement : 'bottom'
						html: 'true'
						trigger: "hover"
					$('input[name="Students"][type="checkbox"]').on('click', -> 
						self.selectUsers()
						self.showSelectedUsersAmount())
					self.showSelectedUsersAmount()
					window.floatingScroll.scanTables()
					return
				context: 
					filterContextData: 
						selectedData: this.filterPanel.getCtxValues()
					moveDoc: @moveDocData
					direction: @moveDirection
				requestFieldName: 'pagedData'
				responseFieldName: 'pageResponseData'
			})

			pagination.setRecordsOnPage(this.filterPanel.getValues().PageRowsFilter)
			$('select[name="PageRowsFilter"]').on('change', -> pagination.setRecordsOnPage(this.value))
			pagination.init()
			
	# public methods
	browseMoveStudentsList: ->
		selfBrowseStudentsList = @
		@selectUsers()
		@showSelectedUsersAmount()
		if @checkedMovements.length > 0


			if @clearSelectionFlag
				buttonYes = 
					label: language.Generic.Common.kYes
					action: (dialog) -> 
								selfBrowseStudentsList.browseMoveStudentsListDetails(false)
								dialog.close()

				buttonYesDefault = 
					label: language.Generic.Common.kYes + ", " + language.Generic.Common.kNoAsk
					action: (dialog) -> 
								selfBrowseStudentsList.browseMoveStudentsListDetails(false)
								selfBrowseStudentsList.clearSelectionFlag = false
								dialog.close()

				buttonNo = 
					label: language.Generic.Common.kNo
					action: (dialog) ->
								selfBrowseStudentsList.browseMoveStudentsListDetails(true)
								dialog.close()

				buttons = []
				buttons.push buttonYesDefault
				buttons.push buttonYes
				buttons.push buttonNo

				studentsAmountText = if @checkedMovements.length % 10 == 1 && @checkedMovements.length != 11 then " " + @checkedMovements.length + " " + language.Movement.kStudent else "о " + @checkedMovements.length + " " + language.Movement.kStudents_genitive
				
				$.show.dialog
					modal: true
					title: 'Применение фильтров'
					size: BootstrapDialog.SIZE_NORMAL
					withoutCancelButton: true
					message: "Внимание! Выбран" + studentsAmountText + " из списка. Вы желаете запомнить текущий выбор?"
					buttons: buttons
			else
				@browseMoveStudentsListDetails(false)
		else
			@browseMoveStudentsListDetails(true)

	browseCheckedStudents: ->
		if (!@checkedMovements.length)
			alert(language.Movement.kNoSelectedStudents)
			return
		selectedUsersTemplate = Handlebars.compile(selectedUsersTmpl)
		selfCheckedStudents = @
		buttonClose = 
			label: language.Generic.Buttons.kClose
			action: (dialog) -> 
						$('input[name="Students"][type="checkbox"]:checked').each((indx, element) ->
							selectedStudentIndex = _.findIndex(selfCheckedStudents.checkedMovements, (item) => item.movementId == $(element).val())
							if (selectedStudentIndex < 0)
								$(element).prop('checked', false))
						selfCheckedStudents.showSelectedUsersAmount()
						dialog.close()

		buttonRemove = 
			label: language.Generic.Common.kRemove
			action: (dialog) ->
						if $('input[name="SelStudents"][type="checkbox"]:checked').length == 0
							alert(language.Movement.kNoSelectedStudents)
							return
						$.show.confirmation(language.Movement.kRemoveSelectedStudents).then () -> 
							$('input[name="SelStudents"][type="checkbox"]:checked').each((indx, element) ->
								selectedStudentIndex = _.findIndex(selfCheckedStudents.checkedMovements, (item) => item.movementId == $(element).val())
								selfCheckedStudents.checkedMovements.splice(selectedStudentIndex, 1))
							if selfCheckedStudents.checkedMovements.length == 0
								$('input[name="Students"][type="checkbox"]:checked').prop('checked', false)
								selfCheckedStudents.showSelectedUsersAmount()
								dialog.close()
							else
								dialog.setMessage(selectedUsersTemplate(selectedUsersModel))
							
		buttons = []
		buttons.push buttonRemove		
		buttons.push buttonClose
		
		
		selectedUsersModel =
			checkedMovements: @checkedMovements
			language: language

		$.show.dialog
			modal: true
			title: language.Movement.kSelectedStudents
			size: BootstrapDialog.SIZE_WIDE
			message: selectedUsersTemplate(selectedUsersModel)
			buttons: buttons
			closeByKeyboard: false
			closeByBackdrop: false

	selectAllUsers : (currVal) ->
		$('input[name="Students"][type="checkbox"]:not(:disabled)').each((indx, element) =>
			$(element).prop("checked", currVal))
		@selectUsers()
		@showSelectedUsersAmount()

	selectAllSelectedUsers : (currVal) ->
		$('input[name="SelStudents"][type="checkbox"]:not(:disabled)').each((indx, element) =>
			$(element).prop("checked", currVal))

	selectUsers : ->	
		$('input[name="Students"][type="checkbox"]:not(:checked)').each((indx, element) => 
			indexUsers = _.findIndex(@checkedMovements, (user) => $(element).val() is user.movementId)
			if indexUsers >= 0
				@checkedMovements.splice(indexUsers, 1)
		)
		
		$('input[name="Students"][type="checkbox"]:checked').each((indx, element) => 
			indexUsers = _.findIndex(@checkedMovements, (user) => $(element).val() is user.movementId)
			if indexUsers < 0
				newCheckedUserInfo = 
					movementId: $(element).val()
					studentInfo: _.find(@studentsInfo, (student) => student.movementId == $(element).val())
					internalId: $(element).data("internalid")
				@checkedMovements.push(newCheckedUserInfo))
						
	showMsgInContainerHtml : (message) ->
		@container.html '<div class="col-md-12 alert alert-info" role="alert">' + message + '</div>'
	showWarningMsgInContainerHtml : (message) ->
		@container.html '<div class="col-md-12 alert alert-danger" role="alert">' + message + '</div>'
				
	ExistsCheckedUsers : ->
		return @checkedMovements.length

	AddUsers : ->

		selfAddUsers = @
		@selectUsers()
		
		if !@checkedMovements.length
			alert(language.Movement.kSelectStudentsForDoc)
			return
		
		url = "/webapi/movement/documents/#{@moveDocData.id}/students"
		
		similarsFlag = true
		
		for checkedMovement in @checkedMovements
			if checkedMovement.internalId != ""
				similarsFlag = false
				break
			
		AddStudentsDTO = 
			sourceId: @sourceId, 
			identifiers: _.toArray(_.pluck(@checkedMovements, 'movementId')),
			moveDoc: @moveDocData,
			moveDirection: @moveDirection

		requestSettings = 
			action: "/webapi/movement/documents/#{@moveDocData.id}/students"
			dataType: "json"
			contentType: 'application/json'
			data: AddStudentsDTO
			showProcessing: true
			method: "POST"
			defaultErrorHandling: false
				

		if @queueImportMode and @sourceId == "import" 
			docId = 0
			save = (model) =>
				getTaskFunc = () =>	
					requestSettings.showProcessing = false
					requestSettings.action = "/webapi/movement/documents/#{@moveDocData.id}/students/queue"
					deferr = $.Deferred();

					jsSubmit(requestSettings)
						.fail (response) ->
							selfAddUsers.loadingFail(response)
							deferr.reject()
						.then (response) -> 
							docId = response.moveDocId
							deferr.resolve response.taskId

					return deferr.promise()

				taskQueue.execute
					getTaskFunc: getTaskFunc
					userCloseHandler: () => postTo "/asp/SetupSchool/Movement/MoveBook.asp"
					userErrorHandler: (errorMessage) => 
					hint: "Данное информационное окно можно закрыть не дожидаясь выполнения процесса импорта. \n\n" + 
						"По завершению данного процесса Вам будет отправлено сообщение о результатах его выполнения.\n" +
						"Сообщение можно просмотреть во внутренней почте системы: для этого необходимо нажать на значок почты в правой верхней части меню"
				.fail (response) => if response then @loadingFail(response)
				.then (response) => @loadingDone(docId, response)

		else
			save = () => jsSubmit(requestSettings).fail((response) => @loadingFail(response)).then((docId) => @loadingDone(docId, ""))
		
		if similarsFlag
			similarsManager = similarsManager or new similarsCtrl(@currentUser, @currentSchool, (model) -> save(model))
			similarsManager.checkSimilars(AddStudentsDTO)
			return
		
		do save
		return