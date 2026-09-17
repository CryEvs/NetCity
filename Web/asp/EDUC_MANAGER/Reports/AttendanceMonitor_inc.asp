<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportService_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strCurrSchoolID, strSchool
Dim rsAttend
Dim nGlobalYearId
Dim nSchYearID, strTermID, strTermName, objTerms, nTermsUBound
Dim arrTerms, arrTermIDs
Dim bYear
Dim nSize, arrData
Dim bAllSchools
Dim strStartDate, dtStartDate, strEndDate, dtEndDate, arrByGrades
Dim arrTotalsByGrades, dctGradeIndexes

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNAttendanceMonitor")
End Function

Function GetPageParams()
	Dim arrPageParams, nUBound

	arrPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("EMReports","kOU"), strSchool _
		)
	nUBound = UBound(arrPageParams)

	If bAllSchools Then
		Redim Preserve arrPageParams(nUBound + 4)
		arrPageParams(nUBound + 1) = obLanguage("Common","kStartDate")
		arrPageParams(nUBound + 2) = strStartDate
		arrPageParams(nUBound + 3) = obLanguage("Common","kEndDate")
		arrPageParams(nUBound + 4) = strEndDate
	Else
		Redim Preserve arrPageParams(nUBound + 2)
		arrPageParams(nUBound + 1) = obLanguage("Common","kPeriod")
		arrPageParams(nUBound + 2) = strTermName
	End If

	GetPageParams = arrPageParams
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	strCurrSchoolID = GetSafe("EMSCHOOLID", Null)

	bAllSchools = (CStr(strCurrSchoolID) = "-1")
	If bAllSchools Then
		SetScriptTimeOut 900

		strStartDate = GetSafe("ADT", "")
		dtStartDate = GetSafeDate(strStartDate, Null)
		strEndDate = GetSafe("DDT", "")
		dtEndDate = GetSafeDate(strEndDate, Null)
	Else
		nSchYearID = GetSafe("SchYearID", Null)
		strTermID = GetSafe("TERMID", Null)
	End If
End Sub

Sub specialMain()
	Dim i

	bOK = True

	If bAllSchools Then
		strSchool = obLanguage("Common","kAll")
		bYear = False
		nSize = 6

		arrByGrades = objNSNET.GetAttendanceMonitorAllSchoolsReport(filterEMID, nGlobalYearID, dtStartDate, dtEndDate)
		Call ProcessReportAllSchoolsData()
	Else
		strSchool = objNSNET.GetSchoolName(strCurrSchoolID)
		If strTermID = "-1" Then
			bYear = True
			strTermName = obLanguage("Common","kAll")

			Set objTerms = objNSNET.GetAssignedTermList(nSchYearID)
			If objTerms.EOF Then
				bOK = False
				strErrMsg = obLanguage("EMReports","kErrorMessage")
				Exit Sub
			End If

			arrTerms = objTerms.GetRows(,,Array("TERMID", "TERMNAME"))
			nTermsUBound = UBound(arrTerms, 2)
			ReDim arrTermIDs(nTermsUBound)
			For i = 0 To nTermsUBound
				arrTermIDs(i) = arrTerms(0, i)
			Next
			nSize = (nTermsUBound + 2) * 6
		Else
			bYear = False
			strTermName = objNSNET.GetTermName(strTermID)
			arrTermIDs = Array(strTermID)
			nSize = 6
		End If

		Set rsAttend = objNSNET.GetAttendanceMonitorReport(nSchYearID, arrTermIDs)
		If rsAttend.EOF Then
			bOK = False
			strErrMsg = obLanguage("EMReports","kErrorMessage")
		Else
			Call ProcessReportData()
		End If
	End If
End Sub

