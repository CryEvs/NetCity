<!-- #INCLUDE VIRTUAL="/asp/Grade/DrawJournal_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Const indCSGID = 0
Const indPeriodTypeId = 1
Const indAbbr = 2

Dim objRs
Dim nSubjClassID
Dim i, bIsNumber, strClassName, strSubjectName, objTeacherInfo, strMainTeacherNickName, nTeacherIdOfSelectedSubject, strTeacherFullNameOfSS 'nTeacherIdOfSelectedSubject - Дальше SelectedSubject будет сокращённо SS
Dim strAccYear, strAccDate, strSubjClassName, strClassGroup
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate

Dim objDsStudentsResAndAt
Dim PRINT_PAGE_BREAK, OTHER_ASSIGNEMENTS_CELLS, bStartNewPage, bPrintOtherAssignements, bShowHours
Dim objCSGSrs, objStudRs, rsDays, objAssignmentsRs, objHomeAssignmentsRs

Dim strNameList, strAssignID
Dim dblTotal5, dblTotal4, dblTotal3, dblSumScore, lngNumOfTests
Dim dblTotalTotal5, dblTotalTotal4, dblTotalTotal3, lngTotalNumOfTests
Dim nLimitAssCnt, nAnchor, nTotalMark, nTermID, nLastDrowTermID
Dim bEmptyExamTypes, arrExamTypes

'Grading Scales Calculation variables
Dim strSubjClassID, strActivityID

Dim bPrint, bLimitedJournalEditing, nMaxMark, nMinMark
Dim nAssignTableRowSpan

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","KRNClassJournal",strFunctionalityType)
End Function

Function GetJournalTableHeader()
	GetJournalTableHeader = "<table class=""table-print-num"">" & _
			"<tr rowspan=""2"">"
End Function
Function GetAssignmentsTableHeader(bOtherAssignement)
	Dim strOtherAssignement

	strOtherAssignement = IIF(bOtherAssignement, "<th>" & obLanguage("Assignment","kOtherTypeAssignments") & "</th><th>" & obLanguage("Assignment","kATAssignmentType") & "</th>", "")
	GetAssignmentsTableHeader = "<table class=""table-print-text"">" & _
			"<tr>" & _
			"<th>" & obLanguage("Common","kDate") & "</th><th>" & obLanguage("Reports","kThatLearningOnClassMeeting") & "</th><th>" & obLanguage("Assignment","kHomeAssignment") & "</th>" & strOtherAssignement & "</tr>"
End Function

Function GetCustomPageTitleHeader(strScName, strPageName)
	If nSubjClassID = -1 Then
		'для значеня "Все" - на странице отчета дополнительно выводится титульный лист
		GetCustomPageTitleHeader = GetMainPagePrint()
	End If
End Function

Function GetTitleParams()
	GetTitleParams = Array( _
		obLanguage("Common","kSchoolYear"),strAccYear, _
		obLanguage("Common","kPeriod"), strAccDate, _
		obLanguage("Common","kClass",strFunctionalityType), strClassName )
End Function

Function GetMainPagePrint()
	Dim strTopic, strFullSchoolName, strClassChief
	strTopic = "<div class=""body"" style=""font-size:14.0pt"" align=""center"">" & DB2HTML(obLanguage("Common", "kJournal", strFunctionalityType)) & "</div><br><br><br><br><br>"
	strFullSchoolName = "<div class=""body"" style=""font-size:12.0pt"" align=""center"">" & DB2HTML(objNSNET.GetFullSchoolName(strSchoolID)) & "</div><br><br><br><br><br><br>"
	strClassChief = "<div class=""select"" style=""font-size:11.0pt"" align=""right"">" & DB2HTML(obLanguage("Common","kClassChief",strFunctionalityType)) & ":&nbsp" & strMainTeacherNickName & "</div><br><br><br>"
	GetMainPagePrint = strTopic & strFullSchoolName & GetPageParamsStr(GetTitleParams()) & strClassChief & PRINT_PAGE_BREAK
End Function 

Function GetPageParams()
	'для значеня "Все" - отрисовка значений входных фильтров происходит на титульном листе
	If nSubjClassID = -1 Then Exit Function
	GetPageParams = GetTitleParams()
End Function

Function GetTableHeader()
End Function

Function GetTableHeaderString()
End Function

