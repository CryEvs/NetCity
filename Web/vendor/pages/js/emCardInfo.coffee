class EmCardInfoCtrl
	
	constructor: () ->
		# шаблон
		@emCardInfoTmpl

		# Контекст
		@context =
			language: language

		@focusInput = (element, panelId, message) ->
			panel = $(element).closest(panelId, 'div.panel')

			isExpanded = panel.attr('aria-expanded')

			if isExpanded isnt 'true'
				panel.collapse('show')

			formGroup = $(element).closest('.form-group')
			label = formGroup.find('label').text()

			message = message.replace('{0}', label)

			focusAlert(element, message)

		@checkFormat = (sourceStr, availableLengths, checkPtrn) ->
			if not sourceStr 
				return false

			if availableLengths && availableLengths.length
				result = _.some(availableLengths, (length) -> length is sourceStr.length)

				if not result
					return false

			if checkPtrn
				return checkPtrn.test(sourceStr)

			true

	GetCardInfo: () ->
		queries = []
		
		getEmCardInfoTemplate = $.ajax
			url: "/vendor/pages/templates/emCard/emCardInfo.html"
			cache: true
			success: (data) =>
				@emCardInfoTmpl = data.replace(/(?:\r\n|\r|\n)/g, '')

		getEmCardInfo = jsSubmit
			action: "/webapi/em/#{appContext.emId}/info"
			method: "GET"
			contentType: "application/json"
			showProcessing: true
			onSuccess: (emCardInfo) =>
				if not emCardInfo then return

				$.extend @context,
					emCardInfo: emCardInfo

		queries.push getEmCardInfoTemplate
		queries.push getEmCardInfo

		extDeferred.when(queries)
			.then =>
				template = Handlebars.compile @emCardInfoTmpl
				html = template @context
				$('#cardInfo').html html

	SaveCard: () =>
		panelId = '#geneos'
		message = language.Generic.SetupSchoolUI.kMobileLenMustBe

		legalAddress = $('input[name="LegalAddress"]').val()
		inn = document.EMSchools.Inn
		ogrn = document.EMSchools.Ogrn
		npaDetails = $('input[name="NPADetails"]').val()
		nationOlympOrg = $('input[name="NationOlympOrg"]:checked').length

		if not @checkFormat(inn.value, [10, 12], /^\d+$/g)
			return @focusInput(inn, panelId, message.replace('{1}', '10 или 12'))

		if not @checkFormat(ogrn.value, [13], /^\d+$/g)
			return @focusInput(ogrn, panelId, message.replace('{1}', '13'))

		emCardInfo = { legalAddress: legalAddress, inn: inn.value, ogrn: ogrn.value, npaDetails: npaDetails, nationOlympOrg: nationOlympOrg > 0 }

		jsSubmit
			action: "/webapi/em/#{appContext.emId}/info"
			method: "POST"
			data: emCardInfo
			contentType: "application/json"
			showProcessing: true
			onSuccess: () ->
				window.dataWereChanged = false
				alert language.Generic.Common.kDataSaved