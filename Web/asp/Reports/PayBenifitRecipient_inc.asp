<!-- #INCLUDE FILE="ReportService_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim lngCurrMonth, lngCurrYear, rsStudents
Dim strGYID, strSYID
Dim dtStartMonth
Dim strPayNorms, arrPayNorms
Dim nNormsCount
Dim strFilterPayNorms
Dim bEmpty
Dim bList

Function GetPageTitle()
	GetPageTitle = IIf(bList, obLanguage("ReportNames","kRNPayBenefitRecipientList"), obLanguage("ReportNames","kRNPayBenefitRecipientCount"))
End Function
Function GetPageParams()
	Dim filters
	filters = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kYear"), lngCurrYear, _
		obLanguage("Common","kMonth"), obLanguage.GetMonthName(lngCurrMonth), _
		obLanguage("Reports","kNorms"), strFilterPayNorms _
		)
	If strFunctionalityType <> kFuncType_EM Then filters(0) = Empty ' не выводим
	GetPageParams = filters
End Function

Sub specialRead()
	Dim i
	Dim objPayNorms

	SetScriptTimeOut 900

	Call InitEmFilters()
	bList = GetSafeBool(GetSafe("List", false), false)
	strGYID = GetSafeID(Request("CMNYEAR"), "0")
	strSYID = "0"
	If strGYID = "0" Then
		strSYID = strCurrYearID
	End If

	lngCurrMonth = Request("Month")
	lngCurrYear = Request("Year")
	dtStartMonth = DateSerial(lngCurrYear, lngCurrMonth, 1)

	strPayNorms = CStr(Request("NormID"))

	Set objPayNorms = objNSNET.GetPayNormsInfo(strPayNorms)
	If objPayNorms.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	nNormsCount = Request("NormID").Count
	If nNormsCount <> objPayNorms.RecordCount Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	arrPayNorms = objPayNorms.GetRows(,,Array("NORMID", "ABBREV"))
	strFilterPayNorms = ""
	For i = 0 To nNormsCount - 1
		strFilterPayNorms = strFilterPayNorms & arrPayNorms(1, i) & "; " ' vbNewLine
	Next
	'strFilterPayNorms = "<table><tr><td>"&Replace(strFilterPayNorms, vbCrLf, "</td><<td><")&"</td></tr></table>"
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stFilterPayNorms, strPayNorms)
End Sub

Sub specialMain()
	If bList Then
		Set rsStudents = objNSNET.GetPayBenifitRecipient_List(strGYID, strSYID, dtStartMonth, strPayNorms)
	Else
		Set rsStudents = objNSNET.GetPayBenifitRecipient_Count(strGYID, strSYID, dtStartMonth, strPayNorms)
	End If
	bEmpty = rsStudents.EOF
End Sub

Function GetReportTable()
	If bList Then
		GetReportTable = GetTable_PayBenifitRecipient_List()
	Else
		GetReportTable = GetTable_PayBenifitRecipient_Count()
	End If
End Function

