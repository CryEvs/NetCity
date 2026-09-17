<!-- #INCLUDE VIRTUAL="/asp/headerprint_s.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/PublicUsers_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim objStudentList, lngGrade
Dim bEmpty, bDisplayLastLogin, objRsLastLogin
Dim bAddSchool, strSearch

Function UserListForRole()
	UserListForRole = RoleGroup_Students
End Function

Sub ReadStateSpecial
	Call InitGrType
End Sub

Sub Main()
	Dim nTmp
	If obLanguage.Compare(strFirstLetter,strLastLetter, obContext.LocalSettings.DefaultLanguage) > 0 Then strLastLetter = strFirstLetter
	bAddSchool = CLng(strFunctionalityType)=kFuncType_Add
	If nFindType = FilterType_Search Then
		strSearch = strFio
		strGender = ""
		lngGrade = -3
		strLetter = null
	Else
		strSearch = ""
	End If
	Set objStudentList = objNSNET.GetStudentList(strSchoolID, strCurrYearID, strFirstLetter, strLastLetter, strGender, lngGrade, lngSortOrder, strLetter, True,bAddSchool, 0, 0, nTmp, 0, strSearch)
	bEmpty = True
	bDisplayLastLogin = objNSNET.IsWorkConnection()
	If CLng(strFunctionalityType)=kFuncType_PreSchool Then bDisplayLastLogin = False
	If Not objStudentList Is Nothing Then bEmpty = objStudentList.EOF
End Sub

Sub onDrawPage()
	Dim i, nNewStudID, nStudID
	Dim strClasses, strHomePhone, strEMAIL
	Dim objCurrInfo, strSchoolFrom

	Call GetArrUsersFilters
	Response.Write GetPageTitlePrint(obLanguage("FilterUsers","kStudentList",strFunctionalityType), arrUsersFilters)
	If Not bEmpty Then %>
	<table class="table-print">
	<tr>
		<th><%=obLanguage("Filter","kN_PP")%></th><th><%=obLanguage("Common","kDisplayName")%></th><%
		If bCanShowUsersLoginNames And CLng(strFunctionalityType)<>kFuncType_PreSchool Then%><th><%=obLanguage("Common","kUserName")%></th><%End If%>
		<th><%=obLanguage("Common","kBDate")%></th>
		<th><%=obLanguage("Common","kGender")%></th><th><%=obLanguage("Common","kClass",strFunctionalityType)%></th><%
		If bDisplayLastLogin Then %><th><%=obLanguage("Filter","kDateOfLastLogin")%></th><%End If%>
		<th><%=obLanguage("Common","kHomePhone_")%></th>
		<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
		<th>E-mail</th><% 
		End If%>
		
		<%If bAddSchool Then%><th><%=obLanguage("Common","kEOClassFrom")%></th><%End If%>
	</tr><%
		i=1
		While Not objStudentList.EOF
			nStudID = objStudentList("STUDENTID")
	%><tr><td class="cell-num"><%=i%>&nbsp;</td>
		<td width="40%" class="cell-text"><%=DB2HTML(objStudentList("NICKNAME"))%></td>
		<%If bCanShowUsersLoginNames And CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
			<td width="20%" class="cell-text"><%=DB2HTML(objStudentList("LOGINNAME"))%></td>
		<%End If%>
		<td class="cell-date"><%=Date2Str(objStudentList("BIRTHDATE"))%></td>
		<td class="cell-text"><%=DB2HTML(objStudentList("GENDER"))%></td>
		<td class="cell-text"><%strHomePhone= objStudentList("HOMEPHONE")
			strEMAIL=objStudentList("EMAIL")
			If bAddSchool Then
				strSchoolFrom = ""
				Set objCurrInfo = objStudentList.Fields()("rsEO").Value
				If Not objCurrInfo.EOF Then
					strSchoolFrom = GetSafeStr(objCurrInfo("EONAME"), -1, "") & ", " & GetSafeStr(objCurrInfo("CLASSNAME"), -1, "")
				End If
				DrawClassAdd
			Else
				strClasses = objStudentList("CLASSNAME")
				Response.Write DB2HTML(strClasses)
			End If%></td><%
			If bDisplayLastLogin Then
				Response.Write "<td class=""cell-date"">"
				If IsDull(objStudentList("LOGINTIME")) Then 
					Response.Write "&nbsp;"
				Else
					Response.Write Date2Str(objStudentList("LOGINTIME")) & "&nbsp;" & Time2Str(objStudentList("LOGINTIME"))
				End If
				Response.Write "</td>"
			End If%>
		<td class="cell-num"><nobr><%=DB2HTML(strHomePhone)%></nobr></td>
		<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
		<td class="cell-text"><%=DB2HTML(strEMAIL)%></td>
		<%End If%>
		<%If bAddSchool Then%><td class="cell-text"><%=DB2HTML(strSchoolFrom)%></td><%End If%>
	</tr><% i=i+1
			objStudentList.MoveNext
		Wend %>
	</table>
	<% End If
	Response.Write GetPageVerPrint()
End Sub

Sub DrawClassAdd()
	Dim strClassName, rsNames
	Set rsNames = objStudentList.Fields()("rsClasses").Value
	strClassName = err.description
	If Not rsNames.EOF Then
		strClassName = rsNames("CLASSNAME")
		Do
			rsNames.MoveNext
			If rsNames.EOF Then Exit Do
			strClassName = strClassName&","&rsNames("CLASSNAME")
		Loop 
	End If
	If Trim(strClassName) = "" Then
		strClassName = obLanguage("Common","kOut")
	End If
	Response.Write DB2HTML_BR(strClassName)
End Sub

%>
