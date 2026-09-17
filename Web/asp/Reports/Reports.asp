<!-- #INCLUDE FILE="../header1.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim i, j, objReportsComponent, reportList

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kFNReports")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miReports
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbReports
 End Function

Sub OnHead()%>
<script><!--
function GoToReportLink(strHREF, strReportName, strReportID)
{
	var form = document.ReportsList;	
	form.elements['RPNAME'].value = strReportName;
	form.elements['RPTID'].value = strReportID;
	if (strHREF == '') alert(language.Generic.ReportNames.kReportUnavailable)
	else {
		form.action = ''+strHREF+'';
		DoSubmit(form, "");
	}
}
//--></script>
<%
End Sub

Sub OnDrawPage()
	Dim bViewNotAdminReports 
	
	Set objReportsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReportsComponent")
	Set reportList = objReportsComponent.GetReportList()
	Call DrawReportList()
	%><form NAME="ReportsList" METHOD="POST" ACTION="">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="RPTID" value=""><input type="hidden" name="ThmID" value="">
		<input type="hidden" name="RPNAME" value="">
	</form> <%
End Sub

Sub DrawReportList()
	Dim reportGroup, reportsCount, reportInfo
	%><table id="ReportsList" cellpadding="1"><%
	For j = 0 To reportList.Count - 1
		Set reportGroup = reportList(j)
		reportsCount = reportGroup.Reports.Count
		If reportsCount <> 0 Then
			%><tr><td colspan="2"><b><%=reportGroup.Title%></b></td></tr><%
			For each reportInfo in reportGroup.Reports
				%><tr><td width="8%">&nbsp;</td><td><a href="JavaScript:GoToReportLink('<%=DB2HTML(reportInfo.Path)%>', '<%=DB2HTML(reportInfo.Title)%>', '<%=DB2HTML(reportInfo.Id)%>')"><%=DB2HTML(reportInfo.Title)%></a></td></tr><%
			Next
		End If
	Next
	%></table><%
End Sub
%>