Sub ProcessReportData()
	Dim ind, i, j, k
	Dim strPrevClassID, strClassID, strCurrTermID
	Dim nDaysTotal, nDaysGoodreason, nLessonsTotal, nLessonsGoodreason, nDaysIll, nLessonsIll
	Dim nGrade, nPrevGrade, indGrade
	Dim gradeStartIdx, gradeEndIdx

	ReDim arrData(nSize, -1)
	ReDim arrTotalsByGrades(nSize + 2, -1)
	Set dctGradeIndexes = Server.CreateObject("NetCity.Storage")

	strPrevClassID = "-1"
	ind = -1
	nPrevGrade = -1
	indGrade = -1
	While Not rsAttend.EOF
		strClassID = GetSafeID(rsAttend("CLASSID"), Null)
		nGrade = GetSafeLng(rsAttend("GRADE"), Null)

		If strClassID <> strPrevClassID Then
			ind = ind + 1
			ReDim Preserve arrData(nSize, ind)
			strPrevClassID = strClassID

			arrData(0, ind) = GetSafeStr(rsAttend("CLASSNAME"), -1, "")

			If nGrade <> nPrevGrade Then
				indGrade = indGrade + 1
				ReDim Preserve arrTotalsByGrades(nSize + 2, indGrade)

				arrTotalsByGrades(0, indGrade) = GetSafeStr(rsAttend("GRADE"), -1, "")
				For i = 1 To nSize
					arrTotalsByGrades(i, indGrade) = 0
				Next
				arrTotalsByGrades(nSize + 1, indGrade) = ind ' индекс начала параллели в общем массиве
				arrTotalsByGrades(nSize + 2, indGrade) = ind - 1 ' индекс окончания параллели в общем массиве (здесь - просто для инициализации)

				If ind > 0 Then
					arrTotalsByGrades(nSize + 2, indGrade - 1) = ind - 1 ' индекс окончания параллели в общем массиве
					dctGradeIndexes(CLng(ind - 1)) = indGrade - 1 ' запоминаем соответствие индекса в общем массиве (последний индекс/строка для данной параллели) и индекса в массиве "по параллелям", надо для вставки при отрисовке
				End If

				nPrevGrade = nGrade
			End If
		End If

		nDaysTotal = GetSafeLng(rsAttend("DAYS_TOTAL"), 0)
		nDaysIll = GetSafeLng(rsAttend("DAYS_ILL"), 0)
		nDaysGoodreason = GetSafeLng(rsAttend("DAYS_GOODREASON"), 0) ' + nDaysIll - это сумирование перенёс в запрос для DAYS_GOODREASON
		nLessonsTotal = GetSafeLng(rsAttend("LESSONS_TOTAL"), 0)
		nLessonsIll = GetSafeLng(rsAttend("LESSONS_ILL"), 0)
		nLessonsGoodreason = GetSafeLng(rsAttend("LESSONS_GOODREASON"), 0) + nLessonsIll


		If bYear Then
			For i = 0 To nTermsUBound
				strCurrTermID = CStr(arrTerms(0, i))
				If Not IsDull(rsAttend(strCurrTermID)) Then
					arrData(i * 6 + 1, ind) = nDaysTotal
					arrData(i * 6 + 2, ind) = nDaysGoodreason
					arrData(i * 6 + 3, ind) = nDaysIll
					arrData(i * 6 + 4, ind) = nLessonsTotal
					arrData(i * 6 + 5, ind) = nLessonsGoodreason
					arrData(i * 6 + 6, ind) = nLessonsIll
				End If
			Next
		Else
			arrData(1, ind) = nDaysTotal
			arrData(2, ind) = nDaysGoodreason
			arrData(3, ind) = nDaysIll
			arrData(4, ind) = nLessonsTotal
			arrData(5, ind) = nLessonsGoodreason
			arrData(6, ind) = nLessonsIll
		End If

		rsAttend.MoveNext
	WEnd

	If ind > -1 And indGrade > -1 Then
		arrTotalsByGrades(nSize + 2, indGrade) = ind ' индекс окончания параллели в общем массиве
		dctGradeIndexes(CLng(ind)) = indGrade ' запоминаем соответствие индекса в общем массиве (последний индекс/строка для данной параллели) и индекса в массиве "по параллелям", надо для вставки при отрисовке
	End If


	If bYear Then ' Для всего года считаем последний столбец (точнее 6 столбцов)
		For j = 0 To ind
			For i = 0 To nTermsUBound
				arrData(nSize - 5, j) = arrData(nSize - 5, j) + arrData(i * 6 + 1, j)
				arrData(nSize - 4, j) = arrData(nSize - 4, j) + arrData(i * 6 + 2, j)
				arrData(nSize - 3, j) = arrData(nSize - 3, j) + arrData(i * 6 + 3, j)
				arrData(nSize - 2, j) = arrData(nSize - 2, j) + arrData(i * 6 + 4, j)
				arrData(nSize - 1, j) = arrData(nSize - 1, j) + arrData(i * 6 + 5, j)
				arrData(nSize, j) = arrData(nSize, j) + arrData(i * 6 + 6, j)
			Next
		Next
	End If

	' Считаем по параллелям
	For k = 0 To indGrade
		gradeStartIdx = arrTotalsByGrades(nSize + 1, k)
		gradeEndIdx = arrTotalsByGrades(nSize + 2, k)

		For i = 1 To nSize
			For j = gradeStartIdx To gradeEndIdx
				arrTotalsByGrades(i, k) = arrTotalsByGrades(i, k) + arrData(i, j)
			Next
		Next
	Next

	' Считаем последнюю строку "Итого"
	ind = ind + 1
	ReDim Preserve arrData(nSize, ind)
	For i = 1 To nSize
		For j = 0 To ind - 1
			arrData(i, ind) = arrData(i, ind) + arrData(i, j)
		Next
	Next
End Sub


