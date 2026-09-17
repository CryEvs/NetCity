<!-- #INCLUDE FILE=../scripts/FilterStudents.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const SCHED_DAY = 0
Const SCHED_CLASS = 1

Dim nViewID
Dim strTable
Dim EDate

Dim strClass2ID, strClassIDStr, strRelayCond, nNumClasses, strMsg
Dim arrClassId, arrClassName

Dim strTermID, strTermName
Dim nWeekInYear

Function GetPageTitle()
	Dim strTitle

	strTitle = obLanguage("Calendar","kScheduleOn") & GreenText(nWeekInYear) & obLanguage("Calendar","kWeekFrom")&": " & GreenText(obLanguage("Calendar","kFrom")&" " & strBDate & " "&obLanguage("Calendar","kTo")&" " & Date2Str(EDate))
	If Not IsDull(strTermName) Then
		strTitle = strTitle & GreenText(" (" & DB2HTML(strTermName) & ")")
	End If

	GetPageTitle = strTitle
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCalendarViewSelf)
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClndrWeek
 End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Sub PreReadState()
End Sub

Sub ReadState()
	Call PreReadState()
	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
	Call InitWeek(dtYearStart, dtYearEnd)

	If IsDull( Request("Relay") ) Then
		nRelay = GetSafeLng(obTokenMgr.GetData(strToken,stSchoolSession), -1)
	Else
		nRelay = GetSafeLng(Request("Relay"), -1)
	End If

	BDate = dtWeekStart
	strBDate = Date2Str( BDate )
	EDate = dtWeekEnd
	nWeekInYear = kStartNWeek + DateDiff("ww", dtYearStart, BDate, 0, 0)

	Call InitStudents()
	If bStudentsIsEmpty Then Exit Sub

	Call InitYearStudentClasses_IUP(strStudentID, False)
	If strClassID_IUP = "0" Then Exit Sub

	Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, BDate, strTermID, strTermName)
	If strTermID = "" Then Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, EDate, strTermID, strTermName)

	Call specialReadState()
End Sub

Sub WriteState()
	If Not IsDull(strTermID) Then Call obTokenMgr.SetData(strToken,stCurrTerm, strTermID)
	Call obTokenMgr.SetData(strToken, stCalendarTermName, strTermName)
	Call WriteClass_IUP()
	Call obTokenMgr.SetData(strToken, stCurrStudent, strStudentID)
	Call obTokenMgr.SetData(strToken, stCurrDate, BDate)
	Call obTokenMgr.SetData(strToken, stSchoolSession, nRelay)
	Call specialWriteState()
End Sub

Sub DrawViewFilter()
	Dim arr
	arr = Array(_
		SCHED_DAY, obLanguage("Common","kSchedule") & obLanguage("Common","kOfSchool",strFunctionalityType) & obLanguage("Calendar","kForWD"), _
		SCHED_CLASS, obLanguage("Common","kSchedule") & obLanguage("Calendar","kForClassOrSubject", strFunctionalityType) _
	)

	Call DrawSimpleFilterRow(obLanguage("Common","kView"), "ViewType", arr, nViewID, False, "changeView()")
End Sub

Sub Main()
	Call specialMain()
End sub

Sub specialMain()
End Sub

Sub specialReadState()
End Sub

Sub specialWriteState()
End Sub

Sub specialHead()
End Sub

Sub onDrawPage()%>
	<FORM NAME="View" METHOD="post" ACTION="<%=strScriptName%>">
		<%=WriteObligatoryTags()%>

		<%Call DrawButtonsFiltersSingleRow("View")%>
	</FORM><%

	Call specialDraw()
End Sub

Sub CommonHeadFunctions()
	Call specialHead()
End Sub%>