Sub specialRead()
	Dim objCSGInfo, strClassGroup
	Dim objClassInfo, objTeacherOfSS

	bReport = True
	ReadDateRange
	' #12174 Теперь отчёт всегда для выбранного класса, это может быть ИУП-класс
	strClassID = GetSafeStrParam(Request("PCLID"), Null)
	nLimitAssCnt = GetSafeLng(Request("ACNT"),40)
	nSubjClassID = GetSafeLng( Request("SCLID"), GetSafeLng(obTokenMgr.GetData(strToken,stCurrSubjClass),Null))
	strSubjClassID = nSubjClassID
	Set objClassInfo = objNSNET.GetClassInfo(strClassId)
	strClassName = objClassInfo("CLASSNAME")
	Set objTeacherInfo = objNSNET.GetUserInfo(objClassInfo("TEACHERID"))
	strMainTeacherNickName = objTeacherInfo("NICKNAME")

	bIsIupGrade = Not IsDull(objClassInfo("IUP"))
	If bIsIupGrade Then
		strIupGrade = CStr(GetSafeLng(objClassInfo("GRADE"), -1))
	Else
		strIupGrade = "-1"
	End If

	If nSubjClassID <> "-1" Then
		nTeacherIdOfSelectedSubject = GetSafeLng(Request("TID"), -1)
		Set objTeacherOfSS = objNSNET.GetUserInfo(nTeacherIdOfSelectedSubject)
		strTeacherFullNameOfSS = objTeacherOfSS("LASTNAME") & " " & objTeacherOfSS("FIRSTNAME") & " " & objTeacherOfSS("MIDDLENAME")
	End If
	strAccDate = "с " & Date2Str(dtStartDate) & " по " & Date2Str(dtEndDate)

	strAccYear = obTokenMgr.GetData(strToken, "CurrYearName")
	bPrint = true
	bLimitedJournalEditing = False
	nMaxMark = obTokenMgr.GetData( strToken, stMaxMark )
	bStartNewPage =  GetSafeBool(Request("StartNewPage"), False)
	bPrintOtherAssignements = GetSafeBool(Request("PrintOtherAssignements"), False)
	bShowHours =  GetSafeBool(Request("ShowHours"), False)
	nAssignTableRowSpan = IIf(bPrintOtherAssignements, 5, 3)
End Sub

Sub specialMain()
	Dim nMaxSYMark, nMinSYMark
	Dim objGradingComponent

	Set objGradingComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")
	SetScriptTimeOut 900

	PRINT_PAGE_BREAK = IIF(bStartNewPage, "<hr class=""page-break-after"">","")
	OTHER_ASSIGNEMENTS_CELLS = IIF(bPrintOtherAssignements, "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>", "<td>&nbsp;</td></tr>")
	Set objCSGSrs = objNSNET.GetClassJournal(strCurrYearId, strClassID, strIupGrade, nSubjClassID, Empty, true, dtStartDate, dtEndDate, objDsStudentsResAndAt)
	TestError obLanguage("Reports","kCantGetReportData")

	Call objGradingComponent.GetMaxMinMarks(strCurrYearID, nMaxSYMark, nMinSYMark)

	nMinMark = nMinSYMark
	Call GetMarkTypesInfo(True, nMinSYMark, nMaxSYMark) ' Если не известно точно значение bIsGradeSystemPass, то передаём True и получаем полный список
	If objCSGSrs.EOF Then
		strErrMsg = obLanguage("Reports","kNoClassSubjects")
		Exit Sub
	End If
	Set objStudRs = objCSGSrs.Fields()("StudentList").Value
	TestError obLanguage("Grade","kErrStudents",strFunctionalityType)

	Set rsDays = objCSGSrs.Fields()("ClassMeetings").Value
	If nSubjClassID > 0 Then
		If rsDays.EOF Then strErrMsg = obLanguage("Grade","kScheduleUndefined", strFunctionalityType): Exit Sub
		If objStudRs.EOF Then strErrMsg = obLanguage("Movement","kNoStudentsInClass",strFunctionalityType): Exit Sub
	End If
End Sub

Function DrawTHSubTotals(strCell)
	Dim isNum
	isNum = IsNumeric(strCell)
	DrawTHSubTotals = "<th "& IIF(isNum,"class=""cell-num-center""", "") & ">" & DB2HTML(strCell) &"</th>"
End Function

