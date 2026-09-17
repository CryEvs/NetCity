<!-- #INCLUDE FILE="../Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->
<%  '© 2007-2013 IRTech. All rights reserved.

' indexes from GetSubjectPlanUnitList_Prepare() in PlannerCommon.asp
Const kIndexUnit_ID = 0
Const kIndexUnit_Name = 1
Const kIndexUnit_NumInPlan = 2
Const kIndexUnit_Descr = 3
' indexes from GetUnitLessonList_Prepare() in PlannerCommon.asp
Const kIndexLesson_Name = 1
Const kIndexLesson_InUnit = 2
Const kIndexLesson_Hours = 3
Const kIndexLesson_Descr = 4
Const kIndexLesson_BookRef = 5
Const kIndexLesson_HomeWork = 6
Const kIndexLesson_Details = 7
Const kIndexLesson_DetailInfComponent = 8
Const kIndexLesson_TotalLearningAndSubjectSkills = 9
Const kIndexLesson_ValuablyFocusedComponent = 10
Const kIndexLesson_TeachConditionAndImplementer = 11
Const kIndexLesson_CodeElementContent = 12
Const kIndexLesson_ElementContent = 13

Dim strPlanID, strPlanName
Dim arrUnits, arrLessonsAll, arrUnitHours
Dim nPlanHours
Dim i, j, nUnitsCnt
Dim strBookName, strMaterials, objPlanInfo
Dim nTypeView
Dim strDetailInfComponent, strTotalLearningAndSubjectSkills, strValuablyFocusedComponent, strTeachConditionAndImplementer
Dim strViewReport', strReport

Function GetPageTitle()
	GetPageTitle =  obLanguage("Curriculum","kTitleCurriculum") & ": "&obTokenMgr.GetData(strToken, "CurrYearName")' &chr(10)& strPlanName
End Function

Function GetPageTitleFor( strPageName, arrPageParams )
	GetPageTitleFor = GetPageTitlePrint(strPageName, arrPageParams)
End Function

Function GetPageParams()
	Dim upIndex, arrPar
	arrPar = Array(_
		obLanguage("Curriculum","kVariant"), strPlanName, _
		obLanguage("Curriculum","kTotalHours"), nPlanHours _
		)
	If Not IsDull(strBookName) Then
		upIndex = Ubound(arrPar)+2
		Redim Preserve arrPar(upIndex)
		arrPar(upIndex-1) = obLanguage("Curriculum","kTextBook")
		arrPar(upIndex) = strBookName
	End If
	If Not IsDull(strMaterials) Then
		upIndex = Ubound(arrPar)+2
		Redim Preserve arrPar(upIndex)
		arrPar(upIndex-1) = obLanguage("Curriculum","kAddLiterature")
		arrPar(upIndex) = GetDb2HtmlTextList(strMaterials)
	End If
	GetPageParams = arrPar
End Function

Sub ReadState()
  ' A valid PlanID expected here but not compound IDs. See java function openCurriculum() in Planner.asp
	strPlanID = GetSafeID(Request("PLANID"), NULL )
	nTypeView = CLng(GetSafe("kViewReport", KTPViewReport_KSubjectPlanViewReduced))
	strCurrYearID = GetSafeLng(obTokenMgr.GetData(strToken,stCurrYear), Null)
End Sub

Sub WriteState()
End Sub

Function IsPopupPage( )
	IsPopupPage = True
End Function

Sub Main()
	Dim strUnitID
	Dim nVarinatId
	Dim cmdPlanUnits, objUnitsRs, cmdUnitLessons, objLessonsRs, cmdUnitHours

	Set objPlanInfo = objNSNET.GetSubjectPlanInfo(strPlanID)
	If objPlanInfo.EOF Then
		GenerateError(obLanguage("Curriculum","kEmptyPlanUnits"))
	End If

	nVarinatId = CLng(objPlanInfo("VARIANTID"))
	strPlanName = objNSNET.GetSubjectPlanVariantName(nVarinatId)

