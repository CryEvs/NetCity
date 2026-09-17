<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->
<% ' © 2007-2017 IRTech. All rights reserved.
SetScriptTimeOut 900

Const kAttrParamMaxLen = 4000
Const kMultiDelim = "|"
Const kDimens = 63

Dim nNewUserID, strGender, strLastName, strDisplayName, strFirstName, strMiddleName, strComment
Dim dtBirthDate, arrRoles', strTmp, n
Dim arrItem, i, iErrors,  iSuccess, strSave, strBackPage
Dim strUniqueCode
Dim rsSimilar, strImpUserID
Dim strNation
Dim strZipCode, strHomePhone, strMobilePhone, strPrefCm, strEMail
Dim strPassSer, strPassNum, strPassSubdiv, dtPassDate, strPassInfo
Dim strStateProvID, strProvinceName, strSchoolCity
Dim strCity, strDistrict, strLocation, strHouse, strCorp, strRoom, nAddressID, strLocationType
Dim iImport
Dim nFutureYearId
Dim strNewParamsComment

' Коллекция атрибутивных параметров
Dim attribParams
Set attribParams = Server.CreateObject("NetCity.Storage")

Dim objHelper
Set objHelper = comHelper.AspHelper

Function SaveCommonUserInfo_WT(transaction)
	Dim nRes

	If Not IsDull(strNation) Then
		nRes = objNSNET.GetNationIdByName(transaction, strNation)
		If nRes = 0 Then
			Call AddOneParamToComment(obLanguage("Common","kNation"), strNation)
		Else
			Call editUserInfo.SetNation(nRes)
		End If
	End If

	If IsDull(dtPassDate) Then dtPassDate = Null Else dtPassDate = Str2Date(dtPassDate)
	Call editUserInfo.SetCommonShortInfo(strHomePhone, strEMail, dtBirthDate, strMiddleName)
	Call editUserInfo.SetPassport(strPassSer, strPassNum, strPassSubdiv, dtPassDate, strPassInfo)
End Function

Sub InitStateProvID()
	Dim objSchoolInfo, objCityInfo
	Dim nImportCityID

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objSchoolInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")

	nImportCityID = GetSafeID(objSchoolInfo("CITYID"), Null)
	Set objCityInfo = objNSNET.GetCityInfo(nImportCityID)
	If objCityInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")

	strStateProvID = GetSafeID(objCityInfo("STATE_PROVINCEID"), Null) ' School
	strProvinceName = GetSafeStr(objCityInfo("PROVINCENAME"), -1, "") ' School
	strSchoolCity = GetSafeStr(objCityInfo("NAME"), -1, "") ' School
End Sub

Sub SetUserAddress_WT(transaction, strAddrUserID, nIsFactAddress)
	' todo - move to editUserInfo
	Dim objInfo, strAddrID, objAddress, strUserCity
	Dim strCurrStateProvID, strCurrProvinceName

	If Instr(strCity, strSchoolCity)>0 Then
		' error ATO_TYPE ???
		strCurrStateProvID = CLng(strStateProvID)
		strCurrProvinceName = strProvinceName
	Else
		If bNewUser Then Exit Sub ' invalid address

		Set objAddress = objNSNET.GetUserAddress_WT(transaction, strAddrUserID, nIsFactAddress)
		If objAddress.EOF Then Exit Sub ' invalid address

		strCurrStateProvID = GetSafeLng(objAddress("STATE_PROVINCEID"), Null) ' User
		strCurrProvinceName = GetSafeStr(objAddress("PROVINCENAME"), -1, "") ' User
		If CLng(strStateProvID) <> strCurrStateProvID Then Exit Sub ' invalid address in other region
	End If

	Call editUserInfo.TrySetUserAddressByRefNames(strCurrStateProvID, strCurrProvinceName, strCity, strDistrict, strLocation, strLocationType, strHouse, strCorp, strRoom, nIsFactAddress, strZipCode)
End Sub

