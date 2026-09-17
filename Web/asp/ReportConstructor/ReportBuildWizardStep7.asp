<!-- #INCLUDE FILE="ReportBuildWizard_inc.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="ShowReportInfo_inc.asp" -->
<!-- #INCLUDE FILE="UpdateQueryFields_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kFormName		= "ReportBuild7"
Const kBackScript	= 6
Const kCondInSort	= 3

Const kArrSortOrderID	= 0
Const kArrObjectID		= 1
Const kArrPropertyID	= 2
Const kArrDirection		= 3

Dim bAvailSortings,nCnt
Dim strReportName, strIsPublished
Dim objObjectsRs, objObjPropsRs
Dim arrSortOrders, arrObjects

Sub Main()
	Dim objReport
	bAvailSortings = Cbool(objNSNETWork.IsAvailVarProperty(Clng( strQueryId ), kCondInSort ))
	If bAvailSortings Then nCnt = InitSortOrders() Else nCnt = 0

	Set objReport = objNSNETWork.GetReportInfo(Clng(strReportId) )
	strReportName = objReport("DISPLAYNAME")
	strIsPublished = objReport("ISPUBLISHED")
End Sub

Function CanAddProps ( strQueryId )
	Dim rsFQO
	Set rsFQO = GetFreeQueryObjects( strQueryID, "SORTORDERS" )

	CanAddProps = Not rsFQO.EOF
End Function

Sub onHeadSpecial()%>
<script><!--
function onStepTo ( nStep ) {
	if( isDBBusy() ) return false;<%
If nCnt > 1 Then%>
	var bsameprops = checkSameProps();
	if (bsameprops) {
		alert(language.Generic.Constructor.kAlertSameFieldsInSort);
		return false;
	}<%
End If%>
	var form = document.forms['<%=kFormName%>'];
	form.elements['STEPDIR'].value = nStep;
	setDBBusy();
	DoSubmit(document.forms['<%=kFormName%>'], '');
}
<%
If bAvailSortings Then%>
function addSortOrder() {
	if( isDBBusy() ) return false;<%
	If nCnt > 1 Then%>
	var bsameprops = checkSameProps();
	if (bsameprops) {
		alert(language.Generic.Constructor.kAlertSameFieldsInSort);
		return false;
	}<%
	End If%>
	var form = document.forms['<%=kFormName%>'];
	form.act.value='add';
	setDBBusy();
	DoSubmit(form, '');
}<%
	If nCnt > 0 Then%>

var flags_count = 0;
function delSortOrder() {
	if( isDBBusy() ) return false;
	if (flags_count <= 0) {
		alert(language.Generic.Constructor.kAlertNoFields);
		return false;
	}<%If nCnt > 1 Then%>
	var bsameprops = checkSamePropsDel();
	if (bsameprops) {
		alert(language.Generic.Constructor.kAlertSameFieldsInSortOnDel);
		return false;
	}<%End If%>
	$.show.confirmation(language.Generic.Constructor.kConfirmDelFields).then(function() {
		var form = document.forms['<%=kFormName%>'];
		form.act.value = 'delete';
		setDBBusy();
		DoSubmit(form, '');
	});
}
function onSelectChange( id ) {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	form.act.value='change';
	form.action = form.action  + '?SID='+id;
	setDBBusy();
	DoSubmit(form, '');
}
function Click_Handler( curr_checkbox ) {
	if ( curr_checkbox.checked ) flags_count++; else flags_count--;
}<%
		If nCnt > 1 Then%>
var ndistprops;
var distprops = new Array;

function iscommonprop( currid ) {	var i = 0;
	while ( i <= ndistprops && currid != distprops[i])
		i++;
	if ( i <= ndistprops && currid == distprops[i])
		return true;
	ndistprops++;
	distprops[ndistprops] = currid;
	return false;
}
function checkSamePropsDel() {	
	var i = 0;
	var props = document.forms.<%=kFormName%>.OBJPROPS;
	var checks = document.forms.<%=kFormName%>.GroupProperty;

	ndistprops = -1;
	while ( props[i] != null ) {
		if (!checks[i].checked)
			if ( iscommonprop( getItemValue(props[i]) ) ) return true;
		i++;
	}
	return false;
}
function checkSameProps() {	var i = 0;
	var props = document.forms.<%=kFormName%>.OBJPROPS;

	ndistprops = -1;
	while ( props[i] != null ) {
		if ( iscommonprop( getItemValue(props[i]) ) ) return true;
		i++;
	}
	return false;
}
function BtnPressed( nDirection ) {
	if( isDBBusy() ) return false;
	if (flags_count <= 0) {
		alert(language.Generic.Constructor.kAlertNoFields);
		return false;
	}<%If nCnt > 1 Then%>
	var bsameprops = checkSameProps();
	if (bsameprops) {
		alert(language.Generic.Constructor.kAlertSameFieldsInSort);
		return false;
	}<%End If%>

	var form = document.forms['<%=kFormName%>'];
	form.act.value = '';
	setDBBusy();
	ok( '<%=kFormName%>', 'ChangeOrders.asp?DIRECTION='+nDirection+'&ORDER=<%=kOrderSort%>' );
}<%
		End If
	End If
