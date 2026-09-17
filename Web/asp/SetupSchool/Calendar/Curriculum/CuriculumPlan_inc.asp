
<% ' © 2007-2013 IRTech. All rights reserved.

Dim strTable, strHeader
Dim nCuriculum_Grades, nCuriculum_View, nCuriculum_SubjGroups, nCuriculum_Grade
Dim strTermID, bIsIUPCuriculum
Dim strProfileID, bShowProfilesFilter
Dim strDirectionID, bShowDirectionsFilter

Sub onDrawPage()
	If strTable<>"" Then
		Response.Write GetPageTitleFor(strHeader, GetArrPageTitle()) & strTable & GetPageVer()
	Else
		Response.Write "<div align=center><h3>"& obLanguage("SetupSchoolCurPlan","kCurriculumEmpty") &".</h3></div>"
	End If
End Sub

Sub ReadState()
	strHeader = obTokenMgr.GetData(strToken, stTempString)
	strTable = obTokenMgr.GetData(strToken, stPrintTable)
	
	bIsIUPCuriculum = GetSafeBool(obTokenMgr.GetData(strToken, stIsIUPCuriculum), Null)
	strTermID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrTerm), Null)
	nCuriculum_Grades = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grades), Null)
	nCuriculum_View = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_View), Null)
	nCuriculum_SubjGroups = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_SubjGroups), Null)
	nCuriculum_Grade = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grade), Null)
	strProfileID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrProfile), "-1")
	bShowProfilesFilter = GetSafeBool(obTokenMgr.GetData(strToken, stShowProfilesFilter), False)
	strDirectionID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrDirection), "-1")
	bShowDirectionsFilter = GetSafeBool(obTokenMgr.GetData(strToken, stShowDirectionsFilter), False)
End Sub

Function GetArrPageTitle()
	Dim arr, ub
	arr = Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
				obLanguage("Common","kPeriod"), objNSNET.GetTermName(strTermID), _
				obLanguage("SetupSchoolCurPlan","kGrades"), obLanguage("SetupSchoolCurPlan","kGradesAll")_
			)

	Select Case nCuriculum_Grades
		Case 1	arr(5) = obLanguage("SetupSchoolCurPlan","kGradeJunior")
		Case 2	arr(5) = obLanguage("SetupSchoolCurPlan","kGradeMiddle")
		Case 3	arr(5) = obLanguage("SetupSchoolCurPlan","kGradeSenior")
	End Select

	If nCuriculum_Grade > 0 Then
		ub = Ubound(arr)
		ReDim Preserve arr(ub+2)
		arr(ub+1)= obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)
		arr(ub+2)= nCuriculum_Grade
	End If

	If bShowProfilesFilter Then
		ub = Ubound(arr)
		ReDim Preserve arr(ub+2)
		arr(ub+1)= obLanguage("Common","kProfile", strFunctionalityType)
		If strProfileID = "-1" Then
			arr(ub+2) = obLanguage("Common","kAll")
		Else
			arr(ub+2) = objNSNET.GetProfileName(strProfileID)
		End If
	End If

	If bShowDirectionFilter Then
		ub = Ubound(arr)
		ReDim Preserve arr(ub+2)
		arr(ub+1)= obLanguage("Reports","kProgramDirection")
		If strDirectionID = "-1" Then
			arr(ub+2) = obLanguage("Common","kAll")
		Else
			arr(ub+2) = objNSNET.GetProgDirectionName(strDirectionID)
		End If
	End If

	If Not bIsIUPCuriculum Then
		ub = Ubound(arr)
		ReDim Preserve arr(ub+2)
		arr(ub+1) = obLanguage("Common","kView")
		arr(ub+2) = IIf(nCuriculum_View = 1, obLanguage("SetupSchoolCurPlan","kPlanViewByClasses",strFunctionalityType), obLanguage("SetupSchoolCurPlan","kPlanViewByGrades",strFunctionalityType))
	End If
	ub = Ubound(arr)
	ReDim Preserve arr(ub+2)
	arr(ub+1) = obLanguage("SetupSchoolCurPlan","kSubjectGroups")
	arr(ub+2) = IIf(nCuriculum_SubjGroups = 1, obLanguage("SetupSchoolCurPlan","kSubjectGroups_Subjects"), obLanguage("SetupSchoolCurPlan","kSubjectGroups_GroupName"))

	GetArrPageTitle = arr
End Function
%>
