<!-- #INCLUDE FILE=sa_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const kAboutETokenbETokenAuthentication = "Информация об аутентификации с помощью ключей eToken"

Function GetPageTitle()
	GetPageTitle = ""
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Import
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Import
 End Function

Sub onHeadSpecial()%>
<script><!--
function importETokenKeys(){
	var form=document.forms['ImportETokenKeys'];
	if (form.elements['FILE'].value=='')
		alert(language.Generic.ServAdmin.kSetXMLFile);
	else
		DoSubmit(form, 'ImportETokenKeys.asp');
}
//--></script>
<%
End Sub

Sub onDrawPage()
If bETokenAuthentication Then%>
	<hr><br>
	<form name="ImportETokenKeys" action="ImportETokenKeys.asp" enctype="multipart/form-data" method="post" target="im_port_keys">
	<%=WriteObligatoryTags()%>
	<div class="body"><%=obLanguage("ServAdmin","kImportETokenKeys")%></div><br>
	<div class="body"><%=obLanguage("Common","kImportFile")%>: <input TYPE="file" name="FILE" size="<%=IIf(isIE, "50", "35")%>"></div><br>
	<%=ShowButton("import2","import", "JavaScript:importETokenKeys()", obLanguage("ServAdmin","kExETokenKeys"), obLanguage("Common","kImport"))%>&nbsp;
	</form><%
Else%><hr><br><a href="./AboutETokenAuthentication.htm" target="_helpImport"><%=kAboutETokenbETokenAuthentication%></a><%
End If
End Sub%>
