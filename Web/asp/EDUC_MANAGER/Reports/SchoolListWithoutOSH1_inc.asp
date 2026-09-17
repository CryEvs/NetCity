
<% ' © 2007-2012 IRTech. All rights reserved.
Dim nGlobalYearID, objCountSchools
Dim filterEMID, nSubEMID
Dim nStatFormId

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function

Sub SpecialRead()
	nGlobalYearID = GetSafeLng(Request("CMNYEAR"), Null)
	nStatFormId = GetSafeLng(Request("STATFORM"), Null)
	nSubEMID = GetSafeLng(Request("SUBEMID"), -1)
	filterEMID = GetSafeLng(Request("FilterEMID"),Null)'Локальный EmId из фильтра
	Set objCountSchools = objNSNET.GetSchoolsNoClosedOSH1(nGlobalYearID, filterEmID, nSubEMID, nStatFormId)
End Sub

Sub ReadState()
	specialread
End Sub

Sub onDrawPage()
	Response.Write GetReport()
End Sub

Function GetReport()
	Dim strReport
	strReport = GetPageTitleFor(obLanguage("EMReportNames","kRNCountSchoolsNoCloseOSH1"),_
		Array(obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID),obLanguage("Common","kSchoolYear"), objNSNET.GetGlobalYearName(nGlobalYearID)))
	If objCountSchools.EOF Then 
		GetReport = strReport & obLanguage("EMReports", "kAllFGSNСlosed")
	Else
		strReport = strReport & GetReportTable()
		GetReport = strReport & GetPageVer()
	End If
End Function

Function GetTableHeader()
	GetTableHeader = "<tr style=""background-color: #eaeaea"" align=""center"">" & _
			"<th>№</th>" &_
			"<th>" & obLanguage("Common", "kTerritorialManagement") & "</th>" & _
			"<th>" & obLanguage("Common", "kProvince") & "</th>" &_
			"<th>" & obLanguage("Common", "kCity") & "</th>" &_
			"<th>" & obLanguage("Common", "kEO") & "</th>"
	GetTableHeader = GetTableHeader & "</tr>"
End Function

Function GetReportTable()
	Dim i
	i = 1
	GetReportTable = "<table class=""ThinTable"" align=""center"" border=""1"" cellspacing=""0"">"
	GetReportTable = GetReportTable & GetTableHeader()
	While Not objCountSchools.EOF
		GetReportTable = GetReportTable & "<tr><td class=""xn2"">" & i & "</td>"
		GetReportTable = GetReportTable & "<td>" & objCountSchools("SUBEONAME") & "</td>"
		GetReportTable = GetReportTable & "<td>" & objCountSchools("PROVINCENAME") & "</td>"
		GetReportTable = GetReportTable & "<td>" & objCountSchools("CITYNAME") & "</td>"
		GetReportTable = GetReportTable & "<td>" & objCountSchools("EONAME") & "</td></tr>"
		i = i + 1
		objCountSchools.MoveNext
	WEnd
	GetReportTable = GetReportTable & "</table>"
End Function
%>