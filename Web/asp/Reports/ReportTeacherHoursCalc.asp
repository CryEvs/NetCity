<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTeachers.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim dtStartDate, dtEndDate

Sub specialRead()
	Call InitTeachers(bAll, False)
	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
End Sub

Sub specialWrite()
End Sub

Sub Main()
End Sub

Sub specialHead()
	bIsCheckDates = True

	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
End Sub

Sub specialFilters( strForm )
	If Not bAll Then
		Call DrawTeachers(strForm, bAll, False)
	Else
		Call DrawTeachersNonSubmit()
	End If
	If bExit Then Exit Sub
	Call DrawDateRange()
End Sub

Sub DrawTeachersNonSubmit()
	If bTeachersIsEmpty Then
		DrawWarning obLanguage("Filter","kNoTeachersGB",strFunctionalityType)
		bExit = True
	Else
		DrawFilterRow "", obLanguage("Common","kTeacher",strFunctionalityType), "TID", objTeachersRs, "TEACHERID", "NICKNAME", strTeacherID, False
	End If
End Sub
%>
