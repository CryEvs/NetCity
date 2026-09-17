<!-- #INCLUDE File="ClassChiefReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms2.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function hasUserRightOnPage()
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	Dim bYearTotal
	Call InitStages()
	If strStageID > 0 Then
		Call InitStageGrades( strStageID )
		strTermID = GetSafeID(Request("TERMID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrTerm), "0"))
		bYearTotal = IsYearTotalPeriod(strTermID)
		If strGradeID < 0 Then
			Set objTerms = objNSNET.GetStageTermList(strStageID, strCurrYearID)
			if Not bYearTotal Then
				Call FixTerm(objTerms)
			End If
		Else
			If (CLng(strFunctionalityType) = kFuncType_Common) Then
				If strGradeID < minGradeForTotals Then strGradeID = minGradeForTotals
			End If
			Set objTerms = objNSNET.GetGradeTermList(strCurrYearID, strGradeID)
			if Not bYearTotal Then
				strTermID = objNSNET.GetSafeGradeTermID(strTermID, strCurrYearID, strGradeID)
				Call FixTerm(objTerms)
			End If
		End If
	Else
		Call InitSchoolTerms
	End If
End Sub

Sub specialWrite()
	Call obTokenMgr.SetData(strToken,stCurrStage,strStageID)
	WriteTerm
	Call obTokenMgr.SetData(strToken,stCurrGrade,strGradeID)
End Sub

Sub Main()
	Set objClassInfo = objNSNET.GetClassInfo(strClassID)
	'test for classes absence
	If objClassInfo.EOF Then Exit Sub
End Sub

Sub specialFilters( strForm )
	bExit = False
	If not hasUserRightOnPage() Then Response.Write "<tr><td colspan='2' class=""SmallHeader"">" & obLanguage("Reports","kHasNoUserRightToViewReport") &"</td></tr>": bExit = True
	If bExit Then Exit Sub
	DrawStagesAndTotal strForm
	If strStageID > 0 Then Call DrawFilterGradesAndAll(strForm)
	If hasNoClasses( strGradeID ) And strGradeID >= 0 And strStageID > 0 Then
		Response.Write "<tr><td colspan='2' class=""SmallHeader"">" & obLanguage("Reports","kNoClassesInGrade",strFunctionalityType) &"</td></tr>"
		bExit = True
		Exit Sub
	End If
	DrawTermsYearAndTotal strForm
	Call DrawViewType()
End Sub

Function hasNoClasses(ByVal theGradeID)
	Dim oRs
	Set oRs = objNSNET.GetClassesForGrade(theGradeID, strCurrYearID)
	hasNoClasses = oRs.EOF
End Function
%>
