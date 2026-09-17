<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="ParentPayDebt_inc.asp" -->

<% ' © 2007-2010 IRTech. All rights reserved.
Sub onHead()
	If bSendReport Then
		Call SendReportScript(obLanguage("ReportNames","kRNParentPayDebt"))
	End If
End Sub

Function GetReport()
	Dim strReport
	strReport = GetPageTitlePrint(obLanguage("ReportNames","kRNParentPayDebt"), Array(obLanguage("Reports","kMDOU2"), strSchoolName, obLanguage("Common","kYear"), lngCurrYear, obLanguage("Common","kMonth"), obLanguage.GetMonthName(lngCurrMonth)))
	If bEmpty Then
		strReport = strReport & GetWarningPrint(obLanguage("Reports","kNoPayDebtForMonth"))
	Else
		strReport = strReport & GetParentPayInfoTable()
	End If

	GetReport = strReport & GetPageVerPrint()
End Function

%>
