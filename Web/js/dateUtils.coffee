dateUtils = do () ->
	#настройки по умолчанию
	options =
		firstYear: parseInt(new Date().getFullYear().toString().substr(-2)) + 15
		nsFormat: "d" + String.fromCharCode(1) + "mm" + String.fromCharCode(1) + "yy" + String.fromCharCode(1) + "."
		nsFormatTime: "h" + String.fromCharCode(1) + "mm" + String.fromCharCode(1) + ":" + String.fromCharCode(1)
		timezoneStamp: "04:00"
		dateFormat: 
			format: "d.mm.yy"
			delimeter: '.'
		timeFormat:
			format: "h.mm.ss"
			delimeter: ':'

	#функция парсинга формата рег. нстроек в NetCity
	parseDateFormat = (nsDateFormat) ->
		if nsDateFormat
			formatArr = nsDateFormat.split( String.fromCharCode(1) )
			delimeter = formatArr[3]
			formatArr.pop()
			return {
				format: formatArr.join(delimeter),
				delimeter: delimeter
			}
		else
			return options.dateFormat
		
	
	parseTimeFormat = (nsTimeFormat) ->
		if nsTimeFormat
			formatArr = nsTimeFormat.split( String.fromCharCode(1) )
			delimeter = formatArr[2]
			formatArr.pop()
			return {
				format: formatArr.join(delimeter),
				delimeter: delimeter
			}
		else
			return options.timeFormat
	
	
	#инициализация
	init : (nsDateFormat, nsTimeFormat) ->
		tzOffset = -(new Date()).getTimezoneOffset() / 60
		options.timezoneStamp = (if tzOffset >= 10 then "" else "0") + tzOffset + ":00"

		if typeof nsDateFormat isnt "undefined"
			options.nsFormat = nsDateFormat
			options.dateFormat = parseDateFormat nsDateFormat
		if typeof nsTimeFormat isnt "undefined"
			options.nsFormatTime = nsTimeFormat
			options.timeFormat = parseDateFormat nsTimeFormat
	
	#краткий вариант конвертации строки в дату. с учетом текущих рег. настроек
	str2date : ( strDate ) ->
		str2datef strDate, options.nsFormat, String.fromCharCode(1), options.firstYear

	#краткий вариант конвертации строки в дату. с учетом текущих рег. настроек (время)
	str2time : ( strTime) ->
		strTwoTimef strTime, options.nsFormatTime

	#краткий вариант конвертации даты в строку. с учетом текущих рег. настроек
	date2str : ( dtDate ) ->
		date2strf dtDate, options.nsFormat

	#краткий вариант конвертации даты в строку. Передаем сюда формат даты
	date2strfrm : ( dtDate, dateFormat ) ->
		date2strf dtDate, dateFormat
		
	#краткий вариант конвертации время в строку. с учетом текущих рег. настроек
	time2str : ( dtTime ) ->
		timeTwoStrf dtTime, options.nsFormatTime
		
	#краткий вариант конвертации время в строку.
	time2Str_ss : ( dtTime ) ->
		time2Str_ss_f dtTime, options.nsFormatTime
		
	#информация о текущих рег. настроках (дата)
	getDateFormat: () ->
		options.dateFormat
		
	#информация о текущих рег. настроках (время)
	getTimeFormat: () ->
		options.timeFormat
		
	getLocalDateTime: (iso) ->
		return new Date(iso + "+" + options.timezoneStamp)
	
	getUTCDate: (year, month, day) ->
		return new Date(Date.UTC(year, month, day))

	#представляет локальную дату в UTC
	#т.е. добавляется разница между локальным ч.п. и utc
	asUTC: (date) ->
		newDate = new Date(date.getTime())
		newDate.setHours(date.getHours() - date.getTimezoneOffset() / 60)
		return newDate
	
	# loginTime - string (пример: 2016-06-28T13:46:41) серверное время в UTC формате
	castServerDateTimeToClient: (loginTime) ->
		time = moment(loginTime).toDate()
		# часовой пояс сервера
		serverTimeZone = appContext.serverTimeZone

		# часовой пояс клиента
		clientTimeZone = (new Date()).getTimezoneOffset() / -60 # в минутах, пример GMT +0400 = -240 минут
		
		# разница между часовыми поясами в часах
		difference = clientTimeZone - serverTimeZone

		time.setTime(time.getTime() + difference * 3600000)

		return time
	
	# Преобразовать в дату UTC без времени (часовой пояс не вычетается, а игнорируется так, чтобы на серверной стороне время объекта DateTime было 0:00:00)
	# Дата Wed Jul 26 2017 01:32:36 GMT+0400 будет преобразована в Wed Jul 26 2017 04:00:00 GMT+0400, 
	#	что отличается от метода toUTCString, который возвращает Tue, 25 Jul 2017 21:32:36 GMT
	# dateTime строка или объект совместимые с js объектом Date
	asUTCDate: (dateTime) ->
		date = new Date(dateTime)
		year = date.getFullYear()
		month = date.getMonth()
		day = date.getDate()
		
		return new Date Date.UTC year, month, day


