# CoffeeScript
#Потенциальный дубль пользователя
class similarUser
	constructor: (@similarInfo) ->
		@title = null #Надпись на экране
		@printTitle = null #Надпись в печатной форме
		@organization = null #Организация
		@infoHint = null #Всплывающая подсказка при наведении на пиктограмму информации
		@questionHint = null #Всплывающая подсказка при наведении на пиктограмму информации
		@canUse = null #Признак того, может ли данный дубль быть выбран
		@similarUserId = null #Внутренний идентификатор пользователя данного дубля
		@resolveData = null #Ссылка на разрешение, для которого выбираем дубль
		@relatedSimilarUser = [] #Ссылка на потенциального дубля учащегося, по которому мы определили данный дубль (может быть заполнен только для родителей)
		@_checked = @similarInfo.checked
		
		@title = @similarInfo.fullName
		@printTitle = @similarInfo.fullName
		@canUse = @similarInfo.canUse
		@similarUserId = @similarInfo.userId
		@relatedSimilarUser = @similarInfo.relatedForUserId
		@organization = @similarInfo.organization
		@birthDate = @similarInfo.birthDate
		@auxComment = @similarInfo.auxComment

	checked: () -> if not arguments?.length then @_checked else @_checked = arguments[0]

#Группа потенциальных дублей пользователя
class similarsGroup
	constructor: (@rslvData, @similars, @groupLocation, @titleData) ->
		@title = null #Надпись на экране
		@hint = null #Всплывающая подсказка
		@similarUsers = [] #Список потенциальных дублей пользователя
		@resolveData = @rslvData #Ссылка на разрешение, для которого выбираем дубль

		@title = @titleData
		@similarUsers = _.map(@similars, (similar) => new similarUser(similar))
		if !@resolveData.isParent
			_.each(@similarUsers, (smlrUser) => smlrUser.infoHint = language.Movement.kGetSimilarAddInfo)
			if @groupLocation == "InSchool"
				_.each(_.filter(@similarUsers, (smlrUser) => !smlrUser.canUse), (smlrUser) => smlrUser.questionHint = language.Movement.kMustTransferToAnotherClass)
			else if @groupLocation == "InPool"
				docDateInfoMessage = language.Generic.Import.kStudentFoundInPool + language.Generic.Import.kButPoolDateMoreThenDocDate
				_.each(_.filter(@similarUsers, (smlrUser) => !smlrUser.canUse), (smlrUser) => smlrUser.questionHint = docDateInfoMessage)
		if @groupLocation == "InOtherSchools" || @groupLocation == "InOtherSchoolsExcludeUDODs"
			_.each(@similarUsers, (smlrUser) => 
				if smlrUser.organization 
					smlrUser.title = smlrUser.title + " - " + smlrUser.organization.name)

	choice: () -> 
		if not arguments?.length 
			_.find @similarUsers, (similarUser) -> similarUser.checked()
		else 
			do @clearChoice
			setSimilarUserId = arguments[0]
			setSimilarUser = _.find @similarUsers, (similarUser) -> similarUser.similarUserId == setSimilarUserId
			if !setSimilarUser
				throw "similar #{setSimilarUserId} not finded in group #{@title}"
			setSimilarUser.checked(true)

	clearChoice: () ->
		_.each @similarUsers, (similarUser) -> similarUser.checked(false)

#Опция выбора Новая запись / Игнорировать и т.д.
class similarsOption
	constructor: (@rslvData, @type, @typeTitle, @typeHint) ->
		@title = null #Надпись на экране
		@hint = null #Всплывающая подсказка
		@id = null #Идентификатор NewPerson/IgnorePerson
		@_checked = @rslvData.data.choice && @rslvData.data.choice.choice && @rslvData.data.choice.choice != "ExistingPerson" #Признак выбора
		@resolveData = @rslvData #Ссылка на разрешение, для которого выбираем опцию
		@id = @type
		@title = @typeTitle
		@hint = @typeHint
		

	checked: () -> if not arguments?.length then @_checked else @_checked = arguments[0]

