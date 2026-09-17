<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterMonths.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2010 IRTech. All rights reserved.
Dim rsStudents, rsDays, strTeacherID

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arReportsForAllClasses)
End Function

Sub specialRead()
	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	Call InitMonths( dtYearStart, dtYearEnd )
End Sub

Sub specialWrite()
	WriteMonth
End Sub

Sub Main()
End Sub

Sub specialHead()%>
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
