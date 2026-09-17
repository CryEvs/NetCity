<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim strEditUserID
Dim strGender, strLoginName, strTitle, strFirstName, strMiddleName, bNoMiddleName, strLastName, _
	strLoginType, strEToken, strDisplayName, strEMail, strPCM, dtmBirthDate, strZipCode, _
	strHomePhone, strComments, strBackPage, strReturnPage, strMobilePhone, nNation, bShowMPhone
Dim strWinLogon, strSertificateThumbprint
Dim nUserID
Dim strScrollTop
Dim bFullAccessEditing, bStudent, bParent
Dim strErrMsg, bCanLogin
Dim uow, component
Dim strAddInfoOnSave
Dim nChangePW
Dim objUserInfo
Dim bAddSchoolPartEdit
Dim bAddSchoolParentEdit

strScrollTop = GetSafeStr(Request("ScrollTop"), -1, "")
strBackPage = GetSafeStr(Request("BACK"), 255, obTokenMgr.GetData(strToken,"BACK"))
strReturnPage = GetSafeStr(obTokenMgr.GetData(strToken, stBackPage), 255, Null)
strEditUserID = GetSafeID(Request("UID").Item, NULL )

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")

If Not component.CheckPermissions(strEditUserID, GetRoleGroup(), Asc("W")) Then
	GenerateError obLanguage("Common","kErrPageAccess")
End If

bStudent = objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlStudent )
bParent = objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlParent) And InStr(UCASE(strBackPage),"PARENT") > 0
bCanLogin = CLng(strFunctionalityType)<>kFuncType_PreSchool Or Not bStudent

bFullAccessEditing = (Request("FullAccessEditing") = 1)
bAddSchoolPartEdit = (Request("AddSchoolPartEdit") = 1)
bAddSchoolParentEdit = (Request("AddSchoolStudentEdit") = 1)

If (bFullAccessEditing Or bAddSchoolParentEdit) And Not bAddSchoolPartEdit Then

	strGender = GetSafeStr( Request("Gender"), 1, NULL )
	If strGender <> obLanguage("Common","kMaleLet") And strGender <> obLanguage("Common","kFemaleLet") Then 
		GenerateError(obLanguage("SetupSchool","kErrBadGender"))
	End If
	If bCanLogin Then
		strLoginName = Trim(GetSafeStr(Request("LON"), kMaxLogin, ""))
		If IsDull(strLoginName) Then
			Set objUserInfo = objNSNET.GetUserInfo(strEditUserID)
			strLoginName = GetSafeStr(objUserInfo("LOGINNAME"), -1, "")
		End If
	Else 
		strLoginName = ""
	End If
	strFirstName = Trim(GetSafeStr( Request("FN"), kMaxLastname, "" ))

	bNoMiddleName = GetSafeLng( Request("NoMiddleName"), 0 ) = 1
	strMiddleName = IIf(bNoMiddleName, "", Trim(GetSafeStr( Request("MN"), kMaxLastname, "" )))

	strLastName = Trim(GetSafeStr( Request("LN"), kMaxLastname, NULL ))
	strDisplayName = Trim(GetSafeStr( Request("DN"), kDisplayNameLen, NULL ))
	strEMail = Trim(GetSafeStr( Request("EM"), 80, "" ))
	strPCM = GetSafeStr( Request("PCM"), 20, "C" )
	If strPCM <> "C" AND strPCM <> "E" AND strPCM <> "P" Then 
		GenerateError(obLanguage("SetupSchool","kErrBadParam"))
	End If
	strLoginType = GetSafeLng(Request("TAUTH"), kLoginType_Usual )
	strEToken = IIf(strLoginType = kLoginType_Usual, "", Trim(GetSafeStr( Request("ETN"), 12, "" )))
	dtmBirthDate = GetSafeNullDate(Request("BDT"))

	If bCanLogin Then
		If Not isNull(Request("WLN")) Then strWinLogon = Trim(Request("WLN"))
		strSertificateThumbprint = Trim( GetSafeStr( Request("STP"), 60, "" ) )
	Else
		strWinLogon = ""
		strSertificateThumbprint = ""
	End If

	strZipCode = GetSafeStr( Request("ZC"), 10, "" )
	nNation = GetSafeID( Request("CITIZENSHIP"), NULL )

	strHomePhone = GetSafeStr( Request("HT"), 30, "" )
	bShowMPhone = CBool(GetSafeStr(Request("SMP"), -1, ""))
	strMobilePhone = GetSafeStr(Request("MT"), 20, "")

	If objNSNET.DoesDisplayNameAlreadyExist(strEditUserID, strCurrYearID, strDisplayName) Then GenerateError(obLanguage("SetupSchool","kErrNickExists"))
	If bCanLogin Then
		If objNSNET.DoesLoginNameAlreadyExist(strEditUserID, strCurrYearID, strLoginName) Then GenerateError(obLanguage("SetupSchool","kErrNameExists"))
		If Not IsDull(strWinLogon) Then
			nUserID = objNSNET.IsWinLogonUserExists( strWinLogon, strEditUserID )
			TestError obLanguage("SetupSchool","kErrWinLogonUserInfo")
			If nUserID > 0 Then strErrMsg = obLanguage("SetupSchool","kErrWinLogonExists")
		End If
		If nUserID = 0 And Not IsDull(strSertificateThumbprint) Then
			nUserID = objNSNET.IsUserWithThumbprintExists( strSertificateThumbprint, strEditUserID )
			TestError obLanguage("SetupSchool","kErrUserWithThumbprintInfo")
			If nUserID > 0 Then strErrMsg = obLanguage("SetupSchool","kErrThumbprintExists")
		End If
		If nUserID > 0 Then
			GenerateError(strErrMsg & " "& obLanguage("Common","kUser") &": " & objNSNET.GetUserNickName(nUserID ))
		End If
		If (Clng(strLoginType) = kLoginType_EToken) Or (Clng(strLoginType) = kLoginType_Family) Then
			If Not objNSNET.IsSerialNumberExist(strEToken) Then GenerateError(obLanguage("SetupSchool","kErrSerialNumberNotExist") & " "& obLanguage("Common","kSerialNumberEToken") &": " & strEToken)
			If objNSNET.IsSerialNumberUsing(strEToken, strEditUserID, True) Then GenerateError(obLanguage("SetupSchool","kErrSerialNumberUsing") & " "& obLanguage("Common","kSerialNumberEToken") &": " & strEToken)
		End If
	End If
