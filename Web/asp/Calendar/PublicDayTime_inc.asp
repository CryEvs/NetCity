<!-- #INCLUDE FILE="dayView_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterClasses_IUP.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim BDate, strClassID, strTeacherID
Dim strTermName, bAll

Function GetPageTitle()
	GetPageTitle = obLanguage("Calendar","kTitleDayView", strFunctionalityType)
	If Not IsEmpty(BDate) Then GetPageTitle = GetPageTitle & WeekDayName(DatePart("w",BDate, 0, 0 ), False,0 ) & ", " & Date2Str(BDate)
End Function

Function GetArrPageTitle()
	Dim n
	ReDim arr(1)
	arr(0) = obLanguage("Common","kView")
	arr(1) = obLanguage("Calendar","kOnTime")
	n = 1
	If CLng(strCurrYearID)>0 Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kSchoolYear")
		arr(n) = obTokenMgr.GetData(strToken, "CurrYearName")
	End If
	If strTermName <> "" Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kPeriod")
		arr(n) = strTermName
	End If
	Redim Preserve arr(n+4)
	n = UBound(arr)
	arr(n-3) = obLanguage("Common","kTeacher",strFunctionalityType)
	If CLng(strTeacherID) > 0 Then arr(n-2) = objNSNET.GetUserNickName(strTeacherID) Else arr(n-2) = obLanguage("Common","kAll")
	arr(n-1) = filterClasses

	If Not IsDull(strClassID_IUP) And strClassID_IUP <> "-1" Then
		Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)
		If bIsIupGrade Then 
			arr(n) = strIupGrade & " *"
		Else
			arr(n) = objNSNET.GetClassName(strClassId)
		End If
	Else 
		arr(n) = obLanguage("Common","kAll")
	End If
	
	GetArrPageTitle = arr
End Function

Sub ReadState()
	bAll = GetSafeBool(obTokenMgr.GetData(strToken, stRightCalendarViewAll), Null)
	BDate = obTokenMgr.GetData( strToken, stCurrDate)
	strTeacherID = obTokenMgr.GetData(strToken,stCurrTeacher)
	strClassID_IUP = GetSafeStr(obTokenMgr.GetData( strToken, stCurrClass_IUP), -1, "-1")
	strTermName = CStr(obTokenMgr.GetData( strToken, stCalendarTermName))
End Sub

Sub DrawPrintTable_DayTime()
	Dim strStartTime, strEndTime%>
	<table class="ThinTable" border="1" cellspacing="0" width="1%">
		<tr bgcolor="#E7E7E7"><th width="1%"><%=obLanguage("Calendar","kTimeofLesson")%></th><th><%=obLanguage("Calendar","kLessonsEvents", strFunctionalityType)%></th></tr><%
		Call DrawLessonsEvents()%>
	</table>
<%
End Sub

Sub DrawLessonEvent()
	Dim strHeader, str_Room_
    Dim strClassName

	str_Room_ = ""
    strClassName = ""
	Select Case CLng(objScheduleRs("EVENTTYPE"))
	Case 0		strHeader = obLanguage("Calendar","kLesson", strFunctionalityType)
		If Not IsDull(objScheduleRs("ROOM")) Then str_Room_ = " [" & DB2HTML(objScheduleRs("ROOM")) & "]"
        If strClassID = "-1" Then
            strClassName = ", " & DB2HTML(objScheduleRs("CLASSNAME"))
        End If
	Case kSchoolEvent		strHeader = obLanguage("Common","kSchoolEventHeader",strFunctionalityType)
		If Not IsDull(objScheduleRs("ROOM")) Then str_Room_ = " [" & DB2HTML(objScheduleRs("ROOM")) & "]"
	Case kClassEvent		strHeader = obLanguage("Common","kClassEventHeader",strFunctionalityType)
		If Not IsDull(objScheduleRs("ROOM")) Then str_Room_ = " [" & DB2HTML(objScheduleRs("ROOM")) & "]"
	Case kHoliday		strHeader = obLanguage("Common","kHolidayHeader")
	Case kVacation		strHeader = obLanguage("Common","kVacationHeader")
	Case Else		Response.Write strHeader = "?"
	End Select
	Response.Write "<td nowrap>" & strHeader & ": "& DB2HTML(objScheduleRs("NAME")) & str_Room_ & strClassName & "</td>"
End Sub
%>
