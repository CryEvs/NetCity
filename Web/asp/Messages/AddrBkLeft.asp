<!-- #INCLUDE FILE="AddrBkLeft_inc.asp" -->


<% ' © 2007-2021 IRTech. All rights reserved.

'	recipients:
'U	all Users of School
'T	all Teachers
'A	all Admins
'P	all Principals
'S	all Staff
'R	all Parents
'D	all Students
'H	Teacher's Classes
'C	Class + CLASSID - ученики класса
'E	Class + CLASSID - родители класса
'	User - USERID

' как краткое имя роли в УО
' ADMEM - Администратор УО
' HDEM - Руководитель УО
' OFREM - Сотрудник УО
' OPREM - Оператор УО
' CRDOD - Координатор ОД
' CRDMR - Координатор мероприятий

' B - Администратор УО
' F - Руководитель УО
' G - Сотрудник УО
' O - Оператор УО
' K - Координатор ОД
' M - Координатор мероприятий

Const kMaxOwnOrgNameLen = 30

Const kEMForStudentsParents = False 'True
Const kMailToOutside = 2
Const kMailToEO = 1
Const kMailToPrivate = 0

Const lngLoginStateProvince = 1
Const lngLoginStateCity = 2
Const lngLoginStateSchoolFuncType = 3
Const lngLoginStateSchool = 4 '3

Const kServerType_Local = 1
Const kServerType_Region = 2

Const kOrgType_Own = 0
Const kOrgType_EO = 1
Const kOrgType_EM = 2


Dim bShowFuncTypeFilter

Dim nServerType
Dim nOrgType
Dim objFilter

Dim rsFuncTypes, strFuncTypeID, nFuncTypeID
Dim strFilterProvinceID, arrFilterProvinces, bNoProvinces
Dim strFilterCityID, arrFilterCities, bNoCities
Dim strFilterSchoolID, arrFilterSchools, bNoSchools
Dim strFilterEMID, arrFilterEMs, bNoEMs
Dim bOwnOrg, bMsgToSchool
Dim strOwnOrgID
Dim strOwnOrgName, strOwnOrgNameShort
Dim arrGroupsList
Dim bRegionServer
Dim bShowServerTypeFilter
Dim objFilterSchools
Dim strSelectedCity, strSelectedOrgName, strSelectedOrgID
Dim bIsStudentClass
Dim bCheckBelongEOs, bBelongEO
Dim bUseRestrictStudentsAndParents

Sub Main
	Dim cAction, objSYRS, strOldSchoolID

	bEMPermit = bIsStaff Or kEMForStudentsParents
	bStudentsParentsPermit = Not bIsEMForSchool Or kEMForStudentsParents
	bStudent = HasUserRole(rlStudent)
	bParent = HasUserRole(rlParent)

	Call GetOwnOrgName()
	Call ReadFilters()

	Call WriteFilters()

	If Not bExit Then
		strSelectedCity = Left(CStr(strSelectedCity), kMaxOwnOrgNameLen)
		strSelectedOrgName = MakeStringOfSafeLength(CStr(strSelectedOrgName), kMaxOwnOrgNameLen)

		Call GetRecipientsList()
		'GetSelectedOrgInfo()
	End If

End Sub

Sub onHead()%>
<script><!--
var sRegionServer = <%If bRegionServer Then%>1<%Else%>0<%End If%>;

function ChangeFilter(){
	var form = document.forms['AddrBookForm'];
	form.submit();
}

function ChangeClass(){
	var form = document.forms['AddrBookForm'];
	form.elements['A'].value = 'C'; form.submit();
}

function AddBk(userID, userName) {
	var form = document.forms['AddrBookForm'];
	var rightframe = parent.frames['addrbkright'];
	userName = userName + " <%=(DB2Java(strSelectedOrgName))%>";
	rightframe.AddRcpt(userID, userName, sRegionServer);
}

function AddSchoolBk(schoolid) {
	var rightframe = parent.frames['addrbkright'];
	rightframe.AddSchRcpAll(schoolid);
}

function AddBkAll(userID, aSchoolYearID, userName){
	var rightframe = parent.frames['addrbkright'];
	rightframe.AddRcptAll(userID, aSchoolYearID, userName, sRegionServer);
}

function ChangeMailTo() {
	var form = document.forms['AddrBookForm'];
	form.submit();
}

