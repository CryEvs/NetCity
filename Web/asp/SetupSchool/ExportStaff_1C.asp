<!-- #INCLUDE Virtual="/asp/headerexcel_s.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Seniorities_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kParamsCount = 58
Const kSeniorityType_Common = "1"
Const kSeniorityType_Contin = "3"
Const kSeniorityType_Teacher = "2"

Dim objUsersList, strSafeUserID
Dim strTitle, strRowCnt
Dim cmdSeniorities, strSearch

Sub ReadState()
	Call ReadCommonUsersFilter(RoleGroup_Staffs)
End Sub

Sub Main()
	SetScriptTimeOut 900
	If nFindType = FilterType_Search Then
		strSearch = strFio
		strGender = ""
	Else
		strSearch = ""
	End If
	Set objUsersList = objNSNET.GetStaffListWithDetails_1C(strCurrYearID, strSchoolID, strFirstLetter, strLastLetter, strGender, lngSortOrder, strSearch)
End Sub

Sub InitUserID()
	strSafeUserID = GetSafeID(objUsersList("USERID"), Null)
End Sub

Sub DrawSchoolTable()
	Dim objSchoolInfo

	If Not bIsDebug Then On Error Resume Next
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	TestError(obLanguage("UsersExport_1C","kErrorCantGetSchoolInfo"))%>

	<table border="1">
	<tr nowrap bgcolor="#e7eff7">
		<th><%=obLanguage("UsersExport_1C","kFullName")%></th><th><%=obLanguage("UsersExport_1C","kShortName")%></th><th><%=obLanguage("UsersExport_1C","kOrgType")%></th><th><%=obLanguage("UsersExport_1C","kOrgView")%></th><th><%=obLanguage("UsersExport_1C","kDomicile")%></th>
	</tr><tr nowrap bgcolor="#e7eff7">
		<td align="center"><%=DB2HTML(objSchoolInfo("FULLSCHOOLNAME"))%></td>
		<td align="center"><%=DB2HTML(objSchoolInfo("SCHOOLNAME"))%></td>
		<td align="center"><%=DB2HTML(objSchoolInfo("EOTYPENAME"))%></td>
		<td align="center"><%=DB2HTML(objSchoolInfo("EOFORMNAME"))%></td>
		<td align="center"><%=DB2HTML(objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00address"))%></td>
	</tr>
	</table><%
End Sub

Sub onDrawPage()
	Dim strPassDate, strPassInfo, strPassSer, strPassNum
	Dim nIndex, nTmpUserID
	Dim i, j
	Dim bPassport
	Dim objTSubjects, nRowCnt

'	Call GetArrUsersFilters()
'	Response.Write GetPageTitleExcel()

	Set cmdSeniorities = objNSNET.GetStaffSeniorities_Prepare()
	If Not objUsersList.EOF Then
		Call DrawSchoolTable()%>
		<table border="1">
		<tr nowrap bgcolor="#e7eff7">
		<th rowspan="5"><%=obLanguage("UsersExport_1C","kDataFields")%></th><%
		For i = 1 To 72%>
			<th><%=i%></th><%
		Next%>

		</tr><tr nowrap bgcolor="#e7eff7">
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kOrderNum")%></th>
		<th rowspan="3"><%=obLanguage("Common","kLastName")%></th>
		<th rowspan="3"><%=obLanguage("Common","kFirstName")%></th>
		<th rowspan="3"><%=obLanguage("Common","kMiddleName")%></th>
		<th rowspan="3"><%=obLanguage("Common","kGender")%></th>
		<th rowspan="3"><%=obLanguage("Reports","kBirthdate")%></th>

		<th colspan="4"><%=obLanguage("UsersExport_1C","kBirthPlace_2")%></th>
		<th rowspan="3"><%=obLanguage("Common","kNation")%></th>
		<th colspan="8"><%=obLanguage("UsersExport_1C","kAddressByRegistration")%></th>

		<th colspan="2"><%=obLanguage("UsersExport_1C","kPhone")%></th>

		<th rowspan="3"><%=obLanguage("UsersExport_1C","kEMail")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kINN")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kIFNS")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kInsurancePolis")%></th>

		<th colspan="2"><%=obLanguage("UsersExport_1C","kMedPolicy")%></th>

		<th rowspan="3"><%=obLanguage("UsersExport_1C","kPersonalAccount")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kPayerCategory")%></th>

		<th colspan="4"><%=obLanguage("UsersExport_1C","kPassport_Rus")%></th>
		<th colspan="9"><%=obLanguage("UsersExport_1C","kMartialTicket")%></th>

		<th rowspan="3"><%=obLanguage("UsersExport_1C","kMedBookNumber")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kMedBookOrg")%></th>

		<th rowspan="3"><%=obLanguage("UsersExport_1C","kTabNumber")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kStatusWork")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kPosition")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kRating")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kTabNumber_ZIK")%></th>
		<th rowspan="3"><%=obLanguage("UsersExport_1C","kQualifCategory")%></th>

		<th colspan="2"><%=obLanguage("UsersExport_1C","kSubjects2")%></th>
		<th colspan="8"><%=obLanguage("UsersExport_1C","kEducation")%></th>

		<th><%=obLanguage("UsersExport_1C","kSeniorityContin")%></th>
		<th><%=obLanguage("UsersExport_1C","kSeniorityCommon")%></th>
		<th><%=obLanguage("UsersExport_1C","kSeniorityTeacher")%></th>

		<th colspan="9"><%=obLanguage("UsersExport_1C","kAwardsAndAchieves")%></th>
		</tr><tr nowrap bgcolor="#e7eff7">

		<th rowspan="2"><%=obLanguage("UsersExport_1C","kCityVillage")%></th>
		<th rowspan="2"><%=obLanguage("Common","kDistrict")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kRegionEdgeRepublic")%></th>
		<th rowspan="2"><%=obLanguage("Common","kCountry")%></th>

		<th rowspan="2"><%=obLanguage("Common","kZipCode")%></th>
		<th rowspan="2"><%=obLanguage("Common","kRegion")%></th>
		<th rowspan="2"><%=obLanguage("Common","kDistrict")%></th>
		<th rowspan="2"><%=obLanguage("Common","kCity")%></th>
		<th rowspan="2"><%=obLanguage("Common","kStreet")%></th>
		<th rowspan="2"><%=obLanguage("Common","kHouse")%></th>
		<th rowspan="2"><%=obLanguage("Common","kCorp")%></th>
		<th rowspan="2"><%=obLanguage("Common","kFlat")%></th>

		<th rowspan="2"><%=obLanguage("UsersExport_1C","kPhoneNumbers")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kNote")%></th>

		<th rowspan="2"><%=obLanguage("UsersExport_1C","kNumber")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kSeries")%></th>

		<th rowspan="2"><%=obLanguage("UsersExport_1C","kIssueDate")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kIssueWho")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kNumber")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kSeries")%></th>

		<th rowspan="2"><%=obLanguage("UsersExport_1C","kWarriorTitle")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kVUS")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kCategorySuitable")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kCategoryReserve")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kComisariatName")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kNumber")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kNumberCommandParty")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kSeries")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kCompositionProfile")%></th>

		<th rowspan="2"><%=obLanguage("UsersExport_1C","kSubjectName")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kTeacherRating")%></th>

		<th rowspan="2"><%=obLanguage("UsersExport_1C","kViewEducation")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kDateEnd")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kQualification")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kNameDocument")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kNumberDocument")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kNameEducationOrg")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kSeriesDocument")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kProfession")%></th>

		<th rowspan="2"><%=obLanguage("UsersExport_1C","kPosDateBegin")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kPosDateBegin")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kPosDateBegin")%></th>

		<th colspan="2"><%=obLanguage("UsersExport_1C","kStateAwards")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kBranchAwards")%></th>
		<th rowspan="2"><%=obLanguage("UsersExport_1C","kRegionAwards")%></th>
		<th colspan="3"><%=obLanguage("UsersExport_1C","kTeacherAchieves")%></th>
		<th colspan="2"><%=obLanguage("UsersExport_1C","kStateAwards")%></th>
		</tr><tr nowrap bgcolor="#e7eff7">
		<th><%=obLanguage("UsersExport_1C","kRFMedals")%></th>
		<th><%=obLanguage("UsersExport_1C","kHonoredTitles")%></th>
		<th><%=obLanguage("Common","kYear")%></th>
		<th><%=obLanguage("UsersExport_1C","kAchieves")%></th>
		<th><%=obLanguage("UsersExport_1C","kLevel")%></th>
		<th><%=obLanguage("UsersExport_1C","kAchieve")%></th>
		<th><%=obLanguage("UsersExport_1C","kLevel")%></th>
		</tr><tr nowrap bgcolor="#e7eff7">

		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNumbers_6")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_30_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_100_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_12_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_10_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_14_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_10_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_10_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_20_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_20_symbols")%></td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_10_symbols")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_2_figures")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_5_figures")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kNotGreater_2_figures")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromList")%></td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kDateFormat")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td>&nbsp;</td>
		<td align="center"><%=obLanguage("UsersExport_1C","kYearFormat")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		<td align="center"><%=obLanguage("UsersExport_1C","kChoosingFromAddList")%></td>
		</tr><%

		Set objTSubjects = objUsersList("TEACHERS_SUBJECTS").value
		nIndex = 1
		While Not objUsersList.EOF
			Call InitUserID()

			nRowCnt = objTSubjects.RecordCount
			If nRowCnt < 2 Then
				nRowCnt = 0
				If Not IsDull(objUsersList("POSITION_")) Then nRowCnt = nRowCnt + 1
				If Not IsDull(objUsersList("POSITION2")) Then nRowCnt = nRowCnt + 1
				If nRowCnt = 0 Then nRowCnt = 1
			End If
			nRowCnt = 5
			strRowCnt = IIf(nRowCnt = 1, "", " rowspan=""" & nRowCnt & """")%>

			<tr valign="top"><%DrawCell "xtc", "&nbsp;" : DrawCell "xtc", nIndex
			DrawCells Array("LASTNAME", "FIRSTNAME", "MIDDLENAME", "GENDER")
			DrawCell "xtc", Date2Str_1C(objUsersList("BIRTHDATE"))
			DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;"
			DrawCell "xtc", DB2HTML_BR(objUsersList("NATION"))
			Call DrawUserAddressExt()
			strRowCnt = ""
			DrawCell "xtc", DB2HTML_BR(objUsersList("HOMEPHONE"))
			DrawCell "xtc", obLanguage("UsersExport_1C","kHome")
			strRowCnt = IIf(nRowCnt = 1, "", " rowspan=""" & nRowCnt & """")
			DrawCells Array("EMAIL", "INN")
			DrawCell "xtc", "&nbsp;"
			DrawCell "xtc", DB2HTML_BR(objUsersList("SNILS"))
			DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;"
			DrawCell "xtc", Date2Str_1C(objUsersList("PASS_DATE"))
			DrawCells Array("PASS_INFO", "PASS_NUM", "PASS_SER")
			DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;"
			DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;"
			DrawCell "xtc", DB2HTML_BR(objUsersList("TAB_NO"))
			DrawCell "xtc", DB2HTML_BR(GetStaffStatus_1C(objUsersList("STATUS")))
			strRowCnt = ""
			If Not IsDull(objUsersList("POSITION_")) Then
				DrawCells Array("POSITION_", "RATING")
				DrawCell "xtc", "&nbsp;"
				DrawCell "xtc", DB2HTML_BR(objUsersList("CATEGORY"))
			ElseIf Not IsDull(objUsersList("POSITION2")) Then
				DrawCells Array("POSITION2", "RATING2")
				DrawCell "xtc", "&nbsp;"
				DrawCell "xtc", DB2HTML_BR(objUsersList("CATEGORY2"))
			Else
				DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;"
			End If

			If Not objTSubjects.EOF Then
				DrawCell "xtc", DB2HTML_BR(objTSubjects("SUBJECTNAME"))
				objTSubjects.MoveNext
			Else
				DrawCell "xtc", "&nbsp;"
			End If
			DrawCell "xtc", "&nbsp;"
			DrawCell "xtc", DB2HTML_BR(objUsersList("EDUCATION"))
			DrawCell "xtc", Date2Str_1C(objUsersList("DIPL_DATE"))
			DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;"
			DrawCells Array("DIPL_NUM", "DIPL_VUZ")
			DrawCell "xtc", "&nbsp;"
			DrawCell "xtc", DB2HTML_BR(objUsersList("DIPL_SPEC"))
			Call DrawSeniority(IIf(nRowCnt = 1, "", " rowspan=""" & nRowCnt & """"))
			DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;"
			DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;"
			%>
			</tr><%

			For i = 2 To nRowCnt%>
				<tr valign="top"><%
				DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" :
				If i = 2 And Not IsDull(objUsersList("POSITION_")) And Not IsDull(objUsersList("POSITION2")) Then
					DrawCells Array("POSITION2", "RATING2")
					DrawCell "xtc", "&nbsp;"
					DrawCell "xtc", DB2HTML_BR(objUsersList("CATEGORY2"))
				Else
					DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;" : DrawCell "xtc", "&nbsp;"
				End If
				If Not objTSubjects.EOF Then
					DrawCell "xtc", DB2HTML_BR(objTSubjects("SUBJECTNAME"))
					objTSubjects.MoveNext
				Else
					DrawCell "xtc", "&nbsp;"
				End If
				DrawCell "xtc", "&nbsp;"
				For j = 1 To 17
					DrawCell "xtc", "&nbsp;"
				Next%>
				</tr><%
			Next

			nIndex = nIndex + 1
			objUsersList.MoveNext
		Wend%>
		</table><%
	End If
	Call objNSNET.DisposeCommand(cmdSeniorities)
'	Response.Write GetPageVerExcel()
End Sub

Sub DrawCells( arr )
	Dim item
	If Not IsArray(arr) Then DrawCell "xtc", "&nbsp;" : Exit Sub

	For Each item In arr
		DrawCell "xtc", DB2HTML_BR(objUsersList(item))
	Next
End Sub

Sub DrawCell( styleClass, cellValue )
	Response.Write "<td "&strRowCnt&" class="""&styleClass&""">"& cellValue & "</td>"
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
	for each field in arr
		DrawCell "xtc", DB2HTML(field)
	next
End Sub
Sub DrawUserAddressExt()
	Dim rsAddr
	Set rsAddr = objNSNET.GetUserAddress( objUsersList("USERID") , 1)
	Call DrawAddress(rsAddr)
End Sub

Sub DrawSeniority(strRowCnt)
	Dim objRs, i
	Dim arrSenior, arrTotals
	Dim strSenType, dtStart
	Dim arrInfo
	Dim dtStart_Contin, dtStart_Common, dtStart_Teacher

	Set objRs = objNSNET.GetStaffSeniorities_Execute(cmdSeniorities, strSafeUserID)
	If objRs.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	arrSenior = GetSenArray(objRs)
	dtStart_Contin = Empty
	dtStart_Common = Empty
	dtStart_Teacher = Empty
	For i = 0 To Ubound(arrSenior, 2)
		strSenType = arrSenior(0, i)
		If strSenType = kSeniorityType_Contin Then
			arrTotals = arrSenior(3, i)
			If IsArray(arrTotals) Then
				arrTotals = arrSenior(3, i)
				arrInfo = arrSenior(2, i)
				dtStart_Contin = arrInfo(1, 0)
			End If
		ElseIf strSenType = kSeniorityType_Common Then
			arrTotals = arrSenior(3, i)
			If IsArray(arrTotals) Then
				arrTotals = arrSenior(3, i)
				arrInfo = arrSenior(2, i)
				dtStart_Common = arrInfo(1, 0)
			End If
		ElseIf strSenType = kSeniorityType_Teacher Then
			arrTotals = arrSenior(3, i)
			If IsArray(arrTotals) Then
				arrTotals = arrSenior(3, i)
				arrInfo = arrSenior(2, i)
				dtStart_Teacher = arrInfo(1, 0)
			End If
		End If
	Next%>
	<td <%=strRowCnt%> class="xtc"><%=Date2Str_1C(dtStart_Contin)%></td>
	<td <%=strRowCnt%> class="xtc"><%=Date2Str_1C(dtStart_Common)%></td>
	<td <%=strRowCnt%> class="xtc"><%=Date2Str_1C(dtStart_Teacher)%></td><%
End Sub

Sub DrawSeniority_()
	Dim objRs, i
	Dim arrSenior, arrTotals
	Dim strSenType, dtStart
	Dim arrInfo

	Set objRs = objNSNET.GetStaffSeniorities_Execute(cmdSeniorities, strSafeUserID)
	If objRs.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	arrSenior = GetSenArray(objRs)
	For i = 0 To Ubound(arrSenior, 2)
		strSenType = arrSenior(0, i)
		If strSenType = kSeniorityType_Common Or strSenType = kSeniorityType_Contin Then
			arrTotals = arrSenior(3, i)
			If IsArray(arrTotals) Then
				arrTotals = arrSenior(3, i)
				arrInfo = arrSenior(2, i)
				dtStart = arrInfo(1, 0)%>
				<td class="xtl"><%=Date2Str_1C(dtStart)%></td><td class="xtr"><%=Format_XX(arrTotals(0))%></td><td class="xtr"><%=Format_XX(arrTotals(1))%></td><td class="xtr"><%=Format_XX(arrTotals(2))%></td><%
			Else%>
				<td class="xtl">&nbsp;</td><td class="xtr">&nbsp;</td><td class="xtr">&nbsp;</td><td class="xtr">&nbsp;</td><%
			End If
		End If
	Next
End Sub

Function GetPageTitleExcel()
	Dim strScName
	Dim strPageTitle

	strScName = ""
	If Not IsDull(strSchoolID) Then
		strScName = DB2HTML(objNSNET.GetSchoolName(strSchoolID))
	End If
	strPageTitle = "<b>" & strScName & "</b>"

	GetPageTitleExcel = strPageTitle
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

Function Format_XX(strNumber)
	Dim strFormat

	strFormat = CStr(strNumber)
	If Len(strFormat) = 1 Then
		strFormat = "0" & strFormat
	End If
	Format_XX = strFormat
End Function

Function GetEnsure_1C(strEnsureIn)
	Dim strEnsure, nLen, i

	If IsDull(strEnsureIn) Then
		strEnsure = ""
	Else
		strEnsure = Replace(CStr(strEnsureIn), "-", "")
		nLen = Len(strEnsure)
		For i = nLen To 10
			strEnsure = "0" & strEnsure
		Next
	End If
	GetEnsure_1C = strEnsure
End Function

Function GetStaffStatus_1C(strStatusIn)
	Dim strStatus_1C

	strStatus_1C = ""
	If Not IsDull(strStatusIn) Then
		If CStr(strStatusIn) = obLanguage("UsersExport_1C","kStaffStatus_Base") Then
			strStatus_1C = obLanguage("UsersExport_1C","kStaffStatus_1C_Base")
		Else
			strStatus_1C = obLanguage("UsersExport_1C","kStaffStatus_1C_NonBase")
		End If
	End If
	GetStaffStatus_1C = strStatus_1C
End Function

Sub DrawExample(strRowCnt)
%>
	<tr nowrap bgcolor="#e7eff7" valign="top">
		<th <%=strRowCnt%> class="xtc">Образец</th>
		<th <%=strRowCnt%> class="xtc" valign="top">&nbsp;</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Иваненко</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Иван</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Иванович</th>
		<th <%=strRowCnt%> class="xtc" valign="top">М</th>
		<th <%=strRowCnt%> class="xtc" valign="top">11.11.1956</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Москва</th>
		<th <%=strRowCnt%> class="xtc">&nbsp;</th>
		<th <%=strRowCnt%> class="xtc">&nbsp;</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Россия</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Россия</th>

		<th <%=strRowCnt%> class="xtc" valign="top">111602</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Москва г.</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Кунцевский</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Москва</th>
		<th <%=strRowCnt%> class="xtl" valign="top">Кутузовский пр-т</th>
		<th <%=strRowCnt%> class="xtc" valign="top">10</th>
		<th <%=strRowCnt%> class="xtc" valign="top">1</th>
		<th <%=strRowCnt%> class="xtc" valign="top">12</th>
		<th class="xtc" valign="top">222-5522</th>
		<th class="xtc" valign="top">Домашний</th>
		<th <%=strRowCnt%> class="xtc" valign="top">ivan@mail.ru</th>
		<th <%=strRowCnt%> class="xtc" valign="top">12334435</th>
		<th <%=strRowCnt%> class="xtc" valign="top">77 37</th>
		<th <%=strRowCnt%> class="xtc" valign="top">012-054-012-55</th>
		<th <%=strRowCnt%> class="xtc" valign="top">234</th>
		<th <%=strRowCnt%> class="xtc" valign="top">770000</th>
		<th <%=strRowCnt%> class="xtc" valign="top">234552</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Наемный работник</th>
		<th <%=strRowCnt%> class="xtc" valign="top">15.10.2001</th>
		<th <%=strRowCnt%> class="xtc" valign="top">ОВД р-на Кунцево  г. Москвы</th>
		<th <%=strRowCnt%> class="xtc" valign="top">123456</th>
		<th <%=strRowCnt%> class="xtc" valign="top">01 10</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Сержант</th>
		<th <%=strRowCnt%> class="xtc" valign="top">1010</th>
		<th <%=strRowCnt%> class="xtc" valign="top">А</th>
		<th <%=strRowCnt%> class="xtc">&nbsp;</th>
		<th <%=strRowCnt%> class="xtc" valign="top"> РВК р-на Кунцево</th>
		<th <%=strRowCnt%> class="xtc" valign="top">129765</th>
		<th <%=strRowCnt%> class="xtc">&nbsp;</th>
		<th <%=strRowCnt%> class="xtc" valign="top">1237</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Солдаты</th>

		<th <%=strRowCnt%> class="xtc">&nbsp;</th>
		<th <%=strRowCnt%> class="xtc">&nbsp;</th>
		<th <%=strRowCnt%> class="xtc" valign="top">78230</th>
		<th <%=strRowCnt%> class="xtc" valign="top">Основная</th>
		<th class="xtc" valign="top">Заместитель директора по учебно-воспитательной работе</th>
		<th class="xtc" valign="top">14</th>
		<th class="xtc" valign="top">8911</th>
		<th class="xtc" valign="top">Высшая</th>
		<th class="xtc" valign="top">История</th>
		<th class="xtc" valign="top">14</th>
		<th class="xtc" valign="top">Высшее педагогическое</th>
		<th class="xtc" valign="top">25.05.1980</th>
		<th class="xtc" valign="top">История России</th>
		<th class="xtc" valign="top">Диплом</th>
		<th class="xtc" valign="top">123456</th>
		<th class="xtc" valign="top">Московский Государственный Педагогический Университет им. В.И. Ленина</th>
		<th class="xtc" valign="top">Д1</th>
		<th class="xtc" valign="top">Преподаватель истории</th>

		<th <%=strRowCnt%> class="xtc" valign="top">01.09.1980</th>
		<th <%=strRowCnt%> class="xtc" valign="top">01.09.1980</th>
		<th <%=strRowCnt%> class="xtc" valign="top">01.09.1980</th>

		<th class="xtc" valign="top">Орден Дружбы</th>
		<th class="xtc" valign="top">Заслуженный учитель РФ</th>
		<th class="xtc" valign="top">Почетная грамота Минобрнауки РФ</th>
		<th class="xtc" valign="top">Знак "За гуманизацию образования Москвы"</th>
		<th class="xtc" valign="top">2006</th>
		<th class="xtc" valign="top">Победитель</th>
		<th class="xtc" valign="top">Москва</th>
		<th class="xtc" valign="top">Лучший учитель</th>
		<th class="xtc" valign="top">Москва</th>
	</tr><tr nowrap bgcolor="#e7eff7" valign="top">

		<th class="xtc" valign="top">122-8823</th>
		<th class="xtc" valign="top">Рабочий</th>
		<th class="xtc" valign="top">Учитель</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc" valign="top">8912</th>
		<th class="xtc" valign="top">Высшая</th>
		<th class="xtc" valign="top">Граждановедение</th>
		<th class="xtc" valign="top">13</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>

		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
	</tr><tr nowrap bgcolor="#e7eff7" valign="top">

		<th class="xtc" valign="top">122-8835</th>
		<th class="xtc" valign="top">Факс</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc" valign="top">Высшая</th>
		<th class="xtc" valign="top">Обществознание</th>
		<th class="xtc" valign="top">13</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>

		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
	</tr><tr nowrap bgcolor="#e7eff7" valign="top">

		<th class="xtc" valign="top">89268932345</th>
		<th class="xtc" valign="top">Мобильный</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc" valign="top">Высшая</th>
		<th class="xtc" valign="top">Мировая художественная культура</th>
		<th class="xtc" valign="top">13</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>

		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
	</tr><tr nowrap bgcolor="#e7eff7" valign="top">

		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>

		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
		<th class="xtc">&nbsp;</th>
	</tr>
<%
End Sub

Function GetXlsFileName()
	GetXlsFileName = obLanguage("Common","kExport_1C") & ".xls"
End Function
%>
