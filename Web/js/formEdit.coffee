do () ->
	$(document).ready ()->
		wnd = $(window)
		form = $(".form-edit")
		if form.length != 1
			return
		
		buttonsPanel = $(".buttons-panel")
		
		formGroup = form.find('.form-group:first')
		if formGroup.closest(".panel-body").length > 0
			return
		formGroupClone = formGroup.clone()
		#удаляем лейбл
		formGroupClone.find('label.control-label').empty().addClass("hidden-sm").addClass("hidden-xs")
		#переносим туда кнопочную панель
		buttonsPanel.detach()
		formGroupClone.find('div:first').empty().append buttonsPanel
		#клон форм-группы добавляем на страницу
		formGroupClone.insertBefore formGroup
