<% ' © 2007-2015 IRTech. All rights reserved.

Const SCHED_DAY		= 0
Const SCHED_CLASS	= 1
Const SCHED_TEACHER = 2

Dim nViewID
Dim bAll, strTable
Dim EDate
Dim strTermID, strTermName
Dim nWeekInYear

Function GetPageTitle()
	Dim strTitle

	strTitle = obLanguage("Calendar","kScheduleOn") & GreenText(nWeekInYear) & obLanguage("Calendar","kWeekFrom")&": " & GreenText(obLanguage("Calendar","kFrom")&" " & strBDate & " "&obLanguage("Calendar","kTo")&" " & Date2Str(EDate))
	If Not IsDull(strTermName) Then strTitle = strTitle & GreenText(" (" & DB2HTML(strTermName) & ")")
	GetPageTitle = strTitle
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClndrWeek
 End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function hasUserRightsOnPage()
	If HasUserRight(arCalendarViewAll) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arCalendarViewSelf) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub ReadState()
	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
	Call InitWeek(dtYearStart, dtYearEnd)
	BDate = dtWeekStart
	strBDate = Date2Str(BDate)
	EDate = dtWeekEnd
	nWeekInYear = kStartNWeek + DateDiff("ww", dtYearStart, BDate, 0, 0)

	nRelay = GetSafeLng(Request("Relay"), GetSafeLng(obTokenMgr.GetData(strToken,stSchoolSession), -1))

	Call specialReadState()
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stSchoolSession, nRelay)
	If bExit Then Exit Sub
	
	' TermID need to be saved if exists but TermName always - for Print!
	If Not IsDull(strTermID) Then Call obTokenMgr.SetData(strToken,stCurrTerm, strTermID)
	Call obTokenMgr.SetData(strToken, stCalendarTermName, strTermName)
	
	Call obTokenMgr.SetData(strToken, stCurrDate, BDate)
	Call obTokenMgr.SetData(strToken, stRightCalendarViewAll, bAll)
	Call specialWriteState()
End Sub

Sub DrawViewFilter()
	Dim arr

	arr = Array(_
		SCHED_DAY, obLanguage("Common","kSchedule") & obLanguage("Common","kOfSchool",strFunctionalityType) & obLanguage("Calendar","kForWD"), _
		SCHED_CLASS, obLanguage("Common","kSchedule") & obLanguage("Calendar","kForClassOrSubject", strFunctionalityType) _
	)

	If bAll Then
		ReDim Preserve arr(5)
		arr(4) = SCHED_TEACHER
		arr(5) = obLanguage("Common","kSchedule") & obLanguage("Common","kOfSchool",strFunctionalityType) & obLanguage("Calendar","kForTeachers",strFunctionalityType)
	End If

	Call DrawSimpleFilterRow(obLanguage("Common","kView"), "ViewType", arr, nViewID, False, "changeView()")
End Sub

Sub Main()
	Call specialMain()
End Sub

Sub specialMain()
End Sub
Sub specialReadState()
End Sub
Sub specialWriteState()
End Sub
Sub specialHead()
End Sub
Sub specialDraw()
End Sub

Sub onDrawPage()%>
	<FORM NAME="View" METHOD="post" ACTION="<%=strScriptName%>">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("SCLID", "", "BACK", ""))%><%
		
		Call DrawButtonsFiltersSingleRow("View")%>
	</FORM><%
	If bExit Then Exit Sub

	Call specialDraw()
End Sub

Sub CommonHeadFunctions()%>
	<script><!--
		function changeView() {
			var form = document.View;
			var val = getListValue(form.ViewType);
			var url = '/asp/Calendar/WeekViewTime.asp';

			if(val == '2') {
				url = "/asp/Calendar/WeekViewTeachers.asp";
			}
			else if(val == '1') {
				url = "/asp/Calendar/WeekViewClasses.asp";
			}
		
			$(document).trigger('showProcessing');
			DoSubmit(form, url);
		}
		//--></script><%
	Call specialHead()
End Sub%>