Function GetReportTable()
	Dim objExamTypesRs', objStudentYearMarksRs
	Dim bNoDrawedStudents
	Dim strTeacherName
	Dim reportStr
	Dim journalStr, assignsStr
	Dim nLastSGTermID, bIsYearColumns

	Set objExamTypesRs = objCSGSrs.Fields()("ExamTypes").Value

	Dim bToBeContinued, nCurrCSGPage, nCurrCSGNumber, nCurrRealPage

	Dim strDays, strMon
	Dim bTKR
	
	Dim strStudentName, nStudentID, nStudentIndex
	Dim nCMID, dtCMDate, nCMResultCnt, nCMAssCnt, bCMWithSrezAss
	Dim arrStudentMarks, strStudentAttendance

	Dim strRowSpan, nYearMark, nExamMark, nTotalMark, nFinalMark

	Dim arrTermsLastDays, index, indexMax, bCheckCurriculum, dtTermLastDay, nAssignTableRowSpan

	Dim i, j, k, nCountArr
	Set reportStr = New StringBuilder
	Set journalStr = New StringBuilder
	Set assignsStr = New StringBuilder

	Call InitAttendanceMarks()

	Dim bIsGradeSystemPass

		nCurrCSGNumber = 0
		nCurrRealPage = 1

		While Not objCSGSrs.EOF
			nSubjClassID = CLng(objCSGSrs("SGID"))
			nLastDrowTermID = objNSNET.GetLastSGTermForDateRange(nSubjClassID, dtStartDate, dtEndDate)
			nLastSGTermID = objNSNET.GetLastSGTerm(nSubjClassID)
			bIsGradeSystemPass = (GetSafeLng(objCSGSrs("GRADINGSYS"), kGradingSystem_Mark) = kGradingSystem_Pass)
			bEmptyExamTypes = objExamTypesRs.EOF
			If Not bEmptyExamTypes Then
				arrExamTypes = objExamTypesRs.GetRows(,, Array("SGID", "PERIODTYPEID", "ABBR"))
				nCountArr = UBound(arrExamTypes, 2)
			End If
			If strSubjClassID <> "-1" Then
				strTeacherName = strTeacherFullNameOfSS
			Else
				strTeacherName = objCSGSrs("FIO")
			End If
			bNoDrawedStudents = True
			nCurrCSGPage = 1
			nCurrCSGNumber = nCurrCSGNumber + 1
			strMon = "": strDays = ""
			If IsEmpty(objAssignmentsRs) And Not rsDays.EOF Then
				Set objAssignmentsRs = rsDays.Fields()("CMOtherAssignments").Value
				Set objHomeAssignmentsRs = rsDays.Fields()("CMHomeAssignments").Value
			End If
			If nCurrCSGNumber>1 Then reportStr.Append PRINT_PAGE_BREAK
			reportStr.Append "<div class=""select""><b>" & obLanguage("Filter","kCourseGB") & "</b>: " & objCSGSrs("NAME") & "</div>"
			If Not rsDays.EOF Then
				
				bToBeContinued = True
				While bToBeContinued
					bCheckCurriculum = bShowHours
					If bCheckCurriculum Then
						ReDim arrTermsLastDays(2, -1)
					Else
						arrTermsLastDays = Empty
					End If

					If nCurrCSGPage > 1 Then
						objStudRs.MoveFirst
						reportStr.Append PRINT_PAGE_BREAK & "<div class=""select""><b>" & obLanguage("Filter","kCourseGB") & "</b>: " & objCSGSrs("NAME") & "</div>"
					End If
					bIsYearColumns = GetMonthAndDays(rsDays, False, nCurrCSGPage, nLimitAssCnt, nLastDrowTermID, strMon, strDays, Empty, nLastSGTermID, arrTermsLastDays)
					nCurrRealPage = nCurrRealPage + 1
					journalStr.Append "<br />" & GetJournalTableHeader() & "<th rowspan=""2"">№</th><th rowspan=""2"">" & obLanguage("Common","kLastName") & "</th>" & strMon & "</tr>" & GetTableHeaderString() & strDays & "</tr>"
					nStudentIndex = 1
					While Not objStudRs.EOF
						bNoDrawedStudents = False
	 					strStudentName = DB2HTML( MakeShortNickName(objStudRs))
						nStudentID = CLng(objStudRs("STUDENTID"))
						journalStr.Append "<tr><td>" & nStudentIndex & "</td><td class=""cell-text"">" & strStudentName & "</td>"
						i = (nCurrCSGPage - 1) * nLimitAssCnt
						nTermID = rsDays("TERMID")
						While (Not rsDays.EOF) And (i < nLimitAssCnt * nCurrCSGPage)
							'Drow TotalMark
							If nTermID<>rsDays("TERMID") Then
								Call objNSNET.GetStudentCSGTermTotalMark(nSubjClassID, nStudentID, nTermID, objDsStudentsResAndAt, nTotalMark)
								journalStr.Append DrawTHSubTotals(GetMark(HideNotRatedMark(nTotalMark), bIsGradeSystemPass))
								nTermID = rsDays("TERMID")
							End If

							'Drow Mark
							nCMID = CLng(rsDays("CMID"))
							dtCMDate = CDate(rsDays("ADAY"))
							bTKR = (Clng(rsDays("IS_TKR")) = 1)
							nCMResultCnt = Clng(rsDays("RCOUNT"))
							bCMWithSrezAss = (Clng(rsDays("ASREZEXISTS")) > 0)

							Call objNSNET.GetStudentCMMarksAndAttendances(nSubjClassID, nStudentID, nCMID, objDsStudentsResAndAt, arrStudentMarks, strStudentAttendance)
							journalStr.Append GetMarkCell( nCMID, arrStudentMarks, strStudentAttendance, dtCMDate, " nowrap", False, bTKR, bCMWithSrezAss)
							rsDays.MoveNext
							i = i + 1
						Wend
						'Class Meetings Cycle
						j = (nCurrCSGPage - 1) * nLimitAssCnt

						If isDrowLastTotals(rsDays, nTermID, nLastDrowTermID) Then
							Call objNSNET.GetStudentCSGTermTotalMark(nSubjClassID, nStudentID, nTermID, objDsStudentsResAndAt, nTotalMark)
							journalStr.Append DrawTHSubTotals(GetMark(HideNotRatedMark(nTotalMark), bIsGradeSystemPass))
							If bIsYearColumns Then
								Call objNSNET.GetStudentCSGYearMark(nSubjClassID, nStudentID, kYearType, objDsStudentsResAndAt, nYearMark)
								journalStr.Append DrawTHSubTotals(GetMark(HideNotRatedMark(nYearMark), bIsGradeSystemPass))

								If Not bEmptyExamTypes Then
									'If cExamTypesCount > 1 Then
										For k = 0 To nCountArr
											Call objNSNET.GetStudentCSGYearMark(nSubjClassID, nStudentID, arrExamTypes(indPeriodTypeId, k), objDsStudentsResAndAt, nExamMark)
											journalStr.Append DrawTHSubTotals(GetMark(HideNotRatedMark(nExamMark), False))
										Next
									'End If
									Call objNSNET.GetStudentCSGYearMark(nSubjClassID, nStudentID, kTotalType, objDsStudentsResAndAt, nFinalMark)
									journalStr.Append DrawTHSubTotals(GetMark(HideNotRatedMark(nFinalMark), bIsGradeSystemPass))
								End If
							End If

						End If

						If rsDays.EOF Then
							bToBeContinued = False
							rsDays.Move j-i+1, 2
						Else
							rsDays.Move j-i, 0
						End If
						journalStr.Append "</tr>"
						nStudentIndex = nStudentIndex + 1
						objStudRs.MoveNext
					Wend
					'Students Cycle
					If bNoDrawedStudents Then bToBeContinued = False
					nCurrRealPage = nCurrRealPage + 1
					assignsStr.Append PRINT_PAGE_BREAK  ' "<br />"
					assignsStr.Append "<div class=""select""><b>" & obLanguage("Filter","kTeacherGB",strFunctionalityType) & "</b>: " & strTeacherName & "</div>"
					assignsStr.Append "<br />" & GetAssignmentsTableHeader(bPrintOtherAssignements)

					If bCheckCurriculum Then
						index = 0
						indexMax = UBound(arrTermsLastDays, 2)
						bCheckCurriculum = index <= indexMax
					End If
					If bCheckCurriculum Then
						dtTermLastDay = arrTermsLastDays(1, index)
					End If

					While (Not rsDays.EOF) And (j < i)
						dtCMDate = CDate(rsDays("ADAY"))
						nCMAssCnt = Clng(rsDays("ACOUNT"))
						strRowSpan = ""
						If bPrintOtherAssignements And Not objAssignmentsRs.EOF Then
							If objAssignmentsRs.RecordCount>1 Then strRowSpan = " rowspan=""" & objAssignmentsRs.RecordCount & """"
						End If

						Do While bCheckCurriculum
							If DateDiff("d", dtCMDate, dtTermLastDay, 0, 0) < 0 Then
								Call ShowTermCmAndCurriculumLimits(arrTermsLastDays, index, assignsStr)
								index = index + 1
								bCheckCurriculum = index <= indexMax
								If bCheckCurriculum Then
									dtTermLastDay = arrTermsLastDays(1, index)
								End If
							Else
								Exit Do
							End If
						Loop

						assignsStr.Append "<tr>" & td(strRowSpan,dtCMDate) & td(strRowSpan,DB2HTML(rsDays("LESSONNAME")))
						If nCMAssCnt > 0 Then
							If Not objHomeAssignmentsRs.EOF Then
								assignsStr.Append td(strRowSpan,DB2HTML(objHomeAssignmentsRs("AN")))
							Else
								assignsStr.Append td(strRowSpan,"&nbsp;")
							End If
							If bPrintOtherAssignements Then
								If Not objAssignmentsRs.EOF Then
									While Not objAssignmentsRs.EOF
										assignsStr.Append "<td>" & DB2HTML(objAssignmentsRs("AN")) & "</td><td>" & objAssignmentsRs("NAME") & "</td></tr><tr>"
										objAssignmentsRs.MoveNext
									Wend
									Call assignsStr.Remove(assignsStr.Length - 4, 4)
								Else
									assignsStr.Append "<td>&nbsp;</td><td>&nbsp;</td></tr>"
								End If
							End If
						Else
							assignsStr.Append OTHER_ASSIGNEMENTS_CELLS
						End If
						j = j + 1
						rsDays.MoveNext
					Wend

					Do While bCheckCurriculum
						Call ShowTermCmAndCurriculumLimits(arrTermsLastDays, index, assignsStr)
						index = index + 1
						bCheckCurriculum = index <= indexMax
					Loop

					'ClassMeetingsCycle
					assignsStr.Append "</table>"
					journalStr.Append "</table>"
					If bNoDrawedStudents Then
						reportStr.Append "<h3>" & obLanguage("Movement","kNoStudentsInClass",strFunctionalityType) & "</h3><br /><br />"
					Else
						reportStr.Append journalStr.ToString() & "<br />" & assignsStr.ToString() & "<br /><br />"
					End IF
					journalStr.Clear
					assignsStr.Clear
					nCurrCSGPage = nCurrCSGPage + 1
				Wend
				'ToBeContinued Cycle
			Else
				reportStr.Append "<div class=""select""><b>" & obLanguage("Filter","kTeacherGB",strFunctionalityType) & "</b>: " & strTeacherName & "</div>"
				reportStr.Append "<h3>" & obLanguage("Grade","kScheduleUndefined", strFunctionalityType) & "</h3><br /><br />"
			End If
			objCSGSrs.MoveNext
		Wend
	GetReportTable = reportStr.ToString()
End Function

Function td(strRowSpan,txt)
	td = "<td" & strRowSpan & ">" & txt & "</td>"
End Function

Function IsStudentInSG(arr,sid)
	Dim i
	For i = 0 To Ubound(arr,2)
		If arr(0,i) = sid Then IsStudentInSG = True: Exit Function
	Next
	IsStudentInSG = False
End Function

Sub ShowTermCmAndCurriculumLimits(arrInfo, index, assignsStr)
	Dim nTermID, bYearInfo
	Dim nHoursCm, nHoursCurriculum, strSpan

	nTermID = arrInfo(0, index)
	bYearInfo = arrInfo(2, index)
	nHoursCm = objNSNET.GetSubjectGroupHours(nSubjClassID, strCurrYearID, nTermID)
	If nAssignTableRowSpan > 1 Then strSpan = " colspan='" & nAssignTableRowSpan & "'"
	assignsStr.Append "<tr>" & td(strSpan,"&nbsp;") & "</tr>"
	assignsStr.Append "<tr>" & td(strSpan,nHoursCm) & "</tr>"

	If bYearInfo Then
		nHoursCm = 0
		nHoursCurriculum = 0
		nHoursCm = objNSNET.GetSubjectGroupHours(nSubjClassID, strCurrYearID, -1)
	assignsStr.Append "<tr>" & td(strSpan,nHoursCm) & "</tr>"
	End If

	assignsStr.Append "<tr>" & td(strSpan,"&nbsp;") & "</tr>"
End Sub

Function HideNotRatedMark(mark)
	HideNotRatedMark = IIf(mark = markNotRated, "", mark)
End Function
%>
