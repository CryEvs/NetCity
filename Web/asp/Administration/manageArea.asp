<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/EoNames_inc.asp" -->

<% ' © 2007-2018 IRTech. All rights reserved.
Dim bKladr, kladrCode

Dim rsUA, strUA
Dim objCityRs, objRs, nAreaID, strPID, bEOF, strArea, strAreaPar, strAreaName,strID,strName, strHeader, nProvinceID, strFName
Dim bCanReplace, bCanCreate
Dim strEOID, strOldEOID
Dim objAreaInfo, bBoundWithSchool
Dim rsDistricts, bAvailabilityOfStreet, nCountryID, nCityID, nStateID, rsLocations, strBackPage

Function GetPageTitle()
	If CantCreateEO() And strAreaPar = "EO" Then
		GetPageTitle = obLanguage("ServAdmin","kEOsBR")
	Else
		GetPageTitle = IIf(bCanCreate, obLanguage("ServAdmin","kCreateOrChange"), obLanguage("Common","kChange")) &" "& strArea
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Addresses
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Addresses
 End Function

Sub ReadState()
	Dim level, cmdFounders

	strAreaPar			= Request("Area")
	strBackPage			= Request.ServerVariables("SCRIPT_NAME")
	Call obTokenMgr.SetData(strToken, "Back", strBackPage)
	If IsDull(strAreaPar) Then strAreaPar = obTokenMgr.GetData(strToken, "Area") Else Call obTokenMgr.SetData(strToken, "Area", strAreaPar)
	strPID				= Request("PID")
	bCanReplace			= True
	bCanCreate			= True
	bBoundWithSchool	= False

	Select Case strAreaPar
	Case "founder"strArea = obLanguage("ServAdmin","kFounder_2")
		If IsDull(strPID) Then strPID = GetSafe("State", -1)
		nCityID = GetSafeLng(Request("City"), obTokenMgr.GetData(strToken, "City"))
		Set objRs = objNSNET.GetFounders(strPID, -1, -1, -1)
		TestError obLanguage("ServAdmin","kErrFoundersList")
		Call obTokenMgr.SetData(strToken, "PROVINCE", GetSafe("PROVINCE",-1))
		bEOF = objRs.EOF

		If Not bEOF Then
			If IsDull(Request("Founder")) Then
				nAreaID = GetSafeLng(Request("AreaID"), GetSafeLng(Request("FID"), GetSafeLng(objRs("FOUNDERID"), Null )))
			Else
				nAreaID = GetSafeLng(Request("Founder"), Null )
			End If

			Call obTokenMgr.SetData(strToken,"Founder", nAreaID)
		Else
			RedirectTo "AddrRefs.asp", Array("PID", GetSafeLng( Request("PID"),0 ))
		End If

		bCanReplace		= False
		strID			= "FOUNDERID"
		strName			= "FNAME"
		strAreaName		= "&nbsp;"
		strHeader		= obLanguage("ServAdmin","kFounders")
	Case "EO"	strArea = obLanguage("ServAdmin","kEO_2")
		strPID = GetSafe("City", -1)
		If strPID <= 0 Then strPID = obTokenMgr.GetData(strToken, "City")
		Set objRs = objNSNET.GetCityEOList(strPID)
		TestError obLanguage("ServAdmin","kErrEOsList")
		bEOF = objRs.EOF

		If Not bEOF Then
			If IsDull(Request("EO")) Then
				If IsDull(Request("AreaID")) Then
					nAreaID = GetSafeLng(objRs("EOID"), Null)
				Else
					nAreaID = GetSafeLng(Request("AreaID"), Null)
					If nAreaID <= 0 Then nAreaID = GetSafeLng(objRs("EOID"), Null)
				End If
			Else
				nAreaID = GetSafeLng(Request("EO"), Null)
			End If
			Set objAreaInfo = objNSNET.GetEOInfo(nAreaID)
			If objAreaInfo.EOF Then nAreaID = GetSafeLng(objRs("EOID"), Null)
			Set objAreaInfo = objNSNET.GetEOInfo(nAreaID)

			If bIsDebug Then
				Set rsUA = objNSNET.GetEOArriveDepartInfo(nAreaID, True, True)
				If Not rsUA.EOF Then
					strUA = "<br><b>" & obLanguage("ServAdmin","kArrived") & ":</b>"
					strUA = strUA & "<ul>"
					Do
						strUA = strUA & "<li>" & DB2HTML(rsUA("NICKNAME")) & "</li>"
						rsUA.MoveNext
					Loop Until rsUA.EOF
					strUA = strUA & "</ul>"
				End If
				Set rsUA = objNSNET.GetEOArriveDepartInfo(nAreaID, True, False)
				If Not rsUA.EOF Then
					strUA = strUA & "<br><b>" & obLanguage("ServAdmin","kDeparted") & ":</b>"
					strUA = strUA & "<ul>"
					Do
						strUA = strUA & "<li>" & DB2HTML(rsUA("NICKNAME")) & "</li>"
						rsUA.MoveNext
					Loop Until rsUA.EOF
					strUA = strUA & "</ul>"
				End If
			End If

			Set rsUA		= objNSNET.GetEOArriveDepartInfo(nAreaID, False, True)
			strUA			= strUA & "<br><b>" & obLanguage("ServAdmin","kNumOfArrived") & ": </b>" & rsUA("CNT")
			Set rsUA		= objNSNET.GetEOArriveDepartInfo(nAreaID, False, False)
			strUA			= strUA & "<br><b>" & obLanguage("ServAdmin","kNumOfDeparted") & ": </b>" & rsUA("CNT")
			bBoundWithSchool = Not IsDull(objAreaInfo("SCHOOLID"))
			bCanReplace = Not bBoundWithSchool Or Not IsDull(objAreaInfo("HIDDEN").Value)
		End If

		strID			= "EOID"
		strName			= "EONAME"
		strAreaName		= DB2HTML(objNSNET.GetCityName(strPID))
		strHeader		= obLanguage("Common","kCity") & "</th><th>" & obLanguage("Common","kEOs")
	Case "street" strArea = obLanguage("ServAdmin","kStreet_2")
		nCityID			= GetSafeLng(Request("City"), obTokenMgr.GetData(strToken, "City"))
		Set objRs		= objNSNET.GetLocations(nCityID)
		TestError obLanguage("ServAdmin","kErrStreets")
		bEOF			= objRs.EOF

		If Not bEOF Then
			If IsDull(Request("Location")) Then
				nAreaID = GetSafeLng(Request("AreaID"), GetSafeLng(objRs("LOCATIONID"), Null))
			Else
				nAreaID = GetSafeLng(Request("Location"), Null)
			End If

			Set rsUA = objNSNET.GetStreetResidentsCount(nAreaID)
			strUA = strUA & "<small>" & obLanguage("ServAdmin","kNumOfResidents") & ": </small><strong>" & CStr(rsUA("cnt")) & "</strong>"
		End If

		strID			= "LOCATIONID"
		strName			= "LOCATION"
		strAreaName		= DB2HTML(objNSNET.GetCityName(nCityID))
		strHeader		= obLanguage("Common","kCity") & "</th><th>" & obLanguage("ServAdmin","kStreets")
	Case "district" strArea = LCase(obLanguage("Common","kDistrict")) & ":"
		nCountryID		= Clng(obTokenMgr.GetData(strToken,"Country"))
		nProvinceID		= obTokenMgr.GetData(strToken, "Province")
		nCityID			= GetSafeLng(Request("City"), obTokenMgr.GetData(strToken, "City"))
		Call obTokenMgr.SetData(strToken, "City", nCityID)
		Set objRs		= objNSNET.GetDistricts(nCityID)
		TestError obLanguage("ServAdmin","kErrDistricts")
		bEOF			= objRs.EOF

		If Not bEOF Then
			If IsDull(Request("District")) Then
				nAreaID = GetSafeLng(Request("AreaID"), GetSafeLng(objRs("DISTRICTID"),Null))
			Else
				nAreaID = GetSafeLng( Request("District"), Null )
			End If

			Set rsUA = objNSNET.GetDistrictResidentsCount(nAreaID)
			strUA = strUA & "<br><b>"& obLanguage("ServAdmin","kNumOfResidents") &": </b>" & rsUA("cnt")
		End If

		strID			= "DISTRICTID"
		strName			= "DISTRICT"
		strAreaName		= DB2HTML(objNSNET.GetCityName(nCityID))
		strHeader		= obLanguage("Common","kCity") & "</th><th>" & obLanguage("ServAdmin","kDistricts")
	Case "city"
		strArea			= LCase(obLanguage("Common","kCity")) & ":"
		nCountryID		= CLng(GetSafe("Country", 0))
		nStateID 		= CLng(GetSafe("State", 0))
		nProvinceID		= CLng(GetSafe("Province", -1))
		Set objRs		= objNSNET.GetCityList(nStateID, nProvinceID)
		TestError obLanguage("ServAdmin","kErrCitiesList")

		bEOF = objRs.EOF
		If Not bEOF Then
			nStateID	= obTokenMgr.GetData(strToken, "State")
			nCityID		= objNSNET.GetSafeStateProvinceCityID(Request("AreaID"), nStateID, nProvinceID)

			If Clng(nCityID) <= 0 Then
				nCityID = objNSNET.GetSafeStateProvinceCityID(obTokenMgr.GetData(strToken, "City"), nStateID, nProvinceID)
			End If

			If Clng(nCityID) <= 0 Then nCityID = GetSafeLng(objRs("CITYID"), Null)

			level = Request("level")
			If Not IsDull(level) Then Call obTokenMgr.SetData(strToken,"level", level)
			Call obTokenMgr.SetData(strToken,"City", nCityID)
		Else
			RedirectTo "AddrRefs.asp", Array("PID", GetSafeLng(Request("PID"),0))
		End If

		bAvailabilityOfStreet		= (Clng(objNSNET.CheckAvailableStreet(nCityID)) = 1)
		'bAvailabilityOfStreet = False
		Set objCityRs				= objNSNET.GetCityInfo(nCityID)
		Set rsDistricts				= objNSNET.GetDistricts(nCityID)
		TestError obLanguage("ServAdmin","kErrDistricts")
		Set rsLocations				= objNSNET.GetLocations(nCityID)
		TestError obLanguage("ServAdmin","kErrStreets")
		Call obTokenMgr.SetData(strToken, stBackPage, Request.ServerVariables("SCRIPT_NAME").Item & "?area=city")
		kladrCode = objCityRs("KLADRCODE")
		bKladr = Not IsDull(kladrCode)

		strID			= "CITYID"
		strName			= "NAME"
		strAreaName		= DB2HTML(objNSNET.GetStateName(nStateID))
		strHeader		= obLanguage("Common","kState") & "</th><th>" & obLanguage("Common","kProvince") & "</th><th width='40%'>" & obLanguage("ServAdmin","kCities") & "</th><th>" & obLanguage("ServAdmin","kSettlementType") & "</th><th>" & obLanguage("ServAdmin","kAvailabilityOfStreet")
		'<th>" & obLanguage("ServAdmin","kRefersToTheCity") & "</th>
	Case "province"
		strArea = LCase(obLanguage("Common","kProvince"))
		If IsDull(strPID) Then strPID = GetSafe("State", -1)
		Set objRs = objNSNET.GetProvinceList(strPID)
		TestError obLanguage("ServAdmin","kErrStates")

		bEOF = objRs.EOF
		If Not bEOF Then
			nAreaID = GetAreaId("Province", "PROVINCEID")

			level = Request("level")
			If Not IsDull(level) Then Call obTokenMgr.SetData(strToken,"level", level)
			Call obTokenMgr.SetData(strToken,"Province", nAreaID)
		End If

		strID			= "PROVINCEID"
		strName			= "PROVINCENAME"
		strAreaName		= DB2HTML(objNSNET.GetStateName(strPID))
		strHeader		= obLanguage("Common", "kState") & "</th><th>" & obLanguage("ServAdmin", "kProvinces")
	Case "state"
		strArea = LCase(obLanguage("Common","kState"))
		If IsDull(strPID) Then strPID = GetSafe("Country", -1)
		Set objRs = objNSNET.GetStateList(strPID)
		TestError obLanguage("ServAdmin","kErrStates")

		bEOF = objRs.EOF
		If Not bEOF Then
			nAreaID = GetAreaId("State", "STATE_PROVINCEID")

			level = Request("level")
			If Not IsDull(level) Then Call obTokenMgr.SetData(strToken,"level", level)
			Call obTokenMgr.SetData(strToken, "State", nAreaID)
		End If

		strID			= "STATE_PROVINCEID"
		strName			= "STATEPROVINCENAME"
		strAreaName		= DB2HTML(objNSNET.GetCountryName(strPID))
		strHeader		= obLanguage("Common", "kCountry") & "</th><th>" & obLanguage("ServAdmin", "kStates")
	Case "country"
		strArea			= obLanguage("ServAdmin", "kCountry_2")
		strPID			= ""
		Set objRs		= objNSNET.GetCountryList()
		TestError obLanguage("ServAdmin", "kErrCountries")

		bEOF = objRs.EOF
		If Not bEOF Then
			nAreaID = GetAreaId("Country", "CountryID")
			on error resume next
			objNSNET.GetCountryName(nAreaID)
			If err.number<>0 Then
				err.clear
				nAreaID=GetSafeLng(objRs("CountryID"), Null)
			End If
			level = GetSafeStr(Request("level"), -1, strAreaPar)
			If Not IsDull(level) Then Call obTokenMgr.SetData(strToken, "level", level)
			Call obTokenMgr.SetData(strToken, "Country", nAreaID)
		End If

		strID			= "COUNTRYID"
		strName			= "COUNTRYNAME"
		strAreaName		= "&nbsp;"
		strHeader		= "&nbsp;</th><th>" & obLanguage("Common", "kCountry")
	Case Else GenerateError obLanguage("Common","kInvalidParameter")
	End Select
