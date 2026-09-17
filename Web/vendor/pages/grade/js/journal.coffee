class JournalCtrl
	#dependecies
	renderCtr = require "./journal-render.js"
	layoutManagerCtr = require "./journal-layout.coffee"
	QuickEditController = require "./journal-quickedit.coffee"

	constructor: (@preparedFp) ->
		fpModel = @preparedFp.filterPanel
		fpSources = @preparedFp.filterSources
		fpContainer = $(".filters-panel:first")

		controlButtons = $(".buttons-panel, #load-journal-btn", "#state-journal")

		@loadButton = $("#load-journal-btn");
		@journalControls = $("#quick-edit-switch-btn, .assign-themes-btn, .journal-print-btn, .journal-export-btn")
		@journalControls.addClass "hide"

		@filterPanel = new filterPanel(fpContainer, fpModel, fpSources, "/webapi/grade/journal/filter/init", null, null, true, true)

		@filterPanel.ready () -> 
			controlButtons.show()

		@filterPanel.emptyChoice (emptyFilter) => 
			controlButtons.hide()
			@journalControls.addClass "hide"
			if emptyFilter.id == "PCLID_IUP" 
				$(".filters-panel").hide()
				_showInfoMessage(emptyFilter.model.emptyText or language.Filter.kYouNotChiefAndHasNoSubj)
				

		do @filterPanel.initPanel

		@layoutManager = null
		@journalsData = null
		@journalData = null

		@filterPanel.init () =>
			@journalControls.addClass "hide"

			$("#journal-container").empty()
			$("#journal-last-access-info").nextAll().remove()
			$("#journal-last-access-info").empty()
			
			@showInfoMessage "Нажмите кнопку \"Загрузить\" для показа классного журнала"
			

		$("#load-journal-btn").click () => @loadJournal()

		$(document).off ".journal"
		$(document).on "click.journal", "button.assign-themes-btn", () => @editAssignments()
		$(document).on "click.journal", "button.journal-print-btn", () => @printJournal()
		$(document).on "click.journal", "button.journal-export-btn", () => @exportJournal()

		#загрузка шаблонов
		$.ajax
			url: '/vendor/pages/grade/templates/attendanceLegend.html'
			cache: true
			success: (data) ->
				window.attendanceLegendTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
		$.ajax
			url: '/vendor/pages/grade/templates/journalLegend.html'
			cache: true
			success: (data) ->
				window.journalLegendTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
		$.ajax
			url: '/vendor/pages/grade/templates/journal.html'
			cache: true
			success: (data) ->
				window.journalTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');

	_showInfoMessage = (text) ->
		$("#process-message-journal").css({display: "none"})
		$(".info-message > .alert").html text
		$(".info-message").removeClass "hide"

	#сокрытие информационного сообщения
	_hideInfoMessage = () ->
		$(".info-message").addClass("hide")

	#отображение журнала
	renderJournal = (model, ctrl) ->
		journalModel = model.journals[0]
		journalModel.editLimit = model.editLimit
		journalModel.markSettings = model.markSettings
		journalModel.lastEditCmId = model.lastEditCmId

		tkr = false
		if not journalModel.students.length
			_showInfoMessage language.Filter.kNoStudents
			return

		if not journalModel.classMeeting.length
			_showInfoMessage language.Generic.Grade.kScheduleUndefined_2
			return

		journalRender = new renderCtr()
		html = journalRender.RenderJournal(journalModel)

		ctrl.journalControls.removeClass "hide"

		do _hideInfoMessage

		$("#journal-container").html(html)

		$(document).on "click.journal", "#journal-container a.edit-totals-link", (event) -> 
			ctrl.editTotals()

		linksHeads = $("tr.links > th > a")

		do ctrl.quickEditCtrl?.dispose

		if not journalModel.editLimit.readOnly and journalModel.markSettings.maxMark == 5
			#ограничение - режим быстрого редактирования работает только для 5-ти балльной шкалы
			$("#quick-edit-panel").removeClass "hide"

			ctrl.quickEditCtrl = new QuickEditController($("#pupilstab"), $(".journal-student"), $(".journal-marks"), linksHeads, journalModel, () -> do ctrl.loadJournal)
			do ctrl.quickEditCtrl.initCommon

			switchBtn = $("#quick-edit-switch-btn")
			switchBtn.off "click"
			###
			todo. рефакторить.
			сейчас как-то неодназночно разделена логика смены режима представления между quickEdit.coffee и journal.coffee
			###
			switchBtn.click () =>
				if switchBtn.attr("aria-pressed") == "false"
					ctrl.loadButton
						.removeClass "btn-primary"
						.addClass "hidden-xs"
						.prop "disabled", true

					ctrl.quickEditMode = true
					ctrl.quickEditCtrl.init()
					$(".journal-filters").addClass "hide"

				else
					disableQuickMode = () -> 
						ctrl.loadButton
							.addClass "btn-primary"
							.removeClass "hidden-xs"
							.prop "disabled", false

						$(".journal-filters").removeClass "hide"
						ctrl.quickEditMode = false
						ctrl.quickEditCtrl?.dispose()
						switchBtn?.blur()
						if window.dataWereChanged
							window.dataWereChanged = false
							do ctrl.loadJournal
					
				
					window.checkForChanges().then disableQuickMode, () -> 
						switchBtn.attr("aria-pressed", "true")
						switchBtn.addClass("active")

			if ctrl.quickEditMode
				do ctrl.quickEditCtrl.init

		else
			$("#quick-edit-panel").addClass "hide"
			$("#quick-edit-switch-btn").addClass "hide"
			ctrl.quickEditMode = false
			ctrl.quickEditCtrl?.dispose()
			switchBtn?.blur()
			switchBtn?.attr("aria-pressed", "false")

		@layoutManager = new layoutManagerCtr
		do @layoutManager.init
		do @layoutManager.show

		if journalModel.lastAccess
			lastAccessDate = dateUtils.getLocalDateTime(journalModel.lastAccess.date)
			lastAccessMessage = language.Generic.Grade.kLastChangesMade + " <i>" + dateUtils.date2str(lastAccessDate) + " " + dateUtils.time2str(lastAccessDate) + "</i>, " + language.Generic.Grade.kLastChangesUser + " <b>" + journalModel.lastAccess.nickName + "</b>"
			$("#journal-last-access-info").empty()
			$("#journal-last-access-info").append $.uicontrols.info lastAccessMessage

		legend = journalRender.RenderJournalLegend(tkr) + journalRender.RenderAttendanceLegend()
		$("#journal-last-access-info").nextAll().remove()
		$("#edit-journal-container").nextAll().remove()
		#todo. убрать легенду типов заданий на экране выставить оценки
		$("#journal-last-access-info").after(legend)
		$("#edit-journal-container").after(legend)

	#печать
	printJournal: () ->
		exporter = require "./journal-print.coffee"
		new exporter().printJournal()

	#экспорт в excel
	exportJournal: () ->
		exporter = require "./journal-print.coffee"
		new exporter().exportJournal()

	#темы уроков и задания
	editAssignments: () ->
		postTo("EditJournalAssignments.asp", { BACK: "Journal.asp" })

	#переход на экран редактирования итоговых оценок
	editTotals: () ->
		filterData = @filterPanel.getValues()
		data = $.extend({}, filterData, {
			TYPE: 1,
			BACK: "Journal.asp"
		})
		postTo("EditTotal.asp", data)

	show: () ->
		if @filterPanel.status != 'emptyChoice'
			if window.immediatelyLoad
				return do @loadJournal
		 $("#process-message-journal").css({display: "none"})
		return extDeferred.resolve()

	dispose: () ->
		do ctrl.quickEditCtrl?.dispose

	#отображение экрана выставления оценок
	editJournal: (cmId) ->
		#window.pageController.stateManager.setState "edit", {cmId}

	#отображение экрана выставления оценок (новая версия)
	editTotalsAsync: () ->
		window.pageController.stateManager.setState "totals", {}

	#метод загрузки журнала
	loadJournal: () ->
		window.immediatelyLoad = true
		values = @filterPanel.getValues()
		classIdIup = values.PCLID_IUP
		grade = -1
		classId = -1
		rawWal =  classIdIup.split("_")[0]
		isIup = classIdIup.split("_")[1] == "1"

		if isIup
			grade = rawWal
		else
			classId = rawWal

		jsSubmit
			action:"/webapi/grade/journal"
			method: "GET"
			showProcessing: true
			data:
				yearId: appContext.yearId
				classId: classId
				grade: grade
				sgId: values.SGID
				termId: values.TERMID
		.then (response) =>
			@journalsData = response
			@journalData = @journalsData.journals[0]
			renderJournal response, this

	#отображение информационного сообщения
	showInfoMessage: _showInfoMessage

#для поддержки js модульности
module.exports = JournalCtrl
