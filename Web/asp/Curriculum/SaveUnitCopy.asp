<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/teacher.asp" -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'--------- Page Parameters -------
' AT=<Access Token>
' PLANID=<Plan ID>
' UnitID - from TM
' UN=<New Unit Name>
' NUNITINPLAN=<NUnitInPlan>

On Error Resume Next

Dim strPlanID
Dim strUnitID, strNewUnitID, strNewUnitName
Dim nodeUnit, cmdUnitLessons
Dim nUnitInPlan
Dim objKTPComponent
Dim bExtraActivity, strEaParam

Set objKTPComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IKTPComponent")

If Not (HasUserRight(arCurrMgmCreateAll) Or HasUserRight(arCurrMgmCreate)) Then GenerateError(obLanguage("Common","kErrPageAccess"))

strPlanID = GetSafeStrParam(Request("PLANID"), Null)
strUnitID = GetSafeID(obTokenMgr.GetData(strToken,stCrMngmUnitID),NULL)
strNewUnitName = Trim(GetSafeStr( Request("UN"), kUnitNameMaxLen, Null ))
nUnitInPlan = GetSafeLng(Request("NUNITINPLAN"), Null)

strNewUnitID = objKTPComponent.CopyUnit(strPlanID, strUnitID, strNewUnitName, nUnitInPlan)
TestError obLanguage("Curriculum","kCantCopyUnit") 

bExtraActivity = GetSafeBool(Request("extraActivity"), False)
strEaParam = IIf(bExtraActivity, "?extraActivity=true", "")

RedirectTo "/angular/school/planning/subjectplans/" & strEaParam, Array("elemType","un")
%>
