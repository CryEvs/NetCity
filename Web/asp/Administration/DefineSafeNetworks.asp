<!-- #INCLUDE FILE=sa_inc.asp -->

<%' © 2007-2015 IRTech. All rights reserved.

Const kConfirmDeleteSafeRanges = "Вы действительно хотите удалить диапазон IP-адресов?"

Dim dtYearStart, dtYearEnd
Dim strSYName
Dim bGlobalYear
Dim rsAllowedRanges
Dim strGlobalYearID, rsSchools

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleRangeOfSecureIPAddresses")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Settings
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Settings
 End Function

Sub Main()
	If Not bIsEducManager Then
		Set rsSchools = objNSNET.GetSchools()
		If rsSchools.EOF Then GenerateError obLanguage("ServAdmin","kErrSchoolsNotExist")
	Else
		Set rsSchools = objNSNET.GetEMSchools(strEMID, kWizardSteps)
	End If
End Sub

Sub onHead
%>
<SCRIPT>

Number.prototype.toStringHex = function(size) {
	var left = "";
	var right = this.toString(16);
	for (i=right.length; i<size; i++) left += "0";
	return left + right;
}
String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}
var ipOfAdmin= "<%=GetRemoteAddr()%>";
var nIpAdmin = GetIpValue(ipOfAdmin);

function Back() {
	goBack(document.SecuritySettings, 'options.asp');
}

function GetIpValue(strIp) {
	var separator = ":";
	strIp = strIp.replace(/\s*/g,'');
	var radix=16;
	if(strIp.indexOf(separator)<0)
	{
		if (strIp.indexOf("x")<0)
			radix = 10;
		separator = ".";
	}
	var arr = strIp.split(separator);
	if (arr.length>1 && separator != "."){
		var i=arr.length-1;
		if(arr[i].indexOf(".")>0){
			val = GetIpValue(arr[i]);
			arr.splice(i,1,val.slice(-8,-4),val.slice(-4))
		}
		for(; i>=0; i--) {
			if(arr[i] == "") {
				var segmentCount = arr.length;
				var zeroCountToInsert = 8 - segmentCount; // количество нулей для вставки
				arr[i]=0; // заменяем пустой элемент нулем
				for(var j=0; j < zeroCountToInsert; j++) {
					arr.splice(i+1,0,0);//делаем вставку нулей в массив
	}	}	}	}
	val="";
	size = (radix == 16) ?4:2;
	for(var i=arr.length-1; i>=0; i--){
		val = parseInt(arr[i], radix).toStringHex(size) +val;
	}
	if (val.length < 32)
		val = "0000".repeat(6) + val
	return val;
}
function GetIp4String(val) {
	var radix=10;
	if (val.indexOf("0x")==0){
		radix=16;
		val = val.substring(2)
	}
	val = parseInt(val, radix);
	var base = 1<<8;
	var i = 1;
	str = val % base;
	while(true){
		val >>>= 8;
		if (val <= 0)
			break;
		i+=1;
		str = (val % base) + "." + str
	}
	if (i<4){
		for(;i<4;i++)
			str = '0.'+str;
	}
	return str;
}
function GetIp6String(val) {
	if (val.indexOf("0x")==0){
		val = val.substring(2)
	}
	str = val.slice(0,4)
	for (i=4; i<val.length; i+=4)
		str+= ":"+val.slice(i,i+4)
	return str;
}
function maybeIpv6(item){
	var val = item.value;
	return val.indexOf(":")>=0
}
function maybeIpv4(item){
	var val = item.value;
	if( /^(0x[a-f\d]+|\d+)$/.test(val) ){
		val = GetIp4String(val)
		item.value = val;
	}
	return val.indexOf(".")>=0
}

