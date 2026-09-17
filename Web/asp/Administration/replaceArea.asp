<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/EoNames_inc.asp" -->

<% ' © 2007-2018 IRTech. All rights reserved.

Dim strHeader, strAreaName, strID, strName
Dim objRs, strAreaID, strPID, bEOF, strArea, strAreaPar, strProvinceID

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kReplace") &" "& strArea
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Addresses
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Addresses
 End Function

Sub ReadState()
	Dim level

	strAreaPar = GetSafe("Area", "")
	strAreaID = GetSafeLng(Request("AreaID"), Null)

	Select Case strAreaPar
	Case "EO"
		strArea			= obLanguage("ServAdmin","kEO_2")
		strHeader		= obLanguage("Common","kEO")
		strPID = GetSafe("City", 0)
		Set objRs		= objNSNET.GetCityEOList(strPID)
		TestError obLanguage("ServAdmin","kErrEOsList")
		strAreaName		= objNSNET.GetEOInfo(strAreaID)("EONAME")
		strID			= "EOID"
		strName			= "EONAME"
	Case "street"
		strArea			= obLanguage("ServAdmin","kStreet_2")
		strHeader		= obLanguage("Common","kStreet")
		strPID			= GetSafe("City", 0)
		Set objRs		= objNSNET.GetLocations(strPID)
		TestError obLanguage("ServAdmin","kErrStreets")
		strAreaName		= objNSNET.GetLocationName(strAreaID)
		TestError obLanguage("ServAdmin","kErrStreets")& "!!!!!"
		strID			= "LOCATIONID"
		strName			= "LOCATION"
	Case "district"
		strHeader		= obLanguage("Common","kDistrict") & ":"
		strArea			= LCase(strHeader) & ":"
		strPID			= GetSafe("City", 0)
		Set objRs		= objNSNET.GetDistricts(strPID)
		TestError obLanguage("ServAdmin","kErrDistricts")
		strAreaName		= objNSNET.GetDistrictName(strAreaID)
		strID			= "DISTRICTID"
		strName			= "DISTRICT"
	Case "city"
		strHeader		= obLanguage("Common","kCity") & ":"
		strArea			= LCase(strHeader) & ":"
		'strPID = GetSafeLng(Request("PID"), Null)
		strProvinceID	= GetSafe("Province", -1)
		Set objRs		= objNSNET.GetCityList(GetSafe("State", 0),strProvinceID)
		TestError obLanguage("ServAdmin","kErrCitiesList")
		strAreaName		= objNSNET.GetCityName(strAreaID)
		strID			= "CITYID"
		strName			= "NAME"
	Case "state"
		strArea			= LCase(obLanguage("Common","kState"))
		strArea			= LCase(strHeader) & ":"
		strPID = GetSafe("Country", 0)
		Set objRs		= objNSNET.GetStateList(strPID)
		TestError obLanguage("ServAdmin","kErrStates")
		strAreaName		= objNSNET.GetStateName(strAreaID)
		strID			= "STATE_PROVINCEID"
		strName			= "STATEPROVINCENAME"
	Case "province"
		strHeader		= obLanguage("Common","kProvince")
		strArea			= LCase(strHeader) & ":"
		strPID = GetSafe("State", 0)
		Set objRs		= objNSNET.GetProvinceList(strPID)
		TestError obLanguage("ServAdmin","kErrStates")
		strAreaName		= objNSNET.GetProvinceName(strAreaID)
		strID			= "PROVINCEID"
		strName			= "PROVINCENAME"
	Case "country"
		strHeader		= obLanguage("Common","kCountry")
		strArea			= obLanguage("ServAdmin","kCountry_2")
		Set objRs		= objNSNET.GetCountryList()
		TestError obLanguage("ServAdmin","kErrCountries")
		strAreaName		= objNSNET.GetCountryName(strAreaID)
		strID			= "COUNTRYID"
		strName			= "COUNTRYNAME"
	Case Else GenerateError obLanguage("Common","kInvalidParameter")
	End Select

	IF objRs.EOF Then GenerateError obLanguage("ServAdmin","kErrReplace")
End Sub

Sub onHeadSpecial()%>
<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>
<SCRIPT><!--

$(function() {
	var objSelect = $('select[name=AreaID]');
	objSelect.select2({language: "ru"});
});

function Back() {
	goBack(document.mainForm, 'manageArea.asp');
}

function replaceArea() {
	if($('[name=AreaID]').val() == <%=strAreaID%>) {
		alert(language.Generic.ServAdmin.kCantReplaceToSelf);
		return false;
	}

	if(isDBBusy()) return false;

	$.show.confirmation(language.Generic.ServAdmin.kReplace + '?').then(function() {
		var form = document.mainForm;
		var data = {
			Area: '<%=strAreaPar%>',
		};
		jsSaveForm(form, data, '/asp/Administration/deleteArea.asp')
			.then(function(response) { 
					DoSubmit(form, "manageArea.asp");
				});
	});

}
//--></SCRIPT>
<%
End Sub

Sub DrawButtons()
	ButtonSave "replaceArea();", obLanguage("Common", "kSave")
End Sub

Sub onDrawPage()
	DrawButtonPanel
	%><form method="POST" action="saveArea.asp" class="form-horizontal" name="mainForm">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PID", strPID, "oldID",strAreaID))%>
		<div class="row">
			<div class="col-md-6">
				<table class="table table-bordered table-condensed">
					<tr>
						<th><%=strHeader%></th>
						<th><%=obLanguage("ServAdmin","kReplaceTo")%></th>
					</tr>
					<tr>
						<td><%=DB2HTML(strAreaName)%></td>
						<td><%
							If strAreaPar <> "EO" Then
								DrawSelectRs objRs, "AreaID",strID,strName,strAreaID, Null, ""
							Else
								Dim arrEOS

								arrEOS = objRs.GetRows(,,Array("EOID", "EONAME", "EOLEGALFORMID", "EOLEGALFORM83ID", "EOTYPEID", "EOFORMID"))%>

								<select name="AreaID" class="form-control"><%
									PopulateSelectArrayEOs arrEOS, strAreaID %>
								</select><%
							End If%>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</form><%
End Sub%>