<!-- #INCLUDE FILE="ReportConstructor_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE=../scripts/FiltersCommon.asp -->
<!-- #INCLUDE FILE=../scripts/DateInput.asp -->
<!-- #INCLUDE FILE="SqlBuilder_inc.asp" -->
<!-- #INCLUDE FILE=../scripts/FilterEMs.asp -->
<!-- #INCLUDE FILE="ReportsGetRecordSet_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Const kFormName = "AdditionalReports"

Const kArrParamValue1	= 0
Const kArrParamValue2	= 1

Dim bNoReportInfo, bMissingParams, bPreUseWork, bArchYearsExists, bCustomParams, bNoSchool
Dim nQueryId, nParamsNotPresent
Dim strArchDate
Dim objReportInfo, repType
Dim rsSchools, rsCities, strCityID
Dim arrValuesRS, arrParamsNotPresent, arrArchYears
Dim strCurrDate
Dim dtYearStart, dtYearEnd
Dim strFilterEMID
Dim strError

Function GetPageTitle()
	GetPageTitle = obLanguage("Constructor","kReport") & ": " & GreenText( DB2HTML( objReportInfo("DISPLAYNAME") ) )
End Function

Function GetPageMenuItem()
	If bIsEducManager Then GetPageMenuItem = MenuItem_mi_EM_Reports Else GetPageMenuItem = MenuItem_miReports
End Function

Function GetPageTabItem()
	If bIsEducManager Then GetPageTabItem = TabItem_tb_EM_AdditionalReports Else GetPageTabItem = TabItem_tbAdditionalReports
 	bTabInternalPage = True
End Function

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = True Else hasUserRightsOnPage = HasUserRight(arReportsViewAdditionalReports)
End Function

Sub ReadState()
	Dim objQueriesRs

	bExit = False
	bCustomParams = False
	strReportID = GetSafeLng( Request("ARPTID"), 0 )
	If strReportID = 0 Then bExit = True : Exit Sub
	Set objReportInfo = objNSNETWork.GetReportInfo(strReportID)
	bNoReportInfo = objReportInfo.EOF
	If bNoReportInfo Then Exit Sub
	Set objQueriesRs = objNSNETWork.GetReportQueriesList(strReportID)
	nQueryID = GetSafeLng( objQueriesRs("QUERYID"), 0 )
	repType = objReportInfo("REPTYPE")
	If bIsEducManager Then
		strFilterEMID = ReadEMRegionFilter(False)
		Select Case repType
		Case "S"
			Set rsSchools = objNSNET.GetSchoolListForReport(strReportID, strFilterEMID)
			If Not IsDull(Request("SCHOOLID")) Then
				strSchoolID = Request("SCHOOLID")
			Else
				If rsSchools.EOF Then strSchoolId = Empty Else strSchoolId = rsSchools(0)
			End If
			Call obTokenMgr.SetData(strToken, "SCHOOLID", strSchoolID)
		End Select
	End If
End Sub

Sub WriteState()
	If bIsEducManager Then
		Call WriteEMs()
		Call obTokenMgr.SetData(strToken, stRepConstrEMID, strFilterEMID)
	End If
End Sub

Function BuildYears( arrValues )
	Dim i, nYears
	Dim arrRes()
	i = -1
	While Not arrValues.EOF
		nYears = objNSNETWork.IsArchYear(CStr(arrValues("SCHOOLYEARNAME")) )
		arrValues.MoveNext
		i = i + 1
		Redim Preserve arrRes(i)
		arrRes(i) = IIf(nYears, 1, 0)
	Wend
	arrValues.MoveFirst
	BuildYears = arrRes
End Function

