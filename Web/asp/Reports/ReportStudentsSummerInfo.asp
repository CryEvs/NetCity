<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim bIsWorkYear

Sub specialRead()
End Sub

Sub specialWrite()
End Sub

Function hasUserRightsOnPage()
	If bIsStaff Then
		If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
		If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
		hasUserRightsOnPage = False
	Else
		bAll = False
		hasUserRightsOnPage = True
	End If
End Function


Sub Main()
End Sub

Sub specialHead()
	scriptCalendarCommon%>

	<script>
		$("#buttonPanel").hide();

		$(document).ready(function() {
			jsSubmit({
				action: "/webapi/reports/studentsSummerInfo",
				method: "GET",
				showProcessing: true
			}).then(function(response) {
				var model = response.report.filterPanel;
				var sources = response.filterSources;
				fp = new filterPanel($(".filters-panel"), model, sources, "/webapi/reports/studentsSummerInfo/initfilters", $("#buttonPanel"))
			});
		});
	</script><%
End Sub

Sub specialFilters( strForm )
End Sub

Sub specialDraw()
End Sub%>