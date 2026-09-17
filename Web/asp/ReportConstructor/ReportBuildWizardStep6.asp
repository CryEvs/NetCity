<!-- #INCLUDE FILE="ReportBuildWizard_inc.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="ShowReportInfo_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kFormName		= "ReportBuild6"
Const kBackScript	= 5
Const kCondInFilter = 2
Const kInfArrayName	= "INPINFARRAY"
Const kObjChangeName= "OBJCHANGE"
Const kRedirName	= "REDIR"
Const kCheckBoxName	= "CHKB"
Const kPropName		= "PROP"
Const kAddLink		= "AddFilters.asp"
Const kUpdaterLink	= "UpdateFilters.asp"
Const kSelfLink		= "ReportBuildWizardStep6.asp"
Const kStrElemCount	= 6
Const kSplitter		= "|"

Const indExpOperationId		= 0
Const indExpOperationName	= 1
Const indExpOperationSign	= 2
Const indExpOperationType	= 3

Const indLParenth	= 0
Const indRParenth	= 1
Const indOperationId= 2
Const indConstant	= 3
Const indObjPId		= 4
Const indObjId		= 5
Const indLineId		= 6
Const indQueryObjID	= 7
Const indList	= 8

Dim bAvailFilters
Dim nCount, nExpressionId
Dim strObjChange, strReportName, strIsPublished
Dim objQueryObjects, objExpOperations, objProps
Dim arrQueryObjects, arrExpOperations, arrInfo, arrProps, arrPropLists

Sub onSpecialReadState()
	Dim objExpressionId

	strObjChange = GetSafeStr( Request(kObjChangeName), -1, "" )
	Set objExpressionId = objNSNETWork.GetExpressionIdForInfo(Clng(strQueryID) )
	If Not objExpressionId.EOF Then nExpressionId = Clng(objExpressionId("EXPRESSIONID"))
End Sub

Sub WriteState()
	obTokenMgr.SetData strToken, stLinesCnt, nCount
	obTokenMgr.SetData strToken, stExpressionID, nExpressionId
End Sub

Sub Main()
	Dim objReport, objObjectProps, arrObjectProps
	Dim strPropertyID, rsList, i, j, arrTmp

	Set objQueryObjects = objNSNETWork.GetQueryPublicObjectsList ( strQueryId )
	arrQueryObjects = objQueryObjects.GetRows(,,ARRAY("QUERYOBJECTID", "OBJECTID", "PARENTNAME"))
	Set objExpOperations = objNSNETWork.GetExpOperationsList ( )
	Set objProps = objNSNETWork.GetAllPropsNotStrings( )
	arrProps = objProps.GetRows(,,Array("PROPERTYID", "TYPEID"))
	arrExpOperations = objExpOperations.GetRows(,,ARRAY("OPERATIONID", "NAME", "DISPLAYSIGN", "OPERTYPE"))
	bAvailFilters = Cbool(objNSNETWork.IsAvailVarProperty( Clng( strQueryId ), kCondInFilter ))
	If bAvailFilters Then 
		nCount = InitFilters ( strQueryId ) 
	Else 
		nCount = 0
	End If

	Redim arrPropLists(1,nCount-1)
	For i = 0 To nCount - 1 step 2
		If IsDull(arrInfo( indObjPId, i ) ) Then
			Set objObjectProps = objNSNETWork.GetObjectProps(  arrQueryObjects ( 0, 0 ), "and INFILTER='Y'" )
			arrObjectProps = objObjectProps.GetRows(,,ARRAY("PROPERTYID", "DISPLAYNAME", "INFILTER","SQL_LIST"))
			arrInfo( indObjPId, i ) = arrObjectProps( 0, 0 )
		Else
			Set objObjectProps = objNSNETWork.GetObjectProps( arrInfo( indQueryObjID, i ), "and INFILTER='Y'" )
			arrObjectProps = objObjectProps.GetRows(,,ARRAY("PROPERTYID", "DISPLAYNAME", "INFILTER","SQL_LIST"))
		End If
		arrPropLists(1,i) = arrObjectProps
		strPropertyID = arrInfo( indObjPId, i )

		Set rsList = objNSNETWork.GetFieldValuesList(strEMID, strSchoolId, strPropertyID )
		If Not rsList.EOF Then
			If Not IsNull(rsList(0)) Then
				arrPropLists(0,i+1) = True
				If Request("ISLIST").Count = 0 Then
					If Not IsNull (arrInfo( indConstant, i+1 )) Then
						arrTmp = rsList.GetRows
						For j = 0 To Ubound(arrTmp,2)
							If arrTmp(0,j) = arrInfo( indConstant, i+1 ) Then arrPropLists(1,i+1) = arrTmp : Exit For
						Next
					End If
				Else
					arrTmp=Split(Request("ISLIST"), ", ")
					If GetSafeLng( arrTmp(CLng(i/2)), 0 )<>0  Then arrPropLists(1,i+1) = rsList.GetRows
				End If
			End If
		End If
	Next

	Set objReport = objNSNETWork.GetReportInfo( Clng(strReportId) )
	strReportName = objReport("DISPLAYNAME")
	strIsPublished = objReport("ISPUBLISHED")
