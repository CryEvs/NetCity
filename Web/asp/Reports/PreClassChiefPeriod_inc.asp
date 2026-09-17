<!-- #INCLUDE VIRTUAL="/asp/Reports/TotalGroupResults_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNPreClassChiefReportForTerm",strFunctionalityType)
End Function

Sub calcStrParams()
	strNoStudentsMessage = obLanguage("Reports","kNoStudentsWithCondition",strFunctionalityType)
End Sub

Sub specialMain()
	Call CalcTermParams()
	Call calcStrParams()
	nOneOrTwo = 2
	arrRows = objNSNET.GetPreStudResultReportRows(strClassID, strTermID, strPrevTermID, strCurrYearID, nOneOrTwo, nAbbrLimit,nViewType, kIsTKR)
	strReport = GetReport()
End Sub
%>
