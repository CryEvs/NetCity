<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

'Тип школ,в которые помещают дошкольниов,студентов,работающих и т.д...(В Тольятти)
Const EOFORMID=33

Dim i, j
Dim rsStudentCount
Dim rsUDOD
Dim nGlobalYearId

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNEmploymentStudentsOUInTheAssociationsUDOD")
End Function
Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID) )
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	bOk = True
	strErrMsg = ""
End Sub

Sub specialMain()
	SetScriptTimeOut 900
	Set rsUDOD= objNSNET.GetEmploymentStudentsOUInTheAssociationsUDOD(nGlobalYearID, filterEMID)
	Set rsStudentCount = rsUDOD("CountSCH").Value
'	If rsStudentCount.EOF Then
	If rsUDOD.EOF Then
		bOK = False
		strErrMsg = "Нет ОДО в данном учебном году"
	End If
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num"">" & _
		"<tr>" & _
		"<th rowspan=""2"">" & obLanguage("EMReports","kMOUDOD") & "</th>" & _
		"<th colspan=" & (rsStudentCount.Fields().Count - 1) & ">" & obLanguage("EMReports","kCountStudents") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("EMReports","kTotal") & "</th></tr>" & _
		"<tr>" & GetTableColumn() & "</tr>"
End Function

Function GetTableColumn()
	Dim tableColumns
	For i = 1 To rsStudentCount.Fields().Count - 1
		tableColumns = tableColumns & "<th>" & rsStudentCount.Fields()(i).Name & "</th>"
	Next
	GetTableColumn = tableColumns
End Function

Function GetReportTable()
	Dim totalUDOD, totalArray
	ReDim totalArray(rsStudentCount.Fields().Count - 1)
	strReport = GetTableHeader()
	For i = 1 To rsUDOD.RecordCount
		If	Not rsStudentCount.EOF Then
			strReport = strReport & "<tr><td class=""cell-text"">" & rsUDOD("EONAME") & "</td>"
			totalUDOD = 0
			For j = 1 To rsStudentCount.Fields().Count - 1
				strReport = strReport & "<td>" & CDbl(rsStudentCount.Fields()(j)) & "</td>"
				totalUDOD = totalUDOD + CDbl(rsStudentCount.Fields()(j))
				totalArray(j-1) = totalArray(j-1) + CDbl(rsStudentCount.Fields()(j))
			Next
			strReport = strReport & "<td class=""totals"">" & totalUDOD & "</td></tr>"
			totalArray(j-1) = totalArray(j-1) + totalUDOD
		End If
		If Not rsUDOD.EOF Then rsUDOD.MoveNext
	Next
	strReport = strReport & "<tr class=""totals""><td><b>" & obLanguage("EMReports","kTotal_") & "</b></td>"
	For i = 0 To rsStudentCount.Fields().Count - 1
		strReport = strReport & "<td><b>" & totalArray(i) & "</b></td>"
	Next
	strReport = strReport & "</tr>"
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function
%>
