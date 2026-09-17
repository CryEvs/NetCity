<% ' © 2007-2016 IRTech. All rights reserved.

Sub SetMovementMinMaxDays(nGlobalYearID, dtYearStart, dtYearEnd)
	On Error Resume Next
	Call objNSNET.CalcGlobalYear_MovementRange(nGlobalYearID, dtYearStart, dtYearEnd)
	TestError obLanguage("Common","kUnexpErr")

	If Err.Number > 0 Then
		' сейчас пока нет архивных годов
		Err.Clear
		SetArchConnection
		Call objNSNET.CalcGlobalYear_MovementRange(nGlobalYearID, dtYearStart, dtYearEnd)
		SetWorkConnection
		TestError obLanguage("Common","kUnexpErr")
	End If
End Sub

Function IsOutOfDateRange(dtDate, dtMinDate, dtMaxDate)
	IsOutOfDateRange = DateDiff("d", dtDate, dtMinDate, 0, 0) > 0
	If IsOutOfDateRange Then Exit Function
	IsOutOfDateRange = DateDiff("d", dtDate, dtMaxDate, 0, 0) < 0
End Function

'''''''''''''''''''!!!!!!!!!!!!!!!!!!!!!!!!!!!
Function GetSafeGlobalYearID(objCommonYears)
	GetSafeGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	If GetSafeGlobalYearID <> 0 Then GetSafeGlobalYearID = GetSafeIDForParent(GetSafeGlobalYearID, objCommonYears, "GLOBALYEARID" )
	If GetSafeGlobalYearID = 0 Then GetSafeGlobalYearID = objCommonYears("GLOBALYEARID")
End Function

Sub ReadEMMovementInterval(objCommonYears)
	Dim dtConstMinDate

	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать учебные года подотчетных УО из фильтров, если их нет берет самое вышестоящее
	If IsEmpty(objCommonYears) Then Set objCommonYears = objNSNET.GetEMGlobalYearsList(strFilterEMID, -1, True)
	If Not objCommonYears.EOF Then
		nGlobalYearID = GetSafeGlobalYearID(objCommonYears)

		Call SetMovementMinMaxDays(nGlobalYearID, dtYearStart, dtYearEnd)
		'dtMinDate = dtYearStart
		dtConstMinDate = DateSerial(2000 + nGlobalYearID, kFutureYearEnrollDocDate_Month, kFutureYearEnrollDocDate_Day)
		dtMinDate = GetMinFromDates(dtYearStart, dtConstMinDate)

		dtMaxDate = dtYearEnd
		bIsCheckDates = True

		Call SetDefaultDateInterval(dtMinDate,dtMaxDate, dtStartDate,dtEndDate)
	Else
		bExit = True
	End If
End Sub

Sub SetDefault_EndDate()
	Dim dtToday
	Call objNSNET.GetRangeOfDateForEM(strFilterEMID, nGlobalYearId, dtYearStart, dtYearEnd)
	dtMinDate = dtYearStart
	dtMaxDate = dtYearEnd
	bIsCheckDates=True

	dtEndDate = GetSafe( "DDT" , Null)
	If Not IsDull(dtEndDate) Then
		dtEndDate = GetSafeDate(dtEndDate, Null)
		If IsOutOfDateRange(dtEndDate, dtMinDate, dtMaxDate) Then dtEndDate = Null
	End If
	If IsNull(dtEndDate) Then
		dtToday = NSDate()
		If IsOutOfDateRange(dtToday, dtMinDate, dtMaxDate) Then
			dtEndDate = dtMaxDate
		Else
			dtEndDate = dtToday
		End If
	End If
End Sub

Sub SetDefaultDates()
	Dim dtConstMinDate

	Call objNSNET.GetRangeOfDateForEM(strFilterEMID, nGlobalYearId, dtYearStart, dtYearEnd)
	'dtMinDate = dtYearStart
	dtConstMinDate = DateSerial(2000 + nGlobalYearID, kFutureYearEnrollDocDate_Month, kFutureYearEnrollDocDate_Day)
	dtMinDate = GetMinFromDates(dtYearStart, dtConstMinDate)

	dtMaxDate = dtYearEnd
	bIsCheckDates=True

	Call SetDefaultDateInterval(dtMinDate,dtMaxDate, dtStartDate,dtEndDate)
End Sub

Sub SetDefaultDateInterval(dtMinDate, dtMaxDate, ByRef dtStartDate, ByRef dtEndDate)
	Dim dtToday

	dtEndDate = Null
	dtStartDate = GetSafe( "ADT" , Null)
	If Not IsDull(dtStartDate) Then
		dtStartDate = GetSafeDate(dtStartDate, Null)
		If IsOutOfDateRange(dtStartDate, dtMinDate, dtMaxDate) Then
			dtStartDate = Null
		Else
			dtEndDate = GetSafeDate(GetSafe( "DDT" , Null), Null)
			If DateDiff("d", dtStartDate, dtEndDate, 0, 0) < 0 Then dtStartDate = Null
		End If
	End If
	If IsNull(dtStartDate) Then
		dtToday = NSDate()
		If IsOutOfDateRange(dtToday, dtMinDate, dtMaxDate) Then
			dtEndDate = dtMaxDate
			dtStartDate = DateAdd("m", -3, dtEndDate)
			dtStartDate = DateAdd("d", 1, dtStartDate)
		Else
			dtStartDate = DateSerial(Year(dtToday), Month(dtToday), 1)
			dtEndDate = DateAdd("m", 1, dtStartDate)
			dtEndDate = DateAdd("d", -1, dtEndDate)
		End If
	End If
End Sub
%>
