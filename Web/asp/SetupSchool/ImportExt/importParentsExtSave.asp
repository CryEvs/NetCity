<!-- #INCLUDE FILE="importExtSave_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim arrImportParents
Dim transaction

bFutureMode = False
strBackPage = GetSafeStr(Request("Back"), 255, "Parents.asp")
If IsArray(obTokenMgr.GetData(strToken, "ImportParents") ) Then arrImportParents = obTokenMgr.GetData(strToken,"ImportParents") Else RedirectTo strBackPage, null
strUniqueCode = GetSafeStr(obTokenMgr.GetData(strToken,"strUniqueCode"),4,"1234")

' Определяем STATEPROVID для адреса
Call InitStateProvID()

iSuccess = 0: iErrors = 0
iImport = 0
'objCon.BeginTrans

transaction = objNSNET.GetTransaction()
For i = 0 To UBound(arrImportParents)-1
	Call OnNewImportRecord()

	arrItem = arrImportParents(i)

	strComment = "" 'Trim(arrItem(7))
	strGender = arrItem(6)

	strLastName = arrItem(2)
	strFirstName = arrItem(3)
	strMiddleName = arrItem(4)
	strDisplayName = MakeNickName(strLastName, strFirstName,strMiddleName)
	If Not IsDull(arrItem(5)) Then dtBirthDate = Str2Date( arrItem(5) ) Else dtBirthDate = Null

	strImpUserID = ""
	Set rsSimilar = objNSNET.GetSimilarUsers_WT(transaction, strSchoolID, rlParent, UCase(strLastName), UCase(strFirstName), UCase(strMiddleName), IIf(IsDull(dtBirthDate), Empty, dtBirthDate), strGender, -1)
	If rsSimilar.EOF Then
		nNewUserID = -1
		Err.Clear
		nNewUserID = objNSNET.CreateUser(transaction,strSchoolID, strSchoolYearID,_
			strLastName, objHelper.MD5(CStr(strLastName) & CStr(strUniqueCode)), strDisplayName, strFirstName, strMiddleName, strLastName, strGender, "", "", dtBirthDate, strComment, rlParent)
		If Err <> 0 Then
			Err.Clear
			iErrors = iErrors+1
		Else
			If nNewUserID > 0 Then
				iSuccess = iSuccess+1
				Call objNSNET.SetUserSettings(transaction,nNewUserID, -1, -1, 1, -1,"")
				strImpUserID = CStr(nNewUserID)
			Else
				iErrors = iErrors+1
			End If
		End If
	Else
		If rsSimilar.RecordCount > 1 Then
			Call GenerateErrorWithTransaction (transaction,obLanguage("Import","kParentFIOExists_Grater2") & " (" & obLanguage("Import","kLine") & " " & i & ")")
		End If
		strImpUserID = GetSafeID(rsSimilar("USERID"), Null)
	End If
	
	If strImpUserID <> "" Then
		strNation = ""
		strZipCode	= Trim(CStr(arrItem(7)))
		strHomePhone = Trim(CStr(arrItem(20)))
		strEMail	= Trim(CStr(arrItem(21)))
		strPassSer	= ""
		strPassNum	= ""
		dtPassDate	= ""
		strPassInfo	= ""

		Call SaveCommonUserInfo_WT(transaction)
		Call SaveAddress_WT(transaction)
		Call SaveAttribParams_WT(transaction)
		iImport = iImport + 1
	End If
Next
objNSNET.CommitTransaction(transaction)
'objCon.CommitTrans

strSave = strSave & obLanguage("Import","kSuccessImport") & iImport
strSave = strSave & "\n" & obLanguage("Import","kNewRecords") & iSuccess
If iErrors > 0 Then strSave = strSave & "\n" & obLanguage("Import","kErrCreateNewUser") & iErrors
Call obTokenMgr.SetData(strToken, stWasSaved, strSave)

RedirectTo strBackPage, null

'****************************************************************************************************************
' Save parameters

Function SaveAttribParams_WT(transaction)
	Call SaveAttrParam_WT(transaction, 2010, arrItem(22)) ' Мобильный телефон   ??? Registration

	Call SaveAttrParam_WT(transaction,2001, arrItem(24)) ' Степень родства
	Call SaveAttrParam_WT(transaction,2002, arrItem(25)) ' Образование

	Call SaveAttrParam_WT(transaction, 2003, arrItem(26)) ' Место работы
	Call SaveAttrParam_WT(transaction, 2004, arrItem(27)) ' Должность
	Call SaveAttrParam_WT(transaction, 2005, arrItem(30)) ' Рабочий адрес
	Call SaveAttrParam_WT(transaction, 2006, arrItem(29)) ' Рабочий телефон
	Call SaveAttrParam_WT(transaction, 2007, arrItem(28)) ' Факс
End Function

Sub SaveAddress_WT(transaction)
	' Фактический
	strCity = Trim(CStr(arrItem(8)))
	If Not IsDull(strCity) Then
		strDistrict = Trim(CStr(arrItem(9)))
		strLocation = Trim(CStr(arrItem(10)))
		strHouse = Trim(CStr(arrItem(11)))
		strCorp = Trim(CStr(arrItem(12)))
		strRoom = Trim(CStr(arrItem(13)))
		Call SetUserAddress_WT(transaction, strImpUserID, 1 )
	End If
	' Регистрации
	strCity = Trim(CStr(arrItem(14)))
	If Not IsDull(strCity) Then
		strDistrict = Trim(CStr(arrItem(15)))
		strLocation = Trim(CStr(arrItem(16)))
		strHouse = Trim(CStr(arrItem(17)))
		strCorp = Trim(CStr(arrItem(18)))
		strRoom = Trim(CStr(arrItem(19)))
		Call SetUserAddress_WT(transaction, strImpUserID, 0 )
	End If
End Sub
%>