End Sub

Function InitFilters( strQueryId )
	Dim i
	Dim objExplines

	Set objExplines = objNSNETWork.GetQueryFiltersExpression(Clng( strQueryId ) )
	If Not objExplines.EOF Then
		arrInfo = objExplines.GetRows(,,ARRAY("LPARENTH", "RPARENTH", "OPERATIONID", "CONSTANT", "OBJPID", "OBJID", "LINEID", "QUERYOBJID", "sql_list"))
		InitFilters = Ubound ( arrInfo, 2 ) + 1
	Else
		InitFilters = 0
	End If
End Function

Sub onHeadSpecial()
	Dim i
	Dim strProps
%><script><!--
// nsver
var kn = <%=kStrElemCount%>;
var nCount = <%=nCount%>;
function onStepTo ( nStep ) {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	var infArray = '';
	form.elements['STEPDIR'].value = nStep;<%
	If nCount > 0 Then%>
	if (!( validateExpr( form ) && validateBrackets( form ) && validateSplitter ( form ) ))
		return false;
		<%
	End If%>
	infArray = MakeInfArray ( form, infArray, 0, nCount * kn - 1, 0 )
	form.elements['<%=kInfArrayName%>'].value = infArray;
	form.elements['<%=kRedirName%>'].value = '<%=kSaveScriptName%>';
	setDBBusy();
	ok('<%=kFormName%>','<%=kUpdaterLink%>');
}
// nsver
function MakeInfArray ( form, infArray, nstart, nend, nadd ) {
	var i, elems = $(':input:not(button)',form);
	var ref;
	for ( i = nstart; i < nend; i++) {
		if (elems[i].name != '<%=kCheckBoxName%>') {
			if (elems[i+nadd].value != null) {
				if (elems[i+nadd].value == '') infArray += '0'; else infArray += elems[i+nadd].value;
			}else{
				lval = getListValue(elems[i+nadd]);
				if ( lval == '') infArray += '0'; else infArray += lval;
			}
			infArray += '<%=kSplitter%>';
		} else
			infArray += elems[i].value + '<%=kSplitter%>';
	}
	return infArray;
}
<%If nCount > 0 Then%>
// nsver
function validateSplitter ( form ) {
	var i = 0, elems = $(':input:not(button)',form);
	while (i < nCount) {
		if (elems[i*kn+1].options.selectedIndex == 0 && elems[i*kn+2].value.indexOf('<%=kSplitter%>') != -1 ) {
			alert(language.Generic.Constructor.kAlertInvalidSymbol+' [<%=kSplitter%>]'); 
			elems[i*kn+2].focus(); 
				return false; 
		}
		i++;
	}
	return true;
}
// nsver
function validateBrackets ( form ) {
	var filterRows = $('tr.report-filter-row');
	var i, cnt = 0;
	brackets = $("select[name='StartBrackets']");
	for( i=0; i<brackets.length; i++){
		el=brackets[i];
		if($(el).val()=='1')
			cnt++;
	}
	brackets = $("select[name='EndBrackets']");
	for( i=0; i<brackets.length; i++){
		el=brackets[i];
		if($(el).val()=='1')
			cnt--;
	}
	if (cnt == 0)
		return true;

	if (cnt > 0) {
		alert(language.Generic.Constructor.kAlertNoRBrackets); 
	} else {
		alert(language.Generic.Constructor.kAlertNoLBrackets);
	}
	return false;
}
<%If nCount > 1 Then%>
var arrInts = new Array(<%
	i = 0
	strProps = ""
	While arrProps( 1, i ) = 1
		strProps = strProps & arrProps( 0, i ) & ","
		i = i + 1
	Wend
	strProps = Left( strProps, Len( strProps ) - 1 )
	Response.Write strProps
%>);
var arrDates = new Array(<%
	strProps = ""
	While i <= Ubound( arrProps, 2 )
		strProps = strProps & arrProps( 0, i ) & ","
		i = i + 1
	Wend
	strProps = Left( strProps, Len( strProps ) - 1 )
	Response.Write strProps
%>);
// nsver
function Type( nId ) {
	var i;
	for ( i = 0; i < arrInts.length; i++ )
		if (arrInts[i] == nId) return 1;
	for ( i = 0; i < arrDates.length; i++ )
		if (arrDates[i] == nId) return 2;
	return 3;
}
// nsver
function validateInt( nIntElem ) {
	if (parseInt(nIntElem.value) != nIntElem.value || nIntElem.value.indexOf('.') != -1 ) {
		alert(language.Generic.Constructor.kEnterInteger); 
		nIntElem.focus(); 
		return false; 
	}
	return true;
}
// nsver
function validateDate ( nDateElem ) {
	var mo, day, yr;
	var entry = nDateElem.value;
	var reLong = /\b\d{1,2}[\.-]\d{1,2}[\.-]\d{4}\b/;
	var reShort = /\b\d{1,2}[\.-]\d{1,2}[\.-]\d{2}\b/;
	var valid = (reLong.test(entry)) || (reShort.test(entry));
	if (valid) {
		var delimChar = (entry.indexOf(".") != -1) ? "." : "-";
		var delim1 = entry.indexOf(delimChar);
		var delim2 = entry.lastIndexOf(delimChar);
		day = parseInt(entry.substring(0, delim1),10);
		mo = parseInt(entry.substring(delim1+1,delim2),10);
		yr = parseInt(entry.substring(delim2+1),10);
		if ( yr < 100 ) {
			var today = new Date();
			var currCent = parseInt(today.getFullYear()/100)*100;
			var threshold = (today.getFullYear() + 15) - currCent;
			if (yr > threshold)
				yr += currCent - 100;
			else
				yr += currCent;
		}
		var testDate = new Date(yr, mo-1, day);
		if (testDate.getDate() == day ) {
			if (testDate.getMonth() + 1 == mo ) {
				if (testDate.getFullYear() == yr ) {
					nDateElem.value = day + '.' + mo + '.' + yr;
					return true;
				}
				alert(language.Generic.Constructor.kInvalidDate);
			}
			alert(language.Generic.Constructor.kInvalidMonth);
		}
		alert(language.Generic.Constructor.kInvalidNumber);
	}
	alert(language.Generic.Constructor.kInvalidDateFormat_UseDDMMYY);
	nDateElem.focus();
	return false;
}
// nsver
function validateExpr( form ) {
	<%If nCount mod 2 = 0 Then%>
	var btype, ntype, ptype, el, elOp, err, i = 0, el1, el2; //, errexp
	var elems = $(':input:not(button)',form)
	for(;;){
		el1 = elems[i*kn+1];
		el2 = elems[(i+1)*kn+1];
		if( el1.options.selectedIndex == 0 ) {el = elems[i*kn+2]; ptype = Type( elems[(i+1)*kn+2].value );}
		else if( el2.options.selectedIndex == 0 ) {el = elems[(i+1)*kn+2]; ptype = Type( elems[i*kn+2].value );}
		else
			ptype = 3;
		if (ptype == 1) err = !validateInt( el ); else if (ptype == 2) err = !validateDate( el );
		if (err)
			return false;
		i+=2;
		if ( i >= <%=nCount%>)
			break;
	}
	return true;<%
	Else%>
	alert(language.Generic.Constructor.kAlertUnmeaningExpression);<%
	End If%>
}<%
End If
End If
If bAvailFilters Then%>
// nsver
function onAdd() {
	var form = document.forms['<%=kFormName%>'];
	var elems = $(':input:not(button)',form);<%
	If nCount > 0 Then%>
	if( isDBBusy() ) return false;
	if (validateSplitter (form)) {
		var i;
		var infArray = '';
		for ( i = 0; i < <%=nCount*kStrElemCount - 1%>; i++) {
			if (elems[i].name != '<%=kCheckBoxName%>') {
				if (elems[i].value != null) {
					if (elems[i].value == '') infArray += '0'; else infArray += elems[i].value;
				}else{
					lval = getListValue(elems[i]);
					if ( lval == '') infArray += '0'; else infArray += lval;
				}
				infArray += '<%=kSplitter%>';
			}else
				infArray += elems[i].value + '<%=kSplitter%>';
		}
		form.elements['<%=kInfArrayName%>'].value = infArray;
		form.elements['<%=kRedirName%>'].value = '<%=kAddLink%>';
		setDBBusy();
		ok('<%=kFormName%>','<%=kUpdaterLink%>');
	}<%
	Else%>ok_check_db('<%=kFormName%>','<%=kAddLink%>');<%
	End If%>
}<%
	If nCount > 0 Then%>
