<!-- #INCLUDE File="ReportGrades_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub specialHead()
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
%><script>
	$(document).ready(function(){

	});
</script><%
End Sub

Sub specialRead
	bDrawButtonGenerate = True
	bHasGraph = True
	bDrawStudentList = True
End Sub
%>
