<!-- #INCLUDE FILE="../scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE FILE="ReportsGetRecordSet_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Const kParamString	= "S"
Const kParamInteger	= "I"
Const kParamDate	= "D"

Dim bUseARC
Dim nReportId
Dim objReportInfo, objParamsRs, bEmptyParams, objResultRs, objQueryFieldsRs, strQueryId
Dim strParamsArray, strParamsTextArray, arrParamTypes
Dim arrValueID, arrValueText
Dim i, j, k, m
Dim nCnt, strTmp, strOld, arrTmp, arrCnt, arrResults, nFieldsCount
Dim arrObjParamIDs, nParamIndex
Dim strFilterEMID

Sub ReadState()
	bUseARC = Cbool( GetSafeLng( Request("ARC"), 0 ) = 1 )
	nReportId = GetSafeLng( Request("RPTID"), Null )
	strParamsArray = GetSafeStr( Request("PV"), -1, "" )
	strParamsTextArray = GetSafeStr( Request("PT"), -1, strParamsArray )
	If bIsEducManager Then
		strFilterEMID = obTokenMgr.GetData(strToken, stRepConstrEMID)
		If IsDull(strSchoolID) Then strSchoolID = obTokenMgr.GetData(strToken, "SCHOOLID") ' #26394. См. ViewReport.asp
	End If
End Sub

Sub Main()
	Dim objParamDispTypesStat, i, j
	Set objReportInfo = objNSNETWork.GetReportInfo(nReportId )
	Set objParamsRs = objNSNETWork.GetQueryParametersList(nReportId, true )
	bEmptyParams = objParamsRs.EOF
	strQueryId = objNSNETWork.GetReportQueryId(nReportId )
	Set objQueryFieldsRs = objNSNETWork.GetQueryFieldsList(strQueryId )

	If strParamsArray <> "" Then
		strParamsArray = Replace(strParamsArray,"*","%")
		arrValueID = Split( strParamsArray, "|", -1, 0 )
		ReDim Preserve arrValueID( UBound(arrValueID) - 1 )
	End If
	If strParamsTextArray <> "" Then
		arrValueText = Split( strParamsTextArray, "|", -1, 0 )
		ReDim Preserve arrValueText( UBound(arrValueText) - 1 )
	End If

	If Not bEmptyParams Then ReDim arrParamTypes(100) : ReDim arrObjParamIDs(100)
'ВНИМАНИЕ!
'точно такой же алгоритм изменения индекса i должен быть и в GetReport()!
	i = 0
	While Not objParamsRs.EOF
'Добавляем в массивы arrValueID и arrValueText дополнительные значения
'параметров для построения  для каждого из параметров фильтров заданного вида
'Кроме того заполняет массив arrParamTypes
'ВНИМАНИЕ! Если поле OBJPARAMID <> NULL, тогда этот параметр имеет те же значения что и параметр,
'указанный в OBJPARAMID -> необходимо увеличить массивы arrValueID,arrValueText и arrParamTypes
'!!!Пока проверку поля OBJPARAMID сделал для параметра типа "D"
'параметр задается фильтром вида (({TERMS}.STARTDATE<=? AND {TERMS}.ENDDATE>=?) OR 1=?)
		Select Case GetSafeStr(objParamsRs("PARAMDISPTYPE"), 1, "")
			Case "S","L"
				arrParamTypes(i) = kParamString
				arrObjParamIDs(i) = objParamsRs("PARAMETERID")
				i = i + 1
			Case "I"
				arrParamTypes(i) = kParamInteger
				arrObjParamIDs(i) = objParamsRs("PARAMETERID")
				i = i + 1
			Case "D"
				arrParamTypes(i) = kParamDate
				arrObjParamIDs(i) = objParamsRs("PARAMETERID")
				If IsDull(arrValueID(i)) Then
					arrValueID(i) = Date2Str(NSDate)
					arrValueText(i) = Date2Str(NSDate)
				End If
				i = i + 1
			Case "B"
					arrParamTypes(i) = kParamDate
					arrObjParamIDs(i) = objParamsRs("PARAMETERID")
					ReDim Preserve arrValueID( UBound(arrValueID) + 1)
					ReDim Preserve arrValueText( UBound(arrValueText) + 1)
					arrParamTypes(i+1) = kParamDate
					arrObjParamIDs(i+1) = objParamsRs("PARAMETERID")
					Call InsertToArrayStrItem(arrValueID, i+1, arrValueID(i))
					Call InsertToArrayStrItem(arrValueText, i+1, arrValueText(i))
					i = i + 2
			Case "DD"