// nsver
function onDelete() {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	var elems = $(':input:not(button)',form);
	if ( validateSplitter( form ) ) {
		var i, cnt = 0, infArray = '';
		for ( i = 0; i < <%=nCount%>; i++) {
			if (elems[i*kn+4].checked) {
				infArray += elems[i*kn+4].value;
				infArray += '<%=kSplitter%>';
				i++;
				infArray += elems[i*kn+4].value;
				infArray += '<%=kSplitter%>';
				cnt+=2;
		}	}
		if (cnt == 0)
			alert(language.Generic.Constructor.kAlertNoDel);
		else
		{
			$.show.confirmation(language.Generic.Constructor.kConfirmDelString).then(function() {
				setDBBusy();
				ok( '<%=kFormName%>', 'DeleteFilters.asp?IDS='+infArray );
			});
		}
	}
}
// nsver
function SubmitFilters( form, infArray ) {
	form.elements['<%=kInfArrayName%>'].value = infArray;
	form.elements['<%=kRedirName%>'].value = '<%=kSelfLink%>';
	ok('<%=kFormName%>','<%=kUpdaterLink%>');
}
// nsver
function onChangeObject( stringnum ) {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	var elems = $(':input:not(button)',form);
	if ( validateSplitter( form ) ) {
		var i, infArray = '';
		for ( i = 0; i < <%=nCount*kStrElemCount - 1%>; i++) {
			if (elems[i].name != '<%=kCheckBoxName%>') {
				if (elems[i].value == '' || (elems[i].name == '<%=kPropName%>' && i >= stringnum*kn) && i < (stringnum+1)*kn)
					infArray += '0';
				else{
					if (elems[i].value != null)
						infArray += elems[i].value;
					else
						infArray += getListValue(elems[i]);
				}
				infArray += '<%=kSplitter%>';
			}else
				infArray += elems[i].value + '<%=kSplitter%>';
		}
		setDBBusy();
		SubmitFilters( form, infArray );
	}
}
function onChangeObject2( obj ) {
	var strTxt = obj[obj.selectedIndex].text;
	if( strTxt.substr(strTxt.length-3,3)=='...' )
		onStepTo('<%=kBackScript +1%>');
}<%
		If nCount > 1 Then%>
