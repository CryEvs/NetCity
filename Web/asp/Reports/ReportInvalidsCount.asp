<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterMonths.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	Call InitMonths( dtYearStart, dtYearEnd )
End Sub

Sub specialWrite()
	WriteMonth
End Sub

Sub CalcPrevMonth()
	dtPrevMonth = NSNow()
	dtPrevMonth = DateAdd("m", -1, dtPrevMonth) ' берём прошлый месяц
	dtPrevMonth = DateSerial(Year(dtPrevMonth), Month(dtPrevMonth), 1) ' сдвигаем на начало месяца (начало отчётного месяца)

	nSYID = objNSNET.GetYearForDate(dtPrevMonth, strSchoolID)
	bEmptyYear = (nSYID = -1)
End Sub

Sub Main()
End Sub

Sub specialHead()
%>
<script>
function gotoMonth()
{
	var element = $("[name='MonthYear']")[0];
	var date = eval("Array(" + element[element.selectedIndex].value + ")" );
	$("[name='Month']").val(date[0]);
	$("[name='Year']").val(date[1]);
}
</script><%
End Sub

Sub specialDraw()
End Sub

Sub specialFilters( strForm )
	DrawMonths strForm
End Sub
%>
