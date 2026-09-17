<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ParentPay_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function onLoad()
	If bSendReport Then
		onLoad = "JavaScript:SendReport();"
	End If
End Function

Sub onHead()
	If bSendReport Then
		Call SendReportScript(obLanguage("ReportNames","kRNParentPay"))
	End If
End Sub

Sub ReadState()
	bSendReport = CBool(GetSafeStr(Request("RP"), 1, "") = "R")
	specialRead
End Sub

Sub Main()	
	Dim strReportData, i
	specialMain
	If bSendReport Then
		strReportData = ""
		For i = 0 To UBound(arrReport)
			strReportData = strReportData & arrReport(i)
		Next
		obTokenMgr.SetData strToken, stMsgReport, strReportData
	End If
End Sub

Sub onDrawPage()
	Dim i
	If bSendReport Then
		Response.Write "<H3 align=""center"">" & obLanguage("Reports","kReportToSend") & "</H3>"
	Else
		For i = 0 To UBound(arrReport)
			Response.Write arrReport(i)
		Next
	End if
End Sub

Function GetReport(ind)
	Dim strReport

	strReport = GetPageTitlePrint(obLanguage("ReportNames","kRNParentPay"), GetTitleArray())
	strReport = strReport & GetReportTable()
	arrReport(ind) = strReport & GetPageVerPrint() & IIf(bNoSeparate, "<br style='page-break-after: always'>", "")
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print"">" & _
		GetTableHeaderString()
End Function

Function GetTableHeaderString()
	GetTableHeaderString = "<tr>"
End Function
%>
