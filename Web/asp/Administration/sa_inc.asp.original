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

Function CantCreateEO()
	CantCreateEO = obContext.ServerSettings.SystemSettings.IsRegionEMForSchool And Not bIsRegionEMWithOUDOD
End Function
%>
