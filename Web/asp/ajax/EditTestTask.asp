<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
On Error Resume Next

Dim contentElements, objQAComponent, nTestTaskId, nTaskDifficult, nPossiblePoints, strAdditional, nMistake
Dim result
	
Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
	
nMistake = GetSafeLng(Request("MISTAKE"), -1)
nTestTaskId = GetSafeLng(Request("TESTTASKID"), 0)
nTaskDifficult = GetSafeLng(Request("TASKDIFFICULT"), 0)
nPossiblePoints = GetSafeLng(Request("POSSIBLEPOINTS"), 0)
strAdditional = GetSafeStr(Request("ADDITIONAL"),200, "")
contentElements = Request("CE")
	
Dim testTaskResult
Set testTaskResult = objQAComponent.UpdateTestTask(nTestTaskId, nTaskDifficult, contentElements, nPossiblePoints, strAdditional, nMistake)
TestResult testTaskResult, Null

Set result = new JSONResult
rw result
%>
