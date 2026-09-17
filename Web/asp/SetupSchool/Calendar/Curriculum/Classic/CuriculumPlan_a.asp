<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmn_a.asp -->
<!-- #INCLUDE FILE=Classic_inc.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub SpecialMain()
	Set objComponentList = objNSNET.GetAccessComponentList(strSchoolID, strCurrYearId, strTermID, nFilterGradeMin, nFilterGradeMax)
	Set objComponentListAll = objNSNET.GetComponentList(strCurrYearId)
	strComponentID= GetSafeComponentID(strComponentID, objComponentList)

	Set objSubjectList = objNSNET.GetNotCurriculumSubjectList(strSchoolID, strTermID, strComponentID, nFilterGradeMin, nFilterGradeMax)
	Set objCuriculum = objNSNET.GetCurriculumStat(strCurrYearId, strSchoolId, strTermID, nFilterGradeMin, nFilterGradeMax, (nCuriculum_SubjGroups=0))
	bIsFieldExists = objNSNET.DoesSubjectFieldExist(strTermID)
	bIsSubjectExists = objNSNET.DoesSubjectExist(strTermID)
End Sub

%>
