<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim result, json
Dim nAssignmentId, nSubjectGroupId

nAssignmentId = GetSafeLng(Request("ASSIGNMENTID"), Null)

'todo. передавать sgid
nSubjectGroupId = GetSafeLng(obTokenMgr.GetData(strToken, stCurrSubjClass), Null)

If Not HasUserRight(arJournalEditSelf) And Not HasUserRight(arJournalEditAll) Then 
	GenerateError obLanguage("Common","kErrPageAccess")
End If

Call objNSNET.RemoveLaAssignments(Array(nAssignmentId), True)
TestError obLanguage("Grade","kErrCantDeleteAssign")

Call WriteJsonResult(obLanguage("Grade","kAssignDeleteSuccess"), False, 0)%>