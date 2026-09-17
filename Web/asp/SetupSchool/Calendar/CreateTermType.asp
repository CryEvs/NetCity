<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CreateTermType_inc.asp-->

<% ' © 2007-2014 IRTech. All rights reserved.

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arEditSchoolTermTypes)
End Function

Sub onHead()
	onSpecialHead
End Sub%>
