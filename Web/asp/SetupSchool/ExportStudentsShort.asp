<!-- #INCLUDE Virtual="/asp/headerexcel_s.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/UsersExport_inc.asp -->
<!-- #INCLUDE file="MoveDoc_inc.asp" -->
<% ' © 2007-2008 IRTech. All rights reserved.

Dim lngGrade
Dim bAddSchool, strSearch
Dim objStudentParentsList


Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserAnyRights(Array(arUsersEditStudents, arEditInfoSelf, arUsersEditStudentsMedInfo, arShortInfoStudents)) And PERSON_DATA
End	Function

Function UserListForRole()
	UserListForRole = RoleGroup_Students
End Function

Sub ReadStateSpecial()
	Call InitGrType()
End Sub

Sub Main()
	SetScriptTimeOut 900

	strTitle = obLanguage("FilterUsers","kStudentList",strFunctionalityType)
	bAddSchool = CLng(strFunctionalityType) = kFuncType_Add

	If nFindType = FilterType_Search Then
		strSearch = strFio
		strGender = ""
		lngGrade = -3
		strLetter = null
	Else
		strSearch = ""
	End If
	
	Set objUsersList = objNSNET.GetStudentListWithDetails(strCurrYearID, strSchoolID, strFirstLetter, strLastLetter, strGender, lngGrade, lngSortOrder, strLetter, bFullAccessEditing, bAddSchool, strAccessibleParamNames, strAccessibleParamIDs, strSearch)
	Set objStudentParentsList = objUsersList.Fields()("rsStudentParents").Value

End Sub

Sub onDrawPage()
	If Not objUsersList.EOF Then %>
		<table border="1">
		<%
		While Not objUsersList.EOF
			Call InitUserID()%>
			<tr>
			<TD class="xtl"><%=DB2HTML_BR(objUsersList("CLASSNAME"))%></TD>
			<TD class="xtl"><%=DB2HTML_BR(objUsersList("LASTNAME"))%></TD>
			<TD class="xtl"><%=DB2HTML_BR(objUsersList("FIRSTNAME"))%></TD>
			<TD class="xtl"><%=DB2HTML_BR(objUsersList("MIDDLENAME"))%></TD>
			<TD class="xtl"><%=DB2HTML_BR(objUsersList("GENDER"))%></TD>
			<TD class="xtl"><%=Date2Str(objUsersList("BIRTHDATE"))%></TD><%
			Call DrawParents()
			Call DrawComment()
			%></tr><%

			objUsersList.MoveNext
		Wend
		%>
		</table><%
	End If
End Sub

Sub DrawComment()
	%><TD class="xtl"><%=DB2HTML(objNSNET.GetUserComment(strSafeUserID, strCurrYearID))%></TD><%
End Sub

Sub DrawParents()
	Dim strLastName, strFirstName, strMiddleName
	Dim strMLastName, strMFirstName, strMMiddleName
	Dim strFLastName, strFFirstName, strFMiddleName
	Dim strGender, bShowParents, bFemale
	Dim strMBirthDate, strFBirthDate, strBirthDate
 

	bShowParents = False
	If Not objStudentParentsList.EOF Then

		If objStudentParentsList.RecordCount <= 2 Then
			bShowParents = True
   			strMLastName = ""
			strMFirstName = ""
			strMMiddleName = ""
			strFLastName = ""
			strFFirstName = ""
			strFMiddleName = ""
			strFBirthDate = ""
			strMBirthDate = ""

			strLastName = GetSafeStr(objStudentParentsList("LASTNAME"), -1, "")
			strFirstName = GetSafeStr(objStudentParentsList("FIRSTNAME"), -1, "")
			strMiddleName = GetSafeStr(objStudentParentsList("MIDDLENAME"), -1, "")
			strBirthDate =  GetSafeStr(Date2Str(objStudentParentsList("BIRTHDATE")), -1, "")
			If strBirthDate = "&nbsp;" Then
				strBirthDate = ""
			End If



			strGender = GetSafeStr(objStudentParentsList("GENDER"), 1, Null)
			If strGender = obLanguage("Common","kMaleLet") Then
				strMLastName = strLastName
				strMFirstName = strFirstName
				strMMiddleName = strMiddleName
				strMBirthDate = strBirthDate
				bFemale = False
			ElseIf strGender = obLanguage("Common","kFemaleLet") Then
				strFLastName = strLastName
				strFFirstName = strFirstName
				strFMiddleName = strMiddleName
				strFBirthDate = strBirthDate
				bFemale = True
			Else
				bShowParents = False
			End If

			objStudentParentsList.MoveNext
			If Not objStudentParentsList.EOF And bShowParents Then
				strLastName = GetSafeStr(objStudentParentsList("LASTNAME"), -1, "")
				strFirstName = GetSafeStr(objStudentParentsList("FIRSTNAME"), -1, "")
				strMiddleName = GetSafeStr(objStudentParentsList("MIDDLENAME"), -1, "")
				strBirthDate = GetSafeStr(Date2Str(objStudentParentsList("BIRTHDATE")), -1, "")
				If strBirthDate = "&nbsp;" Then
					strBirthDate = ""
				End If
				strGender = GetSafeStr(objStudentParentsList("GENDER"), 1, Null)
				If strGender = obLanguage("Common","kMaleLet") Then
					strMLastName = strLastName
					strMFirstName = strFirstName
					strMMiddleName = strMiddleName
					strMBirthDate = strBirthDate
				ElseIf strGender = obLanguage("Common","kFemaleLet") Then
					strFLastName = strLastName
					strFFirstName = strFirstName
					strFMiddleName = strMiddleName
					strFBirthDate = strBirthDate
				End If
			End If
		End If
	End If

	%><td class="xtl"><%=DB2HTML(strMLastName)%></td>
	<td class="xtl"><%=DB2HTML(strMFirstName)%></td>
	<td class="xtl"><%=DB2HTML(strMMiddleName)%></td>
	<td class="xtl"><%=DB2HTML(strMBirthDate)%></td>
	<td class="xtl"><%=DB2HTML(strFLastName)%></td>
	<td class="xtl"><%=DB2HTML(strFFirstName)%></td>
	<td class="xtl"><%=DB2HTML(strFMiddleName)%></td>
	<td class="xtl"><%=DB2HTML(strFBirthDate)%></td><%

End Sub

Sub InitUserID()
	strSafeUserID = GetSafeID(objUsersList("STUDENTID"), Null)
End Sub

Sub FreeResources()
	objStudentParentsList.Close
	Set objStudentParentsList = Nothing
End Sub

Function GetXlsFileName()
	GetXlsFileName = obLanguage("Common","kExportShort") & ".xls"
End Function

%>
