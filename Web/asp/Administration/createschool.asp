<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/Administration/AddrLevel_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim rsDistricts, nDistrictID, bNoDistricts
Dim rsSchools, bNoSchools, bNoAvailableEOS, bCheckCross

Function IsTopPage()
	IsTopPage = True
End Function

Function GetPageTitle()
	If CantCreateEO() Then
		GetPageTitle = obLanguage("ServAdmin","kEOsBR")
	Else
		GetPageTitle = obLanguage("ServAdmin","kTitleCreateEO")
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = mi_SA_School
End Function

Function GetPageTabItem()
	GetPageTabItem = tb_SA_School
End Function

Sub InitCountries 
	On Error Resume Next
	Set rsCountries = objNSNET.GetCountryCityList()
	TestError obLanguage("ServAdmin","kErrCountries")
End Sub

Sub InitStates
	On Error Resume Next
	Set rsStates = objNSNET.GetStateCityList(nCountryID)
	TestError obLanguage("ServAdmin","kErrStates")
End Sub

Sub InitProvinces
	On Error Resume Next
	Set rsProvinces = objNSNET.GetProvinceCityList(nStateID)
	TestError obLanguage("ServAdmin","kErrStates")
End Sub

Sub Main
	Dim objEOs
	ReadLevel

	Set objEOs = objNSNET.GetCityNotRelatedEOList(nCityID)
	bNoAvailableEOS = objEOs.EOF
	Call obTokenMgr.SetData(strToken,"Back", "createSchool.asp")
	Set rsDistricts = objNSNET.GetDistricts(nCityID)
	TestError obLanguage("ServAdmin","kErrDistricts")
	bNoDistricts = rsDistricts.EOF
	nDistrictID = 0
	If Not bNoDistricts Then
		Dim defaultDistrict
		defaultDistrict = GetSafeLng( obTokenMgr.GetData(strToken,"District"), 0)
		If level = "" Then
			nDistrictID = GetSafeLng( Request.Cookies("SALoginCookies")("District"), defaultDistrict )
		ElseIf level = "district" Or level = "street"  Then
			nDistrictID = GetSafeLng( Request("District"), defaultDistrict)
		End IF
		Call obTokenMgr.SetData(strToken,"District", nDistrictID)
	End If

	Response.Cookies("SALoginCookies")("District") = nDistrictID
	Response.Cookies("SALoginCookies").Expires = DateAdd("m", 1, NSNow() )
	If nCityID <= 0 Then bNoSchools=True : Exit Sub

	Set rsSchools = objNSNET.GetSchoolList(nCityID, nDistrictID, True)
	TestError obLanguage("ServAdmin","kErrSchools")
	bNoSchools = rsSchools.EOF
End Sub

Sub onHeadSpecial()
%>
<script src="<%=GetVersionedResLink("/js/fileUpload-bundle.js")%>" type="text/javascript"></script>

