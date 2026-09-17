<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Administration/JSON_2.0.2.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/populate.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanDraw_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strTermID

	strTermID = obTokenMgr.GetData(strToken, stCurrTerm)
	InitCuriculum

	InitMain
	WriteStateCmn

	Call DrawTable()
%>