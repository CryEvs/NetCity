<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterMonths.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterStudents.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="SchedCommon_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.
const kScriptName = "/asp/Calendar/MonthViewS.asp"

Dim strTermID, strTermName, rsHoliDays, rsVacations, rsSEvents, rsCEvents
Dim nWeekInYear

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCalendarViewSelf)
End Function

Function GetPageTitle()
	Dim strTitle

	strTitle = obLanguage("Calendar","kTitleMonthView",strFunctionalityType)

	If Not IsDull(strTermName) Then
		strTitle = strTitle & GreenText(" (" & DB2HTML(strTermName) & ")")
	End If

	GetPageTitle = strTitle
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClndrMonth
 End Function

Sub ReadState()
	Call InitStudents()
	If bStudentsIsEmpty Then Exit Sub

	Call InitYearStudentClasses( strStudentID )
	If strClassID = "0" Then Exit Sub

	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	Call InitMonths( dtYearStart, dtYearEnd )
	nWeekInYear = kStartNWeek + DateDiff("ww", dtYearStart, dtMonthStart, 0, 0)

	Call GetTermInfoForClassAndDate_IUP(strClassID & "_0", dtMonthStart, strTermID, strTermName)
	If strTermID = "" Then
		Call GetTermInfoForClassAndDate_IUP(strClassID & "_0", dtMonthEnd, strTermID, strTermName)
	End If

	Call InitYearInfo()
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stCalendarMonthViewType, "/asp/Calendar/MonthViewS.asp")
	Call obTokenMgr.SetData(strToken,stCurrStudent, strStudentID)
	WriteMonth
	WriteClass
	Call obTokenMgr.SetData(strToken,stBackPage, "")
	If Not IsDull(strTermID) Then Call obTokenMgr.SetData(strToken,stCurrTerm, strTermID)
End Sub

Sub Main()
	If bStudentsIsEmpty Or (strClassID = "0") Then Exit Sub

	Set rsHoliDays = objNSNET.GetSchoolEventList(kHoliday, strCurrYearID, dtMonthStart, dtMonthEnd)
	If strClassID <> "-1" Then
		Set rsVacations = objNSNET.GetClassVacations(strClassID, strCurrYearID, dtMonthStart, dtMonthEnd)
	Else
		Set rsVacations = objNSNET.GetSchoolEventList(kVacation, strCurrYearID, dtMonthStart, dtMonthEnd)
	End If

	arrHoliDays = InitDaysRs(rsHoliDays)
	arrVacations = InitDaysRs(rsVacations)
	Set rsSEvents = objNSNET.GetSchoolEventList(kSchoolEvent, strCurrYearID, dtMonthStart, dtMonthEnd)
	Set rsCEvents = objNSNET.GetClassEventList(-1, Array(strClassID), strCurrYearID, dtMonthStart, dtMonthEnd)
End Sub

Sub onHead()
	Call scriptMonth("View", "MonthViewS.asp")%>

	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>">

	<script><!--
		function dayschedule(day) {
			var form = document.LinkForm;

			form.DATE.value = day;

			DoSubmit( form, "" );
		}

		function ViewWeekSchedule(day) {
			var form = document.LinkForm;

			form.DATE.value = day;

			DoSubmit(form, "/asp/Calendar/WeekViewTimeS.asp");
		}

		function changeView() {
			var form = document.View;
			var val = getListValue(form.ViewType);

			if(val == "1")
				DoSubmit(form, "MonthBirth.asp");
		}

		function EditEvent(eventType, eventID) {
			postTo('/angular/school/calendar/events/edit/' + eventID)	
		}
	//--></script><%
End Sub

Sub DrawFilters(strForm)
	If Not obContext.ServerSettings.SystemSettings.RestrictStudentsAndParents And PERSON_DATA Then
		Call DrawSimpleFilterRow(obLanguage("Common","kView"), "ViewType", Array(0, obLanguage("Calendar","kEvents"), 1, obLanguage("Calendar","kTitleMonthBirth")), "", False, "changeView()")
	End If

	If HasUserRole(rlParent) Then
		DrawStudents strForm, rsStudents

		If bExit Then Exit Sub
	End If

	Call DrawYearClasses(strForm, False, obLanguage("Filter","kStudentNotInClass",strFunctionalityType))
	
	If bExit Then Exit Sub

	Call DrawMonths(strForm)
