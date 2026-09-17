<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE FILE=AddrLevel_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/EoNames_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Dim rsFounders, rsEOs, bNoFounders

Function IsTopPage()
	IsTopPage = True
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleAddrRefs")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Addresses
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Addresses
 End Function

Sub Main
	On Error Resume Next
	ReadLevel
	Call obTokenMgr.SetData(strToken, "Back", strScriptName)
	Set rsFounders = objNSNET.GetFounders(nStateID, -1, -1, -1)
	TestError obLanguage("ServAdmin","kErrFounders")
	bNoFounders = rsFounders.EOF
	Set rsEOs = objNSNET.GetCityEOList(nCityID)
	TestError obLanguage("ServAdmin","kErrEOs")
	Err.Clear
End Sub

Sub onHeadSpecial()%>
<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>
<SCRIPT><!--
	$(function() {
		var kladrSelect = $('select[name=City]');
		kladrSelect.select2({language: "ru"});
	});
	var Wnd = null;
	function createArea( theArea )	{
		document.School.level.value = theArea;
		if( theArea == 'city' || theArea == 'province' || theArea == 'founder')
			document.School.nPID.value =<%=nStateID%>;
		if (theArea == 'EO' && !($('[name=City]').val() > 0)){
			alert(language.Generic.ServAdmin.kErrEOCreate);
				$('[name=City]').trigger("focus");
				return;
		}
		DoSubmit( document.School, "createArea.asp?AreaID=-1&Area="+theArea);
	}
	function addArea( theArea )	{
		if( theArea == 'city' || theArea == 'province' || theArea == 'founder'){
			document.School.level.value = theArea;
			document.School.nPID.value =<%=nStateID%>;
		}
		DoSubmit( document.School, "manageArea.asp?Area="+theArea);
	}
	function onChangeArea( theArea )	{
		document.School.level.value = theArea;
		DoSubmit( document.School, "");
	}
	function changeArea( theArea, theAreaID )	{
		document.School.level.value = theArea;
		DoSubmit( document.School, "createArea.asp?AreaID="+theAreaID+"&Area="+theArea);
	}
	function importKLADR(theArea)	{
		document.School.level.value = theArea;
		if( theArea == 'province' )
			document.School.nPID.value=<%=nStateID%>;
		if( theArea == 'city' )
			document.School.nPID.value =<%=nStateID%>;

		var url = urlHelper.makeUrl("/asp/Administration/ImportKLADR.asp", { area: theArea });
		var winOptions = { url: url, name: '_blank', specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=820,height=620', winChild: Wnd };
		windowOpen( winOptions );
		Wnd = winOptions.winChild;
		Wnd.name='_blank';
		if (Wnd) center(Wnd, 500, 520);
	}
//--></SCRIPT>
<%
End Sub

Sub DrawArea(AreaName, bEmpty, area, rsArea, ID, NAME, curID, strNull, bKladr)
	OpenFormGroup obLanguage("Common","k" & AreaName)
	%><div class="input-group"><%
			If bEmpty Then%>
				<input class="form-control" id="appendedInputButtons" disabled type="text" value="<%=DB2Value(obLanguage("ServAdmin","kEmptyList"))%>">
				<%If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then
					%><span class="input-group-btn"><%
					ButtonAdd "createArea('" & area & "');", obLanguage("ServAdmin","kAddItem")
				End If
			Else
				DrawselectRs rsArea, AreaName, ID, NAME, curID, strNull, "onChangeArea('" & area & "');"
				If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then
					%><span class="input-group-btn"><%
					ButtonEdit "addArea('" & area & "');", obLanguage("Common","kChange")
				End If
			End If
			If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then
				If bKladr And bUseKLADR Then
					ButtonImport "importKLADR('" & area & "');", obLanguage("Common","kImportKLADR")
				End If
				%></span><%
			End If
	%></div><%
	CloseFormGroup
End Sub

Sub onDrawPage()
	Dim arrEOS, bKladr, bExit%>
<FORM METHOD="POST" class="form-horizontal" ACTION="AddrRefs.asp" NAME="School">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array( "level", "", "nPID",nPID))%>
	<div class="span8">
		<div class="widget-box">
			<div class="widget-content"><%
					bExit = True
					DrawArea "Country", bNoCountries, "country", rsCountries, "COUNTRYID", "COUNTRYNAME", nCountryID, Null, False
					If Not bNoCountries Then
						bKladr = (nCountryID = 2)
						DrawArea "State", bNoState, "state", rsStates,"STATE_PROVINCEID", "STATEPROVINCENAME", nStateID, Null, bKladr
						If Not bNoState Then
							If objNSNET.IsRegionHaveProvinces(nStateID) Then
								DrawArea "Province", bNoProvince, "province", rsProvinces, "PROVINCEID", "PROVINCENAME", nProvinceID, obLanguage("Common","kNo"), bKladr
							End If
							DrawArea "City", bNoCities, "city", rsCities, "CITYID", "NAME", nCityID, obLanguage("Common","kAll"), bKladr
							bExit = bNoCities And bNoProvince
						End If
					End If%>
			</div>
		</div>
	</div><%
	If Not bExit Then%>
	<div class="span6">
		<table class="table table-bordered table-condensed">
		<tr><th><%=obLanguage("ServAdmin","kFounders")%></th><th><%=obLanguage("ServAdmin","kEOsBR")%></th></tr>
		<tr><td class="select"><%
			If rsFounders.EOF Then%>
				<select name="Founder" size="15" style="width:100%;"></select>
				<div style="margin-top:5px;">
					<%ButtonAdd "createArea('founder');", obLanguage("ServAdmin","kAddItem")%>
				</div><%
			Else%>
				<select name="Founder" size="15" style="width:100%;"><%PopulateSelect rsFounders,"FOUNDERID","FNAME","" %></select>
				<div style="margin-top:5px;"><%
					ButtonEdit "addArea('founder');", obLanguage("Common","kChange")%>
				</div><%
			End If%>
			<td class="select" valign="top"><%
			If rsEOs.EOF Then%>
				<select name="EO" size="15" style="width:100%;"></select><%
				If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then%>
					<div style="margin-top:5px;"><%
						ButtonAdd "createArea('EO');", obLanguage("ServAdmin","kAddItem")%>
					</div><%
				End If
			Else
				arrEOS=rsEOs.GetRows(,,Array("EOID", "EONAME", "EOLEGALFORMID", "EOLEGALFORM83ID", "EOTYPEID", "EOFORMID"))%>
				<select name="EO" size="15" style="width:100%;"><% PopulateSelectArrayEOs arrEOS,"" %></select><div style="margin-top:5px;"><%
				If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then
					ButtonEdit "addArea('EO');", obLanguage("Common","kChange")
				Else
					ButtonView "addArea('EO');", obLanguage("Common","kView")
				End If%>
				</div><%
			End If%>
			</td></tr>
		</table>
	</div><%
	End If%>
</FORM><%
End Sub
%>
