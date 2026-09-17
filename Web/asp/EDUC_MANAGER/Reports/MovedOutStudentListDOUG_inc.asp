<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->

<%' © 2007-2013 IRTech. All rights reserved.
Dim nGlobalYearId
Dim dtStartDate, strStartDate, dtEndDate, strEndDate
Dim objRs
Dim strEMSchoolID, strEMSchoolName, nTypeGroup, strTypeGroupName

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNMovedOutStudentListDOUG")
End Function

Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kStartDate"), strStartDate, _
		obLanguage("Common","kEndDate"), strEndDate,_
		obLanguage("EMReports","kDOU"), strEMSchoolName, _
		obLanguage("EMReports","kDOUGroupType"), strTypeGroupName) 'strDGT
End Function

Sub SpecialRead()
	SetScriptTimeOut 900
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
	strEMSchoolID = GetSafe("EMSCHOOLID", -1)
	If strEMSchoolID = "-1" Then strEMSchoolName = obLanguage("Common","kAll") Else strEMSchoolName = objNSNET.GetSchoolName(strEMSchoolID)
	nTypeGroup = GetSafe("DGT", -1)
	Select Case nTypeGroup
	Case "-1" strTypeGroupName = obLanguage("Common","kAll")
	Case "0" strTypeGroupName = obLanguage("EMReports","kDOUPermanentGroup")
	Case "1" strTypeGroupName = obLanguage("EMReports","kDOUShortTermGroup")
	End Select
	bOk = True
	strErrMsg = ""
End Sub

Sub SpecialMain()
	Set objRs = objNSNET.GetStudentListG(nGlobalYearID, filterEMID, strEMSchoolID, kFuncType_PreSchool, dtStartDate, dtEndDate, True, nTypeGroup, -1, -1)
	If objRs.EOF Then
		bOK = False
		strErrMsg = obLanguage("EMReports","kErrMovedOutStudentListDOUG")
	End If
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print""><tr>"
	GetTableHeader = GetTableHeader & "<th>" & obLanguage("EMReports","kNumberOU") & "</th><th>" & obLanguage("EMReports","kEnrollDate") & "</th><th>" & obLanguage("EMReports","kDepartDate") & "</th><th>" & obLanguage("Common","kLastName") & "</th><th>" & obLanguage("Common","kFirstName") & "</th>" &_
	"<th>" & obLanguage("Common","kMiddleName") & "</th><th>" & obLanguage("Reports","kBirthdate") & "</th><th>" & obLanguage("EMReports","kSeriesDocument") & "</th><th>" & obLanguage("EMReports","kDocNumber") & "</th><th>" & obLanguage("EMReports","kIssueDate") & "</th>" &_
	"<th>" & obLanguage("EMReports","kIssueWho") & "</th><th>" & obLanguage("EMReports","kLocationName") & "</th><th>" & obLanguage("EMReports","kLocationType") & "</th><th>" & obLanguage("Common","kHouse") & "</th><th>" & obLanguage("Common","kCorp") & "</th><th>" & obLanguage("Common","kFlat") & "</th>"
	GetTableHeader = GetTableHeader & "</tr>"
End Function

Function GetReportTable()
	strReport = GetTableHeader()
	While Not objRs.EOF
		strReport = strReport & GetFounderHeader(16,objRs)
		strReport = strReport & "<tr>"
		strReport = strReport & "<td class=""cell-text"">" & objRs("SCHOOLNUMBER") & "</td><td class=""cell-date"">" & Date2Str(objRs("DATEIN")) & "</td>" & _
			"<td class=""cell-date"">" & Date2Str(objRs("DATEOUT")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("LASTNAME")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("FIRSTNAME")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objRs("MIDDLENAME")) & "</td><td class=""cell-date"">" & Date2Str(objRs("BIRTHDATE")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("BCF_SERIES")) & "</td>" &_
			"<td class=""cell-num"">" & DB2HTML(objRs("BCF_NO")) & "</td><td class=""cell-date"">" & Date2Str(objRs("BCF_DATE")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("BCF_WHOM")) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(objRs("LNAME")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("SHORTNAME")) & "</td><td class=""cell-num"">" & DB2HTML(objRs("HOUSE")) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(objRs("CORP")) & "</td><td class=""cell-num"">" & DB2HTML(objRs("ROOM")) & "</td></tr>"
		objRs.MoveNext
	Wend
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

%>
