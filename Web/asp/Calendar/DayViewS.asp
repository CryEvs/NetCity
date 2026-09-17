<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses_IUP.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterStudents.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE=SchedCommon_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/DateInput.asp -->
<!-- #INCLUDE FILE=dayView_inc.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strTermName, strTermID

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCalendarViewSelf)
End Function

Sub ReadState()
	strClassID_IUP = "0"
	strStudentID = "0"
	Call InitBDate()
	Call InitStudents()
	If bStudentsIsEmpty Then Exit Sub
	Call InitYearStudentClasses_IUP( strStudentID, False)
	If strClassID_IUP = "0" Then Exit Sub

	Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, BDate, strTermID, strTermName)
End Sub

Sub WriteState()
	If Not IsDull(strTermID) Then Call obTokenMgr.SetData(strToken,stCurrTerm, strTermID)
	Call obTokenMgr.SetData(strToken,stCalendarTermName, strTermName)
	WriteBDate
	Call obTokenMgr.SetData(strToken,stCurrStudent, strStudentID)
End Sub

Sub Main()
	If strClassID_IUP = "0" Then Exit Sub
	If strClassID_IUP = "-1" Then
		strClassId = "-1"
		strIupGrade = "-1"
	Else
		Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)
	End If
	Set objScheduleRs = objNSNET.GetStudentDaySchedule(strCurrYearID, strClassId, strIupGrade, strStudentID, BDate)
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>">

	<script><!--
		<%Call NavigationFunctions("View", "DATE", 1, dtYearStart, dtYearEnd)%>

		function EditEvent(eventType, eventID) {
			postTo('/angular/school/calendar/events/edit/' + eventID)	
		}

		$(document).ready(function() {
			dateInput.onChange(function() {
				ok_check_db('View', '');
			});
		});

		function CheckAndSubmit() {
			DoSubmit(document.View, "<%=strScriptName%>");
		}
	//--></script><%

	Call scriptCalendar("View", dtYearStart, dtYearEnd)
End Sub

Sub DrawFilters(strForm)
	If HasUserRole(rlParent) Then
		DrawStudents strForm, rsStudents
		If bExit Then Exit Sub
	End If

	Call DrawYearClasses_IUP(strForm, False, obLanguage("Filter", "kStudentNotInClass", strFunctionalityType)) : If bExit Then Exit Sub
	Call DrawBDateWithBtns()
End Sub

Sub DrawLinkButtons
	Call DrawPrintButtons()
End Sub

Sub CalcHints(strHint, strHintClass, bCheckClassChief)
	strHint = obLanguage("Calendar","kViewDetails") : bCheckClassChief = False : strHintClass = obLanguage("Calendar","kViewDetails")
End Sub

Sub DrawExcelForm()
End Sub%>