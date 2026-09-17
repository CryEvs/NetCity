<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

ReadArrays
Call DrawChart(kChartTypeColumnClustered, obLanguage("Filter","kClassGB",strFunctionalityType), obLanguage("Reports","kAverageMark2"), obLanguage("ReportNames","kRNTeacherAverageMark",strFunctionalityType))
%>
