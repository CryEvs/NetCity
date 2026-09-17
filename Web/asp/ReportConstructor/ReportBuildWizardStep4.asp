<!-- #INCLUDE FILE="ReportBuildWizard_inc.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="ShowReportInfo_inc.asp" -->
<!-- #INCLUDE FILE="UpdateQueryFields_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Const kFormName			= "ReportBuild4"
Const kCondInGroup		= 0
Const kArrGroupingID	= 0
Const kArrObjectID		= 1
Const kArrPropertyID	= 2
Const kBackScript	= 3

Dim bAvailGroupings, bSortOrders, bSortingsPresent, bQueryFieldsPresent, bQueryFields
Dim nCnt, nStatus
Dim strIsPublished, strReportName
Dim objObjectsRs, objObjPropsRs
Dim arrGroups, arrSortings, arrQueryFields, arrObjects

Sub Main()
	Dim objReport

	bAvailGroupings = Cbool(objNSNETWork.IsAvailVarProperty(Clng( strQueryId ), kCondInGroup ))
	If bAvailGroupings Then nCnt = InitGroups() Else nCnt = 0

	Set objReport = objNSNETWork.GetReportInfo(Clng(strReportID) )
	strReportName = GetSafeStr(objReport("DISPLAYNAME"), -1, Null)
	strIsPublished = GetSafeStr(objReport("ISPUBLISHED"), 1, Null)
	nStatus = GetLngQueryBuildStatus( strQueryID )
	If nCnt = 0 Then
		bQueryFieldsPresent = CheckQueryFieldsPresent( strQueryId )
		bSortingsPresent = CheckSortingsPresent( strQueryId )
		bSortOrders = false
	Else
		bSortOrders = CheckSortOrders( strQueryId )
		bQueryFields = CheckQueryFields (strQueryId )
	End If
End Sub

Function CanAddProps ( strQueryId )
	Dim rsFQO
	Set rsFQO = GetFreeQueryObjects( strQueryID, "GROUPINGS" )

	CanAddProps = Not rsFQO.EOF
End Function

Function CheckQueryFields( strQueryId )
	Dim i
	Dim nExpIds, nExpProps
	Dim objQueryFields, objQFExpressions, nQE, nExpLines, objExpLines, objExpProps
	Dim arrExpIds, arrExpProps

	Set objQueryFields = objNSNETWork.GetQueryFieldsInGroupings(Clng( strQueryId ) )
	nQE = objNSNETWork.GetQueryExpressionsCount(Clng( strQueryId ) )

	nExpIds = 0 : nExpProps = 0
	If nQE > 0 Then
		Redim arrExpIds(nQE - 1)
		Set objQFExpressions = objNSNETWork.GetExpressionId(Clng( strQueryId ) )
		While Not objQFExpressions.EOF
			nExpLines = objNSNETWork.GetExpLinesCount(Clng(objQFExpressions("EXPRESSIONID")) )
			If nExpLines = 1 Then
				Set objExpLines = objNSNETWork.GetExpressionExplines(Clng( objQFExpressions("EXPRESSIONID") ) )
				If IsNull(objExpLines("FUNCTIONID")) Then
					arrExpIds(nExpIds) = objExpLines("PROPERTYID")
					nExpIds = nExpIds + 1
				End If
			End If
			objQFExpressions.MoveNext
		Wend
		Redim arrExpProps( 1, nExpIds - 1 )
		For i = 0 To nExpIds - 1
			Set objExpProps = objNSNETWork.GetGroupingId(Clng( arrExpIds(i) ) )
			If Not objExpProps.EOF Then
				arrExpProps(0, nExpProps ) = objExpProps("GROUPINGID")
				arrExpProps(1, nExpProps ) = arrExpIds(i)
				nExpProps = nExpProps + 1
			End If
		Next
	End If

	If objQueryFields.EOF And nExpProps = 0 Then
		CheckQueryFields = False
	ElseIf Not objQueryFields.EOF And nExpProps > 0 Then
		arrQueryFields = objQueryFields.GetRows(,,Array("GROUPINGID","PROPERTYID"))
		Redim Preserve arrQueryFields(1,Ubound(arrQueryFields,2) + nExpProps )
		For i = 0 To nExpProps - 1
			arrQueryFields(0, Ubound(arrQueryFields,2) + i ) = arrExpProps(0, i )
			arrQueryFields(1, Ubound(arrQueryFields,2) + i ) = arrExpProps(1, i )
		Next
		CheckQueryFields = True
	ElseIf Not objQueryFields.EOF And nExpProps = 0 Then
		arrQueryFields = objQueryFields.GetRows(,,Array("GROUPINGID","PROPERTYID"))
		CheckQueryFields = True
	Else
		Redim arrQueryFields(1, nExpProps - 1 )
		For i = 0 To nExpProps - 1
			arrQueryFields(0, i ) = arrExpProps(0, i )
			arrQueryFields(1, i ) = arrExpProps(1, i )
		Next
		CheckQueryFields = True
	End If
