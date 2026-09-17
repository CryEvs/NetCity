<!-- #INCLUDE FILE=../headersimple.asp -->
<!-- #INCLUDE FILE="ImportKLADR_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Dim strAreaID, strPID, strAreaPar, strAreaName, strID, strName, strHeader, strBackPage
Dim strStateName, strProvinceName, strCityName
Dim level, bFromCreateOUPage, bKLADR
Dim enableButtons

Sub ReadState()
	Call SetConnection()
	strPID = GetSafeLng( Request("PID"), GetSafeLng( Request("nPID"),0 ) )
	strAreaPar = Request("Area")
	strBackPage = Request.ServerVariables("HTTP_REFERER" )
	If IsDull( strAreaPar ) Then strAreaPar = obTokenMgr.GetData(strToken, "Area") Else Call obTokenMgr.SetData(strToken, "Area", strAreaPar)
	TestError obLanguage("ServAdmin","kErrName")
End Sub

Function isHelpAvailable
	isHelpAvailable = False
End Function

Sub Main
	On Error Resume Next
	bAll = false
	bFromCreateOUPage = (Request("FromCreateOU") = 1)
	bKLADR = (GetSafeID(Request("KLADR"), "0") <> "0")
	SetScriptTimeOut 9000
	nStateID = GetSafeLng( obTokenMgr.GetData(strToken,"State"),0)
	strStateName = objNSNET.GetStateName(nStateID)
	If Err.Number<>0 Then Err.Clear : Exit Sub
	Select Case strAreaPar
	Case "street"
		nProvinceID = GetSafeLng( obTokenMgr.GetData(strToken,"Province"),0)
		nCityID = GetSafeLng( obTokenMgr.GetData(strToken,"City"),0)
		If nProvinceID = 0 Then
			Set oProvinceID = Nothing
		Else
			oProvinceID = nProvinceID
		End If
		If nProvinceID>0 Then
			strProvinceName = objNSNET.GetProvinceName(nProvinceID)
			If Err.Number<>0 Then Err.Clear : Exit Sub
		End If

		strCityName = objNSNET.GetCityName(nCityID)
		If Err.Number<>0 Then Err.Clear : Exit Sub
		If bAll Then
			Set rsLocations = objNSNET.GetKladrLocations(nStateID, oProvinceID, nCityID)
		Else
			Set rsLocations = objNSNET.GetLocationsToImport(nStateID, oProvinceID, nCityID)
		End If
	Case "city"
		nProvinceID = GetSafeLng( obTokenMgr.GetData(strToken,"Province"),0)
		If nProvinceID = 0 Then
			Set oProvinceID = Nothing
		Else
			oProvinceID = nProvinceID
		End If
		If nProvinceID>0 Then
			strProvinceName = objNSNET.GetProvinceName(nProvinceID)
			If Err.Number<>0 Then Err.Clear : Exit Sub
		End If

		If bAll Then
			Set rsCities = objNSNET.GetKLADRCities(nStateID, oProvinceID)
		Else
			Set rsCities = objNSNET.GetCitiesToImport(nStateID, oProvinceID)
		End If
	Case "province"
		If bAll Then
			Set rsProvinces = objNSNET.GetKLADRProvinces(nStateID)
		Else
			Set rsProvinces = objNSNET.GetProvincesToImport(nStateID)
		End If
	Case "state"
		If bAll Then
			Set rsProvinces = objNSNET.GetKladrStates()
		Else
			Set rsProvinces = objNSNET.GetStatesToImport()
		End If
	End Select
	
	TestError( obLanguage("Common","kUnexpErr") )
	'If Err.Number <> 0 Then Err.Clear

End Sub