function BtnEndPressed( direction ) {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'], i, arrChecked = '', arrRest = '', cnt = 0;
	var elems = $(':input:not(button)',form);
	if ( validateSplitter( form ) ) {
		for ( i = 0; i < <%=nCount%>; i++) {
			if (elems[i*kn+4].checked) {
				arrChecked = MakeInfArray( form, arrChecked, i*kn, (i+1)*kn-1, 0 );
				arrChecked = arrChecked + getItemValue(elems[(cnt+1)*kn-1])+'<%=kSplitter%>';
				i++;
				arrChecked = MakeInfArray( form, arrChecked, i*kn, (i+1)*kn-1, 0 );
				arrChecked = arrChecked + getItemValue(elems[(cnt+1)*kn-1])+'<%=kSplitter%>';
				cnt+=2;
			}
			else
			{
				arrRest = MakeInfArray( form, arrRest, i*kn, (i+1)*kn-1, 0 );
				arrRest = arrRest + getItemValue(elems[(cnt+1)*kn-1])+'<%=kSplitter%>';
				i++;
				arrRest = MakeInfArray( form, arrRest, i*kn, (i+1)*kn-1, 0 );
				arrRest = arrRest + getItemValue(elems[(cnt+1)*kn-1])+'<%=kSplitter%>';
				cnt+=2;
			}
		}
	}
	if (arrChecked == ''){ alert(language.Generic.Constructor.kAlertNoMove); return false;}
	setDBBusy();
	SubmitFilters( form, (direction>0)?arrChecked+arrRest:arrRest+arrChecked );
}
function BtnUpPressed() {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'], i, infArray = '', tmpArray = '', cnt = 0, elems = $(':input:not(button)',form), bfound = false;
	if ( validateSplitter( form ) ) {
		for ( i = 0; i < <%=nCount%>; i+=2) {
			if (!elems[i*kn+4].checked) {
				if (( i < <%=nCount-2%>  && !elems[(i+2)*kn+4].checked) || i == <%=nCount-2%> )
					infArray = MakeInfArray( form, infArray, i*kn, (i+2)*kn, 0 );
				else
					tmpArray = MakeInfArray( form, tmpArray, i*kn, (i+2)*kn-1, 0 );
			}
			else
			{
				bfound = true;
				if (tmpArray == '')
					infArray = MakeInfArray( form, infArray, i*kn, (i+2)*kn, 0 );
				else{
					infArray = MakeInfArray( form, infArray, i*kn, (i+2)*kn-1, 0 );
					infArray = MakeInfArray( form, infArray, i*kn-1, i*kn, 0 );
					if (!( ( i < <%=nCount-2%>  && elems[(i+2)*kn+4].checked) || i == <%=nCount-2%> )) {
						tmpArray = MakeInfArray( form, tmpArray, (i+2)*kn-1, (i+2)*kn, 0 );
						infArray = infArray.concat(tmpArray);
						tmpArray = '';
					}
				}
			}
		}
		if (!bfound)
			alert(language.Generic.Constructor.kAlertNoMove);
		else
		{	infArray = infArray.concat(tmpArray);
			setDBBusy();
			SubmitFilters( form, infArray );
		}
	}
}
function BtnDownPressed() {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'], i, arrChecked = '', arrRest = '', cnt = 0,
		elems = $(':input:not(button)',form), bfound = false;
	if ( validateSplitter( form ) ) {
		for ( i = 0; i < <%=nCount%>; i+=2) {
			if (!elems[i*kn+4].checked) {
				arrRest = MakeInfArray( form, arrRest, i*kn, (i+2)*kn-1, 0 );
				arrRest = arrRest + getItemValue(elems[(i+2-cnt)*kn-1])+'<%=kSplitter%>';
				if (cnt > 0) {
					arrRest = arrRest.concat(arrChecked);
					cnt = 0;
					arrChecked = '';
				}
			}
			else
			{
				if ( i <<%=nCount%>-2 ) {
					arrChecked = MakeInfArray( form, arrChecked, i*kn, (i+2)*kn-1, 0 );
					arrChecked = arrChecked + getItemValue(elems[(i+3)*kn-1])+'<%=kSplitter%>';
				}
				else
					arrChecked = MakeInfArray( form, arrChecked, i*kn, (i+2)*kn, 0 );
				cnt+=2;
				bfound = true;
			}
		}
		if (cnt > 0) {
			arrChecked = '';
			for ( i = <%=nCount%>-cnt; i < <%=nCount%>; i+=2)
				arrChecked = MakeInfArray( form, arrChecked, i*kn, (i+2)*kn, 0 );
		}
		if (!bfound)
			alert(language.Generic.Constructor.kAlertNoMove);
		else
		{
			arrRest = arrRest.concat(arrChecked);
			setDBBusy();
			SubmitFilters( form, arrRest );
		}
	}
}<%
		End If
	End If
