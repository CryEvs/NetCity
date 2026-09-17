<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="StudentListOnAssertion_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function onLoad()
End Function

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

	strReport = GetPageTitlePrint(obLanguage("ReportNames","kRNStudentListOnAssertion"), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName")))
	If Not bOK Then
		strReport = strReport & GetwarningPrint(strErrMsg)
	Else
		strReport = strReport & GetReportTable()
	End If
	GetReport = strReport & GetPageVerPrint()
End Function
%>
