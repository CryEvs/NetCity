<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim result, json
Dim nAssignmentId, nSubjectGroupId, nClassMeetingId, nIssueClassMeetingId, nAssignmentType, strAssignmentName, dtAssignmentDate, nClassAssignment
Dim arrStudents
Dim transaction
Dim objCmInfoRs

On Error Resume Next

nSubjectGroupId =  GetSafeLng( Request("SGID"), Null )
nClassMeetingId = GetSafeLng( Request("CMID"), Null )
nIssueClassMeetingId = GetSafeLng( Request("ISSUECMID"), Null )
nAssignmentId = GetSafeLng(Request("ASSIGNMENTID"), 0 )
strAssignmentName = Trim(GetSafeStr(Request("AN"), kAssignmentNameLength, Null))
nAssignmentType = PreDefinedAssignmentType_HomeWork
nClassAssignment = 1 ' По умолчанию, создаем задание с необязательной оценкой
ReDim arrStudents(-1)

If Not HasUserRight(arJournalEditSelf) And Not HasUserRight(arJournalEditAll) Then 
	GenerateError obLanguage("Common","kErrPageAccess")
End If

Set objCmInfoRs = objNSNET.GetClassMeetingInfo(nClassMeetingId)
If objCmInfoRs.EOF Then
	GenerateError obLanguage("Grade","kErrCreateAssignment")
End If

dtAssignmentDate = objCmInfoRs("DAY")

transaction = objNSNET.GetTransaction()
Set result = new JSONResult

If nAssignmentId = 0 Then
	nAssignmentId = objNSNET.CreateManualAssignment_WT(transaction, kActivityID_Manual, strAssignmentName, _
		nAssignmentType, False, "", dtAssignmentDate, dtAssignmentDate, _
		nClassMeetingId, nIssueClassMeetingId, nSubjectGroupId, _
		nClassAssignment, arrStudents, strSchoolId, -1, -1)
	TestErrorWithTransaction transaction, obLanguage("Grade","kErrCreateAssignment")
	result.Message = "Домашнее задание добавлено"
Else
	Call objNSNET.EditAssignmentName_WT(transaction, nAssignmentId, strAssignmentName)
	TestErrorWithTransaction transaction, obLanguage("Curriculum", "kCantEditAssignment")
	result.Message = "Домашнее задание отредактировано"
End If

objNSNET.CommitTransaction(transaction)
transaction = Empty

Call result.AddData("assignmentId", nAssignmentId)
Call result.AddData("assignmentName", strNewAssignmentName)

rw result%>