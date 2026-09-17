<!-- #INCLUDE FILE=../../header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/EditSubjectTeachers_inc.asp-->

<% ' © 2007-2015 IRTech. All rights reserved.

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arUsersEditStaff)
End Function

Sub onHead()
	onSpecialHead
End Sub
%>
