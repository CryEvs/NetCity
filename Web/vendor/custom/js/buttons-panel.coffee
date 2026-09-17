class ButtonsPanelCtrl
	wnd = $(window)
	buttonsPanel = null
	buttonsPanelTopOffset = 0

	fixedButtonsPanel = null
	fixedExtraButtons = null

	rightButtonsCnt = 0
	actionsWidth = 0

	minScreenWidth = 600

	MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
	observers = []

	addActionsButtons = (_buttonsPanel) ->
		rightButtonsPanel = _buttonsPanel.find(".buttons-panel-right").filter(":not(.no-actions)")

		$(".buttons-panel-adaptive").remove()

		adaptiveButtonsPanel = $("<div></div>")
			.addClass("buttons-panel-adaptive")
			.addClass("btn-group")
			.css("float", "right")
			#.css("position", "relative")
			.hide()
			.appendTo _buttonsPanel
			
		adaptiveButtonsPanel
			.css("margin-right", "0")
			.css("right", "0")
			
		buttonDropDown = $("<button type=\"button\" />")
			.addClass("btn")
			.addClass("dropdown-toggle")
			.attr("data-toggle", "dropdown")
			.attr("aria-expanded", "false")
			.append("<span class=\"glyphicon glyphicon-menu-hamburger\" />")
			.append(" <span id=\"action\">Действия</span> ")
			.append("<span class=\"caret\" />")
		
		adaptiveButtonsPanel.append buttonDropDown

		adaptivePanelMenuContainer = $("<ul></ul>")
										.addClass("dropdown-menu buttons-panel-right buttons-panel-adaptive-wrapper pull-right")
										.attr("role", "menu")
										.appendTo adaptiveButtonsPanel
		rightButtons = rightButtonsPanel.filter(":not(.buttons-panel-adaptive-wrapper)").find('button')
		rightButtonsCnt = rightButtons.length

		adaptiveButtons = rightButtons.clone()

		adaptiveButtons.appendTo(adaptivePanelMenuContainer).wrap("<li></li>")

		#делегирование обработчика клика - основным кнопкам
		angularBtns = adaptiveButtons.find("button[ng-click]")
		if angularBtns.length
			angularBtns.each () ->
				cloneBtn = $(this)
				srcBtn = rightButtons.find("button[ng-click='" + cloneBtn.attr("ng-click") + "']")
				cloneBtn.click () -> srcBtn.click()
			
		actionsWidth = adaptiveButtonsPanel.outerWidth()

	cloneButtonsPanel = () ->
		do $('.buttons-panel-fixed').remove

		if not buttonsPanel.is(":visible")
			do window.buttonsPanelCtrl.init

		fixedButtonsPanel = buttonsPanel.clone()

		#ищем доп панели, например когда кнопки слева и кнопки справа расположены в разных панелях
		extraPanel = $(".buttons-panel.extra")
		if extraPanel.length
			#берем кнопки слева из обоих панелей
			leftPanel = fixedButtonsPanel.find(".buttons-panel-left")
			extraLeftPanel = extraPanel.find(".buttons-panel-left")
			if not leftPanel.length
				#если в основной панели кнопок нет - то просто берем из дополнительной
				fixedButtonsPanel.prepend extraLeftPanel.clone()
			else
				#иначе добавляем
				extraLeftPanel.find("button").each () -> leftPanel.append $(this)

		#делегирование обработчика клика - основным кнопкам
		angularBtns = fixedButtonsPanel.find("button[ng-click]")
		if angularBtns.length

			config = { attributes: true }

			getProcessingBody = (selector) -> 
				() -> 
					cloneBtn = $(this)

					buttonPanels = buttonsPanel
					if extraPanel
						buttonPanels = buttonPanels.add extraPanel

					#поиск исходной кнопки
					srcBtn = buttonPanels.find(selector + "[ng-click='" + cloneBtn.attr("ng-click") + "']")

					if srcBtn.length > 1
						srcBtn = buttonPanels.find(selector + "[title='" + cloneBtn.attr("title") + "']")

					if srcBtn.length == 0
						return

					#подписываемся на события изменения атрибутов у исходных кнопок
					observer = new MutationObserver () ->
						cloneBtn.prop "disabled", srcBtn.prop("disabled")

					observers.push observer
					observer.observe srcBtn[0], config

					#используем обработчик нажатия от исходной кнопки
					cloneBtn.click () -> srcBtn.click()
				
			angularBtns.each getProcessingBody("button")

			angularBtnGroups = fixedButtonsPanel.find(".btn-group > .dropdown-menu > li > a")
			angularBtnGroups.each getProcessingBody(".btn-group > .dropdown-menu > li > a")

		upButton = $.uicontrols.button
			icon: "circle-arrow-up"
			label: language.Generic.Buttons.kToUp
			click: -> $('html, body').animate({scrollTop : 0}, 600)
		toUpButtonContainer = $("<div class='buttons-up'></div>").append upButton

		fixedButtonsPanel.prepend toUpButtonContainer
		
		fixedButtonsPanel
			.addClass("buttons-panel-fixed")
			.css({ visibility: "hidden" })
			.appendTo("body")

	getMinWidth = () ->
		scrollWidth = window.innerWidth - document.documentElement.clientWidth # ширина скролла
		minWidth = minScreenWidth - scrollWidth

	fixedButtonPanelHideBySmallScreen = () ->
		minWidth = getMinWidth()

		if fixedButtonsPanel
			if wnd.width() <= minWidth
				fixedButtonsPanel.hide()
			else
				fixedButtonsPanel.show()

	disposeObservers = () ->
		for int, observer of observers
			observer.disconnect()
		observers = []

	fixedButtonPanelHandler = () ->
		minWidth = getMinWidth()

		if buttonsPanelTopOffset == 0
			buttonsPanelTopOffset = if buttonsPanel.length then buttonsPanel.offset().top else 0

		if wnd.scrollTop() > buttonsPanelTopOffset
			if wnd.width() <= minWidth then return

			if fixedButtonsPanel then return 

			do cloneButtonsPanel

			if fixedExtraButtons?.length
				leftFixedPanel = fixedButtonsPanel.find(".buttons-panel-left")
				if not leftFixedPanel.length
					leftFixedPanel = $("<div></div>")
						.addClass("buttons-panel-left")
						.insertAfter fixedButtonsPanel.find(".buttons-up")

				for ind, buttonOpts of fixedExtraButtons 
					leftFixedPanel.append $.uicontrols.button buttonOpts

			#добавление стилей для адаптивной кнопки. почему не в css?
			adaptiveButtonsPanel = fixedButtonsPanel.find(".buttons-panel-adaptive")
				.css("position", "")
				.css("margin-right", "")
				.css("right", "")
				
			adaptiveButtonPanelHandler(fixedButtonsPanel)
			fixedButtonsPanel.css({ visibility: "visible" })

		else if wnd.scrollTop() <= buttonsPanelTopOffset
			if not fixedButtonsPanel then return
		
			fixedButtonsPanel.fadeOut "700", () ->
				fixedButtonsPanel = null
				disposeObservers()
				$(this).remove()
	
	adaptiveButtonPanelHandler = (_buttonsPanel) ->
		if rightButtonsCnt is 0 then return

		leftButtonsPanel		= _buttonsPanel.find(".buttons-panel-left")
		rightButtonsPanel		= _buttonsPanel.find(".buttons-panel-right")
		adaptiveButtonsPanel	= _buttonsPanel.find(".buttons-panel-adaptive")

		if actionsWidth == 0 
			actionsWidth = adaptiveButtonsPanel.outerWidth()
			if actionsWidth is 0 then return
	
		button_up				= _buttonsPanel.find(".buttons-up")
		
		bpWidth				= _buttonsPanel.outerWidth()
		bplWidth			= leftButtonsPanel.outerWidth()
		bprWidth			= rightButtonsPanel.outerWidth()
		
		_actionsSpan = adaptiveButtonsPanel.find("#action")
		
		sumBlocksWidth = bplWidth + bprWidth
		if button_up.length then sumBlocksWidth += button_up.outerWidth()
		
		if wnd.outerWidth() < 700 or sumBlocksWidth >= bpWidth
			if bplWidth + actionsWidth >= bpWidth then _actionsSpan.hide() else _actionsSpan.show()
			
			rightButtonsPanel.hide()
			adaptiveButtonsPanel.show()
			
			adaptiveButtonsPanel.find("ul.dropdown-menu").css("display", "")
		else 
			rightButtonsPanel.show()
			adaptiveButtonsPanel.hide()
		
		# исправление ошибки, появления адаптивной панели, даже если там нет кнопок.
		adaptiveButtonsPanelLength = adaptiveButtonsPanel.has("li").length
		if not adaptiveButtonsPanelLength then adaptiveButtonsPanel.hide()

	init: () ->
		$(".buttons-panel-fixed").hide()
		buttonsPanel = $(".buttons-panel").filter(":not(.no-actions)")
		if buttonsPanel.length > 1
			buttonsPanel = buttonsPanel.filter(":visible")
			if not buttonsPanel.length
				buttonsPanel = $(".buttons-panel").first()
			else
				buttonsPanel = buttonsPanel.first()

		buttonsPanelTopOffset = if buttonsPanel.length then buttonsPanel.offset().top else 0
		addActionsButtons(buttonsPanel)

		if not buttonsPanel then return
	
		scrollTimer = null

		scrollHandler = () ->
			fixedButtonPanelHandler()
			scrollTopBody = $("body").scrollTop()
			if scrollTopBody isnt 0 then $(".buttons-panel-adaptive").removeClass("open")

		wnd.scroll () ->
			if scrollTimer 
				window.clearTimeout scrollTimer
			scrollTimer = window.setTimeout scrollHandler, 50


		wnd.resize () ->
			fixedButtonPanelHideBySmallScreen()
			adaptiveButtonPanelHandler(buttonsPanel)
			if wnd.scrollTop() > buttonsPanelTopOffset then adaptiveButtonPanelHandler(fixedButtonsPanel)
	
		$(document).bind 'pageReady', -> 
			adaptiveButtonPanelHandler(buttonsPanel)
			actionsWidth = buttonsPanel.find(".buttons-panel-adaptive").outerWidth()
		
		adaptiveButtonPanelHandler(buttonsPanel)

	addFixedExtraButtons: (buttons) ->
		fixedExtraButtons = buttons
		

$(document).ready () -> 
	window.buttonsPanelCtrl = new ButtonsPanelCtrl
	do window.buttonsPanelCtrl.init
	return