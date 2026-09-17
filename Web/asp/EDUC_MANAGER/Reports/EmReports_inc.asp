<!-- #INCLUDE FILE="../../Reports/Reports_inc.asp" -->
<!-- #INCLUDE FILE="../../scripts/FiltersCommon.asp" -->
<!-- #INCLUDE FILE=../../scripts/FilterEMs.asp -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim strFilterEMID, shortReportName

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Reports
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StandardReports 
End Function

Sub ReadState()
	strFilterEMID = ReadEMRegionFilter(False)
	strScriptName = Request.ServerVariables("SCRIPT_NAME")
	strReportName = CStr(GetSafe("RPNAME", Null))
	strReportId = CStr(GetSafe("RPTID", Null))
	'strThemeID = CStr(GetSafe("ThmID", Null))
	bShowFavoriteReport = true
	specialRead
	Call Init()
	bFavoriteReport = IsFavoriteReport()
End Sub

Sub DrawFilters( strForm )
	Call DrawEMRegionFilter_2(strForm)
	specialFilters strForm
End Sub

Function GetSchoolReportUrl()
	GetSchoolReportUrl = "/asp/Reports/" & GetShortReportName() & ".asp"
End Function

%>
