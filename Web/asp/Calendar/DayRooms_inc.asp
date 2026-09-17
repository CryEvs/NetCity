<% ' © 2007-2015 IRTech. All rights reserved.
Dim strViewFullSubjects

Dim objRooms, bEmptyRooms, objRoomsRs, objTimesRs, objScheduleRs

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClndrDay
 End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTitle()
	If Not IsEmpty(BDate) Then
		GetPageTitle = obLanguage("Calendar","kTitleDaySchedule", strFunctionalityType) & " " & GreenText(WeekDayName(DatePart("w",BDate, 0, 0 ), False,0 ) & ", " & Date2Str(BDate))
	Else
		GetPageTitle = obLanguage("Calendar","kTitleDaySchedule1")
	End If
End Function

Sub ReadState()
	If GetScreenType() = stPrint Then BDate = obTokenMgr.GetData( strToken, stCurrDate) Else Call InitBDate()
	nRelay = GetSafeLng(Request("Relay"), GetSafeLng(obTokenMgr.GetData(strToken,stSchoolSession), -1))
	
	If IsDull(Request("ViewFullSubjectName")) Then
		strViewFullSubjects = obTokenMgr.GetData(strToken,"ViewFullSubjectName")
	Else
		strViewFullSubjects = GetSafeLng(Request("ViewFullSubjectName"),0)
	End If

	If Not HasUserRight(arCalendarCreateCalendar) Then readonly=True
	bEmptyRooms = True
	Call specialReadState()
End Sub

Sub specialReadState()
End Sub

Sub WriteState()
	If GetScreenType() <> stPrint Then
		WriteBDate
		Call obTokenMgr.SetData(strToken, "ViewFullSubjectName", strViewFullSubjects)
		Call obTokenMgr.SetData(strToken, stSchoolSession, nRelay)
	End If
End Sub

Sub Main()
	Dim  nWeekDayNum
	nWeekDayNum = WeekDay(BDate, vbSunday)
	Set objTimesRs = objNSNET.GetScheduleTimeListForDay(strCurrYearID, CStr(strStVariantID), nRelay, False, nWeekDayNum)
	Call objNSNET.GetDayRoomSchedule(strCurrYearID, nRelay, BDate, strStVariantID, objRoomsRs, objScheduleRs)
	bEmptyRooms = objRoomsRs.EOF
End Sub

Sub CommonHeadFunctions()%>
	<script><!--
	<%Call NavigationFunctions("View", "DATE", 1, dtYearStart, dtYearEnd)%>

	function changeView() {
		var form = document.View;
		var val = getListValue(form.ViewType);
		if(val == '2')
			DoSubmit( form, "/asp/Calendar/ViewDayRooms.asp" );
		else
			DoSubmit( form, "/asp/Calendar/DayView.asp" );
	}<%

	If Not readonly Then%>
		function EditCM(classID_IUP, SubjId, strSubjectID, strIsoDate) {
			postTo("/angular/school/schedule/edit/?classId=" + classID_IUP + "&sgId=" + SubjId + "&subjectId=" + strSubjectID + "&cmDay=" + strIsoDate);
		}

		function EditEvt(eventType, eventID) {
			postTo('/angular/school/calendar/events/edit/' + eventID)	
		}<%
	End If%>

	function CheckAndSubmit() {
		DoSubmit(document.View, "");
	}
	//--></script><%

	Call scriptCalendar("View", dtYearStart, dtYearEnd)
End Sub

Sub DrawViewFilter()
	Dim nTempId

	nTempId = 0
	If strScriptName = "/asp/Calendar/ViewDayRooms.asp" Then nTempId = 2

	Call DrawSimpleFilterRow(obLanguage("Common","kView"), "ViewType", Array(0, obLanguage("Calendar","kOnTime"), 2, obLanguage("Calendar","kOnRooms",strFunctionalityType)), nTempId, False, "changeView()")
End Sub

