<% ' © 2007-2015 IRTech. All rights reserved.

Dim startDay, endDay, nStartW, nEndW
Dim objTeacherSubjectsRs, objScheduleRs', objTimesRs
Dim arrSchedTimes, nMaxRelay

Sub specialMain()
	Dim adoHConn
	Dim objCmdScheduleTimes, dtCurrDay, nCurrDayOfWeek
	Dim objTimesRs, nCurrMaxRelay, i, arrTimesRs

	If bEmptyScheduleTimes Then
		Exit Sub
	End If

	ReDim arrSchedTimes(6)
	Set objCmdScheduleTimes = objNSNET.GetScheduleTimeListForDay_Prepare(strCurrYearID, CStr(strStVariantID), nRelay, False)
	dtCurrDay = startDay
	bEmptyScheduleTimes = True
	nMaxRelay = -1

	While DateDiff("d", dtCurrDay, endDay, 0, 0) >= 0
		nCurrDayOfWeek = Weekday(dtCurrDay, vbSunday)
		Set objTimesRs = objNSNET.GetScheduleTimeListForDay_Execute(objCmdScheduleTimes, nCurrDayOfWeek)

		If Not objTimesRs.EOF Then
			arrTimesRs = objTimesRs.GetRows(,,Array("RELAY", "SCHEDULETIMENUMBER", "VARIANTID"))

			For i = 0 To UBound(arrTimesRs,2)
				nCurrMaxRelay = CLng(arrTimesRs(0,i))
			Next

			If nMaxRelay < nCurrMaxRelay Then nMaxRelay = nCurrMaxRelay
			bEmptyScheduleTimes = False
			arrSchedTimes(nCurrDayOfWeek - 1) = arrTimesRs
		End If

		dtCurrDay = DateAdd("d", 1, dtCurrDay)
	WEnd

	Call objNSNET.DisposeCommand(objCmdScheduleTimes)
	If bEmptyScheduleTimes Then Exit Sub

	Set objTeacherSubjectsRs = objNSNET.GetTeacherClassSubjectList(strCurrYearID, strStVariantID)

	If objTeacherSubjectsRs.EOF Then Exit Sub

	Set objScheduleRs = objNSNET.GetTeacherScheduleClassMeetingList(strCurrYearID, nRelay, startDay, endDay, strStVariantID)
End Sub

