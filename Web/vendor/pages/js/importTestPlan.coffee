# CoffeeScript
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