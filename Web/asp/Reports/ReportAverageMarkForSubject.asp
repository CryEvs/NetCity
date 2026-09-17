<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms2.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="SubjectAverageMarkReport_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Dim strSubjectID, oSubjectsRs, strTeacherID

Sub specialRead()
	InitSchoolTerms
	InitProfileSubjects
	bHasGraph = True
End Sub

Sub specialWrite()
	WriteTerm
	WriteTeacherSubject
End Sub

Sub Main()
End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	DrawTermsYearAndTotal strForm
	DrawSubjectsAll strForm, True, obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)
End Sub

Sub specialDraw()
End Sub
%>