'				If IsNull(objParamsRs("OBJPARAMID")) Then
' сейчас равенство дат в зависимых фильтрах отключено ввиду ошибок, необходим пересмотр логики кода
					arrParamTypes(i) = kParamDate
					arrObjParamIDs(i) = objParamsRs("PARAMETERID")
					ReDim Preserve arrValueID( UBound(arrValueID) + 2)
					ReDim Preserve arrValueText( UBound(arrValueText) + 2)
					If Not IsDull(arrValueID(i)) Then
						Call InsertToArrayStrItem(arrValueID, i+1, arrValueID(i))
						Call InsertToArrayStrItem(arrValueText, i+1, arrValueText(i))
						i = i + 2
						Call InsertToArrayStrItem(arrValueID, i, -1)
						Call InsertToArrayStrItem(arrValueText, i, -1)
					Else
						arrValueID(i) = Date2Str(NSDate)
						arrValueText(i) = Date2Str(NSDate)
						Call InsertToArrayStrItem(arrValueID, i+1, arrValueID(i))
						Call InsertToArrayStrItem(arrValueText, i+1, arrValueText(i))
						i = i + 2
						Call InsertToArrayStrItem(arrValueID, i, 1)
						Call InsertToArrayStrItem(arrValueText, i, 1)
					End If
					arrParamTypes(i-1) = kParamDate
					arrObjParamIDs(i-1) = objParamsRs("PARAMETERID")
					arrParamTypes(i) = kParamInteger
					arrObjParamIDs(i) = objParamsRs("PARAMETERID")
					i = i + 1
			Case "R"
'параметр задается фильтром вида ({GETSTAFFATTEST}.ATT_LAST>=? OR 1=?) AND ({GETSTAFFATTEST}.ATT_LAST<=? OR 1=?)
				For j = 1 To 2
					ReDim Preserve arrValueID( UBound(arrValueID) + 1)
					ReDim Preserve arrValueText( UBound(arrValueText) + 1)
					If Not IsDull(arrValueID(i)) Then
						Call InsertToArrayStrItem(arrValueID, i+1, -1)
						Call InsertToArrayStrItem(arrValueText, i+1, -1)
					Else
						arrValueID(i) = Date2Str(NSDate)
						arrValueText(i) = Date2Str(NSDate)
						Call InsertToArrayStrItem(arrValueID, i+1, 1)
						Call InsertToArrayStrItem(arrValueText, i+1, 1)
					End If
					arrParamTypes(i) = kParamDate
					arrObjParamIDs(i) = objParamsRs("PARAMETERID")
					arrParamTypes(i+1) = kParamInteger
					arrObjParamIDs(i+1) = objParamsRs("PARAMETERID")
					i = i + 2
				Next
			Case "T"
'параметр задается фильтром вида ( {}.DT between ? AND ?)
				arrParamTypes(i) = kParamDate
				arrObjParamIDs(i) = objParamsRs("PARAMETERID")
				arrParamTypes(i+1) = kParamDate
				arrObjParamIDs(i+1) = objParamsRs("PARAMETERID")
				i = i + 2
		End Select
		objParamsRs.MoveNext
	Wend
	If i > 0 Then ReDim Preserve arrParamTypes(UBound(arrValueID)) : ReDim Preserve arrObjParamIDs(UBound(arrValueID))
	If Not bEmptyParams Then objParamsRs.MoveFirst ' objParamsRs - используется в дальнейшем, поэтому его надо вернуть в начальную позицию

	SetScriptTimeOut 900
	Set objResultRs = GetReportRecordSet(strQueryId, arrValueID, arrParamTypes)

