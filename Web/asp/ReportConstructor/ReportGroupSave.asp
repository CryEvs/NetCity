<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kGroupNameMaxSize = 100

Dim strGroupID, strGroupName, nRes
Dim arrGroups, i, cnt
Dim nOwnerCode, strOwnerID

If Not hasUserRightsOnPage Then GenerateError obLanguage("Common","kErrPageAccess")

If Request("ACT") = "delete" Then
	cnt = Request("delGroup").Count
	If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	ReDim arrGroups(cnt-1)
	For i = 1 To cnt
		arrGroups(i-1) = Request("delGroup")(i)
	Next
	Call objNSNETWork.RemoveReportGroups(arrGroups)
	TestError obLanguage("Constructor","kCantDeleteReportGroups")
Else
	strGroupID = GetSafeID(Request("GroupID"), Null)
	strGroupName = Trim(GetSafeStr(Request("GROUPNAME"), kGroupNameMaxSize, Null))
	
	If bIsEducManager Then
		nOwnerCode = 2
		strOwnerID = strEMID
	Else
		nOwnerCode = 1
		strOwnerID = strSchoolID
	End If
	
	nRes = objNSNETWork.SaveReportGroup(strGroupID, strGroupName, nOwnerCode, strOwnerID)
	TestError obLanguage("Constructor","kCantSaveReportGroup")
	If nRes = -1 Then GenerateError obLanguage("Constructor","kReportGroupExists")
End If

RedirectTo "ReportGroups.asp", Null

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = True Else hasUserRightsOnPage = HasUserRight(arReportsUseReportConstructor)
End Function
%>
