<!-- #INCLUDE VIRTUAL="/asp/Administration/AddrLevel_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/DateInput.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.
Const kLength = "200"

Dim strEditUserID, strBackPage, strAddressID
Dim strParentCityID, bAvailabilityOfStreet, strDistrictID, strLocationID, strHouse, strCorp, strRoom, strZipCode
Dim rsLocations, rsDistricts
Dim bSelfPage, bCanSave
Dim strIsFactAddress, strAddressType
Dim objNeighbours, bNeighbours
Dim bDrawKLADRLinks
Dim bKladr
Dim strMode, bFiasMode

Dim bIsTempAddr, dateExpiryDate, regDate, docNumber

Function GetPageTitle()
	GetPageTitle = IIf(strIsFactAddress, obLanguage("Common","kHomeAddress"), obLanguage("Common","kRegistrationAddress")) & " " & GreenText(DB2HTML(objNSNET.GetUserNickName(strEditUserID)))
End Function

Sub ReadState()
	strMode = GetSafeStr(Request("mode"), -1, "fias")
	bFiasMode = (strMode = "fias")
	strEditUserID = GetSafeID(Request("UID"), Null)
	strBackPage = Request("BackPage")
	strIsFactAddress = GetSafeLng(Request("IsFactAddress"), Null)
	strAddressType = Request("AddressType")(1)
	If IsEmpty(strBackPage) Then
		strBackPage = Request.ServerVariables("HTTP_REFERER")
	End If
	bSelfPage = (CStr(Request("Self_AddressInfoEdit")) = "1") And Request("Country").Count <> 0
End Sub

Sub Main()
	Dim objSchoolInfo, objInfo
	Dim objCity
	bCanSave = True
	Set objInfo = objNSNET.GetUserAddress(strEditUserID, strIsFactAddress)
	IF objInfo.EOF THEN
		bIsTempAddr = FALSE
		dateExpiryDate = DATE
		regDate = DATE
	ELSE
		bIsTempAddr = objInfo("ISTEMP")
		dateExpiryDate = objInfo("EXPIREDATE")
		regDate = objInfo("REGDOCDATE")
		docNumber = objInfo("REGDOCNUMBER")
		IF ISDULL(dateExpiryDate) THEN
			dateExpiryDate = DATE
		END IF
		IF ISDULL(regDate) THEN
			regDate = DATE
		END IF
	END IF

	If bFiasMode Then Exit Sub

	bNeighbours = False
	If Not objInfo.EOF Then
		strAddressID = objInfo("ADDRESSID")
		Set objNeighbours = objNSNET.GetUsersWithSameAddress(strEditUserID, strAddressID, strIsFactAddress)
		bNeighbours = Not objNeighbours.EOF
	End If

	bCanSave = False
	Set rsCountries = objNSNET.GetCountryList()
	If rsCountries.EOF Then Exit Sub
	If bSelfPage Then
		' enter from this page via filter change
		ReadLevel

		bDrawKLADRLinks = bUseKLADR And (nCountryID = 2)
		if level = "city"  Or level = "street" Or nCityID > 0 Then
			bAvailabilityOfStreet = objNSNET.CheckAvailableStreet(nCityID) = 1
			Set rsDistricts = objNSNET.GetDistricts(nCityID)
			TestError obLanguage("SetupSchoolUI","kErrDistrictList")

			If bAvailabilityOfStreet Then
				If level = "" Or level = "street" Then
					strLocationID = obTokenMgr.GetData(strToken,"Street_")
					If IsDull(strLocationID) Then
						strLocationID = GetSafeID(obTokenMgr.GetData(strToken,"Street"), 0)
					Else
						Call obTokenMgr.SetData(strToken,"Street_", "")
					End If
				Else
					strLocationID = "0"
				End If
			End If
		End If
		strHouse = GetSafeStr(Request("House"), -1, "")
		strCorp = GetSafeStr(Request("Corp"), -1, "")
		strRoom = GetSafeStr(Request("Room"), -1, "")
		strZipCode = GetSafeStr(Request("ZipCode"), -1, "")
	Else
		' enter from outside
		If Not IsDull(strAddressID) Then
			nCountryID = objInfo("COUNTRYID")
			nStateID = objInfo("STATE_PROVINCEID")
			nProvinceID = GetSafeLng(objInfo("PROVINCEID"),-1)
			nCityID = objInfo("CITYID")

			strParentCityID = objInfo("PARENTCITYID")
			bAvailabilityOfStreet = objInfo("AVAILABILITYOFSTREET") = 1
			strDistrictID = objInfo("DISTRICTID")
			If bAvailabilityOfStreet Then strLocationID = objInfo("LOCATIONID")
			strHouse = objInfo("HOUSE")
			strCorp = objInfo("CORP")
			strRoom = objInfo("ROOM")
			strZipCode = objInfo("ZIPCODE")
		Else
			Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
			nCityID = objSchoolInfo("CITYID")
			Set objCity = objNSNET.GetCityInfo(nCityID)
			nCountryID = objCity("COUNTRYID")
			nStateID = objCity("STATE_PROVINCEID")
			nProvinceID = GetSafeLng(objCity("PROVINCEID"),-1)
			
			bAvailabilityOfStreet = objNSNET.CheckAvailableStreet(nCityID) = 1
			strDistrictID = objSchoolInfo("DISTRICTID")
			strLocationID = "0"
			strHouse = ""
			strCorp = ""
			strRoom = ""
			strZipCode = ""
		End If
		bDrawKLADRLinks = bUseKLADR And (nCountryID = 2)
		
		InitStatesProvinsesCities
		WriteStateData
		If rsCities.EOF Then Exit Sub
		If nCityID = "0" Then nCityID = GetSafeID(rsCities("CITYID"), Null)
		Set rsDistricts = objNSNET.GetDistricts(nCityID)
	End If
	If nCityID<=0 Then Exit Sub
		
	If IsEmpty(objCity) Then Set objCity = objNSNET.GetCityInfo(nCityID)
	bKladr = Not IsDull(objCity("KLADRCODE"))
	Set rsLocations = objNSNET.GetLocations(nCityID)
	If rsLocations.EOF And bAvailabilityOfStreet Then Exit Sub
	bCanSave = True
