<!-- #INCLUDE FILE=../headerprint.asp -->
<!-- #INCLUDE FILE="../Administration/AddrLevel_inc.asp" -->
<!-- #INCLUDE FILE=../scripts/UI.asp -->

<% ' © 2007-2016 IRTech. All rights reserved.
Const kLength = "200"
Const kSchool_InitEOFormID = 20
Const kSchool_InitEOTypeID = 5

Dim bSelfPage, strBackPage
Dim strParentCityID
Dim strScriptName, rsEOTypes
Dim strEOLegalFormID, nEOFormID, nEOTypeID, strAreaName, objEOLegalForms, rsEOForms
Dim nDocType
Dim bDrawKLADRLinks
Dim nStep

Function GetPageTitle()
	GetPageTitle = IIf(strIsFactAddress, obLanguage("Common","kHomeAddress"), obLanguage("Common","kRegistrationAddress")) & " " & GreenText(DB2HTML(objNSNET.GetUserNickName(strEditUserID)))
End Function

Sub ReadState()
	strBackPage = GetSafeStr(obTokenMgr.GetData(strToken,stBackPage), 255, Request.ServerVariables("HTTP_REFERER" ))
	If Instr(lcase(strBackPage), "createou.asp")<=0 Then
		Call obTokenMgr.SetData(strToken, "Back", strBackPage)
		Call obTokenMgr.SetData(strToken,stBackPage, strBackPage)
	End If

	bSelfPage = (CStr(Request("Self_CreateOU")) = "1" Or CStr(Request("FromCreateOU")) = "1")
	strScriptName = Request.ServerVariables("SCRIPT_NAME")
	nDocType = GetSafeLng(Request("DOCTYPE"), obTokenMgr.GetData(strToken, "DOCTYPE"))
	Call obTokenMgr.SetData(strToken, "DOCTYPE", nDocType)
	nStep = GetSafeLng(obTokenMgr.GetData(strToken, stMovStepFrom), -1)
End Sub

Sub Main()
	Dim objSchoolInfo, objInfo
	Dim objCity
	If bSelfPage Then
		' enter from this page via filter change
		ReadLevel
	Else
		Set rsCountries = objNSNET.GetCountryList()
		If rsCountries.EOF Then Exit Sub
		Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
		nCityID = objSchoolInfo("CITYID")
		Set objCity = objNSNET.GetCityInfo(nCityID)
		nCountryID = objCity("COUNTRYID")
		nStateID = objCity("STATE_PROVINCEID")
		nProvinceID = GetSafeLng(objCity("PROVINCEID"), -1)

		InitStatesProvinsesCities
		WriteStateData
	End If

	bDrawKLADRLinks = bUseKLADR And (nCountryID = 2)
	Set rsEOTypes = objNSNET.GetFilteredEOTypesAndEOForms(strFunctionalityType, nDocType, nStep)
	Set rsEOForms = rsEOTypes.Fields()("rsEOForms").Value

	strEOLegalFormID = GetSafeStr(Request("EOLEGALFORMID"), 1, "")
	If IsDull(strEOLegalFormID) Then
		strEOLegalFormID = "3"  ' муниципальное ОО
	End If

	If strFunctionalityType = 2 Then
		nEOFormID = GetSafeLng(Request("EOFORMID"), kSchool_InitEOFormID)
		nEOTypeID = GetSafeLng(Request("EOTYPEID"), kSchool_InitEOTypeID)
	Else
		nEOFormID = GetSafeLng(Request("EOFORMID"), rsEOForms("EOFORMID"))
		nEOTypeID = GetSafeLng(Request("EOTYPEID"), rsEOTypes("EOTYPEID"))
	End If
	
	strAreaName = GetSafeStr(Request("EONAME"), 200, "")
	Set objEOLegalForms = objNSNET.GetEOLegalForms()
End Sub

Sub onHeadSpecial()%>
	<script>
		function OnChangeFilter(theArea) {
			document.UserInfo.level.value = theArea;
			DoSubmit(document.UserInfo, '<%=strScriptName%>');
		}

		function importKLADR(theArea){
			document.UserInfo.Area.value = theArea;
			DoSubmit(document.UserInfo, "/asp/Administration/ImportKLADR.asp");
		}

		function cancel(){
			opener.control.reseteo();
			window.close();
		}

		function addOU() {
			if ($('input[name=EONAME]').val() == "") {
				alert(language.Generic.ServAdmin.kErrNameIsEmpty);
				$('input[name=EONAME]').trigger("focus");

				return false;
			}
			else {
				setDBBusy();
				DoSubmit(document.UserInfo, "SaveOU.asp");
			}
		}
	</script><%
End Sub

Sub DrawButtons()
	Call ButtonCancel("cancel();", "")

	If nCityID > 0 Then
		Call ButtonAddEx("addOU();", obLanguage("ServAdmin","kAddOU"), obLanguage("ServAdmin","kAddOU"))
	End If
