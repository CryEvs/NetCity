<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/MarkTKR_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/DrawJournal_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/JournalSecurity.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim Tmr, tmr2, tmr3, tmrstrings

Dim bShowLegend, bNoStudents, bScheduleExists
Dim nMaxMark, nMinMark
Dim bWeight, nWeight
Dim strActivityID
Dim objStudRs
Dim strTeacherName, bDisplayLastAccess, objRsLastAccess
Dim bLimitedJournalEditing, nJournalEditingDayLimit, dtToday
Dim bPrint
Dim nAnchor
Dim bIsGradeSystemPass
Dim nSubjectGroupTeacherId

Dim objDSRA, rsDays, rsCMAssignments
Dim nAvgMARK, nNumMARK, bActualMark, bShowWeightedAvg, nTotalWeight, objDctAvgMarks

Function GetPageTitle()
	GetPageTitle = obLanguage("Common","kJournal",strFunctionalityType)
End Function

Sub Main()
	Dim objCSGSrs

	If Not bIsDebug Then On Error Resume Next
	nMaxMark = obTokenMgr.GetData( strToken, stMaxMark )
	bIsGradeSystemPass = False
	dtToday = NSDate()

	bScheduleExists = False
	If strSubjClassID <> "0" Then
		strTeacherName = objNSNET.GetUserNickName(nSubjectGroupTeacherId)

		Set objCSGSrs = objNSNET.GetClassJournal(strCurrYearId, strClassID, IIF(bIsIupGrade,strIupGrade,-1), strSubjClassID, CLng(strTermID), False, Empty, Empty, objDSRA )
		If objCSGSrs.EOF Then
			bNoStudents = True : Exit Sub
		End If
		Set objStudRs = objCSGSrs.Fields()("StudentList").Value
		TestError obLanguage("Grade","kErrStudents",strFunctionalityType)
		If objStudRs.EOF Then bNoStudents = True : Exit Sub
		bNoStudents = False

		Set rsDays = objCSGSrs.Fields()("ClassMeetings").Value
		If Not rsDays.EOF Then
			bScheduleExists = True
			Set rsCMAssignments = rsDays.Fields()("CMAssignments").Value
		Else
			bScheduleExists = False
		End If

		bLimitedJournalEditing = objNSNETWork.IsLimitedEditingJournalMode(strSchoolID, strUserID)
		If bLimitedJournalEditing Then nJournalEditingDayLimit = objNSNETWork.GetJournalEditTimeLimit( strSchoolID )
	End If

	Call InitSchoolSettings( objNSNET )
	Call InitAssignmentTypesHelper()
	bWeight = (arrSchoolSettings(1, kSSIndex_MarksAveraging) = "1")
	nMinMark = CLng(arrSchoolSettings( 1, kSSIndex_MinMark ))

	Set objDctAvgMarks = Server.CreateObject("NetCity.Storage")

	If Clng(strSubjClassID) <= 0 Then Exit Sub
	
	bIsGradeSystemPass = (GetSafeLng(objCSGSrs("GRADINGSYS"), Null) = kGradingSystem_Pass)

	Call GetMarkTypesInfo(bIsGradeSystemPass, nMinMark, nMaxMark)
	If kIsTKR Then
		Call GetMarkTypes_TKR()
	End If
	bShowLegend = False
End Sub

