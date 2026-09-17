<!-- #INCLUDE FILE="../headerexcel.asp" -->
<!-- #INCLUDE FILE="StudentsInOut_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strReport

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
	Dim bIsStaff
	bIsStaff = CBool(Request("ISTF") = "1")
	strReport = GetPageTitlePrint(obLanguage("ReportNames", "kRNTimeOfEntryAndExit"), _
					Array(obLanguage("Reports", "kLastNameFirstName") & " " & obLanguage("Reports", "kOfStudent", strFunctionalityType), _
					strStudentName, _
					obLanguage("Filter", "kClassGB", strFunctionalityType), _
					strClassName, _
					obLanguage("Common","kSchoolYear"), _
					obTokenMgr.GetData(strToken, "CurrYearName"), _
					obLanguage("Common","kStartDate"), _
					strStartDate, _
					obLanguage("Common","kEndDate"), _
					strEndDate))
	strReport = strReport & GetReportTable()
	GetReport = strReport & GetPageVerExcel()
End Function

Function GetTableHeader()
	GetTableHeader = "<table border=""1"">" & _
		"<tr align=""center"" class=""xtcb"">"
End Function

Function GetTableHeaderString()
	GetTableHeaderString = "<tr align=""center"" class=""xtcb"">"
End Function
%>
