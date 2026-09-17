<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->

<% ' © 2007-2018 IRTech. All rights reserved.

Const kMaxLen_EO			= 150
Const kMaxLen_Location		= 200
Const kMaxLen_District		= 200
Const kMaxLen_City			= 200
Const kMaxLen_State			= 50
Const kMaxLen_Courty		= 50
Const kMaxLen_Founder		= 150
Const kSchool_InitEOFormID	= 20
Const kSchool_InitEOTypeID	= 5
Const kDOU_InitEOFormID		= 1
Const kDOU_InitEOTypeID		= 1

Dim strAreaID, strAreaName, strAreaPar, strArea, objRs, objCityInfoRs, nParentCityID, bAvailabilityOfStreet
Dim nMaxLen
Dim objFounders, bEmptyFounders, objFounderTypes, nFounderTypeID, strFounderType, objFounderTypeEnum
Dim arrFounderTypes, arrFounderKinds, nFounderKindID, bNewFounder
Dim strBackPage
Dim objSettlementTypes, nSettlementTypeID, objAvailableParentCity, objAtoTypes, nAtoTypeID
Dim objEOTypes, objEOForms, objEOLegalForms, objRelatedSchoolInfo, objCreatives
Dim nEOFormID, nEOTypeID, strEOLegalFormID, nOtraslID, strRelatedSchoolID
Dim strFullName, strEOFormName, strEOTypeName, strFullSchoolName, strFuncType ,strSchoolNumber, nDistrictID
Dim bCanChangeType, bRelatedSchoolExist, nStateID, nProvinceID, nCityID, strKladr
Dim rsFounderInfo, rsProvinces, bNoProvince, nLevel, rsSchools
Dim strHeader, strCategoryName, strCategoryID, strTreeID, strName, strCityName
Dim bChangedEOCity, strOU, bNoSchools, strEOLegalFormID83, objEOLegalForms83
Dim bHidden, bRO, strEOLegalFormName, strEOLegalForm83Name
Dim rsParentFounders, rsSubordinateFounders, nParentFounderID, strShortName
Dim isDistrictCityExist
Dim strMunicipalityCode, bExistsEmCertificates
Dim bIsAuthority
Dim arrAuthorityTypes, nAuthorityTypeID
Dim bNationOlympOrg, bModuleNationOlympiad

Function GetPageTitle()
	If CantCreateEO() And strAreaPar = "EO" Then
		GetPageTitle = obLanguage("ServAdmin","kEducInst")
	Else
		GetPageTitle = IIF(strAreaID > 0, obLanguage("ServAdmin","kEditing"), obLanguage("ServAdmin","kAdding")) & " " & strArea
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Addresses
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Addresses
 End Function

Function onLoad()
	onLoad = ""

	If Not IsDull(Request("EOFID")) Or Not IsDull(Request("CRTCNT")) Or bChangedEOCity Then onLoad = onLoad & "dataChanged();"
End Function