function getIpv6Regexp(){
/*
	дополнительно реализован IPv6 с учётом таких: "1:2:3:4::5:1.2.3.4" (IPv4 addresses as dotted-quads)
	должно получится такое выражение с точностью до перестановки строк:
^(
(:(:[0-9a-f]{1,4}){0,5}
|([0-9a-f]{1,4}:){5}([0-9a-f]{1,4}|)
|([0-9a-f]{1,4}:){4}((:[0-9a-f]{1,4}){1,1}|)
|([0-9a-f]{1,4}:){3}((:[0-9a-f]{1,4}){1,2}|)
|([0-9a-f]{1,4}:){2}((:[0-9a-f]{1,4}){1,3}|)
|([0-9a-f]{1,4}:){1}((:[0-9a-f]{1,4}){1,4}|)
):((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)([.](25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})
|(:(:[0-9a-f]{1,4}){1,7}
|([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:)
|([0-9a-f]{1,4}:){6}((:[0-9a-f]{1,4}){1,1}|:)
|([0-9a-f]{1,4}:){5}((:[0-9a-f]{1,4}){1,2}|:)
|([0-9a-f]{1,4}:){4}((:[0-9a-f]{1,4}){1,3}|:)
|([0-9a-f]{1,4}:){3}((:[0-9a-f]{1,4}){1,4}|:)
|([0-9a-f]{1,4}:){2}((:[0-9a-f]{1,4}){1,5}|:)
|([0-9a-f]{1,4}:){1}((:[0-9a-f]{1,4}){1,6}|:)
)
)$
*/
	var d16 = "[0-9a-f]{1,4}"; //0-ffff
	var d256 = "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"; //0-255

	var ipv4 = d256 + "([.]"+d256+"){3}";
	var regstr4 = "(:(:"+d16+"){0,5}"
	regstr4 += "|("+d16+":){5}("+d16+"|)";
	for(var i=1;i<=4;i++){
		regstr4 += "|("+d16+":){"+(5-i)+"}((:"+d16+"){1,"+i+"}|)";
	}
	regstr4 += "):("+ipv4+")";

	var regstr = "(:(:"+d16+"){1,7}"
	regstr += "|("+d16+":){7}("+d16+"|:)";
	for(var i=1;i<=6;i++){
		regstr += "|("+d16+":){"+(7-i)+"}((:"+d16+"){1,"+i+"}|:)";
	}
	regstr += ")";
	return new RegExp("^("+regstr4+"|"+regstr+"|::)$");
}
var reg_ipv6 = getIpv6Regexp();
var reg_ipv4 = /^((25[0-5]|2[0-4]\d|[01]?\d\d?))([.](25[0-5]|2[0-4]\d|[01]?\d\d?)){3}$/; //0-255
var regCLear=/[\s\[\]]+/g;
var regSimple=/(^|[:.]+)0+(?!$|[:.])/g;
function clearSpaces( item )
{
	item.value = item.value.replace(regCLear,'');
}
function simplify( item )
{
	item.value = item.value.replace(regSimple,'$1');
}

