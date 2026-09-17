<!-- #INCLUDE FILE=../headerprint.asp -->
<!-- #INCLUDE FILE=../scripts/ScreenNonPrint.asp -->
<!-- #INCLUDE FILE="../scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE FILE="UpdateQueryFields_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kParamsForm	= "ParamsForm"
Const kNameForm		= "NameForm"
Const kArrName		= "ARR"

Const kOpenSign		= "("
Const kCloseSign	= ")"

Const kExprInputName	= "SCREENNAME"
Const kObjName			= "OBJNAME"
Const kStrElemCount		= 6

Const indExpFunctionId	= 0
Const indExpFunctionName= 1
Const indExpFunctionSign= 2

Const indExpOperationId		= 0
Const indExpOperationName	= 1
Const indExpOperationSign	= 2
Const indExpOperationType	= 3

Const indSelOpen			= 0
Const indSelExpFunction		= 1
Const indSelObjects			= 2
Const indSelProps			= 3
Const indSelClose			= 4
Const indSelExpOperations	= 5

Const indLParenth		= 0
Const indFunctionId		= 1
Const indObjectId		= 2
Const indPropertyId		= 3
Const indConstant		= 4
Const indRParenth		= 5
Const indOperationId	= 6

Const indObjpPropertyId		= 0
Const indObjpDisplayName	= 1

Const kSplitter = "|"

Dim bGroupings
Dim nQueryId, nExpressionId, nCid, nStrCount', nUpExp
Dim strSelArr, strExpName, strExpString
Dim objExpFunctions, objExpOperations, objQueryObjects, objObjectProps
Dim arrExpFunctions, arrExpOperations, arrQueryObjects, arrObjectProps, arrInfo

Sub ReadState()
	nExpressionId	= GetSafeLng( Request("EXPID"), 0 )
	nQueryId		= GetSafeID( obTokenMgr.GetData(strToken, stQueryId), Null )
	nStrCount		= GetSafeLng( Request("NSTR"), 0 )

	If nStrCount <> 0 Then
		strExpName	= GetSafeStr( Request("NAME"), -1, "" )
		strSelArr	= GetSafeStr( Request("ARR"), -1, "" )
		arrInfo		= Split( strSelArr, kSplitter, -1, 0 )
	End If
End Sub

Sub Main()
	Dim objGroupsRs

	Set objQueryObjects = objNSNETWork.GetQueryPublicObjectsList((nQueryId) )
	'If objQueryObjects.EOF Then response.write obLanguage("Constructor","kErrReport") : response.end
	arrQueryObjects = objQueryObjects.GetRows(,,ARRAY("QUERYOBJECTID", "parentname"))
	Set objExpFunctions = objNSNETWork.GetExpFunctionsList()
	arrExpFunctions = objExpFunctions.GetRows(,,ARRAY("FUNCTIONID", "NAME", "DISPLAYSIGN"))
	Set objExpOperations = objNSNETWork.GetExpOperationsList()
	arrExpOperations = objExpOperations.GetRows(,,ARRAY("OPERATIONID", "NAME", "DISPLAYSIGN", "OPERTYPE"))

	If nStrCount = 0 Then Call AquireExpData
	Set objGroupsRs = objNSNETWork.GetQueryGroupingsProps(nQueryId )
	bGroupings = Not objGroupsRs.EOF
End Sub

Function onLoad()
	onLoad = "setDBFree();"
End Function

Sub OnHead()%>
<script><!--

var kn = <%=kStrElemCount%>;
var nn=<%=nStrCount%>;

function onCancel()
{ $.show.confirmation(language.Generic.Constructor.kCloseWithoutSaving).then(function()
	{
		window.forceClosing = true;
		window.close();
	});
}
function CheckNames()
{
	var el = document.forms['<%=kNameForm%>'].elements['<%=kExprInputName%>'];
	if ( el.value == '' )
	{
		focusAlert(el,language.Generic.Constructor.kAlertNoFieldName);
		return false;
	}
	return true;
}

function CheckBrackets ( form )
{	var i, cnt=0;
	var elems = $(':input:not(button)','form[name=ParamsForm]');
	for ( i = 0; i < nn; i++)
	{
		if (elems[i*kn].selectedIndex == 1)
			cnt++;
		if (elems[i*kn+4].selectedIndex == 1)
			cnt--;
	}
	if (cnt < 0){
		alert(language.Generic.Constructor.kAlertNoLBrackets);
		return false;
	}
	if (cnt > 0){
		alert(language.Generic.Constructor.kAlertNoRBrackets);
		return false;
	}
	return true;
}