Sub ReadState()
	on error resume next
	Dim kStreetAtoType
	Dim kCityAtoType
	Dim nEmID
	bRO = obContext.ServerSettings.SystemSettings.IsRegionEMForSchool And Not bIsRegionEMWithOUDOD
	bModuleNationOlympiad = obContext.ServerSettings.SystemSettings.moduleNationOlympiad

	If Not IsDull(Request("CID")) Then
		strAreaPar		= "EO"
		bChangedEOCity	= True
	Else
		strAreaPar		= Request("Area")
	End If

	strAreaID			= GetSafeLng(Request("AreaID"), 0)
	nOtraslID			= 0
	strBackPage			= GetSafeStr(obTokenMgr.GetData(strToken, "Back"), -1, Request.ServerVariables("HTTP_REFERER"))
	If IsDull(strAreaPar) Then strAreaPar = obTokenMgr.GetData(strToken, "Area") Else If strAreaPar <> "founder" Then Call obTokenMgr.SetData(strToken, "Area", strAreaPar)
	nStateID			= GetSafeLng(obTokenMgr.GetData(strToken,"State"), 0)

	Select Case strAreaPar
	Case "founder"
		strArea = obLanguage("ServAdmin","kofFounders")
		nMaxLen		= kMaxLen_Founder

		Set arrFounderKinds = comHelper.AspHelper.GetEnums(comHelper.AspHelper.Enums.FounderKind)
		Set arrAuthorityTypes = comHelper.AspHelper.GetEnums(comHelper.AspHelper.Enums.AuthorityType)

		nProvinceID	= GetSafe("PROVINCE", -1)
		bNoSchools	= Not objNSNET.IsStateHasSchools(nStateID)
		If strAreaID = 0 Then strAreaID = GetSafeLng(Request("Founders"), 0)
		Set rsFounderInfo = objNSNET.GetFounderInfo(strAreaID)
		nLevel = kCityLevel

		bExistsEmCertificates = False

		If Not rsFounderInfo.EOF Then
			nLevel = CInt(rsFounderInfo("HLEVEL"))
			nCityID = rsFounderInfo("CITYID")

			If obContext.ServerSettings.SystemSettings.EnableCertificatesDO Then
				strMunicipalityCode = rsFounderInfo("CODE")
				nEmID = rsFounderInfo("EMID")

				If Not IsDull(nEmID) Then
					bExistsEmCertificates = objNSNET.ExistsEmCertificates(nEmID)
				End If
			End If

			If nLevel <> kDistrictCityLevel Then nCityID = -1
			nParentFounderID = GetSafeID(rsFounderInfo("PARENTFOUNDERID"), -1)
		Else
			nLevel = GetSafeLng(Request("HLEVEL"), IIF(objNSNET.IsCityFromProvince(nCityID), kProvinceLevel, kCityLevel))
			nCityID = CLng(GetSafe("City",-1))

			nParentFounderID = -1
		End If

		If nCityID <> -1 Then
			If objNSNET.GetSafeStateProvinceCityID(nCityID, nStateID, nProvinceID) <=0 Then nCityID = -1
		End If

		Set objRs = objNSNET.GetCitiesWithDistrict(nStateID, nProvinceID)
		isDistrictCityExist = Not objRs.EOF

		If nLevel = kDistrictCityLevel Then
			If nCityID <= 0 Then
				If isDistrictCityExist Then nCityID = objRs("CITYID") Else GenerateError obLanguage("Common","kCanNotEOCityWithoutArea")
			End If

			Call obTokenMgr.SetData(strToken, "City", nCityID)
		End If

		If CLng(strAreaID) > 0 Then
			bNewFounder = False
			bCanChangeType	= (Not objNSNET.IsFounderUsed(strAreaID))
			strAreaName			= GetSafeStr(Request("NAME"), 200, rsFounderInfo("FULLNAME"))
			nFounderKindID		= GetSafeLng(Request("FKINDID"), rsFounderInfo("FOUNDERKINDID"))
			nAuthorityTypeID	= GetSafeLng(Request("AUTHORITYTYPEID"), GetSafeLng(rsFounderInfo("AUTHORITYTYPE"), -1))
			bIsAuthority		= GetSafeBool(Request("ISAUTHORITY"), rsFounderInfo("ISAUTHORITY"))
			bNationOlympOrg		= GetSafeBool(Request("NATIONOLYMPORG"), rsFounderInfo("NATIONOLYMPORG"))
			nFounderTypeID		= GetSafeLng(rsFounderInfo("TYPEID"), Null)
			Set objFounderTypeEnum = comHelper.AspHelper.GetEnumItem(comHelper.AspHelper.Enums.FounderType, nFounderTypeID)
			strFounderType = objFounderTypeEnum.Name

			strShortName		= GetSafeStr(Request("SHORTNAME"), 50, rsFounderInfo("FNAME"))
		Else
			bNewFounder		= True
			bCanChangeType	= True
			nFounderTypeID		= GetSafeLng(Request("FTYPEID"), IIF(MODULE_EM, kEducManagement, kOther)) ' по умолчанию тип УО
			nFounderKindID		= GetSafeLng(Request("FKINDID"), kMunicipality) ' по умолчанию тип Муниципальное образование
			bIsAuthority		= GetSafeBool(Request("ISAUTHORITY"), False)
			bNationOlympOrg		= GetSafeBool(Request("NATIONOLYMPORG"), False)
			nAuthorityTypeID	= GetSafe(Request("AUTHORITYTYPE"), -1)
			strAreaName			= GetSafeStr(Request("NAME"), 200, "")
			strShortName		= GetSafeStr(Request("SHORTNAME"), 50, "")

			If MODULE_EM Then
				Set arrFounderTypes = comHelper.AspHelper.GetEnums(comHelper.AspHelper.Enums.FounderType)
			Else
				Set arrFounderTypes = comHelper.AspHelper.GetEnums(comHelper.AspHelper.Enums.FounderType, Array(kEducManagement))
			End If
		End If

		If MODULE_EM And nFounderTypeID = kEducManagement Then
			bRO = False

			Set rsSchools = objNSNET.GetSchoolsForFounder(nLevel, nStateID, nCityID, strAreaID)
			strTreeID	= "tree"
			strHeader	= objNSNET.GetStateName(nStateID)
			strOU		= obLanguage("ServAdmin","kSchool") & " "

			Select Case nLevel
			Case kProvinceLevel
				strHeader			= strHeader & " > " & strOU & LCase(obLanguage("ServAdmin","kOfProvince"))
				strCategoryName= "PROVINCENAME"
				strCategoryID		= "PROVINCEID"
				strHeader			= strHeader & ":"
			Case kCityLevel
				strHeader			= strHeader & " > " & strOU & LCase(obLanguage("ServAdmin","kOfCity"))
				strCategoryName= "CNAME"
				strCategoryID		= "CITYID"
				strHeader			= strHeader & ":"
			Case kDistrictCityLevel
				strCityName			= ""
				IF nCityID <> -1 THEN strCityName = objNSNET.GetCityName(nCityID)
				strHeader			= strHeader & " > " & strCityName & " > " & strOU & LCase(obLanguage("ServAdmin","kOfDistrictCity"))
				strCategoryName= "DNAME"
				strCategoryID		= "DISTRICTID"
				strHeader			= strHeader & ":"
			End Select

			Set rsParentFounders = objNSNET.GetPossibleTopEMs(nLevel, nStateID, nCityID, strAreaID)
			If CLng(strAreaID) > 0 Then
				Set rsSubordinateFounders = objNSNET.GetSubordinateEMs(strAreaID)
			End If

		End If
	Case "EO"
		strArea	= obLanguage("ServAdmin","kOfEO")
		nCityID	= GetSafeLng(Request("CID"), Clng(GetSafe("City", GetSafeLng(Request("PID"),0))))
		Call obTokenMgr.SetData(strToken,"City", nCityID)
		strEOLegalFormID	= GetSafeStr(Request("EOLEGALFORMID"), -1, "")
		strEOLegalFormID83 = GetSafeStr(Request("EOLEGALFORM83ID"), -1, "")
		strCityName			= objNSNET.GetCityName(nCityID)
		nDistrictID				= GetSafeLng(Request("District"), -1)

		Dim rsFT, initFormID, initTypeID
		Set rsFT = objNSNET.GetFuctionalityType(kFuncType_Common)
		TestError ""

		If rsFT.EOF Then
			initFormID = kDOU_InitEOFormID
			initTypeID = kDOU_InitEOTypeID
		Else
			initFormID = kSchool_InitEOFormID
			initTypeID = kSchool_InitEOTypeID
		End If

		If CLng(strAreaID) > 0 Then
			bCanChangeType= objNSNET.CanChangeEOForm(strAreaID)
			Set objRs			= objNSNET.GetEOInfo(strAreaID)
			strAreaName		= GetSafeStr(Request("NAME"), 200, GetSafeStr(objRs("EONAME"), 200, ""))

			If Not IsDull(objRs("SCHOOLID")) Then
				strRelatedSchoolID				= objRs("SCHOOLID")
				Set objRelatedSchoolInfo		= objNSNET.GetSchoolInfo(strRelatedSchoolID)
				bRelatedSchoolExist				= True
				strFullSchoolName				= objRelatedSchoolInfo("FULLSCHOOLNAME")
				nDistrictID						= GetSafeLng(objRelatedSchoolInfo("DISTRICTID"),-1)

				bHidden							= (objRelatedSchoolInfo("isDisabled").Value = 1)
				'If bHidden Then bRo=True
			End If
			strFuncType = objRs("FUNCTIONALITYTYPEID")

			If IsDull(strEOLegalFormID) Then
				strEOLegalFormID		= objRS("EOLEGALFORMID")
				strEOLegalFormID83		= GetSafeID(objRS("EOLEGALFORM83ID"), "-1")
			End If

			nEOFormID = GetSafeLng(Request("EOFORMID"), GetSafeLng(objRs("EOFORMID"), initFormID))
			nEOTypeID = GetSafeLng(Request("EOTYPEID"), GetSafeLng(objRs("EOTYPEID"), initTypeID))
			If CInt(nEOTypeID) = 3 Then nOtraslID = GetSafeLng(objRs("OTRASLID"), 0)
			strSchoolNumber			= objRs("SCHOOLNUMBER")
			strEOLegalFormName		= objRs("EOLEGALFORMNAME")
			strEOLegalForm83Name	= GetSafeStr(objRS("EOLEGALFORMNAME83"), -1, "")
		Else
			bCanChangeType = True
			If IsDull(strEOLegalFormID) Then
				strEOLegalFormID = "3"  ' муниципальное ОО
				strEOLegalFormID83 = "2"  ' Бюджетное ОО
				strAreaName = ""
			Else
				strAreaName = GetSafeStr(Request("NAME"), 200, "")
			End If

			nEOFormID = GetSafeLng(Request("EOFORMID"), initFormID)
			nEOTypeID = GetSafeLng(Request("EOTYPEID"), initTypeID)
		End If

		Set objFounders		= objNSNET.GetStateEOFounders(nStateID,strAreaID)
		bEmptyFounders		= objFounders.EOF
		Set objCreatives	= objNSNET.GetEOCreativeList(strAreaID)
		If Not IsDull(Request("SchoolNumber")) Then strSchoolNumber = Request("SchoolNumber")
		nMaxLen = kMaxLen_EO
		If Not IsDull(Request("FullName")) Then strFullSchoolName = Request("FullName")
	Case "district"
		strArea = LCase(obLanguage("ServAdmin","kOfDistrictCity"))
		If CLng(strAreaID) > 0 Then strAreaName = objNSNET.GetDistrictName(strAreaID)
		nMaxLen = kMaxLen_District
	Case "street"
		strArea = obLanguage("ServAdmin","kOfStreet")

		nMaxLen = kMaxLen_Location
		Set objAtoTypes = objNSNET.GetAtoTypes(5)
		If objAtoTypes.EOF Then GenerateError "Невозможно получить типы улиц"

		kStreetAtoType = Clng(objNSNET.GetAtoTypeID("ул", 5))
		nAtoTypeID = kStreetAtoType
		If CLng(strAreaID) > 0 Then
			Set objRs = objNSNET.GetLocationInfo(strAreaID)
			If Not objRs.EOF Then
				strAreaName = GetSafeStr(objRs("NAME"), nMaxLen, "")
				nAtoTypeID = GetSafeID(objRs("ATO_TYPEID"), kStreetAtoType)
			End If
		End If
	Case "city"
		strArea = LCase(obLanguage("ServAdmin","kOfCity"))
		Set objSettlementTypes		= objNSNET.GetSettlementTypes()
		If objSettlementTypes.EOF Then GenerateError "Невозможно получить типы населенных пунктов"
		nMaxLen = kMaxLen_City
		Set objAtoTypes = objNSNET.GetAtoTypes(4)
		If objAtoTypes.EOF Then GenerateError "Невозможно получить типы населенных пунктов"

		nProvinceID = GetSafeLng(Request("PROVINCEID"), GetSafeLng(Request("PROVINCE"), -1))
		kCityAtoType = Clng(objNSNET.GetAtoTypeID("г", 4))
		nAtoTypeID = kCityAtoType
		nSettlementTypeID = 7
		nCityID = GetSafeLng(strAreaID,0)
		bAvailabilityOfStreet = 1
		nParentCityID = -1
		If nCityID > 0 Then
			Set objCityInfoRs = objNSNET.GetCityInfo(strAreaID)
			If Not objCityInfoRs.EOF Then
				strAreaName = GetSafeStr(objCityInfoRs("NAME"), nMaxLen, "")
				nAtoTypeID			= GetSafeLng(objCityInfoRs("ATO_TYPEID"), kCityAtoType)
				nSettlementTypeID	= GetSafeLng(objCityInfoRs("SETTLEMENTTYPEID"), 7)
				strKladr			= GetSafeStr(objCityInfoRs("KLADRCODE"), 20, "")
				nProvinceID = GetSafeID(objCityInfoRs("PROVINCEID"), "-1")
				nParentCityID = GetSafeID(objCityInfoRs("PARENTCITYID"), "-1")
				bAvailabilityOfStreet	= objCityInfoRs("AVAILABILITYOFSTREET")
			End If
		End If

		If nProvinceID = 0 Then nProvinceID = -1
		Set objRs = objNSNET.GetProvinceList(nStateID)
		Set objAvailableParentCity = objNSNET.GetAvailableParentCity(nStateID, nProvinceID, nCityID)
	Case "province"
		strArea = LCase(obLanguage("ServAdmin","kOfProvince"))
		If CLng(strAreaID) > 0 Then strAreaName = objNSNET.GetProvinceName(strAreaID)
		nMaxLen = kMaxLen_State
	Case "state"
		strArea = obLanguage("ServAdmin","kOfState")
		If CLng(strAreaID) > 0 Then strAreaName = objNSNET.GetStateName(strAreaID)
		nMaxLen = kMaxLen_State
	Case "country"
		strArea = obLanguage("ServAdmin","kOfCountry")
		If CLng(strAreaID) > 0 Then strAreaName = objNSNET.GetCountryName(strAreaID)
		nMaxLen = kMaxLen_Courty
	Case Else GenerateError obLanguage("Common","kInvalidParameter")
	End Select

	TestError obLanguage("ServAdmin","kErrName") &" "& strArea
	strArea = " " & strArea

