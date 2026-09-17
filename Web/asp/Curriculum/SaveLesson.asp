<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/teacher.asp" -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<%  '© 2007-2016 IRTech. All rights reserved.

'--------- Page Parameters -------
'	LessonID - from TM
'	UID=<UnitID>
'	LN=<Lesson Name>
'	NLESSONINUNIT=<NLessonInUnit>
'	NHOURS=<Lesson Hours>
'	LD=<Lesson Description>
'	BOOKREF=<Reference books>

Dim strUnitID, strLessonID, strLessonName
Dim nLessonInUnit, nLessonHours
Dim strDescr, strBookRef
Dim bCreateNew
Dim arrLessonsInfo ' 0 - id; 1 - name
Dim nRes, objLessonInfo
Dim strDetailInfComponent
Dim strTotalLearningAndSubjectSkills
Dim strValuablyFocusedComponent
Dim strTeachConditionAndImplementer
Dim strHomework, strDetails
Dim contentElements
Dim objKTPComponent
Dim strAttachmentIds
Dim bExtraActivity, strEaParam

Set objKTPComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IKTPComponent")
If Not (HasUserRight(arCurrMgmCreateAll) Or HasUserRight(arCurrMgmCreate)) Then GenerateError(obLanguage("Common","kErrPageAccess"))

strUnitID		= GetSafeID(Request.Form("UNID"), NULL)
strLessonID		= GetSafeID(obTokenMgr.GetData(strToken,stCrMngmLessonID),NULL)
bCreateNew		= (strLessonID = "-1")

strLessonName						= Trim(GetSafeStr(Request("LN"), kLessonNameMaxLen_DB, NULL))
nLessonInUnit						= GetSafeLng(Request("NLESSONINUNIT"), Null)
nLessonHours						= GetSafeLng(Request("NHOURS"), Null)
strDescr							= GetSafeStr(Request("LD"), 2000, "")
strBookRef							= GetSafeStr(Request("BOOKREF"), 2000, "")
strDetailInfComponent				= GetSafeStr(Request("EXTRAINFO1"), 2000, "")
strTotalLearningAndSubjectSkills	= GetSafeStr(Request("EXTRAINFO2"), 2000, "")
strValuablyFocusedComponent			= GetSafeStr(Request("EXTRAINFO3"), 2000, "")
strTeachConditionAndImplementer		= GetSafeStr(Request("EXTRAINFO4"), 2000, "")
strHomework							= GetSafeStr(Request("HOMEASSIGNMENT"), kHomeWorkMaxLen_DB, "")
strDetails							= GetSafeStr(Request("DETAILS"), 2000, "")
contentElements						= Split(Request("tree"), ",")
strAttachmentIds					= Request("attachment")

ReDim arrLessonsInfo(1, 0)
If bCreateNew Then 'add
	nRes =  objKTPComponent.CreateLesson(strUnitID, strLessonName, nLessonInUnit, nLessonHours, strDescr, strBookRef, _
		strDetailInfComponent, strTotalLearningAndSubjectSkills, strValuablyFocusedComponent, strTeachConditionAndImplementer, _
		strHomework, strDetails, strAttachmentIds, contentElements)

	TestError err.Description
	strLessonID = CStr(nRes)
Else 'edit
	Set objLessonInfo = objNSNET.GetLessonInfo(strLessonID)
	TestError obLanguage("Curriculum","kCantGetLessonInfo")

	If objLessonInfo.EOF Then GenerateError obLanguage("Curriculum","kCantGetLessonInfo")

	Call objKTPComponent.EditLesson(strLessonID,strUnitID, strLessonName, nLessonInUnit, nLessonHours, strDescr, strBookRef, _
		strDetailInfComponent, strTotalLearningAndSubjectSkills, strValuablyFocusedComponent, strTeachConditionAndImplementer, _
		strHomework, strDetails, strAttachmentIds, contentElements)

	TestError err.Description
End If

bExtraActivity = GetSafeBool(Request("extraActivity"), False)
strEaParam = IIf(bExtraActivity, "?extraActivity=true", "")

If Not bCreateNew Then 
	RedirectTo "/angular/school/planning/subjectplans/" & strEaParam, Array("elemType","lesson")
Else
	RedirectTo "/angular/school/planning/subjectplans/" & strEaParam, Array("elemType","unit", "LSID",strLessonID, "PRESERVETREE","Y","EXPANDELEM","Y")
End If%>