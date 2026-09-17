
<% ' © 2007-2008 IRTech. All rights reserved.

Dim strTable, strHeader
Dim nCuriculum_Grades, nCuriculum_View, nCuriculum_SubjGroups, nCuriculum_Grade

Sub ReadState()
	strHeader = obTokenMgr.GetData(strToken, stTempString)
	strTable = obTokenMgr.GetData(strToken, stPrintTable)
	
	nCuriculum_Grades = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grades), Null)
	nCuriculum_View = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_View), Null)
	nCuriculum_SubjGroups = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_SubjGroups), Null)
	nCuriculum_Grade = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grade), Null)
End Sub

Function GetArrPageTitle()
	If nCuriculum_Grade > 0 Then
	    ReDim arr(7)
	    arr(2)= obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)
	    arr(3)= nCuriculum_Grade
	    arr(4) = obLanguage("Common","kView")
	    arr(5) = IIf(nCuriculum_View = 1, obLanguage("SetupSchoolCurPlan","kPlanViewByClasses",strFunctionalityType), obLanguage("SetupSchoolCurPlan","kPlanViewByGrades",strFunctionalityType))

	    arr(6) = obLanguage("SetupSchoolCurPlan","kSubjectGroups")
	    arr(7) = IIf(nCuriculum_SubjGroups = 1, obLanguage("SetupSchoolCurPlan","kSubjectGroups_Subjects"), obLanguage("SetupSchoolCurPlan","kSubjectGroups_GroupName"))
	Else
	    ReDim arr(5)
	    arr(2) = obLanguage("Common","kView")
	    arr(3) = IIf(nCuriculum_View = 1, obLanguage("SetupSchoolCurPlan","kPlanViewByClasses",strFunctionalityType), obLanguage("SetupSchoolCurPlan","kPlanViewByGrades",strFunctionalityType))

	    arr(4) = obLanguage("SetupSchoolCurPlan","kSubjectGroups")
	    arr(5) = IIf(nCuriculum_SubjGroups = 1, obLanguage("SetupSchoolCurPlan","kSubjectGroups_Subjects"), obLanguage("SetupSchoolCurPlan","kSubjectGroups_GroupName"))
	    
	End If
    arr(0) = obLanguage("SetupSchoolCurPlan","kGrades")
	Select Case nCuriculum_Grades
		Case -1	arr(1) = obLanguage("SetupSchoolCurPlan","kGradesAll")
		Case 1		arr(1) = obLanguage("SetupSchoolCurPlan","kGradeJunior")
		Case 2		arr(1) = obLanguage("SetupSchoolCurPlan","kGradeMiddle")
		Case 3		arr(1) = obLanguage("SetupSchoolCurPlan","kGradeSenior")
	End Select

	GetArrPageTitle = arr
End Function
%>