' build arrays
	Set cmdPlanUnits = objNSNET.GetSubjectPlanUnitList_Prepare()
	Set objUnitsRs = objNSNET.GetSubjectPlanUnitList_Execute(cmdPlanUnits, strPlanID)
	objNSNET.DisposeCommand(cmdPlanUnits)
	If objUnitsRs.EOF Then GenerateError(obLanguage("Curriculum","kEmptyPlanUnits"))
	Set cmdUnitLessons = objNSNET.GetUnitLessonList_Prepare(nTypeView)
	Set cmdUnitHours = objNSNET.GetUnitHours_Prepare()

	arrUnits = objUnitsRs.GetRows()
	nUnitsCnt = Ubound(arrUnits, 2)
	ReDim arrLessonsAll(nUnitsCnt)
	ReDim arrUnitHours(nUnitsCnt)
	For i = 0 To nUnitsCnt
		strUnitID = GetSafeID(arrUnits(kIndexUnit_ID, i), "0")
		Set objLessonsRs = objNSNET.GetUnitLessonList_Execute(cmdUnitLessons, strUnitID)
		If objLessonsRs.EOF Then
			arrLessonsAll(i) = Empty
		Else
			arrLessonsAll(i) = objLessonsRs.GetRows()
		End If
		arrUnitHours(i) = objNSNET.GetUnitHours_Execute( cmdUnitHours, strUnitID )
	Next
	objNSNET.DisposeCommand(cmdUnitLessons)
	objNSNET.DisposeCommand(cmdUnitHours)
	nPlanHours = objNSNET.GetPlanHours(strPlanID)
	
	strBookName = objPlanInfo("BOOKREF")
	strMaterials = objPlanInfo("MATERIALS")
	strReport = GetReport()
End Sub

Function GetDb2HtmlTextList( strValue )
	Dim i, n, arrValue
	If IsDull(strValue) Then GetDb2HtmlTextList = DB_2_HTML(strValue) : Exit Function
	arrValue = Split(strValue, vbNewLine)
	n = UBound(arrValue)
	GetDb2HtmlTextList = ""
	For i = 0 To n
		If i > 0 Then
			GetDb2HtmlTextList = GetDb2HtmlTextList & "<br>" & DB_2_HTML(arrValue(i))
		Else
			GetDb2HtmlTextList = GetDb2HtmlTextList & DB_2_HTML(arrValue(i))
		End If
	Next
End Function

