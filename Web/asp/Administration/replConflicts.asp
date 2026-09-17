<!-- #INCLUDE FILE="sa_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="replConflicts_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleInfoConflicts") &" <i>" & NETSCHOOL_PRODUCT_NAME & "</i><br>"
End Function

Sub WriteState()
End Sub

Sub onHeadSpecial()%>
<script><!--
<%    Call DrawPrintScripts( "replConflictsPrint.asp", "replConflictsExport.asp" )%>
//--></script><%
End Sub

Sub DrawButtons()
	ButtonCancel "goBack( document.ConflictsForm, '/angular/admin/stats/usermon/');", obLanguage("Common","kBack")
	Response.Write "<br>" & ShowButton("refresh","refresh","JavaScript:ok('ConflictsForm','')", obLanguage("Buttons","kRefresh"), obLanguage("Buttons","kRefresh"))
	If Not objConflicts.EOF Then Call DrawPrintButtons()
End Sub

Sub DrawFilters( strForm ) 
End Sub

Sub onDrawPage() %>
	<form name="ConflictsForm" action="replConflicts.asp" method="POST">
	<%=WriteObligatoryTags()%><%
	Call DrawButtonsFilters( True, "ConflictsForm" )
	%></form><%
	Call DrawTable()
	Response.Write "<br>"
	Call DrawExcelForm()
End Sub%>
