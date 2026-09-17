<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim nSubjectFieldId, bAssignedSubjectsExists
Dim result
	
nSubjectFieldId = GetSafeLng(Request("subjectFieldId"), 0)

bAssignedSubjectsExists = objNSNET.GetSubjFieldAssignInfo(nSubjectFieldId, 0)
TestError Err.Description

Set result = new JSONResult
Call result.AddData("bAssignedSubjectsExists", bAssignedSubjectsExists)
Response.Write result%>