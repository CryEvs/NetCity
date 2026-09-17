<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>

Dim strSubjectID, strTitle

strSubjectID = GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject), Null)

If strSubjectID = "-1" Then
	strTitle = obLanguage("Reports","kAverageMarkForSchoolDyn",strFunctionalityType)
Else
	strTitle = obLanguage("ReportNames","kRNAverageMarkForSubjDyn")
End If

ReadArrays

Call DrawChart(kChartTypeColumnClustered, obLanguage("Filter","kClassGB",strFunctionalityType), obLanguage("Reports","kAverageMark2"), strTitle)
%>
