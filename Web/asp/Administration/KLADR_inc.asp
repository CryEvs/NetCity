<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/ui.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterscommon.asp" -->
<!-- #INCLUDE FILE=AddrLevel_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kLength = "200"

Dim bSelfPage, strScriptName

Function onLoad()
	onLoad = onCheckSaveMsg()
End Function

Sub ReadState()
	bSelfPage = (CStr(Request("Self_KLADR")) = "1" Or GetSafeLng(Request("KLADR"), "0") <> "0")
	strScriptName = Request.ServerVariables("SCRIPT_NAME")
	Call obTokenMgr.SetData(strToken,stBackPage, strScriptName)
End Sub

Sub Main()
	Dim objSchoolInfo, objInfo
	Dim objCity
	Set rsCountries = objNSNET.GetCountryList()
	If rsCountries.EOF Then Exit Sub
	If bSelfPage Then
		' enter from this page via filter change
		ReadLevel
	Else
		nCityID = Request("CID")
		Set objCity = objNSNET.GetCityInfo(nCityID)
		nCountryID = objCity("COUNTRYID")
		nStateID = objCity("STATE_PROVINCEID")
		nProvinceID = GetSafeLng(objCity("PROVINCEID"),-1)

		InitStatesProvinsesCities
	End If
End Sub

Sub onHeadSpecial()%>
	<script>
		function OnChangeFilter(theArea) {
			document.KLADR.level.value = theArea;
			DoSubmit(document.KLADR, '<%=strScriptName%>');
		}

		function importKLADR(theArea) {
			document.KLADR.Area.value = theArea;
			DoSubmit(document.KLADR, "/asp/Administration/ImportKLADR.asp");
		}

		function cancel() {
			window.close();
		}

		function addCity() {
			window.close();
			var form = window.opener.document.forms[0];
			var wndop = window.opener;
			form.target = '_parent';
			wndop.DoSubmit(form, 'createArea.asp?CID=' + $('[name=City]').val());
		}
	</script><%
End Sub

Sub onHead()
	Call onHeadSpecial()
End Sub

Sub onDrawPage()
	%>
	<form NAME="KLADR" class="form-xs" METHOD="POST" onSubmit="return false;">
		<%=WriteObligatoryTags()%>
		<input type="hidden" value="" name="Area" />
		<input type="hidden" value="1" name="Self_KLADR" />
		<input type="hidden" value="1" name="KLADR" />
		<input type="hidden" value="" name="level" />
		<div class="row">
			<div class="col-md-12">
				<table class="table table-thin table-bordered"><%Call DrawAddressRow()%></table>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 text-center">
				<%OpenBtnGroup%>
				<button name="Cancel" onclick="cancel();"><%=obLanguage("Common","kBack")%></button>
				<%If nCityID>0 Then %>
				<button name="AddCity" onclick="addCity();"><%=obLanguage("ServAdmin","kChangeCity")%></button>
				<%End If %>
				<%CloseBtnGroup %>
			</div>
		</div>
	</form>
	<%
End Sub

Sub DrawAddressRow()
	Dim arrButtons

	Call DrawFilterRowWithBtns(obLanguage("Common","kCountry"), nCountryID, "Country", rsCountries, "COUNTRYID", "COUNTRYNAME", Null, "OnChangeFilter('country');", Empty, "")
	
	If rsStates.EOF Then 
		Call DrawTitleRow(obLanguage("Common","kState"), obLanguage("SetupSchoolUI","kNoData_States"))
		Exit Sub
	End If
	Call DrawFilterRowWithBtns(obLanguage("Common","kState"), nStateID, "State", rsStates, "STATE_PROVINCEID", "STATEPROVINCENAME", Null, "OnChangeFilter('state');", Empty, "")

	If objNSNET.IsRegionHaveProvinces(nStateID) Then
		If rsProvinces.EOF Then
			Call DrawTitleRow(obLanguage("Common","kProvince"), obLanguage("SetupSchoolUI","kNoData_Province"))
		Else
			If nCountryID = 2 Then
				arrButtons = Array("importKLADR('province');", obLanguage("Common","kImportKLADR"), "")
			Else
				arrButtons = Empty
			End If
			
			Call DrawFilterRowWithBtns(obLanguage("Common","kProvince"), IIF(nProvinceID, nProvinceID, 0), "Province", rsProvinces, "PROVINCEID", "PROVINCENAME", obLanguage("Common","kAll"), "OnChangeFilter('province');", arrButtons, "")
		End If
	End If

	If nCountryID = 2 Then
		arrButtons = Array("importKLADR('city');", obLanguage("Common","kImportKLADR"), "")
	Else
		arrButtons = Empty
	End If

	If rsCities.EOF Then 
		Call DrawTitleRowBtn(obLanguage("Common","kCity"), obLanguage("SetupSchoolUI","kNoData_Cities"), Array("importKLADR('city');", obLanguage("Common","kImportKLADR"), "", ""))
		Exit Sub
	End If

	Call DrawFilterRowWithBtns(obLanguage("Common","kCity"), nCityID, "City", rsCities, "CITYID", "NAME", Null, "OnChangeFilter('city');", arrButtons, "")
End Sub

Function WriteObligatoryTags()%>
	<input type="hidden" name="LoginType" value="<%=IIF(bIsEducManager, 2, IIF(bIsAdminInterface, 1, 0) )%>">
	<input type="hidden" name="AT" value="<%=strToken%>">
	<input type="hidden" name="VER" VALUE="<%=DateDiff("s", #1/1/1999#, Now, 0, 0 )%>"><%
End Function

%>
