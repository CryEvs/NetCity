<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'--------- Page Parameters -------
' AT=<Access Token>
' PLANID=<PlanID>
' LessonID - from TM
' UID=<UnitID>
' NLNAME=<New Lesson Name>
' NLESSONINUNIT=<NLessonInUnit>

Dim strLessonID, strNewLessonID
Dim strNewUnitID, strNewLessonName
Dim nLessonInUnit
Dim strPlanID, objLessonInfo
Dim objKTPComponent
Dim bExtraActivity, strEaParam

Set objKTPComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IKTPComponent")
If Not (HasUserRight(arCurrMgmCreateAll) Or HasUserRight(arCurrMgmCreate)) Then GenerateError(obLanguage("Common","kErrPageAccess"))

strLessonID			= GetSafeID(obTokenMgr.GetData(strToken,stCrMngmLessonID),NULL)
strNewUnitID		= GetSafeID( Request("UNID"), Null )
strNewLessonName	= Trim(GetSafeStr( Request("NLNAME"), kLessonNameMaxLen_DB, Null ))
nLessonInUnit		= GetSafeLng(Request("NLESSONINUNIT"), Null)
strPlanID			= GetSafeStrParam(Request("PLANID"), Null)
strNewLessonID		= objKTPComponent.CopyLesson(strLessonID, strNewUnitID, strNewLessonName, nLessonInUnit)

TestError Err.Description

bExtraActivity = GetSafeBool(Request("extraActivity"), False)
strEaParam = IIf(bExtraActivity, "?extraActivity=true", "")

RedirectTo "/angular/school/planning/subjectplans/" & strEaParam, Array("elemType", "lesson")%>