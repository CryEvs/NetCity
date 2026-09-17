# CoffeeScript
controlEditAssignments = do () ->
	#приватные методы для функционала по выбору учеников для выполнения задания
	_selectionStudents =
		_canSaveSelection: () ->
			form = document.forms['ChooseForm']
			if not form then return true
		
			if typeof form.elements['CHK_ST'].length is 'undefined'
				if not form.elements['CHK_ST'].checked
					alert(language.Generic.Curriculum.kAtLeastOneStudentMustBeSelected + language.Common.kStudent.toLowerCase());
					return false
			else
				hasSel = false
				
				for i in [0..form.elements['CHK_ST'].length - 1] by 1
					if form.elements['CHK_ST'][i].checked then hasSel = true
			
				if not hasSel
					alert(language.Generic.Curriculum.kAtLeastOneStudentMustBeSelected + language.Common.kStudent.toLowerCase());
					return false
			return true
			
		_allSelected: () ->
			form = document.forms['ChooseForm']
			if not form then return
		
			if typeof form.elements['CHK_ST'].length is 'undefined'
				form.elements['CHK_ST'].checked
			else
				allSel = true
			
				for i in [0..form.elements['CHK_ST'].length - 1] by 1
					if not form.elements['CHK_ST'][i].checked then allSel = false
				
				allSel
		
		_apply: (dialog) ->
			if not _selectionStudents._canSaveSelection() then return
		
			if _selectionStudents._allSelected()
				$('#studentList').text(language.Generic.Curriculum.kToAll)
				$('input[name="all_students"]').val(1)
			else 
				checkedStudentNameList = ''
				checkedStudentIdList = ''
			
				$('input[name="CHK_ST"]:checked').each(() ->
					_row = $(this).closest("tr");

					checkedStudentNameList += _row.find('.student_name').text() + '<br />'
					checkedStudentIdList += $(this).val() + ','
				)
				checkedStudentNameList = checkedStudentNameList.substring(0, checkedStudentNameList.length - 6)
				checkedStudentIdList = checkedStudentIdList.substring(0, checkedStudentIdList.length - 1)

				$('#studentList').html(checkedStudentNameList)
				$('input[name="all_students"]').val(0)
				$('input[name="students"]').val(checkedStudentIdList)

			window.dataWereChanged = true;
			dialog.successClose()
		
		_select: () ->
			form = document.forms['ChooseForm'];
					
			if not form then return

			if not form.elements['CHK_ST'].length
				form.elements['CHK_ST'].checked = true
				return
			else 
				for element in form.elements['CHK_ST']
					element.checked = true
				return
		_clear: () ->
			form = document.forms['ChooseForm']
			if not form then return

			if not form.elements['CHK_ST'].length
				if form.elements['RES_ST'].value is '0'
					form.elements['CHK_ST'].checked = false
					return
			else
				for i in [0..form.elements['CHK_ST'].length - 1] by 1
					if form.elements['RES_ST'][i].value is '0' then form.elements['CHK_ST'][i].checked = false
				return
	_usingKTP =
		_apply: (dialog) ->
			lessonInfo = controlEditAssignments.lessonInfo
			bChangeKTP = $('#changeKTP').prop('checked') #изменить домашнее задание в КТП
			controlEditAssignments.bChangeKTP = bChangeKTP
			
			applyChanges = ->
				$('input[name="AN"]').val(lessonInfo.homeAssignment)
			
				$('input[name="changeKTP"]').remove()
				$('form[name="AssignmentEdit"]').append($('<input type="hidden" name="changeKTP" value="' + (if bChangeKTP then '1' else '0') + '" />'))
			
				$('input[name="HALESSON"]').remove()
				if bChangeKTP
					halesson = $('form#fromKTPTable select[id="lesson_select"]').val()
					$('form[name="AssignmentEdit"]').append($('<input type="hidden" name="HALESSON" value="' + halesson + '" />'))
			
				if lessonInfo.attachments
					$('input[name="ktpAttachment"]').remove()
				
					lessonInfo.attachments.forEach((item) ->
						$('form[name="AssignmentEdit"]').append($('<input type="hidden" name="ktpAttachment" value="' + item.attachmentId + '" />'))
					
						fileAttachmentCtrl.addFile(
							Id: item.attachmentId
							Name: item.fileName
							Description: item.fileDescription
							isNew: true
							isCanDeleteFromDb: bChangeKTP
						)
					)
			
				window.dataWereChanged = true
				dialog.close()
			
			if controlEditAssignments.isHomeAssignment and controlEditAssignments.lessonInfo.relatedSgCount > 1 and controlEditAssignments.bChangeKTP
				$.show.confirmation(language.Generic.Assignment.KHomeAssignmentWillBeSave4AllClasses.replace('{0}', controlEditAssignments.lessonInfo.relatedSgCount))
					.then(applyChanges)
				return
			applyChanges()
			
	#переименовать
	handlerSelectStudents: ->
		startDate = $('input[name="ADT"]').val()
		endDate = $('input[name="DDT"]').val()
		aType = $('*[name="ATypeOld"]').val()
				
		jsSubmit({
			action: '/asp/ajax/GetStudentListForAssignment.asp',
			data: 
				STARTDATE: startDate
				ENDDATE: endDate
				ASSIGNMENTID: controlEditAssignments.assignmentId
				ATYPE: aType
			showProcessing: true,
			onSuccess: (response) ->
				studentList = response.data.studentList
						
				if not studentList.length then return alert(language.Curriculum.kNoStudentsInClass2 + language.Common.kStudents_r)
				
				source = '	<form name="ChooseForm">
								<div style="max-height: 500px; overflow: auto;">
									<table class="table table-bordered table-xs table-hover table-striped">
										<tr>
											<th style="width: 1%;"></th>
											<th>' + language.Common.kStudents + '</th>
										</tr>
										{{#each studentList}}
											<tr>
												<td>
													{{#if isFreeStudent}}
														<input type="checkbox" disabled {{#if assignmentId}}checked{{/if }} />
													{{/if}}
													{{#unless isFreeStudent}}
														<input type="checkbox"
															id="CHK_ST_{{userId}}"
															name="CHK_ST" 
															value="{{userId}}" 
															{{#if assignmentId}}checked{{/if }}
															onclick={{#unless result}}"dataChanged();"{{else}}"controlEditAssignments.restoreCheck(this);"{{/unless}} />
														<input	type="hidden" 
																name="RES_ST" 
																value="{{#unless result}}0{{else}}{{result}}{{/unless}}" />
													{{/unless}}
												</td>
												<td>
													<label for="CHK_ST_{{userId}}" class="light student_name">
													{{nickName}}
													</label>
												</td>
											</tr>
										{{/each}}
									</table>
								</div>
							</form>'
					
				template = Handlebars.compile(source)
				content = template(response.data)

				$.show.dialog({
					title: language.Curriculum.kChooseStudents
					onshown: (dialog) ->
						if $('input[name="all_students"]').val() is '1'
							$('input[name="CHK_ST"]').prop('checked', true)
							return
						else if $('input[name="all_students"]').val() is '0' and $('input[name="students"]').val().length
							$('input[name="CHK_ST"]').prop('checked', false)
							arrStudentList = $('input[name="students"]').val().split(',')
					
							for i in [0..arrStudentList.length - 1] by 1
								$('input[value="' + arrStudentList[i] + '"]').prop('checked', true)
							return
						return
					message: content
					buttons: [{label: language.Generic.Buttons.kApply, action: _selectionStudents._apply, cssClass: 'btn-primary'},
							{label: language.Generic.Common.kCheckAll, action: _selectionStudents._select, cssClass: 'btn-primary'},
							{label: language.Generic.Common.kUnCheckAll, action: _selectionStudents._clear, cssClass: 'btn-primary'}]
				})
				return
		})
		return
		
	restoreCheck: (obj) ->
		alert(language.Curriculum.kStudentHaveMarkForAssignment)
		if (not obj.checked) then obj.checked = true
		
	changeReqMarkHandler: (event, isExternal) ->
		value = $('select[name="ReqMark"]').find('option:selected').val()
		
		if value is '0'
			$('#selectStudents').hide()
			$('input[name="all_students"]').val(1)
			$('#studentList').text(language.Generic.Curriculum.kToAll)
		else
			if not controlEditAssignments.studentList.length
				$('input[name="all_students"]').val(0)
				$('input[name="students"]').val('')
				$('#studentList').text('')
			else			
				i = 0 # Количество учеников, которые прикреплены к заданию
				studentList = ''
				studentIds = ''
			
				$(controlEditAssignments.studentList).each((index, value) ->
					if value.assignmentId isnt null
						studentList += value.nickName + '<br />'
						studentIds += value.userId + ','
						i++
				)
			
				controlEditAssignments.isAllStudents = (i is controlEditAssignments.studentList.length)
			
				if not controlEditAssignments.isAllStudents
					studentList = studentList.substring(0, studentList.length - 6)
					
					studentIds = studentIds.substring(0, studentIds.length - 1)
					$('input[name="students"]').val(studentIds)
					
				$('#studentList').html(if controlEditAssignments.isAllStudents then language.Generic.Curriculum.kToAll else studentList)
				$('input[name="all_students"]').val(if controlEditAssignments.isAllStudents then "1" else "0")
				
			$('#selectStudents').show()
			
			if not isExternal
				controlEditAssignments.handlerSelectStudents()
		
	fromKTP: ->
		if $('#lessonListWindow').length
			dialog = $('#lessonListWindow')
			dialog.dialog('open')
			return
			
		jsSubmit
			action: '/asp/ajax/GetLessonListForCM.asp',
			data:
				CMID: controlEditAssignments.CMId
			showProcessing: true
		.then (response) ->
			lessonList = response.data.lessonList
				
			if not lessonList.length
				alert(language.Generic.Assignment.kUnableRetrieveHomeWorkText)
				return

			indentString = (str, length, indent) ->
				if str.length is length
					return str
				indentString(str + indent, length, indent)

			source = '	<form class="form" id="fromKTPTable">
							<div class="form-group">
								<label class="control-label">' + language.Generic.Assignment.kLessonInKTP + '</label>
								<div id="lesson_block">
									<select id="lesson_select" class="form-control">
										{{#each lessonList}}
											<option value="{{lessonId}}">{{lessonName}}</option>
										{{/each}}
									</select>
								</div>
							</div>
							<div class="form-group">
								<label class="control-label">' + language.Generic.Assignment.kHomeAssignment + '</label>
								<div>
									<textarea class="form-control" rows="10" id="lessonDetails" style="border: 1px solid #8baed8;" readonly></textarea>
								</div>
							</div>
							<div class="form-group">
								<div class="checkbox">
									<label>
										<input type="checkbox" id="changeKTP"> ' + language.Generic.Assignment.kChangeHomeWorkInKTP + '
									</label>
								</div>
							</div>
						</form>'

			$(lessonList).each((index, value) ->
				lessonNumberWithIndent = indentString(value.lessonNumber, 7, ' ').replace(/\s/g, '&nbsp;')
				value.lessonName = new Handlebars.SafeString(lessonNumberWithIndent + Handlebars.Utils.escapeExpression(value.lessonName))
			)
			
			template = Handlebars.compile(source)
			templateModel =
				lessonList: lessonList
			content = template templateModel

			$.show.dialog
				title: language.Generic.Assignment.kSelectingLessonFromKTP
				message: content
				onshown: (dialog) ->
					$('#lesson_select').on('change', () ->
						value = $(this).find('option:selected').val()
						
						jsSubmit
							action: '/asp/ajax/GetLessonInfo.asp',
							data:
								LESSONID: value
							showProcessing: false
						.then (response) ->
							lessonInfo = response.data.lessonInfo
							controlEditAssignments.lessonInfo = lessonInfo
								
							$('#lessonDetails').text(lessonInfo.homeAssignment)
							$('.file-attachment.from-ktp').remove()
							
							if lessonInfo.attachments
								template = '<div class="file-attachment-block multiple">
												{{#each files}}
													<div class="file-attachment from-ktp multiple" onclick="FileAttachmentCtrl.openAttachment(\'/doc/{{fileName}}\', {{attachmentId}});" title="{{fileName}} {{#if fileDescription}}{{fileDescription}}{{/if}}">
														<span class="file-name">{{fileName}}</span>
														{{#if fileDescription}}
															<span class="file-description">{{fileDescription}}</span>
														{{/if}}
													</div>
												{{/each}}
											</div>'
											
								context = 
									files: lessonInfo.attachments
											
								template = Handlebars.compile(template)
								html = template(context)
								
								$('#fromKTPTable').append(html)
						return
					)
					$('#lesson_select').trigger('change')
					return
				buttons: [{label: language.Generic.Buttons.kApply, action: _usingKTP._apply}]

	diagnosticControlWork:
		template: '<label class="control-label col-md-4 col-lg-3 col-sm-4">Диагностическая работа</label>
				<div class="col-md-8 col-lg-5 col-sm-8">
					<select name="DiagnosticWork" class="form-control" onchange="checkConsidersDkr(this)">
						{{#unless typeId}}<option value="-1_-1" selected="selected">Выберите вариант диагностической работы</option>{{/unless}}
						{{#each variants}}<option value="{{id}}_{{testPlanId}}">{{diagnosticWork.name}} ({{name}})</option>{{/each}}
					</select>
				</div>';
		setVariant: (element) ->
			jsSubmit
				action: "/webapi/grade/variant"
				data:
					aid: $("[name='AID']").val()
				method: 'GET'
				onSuccess: (response) ->
					variant = response.id + "_" + response.testPlanId
					element.val(variant)
					checkConsidersDkr(element[0])
					return
		show: ->
			jsSubmit
				action: "/webapi/grade/diagnosticWorks"
				data:
					aid: $("[name='AID']").val()
					cmid: $("[name='CMID']").val()
				showProcessing: true
				method: 'GET'
				onSuccess: (response) ->
					template = Handlebars.compile(controlEditAssignments.diagnosticControlWork.template)
					model = 
						variants: response
						typeId: null
					$("#diagnosticWork").append(template(model))
					selectElement = $("[name='DiagnosticWork']")
					if(response.length == 0 || hasTestResults)
						Disable(selectElement)
					controlEditAssignments.diagnosticControlWork.setVariant(selectElement)
					return

			$(this).show()

		hide: ->
			$(this).hide()
			$('#diagnosticWork').children().detach()

		events: ->
			$("#blockConiderDKR").on("show", controlEditAssignments.diagnosticControlWork.show)
			$("#blockConiderDKR").on("hide", controlEditAssignments.diagnosticControlWork.hide)

			showConsiderDKR($("[name='AType']")[0])

$(->
	$('select[name="ReqMark"]').on('change', controlEditAssignments.changeReqMarkHandler)
		
	if not controlEditAssignments.readonly
		selectStudents = $.uicontrols.button(
			id: 'selectStudents', 
			label: language.Curriculum.kChooseStudents, 
			click: controlEditAssignments.handlerSelectStudents, 
			size: 'btn-sm'
		)

		$('#studentList').before(selectStudents)
	
	controlEditAssignments.changeReqMarkHandler(null, true)
	$('select[name="RIJ"]').trigger('change') #запись в классный журнал (назначение задания в учебных курсах)

	controlEditAssignments.diagnosticControlWork.events()
	return
)