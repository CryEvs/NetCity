(($) ->
	# объект для хранения внутренних переменных
	fields = {}
	#приватные методы для данного плагина
	methods = 
		deleteAttachmentAjax: (params, onSuccessCallBack) ->
			jsSubmit({
				action: '/asp/ajax/Attachments/DeleteAttachments.asp',
				data: params,
				showProcessing: yes,
				onSuccess: () ->
					onSuccessCallBack()
			})
			
		deleteAttachment: ->
			attachments = []
			
			if fields.options.multiple
				trs = $('tr[name="fileInfo"]').find('input:checked').parent().parent()
				
				$.each(trs, () -> attachments.push(parseInt($(@).attr('id'), 10)))
				if not attachments.length then return
			else
				if typeof $('tr[name="fileInfo"]').attr('id') is 'undefined' then return
				
				if not $('tr[name="fileInfo"]').has('input[name="notDeletedFromDb"]').length
					attachments = [parseInt($('tr[name="fileInfo"]').attr('id'), 10)]
			
				if not attachments.length
					$('#attachFilesTable').remove()
					methods.showButtons()
					return
			
			params = {attachments: attachments}
			
			methods.deleteAttachmentAjax(params, ->
				if fields.options.multiple
					if trs.length is $('tr[name="fileInfo"]').length
						$('#attachFilesTable').remove()
					else
						trs.remove()
				else
					$('#attachFilesTable').remove()
				methods.showButtons()
				window.dataWereChanged = true
			)
			
		deleteButton: (clickHandler) ->
			$.uicontrols.button({id: 'delete', size: 'btn-sm', label: language.Generic.Common.kRemove, icon: 'trash', click: clickHandler})
				
		attachButton: (opts) ->
			$.uicontrols.button({id: 'attach', size: 'btn-sm', label: opts.textButton, icon: 'paperclip', click: () -> 
				methods.addFileAttachment(opts)
			})
				
		# отображение кнопок для работы с файловыми вложениями
		showButtons: () ->
			$('#buttons').remove()
			buttons = $('<div></div>').attr('id', 'buttons').addClass('btn-group')
		
			if not fields.options.multiple
				if not $('tr[name="fileInfo"]').length
					attachButton = @.attachButton({ textButton: language.Generic.Buttons.kAttachFile, textHeader: language.Generic.Buttons.kAttachFile })
					buttons.append(attachButton)
				else
					attachButton = @.attachButton({ textButton: language.Generic.Buttons.kEditAttachment, textHeader: language.Generic.Buttons.kEditAttachment, description: $('td[name="description"]').text() })
					deleteButton = @.deleteButton(-> methods.deleteAttachment())
					
					buttons.append(attachButton)
					buttons.append(deleteButton)
			else
				attachButton = @.attachButton({ textButton: language.Generic.Buttons.kAttachFile, textHeader: language.Generic.Buttons.kAttachFile })
				buttons.append(attachButton)
				
				#проверка наличия отображенных файлов
				bExistAttachments =  $('tr[name="fileInfo"]').length > 0
				
				#если файлы есть, то отображаем кнопку удалить
				if bExistAttachments
					deleteButton = @.deleteButton(() ->
						methods.deleteAttachment()
					)
					buttons.append(deleteButton)
					
			fields.fileAttachmentsBlock.prepend(buttons)
		
		attachFileDialogContent: 
				'<form name="form" method="POST" enctype="multipart/form-data">
					<div class="form-group">
						<div class="input-group">
							<span class="btn btn-primary btn-file input-group-addon">
									' + language.Generic.Common.kSelectFile + '<input type="file" id="fileupload" name="fileAttachment">
								</span>
							<input type="text" class="form-control" disabled id="fileName">
						</div>
					</div>
					{{#if description}}
						<div class="form-group" name="description">
							<label class="control-label">' + language.Generic.Curriculum.kDescription + '</label>
							<textarea class="form-control" rows="10" name="descriptionVal" style="border: 1px solid #8baed8;"></textarea>
						</div>
					{{/if}}
				</form>'
		
		#обработчик кнопки "Присоединить (Сменить) файл"
		addFileAttachment: (opts) ->
			_datasubmit = null
			
			content	= Handlebars.compile methods.attachFileDialogContent
			html	= content description: fields.options.showDescription
			
			cancelBtn = (dialog) -> dialog.close()
			attachBtn = (dialog) ->
				if not $('#fileName').val() then return alert('Необходимо выбрать файл')
				if _datasubmit.files[0].size and _datasubmit.files[0].size > 30000000
					# Лимит размера реквеста в IIS по умолчанию 30000000 байтов (~28.6 Мб)
					return $.show.error(language.Generic.LearnApp.kServErrFileTooLarge + '28.6 Мб')
				
				$(document).trigger('showProcessing')
				methods.deleteAttachment()
				_datasubmit.submit()
				return
	
			dialog = $.show.dialog({
				title: opts.textHeader
				onshown: (dialog) ->
					#скрываем поле для ввода описания к файлу, если не нужно отображать
					if opts.description then $('textarea[name="descriptionVal"]').val(opts.description)
					
					$('input[name="fileAttachment"]').on('change', () ->
						elements = this.value.split('\\')
						$('#fileName').val(elements[elements.length - 1])
						$(this).attr('title', elements[elements.length - 1]))
						
					# привязывается событие, которое в момент сабмита добавляет дополнительные параметры, которые
					# нужно передать на сервер 
					$('#fileupload').bind('fileuploadsubmit', (e, data) ->
						if $('textarea[name="descriptionVal"]') then description = $('textarea[name="descriptionVal"]').val()
				
						# дополнительные параметры в момент прикрепления файла
						data.formData = $.extend({}, { description: description, fileName: $('#fileName').val() }, fields.params)
						return)
				
					$('#fileupload').fileupload(
						url: '/asp/ajax/Attachments/AttachFile.asp?_AJAXCALL_=1&AT=' + strATTok
						dataType: 'json'
						add: (e, data) -> _datasubmit = data
						done: (e, data) ->
							if !data.result
								return $.show.error(language.Generic.Common.kUnexpErr)
							else if data.result.isError
								return alert(language.Generic.Common.kErrAttachFile + ': ' + data.result.message)
							
							methods.attachFiles({
										FileAttachmentId: data.result.data.attachmentId, 
										FileName: $('#fileName').val(), 
										Description: $('textarea[name="descriptionVal"]').val(),
										isNew: true
									})
							methods.showButtons()
							window.dataWereChanged = true
							alert(language.Generic.Common.kSuccessAttachFile)
						fail: (e, response) ->
							if response.jqXHR.responseJSON and response.jqXHR.responseJSON.isError
								return $.show.error(response.jqXHR.responseJSON.message)
							else
								return $.show.error(language.Generic.Common.kUnexpErr)
						always: (e, data) ->
							$(document).trigger('closeProcessing')
							dialog.close()
					)
					
					return
				message: html
				buttons: [{label: opts.textButton, action: attachBtn, cssClass: 'btn-primary'}, 
					{label: language.Generic.Curriculum.kBtnCancel, action: cancelBtn}]
			})
			return
		
		attachFiles: (files) ->
			if not files? then return
			if not $.isArray(files) then files = [files]
			if not $('#attachFilesTable').length
				@.addFileTable()
				
			$.each(files, (index, file) ->
				link = $('<a></a>')
					.append(file.FileName)
					.attr('href', "JavaScript:$.openAttachment('/doc/" + file.FileName + "'," + file.FileAttachmentId + ");")
					
				span = $('<span></span>')
							.addClass('AttachmentSpan')
							.append(link)
							
				tdLink = $('<td></td>').append(span)
			
				trFileInfo = $('<tr></tr>')
								.attr('id', file.FileAttachmentId)
								.attr('name', 'fileInfo')
								.append(tdLink)
							
				if fields.options.showDescription 
					spanDescr = $('<span name="description"></span>')
										.append(file.Description.escapeHTML())
					tdDescription = $('<td></td>')
										.attr('name', 'description')
										.append(spanDescr)
										
					if not fields.options.readonly
						tdDescription
								.css('cursor', 'pointer')
								.attr('title', language.Generic.Buttons.kEdit)
								.click(-> $.editAttachmentDescr(file.FileAttachmentId))
										
						editButton = $('<i></i>')
										.addClass('icon-edit')
										.css('margin-left', '20px')
						
						tdDescription.append(editButton)
				
					trFileInfo.append(tdDescription)
				if fields.options.multiple
					tdCheckBox = $('<td></td>').append($('<input type="checkbox" />'))
					trFileInfo.append(tdCheckBox)
				
				hiddenInput = $('<input type="hidden" value="' + file.FileAttachmentId + '" />')
				hiddenInput.attr('name', if file.isNew then 'newAttachment' else 'currAttachment')
				
				trFileInfo.append(hiddenInput)
				
				if file.notDeletedFromDb then trFileInfo.append($('<input type="hidden" name="notDeletedFromDb" value="' + 1 + '" />'))
								
				$('#attachFilesTable').append(trFileInfo)
			)
			
		# добавление элемента таблицы c информацией о прикрепленных файлах в DOM
		addFileTable: () ->
			# параметры таблицы
			table = $('<table></table>')
						.addClass('table table-bordered table-condensed table-striped')
						.css({'margin-top': '10px'})
						.attr('id', 'attachFilesTable')
								
			# begin. строка с заголовками
			trHeaders = $('<tr></tr>')
							.attr('name', 'headers')
							.append($('<th></th>').append(language.Generic.Common.kLinkFile))
		
			if fields.options.showDescription
				tdDescriptionHeader = $('<th></th>').append(language.Generic.Curriculum.kDescription)
				trHeaders.append(tdDescriptionHeader)
			
			if fields.options.multiple then trHeaders.append($('<th style="width: 1%;"></th>'))
			
			table.append(trHeaders)
			fields.fileAttachmentsBlock.append(table)
			# end. строка с заголовками
			
	$.fn.fileAttachments = (data) ->
		fields.fileAttachmentsBlock = this
		fields.options = data.options
		fields.params = data.params
		
		if data.params then methods.attachFiles(data.params.files)
		
		if not data.options.hasOwnProperty('readonly')
			methods.showButtons()
		else if not data.options.readonly
			methods.showButtons()
			
	$.editAttachmentDescr = (attachmentId) ->
		content = '<form name="form">
						<div class="form-group">
							<label class="control-label">' + language.Generic.Curriculum.kDescription + '</label>
							<textarea class="form-control" rows="10" name="attachmentDescr" style="border: 1px solid #8baed8;"></textarea>
						</div>
					</form>'
					
		cancelBtn = (dialog) -> dialog.close()
		applyBtn = (dialog) ->
			newAttachmentDescr = $('textarea[name="attachmentDescr"]').val()
		
			jsSubmit({
				action: '/asp/ajax/Attachments/EditAttachmentDescription.asp',
				data:
					attachmentId: attachmentId,
					attachmentDescr: newAttachmentDescr
				showProcessing: yes,
				onSuccess: (response) ->
					elDescr = $('tr#' + attachmentId).find('span[name="description"]')
					elDescr.empty()
					elDescr.append(newAttachmentDescr.escapeHTML())
					
					alert(language.Generic.Common.kSuccessEditAttachmentDescription)
					dialog.successClose()
					return
			})
		
		descr = $('tr#' + attachmentId).find('span[name="description"]').text()
		
		$.show.dialog({
			title: language.Generic.Common.kEditAttachmentDescription
			onshown: (dialog) -> $('textarea[name="attachmentDescr"]').val(descr)
			message: content
			buttons: [{label: language.Generic.Buttons.kApply, action: applyBtn, cssClass: 'btn-primary'}, 
				{label: language.Generic.Curriculum.kBtnCancel, action: cancelBtn}]
		})
	
	$.openAttachment = (strUrl, attachId) ->
		postTo(strUrl, {attachmentId : attachId})
	
	#метод используется на экране редактирования задания (только домашнего)
	$.attachFilesFromEditAssignment = (file) ->
		_attachFile = (file) ->
			$('#attachFilesTable').remove()
			methods.attachFiles(file)
			methods.showButtons()
		
		if not $('tr[name="fileInfo"]').length
			methods.attachFiles(file)
			methods.showButtons()
		else
			attachments = []
			if not $('tr[name="fileInfo"]').has('input[name="notDeletedFromDb"]').length
				attachments = [parseInt($('tr[name="fileInfo"]').attr('id'), 10)]
			
			if not attachments.length
				_attachFile(file)
			else
				methods.deleteAttachmentAjax({attachments: attachments}, () ->
					_attachFile(file)
				)
	return
)(jQuery)