<!-- #INCLUDE VIRTUAL=/asp/headersimple.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strPSIDs, arrPSIDs, strNewStudent_FullName

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitlePoolStudents",strFunctionalityType) & GreenText(DB2HTML(strNewStudent_FullName))
End Function

Sub ReadState()
	If Not HasUserRight(arUsersEditStudents) Then GenerateError obLanguage("Common","kErrPageAccess")
	strPSIDs = GetSafeStr(Request("PSIDs"), -1, Null)
	arrPSIDs = Split(strPSIDs, ",")
	strNewStudent_FullName = GetSafeStr(Request("NewName"), -1, Null)
End Sub

Sub onHead()
%>
<SCRIPT><!--
isHaveToLogout = false;
function cancelEdit(){
	window.close();
}
//-->
</SCRIPT>
<%
End Sub

Sub onDrawPage()
	Dim nPoolStudentID, objDetailsRs, objInfo, objParentsRs, strParents
	Dim i%>
<br>&nbsp;&nbsp;
<%=ShowButton("Cancel", "Cancel", "JavaScript:cancelEdit()", obLanguage("Common","kBack"), obLanguage("Common","kBack"))%><br><br>
<table class="ThinTable" border="1" cellspacing="0" cellpadding="5" width="40%" align="center">
<tr><th><%=obLanguage("Common","kStudent",strFunctionalityType)%></th><th><%=obLanguage("SetupSchool","kBirthYear")%></th><th><%=obLanguage("Common","kGender")%></th><th><%=obLanguage("Common","kParents")%></th>
	<th><%=obLanguage("SetupSchool","kDepartClass",strFunctionalityType)%></th><th><%=obLanguage("SetupSchool","kDepartSchool")%></th><th><%=obLanguage("SetupSchool","kDepartYear")%></th></tr><%
	For i = 0 To Ubound(arrPSIDs)
		nPoolStudentID = arrPSIDs(i)
		Set objDetailsRs = objNSNET.GetPoolStudentDetails(nPoolStudentID, false)
		If objDetailsRs.EOF Then GenerateError obLanguage("SetupSchool","kCantGetPoolStudentDetails",strFunctionalityType)
		Set objInfo = objNSNET.GetUserInfo(nPoolStudentID)
		Set objParentsRs = objNSNET.GetParentsListForStudent(nPoolStudentID)

		strParents = ""
		While Not objParentsRs.EOF
			strParents = strParents & MakeFullName(objParentsRs) & "<br>"
			objParentsRs.MoveNext
		WEnd
		If strParents = "" Then
			strParents = "&nbsp;"
		Else
			strParents = Left(strParents, Len(strParents) - 4) ' remove the last <br>
		End If%>
		<tr>
			<td><%=MakeFullName(objInfo)%></td>
			<td align="center"><%If Not IsDull(objInfo("BIRTHDATE")) Then%><%=Year(CDate(objInfo("BIRTHDATE")))%><%Else%>&nbsp;<%End If%></td>
			<td align="center"><%=DB2HTML(objInfo("GENDER"))%></td>
			<td><%=strParents%></td>
			<td nowrap align="center"><%=DB2HTML(objDetailsRs("GRADE"))%></td>
			<td><%=DB2HTML(objDetailsRs("SCHOOLNAME"))%>,&nbsp;<%=DB2HTML(objDetailsRs("CITY_NAME"))%></td>
			<td align="center"><%=Year(objDetailsRs("DOCDATE"))%></td>
		</tr><%
	Next%>
</table><br><br><%
End Sub

Function MakeFullName(objRs)
	MakeFullName = DB2HTML(objRs("LASTNAME")) & "&nbsp;" & DB2HTML(objRs("FIRSTNAME")) & "&nbsp;" & DB2HTML(objRs("MIDDLENAME"))
End Function
%>
