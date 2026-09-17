class browseUserInfoAccessJournalCtrl
	constructor: (@params) ->
	
	# private fields and methods
	_accessJournalTmpl = '	<table class="table table-bordered table-bright-striped table-bright-hover table-xs">
								<tr>
									<th style="width: 25%;">' + language.Generic.Common.kDate + '</th>
									<th>' + language.Generic.Common.kAuthorOfChanges + '</th>
									<th style="width: 1%;">Ip</th>
									<th style="width: 1%;"></th>
								</tr>
								{{#each accessJournalEntries}}
									<tr>
										<td>
											{{date}}
										</td>
										<td>
											{{author}}
										</td>
										<td>
											{{ip}}
										</td>
										<td>
											<a onclick="browseUserInfoAccessJournalCtrl.browseAccessJournalDetails({{id}})" title="' + language.Generic.Common.kDetails + '" style="cursor: pointer;">
												<span class="icon-th-list "></span>
											</a>
										</td>
									</tr>
								{{/each}}
							</table>'
	
	_accessJournalDetailsTmpl = '<table class="table table-bordered">
									<tr>
										<th style="width: 25%;">' + language.Generic.Common.kField + '</th>
										<th>' + language.Generic.Common.kSetValue + '</th>
									</tr>
									{{#each accessJournalEntryDetails}}
										<tr>
											<td>
												{{fieldName}}
											</td>
											<td>
												{{fieldValue}}
											</td>
										</tr>
									{{/each}}
								</table>'
	
	_showAccessJournalEntries = (accessJournalEntries) ->
		if not accessJournalEntries.length
			alert language.Generic.Common.kNoChangesData
			return
		
		_.map(accessJournalEntries, (_obj) -> 
			date = dateUtils.castServerDateTimeToClient(_obj.date)
			_obj.date = dateUtils.date2str(date) + ' ' + dateUtils.time2Str_ss(date)
		)
		
		model = accessJournalEntries: accessJournalEntries
		
		template = Handlebars.compile(_accessJournalTmpl)
		html = template(model)
		
		$.show.dialog(
			title: language.Generic.Common.kChangeHistory,
			message: html
		)

	_showAccessJournalEntryDetails = (accessJournalEntryDetails) ->
		if not accessJournalEntryDetails.length
			alert language.Generic.Common.kNoDetails
			return
		
		model = accessJournalEntryDetails: accessJournalEntryDetails
		
		template = Handlebars.compile(_accessJournalDetailsTmpl)
		html = template(model)
		
		$.show.dialog(
			title: language.Generic.Common.kDetails,
			message: html,
			size: BootstrapDialog.SIZE_WIDE
		)

	# public methods
	browseAccessJournal: ->
		jsSubmit({
			action: "/webapi/users/#{ @params.editedUserId }/info/accessjournal",
			showProcessing: true,
			method: 'GET',
			onSuccess: (accessJournalEntries) ->
				_showAccessJournalEntries accessJournalEntries
		})
		
	browseAccessJournalDetails: (accessJournalId) ->
		jsSubmit({
			action: "/webapi/users/#{ @params.editedUserId }/info/accessjournal/#{ accessJournalId }/details"
			showProcessing: true,
			method: 'GET',
			onSuccess: (response) ->
				_showAccessJournalEntryDetails(response)
		})