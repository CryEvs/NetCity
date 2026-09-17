<% ' © 2007-2013 IRTech. All rights reserved.

Const kErrOpenLocalPath = "<br/>Это локальный путь, скопируйте его и откройте через проводник"
Dim reg_HttpFtp, reg_Email, reg_File

Function DB2HTML_NOTRIM( byVal theText )
	Dim regEx
	If IsDull( theText ) Then DB2HTML = "&nbsp;" : Exit Function
	Set regEx = New RegExp
	regEx.Global = True
	regEx.Pattern = "&"
	theText = regEx.Replace(theText, "&amp;")
	regEx.Pattern = "<"
	theText = regEx.Replace(theText, "&lt;")
	regEx.Pattern = ">"
	DB2HTML_NOTRIM = regEx.Replace(theText, "&gt;")
End Function

Function isLocalPath(strLocal)
	isLocalPath = Mid(strLocal, 2, 1) = ":" or Mid(strLocal, 1, 5) = "file:" ' or Instr(strLocal," ") > 0
End Function

Function isNetPath(strLocal)
	Dim substr
	substr = Mid(strLocal, 1, 2)
	isNetPath = substr = "//" or substr = "\\"
End Function

Function FixGeckoFile( strLocal )
	FixGeckoFile = "JavaScript:windowOpen({ url: ""file:///" & Replace( strLocal, "\", "/") & """, name: ""_blank"", specs: ""status=yes,toolbar=yes,menubar=yes,location=yes,scrollbars=yes,resizable=yes,directories=yes,width=750,height=560"" });"
End Function

Function FixFile( strLocal )
	'If not isGecko Then
	If isLocalPath(strLocal) Then
		FixFile = "#" ' FixGeckoFile( strLocal )
	ElseIf isNetPath(strLocal) Then
		If not isIE Then
			FixFile = "#" 'If isGecko Then FixGeckoFile( strLocal )
		Else
			FixFile = "file:" & Replace( strLocal, "\", "/")
		End If
	Else
		FixFile = DB2HTML( strLocal )
	End If
End Function

Function Any( symbols )
	Any = "[" & symbols & "]?"
End Function
Function Some( symbols )
	Some = "[" & symbols & "]+"
End Function

Function init_URL_Reg()
	Dim patHttpFtp, patEmail, patFileFolderName, patComputerName,patIP
	Dim hex4, ipv6, ipv6ipv4, alnum, hostname, port
	Dim patBraces, patOpenBraces, patCloseBraces, patOpenQ, patCloseQ, patEmailName, patQuot, patPunct
	Dim patIntra1, patFile1, patFull, pthD, restrictedSyms, patNotRestricted, patEnabledSyms, patQuery, patQueryItem
	restrictedSyms = "\s*|:?\\/""<>"
	patNotRestricted = "[^" & restrictedSyms & "]+(\s+[^" & restrictedSyms & "]+)*"
	patFileFolderName = patNotRestricted & "(\." & patNotRestricted & ")?"
	patIP = "(25[0-5]|2[0-4]\d|[01]?\d\d?)"
	patIP = patIP & "(\." & patIP & "){3}"
	hex4 ="[a-zA-Z\d]{1,4}"
	ipv6 = "(" & hex4 & ":)*" & hex4
	ipv6ipv4 = ipv6 & "(:" & patIP & ")?"
	ipv6 = "(" & ipv6ipv4 & "|(" & ipv6 & ")?::(" & ipv6ipv4 & ")?)"
	patOpenBraces = "({\[<"
	patCloseBraces = ")}\]>"
	patBraces = patCloseBraces & patOpenBraces
	patPunct = ".,;:"
	patComputerName = "[^~!@#$%&=+_'" & patPunct & patBraces & restrictedSyms & "]+" 
	patOpenQ = "'""«" ' open quote  круглые кавычки портят обработку некоторых русских символов: "^“ ‘"
	patCloseQ = "'""»" ' close quote [^” ’]
	'patQuot = "(\""|&(quot|lt|gt);)"
	patQuot = "(\"")"
	pthD = "[\\|/]" ' path delimiter
	
	alnum = "а-яЁёА-Я\w" ' буквы и цифры
	patEnabledSyms = Some("!~*'()%" & alnum & patPunct & "+#\-")
	hostname = Some(alnum) & "(--?" & Some(alnum) & ")*"
	hostname = "(" & hostname & "[.])+" & Some("а-яЁёА-Яa-zA-Z") '[.]? - портит картину если пунктуация в конце
	patQueryItem = patEnabledSyms & "(=(" & patEnabledSyms & ")?)?" 
	patQuery = "/?(\?" & patQueryItem & "([&/]" & patQueryItem & ")*)?"
	port = "(6553[0-5]|655[0-2]\d|65[0-4]\d\d|6[0-4]\d\d\d|[0-5]?\d{1,4})"
	'patHttpFtp = Any( patOpenBraces & patOpenQ ) & patHttpFtp & Any( patCloseBraces & patCloseQ ) & Any( patPunct ) ' not work yet
	patHttpFtp  = "\b(((ftp|http)s?://|www\.)(" & patIP & "|\[" & ipv6 &"\]|" & hostname & "|" & patComputerName & ")(:"&port&")?([.]?/(" & patEnabledSyms & "|/)*)?" & patQuery & ")" '"(#[^ ]+)?)"
	'patEmail	= "(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@(\["&patIP&"\]|(([\w-]+\.)+[a-zA-Z]{2,}))" ' wrong ""
	patEmailName = patBraces & restrictedSyms & "&%@" & patPunct & patOpenQ & patCloseQ
	patEmailName = "[^" & patEmailName & "]+"
	patEmailName = patEmailName & "(\." & patEmailName & ")*" ' email может иметь точки
	patEmailName = "(" & patQuot & patEmailName  & patQuot & "|" & patEmailName & ")" ' имя может быть в кавычках
	' убрал \b портят обработку некоторых русских символов
	patEmail	=  patEmailName & "@(\[(" & patIP &"|"&ipv6&")\]|" & hostname & ")" ' домен может быть вида: "[217.79.22.210]"
	patFull = "(" & pthD &  patFileFolderName & ")+"
	patIntra1	= pthD & "{2}(" & patIP & "|\[" & ipv6 & "\]|" & patComputerName & ")"
	patFile1	= "(file:" & pthD &"*)?\b[a-zA-Z][:|]"
	Set reg_HttpFtp = New RegExp
	With reg_HttpFtp
		.Pattern = patHttpFtp
		.IgnoreCase = True
		.Global = True
	End With
	Set reg_Email = New RegExp
	With reg_Email
		.Pattern = "(" & patEmail & ")"
		'.Pattern = patEmail
		.IgnoreCase = True
		.Global = True
	End With
	Set reg_File = New RegExp
	With reg_File
		.Pattern = "(" & patFile1 & "|"& patIntra1 & ")(" & patFull & ")?"
		.IgnoreCase = True
		.Global = True
	End With
