<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE Virtual="/asp/setupschool/StaffInfoEdit_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const kSaveUserFormScript = "/asp/SetupSchool/Wizard/SaveUserForm.asp"

Sub DrawAttachments()
End Sub

Sub DrawPhoto()
End Sub

Sub DrawSpecialButtons()
End Sub

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStaff
End Function

Sub SpecialReadState()
	bWizard = True
	bFullAccessEditing = True
	bMayMoveStaff = False
End Sub

Function GetRoleGroup()
	GetRoleGroup = RoleGroup_Staffs
End Function

Function GetUserListPage()
	bWizard = True
	GetUserListPage = "/asp/SetupSchool/Wizard/StaffW.asp"
End Function
%>