Sub Main()
	Dim i, strErr
	Dim objParamSql, objArchDate
	Dim strLastArchDate
	Dim isSchoolDepend

	bPreUseWork = False
	bArchYearsExists = CBool( objNSNETWork.AreAnyArchYears(strSchoolId) )

	arrQueryParams = GetQueryParams(nQueryId)
	bMissingParams = False

	If bParams Then
		Redim arrValuesRS( nParamsCnt )
		Redim arrParamsNotPresent( nParamsCnt )
		nParamsNotPresent = -1
		i = 0
		SetScriptTimeOut 900

		If(repType = "S" And IsDull(strSchoolId)) Then
			bNoSchool = true
			Exit Sub
		End If
		
		While i <= nParamsCnt
			Select Case GetSafeStr(arrQueryParams(kArrParamDispType,i), 1, Null)
			Case "S", "M", "I", "L"
				If Not IsNull(arrQueryParams(kArrParamSqlExpr,i)) Then
					strParam = arrQueryParams(kArrParamSqlExpr,i) ' предопределённый фильтр грузим всегда
					isSchoolDepend = InStr(Ucase(strParam), " SCHOOLS ")>0
					If isSchoolDepend Then
						strParam = AddFilterParam( repType, strSchoolId, strFilterEMID, strParam )
					End If
				Else
					strParam = Empty 'arrQueryParams(kArrParamSqlExprGen,i) это грузим только через AJAX
					isSchoolDepend = InStr(Ucase(strParam), " SCHOOLS ")>0
					strParam = FilterParam( repType, strSchoolId, strFilterEMID, strParam )
				End If
				If arrQueryParams( kArrName, i ) = "SCHOOLYEARNAME" Then
					Set arrValuesRS(i) = objNSNET.ExecuteSql( strParam )
					If bArchYearsExists Then
						bPreUseWork = True
						arrArchYears = BuildYears( arrValuesRS(i) )
					End If
				Else
					If repType = "S" And isSchoolDepend Then
						strParam = ReplaceSchoolsParam( strParam )
					End If
					If Application("MSSQL")=1 Then
						strParam = NSReplace( strParam, " distinct", " distinct top " & kDefaultMax*5)
					Else
						strParam = strParam & " limit " & kDefaultMax
					End If
					Set arrValuesRS(i) = objNSNET.ExecuteSql( strParam )
				End If
				If arrValuesRS(i).EOF Then
					bMissingParams = True
					nParamsNotPresent = nParamsNotPresent + 1
					arrParamsNotPresent( nParamsNotPresent ) = arrQueryParams( kArrDispName, i )
				End If
			End Select
			i = i + 1
		Wend
	End If

	If Not bPreUseWork And bArchYearsExists  Then
		Set objArchDate = objNSNETWork.GetMaxArchDate( strSchoolId )
		If Not objArchDate.EOF Then strArchDate = Date2Str(objArchDate("MAXDATE"))
	End If
End Sub

Sub DrawInputSelectRow(InfoName, strInfo, inputName, size, length, selectName, aArr)
	Dim aItem, i, isComplexSelect
	OpenFormGroup InfoName

	isComplexSelect = (Ubound(aArr)=0 or Ubound(aArr)>kDefaultMin) 
	If isComplexSelect Then%>
	<style>
	.w50, .copy-fix-picker{
		width: 47% !important;
		display: inline-block;
		box-sizing: border-box;
	}
	.copy-fix-picker{
		float: right; 
	}
	</style>
		<input type="text" name="<%=inputName%>" size="<%=TextInputSize(size)%>" maxlength="<%=length%>" value="*" class="w50">
		<img SRC="<%=strCommonImgFolder%>/larrow.gif" ALIGN="BASELINE" WIDTH="23" HEIGHT="17" style="display: inline-block; box-sizing: border-box;">
		<select name="<%=selectName%>" class="form-control select-picker copy-fix-picker"
				data-abs-locale-empty-title="<="
				data-abs-locale-search-placeholder="???"
				<%If isComplexSelect Then%>data-abs-ajax-url="ajaxParam.asp"<%End If%>
				data-abs-locale-status-initialized="<%=obLanguage("Common","kEnterSearchQuery")%>"
				data-abs-locale-status-searching="<%=obLanguage("Common","kSearch")%>"
				data-abs-locale-status-no-results="<%=obLanguage("ServAdmin","kEmptyList")%>"
				data-abs-locale-error-text="<%=obLanguage("Common","kUnexpErr")%>"><%
	Else
	%><select name="<%=inputName%>" class="form-control inputstl"><%
	End If
	i=0

	For Each aItem In aArr
		i=i+1%>
		<option <%If CStr(aItem)=strInfo Then %>SELECTED <%End If%>VALUE="<%=DB2Value(aItem)%>"><%
		If(i>=kDefaultMax) Then
			rw " . . . </option>"
			Exit For
		End If
		rw DB2Html(aItem)%></option><%
	Next
	%></select><%
	CloseFormGroup
