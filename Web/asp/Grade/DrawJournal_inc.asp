<% ' © 2007-2011 IRTech. All rights reserved.
Dim bReport, objTermInfo, termTypeId, strTermName
Dim kAttReleasedMark, kAttWasLateMark, kAttAbsentMark

Const termTypeHalfYear = 3

' Добавлен параметр nLastDrowTermID - ID последнего отображаемого терма в отчете, используется
' Ф-ция GetMonthAndDays возвращает значение TRUE - если надо показывать колонки для Года (год, экзамены, итог)
' FALSE - если не надо
' arrTermsLastDays - массив для заполнения сведений о встреченных учебных периодах, если не нужен, то надо передать не массив
Function GetMonthAndDays(objRsDays, bWithCMLinks, nPage, nCMOnPageLimit, nLastDrowTermID, ByRef strMonthes, ByRef strDays, ByRef strCMCells, nLastSGTermID, ByRef arrTermsLastDays)
	Dim bTKR, i, j
	Dim nCMID, dtCMDate, nCMColSpan, nAssignmentsCnt, nResultsCnt
	Dim nMonthColSpan, nCurrMon, nOldMon, nTermID, bReport, strYearExamTotalMarksCol, cExamTypesCount
	Dim bCheckTerms, index
	Dim colSpan

	bCheckTerms = IsArray(arrTermsLastDays)
	nOldMon = Month( objRsDays("ADAY") ) : strMonthes = "" : strDays = "": strCMCells = ""
	i = (nPage - 1) * nCMOnPageLimit
	nTermID = objRsDays("TERMID")
	bReport = (nTermID>0)
	nCMColSpan = 1
	GetMonthAndDays = False

	While (Not objRsDays.EOF) And (i < nCMOnPageLimit * nPage)
		nCMID = CLng(objRsDays("CMID"))
		nAssignmentsCnt = CLng(objRsDays("ACOUNT"))
		nResultsCnt = CLng(objRsDays("RCOUNT"))
		dtCMDate = CDate(objRsDays("ADAY"))
		nCurrMon = Month( dtCMDate )

		' #6861. Перенёс с низа цикла While..., чтобы правильно показать заголовок учебного периода
		bTKR = (Clng(objRsDays("IS_TKR")) = 1)
		If nCMColSpan > 1 Then colSpan = " colspan='" & nCMColSpan & "'" Else colSpan=""
		strDays = strDays & "<th class=""cell-num""" & colSpan  & IIF(nAnchor=nCMID," id='LastEditCM'","") & ">" & IIf(bTKR, "&nbsp;", Day(dtCMDate)) & "</th>"
		If bWithCMLinks Then strCMCells = strCMCells & GetGradeLink( nCMID, dtCMDate, nAssignmentsCnt, nResultsCnt )
		objRsDays.MoveNext

		If bReport And (Not objRsDays.EOF) Then
			If nTermID <> objRsDays("TERMID") Then
				If bCheckTerms Then Call SaveTermInfo(arrTermsLastDays, nTermID, dtCMDate)
				strDays = strDays & DrawEmptyTh(nTermID)
				nTermID = objRsDays("TERMID")
				nMonthColSpan = nMonthColSpan + nCMColSpan
			End If
		End If
		If nOldMon = nCurrMon Then
			nMonthColSpan = nMonthColSpan + nCMColSpan
		Else
			If nMonthColSpan > 1 Then colSpan = " colspan='" & nMonthColSpan & "'" Else colSpan=""

			strMonthes = strMonthes & "<th class=""month"" " & colSpan & ">" & obLanguage.GetMonthName( nOldMon ) & "</th>"

			nMonthColSpan = nCMColSpan
			nOldMon = nCurrMon
		End If
		i = i + 1
	Wend

	If bReport Then
		If isDrowLastTotals(objRsDays, nTermID, nLastDrowTermID) Then
			If bCheckTerms Then Call SaveTermInfo(arrTermsLastDays, nTermID, dtCMDate)
			strDays = strDays & DrawEmptyTh(nLastDrowTermID)
			nMonthColSpan = nMonthColSpan + nCMColSpan
			If (nLastSGTermID > 0) And (CLng(nLastSGTermID) = CLng(nTermID)) Then
				If bCheckTerms Then
					index = UBound(arrTermsLastDays, 2)
					arrTermsLastDays(2, index) = True
				End If
				GetMonthAndDays = True
				If Not bEmptyExamTypes Then
					cExamTypesCount = UBound(arrExamTypes, 2) + 1
					If cExamTypesCount > 1 Then
						For j = 0 To cExamTypesCount - 1
							strDays = strDays & "<th>" & arrExamTypes(indAbbr, j) & "</th>"
						Next
					End If
				End If
				strYearExamTotalMarksCol = "<th rowspan = ""2"">" & obLanguage("Grade", "kTotalForYear") & "</th>"
				If Not bEmptyExamTypes Then
					If cExamTypesCount <> 0 Then
						If cExamTypesCount > 1 Then
							strYearExamTotalMarksCol = strYearExamTotalMarksCol & "<th colspan=""" & cExamTypesCount &""">" & obLanguage("Grade", "kExamTitle") & "</th><th rowspan=""2"">" & obLanguage("Grade", "kTotalTitle") & "</th>"
						Else
							strYearExamTotalMarksCol = strYearExamTotalMarksCol & "<th rowspan=""2"">" & obLanguage("Grade", "kExamTitle") & "</th><th rowspan=""2"">" & obLanguage("Grade", "kTotalTitle") & "</th>"
						End If
					End If
				End If
			End If
		End If
	End If

	If nMonthColSpan > 1 Then colSpan = " colspan='" & nMonthColSpan & "'" Else colSpan=""
	strMonthes = strMonthes & "<th class=""month""" & colSpan & ">" & obLanguage.GetMonthName( nOldMon ) &  "</th>" & strYearExamTotalMarksCol
	If objRsDays.EOF Then
		objRsDays.Move (nPage - 1) * nCMOnPageLimit - i + 1, 2
	Else
		objRsDays.Move (nPage - 1) * nCMOnPageLimit - i, 0
	End If
