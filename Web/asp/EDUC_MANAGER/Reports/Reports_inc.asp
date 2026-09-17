<!-- #INCLUDE FILE=ReportsNames_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/ScreenNonPrint.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterEMs.asp -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim strReportID, strThemeID
Dim strFilterEMID

Function GetPageTitle()
	GetNames
	GetPageTitle = obLanguage("Reports","kReport") & ": " & GreenText(arrReportsNames(CLng(strThemeID), CLng(strReportID)))
End Function

Function GetPageTabItem()
	GetPageTabItem = tb_EM_Reports 
End Function

Sub ReadState()
	Call Init()
	strFilterEMID = ReadEMRegionFilter(False)
	strScriptName = Request.ServerVariables("SCRIPT_NAME")
	strThemeID = CStr(GetSafe("ThmID", Null))
	strReportID = CStr(GetSafe("RPTID", Null))
	specialRead
End Sub

Sub WriteState()
	specialWrite
End Sub

Sub onHeadSpecial( )
	Call DrawCommonScripts()
	%>
<script><!--
function ReturnBack() 
	{ DoSubmit(document.forms.Reports, 'Reports.asp');  }
//-->
</script><%
	onHeadReport
End Sub

Sub DrawButtons()
	Call ButtonCancel( "document.forms.Reports.target = '_self';ReturnBack()", obLanguage("Common","kBack"))
End Sub

Sub DrawFilters( strForm )
	
	Call DrawEMRegionFilter_2(strForm)
	specialFilters strForm
End Sub

Sub onDrawPage()%>
	<form name="Reports" action="<%=strScriptName%>" method="POST" onsubmit="return false;">
	<%=WriteObligatoryTags()%>
	<input type="hidden" name="BACK" value="<%=strScriptName%>">
	<input type="hidden" name="ThmID" value="<%=strThemeID%>">
	<input type="hidden" name="RPTID" value="<%=strReportID%>">
	<input type="hidden" name="RP" value=""><%
	Call WriteMoreHiddenTags()
	Call DrawButtonsFilters( True, "Reports" )%>
	</form>
	<%
	If bExit Then Exit Sub
	specialDraw
End Sub

Sub WriteMoreHiddenTags( )
End Sub
%>
