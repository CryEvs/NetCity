<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterMonths.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/Attendance_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim rsStudents, rsDays, strTeacherID

Sub specialRead()
	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	Call InitMonths( dtYearStart, dtYearEnd )
	If bAll Then
		Call InitYearClasses()
	Else
		strTeacherID = strUserID
		Call InitTeacherClasses(False)
	End If
End Sub

Sub specialWrite()
	WriteMonth
	WriteClass
End Sub

Sub Main()
	Set rsStudents = objNSNET.GetClassStudentListForDateInterval(strClassID, dtMonthStart, dtMonthEnd)
	If rsStudents.EOF Then Exit Sub
	Set rsDays = objNSNET.GetClassMeetingDayList(strClassID, dtMonthStart, dtMonthEnd)
	If rsDays.EOF Then Exit Sub
End Sub

Sub specialHead()
	scriptMonth "Reports", ""
End Sub

Sub specialDraw()
	If bExit Then Exit Sub
	If rsStudents.EOF Then 
		DrawInfo obLanguage("Filter","kNoStudents",strFunctionalityType), False
		Exit Sub
	End If
	If rsDays.EOF Then 
		DrawInfo obLanguage("Reports","kNoClassMeetingsForMonth"), False
		Exit Sub
	End If
End Sub

Sub specialFilters( strForm )
	DrawMonths strForm
	DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))
End Sub
%>
