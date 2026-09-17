do ->
	$(document).ready () ->
		#глобальные переменные
		wnd_size = $(window)
		#контрольная точка ширины -  показа адаптивного меню
		breakPointWidth = 664

		btn_menu = $(".btn-menu")
		btn_menu.on "click", ->
			if $(window).width() < breakPointWidth
				if $(".navbar-inner").is(":hidden")
					$(".navbar-inner").slideDown "slow"
				else
					$(".navbar-inner").slideUp "slow"

		link_menu = $(".nav > .dropdown > a")
		link_menu.on "click", (e) ->
			e.stopPropagation()
			if $(window).width() < breakPointWidth
				element_li = $(this).parent('li')
				if element_li.hasClass('open-menu') 
					element_li.removeClass('open-menu')
					element_li.find('li').removeClass('open-menu')
					element_li.find('ul').slideUp()
				else 
					element_li.addClass('open-menu')
					element_li.children('ul').slideDown()
					element_li.siblings('li').children('ul').slideUp()
					element_li.siblings('li').removeClass('open-menu')
					element_li.siblings('li').find('li').removeClass('open-menu')
					element_li.siblings('li').find('ul').slideUp()

		autoOpenMenuMode = true
		menuItems = $(".navbar-nav > li")
		menuItems.on "mouseleave", (evt) -> $(evt.currentTarget).removeClass "open"
		menuItems.on "mouseover", (evt) -> 
			if autoOpenMenuMode and $(window).width() > breakPointWidth
				$(evt.currentTarget).addClass("open")
		menuItems.on "click", () -> 
			#autoOpenMenuMode = true
		$(".navbar-nav").on "mouseleave", (evt) -> #autoOpenMenuMode = false
		
		removeOpenMenu = ->
			if wnd_size.width() > breakPointWidth
				menu_Items = $(".navbar-nav > li")
				if menu_Items.hasClass('open-menu') 
					menu_Items.children('.open-menu ul').css("display","no");
				menu_Items.removeClass("open-menu")
		
		wnd_size.resize removeOpenMenu
		