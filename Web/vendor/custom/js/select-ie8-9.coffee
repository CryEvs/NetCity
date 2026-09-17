if bowser.msie and (bowser.version is '9.0' or bowser.version is '8.0' )
	$(document).ready () ->
		selectAdd = $("select").parent()
		$(selectAdd).each () ->
			$(this).children("select").wrap("<div class='select-main'></div>" )
			$(this).children(".select-main").prepend('<p>')
		$('select').each ()  ->
			$(this).siblings('p').text( $(this).children('option:selected').text())
		$('select').change ()  ->
			$(this).siblings('p').text( $(this).children('option:selected').text())   