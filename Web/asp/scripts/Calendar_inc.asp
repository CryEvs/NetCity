<% ' © 2007-2015 IRTech. All rights reserved.

Dim nWeek, nVacations, nHoliDays
Dim arrHoliDays, arrVacations, posH, posV

Function GetFirstDayOfWeek
	GetFirstDayOfWeek = obLanguage.CurrentCulture.DateTimeFormat.FirstDayOfWeek + 1
End Function

Function InitDaysRs(objRs)
	If objRs.EOF Then InitDaysRs = null Else InitDaysRs = objRs.GetRows( , , Array("STARTTIME", "ENDTIME") )
	objRs.MoveFirst
	posH = 0 : posV = 0
	nVacations = 0 : nHoliDays = 0
End Function

Function InitDays( theType, theStart, theEnd )
	Dim objRs
	Set objRs = objNSNET.GetSchoolEventList(theType, strCurrYearID, theStart, theEnd)
	InitDays = InitDaysRs(objRs)
End Function

Function InitSgVacations( strSubjClassID, theStart, theEnd)
	Dim objRs
	Set objRs = objNSNET.GetSubjectGroupVacations(strCurrYearID, strSubjClassID, theStart, theEnd)
	InitSgVacations = InitDaysRs(objRs)
End Function

Function IsVacationIterate( theDate )
	IsVacationIterate = False
	If Not IsArray( arrVacations ) Then Exit Function
	If posV > Ubound( arrVacations, 2 ) Then Exit Function

	If DateDiff( "d", theDate, arrVacations( 0, posV ), 0, 0 ) > 0 Then
		'дата меньше даты начала текущих каникул
		Exit Function
	End If

	'иначе дата больше даты начала текущих каникул
	If DateDiff( "d", theDate, arrVacations( 1, posV ), 0, 0 ) < 0 Then 
		'если дата больше даты окончания текущих канукл
		'переход на следующие каникулы
		posV = posV + 1
		'проверка, на следующие каникулы для случая наличия пересечений
		IsVacationIterate = IsVacationIterate( theDate )
	Else
		nVacations = nVacations + 1 
		IsVacationIterate = True
	End If
End Function

Function IsHoliDayIterate( theDate )
	Dim nDiff
	IsHoliDayIterate = False
	If Not IsArray( arrHoliDays ) Then Exit Function
	If posH > Ubound( arrHoliDays, 2 ) Then Exit Function
	If DateDiff( "d", theDate, arrHoliDays( 0, posH ), 0, 0 ) <= 0 Then
		nDiff = DateDiff( "d", theDate, arrHoliDays( 1, posH ), 0, 0 )
		If nDiff <= 0 Then 
			posH=posH+1' move to the next Holiday
			If nDiff < 0 Then Exit Function
		End If
		nHoliDays = nHoliDays + 1 : IsHoliDayIterate = True: Exit Function
	End If
End Function

Function IsFreeDay( theDate )
	If IsHoliDayIterate( theDate ) Then IsFreeDay = True : Exit Function' IsHoliDayIterate must be called ( to calculate new posH )
	IsFreeDay = IsWeekEnd( theDate ) 
End Function

Function IsHoliDay( theDate )
	IsHoliDay = False
	If Not IsArray( arrHoliDays ) Then Exit Function
	For posH = 0 To Ubound( arrHoliDays, 2 )
		If DateDiff( "d", theDate, arrHoliDays( 0, posH ), 0, 0 ) <= 0 Then
			If DateDiff( "d", theDate, arrHoliDays( 1, posH ), 0, 0 ) >= 0 Then IsHoliDay = True: Exit Function
		End If
	Next
End Function

Function IsVacation( theDate )
	IsVacation = False
	If Not IsArray( arrVacations ) Then Exit Function
	For posV = 0 To Ubound( arrVacations, 2 )
		If DateDiff( "d", theDate, arrVacations( 0, posV ), 0, 0 ) <= 0 Then
			If DateDiff( "d", theDate, arrVacations( 1, posV ), 0, 0 ) >= 0 Then IsVacation = True: Exit Function
		End If
	Next
End Function

Function DayIsLearning(dtDay) ' = not is holiday or vacation now
	DayIsLearning = False
	If IsHoliDay(dtDay) Then Exit Function
	If IsVacation(dtDay) Then Exit Function
	DayIsLearning = True
End Function

Function WriteDateTimeInterval( nViewType, theStart, theEnd )
	Dim hasTime, strTimeStart, strTimeEnd, str
	str = Date2Str( theStart )
	WriteDateTimeInterval = str

	Select Case nViewType
	Case kVacation, kHoliday : hasTime = False
	Case Else
		hasTime = True
		strTimeStart = Time2Str( theStart )
		strTimeEnd = Time2Str( theEnd )
		If Hour(theStart) = 0 Then
			If Minute(theStart) = 0 Then hasTime =  CBool(strTimeStart<>strTimeEnd)
		End If
	End Select

	If hasTime Then str = str & " " & Time2Str( theStart ) 
	If DateDiff("d", theStart, theEnd, 0, 0 ) <> 0 Then
		str = str &  "&nbsp;--&nbsp;" & Date2Str( theEnd )
		If hasTime Then str = str & " " & Time2Str( theEnd )
	ElseIf hasTime Then 
		If Time2Str( theEnd )<>"&nbsp;" Then
			If strTimeStart<>strTimeEnd Then
				str = str & "&nbsp;--&nbsp;" 
				str = str & Time2Str( theEnd )
			End If
		End If
	End If
	WriteDateTimeInterval = str
End Function

Sub WriteTimeInterval( nViewType, theStart, theEnd )
	RW WriteDateTimeInterval( nViewType, theStart, theEnd )
End Sub

%>
