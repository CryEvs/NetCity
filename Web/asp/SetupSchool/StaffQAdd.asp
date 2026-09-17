<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/StaffQAdd_inc.asp-->

<% ' © 2007-2008 IRTech. All rights reserved.
Sub onHead()
	onSpecialHead
End Sub

Sub ReadStateSpecial()
	strBackPage = GetSafeStr(Request("Back"), 255, "/angular/school/users/staff/")
	strPagePostTo = "/asp/SetupSchool/SaveStaffInfoQAdd.asp"
End Sub

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStaff
End Function
%>
