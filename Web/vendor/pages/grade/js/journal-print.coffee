class JournalExporter
	constructor: () ->
		@journal_students = $(".journal-student")
		@journal_total = $(".journal-total")
		@journal_marks = $(".journal-marks")
		@prepareLegend = () ->
			#добавление класса print-block в легенду на экране Классный журнал
			report = $('#report')
			if !report.length
				legends = $('div.legend');
				legends.each () ->
				if !$(this).hasClass('print-block')
					$(this).addClass('print-block')

		#получение подготовленной разметки для печати/экспорта
		@getPreparedHtml = () ->
			do @prepareLegend
			#копии таблиц классного журнала
			tableStudents = @journal_students.clone()
			tableTotals = @journal_total.clone()
			tableMarks = @journal_marks.clone()

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

			paintRowCells(@journal_total, tableTotals)
			paintRowTotalsCells(@journal_marks, tableMarks)

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

	printJournal: () ->
		@getPreparedHtml().printUtils().toPrint
			viewHeader: true
			processingFunc: [printAttendanceMarks]
		return

	exportJournal: () ->
		@getPreparedHtml().printUtils().toExcel
			viewHeader: true
			processingFunc: [printAttendanceMarks]
		return

#для поддержки js модульности
module.exports = JournalExporter