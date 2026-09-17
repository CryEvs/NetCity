<!-- #INCLUDE FILE=../../header1.asp -->
<!-- #INCLUDE FILE=../../scripts/teacher.asp -->
<!-- #INCLUDE FILE="../../scripts/FilterYears.asp" -->
<!-- #INCLUDE FILE="../../scripts/FilterMonths.asp" -->
<!-- #INCLUDE FILE="../../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE=../../scripts/Calendar_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim dtLastDayOfMonth, dtFirstDayOfMonth, rsEvents, nViewType, bAll

Function hasUserRightsOnPage()
	bAll = True
	If HasUserRight(arClassMgmPostClassEventAll) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arClassMgmPostClassEventSelf) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = HasUserRight(arPostSchoolEvent)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleEventsMonth")
End Function

Sub ReadState()
	Dim strMonthPeriod

	readonly = objNSNET.IsYearClosed(strCurrYearID)
	InitYearInfo
	Call InitMonths(dtYearStart, dtYearEnd)
	dtFirstDayOfMonth	= DateSerial(lngCurrYear, lngCurrMonth, 1)
	dtLastDayOfMonth	= DateAdd("d", -1, DateAdd("m", 1, dtFirstDayOfMonth))
	arrHoliDays			= InitDays(kHoliday, dtFirstDayOfMonth, dtLastDayOfMonth)
	arrVacations		= InitDays(kVacation, dtFirstDayOfMonth, dtLastDayOfMonth)

	nViewType = Request("EventType")
	If IsDull(nViewType) Then
		nViewType = GetSafeLng(obTokenMgr.GetData(strToken, "stEventsMonthViewType"), kSchoolEvent)
	Else
		nViewType = GetSafeLng(nViewType, kSchoolEvent)
	End If

	If nViewType = kClassEvent Then
		If Not HasUserRight(arClassMgmPostClassEventAll) And Not HasUserRight(arClassMgmPostClassEventSelf) Then nViewType = kSchoolEvent
	Else
		If Not HasUserRight(arPostSchoolEvent) Then nViewType = kClassEvent
	End If
End Sub

Sub Main()
	If nViewType = kClassEvent Then
		If bAll Then
			Call InitYearClassesAll()
			Set rsEvents = objNSNET.GetClassEventList(-1, IIf(strClassID = "-1", Empty, Array(strClassID)), strCurrYearID, dtFirstDayOfMonth, dtLastDayOfMonth)
		Else
			' Получаются классы, где strUserID - классный руководитель!
			InitYearTeacherClasses(strUserID)

			If strClassID <> "0" Then
				Set rsEvents = objNSNET.GetClassEventList(strUserID, IIf(strClassID = "-1", Empty, Array(strClassID)), strCurrYearID, dtFirstDayOfMonth, dtLastDayOfMonth)
			End If
		End If
	Else
		Set rsEvents = objNSNET.GetSchoolEventList(nViewType, strCurrYearID, dtFirstDayOfMonth, dtLastDayOfMonth)
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, "stEventsMonthViewType", nViewType)
	WriteMonth

	If nViewType = kClassEvent Then
		If strClassID <> "0" Then ' чтобы не менять выбранный до этого класс
			Call WriteClass()
		End If
	End If
End Sub

Sub onHead()
	Call scriptMonth("View", strScriptName)%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>">

	<SCRIPT><!--
		function AddEvent(eventDate) {
			var form = document.forms['View'];
			var eventType = form.EventType;
			var urlParams = {'eventDate': eventDate, 'eventType': eventType};
		
			<%If nViewType = kClassEvent Then%>
				if(form.PCLID.selectedIndex  == 0) {
					alert(language.SetupSchoolCalendar.kAlertChooseClass);

					return;
				}
				
				urlParams.class = form.PCLID.value;
			<%End If%>

			postTo(urlHelper.makeUrl('/angular/school/calendar/events/edit/0', urlParams));
		}

		function EditEvent(eventID) {
			postTo('/angular/school/calendar/events/edit/' + eventID)
		}

		function Back() {
			goBack(document.View, '/asp/Calendar/MonthView.asp');
		}
	//--></SCRIPT><%
End Sub

