<!-- #INCLUDE FILE=../scripts/FilterEMs.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kProvinceNo = "-2"

Dim strEMStateID, strEMProvinceID, strEMCityID, strEMSchoolTypeID, strEMSchoolID
Dim objEMStates, objEMProvinces, objEMCities, objEMSchoolTypes, objEMSchools
Dim bAddressFiltersExit
Dim bShowProvinceNo ' Флаг означает, что в фильтре для Муниципального образования надо показывать значение "Нет" (bShowProvinceNo = True), или не надо.
					' Но этот флаг ни в коем случае не показывает, надо ли показывать сам фильтр для Муниципальных образований!!!
Dim bNoProvinces

Sub WriteAddressFilter()
	Call WriteEMs()
	Call obTokenMgr.SetData(strToken, stEMStateID, strEMStateID)
	Call obTokenMgr.SetData(strToken, stEMProvinceID, strEMProvinceID)
	Call obTokenMgr.SetData(strToken, stNoEMProvinces, bNoProvinces)
	Call obTokenMgr.SetData(strToken, stEMCityID, strEMCityID)
	Call obTokenMgr.SetData(strToken, stEMSchoolTypeID, strEMSchoolTypeID)
	Call obTokenMgr.SetData(strToken, stEMSchoolID, strEMSchoolID)
End Sub

Sub DrawEMSchoolsFilter(strFormName, bCanAll)
	DrawEMSchoolsFilterEx strFormName, bCanAll, Null
End Sub

Sub DrawEMSchoolsFilterEx(strFormName, bCanAll, strOnChangeSchool)
	Dim strOnChange, valNull
	Dim bSchoolsExists
	Dim arrProvNo

	valNull = IIf(bCanAll, obLanguage("Common","kAll"), Null)
	strOnChange = "OnChangeSelect('" & strFormName & "','" & strScriptName & "');"
	If IsDull(strOnChangeSchool) Then
		strOnChangeSchool = strOnChange
	End If

	bSchoolsExists = DrawEMRegionFilter(strFormName)
	If Not bSchoolsExists Then
		Exit Sub
	End If

	If Not bNoProvinces Then
		OpenFormGroup obLanguage("Login","kLoginProvince")
			If bShowProvinceNo Then
				arrProvNo = Array(kProvinceNo, obLanguage("Common","kNo"))
			End If
			Call DrawSelectRsEx(objEMProvinces, "PID", "PROVINCEID", "PROVINCENAME", strEMProvinceID, strOnChange, arrProvNo)
		CloseFormGroup
	End If

	If strEMProvinceID = kProvinceNo Then
		If Not objEMCities.EOF Then
			Call DrawSelectInfoRow(obLanguage("Login","kLoginCity"), strEMCityID, "CN", objEMCities, "CITYID", "NAME", IIF(objEMCities.RecordCount > 1, valNull, Null) , strOnChange)
		End If
	End If
	If Not objEMSchoolTypes.EOF Then
		Call DrawSelectInfoRow(obLanguage("Login","kLoginSchoolType"), strEMSchoolTypeID, "SFT", objEMSchoolTypes, "FUNCTIONALITYTYPEID", "NAME", Null, strOnChange)
	Else
		Call DrawInfo(oblanguage("EM","kNoEM_EOs"), False)
		Exit Sub
	End If
	If objEMSchools.EOF Then
		Call DrawInfo(oblanguage("EM","kNoEM_EOs"), False)
	Else
		Call DrawSelectInfoRow(obLanguage("Common","kEO"), strEMSchoolID, "EMSCHOOLID", objEMSchools, "SCHOOLID", "SCHOOLNAME", IIF(objEMSchools.RecordCount > 1, valNull, Null), strOnChangeSchool)
	End If
End Sub