Sub onHeadSpecial()%>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>

	<SCRIPT><!--
		var Wnd = null;
		function Back() {
			cancel();
		}
		function getSelectMsg(theArea){
			var msg= (theArea == "province" )? '<%=obLanguage("Login","kSelectProvince")%>' 
			: (theArea == "city" )? '<%=obLanguage("Login","kSelectCity")%>' 
			: (theArea == "state" )? '<%=obLanguage("Login","kSelectRegion")%>' 
			: '<%=obLanguage("SetupSchoolUI","kChooseLocation")%>';
			return msg
		}
		function save(theArea){
			var message = '<%=obLanguage("Common","kImporting")%>';
			var alertMessage = getSelectMsg(theArea);
			var code = $('select[name=KLADRArea]').val();
			if(code == "" || code == undefined)
				alert(alertMessage);
			else{
				$(document).trigger('showProcessing');
				setDBBusy();
				DoSubmit( document.KLADR, "");
			}
		}
		function saveAll(){
			var message = '<%=obLanguage("Common","kImporting")%>'
			$(document).trigger('showProcessing');
			$('input[name=SaveAll]').attr("value",1);
			var arrArea = new Array();
			var length = $('select[name=KLADRArea]')[0].options.length;
			for (var i=0; i<length; i++){
				if ($('option')[i].attributes['bSave'] == undefined || $('option')[i].attributes['bSave'].value == 1)
					arrArea[arrArea.length]=$('option')[i].value;
			}

			var succ = function()
			{
				$('input[name=AllValue]').attr("value",arrArea);
				setDBBusy();
				DoSubmit( document.KLADR, "");
			}

			if (arrArea.length > 200 && arrArea.length < 750)
			{
				alert(language.Generic.Common.kAlertImporting + '.' + language.Generic.Common.kAlertNotCloseWindow, {close: succ});
				return;
			}
			if (arrArea.length >= 750)
			{
				alert(language.Generic.Common.kAlertImporting + language.Generic.Common.kAlertImporting2 + '.' + language.Generic.Common.kAlertNotCloseWindow, {close: succ});
				return;
			}

			succ();
		}
		function cancel(){
		<%Dim bClose
			bClose=False
		If bFromCreateOUPage Then%>
			$('input[name=FromCreateOU]').val(1);
			DoSubmit(document.KLADR, '<%=strBackPage%>');
		<%ElseIf bKLADR Then%>
			$('input[name=KLADR]').val("1");
			DoSubmit(document.KLADR, '<%=strBackPage%>');
		<%Else
			bClose = True
			If strAreaPar="street" Then
				If IsObject( rsLocations) Then
					If Not rsLocations.EOF Then
						If rsLocations("CODE") = "-1" Then %>
							var form = window.opener.document.forms[0];
							var wndop = window.opener;
							form.target = '_parent';
							wndop.DoSubmit(form, '<%=IIf(objNSNET.IsAdminOfServer(strUserID),"manageArea.asp?Area=city","AddressInfoEdit.asp")%>');<%
						End If
					End If
				End If
			Else%>
				var form = window.opener.document.forms[0];
				var wndop = window.opener;
				form.target = '_parent';
				wndop.DoSubmit(form, '<%=strBackPage%>');<%
			End If
		End If

		If bClose Then%>
			window.close();<%
		End If%>
		}


		function changeShow(theArea){
			var data = {
				theArea:theArea,
				bAll:$('input[name=CheckShow]')[0].checked, 
				nStateId:$('input[name=StateId]').val(),
				method: ''
			};

			switch (theArea){
				case "state":
					data.method = "<%=kGetKLADRStates%>";
				break;
				case "province":
					data.method = "<%=kGetKLADRProvinces%>";
				break;
				case "city":
					data.method = "<%=kGetKLADRCities%>";
					$.extend(data, {nProvinceId:$('input[name=ProvinceId]').val()});
				break;
				case "street":
					data.method="<%=kGetKLADRCities%>";
					$.extend(data, {nProvinceId:$('input[name=ProvinceId]').val(),nCityId:$('input[name=CityId]').val()});
				break;
			}
			jsSubmit({
					action: '/asp/scripts/ajaxmethods.asp',
					data: data,
					showProcessing: true,
					defaultErrorHandling: false,
					onSuccess: ChangeShowArea
			});
		}
		function findVal(value, arrOldValue){
			for(var j=0; j<arrOldValue.length; j++){
				if (value == arrOldValue[j].value){
					arrOldValue.splice(j,1);
					return 1;
				}
			}
			return 0;
		}
		function ChangeShowArea(data){
			$(document).trigger('closeProcessing');
			var arrOldValue = new Array();
			var arrNewValue = new Array();
			var count=0
			var kladrSelect = $('select[name=KLADRArea]');
			arrOldValue = $('select[name=KLADRArea] option');
			var oldWidth =  kladrSelect.attr('clientWidth');
			var area = $('input[name=Area]').val();
			var value = "";
			kladrSelect.empty();
			count = 1;
			var bLessData = (data[0].length < arrOldValue.length)
			for(var i=0; i<data[0].length; i++){
				value = data[1][i] + "__" + data[0][i]
				if (area != 'province')
					value +=  '__';
				if(!bLessData)
					count = findVal(value, arrOldValue);
				arrNewValue[i] = $("<option></option>")
					.attr("bSave", count)
					.attr("value", value)
					.html(data[0][i])[0];
			}
			$(arrNewValue).appendTo( kladrSelect[0]);
			var newWidth= kladrSelect.attr('clientWidth');
			if(newWidth>oldWidth)
				 kladrSelect.css({'width':  kladrSelect.attr('offsetWidth')});
		}
		$('a[class="ui-dialog-titlebar-close ui-corner-all"]').hide();
	$(function() {
		var kladrSelect = $('select[name=KLADRArea]');
		msg = getSelectMsg("<%=strAreaPar%>");
		kladrSelect.select2({language: "ru", placeholder: msg});
	});
	//--></SCRIPT><%
End Sub

