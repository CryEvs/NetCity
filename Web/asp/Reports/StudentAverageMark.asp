<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentAverageMark_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Function GetReport()
	Dim strReport
	strReport = GetPageTitlePrintWithUserPhoto(obLanguage("ReportNames","kRNStudentAverageMark",strFunctionalityType), strStudentID, Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),objNSNET.GetClassName(strClassID),obLanguage("Reports","kMarksType"),GetMarksTypeText(strMarksType),obLanguage("Common","kPeriod"),strDateString,obLanguage("Common","kStudent",strFunctionalityType),objNSNET.GetUserNickName(strStudentID)))
	If bNoMarks Then
		strReport = strReport & GetWarningPrint(obLanguage("Reports","kNoStudentMarks"))
	Else
		strReport = strReport & GetReportTable()
	End If
	GetReport = strReport & GetPageVerPrint()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print chart-table chart-bars"" chart-axis-max=""" & nMaxMark & """>" &_
		"<tr class=""" & kGraphTableLabelsRow & """><th>&nbsp;</th>"
End Function
%>