End Sub


Sub onHeadSpecial( )
%>
<script src="<%=GetVersionedResLink("/vendor/bootstrap-select/bootstrap-select-js-bundle.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/static/dist/pages/js/reports.min.js")%>" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/report.min.css")%>"/>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print-tables.min.css")%>"/>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/bootstrap-select/bootstrap-select-css-bundle.min.css")%>"/>


<script><!--
$(function() {
	$('.select-picker')
	.selectpicker({
		liveSearch: true
	})
	.on('change', function () {
		 var opValue = $(this).val();
		 //console.log(opValue);
		 if (opValue>''){
			$(this).parent().find("input").val(opValue);
			$('.selectpicker').selectpicker('refresh');
		 }
	 });
	for(i=0;i<$('select.select-picker').length; i++)
	{
		var sel = $('select.select-picker')[i];
		if(sel.options.length<2 || sel.options.length>=<%=kDefaultMax%>){
			$(sel)
			.ajaxSelectPicker({
			ajax: {
				data: function () {
					var params = {
						AT:'<%=strToken%>',
						nQueryId: <%=nQueryId%>,
						repType: '<%=repType%>',
						name: $('.bs-searchbox input:visible').parents('.form-group').find('input')[0].name,
						query: $('.bs-searchbox input:visible').val()
					};
					return params;
				}
			}
			,preprocessData: function(response) {
			var values;
			values = [];
			_.each(response.data.values, function(value) {
			  values.push({
				'value': value.id,
				'text': value.name,
				'disable': false
			  });
			});
			return values;
		  }
		  ,preserveSelected: false, //no show curent selected
		  requestDelay: 1000
		});
	}	}
	//.ajaxSelect();
});

var Wnd=null;
var yearinarch;
function Back(){
	goBack(document.<%=kFormName%>, 'AdditionalReports.asp');
}

function generateViewReport(){
	var promises = [];
	$(".date-input").each(function(indx, element)
	{
		var def = new $.Deferred();
		validDate(element, def);
		promises.push(def);
	});
	$.when.apply(undefined, promises).promise().done(function() {
		report.setOptions({reportUrl: GetReportUrl()});
		report.generate()
	});
}

function getHiddenTextOrListValue( obj )
{
	var ss = $(obj).val();
	ss = ss.replace(/[?]/g, '_');
	ss = encodeURIComponent(ss);
	return ss;
}
function getStrArray( sFormName, sName)
{
	var form = document.forms[sFormName];
	var sArray = '';
	var i;
	var n;
	for (i=0; i<form.elements.length; i++){
		n = form.elements[i].name;
		if (n.substring(0,sName.length) == sName){
			sArray += getHiddenTextOrListValue(form.elements[i]);
			sArray += '|';
		}
	}
	return sArray;
}
function dataChanged(){ dataWereChanged = false; }


function GetReportUrl(){
	var form = document.forms['<%=kFormName%>'];
	var pv = getStrArray('<%=kFormName%>', 'PARAMVAL');
	var reportUrl = 'Report.asp?VER=' + getVer() + '&AT=<%=strToken%>&RPTID=<%=strReportID%>'+'&PV='+pv;//+'&PT='+pv;

	<%If bPreUseWork Then%>
		reportUrl = reportUrl +'&ARC='+yearinarch<%
	ElseIf bArchYearsExists Then%>
		reportUrl = reportUrl + '&ARC=1'<%
	End If%>

	return reportUrl;
}

