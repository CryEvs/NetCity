<!-- #INCLUDE FILE=../header1.asp -->
<!-- #INCLUDE FILE=../scripts/teacher.asp -->
<!-- #INCLUDE FILE=../scripts/filterYears.asp -->
<!-- #INCLUDE FILE=../scripts/filterClasses.asp -->
<!-- #INCLUDE FILE=../scripts/filterClasses_IUP.asp -->
<!-- #INCLUDE FILE=../scripts/filterWeeks.asp -->
<!-- #INCLUDE FILE="WeekViewS_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="SchedCommon_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objTimesRs, objScheduleClassesRs, objScheduleGradesRs
Dim objCmdScheduleTimes

Sub PreReadState()
	nViewID = 0
End Sub

Sub specialWriteState()
	Call obTokenMgr.SetData(strToken,stCalendarWeekViewType, "/asp/Calendar/WeekViewTimeS.asp")
	Call obTokenMgr.SetData(strToken, stTempString, strTable)
End Sub

Sub specialMain()
	Dim strClasses, strGrades, objVariantsRs, strVariantIDs
	
	strClasses = ""
	strGrades = ""
	Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade) 
	If bIsIupGrade Then
		strGrades = CStr(strIupGrade)
	Else
		strClasses = CStr(strClassId)
	End If
	Set objVariantsRs = objNSNET.GetStVariantsForClassesAndGrades(strCurrYearID, strClasses, strGrades)
	strVariantIDs = JoinRsField(objVariantsRs, "VARIANTID")
	bEmptyScheduleTimes = IsDull(strVariantIDs)

	If Not bEmptyScheduleTimes Then
		Set objCmdScheduleTimes = objNSNET.GetScheduleTimeListForDay_Prepare(strCurrYearID, strVariantIDs, nRelay, False)
	End If
	If bStudentsIsEmpty Then Exit Sub

	If bIsIupGrade Then
		Set objScheduleGradesRs = objNSNET.GetScheduleForGrades(strCurrYearID, BDate, EDate, strIupGrade, nRelay, true, strStudentID)
	Else
		Set objScheduleClassesRs = objNSNET.GetScheduleForClasses(BDate, EDate, strClassId, nRelay, true)
	End If

	Call WriteTable()
End Sub

Sub onHead()
	Call CommonHeadFunctions()%>

	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>">

	<SCRIPT><!--
	function changeView() {
		var form = document.View;
		var val = getListValue(form.ViewType);

		if(val == '1') {
			DoSubmit( form, "/asp/Calendar/WeekViewClassesS.asp");
		}
		else {
			DoSubmit( form, "/asp/Calendar/WeekViewTimeS.asp");
		}
	}
	//--></SCRIPT><%
End Sub

Sub specialFilters(strForm)
	If HasUserRole(rlParent) Then
		DrawStudents strForm, rsStudents

		If bExit Then Exit Sub
	End If

	Call DrawYearClasses_IUP(strForm, False, obLanguage("Filter","kStudentNotInClass",strFunctionalityType))
	
	If bExit Then Exit Sub
End Sub

Sub DrawLinkButtons()
	If bEmptyScheduleTimes Then Exit Sub
	If strClassID_IUP = "0" Then Exit Sub

	Call DrawPrintButtons()
End Sub

Sub specialDraw()%>
	<div class="row">
		<div class="col-md-6"><%
			Call onDrawWeekTable()
			If Not bEmptyScheduleTimes Then Call DrawExcelForm()%>
		</div>
	</div><%
End Sub

Sub onDrawWeekTable()
	If bEmptyScheduleTimes Then
		Call DrawInfo(obLanguage("Calendar","kNoClassMeetings"), False)
		Exit Sub
	End If%>

	<%=strTable%><%
End Sub