var btype = true;
<%If nStrCount > 1 Then%>
function CheckOperations ( form )
{	var ntype;
	var elements = $(':input:not(button)','form[name=ParamsForm]');
	btype = elements[5].options[4].selected;
	for (var i=1; i<nn-1; i++)
	{
		el = elements[i*kn+5];
		ntype = el.options[4].selected;
		if(btype != ntype){
			focusAlert(el, language.Generic.Constructor.kAlertConcat );
			return false;
		 }
	}
	return true;
}
<%End If%>
function CheckConstants ( form )
{
	var elements = $(':input:not(button)','form[name=ParamsForm]');
	if  (!btype){
		for (var i=0; i<nn; i++)
		{
			if (elements[i*kn+2].selectedIndex == 0)
			{
				el = elements[i*kn+3];
				el.value=el.value.trim().replace(',','.');
				if (el.value==''){
					focusAlert(el, language.Generic.Constructor.kAlertInvalidConst );
					return false;
				}
				val = el.value;
				intval = +val; //parseInt(val, 10);
				if (isNaN(intval) || (intval == 0)){
					focusAlert(el, language.Generic.Constructor.kAlertInvalidConst );
					return false;
				}
			}
		}
	}
	return true;
}
function HotKey(e) {
	e=getEvent(e);
	keycode = getKeyCode(e);

	if (keycode == 13)
		onOk();
}
$(document).on('keypress', HotKey);

function onOk()
{
	if( isDBBusy() ) return;
	var form;
	if ( CheckNames() )
	{
		form = document.forms['<%=kParamsForm%>'];
		if (<%If nStrCount > 1 Then%>CheckOperations (form) && CheckBrackets (form) && <%End If%>CheckConstants(form))
		{
			var infArray = '';
			infArray = MakeInfArray( form, infArray, 0, nn*kn- 1, 0 );
			form.ARR.value = infArray;
			form.NAME.value = document.forms['<%=kNameForm%>'].elements['<%=kExprInputName%>'].value;
			setDBBusy();
			DoSubmit(form, 'SavepopupParams.asp');
		}
	}
}

function onView()
{	var form = document.forms['<%=kParamsForm%>'];
	if (CheckConstants(form))
	{	var infArray = '';
		infArray = MakeInfArray( form, infArray, 0, nn*kn- 1, 0 );
		SubmitParams( form, infArray, nn,1 );
	}
}

function SubmitParams( form, infArray, strcount, update )
{
	form.action = 'popupParams.asp?EXPID=<%=nExpressionId%>&UPEXP='+update+'&NSTR='+strcount;
	form.elements.NAME.value = document.forms.<%=kNameForm%>.elements.<%=kExprInputName%>.value;
	form.elements['<%=kArrName%>'].value = infArray;
	DoSubmit(form, '');
}

function onSelectChange( stringnum )
{	var form = document.forms['<%=kParamsForm%>'];
	if ( CheckConstants( form ) )
	{	var infArray = '';
		var i;
		var elements = $(':input:not(button)','form[name=ParamsForm]');
		for ( i=0; i < nn*kn- 1; i++)
		{
			if (elements[i].value == ''
				|| (elements[i].name == '<%=kObjName%>'
					&& i >= stringnum*kn
					&& i < (stringnum+1)*kn ) )
				infArray += '0';
			else
				infArray += getItemValue(elements[i]);
			infArray += '<%=kSplitter%>';
		}
		SubmitParams( form, infArray, nn,0 );
	}
}

function onSelectChangeProps( stringnum )
{	var form = document.forms['<%=kParamsForm%>'];
	var elements = $(':input:not(button)','form[name=ParamsForm]');
	if (CheckConstants(form))
	{	var infArray = '';
		var i;
		for ( i=0; i < nn*kn- 1; i++)
		{
			if (elements[i].value == '' 
				|| ( (elements[i].name == '<%=kObjName%>' 
					&& elements[i-1].value == '0')
					&& i >= stringnum*kn
					&& i < (stringnum+1)*kn ))
				infArray += '0';
			else
				infArray += getItemValue(elements[i]);
			infArray += '<%=kSplitter%>';
		}
		SubmitParams( form, infArray, nn,0 );
	}
}

