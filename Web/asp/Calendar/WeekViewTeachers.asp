<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterTeachers.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterWeeks.asp -->
<!-- #INCLUDE FILE ="WeekView_inc.asp" -->
<!-- #INCLUDE FILE ="WeekTeachers_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE ="SchedCommon_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>"><%

	Call CommonHeadFunctions()
End Sub

Sub specialHead()%>
	<SCRIPT><!--
		function editClassMeetings(classID_IUP, subjId, subjectId, isoDate) {
			postTo("/angular/school/schedule/edit/?classId=" + classID_IUP + "&sgId=" + subjId + "&subjectId=" + subjectId + "&cmDay=" + isoDate);
		}
	//--></SCRIPT><%
End Sub

Sub specialReadState()
	Call InitStVariants()
End Sub

Sub specialWriteState()
	Call WriteStateTeacher()
	Call obTokenMgr.SetData(strToken,stCalendarWeekViewType, "/asp/Calendar/WeekViewTeachers.asp")
End Sub

Sub specialFilters(strForm)
	Call DrawWeeksDay(strForm)
End Sub

Sub specialDraw()
	If bEmptyScheduleTimes Then%>
		<div class="row">
			<div class="col-md-6"><%
				Call DrawInfo(obLanguage("Calendar","kNoClassMeetings"), False)%>
			</div>
		</div><%
		Exit Sub
	End If

	Call DrawTeachersTable(True)
End Sub

Sub DrawWeeksDay (strForm)
	Dim i
	
	OpenFormGroup obLanguage("Calendar","kDayOfWeek")%>
		<div class="input-group">
			<select name="BDAYWEEK" onChange="ok('<%=strForm%>','')" class="form-control">
				<%For i = 1 To 7%>
					<option value="<%=i%>"<%If nStartW=i Then response.write "SELECTED"%>><%=WeekDayName(i, True,0)%></option>
				<%Next%>
			</select>
			<span class="input-group-addon"><%=obLanguage("Calendar","kTo")%></span>
			<select NAME="EDAYWEEK" onChange="ok('<%=strForm%>','')" class="form-control">
				<%For i = 1 To 7%>
					<option value="<%=i%>"<%If nEndW=i Then response.write "SELECTED"%>><%=WeekDayName(i, True,0)%></option>
				<%Next%>
			</select>
			<input type="hidden" name="PCLID_IUP" value="">
		</div><%
	CloseFormGroup

	If bManyVariants Then
		DrawFilterRow strForm, obLanguage("Calendar","kLessonTimeVariant"), "VARIANTID", objStVariants, "VARIANTID", "VARIANTNAME", strStVariantID, True
	End If
End Sub

Sub Main()
	nViewID = 2

	If Not HasUserRight(arCalEndarCreateCalEndar) Then readonly = True

	If IsDull(Request("BDAYWEEK")) Then nStartW = GetSafeLng(obTokenMgr.GetData(strToken,stBeginWeeksDays), 1) Else nStartW = GetSafeLng(Request("BDAYWEEK"), 1)
	If IsDull(Request("EDAYWEEK")) Then nEndW = GetSafeLng(obTokenMgr.GetData(strToken,stEndWeeksDays), 6) Else nEndW = GetSafeLng(Request("EDAYWEEK"), 6)
	If nEndW < nStartW Then nEndW = nStartW

	startDay = DateAdd("d", BDate, nStartW - 1)
	endDay = DateAdd("d", BDate, nEndW - 1)

	Call specialMain()
End Sub

Sub WriteStateTeacher()
	Call obTokenMgr.SetData(strToken,stBeginWeeksDays, nStartW)
	Call obTokenMgr.SetData(strToken,stEndWeeksDays, nEndW)
End Sub

Sub DrawLinkButtons
	If bEmptyScheduleTimes Then Exit Sub

	Call DrawPrintButtons()
End Sub%>