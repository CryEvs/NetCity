<!-- #INCLUDE Virtual="/asp/headerexcel_s.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/UsersExport_inc.asp"-->
<!-- #INCLUDE file="MoveDoc_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim lngGrade
Dim objStudentParentsList
Dim bAddSchool, strSearch, bIskExportExcelExt

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserAnyRights(Array(arUsersEditStudents, arEditInfoSelf, arUsersEditStudentsMedInfo, arShortInfoStudents)) And PERSON_DATA
End	Function

Function UserListForRole()
	UserListForRole = RoleGroup_Students
End Function

Sub ReadStateSpecial()
	Call InitGrType
End Sub

Sub Main()
	SetScriptTimeOut 900
	nRoleFilter = RoleGroup_Students
	strTitle = obLanguage("FilterUsers","kStudentList",strFunctionalityType)
	bAddSchool = CLng(strFunctionalityType) = kFuncType_Add
	bIskExportExcelExt = GetSafeLng(Request("EXTERNAL"), 0) = 1
	
	If nFindType = FilterType_Search Then
		strSearch = strFio
		strGender = ""
		lngGrade = -3
		strLetter = null
	Else
		strSearch = ""
	End If
	Call GetAccessibleParams()
	If bAddSchool Then strAccessibleParamNames = "'DOPEDUCATION', 'ADDEDUC_SERTIF', 'ADDEDUC_SERTIF_NO', 'ADDEDUC_SERTIF_DATE', 'EDUC_FORM', 'EDUC_FINANCING', 'FINANCE_TYPE', 'BUDGET_LEVEL'"
	If bIsEMForSchool And bIskExportExcelExt Then bFullAccessEditing = True
	Set objAttrParams = objNSNET.GetUserParametersListForRole(strSchoolID, rlStudent, bFullAccessEditing, strAccessibleParamNames, strAccessibleParamIDs)
	Set objUsersList = objNSNET.GetStudentListWithDetails(strCurrYearID, strSchoolID, strFirstLetter, strLastLetter, strGender, _
		lngGrade, lngSortOrder, strLetter, bFullAccessEditing, bAddSchool, strAccessibleParamNames, strAccessibleParamIDs, strSearch)
	Set objStudentParentsList = objUsersList.Fields()("rsStudentParents").Value
End Sub

Sub FreeResources()
	objAttrParams.Close
	objStudentParentsList.Close
	Set objStudentParentsList = Nothing
	Set objAttrParams = Nothing
End Sub

Sub DrawUserRoleFeatureTitle()
	If bAddSchool Then%><th ROWSPAN="2"><%=obLanguage("Common","kEOClassFrom")%></th><%
	Else%>
	<th ROWSPAN="2"><%=obLanguage("Filter","kForeign_")%></th>
	<%If bFullAccessEditing Then%><th ROWSPAN="2"><%=obLanguage("Filter","kForeign2_")%></th><%End If
	End If
End Sub

Sub InitUserID()
	strSafeUserID = GetSafeID(objUsersList("STUDENTID"), Null)
End Sub

Sub DrawUserRoleFeatureAdd()
	Dim objCurrInfo, strSchoolFrom
		strSchoolFrom = ""
		Set objCurrInfo = objUsersList.Fields()("rsEO").Value
		 If Not objCurrInfo.EOF Then
			strSchoolFrom = GetSafeStr(objCurrInfo("EONAME"), -1, "") & ", " & GetSafeStr(objCurrInfo("CLASSNAME"), -1, "")
		End If%>
		<td class="cell-text"><%=DB2HTML(strSchoolFrom)%></td><%
End Sub

Sub DrawUserRoleFeatureFA()%>
	<td class="cell-text"><%=DB2HTML_BR(objUsersList("LANG_NAME"))%></td>
	<td class="cell-text"><%=DB2HTML_BR(objUsersList("LANG_NAME2"))%></td><%
End Sub
Sub DrawUserRoleFeature()%>
	<td class="cell-text"><%=DB2HTML_BR(objUsersList("LANG_NAME"))%></td><%
End Sub

