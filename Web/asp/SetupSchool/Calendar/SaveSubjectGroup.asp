<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Dim nSGID, nSIDSChg
Dim strAbbr, strSGName, strSIDs, strOldSIDs, strBack

Sub ReadState()
	nSGID = CLng(GetSafe( "SGID", -1 ))
	strSGName = GetSafe( "SGNAME", "" )
	strAbbr = GetSafe( "PSABBR", "" )
	nSIDSChg = GetSafe("SIDSCHG", 0 )
	strSIDs = GetSafeStr(Request("SIDS"), -1, "" )
	strOldSIDs = GetSafeStr(Request("OLDSIDS"), -1, "" )
	strBack = GetSafe("BACK", "" )
End Sub

Sub Main()
On Error Resume Next

	If nSGID = -1 Then
		nSGID = objNSNET.CreateParentSubjectGroup( strSchoolId, strSGName, strAbbr )
		TestError obLanguage("SetupSchoolCalendar","kServErrSave") & "."
	End If
	Call objNSNET.UpdateParentSubjectGroup(strSchoolId, nSIDSChg, strSGName, strAbbr, nSGID, strSIDs, strOldSIDs )
	TestError obLanguage("SetupSchoolCalendar","kServErrSave")& ". "
	Call obTokenMgr.SetData( strToken, stCommonAlert, CStr(obLanguage("SetupSchoolCalendar","kMsgSave")) )
End Sub

Sub MakeRedirect()
	RedirectTo strBack, null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>
