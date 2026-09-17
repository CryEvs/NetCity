class FileAttachments
	###
		@param files {array of files}
		
		@param file.Id					{number}
		@param file.Name				{string}	имя файла
		@param file.Description			{string}	описание файла
		@param file.isNew				{bool}		привязан ли к сущности в базе
		@param file.isCanDeleteFromDb	{bool}		может ли быть удален из базы
	###
	constructor: (files) ->
		this.files = if not files then [] else files
		if not this.files.join then this.files = [this.files]

		this.mapFiles()
		
	add: (file) ->
		this.files.push(file)
		this.files = _.sortBy(this.files, (item) => [item.AttachmentType, item.Name])
		
	removeById: (ids) ->
		if not ids then return 
		if not ids.join then ids = [ids]
		if not ids.length then return
		
		this.files = _.reject(this.files, (file) -> return _.contains(ids, file.Id))
			
	exist: -> 
		return !!this.files.length
		
	current: -> 
		return this.files[0]
		
	getById: (id) -> 
		if not id then return
		
		return _.find(this.files, (file) -> return file.Id == id)
		
	mapFiles: ->

		#если объект сериализован методами C#, то первые буквы переменных у него будут в верхнем регистре
		if this.files && this.files.length > 0 && "FileAttachmentId" of this.files[0]
			this.files = _.map(this.files, (file) -> 
				res = {
					Id: file.FileAttachmentId
					Name: file.FileName
					Description: file.Description
					AttachmentType: file.AttachmentType
					isNew: false
					isCanDeleteFromDb: file.IsCanDeleteFromDb
				}
				return res
				)
		else 		#если это просто объект javaScript, то первые буквы переменных у него будут в нижнем регистре
			this.files = _.map(this.files, (file) -> 
				res = {
					Id: file.fileAttachmentId
					Name: file.fileName
					Description: file.description
					AttachmentType: file.attachmentType
					isNew: false
					isCanDeleteFromDb: file.isCanDeleteFromDb
				}
				return res
				)
		
	updateDescription: (id, description) ->
		file = this.getById(id)
		if file then file.Description = description