End If%>
//-->
</script><%
End Sub

Function GetAvailableReportInfo
	GetAvailableReportInfo = 9
End Function

Sub DrawButtons()
	DrawNavigationButons

	If nCount > 1 Then
		Call DrawPositioningButtons2()
	End If

	If bAvailFilters Then
		Call ButtonAdd("onAdd()", obLanguage("Constructor","kBtnAdd"))
		If nCount > 0 Then Call ButtonDel("onDelete()", obLanguage("Constructor","kBtnDel"))
	End If
End Sub

Sub onDrawStepContent()
	Dim i, j, j1, j2
	Dim arrObjectProps, arrTmp
	If Not bAvailFilters Then
		DrawInfo obLanguage("Constructor","kNoFilteredObjects"), False
		Exit Sub
	End If
	If nCount = 0 Then
		DrawInfo obLanguage("Constructor","kNoFilters"), False
		Exit Sub
	End If

	%><table class="table table-bordered table-condensed"><tr>
		<th height="30"><%=kOpenSign%></th>
		<th><%=obLanguage("Constructor","kObject")%></th>
		<th><%=obLanguage("Constructor","kField")%></th>
		<th><%=kCloseSign%></th>
		<th><%=obLanguage("Constructor","kCheck")%></th>
	</tr><%
	For i = 0 To nCount - 1
		%><tr class="report-filter-row"><%
		' open sign
		%><td><%
			DrawSimpleSelectArr Array("0", "", "1", kOpenSign), "StartBrackets", IIf( arrInfo( indLParenth, i ) = "Y","1","0"), Null, "_"
		%></td><%
		' objects
		Dim bExDo
		If i mod 2 <> 0 Then j1 = 0 : j2 = 3 Else j1 = 4 : j2 = Ubound (arrExpOperations,2)
		If j1 <> 0 Then
		%><td>
			<select onchange="onChangeObject(<%=i%>)" class="form-control"><%
			j = 0
			bExDo = False
			Do While j <= Ubound (arrQueryObjects,2)
			%><option value="<%=arrQueryObjects( 0, j )%>" <%
				If arrInfo( indQueryObjID, i ) = arrQueryObjects ( 0, j ) Or IsNull (arrInfo( indObjPId, i )) Then%>selected<%bExDo = True
				End If%>><%=arrQueryObjects ( 2, j )%></option><%
				j=j+1
				If bExDo Then Exit Do
			Loop
			Do While j <= Ubound (arrQueryObjects,2)%>
				<option value="<%=arrQueryObjects( 0, j )%>"><%=arrQueryObjects( 2, j )%></option><%
				j=j+1
			Loop
			%></select>
			</td><%
			arrObjectProps = arrPropLists(1,i)
			%><td>
			<select name="<%=kPropName%>" class="form-control" onchange="<%=IIF(IsDull(arrInfo( indList, i ) ),"onChangeObject2(this)","onStepTo("&(kBackScript +1)&")")%>"><%
			For j = 0 to Ubound (arrObjectProps,2)
				%><option value="<%=arrObjectProps( 0, j )%>"<%=IIf( arrInfo( indObjPId, i ) = arrObjectProps( 0, j ), " selected","")%>><%=arrObjectProps ( 1, j )&IIF(Not IsDull(arrObjectProps ( 3, j )),"...","")%></option><%
			Next
			%></select></td><%
		Else
		%><td colspan="2">
			<select Name="ISLIST" class="form-control form-control-inline" onchange="onChangeObject(-2)">
				<option value="0"<%=IIf( IsNull (arrInfo( indObjPId, i )), " selected","")%>>[<%=obLanguage("Constructor","kConst")%>]</option><%
				If arrPropLists(0,i) Then
					%><option value="-2"<%If IsArray(arrPropLists(1,i)) Then%> selected<%End If%>>[<%=obLanguage("Constructor","kList")%>]</option><%
				End If%>
			</select>

			<%If IsArray(arrPropLists(1,i)) Then
				arrTmp = arrPropLists(1,i)
				%><select name="<%=kPropName%>" class="form-control" style="width:10cm"><%'
				For j = 0 To Ubound(arrTmp,2)
					If Len( arrTmp(0,j)) >kMaxLenParam Then arrTmp(0,j) = "*"&Right(arrTmp(0,j), kMaxLenParam-1)
				Next
				For j = 0 To Ubound(arrTmp,2)
					%><option value="<%=arrTmp(0,j)%>"<%=IIf( arrInfo( indConstant, i ) = arrTmp(0,j)," selected","")%>><%=arrTmp(0,j)%></option><%
				Next
				%></select><%
			Else
				%><input name="<%=kPropName%>" size="<%=TextInputSize(kMaxLenParam)%>" maxlength="<%=kMaxLenParam%>" value="<%=DB2Value(arrInfo( indConstant, i ))%>" style="vertical-align:top;"><%
			End If
		End If
		' close sign
		%></td><td><%
			DrawSimpleSelectArr Array("0", "", "1", kCloseSign), "EndBrackets", IIf( arrInfo( indRParenth, i ) = "Y","1","0"), Null, "_"
		%></td><%
		' checkboxes
		If j1<>0 Then
			%><td align="center"><input type="checkbox" name="<%=kCheckBoxName%>" value="<%=arrInfo (indLineId,i)%>"></td><%
		Else
			%><td align="center"><input type="hidden" name="<%=kCheckBoxName%>" value="<%=arrInfo (indLineId,i)%>"></td><%
		End If
		%></tr><%
		' operations
		If i < nCount - 1 Then
			%><tr><td></td>
				<td class="text-right"><%=obLanguage("Constructor","kOperation")%></td>
				<td colspan="4">
				<select class="form-control form-control-inline"><%
			For j = j1 to j2
				If arrExpOperations( indExpOperationType, j ) = "L" Or arrExpOperations( indExpOperationType, j ) = "C" Then
					%><option value="<%=arrExpOperations( indExpOperationId, j )%>"<%=IIf( arrInfo( indOperationId, i ) = arrExpOperations( indExpOperationId, j )," selected", "")%>>
					<%=arrExpOperations( indExpOperationSign, j )%></option><%
				End If
			Next
			%></select>
			</td></tr><%
		End If
	Next
	%></table><%
End Sub

Sub WriteHiddenParams()
	rw WriteHiddenTags(Array(kInfArrayName, "", kObjChangeName, "", kRedirName, ""))
End Sub
%>
