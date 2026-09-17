<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next

Dim result
Dim strLessonList
Dim nCMId

nCMId = GetSafeLng(Request("CMID"), 0)

strLessonList = objNSNET.GetHomeAssignmentLessons(nCMId)

TestError Err.Description

Set result = new JSONResult
Call result.AddJsonData("lessonList", strLessonList)

Response.Write result%>