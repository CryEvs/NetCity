<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE file="SaveInfoQAdd.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Function isHelpAvailable()
	isHelpAvailable = False
End Function

Sub specialReadState
	If Not HasUserRight(arUsersEditStudents) Then GenerateError obLanguage("Common","kErrPageAccess")
	nCurrRole = rlParent
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolUI","kAddNewUser")
End Function

Sub specialDraw
	strDisplayName = strLastName
	If strFirstName <> "" Then 
		strDisplayName = strDisplayName & " " & Left(strFirstName,1) & "."
		If strMiddleName <> "" Then strDisplayName = strDisplayName & " " & Left(strMiddleName,1) & "."
	End If
	Call DrawUser( obLanguage("Common","kParent"),strLoginName, strPassword, strDisplayName, strLastName, strFirstName, strMiddleName, strGender, strEMail, strPCM, dtBirthday, rlParent, rlParent, strPWDExpired, True, True )
End Sub
%>
