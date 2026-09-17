<% ' © 2007-2017 IRTech. All rights reserved.
Dim strStateProvID, strProvinceName, strSchoolCity

Sub InitSchoolCityInfo()
	Dim objSchoolInfo, objCityInfo
	Dim nImportCityID

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objSchoolInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	nImportCityID = GetSafeID(objSchoolInfo("CITYID"), Null)
	Set objCityInfo = objNSNET.GetCityInfo(nImportCityID)
	If objCityInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	strStateProvID = GetSafeID(objCityInfo("STATE_PROVINCEID"), Null) ' School
	strProvinceName = GetSafeStr(objCityInfo("PROVINCENAME"), -1, "") ' School
	strSchoolCity = GetSafeStr(objCityInfo("NAME"), -1, "") ' School
End Sub

Sub CheckAddress(arrItemIn, bNewImportUser, nLastName, nFirstName, nMiddleName,_
		nCityFact, nDistrictFact, nLocationFact, nCityReg, nDistrictReg, nLocationReg)
	Dim rsSimilar, strAddrUserID
	strAddrUserID = ""
	If Not bNewImportUser Then ' new student
		' ищем себя в школе
		Set rsSimilar = objNSNET.GetSimilarUsers(strSchoolID, rlStudent, UCase(arrItemIn(nLastName)), UCase(arrItemIn(nFirstName)), UCase(arrItemIn(nMiddleName)), Empty, Empty, -1)
		If Not rsSimilar.EOF Then
			If rsSimilar.RecordCount > 1 Then
				' много однофамильцев
			Else
				' нашли, однозначно
				strAddrUserID = GetSafeID(rsSimilar("USERID"), Null)
			End If
		Else
			' не нашли, т.к изменил ФИО, (выбыл?)
		End If
	End If

	' Фактический
	Call CheckSingleAddress(arrItemIn, bNewImportUser, nCityFact, nDistrictFact, nLocationFact, strAddrUserID,1)
	' Регистрации
	Call CheckSingleAddress(arrItemIn, bNewImportUser, nCityReg, nDistrictReg, nLocationReg, strAddrUserID,0)

End Sub

Sub CheckSingleAddress(arrItemIn, bNewImportUser, nCityFact, nDistrictFact, nLocationFact, strAddrUserID, nFact)
	Dim strImportCity, strUserCity
	Dim strImportCity2, strUserCity2, strUserProvinceName2
	Dim objAddress, bInvalidAddress
	Dim strImportLocation, strImportDistrict
	Dim strCurrStateProvID, strCurrProvinceName
	Dim bCheckAddress, strLocationType

	bInvalidAddress = False
	strImportCity = Trim(CStr(arrItemIn(nCityFact)))
	If IsDull(strImportCity) Then Exit Sub

	If Instr(strImportCity, strSchoolCity)>0 Then
		' error ATO_TYPE ???
		strCurrStateProvID = strStateProvID
		strCurrProvinceName = strProvinceName
	ElseIf bNewImportUser Then ' new student
		bInvalidAddress = True
	ElseIf strAddrUserID = "" Then
		bInvalidAddress = True
	Else
		Set objAddress = objNSNET.GetUserAddress(strAddrUserID, nFact)
		If objAddress.EOF Then
			bInvalidAddress = True ' адрес в чужом городе нельзя добавить только изменить
		Else
			strUserCity = GetSafeStr(objAddress("CITYNAME"), -1, Null)
			strUserProvinceName2 = GetSafeStr(objAddress("PROVINCENAME"), -1, "") ' User
			If strImportCity <> strUserCity Then
				strUserCity2 = strUserCity
				strImportCity2 = strImportCity
				If Instr(strUserCity2,".")>0 Then strUserCity2 = Trim(Split(strUserCity,".")(1))
				If Instr(strImportCity2,".")>0 Then strImportCity2 = Trim(Split(strImportCity,".")(1))
				
				If Instr(strImportCity2, strUserCity2)<=0 And Instr(strUserCity2, strImportCity2)<=0 Then
					If IsDull(strUserProvinceName2) Then
						bInvalidAddress = True
					ElseIf Instr(strImportCity2, strUserProvinceName2)<=0 Then
						bInvalidAddress = True
					End If
				End If
			End If
			If Not bInvalidAddress Then
				strCurrStateProvID = GetSafeID(objAddress("STATE_PROVINCEID"), Null) ' User
				strCurrProvinceName = strUserProvinceName2
			End If
		End If
	End If
	strImportLocation = Trim(CStr(arrItemIn(nLocationFact)))

	If Not bInvalidAddress Then
		If Not IMPORT_EXT_NEW_ADDRESS_ALLOW Then
			strImportDistrict = Trim(CStr(arrItemIn(nDistrictFact)))
			' тут возможен баг с заменой имени и адреса если есть одноФИОец живущий в другом мун. районе, но в селе-тёзке
			bCheckAddress = CBool(objNSNET.CheckAddress(strCurrStateProvID, strCurrProvinceName, strImportCity, strImportDistrict, strImportLocation))
			If Not bCheckAddress Then 
				bInvalidAddress = True
			End If
		End If
	End If
	If bInvalidAddress Then
		arrItemIn(nCityFact) = ""
		strWarningLines = strWarningLines & IIF(bOK, strRecord & obLanguage("Import","kWarn2"),  "<br>") &_
		obLanguage("Import",IIF(nFact=1,"kAddressIgnored","kAddress2Ignored"))
		bOK = False
	End If
End Sub
%>