Sub ShowUserExtInfoTitle()%>
	<th rowspan="2"><%=obLanguage("Common","kClass",strFunctionalityType)%></th><th rowspan="2"><%=obLanguage("Common","kParents")%></th><%
End Sub

Sub ShowUserExtInfoFA()
	Dim strPassDate, strPassInfo, strPassSer, strPassNum
	If CLng(strFunctionalityType)<>kFuncType_PreSchool Then
		Call ShowUserPassport()
	End If
	Call ShowUserExtInfo()
End Sub

Sub ShowUserExtInfo()
	Call DrawClass()%><td class="cell-text"><%
	While Not objStudentParentsList.EOF
		Response.write DB2HTML_BR(objStudentParentsList("LASTNAME")) & IIF(not isDull(objStudentParentsList("FIRSTNAME"))," " & DB2HTML_BR(objStudentParentsList("FIRSTNAME")),"") & IIF(not isDull(objStudentParentsList("MIDDLENAME"))," " & DB2HTML_BR(objStudentParentsList("MIDDLENAME")),"")
		objStudentParentsList.MoveNext
		Response.write IIF(objStudentParentsList.EOF,"",",<br>")
	Wend
	%>&nbsp;</td><%
End Sub

Sub ShowUserExtInfoAdd()
	Call DrawClassAdd()%><td class="cell-text"><%
	While Not objStudentParentsList.EOF
		Response.write DB2HTML_BR(objStudentParentsList("LASTNAME")) & IIF(not isDull(objStudentParentsList("FIRSTNAME"))," " & DB2HTML_BR(objStudentParentsList("FIRSTNAME")),"") & IIF(not isDull(objStudentParentsList("MIDDLENAME"))," " & DB2HTML_BR(objStudentParentsList("MIDDLENAME")),"")
		objStudentParentsList.MoveNext
		Response.write IIF(objStudentParentsList.EOF,"","<br>")
	Wend
	%>&nbsp;</td><%
End Sub

' Для Ученика есть только один FreeParameter - это Доп. образование (ADDEDUCATION). Для Родителя - тоже только один (AIDRESULTS).
' Теперь для Ученика несколько таких параметров.
Function DrawDb2HtmlFreeParameter( ByVal strSafeUserID, ByVal strParamName, rsUserAttrParams, strParamID_Title )
	Dim objRs, strTmp
	Dim nDocTypeID1, nDocTypeID2, strEOFullName

	If strParamName = "ADDEDUCATION" Then
		Set objRs = objNSNET.GetStudentCreatives(strSafeUserID, strCurrYearID)
		If objRs.EOF Then
			DrawDb2HtmlFreeParameter = "&nbsp;"
		Else
			strTmp = ""
			While Not objRs.EOF
				strTmp = strTmp & DB2HTML_BR(objRs("EONAME")) & " - " & DB2HTML_BR(objRs("TYPENAME")) & "<br>"
				objRs.MoveNext
			Wend
			DrawDb2HtmlFreeParameter = strTmp
		End If
	ElseIf strParamName = "DOPEDUCATION" Then
		Set objRs = objNSNET.GetStudentAddSchools(strSafeUserID, strCurrYearID)
		If objRs.EOF Then
			DrawDb2HtmlFreeParameter = "&nbsp;"
		Else
			strTmp = ""
			While Not objRs.EOF
				strTmp = strTmp & DB2HTML_BR(objRs("EONAME")) & "<br>"
				objRs.MoveNext
			Wend
			DrawDb2HtmlFreeParameter = strTmp
		End If
	ElseIf strParamName = "COMMISSIONS" Then
		DrawDb2HtmlFreeParameter = DrawCommissions()
	ElseIf strParamName = "TALENT_CURATORS" Then
		DrawDb2HtmlFreeParameter = DrawStudentCurators()
	Else
		If Not rsUserAttrParams.EOF Then
			DrawDb2HtmlFreeParameter = DB2HTML_BR(rsUserAttrParams("PARAMVALUE"))
		End If
		DrawDb2HtmlFreeParameter = DrawDb2HtmlFreeParameter & "&nbsp;"
	End If
	DrawDb2HtmlFreeParameter = "<td class=""cell-text"">" & DrawDb2HtmlFreeParameter & "</td>"
