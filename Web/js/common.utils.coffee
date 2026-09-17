str2lngEx = (el) ->
	sVal = trimStr(el.value)
	if sVal isnt ''
		nVal = parseInt(sVal)
		if not isNaN(nVal)
			sVal = nVal.toString()
			el.value = sVal
		nVal
	else
		el.value = sVal
		sVal

trimStr = ( strStr ) -> $.trim(strStr)

str2lng = (strValue) ->
	strValue = trimStr(strValue)
	
	i = 0
	i++ while i < strValue.length && strValue.charAt(i) is '0'
	j=i
	j++ while j < strValue.length && '0' <= strValue.charAt(j) && strValue.charAt(j) <= '9'
	
	if i < strValue.length
		return (if j < strValue.length then Number.NaN else parseInt(strValue.substring(i,j),10))
	else
		return 0
		
strCheckIsNull = (string) ->
	if string is undefined or !string? 
		" "
	else
		string

getItemValue = (list) -> if list.value isnt null then list.value else list.options[list.selectedIndex].value
		
getListValue = (list) -> list.options[list.selectedIndex].value
	
getListText = (list) -> list.options[list.selectedIndex].text

do () ->
	entityMap =
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': '&quot;',
		"'": '&#39;',
		"/": '&#x2F;'

	if 'escapeHTML' not in String.prototype
		String::escapeHTML = -> 
			this.replace /[<>"'\/]|&(?!nbsp;)/g, (s) -> 
				entityMap[s]
				
if 'format' not in String.prototype
	String::format = (replaces) -> 
		str = this
		for key, replaceStr of replaces
			str = str.replace("_" + key + "_", replaceStr)
		return str

if 'normalizeFileName' not in String.prototype
	String::normalizeFileName = -> 
		name = this.replace /["]/g, "'"
		name.replace /[\/:*?<>|+/]/g, ""

# https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
if 'repeat' not in String.prototype
	String::repeat = (count) -> 
		if(this == null)
			throw new TypeError('can\'t convert ' + this + ' to object')

		str = '' + this
		if(count != count)
			count = 0
		if (count < 0) 
			throw new RangeError('repeat count must be non-negative')
		if (count == Infinity)
			throw new RangeError('repeat count must be less than infinity')

		count = Math.floor(count);
		if (str.length == 0 || count == 0)
		  return ''

		# Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
		# соптимизировать главную часть функции. Впрочем, большинство современных (на август
		# 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:
		if (str.length * count >= 1 << 28)
			throw new RangeError('repeat count must not overflow maximum string size')

		rpt = ''
		while(1)
			if ((count & 1) == 1)
				rpt += str
			count >>>= 1
			if(count == 0)
				break
			str += str
		
		return rpt