End Function

Function RemoveTail( strValue, symbol )
	RemoveTail = strValue
	if InstrRev(strValue,symbol) = Len( strValue ) Then RemoveTail = Left(strValue, Len( strValue )-1)
End Function

Function HTMLEncode_URL ( strInput )
	Dim nPos, nPosOld, isEmail, sym
	Dim strOutput, strTrans, strValue, strHref, strAHtml
	Dim objMatch, matched
	isEmail = False
	If IsEmpty(reg_HttpFtp) Then init_URL_Reg
	
	Set objMatch = reg_Email.Execute( strInput )
	If objMatch.Count <= 0 Then
		Set objMatch = reg_HttpFtp.Execute( strInput )
		If objMatch.Count <= 0 Then
			Set objMatch = reg_File.Execute( strInput )
		End If
	Else
		isEmail = True
	End If
	If objMatch.Count > 0 Then
		nPos = 1
		nPosOld = 1
		strOutput = ""
		For Each matched In objMatch
			strValue = matched.Value
			If matched.FirstIndex > 0 Then strOutput = strOutput & DB2HTML(Mid(strInput, nPos, matched.FirstIndex + 1 - nPosOld ))
			' длину для Mid вычисляем пока ещё не исключили знаки препинания и скобки в конце предыдущего URL
			nPosOld = matched.FirstIndex + Len( strValue ) + 1
			' игнорируем знаки препинания и скобки в конце текущего URL:
			If Len( strValue ) > 2 Then strValue = RemoveTail( strValue, ":" ) ' но оставляем двоеточие, если это путь к диску
			For each sym in Array(".", ";", ",", "!", "?", ")") ' важно ")" - должна быть последней
				strValue = RemoveTail( strValue, sym )
			Next
			' Mid отрисует знаки препинания и скобки, если были в конце текущего URL
			nPos = matched.FirstIndex + Len( strValue ) + 1
			
			strAHtml = DB2HTML(strValue)
			If isEmail Then
				' чтобы обработались кавычки берём strAHtml, вместо strValue
				' чтобы не было автовыхода из системы в некоторых браузерах открываем новое окно
				strTrans = "<a href=""mailto:" & strAHtml & """ target=""_blank"" >" & strValue & "</a>"
			Else
				If Left(strValue, 4) = "www." Then
					strHref = "http://" & strValue
				Else
					strHref = FixFile(strValue) 
				End If
				strHref = strHref & IIF(strHref="#",""" onclick=""alert(this.innerHTML + '" & kErrOpenLocalPath & "')"" ",""" target=""_blank"" ")
				strTrans = "<a href=""" & strHref & ">" & strAHtml & "</a>"
			End If
			strOutput = strOutput & strTrans
		Next
		If nPos <= Len( strInput ) Then strOutput = strOutput & DB2HTML(Right( strInput, Len( strInput ) + 1 - nPos))
	Else
		strOutput = DB2HTML( strInput )
	End If
	HTMLEncode_URL = strOutput
End Function

Function DB2HTML_URL( strDB )
	If Not bIsDebug Then On Error Resume Next
	Dim strNormStr
	If IsDull(strDB) Then DB2HTML_URL = "&nbsp;" : Exit Function

	strNormStr = Trim(HTMLEncode_URL(strDB))
	If IsDull(strNormStr) Then DB2HTML_URL = "&nbsp;" : Exit Function
	DB2HTML_URL = strNormStr
End Function

Function DB2HTML_BR_URL( strDB )
	If Not bIsDebug Then On Error Resume Next
	Dim strNormStr,i,j
	If IsNull( strDB ) Then DB2HTML_BR_URL = "&nbsp;" : Exit Function
	i = 1
	strNormStr = ""
	Do 
		j = InStr(i,strDB,CHR(10))
		If j <= 0 Then Exit Do
		strNormStr = strNormStr & HTMLEncode_URL(Mid(strDB,i,j-i)) & "<BR>"
		i = j+1
	Loop
	strNormStr = Trim(strNormStr & HTMLEncode_URL(Right( strDB, Len(strDB)-i+1 )))
	strNormStr = Replace(strNormStr, "  ", " &nbsp;")
	strNormStr = Replace(strNormStr, "&nbsp; ", "&nbsp;&nbsp;")
	If strNormStr = "" Then DB2HTML_BR_URL = "&nbsp;" Else DB2HTML_BR_URL = strNormStr
End Function
%>
