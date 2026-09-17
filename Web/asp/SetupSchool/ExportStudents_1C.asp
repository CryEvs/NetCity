<!-- #INCLUDE Virtual="/asp/headerexcel_s.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/PublicUsers_inc.asp -->
<!-- #INCLUDE file="MoveDoc_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kParamsCount = 63

Dim lngGrade
Dim objStudentParentsList
Dim objUsersList, strSafeUserID
Dim strTitle
Dim objIllnessList, strSearch

Function UserListForRole()
	UserListForRole = RoleGroup_Students
End Function

Sub ReadStateSpecial()
	Call InitGrType()
End Sub

Sub Main()
	Dim objLangRS
	SetScriptTimeOut 900
	If nFindType = FilterType_Search Then
		strSearch = strFio
		strGender = ""
		lngGrade = -3
		strLetter = null
	Else
		strSearch = ""
	End If
	Set objUsersList = objNSNET.GetStudentListWithDetails_1C(strCurrYearID, strSchoolID, strFirstLetter, strLastLetter, strGender, lngGrade, lngSortOrder, strLetter, strSearch)
	If Not objUsersList.EOF Then
		Set objStudentParentsList = objUsersList.Fields()("rsStudentParents").Value
		Set objIllnessList = objUsersList.Fields()("rsAttrParams").Value
	End If
	strTitle = obLanguage("FilterUsers","kStudentList",strFunctionalityType)
End Sub

Sub InitUserID()
	strSafeUserID = GetSafeID(objUsersList("STUDENTID"), Null)
End Sub

