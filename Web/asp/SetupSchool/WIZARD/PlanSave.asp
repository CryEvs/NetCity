<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim strCompID, strSubjID, arrHours, strHours
Dim arrGrades,arrProfiles,nPCount,arrIsAvailableColumn
Dim j,i,k, strSQL, objInsCmd, objSTTLCmd, bRollback
Dim lngReturnClass, lngReturnSubj, lngReturnProfile, lngResult, strSubjName, strProfileName, strMsg
Dim dctTermTypes, arrGradeSet
Dim minGrade, maxGrade, objClassInfo, strClassName, nClassGrade
Dim transaction

k=1
bRollback = False
If IsDull(Request("HOURS")) Then 
	Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchoolCalendar","kClErrNoSubj")))
Else
	Call objNSNET.CreateCurriculumTemplate( strSchoolId, strSchoolYearId, CStr(Request("HOURS")) )
	Call TestError( obLanguage("SetupSchoolCurPlan","kErrCantSaveCurriculumPlan"))
	Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchoolCalendar","kMsgSave")))
End If
RedirectTo "Plan.asp?", null

%>
