
<% ' © 2007-2008 IRTech. All rights reserved.

Const kSplitter		= "|"

Function HasRightOnEditForum(nThreadID)
	Dim bHasRight

	bHasRight = False
	If HasUserRight(arForumEdit) Then
		bHasRight = True
	ElseIf objNSNET.IsForumModerator(strSchoolID, strUserID, -1) Then
		bHasRight = True
	ElseIf nThreadID <> -1 And nThreadID <> 0 Then
		bHasRight = objNSNET.IsForumModerator(strSchoolID, strUserID, nThreadId)
	End If
	HasRightOnEditForum = bHasRight
End Function

Sub CheckRightOnEditForum(nThreadID)
	If Not HasRightOnEditForum(nThreadID) Then GenerateError obLanguage("Common","kErrPageAccess")
End Sub
%>
