<% ' © 2007-2013 IRTech. All rights reserved.

Dim dctInvalidIUPGrades

Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum","kIUPTitle")
End Function

Sub GetCuriculumView()
	nCuriculum_View = 1
End Sub

Sub WriteCuriculumView()
	Call obTokenMgr.SetData(strToken, stCuriculum_View, nCuriculum_View)
End Sub

Sub GetCurriculumColumnsCmn()
	Call GetCurriculumColumnsIUP( arrCuriculumGrades, arrProfiles, nPCount, arrClasses )
	If IsEmpty(arrCuriculumGrades) Then
		Exit Sub
	End If
	Call GetIUPInvalidGrades()
End Sub

Function CanCopyCuriculum(strCurrYearID, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID)
	CanCopyCuriculum = objNSNET.CanCopyCuriculum(strCurrYearID, strTermID, nFilterGradeMin, nFilterGradeMax, -1, -1, True)
End Function

Sub GetIUPInvalidGrades()
	Dim objRs, nGrade

	Set dctInvalidIUPGrades = Server.CreateObject("Scripting.Dictionary")
	Set objRs = objNSNET.GetIUPInvalidGrades(strTermID)

	While Not objRs.EOF
		nGrade = CLng(objRs("GRADEID"))
		dctInvalidIUPGrades(nGrade) = 1
		objRs.MoveNext
	WEnd
End Sub%>