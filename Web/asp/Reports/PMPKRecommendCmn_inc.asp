
<% ' © 2007-2008 IRTech. All rights reserved.

Function GetReportHeader()
	Dim strReportHeader

	strReportHeader = GetHeader_Table() & "<tr>" & _
		"<th class=""text-nowrap"" rowspan=""2"">" & obLanguage("Reports","kOrderNum") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Common","kEO") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Common","kClass",strFunctionalityType) & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Filter","kFIO") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Common","kGender") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Reports","kBirthDate2") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Common","kHomeAddress") & "</th>" & _

		"<th colspan=""6"">" & obLanguage("Reports","kCommission") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Reports","kInvalid_YesNo") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Reports","kEducProgramm_Fact") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Reports","kEducForm_Fact") & "</th></tr>" & _

		"<tr>" & _
		"<th>" & obLanguage("Reports","kCommissionNum_2") & "</th>" & _
		"<th>" & obLanguage("Reports","kCommissionStartDate_2") & "</th>" & _
		"<th>" & obLanguage("Reports","kCommissionEndDate_2") & "</th>" & _
		"<th>" & obLanguage("Reports","kEducForm_Commiss") & "</th>" & _
		"<th>" & obLanguage("Reports","kEducProgramm_Commiss") & "</th>" & _
		"<th>" & obLanguage("Reports","kViolationKind") & "</th></tr>"

	GetReportHeader = strReportHeader
End Function

Function GetReport_1_School(objInfo, nInd, strSchName)
	Dim strRep
	Dim strAddress
	Dim strCommissID, strCommissID_Old
	Dim strStudentID
	Dim strViolation, strInvalid, strEducProgramm, strEducForm
	strRep = ""
	While Not objInfo.EOF
		nInd = nInd + 1
		strCommissID_Old = GetsafeID(objInfo("COMMISSID"), Null)
		strStudentID= GetsafeID(objInfo("USERID"), Null)
		strAddress = GetAddress(strStudentID)

		strViolation = DB2HTML(GetSafeStr(objInfo("VIOL"), -1, ""))
		strInvalid = IIf(IsDull(objInfo("PARAM_INVALID")), obLanguage("Common","kNo"), obLanguage("Reports","kYes_2"))
		strEducProgramm = GetSafeStr(objInfo("EDUCPROG"), -1, "")
		strEducForm = GetSafeStr(objInfo("EDUCFORM"), -1, "")

		strRep = strRep & _
		"<td class=""cell-num"">" & nInd & "</td>" & _
		"<td class=""cell-text"">" & DB2HTML(strSchName) & "</td>" & _
		"<td class=""cell-text"">" & DB2HTML(GetSafeStr(objInfo("CLASSNAME"), -1, "")) & "</td>" & _
		"<td class=""cell-text"">" & DB2HTML(GetSafeStr(objInfo("LASTNAME"), -1, "")) & " " & _
				 DB2HTML(GetSafeStr(objInfo("FIRSTNAME"), -1, "")) & " " & _
				 DB2HTML(GetSafeStr(objInfo("MIDDLENAME"), -1, "")) & "</td>" & _
		"<td class=""cell-text"">" & DB2HTML(GetSafeStr(objInfo("GENDER"), -1, "")) & "</td>" & _
		"<td class=""cell-date"">" & Date2Str(objInfo("BIRTHDATE")) & "</td>"

		strRep = strRep & _
		"<td class=""cell-text"">" & DB2HTML(strAddress) & "</td>" & _
		"<td class=""cell-text"">" & DB2HTML(GetSafeStr(objInfo("COMMISSNUM"), -1, "")) & "</td>" & _
		"<td class=""cell-date"">" & Date2Str(objInfo("STARTDATE")) & "</td>" & _
		"<td class=""cell-date"">" & Date2Str(objInfo("ENDDATE")) & "</td>" & _
		"<td class=""cell-text"">" & DB2HTML(GetSafeStr(objInfo("CMM_EDUC_FORM"), -1, "")) & "</td>" & _
		"<td class=""cell-text"">" & DB2HTML(GetSafeStr(objInfo("CMM_EDUC_PROG"), -1, "")) & "</td>"

		Do While Not objInfo.EOF
			objInfo.MoveNext
			If Not objInfo.EOF Then
				strCommissID = GetsafeID(objInfo("COMMISSID"), Null)
				If strCommissID <> strCommissID_Old Then
					Exit Do
				End If
				strViolation = strViolation & ",<br>" & DB2HTML(GetSafeStr(objInfo("VIOL"), -1, ""))
			End If
		Loop

		strRep = strRep & _
		"<td class=""cell-text"">" & strViolation & "</td>" & _
		"<td class=""cell-text"">" & strInvalid & "</td>" & _
		"<td class=""cell-text"">" & DB2HTML(strEducProgramm) & "</td>" & _
		"<td class=""cell-text"">" & DB2HTML(strEducForm) & "</td></tr>"
	WEnd

	GetReport_1_School = strRep
End Function

Function GetAddress(nStudID)
	Dim strAddress, rsUserAddr

	Set rsUserAddr = objNSNET.GetUserAddress(nStudID, 1) ' 1 - фактический адрес
	If rsUserAddr.EOF Then GetAddress = "" : Exit Function

'	If nSchoolCityID <> rsUserAddr("CITYID") Then
		strAddress = strAddress & GetSafeStr(rsUserAddr("CITYNAME"), -1, "") & ", "
'	End If

	strAddress = strAddress & GetSafeStr(rsUserAddr("ADDRESS"), -1, "") & " "

	GetAddress = strAddress
End Function
%>
