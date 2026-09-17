<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim nRoleID

If Not HasUserRight(arProfileDefineSecurityRoles) Then GenerateError obLanguage("Common","kErrPageAccess")

nRoleID = GetSafeLng(Request("ROLEID"),GetSafeLng(obTokenMgr.GetData(strToken, stSecurityRolesCurRole),Null))

Call MarkUserToUpdateRights(-1)

Call objNSNET.SetDefaultSchoolRoleRights(strSchoolID, nRoleID)
TestError obLanguage("Secure","kErrUpdateRights")

Call obTokenMgr.SetData(strToken,stSecurityRolesWasSaved, "Y")
Response.Redirect "/asp/SetupSchool/SecurityRolesSetup.asp?AT=" &strToken 
%>
