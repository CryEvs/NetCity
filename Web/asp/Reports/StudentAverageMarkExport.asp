<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentAverageMark_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Function GetReport()
	Dim strReport
	strReport = GetPageTitleExcel(obLanguage("ReportNames","kRNStudentAverageMark",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),objNSNET.GetClassName(strClassID),obLanguage("Reports","kMarksType"),GetMarksTypeText(strMarksType),obLanguage("Common","kPeriod"),strDateString,obLanguage("Common","Ученик",strFunctionalityType),objNSNET.GetUserNickName(strStudentID)))
	If bNoMarks Then
		strReport = strReport & GetWarningExcel(obLanguage("Reports","kNoStudentMarks"))
	Else
		strReport = strReport & GetReportTable()
	End If
	GetReport = strReport & GetPageVerExcel()
End Function

Function GetTableHeader()
	GetTableHeader = "<table border=""1""><tr align=""center"" class=""xtcb""><td>&nbsp;</td>"
End Function
%>
