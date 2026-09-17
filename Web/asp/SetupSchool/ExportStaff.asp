<!-- #INCLUDE FILE="../headerexcel_s.asp" -->
<!-- #INCLUDE FILE="UsersExport_inc.asp"-->
<!-- #INCLUDE FILE="Seniorities_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim strCurUserID, objStaffRoles
Dim arrRoles
Dim cmdSeniorities, arrSeniorTitle, strSearch
Dim nWorkStatus

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserAnyRights(Array(arUsersEditStaff)) And PERSON_DATA
End	Function

Sub GetArrUsersOtherFilters()
	Dim nSize
	If nWorkStatus <> kWorkStatus_All Then
		nSize = UBound(arrUsersFilters)
		ReDim Preserve arrUsersFilters(nSize+2)
		arrUsersFilters(nSize+1) = obLanguage("Common","kWorkStatus")
		arrUsersFilters(nSize+2) = IIf(nWorkStatus = kWorkStatus_Dismissed, obLanguage("Common","kDismissed"), obLanguage("Common","kWorking"))
	End If
End Sub

Function UserListForRole()
	UserListForRole = RoleGroup_Staffs
End Function

Sub Main()
	Dim objRs
	ReDim arrRoles(2)
	SetScriptTimeOut 900
	arrRoles(0) = rlAdmin : arrRoles(1) = rlPrincipal : arrRoles(2) = rlTeacher
	
	If nFindType = FilterType_Search Then
		strSearch = strFio
		strGender = ""
		nWorkStatus = kWorkStatus_All
	Else
		strSearch = ""
		nWorkStatus = GetSafeLng(Request("WS"), kWorkStatus_All)
	End If
	nRoleFilter = RoleGroup_Staffs
	Call GetAccessibleParams()

	Set objAttrParams = objNSNET.GetUserParametersListForRole(strSchoolID, arrRoles, bFullAccessEditing, strAccessibleParamNames, strAccessibleParamIDs)
	Set objUsersList = objNSNET.GetStaffListWithDetails(strCurrYearID, strSchoolID, strFirstLetter, strLastLetter, strGender, lngSortOrder, bFullAccessEditing, strAccessibleParamNames, strAccessibleParamIDs, strSearch, nWorkStatus)

	strTitle = obLanguage("FilterUsers","kStaffList")
	Set cmdSeniorities = objNSNET.GetStaffSeniorities_Prepare()
	Set objRs = objNSNET.GetStaffSeniorities_Execute(cmdSeniorities, "0") ' получаем только заголовки видов стажей
	If objRs.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	arrSeniorTitle = GetSenArray(objRs)
	Set objStaffRoles = objNSNET.GetStaffSecurityRoles()
End Sub

Sub ShowUserExtInfoFA()
	Call ShowUserPassport()
End Sub

Sub FreeResources()
	Call objNSNET.DisposeCommand(cmdSeniorities)
End Sub

Sub InitUserID()
	strSafeUserID = GetSafeID(objUsersList("USERID"), Null)
End Sub

Sub DrawUserRoleFeatureTitle()%>
	<th colspan="<%=objStaffRoles.RecordCount%>"><%=obLanguage("Common","kUserRights")%></th>
	<th rowspan="2"><%=obLanguage("Common","kTS")%></th><%
End Sub

Sub DrawUserRoleFeature()
	Dim objUserRoles
	Set objUserRoles = objUsersList("ROLESABBREV").value	
	While Not objStaffRoles.EOF
		If Not objUserRoles.EOF Then
			Do While Not objUserRoles.EOF
				If objUserRoles("ABBREV") = objStaffRoles("ABBREV") Then Response.write "<td style=""font-size: 10pt"" class=""text-center""><b>X</b></td>" : Exit Do
				objUserRoles.MoveNext
				If objUserRoles.EOF Then Response.write "<td style=""font-size: 10pt"" class=""text-center"">&nbsp;</td>"
			Loop
		Else
			Response.write "<td style=""font-size: 10pt"" class=""text-center"">&nbsp;</td>"
		End IF
		objUserRoles.MoveFirst
		objStaffRoles.MoveNext
	Wend
	objStaffRoles.MoveFirst
	Call DrawTeacherSubjects(strSafeUserID)
