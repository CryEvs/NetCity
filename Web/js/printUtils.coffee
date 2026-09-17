(($) ->
	#приватные переменные
	fileStyleCss = null
	printWindow = null
	additionalFilters = []

	#html-заготовки для построения шаблонов handlebars
	sources =
		sourceHead: "<div align=\"center\" class=\"smalltext\">{{fullSchoolName}}</div>
				<h2 align=\"center\">{{pageTitle}}</h2>
				{{#unless noShowYear}}
					{{#if currYear}}
						<span><b>&nbsp;{{kSchoolYear}}:</b>&nbsp;{{currYear}}</span><br />
					{{/if}}
				{{/unless}}
				{{#if addInfo}}
					<span>{{addInfo}}</span><br />
				{{/if}}
				{{#each filters}}
					{{drawfilter filterName filterValue}}
				{{/each}}
				<br/>"
	
		sourceVersn: "<br/>
					<div class=\"smalltext\"><i>{{kStateOn}} {{now}}</i></div>
					<div class=smalltext>© <i>{{productName}}</i>&nbsp;{{version}}</div>"
				
		sourceLegend: "<br/>
						<table name=\"legend\">
						<tr/>
							{{#each tableLegends}}
								{{#each this}}
									<tr>
										<td style=\"padding-right:20px; border:1px solid #000; background-color: {{{color}}}\">{{{label}}}</td>
										<td style=\"white-space:nowrap;\">{{{description}}}</td>
									</tr>
								{{/each}}
							{{/each}}
						</table>"

	do =>
		if typeof Handlebars is "undefined" then return

		Handlebars.registerHelper 'drawfilter', (filterName, filterValue) ->
			if filterName and filterValue
				new Handlebars.SafeString "<span><b>&nbsp;" + filterName + ":</b>&nbsp;" + filterValue + "</span><br />"
			else if not filterName and filterValue
				new Handlebars.SafeString "<span>" + filterValue + "</span><br />"
			else
				new Handlebars.SafeString "<span></span><br />"

	#настройки по умолчанию
	defaults =
		viewHeader: false
		showFilters: true
		bodyStyle:
			'margin-top': 10
			'margin-left': 10
			'margin-right': 10
		winOptions:
			name: "print_window"
			specs: "status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=790,height=590"
			winChild: null
		processingFunc: []

	#приватные методы
	methods =
		#получает асинхронно стили для печати и кэширует их в переменную fileStyleCss
		getCacheStyles: (bExpot) -> 
			if bExpot 
				fileStyleCss = $.get("/static/dist/pages/common/css/export-tables.min.css")
			else
				fileStyleCss = fileStyleCss ? $.get("/static/dist/pages/common/css/print.min.css")

		#получает заголовок на странице
		getTitle: () -> 
			$(".title:not(:contains('Пожалуйста, подождите...'))") # на экране Screen1.asp рисуется элемент span.title с сообщением Пожалуйста, подождите...
				.first()
				.clone()
				.text()
				.split('/')
				.slice(-1)[0].trim()

		#получает полную html-разметку элемента
		getOuterHtml: (elementSelector) ->
			outerHtml = ''
			elementSelector.each ->
				outerHtml += this.outerHTML + '\n'
			outerHtml
		
		#инклюдит файл со стилями CSS
		cssLoad: (head, file) ->
			$('<link>', {
				rel: 'stylesheet',
				tyle: 'text/css',
				href: file
			}).appendTo(head)
		
		#получает блок фильтров
		getFiltersBlock: () ->
			formGroups = $('.buttons-filters-panel .form-group').filter(':visible')
			formGroupsClone = formGroups.clone()
			
			#при печати периодов времени будет добавляться предлог с
			$('<span class="input-group-addon">с</span>').prependTo(formGroupsClone.find('.input-daterange.input-group.date'))
			
			processingFuncs.replaceInputs(formGroups, formGroupsClone)
			processingFuncs.replaceSelects(formGroups, formGroupsClone)
			processingFuncs.replaceHrefs(formGroups, formGroupsClone)
			processingFuncs.replaceTextareas(formGroups, formGroupsClone)
			processingFuncs.replaceButtons(formGroups, formGroupsClone)

			filters = []
			formGroupsClone.each (index, item) ->
				#ищем подпись для фильтра
				label = $(item).find('label.control-label')
				labelText = label.text()
				
				#предварительная обработка чекбоксов в фильтрах
				divCheckBoxesClone = $('div.checkbox', item)
				checkboxes = formGroups.eq(index).find('div.checkbox input[type=checkbox]')
				labelsForCheckBoxClone = $('label', divCheckBoxesClone)
				
				if not labelText
					labelsForCheckBoxClone.each (index, labelitem) ->
						if checkboxes.eq(index).prop('checked') 
							divCheckBoxesClone.eq(index).replaceWith('<b>&nbsp;' + labelitem.lastChild.nodeValue + ':</b> Да')
						else
							divCheckBoxesClone.eq(index).replaceWith('<b>&nbsp;' + labelitem.lastChild.nodeValue + ':</b> Нет')
				else
					labelsForCheckBoxClone.each (index, labelitem) ->
						if checkboxes.eq(index).prop('checked')
							divCheckBoxesClone.eq(index).replaceWith(labelitem.lastChild.nodeValue)
						else
							$(labelitem).remove()

				if labelText.localeCompare(language.Generic.Common.kSchoolYear) is 0 and appContext.currYear
					#удаляем фильтр если подпись - учебный год. фильтр добавляется по умолчанию
					$(item).remove()
					return

				label.remove()

				span = $(item).find('span')
				spanText = $(item).find('span.text').text() or span.text()
				spanText = '&nbsp;' + spanText.trim() + '&nbsp;' if span.parent('div.input-daterange').length
				span.replaceWith(spanText)
				processingFuncs.replaceOuterDivs(null, item)

				filters.push
					filterName: labelText
					filterValue: item.innerHTML
					
			return filters

		#рисует заголовки
		drawHeaderContext: ( elSelector, opts ) ->
			templateHead = Handlebars.compile(sources.sourceHead)
			templateVrsn = Handlebars.compile(sources.sourceVersn)

			if opts.header
				replaceTitle = opts.header
			else
				titleEl = $(".title:not(:contains('Пожалуйста, подождите...'))").first() # на экране Screen1.asp рисуется элемент span.title с сообщением Пожалуйста, подождите...
				titleArr = titleEl.clone().text().split('/')
				replaceTitle = titleArr[titleArr.length - 1]
				
				if opts.formTitle
					replaceTitle = opts.formTitle(replaceTitle)

			context = 
				fullSchoolName: appContext.fullSchoolName
				pageTitle: replaceTitle || "Заголовок"
				kSchoolYear: language.Generic.Common.kSchoolYear
				currYear: appContext.currYear
				
			if opts.showFilters
				context.filters = methods.getFiltersBlock()
				
				if additionalFilters.length
					context.filters = context.filters.concat(additionalFilters)

			if opts.addInfo
				context.addInfo = opts.addInfo

			if opts.noShowYear
				context.noShowYear = opts.noShowYear

			elSelector.prepend(templateHead(context))

			context = 
				kStateOn: language.Generic.Common.kStateOn
				now: appContext.now
				productName: appContext.productName
				version: appContext.version
		
			elSelector.append(templateVrsn(context))

		cloneItem: (item, options) ->
			# получает копию элемента 
			itemClone = item.clone()

			# раскрашивание строк и столбцов
			findedItemRows = item.find 'tr'
			findedItemCloneRows = itemClone.find 'tr'

			findedItemRows
				.each (rowIndex, itemRow) ->
					itemCloneRow = findedItemCloneRows.eq rowIndex

					itemRowCells = $(itemRow).find 'td'
					itemCloneRowCells = itemCloneRow.find 'td'

					itemRowBackgroundColor = $(itemRow).css 'background-color'
					if itemRowBackgroundColor and itemRowBackgroundColor!="transparent"
						itemCloneRow.css 'background-color', itemRowBackgroundColor

					if !options.noColors

						itemRowCells
							.each (cellIndex, itemRowCell) ->
								itemRowCellBackgroundColor = $(itemRowCell).css 'background-color'
								if itemRowCellBackgroundColor and itemRowCellBackgroundColor!="transparent"
									itemCloneRowCell = itemCloneRowCells.eq cellIndex
									itemCloneRowCell.css 'background-color', itemRowCellBackgroundColor

			itemClone

		#работает с единичным блоком печати
		prepareContent: (item, options, container) ->
			# получает копию элемента
			itemClone = methods.cloneItem(item, options)

			#выполняется преобразование/замена контента по правилам
			for name, func of processingFuncs
				func(item, itemClone, options)

			#проверяет есть ли пользовательские процессинговые функциии и выполняет их
			if options.processingFunc?.length > 0
				for func in options.processingFunc
					func(item, itemClone)

			#добавляет элемент
			itemClone.appendTo( container )

		# 
		replacePrintBlock: (printBlock, copyBlock, repl, value) ->
			tablePrint = copyBlock.find(".table-print")

			firstRowCells = tablePrint.find("tr:first td, th").toArray()
			firstColCells = tablePrint.find("tr:not(:first) td:first-child").toArray()
			
			cells = $.merge( $.merge( [], firstRowCells ), firstColCells )
			cells.forEach (cell) -> $(cell).html(trimStr($(cell).html().replace(repl, value)))

		getOptionView: (option, viewValueAndText) ->
			if not option
				""
			else if viewValueAndText
				option.value + " " + option.text
			else
				option.text

		getSelectView: ($select, viewValueAndText) ->
			selectedOptions = $select.find('option:selected')

			viewStr = selectedOptions
				.map(() -> methods.getOptionView(this, viewValueAndText))
				.toArray()
				.join(", ").trim().replace(/,$/,"")

	processingFuncs =
		#заменяет инпуты
		replaceInputs: (printBlock, copyBlock) ->
			$('input[type=hidden]', copyBlock).remove()
		
			$('input', copyBlock).each ->
				input = $(this)

				escapedVal = input.val().escapeHTML()
				if input.hasClass('form-cell-disabled')
					input.replaceWith $('<b>').text(escapedVal)
				else
					input.replaceWith escapedVal
		
		#заменяет селекты
		replaceSelects: (printBlock, copyBlock) ->
			selects = $('select', copyBlock)
			
			$('select', printBlock)
				.each((index, item) ->
					$select = $(this)

					viewValueAndText = $select.is('.view-value-and-text')
					viewStr = methods.getSelectView($select, viewValueAndText)
					
					if $select.is('.select2-hidden-accessible')
						selects.eq(index).parent().text(viewStr)
					else
						selects.eq(index).replaceWith(viewStr)
				)
		
		#заменяет ссылки
		replaceHrefs: (printBlock, copyBlock) ->
			$('a[href]', copyBlock).each ->
				$(this).replaceWith(this.innerHTML)
		
		#заменяет текстареа
		replaceTextareas: (printBlock, copyBlock) ->
			textareas = $('textarea', copyBlock)
			
			printBlock.find('textarea')
				.each (index, item) ->
					textarea = $(this)

					escapedVal = textarea.val().escapeHTML()
					textareas.eq(index).replaceWith(escapedVal)
		
		#заменяет кнопки
		replaceButtons: (printBlock, copyBlock) ->
			$('button', copyBlock).remove()
			$('.input-group-addon', copyBlock).each ->
				$span = $(this)
				$span.replaceWith('&nbsp;' + $span.text() + '&nbsp;')
		
		#заменяет форм-группы
		replaceFormGroups: (printBlock, copyBlock, options) ->
			replaceTable = $('<table>').addClass('table table-bordered')
			formGroups = copyBlock.find('.form-group')
			
			if formGroups.length
				formGroups.each ->
					label = $(this).find('label')
					
					$th = $('<th>')
					
					if options.thWidth
						$th.attr('width', options.thWidth)
					
					label.replaceWith($th
										.append($('<div>')
													.addClass('text-left text-nowrap')
													.html(label.text()))
					)
					
					divs = $(this).children('div')
					divs.replaceWith($('<td>').addClass('text-nowrap').html(divs.html()))
			
					replaceTable.append($('<tr>').html(this.innerHTML))
			
				copyBlock.append(replaceTable)
				formGroups.remove()
				$('*', copyBlock).not('td, th').each ->
					$(this).remove() if !$.filterWhitespaceString(this.innerHTML)
		
		#заменяет внутренние дивы
		#это правило предназначено для обработки дивов форм-групп
		replaceOuterDivs: (printBlock, copyBlock) ->
			#поиск элементов с классом form-group
			parent = $(copyBlock).wrap('<div>').parent()
			formgroups = parent.find('.form-group')
			if formgroups.length > 0
				divs = formgroups.children('div')
				#цикл по внутренним дивам
				while divs.length
					divs.replaceWith(divs.html())
					divs = formgroups.children('div')
			formgroups.unwrap

		#заменяет легенды
		replaceLegend: (printBlock, copyBlock) ->
			templateLegend = Handlebars.compile(sources.sourceLegend)

			#обертка для блока печати
			wrapBlock = copyBlock.wrap('<div>').parent()
			#ищет легенды
			legends = wrapBlock.find('div.legend')

			#формирование табличного представления легенды
			legends.each ->
				#дивы внутри легенд
				divs = $(this).find('div')

				tableLegends = []
				divs.each ->
					p = $(this).find('p')
					legendDetails = []
					p.each ->
						#получает описание легенды
						descript = $(this)
							.find('span.legend-description')
								.text()
								.replace(" — ", "")

						legendDetails.push
							#объект для формирования легенды
							label: $(this).find('span.legend-label').text()
							color: $("span:contains('" + descript + "')").prev().css( "background-color" )
							description: descript

					tableLegends.push legendDetails

				#заменяет легенду на табличное представление
				context = tableLegends: tableLegends
				$(this).replaceWith(templateLegend(context))

			#добавляет измененное содержимое
			if copyBlock.is('div.legend') then wrapBlock.children().appendTo(copyBlock.empty().removeClass())
		
		#удаляет столбцы с классом-маркером NotPrintable
		replaceNonPrintCol: (printBlock, copyBlock) ->
			for nonPrintCell in $('.NotPrintable', copyBlock).get().reverse()
				revIndex = nonPrintCell.cellIndex
				
				siblings = $(nonPrintCell).prevAll() #предыдущие соседи
				realIndex = siblings.get().reduce((sum, curritem) ->
						sum + curritem.colSpan
					, nonPrintCell.colSpan) - 1
				
				$('tr', copyBlock).find("td:eq(" + revIndex + "), th:eq(" + revIndex + ")").first().remove()
				$('tr', copyBlock).find("td:eq(" + realIndex + ")").remove()

		#удаляет контекстные кнопки
		replaceCtxBtnsIcons: (printBlock, copyBlock) ->
			copyBlock.find('div.ctx-btns-icons').remove()
		
		#удаляет тэг script
		replaceScript: (printBlock, copyBlock) ->
			copyBlock.find('script').remove()

		#замена canvas
		replaceCanvas: (printBlock, copyBlock) ->
			printCanvas = printBlock.find("canvas").toArray()
			copyCanvas = copyBlock.find("canvas").toArray()

			for canvas, index in printCanvas
				copyCanvas = copyCanvas[index]
				base64Img = canvas.toDataURL()
				img = $("<img />").attr("src", base64Img)
				$(copyCanvas).replaceWith img
	
	#процессинговые функции для экспорта
	exportProcessingFuncs =
		#вырезает иконки
		replaceImg: (printBlock, copyBlock) ->
			#удаляет фотографию
			photowrap = copyBlock.find('#photowrap')
			if photowrap
				parent = photowrap.parent()
				if parent then parent.remove() else photowrap.remove()
			copyBlock.find('img').remove()

		replaceBySpace: (printBlock, copyBlock) ->
			methods.replacePrintBlock(printBlock, copyBlock, /<br\s*\/?>|(?:&nbsp;)/gi, " ")

		replaceHeaderHyphenation: (printBlock, copyBlock) ->
			methods.replacePrintBlock(printBlock, copyBlock, /-<br\s*\/?>|(?:&nbsp;)/gi, "")

	#расширяет $.fn новым неймспейсом
	$.fn.printUtils = ->
		# клонирует элемент
		clone: (item) => methods.cloneItem(item)

		#инициализирует дополнительные фильтры
		initAdditionalFilters: ( arrFilters ) ->
			additionalFilters.push { filterName: arrFilters[i], filterValue: arrFilters[i + 1] } for i in [0..arrFilters.length - 1] by 2

		getPrintHtml: (opts) =>
			options = $.extend({}, defaults, opts)

			d = new $.Deferred()
			#запоминает селектор
			selectedObjects = @

			methods.getCacheStyles(false).done (data) ->
				html = $('<html />')
				head = $('<head />')

				if options.titleWindow
					titleWindow = options.titleWindow
				else if options.formTitle
					titleWindow = options.formTitle($('title').text())
					
				titleWindow = $('<title />').append(titleWindow)
				
				linkFavicon = methods.getOuterHtml $('link[href*="favicon"]')
				bootstrapStyles = methods.getOuterHtml $('link[href*="/static/vendor/bootstrap/css/"]')
			
				$(titleWindow).appendTo(head)
				$(bootstrapStyles).appendTo(head)

				$('<style>' + data + '</style>').appendTo(head)
				$(linkFavicon).appendTo(head)

				head.appendTo(html)
			
				body = $('<body>', options.bodyStyle)

				#цикл по блокам печати
				selectedObjects.each ->
					methods.prepareContent( $(this), options, body )

				#добавляет заголовок
				methods.drawHeaderContext( body, options ) if options.viewHeader
				
				body
					.find('.table-hover')
					.removeClass('table-hover')

				body.appendTo html
				d.resolve(html.wrap('<tag>').parent().html())

			d.promise()

		
		#выводит на печать содержимое элементов, у которых есть маркер-класс print-block
		toPrint: (opts) =>
			options = $.extend({}, defaults, opts)
		
			d = new $.Deferred()
		
			winOpts = $.extend({}, options.winOptions, { winChild: printWindow })
			windowOpen( winOpts )
			printWindow = winOpts.winChild
			printWindow.document.writeln('<h4>' + language.Generic.Curriculum.kPleaseWait + '...</h4>')

			#запоминает селектор
			selectedObjects = @
		
			methods.getCacheStyles(false).done (data) ->
				printDocument = printWindow.document
				printDocument.open()
				$(printDocument).find("h4").remove()
			
				html = $('<html />')
				head = $('<head />')

				if options.titleWindow
					titleWindow = options.titleWindow
				else if options.formTitle
					titleWindow = options.formTitle($('title').text())
					
				titleWindow = $('<title />').append(titleWindow)
				
				linkFavicon = methods.getOuterHtml $('link[href*="favicon"]')
				bootstrapStyles = methods.getOuterHtml $('link[href*="/static/vendor/bootstrap/css/"]')
			
				$(titleWindow).appendTo(head)
				$(bootstrapStyles).appendTo(head)

				$('<style>' + data + '</style>').appendTo(head)
				$(linkFavicon).appendTo(head)

				head.appendTo(html)
			
				body = $('<body>', options.bodyStyle)

				#цикл по блокам печати
				selectedObjects.each ->
					methods.prepareContent( $(this), options, body )

				#добавляет заголовок
				methods.drawHeaderContext( body, options ) if options.viewHeader
				
				body
					.find('.table-hover')
					.removeClass('table-hover')

				body.appendTo html
				printDocument.writeln(html.wrap('<tag>').parent().html())
				do printDocument.close
				d.resolve(printWindow)

			d.promise()

		#экспортирует в excel
		toExcel: ( opts ) =>
			options = $.extend({}, defaults, opts)

			body = $('<body>', options.bodyStyle)

			#цикл по блокам экспорта
			this.each ->
				#общая обработка блока печати
				methods.prepareContent( $(this), options, body )

			#выполняется преобразование/замена контента по правилам экспорта
			exportProcessingFuncs.replaceImg(null, body)
			exportProcessingFuncs.replaceHeaderHyphenation(null, body)
			exportProcessingFuncs.replaceBySpace(null, body)
			
			#добавляет заголовок
			methods.drawHeaderContext( body, options ) if options.viewHeader

			body
				.find('.table, .table-striped, .table-bordered, .table-hover, .table-condensed, .chart-table')
				.removeClass()
				.addClass('table-print')
		
			methods.getCacheStyles(true).done (data) ->
				format = (s, c) -> s.replace(/{(\w+)}/g, (m, p) -> c[p] )
				
				exclTitle = methods.getTitle()
				exclTitle = options.formTitle(exclTitle) if typeof options.formTitle isnt 'undefined'

				templateExcelExport = '<body>{content}</body>'
				templateExcelExport = templateExcelExport.replace(/^/, "<head><meta HTTP-EQUIV='Content-type' CONTENT='text/html; charset=utf-8'><style>" + data + "</style></head>") if data
				extDeferred.when($.show.getConfirmation(language.Generic.Common.kExportIntoExcel, 0, [], false, "ShowExcelConfirm")).done ->
					exportBlobToExcel("application/vnd.ms-excel", "/asp/scripts/ExportBlob.asp", format(templateExcelExport, { content: body.html() }), exclTitle + ".xls" )

		#отправляет содержимое отчета в почтовое окно
		send: ( inparams ) =>
			selectedObjects = this

			#параметры по умолчанию
			defparams = 
				A: "T"
				TA: "H"
				NA: ""
				RT: "R"
				RP: "R"

			parameters = $.extend({}, defparams, inparams)

			winOpts = $.extend({}, defaults.winOptions, { specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=560', winChild: printWindow })
			windowOpen( winOpts )
			printWindow = winOpts.winChild
			url = urlHelper.makeUrl("/asp/Messages/composemessage.asp", parameters)
			printWindow.location = url
			center(printWindow, 750, 560)
)(jQuery)