Function GetReportTable()
	Dim arrLessons, nUnitHours
	Dim n, strReport , pColspan
	pColspan = "5"
	strReport = "<table class=""table-print-text"">"
	strReport = strReport & "<tr><th rowspan=""2"">" & obLanguage("Curriculum","kLesNum", strFunctionalityType) & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Curriculum","kLesTheme", strFunctionalityType) & "</th>" &_
		"<th rowspan=""2"">" & obLanguage("Curriculum","kLesHoursMuch") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Curriculum","kLesMatter", strFunctionalityType) & "</th>"
		If nTypeView=KTPViewReport_KSubjectPlanViewWithDecKes Then
			strReport = strReport & _
		"<th rowspan=""2"">" & obLanguage("Curriculum","kCodeElementContent") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("Curriculum","kElementContent") & "</th>"
		End If
		If nTypeView=KTPViewReport_KSubjectPlanViewAll Or nTypeView=KTPViewReport_KSubjectPlanViewWithDecKes Then
			strReport = strReport & "<th rowspan=""2"">" & obLanguage("Curriculum","kBookRefnew") & "</th>"
		Else
			strReport = strReport & "<th rowspan=""2"">" & obLanguage("Curriculum","kBookRef") & "</th>"
		End If
		If nTypeView=KTPViewReport_KSubjectPlanViewReducedWithHa Or nTypeView=KTPViewReport_KSubjectPlanViewAll Or nTypeView=KTPViewReport_KSubjectPlanViewWithDecKes Then
			strReport = strReport & "<th rowspan=""2"">" & obLanguage("Curriculum","kLessonHomework") & "</th>"
			If nTypeView <> KTPViewReport_KSubjectPlanViewReducedWithHa Then
				strReport = strReport & "<th rowspan=""2"">" & obLanguage("Curriculum","kLessonDetails", strFunctionalityType) & "</th>"
			End If
			If Not (nTypeView=KTPViewReport_KSubjectPlanViewWithDecKes) Then
				pColspan = "6"
			End If
		End If
		If nTypeView=KTPViewReport_KSubjectPlanViewReducedWithHa Or nTypeView=KTPViewReport_KSubjectPlanViewReduced Then strReport = strReport & "</tr>"
	
		If nTypeView=KTPViewReport_KSubjectPlanViewAll Or nTypeView=KTPViewReport_KSubjectPlanViewWithDecKes Then
			strReport = strReport & "<th colspan=""3"">" & obLanguage("Curriculum","kDetailAndTotalAndValuably") & "</th>"& _
			"<th rowspan=""2"">" & obLanguage("Curriculum","kTeachConditionAndImplementer") & "</th>"& _
		"<tr><th>" & obLanguage("Curriculum","kDetailInfComponent") & "</th>" & _
		"<th>" & obLanguage("Curriculum","kTotalLearningAndSubjectSkills") & "</th>" & _
		"<th>" & obLanguage("Curriculum","kValuablyFocusedComponent") & "</th></tr>"
			pColSpan = IIF(nTypeView=KTPViewReport_KSubjectPlanViewAll, "11", "13")
		Else strReport = strReport & "<tr></tr>"
		End If

	For i = 0 To nUnitsCnt
		n = 1
		arrLessons = arrLessonsAll(i)
		nUnitHours = arrUnitHours(i)
		strReport = strReport & "<tr class=""text-center""><td colspan=" & pColspan & "><i>" & obLanguage("Curriculum","kUnit") & " " & arrUnits(kIndexUnit_NumInPlan, i) & ": " & DB_2_HTML(arrUnits(kIndexUnit_Name, i)) & " - " & nUnitHours & " " & obLanguage("Curriculum","kHoursS")
		strReport = strReport & "</i></td></tr>"
		If Not IsEmpty(arrLessons) Then
			For j = 0 To Ubound(arrLessons, 2)
				strReport = strReport & "<tr><td class=""cell-num"">&nbsp;" & CStr(n)
				If arrLessons(kIndexLesson_Hours, j) > 1 Then n = n + 1 : strReport = strReport
				strReport = strReport & ".</td>" & _
					"<td>" & DB_2_HTML(arrLessons(kIndexLesson_Name, j)) & "</td>" & _
					"<td class=""text-center"">" & arrLessons(kIndexLesson_Hours, j) & "&nbsp;</td>" & _
					"<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_Descr, j)) & "</td>"
				If nTypeView=KTPViewReport_KSubjectPlanViewWithDecKes Then
				strReport = strReport & "<td class=""cell-text"">" & Replace(GetDb2HtmlTextList(arrLessons(kIndexLesson_CodeElementContent, j)),",",",<br>") & "</td>" & _
					"<td>" &  Replace(DB2HTML_BR(arrLessons(kIndexLesson_ElementContent, j)),";",";<br>") & "</td>"
				End If
				strReport = strReport & "<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_BookRef, j))& "</td>"
				If nTypeView=KTPViewReport_KSubjectPlanViewReducedWithHa Or nTypeView=KTPViewReport_KSubjectPlanViewAll Or nTypeView=KTPViewReport_KSubjectPlanViewWithDecKes Then
					strReport = strReport & "<td>" & DB_2_HTML(arrLessons(kIndexLesson_HomeWork, j)) & "</td>"
					If nTypeView <> KTPViewReport_KSubjectPlanViewReducedWithHa Then
						strReport = strReport & "<td>" & DB_2_HTML(arrLessons(kIndexLesson_Details, j)) & "</td>"
					End If
				End If
				If nTypeView=KTPViewReport_KSubjectPlanViewAll Then
				strReport = strReport & "<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_DetailInfComponent, j)) & "</td>" & _
					"<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_TotalLearningAndSubjectSkills, j)) & "</td>" & _
					"<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_ValuablyFocusedComponent, j)) & "</td>" & _
					"<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_TeachConditionAndImplementer, j)) & "</td>"
				ElseIf nTypeView=KTPViewReport_KSubjectPlanViewWithDecKes Then
				strReport = strReport & "<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_DetailInfComponent, j)) & "</td>" & _
					"<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_TotalLearningAndSubjectSkills, j)) & "</td>" & _
					"<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_ValuablyFocusedComponent, j)) & "</td>" & _
					"<td>" & GetDb2HtmlTextList(arrLessons(kIndexLesson_TeachConditionAndImplementer, j)) & "</td>"
				End If
				strReport = strReport & "</tr>"
				If arrLessons(kIndexLesson_Hours, j) = 1 Then n = n + 1
			Next
		End If
	Next
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function
%>
