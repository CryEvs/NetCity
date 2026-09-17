<!-- #INCLUDE FILE="importExtSave_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim arrImportStaff
Dim transaction

bFutureMode = False
strBackPage = GetSafeStr(Request("Back"), 255, "/angular/school/users/staff/")
If IsArray(obTokenMgr.GetData(strToken,"ImportStaff") ) Then arrImportStaff = obTokenMgr.GetData(strToken,"ImportStaff") Else RedirectTo strBackPage, null
strUniqueCode = GetSafeStr(obTokenMgr.GetData(strToken,"strUniqueCode"),4,"1234")

' Определяем STATEPROVID для адреса
Call InitStateProvID()

iSuccess = 0: iErrors = 0
iImport = 0

transaction = objNSNET.GetTransaction()
For i = 0 To UBound(arrImportStaff)-1
	Call OnNewImportRecord()

	arrItem = arrImportStaff(i)

	strComment = "" 'Trim(arrItem(7))
	strGender = arrItem(5)
	arrRoles = GetRoles()

	strLastName = arrItem(2)
	strFirstName = arrItem(3)
	strMiddleName = arrItem(4)
	strDisplayName = MakeNickName(strLastName, strFirstName,strMiddleName)
	If Not IsDull(arrItem(6)) Then dtBirthDate = Str2Date( arrItem(6) ) Else dtBirthDate = Null

	strImpUserID = ""
	
	Set rsSimilar = objNSNET.GetSimilarUsers_WT(transaction, strSchoolID, 0, UCase(strLastName), UCase(strFirstName), UCase(strMiddleName), IIf(IsDull(dtBirthDate), Empty, dtBirthDate), strGender, -1 )
	If rsSimilar.EOF Then
		nNewUserID = -1
		Err.Clear
		
		nNewUserID = objNSNET.CreateUser(transaction, strSchoolID, strSchoolYearID,_
			strLastName, obMD5.MD5String(CStr(strLastName) & CStr(strUniqueCode)), strDisplayName, strFirstName, strMiddleName, strLastName, strGender, "", "", dtBirthDate, strComment, arrRoles)
		If Err <> 0 Then
			Err.Clear
			iErrors = iErrors+1
		Else
			If nNewUserID > 0 Then
				iSuccess = iSuccess+1
				Call objNSNET.SetUserSettings(transaction, nNewUserID, -1, 0, 1, -1,"")
				strImpUserID = CStr(nNewUserID)
			Else
				iErrors = iErrors+1
			End If
		End If
	Else
		If rsSimilar.RecordCount > 1 Then
			GenerateErrorWithTransaction transaction,obLanguage("Import","kStaffFIOExists_Grater2") & " (" & obLanguage("Import","kLine") & " " & i & ")"
		End If
		strImpUserID = GetSafeID(rsSimilar("USERID"), Null)
	End If
	
	If strImpUserID <> "" Then
		strNation = Trim(CStr(arrItem(7)))
		strZipCode	= Trim(CStr(arrItem(8)))
		strHomePhone = Trim(CStr(arrItem(26)))
		strEMail	= Trim(CStr(arrItem(28)))
		strPassSer	= Trim(CStr(arrItem(9)))
		strPassNum	= Trim(CStr(arrItem(10)))
		dtPassDate	= Trim(CStr(arrItem(11)))
		strPassInfo	= Trim(CStr(arrItem(12)))

		Call SaveCommonUserInfo_WT(transaction)
		Call SaveAddress_WT(transaction)
		Call SaveAttribParams_WT(transaction)
		Call AddParamsToComment_WT(transaction)
		Call SaveAttribParamsExt_WT(transaction)
		iImport = iImport + 1
	End If
Next
'objCon.CommitTrans
objNSNET.CommitTransaction(transaction)

strSave = strSave & obLanguage("Import","kSuccessImport") & iImport
strSave = strSave & "\n" & obLanguage("Import","kNewRecords") & iSuccess
If iErrors > 0 Then strSave = strSave & "\n" & obLanguage("Import","kErrCreateNewUser") & iErrors
Call obTokenMgr.SetData(strToken, stWasSaved, strSave)

RedirectTo strBackPage, null

'****************************************************************************************************************
' Get parameters

' Если сотрудник новый, то у него здесь будет только роль Учитель.
Function GetRoles()
	Dim strTmp, n, arrRoles
	
	ReDim arrRoles(0)
	arrRoles(0) = rlTeacher
	GetRoles = arrRoles
End Function

'****************************************************************************************************************
' Save parameters

Sub SaveAttribParams_WT(transaction)
	Call SaveAttrParam_WT(transaction, 21, arrItem(13)) ' ИНН
	Call SaveAttrParam_WT(transaction, 30, arrItem(29)) ' Табельный №
	Call SaveAttrParam_WT(transaction, 6, arrItem(32))  ' Должность осн.
	Call SaveAttrParam_WT(transaction, 34, arrItem(33)) ' Дата последней аттестации
	Call SaveAttrParam_WT(transaction, 10, arrItem(34)) ' Должность доп.

	Call SaveAttrParam_WT(transaction, 17, arrItem(35)) ' Семейное положение

	Call SaveAttrParam_WT(transaction, 22, arrItem(37)) ' № страхового  пенсионного свидетельства
	Call SaveAttrParam_WT(transaction, 23, arrItem(38)) ' Звание, ученая степень
	Call SaveAttrParam_WT(transaction, 24, arrItem(39)) ' Награды

	Call SaveAttrParam_WT(transaction, 4, arrItem(40)) ' Образование

	Call SaveAttrParam_WT(transaction, 25, arrItem(41)) ' Учебное заведение
	Call SaveAttrParam_WT(transaction, 27, arrItem(42)) ' Дата выдачи диплома
	Call SaveAttrParam_WT(transaction, 29, arrItem(43)) ' Специальность по диплому

	Call SaveAttrParam_WT(transaction, 32, arrItem(44)) ' Категория работника
	Call SaveAttrParam_WT(transaction, 33, arrItem(45)) ' Подразделение
	Call SaveAttrParam_WT(transaction, 35, arrItem(46)) ' Наличие ПК дома

	Call SaveAttrParam_WT(transaction, 48, arrItem(48)) ' Дата выхода на пенсию
