<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim nTestPlanId, result, objQAComponent

On Error Resume Next

Set result = new JSONResult
nTestPlanId = GetSafeLng(Request("TestPlanId"), 0)
	
Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
Call objQAComponent.DeleteTestPlan(nTestPlanId)

If Err.number <> 0 Then
	result.IsError = True
	result.Message = obLanguage("QualityAssessment", "kErrDeleteTestPlan")
	Call result.AddData("Result", "ERROR")
End If

Response.Write result
%>