Sub DrawTeachersTable(ByVal bWithSessionInfo)
	Dim arrTimesRs, i, j, strSchedTimes, objSubjectsRs, dtDate, bEmpty, strClassName, strGap
	Dim nCurrDayOfWeek
	Dim strIsoDate
	
	If bWithSessionInfo Then
	    If CLng(strFunctionalityType) <> kFuncType_PreSchool Then%>
			<div class="row">
				<div class="col-md-6">
					<div class="legend print-block">
						<div><%
							For i = 1 To nMaxRelay%>
								<p>
									<span class="relay<%=i%> legend-label"></span><span class="legend-description"> — <%=IIF(i = 1, obLanguage("Calendar","k1st"), IIF(i = 2,obLanguage("Calendar","k2nd"), obLanguage("Calendar","k3d")))%>&nbsp;<%=LCase(obLanguage("Calendar","kRelay"))%></span>
								</p><%
							Next%>
						</div>
					</div>
				</div>
			</div>
			<%
        End If
	End If%>

	<div class="row">
		<div class="col-md-12">
			<div class="table-responsive">
				<table class="schedule-table table table-xs table-bordered table-condensed print-block">
					<tr>
						<th class="leftheader" rowspan="2"><%=obLanguage("Filter","kTeacherGB",strFunctionalityType)%></th>
						<th class="leftheader" rowspan="2"><%=obLanguage("Filter","kCourseGB")%></th><%
						strGap = "<td class=""leftheader""></td>"

						For i = nStartW To nEndW
							If i > nStartW Then Response.Write strGap
							dtDate = BDate + i - 1
							nCurrDayOfWeek = Weekday(dtDate, vbSunday)
							arrTimesRs = arrSchedTimes(nCurrDayOfWeek - 1)

							If Not IsEmpty(arrTimesRs) Then
								Response.Write "<th class=""schedule-table-header"" colspan=""" & UBound(arrTimesRs, 2) + 1 & """>" & Date2Str(BDate + i - 1) & ", " & WeekDayName(i, True, 0) & "</th>"
							End If
						Next

						Response.Write "</tr><tr class=""xtcb"">"
						For i = nStartW To nEndW
							If i > nStartW Then Response.Write strGap
							dtDate = BDate + i - 1
							nCurrDayOfWeek = Weekday(dtDate, vbSunday)
							arrTimesRs = arrSchedTimes(nCurrDayOfWeek - 1)

							If Not IsEmpty(arrTimesRs) Then
								strSchedTimes = ""

								For j = 0 To UBound(arrTimesRs,2)
									strSchedTimes = strSchedTimes & "<td class=""relay" & arrTimesRs(0,j) & """ align=""center"">&nbsp;" & arrTimesRs(1, j) & "&nbsp;</td>"
								Next

								Response.Write strSchedTimes
							End If
						Next
						Response.Write "</tr>"
			
						If Not objTeacherSubjectsRs.EOF Then
							Set objSubjectsRs = objTeacherSubjectsRs("Subjects").Value
							While Not objTeacherSubjectsRs.EOF
								Response.Write "<tr>"
								Response.Write "<td rowspan=""" & objSubjectsRs.RecordCount & """ class=""leftheader"">" & DB2HTML(objTeacherSubjectsRs("NICKNAME")) & "</td>"

								While Not objSubjectsRs.EOF
									Response.Write "<td class=""leftheader"">" & DB2HTML(objSubjectsRs("SUBJECTABBREV")) & "</td>"
									For i = nStartW To nEndW
										dtDate = BDate + i - 1
										strIsoDate = Date2IsoFormat(dtDate)
										If i > nStartW Then Response.Write strGap
							
										nCurrDayOfWeek = Weekday(dtDate, vbSunday)
										arrTimesRs = arrSchedTimes(nCurrDayOfWeek - 1)
										If Not IsEmpty(arrTimesRs) Then
											For j = 0 To UBound(arrTimesRs, 2)
												bEmpty = True

												Do While Not objScheduleRs.EOF
													If CLng(objScheduleRs("SUBJECTID")) <> CLng(objSubjectsRs("SUBJECTID")) Or _
														objScheduleRs("DAY") <> dtDate Or _
														CLng(objScheduleRs("RELAY")) <> CLng(arrTimesRs(0,j)) Or _
														CLng(objScheduleRs("SCHEDULETIMENUMBER")) <> CLng(arrTimesRs(1,j)) Or _
														CLng(objScheduleRs("VARIANTID")) <> CLng(arrTimesRs(2,j)) Or _
														CLng(objScheduleRs("TEACHERID")) <> CLng(objTeacherSubjectsRs("TEACHERID")) Then

														Exit Do
													End If

													If bEmpty Then Response.Write "<td class=""filled"">"

													strClassName = objScheduleRs("NAME")
													If Not IsDull(objScheduleRs("ROOM")) Then strClassName = strClassName & " [" & objScheduleRs("ROOM") & "]"

													If readonly Then
														Response.Write DB2HTML(strClassName)
													Else
														Response.Write ShowAnchor("editClassMeetings('" & objScheduleRs("ID") & "', '" & objScheduleRs("SGID") & "', '" & objScheduleRs("SUBJECTID") & "', '" & strIsoDate & "')", obLanguage("Common","kChange"), DB2HTML(strClassName), "")
													End If

													Response.Write "<br>"
													bEmpty = False

													objScheduleRs.MoveNext
												Loop

												If bEmpty Then Response.Write "<td>"
												Response.Write "</td>"
											Next
										End If
									Next

									objSubjectsRs.MoveNext

									If Not objSubjectsRs.EOF Then Response.Write "</tr><tr>"
								WEnd

								Response.Write "</tr>"
								objTeacherSubjectsRs.MoveNext
							WEnd
						End If%>
				</table>
			</div>
		</div>
	</div><%
End Sub%>