function backToLevel( level ) {
	var form = document.forms["AddrBookForm"];
	//form.action="login1.asp";
	form.elements[level].value ="";
	form.submit();
}
//--></script>
<%
End Sub

Function createGroupsList()
	Dim arrGroups

	If bMsgToSchool Then

		If bIsEducManager Then
			arrGroups = Array(_
				"A", obLanguage("Common","kAdmins"), _
				"P", obLanguage("Common","kPrincipals", nFuncTypeID), _
				"S", obLanguage("Messages","kAllStaffs"), _
				"R", obLanguage("Common","kParents"), _
				"U", obLanguage("Messages","kAllUsers")_
			)
		Else
			arrGroups = Array(_
				"A", obLanguage("Common","kAdmins"), _
				"P", obLanguage("Common","kPrincipals", nFuncTypeID), _
				"T", obLanguage("Common","kTeachers", nFuncTypeID)_
			)

			If Not bUseRestrictStudentsAndParents Then
				AddToList arrGroups, "S", obLanguage("Messages","kAllStaffs")
			End If

			If bStudentsParentsPermit Then
				If Not bUseRestrictStudentsAndParents Then
					AddToList arrGroups, "R", obLanguage("Common","kParents")
					AddToList arrGroups, "D", obLanguage("Common","kStudents",nFuncTypeID)
				End If
				If bOwnOrg Then
					AddToList arrGroups, "C", obLanguage("SchoolSettings","kClasses",nFuncTypeID)
					If HasUserRole(rlTeacher) Then
						AddToList arrGroups, "H", obLanguage("MenuFolders","kClassesOfThisTeacher",nFuncTypeID)
					End If
				End If
				If Not bStudent And Not bUseRestrictStudentsAndParents Then AddToList arrGroups, "U", obLanguage("Messages","kAllUsers")
			End If
		End If

	Else ' MsgToEM

		arrGroups = Array(_
			"B", obLanguage("Common","kEMAdmin"),_
			"F", obLanguage("Common","kEMHead"), _
			"G", obLanguage("Common","kEMSpecialist"), _
			"O", obLanguage("ServAdmin","kOPREM"), _
			"K", obLanguage("ServAdmin","kCRDOD"), _
			"M", obLanguage("ServAdmin","kCRDMR")_
		)
	End If
	createGroupsList = arrGroups
End Function


Sub ReadOrSetDefaultFilter()
	Dim i

	strFilter = GetSafeStr(Request("FL"), 10, GetSafeStr(obTokenMgr.Getdata(strToken, "MSG_FILTER"), 10, ""))
	If strFilter <> "" Then
		For i = 0 To UBound(arrGroupsList)-1 Step 2
			If strFilter = arrGroupsList(i) Then
				Exit Sub ' filter is valid
			End If
		Next
	End If
	strFilter = arrGroupsList(0)
End Sub

Sub DrawEMFuncSchool(objSchoolRS)
	%><div style = "text-align: left; font-size: 8pt; margin-left:5%;"><%
	While Not objSchoolRs.EOF
		rw ShowAnchor( "AddSchoolBk('" & strFilter & objSchoolRS("SCHOOLID") & "')", obLanguage("Messages","kAddToRecipients"), DB2HTML(objSchoolRS("SCHOOLNAME")), "")&"<br/>"
		objSchoolRS.MoveNext
	Wend
	%></div><%
End Sub

Sub DrawEMToAllSchools(objSchoolRS, strFilter)
	Dim strAllSchools, strHint, strSchools, strID, n
	strAllSchools = ""
	strSchools = ""
	n=0
	%><div style = "text-align: left; font-size: 8pt; margin-left:5%;"><%
	While Not objSchoolRs.EOF
		n=n+1
		strID = strFilter & objSchoolRS("SCHOOLID")
		strAllSchools = strAllSchools & ";" & strID
		strSchools = strSchools & ShowAnchor( "AddSchoolBk('" & strID & "')", obLanguage("Messages","kAddToRecipients"), DB2HTML(objSchoolRS("SCHOOLNAME")), "")&"<br/>"
		objSchoolRS.MoveNext
	Wend
	'objSchoolRS.MoveFirst
	If n>1 Then
		strHint = obLanguage("Messages","kSendAll") & " " & sAllName
		rw ShowAnchor( "AddBkAll('" & strFilter & "E" & strFilterFuncType & "','"& strCurrYearID &"')" , strHint, strHint & " " & obLanguage("Messages","kToFuncType",strFilterFuncType), "") & "<p>"
	End If
	rw strSchools
	%></div><p><%
