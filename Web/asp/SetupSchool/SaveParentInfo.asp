<!-- #INCLUDE file="SaveUserInfo.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/SchoolSettings_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SMS_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/SaveParentsMobile_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetRoleGroup()
	GetRoleGroup = RoleGroup_Parents
End Function

If Not bIsDebug Then On Error Resume Next

Sub SaveSpecialInfo_WT()
	If CLng(strFunctionalityType) <> kFuncType_Add Then
		Call RegParentMobilePhone(uow.transaction)
	End If
End Sub
%>
