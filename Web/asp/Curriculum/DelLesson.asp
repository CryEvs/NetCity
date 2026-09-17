<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

'--------- Page Parameters -------
' AT=<Access Token>
' PLANID=<PlanID>
' LID=<LessonID>

Dim strLessonID, strPlanID, bReadOnly
Dim objKTPComponent

Set objKTPComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IKTPComponent")
strLessonID = GetSafeID(Request.Form("LSID"), Null) 
strPlanID = GetSafeStrParam(Request("PLANID"), Null)

Call CheckUserRightsOnEditPlan(strPlanID, strLessonID)
If bReadOnly Then GenerateError(obLanguage("Common","kErrPageAccess"))

Call objKTPComponent.RemoveLesson(strLessonID)
TestError Err.Description

RedirectTo "Planner.asp" ,Array("NOTSWITCH", "Y", "ELEMTYPE","un")%>