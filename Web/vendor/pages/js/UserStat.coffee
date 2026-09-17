# CoffeeScript

class UserStatCtrl
	userStatTmpl = '	<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block">
							<tr">
								<th>{{language.Generic.Common.kDisplayName}}</th>
								<th>{{language.Generic.Common.kRole}}</th>
								<th>{{language.Generic.ServAdmin.kLoginTime}}</th>
								<th>{{language.Generic.ServAdmin.kLogoutTime}}</th>
								<th>{{language.Generic.ServAdmin.kIPAddress}}</th>
								<th>{{language.Generic.Login.kEsiaLogin}}</th>
							</tr>
							{{#each userStats}}
								<tr>
									<td>
										{{login}}
									</td>
									<td>
										{{role}}
									</td>
									<td class="text-center">
										{{date2str dateLogin}}
									</td>
									<td class="text-center">
										{{date2str dateLogout}}
									</td>
									<td class="text-center">
										{{ip}}
									</td>
									<td class="text-center">
										{{#if esiaLogin}}{{../../language.Generic.Common.kYes}}{{/if}}
									</td>
								</tr>
							{{/each}}
						</table>'
						
	userStatTmplClass = '<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block">
							<tr">
								<th>{{language.Generic.Common.kDisplayName}}</th>
								<th>{{language.Generic.Common.kRole}}</th>
								<th>{{language.Generic.ServAdmin.kLoginTime}}</th>
								<th>{{language.Generic.ServAdmin.kLogoutTime}}</th>
								<th>{{language.Generic.ServAdmin.kIPAddress}}</th>
								<th>{{language.Common.kClass}}</th>
								<th>{{language.Generic.Login.kEsiaLogin}}</th>
							</tr>
							{{#each userStats}}
								<tr>
									<td>
										{{login}}
									</td>
									<td>
										{{role}}
									</td>
									<td class="text-center">
										{{date2str dateLogin}}
									</td>
									<td class="text-center">
										{{date2str dateLogout}}
									</td>
									<td class="text-center">
										{{ip}}
									</td>
									<td class="text-center">
										{{userClasses}}
									</td>
									<td class="text-center">
										{{#if esiaLogin}}{{../../language.Generic.Common.kYes}}{{/if}}
									</td>
								</tr>
							{{/each}}
						</table>'						

	userStatTmplByUsers1 = '<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block">
							<tr>
								<th>' + language.Generic.Common.kDisplayName + '</th>
								<th>' + language.Generic.Common.kRole + '</th>
								<th>' + language.Generic.Common.kLoginAmount + '</th>
								<th>' + language.Generic.Common.kWorkTime + '</th>
								<th>' + language.Generic.Common.kLastLoginDate + '</th>
								<th>' + language.Common.kClass + '</th>
							</tr>	
							{{#each userStats}}
								<tr>
									<td>
										{{login}}
									</td>
									<td>
										{{roles}}
									</td>
									<td class="text-center">
										{{loginCount}}
									</td>
									<td class="text-center">
										{{workTime}}
									</td>
									<td class="text-center">
										{{date2str lastDateTimeLogin}}
									</td>
									<td class="text-center">
										{{classesNames}}
									</td>
								</tr>
							{{/each}}
						</table>
						<table>
							<tr>
								<td>
									Всего посетителей за период: {{userStats.length}}
								</td>
							</tr>
						</table>
						'
	userStatTmplOneUser = '<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block">
							<tr>
								<th>{{language.Generic.ServAdmin.kLoginTime}}</th>
								<th>{{language.Generic.ServAdmin.kLogoutTime}}</th>
								<th>{{language.Generic.Common.kWorkTimeOne}}</th>
								<th>{{language.Generic.ServAdmin.kIPAddress}}</th>
								<th>{{language.Generic.Login.kEsiaLogin}}</th>
							</tr>	
							{{#each userStats}}
								<tr>
									<td class="text-center">
										{{date2str dateLogin}}
									</td>
									<td class="text-center">
										{{date2str dateLogout}}
									</td>
									<td class="text-center">
										{{workTime}}
									</td>									
									<td class="text-center">
										{{ip}}
									</td>
									<td class="text-center">
										{{#if esiaLogin}}{{../../language.Generic.Common.kYes}}{{/if}}
									</td>
								</tr>
							{{/each}}
						</table>
						<table>
							<tr>
								<td>
									Всего входов за период: {{userStats.length}}
								</td>
							</tr>
						</table>
						'						
						
	userStatByClasses = '<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block">
							<tr>
								<th rowspan=2>' + language.Common.kClass + '</th>
								<th colspan=2>' + language.Common.kStudents + '</th>
								<th colspan=2>' + language.Generic.Common.kParents + '</th>
							</tr>
							<tr align="center">
								<th>' + language.Generic.Common.kUsersAmount + '</th>
								<th>' + language.Generic.Common.kLoginAmount + '</th>
								<th>' + language.Generic.Common.kUsersAmount + '</th>
								<th>' + language.Generic.Common.kLoginAmount + '</th>
							</tr>
							{{#each userStats}}
								<tr class="text-center">
									<td>
										{{className}}
									</td>
									<td>
										{{zeroIsEmpty studentsAmount}}
									</td>
									<td>
										{{zeroIsEmpty studentsLoginAmount}}
									</td>
									<td>
										{{zeroIsEmpty parentsAmount}}
									</td>
									<td>
										{{zeroIsEmpty parentsLoginAmount}}
									</td>
								</tr>
							{{/each}}
						</table>'						
																				
	constructor: (@params, @container, @filterPanel) ->
	
		Handlebars.registerHelper 'date2str', (dateParam) -> 
			if dateParam
				dt = new Date(dateParam)#dateUtils.castServerDateTimeToClient(dateParam)
				dateUtils.date2str(dt) + " " + dateUtils.time2Str_ss(dt)
			
		Handlebars.registerHelper 'zeroIsEmpty', (nParam) -> 
			if nParam == 0
				return ""
			else
				return nParam
			 			 			 			 			 			 
		# private methods
		@showUserStat = (userStats, statTmpl) ->
			if not userStats.length
				@container.empty()
				@container.append $.uicontrols.info language.Generic.Common.kNoDataForFilter
				return

			model = 
				userStats: userStats,
				language: language

			template = Handlebars.compile(statTmpl)
			html = template(model)
			@container.html html
			$("#actionPanel").show()
			
		@clearResultsHandler = () =>
			$("#actionPanel").hide()
			@container.html ""
			$("#actionPanel").show()

		@filterPanel.init(@clearResultsHandler)			
									
		@date2StrN = (date) ->
			yyyy = date.getFullYear().toString()
			mm = (date.getMonth() + 1).toString()
			dd  = date.getDate().toString()
			if mm.length == 1
			  mm = '0' + mm
			if dd.length == 1
			  dd = '0' + dd
			return yyyy + '-' + mm + '-' + dd
			
		@popupUserStat = () ->
			 @container.printUtils().toPrint().then (window) -> popup = window

	# public methods
	browseUserStat : ->
	
		vals = @filterPanel.getValues()
		user = "-1"

		interval = dateRange.parseRange vals.DatePeriod
		dateBegin = @date2StrN(interval.startDate)
		dateEnd = @date2StrN(interval.endDate)

		viewType = vals.ViewType
		userType = vals.UserType
		idpType = vals.IdpType
		user = vals.Users
		
		data = {}
		if user and user != "-1"
			data.userId = user
		if userType and userType != "-1"
			data.userType = userType
		
		url = switch viewType 
			when "1" then "/webapi/schoolyears/#{ @params.schoolYearId }/userstat/byLoginTime/#{ dateBegin }/#{ dateEnd }/#{idpType}"
			when "2" then "/webapi/schoolyears/#{ @params.schoolYearId }/userstat/byUsers/#{ dateBegin }/#{ dateEnd }/#{idpType}"
			when "3" then "/webapi/schoolyears/#{ @params.schoolYearId }/userstat/byClasses/#{ dateBegin }/#{ dateEnd }/#{idpType}"

		statTmpl = switch viewType 
			when "1" then userStatTmpl
			when "2" then userStatTmplByUsers1
			when "3" then userStatByClasses

		if viewType == "2" and user != "-1"
			#при выборе конкретного пользователя - используем метод получения списка входов без агрегации, и используем такой же списочный шаблон
			url = "/webapi/schoolyears/#{ @params.schoolYearId }/userstat/byLoginTime/#{ dateBegin }/#{ dateEnd }/#{idpType}"
			statTmpl = userStatTmplOneUser

		if (viewType == "1") && ((userType == "1") || (userType == "2"))
			#для родителей и учащихся используем шаблон с отображением классов входа
			statTmpl = userStatTmplClass

		jsSubmit
			action: url
			showProcessing: true
			method: "GET"
			data: data
		.then (userStats) => @showUserStat(userStats, statTmpl)
		
	print:  ->
		@container.printUtils().toPrint({ viewHeader: true }).then (window) -> popup = window
			.then (window) -> 
				window.onload = () ->
					window.print()
					window.close()
	
	exportUserStat:  ->
		@container.printUtils().toExcel({ viewHeader: true })


