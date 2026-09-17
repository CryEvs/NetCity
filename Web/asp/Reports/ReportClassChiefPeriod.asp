<!-- #INCLUDE File="ClassChiefReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms2.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim bYearTotal

Sub specialRead()
	If bAll Then
		Call InitYearClasses()
	Else
		strTeacherID = strUserID
		Call InitTeacherClasses(False)
	End If
	If strClassID = "0" Then Exit Sub
	Call InitTermsForClassWithPeriods()
End Sub

Sub specialFilters( strForm )
	DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))
	If bExit Then Exit Sub
	DrawReadonlyRow obLanguage("Reports","kClass_Chief",strFunctionalityType), objNSNET.GetUserNickName(strTeacherID)
	DrawTermsYearAndTotal strForm
	Call DrawViewType()
End Sub

Function hasNoStudents(ByVal theClassID, strTermID)
	Dim oRs
	Set oRs = objNSNET.GetClassStudentListForTerm(strClassID, strTermID, true)
	hasNoStudents = oRs.EOF
End Function

Sub specialDraw()
	If bExit Then Exit Sub
	If strTermID < 0 Then
		If hasNoStudents( strClassID, kReportYearTermType ) Then DrawWarning obLanguage("Filter","kNoStudents",strFunctionalityType) : Exit Sub
	Else
		If hasNoStudents( strClassID, strTermID ) Then DrawWarning obLanguage("Filter","kNoStudents",strFunctionalityType) : Exit Sub
	End If
End Sub
%>
