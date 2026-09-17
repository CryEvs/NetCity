<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterMonths.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim dtPrevMonth, nGYID, bEmptyYear

Sub specialRead()
	Dim objInfo
	bIsCheckDates = False
	'Подсовываем strFilterEMID из Report_inc.asp
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType(strFilterEMID, kFuncType_PreSchool)
	If Not objCommonYears.EOF Then
		bExit = False
		nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
		Call objNSNET.GetRangeOfDateForEM(strEMId, nGlobalYearId, dtYearStart, dtYearEnd)

		InitEM_PreSchools()
		Call InitMonths(dtYearStart, dtYearEnd)
	Else
		bExit = True
	End If
End Sub

Sub specialWrite()
	If Not bExit Then WriteMonth
End Sub

Sub specialHead()%>
<script>
	$(document).ready(function(){
		report.setOptions({reportUrl: "<%=GetSchoolReportUrl()%>" });
	});
	function gotoMonth() {
		var element = $("[name='MonthYear']")[0];
		var date = eval("Array(" + element[element.selectedIndex].value + ")" );
		$("[name='Month']").val(date[0]);
		$("[name='Year']").val(date[1]);
	}
</script><%
End Sub

Sub specialFilters( strForm )
	Call FilterGlobalYearWithMsg( obLanguage("EMReports",IIF(bNoEMSchools,"kNoDOUSchoolYearsInDB","kNoSchoolYearsInDB")) )
	If bExit Then Exit Sub
	DrawEM_PreSchools
	If bExit Then Exit Sub

	DrawMonths strForm
End Sub
%>
