<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentAttendanceGrades_inc.asp" -->
<% 
Function GetReport()
	Dim strReport
	strReport = GetPageTitlePrintWithUserPhoto(obLanguage("ReportNames","kRNQualityReport"), strStudentID, Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Common","kPeriod"),strDateString,obLanguage("Filter","kTeacherGB",strFunctionalityType), strTeacherName,filterClasses, strClassName,obLanguage("Common","kSubject"),strSubjectName,obLanguage("Common","kStudent",strFunctionalityType),objNSNET.GetUserNickName(strStudentID)))
	If bNoMarks Then
		strReport = strReport & GetWarningPrint(obLanguage("Reports","kNoStudentMarks"))
	Else
		strReport = strReport & GetReportTable()
	End If
	GetReport = strReport & GetPageVerPrint()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num chart-table chart-bars"" chart-axis-max=""100"">" &_
		GetHeaderRow() &_
		"<tr class=""chart-labels-row""><th>&nbsp;</th>"
End Function
%>
