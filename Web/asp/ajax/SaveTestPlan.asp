<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
On Error Resume Next

Dim objQAComponent, arrTaskIds, arrTaskNumbers, nTestPlanId, result
Dim nTestLevelId, bUpdateTestLevel

Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
Set result = new JSONResult
	
nTestPlanId = GetSafeLng(Request("TESTPLANID"), 0)
bUpdateTestLevel = GetSafeLng(Request("UPDATELEVEL"), 0)

If bUpdateTestLevel = 1 Then
	nTestLevelId = GetSafeLng(Request("TESTLEVELID"), 0)
	Call objQAComponent.UpdateTestLevel(nTestPlanId, nTestLevelId)
Else
	arrTaskIds = Request("TASKIDS")
	arrTaskNumbers = Request("TASKNUMBERS")

	Call objQAComponent.UpdateTestPlan(arrTaskIds, arrTaskNumbers, nTestPlanId)
End If

If Err.number <> 0 Then
	result.IsError = True
	result.Message = Err.Description
	Call result.AddData("Result", "ERROR")
End IF
Response.Write result%>
