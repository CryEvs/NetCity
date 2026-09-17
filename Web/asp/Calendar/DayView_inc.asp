<% ' © 2007-2015 IRTech. All rights reserved.
const kDash = "&nbsp;-&nbsp;"
const k3dot = ".&nbsp;.&nbsp;."

Dim objScheduleRs, strHint, strHintClass, bCheckClassChief

Function GetPageTitle()
	Dim strTitle

	strTitle = obLanguage("Calendar","kTitleDayView", strFunctionalityType) & " " & GreenText(WeekDayName(DatePart("w",BDate, 0, 0 ), False,0 ) & ", " & strBDate )
	If Not IsDull(strTermName) Then
		strTitle = strTitle & GreenText(" (" & DB2HTML(strTermName) & ")")
	End If

	GetPageTitle = strTitle
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClndrDay
 End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Sub Main()
	If strClassID_IUP = "0" Then Exit Sub

	If strClassID_IUP = "-1" Then
		strClassId = "-1"
		strIupGrade = "-1"
	Else
		Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)
	End If

	Set objScheduleRs = objNSNET.GetDaySchedule(strCurrYearID, strClassId, strIupGrade, IIf(bAll, "-1", strUserID), strTeacherID, BDate)
End Sub

Sub DrawLessonsEvents()
	Dim strStartTime, strEndTime, strStartDay, strStartMonth, strEndDay, strEndMonth

	While Not objScheduleRs.EOF
		strStartTime		= Time2Str(objScheduleRs("STARTTIME"))
		strEndTime			= Time2Str(objScheduleRs("ENDTIME"))
		strStartDay			= objScheduleRs("STARTDAY")
		strStartMonth		= objScheduleRs("STARTMONTH")
		strEndDay			= objScheduleRs("ENDDAY")
		strEndMonth			= objScheduleRs("ENDMONTH")
		Response.Write "<tr><td nowrap class=""leftheader"">"

		If strStartTime = "&nbsp;" Then
			If strEndTime = "&nbsp;" Then Response.Write "&nbsp;" Else Response.Write k3dot & kDash & strEndTime
		Else
			If strStartDay <> strEndDay Or strStartMonth <> strEndMonth Then
				Response.Write strStartDay & "." & strStartMonth & "&nbsp;" & strStartTime & kDash & strEndDay & "." & strEndMonth & "&nbsp;" & IIF(strEndTime="&nbsp;", k3dot, strEndTime)
			Else
				Response.Write strStartTime & kDash & IIF(strEndTime="&nbsp;",k3dot,strEndTime)
			End If
		End If

		Response.Write "</td>"
		Call DrawLessonEvent()
		Response.Write "</tr>"

		objScheduleRs.MoveNext
	WEnd
End Sub

Sub DrawLessonEvent()
	Select Case CLng(objScheduleRs("EVENTTYPE"))
	Case 0
		Response.Write "<td>" & obLanguage("Calendar", "kLesson", strFunctionalityType) & ": " & DB2HTML(objScheduleRs("NAME"))

		If Not IsDull(objScheduleRs("ROOM")) Then Response.Write " [" & DB2HTML(objScheduleRs("ROOM")) & "]"

        If strClassID = "-1" Then
            Response.Write ", " & DB2HTML(objScheduleRs("CLASSNAME"))
        End If

		Response.Write "</td>"
	Case kSchoolEvent
		Response.Write "<td class=""school-event"">" & obLanguage("Common","kSchoolEventHeader",strFunctionalityType) & ": "
		Response.Write ShowAnchor("EditEvent(" & kSchoolEvent & "," & objScheduleRs("ID") & ")", strHint, DB2HTML(objScheduleRs("NAME")), "")

		If Not IsDull(objScheduleRs("ROOM")) Then Response.Write " [" & DB2HTML(objScheduleRs("ROOM")) & "]"

		Response.Write "</td>"
	Case kClassEvent
		If bCheckClassChief Then
			' CLASSID in Details
			If objNSNET.IsClassChief(objScheduleRs("DETAILS"), strUserId) Then 
				strHintClass = obLanguage("Calendar","kEditMeeting") 
			Else 
				strHintClass = obLanguage("Calendar","kViewDetails")
			End If
		End If

		Response.Write "<td class=""class-event"">" & obLanguage("Common","kClassEventHeader",strFunctionalityType) & ": "
		Response.Write ShowAnchor("EditEvent(" & kClassEvent & "," & objScheduleRs("ID") & ")", strHintClass, DB2HTML(objScheduleRs("NAME")), "")

		If Not IsDull(objScheduleRs("ROOM")) Then Response.Write " [" & DB2HTML(objScheduleRs("ROOM")) & "]"
		Response.Write "</td>"
	Case kHoliday
		Response.Write "<td class=""vacation-day"">" & obLanguage("Common","kHolidayHeader") & ": "
		Response.Write ShowAnchor("EditEvent(" & kHoliday &"," & objScheduleRs("ID") & ")", strHint, DB2HTML(objScheduleRs("NAME")), "")
		Response.Write "</td>"
	Case kVacation
		Response.Write "<td class=""vacation-day"">" & obLanguage("Common","kVacationHeader") & ": "
		Response.Write ShowAnchor("EditEvent(" & kVacation & "," & objScheduleRs("ID") & ")", strHint, DB2HTML(objScheduleRs("NAME")), "")
		Response.Write "</td>"
	Case Else
		Response.Write "<td>&nbsp;</td>"
	End Select
End Sub

Sub DrawLessonsEventsTable()%>
	<table class="schedule-table table table-bordered table-condensed print-block">
		<tr>
			<th class="schedule-table-header"><%=obLanguage("Calendar","kTimeofLesson")%></th>
			<th class="schedule-table-header"><%=obLanguage("Calendar","kLessonsEvents", strFunctionalityType)%></th>
		</tr><%
		Call DrawLessonsEvents()%>
	</table><%
End Sub

Sub onDrawPage()
	Dim bExistSchedule%>

	<form name="View" method="post" action="<%=strScriptName%>" >
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("EventType", "", "EventID", "", "BackPage", strScriptName))%><%

		bExistSchedule = True
		If IsEmpty(objScheduleRs) Then
			bExistSchedule = False
		Else
			If objScheduleRs.RecordCount = 0 Then bExistSchedule = False
		End If

		Call DrawButtonsFiltersSingleRow("View")%>
	</form><%
	If bExit Then Exit Sub%>

	<div class="row">
		<div class="col-md-8"><%
			If objScheduleRs.EOF Then
				Call DrawInfo(obLanguage("Calendar","kNoDayClassMeeting"), False)
			Else
				Call CalcHints(strHint, strHintClass, bCheckClassChief)
				Call DrawLessonsEventsTable()

				Call DrawExcelForm()
			End If%>
		</div>
	</div><%
End Sub%>