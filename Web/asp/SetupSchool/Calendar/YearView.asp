<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nWeeks

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kYearView")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClndrYear
 End Function

Function hasUserRightsOnPage()
	If HasUserRight(arCalendarViewAll) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arCalendarViewSelf) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arClassMgmPostClassEventAll) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arClassMgmPostClassEventSelf) Then hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = HasUserRight(arPostSchoolEvent)
End Function

Sub ReadState()
	InitYearInfo
	arrHoliDays = InitDays( kHoliday, Empty, Empty)
	arrVacations = InitDays( kVacation, Empty, Empty)
	nWeek = 0'!!!!!!!!!!!!!!!!!11
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,"BACK", strScriptName)
	Call obTokenMgr.SetData(strToken, "FixEventType", False)
End Sub

Sub Main()
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>">
	
	<SCRIPT>
		function Go(viewAsp, day) {
			if(viewAsp == 0)
				viewAsp = 'DayView';
			else
				viewAsp = 'WeekViewTime';

			var form = document.forms['Main'];

			form.action = '/asp/Calendar/'+viewAsp + '<%If Not bIsStaff Then%>S<%End If%>.asp';
			form.DATE.value = day;

			DoSubmit(form,"");
		}

		function GoM(theMonth, theYear) {
			var form = document.forms['MonthView'];

			form.Month.value = theMonth;
			form.Year.value = theYear;

			DoSubmit(form, "");
		}
	</SCRIPT><%
End Sub

Sub DrawFilters(strForm)
End Sub

Sub DrawLinkButtons
	Dim strHint

	strHint = obLanguage("SetupSchoolCalendar","kYearEvents")
	Button "postTo('/angular/school/calendar/events/')", strHint, strHint, "glyphicon glyphicon-flag"

	If HasUserRight(arPostSchoolEvent) Then
		strHint = obLanguage("SetupSchoolCalendar","kMoveDays")
		Button "ok('Main', 'MoveDays.asp')",  strHint, strHint, "glyphicon glyphicon-share"
	End If
End Sub

Sub onDrawPage()
	Dim dtDate, dtEndDate
	Dim nMonth, nYearEnd

	nMonth = Month(dtYearStart)
	nYearEnd = Year(dtYearEnd)
	dtDate = DateSerial(Year(dtYearStart), nMonth, 1) 
	If nMonth <= Month(dtYearEnd) Then nYearEnd = nYearEnd + 1 
	dtEndDate = DateAdd("d", -1, DateSerial(nYearEnd, nMonth, 1))%>

	<form name="Main" method="post" action="YearView.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DATE", dtDate))%>

		<%Call DrawButtonsFilters(HasUserRight(arPostSchoolEvent) Or HasUserRight(arClassMgmPostClassEventAll) Or HasUserRight(arClassMgmPostClassEventSelf), "Main")%>
	</form><%
	
	Call DrawMonths(dtDate, dtEndDate)%>

	<div class="summary-information" style="float: none;">
		<div><%=obLanguage("SetupSchoolCalendar","kSchoolYearDays")%>: <span><%=1 + DateDiff("d", dtYearStart, dtYearEnd, 0, 0)%></span></div>
		<div><%=obLanguage("SetupSchoolCalendar","kSchoolYearWeeks")%>: <span><%=IIF(nWeeks > nWeek, nWeeks, nWeek)%></span></div>
		<div><%=obLanguage("SetupSchoolCalendar","kYearVacations")%>: <span><%=nVacations%></span></div>
		<div><%=obLanguage("SetupSchoolCalendar","kYearHoliDays")%>: <span><%=nHoliDays%></span></div>
		<div><%=obLanguage("Common","kLegend")%>:
			<div class="legend print-block">
				<div>
					<p><span class="legend-label" style="background-color: #e0f3ba"></span><span class="legend-description"> — <%=obLanguage("SetupSchoolCalendar","kVacations")%></span></p>
					<p><span class="legend-label" style="font-weight: 600;">17</span><span class="legend-description"> — <%=obLanguage("SetupSchoolCalendar","kNotYearDays")%></span></p>
					<p><span class="legend-label" style="color:red; font-weight: 600;">17</span><span class="legend-description"> — <%=obLanguage("SetupSchoolCalendar","kHolidaysAndRestdays")%></span></p>
					<p><span class="legend-label" style="color:#2280bb; font-weight: 600;">17</span><span class="legend-description"> — <%=obLanguage("SetupSchoolCalendar","kWorkdays")%></span></p>
				</div>
			</div>
		</div>
	</div>

	<div class="summary-inform-bottom">
		<div><%=obLanguage("SetupSchoolCalendar","kSchoolYearDays")%>: <span><%=1 + DateDiff("d", dtYearStart, dtYearEnd, 0, 0)%></span></div>
		<div><%=obLanguage("SetupSchoolCalendar","kSchoolYearWeeks")%>: <span><%=IIF(nWeeks > nWeek, nWeeks, nWeek)%></span></div>
		<div><%=obLanguage("SetupSchoolCalendar","kYearVacations")%>: <span><%=nVacations%></span></div>
		<div><%=obLanguage("SetupSchoolCalendar","kYearHoliDays")%>: <span><%=nHoliDays%></span></div>
		<div><%=obLanguage("Common","kLegend")%>:
			<div class="legend print-block">
				<div>
					<p><span class="legend-label" style="background-color: #e0f3ba"></span><span class="legend-description"> — <%=obLanguage("SetupSchoolCalendar","kVacations")%></span></p>
					<p><span class="legend-label" style="font-weight: 600;">17</span><span class="legend-description"> — <%=obLanguage("SetupSchoolCalendar","kNotYearDays")%></span></p>
					<p><span class="legend-label" style="color:red; font-weight: 600;">17</span><span class="legend-description"> — <%=obLanguage("SetupSchoolCalendar","kHolidaysAndRestdays")%></span></p>
					<p><span class="legend-label" style="color:#2280bb; font-weight: 600;">17</span><span class="legend-description"> — <%=obLanguage("SetupSchoolCalendar","kWorkdays")%></span></p>
				</div>
			</div>
		</div>
	</div>

	<form name="MonthView" method="post" action="/asp/Calendar/MonthView<%If Not bIsStaff Then%>S<%End If%>.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("Month", "", "Year", ""))%>
	</form><%
