<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentListOnAssertion_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Sub ReadState()
	specialRead
End Sub

Sub Main()
	specialMain
End Sub

Sub onDrawPage()
	Response.Write strReport
End Sub

Function GetReport()
	Dim strReport
	strReport = GetPageTitleExcel(obLanguage("ReportNames","kRNStudentListOnAssertion"), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName")))
	If Not bOK Then
		strReport = strReport & GetwarningPrint(strErrMsg)
	Else
		strReport = strReport & GetReportTable()
	End If
	strReport = strReport & GetPageVerExcel
	GetReport=strReport
End Function
%>
