<!-- #INCLUDE FILE="importStudExt_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim aAttrib, strTmp, arrTmp, strPeriod, nodeTmp, strMaleGenderID, arrAddr
Dim strXML, xmlDoc, aNode
Dim nodeStudents, nodeSudClass, nodeClasses, nodeList, dictLang

Sub ProcessFile()
	strXML = requestData("file")
	Set xmlDoc = CreateObject("msxml2.DOMDocument")
	xmlDoc.async = False
	xmlDoc.loadXML(strXML)
	On Error resume next

	Set dictLang = Server.CreateObject( "NetCity.Storage" )
	Set nodeTmp = xmlDoc.documentElement.selectSingleNode("//ОбъектыМДТипа_Справочник/Справочник_Языки")
	If Not(nodeTmp Is Nothing) Then
		Set nodeList = nodeTmp.selectNodes("ЭлСправочника_Языки")
		For i = 0 To (nodeList.length - 1)
			Set aNode = nodeList.Item(i)
			strTmp = aNode.getAttribute("Наименование")

			If Right(strTmp,5) <> " "&obLanguage("Import","kLang_") Then
				dictLang(aNode.getAttribute("ВнутреннийИдентификатор")) = strTmp & " " & obLanguage("Import","kLang_")
			Else
				dictLang(aNode.getAttribute("ВнутреннийИдентификатор")) = strTmp
			End If
		Next
	End If

	Set nodeClasses		= xmlDoc.documentElement.selectSingleNode("//ОбъектыМДТипа_Справочник/Справочник_Классы")
	Set nodeTmp			= xmlDoc.documentElement.selectSingleNode("//ОбъектыМДТипа_Справочник/Справочник_Периоды_Учебные")
	Set nodeList		= nodeTmp.selectNodes("ЭлСправочника_Периоды_Учебные")
