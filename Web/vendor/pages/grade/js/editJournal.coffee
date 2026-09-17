class editJournalCtrl
	data = null

	templateManager = new (require "./editJournal-templates.coffee")
	gradeConstants = require "./journal-constants.js"
	layoutManager = require "./editJournal-layout.coffee"
	resourceLoader = require "./resourceLoader.coffee"

	settings =
		modeTKR: false
		moduleQA: false
		noKTP: true
		createTestPlanAllowed: false
		la:
			activities: null
			coursesProducts: null
		refs:
			assignmentTypes: []
			assignmentTypesIndex: {}
			attendanceReasons: null
			studentsWithIndividualEducForm: {}
		subjectPlan:
			cached: false
			lessonId: null

	ctx = {}

	empty_block = '' # переменная для вёрстки (14.07.2015 Милов Лев)

	#подготовка списка уроков КТП. Загрузка с сервера и кэширование#
	_prepareLessons = ()->
		#todo. вынести в отдельный модуль
		temp = $.Deferred()

		if settings.subjectPlan.cached
			temp.resolve settings.subjectPlan.lessons
			return temp.promise()

		if settings.subjectPlan.noSubjectPlan
			temp.resolve()
			return temp.promise()

		jsSubmit
			action:"/webapi/subjectplans/getForSubjectGroup"
			method: "GET"
			data: {sgId: ctx.subjectGroupId}
		.then (response) ->
			_.each response.lessons, (lesson) ->
				lesson.studied = lesson.hours == lesson.hoursStudied
				if lesson.lastStudyDay
					lesson.lastStudyDay = Date.parse lesson.lastStudyDay
				return

			settings.subjectPlan = $.extend {}, settings.subjectPlan, {
				subjectPlanId: response.subjectPlanId
				noSubjectPlan: not response.subjectPlanId
				canAssign: response.variantsExists
				lessons: response.lessons
				cached: true
			}
			temp.resolve response.lessons

		temp.promise()

	_setColNames: () ->
		if not @assignsWitResults.length
			$("#assignments-header-many").addClass("hidden")
			$("#assignments-header-no").removeClass("hidden")
			$("#assignments-header-new").addClass("hidden")
		else
			existNonHomeAssign = _.some(@assignsWitResults, (assign) -> assign.typeId != gradeConstants.assignmentTypes.homeWork)
			if existNonHomeAssign
				$("#assignments-header-many").removeClass("hidden")
				$("#assignments-header-no").addClass("hidden")
				$("#assignments-header-new").removeClass("hidden")
			else
				$("#assignments-header-many").addClass("hidden")
				$("#assignments-header-no").removeClass("hidden")
				$("#assignments-header-new").addClass("hidden")

	_setAttendance: (elem) ->
		grades = $("input[name=" + elem.name + "]", @container)
		index = grades.index elem
		reason = $("select[name=REASON]", @container).eq index
		reason.val gradeConstants.attendanceReasons.missed

	#метод для активации автопереноса фокуса ячейки при заполнении оценок
	_navigateInputs: (ctx) ->
		ctrl = this
		if ctx
			target = $("input[name^=G_]:enabled", ctx)
		else
			target = $("input[name^=G_]:enabled")
		target.navigateInputs
			getCellInputOptions: (elem) ->
				maxMark: settings.markSettings.maxMark,
				minMark: settings.markSettings.minMark,
				maxLength: (settings.markSettings.maxMark + "").length
			specKeys: [48, 96]
			getNextInput: (elem, elemSelector, step, x) ->
				column = $(elem).closest(".assignment-column")
				container = column.closest(".editjournal")
				if x
					inputIndex = $(elemSelector, column).index elem
					sequence = $(".assignment-column", container)
					index = sequence.index column
					nextIndex = index + step
					nextElemContainer = sequence.eq nextIndex
					if nextElemContainer and nextElemContainer.length == 1
						nextElem = $(elemSelector, nextElemContainer).eq inputIndex
				else
					sequence = $(elemSelector, container)
					index = sequence.index elem
					nextIndex = index + step
					nextElem = sequence.eq nextIndex

				if nextElem
					return nextElem[0]
			specKeysHandler: (elem, key) ->
				ctrl._setAttendance elem
				true

	_setAssignLaName = (assign) ->
		if not assign.activityId or assign.activityId == gradeConstants.activities.manual #исключаем возможные "остатки" от очистки ASSIGNMENTACTIVITYDETAILS
			return

		if assign.productId
			assign.laName = settings.la.coursesProducts[assign.productId]?.name
		else
			assign.laName = settings.la.activities[assign.activityId]?.name
		if not assign.laName
			assign.laName = language.Generic.Grade.kActivityRemoved

	#метод базовой валидации формы создания заданий
	_validate: (typeSelect, nameInput) ->
		if typeSelect
			typeId = typeSelect.val()

			if typeId <= 0
				alert language.Generic.Assignment.kATPleaseSelectAssignmentType
				typeSelect.focus()
				return false

		name = nameInput.val()
		if trimStr(name).length == 0
			alert language.Generic.Assignment.kATEnterAssignmentTheme
			nameInput.focus()
			return false

		if trimStr(name).length > gradeConstants.maxLengths.assignTitle
			alert language.Generic.Assignment.kATAssignmentThemeNotMayBe
			nameInput.focus()
			return false
		return true

	_prepareRefs = () ->
		loadAssignTypes = resourceLoader.getAssignTypes()
			.then (assignmentTypes) -> 
				settings.refs.assignmentTypes = assignmentTypes
				settings.refs.assignmentTypesIndex = _.indexBy settings.refs.assignmentTypes, "id"

		loadAttendanceReasons = resourceLoader.getAttendanceReasons()
			.then (reasons) -> 
				settings.refs.attendanceReasons = reasons

		if settings.la.activities != null and settings.la.coursesProducts != null
			return $.when loadAssignTypes, loadAttendanceReasons

		loadActivities = jsSubmit action: "/webapi/grade/activities", method: 'GET'
			.then (activities) -> 
				settings.la.activities = _.indexBy activities, "id"

		loadProducts = jsSubmit	action: "/webapi/grade/products", method: 'GET'
			.then (coursesProducts) -> 
				settings.la.coursesProducts = _.indexBy coursesProducts, "id"

		return $.when loadAssignTypes, loadAttendanceReasons, loadActivities, loadProducts

	_getPerformanceData = (container) ->
		return _.chain $('input, select', container).serializeArray()
			.groupBy (item) -> item.name
			.mapObject (arrFormParamObj) -> 
				_.map arrFormParamObj, (formParamObj) -> formParamObj.value
			.value()

	_prepareAssign = (assign) ->
		if settings.moduleQA and _.contains gradeConstants.testPlansTypes, assign.typeId
			assign.showTestPlan = true

	constructor: (@container, classMeetings, _ctx, _settings) ->
		settings = $.extend {}, settings, _settings
		ctx = $.extend {}, ctx, _ctx

		@classMeetings = _.chain classMeetings
			.filter (cm) -> not cm.readOnly
			.map (cm) -> 
				id: cm.id,
				name: dateUtils.date2str(cm.date)
				date: cm.date
				selected: cm.id == ctx.classMeetingId
			.value()

		Handlebars.registerPartial "assignCol", templateManager.assignColTpl
		Handlebars.registerPartial "attendanceCol", templateManager.attendanceColTpl
		Handlebars.registerPartial "addCommonAssign", templateManager.addCommonAssignTpl
		Handlebars.registerPartial "assignTitle", templateManager.assignTitleTpl
		Handlebars.registerPartial "homeAssignEmptyCol", templateManager.homeAssignEmptyColTpl
		Handlebars.registerPartial "homeAssignCol", templateManager.homeAssignColTpl
		Handlebars.registerPartial "addHomeAssignCmn", templateManager.addHomeAssignCmnTpl
		Handlebars.registerPartial "cmSelect", templateManager.cmSelectTpl
		Handlebars.registerPartial "lessonSelect", templateManager.lessonSelectTpl

		changeHandler = () => 
			console.log "changed"
			dataChanged()
			@setFlagSaveJournal()
		ctrl = this

		@container.off(".edit-journal")
		$(document).off(".edit-journal")

		@container.on("change.edit-journal", "input[name^=G_]", changeHandler)
		@container.on("change.edit-journal", "input[name^=MAll_]", () -> ctrl.clickCheckAll(this))
		@container.on("change.edit-journal", "input[name^=M_]", () -> ctrl.clickCheck(this))
		@container.on("change.edit-journal", "select[name=REASON]", changeHandler)

		#элементы вне контейнера
		$(document).on("click.edit-journal", "a.open-testplan-link", (evt) -> 
			assignId = parseInt $(evt.currentTarget).data("assignid")
			ctrl.openPlan(assignId)
		)
		$(document).on("click.edit-journal", "a.go-edit-planner-link", () -> ctrl.goEditPlanner())

		assignCtxBtnHandler = (handler) ->
			return (evt) -> 
				ctxBtnsBlock = $(evt.currentTarget).closest(".ctx-btns-icons")
				assignId = parseInt ctxBtnsBlock.data("assignid")
				handler(assignId, ctxBtnsBlock)
				return

		@container.on("click.edit-journal", "div.delete.assign-btn", assignCtxBtnHandler((assignId) -> ctrl.delete(assignId)))
		@container.on("click.edit-journal", "div.test-plan.assign-btn", assignCtxBtnHandler((assignId) -> ctrl.goTestPlan(assignId)))

		@container.on("click.edit-journal", "div.edit-assign.assign-btn", assignCtxBtnHandler((assignId, ctxBtnsBlock) -> 
			productId = ctxBtnsBlock.data("productid")
			ctrl.editAssign(assignId, productId);
		))

		$(document.body).off(".edit-journal")

		$(document.body).on "click.edit-journal", "#set-lesson-btn", () => ctrl.setLesson()
		$(document.body).on "click.edit-journal", "#assign-variant-link", () -> ctrl.goAssignVariant()
		
		$(document.body).on "change.edit-journal", "input[name=AN]", changeHandler
		$(document.body).on "change.edit-journal", "select[name=AType]", () -> ctrl.changeAssignType()

		$(document.body).on "click.edit-journal", "button.save-journal-btn", -> ctrl.save()
		$(document.body).on "click.edit-journal", "button.save-journal-with-return-btn", -> ctrl.saveAndBack()
		$(document.body).on "click.edit-journal", ".add-assign-btn", -> ctrl.addAssign()
		$(document.body).on "click.edit-journal", ".add-homeAssign-btn", -> ctrl.addHomeAssign()
		$(document.body).on "click.edit-journal", "button.add-next-homeAssign-btn", () -> ctrl.addNextHomeAssign()

		Handlebars.registerHelper 'selected', (selValue, currValue) ->
			if selValue == currValue
				" selected"
			else
				""

		Handlebars.registerHelper 'IndividualEduc', (studentId) ->
			if settings.refs.studentsWithIndividualEducForm[studentId]
				return "individual-educ"
			else
				return ""

		$(document).bind 'editJournalShow', () =>
			@ejLayoutManager = new layoutManager($(".assignments-block"))
			do @ejLayoutManager.init

	#загрузка данных для редактирования оценок указанного занятия в расписании
	load: (cmid) ->
		cmInfo = _.findWhere @classMeetings, id: cmid

		if not cmInfo
			$.show.error "Ошибка доступа"
			throw "Ошибка доступа к " + cmid

		prevCmId = ctx.classMeetingId
		ctx.classMeetingId = cmid
		ctx.classMeetingDay = cmInfo.date
		hoursPassed = moment(new Date()).diff(moment(ctx.classMeetingDay), 'hours')

		settings.editLimit.restrictAddHomeAssign = settings.editLimit.limitPastEditHomeAssigns and hoursPassed > 0

		def = $.Deferred()
		ret = def.promise()
		ctrl = this


		ret.fail () -> 
			ctx.classMeetingId = prevCmId

		prepareStudents = resourceLoader.getStudentList({sgid: ctx.subjectGroupId, termId: ctx.termId})
			.then (students) =>
				#преобразования под текущие требования editjournal контроллера
				ctrl.students = _.map students, (student, index) ->
					student.studentId = student.id
					student.name = student.fullName
					if student.free
						student.name += " " + language.Generic.LearnApp.kDeleted
					student.num = index + 1
					return student

				if ctrl.students.length > 10
					$("#add-assign-top-btn").addClass("hide")
					$("#add-homeAssign-top-btn").addClass("hide")
				else
					$("#add-assign-top-btn").removeClass("hide")
					if not settings.editLimit.restrictAddHomeAssign
						$("#add-homeAssign-top-btn").removeClass("hide")
		prepareRefs = _prepareRefs()

		$.when(prepareStudents, prepareRefs)
			.then () =>
				jsSubmit
					action:"/webapi/grade/journal/edit"
					method: "GET"
					showProcessing: true
					data: 
						cmid: ctx.classMeetingId 
						sgId: ctx.subjectGroupId
						termId: ctx.termId
				.fail (response) => 
					def.reject()
				.then (response) =>
					data = response
					settings.moduleQA = response.moduleQA
					#преобразования под текущие требования editjournal контроллера
					
					#джойним посещаемость с учащимися
					@attendance = _.map ctrl.students, (student) ->
						mapRes = _.find(data.attendance, (att) -> att.studentId == student.id) or {studentId: student.id, reason: null}
						mapRes.readonly = student.free
						return mapRes
			
					@assignsWitResults = _.map data.assignments, (assign) ->
						#джойним оценки с учащимися 
						assign.results = _.map ctrl.students, (student) ->
							mapRes = _.find(assign.results, (res) -> res.studentId == student.id) or {studentId: student.id}
							mapRes.result = mapRes.mark
							mapRes.marked = mapRes.duty or if mapRes.result then true else false
							mapRes.readonly = student.free
							return mapRes

						#заполняем наименвание типа заданий
						typeInfo = settings.refs.assignmentTypesIndex[assign.typeId]
						if typeInfo
							if typeInfo.id is gradeConstants.assignmentTypes.DKR
								assign.typeName = typeInfo.abbr
							else
								assign.typeName = typeInfo.name
						else
							console.log "неизвестный тип задания " + assign

						_setAssignLaName(assign)

						#для мсоко выставляем признак для показа протокола
						if settings.moduleQA and _.contains gradeConstants.testPlansTypes, assign.typeId
							assign.showTestPlan = true
						return assign

					settings.refs.studentsWithIndividualEducForm = _.indexBy(_.filter(ctrl.students, (student) -> student.individualEduc), "id")

					settings.subjectPlan = $.extend {}, settings.subjectPlan, {
						lessonId: data.lessonId
						lessonName: data.lessonName
						initLessonId: data.lessonId or -1
					}
				
					if data.lessonId
						settings.subjectPlan.noSubjectPlan = false
						def.resolve()
					else
						_prepareLessons().then () -> def.resolve()
					return

		return ret

	close: () ->
		if @ejLayoutManager
			@ejLayoutManager.destroy()
		@ejLayoutManager = null


	#рендеринг списка заданий и результатов по ним с посещаемостью
	display: () ->
		ctrl = this

		#разделяем задания по типу (д/з и остальные)
		homeAssignment = _.find @assignsWitResults, (assign) -> assign.typeId == gradeConstants.assignmentTypes.homeWork
		otherAssignments = _.without @assignsWitResults, homeAssignment

		#для всех предметов кроме физ-ры - убираем причину ОСВ
		attendanceReasons = settings.refs.attendanceReasons
		if not settings.editLimit.attendanceReleasedMarkAllowed
			attendanceReasons = _.reject attendanceReasons, (reason) -> reason.mark == gradeConstants.attendanceReasons.released

		#рендеринг основной формы экрана
		model =
			language: language
			students: @students
			assignments: otherAssignments
			homeAssignment: homeAssignment
			attendance: @attendance
			attendanceReasons: attendanceReasons
			restrictAddHomeAssign: settings.editLimit.restrictAddHomeAssign
			marksLength: (settings.markSettings.maxMark + "").length
			constants: gradeConstants
		template = Handlebars.compile templateManager.editJournalTpl
		@container.html template model

		#установка чекбокса обязательно для всех
		freeStudentsIdx = _.chain(@students).filter((student) -> student.free).indexBy("id").value()
		_.each @assignsWitResults, (assign) -> 
			if _.every(assign.results, (result) -> result.marked or freeStudentsIdx[result.studentId] )
				$("input[name=MAll_" + assign.id + "]").prop('checked', true)

		#рендеринг фильтр-панели
		_.each @classMeetings, (cm) -> cm.selected = cm.id == ctx.classMeetingId
		filtersModel =
			language: language
			subjectGroupName: ctx.subjectGroupName
			termName: ctx.termName
			classMeetings: @classMeetings
			subjectPlan: settings.subjectPlan

		filtersTemplate = Handlebars.compile templateManager.filterTpl
		filtersHtml = filtersTemplate filtersModel
		$('#state-edit .filters-panel').html filtersHtml

		$('#prev-cm').click () -> ctrl.changeCm(-1)
		$('#next-cm').click () -> ctrl.changeCm(1)
		$('select[name="CMID"]').change () -> ctrl.changeCm(0)

		@_navigateInputs()
		@performanceChanged = false
		$(document).trigger('editJournalShow')

	changeAssignType: () ->
		assignType = $('*[name="AType"]').val()
		if parseInt(assignType) is gradeConstants.assignmentTypes.DKR

			jsSubmit
				action: '/webapi/grade/diagnosticWorks'
				data:
					cmid: ctx.classMeetingId
				showProcessing: true
				method: 'GET'
				onSuccess: (response) ->
					template = Handlebars.compile templateManager.diagnosticWorkTpl
					model =
						assignmentTypesChoise: true
						variants: response
						typeId: null
					$('#diagnosticWork').append template model

			$('#diagnosticWork').show()
		else
			$('#diagnosticWork').hide()
			$('#diagnosticWork').children().detach()
		return

	#определение связи занятия с уроком КТП#
	setLesson: () ->
		ctrl = this
		templateCompiled = Handlebars.compile templateManager.setLessonTpl
		#todo. вынести в отдельный модуль
		_prepareLessons()
		.then (lessons) ->
			if lessons.length is 0
				templateCurriculumNotFilled = Handlebars.compile templateManager.messageCurriculumNotFilled
				modelMessage = language: language
				$.show.alert templateCurriculumNotFilled modelMessage
				return
			
			lessonId = settings.subjectPlan.lessonId

			if lessonId <= 0
				#Если тема урока не выбрана, то предложить тему для которой не выбраны часы
				suggestedLesson = _.find lessons, (lesson) -> lesson.hours > lesson.hoursStudied

			if lessonId
				lesson = _.findWhere lessons, id: lessonId
			else
				lesson = _.first lessons
			
			settings.subjectPlan.lessonName = lesson.lessonName
			settings.subjectPlan.lessonId = lessonId

			model =
				lessons: lessons
				language: language
				suggestedLessonId: lessonId

			templateLesson = $(templateCompiled model)
			$('#lesson-theme-filter-row .form-control').replaceWith(templateLesson)
			lessonSelect = $('#lesson-theme-filter-row select.form-control')

			selectLesson = () ->
				lessonId = parseInt lessonSelect.val()
				settings.subjectPlan.lessonId = lessonId
				settings.subjectPlan.lessonName = lesson.lessonName
				ctrl.lessonChanged = true
				dataChanged()

			if suggestedLesson 
				lessonSelect.val(suggestedLesson.id)
				selectLesson()

			lessonSelect.change selectLesson

	#получение текста домашнего задания из КТП
	getHomeAssignFromPlan: (lessons) ->
		lessonHomeAssignModel =
			lessons: lessons
			language: language

		#todo. темплейт формы
		template = Handlebars.compile templateManager.getHomeAssignFromPlanTpl
		html = template lessonHomeAssignModel

		lessonHomeAssignInput = null

		getHomeAssignTextDeffered = $.Deferred()

		$.show.dialog
			title: language.Generic.Grade.kSubjectPlanHomeAssignmentText
			message: html
			size: BootstrapDialog.SIZE_WIDE
			buttons: [
				{
					label: language.Generic.Grade.kUse
					action: (dialog) ->
						#проверку выбора д.з.
						text = lessonHomeAssignInput.val()
						dialog.successClose()
						getHomeAssignTextDeffered.resolve text
					hotkey: 13
					cssClass: 'btn-primary'
				},
				{
					label: language.Generic.Buttons.kCancel
					hotkey: 23
					action: (dialog) ->
						dialog.close()
						getHomeAssignTextDeffered.reject()
				}
			],
			onshow: (dialog) ->
				#добавляем обработчик смены урока в КТП
				lessonsCombo = $("*[name='LESSONID']", dialog.$modalContent)
				lessonsCombo.val _.last(lessons).id
				lessonHomeAssignInput = $("input[name='LESSONHOMEASSIGNMENT']", dialog.$modalContent)

				syncLessonHomeAssign = () ->
					selectedLessonId = parseInt lessonsCombo.val()
					selectedLesson = _.find lessons, (lesson) -> lesson.id == selectedLessonId
					lessonHomeAssignInput.val selectedLesson.homeAssignment || selectedLesson.lessonName

				lessonsCombo.change syncLessonHomeAssign
				syncLessonHomeAssign()

		getHomeAssignTextDeffered.promise()

	#добавить домашнее задание#
	addHomeAssign: () ->
		ctrl = this
		model =
			assignmentName: ""
			assignmentTypes: _.filter settings.refs.assignmentTypes, (type) -> type.id == gradeConstants.assignmentTypes.homeWork
			assignmentTypesChoise: false
			fromKTP: not settings.subjectPlan.noSubjectPlan
			typeId: gradeConstants.assignmentTypes.homeWork
			language: language

		onShowEventHandler = (dialog) ->
			homeAssignNameInput = $("input[name='AN']", dialog.$modalContent)
			$("#useLessonHomeAssignBtn", dialog.$modalContent).click ->
				_prepareLessons().then (lessons) ->
					#фильтр - только уже прошедшие темы уроков
					lessons = _.filter(lessons, (lesson) -> lesson.lastStudyDay != null and lesson.lastStudyDay < ctx.classMeetingDay)
					lessons = _.sortBy(lessons, (lesson) -> lesson.lastStudyDay)
					if lessons.length == 0
						$.show.message language.Generic.Assignment.kUnableRetrieveHomeWorkText
						return
					ctrl.getHomeAssignFromPlan(lessons).then (planHomeAssign) ->
						homeAssignNameInput.val planHomeAssign

		ctrl.createAssign model, templateManager.addHomeAssignTpl, {onShow: onShowEventHandler}
		.then (newAssign) ->
			#рендерим шаблон и добавляем на страницу
			template = Handlebars.compile templateManager.homeAssignColTpl
			empty_block = $(".empty-block")
			$("#home-assignment-column").empty()
			$("#home-assignment-column").append template $.extend {}, newAssign, {language: language}
			ctrl._navigateInputs $("#home-assignment-column")
			ctrl._setColNames()
			$("#home-assign-add-button").hide();

			$(document).trigger('assignmentsColsChanged')

	prepareAssignModel = () ->
		temp = $.Deferred()

		defaultAssignName = if settings.subjectPlan.lessonId then settings.subjectPlan.lessonName else language.Generic.Grade.kNoTheme
		
		model =
			assignmentName: defaultAssignName
			assignmentTypes: null
			assignmentTypesChoise: true
			typeId : null
			language: language
			variants: null
		
		assignTypesWothoutHomeWork = _.filter settings.refs.assignmentTypes, (type) -> type.id != gradeConstants.assignmentTypes.homeWork

		if not settings.moduleQA
			assignTypesWothoutHomeWork = _.filter assignTypesWothoutHomeWork, (type) -> type.id != gradeConstants.assignmentTypes.DKR
			model.assignmentTypes = assignTypesWothoutHomeWork
			#по умолчанию - тип задания - ответ на уроке
			model.typeId = settings.lessonAnswerTypeId
			temp.resolve model
		else
			#по умолчанию - тип задания - не выбрано
			model.assignmentTypes = assignTypesWothoutHomeWork
			model.variants = []
			temp.resolve model

		return temp.promise()

	#добвить задание#
	addAssign: () ->
		ctrl = this
		prepareAssignModel()
		.then (model) -> ctrl.createAssign model, templateManager.addAssignTpl
		.then (newAssign) ->
			#рендерим шаблон и добавляем на страницу
			template = Handlebars.compile templateManager.assignColTpl
			html = template $.extend {}, newAssign, {language: language}
			$('.div-table-safari').append html
			ctrl._navigateInputs $("#assignment_" + newAssign.id)
			ctrl._setColNames()

			$(document).trigger('assignmentsColsChanged')

	#добавить задание на следующее занятие#
	addNextHomeAssign: () ->
		ctrl = this

		#todo. кэширование следующих занятий
		jsSubmit
			action: "/asp/ajax/classmeetings/getnextclassmeetingsforsg.asp"
			data:
				sgid: ctx.subjectGroupId
				cmid: ctx.classMeetingId
			showProcessing: true
		.then (response) ->
			nextClassMeetings = response.data.nextClassMeetings
			if settings.editLimit.limitPastEditHomeAssigns
				now = new Date()
				nextClassMeetings = _.filter nextClassMeetings, (cm) -> new Date(cm.day) > now

			if nextClassMeetings.length == 0
				$.show.message language.Generic.Grade.kNoNextClassmeetings
				return

			model =
				assignmentTypes: _.filter settings.refs.assignmentTypes, (type) -> type.id == gradeConstants.assignmentTypes.homeWork
				assignmentTypesChoise: false
				typeId: gradeConstants.assignmentTypes.homeWork
				language: language
				fromKTP: not settings.subjectPlan.noSubjectPlan and settings.subjectPlan.lessonId
				classMeetings: nextClassMeetings

			if settings.subjectPlan.lessonId
				model.lesson =
					id: settings.subjectPlan.lessonId
					name: settings.subjectPlan.lessonName

			#todo. темплейт формы
			template = Handlebars.compile templateManager.addNextHomeAssignTpl
			html = template model

			$.show.dialog
				title: language.Generic.Grade.kAddHomeAssignOnNextClassmeeting
				message: html
				size: BootstrapDialog.SIZE_WIDE
				buttons: [
					{
						label: language.Generic.Buttons.kAdd + "/" + language.Generic.Buttons.kEdit
						action: (dialog) ->
							cmCombo = $('select[name=NEXTCMID]', dialog.$modalContent)
							assignNameInput = $('input[name=AN]', dialog.$modalContent)

							if not ctrl._validate null, assignNameInput
								return

							name = assignNameInput.val()
							nextCmId = parseInt cmCombo.val()
							nextCmInfo = _.find model.classMeetings, (cm) -> cm.id == nextCmId

							jsSubmit
								data:
									cmid: nextCmId
									sgid: ctx.subjectGroupId
									assignmentId: nextCmInfo.homeAssignment?.id
									an: name
								action: "/asp/ajax/Assignments/CreateOrEditHomeAssignment.asp"
								nocache: true
								showSuccessMessage: true
							.then () -> dialog.successClose()
						hotkey: 13
						cssClass: 'btn-primary'
					},
					{ label: language.Generic.Buttons.kCancel, hotkey: 23, action: (dialog) -> dialog.close() }
				],
				onshow: (dialog) ->
					cmCombo = $('select[name=NEXTCMID]', dialog.$modalContent)
					assignNameInput = $('input[name=AN]', dialog.$modalContent)

					if model.lesson
						$("#useLessonHomeAssignBtn", dialog.$modalContent).click ->
							_prepareLessons().then (lessons) ->
								#фильтр - только текущий урок
								lessons = _.filter(lessons, (lesson) -> lesson.id == model.lesson.id)
								ctrl.getHomeAssignFromPlan(lessons).then (planHomeAssign) ->
									assignNameInput.val planHomeAssign

					syncNextCmHomeAssign = () ->
						nextCmId = parseInt cmCombo.val()
						nextCmInfo = _.find model.classMeetings, (cm) -> cm.id == nextCmId
						homeAssignText = nextCmInfo.homeAssignment?.name ? ""
						assignNameInput.val homeAssignText

					syncNextCmHomeAssign()
					cmCombo.change syncNextCmHomeAssign

	#редактировать задание
	editAssign: (assignId, productId) ->
		checkForChanges().then () ->
			postTo "/asp/Curriculum/EditAssignment.asp",
				CMID: ctx.classMeetingId
				AID: assignId
				BMODULEQA: settings.moduleQA
				LAJID: productId
				SCHOOLYEARID: ctx.schoolYearId

	#открыть Протокол контрольной работы
	goTestPlan: (assignId) ->
		checkForChanges().then () ->
			postTo "/asp/Grade/QA/TestPlanResults.asp",
				CMID: ctx.classMeetingId
				AID: assignId
				SCLID: ctx.subjectGroupId

	#открыть План контрольной работы
	openPlan: (assignId) ->
		checkForChanges().then () ->
			postTo "/asp/Grade/QA/TestPlan.asp",
				CMID: ctx.classMeetingId
				AID: assignId
				SCLID: ctx.subjectGroupId

	goEditPlanner: () ->
		checkForChanges().then () ->
			postTo "/asp/Curriculum/Planner.asp",
				SGID: ctx.subjectGroupId
				GRADEID: settings.gradeId

	goAssignVariant: () ->
		checkForChanges().then () ->
			postTo "/asp/Curriculum/VariantsCSGs.asp",
				SGID: ctx.subjectGroupId
				GRADEID: settings.gradeId

	#удаление заданий
	delete: (assignId) ->

		ctrl = this
		$.show.confirmation language.Generic.Assignment.kSureToDeleteAssignment
		.then ->
			jsSubmit
				action: "/asp/ajax/assignments/deleteAssignment.asp"
				data: assignmentid: assignId
				showProcessing: true
		.then (response) ->
			#из списка заданий исключаем удаленное задание
			deletingAssign = _.find ctrl.assignsWitResults, (assign) -> assign.id == assignId
			ctrl.assignsWitResults = _.without ctrl.assignsWitResults, deletingAssign
			#удаление задания из разметки
			if deletingAssign.typeId == gradeConstants.assignmentTypes.homeWork
				if empty_block == ''
					$(".home-assignment .results-block div").empty()
					empty_block = $(".home-assignment .results-block")
					empty_block.addClass("empty-block").removeClass("results-block")

				$("#home-assignment-column").empty()
				template = Handlebars.compile templateManager.homeAssignEmptyColTpl
				$("#home-assignment-column").append template $.extend {}, {language: language}
				$("#home-assignment-column .empty-block").replaceWith(empty_block)
				$("#home-assign-add-button").show();
			else
				$("#assignment_" + assignId).remove()
			#установка заголоков
			ctrl._setColNames()

			$(document).trigger('assignmentsColsChanged')

	#сохранение#
	save: () ->
		if !window.dataWereChanged
			alert language.Generic.SetupSchoolUI.kDataNotModified
			return

		data =
			lessonId: settings.subjectPlan.lessonId || -1
			sgid: ctx.subjectGroupId
			cmid: ctx.classMeetingId
			saveJournal: if @performanceChanged then 1 else 0

		if not @lessonChanged 
			data.lessonId = -2

		if @performanceChanged 
			performanceData = _getPerformanceData(@container)
			data = $.extend data, performanceData

		jsSubmit
			data: data
			action: "/webapi/grade/journal/edit"
			method: "POST"
			nocache: true
			showProcessing: true
		.then () => 
			window.dataWereChanged = false
			@performanceChanged = false

			if @lessonChanged and settings.subjectPlan.initLessonId != data.lessonId
				#если происходил выбор/смена темы урока - то нужно скорректировать данные по часам изучения уроков
				if settings.subjectPlan.initLessonId > 0
					prevLesson = _.findWhere settings.subjectPlan.lessons, id: settings.subjectPlan.initLessonId
					prevLesson.hoursStudied = prevLesson.hoursStudied - 1
					prevLesson.studied = prevLesson.hoursStudied >= prevLesson.hours
				if data.lessonId > 0
					lesson = _.findWhere settings.subjectPlan.lessons, id: data.lessonId
					lesson.hoursStudied = lesson.hoursStudied + 1
					lesson.studied = lesson.hoursStudied >= lesson.hours
			
			@lessonChanged = false
			settings.subjectPlan.initLessonId = data.lessonId

	#сохранение и возврат#
	saveAndBack: () ->
		if !window.dataWereChanged
			do @goBackToJournal
			return
		@save().then @goBackToJournal
		return

	goBackToJournal: () ->
		#do goCommonBack
		$("a.back").click()

	setFlagSaveJournal: () ->
		@performanceChanged = true

	clickCheckAll: (checkInput) ->
		assignId = checkInput.value
		if checkInput.checked
			@checkAll assignId
		else
			@uncheckAll assignId

	checkAll: (sAID) ->
		$checkM = $("input:checkbox[name=M_" + sAID + "]:enabled", @container)
		nLen = $checkM.length - 1
		for i in [0..nLen]
			$checkM[i].checked = true
		dataChanged()
		@setFlagSaveJournal()

	uncheckAll: (sAID) ->
		$checkMs = $("input:checkbox[name=M_" + sAID + "]:enabled", @container)
		$Grades = $("input[name=G_" + sAID + "]", @container)
		nLen = $checkMs.length - 1
		for i in [0..nLen]
			if trimStr $Grades[i].value == ''
				$checkMs[i].checked = false
		dataChanged()
		@setFlagSaveJournal()

	restoreCheck: (obj) ->
		if !obj.checked
			alert language.Grade.kTickMarkIsNecessary
			obj.checked = true

	clickCheck: (obj) ->
		sName = obj.name
		sAID = sName.substr(2)
		index = $("input[name=M_" + sAID + "]", @container).index(obj)
		$Grades = $("input[name=G_" + sAID + "]", @container)
		if trimStr($Grades[index].value) != ''
			@restoreCheck obj
		else
			dataChanged()
			@setFlagSaveJournal()

	#смена даты урока
	changeCm: (step) ->
		ctrl = this
		select_cm = $("select[name='CMID']")

		#initialIndex = $("select[name=CMID]").prop("selectedIndex")
		initialIndex = select_cm.find("option[value='" + ctx.classMeetingId + "']").prop("index")

		simpleChangeCM = (step) ->
			days = select_cm.find("option").length
			if step == 1 and days == initialIndex + step
				return

			if step == -1 and initialIndex == 0
				return

			if step != 0
				select_cm.prop("selectedIndex", initialIndex + step)

			cmId = parseInt $("select[name='CMID']").val()

			processing = $.show.processing()
			ctrl.load(cmId)
				.then () ->
					ctrl.ejLayoutManager.destroy()
					processing.close()
					window.location.hash = "#edit-" + cmId
					window.dataWereChanged = false
					ctrl.display()
				.fail () ->
					select_cm.prop("selectedIndex", initialIndex )

		confirmChangeCM = (step) ->
			buttons = [
				{
					label: $.show.defaults.yesText
					action: () ->
						ctrl.save().then () -> simpleChangeCM step
				}
				{
					label: $.show.defaults.noText
					action: () -> simpleChangeCM step
				}
				{
					label: $.show.defaults.cancelText
					icon: 'glyphicon glyphicon-ban-circle'
					hotkey: 27
					action: () -> select_cm.prop("selectedIndex", initialIndex);
				}
			]
			$.show.confirmation language.Generic.Grade.kConfirmOnChangeCM, language.Generic.SetupSchoolUI.kConfirm, buttons, true

		if window.dataWereChanged
			confirmChangeCM step
		else
			simpleChangeCM step
		return true

	#общий абстрактный метод создания задания#
	createAssign: (model, template, in_options) ->
		options =
			#обработчик события показ модального окна
			onShow: null
			#возможность расширения валидации
			check: null

		options = $.extend options, in_options

		templateCompiled = Handlebars.compile template

		saveDeffered = $.Deferred()

		$.show.dialog
			title: language.Generic.Grade.kCreateAssignment
			message: templateCompiled model
			size: BootstrapDialog.SIZE_WIDE
			buttons: [
				{
					label: language.Generic.Buttons.kAdd
					hotkey: 13
					action: (dialog) =>
						typeSelect = $("select,input", dialog.$modalContent).filter("[name=AType]")
						nameInput =  $('input[name=AN]', dialog.$modalContent)

						if not @_validate typeSelect, nameInput
							return

						typeId = parseInt typeSelect.val() || -1
						if typeId == -1
							$.show.message "Выберите тип задания"
							return

						typeInfo = settings.refs.assignmentTypesIndex[typeId]
						name = nameInput.val()

						if settings.moduleQA and typeInfo.id is gradeConstants.assignmentTypes.DKR
							diagnosticWorkData = $('*[name=DiagnosticWork]', dialog.$modalContent).val()
							if !diagnosticWorkData
								alert "Выберите вариант диагностической работы"
								nameInput.focus()
								return false
							diagnosticWorkData = diagnosticWorkData.split('_')
							dwVariantId = diagnosticWorkData[0]
							dwTestPlanId = diagnosticWorkData[1]

						if options.check and !options.check()
							return

						saveExtraData = 
							lessonId: settings.subjectPlan.lessonId || -1
							sgid: ctx.subjectGroupId
							cmid: ctx.classMeetingId
							RegimeAddAssign: 1
							AN: name
							AType: typeId
							saveJournal: if @performanceChanged then 1 else 0

						if typeInfo.id is gradeConstants.assignmentTypes.DKR
							saveExtraData.dwVariantId = dwVariantId
							saveExtraData.dwTestPlanId = dwTestPlanId

						if @performanceChanged
							performanceData = _getPerformanceData(@container)
							saveExtraData = $.extend saveExtraData, performanceData

						jsSubmit
							data: saveExtraData
							action: "/webapi/grade/journal/edit"
							method: "POST"
							nocache: true
							showProcessing: true
						.then (response) =>
							window.dataWereChanged = false
							@performanceChanged = false

							#собираем модель нового задания
							newAssign =
								id: response.assignmentId
								name: response.assignmentName
								typeId: typeId
								typeName: if typeInfo.id is gradeConstants.assignmentTypes.DKR then typeInfo.abbr else typeInfo.name
								results: _.map @students, (student) -> studentId: student.studentId, result: null, readonly: student.free

							_prepareAssign newAssign

							#добавляем задание в модель
							@assignsWitResults.push newAssign

							dialog.successClose()

							if settings.moduleQA and _.contains gradeConstants.testPlansTypes, newAssign.typeId
								templateMessageAdd = Handlebars.compile templateManager.messageAssignmentAdded
								modelMessage =
									assignId: newAssign.id
									isTestPlansType: _.contains gradeConstants.testPlansTypes, newAssign.typeId
									language: language

								$.show.message templateMessageAdd modelMessage
							saveDeffered.resolve newAssign

					cssClass: 'btn-primary'
				},
				{ label: language.Generic.Curriculum.kBtnCancel, hotkey: 23, action: (dialog) -> dialog.close() }
			],
			onshow: (dialog) ->
				if options.onShow
					options.onShow dialog

		saveDeffered.promise()

#для поддержки js модульности
module.exports = editJournalCtrl