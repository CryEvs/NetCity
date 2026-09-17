editjournalWrapper = null

adjustAssignsBlockWidth = () ->
	# Добавляем размер ".div-table-safari"
	assignments_block = $(".div-table-safari")
	assignment_container = $(".assignment-container")
	assignment_container_width = 0
	
	#расчет ширины одного столбца
	$(assignment_container).each () -> 
		assignment_container_width = $(this).width()
		return false

	if not assignment_container.length
		return 

	#расчет общей ширины блока "задания"
	totalWidth = assignment_container_width * (assignment_container.length - 1)
	assignments_block.width totalWidth

scanJournalTables = () ->
	editjournalWrapper
		.filter ".assignments-block:not(.floating-scrolls)"
		.each (index, element) ->
			table = $(element)
			parent = table.parent()
			factWidth = table.prop "clientWidth"
			availWidth = parent.prop "clientWidth"
			#если ширина таблицы больше ширины контейнера больше
			if factWidth > availWidth 
				floatingScroll.initScrollableBlock table
				parent.css("overflow-x", "")

$(document).bind 'editJournalShow', () ->
	editjournalWrapper = $(".assignments-block")
	do adjustAssignsBlockWidth

	#по загрузке доп. стилей показываем таблицу
	deferredResLoader.ready () -> 
		$("#editJournal").addClass "ready"
		$("#legend").addClass "ready"

$(document).bind 'init-floating-scroll', () -> 
	do adjustAssignsBlockWidth
		
#доп. обработчик для базового плагина прокрутки (см. block-floating-scrolls.coffee)
$(document).bind 'scan-wide-tables', () -> 
	do scanJournalTables	

$(document).bind 'assignmentsColsChanged', () -> 
	do adjustAssignsBlockWidth
	mCSB_container_width = 
		"width": 0 + "px"
	$('.mCSB_container').css mCSB_container_width