End Sub

Sub onSpecialHead()
	Call scriptCalendar( "UserInfo", Empty, Empty )

	%>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>

	<script><!--
		var mode = "<%=strMode%>";
		var neighbours = <%=Bool2Js(bNeighbours)%>;
		var bAvailabilityOfStreet = <%=Bool2Js(bAvailabilityOfStreet)%>;
		var strUserId = <%=strUserId%>;
		var strEditUserID = <%=strEditUserID%>;
		var strSchoolId = <%=strSchoolId%>;
		var strCurrYearId  = <%=strCurrYearId%>;
		var strCurrGlobalYearId  = '<%=strCurrGlobalYearId%>';
		var strAddressType = '<%=strAddressType%>';

		$(function() {
			$("select").each(function(){
				var jqSelect = $(this);
				var options = {
					language: "ru"
				};
				//поиск плейсхолдера
				/*
				var placeHolderOption = $("option[value=-1]", this).eq(0);
				if (placeHolderOption.length) {
					var placeHolderText = placeHolderOption.text();
					//отбрасываем значения Нет и Все поскольку это опция для выбора, а не сопроводительные подписи
					var usedRegExp = new RegExp(language.Generic.Common.kNo + "|-|" + language.Generic.Common.kAll, "i");
					var usedOption = usedRegExp.test(placeHolderText);
					if (!usedOption) {
						var unselected = placeHolderOption.prop("selected");
						placeHolderOption.remove();
						options.placeholder = placeHolderText;
						if(unselected) jqSelect.val("");
					}
				}*/
				jqSelect.select2(options);
			})
		});

		function OnChangeFilter(theArea) {
			document.UserInfo.level.value = theArea;
			DoSubmit(document.UserInfo, '<%=strScriptName%>');
		}

		var Wnd = null;
		function importKLADR(theArea) {
			var url = urlHelper.makeUrl("/asp/Administration/ImportKLADR.asp", { area: theArea });
			var winOptions = { url: url, name: '_blank', specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=820,height=620', winChild: Wnd };
			windowOpen(winOptions);
			Wnd = winOptions.winChild;

			if (Wnd) center(Wnd, 500, 520);
		}

		function Back() {
			goBack(document.UserInfo, '');
		}

		function fiasMode() {
			document.UserInfo.mode.value = "";
			DoSubmit(document.UserInfo, '<%=strScriptName%>');
		}

		function simpleMode() {
			document.UserInfo.mode.value = "simple";
			DoSubmit(document.UserInfo, '<%=strScriptName%>');
		}
	//--></script>

	<script type="text/javascript" src="<%=GetVersionedResLink("/static/dist/pages/users/js/addressEdit.js")%>"></script>
	<%
End Sub

Sub DrawButtons()
	If bCanSave Then ButtonSave "AddressEdit.SaveAddress();", obLanguage("Common","kSave")
	%><div id="edit-btns-block" class="<%=IIF(bFiasMode, "hide", "")%>" style="display: inline"><%
		ButtonDel "AddressEdit.RemoveAddress()", obLanguage("Common","kRemove")
	%></div><%
End Sub

Sub DrawLinkButtons()
	If bFiasMode Then
		Button "simpleMode()", "Обычный ввод", "Обычный ввод", ""
	Else
		Button "fiasMode()", "Ввод из ФИАС", "Ввод из ФИАС", ""
	End If
End Sub

Sub onDrawPage()%>
	<form NAME="UserInfo" METHOD="POST" ACTION="<%=strBackPage%>" class="form-horizontal form-sm">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("UID", strEditUserID, "BackPage", strBackPage, "ACT", "edit", "IsFactAddress", strIsFactAddress, "IsForAll", "0", "strAddressType", strAddressType, "AddressType", strAddressType, "mode", IIF(bFiasMode, "", "simple")) )%>
		<%=WriteHiddenTags( Array("Self_AddressInfoEdit", "1", "level", "", "hZipCode", strZipCode) )%>
		<%DrawButtonPanel%>
		<%DrawNeighbours%>

		<table class="table table-condensed" ><%Call DrawAddressRow()%></table>
	</form><%