Sub ProcessReportAllSchoolsData()
	Dim nUBound, i, j
	Dim isFirstGradeEmpty, isLastGradeEmpty
	Dim indStart, indEnd, indTotals

	nUBound = UBound(arrByGrades, 1)
	indTotals = nUBound

	isFirstGradeEmpty = IsGradeEmpty(0)
	isLastGradeEmpty = IsGradeEmpty(12)

	indStart = 0
	If isFirstGradeEmpty Then
		nUBound = nUBound - 1
		indStart = indStart + 1
	End If

	indEnd = 12
	If isLastGradeEmpty Then
		nUBound = nUBound - 1
		indEnd = indEnd - 1
	End If

	ReDim arrData(nSize, nUBound)
	For i = indStart To indEnd
		For j = 0 To nSize
			arrData(j, i - indStart) = arrByGrades(i, j)
		Next
	Next

	' Totals
	For j = 0 To nSize
		arrData(j, nUBound) = arrByGrades(indTotals, j)
	Next
End Sub

Function IsGradeEmpty(grade)
	Dim i
	IsGradeEmpty = True
	For i = 1 To nSize
		If arrByGrades(grade, 1) <> 0 Then
			IsGradeEmpty = False
			Exit Function
		End If
	Next
End Function

Function GetTableHeader()
	Dim i
	Dim strTabTitle1, strTabTitle2
	Dim nRowSpan
	Dim strTableHeader

	strTabTitle1 = "<th align=center colspan=""3"">" & obLanguage("Reports","kDays") &"</th><th align=center colspan=""3"">"& obLanguage("Reports","kLessons") &"</th>"
	strTabTitle2 = "<th align=center>" & obLanguage("Reports","kTotalNumber") &"</th><th align=center>"& obLanguage("Reports","kGoodReason") &"</th><th align=center>"& obLanguage("Reports","kIll") &"</th>"

	strTableHeader = "<div class=""body"">"& obLanguage("Reports","kMissed") &"</div><br><table class=""table-print-num"">"

	nRowSpan = IIf(bYear, 3, 2)
	strTableHeader = strTableHeader & "<tr><th rowspan=""" & nRowSpan & """>" & IIf(bAllSchools, obLanguage("ClassManagement","kGrade"), obLanguage("Common","kClass",kFuncType_Common)) & "</th>"

	If bYear Then
		For i = 0 To nTermsUBound
			strTableHeader = strTableHeader & "<th colspan=""6"">" & DB2HTML(arrTerms(1, i)) & "</th>"
		Next
		strTableHeader = strTableHeader & "<th colspan=""6"">"& obLanguage("Reports","kTotalForYear") &"</th></tr>"
		strTableHeader = strTableHeader & "<tr>"
		For i = 0 To nTermsUBound + 1
			strTableHeader = strTableHeader & strTabTitle1
		Next
		strTableHeader = strTableHeader & "</tr><tr>"
		For i = 0 To nTermsUBound + 1
			strTableHeader = strTableHeader & strTabTitle2 & strTabTitle2
		Next
		strTableHeader = strTableHeader & "</tr>"
	Else
		strTableHeader = strTableHeader & strTabTitle1 & "</tr><tr>" & strTabTitle2 & strTabTitle2 & "</tr>"
	End If

	GetTableHeader = strTableHeader
End Function

Function GetReportTable()
	Dim i, j
	Dim nRowCount
	Dim indGrade

	strReport = strReport & GetTableHeader()

	nRowCount = UBound(arrData, 2)
	For i = 0 To nRowCount - 1
		strReport = strReport & "<tr align=""center""><td class=""cell-text"">" & DB2HTML(arrData(0, i)) & "</td>"
		For j = 1 To nSize
			strReport = strReport & DrawCell(arrData(j, i))
		Next
		strReport = strReport & "</tr>"

		If Not bAllSchools Then
			If dctGradeIndexes.Contains(CLng(i)) Then
				' Суммарные сведения по параллелям
				indGrade = dctGradeIndexes(CLng(i))

				strReport = strReport & "<tr align=""center"" class=""totals""><td class=""cell-text"">Всего по " & DB2HTML(arrTotalsByGrades(0, indGrade)) & " кл.</td>"
				For j = 1 To nSize
					strReport = strReport & DrawCell(arrTotalsByGrades(j, indGrade))
				Next
				strReport = strReport & "</tr>"
			End If
		End If
	Next

	strReport = strReport & "<tr class=""totals""><td>Всего</td>"
	For j = 1 To nSize
		strReport = strReport & DrawCell(arrData(j, nRowCount))
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

Function DrawCell(nValue)
	Dim strVal
	If IsEmpty(nValue) Then
		strVal = "&nbsp;"
	ElseIf nValue = 0 Then
		strVal = "-"
	Else
		strVal = DB2HTML(nValue)
	End If
	DrawCell = "<td>" & strVal & "</td>"
End Function
%>