Sub DrawSchoolTable()
	Dim objSchoolInfo
	If Not bIsDebug Then On Error Resume Next
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	TestError(obLanguage("UsersExport_1C","kErrorCantGetSchoolInfo"))%>

	<table border="1">
	<tr nowrap bgcolor="#e7eff7">
		<th><%=obLanguage("UsersExport_1C","kFullName")%></th><th><%=obLanguage("UsersExport_1C","kShortName")%></th><th><%=obLanguage("UsersExport_1C","kOrgType")%></th><th><%=obLanguage("UsersExport_1C","kOrgView")%></th><th>&nbsp;</th><th><%=obLanguage("UsersExport_1C","kFactAddress")%></th>
	</tr><tr nowrap bgcolor="#e7eff7">
		<td align="center"><%=DB2HTML(objSchoolInfo("FULLSCHOOLNAME"))%></td>
		<td align="center"><%=DB2HTML(objSchoolInfo("SCHOOLNAME"))%></td>
		<td align="center"><%=DB2HTML(objSchoolInfo("EOTYPENAME"))%></td>
		<td align="center"><%=DB2HTML(objSchoolInfo("EOFORMNAME"))%></td>
		<td align="center">&nbsp;</td>
		<td align="center"><%=DB2HTML(objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00address"))%></td>
	</tr>
	</table><%
End Sub


Sub onDrawPage()
	Dim strPassDate, strPassInfo, strPassSer, strPassNum
	Dim nIndex, nTmpUserID
	Dim i
	Dim bPassport
	If Not objUsersList.EOF Then
		Call DrawSchoolTable()%>
		<table border="1">
		<tr nowrap bgcolor="#e7eff7">
		<th rowspan="5"><%=obLanguage("UsersExport_1C","kDataFields")%></th><%
		For i = 1 To kParamsCount%>
			<th><%=i%></th><%
		Next%>
		</tr><tr nowrap bgcolor="#e7eff7">
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kOrderNum")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kClassName")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kPersonalRec")%></th>
		<th rowspan="3"><%=obLanguage("Common","kLastName")%></th>
		<th rowspan="3"><%=obLanguage("Common","kFirstName")%></th>
		<th rowspan="3"><%=obLanguage("Common","kMiddleName")%></th>

		<th rowspan="3"><%=obLanguage("Reports","kBirthdate")%></th>
		<th rowspan="3"><%=obLanguage("Common","kGender")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kBirthPlace")%></th>

		<th colspan="2"><%=obLanguage("UsersExport_1C","kMedPolicy")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kMedPolicy_Org")%></th>

		<th colspan="8"><%=obLanguage("UsersExport_1C","kIdentityCard")%></th>

		<th rowspan="3"><%=obLanguage("UsersExport_1C","kPhone")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kRegistrationType")%></th>

		<th colspan="16"><%=obLanguage("UsersExport_1C","kAddress")%></th>
		<th colspan="16"><%=obLanguage("UsersExport_1C","kTutorInfo")%></th>
		<th colspan="2"><%=obLanguage("UsersExport_1C","kMovement")%></th>
		<th colspan="7"><%=obLanguage("UsersExport_1C","kHealthList")%></th>

		</tr><tr nowrap bgcolor="#e7eff7">
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kSeries")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kNumber")%></th>
		<th colspan="4"><%=obLanguage("UsersExport_1C","kBirthCertificate")%></th>
		<th colspan="4"><%=obLanguage("UsersExport_1C","kPassport_Rus")%></th>

		<th colspan="8"><%=obLanguage("UsersExport_1C","kByRegistration")%></th>
		<th colspan="8"><%=obLanguage("UsersExport_1C","kFactResidence")%></th>

		<th colspan="4"><%=obLanguage("Common","kMother")%></th>
		<th colspan="4"><%=obLanguage("Common","kFather")%></th>
		<th colspan="4"><%=obLanguage("UsersExport_1C","kParentReplacement_1")%></th>
		<th colspan="4"><%=obLanguage("UsersExport_1C","kParentReplacement_2")%></th>

		<th rowspan="2"><%=obLanguage("UsersExport_1C","kArriveDate")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kBeforeFirstClass")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kHealthGroup")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kDiagnosis")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kPhysicalGroup")%></th>
		<th rowspan="2"><%=obLanguage("Common","kDate")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kContraIndication")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kDoctorRecommendation")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kDeskNum")%></th>

		</tr><tr nowrap bgcolor="#e7eff7">
		<th><%=obLanguage("UsersExport_1C","kSeries")%></th>
		<th><%=obLanguage("UsersExport_1C","kNumber")%></th>
		<th><%=obLanguage("UsersExport_1C","kIssueDate")%></th>
		<th><%=obLanguage("UsersExport_1C","kIssueWho")%></th>
		<th><%=obLanguage("UsersExport_1C","kSeries")%></th>
		<th><%=obLanguage("UsersExport_1C","kNumber")%></th>
		<th><%=obLanguage("UsersExport_1C","kIssueDate")%></th>
		<th><%=obLanguage("UsersExport_1C","kIssueWho")%></th>

		<th><%=obLanguage("Common","kZipCode")%></th>
		<th><%=obLanguage("Common","kRegion")%></th>
		<th><%=obLanguage("Common","kDistrict")%></th>
		<th><%=obLanguage("Common","kCity")%></th>
		<th><%=obLanguage("Common","kStreet")%></th>
		<th><%=obLanguage("Common","kHouse")%></th>
		<th><%=obLanguage("Common","kCorp")%></th>
		<th><%=obLanguage("Common","kFlat")%></th>
		<th><%=obLanguage("Common","kZipCode")%></th>
		<th><%=obLanguage("Common","kRegion")%></th>
		<th><%=obLanguage("Common","kDistrict")%></th>
		<th><%=obLanguage("Common","kCity")%></th>
		<th><%=obLanguage("Common","kStreet")%></th>
		<th><%=obLanguage("Common","kHouse")%></th>
		<th><%=obLanguage("Common","kCorp")%></th>
		<th><%=obLanguage("Common","kFlat")%></th>

		<th><%=obLanguage("Common","kLastName")%></th>
		<th><%=obLanguage("Common","kFirstName")%></th>
		<th><%=obLanguage("Common","kMiddleName")%></th>
		<th><%=obLanguage("UsersExport_1C","kContactInfo")%></th>
		<th><%=obLanguage("Common","kLastName")%></th>
		<th><%=obLanguage("Common","kFirstName")%></th>
		<th><%=obLanguage("Common","kMiddleName")%></th>
		<th><%=obLanguage("UsersExport_1C","kContactInfo")%></th>
		<th><%=obLanguage("Common","kLastName")%></th>
		<th><%=obLanguage("Common","kFirstName")%></th>
		<th><%=obLanguage("Common","kMiddleName")%></th>
		<th><%=obLanguage("UsersExport_1C","kContactInfo")%></th>
		<th><%=obLanguage("Common","kLastName")%></th>
		<th><%=obLanguage("Common","kFirstName")%></th>
		<th><%=obLanguage("Common","kMiddleName")%></th>
		<th><%=obLanguage("UsersExport_1C","kContactInfo")%></th>

		</tr><tr nowrap bgcolor="#e7eff7">
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNumberLetter")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_20_symbols")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_10_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_10_symbols")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td align="center">&nbsp;</td>
		<td align="center">&nbsp;</td>
		<td align="center">&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNumbers_6")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNumbers_6")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		</tr><%
		nIndex = 1
		If Not objUsersList.EOF Then Call InitUserID()
		While Not objUsersList.EOF
			bPassport = Not (IsDull(objUsersList("PASS_SER")) And IsDull(objUsersList("PASS_NUM")) And IsDull(objUsersList("PASS_DATE")) And IsDull(objUsersList("PASS_INFO")))%>
			<tr valign="top"><td class="xtc">&nbsp;</td><td class="xtc"><%=nIndex%></td><%
			Call DrawClass()%>
			<TD class="xtc"><%=DB2HTML_BR(objUsersList("PERSONALREC"))%></TD>
			<TD class="xtc"><%=DB2HTML_BR(objUsersList("LASTNAME"))%></TD>
			<TD class="xtc"><%=DB2HTML_BR(objUsersList("FIRSTNAME"))%></TD>
			<TD class="xtc"><%=DB2HTML_BR(objUsersList("MIDDLENAME"))%></TD>

			<TD class="xtc"><%=Date2Str_1C(objUsersList("BIRTHDATE"))%></TD>
			<TD class="xtc"><%=DB2HTML_BR(objUsersList("GENDER"))%></TD>
			<TD class="xtc">&nbsp;</TD>

			<TD class="xtc"><%=DB2HTML_BR(objUsersList("MED_SERIES"))%></TD>
			<TD class="xtc"><%=DB2HTML_BR(objUsersList("MED_NO"))%></TD>
			<TD class="xtc"><%=DB2HTML_BR(objUsersList("MED_ORG"))%></TD>

			<%If bPassport Then%>
				<TD class="xtc">&nbsp;</TD>
				<TD class="xtc">&nbsp;</TD>
				<TD class="xtc">&nbsp;</TD>
				<TD class="xtc">&nbsp;</TD>

				<TD class="xtc"><%=DB2HTML_BR(objUsersList("PASS_SER"))%></TD>
				<TD class="xtc"><%=DB2HTML_BR(objUsersList("PASS_NUM"))%></TD>
				<TD class="xtc"><%=Date2Str_1C(objUsersList("PASS_DATE"))%></TD>
				<TD class="xtc"><%=DB2HTML_BR(objUsersList("PASS_INFO"))%></TD>
			<%Else%>
				<TD class="xtc"><%=DB2HTML_BR(objUsersList("BIRTHCERTIF_SERIES"))%></TD>
				<TD class="xtc"><%=DB2HTML_BR(objUsersList("BIRTHCERTIF_NO"))%></TD>
				<TD class="xtc"><%=Date2Str_1C(objUsersList("BIRTHCERTIF_DATE"))%></TD>
				<TD class="xtc"><%=DB2HTML_BR(objUsersList("BIRTHCERTIF"))%></TD>

				<TD class="xtc">&nbsp;</TD>
				<TD class="xtc">&nbsp;</TD>
				<TD class="xtc">&nbsp;</TD>
				<TD class="xtc">&nbsp;</TD>
			<%End If%>

			<TD class="xtc"><%=DB2HTML_BR(objUsersList("HOMEPHONE"))%></TD>
			<TD class="xtc">&nbsp;</TD><%
			Call DrawUserAddressExt()
			Call DrawParents()
			Call DrawArriveDate()
			Call DrawPreSchoolInfo()%>
			<TD class="xtc"><%=DB2HTML_BR(objUsersList("HEALTH"))%></TD><%
			Call DrawIllness()%>
			<TD class="xtc"><%=DB2HTML_BR(objUsersList("FGROUP"))%></TD>
			<TD class="xtc">&nbsp;</TD>
			<TD class="xtc">&nbsp;</TD>
			<TD class="xtc">&nbsp;</TD>
			<TD class="xtc">&nbsp;</TD>

			</tr><%
			nIndex = nIndex + 1
			Do' Исключение дублей
				nTmpUserID = strSafeUserID
				objUsersList.MoveNext
				If objUsersList.EOF Then Exit Do
				Call InitUserID()
				If strSafeUserID <> nTmpUserID Then Exit Do
			Loop

		Wend%>
		</table><%
	End If
