<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/GradingScale_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kInd_ID = 0
Const kInd_Result = 1
Const kInd_ActivityID = 2
Const kInd_Weight = 3
Const kInd_Duedate = 4
Const kInd_Type = 5
Const kInd_CMID = 6

Const kCSG_ID = 0
Const kCSG_SubjectName = 1
Const kCSG_Pass = 2

Const kTotal_Mark = 1
Const kRes_CSGID = 0
Const kRes_Due = 1
Const kRes_RESULT = 2
Const kRes_REASON = 3
Const kRes_AID = 4

'Const kReportMaxMark = 5
Const kReportLimitMark = 5
Const kMandatory		= "&#183;"

Const kCutHR    = "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _"
Const kSolidHR  = "_______________________________________________________________________________________"
Const kSignSolidLine = "_________"
Const kDebtDispl = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"


Dim strReport1, strReport2
Dim arrReport1, arrReport2
Dim strClassID, strStudentID, strStudentName, strClassName
Dim objStudentMarksRs, objTermsRs, arrTerms
Dim strSIDArray
Dim bSubjects, cmdStudentRes
Dim arrCSGs, arrTotals
Dim bWeight, nStatMarksCnt
Dim strActivityID, strSubjClassID, nMaxMark, nMinMark
Dim dtToday
Dim strRepType, bType_CurrentMarks
Dim strTermName, arrTotalMarksStat
Dim bShowWeek, dtWeek, dtWeekEnd, dtStartDate, dtEndDate, dtDebtStart, dtDebtEnd
Dim objStudentAttendance
'Dim nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay
Dim bWeekResults, arrResults, arrReportWeekDays, nReportWeekDaysCnt
Dim objStudentDebts
Dim strTermTypeID, strClassChiefFullName
Dim nMarkCountTotal, nMarkSumTotal
Dim bNoSeparate, arrStudents
Dim bJoinLowMarks
Dim NumberMsgToParents, NumberMsgToStudents


Sub specialRead()
	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0")
	strStudentID = GetSafeID(Request("SID"), "0")
	strTermID = GetSafeID(Request("TERMID"), Null)

	strRepType = GetSafeStr(Request("ReportType"), 1, Null)
	bType_CurrentMarks = (strRepType = "1")
	bShowWeek = False
	If bType_CurrentMarks Then
		bShowWeek = Not IsDull(Request("dtWeek"))
		If bShowWeek Then
			dtWeek = Str2Date(Request("dtWeek"))
			dtWeekEnd = DateAdd("d", 6, dtWeek)
		End If
	End If

	bNoSeparate = (strStudentID = "0")
	If bNoSeparate Then
		If Not bIsStaff Then GenerateError obLanguage("Common","kNoAccess")
	Else
		strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
	End If

	If bNoSeparate Then
		obTokenMgr.SetData strToken, stSeparate, "1"
	Else
		obTokenMgr.SetData strToken, stSeparate, "0"
	End If
End Sub

