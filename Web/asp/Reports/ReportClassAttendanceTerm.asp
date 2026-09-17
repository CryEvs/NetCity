<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strTeacherID

Sub specialRead()
	If bAll Then
		Call InitYearClasses()
	Else
		strTeacherID = strUserID
		Call InitTeacherClasses(False)
	End If
	If strClassID = "0" Then Exit Sub
	Call InitTermsForClass(True, strClassID)
End Sub

Sub specialWrite()
	WriteClass
	If strClassID <> "0" Then
		WriteTerm
	End If
End Sub

Sub Main()
End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))
	If bExit Then Exit Sub
	DrawTermsAll strForm

	If bExit Then Exit Sub
	If hasNoStudents( strClassID ) Then
		Call DrawInfo( obLanguage("Filter","kNoStudents",strFunctionalityType), False)
	End If
End Sub

Function hasNoStudents(ByVal theClassID)
	Dim oRs
	Const bIupClassesExclude = False

	Set oRs = objNSNET.GetClassStudentListForTerm_IUP(strClassID, Empty, strCurrYearID, strTermID, False, bIupClassesExclude)
	hasNoStudents = oRs.EOF
End Function
%>
