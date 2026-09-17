<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/TeacherAverageMark_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Function GetReport()
	GetReport = GetPageTitleExcel(obLanguage("ReportNames","kRNTeacherAverageMark",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), obLanguage("Filter","kMarkFor"), strTermName, obLanguage("Filter","kTeacherGB",strFunctionalityType), strTeacher, obLanguage("Common","kSubject"), strSubjectName))
	If Not objTeacherMarksRs.EOF Then
		GetReport = GetReport & GetReportTable()
	Else
		GetReport = GetReport & GetWarningExcel(obLanguage("Reports","kNoTotalsForTeacher",strFunctionalityType))
	End If
	GetReport = GetReport & GetPageVerExcel()
End Function

Function GetTableHeader()
	GetTableHeader = "<table border=""1"">" & _
		"<tr class=""xtcb"" align=""center""><td>&nbsp;</td>"
End Function
%>
