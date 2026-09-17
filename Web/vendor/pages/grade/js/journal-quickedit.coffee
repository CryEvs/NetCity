class QuickEditController
	resourceLoader = require "./resourceLoader.coffee"
	gradeConstants = require "./journal-constants.js"

	constructor: (@journalTable, @studentsTable, @totalsTable, @cmLinks, @journalModel, @onSaveHandler) ->

		@editingCell = null
		@quickEditAssignTypeId = 3 #д.з.
		@quickEditCmId = null
		@quickEditStudentId = null
		@quickEditPopup = null
		@quickEditExistsAssign = null

		@quickEditRow = null
		@quickEditCell = null

		@quickEditData = 
			sgId: @journalModel.subjectGroupId
			results: []
			attendance: []

	initNavigation: () ->
		ctrl = this

		rows = @journalTable.find("tr")
		cellsCount = @cmLinks.length

		checkRowBounds = (rowInd) ->
			#check lower bounds
			if rowInd < 3
				return false
			#check upper bounds
			if rowInd >= rows.length
				return false
			return true
		checkCellBounds = (cellInd) ->
			#check lower bounds
			if cellInd < 0
				return false
			#check upper bounds
			if cellInd >= cellsCount
				return false
			return true

		moveQuickEditCell = (rowDelta, cellDelta) ->
			rowInd = ctrl.quickEditRow
			cellInd = ctrl.quickEditCell

			loop 
				rowInd += rowDelta
				cellInd += cellDelta

				if rowDelta != 0 and not checkRowBounds(rowInd)
					#is`s bound
					return
				if cellDelta != 0 and not checkCellBounds(cellInd)
					#is`s bound
					return
				row = rows.eq rowInd
				cell = row.find("td").eq cellInd
				if cell.is(".disabled") or row.is(".disabled")
					#try jump
					continue
				break

			do ctrl.hideQuickEdit

			ctrl.quickEditRow = rowInd
			ctrl.quickEditCell = cellInd

			ctrl.initQuickEdit cell
			do ctrl.showQuickEditPopup

		$(document).on "keydown.journal-quick-edit", "body", (e) ->
			if e.keyCode == 37
				moveQuickEditCell(0, -1)
				return false
			if e.keyCode == 38
				moveQuickEditCell(-1, 0)
				return false
			if e.keyCode == 39
				moveQuickEditCell(0, +1)
				return false
			if e.keyCode == 40
				moveQuickEditCell(+1, 0)
				return false

	unhiglite: () ->
		@journalCells?.find("span").removeClass "mark-of-quick-edit-type"

	#подсветка оценок в журнале по заданиям выбранного типа
	highlite: () ->
		ctrl = this

		markSpans = @journalCells.find("span")

		markSpans.removeClass "mark-of-quick-edit-type"
		markSpans.each () -> 
			assignId = $(this).data("assign-id")
			if ctrl.assignInfo[assignId]?.typeId == ctrl.quickEditAssignTypeId
				$(this).addClass "mark-of-quick-edit-type"

	initCommon: () ->
		ctrl = this

		@controlPanel = $("#quick-edit-options")
		@buttonPanel = $("#quick-edit-controls")
		@assignTypeControl = $("#quick-edit-assign-type-select")
		@markControl = $("#quick-edit-mark")
		@markBtnGroup = $("#quick-edit-mark-btns")

	init: () ->
		ctrl = this
		window.dataWereChanged = false

		if @journalModel.markSettings.maxMark != 5
			#ограничение - режим быстрого редактирования работает только для 5-ти балльной шкалы
			return

		@assignInfo = _.chain @journalModel.classMeeting
			.reduce(
				(list, cm) -> list.concat(cm.assignments),
				[]
			)
			.indexBy "id"
			.value()

		@assignTypeControl.off "change"
		@assignTypeControl.change () -> 
			selectedType = parseInt $(this).val()
			ctrl.quickEditAssignTypeId = selectedType

			if window.localStorage
				window.localStorage.setItem "quick-edit-ass-type", selectedType
			do ctrl.highlite

		$(document).on "click.journal-quick-edit", "#quick-edit-save-btn", () -> 
			do ctrl.save
		$(document).on "click.journal-quick-edit", "#quick-edit-cancel-btn", () -> 
			do ctrl.cancel

		#добавляем события клика для скрытия всплывающего окна
		$(document).on "click.journal-quick-edit", "body", (e) =>
			if not @quickEditPopup or not @editingCell
				return
			inPopover = @quickEditPopup.has e.target
			if inPopover.length
				return
			if @editingCell.is e.target
				return
			inCell = @editingCell.has e.target
			if inCell.length
				return
			do @hideQuickEdit

		$(document).on "keydown.journal-quick-edit", "body", (e) ->
			mark = parseInt e.key
			if not mark
				if mark == 0 
					ctrl.setMark -1
					return false
				if e.key == "." or e.key == ","
					ctrl.setMark 0
					return false
				return true
			if mark > ctrl.journalModel.markSettings.maxMark
				return true
			if mark < ctrl.journalModel.markSettings.minMark
				return true
			ctrl.setMark mark
			return false

		$(document).on "click.journal-quick-edit", ".quick-edit-marks-panel > button", () ->
			mark = parseInt $(this).data("mark")
			ctrl.setMark mark
			do ctrl.hideQuickEdit

		@journalTable.addClass "journal-quick-edit"
		@journalCells = @journalTable.find("tbody tr.journal-row > td")

		popupButtonsHtml = ""
		for mark in [@journalModel.markSettings.maxMark..@journalModel.markSettings.minMark]
			buttonClass = switch mark
				when 5 then "btn-success"
				when 4 then "btn-info"
				when 3 then "btn-warning"
				when 2 then "btn-danger"
			popupButtonsHtml += "<button type='button' class='btn " + buttonClass + " btn-xs btn-block btn-mark-score' data-mark='" + mark + "'>" + mark + "</button>"

		popupButtonsHtml += "<button type='button' class='btn btn-xs btn-block btn-mark' data-mark='0'>Точка</button>"
		popupButtonsHtml += "<button type='button' class='btn btn-xs btn-block btn-mark' data-mark='-1'>Очистить</button>"

		@journalCells.popover
			placement: 'bottom'
			template: '<div class="popover quick-edit-popover" role="tooltip">
						<div class="arrow"></div>
						<h3 class="popover-title"></h3>
						<div class="popover-content"></div>
						</div>'
			html: true
			trigger: 'manual'
			content: "<div class='quick-edit-marks-panel'>" + popupButtonsHtml + "</div>"
			title: '<span>Выберите оценку</span>'
			container:'body'

		$(document).on "click.journal-quick-edit", "table.journal-total tr.journal-row:not(.disabled) > td:not(.disabled)", () ->
			do ctrl.hideQuickEdit
			ctrl.initQuickEdit $(this)

			if ctrl.quickmark > -100
				ctrl.setMark ctrl.quickmark
			else
				do ctrl.showQuickEditPopup

		do @initNavigation
		do @initMarksInput

		@controlPanel.removeClass("hide")

		resourceLoader.getAssignTypes()
			.then (assignmentTypes) => 
				sortedTypes = _.sortBy assignmentTypes, (atype) -> 
					if atype.id == gradeConstants.assignmentTypes.lessonAnswer
						return -2
					if atype.id == gradeConstants.assignmentTypes.homeWork
						return -1
					return atype.id
				@assignTypeControl[0].options.length = 0
				#$("<option></option>").val(-1).append("Выберите тип").attr("disabled", "disabled").appendTo(@assignTypeControl)
				for item in sortedTypes
					$("<option></option>").val(item.id).append(item.name).appendTo(@assignTypeControl)
				#@assignTypeControl.val(-1)
				lastSelected = window.localStorage?.getItem "quick-edit-ass-type"
				if lastSelected
					@assignTypeControl.val lastSelected

				@quickEditAssignTypeId = parseInt @assignTypeControl.val()
				@buttonPanel.removeClass("hide")

				do @highlite


	dispose: () ->
		do @hideQuickEdit
		do @unhiglite
		$(document).off ".journal-quick-edit"
		@controlPanel.addClass("hide")
		@buttonPanel.addClass("hide")
		@journalTable.removeClass "journal-quick-edit"

	initMarksInput: () ->
		ctrl = this
		@markBtnGroup.empty()
		@markControl[0].options.length = 0

		$("<option></option>").val(-100).append("Ручной ввод").appendTo @markControl
		for mark in [@journalModel.markSettings.maxMark..@journalModel.markSettings.minMark]
			$("<option></option>").val(mark).append(mark).appendTo @markControl
		$("<option></option>").val(0).append("Точка").appendTo @markControl
		$("<option></option>").val(-1).append("Очистить").appendTo @markControl

		btnGroup = @markBtnGroup
		selectCtrl = @markControl

		selectMark = (mark) =>
			@quickmark = mark
			selectCtrl.val mark
			btnGroup.find("button").removeClass("active")
			markBtn = btnGroup.find("button[data-mark=" + mark + "]")
			markBtn.addClass "active"

		@markControl.off "change"
		@markControl.change () -> 
			mark = parseInt $(this).val()
			selectMark mark

		quickMarkBtnHandler = () -> 
			mark = parseInt $(this).data("mark")
			selectMark mark
			$(this).blur()

		@markBtnGroup.append($('<button type="button" class="btn btn-default" data-mark="-100">Ручной ввод</button>').click quickMarkBtnHandler)

		for mark in [@journalModel.markSettings.maxMark..@journalModel.markSettings.minMark]
			buttonClass = switch mark
				when 5 then "btn-success"
				when 4 then "btn-info"
				when 3 then "btn-warning"
				when 2 then "btn-danger"
				else "btn-default"
			btn = $('<button type="button" class="btn ' + buttonClass + '" data-mark="' + mark + '">' + mark + '</button>').click quickMarkBtnHandler
			@markBtnGroup.append btn
			
		@markBtnGroup.append($('<button type="button" class="btn btn-default" data-mark="0">Точка</button>').click quickMarkBtnHandler)
		@markBtnGroup.append($('<button type="button" class="btn btn-default" data-mark="-1">Очистить</button>').click quickMarkBtnHandler)

		#по умолчанию выбираем - "Ручной ввод"
		selectMark -100

	#скрытие всплывающего окна
	hideQuickEdit: () ->
		if not @editingCell
			return
		@editingCell.popover "hide"
		@editingCell.removeClass "quick-edit-cell"
		@editingRow.removeClass "quick-edit-row"
		@editingHead.removeClass "quick-edit-head"

		@editingCell = null
		@editingRow = null
		@editingHead = null
	#инициализация всплывающего окна для редактирования
	initQuickEdit: (cell) ->
		@editingCell = cell
		row = cell.parent()
		
		#координаты
		@quickEditRow = row.index()
		@quickEditCell = cell.index()
		
		#инициализация заголовочных ячеек 
		#инициализация строки
		@editingRow = row
			.add @studentsTable[0].rows[@quickEditRow - 2]
			.add @totalsTable[0].rows[@quickEditRow - 2]
		#инициализация заголовков
		cmLinksCell = @cmLinks.eq(@quickEditCell).parent()
		dayCell = cmLinksCell.parent().prev().find("th").eq(@quickEditCell)
		@editingHead = cmLinksCell.add dayCell

		#инициализация задания
		@quickEditCmId = parseInt @cmLinks.eq(@editingCell.index()).data("cm-id")

		if @journalModel.editLimit.limitPastEditHomeAssigns 
			@quickEditCmInfo = _.findWhere @journalModel.classMeeting, {id: @quickEditCmId}

		#todo. оптимизировать
		@quickEditStudentId = parseInt $("table.journal-student").find("tr").eq(cell.parent().index()-2).find("td.student-name").data("student-id")
		@assigns = _.findWhere(@journalModel.classMeeting, {id: @quickEditCmId}).assignments
		@quickEditExistsAssign = _.findWhere @assigns, {typeId: @quickEditAssignTypeId}

		if @quickEditExistsAssign
			@markContainerId = @quickEditExistsAssign.id
		else
			@markContainerId = "unsaved-" + @quickEditAssignTypeId
		@markContainer = @editingCell.find("span[data-assign-id='" + @markContainerId + "']")
		
		@existsMark = @markContainer.text()

	showQuickEditPopup: () ->
		@editingCell.addClass "quick-edit-cell"
		@editingRow.addClass "quick-edit-row"
		@editingHead.addClass "quick-edit-head"

		@editingCell.popover "show"
		@quickEditPopup = $(".quick-edit-marks-panel")

		if @existsMark
			@quickEditPopup.find("button[data-mark=#{@existsMark}]").addClass "active"

	setMark: (mark) -> 
		markView = mark

		if not @quickEditExistsAssign and @quickEditAssignTypeId == gradeConstants.assignmentTypes.homeWork 
			if @quickEditCmInfo.date < new Date()
				$.show.error "Запрещено назначать домашнее задание на сегодняшний и прошедшие уроки"
				return
		#обновление модели
		result =
			cmId: @quickEditCmId
			assignId: @quickEditExistsAssign?.id
			assignTypeId: @quickEditAssignTypeId
			studentId: @quickEditStudentId
			mark: mark

		if mark == 0
			#установка точки
			result.mark = null
			result.dutyMark = true
			markView = "&#183;"
		if mark == -1
			#удаление
			markView = ""
			result.mark = null

		filterFunc = (res) -> 
			if res.cmId != result.cmId or res.studentId != result.studentId 
				return false
			return res.assignId == result.assignId or res.assignTypeId == result.assignTypeId

		@quickEditData.results = _.reject @quickEditData.results, filterFunc
		@quickEditData.results.push result

		#обновление верстки
		if not @markContainer?.length
			if mark == -1
				return
			@markContainer = $("<span data-assign-id='" + @markContainerId + "'></span>")
			@markContainer.appendTo @editingCell
		
		#todo. полдкраска согласно уровню

		window.dataWereChanged = true
		@markContainer.addClass "unsaved"
		@markContainer.html markView
		$(document).trigger 'journal-width-changes.journal'

	#сохранение изменений
	save: () ->
		if not window.dataWereChanged
			return
		jsSubmit
			data: @quickEditData
			action: "/webapi/grade/journal/quickedit"
			method: "POST"
			dataType: "json"
			contentType: 'application/json'
			nocache: true
			showProcessing: true
		.then () => 
			do @onSaveHandler

	cancel: () ->
		if not window.dataWereChanged
			return
		do @onSaveHandler

#для поддержки js модульности
module.exports = QuickEditController