End Sub

Sub onDrawPage()
	Dim i
	Dim nTypeId
	nTypeId = 1

%>
<form NAME="AddrBookForm" class="form-horizontal form-xs" METHOD="POST" ACTION="addrbkleft.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("A","")) %>
	<div class="container-fluid">
		<h3><%=IIf(bIsEM, obLanguage("Messages","kDoChooseRecipient"), obLanguage("Messages","kDoChooseRecipientFromGroup"))%></h3>
		<div class="row">
			<div class="col-sm-12"><%
					Call DrawFilters("AddrBookForm")
					If Not bExit Then
						Call drawGroupsFilter(arrGroupsList)
					End If%>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12" style="font-size: 0.9em;">
				<%
					If bListSet Then
						Call DrawUsersList()
					Else
						DrawInfo obLanguage("Messages","kNoRecipients"), False
					End If
				%>
			</div>
		</div>
	</div>
</form>
<%
End Sub

Function GetParamText(strParam,nId)
	Select Case strParam
		Case "CID": GetParamText = objNSNET.GetCountryName(nId)
		Case "SID": GetParamText = objNSNET.GetStateName(nId)
		Case "CN" : GetParamText = objNSNET.GetCityName(nId)
		Case "SFT": GetParamText = objNSNET.GetFuctionalityTypeName(nId)
		Case "PID"
			If CLng(nId)=-1 Then
				GetParamText = obLanguage("Common","kAll")
			Else
				GetParamText = objNSNET.GetProvinceName(nId)
			End If
		Case Else
			Err.Raise "Неверный тип"
	End Select
End Function


Sub ReadFilters()
	Dim nClientIDForSync

	nClientIDForSync = objNSNET.GetClientIdForSync()
	bUseRestrictStudentsAndParents = (obContext.ServerSettings.SystemSettings.RestrictStudentsAndParents And (bStudent Or bParent))

	nOrgType = GetSafeLng(Request("OrgType"), GetSafeLng(obTokenMgr.GetData(strToken, stOrgType), kOrgType_Own))

	bShowServerTypeFilter = True
	If (obContext.ServerSettings.SystemSettings.ModuleRegion And nOrgType <> kOrgType_Own) And Not bUseRestrictStudentsAndParents Then
		If nClientIDForSync = 0 Then ' Региональный сервер
			If nOrgType = kOrgType_EO Then
				nServerType = kServerType_Region
			Else ' nOrgType = kOrgType_EM
				' здесь не совсем корректно - здесь надо определить, какое именно УО выбрано, но результат "не профильтрован" через GetSafeIDForCOMFilter,
				' но чтобы "профильтровать" - надо знать, какой objFilter использовать - "local" или "remote",
				' но для Регионального сервера это одинаково, поэтому "фильтрацию" игнорируем, кроме того, наверняка само УО должно быть в результате запроса, через который фильтрует GetSafeIDForCOMFilter
				strFilterEMID = GetSafeID(Request("FILTEREM"), GetSafeID(obTokenMgr.GetData(strToken, stEMID), "0"))
				If strFilterEMID = strEMID Then
					nServerType = kServerType_Local
				Else
					nServerType = kServerType_Region
				End If
			End If
			bShowServerTypeFilter = False
		Else
			nServerType = GetSafeLng(Request("ServerType"), GetSafeLng(obTokenMgr.GetData(strToken, stServerType), kServerType_Local))
		End If
	Else
		nServerType = kServerType_Local
		bShowServerTypeFilter = False
	End If
	bRegionServer = (nServerType = kServerType_Region)
	bCheckBelongEOs = (bIsEducManager And nServerType = kServerType_Local)
	bBelongEO = False
	If bCheckBelongEOs Then
		If Not IsDull(Request("BelongEO")) Then
			bBelongEO = (GetSafeID(Request("BelongEO"), "-1") <> "-1")
		Else
			bBelongEO = GetSafeBool(obTokenMgr.GetData(strToken, stBelongEO), True)
		End If
	End If

	Call InitFilterObject()

	bOwnOrg = False
	bMsgToSchool = True
	Select Case nOrgType
		Case kOrgType_Own
			InitOwnOrg
		Case kOrgType_EO
			bMsgToSchool = True
			InitFunctionTypes

			InitFilterProvinces
			If bExit Then Exit Sub

			InitFilterCities
			If bExit Then Exit Sub

			InitFilterSchools
			If bExit Then Exit Sub
		Case kOrgType_EM
			InitFilterEMs
			If bExit Then Exit Sub
		Case Else
			GenerateError obLanguage("Common", "kUnexpErr")
	End Select

	If bMsgToSchool Then
		nFuncTypeID = GetSafeLng(strFuncTypeID, kFuncType_Common)
	Else
		nFuncTypeID = kFuncType_EM
	End If

	arrGroupsList = createGroupsList
	Call ReadOrSetDefaultFilter()
