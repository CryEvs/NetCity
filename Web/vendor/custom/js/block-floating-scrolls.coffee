floatingScroll = do () ->
	#глобальные переменные
	wnd = $(window)
	body = document.getElementsByTagName("body")[0]
	html = document.getElementsByTagName("html")[0]
	
	tables = null

	#метод инициализации прокрутки
	baseInitScrollableBlock = (block, customBlockDecorator)  ->
		block.addClass "floating-scrolls"
		block_floating_scrolls = $("<div class='block-floating-scrolls'></div>")
		
		# Добавление обёртки для таблицы
		block.wrap block_floating_scrolls
		block_floating_scrolls = block.closest(".block-floating-scrolls")

		#инициализация стороннего плагина
		block_floating_scrolls.mCustomScrollbar
			axis: "x"
			scrollButtons: 
				enable: false  
			theme: "3d"
			scrollbarPosition: "outside" 
			keyboard:
				enable: false
			mouseWheel: 
				enable: false 
			callbacks:
				onTotalScroll: -> 
					shadow_right.removeClass("shadow_right")
				onTotalScrollBack: ->  
					shadow_left.removeClass("shadow_left")
				whileScrolling: -> 
					shadow_left.addClass("shadow_left")
					shadow_right.addClass("shadow_right")
					
		shadow_left = $("<div class='shadow_left_anchor'></div>")
		shadow_right = $("<div class='shadow_right shadow_right_anchor'></div>")
		
		# Добавление двух "div"-ов, через которые будет реализована тень справа и слева
		block_floating_scrolls.prepend shadow_left, shadow_right

		if customBlockDecorator
			customBlockDecorator block_floating_scrolls

		#todo. искать относительно таблицы
		mCustomScrollBox = block_floating_scrolls.find(".mCustomScrollBox")
		mCustomScrollBox.addClass("height-auto")
		
		#панель-контейнер ползунка
		scrollBarPanel = mCustomScrollBox.siblings(".mCSB_scrollTools_horizontal")
		#ползунок
		scrollBarDragger = scrollBarPanel.find(".mCSB_dragger")
		
		margin_notactive = 
			"margin-left": block.css("margin-left") + ""
			"margin-right": block.css("margin-right") + ""
			
		#корректировка положения скролл-панели
		adjustScrollPosition = ()  ->
			# высота окна браузера
			window_height = wnd.height()
			# ширина окна браузера
			window_width = wnd.width()
			
			# Определяем высоту таблицы, и плюсуем отступ от верхнего края экрана
			offset = block_floating_scrolls.offset()
			height = block_floating_scrolls.outerHeight()
			sumTable = parseInt(offset.top) + parseInt(height)
			
			# Определяем ширину таблицы, и плюсуем отступ от левого края экрана и узнаём отступ справа
			width = block_floating_scrolls.outerWidth();
			sumTableLeft = parseInt(offset.left) + parseInt(width);
			margin_right = parseInt(window_width) - sumTableLeft;
			
			# Определяем отступ от верхнего края экрана
			margin_top = parseInt(offset.top)
			
			margin_left_right = 
				"margin-left": offset.left + "px"
				"margin-right": margin_right + "px"
				
			# сумма высоты браузера и скроллинга
			windowScroll = window_height + html.scrollTop
				
			if bowser.chrome or bowser.safari
				windowScroll = window_height + body.scrollTop
				
			# проверка когда можно включать фиксированный скроллинг 
			if sumTable <= windowScroll or windowScroll < margin_top + 40
				scrollBarPanel.css margin_notactive
				block_floating_scrolls.removeClass "active"
			else 
				scrollBarPanel.css margin_left_right
				block_floating_scrolls.addClass "active"
			
		#регуилрование показа боковых теней
		adjustSideShadows = () ->
			setTimeout ->
					display = scrollBarPanel.css "display"
					if display == "none" 
						shadow_right.removeClass "shadow_right"
						shadow_left.removeClass "shadow_left"
						block.parent().width("auto")
					else if display == "block"
						shadow_right.addClass "shadow_right"
				, 100		

		#общий метод корреции
		adjustScroll = () ->
			#console.log "adjustScroll"
			do adjustScrollPosition
			do adjustSideShadows

		#выполняем коррекцию при изменении размера окна и вертикальном скроллировании
		wnd.resize adjustScroll
		wnd.scroll adjustScroll

		$(document).bind 'adjust-floating-scrolls', () -> adjustScroll()

		#запускаем первичную коррекцию
		adjustScroll()

	#метод сканирования таблиц на предмет необходимости горизонтального скроллирования
	scanTables = ->
		#console.log "scan-wide-tables"
		$("table.table")
			.filter "table:not(.floating-scrolls)"
			.each (index, element) ->
				table = $(element)
				parent = table.parent()
				factWidth = table.prop "clientWidth"
				availWidth = parent.prop "clientWidth"
				#если ширина таблицы больше ширины контейнера больше
				if factWidth > availWidth
					baseInitScrollableBlock table
					parent.css("overflow-x", "")

		$(document).trigger("scan-wide-tables")

	init: () ->
		#console.log "floatingScroll init"
		
		#ищем все потенциально широкие таблицы
		tables = $("table.table")
		
		#выполняем сканирование при изменении размеров окна
		wnd.resize scanTables

		do scanTables
		#при открытии диалогов - ищем широкие таблицы повторно
		$(document).bind 'dialog-opened', () -> setTimeout scanTables, 200
		
	initScrollableBlock: baseInitScrollableBlock
	scanTables: scanTables

$(document).ready () ->
	do floatingScroll.init
	