End If
%>
function Back(){
	goBack(document.forms['<%=kFormName%>'], 'ReportConstructor.asp');
}
//--></script><%
End Sub

Function GetAvailableReportInfo
	GetAvailableReportInfo = 9
End Function

Sub DrawButtons()
	DrawNavigationButons

	If nCnt > 1 Then
		Call DrawPositioningButtons()
	End If

	If bAvailSortings Then
		If CanAddProps(strQueryID) Then Call ButtonAdd("addSortOrder()", obLanguage("Constructor","kBtnAdd"))
		If nCnt > 0 Then Call ButtonDel("delSortOrder()", obLanguage("Constructor","kBtnDel"))
	End If
End Sub

Sub onDrawStepContent()
	Dim i

	If Not bAvailSortings Then
		DrawInfo obLanguage("Constructor","kNoAvailSortings"), False
		Exit Sub
	End If

	If nCnt = 0 Then
		DrawInfo obLanguage("Constructor","kNoSortOrdersAdded"), False
		Exit Sub
	End If

	%><table class="table table-bordered table-condensed">
		<tr>
			<th><%=obLanguage("Constructor","kObjects")%></th>
			<th><%=obLanguage("Constructor","kSortByField")%></th>
			<th><%=obLanguage("Constructor","kDirection")%></th>
			<th>&nbsp;</th>
		</tr><%
	For i = 0 To Ubound( arrSortOrders, 2 )
		%><tr><td><%
				Call DrawSelectArr( arrObjects, "QUERYOBJECTS", arrSortOrders(kArrObjectID, i), Null, "onSelectChange("&CStr(arrSortOrders(kArrSortOrderID, i))&")" )
			%></td><td><%
				Set objObjPropsRs = objNSNETWork.GetFreeObjectPropsForSorting(arrSortOrders(kArrObjectID, i),arrSortOrders(kArrPropertyID, i))
				If Not objObjPropsRs.EOF Then Call DrawSelectRs( objObjPropsRs, "OBJPROPS", "PROPERTYID", "DISPLAYNAME", arrSortOrders(kArrPropertyID, i), Null, "")%></td>
			<td>
				<%DrawSimpleSelectArr Array("A", obLanguage("Constructor","kSortAsc"), "D", obLanguage("Constructor","kSortDesc")), "SD", arrSortOrders(kArrDirection, i), Null, "_" %>
			</td>
			<td>
				<input type="hidden" name="SORTORDERID" value="<%=arrSortOrders(kArrSortOrderID, i)%>">
				<input type="checkbox" name="GroupProperty" value="<%=arrSortOrders(kArrSortOrderID, i)%>" onClick="Click_Handler(this)">
			</td>
		</tr><%
	Next
	%></table><%
End Sub

Function InitSortOrders()
	Dim objSortOrdersRs
	Set objObjectsRs = objNSNETWork.GetQueryPublicObjectsList(Clng( strQueryID ) )

	If objObjectsRs.EOF Then InitSortOrders = 0 : Exit Function
	arrObjects = objObjectsRs.GetRows(,,Array("QUERYOBJECTID", "PARENTNAME"))

	Set objSortOrdersRs = objNSNETWork.GetSortingsList(Clng(strQueryID) )
	If objSortOrdersRs.EOF Then InitSortOrders = 0 : Exit Function

	arrSortOrders = objSortOrdersRs.GetRows(,,Array("SORTORDERID", "QUERYOBJID", "PROPERTYID", "DIRECTION"))
	If IsEmpty(arrSortOrders) Then InitSortOrders = 0 Else InitSortOrders = UBound(arrSortOrders, 2) + 1
End Function
%>
