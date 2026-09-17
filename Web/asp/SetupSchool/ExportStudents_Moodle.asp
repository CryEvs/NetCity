<!-- #INCLUDE Virtual="/asp/headerexcel_s.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/UsersExport_inc.asp -->
<!-- #INCLUDE file="MoveDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim lngGrade
Dim objStudentParentsList
Dim bAddSchool, strSearch

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
End Sub

Sub onDrawPage()
	If Not objUsersList.EOF Then %>
		<table border="1">
		<tr nowrap bgcolor="#e7eff7">
			<th >username</th>
			<th >password</th>
			<th >firstname</th>
			<th >lastname</th>
			<th >email</th>
			<th >idnumber</th>
		</tr><%
		While Not objUsersList.EOF
			Call InitUserID()%>
			<tr>
			<TD class="xtl"><%=DB2HTML_BR(LCase(objUsersList("LOGINNAME")))%></TD>
			<TD class="xtl">changeme</TD>
			<TD class="xtl"><%=DB2HTML_BR(objUsersList("FIRSTNAME"))%></TD>
			<TD class="xtl"><%=DB2HTML_BR(objUsersList("LASTNAME"))%></TD>
			<TD class="xtl"><%=DB2HTML_BR(objUsersList("EMAIL"))%></TD>
			<TD class="xtl"><%=strSafeUserID%></TD>
			</tr><%
			objUsersList.MoveNext
		Wend
		%>
		</table><%
	End If
End Sub

Sub InitUserID()
	strSafeUserID = GetSafeID(objUsersList("STUDENTID"), Null)
End Sub

Function GetXlsFileName()
	GetXlsFileName = obLanguage("Common","kExport_Moodle") & ".xls"
End Function

%>
