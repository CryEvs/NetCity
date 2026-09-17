<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses_IUP.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterTeachers.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClassSubjects.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClassSubjects_IUP.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterWeeks.asp -->
<!-- #INCLUDE FILE ="WeekView_inc.asp" -->
<!-- #INCLUDE FILE ="WeekClasses_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE ="SchedCommon_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub specialReadState()
	If Not HasUserRight(arCalendarCreateCalendar) Then readonly = True

	nViewID = 1
	strSubjectID = "0"

	If bAll Then Call InitTeachers(bAll, True) Else Call InitTeachersForMainTeacherAndInterval(BDate, EDate)
	If strTeacherID = "0" Then Exit Sub

	Call InitSubjectsForTeacherAndInterval_IUP(bAll, strTeacherID, BDate, EDate)
	If strSubjectID = "0" Then 
		strClassID_IUP = "0"
		Exit Sub
	End If

	Call InitTeacherSubjectClasses_IUP( bAll, strTeacherID, strSubjectID, BDate, EDate )
	strTypeOfView = GetSafeStr(Request("ViewSubjectsType"), 20, GetSafeStr(obTokenMgr.GetData(strToken, stViewSubjectsType), 20, "1"))
	
	If strClassID_IUP <> "0" And strClassID_IUP <> "-1" Then
		Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, BDate, strTermID, strTermName)
		If strTermID = "" Then Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, EDate, strTermID, strTermName)
	End If
	
	arrClassArray = GetClassArray_IUP(strClassID_IUP, objClasses_IUP_rs)
End Sub

Sub specialWriteState()
	WriteClass_IUP
	Call obTokenMgr.SetData(strToken, stCalendar_ClassArray, arrClassArray)
	Call obTokenMgr.SetData(strToken, stCurrTeacher, strTeacherID)
	Call obTokenMgr.SetData(strToken, stCurrSubject, strSubjectID)
	Call obTokenMgr.SetData(strToken, stViewSubjectsType, strTypeOfView)
	Call obTokenMgr.SetData(strToken, stCalendarWeekViewType, "/asp/Calendar/WeekViewClasses.asp")
End Sub

Sub ViewSubjectsCombo(strTypeOfView)
	Call DrawSimpleFilterRow(obLanguage("Calendar","kSubjectNames"), "ViewSubjectsType", Array(1, obLanguage("Calendar","kEnableOut"), 0, obLanguage("Calendar","kDisableOut")), strTypeOfView, False, SelectChangeHandler("View"))
End Sub

Sub specialFilters(strForm)
	If bAll Then
		Call DrawTeachers(strForm, bAll, True)
	Else
		' здесь в ф-цию DrawTeachers передается параметр bAll=True, чтобы показать список учителей, связанных с вошедшим в систему учителем;
		' bCanSelectAll=False, т.к. "Все" в этом случае выбрать нельзя
		Call DrawTeachers(strForm, True, False)
	End If

	If bExit Then Exit Sub

	Call ViewSubjectsCombo(strTypeOfView)
	Call DrawSubjects(strForm, obLanguage("Calendar","kNoClassMeetings"))
	
	If bExit Then Exit Sub

	Call DrawYearClasses_IUP(strForm, True, obLanguage("Calendar","kNoClassMeetings"))
End Sub

Sub specialDraw()
	If bExit Then Exit Sub%>

	<div class="row">
		<div class="col-md-12"><%
			If objScheduleRs.RecordCount = 0 And Not bHasEvents Then
				Call DrawInfo(obLanguage("Calendar","kNoClassMeetings"), False)
				%></div></div><%
				Exit Sub
			End If%>

			<FORM NAME="Events" METHOD="post" ACTION="<%=strScriptName%>">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("EventType", "", "EventID", "", "BackPage", strScriptName))%>
			</FORM><%
			Call DrawSubjTable()%>

			<form name="LinkForm" ACTION="DayView.asp" METHOD="POST">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("DATE", ""))%>
			</form>
		</div>
	</div><%
End Sub

Sub DrawLinkButtons()
	If strSubjectID = "0" Then Exit Sub
	If objScheduleRs.RecordCount = 0 And Not bHasEvents Then Exit Sub

	Call DrawPrintButtons()
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>"><%

	Call CommonHeadFunctions()
End Sub

Sub specialHead()%>
	<SCRIPT><!--
		function editClassMeetings(ClassID_IUP, strSubjID, strSubjectID, strIsoDate) {
			postTo("/angular/school/schedule/edit/?classId=" + ClassID_IUP + "&sgId=" + strSubjID + "&subjectId=" + strSubjectID + "&cmDay=" + strIsoDate);
		}

		function dayschedule(day) {
			var form = document.LinkForm;
			form.DATE.value = day;

			DoSubmit(form, "");
		}

		function EditEvent(eventType, eventID) {
			postTo('/angular/school/calendar/events/edit/' + eventID)	
		}
	//--></SCRIPT><%
End Sub%>