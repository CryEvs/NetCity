class PageController
	stateManagerModule	= require "./../../js/stateManager.coffee"
	JournalCtrl			= require "./journal.coffee"
	EditJournalCtrl		= require "./editjournal.coffee"
	JournalTotalsCtrl	= require "./journalTotalsCtrl.coffee"

	constructor: (journalPreparedFp) ->
		@journalCtrl = new JournalCtrl(journalPreparedFp);
		window.ctrl = @journalCtrl
		#временно. для работы линка перехода к итоговым оценкам
		@stateManager = new stateManagerModule.StateManager()
		State = stateManagerModule.State
	
		defaultState = new State('journal', language.Common.kJournal)
			.setOnEnter () => 
				window.location.hash = ""
				@journalCtrl.show()
			.setOnExit () => @journalCtrl.dispose()
			.setDefault()

		journalTotalsController = null
		totalsState = new State('totals', language.Generic.Grade.kTotals)
			.setOnEnter (args) =>

				fp = @journalCtrl.filterPanel
				filterData = fp.getValues()
				filterText = fp.getTexts()

				journalData = @journalCtrl.journalData
				markSettings = @journalCtrl.journalsData.markSettings

				totalsCtx =
					schoolYearId: appContext.yearId
					subjectGroupId: filterData.SGID
					subjectGroupName: filterText.SGID
					termId: filterData.TERMID
					termName: filterText.TERMID
					className: filterText.PCLID_IUP 
					totals: journalData.totals
					avgMarks: journalData.avgMarks
					minMark: markSettings.minMark
					maxMark: markSettings.maxMark
					gradingSys: journalData.gradingSys

				journalTotalsContainer = $("#journal-totals-container")
				journalTotalsController = new JournalTotalsCtrl(journalTotalsContainer, totalsCtx)

				return journalTotalsController.load(args.cmId)
					.then () -> journalTotalsController.display()
					

			.setOnExit (args) ->
				journalTotalsController?.close()
				journalTotalsController = null

		editJournalController = null
		editState = new State('edit', language.Generic.Grade.kEditJournal)
			.setOnEnter (args) => 

				fp = @journalCtrl.filterPanel
				filterData = fp.getValues()
				filterText = fp.getTexts()

				editCtx =
					schoolYearId: appContext.yearId
					subjectGroupId: filterData.SGID
					subjectGroupName: filterText.SGID
					termId: filterData.TERMID
					termName: filterText.TERMID

				journalData = @journalCtrl.journalData

				editJournalContainer = $("#edit-journal-container")
				editJournalController = new EditJournalCtrl(
					editJournalContainer,
					journalData.classMeeting,
					editCtx,
					{
						markSettings: journalData.markSettings
						editLimit: journalData.editLimit
						restrictAddHomeAssign: journalData.editLimit.limitPastEditHomeAssigns 
					})

				editState.container.find('.buttons-filters-panel ').removeClass("hide")

				editJournalController.load(args.cmId).then () -> 
					editJournalController.display()
					$("#journal-last-access-info").empty()
			.setOnFail () ->
				@container.find('.filters-panel').empty()
				@container.find('.buttons-filters-panel ').addClass("hide")
			.setOnExit () -> 
				editJournalController?.close()
				editJournalController = null
		
		@stateManager.defineState defaultState
		@stateManager.defineState editState
		@stateManager.defineState totalsState

		@initialRoute = window.location.hash

		window.onhashchange = () =>
			hash = window.location.hash
			if not hash
				return
			if hash.startsWith("#edit-")
				if @stateManager.currentState.id == editState.id 
					return
				cmId = parseInt hash.replace("#edit-", "")
				@stateManager.setState editState.id, {cmId: cmId}
    
		@stateManager.setState defaultState.id

#для поддержки js модульности
module.exports = PageController