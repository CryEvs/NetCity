<!-- #INCLUDE FILE="ReportBuildWizard_inc.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="ShowReportInfo_inc.asp" -->
<!-- #INCLUDE FILE="UpdateQueryFields_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Const kFormName				= "ReportBuild5"
Const kDistinctName			= "DIST"
Const kGroupedReportName		= "GRP"
Const kCondInResult	= 1
Const kBackScript	= 4
Const kBackScriptName = "ReportBuildWizardStep4.asp"
Const kArrFieldID		= 0
Const kArrObjectID		= 1
Const kArrPropertyID	= 2
Const kArrExpressionID	= 3
Const kArrDisplayName	= 4


Dim bAvailResultFields
Dim nCnt, nStatus
Dim strReportName, strIsPublished
Dim arrFields, arrObjects

Sub WriteState()
	Call obTokenMgr.SetData ( strToken, stFieldOrder, nCnt + 1 )
End Sub

Function onUnLoad()
	If bAvailResultFields Then onUnload = "Unload();"
End Function

Sub Main
	Dim objReport, objStatus, objFunctionId

	Set objReport = objNSNETWork.GetReportInfo(Clng( strReportId ) )
	strReportName = objReport("DISPLAYNAME")
	strIsPublished = objReport("ISPUBLISHED")
	Set objStatus = objNSNETWork.GetQueryData(Clng( strQueryId ) )
	nStatus = Clng( objStatus("BUILDSTATUS") )

	Call InitFields()
	If IsEmpty(arrFields) Then nCnt = 0 : Exit Sub
	nCnt = UBound( arrFields, 2 ) + 1
End Sub

Sub InitFields()
	Dim i
	Dim objFieldsRs, objGroupings, objObjectsRs

	bAvailResultFields = Cbool(objNSNETWork.IsAvailVarProperty(Clng( strQueryId ), kCondInResult ))
	If Not bAvailResultFields Then nCnt = 0 : Exit Sub
	Set objObjectsRs = objNSNETWork.GetQueryPublicObjectsList(Clng( strQueryID ) )
	If objObjectsRs.EOF Then nCnt = 0 : Exit Sub
	arrObjects = objObjectsRs.GetRows(,,Array("QUERYOBJECTID", "PARENTNAME"))

	Set objFieldsRs = objNSNETWork.GetQueryFieldsList(Clng(strQueryId) )
	If objFieldsRs.EOF Then nCnt = 0 : Exit Sub
	arrFields = objFieldsRs.GetRows(,,Array("FIELDID", "QUERYOBJID", "PROPERTYID", "EXPRESSIONID","DISPLAYNAME"))
End Sub

Function CanAddProps ( strQueryId )
	Dim rsFQO
	Set rsFQO = GetFreeQueryObjects( strQueryID, "QUERYFIELDS" )
	CanAddProps = Not rsFQO.EOF
End Function

