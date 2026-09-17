<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentAverageMarkDyn_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Function GetReport()
	GetReport = GetPageTitlePrintWithUserPhoto(obLanguage("ReportNames","kRNStudentAverageMarkDyn",strFunctionalityType), strStudentID, Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),objNSNET.GetClassName(strClassID),obLanguage("Reports","kMarksType"),GetMarksTypeText(strMarksType),obLanguage("Common","kPeriod"),strDateString,obLanguage("Common","kStudent",strFunctionalityType),objNSNET.GetUserNickName(strStudentID)))
	If bNoMarks Then
		GetReport = GetReport & GetWarningPrint(obLanguage("Reports","kNoStudentMarks"))
	Else
		GetReport = GetReport & GetReportTable()
	End If
	GetReport = GetReport & GetPageVerPrint()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num chart-table chart-lines"" chart-axis-max=""" & nMaxMark & """>" & _
		"<tr class=""" & kGraphTableLabelsRow & """><th>&nbsp;</th>"
End Function

Function GetStudentTitle
	GetStudentTitle = "</tr><tr class=""text-nowrap"" style=""background-color: #eaeaea""><th class=""cell-text"" nowrap>" & obLanguage("Reports","kStudentSubTotalsDataCount",strFunctionalityType) & "</th>"
End Function

Function GetClassTitle
	GetClassTitle = "</tr><tr class=""text-nowrap"" style=""background-color: #eaeaea""><th class=""cell-text"" nowrap>" & obLanguage("Reports","kClassSubTotalsDataCount",strFunctionalityType) & "</td>"
End Function
%>
