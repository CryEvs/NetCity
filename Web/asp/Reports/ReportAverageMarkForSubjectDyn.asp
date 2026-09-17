<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms.asp" -->
<!-- #INCLUDE FILE="SubjectAverageMarkReport_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Dim strSubjectID, oSubjectsRs, strTeacherID

Sub specialRead()
	Dim dtStart, dtEnd

	bHasGraph = true
	InitSchoolTerms
	InitProfileSubjects

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
	If strTermID = "0" Then%><tr><td colspan="2" class="SmallHeader"><%=obLanguage("Common","kNoTermsInYear")%></td></tr><%
		bExit = True
		Exit Sub
	End If
	DrawSubjectsAll strForm, True, obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)
	If bExit Then Exit Sub

	Call DrawYearClasses_IUP(strForm, True, obLanguage("Reports","kNoTotalsForSubject"))
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
