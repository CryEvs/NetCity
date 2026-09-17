<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmn_a.asp -->
<!-- #INCLUDE FILE=IUP_inc.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub SpecialMain()
	Set objComponentList = objNSNET.GetAccessComponentListIUP(strSchoolID, strCurrYearId, strTermID, nFilterGradeMin, nFilterGradeMax)
	Set objComponentListAll = objNSNET.GetComponentListIUP(strCurrYearId)
	strComponentID= GetSafeComponentID(strComponentID, objComponentList)

	Set objSubjectList = objNSNET.GetNotCurriculumSubjectListIUP(strSchoolID, strTermID, strComponentID, nFilterGradeMin, nFilterGradeMax)
	Set objCuriculum = objNSNET.GetCurriculumStatIUP(strCurrYearId, strTermID, nFilterGradeMin, nFilterGradeMax, (nCuriculum_SubjGroups=0))
	bIsFieldExists = objNSNET.DoesSubjectFieldExistIUP(strTermID)
	bIsSubjectExists = objNSNET.DoesSubjectExistIUP(strTermID)
End Sub

%>
