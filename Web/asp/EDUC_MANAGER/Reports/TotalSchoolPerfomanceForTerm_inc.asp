<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strTermID, strTermName, nGlobalYearID, bRecalc

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames", "kRNTotalSchoolPerfomance")
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"), objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"), objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kSchoolPeriod"), strTermName)
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	bRecalc =  GetSafeBool(Request("recalc"), False)

	strTermID = GetSafe("TERMNAME", "0")
	If strTermID = "kYear" Then
		strTermName = obLanguage("Common","kYear")
	ElseIf strTermID = "kYearTotal" Then
		strTermName = obLanguage("Common","kYearTotal")
	Else
		strTermName = strTermID
	End If
End Sub

Function GetReportTable()
	dim objComponent
	SetScriptTimeOut 900
	on error resume next
'GetReportTable = strTermName
	Set objComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMarkComponent")
	GetReportTable = objComponent.GetTotalPerfomanceForTermBySchools(filterEMID, nGlobalYearID, strTermID, bRecalc)
	'stop
	TestError obLanguage("Common","kUnexpErr") & err.description
	If Not IsDull(GetReportTable) Then
		GetReportTable = "<br><table class=""table-print-num-1"">" & GetReportTable & "</table>"
	Else
		GetReportTable = GetWarning(obLanguage("Reports","kNoPeriodMarks"))
	End If
End Function

Function GetTableHeader()
End Function


%>