Function IsError(rs, arr)
	Dim errMsg
	errMsg = arr(2)

	If IsEmpty(rs) Then
		IsError = True
	ElseIf rs.EOF Then
		IsError = True
		errMsg = arr(1)
	ElseIf rs("CODE") = "-1" Then
		IsError = True
		If arr(3) <> "" Then errMsg = arr(3)
	ElseIf rs("CODE") = "-2" Then
		IsError = True
	Else
		IsError = False
		errMsg = ""
		'Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(rs, "CODE_ID", Array("CODE", "NAME"), "{0}__{1}")
		'Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(rs, "INDEX_NAME", Array("INDEX", "NAME"), "{0} {1}")
		'Call comHelper.DataSetAdapterHelper.Replace(rs, "INDEX_NAME", "__", "")

		OpenFormGroup obLanguage("ServAdmin", arr(0))%>
			<select name="KLADRArea" size="20" class="form-control" style="width: 100%"><%
				PopulateSelect rs, "CODE_ID", "INDEX_NAME", "1"%>
			</select><%
		CloseFormGroup
			
		rs.MoveFirst()

		Exit Function
	End If
	
	Call DrawInfo(DB2HTML_BR(errMsg), False)
End Function

Sub DrawButtons()
	If enableButtons Then
		Call ButtonImport("save('" & strAreaPar & "')", obLanguage("Common","kImport"))
			
		If objNSNET.IsAdminOfServer(strUserID) Then
			Call SimpleButton("saveAll();", obLanguage("Common","kImportAll"))
		End If
	End If
End Sub

Sub onDrawPage()
	Dim arrMsg, updated, errMsg

	Call onHeadSpecial()

				%>

	<form METHOD="POST" ACTION="SaveKLADRArea.asp" NAME="KLADR" onsubmit="return false;" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("StateId", nStateID, "StateName", strStateName, "ProvinceId", GetSafeLng(obTokenMgr.GetData(strToken,"Province"),0), "ProvinceName", strProvinceName, "CityId", GetSafeLng(obTokenMgr.GetData(strToken,"City"),0), "CityName", strCityName, "AllValue", "", "SaveAll", 0, "FromCreateOU", IIF(bFromCreateOUPage, 1, 0), "KLADR", IIF(bKLADR, "1", "0"), "Area", strAreaPar ))%>

		<h3><%=GetPageTitle()%></h3><%
		enableButtons = False

		If strAreaPar = "state" Then
			arrMsg =  Array("kStates", _
				obLanguage("Common","kAlreadyImportingRegoins"), _
				obLanguage("Common","kErrorRegionKLADRCode_Province"), _
				"")
			enableButtons = Not IsError(rsProvinces, arrMsg)
		ElseIf IsEmpty(strStateName) Then
				errMsg = obLanguage("Common","kErrorRegionKLADRCode_Province")
				Call DrawInfo(DB2HTML_BR(errMsg), False)
		Else
			OpenFormGroup obLanguage("Common", "kState")
				rw strStateName
			CloseFormGroup

			Select Case strAreaPar
			Case "street"
				If Not IsEmpty(strProvinceName) Then
					OpenFormGroup obLanguage("Common","kProvince")
						rw strProvinceName
					CloseFormGroup
				End If
				If Not IsEmpty(strCityName) Then
					OpenFormGroup obLanguage("Common","kCity")
						rw strCityName
					CloseFormGroup
				End If

				arrMsg =  Array( "kStreets", _
					obLanguage("Common","kAlreadyImportingLocations"), _
					obLanguage("Common","kErrorKLADRCode_Location"), _
					obLanguage("ServAdmin","kAvailabilityOfStreet") & ":" & obLanguage("Common","kNo"))
				enableButtons = Not IsError(rsLocations,arrMsg)
			Case "city"
				If Not IsEmpty(strProvinceName) Then
					OpenFormGroup obLanguage("Common","kProvince")
						rw strProvinceName
					CloseFormGroup
				End If
				arrMsg = Array("kCities", _
					obLanguage("Common","kAlreadyImportingCities"), _
					obLanguage("Common","kErrorRegionKLADRCode_City"), _
					"")
				enableButtons = Not IsError(rsCities, arrMsg)
			Case "province"
				arrMsg =  Array("kProvinces", _
					obLanguage("Common","kAlreadyImportingProvinces"), _
					obLanguage("Common","kErrorRegionKLADRCode_Province"), _
					"")
				enableButtons = Not IsError(rsProvinces, arrMsg)
			End Select
		End If

		If enableButtons Then
			OpenFormGroup ""
				rw ShowCheckbox("CheckShow", Null, True, "Не показывать имеющиеся элементы", "changeShow('" & strAreaPar & "')")
			CloseFormGroup
		End If

		Call DrawButtonPanel()%>
	</form><%

	updated = GetSafeLng(obTokenMgr.GetData(strToken, "KLADR_UPDATED"), 0)
	If updated > 0 Then%>
		<div class="well well-sm"><%=obLanguage("ServAdmin","kKLADR_UPDATED") & ": " & updated%></div><%
	End If
End Sub%>