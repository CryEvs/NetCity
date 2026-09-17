<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim objClassInfo, strTeacherID

Sub specialRead()
	If bAll Then
		Call InitYearClasses()
	Else
		strTeacherID = strUserID
		Call InitTeacherClasses(False)
	End If
	If strClassID = "0" Then Exit Sub
	Call InitSubjectGroupsForAllClasses(strClassID)
	If strSubjClassID = "0" Then Exit Sub
End Sub

Sub specialWrite()
	WriteClass
End Sub

Sub Main()
	Set objClassInfo = objNSNET.GetClassInfo(strClassID)
	' test for classes absence
	If objClassInfo.EOF Then Exit Sub
	strTeacherID = CStr(GetSafeLng(objClassInfo("TEACHERID"), Null))' get class chief ID
End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))
	If bExit Then Exit Sub

	If strSubjClassID = "0" Then
		Call DrawInfo( obLanguage("Filter","kNoClassSubjectsGB",strFunctionalityType), False)
		bExit = True 
		Exit Sub
	End If

	Call DrawSimpleFilterRow(obLanguage("Reports","kClass_Chief",strFunctionalityType), "TID", Array(strTeacherID, objNSNET.GetUserNickName(strTeacherID)), strTeacherID, False, "")

	If bExit Then Exit Sub
	If hasNoStudents( strClassID ) Then
		Call DrawInfo( obLanguage("Filter","kNoStudents",strFunctionalityType), False)
	End If
End Sub

Function hasNoStudents(ByVal theClassID)
	Dim oRs
	Const bIupClassesInclude = False

	Set oRs = objNSNET.GetClassStudentListForTerm_IUP(strClassID, Empty, strCurrYearID, -1, False, bIupClassesInclude)
	hasNoStudents = oRs.EOF
End Function
%>
