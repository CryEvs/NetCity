<!-- #INCLUDE FILE=../header1.asp -->
<% ' © 2007-2013 IRTech. All rights reserved.
Dim strLink

Sub onHead()%>
<script language="JavaScript" src="<%=GetVersionedJsLink("extendSession.js")%>"></script><%
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miQA
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbAnalytics
 End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Reports", "kTitleQAReports")
End Function

Sub ReadState()
	strLink = MakeAbsoluteUrl(obContext.ServerSettings.IntegrationSettings.MsokoUrl) & "?SchoolYearId=" & strCurrYearID & "&UserId=" & strUserID
End Sub

Sub onDrawPage()%>
	<iframe frameborder="0" width="100%" height="880px" src="<%=strLink%>"></iframe><%
End Sub
%>
