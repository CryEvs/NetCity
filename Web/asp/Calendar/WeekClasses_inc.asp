<% ' © 2007-2015 IRTech. All rights reserved.
Dim strTypeOfView
Dim objScheduleRs, rsHoliDays, rsVacations, rsSEvents, rsCEvents
Dim bHasEvents
Dim i, nClassCount
Dim objVars, strVarID

Sub specialMain()
	Dim strClassID_IUPTmp, arrClassArrayTmp
	Dim objIUPClasses
	Dim strStudentCurrClassID, rsStudentClasses

	Set rsHoliDays		= objNSNET.GetSchoolEventList(kHoliday, strCurrYearID, BDate,EDate)
	Set rsSEvents		= objNSNET.GetSchoolEventList(kSchoolEvent, strCurrYearID, BDate,EDate)

	If strClassID_IUP = "0" Then Exit Sub
	strVarID = "-1"
	If strClassID_IUP <> "-1" Then
		Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)
		Set objVars = objNSNET.GetStVariantsForClassesAndGrades(strCurrYearID, strClassId & "", strIupGrade & "")
		If Not objVars.EOF Then strVarID = GetSafeID(objVars("VARIANTID"), "-1")
		If CLng(strClassId)>0 Then
			Set rsVacations = objNSNET.GetClassVacations(strClassId, strCurrYearID, BDate,EDate)
		Else
			Set rsVacations = objNSNET.GetGradeVacations(strIupGrade, strCurrYearID, BDate,EDate)
		End If
	Else
		strClassId = "-1"
		strIupGrade = "-1"
		Set rsVacations = objNSNET.GetSchoolEventList(kVacation, strCurrYearID, BDate,EDate)
	End If
	bHasEvents = Not (rsHoliDays.EOF And rsVacations.EOF And rsSEvents.EOF)

	If bIsStaff Then
		Set objScheduleRs = objNSNET.GetScheduleClassMeetingList(strCurrYearID, strClassId, strIupGrade, IIf(bAll, -1, strUserID), strTeacherID, strSubjectID, nRelay, BDate, EDate)
		ReDim arrClassArrayTmp(-1)
		nClassCount = 0

		For i = 0 To UBound(arrClassArray)
			Call ParseIupClassId(arrClassArray(i), strClassId, strIupGrade, bIsIupGrade)

			If Not bIsIupGrade Then 
				ReDim Preserve arrClassArrayTmp(nClassCount)
				arrClassArrayTmp(nClassCount) = strClassId
				nClassCount = nClassCount + 1
			Else
				Set objIUPClasses = objNSNET.GetIupClassesForGrade(strCurrYearID, strIupGrade)

				While Not objIUPClasses.EOF
					ReDim Preserve arrClassArrayTmp(nClassCount)
					arrClassArrayTmp(nClassCount) = GetSafeID(objIUPClasses("CLASSID"), Null)
					nClassCount = nClassCount + 1
					objIUPClasses.MoveNext
				WEnd
			End If
		Next

		If nClassCount = 0 Then
			ReDim arrClassArrayTmp(nClassCount)
			arrClassArrayTmp(nClassCount) = "-1"
		End If

		Set rsCEvents = objNSNET.GetClassEventList(-1, arrClassArrayTmp, strCurrYearID, BDate,EDate)
	Else
		Set objScheduleRs = objNSNET.GetStudentScheduleClassMeetingList(strStudentID, strSubjClassID, nRelay, strCurrYearID, BDate, EDate)

		strStudentCurrClassID = "0"
		If bIsIupGrade Then
			Set rsStudentClasses = objNSNET.GetStudentCurrClasses(strStudentID, strCurrYearID)

			If Not rsStudentClasses.EOF Then
				strStudentCurrClassID = GetSafeID(rsStudentClasses("CLASSID"), "0")
			End If
		Else
			strStudentCurrClassID = strClassId
		End If

		If CLng(strStudentCurrClassID) > 0 Then
			Set rsCEvents = objNSNET.GetClassEventList(-1, Array(strStudentCurrClassID), strCurrYearID, BDate,EDate)
		Else 
			Set rsCEvents = objNSNET.GetClassEventList(-1, Array(-1), strCurrYearID, BDate,EDate)
		End If
		readonly = True
	End If

	bHasEvents = bHasEvents Or Not rsCEvents.EOF
End Sub

