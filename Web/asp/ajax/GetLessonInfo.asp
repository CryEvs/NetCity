<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->

<% ' © 2007-2016 IRTech. All rights reserved.
On Error Resume Next

Dim result
Dim objLessonInfo, strLessonInfo, attachmentIds
Dim nLessonId

nLessonId = GetSafeLng(Request("LESSONID"), Null)

strLessonInfo = objNSNET.GetLessonInfoJson(nLessonId)
attachmentIds = objNSNET.GetAttachmentIdsForLesson(nLessonId)

If Not IsDull(attachmentIds) Then
	Call AppendStateDocs(attachmentIds & ",")
End If

TestError Err.Description

Set result = new JSONResult
Call result.AddJsonData("lessonInfo", strLessonInfo)

Response.Write result%>