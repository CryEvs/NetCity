class JournalLayoutManager
	@journal_total: null
	@journal_total_wrapper: null
	@journal_wrapper: null
	@journal_marks: null
	@journal_students: null
	@content_page_preloader: null
	@journal_total_wrapper_block: null

	self = this

	journalScrollDecorator = (block_floating_scrolls) ->
		floating_wrapper_empty = $("<div class='floating-wrapper-empty'></div>")
		block_floating_scrolls.prepend floating_wrapper_empty

	scanJournalTables = () ->
		self.journal_total
			.filter ".journal-total:not(.floating-scrolls)"
			.each (index, element) ->
				table = $(element)
				parent2 = table.parent()
				parent = parent2.parent()
				factWidth = table.prop "clientWidth"

				# минисуется 4 px из-за бордеров
				availWidth = parent.prop("clientWidth") - 4
				doc_w = $(window).width()

				#если ширина таблицы больше ширины контейнера
				if factWidth > availWidth or availWidth > doc_w
					floatingScroll.initScrollableBlock table, journalScrollDecorator
					parent.css("overflow-x", "")

	adaptJournalWidth = () ->
		if not self.journal_total then return

		journal_marks_right = "right": "1px"

		if self.journal_total_wrapper.width() > self.journal_total.width()
			# 2 - это сумма бордеров двух таблиц, которые накладываются
			journal_total_width = self.journal_students.outerWidth() +  self.journal_marks.outerWidth() + self.journal_total.outerWidth() - 2

			difference_right = self.journal_wrapper.outerWidth() - journal_total_width

			if difference_right > 0
				journal_marks_right =
					"right": difference_right + "px"

		self.journal_marks.css journal_marks_right

	#подсветка строки
	selectRow = (n, hover) ->
		elements = self.journal_total.find("tr:eq(" + n + ")")
		studentsElems = self.journal_students.find("tr:eq(" + (n-2) + ")")
		totalsElems = self.journal_marks.find("tr:eq(" + (n-2) + ")")

		if hover
			elements.addClass("hover")
			studentsElems.addClass("hover")
			totalsElems.addClass("hover")
		else
			elements.removeClass("hover")
			studentsElems.removeClass("hover")
			totalsElems.removeClass("hover")

	#подсветка столбца
	selectCol = (n, hover) ->
		c = 0
		$('tr', self.journal_total).each () ->
			row = $(this)
			sum = 0
			m = 0

			headers = row.find('th')
			headers.each () ->
				header = $(this)
				if sum <= n
					m += 1
					colspan = header.attr("colspan") ? "1"
					sum += parseInt(colspan)

			if c == 0 or n <= headers.length
				elements = row.find("th:nth-child(" + (m) + ")")
				if hover
					elements.addClass("hover")
				else
					elements.removeClass("hover")
			c = 1

	movein = () ->
		selectCol(this.cellIndex, true)
		selectRow(this.parentNode.rowIndex, true)

	moveout = () ->
		selectCol(this.cellIndex, false)
		selectRow(this.parentNode.rowIndex, false)

	init: () ->
		#инициализируем все блоки классного журнала
		self.journal_total = $(".journal-total")
		self.journal_total_wrapper = $(".journal-total-wrapper")
		self.journal_wrapper = $(".journal-wrapper")
		self.journal_marks = $(".journal-marks")
		self.journal_students = $(".journal-student")
		self.journal_total_wrapper_block = $(".journal-total-wrapper-block")
		self.journal_preloader = $("#process-message-journal")
		#добавляем подсветку строк и столбов при наведении
		$('td', self.journal_total).hover movein, moveout

		$(".icon-ok-wraper").popover
			placement : 'bottom'
			html: 'true'
			trigger: "hover"

		#доп. обработчик для базового плагина прокрутки (см. block-floating-scrolls.coffee)
		$(document).bind 'scan-wide-tables', () ->
			do scanJournalTables

		do adaptJournalWidth

		deferredResLoader.ready () ->
			do scanJournalTables

		$(document).bind 'journal-width-changes.journal', () ->
			do adaptJournalWidth

		$(window).resize () -> adaptJournalWidth()

	show: () ->
		#определяем стили. показываем журнал
		journal_total_wrapper_block_visible =
			visibility: "visible"
			opacity: 1

		content_page_preloader_hidden =
			display: "none"
			opacity: 0

		journal_wrapper_max_height =
			"max-height": "none"

		setJournalVisible = () ->
			self.journal_preloader.css content_page_preloader_hidden
			self.journal_wrapper.css journal_wrapper_max_height
			self.journal_total_wrapper_block.css journal_total_wrapper_block_visible
			window.setTimeout adaptJournalWidth, 100

		deferredResLoader.ready () ->
			window.setTimeout(setJournalVisible, 250)

#для поддержки js модульности
module.exports = JournalLayoutManager