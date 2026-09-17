<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim nGlobalYearId
Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim rsRows
Dim nEMId

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNEnrolling")
End Function

Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kStartDate"), strStartDate, _
		obLanguage("Common","kEndDate"), strEndDate)
End Function

Sub specialRead()
	SetScriptTimeOut 2700
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
End Sub

Sub WriteState()
End Sub

Sub specialMain()
	on error resume next
	Dim strYearName
	nEMId = CLng(filterEMID)
	strYearName = objNSNET.GetGlobalYearName(nGlobalYearId)
	Call obTokenMgr.SetData(strToken, "CurrYearName", strYearName)
	Set rsRows = objNSNET.GetEnrollingReportForEM(nEMId, nGlobalYearId, dtStartDate, dtEndDate)
	TestError obLanguage("Reports","kCantGetReportData")
End Sub

Function GetTableHeader()
	Dim str37, hdr
	hdr = "<tr class=""text-nowrap"">"
	hdr = hdr & "<th rowspan='2'>" & obLanguage("Reports","kOrderNumberS")
	'ЕСЛИ ЕСТЬ ПОДЧИНЕННЫЕ УО, ТО ДОБАВЛЯЕМ КОЛОНКУ- "УПРАВЛЕНИЕ"
	hdr = hdr & GetManagementColumn(2)
	hdr = hdr & "<th rowspan='2'>" & obLanguage("Common","kCity")  & "</th>"
	hdr = hdr & "<th rowspan='2'>" & obLanguage("Reports","kDOU_2")  & "</th>"
	hdr = hdr & "<th colspan='2'>" & obLanguage("Reports","kEnrollSGO")  & "</th>"
	hdr = hdr & "<th colspan='2'>" & obLanguage("Reports","kEnrollFromES")  & "</th>"
	hdr = hdr & "</tr><tr>"
	str37 = "<th>" & obLanguage("Reports","k03") & "</th>" &  "<th>" & obLanguage("Reports","k37")  & "</th>"
	hdr = hdr & str37  & str37
	GetTableHeader = hdr & "</tr>" 
End Function

Function GetReportTable()
	Dim strReport, i, j, n
	strReport = "<table class=""table-print-num"">" & GetTableHeader()
	i=0
	Do While Not rsRows.EOF
		i=i+1
		strReport = strReport & "<tr class=""text-nowrap"">" &_
		"<td>" & i & "</td>"
		n=rsRows.Fields().Count-5
		For j = IIf (subEms,0,1) To n
			strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsRows(j)) & "</td>"
		Next
		If Not obContext.ServerSettings.SystemSettings.ModuleEServices Then
			For j = n+1 To n+2
				strReport = strReport & "<td>" & DB2HTML(rsRows(j)) & "</td>"
			Next
			strReport = strReport & "<th>-</th><th>-</th>"
		Else
			For j = n+1 To n+4
				strReport = strReport & "<td>" & DB2HTML(rsRows(j)) & "</td>"
			Next
		End If
		strReport = strReport & "</tr>" & vbCRLF
		rsRows.MoveNext
	Loop

	GetReportTable = strReport & "</table>"
End Function
%>
