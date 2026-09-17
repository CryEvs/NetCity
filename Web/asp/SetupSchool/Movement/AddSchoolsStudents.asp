<!-- #INCLUDE FILE="SelectUsersList.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kTitle_ClassChief_Displ = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
Const kStudentListAvailableForEnrollment = "Список учеников доступных для зачисления в "

Dim lngGrade
Dim strExtSchoolID, strOldSchoolID
Dim strExtSYID
Dim strClassID, strClassName, strChiefName
Dim nGRtype
Dim strProgID
Dim bNoRequestStudents
Dim strCityID, strGYID

Dim bShowCountryFilter
Dim strFCountryID, strFStateID, strFProvinceID, strFCityID, strFFuncTypeID
Dim objCountries, objFStates, objFProvinces, objFCities
Dim bShowProvinceFilter, bShowFuncTypeFilter
Dim bFuncTypeCommon, bFuncTypePreSchool
Dim strFuntTypeName_Common, strFuntTypeName_PreSchool
Dim objFSchools
Dim strBirthCertifNumber

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arMoveBookEdit)
End Function

Function GetPageTitle()
	Dim strClassChief
	strClassChief = strClassName
	If Not IsDull(strChiefName) Then
		strClassChief = strClassChief & " (" & strChiefName & ")"
	End If
	GetPageTitle = kStudentListAvailableForEnrollment & kTitle_ClassChief_Displ & GreenText(DB2HTML(strClassChief))
End Function

Sub ReadState_Before()
	bAllowAllGRType = False
End Sub

Sub ReadState_Special()
	Dim objClassInfo, strChiefID

	Call ReadTopFilter
	Call InitExtSYID
	
	bNeedGrades = True
	bNoRequestStudents = ((IsDull(Request("FilterType"))) And (IsDull(Request("cp")))) Or (strExtSchoolID <> strOldSchoolID) Or (strExtSchoolID = "0")
	If bNoRequestStudents Then
		lngGrade = -1
		strLetter = " "
	Else	
		lngGrade = GetSafeLng(Request("GR"), GetSafeLng( obTokenMgr.GetData( strToken, stUsersStudentsGrades ), -1 ) )
		if lngGrade>=0 then strLetter=GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter),60," ")) else strLetter=" "
	End If

	strProgID = "0"
	strClassID = GetSafeID(Request("PCLID"), GetSafeID(obTokenMgr.GetData(strToken, stClassID_MoveTo), "0"))
	If strClassID <> "0" Then
		Set objClassInfo = objNSNET.GetClassInfo(strClassID)
		If Not objClassInfo.EOF Then
			strClassName = GetSafeStr(objClassInfo("CLASSNAME"), -1, "")
			strChiefName = GetClassChiefs(strClassID)
			strProgID = GetSafeID(objClassInfo("PROGID"), "0")
		End If
	End If
	bAllowNotEnrolledGRType = False
	nGRtype = GetSafeLng(Request("GRtype"),GetSafeLng( obTokenMgr.GetData( strToken, stGRtype ), -1))
	If nGRtype = -3 Then nGRtype = -1
	If nGRtype = -2 Then strLetter="kNotEnrolled"

	If nFindType = FilterType_Search Then
		' strFio - здесь это strCertificate
		' 2014_10_16 теперь strFio - серия свидельства о рождении
		strFio = strFio
		strBirthCertifNumber = GetSafeStr(Trim(Request("BirthCertifNumber")), -1, "")
	ELse
		'явно очищаем, потому как в ReadCommonUsersFilter инициализируется всегда.
		strFio = ""
		strBirthCertifNumber = ""
	End If
End Sub

Function GetClassChiefs(strClsId)
	Dim strClsChiefs, objClsTeachers

	Set objClsTeachers = objNSNET.GetClassChiefs(strClsId)
	strClsChiefs = ""
	While Not objClsTeachers.EOF
		strClsChiefs = strClsChiefs & DB2HTML(objClsTeachers("NICKNAME")) & ", "
		objClsTeachers.MoveNext
	Wend

	strClsChiefs = Left(strClsChiefs, Len(strClsChiefs) - 2)
	GetClassChiefs = strClsChiefs
End Function

Sub WriteState_Special()
	Call WriteTopFilter

	Call obTokenMgr.SetData(strToken, "ROLEID", rlStudent)
	Call obTokenMgr.SetData(strToken, stCurrClassLetter, strLetter)
	Call obTokenMgr.SetData(strToken, stClassID_MoveTo, strClassID)
	Call obTokenMgr.SetData(strToken,stGRtype, nGRtype)
	Call obTokenMgr.SetData( strToken, stFindType, nFindType)
End Sub

