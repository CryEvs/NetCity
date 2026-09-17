<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	PLANID=<PlanID>
'	UID=<UnitID>

Dim strPlanID, strUnitID, bReadOnly, objKTPComponent

strUnitID = GetSafeID(Request.Form("UNID"), NULL)
strPlanID = GetSafeStrParam(Request("PLANID"), Null)
Set objKTPComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IKTPComponent")

' check user rights here
Call CheckUserRightsOnEditPlan(strPlanID, strUnitID)
If bReadOnly Then	GenerateError(obLanguage("Common","kErrPageAccess"))
	
Call objKTPComponent.RemoveUnit(strUnitID)
TestError(obLanguage("Curriculum","kCantDelUnit"))

RedirectTo "Planner.asp" ,Array("NOTSWITCH", "Y", "ELEMTYPE","pl")
%>