End Sub

'Функция осуществеляет добавление элемента в массив
'Для использования функции размер массива должен быть заранее увеличен
Function InsertToArrayStrItem( ByRef arrArray, ByVal nPos, ByVal strItem)
	Dim n, i
	n = UBound(arrArray)
	For i = n To nPos+1 Step -1
		arrArray(i) = arrArray(i-1)
	Next
	arrArray(i) = strItem
End Function

Sub onDrawPage()
	Call GetReport()
End Sub

Sub CalcArray4Field(nField)
	Dim bNew, rsList, bHasList, n, strTmp0, iOld, newCount, ii
	Dim aJump, imin, jmin, arrUsed, bExcludeEmpty, usedTmp, bReorder, oldValue, newValue, jj, dictUsed
	Dim repType
	ReDim arrUsed(0)
	aJump = 0
	nCnt(nField) = 0
	Redim arrTmp(0)
	bHasList = False
	bExcludeEmpty = True ' пустые строки и столбцы не выводим, т.к нужно только в Губкинском, а в Тольятти не хватеает ресурсов браузера.
	If nField >0 Or Not bExcludeEmpty Then
		' используем предопределённые списки для столбцов всегда, но пустые столбцы можем исключить по флагу
		strParam = objNSNETWork.GetGroupedFieldValuesString(strQueryId, nField+1 )
		If Not IsDull(strParam) Then
			If InStr(strParam, " SCHOOLS ")>0 Then
				repType = objReportInfo("REPTYPE")
				strParam = FilterParam( repType, strSchoolId, strFilterEMID, strParam )
				If repType = "S" Then
					strParam = ReplaceSchoolsParam( strParam )
				End If
			End If
			Set rsList = objNSNET.ExecuteSql( strParam )
			If Not rsList.EOF Then bHasList = Not IsNull(rsList(0))
			If bHasList Then
				While Not rsList.EOF
					Redim Preserve arrTmp(nCnt(nField))
					arrTmp(nCnt(nField)) = Trim(GetSafeStr(rsList(0), -1, ""))
					nCnt(nField) = nCnt(nField) + 1
					rsList.MoveNext
				Wend
			End If
		End If
	End If
	If bExcludeEmpty Or Not bHasList Then
		Set dictUsed = CreateObject("Scripting.Dictionary")
		Dim arrTmpUsed
		Redim arrTmpUsed(0)
		ii=0
		' выбрасываем не используемые значения (если был использован список предопределённых значений)
		For j = 0 To UBound(arrResults, 2)
			strTmp = GetResult(nField,j)
			If IsDull(dictUsed(Ucase(strTmp))) Then
				dictUsed(Ucase(strTmp)) = 1
				Redim Preserve arrTmpUsed(ii)
				arrTmpUsed(ii)=strTmp
				ii=ii+1
			End If
		Next
		arrTmp = arrTmpUsed
		' Redim arrUsed(0)
		nCnt(nField) = Ubound(arrTmp)
		If nField > 0 Then
			' сложный случай для столбцов - заполняем массив возможных значений второго поля, но ещё и следим за сортировкой
			bReorder = True
			jj = 0