Sub DrawFilters(strForm)
	OpenFormGroup obLanguage("Common","kView")%>
		<select name="EventType" onChange="ok('<%=strForm%>','')" class="form-control"><%
			If HasUserRight(arPostSchoolEvent) Then%>
				<option value="<%=kHoliday%>"<%If nViewType = kHoliday Then response.write " selected"%>><%=obLanguage("SetupSchoolCalendar","kHolidays")%></option>
				<option value="<%=kVacation%>"<%If nViewType = kVacation Then response.write " selected"%>><%=obLanguage("SetupSchoolCalendar","kVacations")%></option>
				<option value="<%=kSchoolEvent%>"<%If nViewType = kSchoolEvent Then response.write " selected"%>><%=obLanguage("SetupSchoolCalendar","kSchoolEvents",strFunctionalityType)%></option><%
			End If

			If HasUserRight(arClassMgmPostClassEventAll) Or HasUserRight(arClassMgmPostClassEventSelf) Then%>
				<option value="<%=kClassEvent%>"<%If nViewType = kClassEvent Then response.write " selected"%>><%=obLanguage("SetupSchoolCalendar","kClassEvents",strFunctionalityType)%></option><%
			End If%>
		</select><%
	CloseFormGroup

	Call DrawMonths(strForm)

	If nViewType = kClassEvent Then
		Call DrawYearClasses(strForm, True, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChief",strFunctionalityType)))
	End If
End Sub

Sub DrawButtons()
End Sub

Sub onDrawPage()
	Dim dtCurDate, i, strAddStyle
	Dim nDays, nStartDay, nEndDay
	Dim lngCur, lngDayOfWeek

	nDays = Day(dtLastDayOfMonth)
	If lngCurrMonth = Month(dtYearStart) AND lngCurrYear = Year( dtYearStart ) Then nStartDay = Day( dtYearStart ): Else  nStartDay = 1
	If lngCurrMonth = Month(dtYearEnd) AND lngCurrYear = Year( dtYearEnd) Then nEndDay = Day( dtYearEnd ): Else  nEndDay = nDays%>

	<FORM NAME="View" ACTION="<%=strScriptName%>" METHOD="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DATE", "", "EventID", "", "BackPage", strScriptName))%>

		<%Call DrawButtonsFilters(False, "View")%>
	</FORM><%

	If bExit Then Exit Sub%>

	<table class="schedule-table table table-bordered table-condensed">
		<tr>
			<%For i = 1 To 7%>
				<th class="schedule-table-header"><%=WeekDayName(i, True, 0)%></th>
			<%Next%>
		</tr>
		<tr><%
			lngDayOfWeek = Weekday(dtFirstDayOfMonth, GetFirstDayOfWeek)

			For lngCur = 1 To lngDayOfWeek - 1%>
				<td></td>
			<%Next

			For lngCur = 1 To nDays
				If lngDayOfWeek = 8 Then%>
					</tr>
					<tr><%
					lngDayOfWeek = 1
				End If

				If lngCur >= nStartDay AND lngCur <= nEndDay Then
					dtCurDate = DateSerial(lngCurrYear, lngCurrMonth, lngCur)%>

					<td valign="top" align="right" <%=IIf(IsVacationIterate(dtCurDate), "class=""vacation-day", "class=""schedule-day")%>">
						<%=IIF(readonly, lngCur, ShowAnchor("AddEvent( '" & Date2Str(dtCurDate) & "')", obLanguage("SetupSchoolCalendar","kAddEvent"), lngCur, ""))%>

						<div><%
							If Not rsEvents.EOF Then
								Do
									If DateDiff("d", dtCurDate , rsEvents("STARTTIME"), 0, 0) <= 0 AND DateDiff("d", dtCurDate , rsEvents("ENDTIME"), 0, 0) >= 0 Then
										response.write ShowAnchor("EditEvent( " & CStr(rsEvents("EVENTID")) & ")", obLanguage("SetupSchoolCalendar","kEditEvent"), CStr(rsEvents("EVENTNAME")), "") & "<br>"
									End If

									rsEvents.MoveNext
								Loop Until rsEvents.EOF

								rsEvents.MoveFirst
							End If%>
						</div>
					</td><%
				Else%>
					<td>
						<div align="right"><%=lngCur%></div>
						<br>&nbsp;
					</td><%
				End If

				lngDayOfWeek = lngDayOfWeek + 1
			Next

			For lngCur = lngDayOfWeek To 7%>
				<td></td><%
			Next%>
		</tr>
	</table><%
End Sub%>