function MakeInfArray ( form, infArray, nstart, nend, nadd )
{	var i, elems = $(':input:not(button)','form[name=ParamsForm]');
	var ref;
	for ( i = nstart; i < nend; i++)
	{
		lval = getItemValue(elems[i+nadd]);
		if ( lval == '')
			infArray += '0';
		else
			infArray += lval;
		infArray += '<%=kSplitter%>';
	}
	return infArray;
}
function onAddString ()
{	var form = document.forms['<%=kParamsForm%>'];
	if (CheckConstants(form))
	{	var infArray = '';
		var i;
		infArray = MakeInfArray( form, infArray, 0, nn*kn- 1, 0 );
		for ( i =0; i < kn; i++)
			infArray += '0<%=kSplitter%>';
		SubmitParams( form, infArray, nn+1,0 );
	}
}

function onDeleteString ( stringnum )
{	var form = document.forms['<%=kParamsForm%>'];
	if (CheckConstants(form))
	{	var infArray = '';
		var i;
		var elements = $(':input:not(button)','form[name=ParamsForm]');
		for ( i=0; i < nn*kn- 1; i++)
		{
			if ( i < stringnum*kn || i >= (stringnum + 1)*kn )
			{
				if (elements[i].value != '')
					infArray += getItemValue(elements[i]);
				else
					infArray += '0';
				infArray += '<%=kSplitter%>';
			}
		}
		SubmitParams( form, infArray, nn-1,0 );
	}
}

function onBtnUpPressed ( stringnum )
{	var form = document.forms['<%=kParamsForm%>'];
	if (CheckConstants(form))
	{	var infArray = '';
		infArray = MakeInfArray( form, infArray, 0, (stringnum-1)*kn, 0 );
		infArray = MakeInfArray( form, infArray, (stringnum-1)*kn, (stringnum)*kn-1, kn );
		infArray = MakeInfArray( form, infArray, (stringnum)*kn-1, (stringnum)*kn, 0 );
		infArray = MakeInfArray( form, infArray, stringnum*kn, (stringnum+1)*kn-1, -kn );
		infArray = MakeInfArray( form, infArray, (stringnum+1)*kn-1, (stringnum+1)*kn, 0 );
		infArray = MakeInfArray( form, infArray, (stringnum+1)*kn, nn*kn- 1, 0 );
		SubmitParams( form, infArray, nn ,0 );
	}
}

function onBtnDownPressed ( stringnum )
{	var form = document.forms['<%=kParamsForm%>'];
	if (CheckConstants(form))
	{	var infArray = '';
		infArray = MakeInfArray( form, infArray, 0, (stringnum)*kn, 0 );
		infArray = MakeInfArray( form, infArray, (stringnum)*kn, (stringnum+1)*kn-1, kn );
		infArray = MakeInfArray( form, infArray, (stringnum+1)*kn-1, (stringnum+1)*kn, 0 );
		infArray = MakeInfArray( form, infArray, (stringnum+1)*kn, (stringnum+2)*kn-1, -kn );
		infArray = MakeInfArray( form, infArray, (stringnum+2)*kn-1, (stringnum+2)*kn, 0 );
		infArray = MakeInfArray( form, infArray, (stringnum+2)*kn, nn*kn- 1, 0 );
		SubmitParams( form, infArray, nn,0 );
	}
}

//--></script><%
End Sub

Sub AquireExpData()
	Dim i
	Dim objExpData, objDisplayName
	Dim arrExpData

	Set objExpData = objNSNETWork.GetExpressionDataForEdit(nExpressionId )

	arrExpData = objExpData.GetRows(,,Array("LPARENTH", "FUNCTIONID", "QUERYOBJID", "PROPERTYID", "CONSTANT", "RPARENTH", "OPERATIONID"))
	Set objDisplayName = objNSNETWork.GetQueryExpressionDisplayname(nExpressionId )
	strExpName = objDisplayName.GetString
	nStrCount = Ubound (arrExpData, 2) + 1
	Redim arrInfo ((Ubound (arrExpData, 2)+1)*kStrElemCount )
	For i = 0 To Ubound (arrExpData, 2)
		arrInfo (i*kStrElemCount + 0) = IIf( arrExpData( indLParenth, i ) = "Y", 1, 0)
		If IsNull(arrExpData( indFunctionId, i )) Then
			arrInfo (i*kStrElemCount + 1) = 0
		Else
			arrInfo (i*kStrElemCount + 1) = arrExpData( indFunctionId, i )
		End If
		If IsNull(arrExpData( indObjectId, i )) Then
			arrInfo (i*kStrElemCount + 2) = 0
			arrInfo (i*kStrElemCount + 3) = arrExpData( indConstant, i )
		Else
			arrInfo (i*kStrElemCount + 2) = arrExpData( indObjectId, i )
			arrInfo (i*kStrElemCount + 3) = arrExpData( indPropertyId, i )
		End If
		arrInfo (i*kStrElemCount + 4) = IIf( arrExpData( indRParenth, i ) = "Y", 1, 0)
		If IsNull(arrExpData( indOperationId, i )) Then
			arrInfo (i*kStrElemCount + 5) = 0
		Else
			arrInfo (i*kStrElemCount + 5) = arrExpData( indOperationId, i )
		End If
	Next
