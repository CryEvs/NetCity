<!-- #INCLUDE VIRTUAL="/asp/headersimple.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Administration/FindUsers_inc.asp"-->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const kImportExt = "Расширенный импорт"

Dim objStaffList, strSaved, strFilterType
Dim arrRs,lngStaffCnt
Dim pageCount, nCurrPage, nPageSize

Function GetPageTitle()
	GetPageTitle = obLanguage("FilterUsers","kStaffList")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStaff
 End Function

Function OnKeypress()
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arUsersEditStaff) Or HasUserRight(arShortInfoStaff) or HasUserRight(arUsersEditStaffMedInfo)
End Function

Sub Main()
End Sub

Function onLoad()
End Function
%>
