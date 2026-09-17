<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<%On Error Resume Next
Dim objQAComponent
Dim json, lessonid, unitid, gradeId
Dim strSectionSystem, strSubjectGroupId, strTestTaskId, certificationType

Call InitializeComponents()
strSectionSystem = Request("SECTIONSYSTEM")
	
If strSectionSystem = "TESTPLAN" Then
	strSubjectGroupId = GetSafeStr(Request("SGID"), -1, "")
	strTestTaskId = GetSafeLng(Request("TESTTASKID"), 0)

	Set json = objQAComponent.GetContentElementsForTaskBySubjectGroupId(strTestTaskId, strSubjectGroupId, strCurrYearId)

	TestError Err.Description
	Response.Write json.Data
ElseIf strSectionSystem = "TESTPLANFORDIAGNOSTICWORK" Then
	Dim taskId, subjectId, globalYearId, minGrade
	taskId = GetSafeLng(Request("TESTTASKID"), 0)
	subjectId = GetSafeLng(Request("SUBJECTID"), 0)
	globalYearId = GetSafeLng(Request("GLOBALYEARID"), 0)
	minGrade =  GetSafeLng(Request("MINGRADE"), -1)

	Set json = objQAComponent.GetContentElementsForTaskByGlobalYear(taskId, subjectId, globalYearId, minGrade)

	TestError Err.Description
	Response.Write json.Data
ElseIf strSectionSystem = "LESSON" Then
	lessonid = GetSafeLng(Request("LESSONID"),kDefValue)
	unitid = GetSafeLng(Request("UNITID"),kDefValue)
	gradeId = GetSafeLng(Request("GRADEID"),kDefValue)
	
	If gradeId = -1 Then
		gradeId = objQAComponent.GetUnitGrade(unitId)
	End If
	
	Set json = objQAComponent.GetContentElementsForLesson(lessonid, unitid, gradeId)

	TestError Err.Description
	Response.Write json.Data
End If

Sub InitializeComponents()
	Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
End Sub
%>