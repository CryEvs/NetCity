<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/AverageMarkForSubjectDyn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function GetReport()
	GetReport = GetPageTitleExcel(obLanguage("ReportNames","kRNAverageMarkForSubjDyn"), Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kCourseGB"),strSubjectName, _
	filterClasses, strClassName))

	If Not objMarksRs.EOF Then
		GetReport = GetReport & GetReportTable()
	Else
		GetReport = GetReport & GetWarningExcel(obLanguage("Reports","kNoTotalsForSubject"))
	End If
	GetReport = GetReport & GetPageVerExcel()
End Function

Function GetTableHeader()
	GetTableHeader = "<table border=""1"">" & _
		"<tr class=""xtcb"" align=""center""><td>&nbsp;</td>"
End Function
%>