Sub WriteTopFilter
	Call obTokenMgr.SetData(strToken, stEMCountryID, strFCountryID)
	Call obTokenMgr.SetData(strToken, stEMStateID, strFStateID)
	Call obTokenMgr.SetData(strToken, stEMProvinceID, strFProvinceID)
	Call obTokenMgr.SetData(strToken, stEMSchoolTypeID, strFFuncTypeID)
	Call obTokenMgr.SetData(strToken, stEMSchoolID, strExtSchoolID)
End Sub

Sub Main_Before
	Dim objUsersList
	
	If bNoRequestStudents Then
		Exit Sub
	End If

	If nFindType = FilterType_Search Then
		nCurrPage = 0
		Set objUsersList = objNSNET.SearchStudentByBirthCertificateOrPassport(strFio, strBirthCertifNumber, strProgID)
		If Not objUsersList.EOF Then arrRs = objUsersList.GetRows(,,Array("STUDENTID", "NICKNAME", "GENDER", "BIRTHDATE", "BIRTHCERTIF", "PASSPORT", "SCHOOLNAME", "REPORTNAME"))
	Else
		If Not bNoRequestStudents Then
			Set objUsersList = objNSNET.GetStudentList(strSchoolID, strExtSYID, strFirstLetter, strLastLetter, strGender, lngGrade, lngSortOrder, strLetter, False, False, nPageSize, nCurrPage, pageCount, strProgID, "" )
			If Not objUsersList Is Nothing Then
				If Not objUsersList.EOF Then arrRs = objUsersList.GetRows(,,Array("STUDENTID", "NICKNAME", "GENDER", "BIRTHDATE"))
			End If
		End If
	End If
End Sub

Function onLoad()
	Dim strFindType

	strFindType = "1"
	If nFindType = FilterType_Search Then
		If strExtSYID <> "0" Then
			onLoad = "ChangeGrType();"
		End If
	ElseIf nFindType <> "" Then
		strFindType = "2"
	End If
	onLoad = onLoad & "onChangeFind(" & nFindType & ");"
End Function

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact form-inline"
End Function

' Правило определения школы для ученика.
' Сначала определяется его последняя реальная школа (где сейчас). Если такой нет (такое теперь возможно - из-за выбытия в пул), то берётся школа из фильтра.
Function GetMoveEOID(strUID)
	Dim objSchoolInfo, strSchID

	GetMoveEOID = "-1"
	If IsDull(Request("SCID")) Then
		Exit Function
	End If
	
	Set objSchoolInfo = objNSNET.GetUserSchool(strUID)
	If objSchoolInfo.EOF Then
		strSchID = GetSafeID(Request("SCID"), "-1")
		Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchID)
		If objSchoolInfo.EOF Then
			GetMoveEOID = "0"
		Else
			GetMoveEOID = GetSafeID(objSchoolInfo("EOID"), "-1")
		End If
	Else
		GetMoveEOID = GetSafeID(objSchoolInfo("EOID"), "-1")
	End If
End Function

Sub InitExtSYID
	Dim objSYInfo

	strGYID = "-1"
	Set objSYInfo = objNSNET.GetYearInfo(strCurrYearID)
	If Not objSYInfo.EOF Then
		strGYID = GetSafeID(objSYInfo("GLOBALYEARID"), "-1")
	End If

	strExtSYID = "0"
	If strExtSchoolID = "0" Then Exit Sub
	strExtSYID = objNSNET.GetSchoolYearForSchoolAndOtherSY(strExtSchoolID, strCurrYearID)
End Sub

Sub DrawUsersFiltersBody( bNeedGrades, bDrawSearchFilter )
	Call DrawUsersFiltersBody_Ex( bNeedGrades, bDrawSearchFilter, strExtSYID, strFFuncTypeID, 2 )
End Sub

Sub InitClassLetters()
	Call InitClassLetters_Ex(strExtSYID)
End Sub

Function GetEmptyStudentsMsg()
	If bNoRequestStudents Then
		GetEmptyStudentsMsg = obLanguage("Movement","kUseFilterOrSearch")
	Else
		GetEmptyStudentsMsg = obLanguage("Movement","kNoUsersForFilter",Clng(strFFuncTypeID))
	End If
End Function

Function GetTitleSearchFor()
	GetTitleSearchFor = obLanguage("Movement","kBirthcertifOrPassportSeries")
End Function

Function GetMsgOnEmptySearch()
	GetMsgOnEmptySearch = obLanguage("Movement","kInputBirthCertificateOrPassport")
End Function

