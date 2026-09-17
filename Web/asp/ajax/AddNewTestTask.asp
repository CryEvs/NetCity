<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
On Error Resume Next

Dim contentElements, bCreateNewTask, objQAComponent, nTestTaskId, nTestPlanId, nTaskDifficult, nTestLevelId, nUserId, nNumber, nPossiblePoints, nAssignmentId, strAdditional, nMistake
Dim result
	
Call InitializeComponents()
nTestPlanId = GetSafeLng(Request("TESTPLANID"), 0)
nTaskDifficult = GetSafeLng(Request("TASKDIFFICULT"), 0)
nMistake = GetSafeLng(Request("MISTAKE"), -1)
nTestLevelId = GetSafeLng(Request("LEVELID"), 0)
nUserId = GetSafeLng(Request("USERID"), 0)
nAssignmentId = GetSafeLng(Request("AID"), 0)
nNumber = GetSafeLng(Request("NUMBER"), 0)
nPossiblePoints = GetSafeLng(Request("POSSIBLEPOINTS"), 0)
contentElements = Request("CE")
strAdditional = GetSafeStr(Request("ADDITIONAL"),200, "")
	
nTestTaskId = objQAComponent.CreateTestTask(nTestPlanId, nTaskDifficult, contentElements, nUserId, nAssignmentId, nTestLevelId, nNumber, nPossiblePoints, strAdditional, nMistake)

TestError Err.Description

Set result = new JSONResult
Call result.AddJsonData("testPlanId", nTestPlanId)
Call result.AddJsonData("testTaskId", nTestTaskId)
Response.Write result

Sub InitializeComponents()
	Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
End Sub
%>