End Sub

Sub WriteFilters()
	Call obTokenMgr.SetData(strToken, stOrgType, nOrgType)
	Call obTokenMgr.SetData(strToken, stServerType, nServerType)
	Call obTokenMgr.SetData(strToken, stBelongEO, bBelongEO)

	Select Case nOrgType
		Case kOrgType_Own
		Case kOrgType_EO
			Call obTokenMgr.SetData(strToken, stFunctionType, strFuncTypeID)
			Call obTokenMgr.SetData(strToken, stEMProvinceID, strFilterProvinceID)
			Call obTokenMgr.SetData(strToken, stEMCityID, strFilterCityID)
			Call obTokenMgr.SetData(strToken, stPoolSchool, strFilterSchoolID)
		Case kOrgType_EM
			Call obTokenMgr.SetData(strToken, stEMID, strFilterEMID)
		Case Else
			GenerateError obLanguage("Common", "kUnexpErr")
	End Select

	Call obTokenMgr.SetData(strToken, "MSG_FILTER", strFilter)
End Sub

Sub InitFilterObject()
	On Error Resume Next

	If nServerType = kServerType_Local Then
		Set objFilter = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReferencesComponentCOM", "local")
		TestError obLanguage("Filter", "kCantCreateReferencesComponent_local")
		If objFilter Is Nothing Then
			GenerateError obLanguage("Filter", "kCantCreateReferencesComponent_local")
		End If
	Else
		Set objFilter = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReferencesComponentCOM", "remote")
		'Set objFilter = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReferencesComponentCOM", "local")
		TestError obLanguage("Filter", "kCantCreateReferencesComponent_remote")
		If objFilter Is Nothing Then
			GenerateError obLanguage("Filter", "kCantCreateReferencesComponent_remote")
		End If
	End If
End Sub

Sub InitOwnOrg
	bOwnOrg = True
	bMsgToSchool = Not bIsEducManager
	If bIsEducManager Then
		strFilterEMID = strEMID
		strSelectedOrgID = strEMID
	Else
		strFilterSchoolID = strSchoolID
		strSelectedOrgID = strSchoolID
	End If
	strSelectedOrgName = strOwnOrgNameShort
End Sub

Sub InitFunctionTypes
	Set rsFuncTypes = objNSNET.GetFuctionalityTypes(kFuncType_EM)
	If IsDull(Request("FUNCTYPE")) Then
		strFuncTypeID = GetSafeID(obTokenMgr.GetData(strToken, stFunctionType), kFuncType_Common)
	Else
		strFuncTypeID = GetSafeID(Request("FUNCTYPE"), kFuncType_Common)
	End If
End Sub

Sub InitFilterProvinces
	Dim objProvinces, strTmp

	On Error Resume Next

	strFilterProvinceID = "-1"
	bExit = True

	strFilterProvinceID = GetSafeID(Request("ProvID"), GetSafeID(obTokenMgr.GetData(strToken, stEMProvinceID), "-1"))
	Set objProvinces = objFilter.GetProvincesList()
	TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionProvinces")

	bNoProvinces = (objProvinces.Count = 0)
	If bNoProvinces Then
		strFilterProvinceID = "-1"
	Else
		arrFilterProvinces = objProvinces.ToArray()
	End If

	If strFilterProvinceID <> "-1" Then
		strFilterProvinceID = GetSafeIDForCOMFilter(strFilterProvinceID, objProvinces, strTmp)
	End If
	bExit = False
End Sub

