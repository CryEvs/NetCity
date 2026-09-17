<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Const kDispl = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

Dim dtStartDate, dtEndDate
Dim strViewType

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialRead()
	Dim dtTmp1, dtTmp2
	Dim dtToday, bCurrMonth

	' Возможны даты от начала учебного года до конца уч. года по движению.
	'Call CalcCurrYearLimits(dtYearStart, dtTmp1)
	'Call CalcMoveCurrYearLimits(dtTmp2, dtYearEnd, False)

	' 2011_11_16. Теперь дата начала - с 1 апреля (год = году начала учебного года), дата окончания - до окончания учебного года.
	Call CalcCurrYearLimits(dtTmp1, dtYearEnd)
	' dtYearStart = DateSerial(Year(dtTmp1), kFutureYearAllow_Month, kFutureYearAllow_Day)
	' #16545. Теперь документам можно указывать дату с 1 февраля
	dtYearStart = DateSerial(Year(dtTmp1), kFutureYearEnrollDocDate_Month, kFutureYearEnrollDocDate_Day)

	bCurrMonth = True
	If Not IsDull(obTokenMgr.GetData(strToken, stRepDoubling_Start)) Then
		dtStartDate = GetSafeDate(obTokenMgr.GetData(strToken, stRepDoubling_Start), Null)
		dtEndDate = GetSafeDate(obTokenMgr.GetData(strToken, stRepDoubling_End), Null)
		If DateDiff("d", dtStartDate, dtEndDate, 0, 0) >= 0 Then
			bCurrMonth = False
		End If
	End If
	If bCurrMonth Then
		dtToday = NSNow()
		dtStartDate = DateSerial(Year(dtToday), Month(dtToday), 1)
		dtEndDate = DateAdd("m", 1, dtStartDate)
		dtEndDate = DateAdd("d", -1, dtEndDate)
	End If

	If DateDiff("d", dtStartDate, dtYearStart, 0, 0) > 0 Or DateDiff("d", dtEndDate, dtYearEnd, 0, 0) < 0 Then
		dtStartDate = dtYearStart
		dtEndDate = dtYearEnd
	End If
	dtMinDate = dtYearStart
	dtMaxDate = dtYearEnd
End Sub

Sub SpecialWrite()
End Sub

Sub SpecialHead()
	bIsCheckDates=True

	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
End Sub


Sub SpecialFilters( strForm )
	Call DrawDateRange()
	If bExit Then Exit Sub

	If Not PERSON_DATA Then Exit Sub
	OpenFormGroup ""
	Dim i

	%><ul class="list-unstyled"><%
	For i=1 To 4
		 %><li><%
		rw obLanguage("EMReports","kAppend_" & i)
		SimpleButton "report.generate({reportUrl: 'MovementAppend.asp', data: {Append: " & i & "}})", "Сформировать"
		 %></li><%
	Next
	%></ul><%
	CloseFormGroup
End Sub

%>