End Function

Function DrawStudentCurators()
	Dim objRs, strTmp, strFio, strPosition, strEmail, strMobile

	Set objRs = objNSNET.GetStudentCurators(strSafeUserID)
	If objRs.EOF Then
		DrawStudentCurators = "&nbsp;"
	Else
		strTmp = ""
		While Not objRs.EOF
			strFio = DB2HTML_BR(objRs("LASTNAME")) & IIF(not isDull(objRs("FIRSTNAME"))," " & DB2HTML_BR(objRs("FIRSTNAME")),"") & IIF(not isDull(objRs("MIDDLENAME"))," " & DB2HTML_BR(objRs("MIDDLENAME")),"")
			strPosition = GetSafeStr(objRs("POSITION"), -1, "")
			strEmail = GetSafeStr(objRs("EMAIL"), -1, "")
			strMobile = GetSafeStr(objRs("MOBILE"), -1, "")

			strTmp = strTmp & strFio
			If Not isDull(strPosition) Then
				strTmp = strTmp & ", " & strPosition
			End If
			If Not isDull(strEmail) Then
				strTmp = strTmp & ", " & strEmail
			End If
			If Not isDull(strMobile) Then
				strTmp = strTmp & ", " & strMobile
			End If
			strTmp = strTmp & "<br>"

			objRs.MoveNext
		Wend
		DrawStudentCurators = strTmp
	End If
End Function

Function DrawCommissions()
	Dim objRs
	Dim strEducForm, strEducProg, strViol, strSocStatus
	Dim bFirstTime
	Dim strCommissID, strPrevCommID
	Dim strTmp

	Set objRs = objNSNET.GetStudentCommissions(strSafeUserID)
	If objRs.EOF Then
		DrawCommissions = "&nbsp;"
	Else
		strTmp = ""
		bFirstTime = True
		While Not objRs.EOF
			strCommissID = GetSafeID(objRs("COMMISSID"), Null)
			If bFirstTime Then
				bFirstTime = False
			Else
				strTmp = strTmp & "<br>"
			End If
			strTmp = strTmp & DB2HTML(objRs("TYPENAME")) & ",&nbsp;" & DB2HTML(objRs("COMMISSNUM")) & ",&nbsp;" & Date2Str(objRs("STARTDATE")) & "&nbsp;-&nbsp;" & Date2Str(objRs("ENDDATE")) & "<br>"
			strEducForm = GetSafeStr(objRs("EDUC_FORM"), -1, "")
			If Not IsDull(strEducForm) Then
				strTmp = strTmp & obLanguage("UsersExport","kEducForm_2") & ":&nbsp;" & DB2HTML(strEducForm) & "<br>"
			End If

			strEducProg = GetSafeStr(objRs("EDUC_PROG"), -1, "")
			If Not IsDull(strEducProg) Then
				strTmp = strTmp & obLanguage("UsersExport","kEducProgramm_2") & ":&nbsp;" & DB2HTML(strEducProg) & "<br>"
			End If

			strViol = GetSafeStr(objRs("VIOL"), -1, "")
			If Not IsDull(strViol) Then
				strTmp = strTmp & obLanguage("UsersExport","kViolationType_2") & ":&nbsp;" & DB2HTML(strViol) & "<br>"
			End If

			strSocStatus = GetSafeStr(objRs("SOC_STATUS"), -1, "")
			strPrevCommID = strCommissID
			Do While Not objRs.EOF
				objRs.MoveNext
				If objRs.EOF Then Exit Do
				strCommissID = GetSafeID(objRs("COMMISSID"), Null)
				If strCommissID = strPrevCommID Then 'Такое возможно только когда есть несколько видов нарушений для одной комиссии
					strTmp = strTmp & "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" & DB2HTML(objRs("VIOL")) & "<br>"
				Else
					Exit Do
				End If
			Loop

			If Not IsDull(strSocStatus) Then
				strTmp = strTmp & obLanguage("UsersExport","kSocialStatus_2") & ":&nbsp;" & DB2HTML(strSocStatus) & "<br>"
			End If
