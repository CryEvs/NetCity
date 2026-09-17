<!-- #INCLUDE FILE="../../headerajax.asp" -->
<!-- #INCLUDE FILE="../../scripts/FilterClassMeetings.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim result, json
Dim objNextCmList, bRestrictAddHomeAssign
Dim nSGId, nCMId

nSGId = GetSafeLng(Request("SGID"), Null)
nCMId = GetSafeLng(Request("CMID"), Null)

TestError "Ошибка в параметрах запроса"

Set objNextCmList = objNSNET.GetSubjectGroupNextClassMeetings(nSGId, nCMId)
TestError Err.Description

ProcessCmName objNextCmList, False
TestError Err.Description

json = comHelper.DataSetAdapterHelper.ToJson(objNextCmList, _
	Array("id", "day", "lessonid", "name", Array("homeAssignment", Array("id", "name", "classassignment", "weight", "description"))), _
	Array("classmeetingid", "day", "lessonid", "CM_NAME", Array(Empty, Array("assignmentid", "assignmentname", "classassignment", "weight", "description")))_
)

TestError "Ошибка сериализации ответа"

Set result = new JSONResult
Call result.AddJsonData("nextClassMeetings", json)

rw result%>