# CoffeeScript
$(document).ready ->
	if !globalParams.readonly
		fixHelperModified = (e, tr) ->
			$originals = tr.children()
			$helper = tr.clone()

			$helper.children().each((index) ->
				$(this).width($originals.eq(index).width())
				return
			)

			return $helper

		updateIndex = (e, ui) ->
			$('td.number', ui.item.parent()).each((i) ->
				$(this).html(i + 1)
				return
			)
			saveTestPlan()
			return
		

		$("#tasks tbody").sortable({
			helper: fixHelperModified,
			stop: updateIndex,
			start: (event, ui) ->
				$(ui.helper).addClass('move')
				return
			,
			distance: 3
		}).disableSelection()
	
	else 
		$('select[name=LEVELID]').prop('disabled', true)
	
		
	if !globalParams.existsTasks
		$("#tasks").hide()
	
	
	if globalParams.testPlanId == 0
		$("#popUpTestLevel").hide()
		$("#existsTestTasks").show()
		$('#importTestPlanButton').show()
		$('select[name=LEVELID]').find('option[value=' + globalParams.defTestPlanLevel + ']').prop('selected', true)
	

	if $("#tasks tr:last td.number").text() != ''
		globalParams.lastTestTaskNumber = parseInt($("#tasks tr:last td.number").text())
	
	
	if globalParams.testPlanId != 0
		$('#deleteTestPlanButton').show()
		$('#exportTestPlanButton').show()
	

	if globalParams.testPlanId == 0
		$('#importTestPlanButton').show()
		return
	
_import = ->
	if globalParams.testPlanId != 0
		alert(language.Generic.QualityAssessment.kForImportSelectEmptyTestPlan)
		return
	else
		params = { "USERID": globalParams.userId, "ASSIGNMENTID": globalParams.assignId, "TESTPLANID": globalParams.testPlanId, "SGID": globalParams.sgId }
		importTestPlan(params)
		return

exportTestPlan = ->
	if globalParams.testPlanId != 0
		$.show.confirmation(language.Generic.QualityAssessment.kExportTestPlanConfirm)
			.then(()->
				params = { "SGID": globalParams.sgId, "TESTPLANID": globalParams.testPlanId }
				postTo('ExportTestPlan.asp', params)
				return
			)
	else 
		alert(language.Generic.QualityAssessment.kNotExistsTestPlan)
		return

saveTestPlan = (onSuccess, onError) ->
	taskIds = $('#tasks tbody tr:not(.removed) input[name=testTaskId]')
	taskNumbers = $('#tasks tbody tr:not(.removed) td.number')
	taskIdsTemp = new Array(taskIds.length)
	taskNumbersTemp = new Array(taskNumbers.length)

	if taskIds.length != taskNumbers.length
		alert(language.Generic.QualityAssessment.kErrTestPlanSaving)
		return
	
	i = 0
	while i < taskIds.length
		taskIdsTemp[i] = taskIds[i].value
		taskNumbersTemp[i] = i + 1
		i++

	params = { "TASKIDS": taskIdsTemp, "TASKNUMBERS": taskNumbersTemp, "TESTPLANID": globalParams.testPlanId }

	jsSubmit({
		action: '/asp/ajax/SaveTestPlan.asp',
		data: params,
		onSuccess: onSuccess,
		onError: onError,
		showProcessing: true
	});
	return