'	Response.Write GetPageVerExcel()
End Sub

Sub DrawClass()
	 Dim strClassName, rsNames
'	 On Error resume next
	 If CLng(strFunctionalityType)=kFuncType_Add Then
		 Set rsNames = objNSNET.GetStudentCurrClasses(strSafeUserID, strCurrYearID)
		 strClassName = err.description
		If Not rsNames.EOF Then
			strClassName = rsNames("CLASSNAME")
			Do
				rsNames.MoveNext
				If rsNames.EOF Then Exit Do
				strClassName = strClassName&","&rsNames("CLASSNAME")
			Loop
		End If
	Else
		 strClassName = objNSNET.GetClassNameForStudent(strSafeUserID, strCurrYearID)
	End If
	If IsDull(strClassName) Then
		%><td class="xtc">&nbsp;</td><%
	Else
		%><td class="xtc"><%=DB2HTML_BR(strClassName)%></td><%
	End If
End Sub

Sub DrawArriveDate()
	 Dim objRs, dtDate

	Set objRs = objNSNET.GetMoveDocsForStudent(strSafeUserID, strSchoolID, kDocType_ENROLL, 0)
	If objRs.EOF Then
		dtDate = Null
	Else
		objRs.MoveLast
		dtDate = objRs("DOCDATE").Value
	End If

	If IsDull(dtDate) Then%>
		<td class="xtc">&nbsp;</td><%
	Else%>
		<td class="xtc"><%=Date2Str_1C(dtDate)%></td><%
	End If