End Sub

Sub DrawUserRoleFeatureParams()
	Dim strRole
	While not objStaffRoles.EOF
		strRole = objStaffRoles("ROLENAME_FUNC")
		Response.write "<th>" & strRole & "</th>"
		objStaffRoles.MoveNext
	Wend
	objStaffRoles.MoveFirst
End Sub

Sub DrawTeacherSubjects(ByVal strID)
	Dim oSubjects

	Set oSubjects = objNSNET.GetTeacherSubjects(strID, strSchoolID)
	If oSubjects.EOF Then%>
		<td>&nbsp;</td><%
	Else%><td class="cell-text"><%
		Do
			Response.Write DB2HTML_BR(oSubjects("SUBJECTNAME"))
			oSubjects.MoveNext
			If oSubjects.EOF Then Exit Do
			Response.Write "<br>"
		Loop%></td><%
	End If
End Sub

Sub DrawGroupParamsTitle_Free(ByVal strParamName)
	If strParamName = "SENIORITY" Then%>
		<th colspan="<%=(Ubound(arrSeniorTitle, 2) + 1)%>" rowspan="2"><%=obLanguage("SetupSchool","kSeniority")%></th><% ' заголовок несколько отличается
	Else%>
		<th rowspan="2"><%=DB2HTML_BR(GetSafeStr(objAttrParams("TITLE"),-1,""))%></th><% ' common...
	End If
End Sub

Sub DrawGroupParamsSubTitles_Free(ByVal strParamName)
	Dim strSenAbbr, i
	If strParamName = "SENIORITY" Then
		For i = 0 To Ubound(arrSeniorTitle, 2)
			strSenAbbr = arrSeniorTitle(4, i)%>
			<th><%=DB2HTML_BR(GetSafeStr(strSenAbbr,-1,""))%></th><%
		Next
	End If
End Sub

Function DrawDb2HtmlFreeParameter( ByVal strSafeUserID, ByVal strParamName, rsUserAttrParams, strParamID_Title )
	Dim objRs, strTmp, i
	Dim arrSenior, arrTotals
	Dim strParamID_Curr

	Select Case strParamName
	Case "SENIORITY"
		Set objRs = objNSNET.GetStaffSeniorities_Execute(cmdSeniorities, strSafeUserID)
		If objRs.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
		arrSenior = GetSenArray(objRs)
		strTmp = ""
		For i = 0 To Ubound(arrSenior, 2)
			arrTotals = arrSenior(3, i)
			If IsArray(arrTotals) Then
				arrTotals = arrSenior(3, i)
				strTmp = strTmp & "<td class=""cell-text"">" & arrTotals(0) & " " & obLanguage("SetupSchool","kYears") & ", " & arrTotals(1) & " " & obLanguage("SetupSchool","kMonthsS") & ", " & arrTotals(2) & " " & obLanguage("SetupSchool","kDaysS") & "</td>"
			Else
				strTmp = strTmp & "<td class=""cell-text"">&nbsp;</td>"
			End If
		Next
		DrawDb2HtmlFreeParameter = strTmp
	Case Else
		If rsUserAttrParams.EOF Then
			DrawDb2HtmlFreeParameter = "<td class=""cell-text"">&nbsp;</td>"
		Else
			Select Case rsUserAttrParams("NAME")
			Case "RATING", "RATING2", "REQ_RATING", "REQ_RATING2", "RELATIVES"
				strParamID_Curr = GetSafeID(rsUserAttrParams("PARAMETERID"), Null)
				If strParamID_Curr = strParamID_Title Then
					DrawDb2HtmlFreeParameter = "<td class=""cell-text"">"&rsUserAttrParams("PARAMVALUE")&"&nbsp;</td>"
				Else
					DrawDb2HtmlFreeParameter = "<td class=""cell-text"">&nbsp;</td>"
				End If
			Case Else
				DrawDb2HtmlFreeParameter = "<td class=""cell-text"">&nbsp;</td>"
			End Select
		End If
	End Select
End Function

Function GetXlsFileName()
	GetXlsFileName = obLanguage("FilterUsers","kStaffList") & ".xls"
End Function
%>
