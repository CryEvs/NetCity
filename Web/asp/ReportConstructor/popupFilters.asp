<!-- #INCLUDE FILE=../headerprint.asp -->
<!-- #INCLUDE FILE=../scripts/ScreenNonPrint.asp -->
<!-- #INCLUDE FILE="../scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE FILE="UpdateQueryFields_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Const kParamsForm	= "ParamsForm"

Dim nQueryId, nQueryObjectID, nPropID
Dim objQueryObjects, objObjectProps

Function onLoad()
	onLoad = "setDBFree();"
End Function

Sub OnHead()
%>
<script language="JavaScript" src="/asp/scripts/screen1.js"></script>
<script><!--

function onCancel()
{ $.show.confirmation(language.Generic.Constructor.kCloseWithoutSaving).then(function()
	{
		window.forceClosing = true;
		window.close();
	});
}
function onOk()
{<%If Not objObjectProps.EOF Then%>
	if( isDBBusy() ) return;
	var form = document.forms['<%=kParamsForm%>'];
	setDBBusy();
	DoSubmit(form, 'SaveFilters.asp');
	<%End If%>
}

//--></script><%
End Sub

Sub ReadState()
	nQueryId = GetSafeID( obTokenMgr.GetData(strToken, stQueryId), Null )
End Sub

Sub Main()
	Set objQueryObjects = objNSNETWork.GetQueryPublicObjectsList(nQueryId)
	If objQueryObjects.EOF Then response.write obLanguage("Constructor","kNoFilteredObjects") : response.end

	nQueryObjectID = Request("QUERYOBJID")
	If IsDull(nQueryObjectID) Then nQueryObjectID = GetSafeLng( objQueryObjects ("QUERYOBJECTID") , null )
	Set objObjectProps = GetObjectProps(nQueryObjectID, Array("OUTFILTER", "Y"))

	If Not objObjectProps.EOF Then nPropID = objObjectProps ( "PROPERTYID" )
End Sub

Sub DrawFilters(strForm)%>
<tr><th><%=obLanguage("Constructor","kObject")%></th><th><%=obLanguage("Constructor","kProperty")%></th></tr>
<tr><td class="select"><%
	Call DrawSelectRs( objQueryObjects, "QUERYOBJID", "QUERYOBJECTID", "PARENTNAME", nQueryObjectID, Null, "OnChangeSelect('"&strForm&"','')")%></td><td class="select"><%
	If Not objObjectProps.EOF Then
		Call DrawSelectRs( objObjectProps, "OBJPROP", "PROPERTYID", "DISPLAYNAME", nPropID, Null, "")
	End If%></td></tr><%
End Sub

Sub DrawButtons()
	Response.Write "<tr><td colspan=""8"" align=""right"">"& ShowButton("cancel", "cancel", "JavaScript:onCancel();", obLanguage("Common","kCancel"), obLanguage("Common","kBack"))
	If Not objObjectProps.EOF Then	 Response.Write 	"&nbsp" &ShowButton("go", "go", "JavaScript:onOk();", obLanguage("Constructor","kBtnApply"), obLanguage("Constructor","kBtnApply"))
	Response.Write  "</td></tr>"
End Sub

Sub OnDrawPage()
	%><h3><%=obLanguage("Constructor","kFilters")%></h3>
	<form NAME="<%=kParamsForm%>" ACTION="#" METHOD="POST" TARGET="_self">
	<%=WriteObligatoryTags()%>
	<table class="ThinTable" border="0"><%
	Call DrawButtonsFilters(True, kParamsForm)
	%></table>
	</form><%
End Sub
%>