End Sub

Sub DrawPreSchoolInfo()
	 Dim objRs, strPreSchool

	Set objRs = objNSNET.GetStudentPreSchoolLast(strSafeUserID)
	If objRs.EOF Then
		strPreSchool = ""
	Else
		strPreSchool = objRs("EONAME") & ", " & objRs("CITYNAME")
	End If%>
	<td class="xtc"><%=DB2HTML_BR(strPreSchool)%></td><%
End Sub

Sub DrawParents()
	Dim strLastName, strFirstName, strMiddleName
	Dim strMLastName, strMFirstName, strMMiddleName
	Dim strFLastName, strFFirstName, strFMiddleName
	Dim strGender, bShowParents, bFemale
	Dim i
	Dim strMConnectInfo, strFConnectInfo

	bShowParents = False
	If Not objStudentParentsList.EOF Then

		If objStudentParentsList.RecordCount <= 2 Then
			bShowParents = True
			strLastName = GetSafeStr(objStudentParentsList("LASTNAME"), -1, "")
			strFirstName = GetSafeStr(objStudentParentsList("FIRSTNAME"), -1, "")
			strMiddleName = GetSafeStr(objStudentParentsList("MIDDLENAME"), -1, "")

			strGender = GetSafeStr(objStudentParentsList("GENDER"), 1, Null)
			If strGender = obLanguage("Common","kFemaleLet") Then
				strMLastName = strLastName
				strMFirstName = strFirstName
				strMMiddleName = strMiddleName
				strMConnectInfo = GetConnectInfo()
				bFemale = True
			ElseIf strGender = obLanguage("Common","kMaleLet") Then
				strFLastName = strLastName
				strFFirstName = strFirstName
				strFMiddleName = strMiddleName
				strFConnectInfo = GetConnectInfo()
				bFemale = False
			Else
				bShowParents = False
			End If

			objStudentParentsList.MoveNext
			If Not objStudentParentsList.EOF And bShowParents Then
				strLastName = GetSafeStr(objStudentParentsList("LASTNAME"), -1, "")
				strFirstName = GetSafeStr(objStudentParentsList("FIRSTNAME"), -1, "")
				strMiddleName = GetSafeStr(objStudentParentsList("MIDDLENAME"), -1, "")

				strGender = GetSafeStr(objStudentParentsList("GENDER"), 1, Null)
				If strGender = obLanguage("Common","kFemaleLet") Then
					strMLastName = strLastName
					strMFirstName = strFirstName
					strMMiddleName = strMiddleName
					strMConnectInfo = GetConnectInfo()
					If bFemale Then
						bShowParents = False
					End If
				ElseIf strGender = obLanguage("Common","kMaleLet") Then
					strFLastName = strLastName
					strFFirstName = strFirstName
					strFMiddleName = strMiddleName
					strFConnectInfo = GetConnectInfo()
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
		strFLastName = ""
		strFFirstName = ""
		strFMiddleName = ""
	End If%>
	<td class="xtc"><%=DB2HTML(strMLastName)%></td><td class="xtc"><%=DB2HTML(strMFirstName)%></td><td class="xtc"><%=DB2HTML(strMMiddleName)%></td><td class="xtc"><%=DB2HTML_BR(strMConnectInfo)%></td>
	<td class="xtc"><%=DB2HTML(strFLastName)%></td><td class="xtc"><%=DB2HTML(strFFirstName)%></td><td class="xtc"><%=DB2HTML(strFMiddleName)%></td><td class="xtc"><%=DB2HTML_BR(strFConnectInfo)%></td><%

	For i = 1 To 8%>
		<td class="xtc">&nbsp;</td><%
	Next
