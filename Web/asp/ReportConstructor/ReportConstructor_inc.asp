<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.
Dim strReportID, bNoReport, strQueryID
Dim strTitleWizard, strTitleWizardStep
Const kMaxLenParam = 128

Function GetPageTitle()
	GetPageTitle = strTitleWizard & " - " & GreenText( strTitleWizardStep )
End Function

Function GetSafeReportID( nReportId )
	Dim objReportInfo
	Set objReportInfo = objNSNETWork.GetReportInfo(nReportId )
	If objReportInfo.EOF Then Call GenerateHTMLError(obLanguage("Constructor","kErrReport"), "/asp/ReportConstructor/ReportConstructor.asp", strToken)
	GetSafeReportID = nReportId
End Function

Sub onHeadSpecialAdd()
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = IIf( bIsEducManager, Empty, MenuItem_miReports )
End Function

Function GetPageTabItem()
	GetPageTabItem = IIF( bIsEducManager, TabItem_tb_EM_ReportConstructor, TabItem_tbReportConstructor)
 	bTabInternalPage = True
End Function

Function hasPageQHelp()
	hasPageQHelp = True
End Function

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = True Else hasUserRightsOnPage = HasUserRight(arReportsUseReportConstructor)
End Function

Sub onHead()
	Call onHeadSpecial()
End Sub

Function DrawButtonsFilters(bButtons, bObjects, bStatus, strForm)
	DrawButtonsFilters = DrawButtonsFiltersEx(bButtons, True, strForm)
End Function

Sub DrawButtons()
End Sub

Sub DrawFilters(strForm)
End Sub

Sub DrawObjects(strForm)
End Sub%>