End Sub

Sub Main
	If strAreaPar = "EO" Then
		If bCanChangeType Then
			If CLng(strAreaID)>0 Then
				If Not IsDull(objRs("SCHOOLID")) Then
					Set objEOTypes = objNSNET.GetSupportedEOTypes()
				Else
					Set objEOTypes = objNSNET.GetEOTypes()
				End IF
			Else
				Set objEOTypes = objNSNET.GetEOTypes()
			End If
		Else
			Set objEOTypes = objNSNET.GetFuctionalityTypeEOTypes(strFuncType)
		End If

		Set objEOForms				= objNSNET.GetEOFormsForEOType(nEOTypeID)
		Set objEOLegalForms			= objNSNET.GetEOLegalForms()
		Set objEOLegalForms83		= objNSNET.GetEOLegalForms83()
	End IF
End Sub

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnter(event);"
End Function

Sub onHeadSpecial()%>
<script src="/vendor/components/jqueryui/jquery-ui.min.js" type="text/javascript"></script>
<link href="/vendor/components/jqueryui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>

<script src="/vendor/components/jquery.dynatree/dist/jquery.dynatree.min.js" type="text/javascript"></script>
<link href="/vendor/components/jquery.dynatree/dist/skin-vista/ui.dynatree.css" rel="stylesheet" type="text/css"/>

<script src="/js/Tree.js" type="text/javascript"></script>

<%If (strAreaPar = "founder" And strAreaID < 0) Then%>
	<script language="JavaScript" src="../md5r.min.js"></script>
<%End If%>
<script><!--
var form = document.City;
var bSelected;