Sub DrawJournalTable( bShowTypesLegend, bShowAttendanceLegend, bShowAttendance, bWithCMLinks )
	If Not bIsDebug Then On Error Resume Next
	Dim i, j
	Dim strAssType, nRes, strAtt
	Dim strDays, strCMLinks, strMon, strAverage, strTotal, strLevel
	Dim bTKR, bCMWithSrezAss, bHasUserRightsForEditTotals
	Dim strSRC
	Dim nMonthColSpan, nCMColSpan, nCurrMon, nOldMon
	Dim strStudentName, nStudentID, dtCMDate, nCMID
	Dim strStudentFullName
	Dim arrStudentMarks, strStudentAttendance, nAssignmentsCnt, nResultsCnt
	Dim nHeaderRowSpan
	Dim nTotalMark
	Dim bTmp
	Dim strPeriodMarkField
	Dim arrStudentOnIndividualEducForm
	Dim strTDStudentMark
	Dim strRowStudentClass
	
	If strSubjClassID = "0" Or bNoStudents Then Exit Sub

	If bWithCMLinks Then nHeaderRowSpan = 3 Else nHeaderRowSpan = 2 End If

	If Not bScheduleExists Then 
		Call DrawInfo( DB2HTML_BR(obLanguage("Grade","kScheduleUndefined_2")), False)
		Exit Sub
	End If

	nOldMon = Month( rsDays("ADAY") ) : strMon = "" : strDays = "": strCMLinks = ""

	'Draw Journal Table Headers

	bTmp = GetMonthAndDays(rsDays, bWithCMLinks, 1, 3000, 0, strMon, strDays, strCMLinks, 0, Empty )
	
	'опрделние прав на редактирование итоговых оценок
	bHasUserRightsForEditTotals = False
	
	bHasUserRightsForEditTotals = HasUserRightJournalEditAccess( arTotalsEditAll, arTotalsViewAll, arTotalsEditSelf, nSubjectGroupTeacherId, Empty)

	If bHasUserRightsForEditTotals Then
		bHasUserRightsForEditTotals = Not objNSNET.IsYearClosed(strCurrYearID)
	End If
	
	If bHasUserRightsForEditTotals Then
		strPeriodMarkField = ShowAnchor("goEditTotal()", obLanguage("Grade","kEditTotal"), obLanguage("Grade","kPeriodMarkWithBR"), "")
	Else
		strPeriodMarkField = obLanguage("Grade","kPeriodMarkWithBR")
	End If

	Set arrStudentOnIndividualEducForm = obTokenMgr.GetData( strToken, stStudentsOnIndividualEducForm )

	%>

	<div class="journal-wrapper">
		<span class="content-page-preloader" id="process-message-journal"><span>Пожалуйста, подождите...</span></span>
		<div class="journal-total-wrapper-block">
			<table class="journal journal-student  table-bordered table-responsive table-condensed print-block">
				<tbody>
					<tr>
						<th class=""><%=obLanguage("Common","kStudents",strFunctionalityType)%></th>
					</tr><%
						i = 0

						While Not objStudRs.EOF
							nStudentID = CLng(objStudRs("STUDENTID"))
							strRowStudentClass = "journal-row"
							If arrStudentOnIndividualEducForm.Contains(nStudentID) Then strRowStudentClass = strRowStudentClass & " individual-educ"
							strStudentFullName = MakeShortNickName(objStudRs)%>
							<tr class="<%=strRowStudentClass%>">
								<td class="student-name text-nowrap"><span><%=i + 1%>. <%=DB2HTML(strStudentFullName)%></span></td>
							</tr><%
							objStudRs.MoveNext
							i = i + 1
						WEnd%>
				</tbody>
			</table><%

			objStudRs.MoveFirst%>
			
			<div class="journal-total-wrapper">
				<table id="pupilstab" class="journal journal-total table-bordered table-responsive table-condensed print-block">
					<tbody>
						<tr>
							<%=strMon%>
						</tr>
						<tr class="days"><%=strDays%></tr><%
			
						If bWithCMLinks Then%>
							<tr class="links"><%=strCMLinks%></tr><%
						End If

						While Not objStudRs.EOF
							nStudentID = CLng(objStudRs("STUDENTID"))
							strRowStudentClass = "journal-row"
							If arrStudentOnIndividualEducForm.Contains(nStudentID) Then strRowStudentClass = strRowStudentClass & " individual-educ"
							
							bShowWeightedAvg = False
							nTotalWeight = 0
							nAvgMARK = 0: nNumMARK = 0
							%><tr class="<%=strRowStudentClass%>"><%
							While Not rsDays.EOF
								nCMID			= CLng(rsDays("CMID"))
								dtCMDate		= CDate(rsDays("ADAY"))
								bTKR			= (Clng(rsDays("IS_TKR")) = 1)
								bCMWithSrezAss	= (Clng(rsDays("ASREZEXISTS")) > 0)

								Call objNSNET.GetStudentCMMarksAndAttendances(strSubjClassID, nStudentID, nCMID, objDSRA, arrStudentMarks, strStudentAttendance)
								rw GetMarkCell(nCMID, arrStudentMarks, strStudentAttendance, dtCMDate, "", IIF(bPrint, False, True), bTKR, bCMWithSrezAss)
								Call CalcAvgMark(dtCMDate, arrStudentMarks)

								rsDays.MoveNext
							Wend
							%></tr><%
							Call SaveStudentAvgMark(nStudentID)

							rsDays.MoveFirst
							objStudRs.MoveNext
						WEnd%>
					</tbody>
				</table>
			</div><%

			objStudRs.MoveFirst%>

			<table class="journal journal-marks  table-bordered table-responsive table-condensed print-block">
				<tbody>
					<tr>
						<th><%=obLanguage("Common","kAverageMarkBR")%></th>
						<th><%=strPeriodMarkField%></th>
					</tr><%
					While Not objStudRs.EOF
						nStudentID = CLng(objStudRs("STUDENTID"))
						strRowStudentClass = "journal-row"
						If arrStudentOnIndividualEducForm.Contains(nStudentID) Then strRowStudentClass = strRowStudentClass & " individual-educ"
						strAverage = objDctAvgMarks(nStudentID)
						
						Call objNSNET.GetStudentCSGTermTotalMark(strSubjClassID, nStudentID, strTermID, objDSRA, nTotalMark)
						strTotal = GetMark(nTotalMark, bIsGradeSystemPass)

						If strAverage <> "" Then strLevel = GetMarkLevel(CInt(strAverage))
						
						
						%><tr class="<%=strRowStudentClass%>"><td class="cell-num-2"><span class="<%=strLevel%>"><%=DB2Html(strAverage)%></span></td><%
				
						If strTotal <> "" Then strLevel = GetMarkLevel(strTotal)
						
						%><td <%=IIF(IsNumeric(strTotal),"class=""cell-num-center""", "")%>><span class="<%=strLevel%>"><%=DB2Html(strTotal)%></span></td></tr><%

						objStudRs.MoveNext
					Wend%>
				</tbody>
			</table>
		</div>
	</div><%
	Set objDSRA = Nothing
	Set objDctAvgMarks = Nothing 

	If bDisplayLastAccess Then
		DrawInfo obLanguage("Grade","kLastChangesMade") & " <i>" & Date2Str(objRsLastAccess("EVENTTIME")) & "</i>, " & obLanguage("Grade","kLastChangesUser") & " <b>" & DB2HTML(objNSNET.GetUserNickName(objRsLastAccess("USERID"))) & "</b>", False
	End If

	If (bShowTypesLegend Or bShowAttendanceLegend) And bShowLegend Then 
		%><div class="select"><%=obLanguage("Common","kLegend")%></div><%
	End If

	If bShowTypesLegend And bShowLegend Then
		%><div class="select"><%=obLanguage("Grade","kAssignmentTypes")%></div><%
	End If

	If bShowTypesLegend Then Call ShowTypesLegend(True) ' bShowTypesLegend = True - только для PrintJournal.asp, а там надо выводить все ТКР-типы.
	If bShowAttendanceLegend And bShowLegend Then
		%><div class="select"><%=obLanguage("Grade","kAttendanceMarks")%></div><%
	End If

	If Not bShowTypesLegend And bShowAttendanceLegend Then Call DrawLegend()
	If bShowAttendanceLegend Then Call ShowAttendanceLegend()