'			objRs.MoveNext
		Wend
		DrawCommissions = strTmp
	End If
End Function

Sub DrawPageExternal()
	Dim nIndex, nTmpUserID, objRs, bShowMPhone
	Dim objSettings
	Dim homePhone, mPhone

	Call GetArrUsersFilters()
	Response.Write GetPageTitleExcel_External(strTitle, arrUsersFilters)
	If Not objUsersList.EOF Then %>
		<table class="table-print">
		<tr>
		<th rowspan="2"><%=obLanguage("UsersExport","kNum")%></th>
		<th rowspan="2"><%=obLanguage("Common","kClass",strFunctionalityType)%></th>

		<th rowspan="2"><%=obLanguage("Common","kLastName")%></th>
		<th rowspan="2"><%=obLanguage("Common","kFirstName")%></th>
		<th rowspan="2"><%=obLanguage("Common","kMiddleName")%></th>

		<th rowspan="2"><%=obLanguage("Common","kBDate")%></th>
		<th rowspan="2"><%=obLanguage("Common","kGender")%></th>
		<th rowspan="2"><%=obLanguage("Common","kNation")%></th>
		<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
		<th colspan="5"><%=obLanguage("Common","kPassport")%></th>
		<%End If%>
		<th colspan="7"><%=obLanguage("Common","kHomeAddress")%></th>
		<th colspan="7"><%=obLanguage("Common","kRegistrationAddress")%></th>
		<th rowspan="2"><%=obLanguage("Common","kHomePhone_")%></th>
		<th rowspan="2"><%=obLanguage("Common","kMobilePhone")%></th>
		<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
		<th rowspan="2">E-mail</th>
		<%End If%>
		<th colspan="12"><%=obLanguage("Common","kMother")%></th>
		<th colspan="12"><%=obLanguage("Common","kFather")%></th>
<%	If Not bAddSchool Then%>
		<th rowspan="2"><%=obLanguage("Filter","kForeign_")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport","kForeignLang2_")%></th><%
	End If
'		Call DrawUserRoleFeatureTitle()
		Call DrawGroupParamsTitle()%>
		</tr><%
		nIndex = 1
		While Not objUsersList.EOF
			Call InitUserID()
			Set objSettings = objNSNET.GetUserSettings(strSafeUserID)
			bShowMPhone = objSettings.ShowMobilePhone%>
			<tr><td class="cell-num"><%=nIndex%></td><%
			Call DrawClass()%>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("LASTNAME"))%></TD>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("FIRSTNAME"))%></TD>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("MIDDLENAME"))%></TD>

			<TD class="cell-date"><%=Date2Str(objUsersList("BIRTHDATE"))%></TD>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("GENDER"))%></TD>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("CITIZENSHIP"))%></TD>
			<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("PASS_SER"))%></TD>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("PASS_NUM"))%></TD>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("PASS_SUBDIV"))%></TD>
			<TD class="cell-date"><%=Date2Str(objUsersList("PASS_DATE"))%></TD>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("PASS_INFO"))%></TD>
			<%End If
			Call DrawUserAddressExt()
			homePhone = DB2HTML_BR(objUsersList("HOMEPHONE"))
			mPhone = IIF(bShowMPhone, DB2HTML_BR(objNSNET.GetMobilePhoneForUser(strSafeUserID)), "&nbsp;")
			%>
			<TD class="<%=SetCellFormat(homePhone) %>"><%=homePhone%></TD>
			<TD class="<%=SetCellFormat(mPhone) %>"><%=mPhone%></TD>
			<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
			<TD class="cell-text"><%=DB2HTML_BR(objUsersList("EMAIL"))%></TD><%
			End If
			Call DrawParents()
			If Not bAddSchool Then Call DrawUserRoleFeatureFA()
			Call DrawAttrParamsValue() %>
			</tr><%
			nIndex = nIndex + 1
			objUsersList.MoveNext
		Wend%>
		</table><%
	End If
'	Response.Write GetPageVerExcel()
End Sub

