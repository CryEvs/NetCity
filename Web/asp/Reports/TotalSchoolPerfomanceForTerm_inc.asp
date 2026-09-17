<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strTermID, strTermName
Dim Quality

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames",IIF(Quality,"kTotalSchoolQualityForTerm","KRNTotalSchoolPerfomanceForTerm")) & obLanguage("Common","kSchool_d",strFunctionalityType)
End Function
Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kSchoolPeriod"),strTermName)
End Function

Sub specialRead()
	SetScriptTimeOut 900

	strTermID = CLng(GetSafeID(obTokenMgr.GetData(strToken,stCurrTerm),"0"))
	If strTermID > 0 Then
		strTermName = objNSNET.GetTermName(strTermID)
	ElseIf strTermID = -1 Then
		strTermName = obLanguage("Common","kYear")
	ElseIf strTermID = -2 Then
		strTermName = obLanguage("Common","kYearTotal")
	End If
End Sub

Function GetReportTable()
	dim objComponent
	Dim minimumGrade

	minimumGrade = 0
	If (CLng(strFunctionalityType) = kFuncType_Common) Then minimumGrade = minGradeForTotals

	Set objComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMarkComponent")
	If Quality Then
		GetReportTable = objComponent.GetTotalPerfomanceForTermByClasses(-1,strCurrYearID, strTermID, minimumGrade)
	Else
		GetReportTable = objComponent.GetTotalPerfomanceForTermByGrades(-1,strCurrYearID, strTermID)
	End If
	If Not IsDull(GetReportTable) Then
		GetReportTable = "<br><table class=""table-print-num-1"">" & GetReportTable & "</table>"
	Else
		GetReportTable = GetWarning(obLanguage("Reports","kNoPeriodMarks"))
	End If
End Function

Function GetTableHeader()
End Function


%>
