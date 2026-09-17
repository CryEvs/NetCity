<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim i, strAID, arrData, n
Dim bDelAllResults
Dim dtCurTime, strSubjClassID
Dim result

If Not HasUserRight(arJournalEditAll) And Not HasUserRight(arJournalEditSelf) Then GenerateError obLanguage("Common","kErrPageAccess")

strAID = GetSafeLng(Request("ADEL"), Null)
bDelAllResults = (GetSafeLng(Request("DelAllResults"), 0) = 1)

If Not IsDull(strAID) Then
	ReDim arrData(0)
	arrData(0) = strAID
	
	Call objNSNET.RemoveAssignments(arrData, bDelAllResults)
	TestError obLanguage("Grade","kErrCantDeleteAssign")
End If

Set result = new JSONResult
result.Message = obLanguage("Grade","kAssignDeleteSuccess")
Response.Write result%>