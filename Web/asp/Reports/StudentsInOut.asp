<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->
<!-- #INCLUDE FILE="StudentsInOut_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Function onLoad()
	If bSendReport Then
		onLoad = "JavaScript:SendReport();"
	End If
End Function

Sub onHead()
	If bSendReport Then
		Call SendReportScript( DB2HTML_BR(strStudentName) & ". " & obLanguage("ReportNames","kRNTimeOfEntryAndExit"))
	End If
End Sub

Sub ReadState()
	bSendReport = CBool(GetSafeStr(Request("RP"), 1, "") = "R")
	specialRead
End Sub

Sub Main()	
	specialMain
	If bSendReport Then obTokenMgr.SetData strToken, stMsgReport, strReport
End Sub

Sub onDrawPage()
	If bSendReport Then
		Response.Write "<H3 align=""center"">" & obLanguage("Reports","kReportToSend") & "</H3>"
	Else
		Response.Write strReport
	End if
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
	GetReport = strReport & GetPageVerPrint()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print"">" & _
		"<tr>"
End Function

Function GetTableHeaderString()
	GetTableHeaderString = "<tr>"
End Function
%>
