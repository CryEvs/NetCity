<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterGrades.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms2.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Sub specialRead()
	Call InitSchoolTerms()
	Call InitSubjectsWithTotalMarksForTerm(strTermID)
	If strSubjectID = 0 Then Exit Sub
End Sub

Sub specialWrite()
	WriteTerm
	WriteSubject
End Sub

Sub Main()

End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	Dim strViewType, arr, strName
	strName = "ViewType"
	strViewType = GetSafe(strName,"-1")
	DrawTermsYearAndTotal strForm

	Call DrawSubjectsWithoutTotal(strForm,obLanguage("Reports","kNoSubjectsWithTotalMarksInTerm"))
	If strSubjectID = 0 Then Exit Sub
	Call SOU_Filter()
	arr = Array( _
		"0", obLanguage("Reports","kByClasses",strFunctionalityType), _
		"1", obLanguage("Reports","kByGrades",strFunctionalityType), _
		"-1", obLanguage("Reports","kCommonType"))

	OpenFormGroup obLanguage("Common","kView")
		Call DrawSelectArr( convert1Dto2D(arr), strName, strViewType, Null, "OnChangeSelect('"&strForm&"','"&strScriptName&"');" )
	CloseFormGroup

	If strViewType = "-1" Then
		Call InitStagesForSubjectAndTerm(strSubjectID, strTermID)
		Call DrawStagesAndTotal(strForm)
		If strStageID <= 0 Then Call obTokenMgr.SetData(strToken, stCurrGrade, -1) : Exit Sub

		Call InitStageWithSubjectTotalMarksGrades( strStageID, strSubjectID, strTermID )
		DrawFilterGradesAndAll ""
	End If
End Sub

%>
