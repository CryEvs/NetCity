<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/Attendance_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strClassID, dtMonthStart, dtMonthEnd, lngCurrMonth, lngCurrYear, rsStudents, rsDays, dctAttendances
Dim strAccYear, strAccClass

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNAttendanceReport",strFunctionalityType)
End Function
Function GetTitleEx()
	GetTitleEx = " " & strAccClass
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kSchoolYear"), strAccYear, _
		obLanguage("Filter","kClassGB",strFunctionalityType), strAccClass, _
		obLanguage("Common","kMonth"),obLanguage.GetMonthName(lngCurrMonth))
End Function

Function GetReportTable()
	GetReportTable = GetAttendanceTable( False, True)
End Function

Sub specialRead()
	Dim dtCurrDate
	strClassID = GetSafeID(obTokenMgr.GetData(strToken,stCurrClass),"0")
	strAccClass = objNSNET.GetClassName(strClassID)
	strAccYear = obTokenMgr.GetData(strToken, "CurrYearName")
	dtCurrDate = obTokenMgr.GetData(strToken, stCurrDate)
	lngCurrMonth = Month(dtCurrDate)
	lngCurrYear = Year(dtCurrDate)
	dtMonthStart = DateSerial( lngCurrYear, lngCurrMonth, 1 )
	dtMonthEnd = DateAdd( "d", -1, DateAdd( "m", 1, dtMonthStart ) )
End Sub

Sub specialMain()
	Set rsStudents = objNSNET.GetClassStudentListForDateInterval(strClassID, dtMonthStart, dtMonthEnd)
	If rsStudents.EOF Then strErrMsg = obLanguage("Filter","kNoStudents",strFunctionalityType) :  Exit Sub
	Set rsDays = objNSNET.GetClassMeetingDayList(strClassID, dtMonthStart, dtMonthEnd)
	If rsDays.EOF Then strErrMsg = obLanguage("Reports","kNoClassMeetingsForMonth"):  Exit Sub
	Set dctAttendances = objNSNET.GetClassAttendances(strClassID, dtMonthStart, dtMonthEnd)
End Sub
%>
