<!-- #INCLUDE VIRTUAL="/asp/Educ_Manager/em_screen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolForms/SchoolInfo_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim i, j, bIsHaveSchoolsUDOD, bIsHaveSchoolsDOU
Dim dctFormsRevisonPaths, objReportsComponent, reportList

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kFNReports")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StandardReports
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
	
	Set objReportsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReportsComponent")
	Set reportList = objReportsComponent.GetEducManagerReportList()
End Sub

Sub onHeadSpecial()%>
<script>
<!--
function GoToReportLink(strHREF, strReportName, strReportID, strPathPoo)
{
	var form = document.ReportsList;	
	form.elements['RPNAME'].value = strReportName;
	form.elements['RPTID'].value = strReportID;
	form.elements['RPPOOPATH'].value = strPathPoo;
	if (strHREF == '') {
		alert(language.Generic.ReportNames.kReportUnavailable)
		return;
	}
	form.action = strHREF;
	DoSubmit(form, "");
}

function ShowErrorMessage(){
	var message = $('*[name="errMessage"]').val();
	$.show.error(message);
}
//-->
</script>
<%
End Sub

Sub OnDrawPage()
	Call DrawReportList()
	'Call CheckRepList()
	%><form NAME="ReportsList" METHOD="POST" ACTION="" TARGET="_parent">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="RPTID" value=""><input type="hidden" name="ThmID" value="">
		<input type="hidden" name="RPNAME" value=""><input type="hidden" name="RPPOOPATH" value="">
	</form> <%
End Sub

Sub DrawReportList()
	Dim reportGroup, reportInfo, bNeedToDrawHeader
	%><table id="ReportsList" cellpadding="1"><%
	
	For Each reportGroup in reportList
		bNeedToDrawHeader = Not IsEmpty(reportGroup.Reports)
		bNeedToDrawHeader = bNeedToDrawHeader And reportGroup.Reports Is Nothing Or Not IsDull(reportGroup.Notices)
	
		If bNeedToDrawHeader Then
			%><tr><td colspan="2"><b><%=reportGroup.Title%></b></td></tr><%
			If Not IsEmpty(reportGroup.Reports) And Not(reportGroup.Reports Is Nothing) Then
				For each reportInfo in reportGroup.Reports
					%>
					<tr>
						<td width="8%">&nbsp;</td>
						<td>
							<a href="JavaScript:GoToReportLink('<%=DB2HTML(reportInfo.Path)%>', '<%=DB2HTML(reportInfo.Title)%>', '<%=DB2HTML(reportInfo.Id)%>', '<%=DB2HTML(reportInfo.PathPoo) %>')"><%=DB2HTML(reportInfo.Title)%></a>
						</td>
					</tr>
					<%
				Next
			End If
			
			If Not IsDull(reportGroup.Notices.Error) Then
				%>
				<tr>
					<td width="8%">&nbsp;</td>
					<td>
						<a href="JavaScript:ShowErrorMessage();" style="color: red" title="Подробности ошибки"><%=reportGroup.Notices.Error%></a>
						<input type="hidden" name="errMessage" value="<%=DB2HTML_BR(reportGroup.Notices.ErrorDescription) %>">
					</td>
				</tr>
				<%
			End If
		End If
	Next
	%></table><%
End Sub
%>
