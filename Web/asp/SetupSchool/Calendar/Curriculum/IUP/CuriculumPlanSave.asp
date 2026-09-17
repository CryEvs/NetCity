<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmnSave.asp -->
<!-- #INCLUDE FILE=IUP_inc.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub ClearCurriculumCmn()
	Call objNSNET.ClearCurriculumIUP_WT(transaction, strTermID, nFilterGradeMin, nFilterGradeMax)
End Sub

Sub CreateCurriculumPrepareCmn()
	Set objInsCmd = objNSNET.CreateCurriculumIUP_Prepare_WT(transaction, strCurrYearID, strTermID)
End Sub

Sub CreateCurriculumExecuteCmn()
	Dim arrTemp, nLevelId
	arrTemp = Split(strClassID, "_")
	nGradeId = CLng(arrTemp(0))
	nLevelId = CLng(arrTemp(1))
	Call objNSNET.CreateCurriculumIUP_Execute(objInsCmd, nGradeId, strSubjID, strComponentID, nLevelId, CDbl(strHours))
End Sub

Function CheckCurriculumHoursCmn()
	CheckCurriculumHoursCmn = objNSNET.CheckCurriculumHoursIUP_WT(transaction, strTermID, minGrade, maxGrade)
End Function

Function GenerateCSGByCurriculumCmn()
	GenerateCSGByCurriculumCmn = objNSNET.GenerateCSGByCurriculumIUP_WT(transaction, strCurrYearID, strTermID, minGrade, maxGrade, lngNFailed)
End Function

Function ClearCSGByCurriculumCmn()
	ClearCSGByCurriculumCmn = objNSNET.ClearSGByCurriculumIUP_WT(transaction, strCurrYearID, strTermID, minGrade, maxGrade)
End Function

Sub InitLanguageMessages()
	str_kErrCantGenerateCSG = obLanguage("SetupSchoolCurPlan","kErrCantGenerateSG")
	str_kErrCantClearCSG = obLanguage("SetupSchoolCurPlan","kErrCantClearSG")
	str_kNumberPairClassSubjectWasCreated = obLanguage("SetupSchoolCurPlan","kNumberSubjectGroupsWasCreated")
	str_kNumberPairClassSubjectWasNotCreated_1 = obLanguage("SetupSchoolCurPlan","kNumberSubjectGroupsWasNotCreated_1")
	str_kNumberPairClassSubjectWasNotCreated_2 = obLanguage("SetupSchoolCurPlan","kNumberSubjectGroupsWasNotCreated_2")
	str_kNumberPairClassSubjectWasDeleted = obLanguage("SetupSchoolCurPlan","kNumberSubjectGroupsWasDeleted")
End Sub
%>