End Sub

Function GetConnectInfo_()
	Dim strConnectInfo

	strConnectInfo = GetSafeStr(objStudentParentsList("APPOINTMENT"), -1, "")

	If strConnectInfo <> "" And Not IsDull(objStudentParentsList("POSITION")) Then
		strConnectInfo = strConnectInfo & vbLf '"<br>"
	End If
	strConnectInfo = strConnectInfo & GetSafeStr(objStudentParentsList("POSITION"), -1, "")

	If strConnectInfo <> "" And Not IsDull(objStudentParentsList("WORKPHONE")) Then
		strConnectInfo = strConnectInfo & vbLf '"<br>"
	End If
	If Not IsDull(objStudentParentsList("WORKPHONE")) Then
		strConnectInfo = strConnectInfo & obLanguage("UsersExport_1C","kWorkPhone_S")
	End If
	strConnectInfo = strConnectInfo & GetSafeStr(objStudentParentsList("WORKPHONE"), -1, "")

	If strConnectInfo <> "" And Not IsDull(objStudentParentsList("MOBILE")) Then
		strConnectInfo = strConnectInfo & vbLf '"<br>"
	End If
	If Not IsDull(objStudentParentsList("MOBILE")) Then
		strConnectInfo = strConnectInfo & obLanguage("UsersExport_1C","kMobile_S")
	End If
	strConnectInfo = strConnectInfo & GetSafeStr(objStudentParentsList("MOBILE"), -1, "")
	GetConnectInfo_ = strConnectInfo
End Function

