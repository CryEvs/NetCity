<!-- #INCLUDE FILE="../em_screen.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.
Dim strLink

Sub onHead()%>
<script language="JavaScript" src="<%=GetVersionedJsLink("extendSession.js")%>"></script><%
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("Reports", "kTitleQAReports")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_QA
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_QA
 End Function

Sub ReadState()
	Call InitGlobalYear()
	strLink = MakeAbsoluteUrl(obContext.ServerSettings.IntegrationSettings.MsokoUrl) & "?EMId=" & strEMid & "&UserId=" & strUserID & "&GlobalYearId=" & nGlobalYearId
End Sub

Sub onDrawPage()%>
	<iframe frameborder="0" width="100%" height="880px" src="<%=strLink%>"></iframe><%
End Sub%>
