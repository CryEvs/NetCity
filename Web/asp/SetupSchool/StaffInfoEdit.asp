<!-- #INCLUDE Virtual="/asp/header1.asp" -->
<!-- #INCLUDE Virtual="/asp/setupschool/StaffInfoEdit_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const kSaveUserFormScript = "/asp/SetupSchool/SaveUserForm.asp"

Function GetRoleGroup()
	GetRoleGroup = RoleGroup_Staffs
End Function

Sub GetUserRightsToEditing
	bMayMoveStaff = obTokenMgr.GetData(strToken, stMayMoveStaff)
	bFullAccessEditing = False
	If HasUserRight(arUsersEditStaff) Then bFullAccessEditing = True
End Sub

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStaff
 	bTabInternalPage = True
End Function

Sub SpecialWriteState()

	Call obTokenMgr.SetData(strToken, "ROLEID", 0)
	Call obTokenMgr.SetData(strToken, stSavePage, "SaveStaffInfo.asp")
End Sub

Function GetParamStatus(strParamName, strSYDepend)
	Dim nStatus
	nStatus = GetParamStatusCommon(strParamName, strSYDepend)
	If ((kShowReadonlyOldParameters And IsPortfolioParam(strParamName)) Or (strParamName = "REG_ADD_BY_PLACE_STR")) And (nStatus = kParamStatus_Common) Then 
		'Параметры, связанные с аттестацией, переведены пока в режим ReadOnly
		nStatus = kParamStatus_RO
	End If

	GetParamStatus = nStatus
End Function



%>
