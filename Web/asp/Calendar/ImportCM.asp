<!-- #INCLUDE FILE="../headerSimple.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Function isHelpAvailable()
	isHelpAvailable = False
End Function

Sub onHead()
%>
<SCRIPT><!--
isHaveToLogout = false;
//--></SCRIPT>
<%
End Sub

Sub onDrawPage()
	Dim rsObj%>
	<form action="importCMSave.asp" enctype="multipart/form-data" method="post" name="f" id="f">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("ImportStart", Request("ImportStart"), "ImportEnd", Request("ImportEnd"), "ImportPattern", Request("ImportPattern")))%>
	<%=obLanguage("Calendar","kImportName")%><br>
	<input type="file" name="File" size="80"><br>
	<%=ShowButton("import", "import", "JavaScript:DoSubmit(document.f, '');", obLanguage("Common","kImport"), obLanguage("Common","kImport"))%>
	</form>
<%
End Sub

%>
