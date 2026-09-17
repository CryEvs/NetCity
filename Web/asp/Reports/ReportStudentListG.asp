<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterEMs.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterGrades.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim dtStartDate, dtEndDate, dtToday
Dim nDGT, bPreSchool

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub InitDate()
	' Возможны даты от начала до конца уч. года.
	Call CalcCurrYearLimits(dtStartDate, dtEndDate)

	dtMinDate = dtStartDate
	dtMaxDate = dtEndDate
	bIsCheckDates = True
	Call InitSingleDate(dtMinDate, dtMaxDate, dtToday)
End Sub

Sub specialRead()
	bPreSchool = (Clng(strFunctionalityType) = kFuncType_PreSchool)

	Call InitGrades_2()
	If bEmptyGrades Then Exit Sub

	If bPreSchool Then
		nDGT = GetSafeLng(Request("DGT"), GetSafeLng(obTokenMgr.GetData(strToken, stDGT), -1))
		If nDGT < -1 Or nDGT > 1 Then
			nDGT = -1
		End If
	End If

	If strGradeID = -1 Then
		Call InitYearClassesAll()
	Else
		Call InitYearGradeClassesAll(strGradeID)
	End If
	Call InitDate()
End Sub

Sub specialWrite()
	If bEmptyGrades Then Exit Sub
	WriteGrade
	If bPreSchool Then
		Call obTokenMgr.SetData(strToken, stDGT, nDGT)
	End If
	WriteClass
	Call obTokenMgr.SetData(strToken, stEndDate, dtToday)
End Sub

Sub specialHead()
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
End Sub

Sub specialFilters( strForm )
	Call DrawFilterGradesAndAll(strForm)
	If bExit Then Exit Sub

	If bPreSchool Then
		Call DrawDOUGroupTypesFilter()
	End If

	DrawYearClasses "", True, obLanguage("Filter","kNoYearClasses",strFunctionalityType)
	Call DrawDateRangeItem("DDT", dtToday, "kDate")
End Sub
%>