End Sub

Sub DrawFilters()
	Dim i, j
	Dim objPropType, objFuncTypes
	Dim strPropType, strFuncTypes, strPropId, strTmp
	strExpString = ""
	%><tr>
		<td align="center"><%=kOpenSign%></td>
		<td><%=obLanguage("Constructor","kFunction")%></td>
		<td><%=obLanguage("Constructor","kObject")%></td>
		<td><%=obLanguage("Constructor","kProperty")%></td>
		<td align="center"><%=kCloseSign%></td>
		<td></td>
	</tr><%
	For i = 0 To nStrCount - 1
		%><tr><%
		' open sign
		%><td><select class="form-control"><option value="0" <%=IIf( Clng(arrInfo( i*kStrElemCount + indSelOpen )) = 0, "selected", "")%>></option><%
		If i < nStrCount - 1 Then
			%><option value="1" <%
			If Clng(arrInfo( i*kStrElemCount + indSelOpen )) = 1 Then%>selected<%strExpString = strExpString & kOpenSign & " "
			End If
		%>><%=kOpenSign%></option><%
		End If
		%></select></td><%
		' get object's avail. property types
		If Clng(arrInfo( i*kStrElemCount + indSelObjects )) <> 0 Then
'			Set objObjectProps = objNSNETWork.GetPropsNameAndDescription(Clng(arrInfo( i*kStrElemCount + indSelObjects )) )
			Set objObjectProps = GetObjectProps( Clng(arrInfo( i*kStrElemCount + indSelObjects )), Array() )
			arrObjectProps = objObjectProps.GetRows(,,ARRAY("PROPERTYID", "DISPLAYNAME"))
			If Clng(arrInfo( i*kStrElemCount + indSelProps )) = 0 Then
				strPropId = arrObjectProps ( indObjpPropertyId ,0)
			Else
				strPropId = Clng(arrInfo( i*kStrElemCount + indSelProps ))
			End If
			Set objPropType = objNSNETWork.GetPropertyCode(Clng( strPropId ) )
			strPropType = objPropType.GetString
		End If
		' expfunctions
		strTmp = ""
		%><td><select class="form-control"><%
		' groupings present, function required
	
		If Not bGroupings Then
			%><option value="0" selected></option><%
		Else
			If Clng(arrInfo( i*kStrElemCount + indSelObjects )) <> 0 Then
				For j = 0 to Ubound (arrExpFunctions,2)
					Set objFuncTypes = objNSNETWork.GetFunctionCode(Clng( arrExpFunctions( indExpFunctionId, j ) ) )
					strFuncTypes = objFuncTypes.GetString
					If Instr( strFuncTypes, strPropType ) Then
						%><option value="<%=DB2VALUE(arrExpFunctions( indExpFunctionId, j ))%>" <%
						If Clng(arrInfo( i*kStrElemCount + indSelExpFunction )) = arrExpFunctions( indExpFunctionId, j ) Then
							%>selected<%
							strExpString = strExpString & arrExpFunctions( indExpFunctionSign, j )& " " & kOpenSign & " "
							strTmp = " " & kCloseSign
						End If
						%>><%=arrExpFunctions( indExpFunctionSign, j )%></option><%
					End If
				Next
			End If
		End If
		%></select></td><%
		' objects
		%><td><select class="form-control" onchange="onSelectChange(<%=i%>)">
		<option value="0" <%=IIf( Clng(arrInfo( i*kStrElemCount + indSelObjects )) = 0, "selected", "" )%>>[<%=obLanguage("Constructor","kConst")%>]</option><%
		For j = 0 to Ubound (arrQueryObjects,2)
			%><option value="<%=DB2Value(arrQueryObjects( 0, j ))%>" <%=IIf( Clng(arrInfo( i*kStrElemCount + indSelObjects )) = arrQueryObjects ( 0, j ), "selected", "")%>><%=arrQueryObjects ( 1, j )%></option><%
		Next
		%></select></td><%
		' props
		If Clng(arrInfo( i*kStrElemCount + indSelObjects )) = 0 Then
			Dim strDBVal
			strDBVal=DB2Value(arrInfo( i*kStrElemCount + indSelProps ))
			If strDBVal="" Then strDBVal=" "
			%><td><input name="<%=kObjName%>" maxlength="50" value="<%=strDBVal %>"></td><%
			strExpString = strExpString & arrInfo( i*kStrElemCount + indSelProps ) & strTmp
		Else
			%><td><select name="<%=kObjName%>" class="form-control" onchange="onSelectChangeProps(<%=i%>)"><%
			For j = 0 to Ubound (arrObjectProps,2)
				%><option value="<%=DB2VALUE(arrObjectProps( indObjpPropertyId, j ))%>" <%
				If Clng(arrInfo( i*kStrElemCount + indSelProps )) = arrObjectProps( indObjpPropertyId, j ) Then
					%>selected<%
					strExpString = strExpString & arrObjectProps ( indObjpDisplayName, j ) & strTmp
				End If
				%>><%=arrObjectProps ( indObjpDisplayName, j )%></option><%
			Next
			%></select></td><%
		End If
		' close sign

		%><td><select class="form-control"><option value="0" <%
		If Clng(arrInfo( i*kStrElemCount + indSelClose )) = 0 Then
			%>selected<%
		End If
		%>></option><%
		If i > 0 Then
			%><option value="1" <%
			If Clng(arrInfo( i*kStrElemCount + indSelClose )) = 1 Then
				%>selected<%
				strExpString = strExpString & " " & kCloseSign
			End If
			%>><%=kCloseSign%></option><%
		End If
		%></select></td><%
		' buttons
		%><td><%

		If nStrCount > 1 Then
			Call ButtonDel("onDeleteString(" & i & ");", obLanguage("Buttons","kRemove"))
		End If

		If i > 0 Then
			Call ArrowUpButton("onBtnUpPressed(" & i & ");", obLanguage("Constructor","kBtnUp"))
		ElseIf i < nStrCount - 1 Then
			Call ArrowDownButton("onBtnDownPressed(" & i & ");", obLanguage("Constructor","kBtnDown"))
		End If

		%></td><%

		' operations
		If i < nStrCount - 1 Then
			%></td></tr><%
			%><tr><td></td><td></td><td align="right"><%=obLanguage("Constructor","kOperation")%></td><td colspan="4"><select><%
			For j = 0 to Ubound (arrExpOperations,2)
				If arrExpOperations( indExpOperationType, j ) = "S" Or arrExpOperations( indExpOperationType, j ) = "A" Then
					%><option value="<%=DB2Value(arrExpOperations( indExpOperationId, j ))%>"<%
					If Clng(arrInfo( i*kStrElemCount + indSelExpOperations )) = arrExpOperations( indExpOperationId, j ) Then
						%> selected<%
						strExpString = strExpString & " " & arrExpOperations( indExpOperationSign, j ) & " "
					End If
					%>><%=arrExpOperations( indExpOperationSign, j )%></option><%
				End If
			Next
			%></select><%
		End If

		%></td></tr><%
	Next
