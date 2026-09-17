# CoffeeScript
$(document).ready(->
	CalculateOSH() if typeof CalculateOSH is 'function'
	$(form).rememberState() for form in document.forms
)

(($) ->
	#запоминает значения
	$.fn.rememberState = ->
		$('input:not([type=hidden]), select, textarea, .text-data', this).each (i, elem) ->
			if elem.type is "radio" or elem.type is "checkbox" 
				value = elem.checked
			else if $(elem).hasClass("text-data")
				value = $(elem).text()
			else 
				value = $(elem).val()
			$(elem).data("storedState", value)
			
			elem.wasChanged = ->
				if this.type is "radio" or this.type is "checkbox" 
					curValue = this.checked
				else if $(this).hasClass("text-data")
					curValue = $(this).text()
				else 
					curValue = $(this).val()
				
				if curValue is $(this).data("storedState") then false else true
	
	#сбрасывает значения параметров
	$.fn.resetState = ->
		$('input:not([type=hidden]), select, textarea, .text-data', this).each((i, elem) ->
			return if $(elem).is(':disabled')
			savedValue = $(elem).data("storedState")
			if elem.type is "radio" or elem.type is "checkbox"
				$(elem).prop('checked', savedValue)
			else if $(elem).hasClass("text-data")
				$(elem).text(savedValue)
			else
				curValue = $(elem).val()
				if curValue isnt savedValue
					$(elem).val(savedValue).change()
		)
		#if typeof this.validate is "function"
		#	this.validate()
	return
)(jQuery)

resetScreen = (formName) ->
	form = document.forms[formName]
	$(form).resetState()
	@dataWereChanged = false
	alert(language.Generic.Common.kResetChanges)