editTask = (testTaskId, dialog) ->
	#TODO. избавиться от этого
	if !validationAdditionTaskForm() then return
	GetSchoolArray("tree")
	contentElements = $('input[name="tree"]').val()
	taskDifficultId = $('select[name=TASKDIFFICULTID]').val()
	taskDifficultName = $('select[name=TASKDIFFICULTID] option:selected').text()
	
	number = $('input[name=testTaskId][value=' + testTaskId + ']').parent().find('td.number').text()
	additional = $('input[name=ADDITIONAL]').val()
	mistakeName = $('select[name=MISTAKEID] option:selected').text()
	mistakeId = $('select[name=MISTAKEID]').val()
	possiblePoints
	if mistakeId == "" || mistakeId == undefined
		possiblePoints = $('input[name=possiblePoints]').val()
	else
		possiblePoints = 100
		
	strContent = getStrContent(globalParams.strContentElementsTitles.replace(/(?:<br>)?<b>.*<\/b>.*/,''), additional)

	params = { "CE": contentElements, "TASKDIFFICULT": taskDifficultId, "POSSIBLEPOINTS": possiblePoints, "TESTTASKID": testTaskId, "ADDITIONAL": additional, "MISTAKE": mistakeId }
	resValid = validationTaskParams(taskDifficultId, possiblePoints, mistakeId)
	
	if resValid != ""
		$.show.alert(resValid)
		return
	
	jsSubmit({
		action: '/asp/ajax/EditTestTask.asp',
		data: params,
		showProcessing: true,
		onSuccess:() ->
			if !possiblePoints || possiblePoints == "0"
				focusAlert($('input[name=possiblePoints]'), language.Generic.QualityAssessment.kAlertMaxScore)
				return
			
			oldRow = $('#taskrow_' + testTaskId)
			newRow = buildTaskRow(testTaskId, number, taskDifficultName, possiblePoints, globalParams.strContentElementsNumbers, strContent, mistakeName)
			oldRow.replaceWith(newRow)
			
			alert(language.Generic.QualityAssessment.kTestTaskSuccessEdition)
			dialog.successClose()
	})
	return

deleteTestPlan = ->
	$.show.confirmation(language.Generic.QualityAssessment.kAreYouSureDeleteTestPlan).
	then(()->
		params = { TestPlanId: globalParams.testPlanId }

		jsSubmit({
			action: '/asp/ajax/DeleteTestPlan.asp',
			data: params,
			showProcessing: true,
			onSuccess: (response) ->
				updateGlobalParamsAndWindowElements()
				alert(language.Generic.QualityAssessment.kSuccessDeleteTestPlan)
				return
		})
		return
	)

openAdditionTaskWindow = ->
	defMaxScore = 1
	addTask = (dialog) ->
		if !validationAdditionTaskForm() then return

		GetSchoolArray("tree")
		contentElements = $('input[name="tree"]').val()
		testLevelId = $('select[name=LEVELID]').val()
		taskDifficultId = $('select[name=TASKDIFFICULTID]').val()
		taskDifficultName = $('select[name=TASKDIFFICULTID] option:selected').text()
		possiblePoints = $('input[name=possiblePoints]').val()
		additional = $('input[name=ADDITIONAL]').val()
		mistakeId = $('select[name=MISTAKEID]').val()
		mistakeName = $('select[name=MISTAKEID] option:selected').text()

		strContent = getStrContent(globalParams.strContentElementsTitles, additional)

		resValid = validationTaskParams(taskDifficultId, possiblePoints, mistakeId)
		if resValid != ""
			$.show.alert(resValid)
			return

		globalParams.lastTestTaskNumber++;
		
		number = globalParams.lastTestTaskNumber

		params = { "CE": contentElements, "LEVELID": testLevelId, "TASKDIFFICULT": taskDifficultId, "POSSIBLEPOINTS": possiblePoints, "TESTPLANID": globalParams.testPlanId, "NUMBER": number, "ADDITIONAL": additional, "MISTAKE": mistakeId }

		if globalParams.testPlanId == 0
			params.CREATETESTPLAN = 1
			params.USERID = globalParams.userId
			params.AID = globalParams.assignId
		else
			params.CREATETESTPLAN = 0

		jsSubmit({
			action: '/asp/ajax/AddNewTestTask.asp',
			data: params,
			showProcessing: true,
			onSuccess: (response) ->
				if globalParams.testPlanId == 0
					globalParams.testPlanId = response.data.testPlanId

					$('#deleteTestPlanButton').show()
					$('#exportTestPlanButton').show()
				
				$("#tasks tbody").append(buildTaskRow(response.data.testTaskId, number, taskDifficultName, possiblePoints, globalParams.strContentElementsNumbers, strContent, mistakeName))

				if !globalParams.existsTasks
					globalParams.existsTasks = true
					$("#tasks").show()
					$("#popUpTestLevel").show()
					$("#existsTestTasks").hide()
					$('#importTestPlanButton').hide()
				
				dialog.successClose()
				return
		})
		return
	

	$('input[name=possiblePoints]').val(defMaxScore)
	$.show.dialog({
		title: language.Generic.QualityAssessment.kAdditionTask,
		size: BootstrapDialog.SIZE_WIDE,
		message: $('#additionTask'),
		buttons: [{ label: language.Generic.Buttons.kSave, action: addTask, cssClass: 'btn-primary' }],
		onshown:() ->
			firstDrawContentElementsTree(0)
			
			$('div[name=selectedContentElements]').val("&nbsp;")
			globalParams.strContentElementsNumbers = ''
			globalParams.strContentElementsTitles = ''
			return
	})
	return


