<% ' © 2007-2013 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kFNCurriculumPlan")
End Function

Sub GetCuriculumView()
	If IsDull(Request("Curiculum_View")) Then
		nCuriculum_View = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_View), 1)
	Else
		nCuriculum_View = GetSafeLng(Request("Curiculum_View"), Null)
	End If
End Sub

Sub WriteCuriculumView()
	Call obTokenMgr.SetData(strToken, stCuriculum_View, nCuriculum_View)
End Sub

Sub GetCurriculumColumnsCmn()
	Call GetCurriculumColumns(strTermID, strProfileID, strDirectionID, arrCuriculumGrades, arrProfiles, nPCount, arrClasses)
End Sub

Function CanCopyCuriculum(strCurrYearID, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID)
	CanCopyCuriculum = objNSNET.CanCopyCuriculum(strCurrYearID, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID, False)
End Function
%>
