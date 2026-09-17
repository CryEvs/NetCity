<!-- #INCLUDE VIRTUAL="/asp/Educ_Manager/em_screen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolForms/SchoolInfo_inc.asp" -->
<!-- #INCLUDE FILE="ReportsNames_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim i, j, bIsHaveSchoolsUDOD, bIsHaveSchoolsDOU
Dim dctFormsRevisonPaths

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kFNReports")
End Function

Function GetPageTabItem()
	GetPageTabItem = tb_EM_StandardReports
End Function

Sub ReadState()
End Sub

Sub Main()
	Dim objCountSchools

	Call InitGlobalYear()
	Call InitSchoolFormComponent()
	Set dctFormsRevisonPaths = objSchoolFormComponent.GetStatFormsPathsByGYear(nGlobalYearId)
	
	Set objCountSchools = objNSNET.GetCountSchoolsByFuncType(FuncType_AddSchool,strEMID)
	bIsHaveSchoolsUDOD = (objCountSchools("COUNTSCHOOLSBYTYPE").Value > 0)
	Set objCountSchools = objNSNET.GetCountSchoolsByFuncType(FuncType_PreSchool,strEMID)
	bIsHaveSchoolsDOU = (objCountSchools("COUNTSCHOOLSBYTYPE").Value > 0)
	
	Call GetThemes()
	Call GetNames()
	Call GetLinks()
End Sub

Sub onHeadSpecial()%>
<script>
<!--
function GoToLink(strHREF, strThemeID, strReportID)
{
	var form = document.forms['ReportsList'];
	form.elements['ThmID'].value = strThemeID;
	form.elements['RPTID'].value = strReportID;
	if (strHREF == '') {
		alert(language.Generic.ReportNames.kReportUnavailable);
		return;
	}
	ok('ReportsList', strHREF);
}
//-->
</script>
<%
End Sub

Sub OnDrawPage()%>
	<table cellpadding="1"><%
	For i = 0 To kThemes
		If Not IsDull(arrReportsThemes(i)) Then%>
			<tr><td colspan="2"><b><%=arrReportsThemes(i)%></b></td></tr><%
			For j = 0 To arrReportsInTheme(i)
				If Not (IsDull(arrReportsFiles(i, j)) And IsDull(arrReportsNames(i, j))) Then%>
				<tr><td width="10%">&nbsp;</td><td nowrap><a href="JavaScript:GoToLink('<%=arrReportsFiles(i, j)%>','<%=CStr(i)%>','<%=CStr(j)%>')"><%=arrReportsNames(i, j)%></a></td></tr><%
				End IF
			Next
		End If
	Next%>
<!-- #INCLUDE FILE="ReportsPOO_inc.htm" -->
	</table>
	<form NAME="ReportsList" METHOD="POST" ACTION="" TARGET="_parent">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="RPTID" value=""><input type="hidden" name="ThmID" value="">
	</form><%
End Sub
%>
