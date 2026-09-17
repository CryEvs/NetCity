<!-- #INCLUDE File="ReportGrades_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/AverageMarkReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub specialRead()
	bHasGraph = True
	strMarksType = GetSafeStr(obTokenMgr.GetData(strToken, stMarksType), 1, "T")
End Sub

Sub WritePostScripts()
	%>
	<script type="text/javascript">
		report.setOptions({graphType: "line"});
	</script>
	<%
End Sub
%>