<%
If bPreUseWork Then
	Dim i
	%>var arrArchYears = new Array();<%
	For i = 0 To Ubound(arrArchYears)%>
		arrArchYears[<%=i%>]=<%=arrArchYears(i)%>;<%
	Next%>
	yearinarch = arrArchYears[0];
	<%
End If%>
//-->
</script><%
		Call scriptCalendar( kFormName, Null, Null )%>
<script><!--


validDate = function(element, def) {
	var dt = null;
	if (element.value) {
		dt = dateUtils.str2date(element.value);
	}
	if(!dt){
		alert(language.Generic.Common.kErrInvalidDateNotEmpty);
		element.value = "";
		element.focus();
		def.reject(language.Generic.Common.kErrInvalidDateNotEmpty);
	}
	def.resolve();
}

//-->
</script><%
End Sub

Sub DrawDateRange(n)
	DrawDateInterval "PARAMVAL" & Cstr(n) & "_1", Empty, "PARAMVAL" & CStr(n) & "_2", Empty
End Sub

Sub DrawFilters( strForm )
	
	Dim i, aArr, arrValues, j
	Dim strChangeJS
	If bNoReportInfo Or bExit Then
		Call DrawInfo(obLanguage("Constructor","kErrGetReportInfo"), False)
		Exit Sub
	End If
	If bIsEducManager Then
		Call DrawEMRegionFilter_2(strForm)
		Select Case repType
		Case "S"
			If IsDull(strSchoolId) Then
				Call DrawInfo(obLanguage("Constructor","kNoSchools"), False)
				bNoSchool = true
				Exit Sub
			End If
			DrawFilterRow kFormName, obLanguage("EMReports","kEMSchool") , "SCHOOLID", rsSchools, "SCHOOLID", "SCHOOLNAME", strSchoolID, False
			' class list depends on school !!!
			' TODO
			'If Not ExistsSchoolDependentFilters
			'Then DrawFilterRowNoChange kFormName, obLanguage("MenuFolders","kFEOSchools") , "SCHOOLID", rsSchools, "SCHOOLID", "SCHOOLNAME", strSchoolID, False
		End Select
	End If

	If bParams Then
		If Not bMissingParams Then
			For i = 0 To nParamsCnt
				Select Case GetSafeStr(arrQueryParams(kArrParamDispType,i),1,Null)
					Case "S", "M"
						bCustomParams = True
						arrValues =  arrValuesRs(i).GetRows()
						Redim aArr(UBound(arrValues,2))'+1)
						'aArr(0) = "*"
						For j = 0 To UBound(aArr)'-1
							aArr(j) = arrValues(0,j)
							'If Len( arrValues(0,j)) <kMaxLenParam Then aArr(j+1) = arrValues(0,j) Else aArr(j+1) = "*"&Right(arrValues(0,j), kMaxLenParam)
						Next
						Call DrawInputSelectRow( arrQueryParams(kArrDispName,i), "", "PARAMVAL"& CStr(i), kMaxLenParam/2, kMaxLenParam, "LPARAMVAL"& CStr(i), aArr )
					Case "C"
						Call DrawInputRow( arrQueryParams(kArrDispName,i),"", "PARAMVAL"& CStr(i), "text", kMaxLenParam/2, kMaxLenParam, "" )
					Case Else
						OpenFormGroup DB2HTML( arrQueryParams(kArrDispName,i) )
							Select Case GetSafeStr(arrQueryParams(kArrParamDispType,i),1,Null)
								Case "L", "I"
									If bPreUseWork And (arrQueryParams(kArrName,i) = "SCHOOLYEARNAME") Then strChangeJS = "yearinarch = arrArchYears[this.selectedIndex];" else strChangeJS = "return false;"
									Call DrawSelectRs( arrValuesRs(i), "PARAMVAL" & CStr(i), GetSafeStr(arrQueryParams(kArrItemName,i), -1, Null), GetSafeStr(arrQueryParams(kArrItemName,i), -1, Null), 1, Null, strChangeJS )
								Case "D","B"
									Call DrawDateInput( "PARAMVAL" & CStr(i), NSDate, obLanguage("Common","kCalendar") )
								Case "R"
									DrawDateRange(i)
								Case "T"
									DrawDateRange(i)
							End Select
						CloseFormGroup
				End Select
			Next
		End If
	End If
