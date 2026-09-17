<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmnCopy.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function CopyCSGByCurriculumCmn()
	Call objNSNET.CopyCuriculum(transaction, strCurrYearID, strTermID, minGrade, maxGrade, strProfileID, strDirectionID)
End Function

Function GenerateCSGByCurriculumCmn()
	GenerateCSGByCurriculumCmn = objNSNET.GenerateCSGByCurriculum_WT(transaction, strCurrYearID, strTermID, minGrade, maxGrade, strProfileID, strDirectionID, lngNFailed)
End Function
%>
