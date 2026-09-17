<!-- #INCLUDE VIRTUAL="/asp/Reports/TotalGroupResults_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
Dim strStage, nGradeID

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","KRNClassCheifPeriodGrade",strFunctionalityType) & strTitleAddString
	If CLng(strTermID)>0 Then GetPageTitle = GetPageTitle & " " & obLanguage("Reports","kForSchoolPeriod")
End Function

Sub specialRead()
	strStage = GetSafeID(obTokenMgr.GetData(strToken,stCurrStage), Null)
	nGradeID = GetSafeLng(Request("GRADE"),GetSafeLng(obTokenMgr.GetData(strToken,stCurrGrade), -1))
	strTermID = GetSafeID(obTokenMgr.GetData(strToken,stCurrTerm), 0)
End Sub

Sub calcStrParams()
	If strStage > 0 Then
		If nGradeID >= 0 Then
			strForParameter = idGrade
			strForParameterValue = nGradeID
			strNoStudentsMessage = obLanguage("Reports","kNoStudentsInGrade",strFunctionalityType)
		Else
			strForParameter = idStage
			strForParameterValue = strStage
			strNoStudentsMessage = obLanguage("Reports","kNoStudentsInStage",strFunctionalityType)
		End IF
	Else
		strForParameter = idYear
		strForParameterValue = strCurrYearID
		strNoStudentsMessage = obLanguage("Reports","kNoStudentsInSchool",strFunctionalityType)
	End If
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

Function GetPageParams()
	Dim strReport, strStageName
	Select Case strStage
	Case 1: strStageName = obLanguage("SetupSchoolCurPlan","kGradeJunior",strFunctionalityType)
	Case 2: strStageName = obLanguage("SetupSchoolCurPlan","kGradeMiddle",strFunctionalityType)
	Case 3: strStageName = obLanguage("SetupSchoolCurPlan","kGradeSenior",strFunctionalityType)
	Case Else: strStageName = obLanguage("Reports","kTotalForSchool",strFunctionalityType)
	End Select
	GetPageParams = Array(_
		obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),_
		obLanguage("Common","kStage"),strStageName,_
		obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType), IIF(nGradeID<=0,obLanguage("Common","kAll"),nGradeID),_
		obLanguage("Filter","kMarkFor"), strTermName)
End Function

%>