Sub WriteTable()
	Dim i, j, k, n, strSchedNums, dtDate, arrTimesRs, bEmpty, strNameCell
	Dim nWeekDayNum

	If bEmptyScheduleTimes Then
		strTable = ""
		Exit Sub
	End If

	If strClassID_IUP = "0" Then Exit Sub

	If bIsIupGrade Then
		strNameCell = strIupGrade & " *"
	Else
		strNameCell = objNSNET.GetClassName(strClassId)
	End If

	strTable = "<table class=""schedule-table table table-bordered table-condensed print-block""><tr>"
	strTable = strTable & "<th class=""leftheader"">" & obLanguage("Common","kDay") & "</th><th class=""leftheader"">" & obLanguage("Calendar","kLessonNumber", strFunctionalityType) & "</th>"
	strTable = strTable & "<th class=""schedule-table-header"">" & strNameCell & "</th>"
	strTable= strTable & "</tr>"

	bEmptyScheduleTimes = True
	For i = 0 To 6
		dtDate = BDate + i

		nWeekDayNum = WeekDay(dtDate, vbSunday)
		Set objTimesRs = objNSNET.GetScheduleTimeListForDay_Execute(objCmdScheduleTimes, nWeekDayNum)

		If Not objTimesRs.EOF Then
			bEmptyScheduleTimes = False
			
			strSchedNums = "<td class=""leftheader"" align=""center"">"
			arrTimesRs = objTimesRs.GetRows(,,Array("RELAY", "SCHEDULETIMENUMBER"))
			For n = 0 To UBound(arrTimesRs, 2)
				strSchedNums = strSchedNums & arrTimesRs(1, n) & "<br>"
			Next
			strSchedNums = strSchedNums & "</td>"

			strTable = strTable & "<tr><th class=""leftheader"">" & WeekDayName(WeekDay(dtDate,vbSunday), True, vbSunday) & "</th>" & strSchedNums
			strTable = strTable & "<td>"

			For k = 0 To UBound(arrTimesRs, 2)
				bEmpty = True
				
				If Not bIsIupGrade Then
					Do While Not objScheduleClassesRs.EOF
						'If objScheduleClassesRs("DAY") <> dtDate Or _
						If DateDiff("d", objScheduleClassesRs("DAY"), dtDate, 0, 0) <> 0 Or _
							CLng(objScheduleClassesRs("RELAY")) <> CLng(arrTimesRs(0,k)) Or CLng(objScheduleClassesRs("SCHEDULETIMENUMBER")) <> CLng(arrTimesRs(1,k)) Then Exit Do
						If Not bEmpty Then strTable = strTable & ",&nbsp;"
						strTable = strTable & DB2HTML(objScheduleClassesRs("SUBJECTABBREV"))
						If Not IsDull(objScheduleClassesRs("GROUPABBREV")) Then strTable = strTable & "/" & DB2HTML(objScheduleClassesRs("GROUPABBREV"))
						If Not IsDull(objScheduleClassesRs("ROOM")) Then strTable = strTable & "&nbsp;[" & DB2HTML(objScheduleClassesRs("ROOM")) & "]"
						
						objScheduleClassesRs.MoveNext
						bEmpty = False
					Loop
				Else
					Do While Not objScheduleGradesRs.EOF
						'If objScheduleGradesRs("DAY") <> dtDate Or _
						If DateDiff("d", objScheduleGradesRs("DAY"), dtDate, 0, 0) <> 0 Or _
							CLng(objScheduleGradesRs("GRADE")) <> CLng(strIupGrade) Or _
							CLng(objScheduleGradesRs("RELAY")) <> CLng(arrTimesRs(0,k)) Or CLng(objScheduleGradesRs("SCHEDULETIMENUMBER")) <> CLng(arrTimesRs(1,k)) Then Exit Do
						If Not bEmpty Then strTable = strTable & ",&nbsp;"
						strTable = strTable & DB2HTML(objScheduleGradesRs("NAME"))
						
						If Not IsDull(objScheduleGradesRs("IUP_LEVEL")) Then
							strTable = strTable & "/" & DB2HTML(objScheduleGradesRs("IUP_LEVEL"))
						End If
						
						If Not IsDull(objScheduleGradesRs("ROOM")) Then strTable = strTable & "&nbsp;[" & DB2HTML(objScheduleGradesRs("ROOM")) & "]"
						
						objScheduleGradesRs.MoveNext
						bEmpty = False
					Loop
				End If
				If bEmpty Then strTable = strTable & "-<br>" Else strTable = strTable & "<br>"
			Next
			strTable = strTable & "</tr>"
		End If
	Next

	Call objNSNET.DisposeCommand(objCmdScheduleTimes)
	strTable = strTable & "</table>"

	If bEmptyScheduleTimes Then strTable = ""
End Sub%>