function Back() {
	goBack(document.City, "<%=strBackPage%>");
}

$(document).ready(function() {
	ShowAuthorityType();
	$('#CancelChP').hide();
});

function ShowAuthorityType() {
	if ($('input:checkbox[name=ISAUTHORITY]:checked').length > 0) 
	{
		$('select[name=AUTHORITYTYPEID]').parent().parent().show()
	} else {
		$('select[name=AUTHORITYTYPEID]').parent().parent().hide()
	};
}

function CheckEnter(event){ if (event.keyCode == 13) save(); }

<%
If strAreaPar = "EO" Then%>
	function changeFounders() {
		checkForChanges().then(function() {
			DoSubmit(document.City, "EOFounders.asp");
		});
	}

	function goCreatives() {
		checkForChanges().then(function() {
			setDBBusy();
			DoSubmit(document.City, "Creatives.asp");
		});
	}<%
End If%>

function save() {
	var form = document.City;
	var bSelected;

	if(isDBBusy()) return false;

	var elName = form.elements["NAME"];

	if (elName.value == "") {
		focusAlert(elName, language.Generic.ServAdmin.kErrNameIsEmpty);

		return false;
	}

	var confirms = new Array();
	var fail = function(){};

	<%If strAreaPar = "city" Then%>
		if ($('select[name=AvailableParentCity]')[0] != undefined){
			var selectedIndex = $('select[name=AvailableParentCity]')[0].options.selectedIndex;
			var selectedOptionName = $('select[name=AvailableParentCity]')[0].options[selectedIndex].text;
			if (elName.value == selectedOptionName ){
				focusAlert(elName, language.Generic.ServAdmin.kErrParentCity);
				return false;
			}
		}
	<%End If%>

	<%If strAreaPar = "EO" Then
		If bRelatedSchoolExist Then%>
			if( trimStr( form.elements['FullName'].value ) == '') {
				focusAlert(form.elements["FullName"], language.Generic.ServAdmin.kErrEmptyFullEOName);
				return false;
			}

			if (trimStr(form.elements["SchoolNumber"].value) == "") {
				focusAlert(form.elements["SchoolNumber"], language.Generic.ServAdmin.kErrNumberSchoolIsEmpty);

				return false;
			}
		<%End If

		If bCanChangeType Then%>
			if(form.EOFORMID.value) bSelected = true;
		<%End If%>

		for(var i = 0; i < form.EOFORMID.length; i++) {
			if (form.EOFORMID[i].checked) {
				bSelected = true;
				break;
			}
		}

		if(!bSelected) {
			alert(language.Generic.ServAdmin.kErrEOFormMustBeSelected);
			return false;
		}
	<%End If

	If Not IsDull(strRelatedSchoolID) Then%>
		if(elName.value != '<%=(DB2Java(strAreaName))%>' || trimStr(form.elements["FullName"].value) != '<%=(DB2Java(strFullSchoolName))%>') {
			confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kExistRelatedSchool));
			fail = function(){
				elName.value = '<%=(DB2Java(strAreaName))%>';
				form.elements["FullName"].value = '<%=(DB2Java(strFullSchoolName))%>';
			};
		}
	<%End IF%>

	elName.value = elName.value.substr(0,1).toUpperCase() + elName.value.substr(1,elName.value.length);

	<%If strAreaID <> -1 And strAreaPar = "city" Then%>
		if(form.KLADR.value != "") {
			if(form.Province && ($('input[name=PROVID]').val() != form.Province.value))
				confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.ServAdmin.kErrCityImportedFromKladrEdit), function(){	form.KLADR.value = "0"; }));

			if($('input[name=CITYNAME]').val() != elName.value || $('input[name=ATT]').val() != $('select[name=ATO_TYPEID]').val()) {
				alert(language.Generic.ServAdmin.kCantRenameOrRetype + language.Generic.ServAdmin.kCityImportedFromKladr);
				return false;
			}
		}
	<%End If

	If strAreaPar="founder" Then%>
		elName = form.elements["SHORTNAME"];
		if(elName.value == "") {
			focusAlert(elName, language.Generic.ServAdmin.kErrShortNameIsEmpty);
			return false;
		}

		$('input[name=PID]').val($('select[name=City]').val());<%
		If nFounderTypeID = kEducManagement Then%>
			if (!GetSchoolArray("tree") <%If nLevel = kMixedLevel Then%> & !GetSchoolArray("tree1")<%End If%>) {
				confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kConfirmNoSchoolsSelect));
			}
			<%If strAreaID < 0 Then%>
				if (!checkPassword()) return false;
			<%End If
		End If
	End If
	%>


	var saveFunc = function(){

		<%If strAreaPar="founder" Then%>
		var collectSchools = function(inputName) {
			var rawSchools = $("input[name=" + inputName + "]").val();
			if(rawSchools){
				return rawSchools.split(",");
			}
			return []
		};

		var citySchools = collectSchools("tree");
		var munSchools = collectSchools("tree1");

		var schools = citySchools.concat(munSchools);

		var code = null;

		<%If obContext.ServerSettings.SystemSettings.EnableCertificatesDO Then%>
			var codeEl = $("input[name=MunicipalityCode]");
			if (codeEl.length) {
				code = codeEl.val();
			}
			else {
				<%If Not IsDull(strMunicipalityCode) Then%> 
					code = "<%=strMunicipalityCode%>";
				<%End If%>
			}
		<%End If%>

		var founder = {
			id: <%=strAreaID%>,
			level: <%=nLevel%>,
			name: elName.value,
			founderType: <%=nFounderTypeID%>,
			fullName: $("input[name=NAME]").val(),
			code: code,
			stateId: <%=nStateID%>,
			cityId: <%=nCityID%>,
			parentFounderId: $("select[name=ParentFounder]").val(),
			schools: schools,
			founderKind: $("select[name=FKINDID]").val(),
			isAuthority: $("input:checkbox[name=ISAUTHORITY]:checked").length > 0,
			authorityType: $("select[name=AUTHORITYTYPEID]").val(),
			nationOlympOrg: $("input:checkbox[name=NATIONOLYMPORG]:checked").length > 0
		};

		var request = {};
		var method;

		if (founder.id > 0) {
			request = founder;
			method = "POST";
		} else {
			request = {
				founder: founder,
				loginCredentials: {
					login: $("input[name=LON]").val(),
					pass: $("input[name=NP3]").val()
				}
			};
			method = "PUT";
		}

		jsSubmit({
			action:"/webapi/founders",
			contentType: "application/json",
			method: method,
			showProcessing: true,
			data: request })
		.then(function(){
			DoSubmit(document.City, "<%=strBackPage%>");
		});

		<%Else%>
			setDBBusy();
			DoSubmit( document.City, "");
		<%End If%>
	};

	extDeferred.when(confirms).then(saveFunc, fail);
}