<script type="text/x-handlebars-template" id="import-template">
	{{#if alreadyCreated}}
		<b><%=obLanguage("Import","kSchoolsAlreadyCreated")%></b>
	{{/if}}
	<table class="table table-xs table-hover table-striped">
		<tr>
			<th><%=obLanguage("Reports","kOrderNumberS")%></th>
			<th><%=obLanguage("SchoolInfo", "kEOName")%></th>
			<th><%=obLanguage("Common", "kEOType")%></th>
			<th><%=obLanguage("SchoolInfo", "kEOForm")%></th>
			<th><%=obLanguage("Import", "kToImport")%></th>
		</tr>
		{{#each schoolList}}
			<tr class="text-center">
				<td class="text-center">{{match @index}}</td>
				<td class="text-left">{{ShortName}}</td>
				<td class="text-left">{{EO_Type}}</td>
				<td class="text-left">{{EO_Form}}</td>
				<td class="text-center">
					<input type="checkbox" name="incEO" value="{{match @index}}">
				</td>
			</tr>
		{{/each}}
	</table>
	{{#if notImportedList}}
		<b><%=obLanguage("Import","kSchoolNotImported")%></b>
		{{notImportedList}}
	{{/if}}
	
</script>
<SCRIPT><!--
function reload() {
	$(document).trigger('showProcessing');
	DoSubmit(document.forms.MenuForm, "createschool.asp");
}

function addSchool() {
	var confirms = new Array();
	var fail = function(){};
	var form = document.School;

	form.elements['act'].value = "new";
	if ($('select[name=District]').length != 0)
		if(form.District.value < 1)
			confirms = $.show.getConfirmation(language.Generic.ServAdmin.kMsgSchoolDistict + '\n\t' + language.Generic.Common.kMsgAreYouSure + '\n<%=obLanguage("ServAdmin","kMsgBindSchoolWIthRegion")%>');
	
	extDeferred.when(confirms)
		.then(function(){
			<%If bNoAvailableEOS Then%>
				DoSubmit(document.School, "CreateArea.asp");
			<%Else%>
				DoSubmit(document.School, "EditSchool.asp");
			<%End If%>
		;}, fail);
}
function importSchools() {
	var cityId = $('select[name="City"]').val();
	var value = $('select[name="District"]').val();

	var districtId = value == undefined ? -1 : value
	
	$.show.fileDialog({
		title: language.Generic.Buttons.kImportOU,
		isAjax: true,
		submitParams: { cityId: cityId, districtId: districtId },
		fileExts: ['.xls'],
		url: '/asp/Administration/SchoolsImport.asp',
		handlerAjaxSuccess: function(response) {
			if(response.IsErorr) {
				$.show.error(response.Message);
				return;
			}

			var source = $("#import-template").html().replace(/(?:\r\n|\r|\n)/g, '');
			var template = Handlebars.compile(source);
			var html = template(response.data);

			var buttons = [{
							label: "<%=obLanguage("Import","kBeginImport")%>",
							cssClass: "btn-primary",
							action: function(dialog){
								var selectedSchools = $("input[name='incEO']:checkbox:checked");

								if (selectedSchools.length == 0) {
									alert(language.Generic.ServAdmin.kMustSelectEO);
									return;
								}

								var data = {
									cityId: cityId,
									 districtId: districtId,
									incEO: []
								};

								selectedSchools.each(function(){
									data.incEO.push(this.value);
								});

								jsSubmit({
									data: data,
									action: "SchoolsImportSave.asp",
									showProcessing: true,
									onSuccess: function(response){
										$.show.message(response.message)
											.then(reload);
									}
								});
							}
						}, {
							label: "<%=obLanguage("Common","kCheckAll")%>",
							action: function(dialog){
								$('input[name="incEO"]:checkbox', document.MainForm).prop('checked', true);
							}
						}, {
							label: "<%=obLanguage("Common","kUnCheckAll")%>",
							action: function(dialog){
								$('input[name="incEO"]:checkbox', document.MainForm).prop('checked', false);
							}
						}]

			if (response.data.alreadyCreated) {
				buttons.shift()
			}

			$.show.dialog({
				title: "<%=obLanguage("Import","kTitleImportEO")%>",
				size: BootstrapDialog.SIZE_WIDE,
				message: html,
				buttons: buttons
			});
		}
	});
}

function editSchool() {
	var form = document.School;
	if($('select[name=EditSchoolID]')[0].selectedIndex == -1){
		alert(language.Generic.ServAdmin.kSelectSchool);
		return;
	}
	form.elements['act'].value = "edit";
	DoSubmit(document.School, "EditSchool.asp");
}
function delSchool() {
	if(isDBBusy()) return;
	var schoolID = $('[name=EditSchoolID]').val();
	if( !(schoolID > 0) ){
		alert(language.Generic.ServAdmin.kSelectSchool);
		return;
	}

	jsSubmit({
		action: '/asp/scripts/ajaxmethods.asp',
		data: {method: "<%=kCanDelSchool%>", EditSchoolID:schoolID},
		showProcessing: true,
		onSuccess: delSchoolAction
	});
}

function delSchoolAction(response) {
	if(!response.data) {
		alert(language.Generic.ServAdmin.kUnknownError);
		return;
	}

	if (response.data.isWorkInSchool) {
		alert(response.message);
		return;
	}

	var confirms = new Array();
	if(response.data.isCommonDataEnter) {
		confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool_DataEnter));
		confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool2));
		confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool3));
	}
	else {
		confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool));
		confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool2));
	}

	extDeferred.when(confirms)
		.then(function(){
			var selectedSchoolOption = $('select[name=EditSchoolID] option:selected');
			var schoolId = selectedSchoolOption.val();
			var schoolName = selectedSchoolOption.text();
			setDBBusy();

			alert(language.Generic.SetupSchoolUI.kSavingTakesTime + "." + language.Generic.Curriculum.kPleaseWait + "...")
				.then(function(){
					$.show.processing();
					postTo("saveschool.asp", {EditSchoolID: schoolId, SchoolNumber: schoolName, act: "del"});
				});
				
		});
}
function addArea( theArea ) {
	DoSubmit( document.School, "manageArea.asp");
}
function onChangeArea( theArea ) {
	document.School.level.value = theArea;
	DoSubmit( document.School, "");
}
function onChange() {
	DoSubmit( document.School, "");
}
function editAdminsPass() {
	var schoolID = $('[name=EditSchoolID]').val();
	if( !(schoolID > 0) ){
		alert(language.Generic.ServAdmin.kSelectSchool);
		return;
	}
	ok_check_db("School", "AdminsList.asp");
}
//--></SCRIPT>
<%
End Sub

