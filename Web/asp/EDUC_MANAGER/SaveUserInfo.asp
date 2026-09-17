<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.


Dim strEditUserID
Dim strGender, strLoginName, strFirstName, strMiddleName, strLastName, _
	strLoginType, strEToken, strDisplayName, strEMail, strPCM, dtmBirthDate, strZipCode, _
	strHomePhone, strComments, strBackPage, strReturnPage
Dim strUserRoleId
Dim strWinLogon, strSertificateThumbprint
Dim nUserID
Dim bFullAccessEditing, bStudent, bParent
Dim strAddInfoOnSave
Dim objUserInfo
Dim uow, component

strBackPage = "/angular/em/users/"
strEditUserID = GetSafeID(Request("UID").Item, NULL )
bFullAccessEditing = (Request("FullAccessEditing") = 1)

If bFullAccessEditing Then
	strGender = obLanguage("Common","kMaleLet")
	strLoginName = Trim(GetSafeStr( Request("LON"), kMaxLogin, "" ))
	If IsDull(strLoginName) Then
		Set objUserInfo = objNSNET.GetUserInfo(strEditUserID)
		strLoginName = GetSafeStr(objUserInfo("LOGINNAME"), -1, "")
	End If
	strFirstName = Trim(GetSafeStr( Request("FN"), kMaxLastname, "" ))
	strMiddleName = Trim(GetSafeStr( Request("MN"), kMaxLastname, "" ))
	strLastName = Trim(GetSafeStr( Request("LN"), kMaxLastname, NULL ))
	strDisplayName = Trim(GetSafeStr( Request("DN"), kDisplayNameLen, NULL ))
	strEMail = Trim(GetSafeStr( Request("EM"), kMaxLengthEmail, "" ))
	strPCM = GetSafeStr( Request("PCM"), 20, "C" )
	If strPCM <> "C" AND strPCM <> "E" AND strPCM <> "P" Then GenerateError(obLanguage("SetupSchool","kErrBadParam"))
	strLoginType = GetSafeLng(Request("TAUTH"), kLoginType_Usual )
	strEToken = IIf(strLoginType = kLoginType_Usual, "", Trim(GetSafeStr( Request("ETN"), 12, "" )))
	dtmBirthDate = GetSafeNullDate(Request("BDT"))
	strWinLogon = ""
	strSertificateThumbprint = Trim( GetSafeStr( Request("STP"), 60, "" ) )
	If Not IsDull(strSertificateThumbprint) Then
		nUserID = objNSNET.IsUserWithThumbprintExists( strSertificateThumbprint, strEditUserID )
		TestError obLanguage("SetupSchool","kErrUserWithThumbprintInfo")
		If nUserID > 0 Then 
			strErrMsg = obLanguage("SetupSchool","kErrThumbprintExists")
			GenerateError(strErrMsg & " "& obLanguage("Common","kUser") &": " & objNSNET.GetUserNickName(nUserID ))
		End If
	End If

	strHomePhone = GetSafeStr( Request("HT"), 30, "" )
	strUserRoleId = GetSafeLng (Request("UR"),0)
	If objNSNET.DoesEMLoginNameAlreadyExist(strEditUserID, strEMID, strLoginName) Then GenerateError(obLanguage("SetupSchool","kErrNameExists"))
	If objNSNET.DoesEMDisplayNameAlreadyExist(strEditUserID, strEMID, strDisplayName) Then GenerateError(obLanguage("SetupSchool","kErrNickExists"))
	If strEditUserID = "-1" Then GenerateError(obLanguage("SetupSchool","kErrUnknownID"))
End If

If (Clng(strLoginType) = kLoginType_EToken) Or (Clng(strLoginType) = kLoginType_Family) Then
	If Not objNSNET.IsSerialNumberExist(strEToken) Then GenerateError(obLanguage("SetupSchool","kErrSerialNumberNotExist") & " "& obLanguage("Common","kSerialNumberEToken") &": " & strEToken)
	If objNSNET.IsSerialNumberUsing(strEToken, strEditUserID, True) Then GenerateError(obLanguage("SetupSchool","kErrSerialNumberUsing") & " "& obLanguage("Common","kSerialNumberEToken") &": " & strEToken)
End If

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
Set uow = component.GetEditUserInfoWork(strUserId, strEditUserID, -1, -1, -1)

If bFullAccessEditing Then
	Call uow.SetCommonInfo(strLoginName, strFirstName, strMiddleName,  false, strLastName, strDisplayName, strEMail, strPCM, strGender, dtmBirthDate, strHomePhone, strWinLogon, strSertificateThumbprint, strLoginType, strEToken)

	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))

	Call uow.SetUserSettings(-1, -1, CLng(Request("ChangePW")), -1 , "")
End If

Call SaveAttributeParams_WT()
If strUserRoleId > 0 Then 
	Call objNSNET.SetEMUserRolesAndDistrict_WT(uow.Transaction, strEditUserID, strUserRoleId)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))
End if

Call uow.Commit()
Call uow.Dispose()

Call obTokenMgr.SetData(strToken, stUsersStaffUserID, strEditUserID)
Call WriteJsonResult(CStr(obLanguage("SetupSchool","kUserInfoIsSaved")) & IIf(IsEmpty(strAddInfoOnSave), "", vbLf & strAddInfoOnSave), False, 0 )

Sub SaveAttributeParams_WT()
	Dim actualParams, param
	Dim strParamID, strParamType, strParamValue
	Dim arrParamInfo

	Set actualParams = Server.CreateObject("NetCity.Storage")

	On Error Resume Next

	For Each param in Request.Form
		If InStr(param, "P_") = 1 Then
			strParamValue = CStr(Request(param))
			arrParamInfo = Split(param, "_", 4)
			strParamID = arrParamInfo(1)
			strParamType = arrParamInfo(2)
			If Not strParamType = "M" Then
				'multichoice params save separately
				If ( (strParamType = "L" Or strParamType = "P") And strParamValue = "-1") Then
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

	Call uow.SetAttributeParams(actualParams)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))
End Sub

Sub GenerateError(strErrorMsg)
	GenerateHTMLError strErrorMsg, strBackPage, strToken
End Sub

Sub ValidateOnSaving(transaction)
End Sub
%>