Sub DrawUserAddressExt()
	Dim rsAddr
	Set rsAddr = objNSNET.GetUserAddress( objUsersList("STUDENTID") , 1)
	Call DrawAddress(rsAddr)
	If Not rsAddr.EOF Then
		IF rsAddr("STATUS") = "E" Then Call DrawAddress(rsAddr) : Exit Sub
	End If
	Call DrawAddress(objNSNET.GetUserAddress( objUsersList("STUDENTID") , 0))
End Sub

Sub DrawUserRoleFeatureParams()
	Dim ii

	If Not bExternal Then Exit Sub

	If CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
		<th><%=obLanguage("Common","kSerial")%></th>
		<th><%=obLanguage("UsersExport","kNumber")%></th>
		<th><%=obLanguage("Common","kSubdivCode")%></th>
		<th><%=obLanguage("UsersExport","kPassportDate")%></th>
		<th><%=obLanguage("Common","kPassportWho")%></th><%
	End If%>
	<th><%=obLanguage("Common","kZipCode")%></th>
	<th><%=obLanguage("Common","kCity")&""%></th>
	<th><%=obLanguage("Common","kDistrict")%></th>
	<th><%=obLanguage("Common","kStreet")&""%></th>
	<th><%=obLanguage("Common","kHouse")&""%></th>
	<th><%=obLanguage("Common","kCorp")%></th>
	<th><%=obLanguage("Common","kFlat")%></th>
	<th><%=obLanguage("Common","kZipCode")%></th>
	<th><%=obLanguage("Common","kCity") &"" %></th>
	<th><%=obLanguage("Common","kDistrict")%></th>
	<th><%=obLanguage("Common","kStreet") &""  %></th>
	<th><%=obLanguage("Common","kHouse") &"" %></th>
	<th><%=obLanguage("Common","kCorp")%></th>
	<th><%=obLanguage("Common","kFlat")%></th><%

	For ii = 1 To 2%>
		<th><%=obLanguage("Common","kLastName")%></th>
		<th><%=obLanguage("Common","kFirstName")%></th>
		<th><%=obLanguage("Common","kMiddleName")%></th>
		<th><%=obLanguage("Common","kBDate")%></th>
		<th><%=obLanguage("Common","kNation")%></th>
		<th><%=(obLanguage("Common","kPassport") & "-" & obLanguage("Common","kSerial"))%></th>
		<th><%=(obLanguage("Common","kPassport") & "-" & obLanguage("UsersExport","kNumber"))%></th>
		<th><%=(obLanguage("Common","kPassport") & "-" & obLanguage("Common","kSubdivCode"))%></th>
		<th><%=(obLanguage("Common","kPassport") & "-" & obLanguage("UsersExport","kPassportDate"))%></th>
		<th><%=(obLanguage("Common","kPassport") & "-" & obLanguage("Common","kPassportWho"))%></th>
		<th><%=obLanguage("Common","kSnils")%></th>
		<th><%=obLanguage("SetupSchool","kRelationShipType")%></th><%
	Next
End Sub

Sub DrawClassAdd()
	Dim strClassName, rsNames
	Set rsNames = objUsersList.Fields()("rsClasses").Value
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
	%><td class="cell-text"><%=DB2HTML_BR(strClassName)%></td><%
End Sub

Sub DrawClass()
	%><td class="cell-text"><%=DB2HTML_BR(objUsersList("CLASSNAME"))%></td><%
End Sub