openEditTaskWindow = (testTaskId) ->
	globalParams.strContentElementsNumbers = $('input[name=testTaskId][value=' + testTaskId + ']').parent().find('td.contentElementCodes').html()
	globalParams.strContentElementsTitles = $('input[name=testTaskId][value=' + testTaskId + ']').parent().find('td.contentElementNames').html()

	params = { "TESTTASKID": testTaskId }

	$.show.dialog({
		title: language.Generic.QualityAssessment.kEditionTask,
		size: BootstrapDialog.SIZE_WIDE,
		message: $('#additionTask'),
		buttons: [{
			label: language.Generic.Buttons.kSave,
			action: (dialog) ->
				editTask(testTaskId, dialog)
				return
			,
			cssClass: 'btn-primary'
		}],
		onshown:() ->
			jsSubmit({
				action: '/asp/ajax/GetTestTask.asp',
				data: params,
				showProcessing: true,
				onSuccess: (response) ->
					difficult = response.Difficult
					possiblePoints = response.PossiblePoints
					additional = response.Additional
					mistakeType = response.MistakeType

					$('select[name=MISTAKEID] option[value=' + mistakeType + ']').prop('selected', true)
					$('select[name=TASKDIFFICULTID] option[value=' + difficult + ']').prop('selected', true)
					$('input[name=possiblePoints]').val(possiblePoints)
					$('input[name=ADDITIONAL]').val(additional)

					firstDrawContentElementsTree(testTaskId)

					content = $('<div></div>')
						.html(globalParams.strContentElementsTitles)
						.css('overflow', 'auto')
						.css('max-height', '100px')
						.css('min-height', '20px')
						.css('font-size', '11px')
						.css('margin-left','8px')

					$('div[name=selectedContentElements]').html(content)
					return
			})
			return
	})
	return

firstDrawContentElementsTree = (testTaskId) ->
	if globalParams.bFromEm
		jsSubmit({
			action: '/asp/ajax/GetContentElements.asp',
			data: { mode: "all" ,SECTIONSYSTEM: 'TESTPLANFORDIAGNOSTICWORK', TESTTASKID: testTaskId, SUBJECTID: globalParams.subjectId, GLOBALYEARID: globalParams.globalYearId , MINGRADE: globalParams.minGrade},
			showProcessing: true,
			onSuccess: (response) ->
				globalParams.elementsTree = response

				if globalParams.isDictation
					mistake = $('*[name=MISTAKEID]').val()
					if mistake != null
						tree = getMistakeTree(mistake)
				else
					tree = globalParams.elementsTree

				drawContentElementsTree(tree)
				return
		})
	else
		jsSubmit({
			action: '/asp/ajax/GetContentElements.asp',
			data: { mode: "all" ,SECTIONSYSTEM: 'TESTPLAN', TESTTASKID: testTaskId, SGID: globalParams.sgId },
			showProcessing: true,
			onSuccess: (response) ->
				globalParams.elementsTree = response
				
				if globalParams.isRusDictation
					mistake = $('*[name=MISTAKEID]').val()
					
					orph = 'Орфография'
					punkt = 'Пунктуация'
					hasOrphElements = false
					hasPunktElements = false
	
					_.each globalParams.elementsTree, (obj) ->
						if obj.title.indexOf(orph) > -1
							hasOrphElements = true
						if obj.title.indexOf(punkt) > -1
							hasPunktElements = true
						
					globalParams.hasMistakeElements = hasPunktElements && hasOrphElements
				
					if globalParams.hasMistakeElements
						globalParams.orphElements = _.find(globalParams.elementsTree, (obj) -> 
							return (obj.title.indexOf(orph) > -1)
						)
						globalParams.punktElements = _.find(globalParams.elementsTree, (obj) -> 
							return (obj.title.indexOf(punkt) > -1)
						)
					
					if mistake != null
						tree = getMistakeTree(mistake)
				else
					tree = globalParams.elementsTree

				drawContentElementsTree(tree)
				return
		})
	return