#Разрешение дубля персоны (учащийся или родитель)					
class personSimilarResolveData
	constructor: (@data) ->
		@personId = @data.personId	#Код персоны по которой происходил разрешение дублей
		@title = @data.fullName		#Надпись на экране
		@similarOptions = []		#Список опций выбора similarsOption
		@similarGroups = []			#Список групп потенциальных дублей пользователя
		@parentsResolveData = []	#Список пользователей-родителей personSimilarResolveData
		@isParent = false			#Признак родителя
		if @data.isParent
			@isParent = @data.isParent
		self = this
		
		if @data.parentsSimilarsResolveData?.length > 0
			@parentsResolveData = _.map(@data.parentsSimilarsResolveData, (parentResolveData) => 
				parentResolveData.isParent = true
				new personSimilarResolveData(parentResolveData))

		if @data.options.options
			@similarOptions = _.chain(@data.options.options)
				.reject	(option) -> option == "ExistingPerson"
				.map (option) -> new similarsOption(self, option, getSimilarRadioTitle(option))
				.value()

		if @data.options.similars
			@similarGroups = _.chain @data.options.similars
				.reject (similar) -> similar.relatedForUserId?.length > 0
				.groupBy "location"
				.map (similars, location) => new similarsGroup(self, similars, location, getLocation(location, @isParent))
				.value()
		
			similarsBySimilars = _.filter(@data.options.similars, (similar) -> similar.relatedForUserId?.length > 0)
			if similarsBySimilars?.length > 0
				self.isParent = true
				@similarGroups.unshift new similarsGroup(self, similarsBySimilars, "", language.Movement.kParentSimilarBySimilar)
			if @data.options.similars.length == 1 && @data.choice && @data.choice.choice == "ExistingPerson"
				@similarGroups[0].similarUsers[0].checked(true)
		return

	#проверка - разрешен ли дубль
	resolved: () ->
		resolvedOptionChoice = @getChoice()
		if @parentsResolveData?.length and (!resolvedOptionChoice or resolvedOptionChoice?.id != "IgnorePerson") and _.any(@parentsResolveData, (resolveData) -> !resolveData.resolved())
			return false

		if resolvedOptionChoice
			#выбрана одна из опций
			return true
			
		if _.any(@similarGroups, (simlarGroup) -> simlarGroup.choice())
			#выбрана один из дублей
			return true

		return false

	#сбросить выбор
	clearChoice: () ->
		_.each @similarOptions, (option) -> option.checked(false)
		_.each @similarGroups, (group) -> group.clearChoice()
		
	#установить выбор опции
	setChoice: (choice) ->
		do @clearChoice
		choiceOption = _.find @similarOptions, (option) -> option.id = choice
		if !choiceOption
			throw "choice #{choice} not finded"
		choiceOption.checked(true)

	#получение выбранной опции
	getChoice: () ->
		_.find @similarOptions, (option) -> option.checked()
		
	#обновление серверной модели
	updateServerModel: () ->
		optionChoice = @getChoice()
		if optionChoice
			@data.choice = 
				choice: optionChoice.id
				existingUserId: null
		else
			userChoice = (_.find(@similarGroups, (smlGroup) -> smlGroup.choice())).choice()
			if userChoice
				@data.choice = 
					choice: "ExistingPerson"
					existingUserId: userChoice.similarUserId
		if @parentsResolveData?.length
			if optionChoice && optionChoice.id == "IgnorePerson"
				_.each(@parentsResolveData, (parentReslvData) -> 
						parentReslvData.data.choice = 
								choice: "IgnorePerson"
								existingUserId: null
				)
			else
				_.each(@parentsResolveData, (parentReslvData) -> parentReslvData.updateServerModel())
			
	#установить выбор дубля
	setSimilar: (similarUserId) ->
		do @clearChoice

		for similarGroup in @similarGroups
			for user in similarGroup.similarUsers
				if user.similarUserId == similarUserId
					user.checked(true)
					return

	getSimilarRadioTitle = (similarChoice) ->
		switch similarChoice.toString()
			when "NewPerson" then language.Generic.Movement.kNewPerson
			when "DuplicatePerson" then language.Generic.Movement.kDuplicatePerson
			when "IgnorePerson" then language.Generic.Movement.kIgnorePerson
			else similarChoice		
			
	getLocation = (strLocation, bType) ->	
		if bType
			switch strLocation
				when "InSchool" then language.Generic.Movement.kParentSimilarsInSchool
				when "InOtherSchools" then language.Generic.Movement.kParentSimilarsInOtherSchools
				when "InOtherSchoolsExcludeUDODs" then language.Generic.Movement.kParentSimilarsInOtherSchools
		else
			switch strLocation
				when "InSchool" then language.Movement.kSimilarsInSchool
				when "InPool" then language.Movement.kSimilarsInPool
				when "InOtherSchools" then language.Movement.kSimilarsInOtherSchools
				when "InOtherSchoolsExcludeUDODs" then language.Movement.kSimilarsInOtherSchools
				
