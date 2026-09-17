<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/teacher.asp" -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'--------- Page Parameters -------
' PlanID - from TM
' UnitID - from TM
' UN=<Unit Name>
' NUNITINPLAN=<NUnitInPlan>
' UD=<Unit Description>

Dim strPlanID
Dim strUnitID, strUnitDescr, strUnitName, nRes
Dim nUnitInPlan
Dim bCreateNew, objUnitInfo
Dim objKTPComponent
Dim bExtraActivity, strEaParam

Set objKTPComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IKTPComponent")

If Not (HasUserRight(arCurrMgmCreateAll) Or HasUserRight(arCurrMgmCreate)) Then GenerateError(obLanguage("Common","kErrPageAccess"))

strPlanID = GetSafeStrParam(obTokenMgr.GetData(strToken,stCurrPlan), Null)
strUnitID = GetSafeStrParam(obTokenMgr.GetData(strToken,stCrMngmUnitID), Null)
bCreateNew = (strUnitID = "-1")
strUnitName = Trim(GetSafeStr(Request.Form("UN"), kUnitNameMaxLen, NULL))
nUnitInPlan = GetSafeLng(Request("NUNITINPLAN"), Null)
strUnitDescr = GetSafeStr(Request.Form("UD"), 2000, "")

If bCreateNew Then 'add
	nRes =  objKTPComponent.CreateUnit(strPlanID, strUnitName, nUnitInPlan, strUnitDescr)
	TestError err.Description
	strUnitID = CStr(nRes)
Else 'edit
	Set objUnitInfo = objNSNET.GetUnitInfo(strUnitID)
	TestError(obLanguage("Curriculum","kCantGetUnitInfo"))
	Call objKTPComponent.EditUnit(strUnitID, strUnitName, nUnitInPlan, strUnitDescr)
	TestError err.Description
End If
	
bExtraActivity = GetSafeBool(Request("extraActivity"), False)
strEaParam = IIf(bExtraActivity, "?extraActivity=true", "")

If bCreateNew Then
	RedirectTo "/angular/school/planning/subjectplans/" & strEaParam, Array("elemType","plan","EXPANDELEM","Y")
Else
	RedirectTo "/angular/school/planning/subjectplans/"  & strEaParam, Array("elemType","unit", "PRESERVETREE","Y")
End If
%>
