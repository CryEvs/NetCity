<!-- #INCLUDE FILE="../headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim nUserId, strLogin, strLastName, strFirstName, strMiddleName
Dim getSettingsRes, serverSettings, strAction, objInfo, bUserEditHimself
Dim obComponent, bSAdmin
Dim isValid
Dim bRightOnStaff, bRightOnStudentsParents
Dim isUserStaff, isUserParent, isUserStudent


strAction			= GetSafeStr(Request("act"), -1, "prepare")
nUserId				= GetSafeLng(Request("userId"), -1)
bUserEditHimself	= nUserId = CLng(strUserID)


If Not bUserEditHimself Then

	isValid = False

	bSAdmin = objNSNET.IsAdminOfServer(strUserID)
	If bSAdmin Then
		isValid = objNSNET.HasUserRolesInActiveSchool(nUserId, Array(rlAdmin, rlEmAdmin), -1)

	ElseIf bIsEducManager Then
		isValid = HasUserRight(arEMUsersEdit)
		If isValid Then
			isValid = objNSNET.IsEmUser(nUserId, strEMID)
		End If

	Else
		' School

		bRightOnStaff = HasUserRight(arUsersEditAccountStaff)
		bRightOnStudentsParents = HasUserRight(arUsersEditAccountStudentsParents) Or HasUserRight(arUsersEditAccountStudentsParentsInClass)

		isUserStaff = objNSNET.IsUserStaffInActiveSchool(nUserId, strSchoolID, strCurrYearID)
		isUserParent = objNSNET.HasUserRolesInActiveSchool(nUserId, Array(rlParent), strSchoolID)
		isUserStudent = objNSNET.HasUserRolesInActiveSchool(nUserId, Array(rlStudent), strSchoolID)

		If isUserStudent Then
			isValid = bRightOnStudentsParents
		ElseIf isUserStaff And isUserParent Then
			isValid = bRightOnStaff Or bRightOnStudentsParents
		ElseIf isUserStaff  Then
			isValid = bRightOnStaff
		ElseIf isUserParent Then
			isValid = bRightOnStudentsParents
		End If

	End If

	If Not isValid Then GenerateError obLanguage("Common","kErrPageAccess")
End If


If strAction = "prepare" Then
	Dim result

	Set obComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IServerSettingsComponent")
	Set result = new JSONResult

	Set objInfo = objNSNET.GetUserInfo(nUserId)
	TestError Err.Description

	Set getSettingsRes = obComponent.GetServerSettings()
	TestResult getSettingsRes, Null
	Set serverSettings = getSettingsRes.Data

	strLogin		= ""
	strLastName		= ""
	strFirstName	= ""
	strMiddleName	= ""

	If Not objInfo.EOF Then
		strLogin		= UCase(objInfo("LOGINNAME"))
		strLastName		= UCase(objInfo("LASTNAME"))
		strFirstName	= UCase(objInfo("FIRSTNAME"))
		strMiddleName	= GetSafeStr(UCase(objInfo("MIDDLENAME")), -1, "")
	End If

	Call result.AddData("loginName", strLogin)
	Call result.AddData("lastName", strLastName)
	Call result.AddData("firstName", strFirstName)
	Call result.AddData("middleName", strMiddleName)
	Call result.AddData("restrictNumericPasswords", serverSettings.SecuritySettings.RestrictNumericPasswords)

	Response.Write result
Else 'save
	Dim strNewPassword, strOldPassword, setPassResult, obSecurityComponent, strBackPage

	Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")

	strNewPassword		= GetSafeStr(Request("NP3"), 35, NULL)
	strBackPage			= GetSafeStr(Request("backPage"), -1, "")

	If bUserEditHimself Then
		strOldPassword = GetSafeStr(Request("OP2"), 35, NULL)
		Set setPassResult = obSecurityComponent.ChangePassword(nUserId, strOldPassword, strNewPassword)
	Else
		Set setPassResult = obSecurityComponent.SetPassword(nUserId, strNewPassword)
	End If

	TestResult setPassResult, obLanguage("Common","kUnexpErr")

	Call WriteJsonResult(setPassResult.Message, False, 0)
End If%>