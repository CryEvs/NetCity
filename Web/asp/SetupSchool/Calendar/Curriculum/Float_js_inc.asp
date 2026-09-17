<% ' © 2007-2008 IRTech. All rights reserved.
%>
<SCRIPT><!--
Number.prototype.Crop = function (x) {
	var s = this+'', a = s.split('.');
	a[1]=a[1]||'';
	return parseFloat(a[0]+'.'+a[1].substring(0,x));
}
function str2floatEx(el) {
	var sVal = trimStr(el.value);
	if(sVal != "") {
		sVal = sVal.replace(",", ".");
		var fVal = parseFloat(sVal);
		if(!isNaN(fVal)) {
			sVal = fVal.toString();
			var chDecimal = "<%=GetDecimalSymbol%>";
			if(chDecimal != ".") {
				var pos = sVal.indexOf(".");
				if(pos >= 0)
					sVal = sVal.substring(0,pos) + chDecimal + sVal.substring(pos+1,sVal.length);
			}
			el.value = sVal;
		}
		return fVal;
	}
	else {
		el.value = sVal;
		return sVal;
	}
}

function str2floatVal(strVal) {
	strVal = trimStr(strVal);
	if (strVal == "") {
		return 0;
	}

	strVal = strVal.replace(",", ".");
	var fVal = parseFloat(strVal);
	if(isNaN(fVal)) {
		return 0;
	}

	return fVal;
}

function float2str(val) {
	//if (val % 1 > 0)
//		val = val.toFixed(2)
	var str = val.toString();
	str = str.replace(",", "<%=GetDecimalSymbol%>");
	str = str.replace(".", "<%=GetDecimalSymbol%>");
	return str;
}
//--> </SCRIPT>
