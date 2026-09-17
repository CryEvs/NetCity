class importValidation
  
	
	constructor: () ->
		console.log('importValidatorError_Constructor')
			
  
	#// PUBLIC METHODS
  
	#// показать модальное окно 	
	showModalValidationError: (@result, @addAction, @docSubType)=>
	
		
		#//получить шаблон для модального окна 
		$.ajax({
				url: '/vendor/pages/movement/templates/ImportValidationErrorsTemplate.html',
				cache: true,
				success: (data) =>
				
					if @result.status == 'IncorrectFormat' 
						alert @result.message
						return
					
					@_template = data.replace(/(?:\r\n|\r|\n)/g, '')
					
					@showColumnEnabledValues =  _.some(@result.errors,  (error) ->  return error.enabledValues != null; )
					
					#//оборачиваю каждую ошибку в объект с флагами указывающими в каком виде показывать столбец возможные значения
					errorsWraps = []
					for err in @result.errors
						
							
						errWrap = {
							error:err
							showEnabledValues: err.enabledValues == null or err.enabledValues.length < 6
							showSpoilerButtonEnabledValues: err.enabledValues != null and err.enabledValues.length > 6
							emptyEnabledValues: err.enabledValues == null
						}
						errorsWraps.push errWrap
					
					@model = 
						language: language
						errorsWraps: errorsWraps
						showColumnEnabledValues: @showColumnEnabledValues
						isAllRowsHasCriticalErrors: @result.isAllRowsHasCriticalErrors
			
					template = Handlebars.compile(@_template)
		
					@html = template(@model)
					
					#//isAllRowsHasCriticalErrors = if @result.isAllRowsHasCriticalErrors == true then 'hideBtn' else ""
					
					@dialog = $.show.dialog( 
						size: BootstrapDialog.SIZE_FULL_SCREEN
						title: "Ошибки"
						message: @html
						onshown: (dialog) => @modalOnshown()
							
						buttons: [
										{
											label: "Продолжить"
											action: (dialog) => @import()
											cssClass: "Import"
										},
										{
											label: language.Generic.Buttons.kCancel
											action: (dialog) -> dialog.close()
											
										},
										{
											label: language.Generic.Buttons.kPrint
											action: (dialog) => @errorsPrint()
										}
									]
					)
			});	
		
	


		return

	#//печать ошбок валидации
	errorsPrint:=>
		errorsWrapsPrint = []
		
		for err in @result.errors
			errWrapPrint = {
				error:err
				showEnabledValues: true #//указываю необходимость отобразить все допустимые значения
				showSpoilerButtonEnabledValues: false
				emptyEnabledValues: err.enabledValues == null
			}
			errorsWrapsPrint.push errWrapPrint
		
		@modelPrint = 
						language: language
						errorsWraps: errorsWrapsPrint
						showColumnEnabledValues: @showColumnEnabledValues
	
		template = Handlebars.compile(@_template)
		htmlView = template(@modelPrint)
		htmlView = htmlView.replace('similar-user-resolve-dialog','')
		htmlView = htmlView.replace('errorDescription','')
		htmlView = htmlView.replace('radioImportOption', 'hideBtn')
		$(htmlView).printUtils().toPrint()
		return
		
		
	
	importTypeOnlyValidStudents = 1
	importTypeOnlyValidColumns = 2
	
	import:=>
	
		if $('#skipInvalidData').is(':checked')
			@skipInvalidData()
		else
			@skipInvalidStudents()
		
		
	
	#//пропустить невалидных студентов	
	skipInvalidStudents:=>
		
		#//если все строки с какими-то ошибками валидации
		if @result.isAllRowsHasValidationErrors
			alert "Нет корректных записей"
			return
		
	
		jsSubmit #//положить флаг в сессию что происходит импорт с игнором невалидных студентов
			 action: "/webapi/movement/import/setImportType"
			 method: "POST"
			 data: "="+importTypeOnlyValidStudents 
			 showProcessing: true
			 onSuccess: () =>
				do @addAction
	
			
	#//пропустить невалидные ячейки у студента
	skipInvalidData:=>
	
		#//если все строки с критическими ошибками
		if @result.isAllRowsHasCriticalErrors
			alert "Импорт невозможен т.к. все записи содержат КРИТИЧЕСКИЕ ошибки."
			return
	
		jsSubmit #//положить флаг в сессию что происходит импорт с игнором невалидных данных
			 action: "/webapi/movement/import/setImportType"
			 method: "POST"
			 data: "="+importTypeOnlyValidColumns
			 showProcessing: true
			 onSuccess: () =>
				do @addAction
		
		
	addToolTipToButtons:=>
		$('.Import').attr('title', 'Необходимо выбрать один из вариантов обработки ошибок')
		
		

		
	disableImportButton:=>
		$('.Import').attr('disabled', 'disabled')
		
	enableImportButton:=>
		$('.Import').prop('disabled', false)
		
		
	addEventToRadioButton:=>
		$('#skipInvalidData').on "change",  ()=> @enableImportButton()
		$('#skipInvalidStudents').on "change",  ()=> @enableImportButton()
		
		

	modalOnshown:=>
		@addToolTipToButtons()
		@disableImportButton()
		@addEventToRadioButton()
		
 
