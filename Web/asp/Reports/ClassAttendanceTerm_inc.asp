<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const ind_TERMID	= 0
Const ind_TERMNAME	= 1
Const ind_STARTDATE = 2
Const ind_SUMS		= 3

Dim strAccYear, strAccClass, strTeacherName, strPeriod, bYear, strTermName
Dim strClassID', strTitle

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNAttendanceSummary")
End Function
Function GetTitleEx()
	GetTitleEx = " "& strAccClass &" "&obLanguage("Reports","kFor")&" "&strPeriod
End Function
Function GetPageParams()
	If Not bYear Then
	GetPageParams = Array(_
		obLanguage("Common","kSchoolYear"), strAccYear, _
		obLanguage("Filter","kClassGB",strFunctionalityType), strAccClass, _
		obLanguage("Common","kPeriod"), strTermName)
	Else
	GetPageParams = Array(_
		obLanguage("Common","kSchoolYear"), strAccYear, _
		obLanguage("Filter","kClassGB",strFunctionalityType), strAccClass _
		)
	End If
End Function

Function GetReportTable()
	GetReportTable = DrawAttendanceTable() 
End Function

Sub specialRead()
	strClassID = GetSafeID(Request("PCLID"), Null)
	strTermID = GetSafeID( Request("TERMID"), Null )
	strAccYear = obTokenMgr.GetData(strToken, "CurrYearName")
End Sub

Sub specialMain()
	strAccClass = objNSNET.GetClassName(strClassID)
	If strTermID = "-1" Then
		strPeriod = LCase(obLanguage("Common","kSchoolYear"))
		bYear = true
	Else
		strPeriod = LCase(obLanguage("Common","kSchoolPeriod"))
		bYear = false
		strTermName = objNSNET.GetTermName(strTermID)
	End If
	'strTitle = obLanguage("ReportNames","kRNAttendanceSummary") & " "&obLanguage("Reports","kFor")&" " & strPeriod
	strReport = GetReport()
	'Call DrawReport()
End Sub

Function GetTableHeader()
	GetTableHeader = "<div class=""body"">"& obLanguage("Reports","kMissed") &"</div><br><table class=""table-print-num"">"
End Function


