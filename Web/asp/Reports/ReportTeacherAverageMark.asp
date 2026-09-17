<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms2.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTeachers.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="SubjectAverageMarkReport_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

'Dim objRs

Sub specialRead()
	InitSchoolTerms
	InitTeachers bAll, False

	' #38115. При переделке на ангуляр - лучше отсюда исключить ВД-предметы, т.к. по ним нет оценок. И из самого отчёта, если Предмет = Все - то тоже.
	Call InitSubjectsForTeacher(strTeacherID)

	bHasGraph = True
End Sub

Sub specialWrite()
	WriteTerm
	WriteTeacherSubject
End Sub

Sub Main()
'	Dim dtStart, dtEnd
'
'	Call CalcCurrYearLimits(dtStart, dtEnd)
'	Set objRs = objNSNET.GetTeacherSubjectClassList_IUP(-1, strTeacherID, strSubjectID, strCurrYearID, dtStart, dtEnd)
End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	DrawTermsYearAndTotal strForm
	DrawTeachers strForm, bAll, False

	'If Not objRs.EOF Then DrawSubjects strForm, obLanguage("Common","kNo")
	DrawSubjects strForm, obLanguage("Reports","kTeacherHasNoSubjInYear",strFunctionalityType) ' #38115
End Sub

Sub specialDraw()
'	If bExit Then Exit Sub
'	If objRs.EOF Then
'		DrawInfo obLanguage("Reports","kTeacherHasNoSubjInYear",strFunctionalityType), False
'		bDrawReportButtonPanel = false
'		Exit Sub
'	End If
End Sub
%>