End Function

Function GetMarkLevel(nMark)
	If nMaxMark = 5 Then
		If Not IsNumeric(nMark) Then
			GetMarkLevel = ""
			Exit Function
		End If
		Select Case nMark
			Case 5: GetMarkLevel = "excelent"
			Case 4: GetMarkLevel = "good"
			Case 3: GetMarkLevel = "enough"
			Case Else: GetMarkLevel = "poor"
		End Select
	End If
End Function

'arrStudentMarks	- Array With Student CM Marks
'strAtt				- CM Student Attendance
'dt					- ClassMeeting Day
'nAnchor			- Previous edited assignmentid
'strNoWrap			- Nowrap additional param
Function GetMarkCell( nCMID, arrStudentMarks, strAtt, dt, strNoWrap, bShowAttendance, bTKR, bSrezWExist)
	Dim nT, i
	Dim strAttendance, strMarks, nRes, nWeight, nAType, strLevel, strMark
	Dim bLimit4EditCell
	Dim bMarksIsEmpty
	Dim bIsManual
	Dim bIsGrScale
	Dim strStyle, strCssClass, str183

	If bLimitedJournalEditing Then
		bLimit4EditCell = ((dtToday - dt) > nJournalEditingDayLimit)
	End If

	If bShowAttendance Then
		strAttendance = strAtt
	Else
		If Not IsDull(strAtt) Then
			If strAtt = kAttReleasedMark Then 'Если "ОСВОБОЖДЕН", то выводим "ОСВ"
				strAttendance = kAttReleasedMark
			ElseIf strAtt <> kAttWasLateMark Then 'Если не опоздал(то есть присутствовал) то "Н"
				strAttendance = kAttAbsentMark
			End If
		End If
	End If

	strStyle = ""
	strCssClass = ""
	If Not bPrint Then
		If bSrezWExist Then
			strCssClass = "slice"
		ElseIf bTKR Then
			strCssClass = "tkr"
		ElseIf nAnchor = nCMID Or dtToday = dt Then
			strCssClass = "current"
		ElseIf bLimit4EditCell Then
			strCssClass = "disabled"
		End If
		If strCssClass <> "" Then strCssClass = " class=""" & strCssClass & """" 
	End If

	GetMarkCell = "<td" & strCssClass & ">" '& strNoWrap 
	If Not IsEmpty(arrStudentMarks) Then
		strMarks = "": bMarksIsEmpty = True
		If isMac Then
			str183 = "<font style=""font-size: 10px; font-weight: bold;"">&#183;</font>"
		Else
			str183 = "<b>&#183;</b>"
		End If

		For i = 0 To Ubound(arrStudentMarks)
			nAType		= arrStudentMarks(i,1)
			bTKR		= (nAType = PreDefinedAssignmentType_TKR)
			nRes		= arrStudentMarks(i,3)
			nWeight		= arrStudentMarks(i,2)
			strActivityId= arrStudentMarks(i,5)
			strMark		= arrStudentMarks(i,6)
			bIsManual	= IsNull(strActivityId) or (strActivityId = kActivityID_Manual)
			strLevel	= ""

			If IsNull(nRes) Then
				If Not bReport Then 
					strMarks = strMarks & IIF(bMarksIsEmpty,"","&nbsp;") & str183
				End If
				nT = nMinMark
			Else
				If bTKR And CLng(nRes) < 0 Then
					nT = GetMark_TKR(nRes)
				Else
					If CLng(strMark) < nMinMark Then
						nT = nMinMark
					Else
						nT = CLng(strMark)
					End If
					strLevel = GetMarkLevel(nT)
				End If

				If strLevel <> "" Then
					strMarks = strMarks & IIF(bMarksIsEmpty,"","&nbsp;") & "<span class=""" & strLevel & """>" & nT & "</span>"
				Else
					strMarks = strMarks & IIF(bMarksIsEmpty,"","&nbsp;") & nT
				End If
			End If

			bMarksIsEmpty = (Len(strMarks) = 0)
		Next
		If bMarksIsEmpty And IsDull(strAttendance) Then
			GetMarkCell = GetMarkCell & "&nbsp;"
		Else
			GetMarkCell = GetMarkCell & strMarks & IIF(Not IsDull(strAttendance),IIF(bMarksIsEmpty,"","&nbsp;") & strAttendance,"")
		End If
	Else
		GetMarkCell = GetMarkCell & DB2HTML(strAttendance)
	End If
	GetMarkCell = GetMarkCell & "</td>"
End Function

Function isDrowLastTotals(rsDays, nTermID, nLastDrowTermID)
	isDrowLastTotals = (rsDays.EOF and nLastDrowTermID=nTermID)'Отображать ли итоговые оценки, в конце выбранного периода
	If Not isDrowLastTotals and Not rsDays.EOF Then isDrowLastTotals = nTermID<>rsDays("TERMID")
End Function

Function DrawEmptyTh(nTermID)
	Set objTermInfo = objNSNET.GetTermInfo(nTermID)
	termTypeId = objTermInfo("TERMTYPEID")
	If termTypeId = termTypeHalfYear Then
		strTermName = Left(objTermInfo("TERMNAME"), 5)
	Else
		strTermName = Left(objTermInfo("TERMNAME"), 6)
	End If
	DrawEmptyTh = "<th><div>" & obLanguage("Grade", "kTotalTitle") & " " &strTermName & ".</div></th>" 'div для fixIE - min width
End Function

Sub InitAttendanceMarks
	kAttReleasedMark = obLanguage("Assignment","kARReleasedS")
	kAttWasLateMark = obLanguage("Assignment","kARWasLateS")
	kAttAbsentMark = "Н"
End Sub

Sub SaveTermInfo(arrInfo, nTermId, dtDate)
	Dim index
	index = UBound(arrInfo, 2) + 1
	ReDim Preserve arrInfo(2, index)
	arrInfo(0, index) = nTermID
	arrInfo(1, index) = dtDate
	arrInfo(2, index) = False ' Последний ли это период в учебном году, с которым связана данная предмето-группа (нужно для определения - надо ли показывать годовые сведения)
End Sub
%>
