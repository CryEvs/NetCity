<% ' © 2007-2008 IRTech. All rights reserved.

Const kInvalidWeekDayInYear = "Существующий номер недели не является корректным"

Dim dtWeekStart, dtWeekEnd

Function FirstWeekDay(dtDay)
	FirstWeekDay = DateAdd("d", 1 - CInt( WeekDay(dtDay, 0) ), dtDay)
End Function

Function LastWeekDay(dtDay)
	LastWeekDay = DateAdd("d", 7 - CInt( WeekDay(dtDay, 0) ), dtDay)
End Function

Sub InitWeek(dtStart, dtEnd)
	If IsDull(Request("DATE")) Then
		If IsDull(obTokenMgr.GetData(strToken, stCurrDate)) Then dtWeekStart = NSDate() Else dtWeekStart = obTokenMgr.GetData(strToken, stCurrDate)
	Else
		dtWeekStart = Str2Date( Request("DATE") )
	End If

	If DateDiff("d", dtStart, dtWeekStart, 0, 0) < 0 Then
		dtWeekStart = dtStart
	ElseIf DateDiff("d", dtWeekStart, dtEnd, 0, 0) < 0 Then
		dtWeekStart = dtEnd
	End If

	If WeekDay(dtWeekStart, 0) <> 1 Then dtWeekStart = FirstWeekDay(dtWeekStart)
	dtWeekEnd = DateAdd("d", 6, dtWeekStart)
End Sub

Function IsValidWeekDayForRange(dtStart, dtEnd)
	Dim dtRangeStart, dtRangeEnd

	IsValidWeekDayForRange = False

	dtRangeStart = FirstWeekDay(dtStart)
	If DateDiff("d", dtRangeStart, dtWeekStart, 0, 0) < 0 Then Exit Function

	dtRangeEnd = FirstWeekDay(dtEnd)
	If DateDiff("d", dtWeekStart, dtRangeEnd, 0, 0) < 0 Then Exit Function

	IsValidWeekDayForRange = True
End Function

Function FormWeekList(dtStart, dtEnd, nWeekStart, ByRef bSelected, ByRef dtCurrDate)
	Dim dt, nWeek
	Dim arrWeeks(), i
	
	nWeek = nWeekStart
	dt = FirstWeekDay(dtStart)

	i = 0
	Do
		ReDim Preserve arrWeeks(1, i)

		arrWeeks(0, i) = Date2Str(dt)
		arrWeeks(1, i) = "(" & Date2Str(dt) & " - " & Date2Str(DateAdd("d", 6, dt)) & ") :" & nWeek

		If DateDiff("d", dt, dtWeekStart, 0, 0) = 0 Then bSelected = True : dtCurrDate = Date2Str(dt)

		nWeek = nWeek + 1
		dt = DateAdd("d", 7, dt)

		i = i + 1
	Loop Until DateDiff("d", dt, dtEnd, 0, 0) < 0

	FormWeekList = arrWeeks
End Function 

Sub DrawWeekWithArrows(theStrForm, dtStart, dtEnd, nWeekStart, strPrevHint, strNextHint)
	Dim dt, nWeek, strChange, bSelected, dtCurrDate
	Dim arrWeeks, i
	
	strChange = IIF(theStrForm = "", "dataChanged();", "OnChangeSelect('" & theStrForm & "','" & strScriptName & "');")
	arrWeeks = FormWeekList(dtStart, dtEnd, nWeekStart, bSelected, dtCurrDate)

	Call DrawFilterRowBtn(obLanguage("Common","kWeek"), dtCurrDate, "DATE", arrWeeks, Null, strChange, strPrevHint, strNextHint, IIF(Not bSelected, kInvalidWeekDayInYear, ""))
End Sub

Sub DrawWeek(theStrForm, dtStart, dtEnd, nWeekStart)
	Dim strChange, bSelected, dtCurrDate
	Dim arrWeeks

	strChange = IIF(theStrForm = "", "dataChanged();", "OnChangeSelect('" & theStrForm & "','" & strScriptName & "');")
	arrWeeks = FormWeekList(dtStart, dtEnd, nWeekStart, bSelected, dtCurrDate)
	Call DrawFilterRow(theStrForm, obLanguage("Common","kWeek"), "DATE", arrWeeks, Null, "", dtCurrDate, False)
End Sub
%>