' 		ВНИМАНИЕ!!!
	' пока берём первый из периодов в организации
	Set aNode = nodeList.Item(0)
	strPeriod = aNode.getAttribute("ВнутреннийИдентификатор")

	Set nodeTmp			= xmlDoc.documentElement.selectSingleNode("//ОбъектыМДТипа_Перечисление/Перечисление_Пол/ЗначениеПеречисления_Пол[@Наименование=""мужской""]")
	strMaleGenderID		= nodeTmp.getAttribute("ВнутреннийИдентификатор")

	Set nodeSudClass	= xmlDoc.documentElement.selectSingleNode("//ОбъектыМДТипа_Справочник/Справочник_Период_УченикаВКлассе")
	Set nodeStudents	= xmlDoc.documentElement.selectSingleNode("//ОбъектыМДТипа_Справочник/Справочник_Ученики")
	Set nodeList		= nodeStudents.selectNodes("ЭлСправочника_Ученики")

	For i = 0 To (nodeList.length - 1)
		Response.Write i & " "
		Response.Flush
		strLine = ""
		Set aNode = nodeList.Item(i)

		Redim arrItem(kDimens+1)
			For Each aAttrib In aNode.Attributes
				strTmp = aAttrib.nodeValue
				If Not IsDull(strTmp) Then
					strTmp = Trim(strTmp)
					If strTmp <> "0" And strTmp <> ".  ." And strTmp <> "" Then
						Select Case aAttrib.nodeName
						Case "ВнутреннийИдентификатор" : 'strDisplayName = strTmp
							Set nodeTmp = nodeSudClass.selectSingleNode("ЭлСправочника_Период_УченикаВКлассе[@Ученик=""" & strTmp & """ and @УчебныйПериод=""" & strPeriod & """]")
							If nodeTmp Is Nothing Then Set nodeTmp = nodeSudClass.selectSingleNode("ЭлСправочника_Период_УченикаВКлассе[@Ученик=""" & strTmp & """]")
							If Not(nodeTmp Is Nothing) Then
								strClass = nodeTmp.getAttribute("Класс")
								Set nodeTmp = nodeClasses.selectSingleNode("ЭлСправочника_Классы[@ВнутреннийИдентификатор=""" & strClass & """]")
								strClass = nodeTmp.getAttribute("Наименование")
								strClass = CorrectClassName(strClass)
								strClass = GetValidClassName(strClass)
							Else
								strClass = ""
							End If
							If IsNull(strClass) Then
								strErrorLines = strErrorLines & strLine&"<br>&nbsp; " & obLanguage("Import","kErrClass",strFunctionalityType)
								bOk = False
							Else
								arrItem(2) = strClass
								bOk = True
							End If
						Case "Пол"
							IF strTmp <> strMaleGenderID Then strGender = obLanguage("Common","kFemaleLet") Else strGender = obLanguage("Common","kMaleLet")
							arrItem(7) = strGender
						Case "Наименование" : strLine = strLine & " "& strTMP
						Case "Фамилия" : strLine = strLine & " "& strTMP
							arrItem(3) = strTmp
						Case "Имя" : strLine = strLine & " "& strTMP
							arrItem(4) = strTmp
						Case "Отчество" : strLine = strLine & " "& strTMP
							arrItem(5) = strTmp
						Case "ДатаРождения" : strLine = strLine & " "& strTMP
							arrItem(6) = strTmp
						Case "ЛицоДляКонтактов1" :
							If Not IsDull(strTmp) Then
								strLine = strLine & " "& strTMP
								arrTmp=Split(strTmp," ")
								If Ubound(arrTmp)>=0 Then
									arrItem(28) = arrTmp(0)
									If Ubound(arrTmp)>=1 Then
										arrItem(29) = arrTmp(1)
										If Ubound(arrTmp)>=2 Then 	arrItem(30) = arrTmp(2)
									End If
								End If
							End If
						Case "ЛицоДляКонтактов2" :
							If Not IsDull(strTmp) Then
								strLine = strLine & " "& strTMP
								arrTmp=Split(strTmp," ")
								If Ubound(arrTmp)>=0 Then
									arrItem(31) = arrTmp(0)
									If Ubound(arrTmp)>=1 Then
										arrItem(32) = arrTmp(1)
										If Ubound(arrTmp)>=2 Then 	arrItem(33) = arrTmp(2)
									End If
								End If
							End If
						Case "АдресПрописка" : arrAddr = Split(strTmp,",")
							arrItem(13)=arrAddr(1)
	'strState=arrAddr(2)
							arrItem(15) = arrAddr(3)
							arrItem(14) = arrAddr(4)
							If IsDull(arrItem(14)) Then arrItem(14) = arrAddr(5) ' нас пункт
							If IsDull(arrItem(14)) Then arrItem(14) = strSchoolCity
							arrItem(16) = arrAddr(6)
							arrItem(17) = arrAddr(7)
							arrItem(18) = arrAddr(8)
							arrItem(19) = arrAddr(9)
							If IsDull(arrAddr(6)) and IsDull(arrAddr(7)) and IsDull(arrAddr(8)) and IsDull(arrAddr(9)) then arrItem(14)=""
						Case "АдресФакт" : arrAddr = Split(strTmp,",")
							arrItem(13) = arrAddr(1)
							arrItem(21) = arrAddr(3)
							arrItem(20) = arrAddr(4)
							If IsDull(arrItem(20)) Then arrItem(20) = arrAddr(5) ' нас пункт
							If IsDull(arrItem(20)) Then arrItem(20) = strSchoolCity
							arrItem(22) = arrAddr(6)
							arrItem(23) = arrAddr(7)
							arrItem(24) = arrAddr(8)
							arrItem(25) = arrAddr(9)
							If IsDull(arrAddr(6)) and IsDull(arrAddr(7)) and IsDull(arrAddr(8)) and IsDull(arrAddr(9)) then arrItem(20)=""
						Case "Национальность" : arrItem(8)  = strTmp
						Case "ДокументУдЛичность" : arrAddr = Split(strTmp,",")
							If arrAddr(0)<>"Свидетельство о рождении" Then
								If Ubound(arrAddr)>=1 Then arrItem(9)=arrAddr(1)
								If Ubound(arrAddr)>=2 Then arrItem(10)=arrAddr(2)
								If Ubound(arrAddr)>=3 Then arrItem(11) = arrAddr(3)
								If Ubound(arrAddr)>=4 Then arrItem(12) = arrAddr(4)
							Else
								If Ubound(arrAddr)>=1 Then arrItem(41)=arrAddr(1)
								If Ubound(arrAddr)>=2 Then arrItem(42)=arrAddr(2)
								If Ubound(arrAddr)>=3 Then arrItem(43) = arrAddr(3)
								If Ubound(arrAddr)>=4 Then arrItem(44) = arrAddr(4)
							End If
						Case "Телефон" : arrItem(26) = strTmp
						Case "АдресЭлектроннойПочты" : arrItem(27) = strTmp
						Case "ГруппаЗдоровья" : 
							If Not bDisableHealthData Then
								arrItem(37) = strTmp
							End If
						Case "ФизкультурнаяГруппа" : arrItem(38) = strTmp
						Case "Диагноз" : 
							If Not bDisableHealthData Then
								arrItem(39) = Replace(strTmp,",","|")
							End If
						Case "ЛичноеДело" : arrItem(40) = strTmp
						Case "OMССерия" : arrItem(48)=strTmp
						Case "OMСНомер" : arrItem(49) = strTmp
						Case "Страхователь" : arrItem(51) = strTmp
						Case "ЛицоДляКонтактов1Образование"
						Case "ЛицоДляКонтактов2Образование"
						Case "ГдеОбучалсяДоПрибытия"
						Case "Гражданство1"
						Case "ЛичноеДелоВыдано"
						Case "РоднойЯзык"
						Case "ПервыйИнострЯзык"
						arrItem(34) = dictLang( strTmp )
						Case "ВторойИнострЯзык"
						arrItem(35) = dictLang( strTmp )
						Case "ПервыйРоднойЯзык"
						Case "ВторойРоднойЯзык"
						Case "ПричинаВыбытия"
						Case "Статус"
						Case "ТипРегистрации"
						Case "Организация"
						Case "ФормаОбучения"
						Case "Код"
						Case "Ид"
						Case "Идентификатор"
						Case "ПризнакВыгрузки"
						Case "СовпадениеАдресов"
						Case "Логин"
						Case "Пароль"
						Case Else
							If strTmp = "1" Then
								arrItem(kDimens+1)  = 	arrItem(kDimens+1) &vbCrLf	&aAttrib.nodeName &  ";"
							Else
								arrItem(kDimens+1)  = 	arrItem(kDimens+1) &vbCrLf	&aAttrib.nodeName &" = " & strTmp& "; "
							End If
						End Select
					End If
				End If
				If Err.Number Then err.clear
			Next

		If bOk Then
			arrItem(1)=i
			strRecord = obLanguage("Import","kRecord") & " " & Trim(CStr(arrItem(1))) & ": "
			arrItem(3) = CalcName(arrItem(3))	 ' LastName
			arrItem(4) = CalcName(arrItem(4))	 ' FirstName
			arrItem(5) = CalcName(arrItem(5))	 ' MiddleName
			If IsDull(arrItem(3)) Or IsDull(arrItem(4)) Then
				strErrorLines = strErrorLines & strLine & "<br>&nbsp; " & obLanguage("Import","kErrFirstOrLastName")
				bOk = False
			End If
		End If

		If bOk Then
			arrItem(6) = Trim(arrItem(6))
			If Not IsDull(arrItem(6)) Then
				dtBirthDate = Str2Date( arrItem(6) )
				If DateDiff( "d", dtBirthDate, NSDate(), 0,0) <= 0 Then
					arrItem(6) = Null
					dtBirthDate = Null
				End If
			Else
				dtBirthDate = Null
			End If
	' Mother
			arrItem(28) = CalcName(arrItem(28))
			arrItem(29) = CalcName(arrItem(29))
			arrItem(30) = CalcName(arrItem(30))
	' Father
			arrItem(31) = CalcName(arrItem(31))
			arrItem(32) = CalcName(arrItem(32))
			arrItem(33) = CalcName(arrItem(33))

			If IsBadFirstLetter(arrItem(3)) Or IsBadFirstLetter(arrItem(4)) Or IsBadFirstLetter(arrItem(5)) Or _
				IsBadFirstLetter(arrItem(28)) Or IsBadFirstLetter(arrItem(29)) Or IsBadFirstLetter(arrItem(30)) Or _
				IsBadFirstLetter(arrItem(31)) Or IsBadFirstLetter(arrItem(32)) Or IsBadFirstLetter(arrItem(33)) Then
				strErrorLines = strErrorLines & strLine & "<br>&nbsp; " & obLanguage("Common","kErrFirstLetter")
				bOk = False
			End If
		End If

		If bOk Then
			Call GetSimilarSFM()
			If nStudents > 0 Then
				strErrorLines = strErrorLines &strLine&obLanguage("Import","kWarn")& LCase(obLanguage("Common","kStudent",strFunctionalityType)) & obLanguage("Import","kFIOExistsInImportFile") &" - "& obLanguage("Import","kIgnored") &" )<br>"
			Else
				nStudents = objNSNET.GetYearSimilarUsersCount(strSchoolID, rlStudent, arrItem(3), arrItem(4), arrItem(5), IIf(IsDull(dtBirthDate), Empty, dtBirthDate), strGender )
				If nStudents > 1 Then
					strErrorLines = strErrorLines & strLine & obLanguage("Import","kWarn") & obLanguage("Import","kStudentFIOExists_Grater2") & " - " & obLanguage("Import","kIgnored") &" )<br>"
				Else
					If IsNull(arrItem(6)) Then
						strWarningLines = strWarningLines & strRecord & obLanguage("Import","kWarn2") & obLanguage("Import","kWarnBDay")
						bOK = False
					End If
					if strClass<>"" Then
						nClassID = objNSNET.GetClassID(Empty, strSchoolYearID, strClass )
						If nClassID <= 0 Then
							strWarningLines = strWarningLines & IIF(bOK, strRecord & obLanguage("Import","kWarn2")&strClass&" - " ,  "; ") & obLanguage("Import","kWarnClass2")
							bOK = False
						End If
					End If
					If nStudents = 0 Then
						strWarningLines = strWarningLines & IIF(bOK, strRecord & obLanguage("Import","kWarn2"),  "<br>") & arrItem(3) & " " & arrItem(4) & " " & arrItem(5) & " - " & obLanguage("Import","kNewStudent")
						iNew = iNew + 1
						bOK = False
					End If

	'                Call CheckAddress()
					Call CheckAddress(arrItem, nStudents = 0, 3, 4, 5, 14, 15, 16, 20, 21, 22) ' arrItem may be changed here!

					iSuccess = iSuccess+1
					arrImportStudents(Ubound(arrImportStudents)) = arrItem
					Redim Preserve arrImportStudents(1+Ubound(arrImportStudents))

					nFathers = 0
					If Not IsDull(arrItem(31)) Then
						nFathers = objNSNET.GetYearSimilarUsersCount(strSchoolID, rlParent, arrItem(31), arrItem(32), arrItem(33), Empty, obLanguage("Common","kMaleLet"))
						If nFathers > 1 Then
							strWarningLines = strWarningLines & IIF(bOK, strRecord & obLanguage("Import","kWarn2"),  "<br>") & LCase(obLanguage("Common","kFather")) & " " & arrItem(31) & " " & arrItem(32) & " " & arrItem(33) & " - " & obLanguage("Import","kParentFIOExists_Grater2") & " - " & obLanguage("Import","kParentIgnored")
							bOK = False
						Else
							iSuccessParents = iSuccessParents + 1
							If nFathers = 0 Then
								strWarningLines = strWarningLines & IIF(bOK, strRecord & obLanguage("Import","kWarn2"),  "<br>") & LCase(obLanguage("Common","kFather")) & " " & arrItem(31) & " " & arrItem(32) & " " & arrItem(33) & " - " & obLanguage("Import","kNewParent")
								iNewParents = iNewParents + 1
								bOK = False
							End If
						End If
					End If
					nMothers = 0
					If Not IsDull(arrItem(28)) Then
						nMothers = objNSNET.GetYearSimilarUsersCount(strSchoolID, rlParent, arrItem(28), arrItem(29), arrItem(30), Empty, obLanguage("Common","kFemaleLet"))
						If nMothers > 1 Then
							strWarningLines = strWarningLines & IIF(bOK, strRecord & obLanguage("Import","kWarn2"),  "<br>") & LCase(obLanguage("Common","kMother")) & " " & arrItem(28) & " " & arrItem(29) & " " & arrItem(30) & " - " & obLanguage("Import","kParentFIOExists_Grater2") & " - " & obLanguage("Import","kParentIgnored")
							bOK = False
						Else
							iSuccessParents = iSuccessParents + 1
							If nMothers = 0 Then
								strWarningLines = strWarningLines & IIF(bOK, strRecord & obLanguage("Import","kWarn2"),  "<br>") & LCase(obLanguage("Common","kMother")) & " " & arrItem(28) & " " & arrItem(29) & " " & arrItem(30) & " - " & obLanguage("Import","kNewParent")
								iNewParents = iNewParents + 1
								bOK = False
							End If
						End If
					End If
				End If
			End If
			If Not bOK Then strWarningLines = strWarningLines &")<br>"
		End If	'bOk
	Next
End Sub%>