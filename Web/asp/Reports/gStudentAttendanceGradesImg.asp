<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function GetChartScaleMaximum()
	GetChartScaleMaximum = 100
End Function

ReadArrays

Call DrawChart(kChartTypeColumnClustered, obLanguage("Common","kMonth"), obLanguage("Reports","kStudentQuality",strFunctionalityType), obLanguage("ReportNames","kRNQualityReport"))
%>