' Добавляет атрибутивный параметр в массив
Sub AddParam(paramId, paramType, strVal, dtVal, nValId, arrVals)
	If Not IsDull(strVal) Then
		attribParams(paramId) = strVal
	ElseIf Not IsNull(dtVal) Then
		attribParams(paramId) = dtVal
	ElseIf Not IsNull(nValId) Then
		attribParams(paramId) = nValId
	ElseIf IsArray(arrVals) Then
		If Ubound(arrVals) = -1 Then Exit Sub
		If Not ( Ubound(arrVals) = 0 And IsEmpty( arrVals(0) ) ) Then attribParams(paramId) = arrVals
	End If
End Sub

Function SaveAttrParam_WT(transaction, strParamID, strParamVal)
	Dim objParamInfo, objParamInfo2
	Dim nMaxLen, strParamType, bParamType_M
	Dim strVal, dtVal, nVal_ID
	Dim strParamTitle
	Dim strEditable, strParamIDTmp
	Dim arrParamVals, arrVals, j, k ' i - нельзя, чтобы пересекался с глобальным i!

	strParamVal = Trim(strParamVal)

	Set objParamInfo = objNSNET.GetUserParameterInfo_WT(transaction, strParamID)
	If objParamInfo.EOF Then Call GenerateErrorWithTransaction (transaction,obLanguage("Common","kInvalidParameter"))

	strParamType = GetSafeStr(objParamInfo("PARAMTYPE"), 1, Null)
	bParamType_M = (strParamType = "M" Or strParamType = "R")

	strVal = Null
	dtVal = Null
	nVal_ID = Null
	If strParamType = "S" Or strParamType = "A" Then
		strVal = strParamVal
		nMaxLen = GetSafeLng(objParamInfo("EXTRAINFO"), Null)
		If Len(strVal) > nMaxLen Then
			Call GenerateErrorWithTransaction (transaction,obLanguage("Import","kParamValueTooLong") & " """ & objParamInfo("TITLE") & """ (" & obLanguage("Import","kLine") & ": " & i + 1 & ", " & obLanguage("Import","kMaxParamLen") & " - " & nMaxLen & ")")
		End If
	ElseIf strParamType = "D" Then
		If Not IsDull(strParamVal) Then dtVal = Str2Date(strParamVal)
		strParamVal = Null
	ElseIf strParamType = "L" Or strParamType = "M" Or strParamType = "P" Or strParamType = "R" Then ' сейчас предполагается, что значение типа "множественный выбор" может быть только одно
		If strParamType = "P" Or strParamType = "R" Then
			'Получает параметр нижнего уровня
			strParamIDTmp = GetSafeID(objParamInfo("EXTRAINFO"), Null)
			Set objParamInfo2 = objNSNET.GetUserParameterInfo_WT(transaction, strParamIDTmp)
			If objParamInfo2.EOF Then
				Call GenerateErrorWithTransaction (transaction,obLanguage("Common","kInvalidParameter"))
			End If
			strEditable = GetSafeStr(objParamInfo2("EDITABLE"), 1, Null)
		Else
			strParamIDTmp = strParamID
			strEditable = GetSafeStr(objParamInfo("EDITABLE"), 1, Null)
		End If

		If bParamType_M Then
			arrParamVals = Split(strParamVal, kMultiDelim)
		Else
			ReDim arrParamVals(0)
			arrParamVals(0) = strParamVal
		End If
		strParamVal = Null
		ReDim arrVals(UBound(arrParamVals))

		j = -1
		For k = 0 To UBound(arrParamVals)
			nVal_ID = GetListItemID(transaction, strParamIDTmp, strEditable, arrParamVals(k))

			'If IsDull(nVal_ID) Then - #14189. Здесь как бы реализация чекбокса. Для чекбокса надо продолжать далее выставлять пустое значение (отличие от списка).
			If IsDull(nVal_ID) And strParamIDTmp <> "1063" Then
				If Not IsDull(arrParamVals(k)) Then
					strParamTitle = GetSafeStr(objParamInfo("TITLE"), -1, "")
					Call AddOneParamToComment(strParamTitle, arrParamVals(k))
				End If
			Else
				j = j + 1
				arrVals(j) = nVal_ID
			End If
		Next

		nVal_ID = Null
		If j <> -1 Then
			ReDim Preserve arrVals(j)
			If Not bParamType_M Then
				nVal_ID = arrVals(0)
			End If
		Else
			Exit Function
		End If
	ElseIf strParamType = "B" Then
		If strParamVal = obLanguage("Common","kYes") Then
			strVal = "1"
		ElseIf strParamVal = obLanguage("Common","kNo") Then
			strVal = "0"
'		Else
'			strVal = "-1"
		End If
	Else
		Call GenerateErrorWithTransaction (transaction,obLanguage("Common","kInvalidParameter"))
	End If

	Call AddParam(strParamID, strParamType, strVal, dtVal, nVal_ID, arrVals)
End Function

' 4.08.2008. Теперь при импорте справочники не редактируются, т.е. новые значения не добавляются.
Function GetListItemID(transaction, strParamID, strEditable, strVal)
	Dim nItemID, strItemSchoolID

	strVal = Trim(strVal)
	strItemSchoolID = IIf(strEditable = "Y", strSchoolID, "-1")
	nItemID = objNSNET.GetUserInfoListItem_WT(transaction, strParamID, strItemSchoolID, strVal)
	If nItemID = 0 Then
		If CStr(strParamID) = "4" Or CStr(strParamID) = "2002" Then ' Образование
			nItemID = GetUserInfoListItemPart(transaction, strParamID, strItemSchoolID, strVal)
		End If
	End If

	If nItemID = 0 Then
		GetListItemID = ""
	Else
		GetListItemID = CStr(nItemID)
	End If
End Function

Sub AddOneParamToComment(strParamTitle, strParamVal)
	If Not IsDull(strNewParamsComment) Then strNewParamsComment = strNewParamsComment & vbCrLf
	strNewParamsComment = strNewParamsComment & UCase(strParamTitle) & ": " & strParamVal
End Sub

Sub SetComment_WT(transaction)
	Dim strParamsComment
	
	If IsDull(strNewParamsComment) Then Exit Sub

	'Получает текущий комментарий
	strParamsComment = objNSNET.GetUserComment_WT(transaction, strImpUserID, strCurrYearID)
	If IsDull(strParamsComment) Then strParamsComment = ""

	'Сохраняет в комментарий несуществующие параметры у импортируемого пользователя
	strNewParamsComment = IIf(strParamsComment = "", "", vbCrLf) & strNewParamsComment
	If Len(strParamsComment & strNewParamsComment) <= kAttrParamMaxLen Then
		strParamsComment = strParamsComment & strNewParamsComment
		Call editUserInfo.SetComment(strParamsComment)
	End If
End Sub

Function GetUserInfoListItemPart(transaction, strParamID, strItemSchoolID, strVal)
	Dim objItems, strCurrItem

	GetUserInfoListItemPart = 0
	Set objItems = objNSNET.GetUserEditableParamItems(transaction, strParamID, strItemSchoolID)
	While Not objItems.EOF
		strCurrItem = GetSafeStr(objItems("ITEMNAME"), -1, Null)
		If InStr(UCase(strVal), UCase(strCurrItem)) > 0 Then
			GetUserInfoListItemPart = GetSafeLng(objItems("ITEMID"), Null)
			Exit Function
		End If
		objItems.MoveNext
	WEnd
End Function

Function GetPrefCM(strPCM)
	strPCM = Trim(strPCM)
	If strPCM = obLanguage("Import","kPaperMail") Then
		GetPrefCM = "P"
	ElseIf strPCM = obLanguage("Import","kEMail") Then
		GetPrefCM = "E"
	Else
		GetPrefCM = "C"
	End If
End Function

Sub OnNewImportRecord()
	strNewParamsComment = ""
End Sub
%>
