<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="AverageMarkForSubjectDyn_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetReport()
	GetReport = GetPageTitleFor(obLanguage("ReportNames","kRNAverageMarkForSubjDyn"), Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kCourseGB"),strSubjectName, _
	filterClasses, strClassName))

	If Not objMarksRs.EOF Then
		GetReport = GetReport & GetReportTable()
	Else
		GetReport = GetReport & GetWarning(obLanguage("Reports","kNoTotalsForSubject"))
	End If
	GetReport = GetReport & GetPageVer()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print chart-table chart-lines"" chart-axis-max=""" & nMaxMark & """>" & _
		"<tr class=""chart-labels-row""><th>&nbsp;</th>"
End Function
%>