Function DrawAttendanceTable()
	Dim strReport, i, j, strRepS1, strRepS2, strRepS3, strTabTitle1, strTabTitle2
	Dim objStudentsRs, objTermRs, objReportRs
	Dim arrTerms, bFound, dtStartDate
	Dim nDaysTotal, nDaysGoodReason, nLessonsTotal, nLessonsGoodReason, nDaysIll, nLessonsIll
	Dim nDaysTotalSum, nDaysGoodReasonSum, nLessonsTotalSum, nLessonsGoodReasonSum, nDaysIllSum, nLessonsIllSum
	Dim strFullName

	strTabTitle1 = "<th colspan=3>" & obLanguage("Reports","kDays") &"</th><th colspan=3>"& obLanguage("Reports","kLessons") &"</th>"
	strTabTitle2 = "<th>" & obLanguage("Reports","kTotalNumber") &"</th><th>"& obLanguage("Reports","kGoodReason") & "</th><th>" & obLanguage("Reports", "kIll") & "</th>"
	strReport = strReport & GetTableHeader()

	If bYear Then
		strReport = strReport & "<tr><th rowspan=""3"">"& obLanguage("Reports","kLastNameFirstName") &"</th>"
	Else
		strReport = strReport & "<tr><th rowspan=""2"">"& obLanguage("Reports","kLastNameFirstName") &"</th>"
	End If

	Set objStudentsRs = objNSNET.GetClassStudentListForTerm_IUP(strClassID, Empty, strCurrYearID, strTermID, False, False)
	If objStudentsRs.EOF Then GenerateError obLanguage("Filter","kNoStudentsInClassForPeriod",strFunctionalityType)
	
	If bYear Then
		Set objTermRs = objNSNET.GetClassTermList(strClassID)
		If objTermRs.EOF Then GenerateError obLanguage("Reports","kNoTermsInSchoolYear")
		arrTerms = objTermRs.GetRows(,,Array("TERMID", "TERMNAME", "STARTDATE", "TERMID")) ' the last parameter will collect sums

		Set objReportRs = objNSNET.GetTermClassAttendanceReport(strClassID, 0)

		strRepS2 = "</tr>"
		strRepS3 = "</tr>"
		For i = 0 To UBound(arrTerms, 2)
			strReport = strReport & "<th colspan=""6"">" & DB_2_HTML(arrTerms(ind_TERMNAME,i)) & "</th>"
			strRepS2 = strRepS2 & strTabTitle1
			strRepS3 = strRepS3 & strTabTitle2 & strTabTitle2
			arrTerms(ind_SUMS,i) = Array(0, 0, 0, 0, 0, 0)
		Next

		strReport = strReport & "<th colspan=""6"">"& obLanguage("Reports","kTotalForYear") &"</th>" & strRepS2 & strTabTitle1 & strRepS3 & strTabTitle2 & strTabTitle2 & "</tr>"
		While Not objStudentsRs.EOF
			strFullName = MakeShortNickName(objStudentsRs)
			strReport = strReport & "<tr class=""text-nowrap""><td class=""cell-text"">" & DB_2_HTML(strFullName) & "</td>"

			nDaysTotalSum = 0 : nDaysGoodReasonSum = 0 : nLessonsTotalSum = 0 : nLessonsGoodReasonSum = 0 : nDaysIllSum = 0 : nLessonsIllSum = 0
			For j = 0 To UBound(arrTerms, 2)
				bFound = False
				Do While Not objReportRs.EOF
					If Trim(objReportRs("NICKNAME")) > Trim(objStudentsRs("NICKNAME")) Then Exit Do
					If Trim(objReportRs("NICKNAME")) = Trim(objStudentsRs("NICKNAME")) Then 
						If objReportRs("USERID") > objStudentsRs("STUDENTID") Then Exit Do
						If objReportRs("USERID") = objStudentsRs("STUDENTID") Then
							If objReportRs("STARTDATE") > arrTerms(ind_STARTDATE,j) Then Exit Do
							If objReportRs("TERMID") = arrTerms(ind_TERMID,j) Then
								bFound = True
								Exit Do
							End If
						End If
					End If
					objReportRs.MoveNext
				Loop
				If bFound Then
					nDaysTotal = CLng(objReportRs("DAYS_TOTAL"))
					nDaysIll = CLng(objReportRs("DAYS_ILL"))
					nDaysGoodReason = CLng(objReportRs("DAYS_GOODREASON")) ' + nDaysIll - это сумирование перенёс в запрос для DAYS_GOODREASON
					nLessonsIll = CLng(objReportRs("LESSONS_ILL"))
					nLessonsTotal = CLng(objReportRs("LESSONS_TOTAL"))
					nLessonsGoodReason = CLng(objReportRs("LESSONS_GOODREASON")) + nLessonsIll
					objReportRs.MoveNext

					nDaysTotalSum = nDaysTotalSum + nDaysTotal
					nDaysGoodReasonSum = nDaysGoodReasonSum + nDaysGoodReason
					nLessonsTotalSum = nLessonsTotalSum + nLessonsTotal
					nLessonsGoodReasonSum = nLessonsGoodReasonSum + nLessonsGoodReason
					nDaysIllSum = nDaysIllSum + nDaysIll
					nLessonsIllSum = nLessonsIllSum + nLessonsIll

					arrTerms(ind_SUMS,j)(0) = arrTerms(ind_SUMS,j)(0) + nDaysTotal
					arrTerms(ind_SUMS,j)(1) = arrTerms(ind_SUMS,j)(1) + nDaysGoodReason
					arrTerms(ind_SUMS,j)(2) = arrTerms(ind_SUMS,j)(2) + nDaysIll
					arrTerms(ind_SUMS,j)(3) = arrTerms(ind_SUMS,j)(3) + nLessonsTotal
					arrTerms(ind_SUMS,j)(4) = arrTerms(ind_SUMS,j)(4) + nLessonsGoodReason
					arrTerms(ind_SUMS,j)(5) = arrTerms(ind_SUMS,j)(5) + nLessonsIll

					strReport = strReport & Cell(nDaysTotal) & Cell(nDaysGoodReason) & Cell(nDaysIll) & Cell(nLessonsTotal) & Cell(nLessonsGoodReason) & Cell(nLessonsIll)
				Else
					strReport = strReport & "<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>"
				End If
			Next

			strReport = strReport & Cell(nDaysTotalSum) & Cell(nDaysGoodReasonSum) & Cell(nDaysIllSum) & Cell(nLessonsTotalSum) & Cell(nLessonsGoodReasonSum) & Cell(nLessonsIllSum) & "</tr>"
			objStudentsRs.MoveNext
		WEnd

		strReport = strReport & "<tr class=""totals""><td>Всего</td>"

		nDaysTotalSum = 0 : nDaysGoodReasonSum = 0 : nLessonsTotalSum = 0 : nLessonsGoodReasonSum = 0 : nDaysIllSum = 0 : nLessonsIllSum = 0
		For j = 0 To UBound(arrTerms, 2)
			nDaysTotal = arrTerms(3,j)(0)
			nDaysGoodReason = arrTerms(3,j)(1)
			nDaysIll = arrTerms(3,j)(2)
			nLessonsTotal = arrTerms(3,j)(3)
			nLessonsGoodReason = arrTerms(3,j)(4)
			nLessonsIll = arrTerms(3,j)(5)

			nDaysTotalSum = nDaysTotalSum + nDaysTotal
			nDaysGoodReasonSum = nDaysGoodReasonSum + nDaysGoodReason
			nDaysIllSum = nDaysIllSum + nDaysIll
			nLessonsTotalSum = nLessonsTotalSum + nLessonsTotal
			nLessonsGoodReasonSum = nLessonsGoodReasonSum + nLessonsGoodReason
			nLessonsIllSum = nLessonsIllSum + nLessonsIll

			strReport = strReport & Cell(nDaysTotal) & Cell(nDaysGoodReason) & Cell(nDaysIll) & Cell(nLessonsTotal) & Cell(nLessonsGoodReason) & Cell(nLessonsIll)
		Next

		strReport = strReport & Cell(nDaysTotalSum) & Cell(nDaysGoodReasonSum) & Cell(nDaysIllSum) & Cell(nLessonsTotalSum) & Cell(nLessonsGoodReasonSum) & Cell(nLessonsIllSum) & "</tr>"
	Else  ' Term
		Set objTermRs = objNSNET.GetTermInfo(strTermID)
		If objTermRs.EOF Then GenerateError obLanguage("Filter","kErrTermNotFound")
		dtStartDate = objTermRs("STARTDATE")

		Set objReportRs = objNSNET.GetTermClassAttendanceReport(strClassID, strTermID)

		strReport = strReport & strTabTitle1 & "</tr><tr>" & strTabTitle2 & strTabTitle2 & "</tr>"

		While Not objStudentsRs.EOF
			strFullName = MakeShortNickName(objStudentsRs)
			strReport = strReport & "<tr><td class=""cell-text"">" & DB_2_HTML(strFullName) & "</td>"

			bFound = False
			Do While Not objReportRs.EOF
				If Trim(objReportRs("NICKNAME")) > Trim(objStudentsRs("NICKNAME")) Then Exit Do
				If Trim(objReportRs("NICKNAME")) = Trim(objStudentsRs("NICKNAME")) Then 
					If objReportRs("USERID") > objStudentsRs("STUDENTID") Then Exit Do
					If objReportRs("USERID") = objStudentsRs("STUDENTID") Then
						bFound = True
						Exit Do
					End If
				End If
				objReportRs.MoveNext
			Loop
			If bFound Then
				nDaysTotal = objReportRs("DAYS_TOTAL")
				nDaysIll = objReportRs("DAYS_ILL")
				nDaysGoodReason = GetSafeLng(objReportRs("DAYS_GOODREASON"),0) ' + nDaysIll - это сумирование перенёс в запрос для DAYS_GOODREASON
				nLessonsTotal = objReportRs("LESSONS_TOTAL")
				nLessonsIll = objReportRs("LESSONS_ILL")
				nLessonsGoodReason = objReportRs("LESSONS_GOODREASON") + nLessonsIll
				objReportRs.MoveNext

				strReport = strReport & Cell(nDaysTotal) & Cell(nDaysGoodReason) & Cell(nDaysIll) & Cell(nLessonsTotal) & Cell(nLessonsGoodReason) & Cell(nLessonsIll)

				nDaysTotalSum = nDaysTotalSum + nDaysTotal
				nDaysGoodReasonSum = nDaysGoodReasonSum + nDaysGoodReason
				nDaysIllSum = nDaysIllSum + nDaysIll
				nLessonsTotalSum = nLessonsTotalSum + nLessonsTotal
				nLessonsGoodReasonSum = nLessonsGoodReasonSum + nLessonsGoodReason
				nLessonsIllSum = nLessonsIllSum + nLessonsIll
			Else
				strReport = strReport & "<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>"
			End If
			strReport = strReport & "</tr>"
			objStudentsRs.MoveNext
		WEnd

		strReport = strReport & "<tr class=""totals""><td>Всего</td>" & _
									Cell(nDaysTotalSum) & Cell(nDaysGoodReasonSum) & Cell(nDaysIllSum) & Cell(nLessonsTotalSum) & Cell(nLessonsGoodReasonSum) & Cell(nLessonsIllSum) & _
								"</tr>"
	End If 'bYear

	DrawAttendanceTable = strReport & "</table>"
End Function

Function Cell(ByVal nValue)
	Cell = "<td>" & IIF(nValue=0, "-", nValue) & "</td>"
End Function
%>