Sub onHead_Add()%>
	<SCRIPT><!--
		function onChangeFind(selVal) {
			var bDisabled = (selVal != "1")

			if ($('select[name=CID]').length != 0)
				$('select[name=CID]')[0].disabled = bDisabled;
			if ($('select[name=SID]').length != 0)
				$('select[name=SID]')[0].disabled = bDisabled;
			if ($('select[name=PID]').length != 0)
				$('select[name=PID]')[0].disabled = bDisabled;
			if ($('select[name=CN]').length != 0)
				$('select[name=CN]')[0].disabled = bDisabled;
			if ($('select[name=SFT]').length != 0)
				$('select[name=SFT]')[0].disabled = bDisabled;
			$('select[name=SCID]')[0].disabled = bDisabled;
		}

		validateSearch = function () {
			var form = document.MainForm;
			if ($.trim(form.elements["SRCH_TEXT"].value) == "" && $.trim(form.elements["BirthCertifNumber"].value) == ""){
				alert(language.Generic.Movement.kInputBirthCertificateOrPassport);
				return false;
			}
			return true;
		}
	//--></SCRIPT><%
End Sub

Sub ReadTopFilter
	Dim objRs
	Dim objSchoolInfo
	Dim strCurrCityID

	strFCountryID = "0"
	strFStateID = "0"
	strFProvinceID = "0"
	strFCityID = "0"
	strFFuncTypeID = "0"
	strExtSchoolID = "0"

	strFCountryID = GetSafeID(Request("CID"), GetSafeID(obTokenMgr.GetData(strToken, stEMCountryID), "0"))
	Set objCountries = objNSNET.GetSchoolCountryList()
	If Not objCountries.EOF Then
		strFCountryID = GetSafeIDForRs(strFCountryID, objCountries, "COUNTRYID")
		If strFCountryID = "0" Then strFCountryID = GetSafeID(objCountries("COUNTRYID"), Null)
		bShowCountryFilter = (objCountries.RecordCount > 1)
	Else
		strFCountryID = "0" : Exit Sub
	End If

	strFStateID = GetSafeID(Request("SID"), GetSafeID(obTokenMgr.GetData(strToken, stEMStateID), "0"))
	Set objFStates = objNSNET.GetSchoolStateList(strFCountryID)
	If Not objFStates.EOF Then
		strFStateID = GetSafeIDForRs(strFStateID, objFStates, "STATE_PROVINCEID")
		If strFStateID = "0" Then strFStateID = GetSafeID(objFStates("STATE_PROVINCEID"), Null)
	Else
		strFStateID = "0" : Exit Sub
	End If

	strFProvinceID = GetSafeID(Request("PID"), GetSafeID(obTokenMgr.GetData(strToken, stEMProvinceID), "-1"))
	Set objFProvinces = objNSNET.GetSchoolProvinceList(strFStateID)
	bShowProvinceFilter = Not objFProvinces.EOF
	If bShowProvinceFilter Then
		If strFProvinceID <> "-1" Then
			strFProvinceID = GetSafeIDForRs_Ex(strFProvinceID, objFProvinces, "PROVINCEID", "-1")
		End If
	Else
		strFProvinceID = "-1"
	End If

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objSchoolInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strCurrCityID = GetSafeID(objSchoolInfo("CITYID"), Null)

	strFCityID = GetSafeID(Request("CN"), GetSafeID(obTokenMgr.GetData(strToken, stEMCityID), strCurrCityID))
	Set objFCities = objNSNET.GetSchoolCityList(strFStateID, strFProvinceID)
	If Not objFCities.EOF Then
		strFCityID = GetSafeIDForRs(strFCityID, objFCities, "CITYID")
		If strFCityID = "0" Then strFCityID = GetSafeID(objFCities("CITYID"), Null)
	Else
		strFCityID = "0" : Exit Sub
	End If

	strFFuncTypeID = GetSafeID(Request("SFT"), GetSafeID(obTokenMgr.GetData(strToken, stEMSchoolTypeID), kFuncType_Common))
	If CLng(strFFuncTypeID) = CLng(kFuncType_EM) Then
		strFFuncTypeID = kFuncType_Common
	End If
	Set objRs = objNSNET.GetFuctionalityType(kFuncType_Common)
	bFuncTypeCommon = Not objRs.EOF
	If bFuncTypeCommon Then
		strFuntTypeName_Common = GetSafeStr(objRs("NAME"), -1, "")
	End If
	Set objRs = objNSNET.GetFuctionalityType(kFuncType_PreSchool)
	bFuncTypePreSchool = Not objRs.EOF
	If bFuncTypePreSchool Then
		strFuntTypeName_PreSchool = GetSafeStr(objRs("NAME"), -1, "")
	End If

	If Not bFuncTypeCommon And Not bFuncTypePreSchool Then
		strFFuncTypeID = "0" : Exit Sub
	End If
	bShowFuncTypeFilter = True
	If Not bFuncTypeCommon Then
		strFFuncTypeID = kFuncType_PreSchool
		bShowFuncTypeFilter = False
	End If
	If Not bFuncTypePreSchool Then
		strFFuncTypeID = kFuncType_Common
		bShowFuncTypeFilter = False
	End If

	strOldSchoolID = GetSafeID(obTokenMgr.GetData(strToken, stEMSchoolID), "0")
	strExtSchoolID = GetSafeID(Request("SCID"), GetSafeID(obTokenMgr.GetData(strToken, stEMSchoolID), "0"))
	Set objFSchools = objNSNET.GetFuncCitySchools(strFFuncTypeID, strFCityID)
	If Not objFSchools.EOF Then
		strExtSchoolID = GetSafeIDForRs(strExtSchoolID, objFSchools, "SCHOOLID")
		If strExtSchoolID = "0" Then strExtSchoolID = GetSafeID(objFSchools("SCHOOLID"), Null)
	Else
		strExtSchoolID = "0" : Exit Sub
	End If