End If
strComments = GetSafeStr( Request("CO"), 4000, Empty )

Set uow = component.GetEditUserInfoWork(strUserId, strEditUserID, strSchoolId, strCurrYearId, strCurrGlobalYearId)

TestError obLanguage("SetupSchool","kErrCannotUpdate")

If (bFullAccessEditing Or bAddSchoolParentEdit) And Not bAddSchoolPartEdit Then
	Call PreSaveUserInfo_WT(uow.Transaction)
	Call uow.SetCommonInfo(strLoginName, strFirstName, strMiddleName, bNoMiddleName, strLastName, _
		strDisplayName, strEMail, strPCM, strGender, dtmBirthDate, strHomePhone, strWinLogon, strSertificateThumbprint, strLoginType, strEToken)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))

	If Not bAddSchoolParentEdit Then
		Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))
	End If

	If bCanLogin Then
		nChangePW = GetSafeLng(Request("ChangePW"), 0)
		If nChangePW >= 0 Then
			Call uow.SetUserSettings(-1, -1, nChangePW, -1 , "")
			Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))
		End If
	End If
End If

If bFullAccessEditing Then
	Call uow.SetComment(strComments)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))
End If

Call SaveAttributeParams_WT()

If bShowMPhone Then Call uow.SetMobilePhone(strMobilePhone)

' Здесь вроде не надо использовать bAddSchoolParentEdit. Для Родителя в SaveSpecialInfo_WT - происходит регистрация моб. тлф.
If bFullAccessEditing Then
	Call uow.SetCitizenship(nNation)
	Call SaveSpecialInfo_WT()
End If

Call ValidateOnSaving(uow.transaction)
Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))

Call uow.Commit()
Call uow.Dispose()

Call obTokenMgr.SetData(strToken, stUsersStaffUserID, strEditUserID)
Call WriteJsonResult(CStr(obLanguage("SetupSchool","kUserInfoIsSaved")) & IIf(IsEmpty(strAddInfoOnSave), "", vbLf & strAddInfoOnSave), False, 0 )

Sub SaveAttributeParams_WT()
	Dim actualParams, param
	Dim strParamID, strParamType, strParamValue
	Dim arrParamInfo

	On Error Resume Next

	Set actualParams = Server.CreateObject("NetCity.Storage")

	For Each param in Request.Form
		If InStr(param, "P_") = 1 Then
			strParamValue = CStr(Request(param))
			arrParamInfo = Split(param, "_", 4)
			strParamID = arrParamInfo(1)
			strParamType = arrParamInfo(2)
			If Not strParamType = "M" Then
				'multichoice params save separately
				If ( (strParamType = "L" Or strParamType = "P" Or strParamType = "B") And strParamValue = "-1") Then
					strParamValue = ""
				End If ' for list it is NULL

				If strParamType = "D" Then
					actualParams(strParamID) = GetSafeNullDate(strParamValue) ' Date value
				Else
					actualParams(strParamID) = strParamValue ' common value (non Date type)
				End If
			End If
		End If
	Next

	If actualParams.Count > 0 Then
		Call uow.SetAttributeParams(actualParams)
		Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))
	End If
End Sub

Sub PreSaveUserInfo()
End Sub

Sub PreSaveUserInfo_WT(transaction)
End Sub

Sub SaveSpecialInfo_WT(transaction)
End Sub

Sub ValidateOnSaving(transaction)
End Sub
%>
