<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim objClassInfo, strTeacherID

Sub specialRead()
	Call InitYearClasses()
End Sub

Sub specialWrite()
	WriteClass
End Sub

Sub Main()
	Set objClassInfo = objNSNET.GetClassInfo(strClassID)
	If objClassInfo.EOF Then Exit Sub
End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))
End Sub

Function hasNoStudents(ByVal theClassID, strTermID)
	Dim oRs
	Set oRs = objNSNET.GetClassStudentListForTerm(strClassID, strTermID, true)
	hasNoStudents = oRs.EOF
End Function

Sub specialDraw()
	If bExit Then Exit Sub
	If hasNoStudents( strClassID, kReportYearTermType ) Then 
		DrawInfo obLanguage("Filter","kNoStudents",strFunctionalityType), False
	End If
End Sub
%>
