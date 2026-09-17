<% ' © 2007-2008 IRTech. All rights reserved.
Dim jmp
Dim EmSchoolId

strToken = CStr(Request("AT"))
If IsDull( strToken ) Then
	Response.Redirect GetJumpPage()
End If
Function onCurrentWorkingUsers()
	If IsEmpty(strSchoolID) Then
		EmSchoolId = obTokenMgr.GetData(strToken, "EMSCHOOLID")
		If IsEmpty(EmSchoolId) Then
			onCurrentWorkingUsers = obTokenMgr.SessionsCounter.GetCount(strSchoolID)
		Else 
			onCurrentWorkingUsers = obTokenMgr.SessionsCounter.GetCount(EmSchoolId)
		End If
	Else onCurrentWorkingUsers = obTokenMgr.SessionsCounter.GetCount(strSchoolID)
	End If
End Function

Call GetTokenParams()
%>