Sub specialMain()
	Dim objCSGs, objTotals
	Dim i, j
	Dim objResults
	Dim objTermInfo
	Dim objClassInfo, strClassChiefID, objUserInfo
	Dim rsStudents, nUBound

	If Not bNoSeparate Then
		If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then
			GenerateError obLanguage("Common","kNoAccess")
		End If
	End If
	
	strClassName = objNSNET.GetClassName(strClassID)
	Set objClassInfo = objNSNET.GetClassInfo(strClassID)
	If objClassInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strClassChiefID = GetSafeID(objClassInfo("TEACHERID"), Null)
	Set objUserInfo = objNSNET.GetUserInfo(strClassChiefID)
	If objUserInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strClassChiefFullName = GetSafeStr(objUserInfo("LASTNAME"), -1, "") & " " & GetSafeStr(objUserInfo("FIRSTNAME"), -1, "") & " " & GetSafeStr(objUserInfo("MIDDLENAME"), -1, "")

	Call InitSchoolSettings( objNSNET )
	bWeight = (arrSchoolSettings(1, kSSIndex_MarksAveraging) = "1")
	nMaxMark = CLng(arrSchoolSettings(1, kSSIndex_MaxMark))
	nMinMark = CLng(arrSchoolSettings(1, kSSIndex_MinMark))

	bJoinLowMarks = (nMaxMark = 12) And (nMinMark < kReportLimitMark)
	If bJoinLowMarks Then
		nStatMarksCnt = nMaxMark - kReportLimitMark + 1
	Else
		nStatMarksCnt = nMaxMark - nMinMark + 1
	End If

	Set objTermInfo = objNSNET.GetTermInfo(strTermID)
	If objTermInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strTermTypeID = GetSafeID(objTermInfo("TERMTYPEID"), Null)

	Call TermLimits(strTermID)

	dtToday = NSNow()
	dtToday = DateSerial(Year(dtToday), Month(dtToday), Day(dtToday))

	If bType_CurrentMarks And bShowWeek Then
		dtStartDate = IIf(DateDiff("d", dtWeek, dtTermStart, 0, 0) > 0, dtTermStart, dtWeek)
		dtEndDate = IIf(DateDiff("d", dtWeekEnd, dtTermEnd, 0, 0) < 0, dtTermEnd, dtWeekEnd)
		
'		nSYear = Year(dtStartDate) : nSMonth = Month(dtStartDate) : nSDay = Day(dtStartDate)
'		nEYear = Year(dtEndDate) : nEMonth = Month(dtEndDate) : nEDay = Day(dtEndDate)

		dtDebtStart = dtTermStart
		dtDebtEnd = dtTermEnd
		If DateDiff("d", dtDebtEnd, dtToday, 0, 0) < 1 Then
			dtDebtEnd = DateAdd("d", -1, dtToday)
		End If
	End If
	
	If bNoSeparate Then
		Set rsStudents = objNSNET.GetClassStudentListForTerm_IUP(strClassID, 0, strCurrYearID, strTermID, True, False)
		If Not rsStudents.EOF Then
			arrStudents = rsStudents.GetRows(,,Array("STUDENTID"))
		Else
			GenerateError obLanguage("Filter","kNoStudents",strFunctionalityType)
		End If
	Else
		ReDim arrStudents(0, 0)
		arrStudents(0, 0) = strStudentID
	End If
	Set cmdStudentRes = objNSNET.GetStudentResultsForSG_Prepare(dtTermStart, dtTermEnd, 2)
	nUBound = UBound(arrStudents, 2)
	ReDim arrReport1(nUBound)
	ReDim arrReport2(nUBound)
	For j = 0 To nUBound
		strStudentID = arrStudents(0, j)

		strStudentName = objNSNET.GetUserNickName(strStudentID)
		Set objCSGs = objNSNET.GetClassSubjectGroupsForStudent(strStudentID, strClassID, strTermID, True)
		If objCSGs.EOF Then
			bSubjects = False
		Else
			bSubjects = True
			arrCSGs = objCSGs.GetRows(,,Array("ID", "NAME", "GRADINGSYS"))

			ReDim arrTotalMarksStat(nMaxMark) ' arrTotalMarksStat(5), ..(4), ..., ..(2), ..(1) - may be not actual, if nMinMark = 2, for example. arrTotalMarksStat(0) - average.
			For i = 0 To UBound(arrTotalMarksStat)
				arrTotalMarksStat(i) = 0
			Next
			
			If bType_CurrentMarks Then
				If bShowWeek Then
					Set objStudentAttendance = objNSNET.GetStudentAttendance(strClassID, strStudentID, dtStartDate, dtEndDate, False)
					
					bWeekResults = False
					If Not objStudentAttendance.EOF Then
						Set objResults = objStudentAttendance.Fields()("rsTotalResults").Value
						If Not objResults.EOF Then
							bWeekResults = True
							arrResults = objResults.GetRows(,,Array("SUBJCLASSID", "D", "RESULT", "REASON", "AID"))
						End If
					End If

					arrReportWeekDays = GetReportWeekDays()
					nReportWeekDaysCnt = UBound(arrReportWeekDays) + 1
					
					' debt
					Set objStudentDebts = objNSNET.GetStudentDebts(strStudentID, strClassID, dtDebtStart, dtDebtEnd)
				End If
			Else
				strTermName = objNSNET.GetTermName(strTermID)

				Set objTotals = objNSNET.GetCSGTotalsForStudent(strStudentID, strClassID, strTermID)
				If objTotals.EOF Then
					GenerateError obLanguage("Reports","kCantGetStudentTotals")
				End If
				arrTotals = objTotals.GetRows(,,Array("ID", "MARK"))
				If UBound(arrCSGs, 2) <> UBound(arrTotals, 2) Then
					GenerateError obLanguage("Reports","kCantGetStudentTotals")
				End If
				
			End If
		End If

		'strReport = GetReport()
		Call GetReport(j)
	Next

	Call objNSNET.DisposeCommand(cmdStudentRes)
