<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strTermID, strTermName
Dim strGradeID, strStageID, strSubjectID, strGradeFilterName

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","KRNTotalSubjectPerfomanceForTerm")
End Function

Dim strViewType
Sub specialRead()
	strTermID = GetSafeLng(obTokenMgr.GetData(strToken,stCurrTerm),0)
	strSubjectID = GetSafeLng(obTokenMgr.GetData(strToken,stCurrSubject),0)
	strViewType = GetSafe("ViewType","-1")
	If strViewType = "-1" Then
		strStageID = GetSafeLng(Request("NStage"), GetSafeLng(obTokenMgr.GetData(strToken,stCurrStage),-1))
		strGradeID = GetSafeLng(Request("GRADE"), GetSafeLng(obTokenMgr.GetData(strToken,stCurrGrade),-1))
	Else
		strStageID = -1
		strGradeID = IIF(strViewType <> "0", -1, -2)
	End IF

	If strTermID > 0 Then
		strTermName = objNSNET.GetTermName(strTermID)
	ElseIf strTermID = -1 Then
		strTermName = obLanguage("Common","kYear")
	ElseIF strTermID = -2 Then
		strTermName = obLanguage("Common","kYearTotal")
	End IF
	strGradeFilterName = IIf(strGradeID>0, strGradeID, obLanguage("Common","kAll"))
End Sub

Function GetReportTable()
	Dim strReport
	GetReportTable = GetSubjectReportTable(kGradingSystem_Mark)
	GetReportTable = GetReportTable & GetSubjectReportTable(kGradingSystem_Pass)
	If IsDull(GetReportTable) Then GetReportTable = GetWarningPrint(obLanguage("Reports","kNoPeriodMarks"))
End Function

const kSOU_b = "0"
const kSOU_p = "4"

Function GetSubjectReportTable(nPass)
	dim objComponent, SOUType
	'levels=4
	Set objComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMarkComponent")
	SOUType = IIF(GetSafe( "kSOU_Filter","kSOU_p") = "kSOU_p", kSOU_p, kSOU_b)
	If strViewType = "-1" Then
		GetSubjectReportTable = objComponent.GetTotalPerfomanceForSubjectTermForStageAndGrade(strStageID, strGradeID, strSubjectID, strCurrYearID, strTermID,nPass,SOUType)
	ElseIf strGradeID = -1 Then
		GetSubjectReportTable = objComponent.GetTotalPerfomanceForSubjectTermByGrades(strSubjectID, strCurrYearID, strTermID,nPass,SOUType)
	Else
		GetSubjectReportTable = objComponent.GetTotalPerfomanceForSubjectTermByClasses(strSubjectID, strCurrYearID, strTermID,nPass,SOUType)
	End If
	If Not IsDull(GetSubjectReportTable) Then GetSubjectReportTable = "<br><table class=""table-print-num-1"">" & GetSubjectReportTable & "</table>"
End Function

Function GetPageParams()
	Dim headArr
	headArr =  _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kSchoolPeriod"), strTermName, _
		obLanguage("Common","kSubject"), objNSNET.GetSubjectName(strSubjectID), _
		Empty, "", Empty, "")
	
	If strViewType = "-1" Then
		headArr(6)=obLanguage("Common","kStage")
		headArr(7)= GetStageNameBySSParamID(strStageID)
		headArr(8)=obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)
		headArr(9)= strGradeFilterName
	Else
		headArr(6)=obLanguage("Common","kView")
		headArr(7)= obLanguage("Reports",IIF(strViewType <> "0", "kByGrades", "kByClasses"),strFunctionalityType)
		Redim Preserve headArr(Ubound(headArr)-2)
	End If
	GetPageParams = headArr
End Function

Function GetStageNameBySSParamID(nParamID)
	Select Case nParamID
		Case 1: GetStageNameBySSParamID = obLanguage("SetupSchoolCurPlan","kGradeJunior",strFunctionalityType)
		Case 2: GetStageNameBySSParamID = obLanguage("SetupSchoolCurPlan","kGradeMiddle",strFunctionalityType)
		Case 3: GetStageNameBySSParamID = obLanguage("SetupSchoolCurPlan","kGradeSenior",strFunctionalityType)
		Case Else: GetStageNameBySSParamID = obLanguage("Common","kAll")
	End Select
End Function
%>
