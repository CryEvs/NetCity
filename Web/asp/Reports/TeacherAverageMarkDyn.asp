<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="TeacherAverageMarkDyn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function GetReport()
	GetReport = GetPageTitlePrint(obLanguage("ReportNames","kRNTeacherAverageMarkDyn",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kTeacherGB",strFunctionalityType),strTeacher, obLanguage("Common","kSubject"), strSubjectName, _
	filterClasses, strClassName))
	If Not objMarksRs.EOF Then
		GetReport = GetReport & GetReportTable()
	Else
		GetReport = GetReport & GetWarningPrint(obLanguage("Reports","kNoTotalsForTeacher",strFunctionalityType))
	End If
	GetReport = GetReport & GetPageVerPrint()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print chart-table chart-lines"" chart-axis-max=""" & nMaxMark & """>" & _
		"<tr class=""chart-labels-row""><th>&nbsp;</th>"
End Function
%>