Sub InitFilterCities
	Dim objCities

	On Error Resume Next

	strFilterCityID = "0"
	bExit = True

	strFilterCityID = GetSafeID(Request("CityID"), GetSafeID(obTokenMgr.GetData(strToken, stEMCityID), "0"))
	If strFilterProvinceID = "-1" Then
		Set objCities = objFilter.GetCitiesList()
	Else
		Set objCities = objFilter.GetProvinceCitiesList(strFilterProvinceID)
	End If
	TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionCities")

	bNoCities = (objCities.Count = 0)
	If bNoCities Then
		Exit Sub
	End If
	arrFilterCities = objCities.ToArray()

	strFilterCityID = GetSafeIDForCOMFilter(strFilterCityID, objCities, strSelectedCity)
	bExit = False
End Sub

Sub InitFilterSchools

	On Error Resume Next
	strFilterSchoolID = GetSafeID(Request("SchoolID"), GetSafeID(obTokenMgr.GetData(strToken, stPoolSchool), "0"))
	Set objFilterSchools = objFilter.GetSchoolsListForCityAndFunc(strFilterCityID, strFuncTypeID, IIf(bBelongEO, strEMID, -1))
	TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionSchools")

	bNoSchools = (objFilterSchools.Count = 0)
	If bNoSchools Then
		bExit = True
		Exit Sub
	End If
	arrFilterSchools = objFilterSchools.ToArray

	If Not (bIsEducManager And strFilterSchoolID = "-1") Then
		strFilterSchoolID = GetSafeIDForCOMFilter(strFilterSchoolID, objFilterSchools, strSelectedOrgName)
		strSelectedOrgID = strFilterSchoolID
	End If

	If nServerType = kServerType_Local And strFilterSchoolID = strSchoolID Then
		bOwnOrg = True
	End If
End Sub

Sub InitFilterEMs
	Dim objEMs

	On Error Resume Next

	bMsgToSchool = False
	strFilterEMID = GetSafeID(Request("FILTEREM"), GetSafeID(obTokenMgr.GetData(strToken, stEMID), "0"))
	Set objEMs = objFilter.GetEmList()
	TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionEMs")

	bNoEMs = (objEMs.Count = 0)
	If bNoEMs Then
		bExit = True
		Exit Sub
	End If
	arrFilterEMs = objEMs.ToArray
	strFilterEMID = GetSafeIDForCOMFilter(strFilterEMID, objEMs, strSelectedOrgName)
	strSelectedOrgID = strFilterEMID

	If nServerType = kServerType_Local And strFilterEMID = strEMID Then
		bOwnOrg = True
	End If
End Sub

Function GetSafeIDForCOMFilter(strID, objCOMArray, strName)
	Dim nID, objCurrElement
	
	If Not IsDull(strID) Then
		nID = CLng(strID)
		If nID <> 0 Then
			For Each objCurrElement in objCOMArray
				If nID = CLng(objCurrElement.Id) Then
					GetSafeIDForCOMFilter = nID
					strName = GetSafeStr(objCurrElement.Name, -1, "")
					Exit Function
				End If
			Next
		End If
	End If
	GetSafeIDForCOMFilter = CLng(objCOMArray(0).Id)
	strName = GetSafeStr(objCOMArray(0).Name, -1, "")
End Function


Sub DrawFilters( strForm )
	If Not bUseRestrictStudentsAndParents Then
		Call DrawOrgTypeFilter( strForm )
	End If

	If bShowServerTypeFilter Then
		Call DrawServerTypeFilter( strForm )
	End If

	Select Case nOrgType
		Case kOrgType_Own
			Call DrawOwnOrg()
		Case kOrgType_EO
			Call DrawFuncTypes( strForm )
			Call DrawProvinces( strForm ) : If bExit Then Exit Sub
			Call DrawCities( strForm ) : If bExit Then Exit Sub
			If bCheckBelongEOs Then
				Call DrawBelongFilter( strForm )
			End If 
			Call DrawSchools( strForm ) : If bExit Then Exit Sub
		Case kOrgType_EM
			Call DrawEMs( strForm ) : If bExit Then Exit Sub
		Case Else
			GenerateError obLanguage("Common", "kUnexpErr")
	End Select
End Sub


Sub DrawOrgTypeFilter(strForm)
	Dim arrOrgTypes
	arrOrgTypes = Array(kOrgType_Own, obLanguage("Common","kOwnInstitution"), kOrgType_EO, obLanguage("Common","kEO"), kOrgType_EM, obLanguage("Common","kEMName"))
	DrawSimpleFilterRow obLanguage("Common","kInstitutionType"), "OrgType", arrOrgTypes, nOrgType, False, "ok('" & strForm & "','')"