# CoffeeScript
class editJournalCtrl
	data = null
	
	settings = 
		modeTKR: false
		moduleQA: false
		noKTP: true
		createTestPlanAllowed: false
			
	ctx = 
		cached_lessons: null
	
	empty_block = '' # переменная для вёрстки (14.07.2015 Милов Лев)

	assignTitleTpl = '
		<div class="task-header">Задание</div>
		<div class="assignment-title">
			{{#ifCond typeId "==" @root.constants.MKRTypeId}}
				<input type="hidden" name="MKRAID" value="{{id}}">
			{{/ifCond}}
			<input type="hidden" name="AID" value="{{id}}">
			<div class="ctx-btns-icons ctx-btns-icons-xs">
				<div class="danger delete" title="{{@root.language.Generic.Buttons.kRemove}}" onclick="controller.delete({{id}})"><span class="glyphicon glyphicon-remove"></span></div>
				<div class="primary edit-assign" title="{{@root.language.Generic.Grade.kEditAssignment}}"  onclick="controller.editAssign({{id}}, \'{{productId}}\')"><span class="glyphicon glyphicon-pencil"></span></div>
				
				{{#if showTestPlan}}
				<div title="{{@root.language.Generic.QualityAssessment.kTestPlanResults}}" class="test-plan primary " onclick="controller.goTestPlan({{id}})"><span class="glyphicon glyphicon-list-alt"></span></div>
				{{/if}}
				<input type="checkbox" name="M_All_{{id}}" value="{{id}}" onclick="controller.clickCheckAll(this);" tooltip="{{@root.language.Generic.Grade.kCheckUncheckAll}}">
			</div>
			<span title="{{name}}" class="assignment-name">
				{{name}}
				
			</span>
			
			{{#if laName}}
			<div class="assignment-activity">
				<span>{{laName}}</span>
			</div>
			{{/if}}
			
			{{#if typeName}}
			<div class="assignment-type">
				<span>{{typeName}}</span>
			</div>
			{{/if}}
		</div>'
		
	messageAssignmentAdded = '
	{{@root.language.Generic.Grade.kAssignmentAdded}} 
		{{#if isTestPlansType}}
			<br>{{@root.language.Generic.Grade.kForFillingTestPlan}}
				<a HREF="JavaScript:controller.goTestPlan({{assignId}})" onclick="controller.goTestPlan({{assignId}})" title="{{@root.language.Generic.Grade.kTestPlan}}">
					{{@root.language.Generic.Grade.kTestPlan}}
				</a>
		{{/if}}'
		
	messageCurriculumNotFilled = '
	{{@root.language.Generic.Curriculum.kCurriculumNotFilled}}
		<br><a HREF="JavaScript:controller.goEditPlanner()" onclick="controller.goEditPlanner()" title="{{@root.language.Generic.Curriculum.kCurriculum}}">
				{{@root.language.Generic.Curriculum.kGoEdit}}
			</a>'

	assignColTpl = '
		<div class="assignment-container assignment-column" id="assignment_{{id}}">
			{{> assignTitle}}

			<div class="results-block">
				{{#each results}}
					<div>
						<span><input type="checkbox" name="M_{{../id}}" value="{{studentId}}" onclick="controller.clickCheck(this,{{@index}});" {{#if marked}}checked{{/if}}></span>
						<input name="G_{{../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" onchange="dataChanged(); controller.setFlagSaveJournal()">
					</div>
				{{/each}}
			</div>
		</div>'

	homeAssignEmptyColTpl = '
		<span class="home-assignments-header">{{language.Generic.Assignment.kHomeAssignment}}</span>
		{{#unless restrictAddHomeAssign}}
			<div class="add-assignments" onclick="controller.addHomeAssign()" title="{{language.Generic.Grade.kAddAssignment}}">
				<span>{{language.Generic.Buttons.kAdd}}</span>
				<i class="icon-plus-sign"></i>
			</div>
			<div class="add-assignments-adaptive">
				<i class="icon-plus-sign" onclick="controller.addHomeAssign()" title="{{language.Generic.Grade.kAddAssignment}}" ></i>
			</div>
		{{/unless}}

		<div class="empty-block">
			{{#each students}}
				<div></div>
			{{/each}}
		</div>'
		
	homeAssignColTpl = '
		<span class="assignments-header">{{@root.language.Generic.Assignment.kHomeAssignment}}</span>
			{{> assignTitle}}
		<div class="results-block">
			{{#each results}}
				<div>
					<span><input type="checkbox" name="M_{{../id}}" value="{{studentId}}" onclick="controller.clickCheck(this,{{@index}});" {{#if marked}}checked{{/if}}></span>
					<input name="G_{{../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" onchange="dataChanged(); controller.setFlagSaveJournal()">
				</div>
			{{/each}}
		</div>'

	attendanceColTpl = '
		<div class="attendance-block">
			{{#each attendance}}
				<div>
					<select name="REASON" onchange="dataChanged(); controller.setFlagSaveJournal()">
						<option value=""></option>
						{{#each ../attendanceReasons}}
							<option value="{{ReasonMark}}" {{selected ../reason ReasonMark}}>{{ReasonMark}}</option>
						{{/each}}
					</select>
				</div>
			{{/each}}
		</div>'

	editJournalTpl = '
		<div class="task-text">Задания</div>
		<div class="editJournal-panel">
			<div class="task">
				<div class="task-home active" title="Домашнее задание" >
					<!--<span class="task-home-text hidden" >Название д/з</span>-->
					<span class="task-home-text" >Название д/з</span>
					<span class="glyphicon glyphicon-plus-sign"></span>
				</div>
				<div class="task-new">
					<span class="glyphicon glyphicon-plus-sign"></span>
					<span class="task-new-text">Добавить новое задание</span>
				</div>
										
				<div class="task-menu-left hidden "></div>
				<div class="task-menu-right hidden"></div>
				<div class="task-wraper">
					<div class="task-menu">
						<div class="task-1 " title="Задание">Равнобедренный Равнобедренный треугольниктреугольник</div>
						<div class="task-2" title="Задание">Параллелограмм</div>
						<div class="task-3" title="Задание" >Синус</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="editjournal-wrapper">
			<div class="editjournal">
				
				

				<div class="assignments-header-block">
					<div id="assignments-header-many" class="assignments-header {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kAssignments}}</div>
				</div>

				<div class="editjournal-left-block task-active">
					<!-- ученики -->
					<div class="studentlist head">
						<div class="student-title">{{language.Common.kStudents}}</div>
						<div class="student-block">
							{{#each students}}
								<div class="student">
									<input type="hidden" name="SID" value="{{studentId}}">
									<span></span>
									{{num}}. {{name}}
								</div>
							{{/each}}
						</div>
					</div>
						
					<!-- Домашняя работа -->
					<div class="home-assignment assignment-column head" id="home-assignment-column">
						{{#if homeAssignment}} 
							{{#with homeAssignment}}
							{{> homeAssignCol}}
							{{/with}}
						{{else}}
							{{> homeAssignEmptyCol}}
						{{/if}}

					</div>

				</div>
				<!-- оценки -->
				<div class="assignments-block-wrapper">
					
					<div class="assignments-block head">
						
					
						<div class="div-table-safari">

							{{#each assignments}}
								{{> assignCol}}
							{{/each}}
							
							<div class="wrapper">
								{{#each students}}
									<div></div>
								{{/each}}
							</div>

						</div>
						
							
					</div>
					
					
				</div>

				<div class="editjournal-right-block">

					<!-- для клонирования -->
					<div class="new-assignment-container head">

						<div class="assignment-container assignment-column head">

							<div class="assignment-title">
								<span id="assignments-header-new" class="new-challenge-text {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kCreateAssignmentShort}}</span>
								<span id="assignments-header-no" class="assignments-header {{#if assignments.length}}hidden{{/if}}">{{language.Generic.Grade.kAssignments}}</span>
							</div>

							<div class="add-assignments" onclick="controller.addAssign()" title="{{language.Generic.Grade.kAddAssignment}}">
								<span>{{language.Generic.Buttons.kAdd}}</span>
								<i class="icon-plus-sign"></i>
							</div>

							<div class="results-block results-block-inactive">
								{{#each students}}
									<div></div>
								{{/each}}
							</div>
						</div>
					</div>

					<!-- Посещаемость -->
					<div class="attendance head">
						<!--<div class="attendance-title">{{language.Generic.Grade.kAttendanceColumn}}</div>-->
						<div class="attendance-title">Посеща-<br>емость</div>
						{{> attendanceCol}}
					</div>
				</div>
			</div>
		</div>'
		
	setLessonTpl = 
		'<select class="form-control" name="LESSONID" onchange="controller.changeLesson(); dataChanged();">
			{{#unless suggestedLessonId}}
				<option value="-1" disabled="disabled" selected="selected">{{language.Grade.kChooseLesson}}</option>
			{{/unless}}
			{{#each lessons}}
				<option value="{{id}}" {{selected ../suggestedLessonId id}}>{{lessonFullName}}{{#if studied}}*{{/if}}</option>
			{{/each}}
		</select>'
		
	addCommonAssignTpl = '
		<div class="form-group">
			<label class="control-label col-md-3">
				{{language.Generic.Assignment.kATAssignmentTheme}}
			</label>
			<div class="col-md-9">
				<input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" onchange="dataChanged(); controller.setFlagSaveJournal()" autofocus="autofocus">
			</div>
		</div>

		<div class="form-group">
			<label class="control-label col-md-3">
				{{language.Generic.Assignment.kATAssignmentType}}
			</label>
			<div class="col-md-9">
				<select name="AType" class="form-control" {{#unless assignmentTypesChoise}} disabled="disabled" {{/unless}}>
					{{#unless typeId}}
					<option value="" disabled="disabled" selected="selected">{{language.Generic.Assignment.kATChooseType}}</option>
					{{/unless}}
					{{#each assignmentTypes}}
						<option value="{{id}}" {{#if typeId}} {{selected ../typeId id}} {{/if}}>{{name}}</option>
					{{/each}}
				</select>
			</div>
		</div>'

	getHomeAssignFromPlanTpl = 
		'<form class="form-horizontal" onsubmit="return false;"> 
			<div class="form-group">
				<label class="control-label col-md-3">
					{{language.Curriculum.kLesTheme}}
				</label>
				<div class="col-md-9">
					{{#if lessons}}
						{{#ifCond lessons.length "==" 1}}
							<input type="text" class="form-control" name="LESSONFULLNAME" value="{{lessons.[0].lessonFullName}}" disabled="disabled">
							<input type="hidden" name="LESSONID" value="{{lessons.[0].id}}">
						{{else}}
							<select name="LESSONID" class="form-control">
								{{#each lessons}}
									<option value="{{id}}">{{lessonFullName}}</option>
								{{/each}}
							</select>
						{{/ifCond}}
					{{else}}
						Не было уроков изученных
					{{/if}}
				</div>
			</div>
			{{#if lessons}}
			<div class="form-group">
				<label class="control-label col-md-3">
					{{language.Generic.Grade.kHomeAssignmentText}}
				</label>
				<div class="col-md-9">
					<input type="text" class="form-control" name="LESSONHOMEASSIGNMENT" value="" disabled="disabled">
				</div>
			</div>
		</form>
		{{/if}}'
		
	addHomeAssignCmnTpl =
		'<div class="form-group">
			<label class="control-label col-md-3">
				{{language.Generic.Grade.kHomeAssignmentText}}
			</label>
			<div class="col-md-9">
				{{#if fromKTP}}
				<div class="input-group">
				{{/if}}
					<input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" onchange="dataChanged(); controller.setFlagSaveJournal()" autofocus="autofocus">
				{{#if fromKTP}}
					<span class="input-group-btn">
						<button class="btn btn-default" type="button" id="useLessonHomeAssignBtn" title="Использовать домашнее задание из КТП"><span class="glyphicon glyphicon-book"></span> Из КТП</button>
					</span>
				</div>
				{{/if}}
			</div>
		</div>

		<div class="form-group">
			<label class="control-label col-md-3">
				{{language.Generic.Assignment.kATAssignmentType}}
			</label>
			<div class="col-md-9">
				<span class="form-control form-control-title"><span class="text">{{language.Generic.Assignment.kATHomeWork}}</span></span>
				<input type="hidden" name="AType" value="{{typeId}}" />
			</div>
		</div>'

	addHomeAssignTpl = 
		'<form class="form-horizontal" onsubmit="return false;">
			{{> addHomeAssignCmn}}
		</form>'
		
	addNextHomeAssignTpl = '
		<form class="form-horizontal" onsubmit="return false;">
			<div class="form-group">
				<label class="control-label col-md-3">
					{{language.Generic.Grade.kNextClassmeetingDate}}
				</label>
				<div class="col-md-9">
					<select name="NEXTCMID" class="form-control">
						{{#each classMeetings}}
							<option value="{{id}}">{{name}}</option>
						{{/each}}
					</select>
				</div>
			</div>
			
			{{> addHomeAssignCmn}}
		</form>'
		
	addAssignTpl = 
		'<form class="form-horizontal" onsubmit="return false;">
			{{> addCommonAssign}}
		</form>'

	#подготовка списка уроков КТП. Загрузка с сервера и кэширование#
	_prepareLessons = ()->
		temp = $.Deferred()
		if ctx.cached_lessons
			temp.resolve ctx.cached_lessons
			temp

		if settings.subjectPlan.noSubjectPlan
			temp.resolve()
		else
			jsSubmit
				action:"/asp/ajax/GetLessonListForSg.asp"
				showProcessing: true
				data: sgid: settings.subjectGroupId
			.then (response) ->
				if response.isError
					temp.reject()
					return
				ctx.cached_lessons = response.data.lessonList
				_.each ctx.cached_lessons, (lesson) -> 
					if lesson.lastStudyDay 
						lesson.lastStudyDay = Date.parse lesson.lastStudyDay
					return
				temp.resolve ctx.cached_lessons
		temp

	_setColNames: () ->
		if not @assignsWitResults.length
			$("#assignments-header-many").addClass("hidden")
			$("#assignments-header-no").removeClass("hidden")
			$("#assignments-header-new").addClass("hidden")
		else
			existNonHomeAssign = _.some(@assignsWitResults, (assign) -> assign.typeId != settings.constants.homeWorkTypeId)
			if existNonHomeAssign
				$("#assignments-header-many").removeClass("hidden")
				$("#assignments-header-no").addClass("hidden")
				$("#assignments-header-new").removeClass("hidden")
			else
				$("#assignments-header-many").addClass("hidden")
				$("#assignments-header-no").removeClass("hidden")
				$("#assignments-header-new").addClass("hidden")
				
	_setAttendance = (elem) ->
		grades = $("input[name=" + elem.name + "]", $("form[name=Gradebook]"))
		index = grades.index elem
		reason = $("select[name=REASON]", $("form[name=Gradebook]")).eq index
		reason.val "ОТ"

	#метод для активации автопереноса фокуса ячейки при заполнении оценок
	_navigateInputs: (ctx) ->
		if ctx
			target = $("input[name^=G_]:enabled", ctx)
		else
			target = $("input[name^=G_]:enabled")
		target.navigateInputs
			getCellInputOptions: (elem) ->
				maxMark: settings.maxMark,
				minMark: settings.minMark,
				maxLength: (settings.maxMark + "").length
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
				_setAttendance elem
				true
				
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
							
		if trimStr(name).length > settings.constants.maxAssignTitleLength
			alert language.Generic.Assignment.kATAssignmentThemeNotMayBe
			nameInput.focus()
			return false
		return true
		
	_prepareAssign = (assign) ->
		if settings.moduleQA and _.contains settings.constants.testPlansTypes, assign.typeId
			assign.showTestPlan = true

	constructor: (@container, @students, @assignsWitResults, @attendance, _settings) ->
		settings = $.extend {}, settings, _settings
		settings.assignmentTypesIndex = _.indexBy settings.assignmentTypes, "id"
		settings.la.activities = _.indexBy settings.la.activities, "activityId"
		settings.la.coursesProducts = _.indexBy settings.la.coursesProducts, "productId"
		
		if settings.moduleQA
			_.each @assignsWitResults, (assign) ->
				_prepareAssign assign

		Handlebars.registerPartial "assignCol", assignColTpl
		Handlebars.registerPartial "attendanceCol", attendanceColTpl
		Handlebars.registerPartial "addCommonAssign", addCommonAssignTpl
		Handlebars.registerPartial "assignTitle", assignTitleTpl
		Handlebars.registerPartial "homeAssignEmptyCol", homeAssignEmptyColTpl
		Handlebars.registerPartial "homeAssignCol", homeAssignColTpl
		Handlebars.registerPartial "addHomeAssignCmn", addHomeAssignCmnTpl
		

		Handlebars.registerHelper 'selected', (selValue, currValue) -> 
			if selValue == currValue 
				" selected" 
			else 
				""

	#рендеринг списка заданий и результатов по ним с посещаемостью
	display: () ->
		numberedStudents = 	_.map @students, (stud, index) -> stud.num = index + 1; stud
		
		#получение названий из справочников
		_.each @assignsWitResults, (assign) ->
			typeInfo = settings.assignmentTypesIndex[assign.typeId]
			if typeInfo
				if typeInfo.id is settings.constants.MKRTypeId
					assign.typeName = typeInfo.abbr
				else
					assign.typeName = typeInfo.name
			else
				console.log "неизвестный тип задания " + assign
			
			if assign.activityId
				if assign.productId
					assign.laName = settings.la.coursesProducts[assign.productId].name
				else
					assign.laName = settings.la.activities[assign.activityId].name
				if not assign.laName
					assign.laName = language.Generic.Grade.kActivityRemoved

		homeAssignment = _.find @assignsWitResults, (assign) -> assign.typeId == settings.constants.homeWorkTypeId
		otherAssignments = _.without @assignsWitResults, homeAssignment

		#для всех предметов кроме физ-ры - убираем причину ОСВ
		attendanceReasons = settings.attendanceReasons
		if not settings.allowAttendanceReleasedMark
			attendanceReasons = _.reject attendanceReasons, (reason) -> reason.ReasonMark == settings.attendanceReleasedReason

		model =
			language: language
			students: numberedStudents
			assignments: otherAssignments
			homeAssignment: homeAssignment
			attendance: @attendance
			attendanceReasons: attendanceReasons
			restrictAddHomeAssign: settings.restrictAddHomeAssign
			marksLength: (settings.maxMark + "").length
			constants: settings.constants

		template = Handlebars.compile editJournalTpl

		@container.html template model
		@_navigateInputs()

		$(document).trigger('editJournalShow')
		do addHoverEventHandlerToRow
		
	addHoverEventHandlerToRow = () ->
		backlightColor = '#fffacd'
		
		setBGColorResults = (element, color) ->
			color = color || ''
			index = $(element).index()
			
			$('.results-block').each(-> 
				$block = $($('div', $(this)).get(index))
				$block.find('span, input').css('background-color', color)
			)
			
		setBGColorAttendance = (element, color) ->
			color = color || ''
			index = $(element).index()
			$($('.attendance-block div').get(index)).find('select[name="REASON"]').css('background-color', color)
			
		setBGColorStudent = (element, color) ->
			color = color || ''
			index = $(element).index()
			$($('div.student').get(index)).css('background-color', color)
			
		hoverHandler = ($block) ->
			setBGColorStudent($block, backlightColor)
			setBGColorResults($block, backlightColor)
			setBGColorAttendance($block, backlightColor)
			
			$($block).siblings().each(->
				setBGColorStudent(this)
				setBGColorResults(this)
				setBGColorAttendance(this)
			)
		
		$('div.student').hover( -> hoverHandler(this))
		$('div.results-block div, .attendance-block div').hover( -> hoverHandler(this))
		
		$('select[name="REASON"]').on('click', ->
			$block = $(this).parent()
			hoverHandler($block)
		)
	
	changeLesson: () ->
		lessonSelect = $('#LESTHEME .form-control')
		
		settings.subjectPlan.lessonId = parseInt lessonSelect.val()
		settings.subjectPlan.lessonName = _.findWhere(ctx.cached_lessons, {id: settings.subjectPlan.lessonId}).lessonName
		
	
	#определение связи занятия с уроком КТП#
	setLesson: () ->
		templateCompiled = Handlebars.compile setLessonTpl
		
		_prepareLessons()
		.then (lessons) ->
			if lessons.length is 0
				templateCurriculumNotFilled = Handlebars.compile messageCurriculumNotFilled
				modelMessage = language: language
				$.show.alert templateCurriculumNotFilled modelMessage
			else
				lessonId = settings.subjectPlan.lessonId
			
				if lessonId <= 0
					#Если тема урока не выбрана, то предложить тему для которой не выбраны часы
					suggestedLesson = _.find lessons, (lesson) -> lesson.hours > lesson.hoursStudied
					lessonId = suggestedLesson?.id
				
					dataChanged()
			
				lesson = _.findWhere(ctx.cached_lessons, {id: lessonId})
				
				settings.subjectPlan.lessonName = lesson.lessonName
				settings.subjectPlan.lessonId = lessonId
			
				model =
					lessons: lessons
					language: language
					suggestedLessonId: lessonId
				
				templateLesson = $(templateCompiled model)
				$('#LESTHEME .form-control').replaceWith(templateLesson)

	#получение текста домашнего задания из КТП
	getHomeAssignFromPlan: (lessons) ->
		lessonHomeAssignModel = 
			lessons: lessons
			language: language

		#todo. темплейт формы
		template = Handlebars.compile getHomeAssignFromPlanTpl
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
			assignmentTypes: _.filter settings.assignmentTypes, (type) -> type.id == settings.constants.homeWorkTypeId
			assignmentTypesChoise: false
			fromKTP: not settings.subjectPlan.noSubjectPlan
			typeId: settings.constants.homeWorkTypeId
			language: language

		onShowEventHandler = (dialog) ->
			homeAssignNameInput = $("input[name='AN']", dialog.$modalContent)
			$("#useLessonHomeAssignBtn", dialog.$modalContent).click -> 
				_prepareLessons().then (lessons) ->
					#фильтр - только уже прошедшие темы уроков
					lessons = _.filter(lessons, (lesson) -> lesson.lastStudyDay != null and lesson.lastStudyDay < settings.classMeetingDay)
					lessons = _.sortBy(lessons, (lesson) -> lesson.lastStudyDay).reverse()
					if lessons.length == 0
						$.show.message language.Generic.Assignment.kUnableRetrieveHomeWorkText
						return
					ctrl.getHomeAssignFromPlan(lessons).then (planHomeAssign) ->
						homeAssignNameInput.val planHomeAssign

		ctrl.createAssign model, addHomeAssignTpl, {onShow: onShowEventHandler }
		.then (newAssign) ->
			#рендерим шаблон и добавляем на страницу
			template = Handlebars.compile homeAssignColTpl
			empty_block = $(".empty-block")
			$("#home-assignment-column").empty()
			$("#home-assignment-column").append template $.extend {}, newAssign, {language: language}
			ctrl._navigateInputs $("#home-assignment-column")
			ctrl._setColNames()
			$("#home-assign-add-button").hide();
			
			addHoverEventHandlerToRow()
			$(document).trigger('assignmentsColsChanged')
			
	#добвить задание#
	addAssign: () ->
		ctrl = this
		assignmentsWithoutHomeWorkType = _.filter settings.assignmentTypes, (type) -> type.id != settings.constants.homeWorkTypeId
		if not settings.moduleQA then assignmentsWithoutHomeWorkType = _.filter assignmentsWithoutHomeWorkType, (type) -> type.id != settings.constants.MKRTypeId
		
		model =
			assignmentName: if settings.subjectPlan.lessonId then settings.subjectPlan.lessonName else language.Generic.Grade.kNoTheme
			assignmentTypes: assignmentsWithoutHomeWorkType
			assignmentTypesChoise: true
			language: language

		#если включен модуль МСОКО - то пользователю нужно явно выбрать тип задания
		if not settings.moduleQA
			model.typeId = settings.lessonAnswerTypeId
			
		@createAssign model, addAssignTpl
		.then ( newAssign ) ->
			#рендерим шаблон и добавляем на страницу
			template = Handlebars.compile assignColTpl
			html = template $.extend {}, newAssign, {language: language, constants: settings.constants}
			$('.div-table-safari').append html
			ctrl._navigateInputs $("#assignment_" + newAssign.id)
			ctrl._setColNames()

			addHoverEventHandlerToRow()
			$(document).trigger('assignmentsColsChanged')

	#добавить задание на следующее занятие#
	addNextHomeAssign: () ->
		ctrl = this

		#todo. кэширование следующих занятий
		jsSubmit
			action: "/asp/ajax/classmeetings/getnextclassmeetingsforsg.asp"
			data: 
				sgid: settings.subjectGroupId
				cmid: settings.classMeetingId
			showProcessing: true
		.then (response) ->
		
			if response.data.nextClassMeetings.length == 0 
				$.show.message language.Generic.Grade.kNoNextClassmeetings
				return

			model = 
				assignmentTypes: _.filter settings.assignmentTypes, (type) -> type.id == settings.constants.homeWorkTypeId
				assignmentTypesChoise: false
				typeId: settings.constants.homeWorkTypeId
				language: language
				fromKTP: not settings.subjectPlan.noSubjectPlan and settings.subjectPlan.lessonId
				classMeetings: response.data.nextClassMeetings
				
			if settings.subjectPlan.lessonId
				model.lesson =
					id: settings.subjectPlan.lessonId
					name: settings.subjectPlan.lessonName

			#todo. темплейт формы
			template = Handlebars.compile addNextHomeAssignTpl
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
									sgid: settings.subjectGroupId
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
				AID: assignId
				BMODULEQA: settings.moduleQA
				LAJID: productId
	
	#открыть план Кр 
	goTestPlan: (assignId) ->
		checkForChanges().then () ->
			postTo "/asp/Grade/QA/TestPlanResults.asp", 
				AID: assignId
				SCLID: settings.subjectGroupId
	
	goEditPlanner: () ->
		checkForChanges().then () ->
			postTo "/asp/Curriculum/Planner.asp", 
				SGID: settings.subjectGroupId
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
			if deletingAssign.typeId == settings.constants.homeWorkTypeId
				if empty_block == ''
					$(".home-assignment .results-block div").empty()
					empty_block = $(".home-assignment .results-block")
					empty_block.addClass("empty-block").removeClass("results-block")
					
				$("#home-assignment-column").empty()
				template = Handlebars.compile homeAssignEmptyColTpl
				$("#home-assignment-column").append template $.extend {}, {language: language}
				$("#home-assignment-column .empty-block").replaceWith(empty_block)
				$("#home-assign-add-button").show();
			else
				$("#assignment_" + assignId).remove()
			#установка заголоков
			ctrl._setColNames()

			$(document).trigger('assignmentsColsChanged')
			#$.show.message response.message
		
	#сохранение#
	save: () ->
		if !window.dataWereChanged
			alert language.Generic.SetupSchoolUI.kDataNotModified
			return
		jsSaveForm document.Gradebook
		
	#сохранение и возврат#
	saveAndBack: () ->
		if !window.dataWereChanged
			do goCommonBack
			return
		jsSaveForm document.Gradebook
		.then goCommonBack
		return
		
	setFlagSaveJournal: () ->
		$("input[name=bSaveJournal]").val("1")
		
	clickCheckAll: (checkInput) ->
		assignId = checkInput.value
		if checkInput.checked
			this.checkAll assignId
		else
			this.uncheckAll assignId

	checkAll: (sAID) ->
		$checkM = $("input:checkbox[name=M_" + sAID + "]", $("form[name=Gradebook]"))
		nLen = $checkM.length - 1
		for i in [0..nLen]
			$checkM[i].checked = true
		dataChanged()
		controller.setFlagSaveJournal()

	uncheckAll: (sAID) ->
		$checkMs = $("input:checkbox[name=M_" + sAID + "]", $("form[name=Gradebook]"))
		$Grades = $("input[name=G_" + sAID + "]", $("form[name=Gradebook]"))
		nLen = $checkMs.length - 1
		for i in [0..nLen]
			if trimStr $Grades[i].value == ''
				$checkMs[i].checked = false
		dataChanged()
		controller.setFlagSaveJournal()
		
	restoreCheck: (obj) ->
		if !obj.checked
			alert language.Grade.kTickMarkIsNecessary
			obj.checked = true
	
	clickCheck: (obj, n) ->
		sName = obj.name
		sAID = sName.substr(2)
		$Grades = $("input[name=G_" + sAID + "]", $("form[name=Gradebook]"))
		if trimStr($Grades[n].value) != ''
			this.restoreCheck obj
		else 
			dataChanged()
			controller.setFlagSaveJournal()
	
	#смена даты урока
	changeCm: (step) ->
		ctrl = this
		select_cm = $("select[name='CMID']")
		initialIndex = select_cm.find("option[value='" + settings.classMeetingId + "']").prop("index")
		simpleChangeCM = (step) ->
			days = select_cm.find("option").length
			if step == 1 and days == initialIndex + step
				return
				
			if step == -1 and initialIndex == 0 
				return

			if step != 0
				select_cm.prop("selectedIndex", initialIndex + step)
				
			setDBBusy()
			$.show.processing()
			DoSubmit document.Gradebook, "EditJournal.asp"

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
			
		if isDBBusy()
			return false

		if dataWereChanged
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
						
						typeId = parseInt typeSelect.val() || 0
						typeInfo = settings.assignmentTypesIndex[typeId]
						name = nameInput.val()

						if options.check and !options.check()
							return

						jsSubmit
							form: document.Gradebook
							data: 
								RegimeAddAssign: 1
								AN: name
								AType: typeId
							action: "SaveJournal.asp"
							nocache: true
							showProcessing: true
						.then (response) =>
							window.dataWereChanged = false
							#собираем модель нового задания
							newAssign =
								id: response.data.assignmentId
								name: response.data.assignmentName
								typeId: typeId
								typeName: if typeInfo.id is settings.constants.MKRTypeId then typeInfo.abbr else typeInfo.name
								results: _.map @students, (student) -> studentId: student.studentId, result: null
								
							_prepareAssign newAssign

							#добавляем задание в модель
							@assignsWitResults.push newAssign

							dialog.successClose()
							
							if settings.moduleQA and _.contains settings.constants.testPlansTypes, newAssign.typeId
								templateMessageAdd = Handlebars.compile messageAssignmentAdded
								modelMessage = 
									assignId: newAssign.id
									isTestPlansType: _.contains settings.constants.testPlansTypes, newAssign.typeId
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


$(document).ready ()->
	###/=======================================================================================/	
	/=======================================================================================/
	/======================================хак на IE=================================/###
	if bowser.msie
		$('.editjournal-wrapper .editjournal input').css('padding-top','1px')
		$('.editjournal-wrapper .editjournal input').focus (()-> 
			$(this).css('padding-top','1px')
		)
	
	$(document).bind 'editJournalShow', () ->
		assignmentsBlock = $('.assignments-block')
		###=======================================================================================/	
		/=======================================================================================/
		/=========================проверка на разрешение экрана=================================/
		/===============чтоб не улезал за экран таблица с выставлением оценок===================###
	
		bWrap = $('.results-block > div')
	
		width_date_results_block = '0px'
		width_date_results_block_test = '0px'
	
		pageWidth = $(document).width()
		pageHeight = $(document).height()
		windowWidth = $(window).width() # ширина окна браузера
		windowHeight = $(window).height()
	
		width_date_results_block = assignmentsBlock.actual('innerWidth')
	
		pageWidth_px = 0;
		width_date_results_block_px = 0;
	
		#проверка размера таблицы
		windowSize = () ->
			windowWidth = $(window).width()
			pageWidth = $(document).width()
			width_date_results_block = assignmentsBlock.actual('innerWidth')
			#волшебное число 85 - это всевозможные отсупы от content-а
			if Number(windowWidth) > 968
#				if Number(width_date_results_block + 85) >= Number(windowWidth)
#				
#					pageWidth_px = windowWidth;
#					pageWidth_px = pageWidth_px - 83;
#					$('.editjournal').css({"width": pageWidth_px + 'px'})
#				else
#					width_date_results_block_px = width_date_results_block
#					width_date_results_block_px = width_date_results_block_px + 2
#					$('.editjournal').css({"width": width_date_results_block_px + 'px'})
					div_table_safari = $('.div-table-safari').width()
					div_table_safari += 555
					edit_journal = $('.editjournal')
					edit_journal_wrapper = $('.editjournal-wrapper')
					
					edit_journal.css({"width": div_table_safari + 'px'})
					if (edit_journal_wrapper.width() < edit_journal.width())
						edit_journal.css({"width": 'auto'})
					 
			else 
				$('.editjournal').css({"width": 'auto'})
				
				# заглушка, которую нужно убрать как только будет добавлена адаптивность
				div_table_safari = $('.div-table-safari').width()
				div_table_safari += 555
				edit_journal = $('.editjournal')
				edit_journal_wrapper = $('.editjournal-wrapper')
				edit_journal.css({"width": div_table_safari + 'px'})
				
			
			#делаем "задания" по центру таблицы
			high_school_journal_width = $('.editjournal').width()
#			$('.assignments-header-block').width(high_school_journal_width)

		$(window).on('load resize', windowSize)
		$(document).bind('assignmentsColsChanged', windowSize)
		
		#проверка адаптивности кнопок "добавить" по вертикале
		student_block = $('.studentlist  .student-block')
		student_block_children = student_block.children()
		student_children_length = student_block_children.length
		
		editjournal_left_block = $('.editjournal-left-block')
		editjournal_right_block = $('.editjournal-right-block')
		
		switch student_children_length
			when 1  
				editjournal_left_block.addClass("editjournal-left-block-1")  
				editjournal_right_block.addClass("editjournal-right-block-1")
			when 2 
				editjournal_left_block.addClass("editjournal-left-block-2")  
				editjournal_right_block.addClass("editjournal-right-block-2")
			when 3 
				editjournal_left_block.addClass("editjournal-left-block-3")  
				editjournal_right_block.addClass("editjournal-right-block-3")
			when 4 
				editjournal_left_block.addClass("editjournal-left-block-4")  
				editjournal_right_block.addClass("editjournal-right-block-4")
			when 5 
				editjournal_left_block.addClass("editjournal-left-block-5")  
				editjournal_right_block.addClass("editjournal-right-block-5")
			when 6  
				editjournal_left_block.addClass("editjournal-left-block-6")  
				editjournal_right_block.addClass("editjournal-right-block-6")
		
#		console.log(student_block);
#		console.log(student_block_children);
#		console.log(student_children_length);

		###/====================================================================================/
		/====================================================================================/
		/===============Полоса прокрутки элементов jquery-after и jquery-before==============/###
	
#		scroll_start = (this_element)->
#			local_scroll_int_x = $(this_element).scrollLeft(); #/*смещение скролла*/
#			local_width_int_x = $(this_element).width(); #/*ширина элемента*/
#			local_outer_width_int_x = els_date_results[0].scrollWidth; #/*щирина скролла*/
#
#			reshenie = local_outer_width_int_x - local_width_int_x
#			if reshenie == local_scroll_int_x
#				$(".jquery-before").addClass("hidden")
#				
#			if reshenie > local_scroll_int_x
#				$(".jquery-before").removeClass("hidden")
#		
#			if local_scroll_int_x > 0
#				$(".jquery-after").removeClass("hidden")
#
#			if local_scroll_int_x == 0
#				$(".jquery-after").addClass("hidden")
#
#
#		#/*доступаемся к классу через метод avascripta*/
#		els_date_results = $(".assignments-block-wrapper")
#	
#		scroll_start($(".assignments-block-wrapper"))
#		$('.assignments-block-wrapper').scroll () ->
#			scroll_start(this)

	
		###/=======================================================================================/	
		/=======================================================================================/
		/======================================бесконечный цикл=================================/###
	
#		scroll_int_x = 0	#/*смещение скролла*/
#		width_int_x = 0		#/*ширина элемента*/
#		outer_width_int_x = 0 #/*щирина скролла*/

	
#		start = (ii) ->
#			scroll_int_x = $(".editjournal-wrapper .editjournal .assignments-block-wrapper").scrollLeft()
#			width_int_x = $(".editjournal-wrapper .editjournal .assignments-block-wrapper").width()
#			outer_width_int_x = els_date_results[0].scrollWidth
#			$(".editjournal-wrapper .editjournal .editjournal-right-block .attendance .attendance-block div").text(scroll_int_x)
#			$(".editjournal-wrapper .editjournal .editjournal-left-block .studentlist .student-block div").text(width_int_x)
#			$(".editjournal-wrapper .editjournal .editjournal-left-block .home-assignment .home-assignment-block div").text(outer_width_int_x)
#
#	
#		i = 1;
#		yyrrfghf = $(".student-block").height()
#		yyrrfghf--;
#		$(".selected-date .calendar").height(yyrrfghf)


###
* jQuery liActualSize v 2.0
* http://mmmagnit.ks.ua
*
* Copyright 2012, Linnik Yura
* Free to use
* 
* Augest 2012
###

do ($) ->
	$.fn.actual = () ->
		if arguments.length and typeof arguments[0] == 'string'
			dim = arguments[0]
			$(this).addClass 'liActualSize'
		if this.is(':visible')
			return this[dim]()
			
		clone = $('body').clone().css(
			position: 'absolute',
			top: '-99999px',
			left: '-99999px',
			visibility: 'hidden'
		).appendTo('body')
		
		clone.find('*').show()
		s = clone.find('.liActualSize')[dim]()
		clone.remove()
		$(this).removeClass('liActualSize')
		s