'			stop
			While bReorder And jj < 7
				jj = jj +1
				bReorder = False
				iOld=-1
				strTmp0=""
				For j = 0 To UBound(arrResults, 2)
					strTmp = GetResult(nField,j)
					bNew=True
					n = nCnt(nField)
					For i = n-1 To 0 Step -1
						If Ucase(strTmp) = Ucase(arrTmp(i)) Then
							bNew=False: Exit For
							' нашли новое значение для столбца
						End If
					Next
				If bNew Then
					' новое значение столбца вставляем в конец
					Redim Preserve arrTmp(n)
					arrTmp(n) = strTmp
					If Ucase(strTmp0) <> UCase(GetResult(0,j)) Then
						strTmp0 = GetResult(0,j)
						newCount = 0
						aJump = 0
					ElseIf iOld<>i-1 Then
						strTmp0 = GetResult(0,j)
						newCount = 0
						aJump = i - iOld + aJump
					End If
					iOld = n
					nCnt(nField) = n + 1
				Else
				' этот код заменяет сортировку, т.к. у нас сортировка может быть по неявному полю (например сортировка по классу, ещё неявно берёт параллель)
					If Ucase(strTmp0) <> UCase(GetResult(0,j)) Then
						strTmp0 = GetResult(0,j)
						newCount = 0
					ElseIf iOld>i Then
						' обнаружили неправильную сортировку - нужно переставить столбцы согласно сортировке
						bReorder = True
						If iOld - aJump - newCount >= i Then
							aJump = newCount + aJump
							newCount = aJump
						Else
							If newCount >= (iOld-i) Then
								newCount = iOld-i
								aJump=0
							Else
								jmin =j-1
								imin = iOld
								ii = i
								' ищем минимальный индекс упорядоченного диапазона столбцов
								For i = iOld To i+1 Step -1
									newValue = UCase(GetResult(nField,jmin))
									If Ucase(arrTmp(i)) = newValue Then
										imin = i
										Do
											oldValue = newValue
											jmin = jmin-1
											If jmin<0 Then Exit Do
											newValue = UCase(GetResult(nField, jmin))
										Loop Until newValue <> oldValue
									End If
									If jmin<0 Then Exit For
									If Ucase(strTmp0) <> UCase(GetResult(0,jmin)) Then Exit For
								Next
								i = ii
								newCount = iOld - imin+1
								aJump=newCount
							End If
						End If
						' перемещаем диапазон столбцов перед обнаруженным следующим по сортировке столбцом
						For ii = 1 To newCount
							strTmp = arrTmp(iOld)
							For i = iOld To i+1 Step -1
								arrTmp(i) = arrTmp(i-1)
							Next
							arrTmp(i) = strTmp
						Next
						i = i+newCount
					ElseIf iOld<>i-1 Then
						newCount = 0
						aJump = i - iOld + aJump
					End If
					iOld = i
				End If
				newCount = newCount + 1
				Next
			Wend
		End If
	End If
	arrCnt(nField) = arrTmp
	nCnt(nField) = Ubound(arrTmp)
End Sub

Function NoWrapSpace(aStr)
	NoWrapSpace = Replace( DB2HTML(aStr), " ", "&nbsp;")
End Function

Sub DrawCell_Elem
	Dim delim, bNew, curVal
	curVal = GetResult(2,j)
	bNew = Ucase(tmpRes) <> UCase(curVal)

	If bNew Then
		If tmpRes<>"" Then rw "&nbsp;<br>"
		tmpRes = curVal
		curVal = NoWrapSpace( curVal )
		If nFieldsCount>=3 Then curVal ="<b>" & curVal & "</b>"
		rw curVal
	End If

	If nFieldsCount>=3 Then
		rw IIF(bNew,":&nbsp;",";<br>") & NoWrapSpace( GetResult(3,j) )
		If nFieldsCount>=4 Then
			For k = 4 To nFieldsCount-1
				rw  ",&nbsp;" &NoWrapSpace( GetResult(k,j) )
			Next
			rw  ",&nbsp;<b>" &NoWrapSpace( GetResult(k,j) ) & "</b>"
		End If
	End If
	j = j+1
End Sub

Sub DrawCell
	rw "<td class=""cell-num"">"
	Do
		DrawCell_Elem
		If  j > UBound(arrResults, 2) Then Exit Do
		If Ucase(strOld) <> UCase(GetResult(0,j)) Then Exit Do
	Loop Until Ucase(strTmp) <> UCase(GetResult(1,j))
	rw "</td>"
End Sub

Function GetResult(i,j)
	IF(IsDull(arrResults(i,j))) Then
		GetResult="-"
	Else
		GetResult = Trim(Replace( arrResults(i,j) ,chr(1),""))
	End If
