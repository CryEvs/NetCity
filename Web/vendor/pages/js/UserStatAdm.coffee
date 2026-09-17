# CoffeeScript
class UserStatAdmCtrl

	userStatAdmInfoTmpl = ''
	emIndexer = []
	tst = ''

	#функция-загрузчик шаблонов
	loadTemplate = (url, setFunc) ->
		$.ajax
			url: url
			cache: true
			success: (data) ->
				html = data.replace(/(?:\r\n|\r|\n)/g, '')
				setFunc(html)

	loadAllEmNames = (url, setFunc) ->
		$.ajax
			url: url
			cache: true
			success: (data) ->
				setFunc(data)


	constructor: (@container, @filterPanel) ->
		queries = [
			loadTemplate '/vendor/pages/templates/UserStat/userStatAdmInfoTemplate.html', (html) -> userStatAdmInfoTmpl = html,
			loadAllEmNames '/webapi/educmanagements', (data) -> emIndexer = _.indexBy data, "id"
		]		
		
		extDeferred.when(queries)
			.then ->
				Handlebars.registerHelper 'ifEqual', (nParam1, nParam2, opts) ->
					if nParam1 == nParam2
						opts.fn(this)
					else
						opts.inverse(this);
				Handlebars.registerHelper 'date2str', (dateParam) -> 
					if dateParam
						dt = new Date(dateParam)
						return dateUtils.date2str(dt) + " " + dateUtils.time2Str_ss(dt);
				return
	browseUserStatAdm: ->
		self = this
		pagination = new Pagination({
			url: "/webapi/admin/userstat"
			container: $('.userStatAdmCtrl')
			render: (userStatAdmInfo) ->
				
				if not userStatAdmInfo.userStats.length
					self.showMsgInContainerHtml(language.Generic.Movement.kMsgNoStudentsForFilters)
					return

				_.each userStatAdmInfo.userStats, (userStat) -> 
					userStat.emNames = _.map userStat.eMs, (emId) -> emIndexer[emId].name
					userStat.emNames = userStat.emNames.join(", ")

				model = 
					userStatAdmInfo: userStatAdmInfo
					language: language
					schoolFilterValue: self.filterPanel.getValues().OrganizationFilter

				template = Handlebars.compile(userStatAdmInfoTmpl)
				html = template(model)
					
				$("#actionPanel").show()
					
				return html
			postRender: () ->
				$('[data-original-title]').popover
					placement : 'bottom'
					html: 'true'
					trigger: "hover"
				window.floatingScroll.scanTables()
			context:
				filterContextData: 
					selectedData: this.filterPanel.getCtxValues()
			requestFieldName: 'pagedData'
			responseFieldName: 'pageResponseData'
		})

		pagination.setRecordsOnPage(this.filterPanel.getValues().PageRowsFilter)
		$('select[name="PageRowsFilter"]').on('change', -> pagination.setRecordsOnPage(this.value))
		pagination.init()

	showMsgInContainerHtml : (message) ->
		@container.html '<div class="col-md-12 alert alert-info" role="alert">' + message + '</div>'
	showWarningMsgInContainerHtml : (message) ->
		@container.html '<div class="col-md-12 alert alert-danger" role="alert">' + message + '</div>'

	print:  ->
		@container.printUtils().toPrint({ viewHeader: true }).then (window) -> popup = window
			.then (window) -> 
				window.onload = () ->
					window.print()
					window.close()
	
	exportUserStatAdm:  ->
		@container.printUtils().toExcel({ viewHeader: true })