Function GetTable_PayBenifitRecipient_Count()
	Dim strReport, i
	Dim strCurrNormID, strTitleNormID
	Dim strSchoolID_Prev, strSchoolID_Curr
	Dim strCntStud, strSumAttend

	strReport = "<table class=""table-print"">"
	strReport = strReport & "<tr><th rowspan=""2"">" & obLanguage("Reports","kMDOU2") & "</th><th colspan=""" & (nNormsCount * 2) & """>" & obLanguage("Reports","kNorm_2") & "</th></tr>"

	strReport = strReport & "<tr>"
	For i = 0 To nNormsCount - 1
		strReport = strReport & "<th colspan=""2"">" & DB2HTML(arrPayNorms(1, i)) &"</th>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & "<tr><th>&nbsp;</th>"
	For i = 0 To nNormsCount - 1
		strReport = strReport & "<th>" & obLanguage("Reports","kPupils") &"</th>" & "<th>" & obLanguage("Reports","kDays") &"</th>"
	Next
	strReport = strReport & "</tr>"

	While Not rsStudents.EOF
		strSchoolID_Prev = GetSafeID(rsStudents("SCHOOLID"), Null)
		strReport = strReport & "<tr>"
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("SCHOOLNUMBER")) & "</td>"

		For i = 0 To nNormsCount - 1
			strTitleNormID = CStr(arrPayNorms(0, i))

			strCntStud = "&nbsp;"
			strSumAttend = "&nbsp;"
			If Not rsStudents.EOF Then
				strSchoolID_Curr = GetSafeID(rsStudents("SCHOOLID"), Null)
				strCurrNormID = GetSafeID(rsStudents("NORMID"), Null)

				If strSchoolID_Curr = strSchoolID_Prev Then
					If strTitleNormID = strCurrNormID Then
						strCntStud = GetSafeLng(rsStudents("CNT_STUD"), 0)
						strSumAttend = GetSafeLng(rsStudents("SUM_ATTEND"), 0)
						strSchoolID_Prev = GetSafeID(rsStudents("SCHOOLID"), Null)

						rsStudents.MoveNext
					End If
				End If
			End If

			strReport = strReport & "<td class=""cell-num"">" & strCntStud & "</td>" & "<td class=""cell-num"">" & strSumAttend & "</td>"
		Next
		strReport = strReport & "</tr>"
	Wend
	GetTable_PayBenifitRecipient_Count = strReport & "</table><br>"
End Function

Function GetTable_PayBenifitRecipient_List()
	Dim strReport, i, j
	Dim strCurrStudentID
	strReport = "<table class=""table-print"">"
	strReport = strReport & "<tr><th rowspan=""2"">" & obLanguage("Reports","kOrderNumberS") & "</th><th rowspan=""2"">" & obLanguage("Reports","kMDOU2") & "</th><th rowspan=""2"">" & obLanguage("Common","kClass",strFunctionalityType) & "</th><th rowspan=""2"">" & obLanguage("Reports","kFactVisitDays") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Common","kLastName") & "</th><th rowspan=""2"">" & obLanguage("Common","kFirstName") & "</th><th rowspan=""2"">" & obLanguage("Common","kMiddleName") & "</th><th rowspan=""2"">" & obLanguage("Common","kGender") & "</th><th rowspan=""2"">" & obLanguage("Reports","kBirthDate2") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Reports","kGroupSpecialCode") & "</th><th colspan=""4"">" & obLanguage("Reports","kDocument") & "</th><th colspan=""5"">" & obLanguage("Reports","kAddress2") & "</th>" & "<th rowspan=""2"">" & obLanguage("Common","kSnils") & "</th>" & _
		"</tr><tr>" & _
		"<th>" & obLanguage("Common","kSerial") & "</th><th>" & obLanguage("Reports","kNumber2") & "</th><th>" & obLanguage("UsersExport","kPassportDate") & "</th><th>" & obLanguage("Common","kPassportWho") & "</th><th>" & obLanguage("Reports","kAdminUnitS") & "</th><th>" & obLanguage("Common","kStreet") & "</th><th>" & obLanguage("Common","kHouse") & "</th><th>" & obLanguage("Common","kCorp") & "</th><th>" & obLanguage("Common","kCorp") & "</th></tr>"

	strReport = strReport & "<tr>"
	For i = 1 To 20
		strReport = strReport & "<th>" & i & "</th>"
	Next
	strReport = strReport & "</tr>"

	Response.Write strReport

	i = 0
	j = 0
	While Not rsStudents.EOF
		i = i + 1
		j = j + 1
		strCurrStudentID = GetSafeID(rsStudents("STUDENTID"), Null)

		strReport = "<tr>"
		strReport = strReport & "<td class=""cell-num"">" & i & "</td>"
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("SCHOOLNUMBER")) & "</td>"
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("CLASSNAME")) & "</td>"
		strReport = strReport & "<td class=""cell-num"">" & DB2HTML(rsStudents("SUM_ATTEND")) & "</td>"

		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("LASTNAME")) & "</td>"
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("FIRSTNAME")) & "</td>"
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("MIDDLENAME")) & "</td>"
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("GENDER")) & "</td>"
		strReport = strReport & "<td class=""cell-date"">" & Date2Str(rsStudents("BIRTHDATE")) & "</td>"
		strReport = strReport & "<td class=""cell-num"">" & DB2HTML(rsStudents("TYPENAME")) & "</td>"

		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("BIRTHCERTIF_SERIES")) & "</td>"
		strReport = strReport & "<td class=""cell-num"">" & DB2HTML(rsStudents("BIRTHCERTIF_NO")) & "</td>"
		strReport = strReport & "<td class=""cell-date"">" & DB2HTML(rsStudents("BIRTHCERTIF_ISSUEDATE")) & "</td>"
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("BIRTHCERTIF_ISSUER")) & "</td>"

		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("ADMIN_UNIT")) & "</td>"
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("LNAME")) & "</td>"
		strReport = strReport & "<td class=""cell-num"">" & DB2HTML(rsStudents("HOUSE")) & "</td>"
		strReport = strReport & "<td class=""cell-num"">" & DB2HTML(rsStudents("CORP")) & "</td>"
		strReport = strReport & "<td class=""cell-num"">" & DB2HTML(rsStudents("ROOM")) & "</td>"

		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("SNILS")) & "</td>"

		strReport = strReport & "</tr>"
		Response.Write strReport
		If j=1000 Then Response.Flush: j=0

		rsStudents.MoveNext
	Wend
	Response.Write "</table><br>"
End Function
%>