End Function

Sub GetGroupedReportTable()
	dim strHeader2, arrHeader, strFirstClmn
	If objResultRs.EOF Then rw "<div class=""SmallHeader"">"&obLanguage("Constructor","kEmptyReport")&"</div>" : Exit Sub
	Redim arrHeader(objResultRs.Fields.Count-1)

	nFieldsCount=0
	For i = 0 To objResultRs.Fields.Count-1
		If Instr(objResultRs.Fields()(i).Name, "x2b7")=0 Then arrHeader(nFieldsCount) = objResultRs.Fields()(i).Name: nFieldsCount=nFieldsCount+1
	Next
	nFieldsCount=nFieldsCount-1
	If nFieldsCount < 2 Then GenerateError obLanguage("Constructor","kErrGroupedReportCount")
	Redim Preserve arrHeader(nFieldsCount)
	arrResults = objResultRs.GetRows(,,arrHeader)
	objResultRs.MoveFirst
	strOld=""
	ReDim nCnt(1)
	ReDim arrCnt(1)
	Call CalcArray4Field(0)
	Call CalcArray4Field(1)
	If nCnt(0)<0 Or nCnt(1)<0 Then rw "<div class=""SmallHeader"">"&obLanguage("Constructor","kEmptyReport")&"</div>" : Exit Sub
	rw "<table class=""table-print-num"">"
	strFirstClmn=""
	For i = 0 To nCnt(1)
		strFirstClmn=strFirstClmn& "<th class=""cell-text"">" &  Replace( DB2HTML(IIF(IsDull(arrCnt(1)(i)), obLanguage("Common","kNo"),arrCnt(1)(i)) ) ,chr(1),"") & "</th>"
	Next
	rw "<tr>"
	rw "<th rowspan=""2"">" & DB2HTML(objResultRs.Fields()(0).Name)& "</th>"
	strHeader2 = DB2HTML(objResultRs.Fields()(1).Name) &"&nbsp;&mdash;&nbsp;"&DB2HTML(objResultRs.Fields()(2).Name)
	If nFieldsCount >= 3 Then
		i = 3
		strHeader2 = strHeader2 & ": " & DB2HTML(objResultRs.Fields()(i).Name)

		For i = 4 To nFieldsCount
			strHeader2 = strHeader2 & ", " & DB2HTML(objResultRs.Fields()(i).Name)
		Next
	End If
	strHeader2 =  "<th colspan="""& nCnt(1)+1&""">" & strHeader2& "</th>"
	rw strHeader2
	rw "</tr><tr>"
	rw strFirstClmn
	rw "</tr>"
	m = 0 : j = 0
	Do
		strOld=arrCnt(0)(m)
		rw "<tr>"
		rw "<th class=""text-left"">" & Replace( DB2HTML(strOld) ,chr(1),"") & "</th>" ' выравнивание влево - т.к. это заголовок строки
		For i = 0 To nCnt(1)
			If j > UBound(arrResults, 2) Then
				rw "<td></td>"
			Else
				strTmp=GetResult(1,j)
				If Ucase(strOld) <> UCase(GetResult(0,j)) Then
					Do While i<=nCnt(1)
						rw "<td></td>"
						i=i+1
					Loop
					i = 0
					response.flush
					Exit For
				ElseIf Ucase(strTmp) = Ucase(arrCnt(1)(i)) Then
					tmpRes=""
					DrawCell
				Else
					rw "<td></td>"
				End If
			End If
		Next
		m = m+1
		If j <= UBound(arrResults, 2) Then
' 			обработка случая когда сортировка по второму полю (сделанная пользователем)
'			не соответствует сортировке второго свойства возвращаемого столбца( она жестко прошита в базе).
' 			При правильном составлении запроса пользователем сюда захода нет.
			While Ucase(strOld) = UCase(GetResult(0,j))
				DrawCell
			Wend
		Else
			m = m+1
		End If
		rw "</tr>"
		Response.Flush
	Loop Until m > nCnt(0)
	rw "</table>"
End Sub

Sub WriteTableField(field, typeField)
	Dim bShortDate
	If typeField = 2 Then
		If IsDull(field.Value) then 
			rw "<td></td>"
			Exit sub
		End If
		If VarType(field) = vbDate Then 'Если тип в базе Дата, и реальный тип дата
			If Second(field) = 0 Then If Minute(field) = 0 Then If Hour(field) = 0 Then bShortDate = True
			If bShortDate Then
				'только дата
				rw "<td class=""cell-date-short"">" & Date2Str(field) & "</td>"
			Else
				'дата и время
				rw "<td class=""cell-date"">" & Date2Str(field) & " " & Time2Str(field) & "</td>"
			End If
		End If
	ElseIf VarType(field) = vbInteger Or VarType(field) = vbLong Or typeField = 1 Then
		rw "<td class=""cell-num-center"">" & field & "</td>"
	Else
		rw "<td class=""cell-text"">" & Replace(DB2HTML(field), chr(1), "") & "</td>"	
	End If
End sub

Sub GetReportTable()
	Dim nCnt
	Dim nField

	Response.Write "<table class=""table-print"">" & _
		"<tr><th>&nbsp;№&nbsp;<br>" & obLanguage("Constructor","kAbbrevInOrder") & "</th>"
	While Not objQueryFieldsRs.EOF
		Response.Write "<th>" & DB2HTML(GetSafeStr(objQueryFieldsRs("DISPLAYNAME"), -1, GetSafeStr(objQueryFieldsRs("PROPNAME"), -1, "Expr"))) & "</th>"
		objQueryFieldsRs.MoveNext
	Wend
	Response.Write "</tr>"
	nCnt = 1

	While Not objResultRs.EOF
		nField = 0
		Response.Write "<tr><td class=""text-right"">&nbsp;" & CStr(nCnt) & "</td>" 'цифры выравниваем вправо
		objQueryFieldsRs.MoveFirst
		While Not objQueryFieldsRs.EOF
			strTmp = objQueryFieldsRs("DISPLAYNAME")
			If IsDull( strTmp ) Then strTmp = objQueryFieldsRs("PROPNAME")
			If IsDull( strTmp ) Then strTmp = "Expr"
			'If Application("MSSQL")<>1 and Len(strTmp)>=32 Then strTmp = Left(strTmp,31) ' В интербэйсе 1.5 алиас меньше 32 символов
			If Application("MSSQL")<>1 and Len(strTmp)>=33 Then strTmp = Left(strTmp,33) 'Postgres
			' при переходе на FB 2.0 алиас перестал отсекаться до 32 символов
			If strTmp = obLanguage("SchoolInfo","kINN") Or strTmp = obLanguage("ServAdmin","kDocNumber") Then
				Response.Write "<td class=""cell-text-center"">" & Replace( DB2HTML(objResultRs(strTmp)) ,chr(1),"") & "</td>"
			Else
				'Call WriteTableField(objResultRs(strTmp), objQueryFieldsRs("TypeId"))
				Call WriteTableField(objResultRs(nField), objQueryFieldsRs("TypeId"))
			End If
			nField = nField + 1
			objQueryFieldsRs.MoveNext
		Wend
		Response.Write "</tr>"
		Response.Flush
		nCnt = nCnt + 1
		objResultRs.MoveNext
	Wend
	Response.Write "</table>"
End Sub

Function GetReport()
	Dim i, rsQ, strGroupedReport
	Dim strParamType, strParamValue, strTmp
	If bIsEducManager Then
		DrawTitleHeader obLanguage("Common","kEMName") & " " & DB2HTML(objNSNETWork.GetEducManagementName(strFilterEMID))
	Else
		DrawTitleHeader DB2HTML(objNSNET.GetSchoolName(strSchoolID))
	End If

	DrawReportDispName DB2HTML(objReportInfo("DISPLAYNAME"))
	If bIsEducManager and objReportInfo("REPTYPE") = "S" Then 
		DrawTimeParam "<b>" & obLanguage("Common","kEO") & ":&nbsp; </b>" & DB2HTML(objNSNET.GetSchoolName(strSchoolID))
	end if
	i = 0 ' Здесь должно соответствовать Sub Main() из Report_inc.asp
	While Not objParamsRs.EOF
		strParamType = GetSafeStr(objParamsRs("PARAMDISPTYPE"), 1, "")
		Select Case strParamType
		Case "R"
			strParamValue = arrValueText(i)
			If arrValueText(i+1) = 1 Then strParamValue = Null
			strTmp = "<b>" & DB2HTML(objParamsRs("DISPLAYNAME")) & ":&nbsp;" & obLanguage("Constructor","kTimeFrom") & "</b>&nbsp;" & strParamValue
			i = i + 2 ' 1-ый Integer пропускаем
			strParamValue = arrValueText(i)
			If arrValueText(i+1) = 1 Then strParamValue = Null
			strTmp = strTmp + "&nbsp;<b>" & obLanguage("Constructor","kTimeTo") & "</b>&nbsp;" & strParamValue
			i = i + 2 ' 2-ой Integer пропускаем
			DrawTimeParam strTmp
		Case "T"
			strParamValue = arrValueText(i)
			strTmp = "<b>" & DB2HTML(objParamsRs("DISPLAYNAME")) & ":&nbsp;" & obLanguage("Constructor","kTimeFrom") & "</b>&nbsp;" & strParamValue
			strParamValue = arrValueText(i+1)
			strTmp = strTmp + "&nbsp;<b>" & obLanguage("Constructor","kTimeTo") & "</b>&nbsp;" & strParamValue
			i = i + 2
			DrawTimeParam strTmp
		Case "DD"
				If arrValueText(i+2) = 1 Then
					strParamValue = ""
				Else
				strParamValue = arrValueText(i)
				End If
				i = i + 3
		Case "D"
			strParamValue = arrValueText(i)
			i = i + 1
			If IsNull(objParamsRs("OBJPARAMID")) Then DrawTimeParam "<b>" & DB2HTML(objParamsRs("DISPLAYNAME")) & ":</b>&nbsp;" & strParamValue
		Case Else
				strParamValue = DB2HTML(arrValueText(i))
			If InStr(1, arrValueText(i), "*")<>0 Then
				strParamValue = Replace(strParamValue, "*", " " & obLanguage("Common","kAll") & " ")
				End If
				i = i + 1
'в настоящий момент значение OBJPARAMID <> Null может быть только у параметра "D", поэтому на другие параметры следующая строчка кода не повлияет
			If IsNull(objParamsRs("OBJPARAMID")) Then DrawTimeParam "<b>" & DB2HTML(objParamsRs("DISPLAYNAME")) & ":</b>&nbsp;" & strParamValue
		End Select
		objParamsRs.MoveNext
	Wend
	EndDrawParams
	If objResultRs.EOF Then
		Response.Write "<table class=""table-print"">" & _
			"<tr><th>&nbsp;№&nbsp;<br>" & obLanguage("Constructor","kAbbrevInOrder") & "</th>"
		While Not objQueryFieldsRs.EOF
			Response.Write "<th>" & DB2HTML(GetSafeStr(objQueryFieldsRs("DISPLAYNAME"), -1, GetSafeStr(objQueryFieldsRs("PROPNAME"), -1, "Expr"))) & "</th>"
			objQueryFieldsRs.MoveNext
		Wend
		Response.Write "</tr></table><br>"
		Response.Write "<div class=""xtl10bwr"">"&obLanguage("Constructor","kEmptyReport")&"</div>"
	Else
		Set rsQ = objNSNETWork.GetQueryData(Clng( strQueryId ) )
		strGroupedReport = GetSafeStr(rsQ("ISGROUPEDREPORT"), -1, "N")
		If strGroupedReport <> "Y" Then Call GetReportTable() Else Call GetGroupedReportTable()
	End If
	Response.Write GetPageVer()
End Function
%>