Sub onHeadSpecial()
%><script><!--
function onReload() {
	if( isDBBusy() ) return false;
	setDBBusy();
	postTo("<%=strScriptName %>", {STEPNO: 5})
}
function onStepTo ( nStep ) {
	fields = $('.fieldLine').length;
	if ($('input[name=<%=kGroupedReportName%>]').prop('checked')) {
		if (fields < 3) {
			return;
		}
	}

	var form = document.forms['<%=kFormName%>'];
	form.elements['STEPDIR'].value = nStep;
	<%If nCnt > 0 Then%>
	if( isDBBusy() ) return false;
	var els = $("[name=FN]");
	var fld1, fld2, el;
	if( els && els.length )
		for(var i = 0; i < els.length-1; i++){
			el = els[i];
			fld1 = trimStr(el.value);
			if( fld1 == '' )
				fld1 =  $(el).parent().parent().find("[name=OBJPROPS] option:selected").first().text();
			if( fld1 == '' )
				fld1 =  $(el).parent().parent().find("[name=OBJPROPS_label]").val();
			if( fld1 == '' ){
				focusAlert(el, language.Generic.Constructor.kAlertNoFieldName);
				return false;
			}
			for(var j = i+1; j < els.length; j++) {
				el = els[j];
				fld2 = trimStr(el.value);
				if( fld2 == '' )
					fld2 =  $(el).parent().parent().find("[name=OBJPROPS] option:selected").first().text();
				if( fld2 == '' )
					fld2 =  $(el).parent().parent().find("[name=OBJPROPS_label]").val();
				if( fld1.toLowerCase() == fld2.toLowerCase() ) {
					focusAlert(el, language.Generic.Constructor.kErrFieldNameExists);
					return false;
				}
			}
		}
	setDBBusy();
	ok( '<%=kFormName%>', '<%=kSaveScriptName%>' );
	<%Else%>
	ok_check_db( '<%=kFormName%>','ReportBuildWizardStep' + nStep + '.asp' )
	<%End If%>
}<%
If bAvailResultFields Then%>
function onAddField() {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	setDBBusy();
	form.act.value='add';
	ok( '<%=kFormName%>', '' );
}
var wndParams = null;
function closeWndParams() {
	if( wndParams && !wndParams.closed ) {
		wndParams.forceClosing = true;
		wndParams.close();
	}
}
function onAddExpr() { 
	if (wndParams) {
		closeWndParams();
	}
	var url = urlHelper.makeUrl("popupparams.asp", { NSTR: 1, ARR: "0|0|0|0|0|" });
	var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=460', winChild: wndParams};
	windowOpen( winOptions );
	wndParams = winOptions.winChild;
	center(wndParams,750,460);
	wndParams.focus();
}
function onEditExpr( ExpId ) { if (wndParams) {closeWndParams(); }
	var url = urlHelper.makeUrl("popupparams.asp", { EXPID: ExpId, UPEXP: 1 });
	var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=460', winChild: wndParams };
	windowOpen( winOptions );
	wndParams = winOptions.winChild;
	center(wndParams,750,460);
	wndParams.focus();
}
function Unload(){ 
	if (wndParams) closeWndParams(); 
}
<%If nCnt > 0 Then%>
var flags_count = 0;
function Click_Handler(curr_checkbox) {
	if (curr_checkbox.checked) flags_count++; else flags_count--;
}

function onSelectChange(fid) {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	form.action = 'SaveWizardStep5Info.asp?act=change&FID='+fid;
	setDBBusy();
	DoSubmit(form, '');
}

function delGroup() {
	var defArgs = new Array();
	if ($('input[name=<%=kGroupedReportName%>]').prop('checked')) {

		if (($('.fieldLine').length - $('input[name=GroupProperty]:checked').length < 3)) {

			alert(language.Generic.Constructor.kNeed2columns);
			return false;
		}
		if ($('input[name=GroupProperty]')[0].checked == true || $('input[name=GroupProperty]')[1].checked == true) {
			defArgs = $.show.getConfirmation(language.Generic.Constructor.kDeleteMainColumns);
		}
	}
	if( isDBBusy() ) return false;
	extDeferred.when(defArgs).then(function(){
		if (flags_count > 0) {
			$.show.confirmation(language.Generic.Constructor.kConfirmDelFields).then(function() {
				var form = document.forms['<%=kFormName%>'];
				form.act.value = 'delete';
				setDBBusy();
				DoSubmit(form, '');
			});
		}
		else
			alert(language.Generic.Constructor.kAlertNoFields);
	});
}
<%	If nCnt > 1 Then%>
function BtnPressed( nDirection ) {
	if( isDBBusy() ) return false;
	if (flags_count > 0) {
		setDBBusy();
		ok('<%=kFormName%>','ChangeOrders.asp?DIRECTION='+nDirection+'&ORDER=<%=kOrderQueryFields%>');
	} else
		alert(language.Generic.Constructor.kAlertNoFields);
}<%	End If
	End If
End If%>

function <%=kGroupedReportName%>_onchange() {
	fields = $('.fieldLine').length;
	if ($('input[name=<%=kGroupedReportName%>]').prop('checked')) {
		if (fields < 3) {
			$('#warning').html(language.Generic.Constructor.kNeed2columns).removeClass("hidden");
			return;
		}
		else {
			$('#warning').html(language.Generic.Constructor.kNeedCheckSorts).removeClass("hidden");
		}
	}
	else {
		$('#warning').html('').addClass("hidden");
	}
}

//--></script><%
End Sub

