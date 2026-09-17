<!-- #INCLUDE file="SaveInfoQAdd.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Sub specialReadState
	If Not HasUserRight(arUsersEditStaff) Then GenerateError obLanguage("Common","kErrPageAccess")
End Sub

Sub specialMain
End Sub

Sub specialDraw
	Dim objRoles, strRoleID, strRole_Req, arrRole_Req
	Dim arrRoles, n
	ReDim arrRoles(6)
	Set objRoles = objNSNET.GetStaffSecurityRoles()
	n = 0
	While Not objRoles.EOF
		strRoleID = objRoles("ROLEID")
		strRole_Req = Request("submit_" & objRoles("SHORTNAME"))
		arrRole_Req = Split(strRole_Req, Chr(1))
		If UBound(arrRole_Req)>0 Then strRole_Req = arrRole_Req(qa_index)
		If strRole_Req = "1" Then arrRoles(n) = strRoleID: n = n + 1
		objRoles.MoveNext
	Wend

	If n > 0 Then ReDim Preserve arrRoles(n-1) Else arrRoles = Empty

	strDisplayName = strLastName
	If strFirstName <> "" Then
		strDisplayName = strDisplayName & " " &  strFirstName
		If strMiddleName <> "" Then strDisplayName = strDisplayName & " " & strMiddleName
	End If

	Call DrawUser( obLanguage("Common","kStaff"),strLoginName, strPassword, strDisplayName, strLastName, strFirstName, strMiddleName, strGender, strEMail, strPCM, dtBirthday, arrRoles, 0, strPWDExpired, True, True )
End Sub
%>
