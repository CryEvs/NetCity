<!-- #INCLUDE FILE="Stat_inc.asp" -->
<!-- #INCLUDE FILE="SMSStat_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleSMSStat") &" <i>" & NETSCHOOL_PRODUCT_NAME & "</i><br>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Statistics
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Statistics
 End Function

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stStartDate, dtStartDate)
	Call obTokenMgr.SetData(strToken, stEndDate, dtEndDate)
	Call obTokenMgr.SetData(strToken, "ViewSchoolID", strViewSchoolID)
End Sub

Sub DrawSchoolsFilter( strForm )
	DrawFilterRow "", obLanguage("Common","kEO"), "SCHOOL", objSchoolRS, "SCHOOLID", "SCHOOLNAME", strViewSchoolID, False
End Sub

Sub specialFilters( strForm )
	Call obTokenMgr.SetData(strToken, "SMSEventType", strTypeID)
	DrawFilterRow strForm, obLanguage("ServAdmin","kSMSType"), "SMSEventType", objTypesRS, "EVENTTYPEID", "TYPENAME", strTypeID, True
End Sub
%>
