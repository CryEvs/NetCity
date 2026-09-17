<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE file="Photo_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strBackPage, strEditUserID, nRoleGroup
Dim arrUsers, i, userCnt, nDeletedCnt
Dim strAction
Dim bStaff, strStaffName, strResultMessage

strBackPage = Request("BackPage")
If IsDull(strBackPage) Then strBackPage = Request("Back")
strAction = GetSafeStr(Request("ACT"), -1, "delete")

nRoleGroup = Clng( Request("ROLEGROUP") )

bStaff = False
Select Case nRoleGroup
Case RoleGroup_Students, RoleGroup_Parents
	If Not HasUserRight(arUsersEditStudents) Then GenerateError obLanguage("Common","kErrPageAccess")
Case RoleGroup_Staffs
	If Not HasUserRight(arUsersEditStaff) Then GenerateError obLanguage("Common","kErrPageAccess")
	bStaff = True
End Select

ReDim arrUsers(Request.Form("deluser").Count-1)
userCnt = UBound(arrUsers) + 1

For i = 0 To userCnt - 1
	strEditUserID = GetSafeID(Request.Form("deluser")(i+1), NULL)
	If strEditUserID = strUserID Then GenerateError obLanguage("SetupSchool","kErrRemoveSelf")
	arrUsers(i) = strEditUserID
Next

If bStaff Then
	strStaffName = objNSNET.GetUserNickName(strEditUserID)
End If

Select Case strAction
Case "delete"
	Call DoDeleting()
	If bStaff Then
		If userCnt > 1 Then
			strResultMessage = obLanguage("SetupSchool","kEmployeesWereDeleted")
		Else
			strResultMessage = obLanguage("SetupSchool","kStaffWasDeleted")
		End If
	End If
Case "dismiss"
	Call DoDismissing()
	strResultMessage = obLanguage("SetupSchool","kStaffWasDismissed")
Case "recruit"
	Call DoRecruiting()
	strResultMessage = obLanguage("SetupSchool","kStaffWasRecruited")
Case Else
	GenerateError obLanguage("Common","kInvalidParameter")
End Select

If bStaff Then
	If userCnt = 1 Then strResultMessage = Replace(strResultMessage, "%", strStaffName)
	Call obTokenMgr.SetData(strToken, stWasSaved, strResultMessage)
End If

If bIsAjaxCall Then 
	Call WriteJsonResult(nDeletedCnt, False, 0)
Else
	RedirectTo strBackPage, null
End If

Sub DoDeleting()
	Dim objUserInfo

	on error resume next
	nDeletedCnt = objNSNET.DeleteUsers(arrUsers, nRoleGroup, strCurrYearID)
	TestError obLanguage("SetupSchool","kCantDeleteUser")

	If nDeletedCnt < userCnt Then
		Select Case nRoleGroup
		Case RoleGroup_Students : GenerateError obLanguage("SetupSchool","kErrDelStudentUsed",strFunctionalityType)
		Case RoleGroup_Parents : GenerateError obLanguage("Common","kParent") &" "&obLanguage("SetupSchool","kHaveChildren",strFunctionalityType)
		Case Else : GenerateError obLanguage("Common","kTeacher",strFunctionalityType) &" "&obLanguage("SetupSchool","kHaveClasses",strFunctionalityType)
		End Select
	End If
	If nRoleGroup = RoleGroup_Parents Then Call obTokenMgr.SetData(strToken, stWasSaved, obLanguage("SetupSchoolUI","kRecordsWasDelete"))
End Sub

Sub DoDismissing()
	On Error REsume Next
	strEditUserID = arrUsers(0)
	Call objNSNET.DismissStaff(strEditUserID, strSchoolID, strCurrYearID)
	TestError obLanguage("SetupSchool","kCantDismissStaff")
End Sub

Sub DoRecruiting()
	On Error REsume Next
	strEditUserID = arrUsers(0)
	Call objNSNET.RecruitStaff(strEditUserID, strSchoolID, strCurrYearID)
	TestError obLanguage("SetupSchool","kCantRecruitStaff")
End Sub

Sub WriteAjaxErrorResponse( nErrorCode, strMessage )
	Dim result, i
	Set result = new JSONResult
	result.IsError = True
	result.ErrorCode = nErrorCode
	Call result.AddData("deletedCount", nDeletedCnt)
	result.Message = Replace(strMessage, "\n", CHR(10))

	Response.ContentType = "application/json"
	Response.Status = 500
	Response.Clear
	Response.Write result
	Response.End
End Sub
%>