Sub DrawParents()
	Dim strLastName, strFirstName, strMiddleName, dtBDate, strNation, strPassSer, strPassNum, strPassSubdiv, dtPassDate, strPassInfo, strSnils, strRelation
	Dim strMLastName, strMFirstName, strMMiddleName, dtMBDate, strMNation, strMPassSer, strMPassNum, strMPassSubdiv, dtMPassDate, strMPassInfo, strMSnils, strMRelation
	Dim strFLastName, strFFirstName, strFMiddleName, dtFBDate, strFNation, strFPassSer, strFPassNum, strFPassSubdiv, dtFPassDate, strFPassInfo, strFSnils, strFRelation
	Dim strGender, bShowParents, bFemale

	bShowParents = False

	' #18262. Пустые даты должны иметь значение Null, а не Empty, иначе Date2Str выводит некое умолчательное значение.
	dtMBDate = Null
	dtMPassDate = Null
	dtFBDate = Null
	dtFPassDate = Null

	If Not objStudentParentsList.EOF Then

		If objStudentParentsList.RecordCount <= 2 Then
			bShowParents = True
			strLastName = GetSafeStr(objStudentParentsList("LASTNAME"), -1, "")
			strFirstName = GetSafeStr(objStudentParentsList("FIRSTNAME"), -1, "")
			strMiddleName = GetSafeStr(objStudentParentsList("MIDDLENAME"), -1, "")
			dtBDate = objStudentParentsList("BIRTHDATE")
			strNation = GetSafeStr(objStudentParentsList("CITIZENSHIP"), -1, "")
			strPassSer = GetSafeStr(objStudentParentsList("PASS_SER"), -1, "")
			strPassNum = GetSafeStr(objStudentParentsList("PASS_NUM"), -1, "")
			strPassSubdiv = GetSafeStr(objStudentParentsList("PASS_SUBDIV"), -1, "")
			dtPassDate = objStudentParentsList("PASS_DATE")
			strPassInfo = GetSafeStr(objStudentParentsList("PASS_INFO"), -1, "")
			strSnils = GetSafeStr(objStudentParentsList("SNILS"), -1, "")
			strRelation = GetSafeStr(objStudentParentsList("RELATIONSHIP"), -1, "")

			strGender = GetSafeStr(objStudentParentsList("GENDER"), 1, Null)
			If strGender = obLanguage("Common","kFemaleLet") Then
				strMLastName = strLastName
				strMFirstName = strFirstName
				strMMiddleName = strMiddleName
				dtMBDate = dtBDate
				strMNation = strNation
				strMPassSer = strPassSer
				strMPassNum = strPassNum
				strMPassSubdiv = strPassSubdiv
				dtMPassDate = dtPassDate
				strMPassInfo = strPassInfo
				strMSnils = strSnils
				strMRelation = strRelation
				bFemale = True
			ElseIf strGender = obLanguage("Common","kMaleLet") Then
				strFLastName = strLastName
				strFFirstName = strFirstName
				strFMiddleName = strMiddleName
				dtFBDate = dtBDate
				strFNation = strNation
				strFPassSer = strPassSer
				strFPassNum = strPassNum
				strFPassSubdiv = strPassSubdiv
				dtFPassDate = dtPassDate
				strFPassInfo = strPassInfo
				strFSnils = strSnils
				strFRelation = strRelation
				bFemale = False
			Else
				bShowParents = False
			End If

			objStudentParentsList.MoveNext
			If Not objStudentParentsList.EOF And bShowParents Then
				strLastName = GetSafeStr(objStudentParentsList("LASTNAME"), -1, "")
				strFirstName = GetSafeStr(objStudentParentsList("FIRSTNAME"), -1, "")
				strMiddleName = GetSafeStr(objStudentParentsList("MIDDLENAME"), -1, "")
				dtBDate = objStudentParentsList("BIRTHDATE")
				strNation = GetSafeStr(objStudentParentsList("CITIZENSHIP"), -1, "")
				strPassSer = GetSafeStr(objStudentParentsList("PASS_SER"), -1, "")
				strPassNum = GetSafeStr(objStudentParentsList("PASS_NUM"), -1, "")
				strPassSubdiv = GetSafeStr(objStudentParentsList("PASS_SUBDIV"), -1, "")
				dtPassDate = objStudentParentsList("PASS_DATE")
				strPassInfo = GetSafeStr(objStudentParentsList("PASS_INFO"), -1, "")
				strSnils = GetSafeStr(objStudentParentsList("SNILS"), -1, "")
				strRelation = GetSafeStr(objStudentParentsList("RELATIONSHIP"), -1, "")

				strGender = GetSafeStr(objStudentParentsList("GENDER"), 1, Null)
				If strGender = obLanguage("Common","kFemaleLet") Then
					strMLastName = strLastName
					strMFirstName = strFirstName
					strMMiddleName = strMiddleName
					dtMBDate = dtBDate
					strMNation = strNation
					strMPassSer = strPassSer
					strMPassNum = strPassNum
					strMPassSubdiv = strPassSubdiv
					dtMPassDate = dtPassDate
					strMPassInfo = strPassInfo
					strMSnils = strSnils
					strMRelation = strRelation
					If bFemale Then
						bShowParents = False
					End If
				ElseIf strGender = obLanguage("Common","kMaleLet") Then
					strFLastName = strLastName
					strFFirstName = strFirstName
					strFMiddleName = strMiddleName
					dtFBDate = dtBDate
					strFNation = strNation
					strFPassSer = strPassSer
					strFPassNum = strPassNum
					strFPassSubdiv = strPassSubdiv
					dtFPassDate = dtPassDate
					strFPassInfo = strPassInfo
					strFSnils = strSnils
					strFRelation = strRelation
					If Not bFemale Then
						bShowParents = False
					End If
				Else
					bShowParents = False
				End If
			End If
		End If
	End If

	If Not bShowParents Then
		strMLastName = ""
		strMFirstName = ""
		strMMiddleName = ""
		dtMBDate = Null
		strMNation = ""
		strMPassSer = ""
		strMPassNum = ""
		strMPassSubdiv = ""
		dtMPassDate = Null
		strMPassInfo = ""
		strMSnils = ""
		strMRelation = ""

		strFLastName = ""
		strFFirstName = ""
		strFMiddleName = ""
		dtFBDate = Null
		strFNation = ""
		strFPassSer = ""
		strFPassNum = ""
		strFPassSubdiv = ""
		dtFPassDate = Null
		strFPassInfo = ""
		strFSnils = ""
		strFRelation = ""
	End If%>
	<td class="cell-text"><%=DB2HTML(strMLastName)%></td>
	<td class="cell-text"><%=DB2HTML(strMFirstName)%></td>
	<td class="cell-text"><%=DB2HTML(strMMiddleName)%></td>
	<td class="cell-date"><%=Date2Str(dtMBDate)%></td>
	<td class="cell-text"><%=DB2HTML(strMNation)%></td>
	<td class="cell-text"><%=DB2HTML(strMPassSer)%></td>
	<td class="cell-text"><%=DB2HTML(strMPassNum)%></td>
	<td class="cell-text"><%=DB2HTML(strMPassSubdiv)%></td>
	<td class="cell-date"><%=Date2Str(dtMPassDate)%></td>
	<td class="cell-text"><%=DB2HTML(strMPassInfo)%></td>
	<td class="cell-text"><%=DB2HTML(strMSnils)%></td>
	<td class="cell-text"><%=DB2HTML(strMRelation)%></td>

	<td class="cell-text"><%=DB2HTML(strFLastName)%></td>
	<td class="cell-text"><%=DB2HTML(strFFirstName)%></td>
	<td class="cell-text"><%=DB2HTML(strFMiddleName)%></td>
	<td class="cell-date"><%=Date2Str(dtFBDate)%></td>
	<td class="cell-text"><%=DB2HTML(strFNation)%></td>
	<td class="cell-text"><%=DB2HTML(strFPassSer)%></td>
	<td class="cell-text"><%=DB2HTML(strFPassNum)%></td>
	<td class="cell-text"><%=DB2HTML(strFPassSubdiv)%></td>
	<td class="cell-date"><%=Date2Str(dtFPassDate)%></td>
	<td class="cell-text"><%=DB2HTML(strFPassInfo)%></td>
	<td class="cell-text"><%=DB2HTML(strFSnils)%></td>
	<td class="cell-text"><%=DB2HTML(strFRelation)%></td><%
End Sub

Function GetXlsFileName()
	If bIskExportExcelExt Then
		GetXlsFileName = obLanguage("Common","kExportExcelExt") & ".xls"
	Else
		GetXlsFileName = strTitle & ".xls"
	End If
End Function
%>