drawContentElementsTree = (tree) ->
	$("#tree").replaceWith($('<div></div>').attr("id", "tree").css('font-size', '11px').css('overflow', 'auto').css('margin-left','8px').css('margin-bottom','3px'))
	$("#tree").contentElementsTree({
		children: tree,
		onPostInit: (isReloading, isError) ->
				treeElements = this.$tree.contents().children()
				if globalParams.elementsTree.length == 0
					return this.$tree.append(language.Generic.Curriculum.kSubjectNotHaveContentElementsInCurrYear)
				if treeElements.length == 0
					if globalParams.isDictation
						this.$tree.append(language.Generic.QualityAssessment.kAlertTaskMistakeType)
					else
						this.$tree.append(language.Generic.Curriculum.kSubjectNotHaveContentElementsInCurrYear)
			,
		onSelect: (select, node) ->
			nodeNames = null

			Nodes = node.tree.getSelectedNodes()
			nodeNames = $.map(Nodes, (node) ->
				if node.data.children.length == 0
					return node.data.title
			)
			globalParams.strContentElementsNumbers = ''
			globalParams.strContentElementsTitles = ''
			
			i = 0
			while i < nodeNames.length
				str = nodeNames[i]
				globalParams.strContentElementsNumbers = globalParams.strContentElementsNumbers + ',<br/>' + str.substr(0, str.indexOf(' '))
				globalParams.strContentElementsTitles = globalParams.strContentElementsTitles + ',<br/>' + str.substr(str.indexOf(' ') + 1)
				i++

			globalParams.strContentElementsNumbers = globalParams.strContentElementsNumbers.substring(6, globalParams.strContentElementsNumbers.length);
			globalParams.strContentElementsTitles = globalParams.strContentElementsTitles.substring(6, globalParams.strContentElementsTitles.length);

			strContent = getStrContent(globalParams.strContentElementsTitles, $("input[name=ADDITIONAL]").val())

			content = $('<div></div>')
				.html(strContent)
				.css('overflow', 'auto')
				.css('max-height', '100px')
				.css('min-height', '20px')
				.css('font-size', '11px')
				.css('margin-left','8px')

			$('div[name=selectedContentElements]')
				.html(content)
			return
	})
	return

changeMistakeType = ->
	mistake = $('*[name=MISTAKEID]').val()
	tree = getMistakeTree(mistake)
	$("#tree").reloadElementsTree(tree)
	return
	#drawContentElementsTree(tree)

getMistakeTree = (newMistake) ->
	if globalParams.hasMistakeElements
		switch newMistake
			when '0'
				return globalParams.orphElements.children
			when '1'
				return globalParams.punktElements.children
			when '2'
				return globalParams.elementsTree
	else
		return globalParams.elementsTree

getStrContent = (content, additional) ->
	if content == null || content == ""
		if additional == null || additional == ""
			strContent = ""
		else 
			strContent = "<b>" + language.Generic.QualityAssessment.kAdditional + ": </b>" + additional
	else
		if additional == null || additional == ""
			strContent = content
		else
			strContent = content + "</br><b>" + language.Generic.QualityAssessment.kAdditional + ": </b>" + additional
	
	return strContent