Sub DrawButtons()
	Button "onStepTo(" & kBackScript & ")", obLanguage("SetupSchoolCalendar","kPrev"), obLanguage("SetupSchoolCalendar","kPrev"), "glyphicon glyphicon-circle-arrow-left"
	If nCnt > 0 Then Button "onStepTo(" & kBackScript + 2 & ")", obLanguage("SetupSchoolCalendar","kNext"), obLanguage("SetupSchoolCalendar","kNext"), "glyphicon glyphicon-circle-arrow-right"

	If nCnt > 1 Then
		DrawPositioningButtons
	End If

	If bAvailResultFields Then
		If CanAddProps(strQueryID) Then
			Button "onAddField()", obLanguage("Constructor","kBtnAddField"), obLanguage("Constructor","kBtnAddField"), "glyphicon glyphicon-plus-sign"
		End If
		Button "onAddExpr()", obLanguage("Constructor","kBtnAddExp"), obLanguage("Constructor","kBtnAddExp"), "glyphicon glyphicon-plus-sign"
	End If

	If nCnt > 0 Then 
		ButtonDel "delGroup()", obLanguage("Constructor","kBtnDel")
	End If
End Sub

Function GetAvailableReportInfo
	If nStatus >= 5 And nCnt > 0 Then
		GetAvailableReportInfo = 9
	Else
		GetAvailableReportInfo = 5
	End If
End Function

Sub onDrawStepContent()
	Dim objObjPropsRs, objDist
	Dim i

	If nCnt > 0 Then
	%><table class="table table-bordered table-condensed"><tr><th><%=obLanguage("Constructor","kObject")%></th><th><%=obLanguage("Constructor","kField")%></th><th><%=obLanguage("Constructor","kFieldName")%></th><th><%=obLanguage("Constructor","kCheck")%></th></tr><%
		For i = 0 To Ubound( arrFields, 2 )%>
		<tr class='fieldLine text-center'><%
			If IsNull (arrFields(kArrExpressionID, i)) Then
				%><td><%Call DrawSelectArr( arrObjects, "QUERYOBJECTS", arrFields(kArrObjectID, i), Null, "onSelectChange("&CStr(arrFields(kArrFieldID, i))&")")%></td><td><%
				Set objObjPropsRs = objNSNETWork.GetFreeQueryFields( arrFields(kArrObjectID, i), arrFields(kArrPropertyID, i))
				If Not objObjPropsRs.EOF Then
					Call DrawSelectRs( objObjPropsRs, "OBJPROPS", "PROPERTYID", "DISPLAYNAME", arrFields(kArrPropertyID, i), Null, "")
				End If
				%></td><%
			Else
				%>
				<td><%=PrintExpression ( arrFields(kArrExpressionID, i) )%>
				<input type="hidden" name="QUERYOBJECTS" value="">
				<input type="hidden" name="OBJPROPS" value="">
				</td>
				<td><% Call ButtonEdit("onEditExpr(" & arrFields(kArrExpressionID, i) & ");", obLanguage("Constructor","kBtnEdit"))%></td>
				<%
			End If
			%><td>
					<%DrawInput arrFields(kArrDisplayName, i), "FN", "text", "", 30, 100, ""%>
					<input type="hidden" name="FIELDID" value="<%=arrFields(kArrFieldID, i)%>">
				</td>
				<td><input type="checkbox" name="GroupProperty" value="<%=arrFields(kArrFieldID, i)%>" onClick="Click_Handler(this)"></td></tr><%
		Next

		Set objDist = objNSNETWork.GetQueryData(Clng( strQueryId ) )
		%></table><%

		rw ShowCheckbox( kDistinctName, "Y", CStr(objDist("ISDISTINCT")) = "Y", obLanguage("Constructor","kDistintSelect"), "" )
		rw ShowCheckbox( kGroupedReportName, "Y", CStr(objDist("ISGROUPEDREPORT")) = "Y", obLanguage("Constructor","kGroupedReport"), kGroupedReportName & "_onchange();" )
		%><div class="alert alert-warning hidden" role="alert" id="warning"></div><%
	Else
		If bAvailResultFields Then
			DrawInfo obLanguage("Constructor","kNoQueryFieldsAdded"), False
		Else
			DrawInfo obLanguage("Constructor","kNoResultFields"), False
		End If
	End If
End Sub

%>
