<!-- #INCLUDE FILE="../headerexcel_s.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/UsersExport_inc.asp -->
<!-- #INCLUDE FILE="Seniorities_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim strCurUserID, objStaffRoles
Dim cmdSeniorities, arrSeniorTitle, strSearch

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserAnyRights(Array(arUsersEditStaff)) And PERSON_DATA
End	Function

Sub GetArrUsersOtherFilters()
End Sub

Sub Main()
	SetScriptTimeOut 900
	If nFindType = FilterType_Search Then
		strSearch = strFio
		strGender = ""
	Else
		strSearch = ""
	End If
	Set objUsersList = objNSNET.GetStaffListWithDetails(strCurrYearID, strSchoolID, strFirstLetter, strLastLetter, strGender, lngSortOrder, bFullAccessEditing, strAccessibleParamNames, strAccessibleParamIDs, strSearch, kWorkStatus_Working)
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
    Call FreeResources()
End Sub

Sub InitUserID()
	strSafeUserID = GetSafeID(objUsersList("USERID"), Null)
End Sub

Function GetXlsFileName()
	GetXlsFileName = obLanguage("Common","kExport_Moodle") & ".xls"
End Function
%>
