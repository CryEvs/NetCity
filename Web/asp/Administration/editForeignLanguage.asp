<!-- #INCLUDE FILE   ="sa_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strLanguageName
Dim strItemID
Dim bAddForeignLanguage

Function GetPageTitle()
	GetPageTitle = IIF(bAddForeignLanguage,obLanguage("ServAdmin","kAddForeignLanguage"),obLanguage("ServAdmin","kTitleForeignLanguageEdit"))
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_RefBooks
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_RefBooks
 End Function

Sub ReadState()
	strItemID = GetSafeID(Request("ItemID"), "0")
	bAddForeignLanguage = (strItemID = 0)
End Sub

Sub Main()
	Dim objRs
	If Not bAddForeignLanguage	Then
		Set objRs = objNSNET.GetForeignLanguage(strItemID)
		strLanguageName = objRs("NAME")
	Else
		strLanguageName = ""
	End IF
End Sub

Sub onHead
%>
<SCRIPT><!--
function Back(){
	goBack(document.ForeignLang, 'Refs.asp');
}
function canSubmit()
{
	var form = document.forms['ForeignLang'];
	var name = trimStr(form.elements["LangName"].value);
	if (name=='') {
		alert(language.Generic.ServAdmin.kForeignLanguageNameCantBeEmpty);
		form.elements['LangName'].focus();
		return false;
	}
	return true;
}
//-->
</SCRIPT>
<%
End Sub

Sub DrawButtons()
	ButtonSave "ok_check_db('ForeignLang', '')", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()
	
	DrawButtonPanel%>
	<form name="ForeignLang" method="post" action="ChangeForeignLanguage.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ForeignLangID",strItemID, "ParamID", kForeignLangsParID))%>
		
		<%Call SetFiltersWidth("", "col-md-3 col-lg-2 col-sm-4", "col-md-6 col-lg-4 col-sm-6")
		Call DrawInputRow( obLanguage("ServAdmin","kFullName"), strLanguageName, "LangName", "text", 50, 70, "" )%>
	</form><%
End Sub

%>