End Sub

Function GetAreaId(strAreaName, strAreaNameRs)
	If IsDull(Request(strAreaName)) Then
		If IsDull(Request("AreaID")) Or Request("AreaID") = "-1" Then
			If Not IsDull(obTokenMgr.GetData(strToken, strAreaName)) Then
				GetAreaId = obTokenMgr.GetData(strToken, strAreaName)
			Else
				GetAreaId = GetSafeLng(objRs(strAreaNameRs), Null)
			End If
		Else
			GetAreaId = CLng(Request("AreaID"))
		End If
	Else
		GetAreaId = CLng(Request(strAreaName))
	End If
End Function

Sub onHeadSpecial()%>
<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>
<SCRIPT><!--
	$(function() {
		var kladrSelect = $('select[name=AreaID]');
		kladrSelect.select2({language: "ru"});
	});

	function createArea() {
	var action = "createArea.asp?AreaID=-1&Area=<%=strAreaPar%>";
	DoSubmit( document.mainForm, action);
}

function manageArea(theArea) {DoSubmit( document.mainForm, "manageArea.asp?Area=" + theArea); }

function createCityRefBook(theArea) {
	var action = "createArea.asp?AreaID=-1&Area=" + theArea;
		ok_check_db("mainForm", action);
}

function editArea() {
	<%If strAreaPar = "city" Then%>
		var action = "createArea.asp?Area=<%=strAreaPar%>&AreaID=" + $('[name=AreaID]').val();
	<%Else%>
		var action = "";
	<%End If%>

	ok_check_db("mainForm",action);
}