End Sub

Sub onDrawPage()
	Call onHeadSpecial()

	Call DrawButtonPanel()%>

	<form NAME="UserInfo" METHOD="POST" class="form-horizontal">
		<%=WriteObligatoryTags()%>

		<%Call DrawAddressRow()%>
	</form><%
End Sub

Sub DrawAddressRow()
	Call SetFiltersWidth("", "col-md-3 col-lg-3 col-sm-3", "col-md-9 col-lg-5 col-sm-9")

	OpenFormGroup obLanguage("Common","kCountry")
		Call DrawSelectRs(rsCountries, "Country", "COUNTRYID", "COUNTRYNAME", nCountryID, Null, "OnChangeFilter('country');" )
	CloseFormGroup

	OpenFormGroup obLanguage("Common","kState")
		If rsStates.EOF Then Call DrawInfo(obLanguage("SetupSchoolUI","kNoData_States"), False) : Exit Sub
		Call DrawSelectRs( rsStates, "State", "STATE_PROVINCEID", "STATEPROVINCENAME", nStateID, Null, "OnChangeFilter('state');")
	CloseFormGroup

	If objNSNET.IsRegionHaveProvinces(nStateID) Then
		OpenFormGroup obLanguage("Common","kProvince")
			If rsProvinces.EOF Then
				Call DrawInfo(obLanguage("SetupSchoolUI","kNoData_Province"), False)
				If bDrawKLADRLinks Then rw ShowAnchor ("importKLADR('province');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "") End If
			Else
				Call DrawselectRs (rsProvinces,"Province", "PROVINCEID","PROVINCENAME", IIF(nProvinceID, nProvinceID, 0), obLanguage("Common","kAll"), "OnChangeFilter('province');")
				If bDrawKLADRLinks Then rw ShowAnchor ("importKLADR('province');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "") End If
			End If
		CloseFormGroup
	End If

	OpenFormGroup obLanguage("Common","kCity")
		If rsCities.EOF Then
			Call DrawInfo(obLanguage("SetupSchoolUI","kNoData_Cities"), False)
			If bDrawKLADRLinks Then rw ShowAnchor("importKLADR('city');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "")

			Exit Sub
		Else
			Call DrawSelectRs( rsCities, "City", "CITYID", "NAME", nCityID, Null, "OnChangeFilter('city');" )
			If bDrawKLADRLinks Then rw ShowAnchor("importKLADR('city');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "")
		End If
	CloseFormGroup

	Call DrawInputTextRow(obLanguage("ServAdmin","kShortEOName_"), strAreaName, "EONAME", 50, 200, Null, Null)
	
	OpenFormGroup obLanguage("Common","kEOType")
		If rsEOTypes.EOF Then Call DrawInfo(obLanguage("ServAdmin","kErrEOTypes"), False) : Exit Sub
		Call DrawSelectRs(rsEOTypes, "EOTYPEID", "EOTYPEID", "TYPENAMEWITHCC", nEOTypeID, Null, "OnChangeFilter('eoType');" )
	CloseFormGroup
	
	Call DrawEOForms
	Call DrawSelectInfoRow(obLanguage("ServAdmin","kLegalForm"), strEOLegalFormID, "EOLEGALFORMID", objEOLegalForms, "EOLEGALFORMID", "NAME", Null, "")

	RestoreDefFiltersWidth
End Sub

Function WriteObligatoryTags()%>
	<input type="hidden" name="LoginType" value="<%=IIF(bIsEducManager, 2, IIF(bIsAdminInterface, 1, 0) )%>">
	<input type="hidden" name="AT" value="<%=strToken%>">
	<input type="hidden" name="VER" VALUE="<%=DateDiff("s", #1/1/1999#, Now, 0, 0 )%>">

	<input type="hidden" value="" name="Area" />
	<input type="hidden" value="1" name="FromCreateOU" />
	<input type="hidden" value="1" name="Self_CreateOU" />
	<input type="hidden" value="" name="level" />
	<input type="hidden" value="<%=nDocType%>" name="DOCTYPE" /><%
End Function

Sub DrawEOForms
	If Not rsEOTypes.BOF Then
		rsEOTypes.MoveFirst
		rsEOTypes.Find("EOTYPEID=" & nEOTypeID)
		If level = "eoType" Then nEOFormID = rsEOForms("EOFORMID")
	End If

	Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(rsEOForms, "FULLNAME", Array("CLASSIFIERCODE", "FORMNAME"), "{0} {1}")
	Call DrawRadioList(obLanguage("ServAdmin","kEOForm"), nEOFormID, "EOFORMID", rsEOForms, "EOFORMID", "FULLNAME", "dataChanged();", False)
End Sub%>