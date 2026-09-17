<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strSGIDs

Sub ReadState()
	strSGIDs = GetSafeStr( Request("SGIDS"), -1, "0" )
End Sub

Sub Main()
	On Error Resume Next
	Call objNSNET.DeleteParentSubjects(strSGIDs )
	If Err <> 0 Then GenerateError kServErrDel
	Call obTokenMgr.SetData( strToken, stCommonAlert, kMsgDel )
End Sub

Sub MakeRedirect()
	RedirectTo "/asp/SetupSchool/Calendar/SubjectGroups.asp", null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>
