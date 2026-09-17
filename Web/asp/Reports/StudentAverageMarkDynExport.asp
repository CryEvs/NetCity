<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentAverageMarkDyn_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Function GetReport()
	GetReport = GetPageTitleExcel(obLanguage("ReportNames","kRNStudentAverageMarkDyn",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),objNSNET.GetClassName(strClassID),obLanguage("Reports","kMarksType"),GetMarksTypeText(strMarksType),obLanguage("Common","kPeriod"),strDateString,obLanguage("Common","Ученик",strFunctionalityType),objNSNET.GetUserNickName(strStudentID)))
	If bNoMarks Then
		GetReport = GetReport & GetWarningExcel(obLanguage("Reports","kNoStudentMarks"))
	Else
		GetReport = GetReport & GetReportTable()
	End If
	GetReport = GetReport & GetPageVerExcel()
End Function

Function GetTableHeader()
	GetTableHeader = "<table border=""1"">" & _
		"<tr class=""xtcb"" align=""center""><td>&nbsp;</td>"
End Function

Function GetStudentTitle
	GetStudentTitle = "</tr><tr class=""xtcb"" align=""center""><td align=""left"" nowrap>" & obLanguage("Reports","kStudentSubTotalsDataCount",strFunctionalityType) & "</td>"
End Function

Function GetClassTitle
	GetClassTitle = "</tr><tr class=""xtcb"" align=""center""><td align=""left"" nowrap>" & obLanguage("Reports","kClassSubTotalsDataCount",strFunctionalityType) & "</td>"
End Function
%>