End Sub

Sub DrawAddressRow()
	If bFiasMode Then 
		Call DrawFiasForm
	Else
		Call DefaultAddress
	End If

	IF NOT strIsFactAddress = 1 THEN
	%>

	<div class="form-group" id="isTmpAddresBox">
		<div class="row">
			<div class="col-lg-3 col-md-4"></div>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<div class="checkbox">
						<label for="isTmpAddres">
							<input id="isTmpAddres" name="isTmpAddres" type="checkbox" onclick="DrawExpiryDate(this.checked)" <% 
								IF bIsTempAddr THEN
									RW "checked"
								END IF
								%> />
							<%=obLanguage("Common", "kRegistrationAddressIsLocalRegistrationAddress")%>
						</label>
				</div>
			</div>
		</div>
	</div>
		
	<div class="form-group" id="expireDateTempAddressBox"<% 
		IF NOT bIsTempAddr THEN
			RW "style='display: none;'"
		END IF
		%>>
		<div class="row">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="regDateTempAddress"><%=obLanguage("Common", "kRegDateTempAddress")%></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<%call DrawDateInput("regDateTempAddress", regDate, obLanguage("Common", "kRegDateTempAddress")) %>
			</div>
		</div>
		<div class="row">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="expireDateTempAddress"><%=obLanguage("Common", "kExpireDateTempAddress")%></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<%call DrawDateInput("expireDateTempAddress", dateExpiryDate, obLanguage("Common", "kExpireDateTempAddress")) %>
			</div>
		</div>
		<%Call DrawInputRow(obLanguage("Movement", "kDocNumber"), docNumber, "docNumberTempAddress", "text", 5, 20, "")%>
	</div>

	<%
	END IF
End Sub