Sub onDrawPage()
	If rsCountries.EOF Then 
		DrawInfo obLanguage("ServAdmin","kErrNoCountries"), False
		Exit Sub
	End If%>
	<form METHOD="POST" class="form-horizontal" ACTION="createschool.asp"  NAME="School" OnSubmit="return false;">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("level", "", "act", ""))%>
	<%If bNoAvailableEOS Then
		rw WriteHiddenTags(Array("Area", "EO", "PID", nCityID ))
	End If%>

	<div class="row">
		<div class="col-md-12"><%
			Call DrawSelectInfoRow(obLanguage("Common","kCountry"), nCountryID, "Country", rsCountries, "COUNTRYID","COUNTRYNAME", Null, "onChangeArea('country');")
			Call DrawSelectInfoRow(obLanguage("Common","kState"), nStateID, "State", rsStates, "STATE_PROVINCEID","STATEPROVINCENAME", Null, "onChangeArea('state');")

			If Not objNSNET.IsRegionMoscowOrStPetersburg(nStateID) Then
				If bNoProvince Then
					DrawReadonlyRow obLanguage("Common","kProvince"), obLanguage("ServAdmin","kEmptyList")
				Else
					Call DrawSelectInfoRow(obLanguage("Common","kProvince"), nProvinceID, "Province", rsProvinces, "PROVINCEID","PROVINCENAME", obLanguage("Common","kAll"), "onChangeArea('province');")
				End If

			End If
			Call DrawSelectInfoRow(obLanguage("Common","kCity"), nCityID, "City", rsCities, "CITYID","NAME", Null, "onChangeArea('city');")
			Call DrawSelectInfoRow(obLanguage("Common","kDistrict"), nDistrictID, "District", rsDistricts, "DISTRICTID","DISTRICT", obLanguage("Common","kAll"), "onChangeArea('district');")

		If bNoCities Then
			DrawInfo obLanguage("ServAdmin","kSeeAddressesTab"), False
		Else
			OpenFormGroup obLanguage("ServAdmin","kSchools")
				%><div class="btn-group" style="padding-bottom: 15px"><%
					If Not bIsRegionEMForSchool Then 
						Call ButtonAdd("addSchool();", obLanguage("Common","kAdd"))
						InlineButton "importSchools();", obLanguage("Buttons","kImportOU"), "glyphicon-import"
						If Not bNoSchools Then InlineButton "delSchool();", obLanguage("Common","kRemove"), "glyphicon-trash"
					End If
					If Not bNoSchools Then
						InlineButton "editSchool();", obLanguage("ServAdmin","kEOInfo"), "glyphicon-info-sign"
					End If
					If Not bNoSchools And Not bIsRegionEMForSchool Then
						InlineButton "editAdminsPass();", obLanguage("Buttons","kAdministrationEO"), "glyphicon-wrench"
					End If
				%></div><%
				If Not bNoSchools Then%>
					<select name="EditSchoolID" class="form-control" size="12" style="width: 100%;"><%PopulateSelect rsSchools, "SCHOOLID", "SCHOOLNAME", ""%></select><%
				End If
			CloseFormGroup
		End If%>
		</div>
	</div>
	</form><%
End Sub
%>
