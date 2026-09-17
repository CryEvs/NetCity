# CoffeeScript

maxContentLength = 20000

sendPartReport = (reportHtml) ->
	promiseArr = new Array()
	length = reportHtml.length
	partIndex = 0
	start = 0
	end = maxContentLength
	maxReportPartsLen = Math.ceil length/maxContentLength

	while start < length
		promiseArr.push(
			do () -> jsSubmit
				action: '/asp/ajax/GetReportParts.asp',
				data:
					"PARTINDEX": partIndex
					"REPORTPART": reportHtml.slice(start, end)
					"REPORTPARTSLEN": maxReportPartsLen
		)

		partIndex = partIndex + 1
		start = end
		end = end + maxContentLength

	promiseArr

submit = (exportData, action, fileName) ->
	if exportData
		length = exportData.length
		if length > maxContentLength
			extDeferred.when( sendPartReport(exportData) ).then( 
				() -> postTo(action, { filename: fileName }, { download: true })
			)
			return

	postTo(action, { exportdata: exportData, filename: fileName }, { download: true })

exportBlobToExcel = (mimeType, action, exportData, fileName) ->
	fileName = fileName.normalizeFileName()
	if bowser.msie > 0
		iframe = document.createElement('iframe')
		iframe.style.display='none'
		document.body.appendChild(iframe)
		doc = iframe.contentDocument || iframe.contentWindow.document
		doc.write( exportData )
		doc.execCommand("SaveAs", true, fileName)
		$(iframe).remove()
	else if bowser.safari or (bowser.opera and not bowser.webkit) or not window.Blob
		submit(exportData, action, fileName)
	else
		blob = new Blob([exportData], {type: mimeType})
		link = document.createElement("a")
		link.download = fileName
		link.style.display='none'
		link.href = window.URL.createObjectURL(blob)
		link = document.body.appendChild(link)
		link.click()
		$(link).remove()