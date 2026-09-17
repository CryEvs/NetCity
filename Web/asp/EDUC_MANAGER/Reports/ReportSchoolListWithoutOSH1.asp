<!-- #INCLUDE File="FormFilter_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim objCountSchools, nEMId, strGlobalYearName

Function GetPageTitle()
	GetPageTitle = obLanguage("Reports","kReport") & ": " & GreenText(obLanguage("EMReportNames","kRNCountSchoolsNoCloseOSH1"))
End Function

Sub ReadState()
	specialread
	Init
End Sub

Sub Init()
	bIsHeavyReport = false
	bIsCheckDates = false

	bNoCorrectScale = False
	bDrawButtonGenerate = True
	bHasGraph = False
	bDrawReportButtonPanel = True
End Sub

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StatReports 
End Function

Sub onHeadReport()
End Sub

%>