End Function

Function CheckSortOrders( strQueryId )
	Dim objOrders

	Set objOrders = objNSNETWork.GetSortOrdersInGroupings(Clng( strQueryId ) )
	If objOrders.EOF Then
		CheckSortOrders = false
	Else
		CheckSortOrders = true
		arrSortings = objOrders.GetRows(,,Array("GROUPINGID","PROPERTYID"))
	End If
End Function

Sub onHeadSpecial()
	Dim i
%><script><!--
function CalcAction ( form, confirms )
{
	<%
If bSortOrders Then%>
	if ( checkSortingsOnChange() )
		confirms.push($.show.getConfirmation(language.Generic.Constructor.kConfirmChangeSort));<%
End If
If bQueryFields Then%>
	if ( checkQfOnChange() )
		confirms.push($.show.getConfirmation(language.Generic.Constructor.kConfirmChangeQf));<%
End If

If nCnt > 1 Then%>
	if (checkSameProps())
	{
		alert(language.Generic.Constructor.kAlertSameFieldsInGroup);
		return false;
	}
	if( form.act.value!='delete') return true;
	<%
If bSortOrders Then%>
	if ( checkSortings() )
	{
		confirms.push($.show.getConfirmation(language.Generic.Constructor.kConfirmSortings));
	}<%
End If
If bQueryFields Then%>
	if ( checkQueryFields() )
	{
		confirms.push($.show.getConfirmation(language.Generic.Constructor.kConfirmQFields));
	}<%
End If
End If%>
	return true;
}

function canSubmit() {
	var form = document.forms['<%=kFormName%>'];
	var confirms = [];
	if( !CalcAction(form, confirms) ) {
		return false;
	}
	return extDeferred.when(confirms);
}


<%If bAvailGroupings Then%>

function addGroup() {
	var confirms = new Array();
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	<%If nCnt = 0 Then
		If bSortingsPresent Then
			%>confirms.push($.show.getConfirmation(language.Generic.Constructor.kConfirmAddFieldS));<%
		End If
		If bQueryFieldsPresent Then
			%>confirms.push($.show.getConfirmation(language.Generic.Constructor.kConfirmAddFieldR));<%
		End If
	Else%>
		if( !CalcAction(form, confirms) ) return false;<%
	End If%>

	extDeferred.when(confirms).then(function(){
		form.act.value = 'add';
		setDBBusy();
		DoSubmit(form, '<%=kSaveScriptName%>');
	});
}<%
If nCnt > 0 Then%>

var flags_count = 0;<%
If bSortOrders Then%>

function checkSortings()
{	var i , j;
	var form = document.forms['<%=kFormName%>'];
	var chbox = form.GroupProperty;
	var props_arr = new Array(<%=Ubound(arrSortings,2)+1%>);<%
	For i = 0 To Ubound(arrSortings,2)
%>	props_arr[<%=i%>]=<%=arrSortings(0,i)%>;<%
	Next%>
	for( i = 0; i<<%=nCnt%>; i++)
		for ( j = 0; j<<%=Ubound(arrSortings,2)+1%>; j++ )
			if (chbox[i].checked && chbox[i].value == props_arr[j])
				return true;
	return false;
}
function checkSortingsOnChange()
{	var i = 0, j, tmpVal, k = 0;
	var bnotfound = false;
	var form = document.forms['<%=kFormName%>'];
	var sel = form.OBJPROPS, selVal;
	var gprops_arr = new Array(<%=Ubound(arrSortings,2)+1%>);<%
For i = 0 To Ubound(arrSortings,2)%>
	gprops_arr[<%=i%>]=<%=arrSortings(1,i)%>;<%
Next%>
	while ( i < gprops_arr.length )
	{
		bnotfound = true;<%
	If nCnt > 1 Then%>
		j = 0;
		while ((bnotfound) && (j < <%=nCnt%>))
		{
			tmpVal = getItemValue(sel[j]);
			if (tmpVal == gprops_arr[i])
				bnotfound = false;
			else
				j++;
		}<%
	Else%>
		if (sel.type == "select-one")
			selVal = getListValue(sel);
		else
			selVal = sel.value
		if (selVal == gprops_arr[i])
			bnotfound = false;<%
	End If%>
		i++;
	}
	if (bnotfound)
		return false;
	return true;
}<%
End If
If bQueryFields Then%>

