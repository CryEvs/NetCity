<!-- #INCLUDE FILE="Stat_inc.asp" -->
<!-- #INCLUDE FILE="ErrorStat_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleErrorStat") &" <i>" & NETSCHOOL_PRODUCT_NAME & "</i><br>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Statistics
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Statistics
 End Function

Sub specialFilters( strForm )
	Call obTokenMgr.SetData(strToken, "StatErrorType", nErrorType)
	Call DrawSimpleFilterRow(obLanguage("ServAdmin","kTypeOfErrors"), "ErrorType", Array(kErrorType, obLanguage("ServAdmin","kErrors"), kWarningType, obLanguage("ServAdmin","kWarnings")), nErrorType, False, "OnChangeSelect('" & strForm & "','" & strScriptName & "')")
End Sub%>