function deleteArea() {
	$.show.confirmation(language.Generic.ServAdmin.kConfirmDeleteElement).then(function() {
		var form = document.mainForm;
		var data = {
			Area: '<%=strAreaPar%>',
		};
		jsSaveForm(form, data, '/asp/Administration/deleteArea.asp')
			.then(function(response) { 
					//alert(response.message); dataWereChanged=false;
					DoSubmit(form, "<%=strScriptName%>");
				});
		//var action = "saveArea.asp?Remove=1";
		<%If strAreaPar = "city" Then%>
			//action += "&Area=<%=strAreaPar%>&AreaID=" + $('[name=AreaID]').val();
		<%End If%>

		//ok_check_db("mainForm",action);
	});
}

function Back() {
	var backPage;

	<%If strAreaPar = "district" Or strAreaPar = "street" Then%>
		backPage = '<%=strBackPage&"?Area=city"%>';
	<%Else%>
		backPage = 'AddrRefs.asp';
	<%End If%>

	goBack(document.mainForm, backPage);
}

function replaceArea() {
	if(isDBBusy()) return false;

	if(document.mainForm.AreaID.type == "hidden") {
		alert(language.Generic.ServAdmin.kMoreThanOne);

		return false;
	}
	ok_check_db("mainForm", "replaceArea.asp");
}

