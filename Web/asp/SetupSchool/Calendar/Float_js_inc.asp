<% ' © 2007-2008 IRTech. All rights reserved.
%>
<SCRIPT><!--
function str2floatEx(el)
{
	var sVal = trimStr(el.value);
	if(sVal != '')
	{
		sVal = sVal.replace(",", ".");
		var fVal = parseFloat(sVal);
		if(!isNaN(fVal))
		{
			sVal = fVal.toString();
			var chDecimal = "<%=GetDecimalSymbol%>";
			if(chDecimal != ".")
			{
				var pos = sVal.indexOf(".");
				if(pos >= 0)
					sVal = sVal.substring(0,pos) + chDecimal + sVal.substring(pos+1,sVal.length);
			}
			el.value = sVal;
		}
		return fVal;
	}
	else
	{
		el.value = sVal;
		return sVal;
	}
}
//--> </SCRIPT>
