<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<% ' © 2007-2013 IRTech. All rights reserved.
Dim strShortSchoolName, strLoginName, strCityName, strProvinceName
Dim objInfo
Dim strLink 

Function GetPageMenuItem()
	GetPageMenuItem = IIf( bIsStaff, miLearningApplications,  miAssignments)
End Function

Function GetPageTabItem()
	GetPageTabItem = tbLAIntegrationND
End Function

Sub WriteState()
End Sub

Sub onHead()
%><SCRIPT><!--
function ExportUsersNDToXML(){
	DoSubmit(document.Main, "");
}
//--></SCRIPT><%
End Sub

Function onLoad()
End Function

Sub ReadState()
	Set objInfo = objNSNET.GetInfoForSendQueryToND(strUserID)

	strShortSchoolName = Server.URLEncode(objInfo("EONAME"))
	strLoginName = objInfo("LOGINNAME")
	strCityName = Server.URLEncode(objInfo("NAME"))
	strProvinceName = Server.URLEncode(objInfo("STATEPROVINCENAME"))
	
	strLink = "http://eorcollection.ru/do/index_a008.php?LoginName=" & strLoginName & "&CityName=" & strCityName & "&ProvinceName=" & strProvinceName & "&SchoolName=" & strShortSchoolName
End Sub

Sub Main()
End Sub

Sub onDrawPage()%>
	<iframe frameborder="0" width="100%" height="768px" src="<%=strLink%>"></iframe>
	<form name="Main" method="post" action="UsersNDExport.asp">
		<%=WriteObligatoryTags()%>
		<br /><%
		If HasUserRole(rlAdmin) Then SimpleButton "ExportUsersNDToXML()", obLanguage("LearnApp","kExportUsersNDToXML") %>
	</form><%
End Sub
%>
