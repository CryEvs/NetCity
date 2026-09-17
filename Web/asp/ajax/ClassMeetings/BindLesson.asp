<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/populate.asp -->


<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim result, json, transaction
Dim nClassMeetingId, nLessonId, arrData, nSgId

nClassMeetingId = GetSafeLng(Request("CMID"), Null)
nLessonId = GetSafeLng(Request("LESSONID"), Null)
nSgId = GetSafeLng(Request("sgId"), Null)

If Not HasUserRight(arJournalEditSelf) And Not HasUserRight(arJournalEditAll) Then 
	GenerateError obLanguage("Common","kErrPageAccess")
End If

transaction = objNSNET.GetTransaction()
arrData = convert1Dto2D(Array(nClassMeetingId, nLessonId))
Call objNSNET.SaveClassMeetingLessons_WT(transaction, arrData)
TestErrorWithTransaction transaction, obLanguage("Grade","kErrCantChangeLesson")

objNSNET.CommitTransaction(transaction)
transaction = Empty

Call WriteJsonResult("Тема урока успешно установлена", False, 0)
%>