End Sub

Sub DrawServerTypeFilter(strForm)
	DrawSimpleFilterRow obLanguage("Common","kServerType"), "ServerType", Array(kServerType_Local, obLanguage("Common","kServerLocal"), kServerType_Region, obLanguage("Common","kServerRegion")), nServerType, False, "ok('" & strForm & "','')"
End Sub

Sub DrawBelongFilter(strForm)
	DrawSimpleFilterRow obLanguage("Common","kBelongEO"), "BelongEO", Array(-1, obLanguage("Common","kAll"), strEMID, obLanguage("Common","kAccountableEO")), IIF(bBelongEO, strEMID, -1), False, "ok('" & strForm & "','')"
End Sub

Sub DrawOwnOrg()
	bExit = False
	DrawReadonlyRow IIF(bIsEducManager, obLanguage("Common","kEMShortName"), obLanguage("Reports","kNameEducInst")), strOwnOrgName
End Sub
	
Sub DrawFuncTypes(strForm)
	DrawFilterRow StrForm, obLanguage("Common","kEOType"), "FUNCTYPE", rsFuncTypes, "FUNCTIONALITYTYPEID", "NAME", strFuncTypeID, False
End Sub

Sub DrawProvinces( strForm )
	bExit = False
	If Not bNoProvinces Then
		DrawEnumFilterRow strForm, obLanguage("Login","kLoginProvince") & ":", "ProvID", arrFilterProvinces, strFilterProvinceID, obLanguage("Common","kAll")
	End If
End Sub

Sub DrawCities( strForm )
	bExit = False
	If bNoCities Then
		DrawTextRow obLanguage("Login","kLoginCity"), obLanguage("PoolStudents","kNoPoolCities"), ""
		bExit = True
		Exit Sub
	End If
	DrawEnumFilterRow strForm, obLanguage("Login","kLoginCity") & ":", "CityID", arrFilterCities, strFilterCityID, Null
End Sub

Sub DrawSchools(strForm)
	bExit = False
	If bNoSchools Then
		DrawTextRow obLanguage("Reports","kNameEducInst"), obLanguage("PoolStudents","kNoPoolSchools"), ""
		bExit = True
		Exit Sub
	End If
	DrawEnumFilterRow strForm, obLanguage("Reports","kNameEducInst") & ":", "SchoolID", arrFilterSchools, strFilterSchoolID, IIf(bIsEducManager, obLanguage("Common","kAll"), Null)
End Sub

Sub DrawEMs(strForm)
	bExit = False
	If bNoEMs Then
		DrawTextRow obLanguage("Common","kEMShortName"), obLanguage("PoolStudents","kNoPoolSchools"), ""
		bExit = True
		Exit Sub
	End If
	DrawEnumFilterRow strForm, obLanguage("Common","kEMShortName") & ":", "FILTEREM", arrFilterEMs, strFilterEMID, Null
End Sub


Sub GetRecipientsList()
	Dim cAction
	Dim strStudentClassID

	On Error Resume Next

	bIsStudentClass = False
	If Not bMsgToSchool Then ' MsgToEM
		bIsEM = True
		Set objList = objFilter.GetEMUsersListForAddressBook(EMFilter2EMRole(strFilter), strFilterEMID)
		TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionEMUsers")

		bListSet = objList.Count > 0
		sAllName = GetGlbName_Ex(strFilter, nFuncTypeID)
'		If bOwnOrg Then
'			sAllName = sAllName & " " & strSelectedOrgName
'		End If
	Else
		bIsEM = False
		sAllName = GetGlbName_Ex(strFilter, nFuncTypeID)

		If strFilterSchoolID = "-1" Then
			Set objList = objFilterSchools
		Else
			' Attention. Use strSchoolYearID but not strCurrYearID here!
			Set objList = objFilter.GetListForAddressBook(strFilter, strFilterSchoolID, strUserID, IIf(bUseRestrictStudentsAndParents, IIf(bStudent, Role_Student, Role_Parent), Empty))
			TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionUsers")
		End If

		If objList Is Nothing Then
			bListSet = False
		Else
			bListSet = objList.Count > 0
		End If

		sClassID = ""
		If bListSet AND (strFilter = "H" OR strFilter = "C") Then
			If bStudent Then
				strStudentClassID = objNSNET.GetClassID(Empty, strSchoolYearID, objNSNET.GetClassNameForStudent(strUserID, strSchoolYearID))
				If IsDull(Request("CLASSES")) Then
					sClassID = strStudentClassID
				End If
			End If
			If sClassID = "" Then
				sClassID = CStr(Request("CLASSES"))
			End If
			sClassID = GetSafeIDForCOMFilter(sClassID, objList, sClassName)
			If bStudent Then
				bIsStudentClass = (GetSafeStr(strStudentClassID, -1, "") = GetSafeStr(sClassID, -1, "0"))
			End If

			'sClassName = objNSNET.GetClassName(sClassID)
			Set rsStudents = objNSNET.GetClassStudentsWithParentsList(sClassID)

			If bOwnOrg Then
				sAllName = sAllName & " " & sClassName
			End If
		End If
	End If
