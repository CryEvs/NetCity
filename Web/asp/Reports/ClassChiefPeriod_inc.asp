<!-- #INCLUDE VIRTUAL="/asp/Reports/TotalGroupResults_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("Reports","kRNClassChiefReport",strFunctionalityType) & strTitleAddString
	If CLng(strTermID)>0 Then GetPageTitle = GetPageTitle & " " & obLanguage("Reports","kForSchoolPeriod")
End Function

Sub calcStrParams()
	strForParameter = idClass
	strForParameterValue = strClassID
	strNoStudentsMessage = obLanguage("Reports","kNoStudentsWithCondition",strFunctionalityType)
	nOneOrTwo = 1
End Sub

Sub specialMain()
	Dim minimumGrade
	minimumGrade = 0
	If (CLng(strFunctionalityType) = kFuncType_Common) Then minimumGrade = minGradeForTotals
	Call CalcTermParams()
	Call calcStrParams()
	arrRows = objNSNET.GetStudTotalsReportRows(strForParameter, strForParameterValue, strTermID, strPrevTermID, strCurrYearID, nOneOrTwo,nAbbrLimit, nViewType, minimumGrade)

	strReport = GetReport()
End Sub

%>
