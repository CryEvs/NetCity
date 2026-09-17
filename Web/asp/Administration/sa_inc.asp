<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="sa_constants.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function hasUserRightsOnPage()
	hasUserRightsOnPage = objNSNET.IsAdminOfServer(strUserID)
End Function

Sub onHeadSpecial()
End Sub

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Sub onHead()
	Call onHeadSpecial()
End Sub

' Local deployment patch: bIsRegionEMForSchool was declared in AppFlags_3.10.36146.asp only; version 5.14 still
' uses it in createschool.asp / EditSchool.asp, which fail with "Variable is undefined" (see sa_inc.asp.original).
Dim bIsRegionEMForSchool
bIsRegionEMForSchool = obContext.ServerSettings.SystemSettings.IsRegionEMForSchool

Function CantCreateEO()
	CantCreateEO = obContext.ServerSettings.SystemSettings.IsRegionEMForSchool And Not bIsRegionEMWithOUDOD
End Function
%>
