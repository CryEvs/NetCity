journal_total = null
journal_total_wrapper  = null
journal_wrapper = null
journal_marks = null
journal_students = null
content_page_preloader = null
journal_total_wrapper_block = null

journalScrollDecorator = (block_floating_scrolls) ->
	floating_wrapper_empty = $("<div class='floating-wrapper-empty'></div>") 
	block_floating_scrolls.prepend floating_wrapper_empty

scanJournalTables = () ->
	journal_total
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
	if not journal_total then return
	
	journal_marks_right = "right": "1px"
		
	if journal_total_wrapper.width() > journal_total.width()
		# 2 - это сумма бордеров двух таблиц, которые накладываются
		journal_total_width = journal_students.outerWidth() +  journal_marks.outerWidth() + journal_total.outerWidth() - 2
		
		difference_right = journal_wrapper.outerWidth() - journal_total_width
		
		if difference_right > 0 
			journal_marks_right = 
				"right": difference_right + "px"
	
	journal_marks.css journal_marks_right
	
selectRow = (n, hover) ->
	elements = $("#pupilstab tr:eq(" + n + ")")
	studentsElems = journal_students.find("tr:eq(" + (n-2) + ")")
	totalsElems = journal_marks.find("tr:eq(" + (n-2) + ")")
	
	if hover
		elements.addClass("hover")
		studentsElems.addClass("hover")
		totalsElems.addClass("hover")
	else
		elements.removeClass("hover")
		studentsElems.removeClass("hover")
		totalsElems.removeClass("hover")
	

selectCol = (n, hover) ->
	c = 0
	$('#pupilstab tr').each () ->
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

printJournal = () ->
	getPrintJournal().printUtils().toPrint
		viewHeader: true
		processingFunc: [printAttendanceMarks]
	return

exportJournal = () ->
	getPrintJournal().printUtils().toExcel
		viewHeader: true
		processingFunc: [printAttendanceMarks]
	return

getPrintJournal = () ->
	#копии таблиц классного журнала
	tableStudents = $('table.journal-student').clone()
	tableTotals = $('#pupilstab').clone()
	tableMarks = $('table.journal-marks').clone()

	#результирующая таблица, в которой будут объединены три предыдущих
	tableJournal = $('<table class="table-print"/>')
	
	# раскраска ячеек в строке
	paintRowCells = (tableSelector, tableClone) ->
		cells = tableClone.find('td')
		$(tableSelector).find('td')
			.each (index, item) ->
				cellColor = $(item).css('background-color')
				cells.eq(index).css('background-color', cellColor)
				cells.eq(index).removeClass().addClass('cell-num')
				
	paintRowTotalsCells = (tableSelector, tableClone) ->
		cells = tableClone.find('td')
		$(tableSelector).find('td')
			.each (index, item) ->
				cellColor = $(item).css('background-color')
				cells.eq(index).css('background-color', cellColor)

	paintRowCells('#pupilstab', tableTotals)
	paintRowTotalsCells('table.journal-marks', tableMarks)

	#раскраска столбцов
	#cells = tableTotals.find('td')
	#$('#pupilstab td').each (index, item) ->
	#	cellColor = $(item).css('background-color')
	#	cells.eq(index).css('background-color', cellColor)

	#получение строк для обработки
	tableStudentsTrs = tableStudents.find('tr')
	tableTotalsTrs = tableTotals.find('tr')
	tableMarksTrs = tableMarks.find('tr')

	curTr = 0
	#объединение таблиц в одну
	tableStudentsTrs.each (index, studTr) ->
		#новая строка
		jrnlTr = $('<tr/>');

		#обработка заголовка
		if index == 0
			$(studTr).find('th').attr('rowspan', '2').appendTo(jrnlTr)
			tableTotalsTrs.eq(curTr).find('th').appendTo(jrnlTr)
			tableMarksTrs.eq(index).find('th').attr('rowspan', '2').appendTo(jrnlTr)
			curTr = curTr + 1
		else
			studNameTd = '<td class="cell-text">' + $(studTr).find('td').text() + '</td>'
			$(jrnlTr).append(studNameTd)
			tableTotalsTrs.eq(curTr).find('td').appendTo(jrnlTr)
			tableMarksTrs.eq(index).find('td').appendTo(jrnlTr)

		jrnlTr.appendTo tableJournal
		if index == 0
			tableTotalsTrs.eq(curTr).appendTo(tableJournal)
			curTr = curTr + 1
		curTr = curTr + 1;

	legend = $('span.legend-description:contains("Срезовая работа")').parent().parent().parent().clone()
	printHtml = tableJournal.wrap('<div>').parent()
	
	if legend
		legend.appendTo printHtml
		
	return printHtml
	
printAttendanceMarks = (printBlock, copyBlock) ->
	copyBlock
		.find('table.table-print td')
		.each () ->
			val = $(this).text()
			val = val.replace(/(^|\s)УП(\s|$)/g, '$1Н$2').replace(/(^|\s)НП(\s|$)/g, '$1Н$2').replace(/(^|\s)ОТ(\s|$)/g, '$1Н$2').replace(/(^|\s)ОП(\s|$)/g, '$1$2').replace(/(^|\s)Б(\s|$)/g, '$1Н$2')
			$(this).text(val)

movein = () ->
	selectCol(this.cellIndex, true)
	selectRow(this.parentNode.rowIndex, true)

moveout = () ->
	selectCol(this.cellIndex, false)
	selectRow(this.parentNode.rowIndex, false)

$(document).ready () ->
	$('#pupilstab td').hover movein, moveout
	
	#инициализируем все переменные
	journal_total = $(".journal-total")
	journal_total_wrapper = $(".journal-total-wrapper")
	journal_wrapper = $(".journal-wrapper")
	journal_marks = $(".journal-marks")
	journal_students = $(".journal-student")
	content_page_preloader = $(".content-page-preloader")
	journal_total_wrapper_block = $(".journal-total-wrapper-block")
	
	#добавление класса print-block в легенду на экране Классный журнал
	report = $('#report')
	if !report.length
		legends = $('div.legend');
		legends.each () ->
			if !$(this).hasClass('print-block')
				$(this).addClass('print-block')

	$(".icon-ok-wraper").popover
		placement : 'bottom'
		html: 'true'
		trigger: "hover"

	#доп. обработчик для базового плагина прокрутки (см. block-floating-scrolls.coffee)
	$(document).bind 'scan-wide-tables', () -> 
		do scanJournalTables
	
	do adaptJournalWidth

deferredResLoader.ready () ->
	#определяем стили. скрываем прелоалер и показываем журнал
	journal_total_wrapper_block_visible =
		visibility: "visible"
		opacity: 1
	journal_wrapper_max_height =
		"max-height": "none"
	content_page_preloader_hidden =
		opacity: 0
	
	content_page_preloader_hide =
		visibility: "hidden"
		
	setJournalVisible = () ->
		journal_wrapper.css journal_wrapper_max_height
		journal_total_wrapper_block.css journal_total_wrapper_block_visible
		do adaptJournalWidth

	hide_preloader = () ->
		content_page_preloader.css content_page_preloader_hide

	window.setTimeout(setJournalVisible, 250)
	content_page_preloader.css content_page_preloader_hidden  
	window.setTimeout(hide_preloader, 1000)
	
$(window).resize () -> adaptJournalWidth()