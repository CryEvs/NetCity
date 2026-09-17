<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms2.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strRepType

Sub specialRead()
	strRepType = GetSafeStrParam(Request("ReportType"),GetSafeStrParam(obTokenMgr.GetData(strToken, "stRepType"),"1"))
	IF strRepType="2" Then
		Call InitYearClasses()
		Call InitTermsForClass(True, strClassID)
	Else
		Call InitSchoolTerms
	End If
End Sub

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialWrite()
	Call obTokenMgr.SetData(strToken, "stRepType", strRepType)
	WriteClass
	WriteTerm
End Sub

Sub Main() 
End Sub

Sub specialHead()
End Sub

Sub specialFilters(strForm)
	Call DrawSimpleFilterRow(obLanguage("Reports","kTypeReport"), "ReportType", Array(1, obLanguage("Reports","kTotalSchoolStudentsInfo", strFunctionalityType), 2, obLanguage("Reports","kTotalClassStudentsInfo", strFunctionalityType)), strRepType, False, SelectChangeHandler(strForm))
	IF strRepType="2" Then 
		DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))
	End If
	DrawTerms StrForm
End Sub

Function hasNoStudents(ByVal theClassID, strTermID)
	Dim oRs
	
	Set oRs = objNSNET.GetClassStudentListForTerm_IUP(strClassID, Empty, strCurrYearID, strTermID, true, false)
	hasNoStudents = oRs.EOF
End Function

Sub specialDraw()
	If bExit Then Exit Sub
	IF strRepType="2" Then
		If hasNoStudents( strClassID, strTermID ) Then DrawInfo obLanguage("Filter","kNoStudents",strFunctionalityType), False: Exit Sub
	End IF
End Sub

%>
