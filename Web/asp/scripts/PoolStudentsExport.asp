<!-- #INCLUDE Virtual="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PoolStudents_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PoolStudentsPrint_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const ind_PARAMETERID	= 0
Const ind_TITLE			= 1
Const ind_PARAMTYPE		= 2
Const ind_GROUP_SIZE	= 3
Const ind_GROUPID		= 4

Dim objUserInfo, cmdLangs
Dim strStudentID, strRowspan', strStudSYID
Dim arrAttrParams, strRwSpan

Sub Main()
	Dim nTmp, objAttrParams

	nTmp = 0
	If (bUseRepl Or obContext.ServerSettings.SystemSettings.ModuleEServices) and Not objNSNET.IsAdminOfServer(strUserID) and Not bIsEducManager Then strEOIDTO = objNSNET.GetSchoolInfo(strSchoolID)("EOID") :Else strEOIDTO="0"
	Set objStudentList = objNSNET.GetPoolStudents(nViewType, nPoolCategoryID, nPoolFilter, strFuncTypeID, strFirstLetter, strLastLetter, strGender, strDepReasonID, nInaccReason, strPoolGrade, strPoolYearID, strPoolSchoolID,strEOIDTO, lngSortOrder, 0, 0, nTmp, -1)
	lngStudentCnt = 0
	If Not objStudentList Is Nothing Then lngStudentCnt = objStudentList.RecordCount

	If lngStudentCnt > 0 Then
		Set objAttrParams = objNSNET.GetCommonUserParams(2)
		If objAttrParams.EOF Then GenerateError obLanguage("Common","kUnexpErr")
		arrAttrParams = objAttrParams.GetRows(,,Array("PARAMETERID", "TITLE", "PARAMTYPE", "GROUP_SIZE", "GROUPID"))
	End If
End Sub

