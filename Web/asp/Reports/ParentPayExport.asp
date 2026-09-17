<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ParentPay_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub ReadState()
	specialRead
End Sub

Sub Main()	
	specialMain
End Sub

Sub onDrawPage()
	Dim i
	For i = 0 To UBound(arrReport)
		Response.Write arrReport(i)
	Next
End Sub

Function GetReport(ind)
	Dim strReport
	
	strReport = GetPageTitleExcel(obLanguage("ReportNames","kRNParentPay"), GetTitleArray())
	strReport = strReport & GetReportTable()
	arrReport(ind) = strReport & GetPageVerExcel() & IIf(bNoSeparate, "<br>", "")
End Function

Function GetTableHeader()
	GetTableHeader = "<table border=""1"">" & _
		GetTableHeaderString()
End Function

Function GetTableHeaderString()
	GetTableHeaderString = "<tr align=""center"" class=""xtcb"">"
End Function
%>