function makeProvince() {
	if(isDBBusy()) return false;<%

	If nProvinceID > 0 Then%>
		alert(language.Generic.ServAdmin.kOnlyIfNotProvince);<%
	Else%>
	var form = document.mainForm;
	var el = form.AreaID;

	if(el.type != "hidden") {
		alert(language.Generic.ServAdmin.kOnlyOne);

		return false;
	}

	$.show.confirmation(language.Generic.ServAdmin.kConfirmMakeProvince + '.\n' + language.Generic.Common.kMsgAreYouSure).then(function() {
		var data = {
			Area: '<%=strAreaPar%>',
			Move: 1
		};
		jsSaveForm(form, data, '/asp/Administration/deleteArea.asp')
			.then(function(response) { 
					DoSubmit(form, "<%=strScriptName%>");
				});
	});<%
	End If%>
}

function EOTemplate() {
	if(isDBBusy()) return false;

	var form = document.mainForm;
	$.show.confirmation(language.Generic.ServAdmin.kConfirmAddTemlates + '. ' + language.Generic.Common.kMsgAreYouSure).then(function(){
		ok_check_db("mainForm","saveArea.asp?Move=2");
	});
}

<%If bKladr Then%>
	var Wnd = null;
	function importKLADR(theArea) {
		var url = urlHelper.makeUrl("/asp/Administration/ImportKLADR.asp", { area: theArea });
		var winOptions = { url: url, name: '_blank', specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=800,height=520', winChild: Wnd };
		windowOpen( winOptions );
		Wnd = winOptions.winChild;
		if (Wnd) center(Wnd, 500, 520);
	}
<%End If%>;
//--></SCRIPT>
<%End Sub

Sub DrawButtons()
	Dim enableChange
	enableChange= Not(nAreaID = 2 and strAreaPar="country")

	If Not CantCreateEO() Or strAreaPar = "founder" Then
		If strAreaPar = "EO" Then 
			Button "EOTemplate()", obLanguage("ServAdmin","kAddTemlates"), obLanguage("ServAdmin","kAddTemlates"), "glyphicon glyphicon-file"
		End If

		If enableChange and Not bEOF Then ButtonEdit "editArea();", obLanguage("Common","kChange")
		If bCanCreate Then ButtonAdd "createArea();", obLanguage("ServAdmin","kAddItem")

		If enableChange and Not bEOF Then
			If bCanCreate And Not bBoundWithSchool Then ButtonDel "deleteArea();", obLanguage("Common","kRemove")
			If bCanReplace Then SimpleButton "replaceArea()", obLanguage("ServAdmin","kReplace")
			If nCountryID <> 2 And strAreaPar = "district" Then SimpleButton "makeProvince()", obLanguage("ServAdmin","kMakeProvince")
		End If
	Else
		If Not bEOF Then
			ButtonView "editArea();", obLanguage("Common","kView")
		End If
	End If
End Sub

Sub onDrawPage()
	Dim nCurrFounder, arrEOS, parentCityName
	Call DrawButtonPanel()
	%><div class="row">
		<div class="col-md-12">
			<form method="POST" class="form-horizontal" action="createArea.asp" name="mainForm">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("PID", strPID, "PROVINCEID", nProvinceID))%>
				<table class="table table-bordered table-condensed">
					<tr>
						<th width='15%'><%=strHeader%></th>
					</tr>
					<tr><%
						If Not strAreaPar = "founder" Then%><td><%=strAreaName%></td><%End If%>
						
						<td><%
							If Not bEOF Then
								Select Case strAreaPar
								Case "city"
									If nProvinceID > 0 Then
										Response.write DB2HTML(objNSNET.GetProvinceName(GetSafeLng(Request("Province"), obTokenMgr.GetData(strToken, "Province")))) & "</td><td>"
									Else
										Response.write obLanguage("Common","kNo") & "</td><td>"
									End If

									DrawSelectRs objRs, "AreaID", strID, strName, nCityID, Null, "OnChangeSelect('mainForm','" & Request.ServerVariables("SCRIPT_NAME") & "?Area=" & strAreaPar & "');"
									Response.write "</td><td>" & DB2HTML(objNSNET.GetCitySettlementTypeName(nCityID))
									parentCityName = objCityRs("PARENTCITYNAME")

									' If Not IsDull(parentCityName) Then
										' Response.write "</td><td>" & DB2HTML(parentCityName)
									' Else
										' Response.write "</td><td>" & obLanguage("Common","kNo")
									' End If

									Response.write "</td><td>" & obLanguage("Common", IIf(bAvailabilityOfStreet ,"kYes", "kNo"))
								Case "EO"
									arrEOS = objRs.GetRows(,,Array("EOID", "EONAME", "EOLEGALFORMID", "EOLEGALFORM83ID", "EOTYPEID", "EOFORMID"))%>
									<select name="AreaID" class="form-control" size="15" onChange="<%="OnChangeSelect('mainForm','"&Request.ServerVariables("SCRIPT_NAME")&"');"%>"><%
										PopulateSelectArrayEOs arrEOS, nAreaID%>
									</select><%
								Case Else
									DrawSelectRs objRs, "AreaID", strID, strName, nAreaID, Null, IIF((strAreaPar <> "founder"), "OnChangeSelect('mainForm','" & Request.ServerVariables("SCRIPT_NAME") & "');", "")
								End Select
							Else
								Response.Write obLanguage("Common","kNo") & IIF(strAreaPar = "city", "</td><td>&nbsp;", "")
							End If%>
						</td>
					</tr>
				</table>
				<%If strAreaPar = "city" Then
					OpenPanelEx obLanguage("ServAdmin","kCityRefBook"), "CityRefBook", "", False, "panel-warning"
					%><table class="table table-bordered table-condensed">
						<tr>
							<th><%=obLanguage("ServAdmin","kDistricts")%></th>
							<th><%=obLanguage("ServAdmin","kStreets")%></th>
						</tr>
						<tr>
							<td><%
								Dim objCityInfoRs
								Set objCityInfoRs = objNSNET.GetCityInfo(nCityID)
								If objCityInfoRs("ATO_TYPEID") = objNSNET.GetAtoTypeID("г", 4) Then
								If rsDistricts.EOF Then%>
									<select name="District" size="15" class="form-control" style="width: 100%" ></select><br><%
										ButtonAdd "createCityRefBook('district');", obLanguage("ServAdmin","kAddItem")
								Else%>
									<select name="District" size="15" class="form-control" style="width: 100%"><%
										PopulateSelect rsDistricts, "DISTRICTID", "DISTRICT", ""
									%></select><br /><%
										ButtonEdit "manageArea('district');", obLanguage("Common","kChange")
								End If
								End If%>&nbsp;
							</td>
							<td><%
								If bAvailabilityOfStreet Then
									If rsLocations.EOF Then%>
										<select name="Location" size="15" class="form-control" style="width: 100%"></select><br><%ButtonAdd "createCityRefBook('street');", obLanguage("ServAdmin","kAddItem")
									Else%>
										<select name="Location" size="15" class="form-control" style="width: 100%"><% PopulateSelect rsLocations,"LOCATIONID","LOCATION", ""%></select><br><%
										ButtonEdit "manageArea('street');", obLanguage("Common","kChange")
									End If
								Else%><br>
									<%=DB2HTML_BR(obLanguage("Common","kNotAvailabilityOfStreets"))%>
								<%End If%>
							</td>
						</tr><%
						If bKladr Then%>
							<tr><td>&nbsp;</td><td><%=ShowAnchor ("importKLADR('street');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "") %></td></tr><%
						End If%>
					</table><%
					ClosePanel
				End If%>
			</form>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6"><%
			If strAreaPar = "EO" And bBoundWithSchool Then
				Response.Write DB2HTML_BR(obLanguage("ServAdmin", "kEOCantBeDeletedOrReplaced"))
			End If

			Response.Write strUA%>
		</div>
	</div><%
End Sub%>