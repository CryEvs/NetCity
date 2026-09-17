<!-- #INCLUDE VIRTUAL="/asp/headerexcel_s.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/UsersExport_inc.asp"-->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim lngGrade, strSearch

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserAnyRights(Array(arUsersEditStudents, arEditInfoSelf, arUsersEditStudentsMedInfo, arShortInfoStudents)) And PERSON_DATA
End	Function

Function UserListForRole()
	UserListForRole = RoleGroup_Parents
End Function

Sub ReadStateSpecial()
	Call InitGrType
End Sub

Sub Main()
	SetScriptTimeOut 900

	If nFindType = FilterType_Search Then
		strSearch = strFio
		strGender = ""
		lngGrade = -3
		strLetter = null
	Else
		strSearch = ""
	End If

	nRoleFilter = RoleGroup_Parents
	Call GetAccessibleParams()
	
	Set objAttrParams = objNSNET.GetUserParametersListForRole(strSchoolID, rlParent, bFullAccessEditing, strAccessibleParamNames, strAccessibleParamIDs)
	Set objUsersList = objNSNET.GetParentListWithDetails(strCurrYearID, strSchoolID, strFirstLetter, strLastLetter, strGender, lngGrade, strLetter, bFullAccessEditing, strAccessibleParamNames, strAccessibleParamIDs, strSearch)
	strTitle = obLanguage("FilterUsers","kParentList")
	bParent = true
End Sub

Sub ShowUserExtInfoFA()
	Call ShowUserPassport()
	Call ShowUserExtInfo()
End Sub

Sub InitUserID()
	strSafeUserID = GetSafeID(objUsersList("PARENTID"), Null)
End Sub

Function DrawDb2HtmlFreeParameter( ByVal strSafeUserID, ByVal strParamName, rsUserAttrParams, strParamID_Title)
	Dim objRs, strTmp
	Set objRs = objNSNET.GetParentAids(strSafeUserID, strCurrYearID)
	If objRs.EOF Then
		DrawDb2HtmlFreeParameter = "&nbsp;"
	Else
		strTmp = ""
		While Not objRs.EOF
			strTmp = strTmp & Date2Str(objRs("AIDDATE")) & ", " & DB2HTML_BR(objRs("AIDRES_NAME")) & ", " & DB2HTML_BR(objRs("AIDCOMMENT")) & "<br>"
			objRs.MoveNext
		Wend
		DrawDb2HtmlFreeParameter = strTmp
	End If
	DrawDb2HtmlFreeParameter = "<td class=""cell-text"">" & DrawDb2HtmlFreeParameter & "</td>"
End Function

Sub DrawUserRoleFeatureTitle()%>
	<th rowspan="2"><%=obLanguage("Common","kChildren")%></th><%
End Sub

Sub DrawUserRoleFeature()
	Dim objRs
	Set objRs = objNSNET.GetStudentListForParent(strSafeUserID, strCurrYearID, false)
	If objRs.EOF Then%><td>&nbsp;</td><%
	Else%><td class="cell-text"><%
		Do
			Response.Write DB2HTML_BR(objRs("STUDENTNAME"))
			If Not IsNull(objRs("CLASSNAME"))Then Response.Write ", "& DB2HTML_BR(objRs("CLASSNAME"))
			objRs.MoveNext
			If objRs.EOF Then Exit Do
			Response.Write "<br>"
		Loop%></td><%
	End If
End Sub

Function GetXlsFileName()
	GetXlsFileName = obLanguage("FilterUsers","kParentList") & ".xls"
End Function
%>
