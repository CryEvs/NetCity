<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/teacher.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterMonths.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="SchedCommon_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
const kScriptName = "/asp/Calendar/MonthView.asp"

Dim bAll, strTeacherID
Dim strTermID, strTermName
Dim rsHoliDays, rsVacations, rsSEvents, rsCEvents
Dim nWeekInYear
Dim arrClassArrayTmp
Dim bRightDefineEvents

Function hasUserRightsOnPage()
	bRightDefineEvents = HasUserAnyRights(Array(arPostSchoolEvent, arClassMgmPostClassEventAll, arClassMgmPostClassEventSelf))
	If HasUserRight(arCalendarViewAll) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arCalendarViewSelf) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Function GetPageTitle()
	Dim strTitle

	strTitle = obLanguage("Calendar","kTitleMonthView",strFunctionalityType)
	If Not IsDull(strTermName) Then strTitle = strTitle & GreenText(" (" & DB2HTML(strTermName) & ")")
	GetPageTitle = strTitle
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClndrMonth
 End Function

Sub ReadState()
	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	Call InitMonths( dtYearStart, dtYearEnd )
	nWeekInYear = kStartNWeek + DateDiff("ww", dtYearStart, dtMonthStart, 0, 0)

	If bAll Then
		Call InitYearClassesAll( )
	Else
		strTeacherID = strUserID
		Call InitTeacherClasses( True )
	End If

	If strClassID = "0" Then Exit Sub

	If strClassID <> "-1" Then
		Call GetTermInfoForClassAndDate_IUP(strClassID & "_0", dtMonthStart, strTermID, strTermName)
		If strTermID = "" Then Call GetTermInfoForClassAndDate_IUP(strClassID & "_0", dtMonthEnd, strTermID, strTermName)
	End If

	Call InitYearInfo()
End Sub

Sub WriteState()
	Dim objClassInfo

	Call obTokenMgr.SetData(strToken,stCalendarMonthViewType, "/asp/Calendar/MonthView.asp")
	Call obTokenMgr.SetData(strToken,stCurrTeacher, strTeacherID)
	WriteMonth
	Call obTokenMgr.SetData(strToken,stBackPage, "")
	If Not IsDull(strTermID) Then Call obTokenMgr.SetData(strToken,stCurrTerm, strTermID)

	WriteClass
	WriteClass_IUP_Format
End Sub

Sub Main()
	Dim arrClassArray, i, nClassCount

	If strClassID = "0" Then Exit Sub

	Set rsHoliDays = objNSNET.GetSchoolEventList(kHoliday, strCurrYearID, dtMonthStart, dtMonthEnd)
	If strClassID <> "-1" Then
		Set rsVacations = objNSNET.GetClassVacations(strClassID, strCurrYearID, dtMonthStart, dtMonthEnd)
	Else
		Set rsVacations = objNSNET.GetSchoolEventList(kVacation, strCurrYearID, dtMonthStart, dtMonthEnd)
	End If

	arrClassArray = GetClassArray(strClassID, objClassesRs)
	arrHoliDays = InitDaysRs( rsHoliDays )
	arrVacations = InitDaysRs( rsVacations )

	Set rsSEvents = objNSNET.GetSchoolEventList(kSchoolEvent, strCurrYearID, dtMonthStart, dtMonthEnd)
	Set rsCEvents = objNSNET.GetClassEventList(-1, arrClassArray, strCurrYearID, dtMonthStart, dtMonthEnd)
End Sub

Sub onHead()
	Call scriptMonth("View", "MonthView.asp")%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>">

	<SCRIPT><!--
	function dayschedule(day) {
		var form = document.LinkForm;

		form.DATE.value = day;

		DoSubmit(form, "");
	}

	function ViewWeekSchedule(day) {
		var form = document.LinkForm;

		form.DATE.value = day;

		DoSubmit(form, "/asp/Calendar/WeekViewTime.asp");
	}

	function changeView() {
		var form = document.View;
		var val = getListValue(form.ViewType);

		if(val == "1")
			DoSubmit( form, "MonthBirth.asp" );
	}

	function EditEvent(eventType, eventID) {
		postTo('/angular/school/calendar/events/edit/' + eventID)
	}
	//--></SCRIPT><%
End Sub

Sub DrawFilters(strForm)
	If PERSON_DATA Then
		Call DrawSimpleFilterRow(obLanguage("Common","kView"), "ViewType", Array(0, obLanguage("Calendar","kEvents"), 1, obLanguage("Calendar","kTitleMonthBirth")), "", False, "changeView()")
	End If
	Call DrawYearClasses(strForm, True, IIf(bAll, obLanguage("Filter", "kNoYearClasses", strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)))
	
	If bExit Then Exit Sub

	Call DrawMonths(strForm)
End Sub

Sub DrawButtons()
	Dim strClassIdTmp, strIupGradeTmp, bIsIupGradeTmp

	If Not readonly Then

		If Not bRightDefineEvents Then 
			Exit Sub
		End If

		ButtonAdd "ok('View', '/asp/SetupSchool/Calendar/EventsMonth.asp')", obLanguage("Calendar","kAddEvent")

	End If
End Sub

Sub DrawLinkButtons()
	Call DrawPrintButtons()
End Sub

Sub onDrawPage()
	Dim lngNumOfDays, lngStartDay, lngEndDay, lngCur, lngDayOfWeek
	Dim dtDate, strDate, strCellClass, i, strEvent, strAddStyle

	lngNumOfDays = Day(dtMonthEnd)
	lngDayOfWeek = Weekday(dtMonthStart, GetFirstDayOfWeek)

	If DateDiff("d", dtMonthStart, dtYearStart, 0, 0) > 0 Then lngStartDay = Day( dtYearStart ) Else lngStartDay = 1
	If DateDiff("d", dtMonthEnd, dtYearEnd, 0, 0) < 0 Then lngEndDay = Day( dtYearEnd ) Else lngEndDay = lngNumOfDays%>

	<form name="View" ACTION="MonthView.asp" METHOD="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("EventType", "", "EventID", "", "BackPage", kScriptName))%>
		
		<%
		If Not readonly Then
			Call DrawButtonsFilters(True, "View")
		Else
			Call DrawButtonsFiltersSingleRow("View")
		End If
		%>
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
							Response.Write ShowAnchor("ViewWeekSchedule('" & Date2Str(dtMonthStart) & "')", obLanguage("Calendar","kViewWeekSchedule"), obLanguage("Calendar","kWeekSchedule") & nWeekInYear, "")
						Else
							Response.Write obLanguage("Calendar","kWeekSchedule") & nWeekInYear
						End If
						nWeekInYear = nWeekInYear + 1%>
					</td><%
					For lngCur = 1 To lngDayOfWeek - 1
						Response.Write "<td></td>"
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
							If IsVacationIterate(dtDate) Then strCellClass = " class = ""vacation-day""" Else strCellClass = ""

							Response.Write "<td valign=""top""" & strCellClass & ">"
							Response.Write "<div align=""right"">"
							Response.Write ShowAnchor("dayschedule( '" & strDate & "')", obLanguage("Calendar","kViewDaySchedule"), lngCur, strAddStyle)
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
	
	<form name="LinkForm" ACTION="DayView.asp" METHOD="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DATE", ""))%>
	</form><%
End Sub%>