End Sub

Sub DrawButtons()
	%><tr><td colspan="8" class="text-center"><%
		ButtonAdd "onAddString();", obLanguage("Constructor","kBtnAdd")
	%></td></tr>
	<tr><td colspan="8"><br><%=obLanguage("Constructor","kExpression")%> : <%=DB2HTML(StrExpString)%><br><br></td></tr>
	<tr><td colspan="8" class="text-center">
		<%
		ButtonView "onView();", obLanguage("Constructor","kBtnView")
		%>
	</td></tr>
	<tr><td colspan="8" class="text-right">
		<%
			ButtonCancel "onCancel();", obLanguage("Common","kBack")
			SimpleButton "onOk();", obLanguage("Constructor","kBtnApply")
		%>
	</td></tr><%
End Sub

Sub OnDrawPage()
	%><form NAME="<%=kNameForm%>" METHOD="POST" TARGET="_self"  OnSubmit="return false;">
	<%=WriteObligatoryTags()%>
	<table class="table" border="0">
		<tr><td class="text-center"><h3><%=obLanguage("Constructor","kEditor")%></h3></td></tr>
		<tr><td>
			<label><%=obLanguage("Constructor","kFieldName")%></label>
			<input name="<%=kExprInputName%>" value="<%=DB2Value(strExpName)%>" maxlength="100" />
		</td></tr>
	</table></form>

	<form NAME="<%=kParamsForm%>" METHOD="POST" TARGET="_self"  OnSubmit="return false;">
	<table class="table"><%
	Call DrawFilters
	Call DrawButtons
	%></table>

	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array(kArrName,"", "NAME", strExpName, "EXPID", nExpressionId, "NSTR", nStrCount)) %>
	</form><%
End Sub
%>
