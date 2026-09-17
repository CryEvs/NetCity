<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub specialRead()
	'Для того чтобы отрисовывать УЧЕБНЫЕ ГОДА подотчетных УО из фильтров, если их нет берет самое вышестоящее
	InitEM_NotArchivedGlobalYears
	If objCommonYears.EOF Then Exit Sub
	Call ReadEMMovementInterval(objCommonYears)
'	SetDefaultDates
'	dtMinDate =  DateSerial(Year(dtYearStart), kFutureYearAllow_Month, kFutureYearAllow_Day)
End Sub

Sub SpecialFilters( strForm )
	Call FilterYearAndDates()
End Sub
%>