var Range = function(lBound, rBound) {
	var _leftValue;
	var _rightValue;
	var _leftBound = lBound;
	var _rightBound = rBound;
	var _checkRegEx;
	var _canBeEmpty = false;

	var _hasSameBoundFormat = function() {
		var separator = ":";
		//левая граница в формате Ipv6 корректна а правая нет
		if ( maybeIpv6(_leftBound) ) {
			if( !maybeIpv6(_rightBound) ) {
				focusAlert(_rightBound, language.Generic.ServAdmin.kErrorFormatIPAddress + ': для  ipv6 ожидается ":" (1:2:3:4:5:6:7:8)');
				return false;
			}
			_checkRegEx = reg_ipv6;
		}
		else {
			separator = ".";
			//левая граница не в ipv4 и не в ipv6 формате
			if( ! maybeIpv4(_leftBound) ) {
				focusAlert(_leftBound, language.Generic.ServAdmin.kErrorFormatIPAddress + ' Ожидается ":" (1:2:3:4:5:6:7:8) или "." (1.2.3.4)'); // number?
				return false;
			}
			// левая в ipv4 формате, а правая граница не в формате ipv4
			if( ! maybeIpv4(_rightBound) ) {
				focusAlert(_rightBound, language.Generic.ServAdmin.kErrorFormatIPAddress + ' Ожидается "." (1.2.3.4)');
				return false;
			}
			_checkRegEx = reg_ipv4;
		}
		return true;
	}

	//метод проверки формата адресов диапазона
	var _checkFormat = function() {
		if( !_hasSameBoundFormat())
			return false;
		var errMsg = language.Generic.ServAdmin.kErrorFormatIPAddress;
		if (!_checkRegEx.test(_leftBound.value)) {
			focusAlert(_leftBound, errMsg)
			return false;
		}
		if (!_checkRegEx.test(_rightBound.value)) {
			focusAlert(_rightBound, errMsg)
			return false;
		}
		return true;
	};

	var _setCanBeEmpty = function(bCan) {
		_canBeEmpty = bCan;
	}

	//общий метод проверки диапазона
	var _check = function() {
		clearSpaces(_leftBound);
		clearSpaces(_rightBound);
		if (trimStr(_leftBound.value) == "" && trimStr(_rightBound.value) == "") {
			if(_canBeEmpty)
				return true;
			focusAlert(_leftBound, language.Generic.ServAdmin.kErrorBound);
			return false;
		}
		simplify(_leftBound);
		simplify(_rightBound);
		if (_checkFormat()) {
			_leftValue = GetIpValue(_leftBound.value);
			_rightValue = GetIpValue(_rightBound.value);

			if (_leftValue > _rightValue){
				focusAlert(lBound, language.Generic.ServAdmin.kErrorBounds)
				return false;
			}
		}
		else {
			return false;
		}
		return true;
	}

	var _equal = function(newRange) {
		return newRange.LeftBound.value == _leftBound.value && newRange.RightBound.value == _rightBound.value;
	}

	//метод проверки вхождения ip в диапазон
	var _containsIp = function(ip) {
		return (_leftValue <= ip && ip <= _rightValue) ;
	}

	var _intersects = function(range) {
		var left = range.GetLeftValue();
		var right = range.GetRightValue();
		return (_leftValue <= left && left <= _rightValue)
				|| (_leftValue <= right && right <= _rightValue)
				|| (left <= _leftValue && _leftValue <= right);
	}

	return {
		LeftBound: _leftBound,
		RightBound: _rightBound,
		GetLeftValue:  function() { return _leftValue},
		GetRightValue:  function() { return _rightValue},
		Check : _check,
		Equal : _equal,
		Intersects : _intersects,
		ContainsIp : _containsIp,
		SetCanBeEmpty : _setCanBeEmpty,
	};
}

function CompareRanges(rangesArray, confirms) {
	for(var i = 0; i < rangesArray.length-1; i++) {
		var existsBound = rangesArray[i];
		for(var j=i+1; j < rangesArray.length; j++) {
			if(existsBound.Equal(rangesArray[j])) {
				focusAlert(rangesArray[j].LeftBound, language.Generic.ServAdmin.kRangeIsExists)
				return true;
			}
			if(existsBound.Intersects(rangesArray[j])) {
				confirms.push($.show.getConfirmation(
					' ('+rangesArray[j].LeftBound.value +' - '+ rangesArray[j].RightBound.value+')\n'
					+ language.Generic.ServAdmin.kRangeIntersects
					+ '\n('+existsBound.LeftBound.value +' - '+ existsBound.RightBound.value+')' +".\n" 
					+ language.Generic.Common.kCfrmContinue));
			}
		}
	}
	return false;
};

//получает массив добавленных ip диапазонов
function GetExistsBounds() {
	var result = [];
	var lBounds = $('input[name=LB]');
	var rBounds = $('input[name=RB]');
	if(lBounds.length == rBounds.length) {
		for(var i=0; i < lBounds.length-1; i++) {
			var range = new Range(lBounds[i], rBounds[i])
			result.push(range);
		}
		var range = new Range(lBounds[i], rBounds[i])
		range.SetCanBeEmpty(true);
		result.push(range);
		return result;
	}
};


function savePeriods(){
	var confirms = new Array();
	var bAdminInRange=false;
	if (!dataWereChanged) return;
	if( isDBBusy() ) return;
	var existsBound = GetExistsBounds();
	for(var i = 0; i < existsBound.length; i++){
		var range = existsBound[i];
		if (!range.Check()) return;
		if(CheckAdminData(range, nIpAdmin))
			bAdminInRange=true;
	}
	if( CompareRanges(existsBound, confirms) ) return;
	if (!bAdminInRange)
		confirms.push($.show.getConfirmation( language.Generic.ServAdmin.kIpWereOutOfRange +". " + language.Generic.Common.kCfrmContinue));

	extDeferred.when(confirms).then(function(){
		var form = document.forms["SecuritySettings"];
		setDBBusy();
		DoSubmit(form, "EditSafeRanges.asp?SaveAll=1");
	});
}