Sub ReadAddressFilters(bCanAll)

	strEMStateID = "0"
	strEMSchoolTypeID = "0"

	If bCanAll Then
		strEMProvinceID = "-1"
		strEMCityID = "-1"
		strEMSchoolID = "-1"
	Else
		strEMProvinceID = "0"
		strEMCityID = "0"
		strEMSchoolID = "0"
	End If

	bShowProvinceNo = False
	bAddressFiltersExit = True

	strEMStateID = ReadEMRegionFilter(True)

	strEMProvinceID = GetSafeID(Request("PID"), GetSafeID(obTokenMgr.GetData(strToken, stEMProvinceID), IIf(bCanAll, "-1", kProvinceNo)))
	If Not bCanAll And strEMProvinceID = "-1" Then strEMProvinceID = kProvinceNo
	Set objEMProvinces = objNSNET.GetSchoolProvinceList_EM(strEMStateID)
	bNoProvinces = objEMProvinces.EOF
	If Not objEMProvinces.EOF Then
		If strEMProvinceID <> kProvinceNo And strEMProvinceID <> "-1" Then
			strEMProvinceID = GetSafeIDForRs_Ex(strEMProvinceID, objEMProvinces, "PROVINCEID", IIf(bCanAll, "-1", kProvinceNo))
		End If
	Else
		strEMProvinceID=kProvinceNo 'Exit Sub
	End If

	'strEMCityID = GetSafeID(Request("CN"), GetSafeID(obTokenMgr.GetData(strToken, stEMCityID), "0"))
	Set objEMCities = objNSNET.GetSchoolCityList_EM(strEMStateID)
	bShowProvinceNo = Not objEMCities.EOF
	If strEMProvinceID <> "-1" Then
		If strEMProvinceID = kProvinceNo Then
			If objEMCities.EOF Then
				strEMCityID="-1" 'Exit Sub
				If Not objEMProvinces.EOF Then strEMProvinceID = objEMProvinces("PROVINCEID")
			Else
				strEMCityID = GetSafeID(Request("CN"), GetSafeID(obTokenMgr.GetData(strToken, stEMCityID), IIf(bCanAll, "-1", "0")))
				If Not bCanAll And strEMCityID = "-1" Then strEMCityID = "0"
				If strEMCityID <> "-1" Then
					strEMCityID = GetSafeIDForRs(strEMCityID, objEMCities, "CITYID")
					If strEMCityID = "0" Then strEMCityID = GetSafeID(objEMCities("CITYID"), Null)
				End If
			End If
		Else
			strEMCityID="-1" 'Exit Sub
		'	Set objEMCities = objNSNET.GetSchoolProvinceCityList_EM(strEMStateID, strEMProvinceID)
		End If
	End If

	strEMSchoolTypeID = GetSafeID(Request("SFT"), GetSafeID(obTokenMgr.GetData(strToken, stEMSchoolTypeID), "0"))
	Set objEMSchoolTypes = objNSNET.GetSchoolFuncList_EM(strEMStateID, strEMProvinceID, strEMCityID)
	If objEMSchoolTypes.EOF Then Exit Sub
	strEMSchoolTypeID = GetSafeIDForRs(strEMSchoolTypeID, objEMSchoolTypes, "FUNCTIONALITYTYPEID")
	If strEMSchoolTypeID = "0" Then
		strEMSchoolTypeID = GetSafeID(objEMSchoolTypes("FUNCTIONALITYTYPEID"), Null)
	End If

	strEMSchoolID = GetSafeID(Request("EMSCHOOLID"), GetSafeID(obTokenMgr.GetData(strToken, stEMSchoolID),  IIf(bCanAll, "-1", "0")))
	If Not bCanAll And strEMSchoolID = "-1" Then strEMSchoolID = "0"
	Set objEMSchools = objNSNET.GetSchoolList_EM(strEMStateID, strEMProvinceID, strEMCityID, strEMSchoolTypeID)
	If objEMSchools.EOF Then Exit Sub
	If strEMSchoolID <> "-1" Then
		strEMSchoolID = GetSafeIDForRs(strEMSchoolID, objEMSchools, "SCHOOLID")
		If strEMSchoolID = "0" Then
			strEMSchoolID = GetSafeID(objEMSchools("SCHOOLID"), Null)
		End If
	End If

	bAddressFiltersExit = False
End Sub
%>
