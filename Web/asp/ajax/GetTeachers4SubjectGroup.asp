<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
	Dim result, objRs, objSG

	Dim nSubjectGroupId, nTeacherOfSubjectId
	Dim nSubjectGroupTeacherId
	nSubjectGroupId = GetSafeLng(Request("SGID"), Null)

	Set objSG = objNSNET.GetSubjectGroupInfo(nSubjectGroupId)
	Set objRs = objNSNET.GetTeachers(objSG("SCHOOLYEARID"), objSG("SUBJECTID"))
	nSubjectGroupTeacherId = objNSNET.GetSubjectGroupTeacher(nSubjectGroupId)
	TestError obLanguage("Filter","kErrLoadingListTeachers")

	Set result = new JSONResult
	If Not objTeachersRs.EOF  Then
		Call result.AddJsonData("teachers", objRs.ToJSON(Array("id", "name"), Array("TEACHERID", "NICKNAME")))
	Else
		Call WriteAjaxErrorResponse( -2, obLanguage("Filter","kNoTeachersForThisSubject"))
	End If

	If Not isDull(nSubjectGroupTeacherId) Then Call result.AddData("teacher", nSubjectGroupTeacherId)

	Response.Write result
%>
