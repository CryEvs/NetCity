<!-- #INCLUDE File="ClassChiefReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub specialRead()
	If bAll Then
		Call InitYearClasses()
	Else
		strTeacherID = strUserID
		Call InitTeacherClasses(False)
	End If
	If strClassID = "0" Then Exit Sub
	Call InitTermsForClass(False, strClassID)
End Sub

Sub specialFilters( strForm )
	DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))
	If bExit Then Exit Sub
	DrawReadonlyRow obLanguage("Reports","kClass_Chief",strFunctionalityType), objNSNET.GetUserNickName(strTeacherID)
	DrawTerms strForm
	Call DrawViewType()
End Sub

Function hasNoStudents(ByVal theClassID)
	Dim oRs
	Set oRs = objNSNET.GetClassStudentListForTerm(strClassID, strTermID, true)
	hasNoStudents = oRs.EOF
End Function

Sub specialDraw()
	If bExit Then Exit Sub
	If hasNoStudents( strClassID ) Then DrawWarning obLanguage("Filter","kNoStudents",strFunctionalityType) : Exit Sub
End Sub
%>