function OnChangeSchool() {
	var form = document.forms["SecuritySettings"];
	DoSubmit(form, "DefineSafeNetworks.asp");
}
function DeleteRange(rangeId) {
	if( isDBBusy() ) return;

	var $tr = $('input[name=RID][value='+rangeId+']').closest('tr');
	
	var lBound = $tr.find('input[name=LB]')[0];
	var rBound = $tr.find('input[name=RB]')[0];

	var range = new Range(lBound, rBound)
	range.Check();

	var confirms = new Array();
	if(CheckAdminData(range, nIpAdmin))
		confirms.push($.show.getConfirmation( language.Generic.ServAdmin.kIpWereOutOfRange +". " + language.Generic.Common.kCfrmContinue));
	confirms.push($.show.getConfirmation('<%=kConfirmDeleteSafeRanges%>'));

	extDeferred.when(confirms).then(function(){
			var form = document.forms["SecuritySettings"];
			setDBBusy();
			DoSubmit(form, "EditSafeRanges.asp?Add=0&RangeID=" + rangeId);
		});
}
function CheckAdminData(range, ipOfAdmin) {
	var bIsRange = range.ContainsIp(ipOfAdmin);
	return bIsRange;
}
</SCRIPT>
<%
End Sub

Sub DrawDeleteSign(id)
	Dim hint
	hint = obLanguage("ServAdmin","kDeleteRange")
	rw ShowIMGAnchor("JavaScript:DeleteRange(" & id & ");", hint, "remove.gif", hint, "border=0" )
End Sub

Sub onDrawPage()
	Dim rid, leftB, rightB
%>
	<FORM NAME="SecuritySettings" METHOD="post" class="form-horizontal" ACTION="EditSafeRanges.asp" onsubmit="return false;">
	<%=WriteObligatoryTags()%>
	<div class="btn-group">
		<%ButtonSave "JavaScript:savePeriods();", obLanguage("Common","kSave")
		ButtonReset "resetScreen('SecuritySettings');", obLanguage("Common","kReset")%>
	</div><%
	strSchoolID = GetSafeID(Request("SCHOOLID"), -1)
	Set rsAllowedRanges = objNSNET.GetSchoolAllowedIPRanges(strSchoolID)%>
	<div class="span6">
		<div class="widget-box">
			<div class="widget-content">
			<%Call DrawSelectInfoRow(obLanguage("Common","kEOs"), strSchoolID, "SCHOOLID", rsSchools, "SCHOOLID","SCHOOLNAME", obLanguage("Common","kAll"), "OnChangeSchool();")%></div>
		</div>
		<table class="table table-bordered table-condensed table-thin">
			<tr nowrap><th><%=obLanguage("ServAdmin","kStartRange")%></th><th><%=obLanguage("ServAdmin","kEndRange")%></th><th>&nbsp;</th></tr><%
				Do
					If rsAllowedRanges.EOF Then
						leftB = ""
						rightB = ""
					Else
						leftB = rsAllowedRanges("LEFTBOUND")
						rightB = rsAllowedRanges("RIGHTBOUND")
					End If
				%>
					<tr>
						<td> <%Call DrawInput(leftB, "LB", "text", "", 47, 39, "")%></td>
						<td> <%Call DrawInput(rightB, "RB", "text", "", 47, 39, "")%></td>
						<td> <%
							If Not rsAllowedRanges.EOF Then
								rid = rsAllowedRanges("RANGEID")
								Call DrawInput(rid, "RID", "hidden", "", "", "", "")
								Call DrawDeleteSign(rid)
								rsAllowedRanges.MoveNext
							End If%>
						</td>
					</tr>
					<%
				Loop Until leftB = ""
			%>
		</table>
	</div>
	</FORM><%
End Sub
%>
