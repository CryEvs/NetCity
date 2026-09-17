<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmnCopy.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function CopyCSGByCurriculumCmn()
	Call objNSNET.CopyCuriculum_IUP(transaction, strCurrYearID, strTermID, minGrade, maxGrade)
End Function

Function GenerateCSGByCurriculumCmn()
	GenerateCSGByCurriculumCmn = objNSNET.GenerateCSGByCurriculumIUP_WT(transaction, strCurrYearID, strTermID, minGrade, maxGrade, lngNFailed)
End Function
%>
