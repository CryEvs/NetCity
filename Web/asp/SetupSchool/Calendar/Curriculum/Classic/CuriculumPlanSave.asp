<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmnSave.asp -->
<!-- #INCLUDE FILE=Classic_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objClassInfoRs

Sub ClearCurriculumCmn()
	Call objNSNET.ClearCurriculum_WT(transaction, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID)
End Sub

Sub CreateCurriculumPrepareCmn()
	Set objInsCmd = objNSNET.CreateCurriculum_Prepare_WT(transaction, strCurrYearID, strTermID)
End Sub

Sub CreateCurriculumExecuteCmn()
	Dim nProfileId
	If CLng(objClassInfoRs("CLASSID")) <> CLng(strClassID) Then
		objClassInfoRs.Find "CLASSID=" & strClassID,,,0
	End If
	nProfileId = objClassInfoRs("PROFILEID")
	nGradeId = objClassInfoRs("GRADE")
	Call objNSNET.CreateCurriculum_Execute(objInsCmd, nGradeId, strSubjID, strComponentID, nProfileId, strClassID, CDbl(strHours))
End Sub

Function CheckCurriculumHoursCmn()
	CheckCurriculumHoursCmn = objNSNET.CheckCurriculumHours_WT(transaction, strTermID, minGrade, maxGrade, strProfileID, strDirectionID)
End Function

Function GenerateCSGByCurriculumCmn()
	GenerateCSGByCurriculumCmn = objNSNET.GenerateCSGByCurriculum_WT(transaction, strCurrYearID, strTermID, minGrade, maxGrade, strProfileID, strDirectionID, lngNFailed)
End Function

Function ClearCSGByCurriculumCmn()
	ClearCSGByCurriculumCmn = objNSNET.ClearCSGByCurriculum_WT(transaction, strCurrYearID, strTermID, minGrade, maxGrade, strProfileID, strDirectionID)
End Function

Sub InitSpecific()
	Set objClassInfoRs = objNSNET.GetYearClasses_2(strCurrYearID)
End Sub

Sub InitLanguageMessages()
	str_kErrCantGenerateCSG = obLanguage("SetupSchoolCurPlan","kErrCantGenerateCSG",strFunctionalityType)
	str_kErrCantClearCSG = obLanguage("SetupSchoolCurPlan","kErrCantClearCSG",strFunctionalityType)
	str_kNumberPairClassSubjectWasCreated = obLanguage("SetupSchoolCurPlan","kNumberPairClassSubjectWasCreated",strFunctionalityType)
	str_kNumberPairClassSubjectWasNotCreated_1 = obLanguage("SetupSchoolCurPlan","kNumberPairClassSubjectWasNotCreated_1",strFunctionalityType)
	str_kNumberPairClassSubjectWasNotCreated_2 = obLanguage("SetupSchoolCurPlan","kNumberPairClassSubjectWasNotCreated_2",strFunctionalityType)
	str_kNumberPairClassSubjectWasDeleted = obLanguage("SetupSchoolCurPlan","kNumberPairClassSubjectWasDeleted",strFunctionalityType)
End Sub
%>
