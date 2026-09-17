<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/StaffQAdd_inc.asp-->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub ReadStateSpecial()
	strBackPage = GetSafeStr(Request("Back"), 255, "StaffW.asp")
	strPagePostTo = "/asp/SetupSchool/Wizard/SaveStaffInfoQAdd.asp"
End Sub
%>