End Sub

Function GetReportWeekDays()
	Dim arrWeekDays
	Dim objRs, nWeekEndSet, nWeekDayNum, nPower2
	Dim nIndex, i, dtCurr, bShowDay

	Set objRs = objNSNET.GetYearInfo(strCurrYearID)
	nWeekEndSet = CLng(objRs("WEEKENDSET")) ' хранятся степени 2, по-англ., от 0 (0 - воскр., 1 - понед., ..., 6 - суббота)

	ReDim arrWeekDays(6)
	nIndex = -1
	
	dtCurr = dtWeek
	While DateDiff("d", dtCurr, dtWeekEnd, 0, 0) >= 0

		bShowDay = True
		nWeekDayNum = WeekDay(dtCurr, vbSunday)
		nPower2 = 2^(nWeekDayNum - 1)
		If (nWeekEndSet And nPower2) <> 0 Then
			' weekend
			bShowDay = False
			If bWeekResults Then
				For i = 0 To UBound(arrResults, 2)
					If DateDiff("d", dtCurr, arrResults(kRes_Due, i), 0, 0) = 0 Then
						bShowDay = True ' Result in weekend
						Exit For
					End If
				Next
			End If
		End If
		
		If bShowDay Then
			nIndex = nIndex + 1
			arrWeekDays(nIndex) = dtCurr
		End If

		dtCurr = DateAdd("d", 1, dtCurr)
	WEnd
	
	If nIndex = -1 Then
		GenerateError obLanguage("Reports","kNoSchoolDayInWeek")  
	Else
		ReDim Preserve arrWeekDays(nIndex)
	End If
	
	GetReportWeekDays = arrWeekDays
End Function

Function GetTableHeader()
End Function

Function GetTableHeaderString()
End Function

