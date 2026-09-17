<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim dtStartDate, dtEndDate
'Dim strStudentNamesShow, strViewType

Sub SpecialRead()
	' strStudentNamesShow = GetSafeStr(obTokenMgr.GetData(strToken, stStudentNamesShow), -1, "0")
	' strViewType = GetSafeStr(obTokenMgr.GetData(strToken, stRepMovingViewType), -1, "0")
End Sub

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialWrite()
End Sub

Sub SpecialHead()
	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
	bIsCheckDates=True

	Call scriptCalendar( "Reports", dtStartDate, dtEndDate )
End Sub

Sub SpecialFilters( strForm )
	Call DrawDateRange()
	Call drawSimpleFilter( "Reports", "kStudentNames", Null, Array("kStudentNamesShow","kStudentNamesNotShow") )
	Call drawSimpleFilterWithFuncType( "Reports", "kTypeReport", Null, Array("kByClasses","kByGrades") )
End Sub

Sub DrawReportComment( )
	DrawInfo obLanguage("Reports","kReportStudentsMoving_Comment"), False
End Sub

' Вызывается из InitDateRange (FilterYears.asp), только как граничные используются - начало года (обычное!) и конец года по движению (!)
' Теперь можно задавать дату приказа о зачислении летом в начале года - до конца последнего периода из предыдущего уч. года.
' Для простоты этот конец последнего периода определяем через данные в текущем уч. году - как в MoveBookEdit.asp.
' #16545 Теперь дату приказа о зачислении можно указывать с 1 февраля.
Sub ChangeMinMaxDates(byref dtMinDate, byref dtMaxDate)
	Dim dtMoveYearStart, dtMoveYearEnd
	Dim dtConstMinDate, objSYInfo

	Set objSYInfo = objNSNET.GetYearInfo(strCurrYearID)
	If objSYInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	dtConstMinDate = DateSerial(Year(objSYInfo("STARTDATE")), kFutureYearEnrollDocDate_Month, kFutureYearEnrollDocDate_Day)
	If DateDiff("d", dtConstMinDate, dtMinDate, 0, 0) > 0 Then
		dtMinDate = dtConstMinDate
		Call obTokenMgr.SetData(strToken, stPrevTermsEnd, dtConstMinDate)
	End If

	Call CalcMoveCurrYearLimits(dtMoveYearStart, dtMoveYearEnd, False)
	dtMaxDate = dtMoveYearEnd
End Sub
%>
