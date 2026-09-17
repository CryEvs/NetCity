<!-- #INCLUDE VIRTUAL="asp/SetupSchool/Calendar/Float_js_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.%>

<SCRIPT><!--

function backToList(){
	goBack( document.MenuForm, '/asp/SetupSchool/SchoolInfo.asp');
}
var wndPrintVersion=null;
function closePrintVersion()
{
	if( wndPrintVersion && !wndPrintVersion.closed )
	{
		wndPrintVersion.forceClosing = true;
		wndPrintVersion.close();
	}
}
function OSHdataChanged(theObject, theType)
{
	dataChanged();
	bIsDataValid = true;
	if (theObject && (theType == "NUMBER" || theType == "FLOAT") && trimStr(theObject.value) != "")
	{
		var value;
		if (theObject.name == "T1317"||theObject.name == "T1311"||theObject.name == "T1301"||theObject.name == "T1303"||theType == "FLOAT")
		{
			value = str2floatEx(theObject);
		}
		else 
		{
			value = str2lngEx(theObject);
		}
		if(!isNaN(value))
		{
			if(value >= 0)
				return true;
		}
		alert ("<%=obLanguage("SchoolInfo","kPositiveNumOrZeroRequired")%>");
		theObject.value = "";
		theObject.focus();
		bIsDataValid = false;
		return false;
	}
	return true;
}

function GetValueInt(theObject)
{
	if (theObject && trimStr(theObject.value) != "")
	{
		var value = str2lngEx(theObject);
		if(!isNaN(value))
			return value;
		else
			return 0;
	}
	return 0;
}
//--> </SCRIPT>