Sub DrawSubjTable()
	Dim i, strDate, dtPrevStartTime, strEvent, bEmpty, dtDate, strClassName, strFunc, strStyle, strEType, strHint, strAddStyle
	Dim nPrevRelay, nPrevSchedTimeNumber, nCurrRelay, nCurrSchedTimeNumber
	Dim nRelay, nSchedTimeNumber
	Dim dtCurrStartTime
	Dim objCmdScheduleTimes, objTimes, bSameTimes, bShowLegend
	Dim strIsoDate

	bShowLegend = false
	dtDate = BDate%>

	<table class="schedule-table table table-bordered table-condensed print-block">
		<tr>
			<%If CLng(strFunctionalityType) <> kFuncType_PreSchool Then%>
				<th class="leftheader">
					<%=obLanguage("Calendar","kRelay")%>
				</th>
			<%End If%>

			<th class="leftheader"><%=obLanguage("Calendar","kLessonNumber", strFunctionalityType)%></th>
			<th class="leftheader"><%=obLanguage("Calendar","kLessonTime", strFunctionalityType)%></th><%

			If GetScreenType() <> stPrint Then
				Call InitYearInfo()
				arrHoliDays = InitDays(kHoliday, dtDate,EDate)

				For i = 0 To 6
					strDate = Date2Str(dtDate)
					If IsFreeDay(dtDate) Then strAddStyle = "style=""color:red""" Else strAddStyle = ""
					Response.Write "<th class=""schedule-table-header"">" & ShowAnchor("dayschedule('" & strDate & "')", obLanguage("Calendar","kViewDaySchedule"), WeekDayName(WeekDay(dtDate, vbMonday), True, vbMonday) & "<br>&nbsp;" & strDate, strAddStyle) & "&nbsp;</th>"
					dtDate = DateAdd("d", 1, dtDate)
				Next
			Else
				For i = 0 To 6
					Response.Write "<th>" & WeekDayName(WeekDay(dtDate, vbMonday), True, vbMonday) & "<br>&nbsp;" & Date2Str(dtDate) & "&nbsp;</th>"
					dtDate = DateAdd("d", 1, dtDate)
				Next
			End If%>
		</tr><%

		If Not objScheduleRs.EOF Then
			Set objCmdScheduleTimes = objNSNET.GetSchedTimesForLesson_Prepare(strCurrYearID, strVarID)

			nPrevRelay = -1
			nPrevSchedTimeNumber = -1
			
			While Not objScheduleRs.EOF
				dtPrevStartTime = objScheduleRs("STARTTIME")

				nCurrRelay = GetSafeLng(objScheduleRs("RELAY"), Null)
				nCurrSchedTimeNumber = GetSafeLng(objScheduleRs("SCHEDULETIMENUMBER"), Null)

				If (nCurrRelay <> nPrevRelay) Or (nCurrSchedTimeNumber <> nPrevSchedTimeNumber) Then
					bSameTimes = False
					Set objTimes = objNSNET.GetSchedTimesForLesson_Execute(objCmdScheduleTimes, nCurrRelay, nCurrSchedTimeNumber)
					If Not objTimes.EOF Then bSameTimes = (objTimes.RecordCount = 1)
					
					Response.Write "<tr>"
					If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
						Response.Write "<td align=""center"" class=""leftheader"">" & nCurrRelay & "</td>"
					End If

					Response.Write "<td class=""leftheader text-center"">" & nCurrSchedTimeNumber & "</td>"

					If bSameTimes Then
						Response.Write "<td class=""leftheader"">" & Time2Str(objScheduleRs("STARTTIME")) & "-" & Time2Str(objScheduleRs("ENDTIME")) & "</td>"
					Else
						bShowLegend = True
						Response.Write "<td class=""leftheader"">***" & "</td>"
					End If

'					If IsNull(objScheduleRs("DAY")) Then objScheduleRs.MoveNext
					For i = 0 To 6
						bEmpty = True : dtDate = BDate + i
						strIsoDate = Date2IsoFormat(dtDate)

						Do While Not objScheduleRs.EOF
							nRelay = GetSafeLng(objScheduleRs("RELAY"), Null)
							nSchedTimeNumber = GetSafeLng(objScheduleRs("SCHEDULETIMENUMBER"), Null)
							If (nRelay <> nCurrRelay) Or (nSchedTimeNumber <> nCurrSchedTimeNumber) Then Exit Do
							
'							If IsNull(objScheduleRs("DAY")) Then Exit Do
							If Not IsNull(objScheduleRs("DAY")) Then
								If objScheduleRs("DAY") <> dtDate Then Exit Do

								If bEmpty Then Response.Write "<td class=""filled-cell"">"

								If strTypeOfView <> "0" Then
									strClassName = objScheduleRs("SUBJECTABBREV")
									If bIsIupGrade And Not IsDull(objScheduleRs("LEVEL")) Then strClassName = strClassName & "/" & objScheduleRs("LEVEL")
									If Not IsDull(objScheduleRs("GROUPABBREV")) Then strClassName = strClassName & "/" & objScheduleRs("GROUPABBREV")
								Else
									strClassName = ""
								End If

								If strClassID_IUP = "-1" Then
									strClassName = objScheduleRs("NAME") & IIF( strClassName = "", "", "/" & strClassName )
								End If

								If Not IsDull(objScheduleRs("ROOM")) Then strClassName = strClassName & " [" & objScheduleRs("ROOM") & "]"

								If readonly Then
									Response.Write DB2HTML(strClassName)
								ElseIf strClassName = "" Then
									Response.Write "&nbsp;"
								Else
									Response.Write ShowAnchor("editClassMeetings('" & objScheduleRs("ID") & "', '" & objScheduleRs("SGID") & "', '" & objScheduleRs("SUBJECTID") & "', '" & strIsoDate & "')", obLanguage("Common","kChange"), DB2HTML(strClassName), "")
								End If
								Response.Write "<br />"
								bEmpty = False
							End If

							objScheduleRs.MoveNext
						Loop

						If bEmpty Then Response.Write "<td>"
						Response.Write "</td>"
					Next
					Response.Write "</tr>"

					nPrevRelay = nCurrRelay
					nPrevSchedTimeNumber = nCurrSchedTimeNumber
				Else
					objScheduleRs.MoveNext
				End If
			WEnd
			Call objNSNET.DisposeCommand(objCmdScheduleTimes)
		End If%>

		<tr><%
			If CLng(strFunctionalityType) <> kFuncType_PreSchool Then%>
				<th colspan=3 class="leftheader"><%=obLanguage("Calendar","kEvents")%></th><%
			Else%>
				<th colspan=1 class="leftheader"><%=obLanguage("Calendar","kEvents")%></th><%
			End If

			For i = 0 To 6
				dtDate = BDate + i 
				Response.Write "<td>&nbsp;"

				Call DrawEvents(dtDate)

				Response.Write "</td>"
			Next%>
		</tr>
	</table><%
		
	If bShowLegend Then
		Call DrawInfo("*** - " & obLanguage("Calendar","kTimeLessonsDifferent"), False)
	End If
End Sub%>