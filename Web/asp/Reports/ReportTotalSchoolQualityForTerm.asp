<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterGrades.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms2.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Sub specialRead()
	Call InitSchoolTerms()
End Sub

Sub specialWrite()
	WriteTerm
End Sub

Sub Main()

End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	DrawTermsYearAndTotal strForm
End Sub

%>
