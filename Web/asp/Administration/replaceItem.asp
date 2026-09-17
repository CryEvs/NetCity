<!-- #INCLUDE FILE=sa_inc.asp -->
<%

Dim strParamID, strParamName, strItemID, strItemName
Dim objRs

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleUserParamItem_Replace") & " " & GreenText(DB2HTML(strParamName))
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_RefBooks
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_RefBooks
 End Function

Sub ReadState()
	strParamID = GetSafeID(Request("ParamID"), GetSafeID( obTokenMgr.GetData(strToken, stParamID), "0"))
	strParamName = GetSafeStrParam(Request("ParamName"), GetSafeStr( obTokenMgr.GetData(strToken, stParamName), -1, ""))
	strItemID = GetSafeID(Request("ItemID"), GetSafeID( obTokenMgr.GetData(strToken, stParamItemID), "0"))

	If strParamID = "0" Or strItemID = "0" Then
		RedirectTo "Refs.asp?", Array("ParamID", strParamID)
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stBackPage, "administration/replaceItem.asp")
End Sub

Sub onHeadSpecial()
%><SCRIPT><!--
function Back()
{
	goBack( document.mainForm, 'UserParamItemEdit.asp');
}
function replaceSubject()
{
	if( isDBBusy() ) return false;
	$.show.confirmation(language.Generic.ServAdmin.kReplace + '?').then(function(){
		setDBBusy();
		DoSubmit( document.mainForm, "");
	});
}
//--></SCRIPT>
<%
End Sub

Sub Main()
	Set objRs = objNSNET.GetUserParamItemInfo(strItemID)
	If objRs.EOF Then GenerateError obLanguage("ServAdmin","kErrItemNotFound")
	strItemName = GetSafeStr(objRs("ITEMNAME"), -1, "")

	Set objRs = objNSNET.GetUserEditableParamItems(Null, strParamID, 0)
	If objRs.EOF Then GenerateError obLanguage("ServAdmin","kErrReplace")
End Sub

Sub DrawButtons()
	ButtonSave "replaceSubject();", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()%>
	<form method="POST" action="UserParamItemSave.asp" name="mainForm">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ParamID", strParamID, "ItemID", strItemID, "ACT", "replace"))%>
		<table cellpadding="5" cellspacing="0"><tr><td><%Call DrawButtons()%></td>
		<td>
		<table border="1" align="center" cellpadding="5" cellspacing="0" class="ThickTable">
		<%Response.Write  "<tr><th>" & obLanguage("ServAdmin","kUserParamItem") & "</th><th>" & obLanguage("ServAdmin","kReplaceTo") & "</th></tr>"%>
		<tr><td><%=strItemName%></td><td><%DrawSelectRs objRs, "NItemID", "ITEMID", "ITEMNAME", strItemID, Null, ""
		%></td></tr>
		</table>
		</td></tr></table>
	</form>
	<%
End Sub
%>
