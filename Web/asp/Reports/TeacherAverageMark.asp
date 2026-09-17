<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="TeacherAverageMark_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Function GetReport()
	GetReport = GetPageTitleFor(obLanguage("ReportNames","kRNTeacherAverageMark",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), obLanguage("Filter","kMarkFor"), strTermName, obLanguage("Filter","kTeacherGB",strFunctionalityType), strTeacher, obLanguage("Common","kSubject"), strSubjectName))
	If Not objMarksRs.EOF Then
		GetReport = GetReport & GetReportTable()
	Else
		GetReport = GetReport & GetWarning(obLanguage("Reports","kNoTotalsForTeacher",strFunctionalityType))
	End If
	GetReport = GetReport & GetPageVer()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print chart-table chart-bars"" chart-axis-max=""" & nMaxMark & """>" & _
		"<tr class=""chart-labels-row"">"
End Function

Function GetTableHeader_old()
	GetTableHeader = "<table class=""ThinTable"" border=""1"" cellspacing=""0"">" & _
		"<tr class=""body"" style=""background-color: #eaeaea"" align=""center""><td>&nbsp;</td>"
End Function
%>
