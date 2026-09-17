<!-- #INCLUDE FILE="../headerprint_s.asp" -->
<!-- #INCLUDE FILE="PublicUsers_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim objParentList, lngGrade
Dim bDisplayLastLogin, objRsLastLogin, strSearch

Function UserListForRole()
	UserListForRole = RoleGroup_Parents
End Function

Sub ReadStateSpecial
	lngGrade = GetSafeLng( obTokenMgr.GetData( strToken, stUsersStudentsGrades ), -1 )
	Call InitGrType
End Sub

Sub Main()
	Dim nTmp
	If obLanguage.Compare(strFirstLetter,strLastLetter, obContext.LocalSettings.DefaultLanguage) > 0 Then strLastLetter = strFirstLetter
	' для Print ф-я всегда возвращает Recordset - поэтому на Nothing можно не проверять
	If nFindType = FilterType_Search Then
		strSearch = strFio
		strGender = ""
		lngGrade = -3
		strLetter = null
	Else
		strSearch = ""
	End If
	Set objParentList = objNSNET.GetParentList(strSchoolID, strCurrYearID, strFirstLetter, strLastLetter, strGender, lngGrade, strLetter, True, 0, 0, nTmp, strSearch)
	bDisplayLastLogin = objNSNET.IsWorkConnection()
End Sub

Sub onDrawPage()
	Dim i
	Call GetArrUsersFilters()
	Response.Write GetPageTitlePrint(obLanguage("FilterUsers","kParentList"), arrUsersFilters)
	If Not objParentList.EOF Then%>
<table class="table-print">
<tr>
	<th><%=obLanguage("Filter","kN_PP")%></th><th><%=obLanguage("Common","kDisplayName")%></th><%
	If bCanShowUsersLoginNames Then%><th><%=obLanguage("Common","kUserName")%></th><%End If%>
	<th><%=obLanguage("Common","kGender")%></th><%
	If bDisplayLastLogin Then %><th><%=obLanguage("Filter","kDateOfLastLogin")%></th><%End If%>
	<th><%=obLanguage("Common","kHomePhone_")%></th><th><%=obLanguage("Common","kWorkPhone_")%></th><th><nobr>E-mail</nobr></th>
</tr><%
i=1
While Not objParentList.EOF
	If bDisplayLastLogin Then
		Set objRsLastLogin = objNSNET.GetLastUserLogin(objParentList("PARENTID"), strSchoolID)
		TestError obLanguage("Filter","kErrLastUserLogin")
	End If%>
	<tr><td class="cell-num"><%=i%>&nbsp;</td>
		<td width="40%" class="cell-text"><%=DB2HTML(objParentList("NICKNAME"))%></td>
		<%If bCanShowUsersLoginNames Then%><td width="20%" class="cell-text"><%=DB2HTML(objParentList("LOGINNAME"))%></td><%End If%>
		<td class="cell-text"><%=DB2HTML(objParentList("GENDER"))%></td><%
		If bDisplayLastLogin Then
			Response.Write "<td class=""cell-date"">"
			If objRsLastLogin.EOF Then
				Response.Write "&nbsp;"
			Else
				Response.Write Date2Str(objRsLastLogin("LOGINTIME")) & "&nbsp;" & Time2Str(objRsLastLogin("LOGINTIME"))
			End If
			Response.Write "</td>"
		End If%>
		<td class="cell-text"><nobr><%=DB2HTML(objParentList("HOMEPHONE"))%></nobr></td>
		<td class="cell-text"><nobr><%=DB2HTML(objParentList("WORKPHONE"))%></nobr></td>
		<td><%=DB2HTML(objParentList("EMAIL"))%></td>
	</tr><%
	i=i+1
	objParentList.MoveNext
Wend%>
</table><%
	End If
	Response.Write GetPageVerPrint()
End Sub
%>
