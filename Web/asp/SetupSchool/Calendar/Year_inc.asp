<!-- #INCLUDE FILE=../../scripts/Calendar_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nFirstDOW ' for correct work with different locales, should be inited by call GetFirstDayOfWeek()

Function GetFirstDayOfWeek() ' for current locale
	Dim dtCurr, nWDSystem, nWDCurr

	dtCurr = NSDate()
	nWDSystem = Weekday(dtCurr, GetFirstDayOfWeek)
	For nWDCurr = 1 To 7
		If WeekDay(dtCurr, nWDCurr) = nWDSystem Then
			GetFirstDayOfWeek = nWDCurr
			Exit Function
		End If
	Next 'Поиск первого дня недели
	Call GenerateError(obLanguage("Common","kUnexpErr"))
End Function

Sub DrawCommonYearInfo()
	Dim i, nDOW, nPower2

	OpenFormGroup obLanguage("SetupSchoolCalendar","kWeekendDays")%>
		<div class="row"><%
			nDOW = nFirstDOW - 1 ' possible values for nDOW: 0, 1, ... 6
			For i = 1 To 7
				nPower2 = 2^nDOW%>
				<div class="col-xs-1">
					<div><%=WeekDayName(i, True, 0)%></div>
					<input type="checkbox" name="WeekEndDays" value="<%=nPower2%>" <%If (nWeekEndSet And nPower2) <> 0 Then%> checked<%End If%> OnChange="dataChanged()">
				</div><%
				If nDOW < 6 Then nDOW = nDOW + 1 Else nDOW = 0
			Next%>
		</div><%
	CloseFormGroup
End Sub
%>
