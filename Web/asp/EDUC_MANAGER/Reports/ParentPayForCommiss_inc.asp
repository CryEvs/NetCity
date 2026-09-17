<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->

<%' © 2007-2015 IRTech. All rights reserved.

Dim nGlobalYearId
Dim objRs
Dim strEMSchoolID, strEMSchoolName, nTypeGroup, strTypeGroupName
Dim lngCurrMonth, lngCurrYear
Dim strCommissTypeID, strCommissName, strItemID, strItemName
Dim strComplexID

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNParentPayForCommiss")
End Function

Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kMonth"), obLanguage.GetMonthName(lngCurrMonth), _
		obLanguage("EMReports","kDOU"), strEMSchoolName, _
		obLanguage("EMReports","kDOUGroupType"), strTypeGroupName, _
		obLanguage("SetupSchool","kCommissionType"), strCommissName)
End Function

Sub SpecialRead()
	Dim arrIDs, objParamInfo

	SetScriptTimeOut 900
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))

	lngCurrMonth = Request("Month")
	lngCurrYear = Request("Year")

	strEMSchoolID = GetSafe("EMSCHOOLID", -1)
	If strEMSchoolID = "-1" Then strEMSchoolName = obLanguage("Common","kAll") Else strEMSchoolName = objNSNET.GetSchoolName(strEMSchoolID)
	nTypeGroup = GetSafe("DGT", -1)
	Select Case nTypeGroup
		Case "-1" strTypeGroupName = obLanguage("Common","kAll")
		Case "0" strTypeGroupName = obLanguage("EMReports","kDOUPermanentGroup")
		Case "1" strTypeGroupName = obLanguage("EMReports","kDOUShortTermGroup")
	End Select

	strComplexID = GetSafe("CMS_TP", Null)
	arrIDs = Split(strComplexID, "_", 2)
	strCommissTypeID = arrIDs(0)
	strCommissName = objNSNET.GetCommissTypeName(strCommissTypeID)
	strItemID = arrIDs(1)
	If strItemID <> "-1" Then
		Set objParamInfo = objNSNET.GetUserParamItemInfo(strItemID)
		If Not objParamInfo.EOF Then
			strItemName = GetSafeStr(objParamInfo("ITEMNAME"), -1, "")
			If strItemName <> "" Then
				strCommissName = strCommissName & " (" & strItemName & ")"
			End If
		End If
	End If

	bOk = True
	strErrMsg = ""
End Sub

Sub SpecialMain()
	Dim dtMonthStart, dtMonthEnd

	dtMonthStart = DateSerial( lngCurrYear, lngCurrMonth, 1 )
	dtMonthEnd = DateAdd("m", 1, dtMonthStart)
	dtMonthEnd = DateAdd("d", -1, dtMonthEnd)

	Set objRs = objNSNET.GetParentPayForCommission(filterEMID, nGlobalYearID, dtMonthStart, dtMonthEnd, strEMSchoolID, nTypeGroup, strCommissTypeID, strItemID)

	If objRs.EOF Then
		bOK = False
		strErrMsg = obLanguage("EMReports","kEmptyParentPayForCommission")
	End If
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print""><tr>"
	GetTableHeader = GetTableHeader & "<th class=""text-nowrap"" rowspan=""2"">" & obLanguage("EMReports","kOrderNum") & "</th><th rowspan=""2"">" & obLanguage("EMReports","kNumberOU") & "</th><th rowspan=""2"">" & obLanguage("Reports","kCodeOU") & _
		"</th><th colspan=""4"">" & obLanguage("Reports","kInfoChild") & _
		"</th><th colspan=""7"">" & obLanguage("Reports","kInfoParentPay") & _
		"</th><th colspan=""3"">" & obLanguage("Reports","kInfoParent") & _
		"</th><th colspan=""5"">" & obLanguage("Reports","kAddress2") & "</th></tr>"

	GetTableHeader = GetTableHeader & "<tr>"
	GetTableHeader = GetTableHeader & "<th>" & obLanguage("Common","kLastName") &"</th><th>"& obLanguage("Common","kFirstName") &"</th><th>"& obLanguage("Common","kMiddleName") & "</th><th>" & obLanguage("Reports","kBirthdate") & _
		"</th><th>" & obLanguage("Reports","kYearPay") & "</th><th>" & obLanguage("Reports","kMonthPay") & "</th><th>" & obLanguage("EM","kNorm") & _
		"</th><th>" & obLanguage("Reports","kFactVisitDays") & "</th><th>" & obLanguage("Reports","kCompens") & "</th><th>" & obLanguage("SetupSchool","kPrivilegeStartDate") & "</th><th>" & obLanguage("SetupSchool","kPrivilegeEndDate") & _
		"</th><th>" & obLanguage("Common","kLastName") & "</th><th>" & obLanguage("Common","kFirstName") & "</th><th>" & obLanguage("Common","kMiddleName") & _
		"</th><th>" & obLanguage("Reports","kAdminUnitS") & "</th><th>" & obLanguage("Common","kStreet") & "</th><th>" & obLanguage("Common","kHouse") & "</th><th>" & obLanguage("Common","kCorp") & "</th><th>" & obLanguage("Common","kFlat") & "</th></tr>"
End Function

Function GetReportTable()
	Dim num

	strReport = GetTableHeader()
	num = 0
	While Not objRs.EOF
		num = num + 1
		strReport = strReport & "<tr>"
		strReport = strReport & "<td class=""cell-num"">" & num & "</td><td class=""cell-text"">" & DB2HTML(objRs("SCHOOLNUMBER")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("SCHOOLCODE")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objRs("LASTNAME")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("FIRSTNAME")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("MIDDLENAME")) & "</td><td class=""cell-date"">" & Date2Str(objRs("BIRTHDATE")) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(objRs("YEARNAME")) & "</td><td class=""cell-num"">" & DB2HTML(objRs("MONTHNUM")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("ABBREV")) & "</td><td class=""cell-num"">" & DB2HTML(objRs("ATTENDCOUNT")) & "</td>" & _
			"<td class=""cell-num-2"">" & DB2HTML(objRs("CONTENT")) & "</td><td class=""cell-date"">" & Date2Str(objRs("STARTDATE")) & "</td><td class=""cell-date"">" & Date2Str(objRs("ENDDATE")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objRs("PARENT_L_NAME")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("PARENT_F_NAME")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("PARENT_M_NAME")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objRs("ADMIN_UNIT")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("LNAME")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("HOUSE")) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(objRs("CORP")) & "</td><td class=""cell-text"">" & DB2HTML(objRs("ROOM")) & "</td></tr>"
		objRs.MoveNext
	Wend

	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function
%>
