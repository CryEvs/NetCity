<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTeachers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Dim rsClasses, bOk

Sub specialRead()
	Call InitTeachers(bAll, True)
	If bAll Then
		If Request("TID")<>"-1" And CLng(strTeacherID)=-1 Then
			If Not objTeachersRs.EOF Then strTeacherID = objTeachersRs("TEACHERID")
		End If
	End If
	Call InitSubjectsForTeacher(strTeacherID)
	If strTeacherID <> "-1" Then
		If strSubjectID = "-1" And Not oSubjectsRs.EOF Then
			If oSubjectsRs.RecordCount=1 Then strSubjectID = CLng(oSubjectsRs("SUBJECTID"))
		End If
	Else
		strSubjectID = CLng(GetSafe("SJID","-1"))
		If strSubjectID <= 0 And Not oSubjectsRs.EOF Then strSubjectID = CLng(oSubjectsRs("SUBJECTID"))
	End If
End Sub

Sub specialWrite()
	WriteTeacher
	Call obTokenMgr.SetData(strToken, stCurrSubject, strSubjectID)
End Sub

Sub Main()
	Dim dtStart, dtEnd

	bOk = False

'	Set rsClasses = objNSNET.GetClassListForTeacher(strTeacherID, strCurrYearID)
	Call CalcCurrYearLimits(dtStart, dtEnd)
	Set rsClasses = objNSNET.GetTeacherSubjectClassList_IUP(-1, strTeacherID, strSubjectID, strCurrYearID, dtStart, dtEnd)

	If rsClasses.EOF Then Exit Sub
	bOk = True
End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	DrawTeachers strForm, bAll, True
	If Not oSubjectsRs.EOF Then
		If strTeacherID <> "-1" Then
			DrawSubjects strForm, obLanguage("Common","kNo")
		Else
			DrawSubjectsWithoutTotal strForm, obLanguage("Common","kNo")
		End If
	End If
	If rsClasses.EOF Then Response.Write "<tr><th colspan=""2"">" & obLanguage("Reports","kTeacherHasNoSubjInYear",strFunctionalityType) & "</th></tr>" : Exit Sub

	Call SOU_Filter()
	drawSimpleFilter "Reports","kMark_2_str", IIF(isComplexTeacherReport,"kShow","kHide"), Array("kHide", "kShow")
	drawSimpleFilter "Reports","strViewType", "", Array("kCommonType", "kCompactType")
End Sub
%>