End Sub

Sub DrawCountries(strForm)
	If strFCountryID = "0" Then
		Call DrawInfo(obLanguage("Movement","kNoCountriesWithEOs"), False)
		bExit = True
		Exit Sub
	End If
	If Not bShowCountryFilter Then Exit Sub

	DrawFilterRow StrForm, obLanguage("Common","kCountry"), "CID", objCountries, "COUNTRYID", "COUNTRYNAME", strFCountryID, False
End Sub

Sub DrawStates(strForm)
	If strFStateID = "0" Then
		Call DrawInfo(obLanguage("Movement","kNoStatesWithEOs"), False)
		bExit = True
		Exit Sub
	End If
	DrawFilterRow StrForm, obLanguage("Login","kLoginRegion"), "SID", objFStates, "STATE_PROVINCEID", "STATEPROVINCENAME", strFStateID, False
End Sub

Sub DrawProvinces(strForm)
	If Not bShowProvinceFilter Then Exit Sub
	DrawFilterRow StrForm, obLanguage("Login","kLoginProvince"), "PID", objFProvinces, "PROVINCEID", "PROVINCENAME", strFProvinceID, True
End Sub

Sub DrawCities(strForm)
	If strFCityID = "0" Then
		Call DrawInfo(obLanguage("Movement","kNoCitiesWithEOs"), False)
		bExit = True
		Exit Sub
	End If

	DrawFilterRow StrForm, obLanguage("Login","kLoginCity"), "CN", objFCities, "CITYID", "NAME", strFCityID, False
End Sub

Sub DrawFuncTypes(strForm)
	Dim strChange

	If strFFuncTypeID = "0" Then
		Call DrawInfo(obLanguage("Movement","kNoFuncTypes"), False)
		bExit = True
		Exit Sub
	End If
	If Not bShowFuncTypeFilter Then Exit Sub

	strChange = "OnChangeSelect('" & strForm & "','" & strScriptName & "');"
	
	OpenFormGroup obLanguage("Login","kLoginSchoolType")%>
		<select NAME="SFT" onChange="<%=strChange%>" class="form-control">
			<option value="<%=kFuncType_PreSchool%>" <%If CLng(strFFuncTypeID) = CLng(kFuncType_PreSchool) Then%>selected<%End If%>><%=DB2HTML(strFuntTypeName_PreSchool)%></option>
			<option value="<%=kFuncType_Common%>" <%If CLng(strFFuncTypeID) = CLng(kFuncType_Common) Then%>selected<%End If%>><%=DB2HTML(strFuntTypeName_Common)%></option>
		</select><%
	CloseFormGroup
End Sub

Sub DrawSchools(strForm)
	If strExtSchoolID = "0" Then
		Call DrawInfo(obLanguage("Movement","kNoSchoolsForFilter"), False)
		bExit = True
		Exit Sub
	End If
	DrawFilterRow StrForm, obLanguage("Movement","kEO_S"), "SCID", objFSchools, "SCHOOLID", "SCHOOLNAME", strExtSchoolID, False

	If strExtSYID = "0" Then
		Call DrawInfo(obLanguage("Movement","kNoExtYear"), False)
		bExit = True
	End If
End Sub

Sub DrawTopFilters(strForm)
	Call DrawCountries(strForm) : If bExit Then Exit Sub
	Call DrawStates(strForm) : If bExit Then Exit Sub
	Call DrawProvinces(strForm)
	Call DrawCities(strForm) : If bExit Then Exit Sub
	Call DrawFuncTypes(strForm) : If bExit Then Exit Sub
	Call DrawSchools(strForm) : If bExit Then Exit Sub
End Sub

Sub DrawNextSeachFields()
	OpenFormGroup obLanguage("Movement","kBirthcertifOrPassportNo")
	%><input type="text" name="BirthCertifNumber" maxlength="20" value="<%=strBirthCertifNumber%>" class="form-control" onkeydown="if (event.keyCode == 13) setNewSearch()"><%
	CloseFormGroup
End Sub%>