<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="../../scripts/FilterMonths.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim rsStudents
Dim objPayNorms, bEmptyPayNorms
Dim strPayNorms
Dim bList

Sub specialRead()
	Dim objInfo
	shortReportName = "/asp/Reports/" & GetShortReportName() 'Поскольку файл лежит в другой директории то явно указываем путь
	bIsCheckDates = False
	bList = GetSafeBool(GetSafe("List", false), false)
	'Подсовываем strFilterEMID из Report_inc.asp
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType(strFilterEMID, kFuncType_PreSchool)
	If objCommonYears.EOF Then
		bExit = True
		Exit Sub
	End If

	bExit = False

	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
	Call objNSNET.GetRangeOfDateForEM(strFilterEMID, nGlobalYearId, dtYearStart, dtYearEnd)

	Call InitMonths(dtYearStart, dtYearEnd)
	'Подсовываем strFilterEMID из Report_inc.asp
	Set objPayNorms = objNSNET.GetPayNormsForMonth_EM(strFilterEMID, dtMonthStart)
	bEmptyPayNorms = objPayNorms.EOF
	If bEmptyPayNorms Then
		bExit = True
	Else
		strPayNorms = GetSafeStr(Request("NormID"), -1, obTokenMgr.GetData(strToken, stFilterPayNorms))
		If Not IsDull(strPayNorms) Then
			strPayNorms = ", " & strPayNorms & ","
		End If
	End If
End Sub

Sub specialWrite()
	If Not bExit Then
		WriteMonth
	End If
End Sub

Sub specialHead()
	scriptMonth "Reports", ""%>
<script>
<!--
$(document).ready(function(){
	report.setOptions({reportUrl: "<%=GetSchoolReportUrl()%>" });
});

var NormIdValid = function(){
	if ($("input:checkbox[name=NormID]:checked", $("form[name=Reports]")).length == 0) {
		alert(language.Generic.EMReports.kChoosePayNorms);
		return false;
	}
	else{
		return true;
	}
}

$(document).ready(function(){
	report.addPreAction(NormIdValid);
});

//-->
</script><%
End Sub

Sub WriteMoreHiddenTags()
	WriteHiddenTags Array("List", bList)
End Sub

Sub specialFilters( strForm )
	If Not bExit Or bEmptyPayNorms Then
		bExit = False
		FilterGlobalYear
		DrawMonths strForm
		DrawPayNorms
	Else
		DrawInfo obLanguage("EMReports","kNoSchoolYearsInDB"), False
	End if
End Sub

Sub DrawPayNorms()
	If bEmptyPayNorms Then
		DrawInfo obLanguage("EMReports","kNoPayNormsForMonth"), False
	Else
		OpenFormGroup obLanguage("EMReports","kPayNorms")
		Call PopulateCheck(objPayNorms, "NormID", "NORMID", "ABBREV", strPayNorms)
		CloseFormGroup
	End if
End Sub
%>