renumberTasks = ->
	taskNumbers = $('#tasks tbody td.number')
	i = 0
	while i < taskNumbers.length
		taskNumbers[i].textContent = i + 1
		i++
		
	if $("#tasks tr:last td.number").text() == ''
		globalParams.lastTestTaskNumber = 0
		return
	else
		globalParams.lastTestTaskNumber = parseInt($("#tasks tr:last td.number").text())
		return
		
deleteTasks = ->
	deletingRows = $('input[name=deleteTask]:checked').parent().parent()

	if deletingRows.length == 0
		alert(language.Generic.QualityAssessment.kTestTaskNotSelected)
		return
	
	$.show.confirmation(language.Generic.QualityAssessment.kAreYouSureDeleteTestTask).then(()->
		deletingRows.addClass('removed')

		deleteOnError = ->
			deletingRows.removeClass('removed')
			return
		
		deleteSucess = ->
			deletingRows.remove()
			renumberTasks()

			taskIds = $('#tasks tbody tr:not(.removed) input[name=testTaskId]')
			if taskIds.length == 0
				updateGlobalParamsAndWindowElements()
			
			alert(language.Generic.QualityAssessment.kSelectedTasksSuccessDeleted)
			return
		
		saveTestPlan(deleteSucess, deleteOnError)
		return
	)
	return

validationTaskParams = (taskDifficultId, possiblePoints, mistakeId) ->
	message = ""
	if globalParams.typeAssign != 8
		if taskDifficultId == "" || taskDifficultId == null
			message += language.Generic.QualityAssessment.kAlertTaskDifficult + ".</br>"
			
		if possiblePoints == "" || possiblePoints == null || !possiblePoints || possiblePoints == "0"
			message += language.Generic.QualityAssessment.kAlertMaxScore
	else
		if mistakeId == "" || mistakeId == null
			message += language.Generic.QualityAssessment.kAlertTaskMistakeType + ".</br>"
	return message

validationAdditionTaskForm = ->
	strPossiblePoints = $('input[name=possiblePoints]').val()
	
	if typeof myVar != 'undefined'
		find = strPossiblePoints.match(/[^0-9]/g)
		if find != null
			alert(language.Generic.QualityAssessment.kMaxScoreFieldOnlyNumbers)
			return false

	return true;

OnChangeSelect = (sFormName, sAction) ->
	if globalParams.testPlanId == 0 then return
	
	testLevelId = $('select[name=LEVELID]').val()
	params = { "TESTLEVELID": testLevelId, "TESTPLANID": globalParams.testPlanId, "UPDATELEVEL": 1 }

	jsSubmit({
		action: '/asp/ajax/SaveTestPlan.asp',
		data: params,
		showProcessing: true,
		onSuccess: (response) ->
			alert(language.Generic.QualityAssessment.kTestLevelEditionSuccess)
			return
	})
	return

buildTaskRow = (taskId, number, difficultName, possiblePoints, ceNumbers, ceTitles, mistakeName) ->
	row = $('<tr></tr>').attr('id', 'taskrow_' + taskId).css('vertical-align', 'top')

	id = $('<input />').attr('type', 'hidden').val(taskId).attr('name', 'testTaskId')
	row.append(id)
	row.append($('<td></td>').text(number).addClass('number'))
	if !globalParams.isDictation
		row.append($('<td></td>').text(difficultName))
		row.append($('<td></td>').text(possiblePoints))
	else if globalParams.isRusDictation
		row.append($('<td></td>').text(mistakeName))
	
	row.append($('<td></td>').html(ceNumbers).addClass('contentElementCodes'))
	row.append($('<td></td>').html(ceTitles).addClass('contentElementNames'))

	delCell = $('<td></td>').attr('text-valign', 'top').css('text-align', 'center')
	delCell.html('<input type="checkbox" name="deleteTask"/>')
	row.append(delCell)
	arr = [{ classButton: 'editing', title: 'Редактировать', icon: 'glyphicon glyphicon-pencil', click: 'javascript:openEditTaskWindow(' + taskId + ')' }]
	button = $.uicontrols.linkButton(arr)
	row.append($('<td></td>').addClass('text-center').append(button))
	return row