function checkQueryFields()
{	var i, j;
	var form = document.forms['<%=kFormName%>'];
	var chbox = form.GroupProperty;
	var props_arr = new Array(<%=Ubound(arrQueryFields,2)+1%>);<%
	For i = 0 To Ubound(arrQueryFields,2)
%>	props_arr[<%=i%>]=<%=arrQueryFields(0,i)%>;<%
	Next%>
	for( i = 0; i<<%=nCnt%>; i++)
		for ( j = 0; j<<%=Ubound(arrQueryFields,2)+1%>; j++ )
			if (chbox[i].checked && chbox[i].value == props_arr[j])
				return true;
	return false;
}
function checkQfOnChange()
{	var i = 0, j;
	var bnotfound = false;
	var form = document.forms['<%=kFormName%>'];
	var sel = form.OBJPROPS, selVal;
	var gprops_arr = new Array(<%=Ubound(arrQueryFields,2)+1%>);
	var tmpVal;<%
For i = 0 To Ubound(arrQueryFields,2)%>
	gprops_arr[<%=i%>]=<%=arrQueryFields(1,i)%>;<%
Next%>
	while ( i < gprops_arr.length )
	{
		bnotfound = true;<%
	If nCnt > 1 Then%>
		j = 0;
		while ((bnotfound) && (j < <%=nCnt%>))
		{
			tmpVal = getItemValue(sel[j]);
			if (tmpVal == gprops_arr[i])
				bnotfound = false;
			else
				j++;
		}<%
	Else%>
		if (sel.type == "select-one")
			selVal = getListValue(sel);
		else
			selVal = sel.value
		if (selVal == gprops_arr[i])
			bnotfound = false;<%
	End If%>
		i++;
	}
	if (bnotfound)
		return false;
	return true;
}<%
End If%>
function delGroup()
{
	var confirms = new Array();
	if( isDBBusy() ) return false;
	if (flags_count <= 0)
	{
		alert(language.Generic.Constructor.kAlertNoFields);
		return false;
	}
	$.show.confirmation(language.Generic.Constructor.kConfirmDelFields).then(function()
	{
		var form = document.forms['<%=kFormName%>'];
		form.act.value='delete';
		if( flags_count ==<%=nCnt%> )
		{
			setDBBusy();
			DoSubmit(form, '');
			return true;
		}
		if( !CalcAction(form, confirms) ) return false;
		extDeferred.when(confirms).then(function(){
			setDBBusy();
			DoSubmit(form, '');
		});
	});
}
function onSelectChange( gid )
{
	var confirms = new Array();
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	form.act.value='change';
	if( !CalcAction(form,confirms) ) return false;
	extDeferred.when(confirms).then(function(){
		form.action = form.action  + '?GID='+gid;
		setDBBusy();
		DoSubmit(form, '');
	});
}
function Click_Handler( curr_checkbox )
{
	if ( curr_checkbox.checked ) flags_count++; else flags_count--;
}<%
If nCnt > 1 Then%>
var ndistprops;
var distprops = new Array;

function iscommonprop( currid )
{	var i = 0;
	while ( i <= ndistprops && currid != distprops[i]) {i++}
	if ( i <= ndistprops && currid == distprops[i])
	 return true;
	else{
		ndistprops++;
		distprops[ndistprops] = currid;
		return false
	}
}
function checkSameProps()
{	var i = 0;
	var bcommon = false, sQO, sOP;
	var props = document.forms.<%=kFormName%>.OBJPROPS;
	var objs = document.forms.<%=kFormName%>.QUERYOBJECTS;

	ndistprops = -1;
	while (props[i] != null && !bcommon)
	{
		sOP = (props[i].value != null) ? props[i].value : getListValue(props[i]);
		sQO = (objs[i].value != null) ? objs[i].value : getListValue(objs[i]);

		bcommon = iscommonprop( sQO+','+sOP );
		if (!bcommon) {i++;}
	}
	return bcommon;
}
function BtnPressed( nDirection )
{
	var confirms = new Array();
	if( isDBBusy() ) return false;
	if (flags_count <= 0)
	{
		alert(language.Generic.Constructor.kAlertNoFields);
		return false;
	}
	var form = document.forms['<%=kFormName%>'];
	var saction = 'ChangeOrders.asp?DIRECTION='+nDirection+'&ORDER=<%=kOrderGroup%>';
	if( !CalcAction(form,confirms) ) return false;
	extDeferred.when(confirms).then(function(){
		form.action = saction;
		form.act.value = '';
		setDBBusy();
		DoSubmit(form, '');
	});
}<%
End If	' >1
End If	' >0
End If
%>
//--></script>
<%
End Sub

