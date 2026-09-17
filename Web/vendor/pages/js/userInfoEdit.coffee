# CoffeeScript
class UserInfoController
	constructor: (@params) ->
	
	_mChoiceParamsSrc = 
		'<div style="max-height: 500px; overflow-y: auto;">
			{{#unless mChoiceParams.length}}
					<div class="alert alert-danger subject-filter" role="alert">' + 
						language.Generic.SetupSchool.kEmptyList + '
					</div>
				{{/unless}}
				{{#each mChoiceParams}}
					<div class="checkbox">
						<label>
							{{#if choiceid}}
								<input type="checkbox" name="MCHOICEITEMS" onclick="dataChanged();" checked value="{{id}}">
							{{/if}}
							{{#unless choiceid}}
								<input type="checkbox" name="MCHOICEITEMS" onclick="dataChanged();" value="{{id}}">
							{{/unless}}
							{{name}}
						</label>
					</div>
				{{/each}}
			</div>'
			
	_similarUsersTpl = 
		'<h4>{{roleName}}: <b>{{displayName}}</b></h4>
		<h4>{{language.Generic.SetupSchoolUI.kDuplicateFIO_1}}</h4>
		{{#each similarUsers}}
			{{nickname}} {{gender}} {{birthdate}} <br />
		{{/each}}
		
		{{#if similiarUsersOtherSchools.length}}
			<h4>{{language.Generic.SetupSchoolUI.kDuplicateFIOInOtherSchools_1}}</h4>
			<div style="max-height: 400px; overflow-y: scroll; margin-bottom: 15px">
			{{#each similiarUsersOtherSchools}}
				{{lastname}} {{firstname}} {{middlename}} {{gender}} {{birthdate}} (<i>{{language.Generic.Reports.kNameEducInst}}: {{schoolname}}</i>)
				{{#if @root.isStudent}}
					{{#if classname}}
						{{language.SetupSchoolUI.kClassNotAssigned}}
					{{/if}}
					{{#unless classname}}
						{{language.Common.kClass}}: {{classname}}
					{{/unless}}
				{{/if}}
				<br />
			{{/each}}
			</div>
		{{/if}}
		<div class="well well-lg">{{language.Generic.SetupSchoolUI.kDuplicateFIO_2}}</div>'
		
	save: (saveUrl) ->
		form = document.UserInfo
		extDeferred.when canSubmit
			.then () ->
				jsSubmit
					form: form
					action: saveUrl
					showProcessing: true
			.then (response) ->
				console.log response
				hasSimilar = response.data and (response.data.similarUsers?.length or response.data.similiarUsersOtherSchools?.length)
				
				if not hasSimilar
					window.dataWereChanged = false
					$(form).rememberState()
					$.show.message response.message
					return
					
				similarUsers = response.data.similarUsers
				similiarUsersOtherSchools = response.data.similiarUsersOtherSchools
				
				for similar in similarUsers
					similar.birthdate = date2str new Date(similar.birthdate) if similar.birthdate

				for similar in similiarUsersOtherSchools
					similar.birthdate = date2str new Date(similar.birthdate) if similar.birthdate
				
				model = 
					similarUsers: similarUsers
					similiarUsersOtherSchools: similiarUsersOtherSchools
					roleName: response.data.roleName
					displayName: response.data.displayName
					language: language
					isStudent: response.data.roleType == 4

				tpl = Handlebars.compile _similarUsersTpl
				html = tpl model
						
				$.show.dialog
					title: language.Generic.SetupSchool.kSaveUserInfo
					message: html
					buttons: [{
						label: language.Generic.Buttons.kContinue
						action: (dialog) ->
							dialog.close()
							form.action = response.data.savePage
							jsSaveForm form
					}]

	showDialogParamEdit: (_params) ->
		jsSubmit(
			action: '/asp/ajax/GetMChoiceParams.asp'
			showProcessing: true
			data: $.extend(@params, _params)
			onSuccess: (response) ->
				_data = response.data
				
				mChoiceParams = _data.mChoiceParamData
				excludeParams = _data.excludeParams or []
				
				mChoiceParamsTmpl = Handlebars.compile _mChoiceParamsSrc
				html = mChoiceParamsTmpl mChoiceParams: mChoiceParams
				
				saveBtn = (dialog) =>
					chkBox = document.getElementsByName('MCHOICEITEMS')
					checkValues = []
					excludeCount = 0
					for i in [0..mChoiceParams.length-1] by 1
						if chkBox[i].checked
							checkValues[i] = chkBox[i].value
							excludeCount += 1 if excludeParams.indexOf(mChoiceParams[i].orderno) >= 0
					return alert _data.errMessage if excludeCount > 1
					
					jsSubmit(
						action: '/asp/ajax/SaveMChoiceParams.asp'
						showProcessing: true
						data: { UID: @data.userId, MChoiceParamID: _params.paramId, MCHOICEITEMS: checkValues }
						onSuccess: (response) ->
							#модальное окно
							modal = dialog.getModal()
							
							#получает div, который содержит наименования параметров
							divCntx = $( 'a[href *= "' + @data.MChoiceParamID + '"]' )
								.parents('div[class *= "col-"]').first()
								
							if not divCntx.prev().length
								divCntx.removeClass().addClass("col-md-2")
								divParams = $('<div class="col-md-10">')
								divParams.insertBefore(divCntx)
							divParams = divCntx.prev()
							
							#заполнение div'а наименованиями выбранных параметров
							labels = $('label', modal)
							divText = ''
							$('input[type = "checkbox"]', modal).each( (index, checkBox) ->
								divText += labels.eq(index).text().trim() + '<br>' if checkBox.checked
							)
							divParams.html( divText )
							
							alert response.message if response.message
							dialog.successClose()
					)
				
				$.show.dialog(
					title: _params.title
					message: html
					buttons: [{
						label: language.Generic.Buttons.kSave,
						action: saveBtn,
					}]
				)
		)
		
UserInfoController.setCookieParamPage = () ->
	arrPanels = []
		
	$.each($('[data-toggle="collapse"]'), (index, value) ->
		$value = $(value)
		
		panelId = $value.attr 'data-target'
		isPanelExpanded = $value.attr 'aria-expanded'
		
		arrPanels[index] =
			"id": panelId, 
			"isExpanded": isPanelExpanded
	)
		
	position = $(window).scrollTop()
	data = 
		"position": position, 
		"panels": arrPanels

	date = new Date()
	minutes = 30
	date.setTime(date.getTime() + (minutes * 60 * 1000))
	UID = $('[name="UID"]').val()
	
	$.cookie('panels-' + UID, JSON.stringify(data), { expires: date })

UserInfoController.getCookieParamPage = () ->
	UID = $('[name="UID"]').val()
		
	if $.cookie('panels-' + UID) is null then return do UserInfoController.showPage
	
	param = JSON.parse($.cookie('panels-' + UID))
	data = param["panels"]
	
	data.forEach((currentValue) ->
		isExpanded = $('[data-target="' + currentValue.id + '"]').attr 'aria-expanded'
		
		if currentValue.isExpanded isnt isExpanded 
			$(currentValue.id).collapse 'toggle'
	)
	
	setTimeout( ->
		do UserInfoController.showPage
		$('html, body').animate({scrollTop : param["position"]}, 200)
	, 1000)
	
	document.cookie = 'panels-' + UID + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
		
UserInfoController.showPage = () ->
	do $('#buttons-panel').show
	do $('[id="preloader"]').remove
	do $('form[name="UserInfo"]').show
	
	$(document).trigger 'pageReady'

UserInfoController.setCookieParamGoToPage = (form, urlPage) ->
	checkForChanges().then(() ->
		do UserInfoController.setCookieParamPage
		DoSubmit(form, urlPage)
	)