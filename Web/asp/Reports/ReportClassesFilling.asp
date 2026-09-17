<!-- #INCLUDE File="ReportOnDate_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Sub InitDate()
	Dim bPreSchool
	bPreSchool = CLng(strFunctionalityType) = kFuncType_PreSchool
	' Возможны даты от начала до конца уч. года.
	Call CalcCurrYearLimits(dtStartDate, dtEndDate)
	
	If bPreSchool Then
		'разрешаем в ДОО смотреть отчет за летние даты
		dtStartDate = DateAdd("m", -3, dtStartDate)
	End If

	dtMinDate = dtStartDate
	dtMaxDate = dtEndDate
	bIsCheckDates = True
	Call InitSingleDate(dtMinDate, dtMaxDate, dtToday)
End Sub
%>
