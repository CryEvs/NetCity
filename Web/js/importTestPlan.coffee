# CoffeeScript
importTestPlan = (params) ->
	drawDialog = () ->
		if not $('#fileAttachment').length
			dialog = $('<div id="fileAttachment" style="display: none;"></div>').html(
				'<form name="form" method="POST" enctype="multipart/form-data">
					<div class="upload">
						<div id="button">
							<div style="margin-right: 1px;">' + language.Generic.Common.kImportFile + '</div>
							<input type="file" id="fileupload" name="file" />
						</div>
						<input type="text" id="fileName" disabled />
					</div>
				</form>'
			)
			$('body').append(dialog)
		
		$('#fileAttachment')
				
	_clear = () ->
		$('#fileName').val ''
		$('input[name="file"]').attr('title', '')
		return
		
	_datasubmit = null
	
	buttons = {}
		
	buttons['Импорт'] = () -> 
		if not $('#fileName').val()
			alert('Необходимо выбрать файл')
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
	buttons[language.Generic.Curriculum.kBtnCancel] = () -> 
		_clear()
		$(this).dialog("close")
		
	$dialog = drawDialog().dialog(
		title: 'Импорт',
		buttons: buttons
		closeOnEscape: true
		modal: true
		resizable: false
		draggable: true
		width: 400
		close: () -> _clear()
		open: (event, ui) ->
			#скрываем поле для ввода описания к файлу, если не нужно отображать
			$('input[name="file"]').change(() ->
				elements = this.value.split('\\')
				$('#fileName').val(elements[elements.length - 1])
				$(this).attr('title', elements[elements.length - 1])
			)
						
			# привязывается событие, которое в момент сабмита добавляет дополнительные параметры, которые
			# нужно передать на сервер 
			$('#fileupload').bind('fileuploadsubmit', (e, data) ->
				# дополнительные параметры в момент прикрепления файла
				data.formData = params
				return
			)
				
			$('#fileupload').fileupload(
				url: urlHelper.makeUrl("/asp/Grade/QA/CheckExcelTestPlan.asp", {"_AJAXCALL_": 1})
				forceIframeTransport: true
				dataType: 'json'
				add: (e, data) -> _datasubmit = data
				done: (e, response) ->
					if response.result.isError
						alert(response.result.message)
						$(document).trigger('closeProcessing')
					else
						if response.result.data.showWarnings
							#перед импортом требуется подтверждение пользователя
							messages = []
							for warning in response.result.data.warnings
								messages.push $.show.getConfirmation "<div style='text-align: left; white-space: pre-line;'>" + warning + "</div>" if warning and warning != ""
							for confirm in response.result.data.confirms
								messages.push $.show.getConfirmation "<div style='text-align: left; white-space: pre-line;'>" + confirm + "</div>" if confirm and confirm != ""
							
							window.when messages
								.then () ->
									jsSubmit
										action: urlHelper.makeUrl("/asp/Grade/QA/ImportTestPlan.asp", {"_AJAXCALL_": 1})
										showProcessing: true
									.then () ->
										DoSubmit document.TestPlan
						else
							#импорт выполнился без подтверждение - просто обновляем страницу
							DoSubmit document.TestPlan
				always: (e, data) ->
					_clear()
					$("#fileAttachment" ).dialog("close")
			)
			return
	)
	
	return