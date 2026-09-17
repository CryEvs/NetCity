# CoffeeScript
class UserStatEMCtrl

	userStatEmAdmInfoTmpl = ''
	userStatEmEoInfoTmpl = ''
	userStatEmEoOneInfoTmpl = ''
	userStatEmEmInfoTmpl = ''
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
			loadTemplate '/static/dist/pages/userstat/userStatEmAdmTemplate.html', (html) -> userStatEmAdmInfoTmpl = html,
			loadTemplate '/static/dist/pages/userstat/userStatEmEoTemplate.html', (html) -> userStatEmEoInfoTmpl = html,
			loadTemplate '/static/dist/pages/userstat/userStatEmEoOneTemplate.html', (html) -> userStatEmEoOneInfoTmpl = html,
			loadTemplate '/static/dist/pages/userstat/userStatEmEmTemplate.html', (html) -> userStatEmEmInfoTmpl = html,
			loadAllEmNames '/webapi/educmanagements', (data) -> emIndexer = _.indexBy data, "id"
		]		
		
		extDeferred.when(queries)
			.then ->
				Handlebars.registerHelper 'ifEqual', (nParam1, nParam2, opts) ->
					if nParam1 == nParam2
						opts.fn(this)
					else
						opts.inverse(this);
				Handlebars.registerHelper 'date2strDayOnly', (dateParam) -> 
					if dateParam
						dt = dateUtils.castServerDateTimeToClient(dateParam)
						return dateUtils.date2str(dt);
				return
	browseUserStatEM: ->
		self = this
		pagination = new Pagination({
			url: "/webapi/em/userstat"
			container: $('.userStatEMCtrl')
			render: (userStatEmInfo) ->
				
				if not userStatEmInfo.userStats.length
					self.showMsgInContainerHtml(language.Generic.Movement.kMsgNoStudentsForFilters)
					return

				_.each userStatEmInfo.userStats, (userStat) -> 
					userStat.emNames = _.map userStat.eMs, (emId) -> emIndexer[emId].name
					userStat.emNames = userStat.emNames.join(", ")

				schoolId = self.filterPanel.getValues().OrganizationFilter
				
				model = 
					userStatEmInfo: userStatEmInfo
					language: language
					schoolFilterValue: schoolId
				orgType = self.filterPanel.getValues().OrganizationType
				tmpl = switch orgType
					when "1" then tmpl = (if schoolId == "-1" then userStatEmEoInfoTmpl else userStatEmEoOneInfoTmpl)
					when "2" then tmpl = userStatEmEmInfoTmpl
					when "3" then tmpl = userStatEmAdmInfoTmpl
				template = Handlebars.compile(tmpl)
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
	
	exportUserStatEM:  ->
		@container.printUtils().toExcel({ viewHeader: true })