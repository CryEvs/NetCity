<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const kFormName = "CIFORM"
Const kFormNameN = "CIFORMN"

Dim strCommonAlert
Dim strSchoolActivityList
Dim rsActivities

Function GetPageTitle()
	GetPageTitle = obLanguage("LearnApp","kTitleLAImport")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = miLearningApplications
End Function

Function GetPageTabItem()
	GetPageTabItem = tbLAImport
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arAddLA)
End Function

Sub ReadState()
	strCommonAlert = GetSafeStr(obTokenMgr.GetData( strToken, stCommonAlert ), -1, "" )
	If strCommonAlert <> "" Then Call obTokenMgr.SetData( strToken, stCommonAlert, "" )
End Sub

Function onLoad()
	If strCommonAlert <> "" Then onLoad="alert('" & strCommonAlert & "');"
End Function

Function onHead()
%><script><!--
function laImport()
{
	var elems = document.<%=kFormName%>.elements;
	if ( elems.LAN.value == 0 )
	{
		alert(language.Generic.LearnApp.kAlertEnterLAName);
		elems.LAN.focus(); return;
	}
	if ( elems.LAP.value.length == 0 )
	{
		alert(language.Generic.LearnApp.kAlertEnterFileName);
		elems.LAP.focus(); return;
	}
	var reg = new RegExp(".+[\.](mdb)$");
	if( elems.LAP.value.search(reg) == -1 )
	{
		alert(language.Generic.LearnApp.kAlertInvalidExt);
		elems.LAP.focus(); return;
	}
	if ( confirm(language.Generic.LearnApp.kConfirmMayTakeTime) )
	{ ok ('<%=kFormName%>','LADoImport.asp') }
}
function laList()
{
	ok ('<%=kFormNameN%>','LAList.asp')
}
//--></script><%
End Function

Sub Main()
	strSchoolActivityList = obTokenMgr.GetData( strToken, "SCHOOLACTIVITYLIST" )
	If IsDull( strSchoolActivityList ) Then GenerateError( obLanguage("LearnApp","kErrExpired") )

	'Set rsActivities = objNSNET.GetActivityList(strSchoolActivityList )
	'If rsActivities.EOF Then GenerateError obLanguage("LearnApp","kErrCanNotGetActivityList")
	Set rsActivities = objConLa.Execute("SELECT PRODUCTID, PRODUCTNAME FROM PRODUCTS ORDER BY PRODUCTID")

End Sub

Function onDrawPage()
%><form name="<%=kFormName%>" method="post" target="_parent" ENCTYPE="multipart/form-data" runat="server">
<table cellpadding="5" cellspacing="5" width="560">
	<tr>
		<td><p><%=obLanguage("LearnApp","kLAImport1")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i> <%=obLanguage("LearnApp","kLAImport2")%>:
	<ol>
	<li><%=obLanguage("LearnApp","kLAImport3")%>
	<li style="padding-top: 16px;"><%=obLanguage("LearnApp","kLAImport4")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i>, <%=obLanguage("LearnApp","kLAImport5")%><br>
		<a href="/sa/import/importer.exe"><%=obLanguage("LearnApp","kLAImportTool")%></a> (472 Кб)<br>
		<a href="/sa/import/importer.rtf" target="_blank"><%=obLanguage("LearnApp","kLAImportToolManual")%></a> (70 Кб)
	<li style="padding-top: 16px;">
		<%=obLanguage("LearnApp","kLAImport6")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i> (<b>import.mdb</b>). <%=obLanguage("LearnApp","kLAImport7")%>:
		<table cellpadding="5" cellspacing="5">
			<tr>
				<th align="left"><%=obLanguage("LearnApp","kImportIntoLA")%>:</th>
				<td><select name="LAN">
					<option value="0"> --- <%=obLanguage("LearnApp","kSelectLA")%> --- </option><%
					While Not rsActivities.EOF
						'If rsActivities("PUBCODE") = "internal" Then
						%><option value="<%=rsActivities("PRODUCTID")%>"><%=DB2HTML(rsActivities("PRODUCTNAME"))%></option><%
						'End If
					rsActivities.MoveNext
					Wend
				%></select></td>
				<td><%
				Response.Write ShowButton("LAList", "LAList", "Javascript:laList()", obLanguage("LearnApp","kBtnLAList"), obLanguage("LearnApp","kBtnLAList"))
				%></td>
			</tr>
			<tr>
				<th align="left"><%=obLanguage("Common","kImportFile")%>:</th>
				<td colspan="2"><input type="file" size="30" name="LAP"></td>
			</tr>
		</table><%
		Response.Write ShowButton("import", "import", "JavaScript:laImport()", obLanguage("Common","kImport"), obLanguage("Common","kImport"))
	%>
	</ol></p>
		</td>
	</tr>
</table><%=WriteObligatoryTags()%>
</form>
<form name="<%=kFormNameN%>" method="post" target="_parent">
<%=WriteObligatoryTags()%>
</form><%
End Function
%>