End Sub

' date(number) ' Tog... only
Sub SaveAttribParamsExt_WT(transaction)
	Dim strArriveInfo, nPos
	Dim strDate, strNumber
	
	strArriveInfo = Trim(CStr(arrItem(30)))
	If IsDull(strArriveInfo) Then
		Exit Sub
	End If
	
	strDate = ""
	strNumber = ""
	nPos = InStr(strArriveInfo, "(")
	If nPos > 0 Then
		strDate = Left(strArriveInfo, nPos - 1)
		strNumber = Mid(strArriveInfo, nPos + 1)
		If Right(strNumber, 1) = ")" Then
			strNumber = Left(strNumber, Len(strNumber) - 1)
		End If
	Else
		strDate = strArriveInfo
	End If

	strDate = Trim(strDate)
	strNumber = Trim(strNumber)

	If Not IsDull(strDate) Then
		Call SaveAttrParam_WT(transaction, 2, strDate) ' Дата приема
	End If
	
	If Not IsDull(strNumber) Then
		Call SaveAttrParam_WT(transaction,  3, strNumber) ' № приказа
	End If
End Sub

Sub SaveAddress_WT(transaction)
	' Фактический
	strCity = Trim(CStr(arrItem(14)))
	If Not IsDull(strCity) Then
		strDistrict = Trim(CStr(arrItem(15)))
		strLocation = Trim(CStr(arrItem(16)))
		strHouse = Trim(CStr(arrItem(17)))
		strCorp = Trim(CStr(arrItem(18)))
		strRoom = Trim(CStr(arrItem(19)))
		Call SetUserAddress_WT(transaction, strImpUserID, 1 )
	End If
	' Регистрации
	strCity = Trim(CStr(arrItem(20)))
	If Not IsDull(strCity) Then
		strDistrict = Trim(CStr(arrItem(21)))
		strLocation = Trim(CStr(arrItem(22)))
		strHouse = Trim(CStr(arrItem(23)))
		strCorp = Trim(CStr(arrItem(24)))
		strRoom = Trim(CStr(arrItem(25)))
		Call SetUserAddress_WT(transaction, strImpUserID, 0 )
	End If
End Sub

Sub AddParamsToComment_WT(transaction)
	Dim strComment, strNewComment, bExit, bSave
	Dim strParamVal
	
	bExit = False
	strComment = objNSNET.GetUserComment_WT(transaction, strImpUserID, strSchoolYearID)
	If IsDull(strComment) Then
		strComment = ""
	End If

	strNewComment = ""
	bSave = False

	strParamVal = Trim(CStr(arrItem(27)))
	If Not IsDull(strParamVal) Then
		strNewComment = IIf(strComment = "", "", vbCrLf) & UCase(obLanguage("Common","kMobilePhone")) & ": " & strParamVal
		If Len(strComment & strNewComment) > kAttrParamMaxLen Then
			strNewComment = ""
			bExit = True
		Else
			strComment = strComment & strNewComment
			bSave = True
		End If
	End If

	If Not bExit Then
		strParamVal = Trim(CStr(arrItem(31)))
		If Not IsDull(strParamVal) Then
			strNewComment = IIf(strComment = "", "", vbCrLf) & UCase(obLanguage("Import","kSeniority")) & ": " & strParamVal
			If Len(strComment & strNewComment) > kAttrParamMaxLen Then
				bExit = True
			Else
				strComment = strComment & strNewComment
				bSave = True
			End If
		End If
	End If

	If Not bExit Then
		strParamVal = Trim(CStr(arrItem(36)))
		If Not IsDull(strParamVal) Then
			strNewComment = IIf(strComment = "", "", vbCrLf) & UCase(obLanguage("Import","kFamilyStat")) & ": " & strParamVal
			If Len(strComment & strNewComment) > kAttrParamMaxLen Then
				bExit = True
			Else
				strComment = strComment & strNewComment
				bSave = True
			End If
		End If
	End If
	
	If Not bExit Then
		strParamVal = Trim(CStr(arrItem(47)))
		If Not IsDull(strParamVal) Then
			strNewComment = IIf(strComment = "", "", vbCrLf) & UCase(obLanguage("Import","kMaternityLeave")) & ": " & strParamVal
			If Len(strComment & strNewComment) > kAttrParamMaxLen Then
				bExit = True
			Else
				strComment = strComment & strNewComment
				bSave = True
			End If
		End If
	End If
	
	If bSave Then
		Call objNSNET.SetUserComment_WT(transaction, strImpUserID, strSchoolYearID, strComment)
	End If
End Sub
%>
