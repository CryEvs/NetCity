class EditJournalLayoutManager
	constructor: (@editjournalWrapper) ->
		@handlers = {}

	init: () =>
		#console.log "EditJournalLayoutManager - init"
		if bowser.msie
			$('.editjournal-wrapper .editjournal input').css('padding-top','1px')
			$('.editjournal-wrapper .editjournal input').focus ( )-> $(this).css('padding-top','1px')

		do @adjustWidth
		do @scanWideTables
		do @adjustScroll
		do @adjustTotalWidth
		do @addHoverEventHandlerToRow

		$(window).on 'resize.editjournal', @adjustTotalWidth
		@handlers =
			'scan-wide-tables.editjournal': () =>
				do @scanWideTables
			'init-floating-scroll.editjournal': () =>
				do @adjustWidth
			'assignmentsColsChanged': () =>
				do @adjustWidth
				do @adjustTotalWidth
				#do @addHoverEventHandlerToRow

		for event, handler of @handlers
			$(document).on event, handler

		#по загрузке доп. стилей показываем таблицу
		deferredResLoader.ready () ->
			$("#editJournal").addClass "ready"
			$("#legend").addClass "ready"

	destroy: () =>
		$(window).off 'resize', @adjustTotalWidth
		for event, handler of @handlers
			$(document).off event

		$(document).off "mouseenter.edit-journal-layout"
		$(document).off "focusin.edit-journal-layout"
		$(document).off "click.edit-journal-layout"

	adjustWidth: () ->
		#console.log "EditJournalLayoutManager - adjustWidth"
		# Добавляем размер ".div-table-safari"
		assignments_block = $(".div-table-safari")
		assignment_container = $(".assignment-container")
		assignment_container_width = 0

		#расчет ширины одного столбца
		$(assignment_container).each () ->
			assignment_container_width = $(this).width()
			return false

		if not assignment_container.length
			return

		#расчет общей ширины блока "задания"
		totalWidth = assignment_container_width * (assignment_container.length - 1)
		assignments_block.width totalWidth

		assignmentsBlock = $('.assignments-block')

	adjustTotalWidth: () ->
		#console.log "EditJournalLayoutManager - adjustTotalWidth"
		windowWidth = $(window).width()
		pageWidth = $(document).width()

		assignmentsBlock = $('.assignments-block')
		edit_journal = $('.editjournal')
		edit_journal_wrapper = $('.editjournal-wrapper')

		width_date_results_block = '0px'
		width_date_results_block = assignmentsBlock.actual('innerWidth')

		#console.log "windowWidth = " + windowWidth + ", width_date_results_block = " + width_date_results_block
		#волшебное число 85 - это всевозможные отсупы от content-а
		if Number(windowWidth) > 968
			div_table_safari = $('.div-table-safari').width()
			div_table_safari += 555

			edit_journal.css({"width": div_table_safari + 'px'})
			if edit_journal_wrapper.width() < edit_journal.width()
				edit_journal.css({"width": 'auto'})
		else
			$('.editjournal').css({"width": 'auto'})

			# заглушка, которую нужно убрать как только будет добавлена адаптивность
			div_table_safari = $('.div-table-safari').width()
			div_table_safari += 555
			edit_journal.css({"width": div_table_safari + 'px'})

	adjustScroll: () ->
		mCSB_container_width =
			"width": 0 + "px"
		$('.mCSB_container').css mCSB_container_width

	scanWideTables: () ->
		#console.log "EditJournalLayoutManager - scanWideTables "  +  @editjournalWrapper

		if not @editjournalWrapper
			return
		@editjournalWrapper
			.filter ".assignments-block:not(.floating-scrolls)"
			.each (index, element) ->
				table = $(element)
				parent = table.parent()
				factWidth = table.prop "clientWidth"
				availWidth = parent.prop "clientWidth"
				#если ширина таблицы больше ширины контейнера больше
				if factWidth > availWidth
					floatingScroll.initScrollableBlock table
					parent.css("overflow-x", "")

	addHoverEventHandlerToRow: () ->
		backlightColor = '#fffacd'

		setBGColorResults = (element, color) ->
			color = color || ''
			index = $(element).index()

			$('.results-block').each(->
				$block = $($('div', $(this)).get(index))
				$block.find('span, input').css('background-color', color)
			)

		setBGColorAttendance = (element, color) ->
			color = color || ''
			index = $(element).index()
			$($('.attendance-block div').get(index)).find('select[name="REASON"]').css('background-color', color)

		setBGColorStudent = (element, color) ->
			color = color || ''
			index = $(element).index()
			$($('div.student').get(index)).css('background-color', color)

		hoverHandler = ($block) ->
			setBGColorStudent($block, backlightColor)
			setBGColorResults($block, backlightColor)
			setBGColorAttendance($block, backlightColor)

			$($block).siblings().each(->
				setBGColorStudent(this)
				setBGColorResults(this)
				setBGColorAttendance(this)
			)

		$(document).on "mouseenter.edit-journal-layout", "div.student, div.results-block div, .attendance-block div", () -> hoverHandler(this)
		$(document).on "focusin.edit-journal-layout", "div.results-block div input", () -> hoverHandler($(this).parent())
		$(document).on "click.edit-journal-layout", "select[name='REASON']", () -> 
			$block = $(this).parent()
			hoverHandler($block)

do ($) ->
	$.fn.actual = () ->
		if arguments.length and typeof arguments[0] == 'string'
			dim = arguments[0]
			$(this).addClass 'liActualSize'
		if this.is(':visible')
			return this[dim]()

		clone = $('body').clone().css(
			position: 'absolute',
			top: '-99999px',
			left: '-99999px',
			visibility: 'hidden'
		).appendTo('body')

		clone.find('*').show()
		s = clone.find('.liActualSize')[dim]()
		clone.remove()
		$(this).removeClass('liActualSize')
		s

#для поддержки js модульности
module.exports = EditJournalLayoutManager