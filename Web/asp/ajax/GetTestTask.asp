<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
On Error Resume Next

Dim objQAComponent, strTestTask, nTestTaskId
	
Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
nTestTaskId = GetSafeLng(Request("TESTTASKID"), 0)

strTestTask = objQAComponent.GetTestTask(nTestTaskId)
TestError Err.Description

Response.Write strTestTask%>
