class userParamAddCtrl
  
	
	constructor: (@ParamId, @SchoolId) ->
 
    # PRIVATE FIELDS AND METHODS

	_template = ""

						
	#получить шаблон для модального окна 
	$.ajax
		url: '/vendor/pages/templates/User/addOrUpdateUserInfoListItemTemplate.html',
		cache: true,
		success: (data) ->
			_template = data.replace(/(?:\r\n|\r|\n)/g, '')


    # PUBLIC METHODS
  
	# показать модальное окно 	
	showModalAddOrUpdateParameter: (@itemId, itemName, itemShortName, action)=>
	
		model = 
			language: language
			itemName: itemName
			itemShortName: itemShortName
			
		if(action == 'edit')
			title = language.Generic.SetupSchool.kPageTitle_Edit + " " + itemName
		else
			title = language.Generic.SetupSchool.kPageTitle_New
			
		template = Handlebars.compile(_template)
		html = template(model)
		@dialog = $.show.dialog( 
			title: title
			message: html
			buttons: [{label: language.Generic.Buttons.kSave, action: @modalSubmit, cssClass: 'btn-primary'}],
		)

		return
		

	# обработчик кнопки в форме модального окна 		
	modalSubmit: =>
	
		itemName = $("#itemName").val()
		itemName2 = $("#itemShortName").val()
		
		if(!itemName.trim())
			alert("Введите полное название параметра")
			return;
		
	
		userInfoListItem = 
							id         : @itemId 
							parameterId: @ParamId
							schoolId   : @SchoolId
							itemName   : itemName.trim()
							itemName2  : itemName2.trim()
							itemName3  : null
							itemOrderNo: null
							
		jsSubmit({
			action: "/webapi/schools/#{@SchoolId}/refbook/#{@ParamId}/listitems"
			showProcessing: true,
			method: 'POST',
			data: userInfoListItem,
			onSuccess: () => 
				@dialog.successClose()
				location.reload();
		})
		
	
