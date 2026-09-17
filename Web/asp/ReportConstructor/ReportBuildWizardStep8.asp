<!-- #INCLUDE FILE="ReportBuildWizard_inc.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="ShowReportInfo_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kFormName		= "ReportBuild8"
Const kBackScript	= 7
Const kUpdaterLink	= "UpdateParams.asp"
Const kRedirName	= "REDIR"
Const kInfArrayName	= "INFARRAY"
Const kIdsArrayName	= "IDSARRAY"


Const indObjDispName	= 0
Const indParamDispName	= 1
Const indObjParameterId	= 2
Const indParameterId	= 3
Const indParamDisabled	= 4
Const indQueryObjId		= 5

Const kSplitter = "|"

Dim nCnt, arrParams
Dim strReportName, strIsPublished

Sub onHeadSpecial()
%><script><!--
var isChanged = <%=IIF(IsDull(Request("chang")),0,1)%>;

function onStepTo ( nStep ) {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	form.elements['STEPDIR'].value= nStep;
	if (isChanged == 1) {
		var infArray = '';
		var infArray2 = '';
		form.elements['<%=kInfArrayName%>'].value = MakeIdArray (form, infArray);
		form.elements['<%=kIdsArrayName%>'].value = MakeChArray (form, infArray2);
		form.elements['<%=kRedirName%>'].value = 'ReportBuildWizardStep'+nStep+'.asp';
		setDBBusy();
		ok ('<%=kFormName%>','<%=kUpdaterLink%>');
	}
	else{
		setDBBusy();
		ok('<%=kFormName%>','ReportBuildWizardStep'+nStep+'.asp');
	}
}
<%If nCnt > 0 Then
%>	function MakeIdArray ( form, infArray ) {
	var i;
	var infArray='';

	for ( i = 0; i < form.elements.length; i++) {
		if (form.elements[i].name.indexOf('chk') == 0)
			infArray += form.elements[i].value + '<%=kSplitter%>';
	}
	return infArray;
}

function MakeChArray ( form, infArray ) {
	var i;
	var infArray='';

	for ( i = 0; i < form.elements.length; i++) {
		if (form.elements[i].name.indexOf('chk') == 0)
			infArray += Number(form.elements[i].checked) + '<%=kSplitter%>';
	}
	return infArray;
}

function onBoxClick(nstart) {
	var i;
	var form = document.forms['<%=kFormName%>'];

	isChanged = 1;
	for ( i = nstart + 1; i < form.elements.length; i++) {
		if (form.elements[i].name == form.elements[nstart].name && 	form.elements[i].name.indexOf('chk') == 0) { 
			form.elements[i].checked = form.elements[nstart].checked; }
	}
}<%
End If
%>function NextStep() {
	if( isDBBusy() ) return false;
	if (isChanged == 1) {
		var infArray = '';
		var infArray2 = '';
		var form = document.forms['<%=kFormName%>'];
		form.elements['<%=kInfArrayName%>'].value = MakeIdArray (form, infArray);
		form.elements['<%=kIdsArrayName%>'].value = MakeChArray (form, infArray2);
		form.elements['<%=kRedirName%>'].value = 'SaveWizardStep8Info.asp';
		setDBBusy();
		ok ('<%=kFormName%>','<%=kUpdaterLink%>');
	}
	else{
		setDBBusy();
		ok ('<%=kFormName%>','SaveWizardStep8Info.asp');
	}
}

function PrevStep() {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	form.elements['STEPDIR'].value=<%=kBackScript%>;
	if (isChanged == 1) {
		var infArray = '';
		var infArray2 = '';
		form.elements['<%=kInfArrayName%>'].value = MakeIdArray (form, infArray);
		form.elements['<%=kIdsArrayName%>'].value = MakeChArray (form, infArray2);
		form.elements['<%=kRedirName%>'].value = 'SaveWizardStep8Info.asp';
		setDBBusy();
		ok ('<%=kFormName%>','<%=kUpdaterLink%>');
	}
	else{
		setDBBusy();
		ok('<%=kFormName%>','SaveWizardStep8Info.asp');
	}
}
var wndParams = null;
function closeWndParams() {
	if( wndParams && !wndParams.closed ) {
		wndParams.forceClosing = true;
		wndParams.close();
	}
}
function addFilters() {	if (wndParams) {closeWndParams();}
	var url = urlHelper.makeUrl("popupFilters.asp");
	var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=460', winChild: wndParams };
	windowOpen( winOptions );
	wndParams = winOptions.winChild;
	center(wndParams,750,460);
	wndParams.focus();
}
function onReload() {
	if( isDBBusy() ) return false;
	setDBBusy();
	postTo("<%=strScriptName%>", {STEPNO: 8, chang: 1})
}
//--></script><%
End Sub

Sub Main()
	Dim objParams, objReport

	Set objReport = objNSNETWork.GetReportInfo(Clng(strReportId) )

	Set objParams = objNSNETWork.GetQueryParametersData(strQueryId )
	If Not objParams.EOF Then
		arrParams = objParams.GetRows(,,Array("OBJDISPNAME","PARAMDISPNAME","OBJPARAMETERID","PARAMETERID","ISDISABLED","QUERYOBJECTID"))
		nCnt = Ubound ( arrParams, 2 ) + 1
	Else
		nCnt = 0
	End If

'	Set objReport = objNSNETWork.GetReportInfo(Clng(strReportId) )
	strReportName = objReport("DISPLAYNAME")
	strIsPublished = objReport("ISPUBLISHED")
End Sub

Function GetAvailableReportInfo
	GetAvailableReportInfo = 9
End Function

Sub DrawButtons()
	Button "PrevStep()", obLanguage("SetupSchoolCalendar","kPrev"), obLanguage("SetupSchoolCalendar","kPrev"), "glyphicon glyphicon-circle-arrow-left"
	Button "onStepTo(" & kBackScript + 2 & ")", obLanguage("SetupSchoolCalendar","kNext"), obLanguage("SetupSchoolCalendar","kNext"), "glyphicon glyphicon-circle-arrow-right"
	ButtonAdd "addFilters()", obLanguage("Constructor","kBtnAdd")
End Sub

Sub onDrawStepContent()
	Dim i
	If nCnt = 0 Then
		DrawInfo obLanguage("Constructor","kNoObjectsWithParams"), False
		Exit Sub
	End If

	%><table class="table table-bordered table-xs table-striped table-hover">
	<tr><th><strong><%=obLanguage("Constructor","kObjects")%></strong></th><th><strong><%=obLanguage("Constructor","kUserFilter")%></strong></th><th><%=obLanguage("Constructor","kUse")%></th></tr><%
	For i = 0 To nCnt - 1%>
		<tr><td><%=DB2HTML( arrParams (indObjDispName,i) )%></td><td><%=DB2HTML( arrParams (indParamDispName,i) )%></td>
		<td align="center"><input type="checkbox" <%If arrParams(indParamDisabled, i) = "Y" Then rw "disabled=""true"" "%>value="<%=(arrParams(indObjParameterId,i) & kSplitter & arrParams(indQueryObjId,i))%>" name="chk<%=i%>" onClick="Javascript:onBoxClick(<%=i%>);" <%
		If objNSNETWork.IsParameterInQuery(arrParams(indQueryObjId, i), arrParams ( indObjParameterId, i ) ) Then rw "checked"%>></td></tr><%
	Next
	%></table><%
End Sub

Sub WriteHiddenParams()
	rw WriteHiddenTags(Array(kInfArrayName, "", kIdsArrayName, "", kRedirName, ""))
End Sub
%>
