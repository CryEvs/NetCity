<% ' © 2007-2008 IRTech. All rights reserved.

Dim nWeek, nVacations, nHoliDays
Dim arrHoliDays, arrVacations, posH, posV

Function InitDays( theType, theStart, theEnd )
	Dim objRs
	Set objRs = objNSNET.GetSchoolEventList(theType, strCurrYearID, theStart, theEnd)
	If objRs.Eof Then InitDays = null Else InitDays = objRs.GetRows( , , Array("STARTTIME", "ENDTIME") )
	Set objRs = Nothing
	posH = 0 : posV = 0
	nVacations = 0 : nHoliDays = 0
End Function

Function IsVacationIterate( theDate )
	IsVacationIterate = False
	If Not IsArray( arrVacations ) Then Exit Function
	If posV > Ubound( arrVacations, 2 ) Then Exit Function
	If DateDiff( "d", theDate, arrVacations( 0, posV ), 0, 0 ) <= 0 Then
		If DateDiff( "d", theDate, arrVacations( 1, posV ), 0, 0 ) <= 0 Then posV=posV+1' move to the next Vacation
		nVacations=nVacations+1 : IsVacationIterate = True: Exit Function
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
%>