End Sub

Function EMFilter2EMRole(strFilter)
	Dim strEMRole
	Select Case strFilter
		Case "B"
			strEMRole = "ADMEM"
		Case "F"
			strEMRole = "HDEM"
		Case "G"
			strEMRole = "OFREM"
		Case "O"
			strEMRole = "OPREM"
		Case "K"
			strEMRole = "CRDOD"
		Case "M"
			strEMRole = "CRDMR"
		Case Else
			GenerateError obLanguage("Common", "kUnexpErr")
	End Select
	EMFilter2EMRole = strEMRole
End Function

Sub DrawUsersList()
	Dim sStudentID, strHint
	Dim objCurr, nCurrID, strCurrName
	Dim arrClasses
	Dim sAllParentsOfClass, sAllStudentsOfClass
	Dim sAllName2
	Dim bShowStudents, bShowParents

	Select Case strFilter
	Case "H", "C"	'class
		arrClasses = objList.ToArray()
		DrawEnumFilterRow "AddrBookForm", obLanguage("Common","kClass",nFuncTypeID) & ":", "CLASSES", arrClasses, sClassID, Null
		If rsStudents.EOF Then
			rw "<h3>"&obLanguage("MenuFolders","kNoStudentsInThisClass",nFuncTypeID)&"</h3>"
		Else
			bShowStudents = True
			bShowParents = True
			If bUseRestrictStudentsAndParents Then
				If bStudent Then
					bShowParents = False
				End If
				If bParent Then
					bShowStudents = False
				End If
			End If%>
			<table align="center" width="75%" border="0" cellpadding="1">
			<tr>
				<th nowrap><%
			strHint = obLanguage("Messages","kSendAll") & " " & obLanguage("Common","kStudents_d",nFuncTypeID)
			sAllStudentsOfClass = GetGlbName_Ex("D", nFuncTypeID) & " " & sClassName
			If Not bStudent Or bIsStudentClass Then
				If bShowStudents Then
					rw ShowAnchor( "AddBk('C" & sClassID & "', '" & DB2JavaEx(sAllStudentsOfClass) & "')", DB2JavaEx(strHint), strHint, "")
				Else
					rw "&nbsp;"
				End If
				rw "<br>"
			End If
			rw obLanguage("Common","kStudents",nFuncTypeID)%>
				</th>
				<%If bShowParents Then%>
				<th nowrap ><%
			strHint = obLanguage("Messages","kSendAllParents")
			sAllParentsOfClass = GetGlbName_Ex("R", nFuncTypeID) & " " & sClassName
			If Not bStudent Or bIsStudentClass Then rw ShowAnchor( "AddBk('E" & sClassID & "', '" & DB2JavaEx(sAllParentsOfClass) & "')", DB2JavaEx(strHint), strHint, "")&"<br>"
			rw obLanguage("Common","kParents")%>
				</th>
				<%End If%>
			</tr><%
			Set rsParents = rsStudents("chaptParents").Value
			strHint = obLanguage("Messages","kAddToRecipients")
			While Not rsStudents.EOF%>
				<tr>
					<td nowrap><%
					sStudentID = CStr(rsStudents("STUDENTID"))
					strCurrName = rsStudents("NICKNAME")
					If bShowStudents Then
						rw ShowAnchor( "AddBk('" & sStudentID & "', '" & DB2JavaEx(strCurrName) & "')", DB2JavaEx(strHint), DB2HTML(rsStudents("NICKNAME")) , "")
					Else
						rw DB2HTML(rsStudents("NICKNAME"))
					End If%>
					</td><%
					If bShowParents Then%>
						<td nowrap><%
						If Not rsParents.EOF Then
							Do
								strCurrName = rsParents("NICKNAME")
								rw ShowAnchor( "AddBk('" &  rsParents("USERID")  & "', '" & DB2JavaEx(strCurrName) & "')", DB2JavaEx(strHint), DB2HTML(rsParents("NICKNAME")) , "")
								rsParents.MoveNext
								If rsParents.EOF Then Exit Do
								rw ",<br>"
							Loop
						Else
							rw "&nbsp;" & obLanguage("Messages","kNoParents")
						End If%>
						</td>
					<%End If%>
				</tr><%
				rsStudents.MoveNext
			Wend%>
			</table><%
		End If
	case Else%>
		<table height="80%" align="left"><tr align="left"><td><%
		If bMsgToSchool And strFilterSchoolID = "-1" Then
			' Сообщение ВСЕМ школам, в "послать всем" - фиксируем тип функциональности и город

			sAllName2 = sAllName & " " & obLanguage("Messages","kToFuncType",CLng(strFuncTypeID)) & " " & strSelectedCity

			strHint = obLanguage("Messages","kSendAll") & " " & sAllName2
			rw ShowAnchor( "AddBkAll('" & strFilter & "E" & strFuncTypeID & "/" & strFilterCityID & IIf(bBelongEO, "/" & strEMID, "") & "','0', '" & DB2JavaEx(sAllName2) & "')" , DB2JavaEx(strHint), DB2HTML(strHint), "") & "<p>"

			' Для конкретной школы - есть её ID, поэтому здесь тип функциональности и город - не нужны
			For Each objCurr in objList
				nCurrID = CLng(objCurr.Id)
				strCurrName = CStr(objCurr.Name)
				rw ShowAnchor( "AddBkAll('" & strFilter & nCurrID & "', 0, '" & DB2JavaEx(sAllName & " " & strCurrName) & "')", obLanguage("Messages","kAddToRecipients"), DB2HTML(strCurrName), "")&"<br/>"
			Next
		Else
			If bOwnOrg Or bIsEducManager Then
				sAllName = sAllName & " " & strSelectedOrgName
				strHint = obLanguage("Messages","kSendAll") & " " & sAllName
				'If HasUserRole(rlAdmin) Or HasUserRole(rlPrincipal) Then rw ShowAnchor( "AddBkAll('" & strFilter & "','"& strCurrYearID &"', '" & DB2JavaEx(sAllName) & "')" , strHint, strHint & " " & obLanguage("Common","kOfSchool",nFuncTypeID), "") & "<p>"
				If HasUserRole(rlAdmin) Or HasUserRole(rlPrincipal) Or bIsEducManager Then
					rw ShowAnchor( "AddBkAll('" & strFilter & strSelectedOrgID & "','"& strCurrYearID &"', '" & DB2JavaEx(sAllName) & "')" , DB2JavaEx(strHint), DB2HTML(strHint), "") & "<p>"
				End If
			End If

			For Each objCurr in objList
				nCurrID = CLng(objCurr.Id)
				strCurrName = CStr(objCurr.Name)
				rw ShowAnchor( "AddBk('" & nCurrID & "', '" & DB2JavaEx(strCurrName) & "')", obLanguage("Messages","kAddToRecipients"), DB2HTML(strCurrName), "")&"<br/>"
			Next
		End If%>
		</td></tr></table><%
	End Select
End Sub

Function DB2JavaEx(strIn)
	strIn = Replace(strIn, """", "'")
	strIn = Replace(strIn, ";", ",")
	DB2JavaEx = DB2Java(strIn)
End Function

Sub GetOwnOrgName()
	If bIsEducManager Then
		strOwnOrgName = objNSNET.GetEducManagementName(strEMID)
	Else
		strOwnOrgName = objNSNET.GetSchoolName(strSchoolID)
	End If
	strOwnOrgNameShort = MakeStringOfSafeLength(strOwnOrgName, kMaxOwnOrgNameLen)
End Sub

Sub TestError_RegionServer(objErr)
	If Err.Number <> 0 Then
		If nServerType = kServerType_Region Then
			nServerType = kServerType_Local
			Call obTokenMgr.SetData(strToken, stServerType, nServerType)
			GenerateError objErr & "<br />" & obLanguage("PoolStudents","kRegionServerError")
		Else
			TestError objErr
		End If
	End If
End Sub
%>
