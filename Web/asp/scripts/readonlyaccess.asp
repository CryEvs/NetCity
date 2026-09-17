<% ' © 2007-2010 IRTech. All rights reserved.
Sub SetReadOnlyAccess()
	If not bUseReadOnlyAccess or readonly Then Exit Sub
	Dim nSessionRole
	nSessionRole = GetSafeLng(obTokenMgr.GetData(strToken, stSessionRole), 0)
	If obTokenMgr.GetData(strToken, stFReadOnlyAccessUpdated) = 0 And Not IsDull(obTokenMgr.GetData(strToken, stReadOnlyAccess)) Then
		readonly = obTokenMgr.GetData(strToken, stReadOnlyAccess)
	Else
		readonly = objNSNET.IsReadOnlyAccessOfSchool(obTokenMgr.GetData(strToken, "SCHOOLID", 0))
		Call obTokenMgr.SetData(strToken, stReadOnlyAccess, readonly)
		Call obTokenMgr.SetData(strToken, stFReadOnlyAccessUpdated, 0)
	End If
End Sub

Sub MarkUserToUpdateAccess()
	Dim arrActiveTokens, token
	arrActiveTokens = obTokenMgr.GetActiveTokens
	For Each token In arrActiveTokens
		Call obTokenMgr.SetData(token, stFReadOnlyAccessUpdated, 1)
	Next
End Sub
%>
