<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<%On Error Resume Next

Dim strAction, json, strTeacherId, strTermTypeId, strSubjectId, strIupLevelId, strNewNameSG
Dim objSGComponent
Dim arrMergeIds, strMergeIds, result
Dim strMergeGrades, arrMergeGrades
Dim bCheckAvailableName

Set objSGComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISubjectGroupComponent")

strAction = Request("Action")
strTeacherId = Request("teacherId")
strSchoolYearId = Request("schoolYearId")
strTermTypeId = Request("termTypeId")
strSubjectId = Request("subjectId")
strIupLevelId = Request("iupLevelId")
strMergeIds = Request("MergeIds")
arrMergeIds = Split(strMergeIds, ",")
strNewNameSG = Request("NewNameSG")

If strAction = "LoadSubjects" Then
	json = objSGComponent.GetMergeSubjects(strTeacherId, strSchoolYearId)
ElseIf strAction = "Merge" Then
	If Not objSGComponent.CheckSubjectGroupTerms(arrMergeIds) Then
		GenerateError obLanguage("ClassManagement", "kCheckSubjectGroupsMustMatchTerms")
	Else
		Call objSGComponent.MergeSubjectGroups(arrMergeIds, strNewNameSG)
		TestError obLanguage("ClassManagement", "kErrUnionSubjectGroups")
		Set json = new JSONResult
	End If
ElseIf strAction = "Check" Then
	strMergeGrades = Request("Grades")
	arrMergeGrades = Split(strMergeGrades, ",")
	strNewNameSG = objSGComponent.MakeSubjectGroupName(strSubjectId, strNewNameSG)
	Dim nConflictGrade
	bCheckAvailableName = objSGComponent.CheckAvailableName(strNewNameSG, CLng(strSchoolYearId), arrMergeGrades, arrMergeIds, nConflictGrade)
	TestError obLanguage("ClassManagement", "kErrUnionSubjectGroups")
	Set json = new JSONResult
	Call json.AddData("bCheckAvailableName", bCheckAvailableName)
	Call json.AddData("conflictGrade", nConflictGrade)
ElseIf strAction = "LoadSubjectGroups" Then
	json = objSGComponent.GetSubjectGroups(strSubjectId, strTermTypeId, strIupLevelId, strSchoolYearId, strTeacherId)
End If
If Err.number <> 0 Then
	json = "{""Result"" : ""ERROR"", ""Message"": """ & Err.Description & """ }"
End IF
Response.Write json
%>