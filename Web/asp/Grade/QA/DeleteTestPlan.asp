<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim nTestPlanId, strBackPage
Dim objQAComponent

On Error Resume Next

strBackPage = Request("BackPage")	
nTestPlanId = GetSafeLng(Request("TESTPLANID"), 0)
	
Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
Call objQAComponent.DeleteTestPlan(nTestPlanId)
TestError "Ошибка при удалении плана контрольной работы"

Call obTokenMgr.SetData(strToken, stWasSaved, "План контрольной работы успешно удален")
RedirectTo strBackPage, null
%>