End Sub

'(nResult = null) - задание с обязательной оценкой без оценки.
Sub CalcAvgMark(dtCMDay, arrStudentMarks)
	Dim nResultMark, i
	Dim nResult, nWeight, strAType, strMark, bTKR, nResultSource

	If IsEmpty(arrStudentMarks) Then Exit Sub

	For i = 0 To Ubound(arrStudentMarks)
		strAType		= arrStudentMarks(i, 1)
		nWeight			= arrStudentMarks(i, 2)
		nResult			= arrStudentMarks(i, 3)
		strActivityId	= arrStudentMarks(i, 5)
		strMark			= arrStudentMarks(i, 6)

		bTKR			= (strAType = PreDefinedAssignmentType_TKR)

		If IsNull(nResult) Then
			nResultMark = nMinMark
		Else
			If bTKR And CLng(nResult) < 0 Then
				nResultMark = GetMark_TKR(nResult)
			Else
				nResultMark = CLng(strMark)
			End If
		End If

		nResult = GetSafeLng(nResult, 0)
		bActualMark = True

		If kIsTKR Then
			' берём только ТКР-оценки (по алгоритму), остальные - обнуляем;
			' здесь предполягаем, что если есть коррекц. оценка, то озенка за тему - обязательно есть.
			' 9.04.2009. Сейчас только одна оценка по ТКР - "за тему".
			bActualMark = bTKR
		End If

		If IsNull(nResult) And bActualMark Then
			bActualMark = False ' Не учитываем "точки"
			If bWeight Then
				' Учитываем весовые "точки", дата сдачи которых прошла
				If DateDiff( "d", dtToday, dtCMDay, 0, 0 ) < 0 Then bActualMark = True
			End If
		End If

		If bActualMark Then
			If Not bWeight Then
				nResult = GetSafeLng(nResult, 0)
				'nResult = 0 только если пришел 0 из теста по учебному курсу включенного в журнал
				If nResult > 0 Or (nResult = 0 And Not IsNull(strActivityID)) Then
					nNumMARK = nNumMARK + 1
					nAvgMARK = nAvgMARK + nResultMark
				End If
			Else
				nTotalWeight = nTotalWeight + nWeight
				If nResultMark > nMinMark Then
					nAvgMARK = nAvgMARK + (nResultMark - nMinMark) * nWeight
				End If
					
				bShowWeightedAvg = True
			End If
		End If
	Next
End Sub

Sub SaveStudentAvgMark(nStudentId)
	Dim strAverage

	If Not bWeight Then
		If nNumMARK = 0 Then 
			strAverage = "" 
		Else 
			strAverage = FormatNumber(nAvgMARK / nNumMARK, 2)
		End If
	Else
		If Not bShowWeightedAvg Then
			strAverage = ""
		Else
			If nTotalWeight = 0 Then nTotalWeight = 1
			strAverage = FormatNumber((nAvgMARK / nTotalWeight) + nMinMark, 2)
		End If
	End If
	objDctAvgMarks(nStudentId) = strAverage
End Sub

Sub DrawLegend()%>
	<div class="legend print-block">
		<div>
			<%If kIsTKR Then%>
			<p><span class="tkr legend-label"></span><span class="legend-description"> — <%=DB2Html(obLanguage("Assignment","kATTKRTheme"))%></span></p>
			<%End If%>
			<p><span class="slice legend-label"></span><span class="legend-description"> — <%=DB2Html(obLanguage("Assignment","kATThematicsWorks"))%></span></p>
			<p><span class="legend-label individual-educ"></span><span class="legend-description"> — <%=DB2Html(obLanguage("Common","kIndividualEduc"))%></span></p>
		</div>
	</div><%
End Sub%>