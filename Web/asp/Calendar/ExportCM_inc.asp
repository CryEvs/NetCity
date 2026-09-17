<!-- #INCLUDE FILE="../headerXML.asp" -->
<!-- #INCLUDE FILE=../scripts/Calendar_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const adDate = 7
Const adParamInput = &H0001

Dim arrTimes

Sub DrawScheduleTimes
	Dim rsTimes, id

	Set rsTimes = objNSNET.GetCmnScheduleTimeList(strCurrYearID)
	If rsTimes.EOF Then GenerateError obLanguage("Common","kUnexpErr")

	arrTimes = rsTimes.GetRows(,,Array("RELAY", "SCHEDULETIMENUMBER"))
	rsTimes.MoveFirst%>
	<LessonTimes>
	<%id=1
	While Not rsTimes.EOF%>
		<LessonTime id="<%=id%>" starttime="<%=Time2Str(rsTimes("STARTTIME"))%>" endtime="<%=Time2Str(rsTimes("ENDTIME"))%>" sm="<%=rsTimes("RELAY")%>" number="<%=rsTimes("SCHEDULETIMENUMBER")%>" /> <% id=id+1
		rsTimes.MoveNext
	WEnd%>
	</LessonTimes>
<%
End Sub

Sub DrawClassMeetings
	Dim rsCM, cmdCM
	Dim dtDate, dtTmpDate, n, i, nTmp, nTmpTime, nTimeID
	Dim dtEnd

	dtDate = GetSafeDate(Request("currDate"), obTokenMgr.GetData(strToken, stCurrDate))
	dtEnd = DateAdd("d", 6, dtDate)
	Set rsCM = objNSNET.GetClassMeetingsForExport(strCurrYearID, dtDate, dtEnd)

	If rsCM.EOF Then%>
	<TimeTable />
	<%Exit Sub
	End If%>
	<TimeTable>
		<Week id="1" name="Неделя <%=dtDate%> - <%=dtDate+6%>">
		<%
		nTmp = -1 : nTmpTime =  -1
		Do
			If rsCM.EOF Then Response.Write "</Lesson></Day>" : Exit Do
			n = WeekDay(rsCM("DAY"), GetFirstDayOfWeek)
			nTimeID = FindIndex( rsCM("sm"), rsCM("Number") )
			If nTmp<>n Then
				If nTmp <> -1 Then Response.Write "</Lesson></Day>"
				nTmp = n%>
				<Day id="<%=n%>" name="<%=WeekDayName(n, False, 0)%>" wd="<%=WeekDay(rsCM("DAY"))%>" ><%
				nTmpTime =  -1
			End If
			If nTmpTime<>nTimeID Then
				If nTmpTime <> -1 Then Response.Write "</Lesson>"
				nTmpTime = nTimeID%>
					<Lesson timeId="<%=nTimeID%>"><%
			End If%>
			<csg id="<%=rsCM("csgID")%>"<%=IIF( IsDull(rsCM("roomID")),"", " roomid="""&rsCM("roomID")&"""")%><%=IIF( IsDull(rsCM("fix")),"", " fixed="""&rsCM("fix")&"""")%>/><%
			rsCM.MoveNext
		Loop%>
		</Week>
	</TimeTable>
<%
End Sub

Function FindIndex( theRelay, theSTNumber )
	Dim i
	For i = 0 To UBound( arrTimes, 2 )
		If (CLng(arrTimes(0, i)) = CLng(theRelay)) And (CLng(arrTimes(1, i)) = CLng(theSTNumber)) Then
			FindIndex = i+1
			Exit Function
		End If
	Next
	GenerateError obLanguage("Common","kUnexpErr")
End Function
%>
