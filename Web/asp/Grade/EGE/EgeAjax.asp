<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<%On Error Resume Next
	
Dim strAction, objEgeComponent, json
	
Call InitEgeComponent()

strAction = Request("Action")
strCurrYearId = Request("SchoolYearId")
	
If strAction = "Load" Then
	Dim bUnknownPersons

	bUnknownPersons = (Request("UNKNOWN") = 1)
	json = objEgeComponent.GetEgePersonsJson(strCurrYearId, bUnknownPersons)
ElseIf strAction = "Update" Then
	Dim nPersonId, nStudentId

	nPersonId = GetSafeLng(Request("PersonId"), Null)
	nStudentId = GetSafeLng(Request("StudentId"), Null)
	Call objEgeComponent.RelateEgePerson(strCurrYearId, nPersonId, nStudentId)
	json = "{""Result"" : ""OK"", ""Record"": { ""PersonId"": " & nPersonId & ", ""Student"": " & nStudentId & "}}"
ElseIf strAction = "LoadClasses" Then
	json = objEgeComponent.GetSchoolClassesJson(strCurrYearId)
ElseIf strAction = "LoadStudents" Then
	Dim nClassId

	nClassId = GetSafeLng(Request("ClassId"),-1)
	json = objEgeComponent.GetClassStudentsJson(nClassId)
End If

If Err.number <> 0 Then
	json = "{""Result"" : ""ERROR"", ""Message"": """ & Err.Description & """ }"
End IF

Response.Write json

Sub InitEgeComponent()
	Set objEgeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IEgeComponent")
	TestError obLanguage("ServAdmin", "kCantCreateObj")
End Sub%>