Function CheckSortingsPresent( nQueryId )
	Dim nNum
	nNum = objNSNETWork.GetSortOrdersCount(nQueryId )
	CheckSortingsPresent = (nNum > 0)
End Function

Function CheckQueryFieldsPresent( nQueryId )
	Dim nNum
	nNum = objNSNETWork.GetQueryFieldsCount(nQueryId )
	CheckQueryFieldsPresent = (nNum > 0)
End Function

Function GetAvailableReportInfo
	If nStatus >= 6 And CheckQueryFieldsPresent ( strQueryId ) Then
		GetAvailableReportInfo = 9
	Else
		GetAvailableReportInfo = 5
	End If
End Function

Sub DrawButtons()
	DrawNavigationButons

	If nCnt > 1 Then
		DrawPositioningButtons
	End If

	If bAvailGroupings Then
		If CanAddProps(strQueryID) Then Call ButtonAdd("addGroup()", obLanguage("Constructor","kBtnAdd"))
		If nCnt > 0 Then Call ButtonDel("delGroup()", obLanguage("Constructor","kBtnDel"))
	End If
End Sub

Function InitGroups()
	Dim objGroupsRs

	Set objObjectsRs = objNSNETWork.GetQueryPublicObjectsList(Clng( strQueryID ) )
	If objObjectsRs.EOF Then InitGroups = 0 : Exit Function
	arrObjects = objObjectsRs.GetRows(,,Array("QUERYOBJECTID", "PARENTNAME"))

	Set objGroupsRs = objNSNETWork.GetQueryGroupingsProps(Clng( strQueryId ) )
	If objGroupsRs.EOF Then InitGroups = 0 : Exit Function
	arrGroups = objGroupsRs.GetRows(,,Array("GROUPINGID", "QUERYOBJID", "PROPERTYID"))
	If IsEmpty(arrGroups) Then InitGroups = 0 Else InitGroups = UBound(arrGroups, 2) + 1
End Function

Sub onDrawStepContent()
	Dim i
	If Not bAvailGroupings Then 
		DrawInfo obLanguage("Constructor","kNoAvailGroupings"), False
		Exit Sub
	End If
	If nCnt <= 0 Then 
		DrawInfo obLanguage("Constructor","kNoGroupsAdded"), False
		Exit Sub
	End If

	%><table class="table table-bordered table-condensed">
		<tr><th><%=obLanguage("Constructor","kObjects")%></th><th><%=obLanguage("Constructor","kGroupByField")%></th><th><%=obLanguage("Constructor","kCheck")%></th></tr><%
	For i = 0 To nCnt-1 %>
		<tr>
			<td><%Call DrawSelectArr( arrObjects, "QUERYOBJECTS", arrGroups(kArrObjectID, i), Null, "onSelectChange('"&arrGroups(kArrGroupingID, i)&"')" )%></td>
			<td><%
				Set objObjPropsRs = objNSNETWork.GetFreeObjectPropsForGrouping(arrGroups(kArrObjectID, i), arrGroups(kArrPropertyID, i))
				If Not objObjPropsRs.EOF Then Call DrawSelectRs( objObjPropsRs, "OBJPROPS", "PROPERTYID", "DISPLAYNAME", arrGroups(kArrPropertyID, i), Null, "" )%>
			</td>
			<td>
				<input type="hidden" name="GROUPINGID" value="<%=arrGroups(kArrGroupingID, i)%>" />
				<input type="checkbox" name="GroupProperty" value="<%=arrGroups(kArrGroupingID, i)%>" onClick="Click_Handler(this)" />
			</td>
		</tr><%
	Next%></table><%
End Sub

Function GetLngQueryBuildStatus( strQueryID )
	Dim objRs
	Set objRs = objNSNETWork.GetQueryData(Clng( strQueryId ) )
	If objRs.EOF Then GetQueryBuildStatus = 0 : Exit Function
	GetLngQueryBuildStatus = CLng(objRs("BUILDSTATUS"))
End Function
%>
