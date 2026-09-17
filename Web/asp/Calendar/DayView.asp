<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses_IUP.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterTeachers.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/DateInput.asp -->
<!-- #INCLUDE FILE=dayView_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/PrintCommon.asp -->
<!-- #INCLUDE FILE=SchedCommon_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bAll, strTermName, strTermID

Function hasUserRightsOnPage()
	If HasUserRight(arCalendarViewAll) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arCalendarViewSelf) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub ReadState()
	strClassID_IUP = "0"

	Call InitBDate()
	If bAll Then
		Call InitTeachers(bAll, True)
	Else
		Call InitTeachersForMainTeacherAndInterval(BDate, BDate)
	End If

	If strTeacherID = "0" Then Exit Sub

	Call InitTeacherSubjectClasses_IUP(bAll, strTeacherID, "-1", BDate, BDate)
	If strClassID_IUP = "0" Then Exit Sub

	Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, BDate, strTermID, strTermName)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stCalendarDayViewType, "/asp/Calendar/DayView.asp")
	If Not IsDull(strTermID) Then Call obTokenMgr.SetData(strToken,stCurrTerm, strTermID)
	Call obTokenMgr.SetData(strToken,stCalendarTermName, strTermName)
	WriteBDate
	Call obTokenMgr.SetData(strToken,stCurrTeacher, strTeacherID)
	WriteClass_IUP
	Call obTokenMgr.SetData(strToken, stRightCalendarViewAll, bAll)
End Sub

Sub specialButtons()
End Sub

Sub DrawLinkButtons()
	Call DrawPrintButtons()
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>">

	<script><!--
		<%Call NavigationFunctions("View", "DATE", 1, dtYearStart, dtYearEnd)%>

		function changeView() {
			<%If bAll Then%>
				var form = document.View;
				var val = getListValue(form.ViewType);
				if(val == "1")
					DoSubmit(form, "ViewDayRooms.asp");
			<%End If%>
		}

		$(document).ready(function() {
			dateInput.onChange(function() {
				ok_check_db('View', '');
			});
		});

		function EditEvent(eventType, eventID) {
			postTo('/angular/school/calendar/events/edit/' + eventID)	
		}

		function CheckAndSubmit() {
			DoSubmit(document.View, "<%=strScriptName%>");
		}
	//--></script><%

	Call scriptIupClassCalendar("View", dtYearStart, dtYearEnd, strClassID_IUP)
End Sub

Sub DrawFilters(ByVal strForm)
	Call DrawViewFilter()
	Call DrawBDateWithBtns()

	If bAll Then
		Call DrawTeachers(strForm, bAll, True)
	Else
		' здесь в ф-цию DrawTeachers передается параметр bAll=True, чтобы показать список учителей, связанных с вошедшим в систему учителем;
		' bCanSelectAll=False, т.к. "Все" в этом случае выбрать нельзя
		Call DrawTeachers(strForm, True, False)
	End If

	If bExit Then Exit Sub

	Call DrawYearClasses_IUP(strForm, True, obLanguage("Calendar","kNoDayClassMeeting"))
End Sub

Sub DrawViewFilter()
	Dim arr

	arr = Array(0, obLanguage("Calendar","kOnTime"))

	If bAll Then
		ReDim Preserve arr(3)
		arr(2) = 1
		arr(3) = obLanguage("Calendar","kOnRooms",strFunctionalityType)
	End If

	Call DrawSimpleFilterRow(obLanguage("Common","kView"), "ViewType", arr, "", False, "changeView()")
End Sub

Sub CalcHints(strHint, strHintClass, bCheckClassChief)
	If HasUserRight(arPostSchoolEvent) Then strHint = obLanguage("Calendar","kEditMeeting") Else strHint = obLanguage("Calendar","kViewDetails")
	If HasUserRight(arClassMgmPostClassEventAll) Then
		strHintClass = obLanguage("Calendar","kEditMeeting")
	Else
		If HasUserRight(arClassMgmPostClassEventSelf) Then bCheckClassChief = True Else bCheckClassChief = False : strHintClass = obLanguage("Calendar","kViewDetails")
	End If
End Sub%>