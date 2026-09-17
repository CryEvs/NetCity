	_.mixin(
		#helper для фильтрации коллекции объетов массивом значений
		'findByValues': (collection, property, values) ->
			_.filter(collection, (item) ->
				_.contains(values, item[property])
		)
	)
	
	floatToPlan = (val) -> 
		if val == 0 
			return ""
		else
			if val % 1 > 0
				val = parseFloat val.toFixed 2
			float2str val
	
	class addLimitsToPlanCtrl
		constructor: (@params) ->
			@data = {}
			
		_addLimitsTemplate = '	<form name="addLimits" class="form-horizontal">
									<div class="form-group component-filter">
										<label class="control-label col-md-4">' + language.Generic.SetupSchoolCalendar.kComponent + '</label>
										<div class="col-md-8">
											<select name="COMPID" class="form-control">
												{{#each componentList}}
													<option value="{{id}}">{{name}}</option>
												{{/each}}
											</select>
										</div>
									</div>
									{{> subjectFilterPartial}}
									{{> hoursPartial}}
								</form>'
								
		_subjectFilterPartial = '{{#if subjects.length}}
									<div class="form-group subject-filter">
										<label class="control-label col-md-4">' + language.Generic.Common.kSubject + '</label>
										<div class="col-md-8">
											<select name="SUBJID" class="form-control">
												{{#each subjects}}cur
													<option value="{{id}}">{{name}}</option>
												{{/each}}
											</select>
										</div>
									</div>
								{{/if}}
								{{#unless subjects.length}}
									<div class="alert alert-danger subject-filter" role="alert">' + 
										language.Generic.SetupSchoolCalendar.kAllSubjectsAddedToSubjectPlan + '
									</div>
								{{/unless}}'
							
		_classesHoursPartial = '{{#if subjects.length}}
									<div class="classes">
										{{#each profileClasses}}
											<div class="panel panel-default">
												<div class="panel-heading" role="tab" id="heading{{profileId}}" style="cursor: pointer">
													<h4 class="panel-title">
														<a data-toggle="collapse" class="collapsed" data-target="#{{profileId}}" aria-expanded="true" aria-controls="{{profileId}}">{{profileName}}</a>
													</h4>
												</div>
												<div id="{{profileId}}" class="panel-collapse collapse in" aria-labelledby="heading{{profileId}}" role="tabpanel">
													<div class="panel-body">
														<div class="table-responsive">
															<table class="table table-xs table-bordered table-thin">
																<tr>
																	{{#each gradeClasses}}
																		<th colspan="{{classList.length}}">
																			{{grade}}
																		</th>
																	{{/each}}
																</tr>
																<tr>
																	{{#each gradeClasses}}
																		{{#each classList}}
																			<th>
																				{{className}}
																			</th>
																		{{/each}}
																	{{/each}}
																</tr>
																<tr>
																	{{#each gradeClasses}}
																		{{#each classList}}
																			<td class="input-cell">
																				<input name="Hours" id="{{classId}}" type="text" value="" maxlength="4" size="2" onchange="dataChanged()" autocomplete="off">
																			</td>
																		{{/each}}
																	{{/each}}
																</tr>
															</table>
														</div>
													</div>
												</div>
											</div>
										{{/each}}
									</div>
								{{/if}}'
								
		_gradeHoursPartial = '	{{#if subjects.length}}
									<div class="grades">
										<table class="table table-xs table-bordered table-thin">
											<tr>
												{{#each iupClasses}}
													<th colspan="{{classIds.length}}">
														{{grade}}
													</th>
												{{/each}}
											</tr>
											<tr>
												{{#each iupClasses}}
													{{#each classIds}}
														<th>
															{{name}}
														</th>
													{{/each}}
												{{/each}}
											</tr>
											<tr>
												{{#each iupClasses}}
													{{#each classIds}}
														<td class="input-cell">
															<input name="Hours" id="{{id}}" type="text" value="" maxlength="4" size="2" onchange="dataChanged()" autocomplete="off">
														</td>
													{{/each}}
												{{/each}}
											</tr>
										</table>
									</div>
								{{/if}}'
							
		_helpers =
			hoursKeyPress: ->
				$('input[name="Hours"]').on "keypress", (e) ->
					e = e or window.event
					key = e.keyCode or e.which or e.charCode
					
					if key in [8,9,46] then return # tab, backspace, delete
					
					chr = String.fromCharCode key
					"1234567890,.".indexOf(chr) > -1
			onChangeHours: ->
				$('input[name="Hours"]').on "change", (e) ->
					elem = $(e.target)
					dataChanged()
					setLoad = str2floatVal elem.val()
					elem.val floatToPlan setLoad
				
			getSubjects: (params) ->
				subjectIds	= _.map(params.componentSubjectsList[params.currComponentId], (obj) -> obj.subjectId)
				subjects	= _.findByValues(params.subjectData, "id", subjectIds)
		
				return subjects
		
			convertGradeSet2GradeList: (params) ->
				i for i in [params.minGrade..params.maxGrade] when (2 ** i & params.gradeSet) isnt 0
				
			prepareIupClasses: (params) ->
				gradeList = []
				_.each(params.gradeList, (grade) ->
					if grade < params.minGrade or grade > params.maxGrade then return
					
					_classIds = []
					
					_.each(params.iupLevelData, (value) ->
						_res = 
							id: grade + '_' + value.levelId
							name: value.shortName
						_classIds.push _res
					)
					
					gradeList.push
						grade: grade
						classIds: _classIds
				)
			
				return gradeList
		
			prepareClassesProfiles: (params) ->
				_results = []
			
				_.each(params.profileGradesData, (value) ->
					profileGrades = _.filter(value.gradeList, (item) ->
						_.contains(params.componentGradeList[params.currComponentId], item)
					)
					if not profileGrades.length then return
				
					#фильтруем список классов по профилю
					classList = _.filter(params.gradeClassesData, (item) -> item.profileId is value.profileId)
					# если существуют классы, которые обучаются по такому профилю
					if not classList.length then return
				
					# фильтруем классы по параллелям, которые разрешены в компоненте и профиле
					classList = _.filter(classList, (item) ->
						_.contains(profileGrades, item.grade)
					)
					if not classList.length then return
				
					gradeClasses = _.groupBy(classList, 'grade') # группировка классов по параллелям
				
					_temp = []
					_.each(gradeClasses, (value, key) ->
						_temp.push
							grade: key
							classList: value
					)
					gradeClasses = _temp
				
					_results.push(
						profileId: value.profileId
						profileName: value.profileName
						gradeClasses: gradeClasses
					)
				)
			
				return _results
				
		addLimits: ->
			jsSubmit(
				action: '/asp/ajax/Curiculum.asp'
				showProcessing: true
				form: document.forms.Filter
				data: @params
				onSuccess: (response) =>
					_data = response.data
			
					@data['componentList']			= _data.componentData
					@data['subjectComponentData']	= _data.subjectComponentData
					@data['subjectData']			= _data.subjectData
					@data['curriculumLimitsData']	= _data.curriculumLimitsData
					
					if not @params.isIUP
						@data['profileGradesData']		= _data.profileGradesData
						@data['gradeClassesData']		= _data.gradeClassesData
					else
						@data['iupLevelData']			= _data.iupLevelData
			
					if not @data.componentList.length then return alert language.Generic.SetupSchoolCalendar.kCurriculumLimitsNotDefined
				
					@params['currComponentId']			= _.first(@data.componentList).id # текущая выбранная компонента
					@params['componentIds']				= _.map(@data.componentList, (obj) -> obj.id) # массив идентификаторов доступных компонент
					@params['componentSubjectsList']	= _.groupBy(@data.subjectComponentData, 'componentId') # группировка достпных предметов для компоненты
					@params['componentGradeList']		= _.groupBy(_.findByValues(@data.curriculumLimitsData, 'componentId', @params.componentIds), 'componentId') # группировка параллелей по компоненте
			
					_subjects = _helpers.getSubjects 
						currComponentId: @params.currComponentId, 
						componentSubjectsList: @params.componentSubjectsList, 
						subjectData: @data.subjectData
						
					@params.componentGradeList = do =>
						### приведение к виду:
							{
								componentId: [1, 2, 3] - список параллелей,
								componentId2: [10, 11]
							}
						###
						_result = {}
				
						_.each(@params.componentGradeList, (value, key) ->
							_result[key] = _.map(value, (obj) -> obj.gradeId)
						)
				
						return _result
					
					if not @params.isIUP
						#конвертация gradeset'ов в массив параллелей
						_.map(@data.profileGradesData, (_element) =>
							_element['gradeList'] = _helpers.convertGradeSet2GradeList
								gradeSet: _element.gradeSet, 
								minGrade: @params.minGrade, 
								maxGrade: @params.maxGrade
				
							return _element
						)
			
						_profileClasses = _helpers.prepareClassesProfiles 
												currComponentId: @params.currComponentId, 
												componentGradeList: @params.componentGradeList, 
												gradeClassesData: @data.gradeClassesData, 
												profileGradesData: @data.profileGradesData
					else
						_iupClasses = _helpers.prepareIupClasses
											gradeList: @params.componentGradeList[@params.currComponentId],
											iupLevelData: @data.iupLevelData
											minGrade: @params.minGrade
											maxGrade: @params.maxGrade
				
					#компиляция шаблона
					fullTemplate				= Handlebars.compile _addLimitsTemplate
					subjectFilterTemplate		= Handlebars.compile _subjectFilterPartial
					
					hoursTemplate = if @params.isIUP then Handlebars.compile _gradeHoursPartial else Handlebars.compile _classesHoursPartial
			
					Handlebars.registerPartial "subjectFilterPartial", subjectFilterTemplate
					Handlebars.registerPartial "hoursPartial", hoursTemplate
			
					model = 
						componentList: @data.componentList
						subjects: _subjects
							
					if @params.isIUP then model['iupClasses'] = _iupClasses else model['profileClasses'] = _profileClasses
					
					html = fullTemplate model
			
					addBtn = (dialog) =>
						if not _subjects.length then return
						
						_hoursNotFilled = true
						$.each($('form[name="addLimits"] input[name="Hours"]'), (index, value) ->
							if $(value).val()
								_hoursNotFilled = false
								return false
						)
						
						if _hoursNotFilled then return alert language.Generic.SetupSchoolCalendar.kNecessarySetHours
						
						_result =
							componentId: @params.currComponentId
							subjectId: parseInt($('form[name="addLimits"] select[name="SUBJID"] option:selected').val(), 10)
							classesHours: {}
						
						$.each($('form[name="addLimits"] input[name="Hours"]'), (index, value) ->
							$value = $(value)
							
							if $value.val()
								_classId		= $value.attr('id')
								_hours			= str2floatVal($value.val())
							
								_result.classesHours[_classId] = _hours
						)
						
						controller.save(_result)

					$.show.dialog(
						title: language.Generic.SetupSchoolCalendar.kAddComponentLimit,
						message: html,
						size: BootstrapDialog.SIZE_WIDE,
						buttons: [{
							label: language.Generic.Buttons.kAdd,
							action: addBtn,
							cssClass: 'btn-primary'
						}],
						onshown: (dialog) =>
							do _helpers.hoursKeyPress
							do _helpers.onChangeHours
							$('select[name="COMPID"] option').first().prop('selected', true)
					
							$('select[name="COMPID"]').on('change', =>
								do $('.subject-filter').remove
								
								if @params.isIUP then do $('.grades').remove else do $('.classes').remove
								
								@params.currComponentId = $('form[name="addLimits"] select[name="COMPID"] option:selected').val()
						
								subjectsTemplate	= Handlebars.compile _subjectFilterPartial
								hoursTemplate		= if @params.isIUP then Handlebars.compile _gradeHoursPartial else Handlebars.compile _classesHoursPartial
						
								_subjects = _helpers.getSubjects
									currComponentId: @params.currComponentId, 
									componentSubjectsList: @params.componentSubjectsList, 
									subjectData: @data.subjectData
						
								subjectsHtml = subjectsTemplate 
									subjects: _subjects
										
								if @params.isIUP
									model = 
										subjects: _subjects
										iupClasses: _helpers.prepareIupClasses
											gradeList: @params.componentGradeList[@params.currComponentId],
											iupLevelData: @data.iupLevelData
											minGrade: @params.minGrade
											maxGrade: @params.maxGrade
								else
									model = 
										subjects: _subjects
										profileClasses: _helpers.prepareClassesProfiles 
											currComponentId: @params.currComponentId, 
											componentGradeList: @params.componentGradeList, 
											gradeClassesData: @data.gradeClassesData, 
											profileGradesData: @data.profileGradesData
								
								hoursHtml = hoursTemplate model
						
								$('.component-filter').after subjectsHtml
								$('.subject-filter').after hoursHtml
								
								do _helpers.hoursKeyPress
								do _helpers.onChangeHours
							)
					)
			)
			
	class curiculumPlanCtrl
		model: null
		options: null
		_copyButton = null
		_prepareClassId = (rawClassId) -> parseInt rawClassId

		constructor: () ->
			

		#инициализация учебноого плана
		initPlan: (options, modelExt) ->
			@options = options
			
			_copyButton = $("#copy-btn-block")
			
			if options.prepareClassId
				_prepareClassId = options.prepareClassId
				
			if options.canCopy
				_copyButton.removeClass "hidden"
			
			jsSubmit
				action: "CuriculumPlan_Frame.asp", 
				dataType: "HTML",
				onSuccess: (response) =>
					$("#plan-body").html(response)
					
					if typeof window.hideAddLimitsButton isnt "undefined"
						do $('.add-limits-button').hide
					
					#if not options.readonly
					curiculumStat = window.curiculumStat
					if !curiculumStat
						$.show.error "Неожиданная ошибка. Ошибка загрузки УП"
						return
						
					limitPredicate = (classLoad) -> classLoad.classId == 0 or classLoad.classId == "0"
					toGradeLimits = (classesLoads) ->
						_.indexBy _.map(_.filter(classesLoads, limitPredicate), (obj) -> {gradeId: obj.gradeId, limit: obj.subjectsLoad[0].hours} ), "gradeId"

					totalLimitComponent = _.findWhere curiculumStat, {componentId: 0}

					if totalLimitComponent
						totalLimits = toGradeLimits totalLimitComponent.classesLoad

					curiculumStat = _.filter curiculumStat, (componentLoad) -> componentLoad.componentId > 0
					limits = _.map curiculumStat, (componentLoad) -> { componentId: componentLoad.componentId, gradesLimits: toGradeLimits componentLoad.classesLoad }

					_.each curiculumStat, (componentLoad) ->
						componentLoad.classesLoad = _.indexBy( 
							_.reject(componentLoad.classesLoad, limitPredicate)
							, "classId")

					@model = 
						totalLimits: totalLimits
						limits: _.indexBy limits, "componentId"
						hours: curiculumStat
						subjects: {}

					if modelExt
						@model = $.extend @model, modelExt

					@showPlan(options)

		#отображение плана
		showPlan: (options) -> 
			msie = bowser.msie 

			framedoc = document
		
			planBody = $("#plan-body")
			planHeader = $("#plan-header")
			planBody.on "scroll", -> planHeader.scrollLeft planBody.scrollLeft()
		
			planTableHeader = document.getElementById('plan-table-header')
			planTable = document.getElementById('plan-table')
			planContainer = $("#plan-container")
			frame = document.getElementById('plan-body')
			legend = $('div.legend')
			infoMessage = $("#process-message")

			helpRow = $(planTable).find("tr#help-row")
			totalLoadRow = $(planTable).find("tr.total-fact-load-row")
			totalTeachersLoadRow = $(planTable).find("tr.total-teacher-load-row")
			classRow = planHeader.find("tr.class-row")
	
			#обработчик нажатия - конвертация span -> input 
			convertInput = (e) =>
				span = $(e.target)
				cell = span.parent()
				#hidden = $("input[type=hidden]", cell)

				#значение нагрузки
				if span.text()
					preValue = span.text().trim()
				else
					preValue = ""
				preLoad = 0
				if preValue != ""
					preLoad = str2floatVal preValue

				subjectRow = cell.closest("tr")
				preColspan = 0
				componentCellIndex = cell.prop("cellIndex")
				subjectRow.find("td").lt(componentCellIndex).gt(0)[colspan]
					.each -> preColspan = preColspan += -1 + parseInt $(this).prop "colspan"
				totalCellIndex = componentCellIndex + preColspan
				cellWidth = cell.prop("clientWidth")

				#ячейки с суммарными нагрузками
				totalTeacherLoadCell = null
				totalLoadCell = null
				componentLoadCell = null
				setTimeout ->
						totalTeacherLoadCell = totalTeachersLoadRow.find("td").eq totalCellIndex
						totalLoadCell = totalLoadRow.find("td").eq totalCellIndex
						componentLoadCell = subjectRow.prevAll("tr.component-fact-load-row").first().find("td").eq componentCellIndex
					, 0

				helpCell = helpRow.find("th").eq totalCellIndex
				classCell = classRow.find("th").eq totalCellIndex-1
				subjectCell = subjectRow.first("td")
				classid = _prepareClassId helpCell.find("input[name=classid]").val()
				gradeid = parseInt helpCell.find("input[name=gradeid]").val()
				subjectid = parseInt subjectCell.find("input[name=SUBJID]").val()
				componentId = parseInt subjectCell.find("input[name=COMPID]").val()

				input = $("<input />")
					.attr "type", "text"
					.attr "maxlength", 4
					#.css "max-width", cellWidth - 2
					#.width cellWidth
					.val preValue

				span.replaceWith input
				classCell.addClass "hover"

				#запрет на ввод не чисел
				input.on "keypress", (e) ->
					e = e or window.event
					key = e.keyCode or e.which or e.charCode

					if key in [8,9,46] then return # tab, backspace, delete

					if key == 13
						input.trigger("blur")
						return false

					chr = String.fromCharCode key
					return "1234567890,.".indexOf(chr) > -1

				#обработчик изменений часов УП
				onChangeHours = (e) =>
					elem = $(e.target)
					dataChanged()
					setLoad = str2floatVal elem.val()
					elem.val floatToPlan setLoad
					hoursDelta = setLoad - preLoad

					#коррекция часов в модели
					@setLoad componentId, classid, gradeid, subjectid, setLoad
					cell.addClass "waschanged"

					setTimeout =>
							if totalTeacherLoadCell.length == 1
								#коррекция общ. педагогической нагрузки
								totalTeacherLoad = str2floatVal totalTeacherLoadCell.text()
								sgCount = 1
								if @model.sgClassesCnt
									sgCountInfo = _.findWhere @model.sgClassesCnt, {classid: _prepareClassId classid, subjectid: subjectid}
									if sgCountInfo
										sgCount = sgCountInfo.cnt
								totalTeacherLoad = (totalTeacherLoad - preLoad * sgCount) + setLoad * sgCount
								totalTeacherLoadCell.html floatToPlan totalTeacherLoad

							totalLoadDelta = 0
							if componentLoadCell.length == 1
								#коррекция фактической нагрузки по компоненте
								prevComponentLoad = str2floatVal componentLoadCell.text()
								newComponentLoad = @getClassComponentHours @model, classid, componentId 
								totalLoadDelta = newComponentLoad - prevComponentLoad
								componentLimit = @getLimit componentId, gradeid
								componentLoadCell.html floatToPlan newComponentLoad
								if newComponentLoad > componentLimit
									componentLoadCell.addClass "overflow"
								else
									componentLoadCell.removeClass "overflow"

							if totalLoadCell.length == 1
								#коррекция предельной нагрузки
								totalLoad = str2floatVal totalLoadCell.text()
								totalLoad = totalLoad + totalLoadDelta
								totalLimit = @getLimit 0, gradeid
								totalLoadCell.html floatToPlan totalLoad
								if totalLoad > totalLimit
									totalLoadCell.addClass "overflow"
								else
									totalLoadCell.removeClass "overflow"
									
							preLoad = setLoad

							#коррекция ширин столбцов и всего плана
							syncAllColumns()
							setMaxWidth()
							adjustPlanWidth()
						, 0
					
				input.on "blur", (e) ->
					lastValue = trimStr input.val()
					load = 0
					if lastValue == ""
						lastValue = "&nbsp;"
					else
						load = str2floatVal lastValue
						if load == 0
							lastValue = "&nbsp;"
						else
							lastValue = floatToPlan load

					wasChanged = preLoad != load
					if wasChanged
						onChangeHours e

					span = $("<span></span>").append lastValue
					input.remove()
					cell.append(span)
					span.on "click", convertInput
					classCell.removeClass "hover"

				input.select()

			$("td.input-cell > span").on "click", convertInput

			getLastRowForTable = (container, id) ->
				$(container).find('#' + id + ' tr:last-child')[0]

			getFirstRowForTable = (container, id) ->
				$(container).find('#' + id + ' tr:first-child')[0]

			#синхронизация ширин первых заголовочных столбцов
			syncBaseColumns = ->
				subjectBodyColWidth = getWidth getFirstRowForTable(document, 'plan-table').firstChild
				subjectHeaderCol = document.getElementById('secol')
				subjectHeaderCol.width = subjectBodyColWidth
				$(subjectHeaderCol).css("min-width", subjectBodyColWidth)

			getWidth = (elem) ->
				elem.offsetWidth
	
			#синхронизация ширин столбоц с классами
			syncClassColumns = ->
				header = getLastRowForTable(document, 'plan-table-header').lastChild
				cell = getFirstRowForTable(document, 'plan-table').lastChild
				for i in [options.colsCount - 2..1]
					headersize = getWidth header
					cellsize = getWidth cell
	
					header.width = cellsize
					header.style.width = cellsize

					header = header.previousSibling
					cell = cell.previousSibling

			#синхронизация всех столбцов
			syncAllColumns = ->
				syncBaseColumns()
				syncClassColumns()
				return

			adjustPlanWidth = ->
				delta = planTable.offsetWidth - planBody.prop("clientWidth")
				if delta > 0
					#признак того, что во внешнем контейнер отображен скрол перекрывающий внутреннюю 0таблицу
					planBodyTotalWidth = planBody.prop("offsetWidth")
					if planBodyTotalWidth + delta < maxWidth
						#если контейнер умещается на экране - то увеличиваем его чтобы скролл не перекрывал таблицу
						planBody.width planBodyTotalWidth + delta
					
					
				headerWidth = getWidth planTableHeader
				# теперь не вычисляем правильную ширину а берём её непосредственно у шапки таблицы
				frame.width = headerWidth + scroll_correction
				planTable.width = headerWidth

				headerWidth = getWidth planTable
				if planTableHeader.width < headerWidth
					planTableHeader.width = headerWidth
				else
					planTable.width = getWidth planTableHeader
		
				frame.width = headerWidth + scroll_correction + 3
				# дополнительная коррекция, чтобы убрать горизонтальный скролл (иногда он не к месту появляется)
		
				#синхронизируем ширины с учетом скроллов
				planHeader.css("max-width", planBody.prop("clientWidth"));

			adjustHeaderCells = ->
				$("tr.header-row > th").each (i, th) ->
					th = $(th)
					headerText = th.text()
					if th.width() < 100
						th.empty()
						th.append $("<small></small>").addClass("text-vertical text-compact").append $("<i></i>").append headerText
						th.addClass "vertical"

			setMaxWidth = ->
				#используем для определения максимальной ширины - размер блока 
				maxWidth = planContainer.prop "clientWidth"
				planBody.css "max-width", maxWidth
				planHeader.css "max-width", planBody.prop "clientWidth"
				maxWidth

			maxWidth = setMaxWidth()
			$(window).on("resize", setMaxWidth)

			scroll_correction = 0
			# если план "высокий" зачит есть скролл - делаем коррекцию:
			if frame.height < planTable.clientHeight
				scroll_correction = options.scrollBarWidth
			else
				frame.height = planTable.clientHeight + options.scrollBarWidth
	
			if msie or bowser.firefox and options.readonly
				frame.width = 6000
				syncBaseColumns()
				headerWidth = getWidth planTableHeader
				if getWidth(planTableHeader) + scroll_correction < headerWidth
					planTable.width = headerWidth

			syncAllColumns()

			headerWidth = getWidth planTableHeader
			# теперь не вычисляем правильную ширину а берём её непосредственно у шапки таблицы
			frame.width = headerWidth + scroll_correction
			planTable.width = headerWidth

			headerWidth = getWidth planTable
			if planTableHeader.width < headerWidth
				planTableHeader.width = headerWidth
			else
				planTable.width = getWidth planTableHeader
		
			frame.width = headerWidth + scroll_correction + 3
			# дополнительная коррекция, чтобы убрать горизонтальный скролл (иногда он не к месту появляется)

			adjustPlanWidth()
			adjustHeaderCells()
			
			#отображаем перегрузки УП
			@highlightOverflows()

			# делаем видимым уч. план:
			infoMessage.css "visibility", "hidden"
			infoMessage.css "display", "none"
			planContainer.css "visibility", "visible"
			legend.removeClass "hidden"

		getClassSubjectsLoad: (subjectsLoad) ->
			_.chain subjectsLoad
				.groupBy (subjectLoad) => 
					if not @options.parentSubjectsView
						subjectInfo = @model.subjects[subjectLoad.subjectId]
						subjectInfo.parentSubjectId ? -subjectLoad.subjectId
					else
						#для вида "выводить только названия групп" - группируем по идентификатору группы предметов
						subjectLoad.subjectId
				.map (subjectHoursGroup, key) -> 
					if subjectHoursGroup.length > 1 
						_.max(subjectHoursGroup, (subjectHours) -> subjectHours.hours).hours
					else
						subjectHoursGroup[0].hours
				.reduce(
					(memo, hours) -> memo + hours,
					0)
				.value()

		getClassComponentHours: (model, classId, componentId) ->
			componentHours = _.findWhere model.hours, {componentId: componentId}
			if not componentHours
				return 0
			classHours = _.findWhere componentHours.classesLoad, {classId: classId}
			if not classHours
				return 0
			@getClassSubjectsLoad classHours.subjectsLoad

		#метод для получения суммарных нагрузок по классам по указанной модели данных
		getClassesTotalHours: (model) ->
			classesTotalHours = {}
			#проверки на не превышение нагрузок по компонентам
			for componentInd in [0..model.hours.length - 1]
				componentHours = model.hours[componentInd]
				componentId = componentHours.componentId
				classesHours = componentHours.classesLoad

				for classId, classHours of classesHours
					classId = _prepareClassId classId
					gradeId = parseInt classHours.gradeId

					classComponentHours = @getClassSubjectsLoad classHours.subjectsLoad

					classTotalHours = classesTotalHours[classId]
					if not classTotalHours
						#создание структуры для описания суммарных нагрузок для классов
						classTotalHours = 
							gradeId: gradeId
							totalHours: 0
							componentsHours: {}
						classesTotalHours[classId] = classTotalHours

					classTotalHours.componentsHours[componentId] = classComponentHours
					classTotalHours.totalHours += classComponentHours
			classesTotalHours

		#получение перегрузок УП
		#возвращает коллекцию объектов вида {componentId, classId, hours, limit}
		getPlanOverflows: ->
			ctrl = this
			planOverflows = []
			classesTotalHours = @getClassesTotalHours @model
			for classId, totalHours of classesTotalHours
				classId = _prepareClassId classId
				gradeId = totalHours.gradeId
				
				#проверка на не превышение нагрузок по компонентам
				for componentId, hours of totalHours.componentsHours
					componentId = parseInt componentId
					gradesLimits = ctrl.model.limits[componentId].gradesLimits
					componentGradeLimit = gradesLimits[gradeId].limit
					if hours > gradesLimits[gradeId].limit
						#компоновка информации о превышении лимита
						planOverflows.push
							classId: classId
							hours: hours
							componentId: componentId,
							limit: componentGradeLimit
				
				if @model.totalLimits
					#проверка на не превышение предельных нагрузок
					totalGradeLimit = ctrl.model.totalLimits[gradeId]
					if not totalGradeLimit
						#существует фактическая нагрузка без плановой. возможно в следствии багов в преобразовании классов и автоматического составления УП
						totalGradeLimit = limit: 0
					if totalHours.totalHours > totalGradeLimit.limit
						#компоновка информации о превышении лимита
						planOverflows.push
							classId: classId
							hours: totalHours.totalHours
							componentId: 0,
							limit: totalGradeLimit.limit

			planOverflows

		#подстветка перегрузок УО
		highlightOverflows: ->
			overflows = @getPlanOverflows()
			
			helpRow = $("#help-row")
			getClassCellIndex = (classId) ->
				helpRow.find("th > input[name=classid][value=" + classId + "]").parent().prop "cellIndex"

			for overflow in overflows
				componentRow = $("tr#componnent-" + overflow.componentId + "-fact-load-row")
				classCellIndex = getClassCellIndex overflow.classId

				limitCell = componentRow.find("td").eq classCellIndex
				limitCell.addClass "overflow"

		#валидация учебного плана на не превышение нагрузок
		# addHours - коллекция добавляемых часов {componentId: ?, subjectId: ?, classesHours: { <classId>: ?, ...} }
		validate: (model) ->
			classesTotalHours = @getClassesTotalHours model
			
			overflows: @getPlanOverflows()
			
		getClassGrade: (classId) ->
			@model.classes[classId].grade

		#сохаранение УП
		save: (modelAdd) ->
			if not window.dataWereChanged and not modelAdd
				return

			savingModel = $.extend true, {}, @model

			if modelAdd
				#модель для добавления {componentId: ?, subjectId: ?, classesHours: { <classId> : ?, ...} }
				componentHours = _.findWhere savingModel.hours, {componentId: modelAdd.componentId}
				if not componentHours
					componentHours =
						componentId: modelAdd.componentId
						classesLoad: {}
					savingModel.hours.push componentHours

				for classId, hours of modelAdd.classesHours
					classId = _prepareClassId classId

					classHours = componentHours.classesLoad[classId]
					if not classHours
						classHours = 
							classId: classId
							gradeId: @getClassGrade classId
							subjectsLoad: []
						componentHours.classesLoad[classId] = classHours

					classHours.subjectsLoad.push
						hours: hours
						subjectId: modelAdd.subjectId

			validateResult = @validate savingModel

			if validateResult.overflows.length > 0
				#если в УП есть перегрузки - показываем подтверждения
				confirms = []
				bolder = (str) -> "<b>" + str + "</b>"
				for overflow in validateResult.overflows
					if overflow.componentId == 0
						continue
					planObjectName = @options.getPlanObjectName @model.classes[overflow.classId]
					componentName = _.findWhere(@model.components, {componentId: overflow.componentId}).componentName
					confirmText = language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_1 + bolder(floatToPlan(overflow.hours)) + language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_2 + bolder(floatToPlan(overflow.limit)) + language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_3 + bolder(componentName) + planObjectName + '\n' + language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_5
					confirms.push $.show.getConfirmation confirmText

			saveData =
				compId: []
				subjId: []
				classId: []
				hours: []
				gradeMin: @options.minGrade
				gradeMax: @options.maxGrade
				yearId: @options.yearId
				termId: @options.termId
				profileId: @options.profileId
				directionId: @options.directionId
				isIup: @options.isIup
				addToPlan: if modelAdd then 1 else 0
			
			_.each savingModel.hours, (componentHours) ->
				_.each _.keys(componentHours.classesLoad), (classId) ->
					classHours = componentHours.classesLoad[classId]
					_.each classHours.subjectsLoad, (subjectHours) ->
						if subjectHours.hours > 0.0
							saveData.compId.push componentHours.componentId
							saveData.classId.push classHours.classId
							saveData.subjId.push subjectHours.subjectId
							saveData.hours.push subjectHours.hours
				
			extDeferred.when validateResult.overflows.length == 0 or confirms
				.then =>
					jsSubmit
						action: "/webapi/curriculum/edit"
						method: "POST"
						data: saveData
						showProcessing: true
						onSuccess: (response) =>
							if @options.isIup
								if response.savingSuccess
									resultMsg = language.Generic.Common.kDataSaved
									resultMsg += "\r\n" + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasCreated + response.sgCreated if response.sgCreated > 0
									resultMsg += "\r\n" + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasNotCreated_1 + response.sgFailed + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasNotCreated_2 if response.sgFailed > 0
									resultMsg += "\r\n" + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasDeleted + response.sgDeleted if response.sgDeleted > 0
								else
									resultMsg = language.Generic.SetupSchoolCurPlan.kErrCantSaveCurriculumPlan
									resultMsg += "\r\n\r\n" + language.SetupSchoolCurPlan.kNoCurrForSubjectWithClass
									resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kMsgExample
									resultMsg += "\r\n" + language.SetupSchoolCalendar.kGrade + ": " + response.curriculumViolation.grade
									resultMsg += "\r\n" + language.Generic.Curriculum.kIupLevel + ": " + response.curriculumViolation.level
									resultMsg += "\r\n" + language.Generic.Curriculum.kSubjectGroup + ": " + response.curriculumViolation.subjectGroup
									resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kCurriculumNotChanged
							else
								if response.savingSuccess
									resultMsg = language.Generic.Common.kDataSaved
									resultMsg += "\r\n" + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasCreated + response.sgCreated if response.sgCreated > 0
									resultMsg += "\r\n" + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasNotCreated_1 + response.sgFailed + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasNotCreated_2 if response.sgFailed > 0
									resultMsg += "\r\n" + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasDeleted + response.sgDeleted if response.sgDeleted > 0
								else
									resultMsg = language.Generic.SetupSchoolCurPlan.kErrCantSaveCurriculumPlan
									resultMsg += "\r\n\r\n" + language.SetupSchoolCurPlan.kNoCurrForSubjectWithClass
									resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kMsgExample
									resultMsg += "\r\n" + language.Common.kClass + ": " + response.curriculumViolation.class
									resultMsg += "\r\n" + language.Generic.Common.kSubject + ": " + response.curriculumViolation.subject
									resultMsg += "\r\n" + language.Common.kProfile + ": " + response.curriculumViolation.profile
									resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kCurriculumNotChanged

							$.show.message resultMsg
							.then ->
								if modelAdd
									DoSubmit document.forms["Filter"], "CuriculumPlan.asp"
									$.show.processing()
										
								if response.canCopyCuriculum
									_copyButton.removeClass "hidden"
								else
									_copyButton.addClass "hidden"

							$("td.waschanged").removeClass("waschanged")
							window.dataWereChanged = false
			
		#очистка учебного плана
		clearPlan: ->
			$("td.input-cell > span").html("&nbsp");
			$('input[name=HOURS]', document.forms['List']).val('')
			$("tr.total-fact-load-row").find("td").not($("tr.total-fact-load-row").find("td").first()).html("")
			$("tr.component-fact-load-row").find("td").not($("tr.component-fact-load-row").find("td").first()).html("")
			$("tr.total-teacher-load-row").find("td").not($("tr.total-teacher-load-row").find("td").first()).html("")
			$("td.waschanged").removeClass("waschanged")
			$("td.overflow").removeClass("overflow")

			_.each @model.hours, (componentHours) ->
				for classId, classHours of componentHours.classesLoad
					_.each classHours.subjectsLoad, (subjectHours) ->
						subjectHours.hours = 0
			dataChanged()
		
		#копировать УП из предыдущего учебного периода
		copy: ->
			if isDBBusy() 
				return

			copyData =
				gradeMin: @options.minGrade
				gradeMax: @options.maxGrade
				yearId: @options.yearId
				termId: @options.termId
				profileId: @options.profileId
				directionId: @options.directionId
				isIup: @options.isIup

			$.show.confirmation language.Generic.Curriculum.kConfirmCopyCurriculum
				.then ->
					jsSubmit
						action: "/webapi/curriculum/copy"
						method: "POST"
						data: copyData
						showProcessing: true
						onSuccess: (response) ->
							$.show.message language.Generic.Curriculum.kCopyCurriculumSuccess
							.then ->
								DoSubmit document.forms["Filter"], "CuriculumPlan.asp"
								$.show.processing()
		
		#получение предельной нагрузки по компоненте и параллели
		getLimit: (componentId, gradeId) ->

			if componentId == 0
				limitInfo = @.model.totalLimits[gradeId]
			else
				componentLimits = _.findWhere @.model.limits, {componentId: componentId}
				limitInfo = componentLimits.gradesLimits[gradeId]
			
			if limitInfo 
				limitInfo.limit
			else
				0

		#получение текущей нагрузки по компоненте + классу + предмету
		#при отсутствии - возвращается объект с hours = 0
		getLoad: (componentId, classId, gradeId, subjectId) ->
			componentLoad = _.findWhere @.model.hours, {componentId: componentId}
			classLoad = componentLoad.classesLoad[classId]
			if not classLoad
				classLoad = {classId: classId, gradeId: gradeId, subjectsLoad: []}
				componentLoad.classesLoad[classId] = classLoad
			classSubjectLoad = _.findWhere classLoad.subjectsLoad, {subjectId: subjectId}
			if not classSubjectLoad
				classSubjectLoad = {subjectId: subjectId, hours: 0.0}
				classLoad.subjectsLoad.push classSubjectLoad
			classSubjectLoad
			
		#установка нагрузки по компоненте + классу + предмету
		setLoad: (componentId, classId, gradeId, subjectId, setLoad) ->
			classSubjectLoad = @getLoad componentId, classId, gradeId, subjectId
			classSubjectLoad.hours = setLoad

		_getCuriculumPlan = ->
			#таблица учебного плана
			planTable = $('#plan-table')
			#клон
			planTableHeader = $('#plan-table-header')
			
			#таблица заголовков
			planTableClone = planTable.clone()
			#клон
			planTableHeaderClone = planTableHeader.clone()
			
			#раскрашивание заголовков
			cloneHeaders = planTableHeaderClone.find('th')
			planTableHeader.find('th')
				.each( (index, col) ->
					cloneHeader = cloneHeaders.eq(index)
					cloneHeader.css('background-color', $(col).css('background-color'))
				)
			
			#раскрашивание строк
			cloneRows = planTableClone.find('tr')
			planTable.find('tr')
				.each( (index, row) ->
					cloneRow = cloneRows.eq(index)
					cloneCells = cloneRow.find('td')
					
					cloneRow.css('background-color', $(row).css('background-color'))
					$('td', row).each( (index, cell) ->
						cloneCell = cloneCells.eq(index)
						cloneCell.css('background-color', $(cell).css('background-color')) if cloneCell.css('background-color') isnt $(cell).css('background-color')
						#переопределяется положение текста в ячейках
						cloneCell.css('text-align', 'left') if cloneCell.hasClass('text-left') or cloneRow.hasClass('subject-field-row')
					)
				)
			
			headerCloneRows = planTableHeaderClone.find('tr')
			headerCloneRows.first().find('th').eq(0).prop("colspan", 2).addClass('text-center')
			planTableHeader.find('tr')
				.each( (index, item) ->
					headerCloneRows.eq(index).css('background-color', $(item).css('background-color'))
				)
			
			#добавление заголовков в таблицу учебного плана
			$.each(headerCloneRows.get().reverse(), ->
				$(this).prependTo(planTableClone)
			)
			planTableClone.find('#help-row').remove()
			#добавление легенд
			planTableClone.add($('div.legend').clone())

		#печать учебного плана
		printPlan: () ->
			#todo. печать УП
			_getCuriculumPlan().removeClass('table-hover').addClass('table-print').printUtils().toPrint
				viewHeader: true

			
		#экспорт учебного плана
		exportPlan: () ->
			#todo. экспорт УП
			_getCuriculumPlan().printUtils().toExcel
				viewHeader: true