class similarsCtrl

	similarsTmpl = ''
	optionsTmpl = ''
	similarsExistingTmpl = ''
	similarsByLocationsTmpl = ''
	similarUserAdditionalInfoTmpl = ''
	similarsPrintTmpl = ''
	similarsPrintUserTmpl = ''
	
	#функция-загрузчик шаблонов
	loadTemplate = (url, setFunc) ->
		url = url + "?ver=" + appContext.version
		$.ajax
			url: url
			cache: true
			success: (data) ->
				html = data.replace(/(?:\r\n|\r|\n)/g, '')
				setFunc(html)
	
	constructor: (@currentUser, @currentSchoolId, @saveFunction) ->
		@resolveDatas = new Array()
		@model = null
		
		queries = [
			loadTemplate '/vendor/pages/movement/templates/similarsStudentsListTemplate.html', (html) -> similarsTmpl = html
			loadTemplate '/vendor/pages/movement/templates/similarsOptionsTemplate.html', (html) -> optionsTmpl = html
			loadTemplate '/vendor/pages/movement/templates/similarsExistingTemplate.html', (html) -> similarsExistingTmpl = html
			loadTemplate '/vendor/pages/movement/templates/similarsByLocationsTemplate.html', (html) -> similarsByLocationsTmpl = html
			loadTemplate '/vendor/pages/movement/templates/SimilarUserAdditionalInfoTemplate.html', (html) -> similarUserAdditionalInfoTmpl = html
			loadTemplate '/vendor/pages/movement/templates/SimilarsPrintTemplate.html', (html) -> similarsPrintTmpl = html
			loadTemplate '/vendor/pages/movement/templates/SimilarsPrintUserTemplate.html', (html) -> similarsPrintUserTmpl = html
		]
		
		Handlebars.registerHelper 'DelQuots', (strValue) -> strValue.replace('"', '')
		
		Handlebars.registerHelper 'ToLowerCase', (strValue) -> strValue.toLowerCase()
		
		Handlebars.registerHelper 'ExistsEnabledGroups', (objSimilarGroups) -> 
			if _.any(objSimilarGroups, (similarGroup) -> _.any(similarGroup.similarUsers, (similarUser) -> similarUser.canUse))
				""
			else
				"line-through"
		extDeferred.when(queries)
			.then ->
				Handlebars.registerPartial 'optionsTmpl', optionsTmpl
				Handlebars.registerPartial 'similarsExistingTmpl', similarsExistingTmpl
				Handlebars.registerPartial 'similarsByLocationsTmpl', similarsByLocationsTmpl
				Handlebars.registerPartial 'similarsPrintUserTmpl', similarsPrintUserTmpl
				
	#служебный метод поиска данных о разрешении дублей для указанной персоны
	findResolveDataByPerson: (personId) ->
		resolveData = _.filter(@resolveDatas, (resolveData) -> resolveData.personId.replace(/(\")/g, '') == personId) 
		if !resolveData || resolveData.length == 0
			parentsResolveData = _.filter(@resolveDatas, (resolveData) -> resolveData.parentsResolveData && _.any(resolveData.parentsResolveData, (parent) -> parent.personId.replace(/(\")/g, '') == personId))
			resolveData = _.map(_.pluck(parentsResolveData, 'parentsResolveData'), (resData) -> _.find(resData, (reslvData) -> reslvData.personId.replace(/(\")/g, '') == personId))
		if !resolveData || resolveData.length == 0
			throw "resolve data not finded for personId " + personId
		
		return resolveData
	
	#обработчик изменений в опциях выбора решения по дублям
	changeOptionChoice: (ctrl) ->
		personId = ctrl.name.slice(13, -1)
		resolveData = @findResolveDataByPerson personId
		selfChangeOptionChoice = @
		choice = $(ctrl).val()
		ctrlUserIndex = $(ctrl).closest(".similar-resolve-container").data('id')
		_.each(resolveData, (resData) -> resData.setChoice(choice))
		_.each resolveData, (resData) -> 
			$("span.similar-resolve-status-icon", resData.container).addClass("resolved")
			if resData.userIndex != ctrlUserIndex
				$(resData.container).find(".similar-resolve-person").nextAll().hide()
				$("<div class='text-without-choice'>" + $(ctrl).siblings('.similar-user-opton-title').text() + "</div>").insertAfter($(resData.container).find(".similar-resolve-person:visible"))
			if resData.parentsResolveData && resData.parentsResolveData.length > 0 && !resData.isParent
				parentsCtrl = $(resData.container).siblings(".similar-parents")
				if choice == "IgnorePerson"
					_.each(parentsCtrl, (parent) ->
						parentName = $(parent).find('input:checked').prop('name')
						if parentName
							parentPersonId = parentName.toString().slice(13, -1)
							parentResolveData = _.reject(selfChangeOptionChoice.findResolveDataByPerson(parentPersonId), (item) -> item.userIndex == $(parent).data('id'))
							_.each(parentResolveData, (item) -> 
								if (item.similarOptions && item.similarOptions.length > 1) || (item.similarGroups && item.similarGroups.length > 1) || (item.similarGroups && item.similarGroups.length == 1 && item.similarGroups[0].similarUsers && item.similarGroups[0].similarUsers.length > 1) || (item.similarGroups && item.similarGroups.length > 0 && item.similarOptions && item.similarOptions.length > 0)
									item.clearChoice()
									$("span.similar-resolve-status-icon", item.container).removeClass("resolved"))
							$("[name='" + $(parent).find('input:checked').prop('name') + "']").closest('.similar-parents[data-id!="' + $(parent).data('id') + '"]').find(".similar-resolve-person").siblings(".row").show().siblings('.text-without-choice').remove())
					parentsCtrl.hide()
					$("input[type=radio]:visible[checked]").prop('checked', true)
				else
					if $(".similar-resolve-person:hidden", parentsCtrl).length
						parentsCtrl.show()
						similarInputs = $("input[type=radio]:visible[checked]", parentsCtrl)
						similarInputs.prop('checked', true)
						_.each(similarInputs, (input) -> selfChangeOptionChoice.changeOptionChoice(input))
					
					
		if resolveData.length > 1
			$("input[type=radio]:visible[checked]").prop('checked', true)
	#обработчик изменений в опциях выбора дубля для использования
	changeSimilarChoice : (ctrl) ->
		personId = ctrl.name.slice(13, -1)
		resolveData = @findResolveDataByPerson personId
		similarUserId = $(ctrl).data("id")
		ctrlUserIndex = $(ctrl).closest(".similar-resolve-container").data('id')
		_.each(resolveData, (resData) -> resData.setSimilar(similarUserId))
		_.each resolveData, (resData) -> 
			$("span.similar-resolve-status-icon", resData.container).addClass("resolved")
			if resData.userIndex != ctrlUserIndex
				$(resData.container).find(".similar-resolve-person").nextAll().hide()
				$("<div class='text-without-choice'>" + $(ctrl).siblings('.similar-user-name').text() + "</div>").insertAfter($(resData.container).find(".similar-resolve-person:visible"))
		$("input[type=radio]:visible[checked]").prop('checked', true)

	#проверка что все ситуации с дублями разрешены - есть выбор пользователя
	resolved: () ->
		_.every @resolveDatas, (resolveData) -> resolveData.resolved()

	#получить дополнительную информацию по дублю учащегося
	getSimilarInfo: (infoSimilar) ->
		similarId = $(infoSimilar).parent().find("input").data("id")

		jsSubmit
			action: "/webapi/movement/similars/#{similarId}"
			showProcessing: true
			method: "GET"
		.then (response) => @showSimilarInfo response
	
	#показать дополнительную информацию по дублю учащегося
	showSimilarInfo: (studentSimilarInfo) ->
		studentSimilarInfo.language = language
		similarUserAddInfoTemplate = Handlebars.compile(similarUserAdditionalInfoTmpl)
		similarUserInfo = studentSimilarInfo.lastName + " " + studentSimilarInfo.firstName + " " + studentSimilarInfo.middleName
		
		currentUser = @currentUser
		currentSchoolId = @currentSchoolId
		
		if studentSimilarInfo.organization
			orgName = studentSimilarInfo.organization.name
			orgId = studentSimilarInfo.organization.id
			buttonMail =
				{
					label: language.Generic.Movement.kRequestDepart
					action: () ->
						jsSubmit
							action: "/webapi/schools/#{currentSchoolId}/getAddressedName"
							showProcessing: true
							method: "GET"
						.then (response) =>
							currentSchoolAddressedName = response
							mailTheme = language.Generic.Movement.kRequestDepartMailTheme.templateFormat {StudentFio: similarUserInfo}

							mailText = language.Generic.Movement.kRequestDepartMailText.templateFormat { 
								StudentFio: similarUserInfo
								SchoolName: currentSchoolAddressedName
								CurrentUserFio: currentUser
								ProductName: appContext.productName 
							}

							sys.mail.compose 
								theme: mailTheme
								to: sys.mail.getRecipientBuilder().groups.admins(orgId, orgName).end().end()
								copy: sys.mail.getRecipientBuilder().groups.admins(currentSchoolId, currentSchoolAddressedName).end().end()
								text: mailText
				}
		buttonOk = 
			label: language.Generic.Common.kOk
			action: (dialog) -> dialog.close()

		buttons = []
		buttons.push buttonOk
		if buttonMail
			buttons.push buttonMail
		
		$.show.dialog
			modal: true
			title: language.Movement.kGetSimilarAddInfoTitle
			size: BootstrapDialog.SIZE_WIDE
			message: similarUserAddInfoTemplate(studentSimilarInfo)
			buttons: buttons

	#синхронизировать модель представления и серверную по выбору данных
	syncResolveDatas: () ->
		_.each(@model.similarsResolveDataView, (dataView) -> dataView.updateServerModel())
									
	#точка входа. 
	#метод инициализирующий проверку на дубли добавляемых учащихся в приказ
	checkSimilars : (@addStudentMovementsModel, @callbackFunc) ->
		@defObj = new $.Deferred()

		jsSubmit
			action: "/webapi/movement/similars/check"
			dataType: "json"
			contentType: 'application/json'
			data: @addStudentMovementsModel
			showProcessing: true
			method: "POST"
		.then (response) => (
			@model = response
			@model.language = language
			
			#сортировка всех предоставленных опций для выбора
			for resolveData in @model.similarsResolveData
				resolveData.options.similars.sort (a, b) -> 
					b.location.localeCompare(a.location)
				resolveData.options.options.sort (a, b) -> 
					b.localeCompare(a)

			#трансформация серверной модели к модели клиентской
			@resolveDatas =_.map @model.similarsResolveData, (resolveData) => new personSimilarResolveData(resolveData)
			@resolveDataIndexer = []
			userIndex = 1
			for resolveData in @resolveDatas
				resolveData.userIndex = userIndex
				@resolveDataIndexer[userIndex] = resolveData
				userIndex++
				if resolveData.parentsResolveData
					for parentsData in resolveData.parentsResolveData
						parentsData.userIndex = userIndex
						@resolveDataIndexer[userIndex] = parentsData
						userIndex++


			@model.similarsResolveDataView = @resolveDatas
			template = Handlebars.compile(similarsTmpl)
			@defObj.locked = false
			@resolveDialog = $.show.dialog
				modal: true
				title: language.Generic.Movement.kCheckSimilars
				size: BootstrapDialog.SIZE_WIDE
				message: template(@model)
				onshown: () => 
					resolveContainers = _.toArray($(".similar-resolve-container"))
					_.each resolveContainers, (resolveContainer) ->
						_this.resolveDataIndexer[$(resolveContainer).data("id")].container = resolveContainer
					#добавляем обработчики событий для элементов управления
					$(".modal-body").on("click", ".similar-user-option:visible > label > input[type=radio]", (event) => @changeOptionChoice(event.currentTarget))
					$(".modal-body").on("click", ".similar-user-choice:visible > label > input[type=radio]", (event) => @changeSimilarChoice(event.currentTarget))
					$(".modal-body").on("click", ".similar-user-choice:visible .similar-info-icon", (event) => @getSimilarInfo(event.currentTarget))
					$(".modal-body").on("click", ".similar-user-choice:visible .similar-question-icon", (event) => alert(event.currentTarget.title))
					$(".similar-user-option:visible > label > input[type=radio][checked]").click()
					$(".similar-user-choice:visible > label > input[type=radio][checked]").click()
					$("input[type=radio]:visible[checked]").prop('checked', true)
					$(".modal-body").on("click", (event) => dataChanged())
				buttons: [
							{
								label: language.Generic.Common.kOk
								action: (dialog) => 
									if @defObj.locked
										return
									@completeResolve(@callbackFunc)
							},
							{
								label: language.Generic.Buttons.kCancel
								action: (dialog) -> dialog.close()
							},
							{
								label: language.Generic.Buttons.kPrint
								action: (dialog) => @similarsPrint()
							}
						]
			@defObj.promise()
		)
		
	#завершение процесса разрешения дублей. обработчик нажатия кнопки "Продолжить"
	completeResolve: (@callbackFunc) ->
		@defObj.locked = true
		if _.every(@resolveDatas, (resolveData) -> resolveData.getChoice()?.id == "IgnorePerson")
			alert language.Generic.Movement.kAllSimilarsIgnored
			@resolveDialog.successClose()
			@defObj.reject(@addStudentMovementsModel)
			return

		closeDialog = true
		if !@resolved()
			@defObj.locked = false
			alert language.Generic.Movement.kNotResolvedSimilars
			closeDialog = false
			return closeDialog
		
		#обновление серверной модели согласно изменениям в клиентской
		@syncResolveDatas()
		@addStudentMovementsModel.similarsResolveData = @model.similarsResolveData
		if @saveFunction
			@saveFunction(@addStudentMovementsModel)
		@callbackFunc(@addStudentMovementsModel, @defObj)

	#печать дублей
	similarsPrint: () ->
		similarsPrintTemplate = Handlebars.compile(similarsPrintTmpl)
		$(similarsPrintTemplate(@model)).printUtils().toPrint().then (window) -> popup = window 
