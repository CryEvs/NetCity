<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="AverageMarkForSubject_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Function GetReport()
	GetReport = GetPageTitleFor(obLanguage("ReportNames","kRNAverageMarkForSubj") & strTitleAddString, Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), obLanguage("Filter","kMarkFor"), strTermName, obLanguage("Common","kSubject"), strSubjectName))
	If Not objMarksRs.EOF Then
		GetReport = GetReport & GetReportTable()
	Else
		GetReport = GetReport & GetWarning(obLanguage("Reports","kNoTotalsForSubject"))
	End If
	GetReport = GetReport & GetPageVer()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print chart-table chart-bars"" chart-axis-max=""" & nMaxMark & """><tr class=""chart-labels-row"">"
End Function
%>