End Sub

Sub DrawReportButtons()
	ButtonPrintCommon "report.print()", obLanguage("Common","kBtnPrint")
	Button "report.window()", obLanguage("Buttons","kInSeparateWindow"), obLanguage("Buttons","kInSeparateWindow"), "glyphicon glyphicon-fullscreen"
	ButtonExport "report.exportReport()"
End Sub

Sub DrawWithExcelButton()
	ButtonGenerate "generateViewReport() ", obLanguage("Buttons", "kGenerate")
	ButtonGenerateExcel "generateViewReport(true) ", obLanguage("Buttons", "kGenerate") & " Excel"
'	Dim arrButtons
'	arrButtons = Array( _
'		"generateViewReport()", "на экране", "", "на экране", _
'		"generateViewReport(true)", "только в Excel", "", "только в Excel" _
'	)
'	DropDownButtonEx obLanguage("Buttons", "kGenerate"), "glyphicon glyphicon-random", "btn-default", arrButtons
End Sub

Sub DrawReportButtonPanel()
	%>
	<%If Not bMissingParams Then%>
		<%If Not bNoSchool Then%>
			<div class="buttons-panel" id="buttonPanel">
				<div class="buttons-panel-left">
					<%
		'			If bIsEducManager Then
						Call DrawWithExcelButton
		'			Else
		'				ButtonGenerate "generateViewReport() ", obLanguage("Buttons", "kGenerate")
		'				ButtonGenerateExcel "generateViewReport(true) ", obLanguage("Buttons", "kGenerate") & " Excel"
		'			End If
					%>
				</div>
				<div class="buttons-panel-right hidden" id="actionPanel">
					<%Call DrawReportButtons%>
				</div>
			</div>
			<%End If%>
			<%
				Else
				strError=strError & "<b>" & obLanguage("Constructor","kErrParamsNotPresent") & "</b>"
				Dim i
				strError=strError & "<a class=""normaltext""> "
				For i = 0 To nParamsNotPresent
					strError=strError & arrParamsNotPresent(i)
					If i <> nParamsNotPresent Then
						strError=strError & ", "
					End If
				Next
				strError=strError & "</a>"
				Call DrawInfo(strError, false)
			End If%>
	<%
End Sub

Sub OnDrawPage()
	%><form NAME="<%=kFormName%>" class="form-horizontal" ACTION="<%=strScriptName%>" METHOD="POST"><%
	rw WriteObligatoryTags()
	rw WriteHiddenTags(Array("ARPTID", strReportID))
	SetFiltersWidth "col-lg-9 col-md-12", "col-md-3", "col-md-9"

	If Not IsDull(objReportInfo("DESCRIPTION")) Then
		DrawInfo objReportInfo("DESCRIPTION"), True
	End If

	If Not bPreUseWork And bArchYearsExists Then%><br>(<%=obLanguage("Constructor","kArchDBFrom") & " " &strArchDate%>)<%End If

	Call DrawButtonsFilters( False, True, True, kFormName )
	If bCustomParams Then DrawInfo obLanguage("Constructor","kWarnCustomPar"), False
		
	%></form>
	<hr />
	<div class="row">
		<div class="col-md-12">
			<%Call DrawReportButtonPanel%>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div id="report" class="hidden"></div>
		</div>
	</div>
	<%
End Sub
%>
