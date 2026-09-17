<!-- #INCLUDE FILE="../headerprint_s.asp" -->
<!-- #INCLUDE FILE="PublicUsers_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim objStaffList, strCurUserID, objStaffRoles
Dim bDisplayLastLogin, objRsLastLogin, strSearch
Dim nWorkStatus

Function UserListForRole()
	UserListForRole = RoleGroup_Staffs
End Function

Sub GetArrUsersOtherFilters()
	Dim nSize
	If nWorkStatus <> kWorkStatus_All Then
		nSize = UBound(arrUsersFilters)
		ReDim Preserve arrUsersFilters(nSize+2)
		arrUsersFilters(nSize+1) = obLanguage("Common","kWorkStatus")
		arrUsersFilters(nSize+2) = IIf(nWorkStatus = kWorkStatus_Dismissed, obLanguage("Common","kDismissed"), obLanguage("Common","kWorking"))
	End If
End Sub

Sub Main()
	Dim nTmp
	If obLanguage.Compare(strFirstLetter,strLastLetter, obContext.LocalSettings.DefaultLanguage) > 0 Then strLastLetter = strFirstLetter

	If nFindType = FilterType_Search Then
		strSearch = GetSafeStr(Trim(Request("SRCH_TEXT")),20,GetSafeStr(obTokenMgr.GetData(strToken,stUsersStaffFioSearch),20,""))
		strGender = ""
		nWorkStatus = kWorkStatus_All
	Else
		strSearch = ""
		nWorkStatus = GetSafeLng(obTokenMgr.GetData(strToken, stWorkStatus), kWorkStatus_All)
	End If

	Set objStaffList = objNSNET.GetStaffList(strSchoolID,strCurrYearID, strFirstLetter, strLastLetter, strGender, lngSortOrder, True, 0, 0, nTmp, strSearch, nWorkStatus)

	bDisplayLastLogin = objNSNET.IsWorkConnection()
	Set objStaffRoles = objNSNET.GetStaffSecurityRoles()
End Sub

Sub onDrawPage()
Dim i, objUserRoles, strRole
Call GetArrUsersFilters()
Response.Write GetPageTitlePrint(obLanguage("FilterUsers","kStaffList"), arrUsersFilters)
If Not objStaffList.EOF Then %>


<table class="table-print">
<tr>
	<th rowspan="2"><%=obLanguage("Filter","kN_PP")%></th><th rowspan="2"><%=obLanguage("Common","kDisplayName")%></th><%
	If bCanShowUsersLoginNames Then%><th rowspan="2"><%=obLanguage("Common","kUserName")%></th><%End If%>
	<th rowspan="2"><%=obLanguage("Filter","kBasePosition")%></th>
	<th rowspan="2"><%=obLanguage("Common","kGender")%></th><th colspan="<%=objStaffRoles.RecordCount%>"><%=obLanguage("Common","kUserRights")%></th><%
	If bDisplayLastLogin Then %><th rowspan="2"><%=obLanguage("Filter","kDateOfLastLogin")%></th><%End If%>
	<th rowspan="2"><%=obLanguage("Common","kHomePhone_")%></th><th rowspan="2">E-mail</th>
</tr>
<tr><%
	While not objStaffRoles.EOF
		strRole = objStaffRoles("ROLENAME_FUNC")
		If IsArray(Application(strRole)) Then strRole = Application(strRole)(strFunctionalityType)
		Response.write "<th>" & strRole & "</th>"
		objStaffRoles.MoveNext
	Wend
	objStaffRoles.MoveFirst
%></tr>
<%  i=1
	While Not objStaffList.EOF
	Set objUserRoles = objStaffList("ROLESABBREV").value
	strCurUserID = objStaffList("USERID")
	If bDisplayLastLogin Then
		Set objRsLastLogin = objNSNET.GetLastUserLogin(strCurUserID, strSchoolID)
		TestError obLanguage("Filter","kErrLastUserLogin")
	End If%>
	<tr><td class="cell-num"><%=i%>&nbsp;</td>
	<td width="40%" class="cell-text"><%=DB2HTML(objStaffList("NICKNAME"))%></td><%
	If bCanShowUsersLoginNames Then%><td width="20%" class="cell-text"><%=DB2HTML(objStaffList("LOGINNAME"))%></td><%End If%>
	<td class="cell-text"><%=DB2HTML(objStaffList("ITEMNAME"))%></td>
	<td class="cell-text"><%=DB2HTML(objStaffList("GENDER"))%></td>
	<%
	While Not objStaffRoles.EOF
		If Not objUserRoles.EOF Then
			Do While Not objUserRoles.EOF
				If objUserRoles("ROLEID") = objStaffRoles("ROLEID") Then Response.write "<td>X</td>" : Exit Do
				objUserRoles.MoveNext
				If objUserRoles.EOF Then Response.write "<td></td>"
			Loop
		Else
			Response.write "<td></td>"
		End IF
		objUserRoles.MoveFirst
		objStaffRoles.MoveNext
	Wend
	objStaffRoles.MoveFirst
	If bDisplayLastLogin Then
		Response.Write "<td class=""cell-date"">"
		If objRsLastLogin.EOF Then
			Response.Write "&nbsp;"
		Else
			Response.Write Date2Str(objRsLastLogin("LOGINTIME")) & " " & Time2Str(objRsLastLogin("LOGINTIME"))
		End If
		Response.Write "</td>"
	End If%>
	<td><nobr><%=DB2HTML(objStaffList("HOMEPHONE"))%></nobr></td>
	<td><%=DB2HTML(objStaffList("EMAIL"))%></td>
</tr><%
		i = i+1
		objStaffList.MoveNext
	Wend %>
</table>
<% End If
Response.Write GetPageVerPrint()
End Sub
%>
