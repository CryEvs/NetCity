<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTeachers.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="SubjectAverageMarkReport_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Dim objRs
Dim objRs2

Sub specialRead()
	Dim dtStart, dtEnd
	InitTeachers bAll, False

	' #38115. При переделке на ангуляр - лучше отсюда исключить ВД-предметы, т.к. по ним нет оценок. И из самого отчёта, если Предмет = Все - то тоже.
	Call InitSubjectsForTeacher(strTeacherID)

	bHasGraph = true
	Call CalcCurrYearLimits(dtStart, dtEnd)
	Call InitTeacherSubjectClasses_IUP(bAll, strTeacherID, strSubjectID, dtStart, dtEnd)
End Sub

Sub specialWrite()
	WriteTeacherSubject
	WriteClass_IUP
End Sub

Sub Main()
End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	DrawTeachers strForm, bAll, False
	DrawSubjects strForm, obLanguage("Reports","kTeacherHasNoSubjInYear",strFunctionalityType)
	If bExit Then Exit Sub
	Call DrawYearClasses_IUP(strForm, True, obLanguage("Reports","kTeacherHasNoClassesForSubjInYear",strFunctionalityType))
End Sub

Sub specialDraw()
End Sub

Sub WritePostScripts()
	%>
	<script type="text/javascript">
		report.setOptions({graphType: "line"});
	</script>
	<%
End Sub
%>