class FileAttachmentCtrl

	newImage = null

	templates =
		attachFile: '<form name="form" method="POST" enctype="multipart/form-data">
						<div class="form-group">
							<div class="input-group">
								<span class="btn btn-primary btn-file input-group-addon">
										' + language.Generic.Common.kSelectFile + '<input type="file" id="fileupload" name="fileAttachment">
									</span>
								<input type="text" class="form-control" disabled id="fileName">
							</div>
						</div>
						{{#if types}}
							<div class="form-group">
								<div>
									<label for="attachmentType" class="control-label">Тип вложения</label>
								</div>
								<div>
									<select class="form-control" name="attachmentType">
										{{#each types}}
											<option value="{{id}}">{{name}}</option>
										{{/each}}
									</select>
								</div>
							</div>
						{{/if}}
						{{#if description}}
							<div class="form-group">
								<label class="control-label">' + language.Generic.Curriculum.kDescription + '</label>
								<textarea class="form-control" rows="10" name="description" style="border: 1px solid #8baed8;"></textarea>
							</div>
						{{/if}}
					</form>'
					
		fileAttachmentBlock: '<div class="file-attachment-block {{#if multiple}}multiple{{/if}}">
								{{#if files.length}}
									{{#each files}}
										<div class="file-attachment" title="{{Name}} {{#if Description}}{{Description}}{{/if}}">
											<div class="file-info" onclick="FileAttachmentCtrl.openAttachment(\'{{Name}}\', {{Id}});">
												<span class="file-name">{{Name}}</span>
												{{#if @root.showDescription}}
													{{#if Description}}
														<span class="file-description">{{Description}}</span>
													{{/if}}
												{{/if}}
											</div>
											{{#unless @root.readonly}}
												<div id="{{Id}}" class="buttons">
													{{#if @root.showDescription}}
														<span class="glyphicon glyphicon-pencil edit-description-button" aria-hidden="true" title="Редактировать описание"></span>
													{{/if}}
													<span class="glyphicon glyphicon-trash remove-button" aria-hidden="true" title="Удалить файл"></span>
												</div>
											{{/unless}}
										</div>
									{{/each}}
								{{/if}}
							</div>'
					
	getButton = (options) ->
		defaultOptions = 
			id: 'attach'
			label: language.Generic.Buttons.kAttachFile
			icon: 'paperclip'
			title: ''
			size: ''
		options = $.extend({}, defaultOptions, options)
		
		if options.label
			options.title = options.label
		
		return $.uicontrols.button(
			id: options.id
			label: options.label
			icon: options.icon
			click: options.click
			title: options.title
			size: options.size
		)
	
	FileAttachmentCtrl.openAttachment = (fileName, attachmentId) -> 
		postTo
			path: "/webapi/attachments/" + attachmentId,
			method: "get",
			formParams: {target: "_blank"}
		return
	
	constructor: (@options, @params, @attachmentsTypes) ->
		this.fileAttachments = new FileAttachments(@params.files)
		this.block = @options.block
		this.types = @attachmentsTypes
		this.showBlock()
		
	appendInputToForm: (form, inputName) ->
		$form = $(form)

		inputName = inputName or "attachment"	
		$('input[name="' + inputName + '"]', form).remove()
		
		this.fileAttachments.files.forEach((file) ->
			input = $('<input type="hidden" name="' + inputName + '" />')
			input.attr('value', file.Id)
			
			$form.append(input)
		)
	
	addFile: (file) ->

		

		if(_.some(this.fileAttachments.files, (item) -> item.Id is file.Id))
			return
		
		this.fileAttachments.add(file)
		this.showBlock()
		
	clearBlock: -> 
		this.block.empty()
		
	showBlock: ->
		this.clearBlock()
		
		if not this.fileAttachments.exist() and this.options.readonly
			return
		
		context = 
			files: []
			readonly: true
			showDescription: this.options.showDescription
			multiple: this.options.multiple
		
		if this.fileAttachments.exist()
			context.files = this.fileAttachments.files
			_.each context.files, (file) -> file.DownloadUrl = "/webapi/attachments/" + file.Id + "/" + encodeURIComponent(file.Name)
		
		if not this.options.readonly
			context.readonly = false
			
			if this.options.multiple or not this.fileAttachments.exist()
				button = getButton({
					id: 'attach',
					click: => this.attachFile(language.Generic.Buttons.kAttachFile, language.Generic.Buttons.kAttachFile),
					size: if this.options.multiple then 'btn-sm' else ''
				})
				
		template = Handlebars.compile(templates.fileAttachmentBlock)
		html = template(context)
		
		this.block.append(html)

		
		
		if not this.options.readonly and this.fileAttachments.exist()
			if this.options.showDescription
				editHandler = (_this) -> -> _this.editDescription(+$(this).parent()[0].id)
				this.block.find('.edit-description-button').on('click', editHandler(this))
				
			removeHandler = (_this) -> -> _this.deleteFile(+$(this).parent()[0].id)
			this.block.find('.remove-button').on('click', removeHandler(this))
			
		if button
			faBlock = this.block.find('.file-attachment-block')
			button.prependTo(faBlock)
		
	maxWidth: (context) => 
		if context.MessageId >= 0 
			return this.uploadLimits.resizeMailImageWidth
		if context.AssignmentId >= 0 
			return this.uploadLimits.resizeAssignmentImageWidth
		return null

	maxFileSizeToResize: (context) => 
		if context.MessageId >= 0 
			return this.uploadLimits.resizeMailImageMaxFileSize
		if context.AssignmentId >= 0 
			return this.uploadLimits.resizeAssignmentImageMaxFileSize
		return null


	loadUploadLimits: () =>
		if not this.uploadLimits
			return jsSubmit({
				action: '/webapi/attachments/uploadLimits'
				method: 'GET'
				auth: false
				showProcessing: true
				onSuccess: (uploadLimits) =>

					this.uploadLimits = uploadLimits
					
			})
			return
		else
			deferred = $.Deferred()
			deferred.resolve()
			return deferred.promise()

	deleteFile: (deletedFile) ->
		
		if not deletedFile
			return

		file = this.fileAttachments.getById(deletedFile)

		if file.isCanDeleteFromDb isnt undefined and not file.isCanDeleteFromDb
			extDeferred.when($.show.getConfirmation('Удалить файл "' + file.Name.escapeHTML() + '"?')).then () =>
				this.fileAttachments.removeById(deletedFile)
				this.showBlock()
			return
		
		extDeferred.when($.show.getConfirmation('Удалить файл "' + file.Name.escapeHTML() + '"?')).then () =>
			jsSubmit(
				action: '/webapi/attachments/' + deletedFile
				data: this.params.context
				showProcessing: true
				method: 'DELETE'
				onSuccess: =>
					this.fileAttachments.removeById(deletedFile)
					this.showBlock()
					if this.options.onSuccessDetach 
						this.options.onSuccessDetach file
				onError: (xhr, message, error) ->
					if xhr.status is 401
						$.show.message(language.Generic.Common.kTimeOutOccured4Ajax)
							.then () ->	
								window.location.pathname = "/"
								return
					else
						$.show.error(if message then message else language.Generic.Common.kUnexpErr)
				
			)

	attachFile: (dialogTitle, buttonName) ->

		

		_datasubmit = null
		
		content	= Handlebars.compile templates.attachFile
		html	= content(description: this.options.showDescription, types: this.types)
			
		onAttach = (dialog) =>
			if not $('#fileName').val()
				return alert('Необходимо выбрать файл')

			isExtensionsCorrect = true
			if _this.options.filesExtensions
				isExtensionsCorrect = false
				
				for ext in _this.options.filesExtensions
					if ($('#fileName').val().endsWith(ext))
						isExtensionsCorrect = true
						break
						
			if(!isExtensionsCorrect)	
				return alert('Неверное расширение файла')	
					
			this.loadUploadLimits().then => 
				fileSizeLimit = this.uploadLimits.fileSizeLimit
				if this.params.context and this.params.context.PlanId
					fileSizeLimit = this.uploadLimits.plannerDocFileNoteSizeLimit
				
				if _datasubmit.files[0].size and _datasubmit.files[0].size > this.uploadLimits.fileSizeLimit * 1024
					return $.show.error(language.Generic.LearnApp.kServErrFileTooLarge + this.uploadLimits.fileSizeLimit / 1024 + ' Мб')
							
				$(document).trigger('showProcessing')
				_datasubmit.submit()
		
		dialog = $.show.dialog(
			title: dialogTitle
			onshown: (dialog) =>
				$('input[name="fileAttachment"]').on('change', (e) ->
					elements = this.value.split('\\')
					$('#fileName')
						.val(elements[elements.length - 1])
						.attr('title', elements[elements.length - 1]))
				
				# привязывается событие, которое в момент сабмита добавляет дополнительные параметры, которые
				# нужно передать на сервер 
				$('#fileupload').bind('fileuploadsubmit', (e, data) => 
					description = $('textarea[name="description"]').val() or ""
					parameters = $.extend({}, this.params.context, {
						Description: description
						AttachmentType: $('select[name="attachmentType"]').val()
					})
					data.formData = 
						data: encodeURIComponent(JSON.stringify(parameters))
						at: strATTok
				)
				
				$('#fileupload').fileupload(
					url: '/webapi/attachments'
					dataType: 'json'
					add: (e, data) => 
						this.loadUploadLimits().then =>
							maxWidth = this.maxWidth(this.params.context)
							maxFileToResize = this.maxFileSizeToResize(this.params.context)
							isLargeFile = maxFileToResize && data.files[0].size > maxFileToResize * 1024
							if (maxWidth && isLargeFile)
								loadImage(
									data.files[0]
									{ meta: true, canvas: true }
								)
								.then((img) => 
										if (img.imageHead || img.image)
											newImage = loadImage.scale(img.image, { maxWidth: maxWidth })
											if (newImage && newImage.type != "error")
												newImage.toBlob(
													(blob) ->
														if (img.imageHead)
															loadImage.replaceHead(blob, 
																img.imageHead, 
																(newBlob) => 
																	newFile = new File([newBlob], data.files[0].name, { type: newBlob.type })
																	data.files[0] = newFile
																	_datasubmit = data
																	return
															)
														else
															newFile = new File([blob], data.files[0].name, { type: "image/jpg" })
															data.files[0] = newFile
															_datasubmit = data
													'image/jpeg'
												)
											return
										_datasubmit = data
										return
									(result) => 
										_datasubmit = data
										return
								)
							else
								_datasubmit = data
								return
					done: (e, data) =>
						if not data.result
							return $.show.error(language.Generic.Common.kUnexpErr)

						

						file = 
							Id: data.result
							Name: $('#fileName').val()
							Description: (if $('select[name="attachmentType"] option:selected').length then '('+$('select[name="attachmentType"] option:selected').text()+') ' else "") + $('textarea[name="description"]').val()
							AttachmentType: $('select[name="attachmentType"]').val()
							isNew: true

						this.addFile file
						
						if this.params.wasChanged
							window.dataWereChanged = true
							
						if this.options.onSuccessAttach 
							this.options.onSuccessAttach file

						alert(language.Generic.Common.kSuccessAttachFile)
					fail: (e, response) ->
						if (response && response.jqXHR && response.jqXHR.status == 401) 
							$.show.message(language.Generic.Common.kTimeOutOccured4Ajax)
								.then () ->	
									window.location.pathname = "/"
									return
						else if response.jqXHR.responseJSON && response.jqXHR.responseJSON.message
							errorMessage = response.jqXHR.responseJSON.message
								
							if response.jqXHR.responseJSON.details then errorMessage += ' (' + response.jqXHR.responseJSON.details + ')'
								
							return $.show.error(errorMessage)
						else
							return $.show.error(language.Generic.Common.kUnexpErr)
					always: (e, data) ->
						$(document).trigger('closeProcessing')
						dialog.close()
				)
			message: html
			buttons: [
				{ label: buttonName, action: onAttach, cssClass: 'btn-primary' } 
				{ label: language.Generic.Buttons.kCancel, action: (dialog) -> dialog.close() }
			]
		)
		
	editDescription: (attachmentId) ->
		content = '<form name="form">
						<div class="form-group" {{#if notType}}style="display:none;"{{/if}}>
							<div>
								<label for="attachmentTypeText" class="control-label">Тип вложения</label>
							</div>
							<div>
								<input class="form-control" type="text" disabled name="attachmentTypeText">
							</div>
						</div>
						<div class="form-group">
							<label class="control-label">' + language.Generic.Curriculum.kDescription + '</label>
							<textarea class="form-control" rows="10" name="description" style="border: 1px solid #8baed8;"></textarea>
						</div>
					</form>'
					
		apply = (dialog) =>
			description = $('textarea[name="description"]').val()
			jsSubmit({
				action: '/webapi/attachments/' + attachmentId + '/description'
				# особенности передачи параметров примитивного типа в REST-сервис POST-запросом.
				# подробности http://encosia.com/using-jquery-to-post-frombody-parameters-to-web-api/
				data: '=' + description
				showProcessing: true
				onSuccess: (description) =>
						this.fileAttachments.updateDescription(attachmentId, description)
						this.showBlock()
						alert(language.Generic.Common.kSuccessEditAttachmentDescription)
						dialog.successClose()
			})
		
		description = this.fileAttachments.getById(attachmentId).Description
		if description && description.charAt(0) == '(' && description.indexOf(')')
			type = description.substring(1).split(')')[0]
			description = description.replace(/^ *\([^)]*\) */g, "")
			
		
		$.show.dialog(
			title: language.Generic.Common.kEditAttachmentDescription
			onshown: -> 
				if description 
					$('textarea[name="description"]').val(description)
				if type
					$('input[name="attachmentTypeText"]').val(type)
			message: Handlebars.compile(content)({notType: !type})
			buttons: [
				{ label: language.Generic.Buttons.kApply, action: apply, cssClass: 'btn-primary' }
				{ label: language.Generic.Buttons.kCancel, action: (dialog) -> dialog.close() }
			]
		)

#для поддержки js модульности
((exp, name) ->
	exported = false
	if module?.exports
		module.exports = exp
		exported = true

	if !(exports is undefined)
		exports = exp
		exported = true

	if !exported and typeof window != 'undefined' and typeof name != "undefined"
		window[name] = exp
		
	if typeof root != 'undefined' and typeof (name) != "undefined"
		root[name] = exp
)(FileAttachmentCtrl)