<%If strAreaPar = "EO" Then%>
	function changeEOType() {
		var form = document.City;
		for(var i = 0; i < form.EOFORMID.length; i++)
			form.EOFORMID[i].value = 0;

		form.EOFORMID.value = 0;
		ok_check_db('City', 'createArea.asp');
	}

	function changeCity() {
		ok_check_db('City','createArea.asp');
	}

	var Wnd = null;
	function importKLADR() {
		var url = urlHelper.makeUrl("KLADR_inc.asp", { CID: <%=nCityID%> });
		var winOptions = { url: url, name: '_blank', specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=600,height=450', winChild: Wnd};
		windowOpen( winOptions );
		Wnd = winOptions.winChild
		if (Wnd) center(Wnd, 600, 450);
	}

	function HideSchool(inp) {
		jsSubmit({
			action: 'HideSchool_Ajax.asp',
			data: {"sch": <%=CLng(strRelatedSchoolID)%>, "act" : inp.checked ? 1 : 0},
			onSuccess: HideSchool_success
		});
	}

	function HideSchool_success(response) {
		if(response.data.act == 0) {
			alert( language.Generic.SchoolSettings.kSchoolIsEnabled)
		}
		else{
			alert( language.Generic.SchoolSettings.kSchoolIsDisabled)
		}
	}
<%End If

If strAreaPar = "founder" Then%>
	function changeType(){
		DoSubmit( document.City, 'createArea.asp');
	}

<%If nFounderTypeID = kEducManagement Then%>
	function editAdminsPass() {
		setDBBusy();
		var schoolName = $('[name=NAME]').val();
		postTo("AdminsList.asp", {SchoolName : schoolName, EditSchoolID: <%=objNSNET.GetEMSchoolID(strAreaID)%>});
	}

var tree;
var tree1;
var schools = <%=rsSchools.ToJSON(Array("schoolId", "owner"), Array("SCHOOLID", "OWNER"))%>;

$(document).ready(function() {
	ShowAuthorityType();
	var onTreeKeyDown = function(node, event) {
		if (event.which == 32) {
			node.toggleSelect();
			return false;
		}
	};

	$("#<%=strTreeID%>").dynatree({ checkbox: true, selectMode : 3, onKeydown : onTreeKeyDown });
	tree = $("#<%=strTreeID%>").dynatree("getTree");

	<%If nLevel=kMixedLevel Then%>
		$("#<%=strTreeID%>1").dynatree({ checkbox: true, selectMode : 3, onKeydown : onTreeKeyDown	 });
		tree1 = $("#<%=strTreeID%>1").dynatree("getTree");
		if(tree.length == 0)
			tree = tree1;
	<%End If%>
})
<%End If
End If

If (strAreaPar = "founder" And strAreaID < 0 And nFounderTypeID = kEducManagement) Then
	Dim strRegExpAlphabet, strRegExpLogin

	strRegExpAlphabet = obContext.LocalSettings.RegExpAlphabet
	strRegExpLogin = "[" & kRegExp_Login & strRegExpAlphabet & "]"
	%>
	function checkPassword() {
		var inputLogin			= $('input[name=LON]');
		var login				= inputLogin.val();
		inputPass				= $('input[name=NP]');
		var inputConfirmPass	= $('input[name=NP2]');
		var pass				= inputPass.val();
		var upperPass			= pass.toUpperCase();
		var confirmPass			= inputConfirmPass.val();

		var bDefValue = false;

		if(login == "") {
			focusAlert(inputLogin, language.Generic.Common.kErrLogin);
			return false;
		}
		if(/<%=strRegExpLogin%>/.test(login)) {
			focusAlert(inputLogin, language.Generic.Common.kErrLoginValidSimbols + '<br />' + '<%=kSimbolsForLogin%>');
			return false;
		}
		if(login.length < <%=kMinLoginLength%>) {
			focusAlert(inputLogin, '<%=obLanguage("Common","kErrorLoginMustHave").Format(Array(kMinLoginLength))%>');
			return false;
		}
		if(pass == "") {
			focusAlert(inputPass, language.Generic.Common.kErrNewPassword_);
			return false;
		}
		if(pass != confirmPass) {
			focusAlert(inputConfirmPass, language.Generic.Common.kErrDifferentPassword);
			return false;
		}
		if(pass.length < <%=obContext.ServerSettings.SecuritySettings.MinPasswordLength%> && !bDefValue) {
			focusAlert(inputPass, '<%=obLanguage("Common","kErrorPasswordMustHave").Format(Array(obContext.ServerSettings.SecuritySettings.MinPasswordLength))%>');
			return false;
		}
		if(upperPass == login.toUpperCase() && !bDefValue) {
			focusAlert(inputPass, language.Generic.Common.kSimplePasswordShort);
			return false;
		}
		if( pass.charAt(0) == ' ' || pass.charAt(pass.length-1) == ' ' )
		{
			focusAlert(inputPass, language.Generic.Common.kErrPWDSurroundSpaces);
			return false;
		}

		$('input[name=NP3]')[0].value = hexMD5_(pass);
		pass = confirmPass = $('input[name=NP3]').val().substr(0,pass.length);

		return true;
	}
<%End If%>

function isOnlyDigits(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}

    return true;
}
//--></script><%
End Sub

Sub DrawButtons
	If Not bRO Then ButtonSave "save();", obLanguage("Common", "kSave")
	If Not strAreaID < 0 And strAreaPar = "founder" And nFounderTypeID = kEducManagement Then
		InlineButton "editAdminsPass();", obLanguage("ServAdmin", "kTitleOptions"), ""
	End If
End Sub

Sub onDrawPage()
	Dim arrBool, strFunc, strIDs', defatoType
	Dim arrEOFounders, i, n, arrEOCreativesCnt
	Dim strDistrictName

	Call SetFiltersWidth("col-md-6 col-lg-6 col-sm-12", "col-md-2 col-lg-2 col-sm-4", "col-md-10 col-lg-10 col-sm-8")

	Redim arrBool(1, 1)
	arrBool(0,0) = 0
	arrBool(0,1) = 1
	arrBool(1,0) = obLanguage("Common","kNo")
	arrBool(1,1) = obLanguage("Common","kYes")%>