Sub DrawRoomsTable()
	Dim i, strClassName, bEmpty, strRoom, nDisplayLen
	Dim strEventShortName, strEventName, nEventType, strSubjName
	Dim bScheduleTimeExists
	Dim strIsoDate

	If Not bIsDebug Then On Error Resume Next
	bScheduleTimeExists = (objTimesRs.RecordCount > 0)%>

	<table class="schedule-table table table-bordered table-condensed print-block">
		<tr>
			<th rowspan="3" class="schedule-table-header"><%=obLanguage("Common","kRoom",strFunctionalityType)%></th>
			<th colspan="<%=objTimesRs.RecordCount%>" class="schedule-table-header"><%=obLanguage("Calendar","kLesson", strFunctionalityType)%></th>
		</tr>
		<tr class="xtcb"><%
			While Not objTimesRs.EOF
				Response.Write "<td class=""relay" & objTimesRs("RELAY") & """>" & objTimesRs("SCHEDULETIMENUMBER") & "</td>"
				objTimesRs.MoveNext
			WEnd%>
		</tr><%

		If bScheduleTimeExists Then
			objTimesRs.MoveFirst
		End If%>

		<tr class="xtcb"><%
			While Not objTimesRs.EOF
				Response.Write "<td class=""relay" & objTimesRs("RELAY") & """>" & Time2Str(objTimesRs("STARTTIME")) & "-" & Time2Str(objTimesRs("ENDTIME")) & "</td>"
				objTimesRs.MoveNext
			WEnd%>
		</tr><%

		While Not objRoomsRs.EOF
			strRoom = objRoomsRs("ROOM")
			Response.Write "<tr><th class=""leftheader"" class=""xtc"">" & DB2HTML(strRoom) & "</th>"

			objTimesRs.MoveFirst

			Do
			For i = 0 To 2 ' псевдо бесконечный цикл для быстрого выхода по Exit For
				i = 0
				bEmpty = True

				Do While Not objScheduleRs.EOF
					If objScheduleRs("ROOM") <> strRoom Then
						If Not bEmpty Then Response.Write "</td>" : objTimesRs.MoveNext

						While Not objTimesRs.EOF 
							Response.Write "<td>&nbsp;</td>"

							objTimesRs.MoveNext
						WEnd

						Exit For
					End If

					nEventType = CLng(objScheduleRs("EVENTTYPE"))
					If nEventType = 0 And (objScheduleRs("RELAY") <> objTimesRs("RELAY") Or _
						objScheduleRs("SCHEDULETIMENUMBER") <> objTimesRs("SCHEDULETIMENUMBER") Or _
						objScheduleRs("VARIANTID") <> objTimesRs("VARIANTID")) Then Exit Do
				
					If bEmpty Then
						If nEventType = 0 Then
							Response.Write "<td class=""filled-cell"">"
						Else
							Response.Write "<td class=""event"">"
						End If
					End If

					Response.Write "<div>"
					strClassName = DB2HTML(objScheduleRs("CLASSNAME"))

					If nEventType = 0 Then ' уроки
						strSubjName = objScheduleRs("SUBJECTABBREV")
						If strViewFullSubjects <> 0 Then strClassName = strClassName& "/" & DB2HTML(strSubjName)

						If readonly Then
							Response.Write strClassName
						Else
							strIsoDate = Date2IsoFormat(objScheduleRs("DAY"))

							Response.Write ShowAnchor("EditCM('" & objScheduleRs("ID") & "','" & objScheduleRs("SGID") & "', '" & objScheduleRs("SUBJECTID") & "', '" & strIsoDate & "')", obLanguage("Common","kChange"), strClassName, "TITLE=""" & DB2Value(strSubjName) & """")
						End If
					Else ' школьные и классные мероприятия
						strEventName = objScheduleRs("NAME")
						If strViewFullSubjects <> 0 Then nDisplayLen = 10 Else nDisplayLen = 5
						If Len(strEventName) > nDisplayLen + 3 Then strEventShortName = Left(strEventName,nDisplayLen) & "..." Else strEventShortName = strEventName
						
						If readonly Then
							Response.Write strEventShortName
						Else
							Response.Write ShowAnchor("EditEvt('" & nEventType & "','" & objScheduleRs("EVENTID") & "')", obLanguage("Common","kChange"), strEventShortName, "TITLE=""" & DB2Value(strEventName) & """")
						End If
						Response.Write "<input type=""hidden"" name=""FULLEVENTNAME"" value="""&strEventName&"""/>"
					End If

					Response.Write "</div>"
					bEmpty = False
					objScheduleRs.MoveNext
				Loop

				If bEmpty Then Response.Write "<td>&nbsp;"
				Response.Write "</td>"

				objTimesRs.MoveNext
				Exit For
			Next
			Loop Until objTimesRs.EOF

			Response.Write "</tr>"

			objRoomsRs.MoveNext
		WEnd%>
	</table><%
End Sub%>