<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>

ReadArrays

Call DrawChart(kChartTypeColumnClustered, obLanguage("Common","kSubject"), obLanguage("Reports","kAverageMark2"), obLanguage("ReportNames","kRNStudentAverageMark",strFunctionalityType))
%>