End Sub

Sub DrawLinkButtons
	Call DrawPrintButtons()
End Sub

Sub onDrawPage()
	Dim lngNumOfDays, lngStartDay, lngEndDay, lngCur, lngDayOfWeek
	Dim dtDate, strDate, strBackColor, i, bEmpty, strFunc, strEvent, strAddStyle

	lngNumOfDays = Day(dtMonthEnd)
	lngDayOfWeek = Weekday(dtMonthStart, GetFirstDayOfWeek)

	If DateDiff("d", dtMonthStart, dtYearStart, 0, 0) > 0 Then lngStartDay = Day(dtYearStart) Else lngStartDay = 1
	If DateDiff("d", dtMonthEnd, dtYearEnd, 0, 0) < 0 Then lngEndDay = Day(dtYearEnd) Else lngEndDay = lngNumOfDays%>

	<form name="View" ACTION="MonthViewS.asp" METHOD="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("EventType","","EventID", "", "BackPage", kScriptName))%>

		<%Call DrawButtonsFiltersSingleRow("View")%>
	</form><%

	If bExit Then Exit Sub%>

	<div class="row">
		<div class="col-md-12">
			<table class="schedule-table table table-bordered table-condensed print-block">
		<tr>
			<th class="schedule-table-header">&nbsp;</th><%
			For i = 1 To 7
				Response.Write "<th width=""9%"" class=""schedule-table-header"">" & WeekDayName(i, True, 0) & "</th>"
			Next%>
		</tr>
		<tr>
			<td align="center" valign="center" class="week"><%
				If lngStartDay <= 8 - lngDayOfWeek Then
					Response.Write ShowAnchor( "ViewWeekSchedule('" & Date2Str(dtMonthStart) & "')", obLanguage("Calendar","kViewWeekSchedule"), obLanguage("Calendar","kWeekSchedule") & nWeekInYear, "")
				Else
					Response.Write obLanguage("Calendar","kWeekSchedule") & nWeekInYear
				End If

				nWeekInYear = nWeekInYear + 1%>
			</td><%
			For lngCur = 1 To lngDayOfWeek - 1
				Response.Write "<td>&nbsp;</td>"
			Next

			For lngCur = 1 To lngNumOfDays
				dtDate = DateSerial(lngCurrYear, lngCurrMonth, lngCur)
				strDate = Date2Str(dtDate)

				If lngDayOfWeek = 8 Then
					Response.Write "</tr><tr><td align=""center"" valign=""center"" class=""week"">"

					If (lngCur + 6) >= lngStartDay AND lngCur <= lngEndDay Then
						 Response.Write ShowAnchor("ViewWeekSchedule('" & Date2Str(dtDate) & "')", obLanguage("Calendar","kViewWeekSchedule"), obLanguage("Calendar","kWeekSchedule") & nWeekInYear, "")
					Else
						Response.Write obLanguage("Calendar","kWeekSchedule") & nWeekInYear
					End If

					Response.Write "</td>"
					nWeekInYear = nWeekInYear + 1
					lngDayOfWeek = 1
				End If

				If lngStartDay <= lngCur And lngCur <= lngEndDay Then
					If IsFreeDay(dtDate) Then strAddStyle = "style=""color:red""" Else strAddStyle = ""
					If IsVacationIterate(dtDate) Then strBackColor = " class = ""vacation-day""" Else strBackColor = ""

					Response.Write "<td valign=""top""" & strBackColor & ">"
					Response.Write "<div align=""right"">"
					Response.Write ShowAnchor("dayschedule( '" & strDate & "')", obLanguage("Calendar","kViewDaySchedule"), lngCur,  strAddStyle)
					Response.Write "</div>"

					Call DrawEvents(dtDate)

					Response.Write "</td>"
				Else
					Response.Write "<td align=""right"">" & lngCur & "<div align=""right"">&nbsp;</div></td>"
				End If

				lngDayOfWeek = lngDayOfWeek + 1
			Next

			For lngCur = lngDayOfWeek To 7
				Response.Write "<td></td>"
			Next%>
		</tr>
	</table>
		</div>
	</div>
	
	<form name="LinkForm" ACTION="DayViewS.asp" METHOD="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DATE", ""))%>
	</form><%
End Sub%>