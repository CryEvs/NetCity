<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->

<% ' © 2007-2016 IRTech. All rights reserved.

Dim strShortSchoolName, strLoginName, strCityName, strProvinceName
Dim objInfo
Dim strLink 

Function GetPageMenuItem()
	GetPageMenuItem = IIf(bIsStaff, miLearningApplications, miStudentDiary)
End Function

Function GetPageTabItem()
	GetPageTabItem = tbLAIntegrationND
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("LearnApp","kCollectionOfResources")
End Function

Sub WriteState()
End Sub

Sub onHead()
	%>
	
	<script type="text/javascript">
		$(function () {
			var strNewDiskToken = "<%=strNewDiskToken%>";
			if (!strNewDiskToken) { strNewDiskToken = "null" };
			var srcUrl = "https://obr.nd.ru/sgo?token=" + strNewDiskToken + "&redirect=1"
			var url = '<iframe frameborder="0" width="100%" height="768px" src="' + srcUrl + '"></iframe>';
			$('#frame').append($(url));
		});
	</script><%
End Sub

Function onLoad()
End Function

Sub ReadState()
End Sub

Sub Main()
End Sub

Sub onDrawPage()%>
	<div id="frame">

	</div>

	<form name="Main" method="post">
		<%=WriteObligatoryTags()%>
	</form><%
End Sub%>
