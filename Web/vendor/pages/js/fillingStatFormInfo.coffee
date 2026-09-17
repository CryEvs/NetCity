class FillingStatFormInfoCtrl

	constructor: (@container, @filterPanel) ->

		# private variables

		# Контекст
		@context

		# Шаблон
		@statFormInfoTemplate
		
		# Опции печати
		@printOptions =
			viewHeader: true
			processingFunc: [(printBlock, copyBlock) -> copyBlock.find('.alert-info').remove()]

		# private methods
		
		@buildStatFormInfoView = (forEditing) ->
			template = Handlebars.compile(@statFormInfoTemplate)
			
			if not @context.statFormInfo.length
				@container.hide()
				$("#openToEditButton").hide()
				alert language.Generic.Common.kNoDetails
				return
			$("#openToEditButton").show();
			
			@context.forEditing = forEditing or false
			
			html = template(@context)
			@container.html html
			@container.show()

	browseStatFormInfo: ->
	
		queries = new Array()
		
		currVals = @filterPanel.getValues()
		statformId = currVals.STATFORMID
		
		params =
			emId: currVals.EMID
			provinceId: currVals.PROVINCEID
			cityId: currVals.CITYID
			year: currVals.YEAR
			eoType: currVals.EOTYPEID
			mns: if currVals.MNS then !!parseInt currVals.MNS[0] else false
			onlyOpened: currVals.ONLYOPENED.length > 0

		getStatFormInfoTemplate = $.ajax
			url: '/vendor/pages/templates/statforms/fillinginfo.html'
			cache: true
			success: (data) =>
				@statFormInfoTemplate = data.replace(/(?:\r\n|\r|\n)/g, '')

		getStatFormInfo = jsSubmit
			action: "/webapi/em/schools/statforms/#{statformId}/fillingInfo"
			data: params
			showProcessing: true
			method: "GET"
			onSuccess: (statFormInfo) =>
				@context =
					statFormInfo: statFormInfo
					language: language

		queries.push(getStatFormInfoTemplate)
		queries.push(getStatFormInfo)
		
		extDeferred.when(queries)
			.then(=>
				@buildStatFormInfoView()
			)
	
	openToEdit: ->
		@buildStatFormInfoView true
	
	reopenForms: ->
		currVals = @filterPanel.getValues()
		
		statformId = currVals.STATFORMID
		
		el = $('table input:checked')
		
		if el.length is 0 then return alert language.Generic.EMReports.kErrSchoolsForOpeningFormNotSelected
		
		reopenStatFormContext =
			year: currVals.YEAR
			mns: if currVals.MNS then !!parseInt currVals.MNS[0] else false
			schoolIds: el.map () -> $(this).val()
				.get()
		
		jsSubmit(
			action: "/webapi/em/schools/statforms/#{statformId}/open"
			data: reopenStatFormContext
			showProcessing: true
			method: "POST"
			onSuccess: ->
				statusCells = $('table td:nth-child(5)')
				el.each ->
					indx = $(this).closest('tr').index() - 1
					statusCells.eq(indx).text language.Generic.Common.kOpened
					$(this).remove()
		)

	getForEditing: ->
		if not @context
			return false

		@context.forEditing or false

	cancel: ->
		@buildStatFormInfoView()

	print: ->
		@container.printUtils().toPrint @printOptions

	export: ->
		@container.printUtils().toExcel @printOptions

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
)(FillingStatFormInfoCtrl)