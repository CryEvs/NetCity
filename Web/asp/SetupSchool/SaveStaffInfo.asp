<!-- #INCLUDE file="SaveUserInfo.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetRoleGroup()
	GetRoleGroup = RoleGroup_Staffs
End Function

Sub SaveSpecialInfo_WT()
	Dim objStaffRoles
	Dim strECardID, nRes
	Set objStaffRoles = objNSNET.GetStaffSecurityRoles_WT(uow.Transaction)
	Dim arrAssignedRoles, i
	ReDim arrAssignedRoles(lastRole)

	For i = 0 To lastRole
		arrAssignedRoles(i) = False
	Next 

	While Not objStaffRoles.EOF
		arrAssignedRoles(objStaffRoles("ROLEID")) = (Request(objStaffRoles("SHORTNAME")) = "YES")
		objStaffRoles.MoveNext
	Wend
	
	If Not HasUserRight(arUsersEditStaff) Then 
		Call GenerateErrorWithTransaction (uow.Transaction, obLanguage("Common","kErrPageAccess"))
	End If

	If HasUserRight(arProfileDefineSecurityRoles) And (Clng(strEditUserId)=Clng(strUserID)) Then 
		arrAssignedRoles(rlAdmin) = True
	End If

	Call uow.SetStaffRoles(arrAssignedRoles)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))

	Call MarkUserToUpdateRights( strEditUserID )

	If bECardAuthentication And bFullAccessEditing Then
		strECardID = UCase(GetSafeStr(Request("ECardID"), 50, ""))
		nRes = uow.SetStaffECard(strECardID)
		Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchoolUI","kCannotSaveStaffECard"))
		If nRes = -1 Then
			Call GenerateErrorWithTransaction (uow.Transaction, obLanguage("SetupSchoolUI","kErrStaffECardExists"))
		End If
	End If
End Sub
%>
