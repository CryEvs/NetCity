# CoffeeScript
importHandler = (params) ->
	getLetterCount = (str, letter) ->
		count = 0
		position = -1
		
		while true
			position = str.indexOf(letter, position + 1)
			
			if position is -1 then break
			count++
		
		return count

	_dialog = null
	$(document).trigger('showProcessing')
	
	data = {}
	if typeof params.data isnt 'undefined' then data = params.data

	separatorCnt		= 0 #счетчик разделителей
	allLinesCnt			= 0 #количество строк в файле импорта
	importRecordCnt		= 0
	existErrors			= false
	errText				= ""
	
	currentPart = ""
	currentLine = 0
	jsSubmit(
		action: params.importUrl,
		streamed: true,
		data: data
		dataType: 'html',
		onStreamRead: (streamPart) ->
			if existErrors then return

			# обработка ошибок при импорте
			startText = streamPart.indexOf(String.fromCharCode(2))

			if startText isnt -1
				endText = streamPart.indexOf(String.fromCharCode(2), startText + 1)

				errText = streamPart.substring(startText + 1, endText)
				existErrors = true
				return

			position = 0
			exist = true

			while exist
				newPos = streamPart.indexOf(String.fromCharCode(1), position)

				if newPos == -1
					exist = false

					if separatorCnt == 1
						#обработка прогресса выполнения.
						appendix = streamPart.substring position
						if appendix.length == 0
							return
						currentPart += appendix

						arr = currentPart.trim().split(' ')

						if arr.length < 3
							#дальше накапливаем строку, до появления как минимум 3-ех элементов в массиве
							return

						#получаем предпоследний элемент прогресса. (поскольку "хвост" мог прийти не до конца)
						element = arr[arr.length - 2]
						#оставляем накопленный "хвост" после текущего прогресса
						currentPart = currentPart.substring(currentPart.indexOf(element) + element.length)

						line = parseInt(element)
						if line < currentLine
							return

						currentLine = line
						percent = Math.round((currentLine / allLinesCnt) * 100)

						content = '<div><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" style="width: ' + percent + '%">' + currentLine + ' / ' + allLinesCnt + '</div></div></div>'
						_dialog.setMessage(content)
				else
					currentPart = streamPart.substring(position, newPos)

					# если первый разделитель
					if separatorCnt is 0
						#получаем сколько всего строк в файле
						allLinesCnt = parseInt(currentPart)
						
						$(document).trigger('closeProcessing')
						_dialog = $.show.dialog(
							title: language.Generic.Common.kWait,
							message: language.Generic.Curriculum.kPleaseWait,
							closable: false,
							closeByBackdrop: false,
							closeByKeyboard: false
						)
					else if separatorCnt is 1
						content = '<div><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" style="width: 100%">' + allLinesCnt + ' / ' + allLinesCnt + '</div></div></div>'
						_dialog.setMessage(content)
					else if separatorCnt is 2
						importRecordCnt = parseInt(currentPart)

					currentPart = ""
					position = newPos + 1
					separatorCnt++
			return
		,
		onComplete: (xhr) ->
			if existErrors
				if _dialog
					_dialog.close()
				$.show.error(errText)
			else 
				if typeof params.customComplete isnt 'undefined' then params.customComplete _dialog
				
				_dialog.setClosable(true)
				_dialog.setCloseByBackdrop(true)
				_dialog.setCloseByKeyboard(true)

				delimiterCount = getLetterCount(xhr.responseText, String.fromCharCode(1))
				
				if delimiterCount < 2
					position = xhr.responseText.indexOf('\n')
					res = xhr.responseText.substring(position + 1)
					$.show.error(res)
					_dialog.close()
					return
				
				pos = xhr.responseText.lastIndexOf(String.fromCharCode(1))

				res = xhr.responseText.substring(pos)
				res = '<div style="font-size: 13px; overflow: auto; max-height: 500px; padding: 0 5px 0 5px;">' + res + '</div>'

				_dialog.setMessage(res)

				arrButtons = [{
						label: language.Generic.Buttons.kCancel,
						action: (dialog) -> dialog.close()
					}]
					
				if importRecordCnt > 0
					arrButtons.unshift {
						label: language.Generic.Import.kBeginImport,
						cssClass: 'btn-primary',
						action: () -> do params.beginImport
					}
					
				_dialog.setButtons arrButtons
				do _dialog.$modalFooter.show
	)
	
	return