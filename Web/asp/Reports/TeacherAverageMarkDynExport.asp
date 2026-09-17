<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/TeacherAverageMarkDyn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function GetReport()
	GetReport = GetPageTitleExcel(obLanguage("ReportNames","kRNTeacherAverageMarkDyn",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kTeacherGB",strFunctionalityType),strTeacher, obLanguage("Common","kSubject"), strSubjectName, _
	filterClasses, strClassName))
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