Function GetReportTable()
	Dim strReport, i
	Dim strCSGID, dtCurr
	Dim nResultIndex
	Dim strOfTerm
	Dim strDay
	Dim strTotalMark, nTotalMark
	Dim bIsGradeSystemPass

	If strTermTypeID = "1" Then
		strOfTerm = obLanguage("Reports","kOfQuarter")
	ElseIf strTermTypeID = "2" Then
		strOfTerm = obLanguage("Reports","kOfTerm")
	ElseIf strTermTypeID = "3" Then
		strOfTerm = obLanguage("Reports","kOfHalfYear")
	Else
		strOfTerm = obLanguage("Reports","kOfCommonTerm")
	End If
	
	strReport = GetTableHeader() & "<th rowspan=""2"">" & obLanguage("Common","kSubject") & "</th>" & _
		"<th colspan=""" & (nStatMarksCnt + 1) & """>" & obLanguage("Reports","kMarksFromStart") & " " & strOfTerm & "</th>"

	If bType_CurrentMarks Then
		If bShowWeek Then
			strReport = strReport & "<th colspan=""" & nReportWeekDaysCnt & """>" & obLanguage("Reports","kForWeek") & "<br>" & Date2Str(dtWeek) & "&nbsp;-&nbsp;" & Date2Str(dtWeekEnd) & "</th>"
		End If
	Else
		strReport = strReport & "<th rowspan=""2"">" & obLanguage("Filter","kMarkFor") & "<br>" & DB2HTML(strTermName) & "</th>"
	End If
			
	strReport = strReport & "</tr>" & GetTableHeaderString()
		
	If bJoinLowMarks Then
		For i = nMaxMark To kReportLimitMark + 1 Step -1
			strReport = strReport & "<th class=""text-nowrap"">""" & i & """</th>"
		Next
		strReport = strReport & "<th class=""text-nowrap"">""" & kReportLimitMark & "-" & nMinMark & """</th>"
	Else
		For i = nMaxMark To nMinMark Step -1
			strReport = strReport & "<th class=""text-nowrap"">""" & i & """</th>"
		Next
	End If
	strReport = strReport & "<th>" & obLanguage("Reports","kAverageMarkS_2") & "</th>"

	If bType_CurrentMarks And bShowWeek Then
		For i = 0 To UBound(arrReportWeekDays)
			dtCurr = arrReportWeekDays(i)
			strDay = Day(dtCurr)
			If Len(strDay) = 1 Then strDay = "&nbsp;" & strDay & "&nbsp;"
			strReport = strReport & "<th>&nbsp;" & strDay & "&nbsp;</th>"
		Next
	End If
	strReport = strReport & "</tr>"
	
	nResultIndex = 0
	nMarkCountTotal = 0
	nMarkSumTotal = 0

	If Not bType_CurrentMarks Then
		Call GetMarkTypesInfo(True, nMinMark, nMaxMark) ' Если не известно точно значение bIsGradeSystemPass, то передаём True и получаем полный список
	End If

	For i = 0 To UBound(arrCSGs, 2)
		strReport = strReport & "<tr><td class=""cell-text"">" & DB2HTML(arrCSGs(kCSG_SubjectName, i)) & "</td>"
		strCSGID = GetSafeID(arrCSGs(kCSG_ID, i), Null)
		strReport = strReport & ShowCSGInfo(strCSGID)
		bIsGradeSystemPass = (GetSafeLng(arrCSGs(kCSG_Pass, i), 0) = 1)

		If bType_CurrentMarks Then
			If bShowWeek Then
				strReport = strReport & ShowWeekInfo(strCSGID, nResultIndex)
			End If
		Else
			' В данном отчёте показываются только итоговые оценки за учебные периоды, а годовых, экаменационных, итоговых за год - нет.
			' Поэтому для флага bIsGradeSystemPass отдельно не смотрим на оценки за экзамен.
			strTotalMark = ""
			If Not IsDull(arrTotals(kTotal_Mark, i)) Then
				nTotalMark = CLng(arrTotals(kTotal_Mark, i))
				nTotalMark = GetMark(nTotalMark, bIsGradeSystemPass)
				strTotalMark = CStr(nTotalMark)
			End If
			strReport = strReport & "<td>" & DB2HTML(strTotalMark) & "</td>"
		End If

		strReport = strReport & "</tr>"
	Next
	
	strReport = strReport & "<tr class=""totals""><td>" & obLanguage("Reports","kTotal_2") & "</td>"
	For i = nMaxMark To IIf(bJoinLowMarks, kReportLimitMark, nMinMark) Step -1
		strReport = strReport & "<td>" & IIf(arrTotalMarksStat(i) = 0, "&nbsp;", arrTotalMarksStat(i)) & "</td>"
	Next
	
	strReport = strReport & "<td>" ' total average
	If bWeight Or (nMarkCountTotal = 0) Then
		strReport = strReport & "&nbsp;"
	Else
		strReport = strReport & FormatNumber(nMarkSumTotal/CDbl(nMarkCountTotal), 2)
	End If
	strReport = strReport & "</td>"

	If bType_CurrentMarks Then
		If bShowWeek Then
			strReport = strReport & "<td colspan=""" & nReportWeekDaysCnt & """>&nbsp;</td>"
		End If
	Else
		strReport = strReport & "<td>&nbsp;</td>"
	End If
	
	strReport = strReport & "</tr></table>"

	If bShowWeek Then
		If Not objStudentDebts.EOF Then
			strReport = strReport & "<br><div class=""select""><b>" & obLanguage("Reports","kSubjectDebts") & ":</b><br>"
			While Not objStudentDebts.EOF
				strReport = strReport & kDebtDispl & DB2HTML(objStudentDebts("SUBJECTNAME")) & ":&nbsp;" & DB2HTML(objStudentDebts("ASSIGNMENTNAME")) & "<br>"
				objStudentDebts.MoveNext
			WEnd
			strReport = strReport & "</div>"
		End If
	End If

	strReport = strReport & GetReportTail()
	GetReportTable = strReport
End Function

Function ShowWeekInfo(strCSGID, ByRef nResultIndex)
	Dim strReport, i
	Dim dtCurr, strData, dtDue
	Dim strRes
	Dim nResultDB
	strReport = ""
	For i = 0 To UBound(arrReportWeekDays)
		dtCurr = arrReportWeekDays(i)
		strData = ""

		Do
			If Not bWeekResults Then Exit Do
			If nResultIndex > UBound(arrResults, 2) Then Exit Do
			If strCSGID <> GetSafeID(arrResults(kRes_CSGID, nResultIndex), Null) Then Exit Do

			dtDue = CDate(arrResults(kRes_Due, nResultIndex))
			If DateDiff("d", dtCurr, dtDue, 0, 0) = 0 Then
				strRes = GetSafeStr(arrResults(kRes_REASON, nResultIndex), -1, "")
				If strRes = "" Then
					nResultDB = arrResults(kRes_RESULT, nResultIndex)
					If Not IsDull(nResultDB) Then
						strRes = GetSafeLng(nResultDB, 0)' (objRs("Res"))
						strActivityID = arrResults(kRes_AID, nResultIndex)' objRs("AID")
						strSubjClassID = arrResults(kRes_CSGID, nResultIndex)' objRs("SUBJCLASSID")
						strRes = GetGradingCommon(strRes)
					End If
				End If

				If Not IsDull(strRes) Then
					strData = strData & strRes & " "
				End If
				nResultIndex = nResultIndex + 1
			Else
				Exit Do
			End If
		Loop

		If strData <> "" Then
			strData = Left(strData, Len(strData) - 1)
		End If
		strReport = strReport & "<td>" & DB2HTML(strData) & "</td>"
	Next

	ShowWeekInfo = strReport
End Function

Function ShowCSGInfo(strCSGID)
	Dim strReport, i
	Dim rsRes, arrStat
	
	Set rsRes = objNSNET.GetStudentResultsForSG_ExecuteSimple(cmdStudentRes, strStudentID, strCSGID)
	arrStat = GetCSGPeriodStat(rsRes)
	strReport = ""
	For i = nMaxMark To IIf(bJoinLowMarks, kReportLimitMark, nMinMark) Step -1
		strReport = strReport & "<td>" & IIf(arrStat(i) = 0, "&nbsp;", arrStat(i)) & "</td>"
		arrTotalMarksStat(i) = arrTotalMarksStat(i) + arrStat(i)
	Next
	strReport = strReport & "<td>" & IIf(arrStat(0) = 0, "&nbsp;", FormatNumber(arrStat(0), 2)) & "</td>" ' average
	arrTotalMarksStat(0) = arrTotalMarksStat(0) + arrStat(0)

	ShowCSGInfo = strReport
End Function

Function GetCSGPeriodStat(rsResult)
	Dim nMarkSum, nMark, nMarkCount
	Dim nAVGMark
	Dim nRes
	Dim bActualMark, bShowWeightedAvg, nTotalWeight, nWeight
	Dim arrMarksStat, i
	Dim arrCSGResults
	Dim strAType, strCMID, n, strCurrAType, strCurrCMID
	Dim nCorrMark

	ReDim arrMarksStat(nMaxMark) ' arrMarksStat(5), arrMarksStat(4), ..., arrMarksStat(2), arrMarksStat(1) - may be not actual, if nMinMark = 2, for example. arrMarksStat(0) - average.
	For i = 0 To UBound(arrMarksStat)
		arrMarksStat(i) = 0
	Next

	If rsResult.EOF Then
		GetCSGPeriodStat = arrMarksStat
		Exit Function
	End If

	bShowWeightedAvg = False
	nTotalWeight = 0
	nMarkCount = 0
	nMarkSum = 0
	
	arrCSGResults = rsResult.GetRows(,,Array("ID", "RESULT", "ACTIVITYID", "WEIGHT", "DUEDATE", "TYPE", "CLASSMEETINGID"))

	For i = 0 To UBound(arrCSGResults, 2)
		nMark = GetResultFromDBFormat(arrCSGResults, i)
		nWeight = GetSafeLng(arrCSGResults(kInd_Weight, i), 0)

		bActualMark = (nMark <= nMaxMark)
		If bWeight And bActualMark And (nMark = 0) Then
			' Не учитываем "весовые" оценки, дата сдачи которых ещё не прошла
			If IsNull(arrCSGResults(kInd_Duedate, i)) Then
				bActualMark = False
			ElseIf DateDiff( "d", dtToday, arrCSGResults(kInd_Duedate, i), 0, 0 ) >= 0 Then
				bActualMark = False
			End If
		End If

'		If bActualMark And Not bWeight And (nMark = 0) Then
'		    bActualMark = False
'		End If

		If kIsTKR Then
			strAType = arrCSGResults(kInd_Type, i) 'arrStudRes(9, j)
			If strAType = obLanguage("Assignment","kATTKRThemeS") Then
				If GetSafeLng(nMark, 0) < 0 Then
					nMark = 0
'				    bActualMark = False
				End If
			End If
		End If

		If bActualMark And (nMark <> 0) Then
			If bJoinLowMarks And (nMark < kReportLimitMark) Then
				arrMarksStat(kReportLimitMark) = arrMarksStat(kReportLimitMark) + 1
			Else
				arrMarksStat(nMark) = arrMarksStat(nMark) + 1
			End If
		End If

		If kIsTKR Then
			' берём только ТКР-оценки (по алгоритму), остальные - обнуляем;
			' здесь предполягаем, что если есть коррекц. оценка, то озенка за тему - обязательно есть.
' 9.04.2009. Сейчас только одна оценка по ТКР - "за тему".
'			strAType = arrCSGResults(kInd_Type, i) 'arrStudRes(9, j)
			If strAType = obLanguage("Assignment","kATTKRThemeS") Then
'				strCMID = arrCSGResults(kInd_CMID, i) 'arrStudRes(8, j)
'
'				For n = (i + 1) To Ubound( arrCSGResults, 2 )
'					strCurrCMID = arrCSGResults(kInd_CMID, n)
'					If strCurrCMID = strCMID Then
'						strCurrAType = arrCSGResults(kInd_Type, n)
'						If strCurrAType = kATTKRCorrectS Then
'							nCorrMark = GetResultFromDBFormat(arrCSGResults, n) 'arrStudRes(4, n)
'							If nCorrMark > nMark Then
'								nMark = nCorrMark
'							End If
'							Exit For
'						End If
'					Else
'						Exit For
'					End If
'				Next
			Else
				nMark = 0
				bActualMark = False
			End If
		End If
			
		If bActualMark Then
			If Not bWeight Then
				If nMark > 0 Then
					nMarkCount = nMarkCount + 1
					nMarkSum = nMarkSum + nMark
				End If
			Else
				nTotalWeight = nTotalWeight + nWeight
				If nMark > nMinMark Then
					nMarkSum = nMarkSum + (nMark - nMinMark) * nWeight
				End If
				bShowWeightedAvg = True
			End If
		End If
	Next
	
	If Not bWeight Then
		If nMarkCount > 0 Then
			nAVGMark = nMarkSum/CDbl(nMarkCount)
		Else
			nAVGMark = 0
		End If
		nMarkCountTotal = nMarkCountTotal + nMarkCount
		nMarkSumTotal = nMarkSumTotal + nMarkSum
	Else
		If Not bShowWeightedAvg Then
			nAVGMark = 0
		Else
			If nTotalWeight = 0 Then nTotalWeight = 1
			nAVGMark = (nMarkSum/CDbl(nTotalWeight)) + nMinMark
		End If
	End If
	arrMarksStat(0) = nAVGMark

	GetCSGPeriodStat = arrMarksStat
End Function

Function GetResultFromDBFormat(arrCSGResults, i)
	Dim nResultDB, nResult

	If IsDull(arrCSGResults(kInd_Result, i)) Then
		nResult = 0
	Else
		strActivityID = GetSafeStr(arrCSGResults(kInd_ActivityID, i), -1, Null)
		nResultDB = GetSafeLng(arrCSGResults(kInd_Result, i), Null)
		If nResultDB < 0 Then
			' now for TKR possible only
			nResult = 0
		Else
			If strActivityID <> kActivityID_Manual Then strSubjClassID = GetSafeID(arrCSGResults(kInd_ID, i), Null)
			nResult = GetGradingCommon(nResultDB)
			'nResult = Round( nResult )
		End If
	End If
	GetResultFromDBFormat = nResult
End Function

Function GetPageTitle( strPageName )
	Dim strTitle, strSchoolInfo, strSchoolInfoTable
	Dim n, i, strScName
	Dim objSchoolInfo, strSchName, strCityName, strAddress, strTel, strFax
	Dim strLogoFile

	strTitle = "<div class=""body"" style=""font-size:12.0pt"" align=""center"">" & DB2HTML(strPageName) & "</div><br/>"
	If IsDull(strSchoolID) Then
		strSchoolInfoTable = ""
	Else
		Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
		strSchName = GetSafeStr(objSchoolInfo("SCHOOLNAME"), -1, Null)
		strCityName = objNSNET.GetCityName(GetSafeID(objSchoolInfo("CITYID"), Null))

		strAddress = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00address")
		strTel = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00phones")
		strFax = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00fax")

		'TODO. прописать путь к новому логотипу
		'strLogoFile = strThemeFolder & clsPathHelper.MenuPath & "/N.gif"
		
		strSchoolInfoTable = GetSchoolInfoTable(strSchName, strCityName, strAddress, strTel, strFax, strLogoFile)
	End If
	strTitle = strTitle & strSchoolInfoTable
	strTitle = strTitle & GetParentsNames()
	
	GetPageTitle = strTitle
End Function

Function GetReportTitle()
	GetReportTitle = "<br><div class=""select""><b>" & obLanguage("Reports","kAttendanceRegister") & ": " & DB2HTML(strStudentName) & ", " & DB2HTML(strClassName) & "</b></div><br>"
End Function

Function GetParentsNames()
	Dim objParentList
	Dim strText, strDear, strGender, bFirst
	
	strText = ""
	Set objParentList = objNSNET.GetAssignedToStudentParentList(strStudentID, strCurrYearID)
	If objParentList.EOF Then
		GetParentsNames = strText
		Exit Function
	End If
	
	If objParentList.RecordCount = 1 Then
		strGender = GetSafeStr(objParentList("GENDER"), 1, Null)
		If strGender = obLanguage("Common","kMaleLet") Then
			strDear = obLanguage("Reports","kDearMale")
		Else
			strDear = obLanguage("Reports","kDearFemale")
		End If
	Else
		strDear = obLanguage("Reports","kDearPlural")
	End If
	
	strText = strDear & " "
	If objParentList.RecordCount = 2 Then
		strText = strText & GetSafeStr(objParentList("FIRSTNAME"), -1, "") & " " & GetSafeStr(objParentList("MIDDLENAME"), -1, "") & " " & obLanguage("Reports","kAnd") & " "
		objParentList.MoveNext
		strText = strText & GetSafeStr(objParentList("FIRSTNAME"), -1, "") & " " & GetSafeStr(objParentList("MIDDLENAME"), -1, "")
	Else
		bFirst = True
		While Not objParentList.EOF
			If bFirst Then
				bFirst = False
			Else
				strText = strText & ", "
			End If
			strText = strText & GetSafeStr(objParentList("FIRSTNAME"), -1, "") & " " & GetSafeStr(objParentList("MIDDLENAME"), -1, "")
			objParentList.MoveNext
		WEnd
	End If

	GetParentsNames = "<br><div class=""select""><i>" & DB2HTML(strText) & "!</i></div>"
End Function
%>
