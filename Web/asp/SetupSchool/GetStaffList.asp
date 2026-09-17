<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/GetUsers_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim nWorkStatus

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arUsersEditStaff) Or HasUserRight(arShortInfoStaff) or HasUserRight(arUsersEditStaffMedInfo)
End Function

Function UserListForRole()
	UserListForRole = RoleGroup_Staffs
End Function

Sub WriteFilter()
	Call obTokenMgr.SetData(strToken,"ROLEID",0)
	Call obTokenMgr.SetData(strToken, stWorkStatus, nWorkStatus)
End Sub

Sub ReadFilter()
	nWorkStatus = GetSafeLng(Request("WorkStatus"), GetSafeLng(obTokenMgr.GetData(strToken, stWorkStatus), kWorkStatus_All))
End Sub

Function LoadData()
	Dim objStaffList
	' correct sort order
	' for staff the available sort orders are: LASTNAME ASC, FIRSTNAME ASC (0); LASTNAME DESC, FIRSTNAME DESC (1)
	If lngSortOrder > 1 Then lngSortOrder = 0

	Select Case nFindType
		Case FilterType_Filter
			Set objStaffList = objNSNET.GetStaffList(strSchoolID, strCurrYearID, strFirstLetter, strLastLetter, strGender, lngSortOrder, False, nPageSize, nCurrPage, pageCount, "", nWorkStatus)
		Case FilterType_Search
			'TODO. доработать фильтр
			nCurrPage = 0
			pageCount = 1
			Set objStaffList = objNSNET.SearchUsers(1, strFio, strCurrYearID, strSchoolID, lngSortOrder, 0, null)
		Case Else
			GenerateError "Неверный тип фильтра"
	End Select

	Set LoadData = objStaffList
End Function

Function GetData(objUserList)
	Dim properties, columns
	properties = Array("id", "lastname", "firstname", "middlename", "gender", "position", "roles")
	columns = Array("USERID", "LASTNAME", "FIRSTNAME", "MIDDLENAME", "GENDER", "ITEMNAME", "ROLESABBREV")
	GetData = objUserList.ToJSON(properties, columns)
End Function
%>