Sub DefaultAddress()
	Dim arrButtons

	DrawFilterRowWithBtns obLanguage("Common","kCountry"), nCountryID, "Country", rsCountries, "COUNTRYID", "COUNTRYNAME", Null, "OnChangeFilter('country');", Null, Null
	If rsStates.EOF Then
		DrawInfo obLanguage("SetupSchoolUI","kNoData_States"), False
		Exit Sub
	Else
		arrButtons = Empty
		If bDrawKLADRLinks Then arrButtons = Array("importKLADR('state');", obLanguage("Common","kImportKLADR"), "")
		DrawFilterRowWithBtns obLanguage("Common","kState"), nStateID, "State", rsStates, "STATE_PROVINCEID", "STATEPROVINCENAME", Null, "OnChangeFilter('state');", arrButtons, Null
	End If

	If objNSNET.IsRegionHaveProvinces(nStateID) Then
		If Not bDrawKLADRLinks  and rsProvinces.EOF Then
			DrawInfo obLanguage("SetupSchoolUI","kNoData_Province"), False
		End If
		If bDrawKLADRLinks Then arrButtons = Array("importKLADR('province');", obLanguage("Common","kImportKLADR"), "")
		DrawFilterRowWithBtns obLanguage("Common","kProvince"), IIF(nProvinceID, nProvinceID, 0), "Province", rsProvinces, "PROVINCEID", "PROVINCENAME", "-", "OnChangeFilter('province');", arrButtons, Null
	End If

	If rsCities.EOF Then
		DrawInfo obLanguage("SetupSchoolUI","kNoData_Cities"), False
		If bDrawKLADRLinks Then rw ShowAnchor ("importKLADR('city');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "")
		Exit Sub
	Else
		arrButtons = Empty
		If bDrawKLADRLinks Then arrButtons = Array("importKLADR('city');", obLanguage("Common","kImportKLADR"), "")
		DrawFilterRowWithBtns obLanguage("Common","kCity"), nCityID, "City", rsCities, "CITYID", "NAME", Null, "OnChangeFilter('city');", arrButtons, Null
	End If

	If rsDistricts.EOF Then
		DrawInfo obLanguage("SetupSchoolUI","kNoData_Districts"), False
	Else
		DrawFilterRowWithBtns obLanguage("Common","kDistrict"), IIf(IsDull(strDistrictID), "-", strDistrictID), "DistrictID", rsDistricts, "DISTRICTID", "DISTRICT", "-", "", Null, Null
	End If

	If bAvailabilityOfStreet Then
		If rsLocations.EOF Then
			DrawInfo obLanguage("SetupSchoolUI","kNoData_Locations"), False
			If bDrawKLADRLinks Then rw ShowAnchor ("importKLADR('street');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "")
		Else
			arrButtons = Empty
			If bDrawKLADRLinks Then arrButtons = Array("importKLADR('street');", obLanguage("Common","kImportKLADR"), "")
			DrawFilterRowWithBtns obLanguage("Common","kStreet"), strLocationID, "LocationID", rsLocations, "LOCATIONID", "LOCATION", "-", "", arrButtons, Null
		End If
		If rsLocations.EOF Then Exit Sub
	End If

	Call DrawInputRow(obLanguage("Common","kHouse"), strHouse, "House", "text", 5, kLength, "")
	Call DrawInputRow(obLanguage("Common","kCorp"), strCorp, "Corp", "text", 5, kLength, "")
	Call DrawInputRow(obLanguage("Common","kFlat"), strRoom, "Room", "text", 7, kLength, "")
	Call DrawInputRow(obLanguage("Common","kZipCode"), strZipCode, "ZipCode", "text", 7, kLength, "")
end sub

Sub DrawNeighbours()
	If Not bNeighbours Then Exit Sub%>

	<div class="alert alert-warning" role="alert">
		<%=obLanguage("SetupSchoolUI","kSameAddress")%>&nbsp;<%=IIf(strIsFactAddress = "1", obLanguage("SetupSchoolUI","kLiving"), obLanguage("SetupSchoolUI","kRegistered"))%>:<br /><%
		While Not objNeighbours.EOF%>
			- <%=DB2HTML(objNeighbours("NICKNAME"))%><br><%
			objNeighbours.MoveNext
		WEnd
	%></div><%
End Sub
		
Sub DrawFiasForm()
	%>
	<div id="addressFormBlock">

		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="region"><%=obLanguage("Common","kRegion") %></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<select class="form-control" id="region" name="region" data-kladr-type="region"></select>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="district"><%=obLanguage("Common", "kProvince")%></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<select class="form-control" name="district" data-kladr-type="district" id="district"></select>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="city"><%=obLanguage("Common", "kCity")%></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<select class="form-control" name="city" data-kladr-type="city" id="city"></select>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="street"><%=obLanguage("Common", "kStreet")%></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<select class="form-control" name="street" data-kladr-type="street" id="street"></select>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="building"><%=obLanguage("Common", "kHouse")%></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<select class="form-control" name="building" data-kladr-type="building" id="building"></select>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="corp"><%=obLanguage("Common", "kCorp")%></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<input class="form-control" id="corp" name="corp" type="text"/>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="flat"><%=obLanguage("Common", "kFlat")%></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<input class="form-control" id="flat" name="flat" type="text"/>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4" for="zipcode"><%=obLanguage("Common", "kZipCode")%></label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<input class="form-control" id="zipcode" name="zip" type="text"/>
			</div>
		</div>
	</div>

	<div class="alert alert-danger hide" id="unknown-fias" role="alert">
		Внимание! Указанный адрес отсутствует в адресном справочнике ФИАС.
	</div>
	<%
End Sub %>