updateGlobalParamsAndWindowElements = ->
	$("#tasks").hide()
	$('#tasks tbody').empty();
	#очищаем содержимое таблицы, потому что если пользователь за один заход
	#удалит полностью план и опять добавит задание, то предыдущие задания тоже отобразаться

	globalParams.existsTasks = false
	globalParams.testPlanId = 0
	globalParams.lastTestTaskNumber = 0
	
	$('#deleteTestPlanButton').hide()
	$('#exportTestPlanButton').hide()
	$('#importTestPlanButton').show()
	$('#popUpTestLevel').hide()
	$("#existsTestTasks").show()
	$('#importTestPlanButton').show()
	return

importTestPlan = (params) ->
	###
	todo 
		валидация расширения файла
		
	
	###

	fileDialogContent = 
		'<form name="form" method="POST" enctype="multipart/form-data">
			<div class="form-group">
				<div class="input-group">
					<span class="btn btn-primary btn-file input-group-addon">
							' + language.Generic.Common.kImportFile + '<input type="file" id="fileupload" name="file">
						</span>
					<input type="text" class="form-control" disabled id="fileName">
				</div>
			</div>
		</form>'
		
	_datasubmit = null
			
	attachBtn = (dialog) ->
		if not $('#fileName').val()
			alert('Необходимо выбрать файл');
			return
			
		if $('#fileName').val()
			fileName = $('#fileName').val()
			ext = fileName.split('.');
			if ext[ext.length - 1] isnt "xls"
				alert('Необходимо выбрать файл импорта формата "xls".');
				return false
				
		$(document).trigger('showProcessing')
		_datasubmit.submit()
		return
	
	dialog = $.show.dialog({
		title: 'Импорт плана контрольной работы'
		onshown: (dialog) ->
			#скрываем поле для ввода описания к файлу, если не нужно отображать
			$('input[name="file"]').on('change', () ->
				elements = this.value.split('\\')
				$('#fileName').val(elements[elements.length - 1])
				$(this).attr('title', elements[elements.length - 1]))
						
			# привязывается событие, которое в момент сабмита добавляет дополнительные параметры, которые
			# нужно передать на сервер 
			$('#fileupload').bind('fileuploadsubmit', (e, data) ->
				# дополнительные параметры в момент прикрепления файла
				data.formData = params
				return)
				
			$('#fileupload').fileupload(
				url: urlHelper.makeUrl("/asp/Grade/QA/CheckExcelTestPlan.asp", {"_AJAXCALL_": 1})
				dataType: 'json'
				add: (e, data) ->	
					_datasubmit = data
					return 
				done: (e, response) ->
					if !response.result
						$.show.error(language.Generic.Common.kUnexpErr)
					else if response.result.isError
						$.show.error(response.result.message)
					else
						if response.result.data.showWarnings
							#перед импортом требуется подтверждение пользователя
							dialog.close()
							
							messages = []
							for warning in response.result.data.warnings
								messages.push $.show.getConfirmation warning if warning and warning != ""
							for confirm in response.result.data.confirms
								messages.push $.show.getConfirmation confirm if confirm and confirm != ""
						
							extDeferred.when messages
								.then () ->
									jsSubmit
										action: urlHelper.makeUrl("/asp/Grade/QA/ImportTestPlan.asp", {"_AJAXCALL_": 1})
										showProcessing: true
									.then () ->
										DoSubmit document.TestPlan
						else
							#импорт выполнился без подтверждение - просто обновляем страницу
							DoSubmit document.TestPlan
				fail: (e, response) ->
					# response error в IE обрабатывается в этом колбэке
					if response.jqXHR.responseJSON.isError
						$.show.error(response.jqXHR.responseJSON.message)
				always: (e, data) ->
					$(document).trigger('closeProcessing')
					dialog.close()
			)
					
			return
		message: fileDialogContent
		buttons: [{label: 'Импорт', action: attachBtn, cssClass: 'btn-primary'}]
	})
	return