Sub onDrawPage()
	Dim nIndex, nNewStudID, nStudID, strClasses
	Dim strPassDate, strPassInfo, strPassSer, strPassNum
	Dim cmdNation, objNation
	Dim strDepartPlace

	Call GetArrUsersFilters
	Response.Write GetPageTitleExcel(obLanguage("FilterUsers","kStudentList",0), arrUsersFilters)

	Set cmdLangs = objNSNET.GetStudentLanguages_Prepare()
	Set cmdNation = objNSNET.GetUserNation_Prepare()

	If lngStudentCnt <= 0 Then Exit Sub

	strRowspan=""
	If strFunctionalityType <> kFuncType_Add And Not bPseudoPool Then
		strRowspan=" rowspan=""2"""
		' Здесь rowspan="2" - из-за наличия групп. Это используется только в заголовках!
	End If

	%>
	<table border="1">
		<tr nowrap bgcolor="#e7eff7">
		<th<%=strRowspan%>><%=obLanguage("Filter","kN_PP")%></th>
		<th<%=strRowspan%>><%=obLanguage("Filter","kFIO")%></th>
		<th<%=strRowspan%>><%=obLanguage("Common","kDisplayName")%></th>
		<th<%=strRowspan%>><%=obLanguage("Common","kUserName")%></th>
		<th<%=strRowspan%>><%=obLanguage("Common","kBDate")%></th><%
		If Not bPseudoPool Then%>
			<th<%=strRowspan%>><%=obLanguage("Common","kNation")%></th>
			<th<%=strRowspan%>><%=obLanguage("Common","kPassport")%></th><%
		End If
		Call ShowUserExtInfoTitle() ' Parents
		If Not bPseudoPool Then%>
			<th<%=strRowspan%>><%=obLanguage("Common","kHomePhone_")%></th>
			<th<%=strRowspan%>>E-mail</th><%
			If strFunctionalityType <> kFuncType_Add Then%>
				<th<%=strRowspan%>><%=obLanguage("Common","kHomeAddress")%></th>
				<th<%=strRowspan%>><%=obLanguage("Common","kRegistrationAddress")%></th><%
				Call DrawUserRoleFeatureTitle()
				Call DrawAttributParamsTitle()
			End If
		Else
			Call DrawPseudoPoolParamsTitle()
		End If%>
		</tr><%
	nIndex = 1
	
	Dim rsMSL, rwSpan, bEmptyAddInfo, strSchName

	While Not objStudentList.EOF
		rsMSL = objStudentList("chapMSL")
		strStudentID = objStudentList("STUDENTID")

		Set objNation = objNSNET.GetUserNation_Execute(cmdNation, strStudentID)
		If objNation.EOF Then
			objNSNET.DisposeCommand(cmdLangs)
			objNSNET.DisposeCommand(cmdNation)
			GenerateError obLanguage("Common","kInvalidParameter")
		End If
			
		rwSpan = objStudentList("cnt")
		bEmptyAddInfo = (rwSpan = 0)
		If(rwSpan > 1) Then strRwSpan = " rowspan=""" & rwSpan & """" Else strRwSpan = ""%>

		<tr><td class="xn3l"<%=strRwSpan%>><%=nIndex%></td>
		<TD class="xtl"<%=strRwSpan%>><%=DB2HTML_BR(objStudentList("LASTNAME")&" "&objStudentList("FIRSTNAME")&" "&objStudentList("MIDDLENAME"))%></TD>
		<TD class="xtl"<%=strRwSpan%>><%=DB2HTML_BR(rsMSL("NICKNAME"))%></TD>
		<TD class="xtl"<%=strRwSpan%>><%=DB2HTML_BR(rsMSL("LOGINNAME"))%></TD>
		<TD class="xd"<%=strRwSpan%>><%=Date2Str(objStudentList("BIRTHDATE"))%></TD><%
		If Not bPseudoPool Then%>
			<TD class="xtl"<%=strRwSpan%>><%=DB2HTML_BR(objNation("NATION"))%></TD><%
			strPassDate = rsMSL("PASS_DATE")
			strPassInfo = rsMSL("PASS_INFO")
			strPassSer = rsMSL("PASS_SER")
			strPassNum = rsMSL("PASS_NUM")
			If IsDull(strPassDate) And IsDull(strPassInfo) And IsDull(strPassSer) And IsDull(strPassNum) Then%>
				<TD class="xtl"<%=strRwSpan%>>&nbsp;</TD><%
			Else
				If IsDull(strPassDate) Then strPassDate = "" Else strPassDate = Date2Str(strPassDate)
				strPassInfo=DB2Value(strPassInfo) ' DB2Value is used to eliminate extra "&nbsp;"
				strPassSer=DB2Value(strPassSer)
				strPassNum=DB2Value(strPassNum)%>
				<TD class="xtl"<%=strRwSpan%>><%=strPassSer%>&nbsp;&nbsp;№&nbsp;<%=strPassNum%><%=IIF((strPassDate<>"") Or (strPassInfo<>""), "&nbsp;&nbsp;"&obLanguage("Common","kPassportInfo")&" "&strPassDate&" "&strPassInfo, "")%></TD><%
			End If
		End If

		Call ShowUserExtInfo() 'Parents
		If Not bPseudoPool Then%>
			<TD class="xtc"<%=strRwSpan%>><%=DB2HTML_BR(rsMSL("HOMEPHONE"))%></TD>
			<TD class="xtl"<%=strRwSpan%>><%=DB2HTML_BR(rsMSL("EMAIL"))%></TD><%
		End If
		If strFunctionalityType <> kFuncType_Add Then
			If Not bPseudoPool Then
				Call DrawUserAddressExt()
				Call DrawUserRoleFeature()
				Call DrawAttrParamsValue()
			End If
			Do
				' Pool specific
				If Not bPseudoPool Then
					strDepartPlace = ""
					If Not IsDull(rsMSL("EONAME")) Then strDepartPlace = rsMSL("EONAME") & " (" & rsMSL("CITYNAME") & ")"%>
					<td class="xtc"><%=DB2HTML(rsMSL("SCHOOLNAME"))%></td>
					<td class="xtc"><%=IIF(IsNull(rsMSL("REASONNAME")), obLanguage("PoolStudents","kGraduated_"), DB2HTML(rsMSL("REASONNAME")) )%></td>
					<td class="xtc"><%=DB2HTML(strDepartPlace)%></td><%
					If nViewType < 0 Then%><td class="xtc"><%=ShowReason(rsMSL("REASONID"))%></td><%End If%>
					<td class="xtc"><%=DB2HTML(rsMSL("SCHOOLYEARNAME"))%></td><%
				Else
					strSchName = ""
					If Not bEmptyAddInfo Then
						strSchName = rsMSL("SCHOOLNAME") & " (" & rsMSL("CITYNAME") & ")"
					End If%>
					<td class="xtc"><%=DB2HTML(strSchName)%></td><%
				End If%>
				<td class="xd"><%=Date2Str(rsMSL("DOCDATE"))%></td><%
				If bPseudoPool Then%>
					<td class="xtc"><%=DB2HTML(rsMSL("DOCNUMBER"))%></td><%
				End If%>
				<td class="xtc"><%=DB2HTML(rsMSL("CLASSNAME"))%></td>
				</tr><%
				rsMSL.MoveNext
				If Not rsMSL.EOF Then%>
					<tr><%
				End If
			Loop Until rsMSL.EOF
		End If
		objStudentList.MoveNext
		nIndex = nIndex + 1
	Wend%>
	</table><%
	objNSNET.DisposeCommand(cmdLangs)
	objNSNET.DisposeCommand(cmdNation)
	Response.Write GetPageVerExcel()
End Sub

Sub DrawUserAddressExt()
	Dim rsAddr
	Set rsAddr = objNSNET.GetUserAddress( strStudentID , 1)
	Call DrawAddress(rsAddr)
	If Not rsAddr.EOF Then
		IF rsAddr("STATUS") = "E" Then Response.Write "<td class=""xtl"">"&obLanguage("UsersExport","kEqualAddress_")&"</td>" : Exit Sub
	End If
	Call DrawAddress(objNSNET.GetUserAddress( strStudentID , 0))
End Sub

Function GetAddress( rsAddr )
	Dim province
	If rsAddr.EOF Then GetAddress = "": Exit Function
	province = rsAddr("PROVINCENAME")
	If IsDull(province) Then province = ""
	GetAddress = rsAddr("ZIPCODE") & " " &rsAddr("STATEPROVINCENAME")& ", " &province & CHR(10) &_
		rsAddr("CITYNAME") & ", " & rsAddr("ADDRESS")
End Function

Sub DrawAddress( rsAddr )%>
	<td class="xtl"<%=strRwSpan%>><%=DB2HTML_BR(GetAddress( rsAddr ))%></td><%
End Sub

' Известно, что для Учеников нет параметров PARAMTYPE='F' для SYDEPEND='N', поэтому их здесь нет.
Sub DrawAttributParamsTitle()
	Dim i
	For i = 0 To UBound(arrAttrParams, 2)
		If GetSafeStr(arrAttrParams(ind_PARAMTYPE, i), 1, "") = "G" Then%>
			<th colspan="<%=GetSafeLng(arrAttrParams(ind_GROUP_SIZE, i), 1)%>"><%=DB2HTML_BR(GetSafeStr(arrAttrParams(ind_TITLE, i),-1,""))%></th><%
		Else
			If IsDull(arrAttrParams(ind_GROUPID, i)) Then%>
				<th<%=strRowspan%>><%=DB2HTML_BR(GetSafeStr(arrAttrParams(ind_TITLE, i),-1,""))%></th><%
			End If
		End If
	Next
	' Pool specific
	%>
	<th<%=strRowspan%>>
		<%=obLanguage("PoolStudents","kPoolSchool")%>
	</th>
	<th<%=strRowspan%>>
		<%=obLanguage("PoolStudents","kPoolReason")%>
	</th>
	<th<%=strRowspan%>>
		<%=obLanguage("PoolStudents","kPoolDepartPlace")%>
	</th> <%
	If nViewType < 0 Then%><th<%=strRowspan%>><%=obLanguage("PoolStudents","kInaccessibilityReason")%></th><%End If%>
	<th<%=strRowspan%>>
		<%=obLanguage("PoolStudents","kPoolYear")%>
	</th>
	<th<%=strRowspan%>>
		<%=obLanguage("PoolStudents","kPoolData")%>
	</th>
	<th<%=strRowspan%>>
		<%=obLanguage("PoolStudents","kPoolGrades2",strFunctionalityType)%>
	</th>
	</tr><tr><%
	For i = 0 To UBound(arrAttrParams, 2)
		If Not IsDull(arrAttrParams(ind_GROUPID, i)) Then%>
			<th><%=DB2HTML_BR(GetSafeStr(arrAttrParams(ind_TITLE, i),-1,""))%></th><%
		End If
	Next
End Sub

Sub DrawPseudoPoolParamsTitle()
	' Pool specific
	%>
	<th<%=strRowspan%>>
		<%=obLanguage("Common","kSchool",kFuncType_Add)%>
	</th>
	<th<%=strRowspan%>>
		<%=obLanguage("SetupSchool","kEnrollDate")%>
	</th>
	<th<%=strRowspan%>>
		<%=obLanguage("Movement","kDocNumber")%>
	</th>
	<th<%=strRowspan%>>
		<%=obLanguage("Common","kClass",kFuncType_Add)%>
	</th>
	</tr><%
End Sub


' Для Учеников для (UP.SCHOOLID IS NULL AND UP.SYDEPEND='N') сейчас существуют только параметры S, A, D, P - в группе и без. Поэтому их и рассматриваем.
' #8322 Добавился параметр типа L.
Sub DrawAttrParamsValue()
	Dim i, objParam, objRs
	Dim strParamType, strParamID

	For i = 0 To UBound(arrAttrParams, 2)
		strParamType = GetSafeStr(arrAttrParams(ind_PARAMTYPE, i), 1, "")
		If strParamType <> "G" Then
			strParamID = GetSafeID(arrAttrParams(ind_PARAMETERID, i), Null)
			Set objParam = objNSNET.GetUserParamValue(strStudentID, strParamID, -1, -1)
			If objParam.EOF Then%>
				<td class="xtl"<%=strRwSpan%>>&nbsp;</td><%
			Else
				If strParamType = "S" Or strParamType = "A" Then%>
					<td class="xtl"<%=strRwSpan%>><%=DB2HTML_BR(objParam("PARAMVALUE"))%></td><%
				ElseIf strParamType = "D" Then%>
					<td class="xd"<%=strRwSpan%>><%=Date2Str(objParam("PARAMVALUE_DT"))%></td><% ' Date
				ElseIf strParamType = "L" Or strParamType = "P" Then
					Set objRs = objNSNET.GetUserParamItemInfo(objParam("PARAMVALUE_ID") )
					If objRs.EOF Then%>
						<td class="xtl"<%=strRwSpan%>>&nbsp;</td><%
					Else%>
						<td class="xtl"<%=strRwSpan%>><%= DB2HTML(GetSafeStr(objRs("ITEMNAME"), -1, ""))%></td><%
					End IF
				End If
			End If
		End If
	Next
End Sub

Sub ShowUserExtInfoTitle()%>
	<th<%=strRowspan%>><%=obLanguage("Common","kParents")%></th><%
End Sub

Sub DrawUserRoleFeatureTitle()%>
	<TH<%=strRowspan%>><%=obLanguage("Filter","kForeign_")%></TH>
	<TH<%=strRowspan%>><%=obLanguage("Filter","kForeign2_")%></TH><%
End Sub

Sub ShowUserExtInfo()
	Dim objParents

	Set objParents = objNSNET.GetParentsListForStudent(strStudentID)
	%><td class="xtl"<%=strRwSpan%>><%
	While Not objParents.EOF
		Response.write DB2HTML_BR(objParents("LASTNAME")) & IIF(not isDull(objParents("FIRSTNAME"))," " & DB2HTML_BR(objParents("FIRSTNAME")),"") & IIF(not isDull(objParents("MIDDLENAME"))," " & DB2HTML_BR(objParents("MIDDLENAME")),"")
		objParents.MoveNext
		Response.write IIF(objParents.EOF,"","<br>")
	Wend
	%>&nbsp;</td><%
End Sub

Sub DrawUserRoleFeature()
	Dim objRS, strLangName, strLangName2

	Set objRS = objNSNET.GetStudentLanguages_Execute(cmdLangs, strStudentID)
	If objRS.EOF Then GenerateError obLanguage("Common","kInvalidParameter")

	strLangName = GetSafeStr(objRS("LANG"), -1, "")
	strLangName2 = GetSafeStr(objRS("LANG2"), -1, "")
	%>
	<td class="xtl"<%=strRwSpan%>><%=DB2HTML_BR(strLangName)%></td>
	<td class="xtl"<%=strRwSpan%>><%=DB2HTML_BR(strLangName2)%></td><%
End Sub
%>