End Sub

Sub DrawMonths(theStartDate, theEndDate)
	Dim dtDate, nMonths

	nMonths = 0
	dtDate = theStartDate%>

	<ul class="year-calendar"><%
		Do
			Call DrawMonth(dtDate)
			dtDate = DateAdd("m", 1, dtDate)
			nMonths = nMonths + 1

			If DateDiff("m", dtDate, theEndDate, 0, 0) < 0 Then Exit Do
		Loop%>
	</ul><%
End Sub

Sub DrawMonth(theDate)
	Dim nYear, nMonth, dtDate, dtNewDate, i, strStyle, strBGColor, bWorkWeek, nWD

	dtDate = theDate 
	nMonth = Month(theDate)
	nYear = Year(theDate)%>

	<li><%
		If (IsYearDay(dtDate) Or IsYearDay(DateAdd("d", -1, DateAdd("m", 1, dtDate)))) Then
			rw ShowAnchor("GoM(" & nMonth & "," & nYear & ")", obLanguage("SetupSchoolCalendar","kMonthView"), obLanguage.GetMonthName(nMonth, False) & " " & nYear, "class=""month""")
		Else
			rw obLanguage.GetMonthName(nMonth, False)
		End If%>

		<div class="weekday"><%
			For i = 1 To 7
				rw "<div>" & WeekDayName(i, True, 0) & "</div>" 
			Next%>
			<div>№</div>
		</div><%
		
		rw "<div>"

		bWorkWeek = False
		nWD = WeekDay(dtDate, GetFirstDayOfWeek) - 1

		For i = 1 To nWD
			rw "<div>&nbsp;</div>" 
		Next
		
		Do
			strStyle = " class="""
			If IsYearDay(dtDate) Then strStyle = strStyle & "school-day"
			If IsFreeDay(dtDate) Then strStyle = strStyle & " weekend"
			If IsVacationIterate(dtDate) Then strStyle = strStyle & " vacation"
			strStyle = strStyle & """"

			If Not IsYearDay(dtDate) Then
				rw "<div " & strStyle & "><span>" & Day(dtDate) & "</span></div>" 
			Else
				bWorkWeek = True
				rw "<div " & strStyle & ">" & ShowAnchor("Go(0,'" & Date2Str(dtDate) & "')", obLanguage("SetupSchoolCalendar","kDayView"), Day(dtDate), strStyle) & "</div>" 
			End If

			dtNewDate = DateAdd("d", 1, dtDate)
			nWD = WeekDay(dtNewDate, GetFirstDayOfWeek)
			If Month(dtNewDate) <> nMonth Then Exit Do

			If nWD = 1 Then
				If bWorkWeek Then
					nWeek = nWeek + 1
					rw "<div class=""weeknum"">" & ShowAnchor("Go(1,'" & Date2Str(dtDate) & "')", obLanguage("SetupSchoolCalendar","kWeekView"), nWeek, "") & "</div>"
					bWorkWeek = False
				Else
					rw "<div>&nbsp;</div>" 
				End If

				rw "</div><div>"
			End If

			dtDate = dtNewDate
		Loop
		
		If nWD > 1 Then
			For i = 1 To 8 - nWD
				rw "<div>&nbsp;</div>" 
			Next
		End IF

		If bWorkWeek Then
			nWeeks = nWeek + 1
			rw "<div class=""weeknum"">" & ShowAnchor("Go(1,'" & Date2Str(dtDate) & "')", obLanguage("SetupSchoolCalendar","kWeekView"), nWeeks, "") & "</div>"
			If nWD = 1 Then nWeek = nWeeks
		Else
			rw "<div>&nbsp;</div>" 
		End If%>
	</li><%
End Sub%>