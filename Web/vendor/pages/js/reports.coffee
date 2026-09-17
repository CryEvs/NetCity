deferredResLoader.loadJsScript("/static/dist/pages/common/js/textWrapIE11.js")


# CoffeeScript
report = do () ->
	popup = null
	
	getDefaultReportUrl = () ->
		url = window.location.pathname
		filename = url.substring url.lastIndexOf('/Report') + 7
		#filename = filename.substring 0, url.lastIndexOf('.asp') 
		filename
		
	#getReportIdForFavorite = () ->
	#	url = window.location.href
	#	filename = url.substring url.lastIndexOf('/Report') + 7
	#	
	#	reportId = filename.substring 0, filename.lastIndexOf('.asp')
	#	if filename.indexOf('=') != -1
	#		indexfav = filename.substring filename.lastIndexOf('=') + 1, filename.lastIndexOf('=') + 2
	#		reportId += indexfav
	#	reportId
		
	#настройки по умолчанию
	defaults =
		winOptions:
			name: "print_window"
			specs: "status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=790,height=590"
			winChild: null
			url: window.location.pathname

	options = 
		preActions: []
		noCorrectScale: false
		graphType: "bar"

	$(document).ready ->
		options = $.extend options,
			reportUrl: -> options.reportUrlPrefix + getDefaultReportUrl()
			title: $('.title').clone().text().split('/').slice(-1)[0]
			reportUrlPrefix: ""
			form: $('form[name="Reports"]')[0]
			container: $('#report')
			actionPanel: $('#actionPanel')
		return

	popupReport = ->
		 options.container.printUtils().toPrint().then (window) -> popup = window

	sendReport = ->
		options.container.printUtils().send({ NA: options.title + ' (' + language.Generic.Reports.kOn + ' ' + appContext.now + ')' })

	onGenerateReport = (htmlResponse) ->
		options.container.removeClass("hidden")
		options.container.html(htmlResponse)
		options.actionPanel.removeClass("hidden")

		ctrl = new TextWrapIE11Ctrl.TextWrapIE11Ctrl
		setTimeout(
			ctrl.splitLines
			100
		)

	checkJson = (response) ->
		htmlResponse = response.responseText
		#проверка на json. в случае ошибки возвращается - json
		if (htmlResponse and htmlResponse[0] == "{") or response[0] == "{"
			if htmlResponse is undefined then htmlResponse = response
			jsonResponse = JSON.parse(htmlResponse)
			if jsonResponse.message
				if jsonResponse.isError 
					$.show.error jsonResponse.message
				else
					$.show.alert jsonResponse.message
			true
		else
			false
		
	commonGenerate = (in_options) ->		
		opts = $.extend {}, options, in_options
		
		for preAction in opts.preActions
			if !preAction()
				return
		jsSubmit
			action: if typeof opts.reportUrl == "function" then opts.reportUrl() else opts.reportUrl
			dataType: "html"
			showProcessing: true
			form: opts.form
			data: opts.data
			defaultErrorHandling: false
			onSuccess: (response) ->
				if not checkJson response
					if opts.forExport
						options.container.addClass("hidden")
						options.actionPanel.addClass("hidden")
						options.container.html(response)
						options.container.printUtils().toExcel()
						$('.buttons-panel-export-send').addClass("hidden")
					else
						onGenerateReport response
						$('.buttons-panel-export-send').removeClass("hidden")
			onError: (response) ->
				if not checkJson response
					$.show.error language.Generic.Common.kUnexpErr
					
	commonExportBigReport = (in_options) ->
		opts = $.extend {}, options, in_options
		for preAction in opts.preActions
			if !preAction()
				return
		options = $.extend({}, defaults, opts)
		
		url = if typeof opts.reportUrl == "function" then opts.reportUrl() else opts.reportUrl
		options.actionFile = url.slice(0, url.length - 4) + "Export.asp"
		
		openExcelVersn(options.form, options.actionFile);
		return
				
	commonGenerateGraph = (in_options) ->
		strGraphReportsPage = "g" + getDefaultReportUrl()
		opts = $.extend {}, options, in_options
		
		for preAction in opts.preActions
			if !preAction()
				return
		jsSubmit
			action: strGraphReportsPage
			dataType: "html"
			showProcessing: true
			form: opts.form
			data: opts.data
			defaultErrorHandling: false
			onSuccess: (response) ->
				onGenerateReport response
				$('.buttons-panel-export-send').addClass("hidden")
			onError: (response) ->
				if not checkJson response
					$.show.error language.Generic.Common.kUnexpErr
		
	alertsReport = (options) ->
		messages = []
		if options.isHeavyReport
			messages.push $.show.alert(language.Generic.EMReports.kReportTakesTime + '. ' + language.Generic.Curriculum.kPleaseWait + '!')
		if options.noCorrectScale
			messages.push $.show.alert(language.Reports.kNoCorrectScale)
		return messages

	control = 
		addFavoriteReport: (in_options) ->
			reportId = $('input[name="RPTID"]').val().toLowerCase()
			jsSubmit(
				action: '/webapi/reports/favorites/' + reportId
				showProcessing: true
				method: 'PUT'
				onSuccess: () ->
					$('#addFavoriteReport').toggle()
					$('#delFavoriteReport').toggle()
					return
			)
		
		delFavoriteReport: (in_options) ->
			reportId = $('input[name="RPTID"]').val().toLowerCase()
			jsSubmit(
				action: '/webapi/reports/favorites/' + reportId
				showProcessing: true
				method: 'DELETE'
				onSuccess: () ->
					$('#addFavoriteReport').toggle()
					$('#delFavoriteReport').toggle()
					return
			)
		
		setOptions: (in_options) ->
			options = $.extend {}, options, in_options
		
		addPreAction: (action) ->
			options.preActions.push action

		generate : (inOptions) ->
			messages = alertsReport(options)
			extDeferred.when messages
				.then () -> commonGenerate(inOptions)
		
		exportBigRep : (inOptions) ->
			messages = []
			messages.push $.show.confirmation(language.Generic.EMReports.kReportTakesTime + '. ' + language.Generic.Common.kCfrmContinue)
			extDeferred.when messages
				.then () -> commonExportBigReport(inOptions)

		showGraph: () ->
			reportTable = options.container.find("table.chart-table")

			canvas = document.getElementById("chart")
			if reportTable.hasClass("hide")
				reportTable.removeClass("hide")
				if canvas then $(canvas).hide()
				return

			labels = []

			colors = ['#1963a1', '#ff5656', '#4de852']

			labelCells = reportTable.find("tr.chart-labels-row > th:not(:empty)")
			dataRows = reportTable.find("tr.chart-data-row")

			labelCells.each (ind, th) ->
				text = trimStr($(th).html().replace(/<br\s*\/?>|(?:&nbsp;)/gi, " "))
				if not text
					return
				if text.length > 20 
					text = text.substring 0, 20
				labels.push text

			getRandomColor = () ->
				letters = '0123456789ABCDEF'.split('')
				color = '#'
				for i in [0..5]
					color += letters[Math.floor(Math.random() * 16)]
				return color

			dataSets = []
			dataRows.each (ind, row) -> 
				dataSet = {}

				dataSet.label = $(row).find(".chart-data-name").html().replace(/<br\s*\/?>|(?:&nbsp;)/gi, " ")

				color = colors[ind] or getRandomColor()

				dataSet.backgroundColor = color
				dataSet.borderColor = color
				dataSet.data = []
				dataSet.fill = false

				$(row).find("td:not(.chart-data-name)").each (ind,cell) ->
					cellValue = parseFloat($(cell).text().replace(",", "."))
					dataSet.data.push(cellValue)

				dataSets.push(dataSet)
				
			chartData =
				labels: labels
				datasets: dataSets

			chartOptions = 
				responsive: true
				maintainAspectRatio: true
				scales:
					xAxes: [ticks: autoSkip: false, maxRotation: 80 ]


			if not canvas
				$("<canvas />").addClass("report-chart").attr("id", "chart").insertAfter reportTable
				canvas = document.getElementById("chart")

			reportTable.addClass "hide"
			$(canvas).show()

			# явное определение типа графика по разметке
			if reportTable.hasClass("chart-bars")
				graphType = "bar"
			else if reportTable.hasClass("chart-lines")
				graphType = "line"

			chartAxisMax = +reportTable.attr("chart-axis-max") || 5

			Chart.scaleService.updateScaleDefaults("linear", {
				ticks: {
					min: 0
					autoSkip: false
					max: chartAxisMax
				}
			})

			chart = new Chart(canvas, { 
				type: graphType or options.graphType, 
				data: chartData
				options: chartOptions
			})

		generateGraph : (addParams) ->
			messages = alertsReport(options)
			extDeferred.when messages
				.then () -> commonGenerateGraph(addParams)
		
		print: () ->
			popupReport().then (window) ->
				window.onload = () ->
					window.print()
					window.close()
		exportReport: () ->
			options.container.printUtils().toExcel()
		window: () ->
			popupReport()
		send: ->
			sendReport()
	control