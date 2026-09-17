<!-- #INCLUDE FILE   ="sa_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strTypeName, strAbbr
Dim strItemID
Dim bAddItem

Function GetPageTitle()
	GetPageTitle = IIF(bAddItem,obLanguage("ServAdmin","kAddAssignmentType"),obLanguage("ServAdmin","kTitleAssignmentTypeEdit"))
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_RefBooks
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_RefBooks
 End Function

Sub ReadState()
	strItemID = GetSafeID(Request("ItemID"), "0")
	bAddItem = (strItemID = 0)
End Sub

Sub Main()
	Dim objRs
	If Not bAddItem Then
		Set objRs = objNSNET.GetAssignmentType(strItemID)
		strTypeName = objRs("NAME")
		strAbbr = objRs("ABBR")
	Else
		strTypeName = ""
		strAbbr = ""
	End IF
End Sub

Sub onHead
%>
<SCRIPT><!--
function Back() {
	goBack(document.AssigmentType, 'Refs.asp');
}

function canSubmit()
{
	var form = document.forms['AssigmentType'];
	var name = trimStr(form.elements["TypeName"].value);
	var abbr = trimStr(form.elements["AbbrName"].value);
	if (name == '' || abbr == '') {
		alert(language.Generic.ServAdmin.kAssignmentDataCantBeEmpty);
		if (name == '') form.elements['TypeName'].focus();
		else form.elements['AbbrName'].focus();
		return false;
	}
	return true;
}
//-->
</SCRIPT>
<%
End Sub

Sub DrawButtons()
	ButtonSave "ok_check_db('AssigmentType', '')", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()%>
	<form name="AssigmentType" method="post" action="ChangeAssigmentTypes.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ItemID",strItemID, "ParamID", kAssignmentTypesID))%>

		<%DrawButtonPanel

		Call SetFiltersWidth("", "col-md-3 col-lg-2 col-sm-4", "col-md-6 col-lg-4 col-sm-6")
		Call DrawInputRowWithClass(obLanguage("ServAdmin","kFullName"), strTypeName, "TypeName", "text", 50, 30, "", "FilterWhiteSpace")
		Call DrawInputRowWithClass(obLanguage("ServAdmin","kAbbrNameS"), strAbbr, "AbbrName", "text", 50, 2, "", "FilterWhiteSpace")%>
	</form><%
End Sub
%>
