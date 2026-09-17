<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim result, json
Dim objLessonList
Dim nSgId
nSgId = GetSafeLng(Request("SGID"), Null)

Set objLessonList = objNSNET.GetSubjectGroupLessonList(nSgId)
TestError Err.Description

json = objLessonList.ToJson( _
	Array("id", "hours", "lessonFullName", "lessonName", "homeAssignment", "lastStudyDay", "hoursStudied", "studied"), _
	Array("LESSONID", "HOURS", "LESSONFULLNAME", "LESSONNAME", "HOMEASSIGNMENT", "lastStudyDay", "hoursStudied", "studied"))
TestError "ошибка сериализации ответа"

Set result = new JSONResult
Call result.AddJsonData("lessonList", json)

rw result%>