str2datef = ( strDate, datFormat, deli, firstYear ) ->
	formatArr = datFormat.split( deli )
	deli = formatArr[3]
	dateArr = strDate.split( deli )
	
	if dateArr.length isnt 3 then return null
	
	for i in [0..2] by 1
		if formatArr[i] is "m" or formatArr[i] is "mm"
			if dateArr[i]
				mo = str2lng( dateArr[i] )
				if isNaN(mo) or mo <= 0 or mo > 12 then return null
			else return null
		else if formatArr[i] is "d" or formatArr[i] is "dd"
			if dateArr[i]
				da = str2lng( dateArr[i] )
				if isNaN(da) or	da <= 0 or da > 31 then return null
			else return null
		else if formatArr[i] is "yy" or formatArr[i] is "yyyy"
			if dateArr[i]
				ye = str2lng( dateArr[i] )
				if ye < 100
					if ye < firstYear
						ye = 2000 + ye 
					else 
						ye = 1900 + ye
				else if (ye >= 100 && ye < 1000) || ye > 9999
					ye = NaN
				if isNaN(ye) then return null
			else 
				return null
	if da > 30 and ( mo is 4 or mo is 6 or mo is 9 or mo is 11 )
		return null
	else
		if mo is 2 and da > (if ye % 4 is 0 and ye % 100 isnt 0 or ye % 400 is 0 then res = 29 else res = 28)
			return null
	#с этим вариантом искуственно добавляются часы. например 01.01.2017 превращается в 01-01-2017T04:00GMT+4
	#однако при передаче на сервер штатная сериализация приводит дату к UTC - и убирает эти часы.
	return new Date(Date.UTC(ye, mo-1, da))
	#в этом же варианте при передаче на сервер от даты отнимались часы - что портило дату на сервере
	#return new Date(ye, mo-1, da)
	
date2strf = (dt, datFormat ) ->
	strRes = ""
	formatArr = datFormat.split( String.fromCharCode(1) )
	deli = formatArr[3]

	ye = dt.getFullYear()
	mo = dt.getMonth() + 1
	da = dt.getDate()
	
	for i in [0..2] by 1
		if formatArr[i] == "m"
			strRes += mo.toString() + deli
		else if formatArr[i] == "mm"
			strRes += (if mo < 10 then "0" else "") + mo.toString() + deli
		else if formatArr[i] == "d"
			strRes += da.toString() + deli
		else if formatArr[i] == "dd"
			strRes +=  (if da < 10 then "0" else "") + da.toString() + deli
		else if formatArr[i] == "yy"
			ye = ye % 100;
			strRes +=  (if ye < 10 then "0" else "") + ye.toString() + deli
		else if formatArr[i] == "yyyy"
			strRes += ye.toString() + deli
	strRes.slice(0,-1)
	
timeTwoStrf = (dtTime, theFormat ) ->
	strRes = ""
	dtTime = new Date(0, 0) if dtTime is null
	formatArr = theFormat.split( String.fromCharCode(1) )
	
	deli = formatArr[2]
	
	ho = dtTime.getHours()
	min = dtTime.getMinutes()
	sec = dtTime.getSeconds()
	
	d3 = formatArr[3]
	
	for i in [0..3] by 1
		if formatArr[i].charAt(0) is "h"
			if d3 isnt ""
				if ho is 12
					d3 = formatArr[4]
				else
					if ho > 12
						ho = ho - 12
						d3 = formatArr[4]
					else
						if ho = 0
							ho = 12
			
			if formatArr[i] is "hh"
				strRes += (if ho < 10 then "0" else "") + ho.toString() + deli
			else
				strRes += ho.toString() + deli
		else if formatArr[i] is "mm"
			strRes += (if min < 10 then "0" else "") + min.toString() + deli
		else if formatArr[i] is "ss"
			strRes += (if sec < 10 then "0" else "") + sec.toString() + deli
	
	strRes.slice(0,-1)
	
time2Str_ss_f = ( dtTime, theFormat ) ->
	if dtTime is null 
		return "00:00:00"
	
	timeStr = timeTwoStrf dtTime, theFormat
	
	formatArr = theFormat.split( String.fromCharCode(1) )
	deli = formatArr[2]
	
	sec = dtTime.getSeconds()
	
	res = timeStr + deli + (if sec < 10 then "0" else "") + sec.toString()
	
strTwoTimef = ( strTime, theFormat ) ->
	formatArr = theFormat.split( String.fromCharCode(1) )
	
	deli = formatArr[2]
	timeArr = strTime.split( deli )
	
	if timeArr.length isnt 2 or not 3 then return null
	
	for i in [0..2] by 1
		if formatArr[i].charAt(0) is "h"
			ho = parseInt(timeArr[i])
		else if formatArr[i].charAt(0) is "m"
			mi = parseInt(timeArr[i])
		else if formatArr[i].charAt(0) is "s"
			sec = parseInt(timeArr[i])
	
	if sec is undefined then sec = 0
	if formatArr[3] = timeArr[4] then ho = ho + 12
	res = new Date(0, 0, 0, ho, mi, sec)
			
do () ->
	$(document).ready ()->
		if typeof appContext isnt "undefined"
			dateUtils.init appContext.dateFormat, appContext.timeFormat




