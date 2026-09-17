<!-- #INCLUDE VIRTUAL="/asp/administration/DatePeriod_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/administration/UserStat_inc.asp" -->
<!-- #INCLUDE FILE="em_address_filter_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim dtMinDate, dtMaxDate
Dim strFilterEMID
Sub ReadState_EO()
	nOrgType = obTokenMgr.GetData(strToken, stOrgType)
	strEMStateID = obTokenMgr.GetData(strToken, stEMStateID)
	strEMProvinceID = obTokenMgr.GetData(strToken, stEMProvinceID)
	bNoProvinces = GetSafeBool(obTokenMgr.GetData(strToken, stNoEMProvinces), True)
	strEMCityID = obTokenMgr.GetData(strToken, stEMCityID)
	strEMSchoolTypeID = obTokenMgr.GetData(strToken, stEMSchoolTypeID)
	strEMSchoolID = obTokenMgr.GetData(strToken, stEMSchoolID)
End Sub

Sub InitSchools
	Select Case nOrgType
		Case kOrgType_EO
			Call ReadState_EO()
			nViewSchoolID = CLng(strEMSchoolID)
			strFilterEMID = ReadEMRegionFilter(False)
		Case kOrgType_EM
			strEMStateID = obTokenMgr.GetData(strToken, stEMStateID)
			strFilterEMID = ReadEMRegionFilter(False)
		Case kOrgType_ServAdmin
		Case Else
			GenerateError obLanguage("Common","kUnexpErr")
	End Select
End Sub

Sub onDrawPage()
	Dim arrayFilter

	arrayFilter = GetPrintFilter()
	Response.Write GetPageTitleFor(obLanguage("ServAdmin","kTitleUserStat"), arrayFilter)
	Call DrawTable()
	Response.Write GetPageVer()
End Sub

Function GetPrintFilter()
	Dim strOrgType, strState, strProvince, strCity, strFuncType
	Dim strScName, strTimePeriod, strPersonName
	Dim arrayFilter

	strOrgType = GetOrgType()

	strTimePeriod = obLanguage("ServAdmin","kTimeFrom") &" "& Date2Str(dtStartDate) &" "& obLanguage("ServAdmin","kTimeTo") &" "& Date2Str(dtEndDate)

	Select Case nOrgType
		Case kOrgType_EO
			strState = DB2HTML(objNSNET.GetEducManagementName(strEMStateID))
			strProvince = GetProvince()
			strCity = GetCity()
			strFuncType = DB2HTML(objNSNET.GetFuctionalityTypeName(strEMSchoolTypeID))
			If nViewSchoolID = -3 Then
				strScName = obLanguage("Common","kAll")
			Else
				strScName = DB2HTML(objNSNET.GetSchoolName(strEMSchoolID))
			End If
			arrayFilter = Array(obLanguage("Common","kInstitutionType"), strOrgType, _
				obLanguage("Common","kTerritorialManagement"), strState, _
				IIf(bNoProvinces, Empty, obLanguage("Login","kLoginProvince")), strProvince, _
				obLanguage("Login","kLoginCity"), strCity, _
				obLanguage("Login","kLoginSchoolType"), strFuncType, _
				obLanguage("Common","kEO"), strScName, _
				obLanguage("ServAdmin","kTimePeriod"), strTimePeriod)

		Case kOrgType_EM
			strState = DB2HTML(objNSNET.GetEducManagementName(strEMStateID))
			arrayFilter = Array(obLanguage("Common","kInstitutionType"), strOrgType, _
				obLanguage("Common","kTerritorialManagement"), strState, _
				obLanguage("ServAdmin","kTimePeriod"), strTimePeriod)

		Case kOrgType_ServAdmin
			arrayFilter = Array(obLanguage("Common","kInstitutionType"), strOrgType, _
				obLanguage("ServAdmin","kTimePeriod"), strTimePeriod)
		Case Else
			GenerateError obLanguage("Common","kUnexpErr")
	End Select

	GetPrintFilter = arrayFilter
End Function

Function GetOrgType()
	Select Case nOrgType
		Case kOrgType_EO
			GetOrgType = obLanguage("Common","kEO")
		Case kOrgType_EM
			GetOrgType = obLanguage("Common","kEMName")
		Case kOrgType_ServAdmin
			GetOrgType = obLanguage("ServAdmin","kSAName")
		Case Else
			GenerateError obLanguage("Common","kUnexpErr")
	End Select
End Function

Function GetProvince()
	If CStr(strEMProvinceID) = "-1" Then
		GetProvince = obLanguage("Common","kAll")
	ElseIf CStr(strEMProvinceID) = kProvinceNo Then
		GetProvince = obLanguage("Common","kNo")
	Else
		GetProvince = DB2HTML(objNSNET.GetProvinceName(strEMProvinceID))
	End If
End Function

Function GetCity()
	If CStr(strEMCityID) = "-1" Then
		GetCity = obLanguage("Common","kAll")
	Else
		GetCity = DB2HTML(objNSNET.GetCityName(strEMCityID))
	End If
End Function
%>
