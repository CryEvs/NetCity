<!-- #INCLUDE FILE="../headerajax.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
On Error Resume Next

Dim objQAComponent, nCodeBookGradeSchoolId, nCodeBookEGEId, nCodeBookOGEId, nSubjectId, bExistsGradeSchool, bExistsEGE, bExistsOGE, result
	
Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")

nCodeBookGradeSchoolId = GetSafeLng(Request("CODEBOOKGRADESCHOOLID"), 0)
nCodeBookEGEId = GetSafeLng(Request("CODEBOOKEGEID"), 0)
nCodeBookOGEId = GetSafeLng(Request("CODEBOOKOGEID"), 0)
nSubjectId = GetSafeLng(Request("SUBJECTID"), 0)
	
Set result = new JSONResult

If nCodeBookGradeSchoolId <> 0 Then
	bExistsGradeSchool = objQAComponent.ExistsLessonsOrTestTasksForSubject(nCodeBookGradeSchoolId, nSubjectId, strSchoolYearId)
	Call result.AddJsonData("bExistsGradeSchool", IIF(bExistsGradeSchool, 1, 0))
Else
	Call result.AddJsonData("bExistsGradeSchool", 0)
End If

If nCodeBookEGEId <> 0 Then
	bExistsEGE = objQAComponent.ExistsLessonsOrTestTasksForSubject(nCodeBookEGEId, nSubjectId, strSchoolYearId)
	Call result.AddJsonData("bExistsEGE", IIF(bExistsEGE, 1, 0))
Else
	Call result.AddJsonData("bExistsEGE", 0)
End If

If nCodeBookOGEId <> 0 Then
	bExistsOGE = objQAComponent.ExistsLessonsOrTestTasksForSubject(nCodeBookOGEId, nSubjectId, strSchoolYearId)
	Call result.AddJsonData("bExistsOGE", IIF(bExistsOGE, 1, 0))
Else
	Call result.AddJsonData("bExistsOGE", 0)
End If

TestError Err.Description
Response.Write result%>