<form method="POST" action="saveArea.asp" class="form-horizontal form-xs" name="City" onsubmit="return false;">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("Area", strAreaPar,"AreaID", strAreaID))%>
	<%DrawButtonPanel %>
	<div class="row">
		<div class="col-lg-9 col-md-12"><%
			If Not strAreaPar = "EO" Then Call DrawInputRowWithClass(obLanguage("Common","kName"), strAreaName, "NAME", "text", 40, nMaxLen, "", "FilterWhiteSpace")

			If strAreaPar = "street" Then
				Call DrawSelectInfoRow(obLanguage("Common","kStreetType"), nAtoTypeID, "ATO_TYPEID", objAtoTypes, "ATO_TYPEID", "FULLNAME", Null, "")
			ElseIf strAreaPar = "city" Then
				rw WriteHiddenTags(Array("KLADR", strKladr, "ATT", nAtoTypeID, "CITYNAME", strAreaName, "PROVID", nProvinceID))
				Call DrawSelectInfoRow(obLanguage("ServAdmin","kSettlementType"), nAtoTypeID, "ATO_TYPEID", objAtoTypes, "ATO_TYPEID", "FULLNAME", Null, "")
				Call DrawSelectInfoRow(obLanguage("ServAdmin","kCommonSettlementType"), nSettlementTypeID, "SETTLEMENTTYPEID", objSettlementTypes, "SETTLEMENTTYPEID", "SETTLEMENTTYPENAME", Null, "")

				If Not objRs.EOF Then
					TestError obLanguage("ServAdmin","kErrStates")
					Call DrawSelectInfoRow(obLanguage("Common","kProvince"), nProvinceID, "Province", objRs, "ProvinceID", "ProvinceNAME", obLanguage("Common","kNo"), "")
				End If
				Call DrawSelectInfoRow(obLanguage("ServAdmin", "kRefersToTheCity"), nParentCityID, "AvailableParentCity", objAvailableParentCity, "CITYID", "CITYNAME", obLanguage("Common","kNo"), "")
				Call DrawSelectInfoRow(obLanguage("ServAdmin", "kAvailabilityOfStreet"), bAvailabilityOfStreet, "AvailabilityOfStreet", arrBool, "", "", null, null)
			ElseIf strAreaPar = "EO" Then

				If Not IsDull(Request("EOFID")) Then
					strIDs = Request("EOFID")
				Else
					strIDs = ""
					If CLng(strAreaID) > 0 Then
						While Not objFounders.EOF
							If Not IsDull(objFounders("EOID")) Then
								If strIDs <> "" Then strIDs = strIDs & ","
								strIDs = strIDs & objFounders("FOUNDERID")
							End If
							objFounders.MoveNext
						Wend
						If objFounders.EOF And Not objFounders.BOF Then objFounders.MoveFirst
					End If
				End If
				rw WriteHiddenTags(Array( "EditSchoolID", Request("EditSchoolID"), "act", Request("act"), "NP3", "", "EOFID", strIDs, "CRTCNT", Request("CRTCNT")))

				If Not bRO Then
					Call DrawInputRowWithClass(obLanguage("ServAdmin","kShortEOName"), strAreaName, "NAME", "text", 50, 200, "", "FilterWhiteSpace")
				Else
					Call DrawReadonlyRow( obLanguage("ServAdmin","kShortEOName"), strAreaName )
				End If

				If bRelatedSchoolExist Then
					If Not bRO Then
						Call DrawInputRowWithClass(obLanguage("ServAdmin","kFullEOName"), strFullSchoolName, "FullName", "text", 200, 200, "", "FilterWhiteSpace")
						Call DrawInputRowWithClass(obLanguage("ServAdmin","kSchoolNumber"), strSchoolNumber, "SchoolNumber", "text", 50, 200, "", "FilterWhiteSpace")
					Else
						Call DrawReadonlyRow(obLanguage("ServAdmin","kFullEOName"), strFullSchoolName)
						Call DrawReadonlyRow(obLanguage("ServAdmin","kSchoolNumber"), strSchoolNumber)
					End If
				End If
				OpenFormGroup obLanguage("Common","kCity")
					%><div class="input-group input-group-sm">
						<input type="text" class="form-control " disabled value="<%=strCityName%>">
						<%If Not bRO Then%>
							<span class="input-group-btn">
								<%ButtonEdit "importKLADR();", obLanguage("Common","kChange")%>
							</span>
						<%End If%>
					</div><%
				CloseFormGroup

				If bRelatedSchoolExist Then
					If Not bRO Then
						Set objRs = objNSNET.GetDistricts(nCityID)
						Call DrawSelectInfoRow(obLanguage("Common","kDistrict"), nDistrictID, "District", objRs, "DISTRICTID", "DISTRICT", " ", " ")
					Else
						strDistrictName = ""
						If CLng(nDistrictID) > 0 Then strDistrictName = objNSNET.GetDistrictName(nDistrictID)

						Call DrawReadonlyRow(obLanguage("Common", "kDistrict"), strDistrictName)
					End If
				End If

				Call DrawEOTypes
				Call DrawEOForms

				If Not bRO Then
					Call DrawSelectInfoRow( obLanguage("ServAdmin","kLegalForm"), strEOLegalFormID, "EOLEGALFORMID", objEOLegalForms, "EOLEGALFORMID", "NAME", Null,"dataChanged();" )
					Call DrawSelectInfoRow( obLanguage("ServAdmin","kLegalForm83"), strEOLegalFormID83, "EOLEGALFORM83ID", objEOLegalForms83, "EOLEGALFORM83ID", "NAME", " ","dataChanged();" )
				Else
					Call DrawReadonlyRow( obLanguage("ServAdmin","kLegalForm"), strEOLegalFormName )
					Call DrawReadonlyRow( obLanguage("ServAdmin","kLegalForm83"), strEOLegalForm83Name )
				End If

				OpenFormGroup obLanguage("ServAdmin","kFounders")
					%>
					<div class="row">
						<div class="col-md-12"><%
							If Not bRO Then
								Call DrawContextButtons(Array("changeFounders()", "", "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")
							End If
							If bEmptyFounders Then
								DrawInfo obLanguage("ServAdmin", "kNoFounders"), False
							Else
								n = 0
								If Not IsDull(strIDs) Then
									arrEOFounders = Split(strIDs, ",")%>
									<ul><%
										While Not objFounders.EOF
											For i = 0 To UBound(arrEOFounders)
												If GetSafeLng(arrEOFounders(i), 0) = objFounders("FOUNDERID") Then
													n = n + 1%>
													<li><%=DB2HTML(objFounders("FNAME"))%></li><%
												End If
											Next

											objFounders.MoveNext
										Wend%>
									</ul><%

									If n = 0 Then
										DrawInfo obLanguage("ServAdmin", "kNoFounders"), False
									End If
								Else
									DrawInfo obLanguage("ServAdmin", "kNoFounders"), False
								End If
							End If%>
						</div>
					</div>
				<%CloseFormGroup

				OpenFormGroup obLanguage("ServAdmin","kCreatives_w")
					If CInt(nEOTypeID) <> 3 Then
						%>
						<div class="row">
							<div class="col-md-12"><%
								n = 0
								If Not bRO Then
									Call DrawContextButtons(Array("goCreatives()", "", "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")
								End If
								If Not IsDull(Request("CRTCNT")) Then
									arrEOCreativesCnt = Split(Request("CRTCNT"), ",")%>
									<ul><%
										For i = 0 To UBound(arrEOCreativesCnt)
											If objCreatives.EOF Then objCreatives.MoveFirst

											While Not objCreatives.EOF
												If objCreatives("TYPEID") = i + 1 And Clng(arrEOCreativesCnt(i)) > 0 Then
													n = n + 1%>
													<li><%=DB2HTML(objCreatives("TYPENAME"))%></li><%
												End If

												objCreatives.MoveNext
											Wend
										Next%>
									</ul><%

									If n = 0 Then
										DrawInfo obLanguage("ServAdmin", "kNoCreatives"), False
									End If
								Else
									If CLng(strAreaID) > 0 Then%>
										<ul><%
											While Not objCreatives.EOF
												If objCreatives("TEAMCOUNT") > 0 Then
													n = n + 1%>
													<li><%=DB2HTML(objCreatives("TYPENAME"))%></li><%
												End If

												objCreatives.MoveNext
											Wend%>
										</ul><%

										If n = 0 Then
											DrawInfo obLanguage("ServAdmin", "kNoCreatives"), False
										End If
									Else
										DrawInfo obLanguage("ServAdmin", "kNoCreatives"), False
									End If
								End If%>
							</div>
						</div><%
					Else
						Dim rsOtrasl

						Set rsOtrasl = objNSNET.GetOtrasls()
						Call DrawSelectRs(rsOtrasl, "Otrasl", "ITEMID", "ITEMNAME", nOtraslID, "", "")
					End If
				CloseFormGroup

			ElseIf strAreaPar = "founder" Then
				WriteHiddenTags(Array("tree", "", "tree1", "", "NP3", ""))

				Call DrawInputRowWithClass(obLanguage("Common","kShortName"), strShortName, "SHORTNAME", "text", 40, 50, "", "FilterWhiteSpace")

				strFunc = ""
				If MODULE_EM Then
					strFunc = "changeType();"

					If Not bNewFounder Then
						If CLng(nFounderTypeID) <> CLng(kEducManagement) Then strFunc = ""
					End If
				End If

				Call DrawSelectNamedEntitiesArrRow(obLanguage("ServAdmin","kFounderType"), nFounderKindID, "FKINDID", arrFounderKinds.ToArray(), Null, "")

				If MODULE_EM Then
					If bNewFounder Then
						Call DrawSelectNamedEntitiesArrRow(obLanguage("ServAdmin","kHasSystemAccount"), IIF(nFounderTypeID = 0, null, nFounderTypeID), "FTYPEID", arrFounderTypes.ToArray(), Null, "changeType();")
					Else
						Call DrawReadonlyRow(obLanguage("ServAdmin","kHasSystemAccount"), strFounderType)
					End If
				End If

				If nFounderTypeID = kEducManagement Then
					'Call DrawSimpleFilterRow(obLanguage("ServAdmin","kHierarchyLevel"), "HLEVEL", Array(kMixedLevel,obLanguage("ServAdmin","kMixed"), kProvinceLevel,obLanguage("ServAdmin","kOfProvince"), kCityLevel,obLanguage("ServAdmin","kOfCity"), kDistrictCityLevel,obLanguage("ServAdmin","kOfDistrictCity")), nLevel, Null, "changeType()")
					OpenFormGroup obLanguage("ServAdmin","kHierarchyLevel")
						Dim arrLevels

						If bCanChangeType Then
							arrLevels = Array(kMixedLevel, obLanguage("ServAdmin","kMixed"), kProvinceLevel, obLanguage("ServAdmin","kOfProvince"), kCityLevel, obLanguage("ServAdmin","kOfCity"), kDistrictCityLevel, obLanguage("ServAdmin","kOfDistrictCity"))
						Else
							Select Case nLevel
							Case kMixedLevel
								arrLevels = Array(nLevel, obLanguage("ServAdmin","kMixed"))
							Case kProvinceLevel
								arrLevels = Array(nLevel, obLanguage("ServAdmin","kOfProvince"))
							Case kCityLevel
								arrLevels = Array(nLevel, obLanguage("ServAdmin","kOfCity"))
							Case kDistrictCityLevel
								arrLevels = Array(nLevel, obLanguage("ServAdmin","kOfDistrictCity"))
							End Select
						End If

						arrLevels = convert1Dto2D(arrLevels)
						Call DrawSelectArr(arrLevels, "HLEVEL", nLevel, Null, "changeType();")

						If nLevel = kDistrictCityLevel Then%>
							<br /><%
							DrawSelectRs objRs, "City", "CITYID", "NAME", nCityID, Null, strFunc
						Else
							WriteHiddenTags(Array("City", nCityID))
						End If
					CloseFormGroup

					If obContext.ServerSettings.SystemSettings.EnableCertificatesDO Then
						If (nLevel = kDistrictCityLevel Or nLevel = kProvinceLevel Or nLevel = kCityLevel) And nFounderTypeID = 1 Then
							If bExistsEmCertificates Then
								Call DrawReadonlyRow(obLanguage("ServAdmin","kMunicipalityCode"), strMunicipalityCode)
							Else
								Call DrawInputRowEx(obLanguage("ServAdmin","kMunicipalityCode"), strMunicipalityCode, "MunicipalityCode", "text", 100, 2, "", "onkeypress=""return isOnlyDigits(event)""")
							End If
						End If
					End If

					Call DrawSelectInfoRow(obLanguage("ServAdmin","kParentEM"), nParentFounderID, "ParentFounder", rsParentFounders, "FOUNDERID", "FNAME", obLanguage("Common","kNo"), "")

					Call DrawSubordinateEMs()
					OpenFormGroup obLanguage("ServAdmin","kSchoolList")

					If bNoSchools Then%>
						<%=obLanguage("ServAdmin","kNoOUInRegion")%>
						<input type="hidden" id="Hidden1" value="-1"/><%
					Else
						If nLevel = kMixedLevel Then%>
							<div class="row text-center">
								<b><%=strHeader%></b>
							</div>
							<div class="row">
								<div class="col-md-6">
									<%Call DrawTree(strTreeID, strOU & obLanguage("ServAdmin","kOfProvince") & ":", "PROVINCENAME", "PROVINCEID")%>
								</div>
								<div class="col-md-6">
									<%Call DrawTree(strTreeID & "1", strOU & obLanguage("ServAdmin","kOfCity") & ":", "CNAME", "CITYID")%>
								</div>
							</div><%
						Else
							Call DrawTree(strTreeID, strHeader, strCategoryName, strCategoryID)
						End If
					End If
					CloseFormGroup

					If strAreaID < 0 Then
						Call DrawInputRow("*** " & obLanguage("Common","kUserName"), "", "LON", "text", kMaxLogin, kMaxLogin, "")
						Call DrawInputRow("*** " & obLanguage("Common","kPassword"), "", "NP", "password", kMaxPassword, kMaxPassword, "")
						Call DrawInputRow("*** " & obLanguage("Common","kConfirmPassword_"), "", "NP2", "password", kMaxPassword, kMaxPassword, "")
					End If
				End If%>
			<%End If

			If strAreaPar = "EO" And Not isDull(strRelatedSchoolID) Then
				OpenFormGroup ""%>
					<label class="checkbox">
						<input name="hideSchool" type="checkbox" value="1" onClick="HideSchool(this)"<%
						If bHidden Then%>checked<%End If%>>
						<%=obLanguage("SchoolSettings","kHideSchool")%>
					</label><%
				CloseFormGroup
			End If 
			
			If strAreaPar = "founder" Then
				Call DrawCheckBox(obLanguage("ServAdmin", "kIsAuthority"), "ISAUTHORITY", "0", bIsAuthority, "ShowAuthorityType()")
				Call DrawSelectNamedEntitiesArrRow(obLanguage("ServAdmin","kAuthorityType"), nAuthorityTypeID, "AUTHORITYTYPEID", arrAuthorityTypes.ToArray(), obLanguage("Common","kNo"), "")
				If bModuleNationOlympiad Then
					Call DrawCheckBox(obLanguage("EM", "kIsNationOlympOrg"), "NATIONOLYMPORG", "0", bNationOlympOrg, "dataChanged();")
				End If
			End If

			%>
		</div>
	</div>
</form><%
	RestoreDefFiltersWidth
End Sub

Sub DrawTree(treeID, theHeader, theCategoryName, theCategoryID)
	Dim strCategoryValue, bNewCategory
	Dim strName, bSchoolUsed
	Dim strSchoolName
	Dim bOwnedByChild
	Dim strOwner
	Dim strLiClass
	Dim strData

	If rsSchools.EOF Then Exit Sub
	If IsDull(rsSchools(theCategoryID)) Then Exit Sub
	bNewCategory = True
	strCategoryValue = ""
	%>
	<label><b><%=theHeader%></b></label>
	<div id="<%=treeID%>" style="font-size: 12px;">
		<ul>
			<%
			Do While Not rsSchools.EOF
				If IsDull(rsSchools(theCategoryID)) Then Exit Do
				strLiClass			= ""
				strData				= ""
				bSchoolUsed			= (rsSchools("ISUSED") = 1)
				If bSchoolUsed Then strLiClass = "selected"
				bNewCategory		= (strCategoryValue <> rsSchools(theCategoryID))
				strSchoolName		= rsSchools("SCHOOLNAME")
				strOwner			= rsSchools("OWNER")
				bOwnedByChild		= Not IsDull(strOwner)

				If bOwnedByChild Then
					strSchoolName		= strSchoolName & " <b>(" & obLanguage("Common","kEMShortName") & ": " & strOwner & "</b> )"
					strData				= "data=""hideCheckbox: true, unselectable: true, tooltip: 'используется другим', addClass:'childrenOwned'"""
					strLiClass			= strLiClass & " unselectable"
				End If

				If Not IsDull(rsSchools(theCategoryName)) Then
					If bNewCategory Then
						If Not IsDull(strCategoryValue) Then rw "</ul></li>"
						strCategoryValue	= rsSchools(theCategoryID)
						strName				= rsSchools(theCategoryName)
						%><li id="<%=theCategoryID & "_" & strCategoryValue%>" class="folder"><%=strName %><%
						rw "<ul>"
					End If
					%><li id="<%=rsSchools("SCHOOLID")%>" class="<%=strLiClass%>" <%=strData%>><%=strSchoolName%></li><%
				Else
					If bNewCategory Then
						strCategoryValue = rsSchools(theCategoryID)
						rw obLanguage("ServAdmin", "kNotTiedToTheDistrict") & ":<br>"
					End If

					rw " - " & strSchoolName & "<br>"
				End If

				rsSchools.MoveNext
			Loop
			If Not IsDull(strCategoryValue) Then rw "</ul></li>"%>
		</ul>
	</div><%
End Sub

Sub DrawEOTypes
	Dim objInfo, strEOTypeName

	OpenFormGroup obLanguage("Common","kEOType")

	If objEOTypes.RecordCount > 1 Then
		If Not bRO Then
			Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(objEOTypes, "FULLNAME", Array("CLASSIFIERCODE", "NAME"), "{0} {1}")

			Call DrawSelectRs(objEOTypes, "EOTYPEID", "EOTYPEID", "FULLNAME", nEOTypeID, Null, "changeEOType();")
		Else
			strEOTypeName = ""
			Set objInfo = objNSNET.GetEOTypeInfo(nEOTypeID)

			If Not objInfo.EOF Then
				strEOTypeName = GetSafeStr(objInfo("NAME"), -1, "")
				Response.write DB2HTML(objInfo("CLASSIFIERCODE")) & "&nbsp;" & DB2HTML(objInfo("NAME")) & "<input type=""hidden"" name=""EOTYPEID"" value=""" & nEOTypeID & """>"
			Else
				Response.write "&nbsp;"
			End If
		End If
	Else
		Response.write objEOTypes("CLASSIFIERCODE") & "&nbsp;" & objEOTypes("NAME") & "<input type=""hidden"" name=""EOTYPEID"" value=""" & objEOTypes("EOTYPEID") & """>"
	End If

	CloseFormGroup
End Sub

Sub DrawEOForms
	Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(objEOForms, "FULLNAME", Array("CLASSIFIERCODE", "NAME"), "{0} {1}")
	Call DrawRadioList(obLanguage("ServAdmin","kEOForm"), nEOFormID, "EOFORMID", objEOForms, "EOFORMID", "FULLNAME", "dataChanged();", bRO)
End Sub

Sub DrawSubordinateEMs
	If IsEmpty(rsSubordinateFounders) Then
		Exit Sub
	End If

	If rsSubordinateFounders.EOF Then
		Exit Sub
	End If

	Call DrawListRow(obLanguage("ServAdmin","kSubordinateEMs"), rsSubordinateFounders, "FNAME")
End Sub%>