Function GetConnectInfo()
	Dim strConnectInfo

	strConnectInfo = ""
	If strConnectInfo <> "" And Not IsDull(objStudentParentsList("WORKPHONE")) Then
		strConnectInfo = strConnectInfo & vbLf '"<br>"
	End If
	If Not IsDull(objStudentParentsList("WORKPHONE")) Then
		strConnectInfo = strConnectInfo & obLanguage("UsersExport_1C","kWorkPhone_S")
	End If
	strConnectInfo = strConnectInfo & GetSafeStr(objStudentParentsList("WORKPHONE"), -1, "")

	If strConnectInfo <> "" And Not IsDull(objStudentParentsList("MOBILE")) Then
		strConnectInfo = strConnectInfo & ", "
	End If
	If Not IsDull(objStudentParentsList("MOBILE")) Then
		strConnectInfo = strConnectInfo & obLanguage("UsersExport_1C","kMobile_S")
	End If
	strConnectInfo = strConnectInfo & GetSafeStr(objStudentParentsList("MOBILE"), -1, "")
	GetConnectInfo = strConnectInfo
End Function

Sub DrawIllness()%>
	<td class="xtc"><%
	While Not objIllnessList.EOF
		Response.Write DB2HTML_BR(objIllnessList("ITEMNAME"))
		objIllnessList.MoveNext
		Response.Write IIF(objIllnessList.EOF,"",", ")
	Wend
	%>&nbsp;</td><%
End Sub

Sub DrawAddress( rsAddr )
	Dim arr, i, field
	i=0
	arr=Array(" "," "," "," "," "," "," "," ")
	If Not rsAddr.EOF Then
		for each field in Array("ZIPCODE", "STATEPROVINCENAME", "PROVINCENAME","CITYNAME","LOCATION","HOUSE","CORP","ROOM")
			arr(i) = rsAddr(field)
			i = i+1
		next
	End If
	for each field in arr%>
		<td class="xtc"><%=DB2HTML(field)%></td><%
	next
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

Function GetPageTitleExcel( strPageName, arrPageParams )
	Dim strScName
	Dim strPageTitle

	strScName = ""
	If Not IsDull(strSchoolID) Then
		strScName = DB2HTML(objNSNET.GetSchoolName(strSchoolID))
	End If
	strPageTitle = "<b>" & strScName & "</b>"

	GetPageTitleExcel = strPageTitle
End Function


Function GetPageTitleExcel_( strPageName, arrPageParams )
	Dim n, i, strScName, strFilter
	Dim strTitleDelim, strPageTitle
	Dim nCol

	strTitleDelim = "&nbsp;&nbsp;&nbsp;&nbsp;"

	n = -1
	If IsArray(arrPageParams) Then
		n = UBound(arrPageParams)
	End If

	strScName = ""
	If Not IsDull(strSchoolID) Then
		strScName = DB2HTML(objNSNET.GetSchoolName(strSchoolID))
	End If
	strPageTitle = "<b>" & strScName & strTitleDelim & DB2HTML_BR(strPageName) & "</b>"

	i = 0
	While i <= n
		If Not IsDull(strFilter) Then
			strFilter = strFilter & strTitleDelim
		End If
		strFilter = strFilter & "<b>" & DB2HTML_BR(arrPageParams(i)) & ":</b>&nbsp;" & DB2HTML_BR(arrPageParams(i+1))
		i = i + 2
	Wend

	If Not IsDull(strFilter) Then
		strPageTitle = strPageTitle & strTitleDelim & strFilter
	End If

	GetPageTitleExcel_ = strPageTitle
End Function

Function Date2Str_1C(dtDate)
	Dim strDay, strMonth
	If IsDull(dtDate) Then
		Date2Str_1C = "&nbsp;"
	Else
		strDay = CStr(Day(dtDate))
		If Len(strDay) = 1 Then
			strDay = "0" & strDay
		End If
		strMonth = CStr(Month(dtDate))
		If Len(strMonth) = 1 Then
			strMonth = "0" & strMonth
		End If
		Date2Str_1C = strDay & "." & strMonth & "." & Year(dtDate)
	End If
End Function

Function GetXlsFileName()
	GetXlsFileName = obLanguage("Common","kExport_1C") & ".xls"
End Function
%>
