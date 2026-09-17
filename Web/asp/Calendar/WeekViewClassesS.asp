<!-- #INCLUDE FILE=../header1.asp -->
<!-- #INCLUDE FILE=../scripts/teacher.asp -->
<!-- #INCLUDE FILE=../scripts/FilterYears.asp -->
<!-- #INCLUDE FILE=../scripts/FilterClasses.asp -->
<!-- #INCLUDE FILE=../scripts/FilterClasses_IUP.asp -->
<!-- #INCLUDE FILE=../scripts/FilterClassSubjects.asp -->
<!-- #INCLUDE FILE=../scripts/FilterClassSubjects_IUP.asp -->
<!-- #INCLUDE FILE=../scripts/FilterWeeks.asp -->
<!-- #INCLUDE FILE="WeekViewS_inc.asp" -->
<!-- #INCLUDE FILE="WeekClasses_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="SchedCommon_inc.asp" -->
<!-- #INCLUDE FILE=../scripts/Calendar_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Sub PreReadState()
	nViewID = 1
End Sub

Sub specialWriteState()
	Call obTokenMgr.SetData(strToken, stCurrSubjClass, strSubjClassID)
	Call obTokenMgr.SetData(strToken, stCalendarWeekViewType, "/asp/Calendar/WeekViewClassesS.asp")
End Sub

Sub specialReadState()
	strTypeOfView = "1"
	Call InitStudentYearSubjects_IUP(strStudentID, strCurrYearID)
End Sub

Sub specialFilters(strForm)
	If HasUserRole(rlParent) Then
		DrawStudents strForm, rsStudents
		If bExit Then Exit Sub
	End If

	Call DrawYearClasses_IUP(strForm, False, obLanguage("Filter","kStudentNotInClass",strFunctionalityType)) : If bExit Then Exit Sub
	Call DrawSubjectGroups(strForm, True)
End Sub

Sub specialDraw()
	If strClassID_IUP = "0" Then Exit Sub%>

	<div class="row">
		<div class="col-md-7">
			<form name="LinkForm" ACTION="DayView.asp" METHOD="POST">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("DATE", ""))%>
			</form>

			<FORM NAME="Events" METHOD="post" ACTION="<%=strScriptName%>">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("EventType", "", "EventID", "", "BackPage", strScriptName))%>
			</FORM><%

			Call DrawSubjTable()
			Call DrawExcelForm()%>
		</div>
	</div><%
End Sub

Sub DrawLinkButtons()
	If strClassID_IUP <> "0" Then Call DrawPrintButtons()
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>">

	<%Call CommonHeadFunctions()%>

	<SCRIPT><!--

		function changeView() {
			var form = document.View;
			var val = getListValue(form.ViewType);

			if(val == '1') {
				DoSubmit(form, "/asp/Calendar/WeekViewClassesS.asp");
			}
			else {
				DoSubmit(form, "/asp/Calendar/WeekViewTimeS.asp");
			}
		}

		function EditEvent(eventType, eventID) {
			postTo('/angular/school/calendar/events/edit/' + eventID)	
		}

		function dayschedule(day) {
			var form = document.LinkForm;
			form.DATE.value = day;

			DoSubmit(form, "DayViewS.asp");
		}
	//--></SCRIPT><%
End Sub%>