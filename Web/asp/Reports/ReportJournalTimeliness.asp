<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim bIsWorkYear
Dim nDaysCount

Sub specialRead()
	nDaysCount = GetSafeLng(obTokenMgr.GetData(strToken, stDaysCount),"0")
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = bIsStaff
End Function

Sub Main()
	bIsWorkYear = IsWorkYear()
	if Not bIsWorkYear then exit sub
End Sub

Sub specialWrite()
End Sub

Sub specialHead()
%>
	<script>
	function checkDaysCnt(e)
	{
		e=getEvent(e);
		keycode = getKeyCode(e);
		element = getTargetElement(e);

		if ( keycode == 48 && element.value == '')
			return false;
		if ( keycode == 8 )
			return true;
		keychar = String.fromCharCode(keycode)
		numcheck = /\d/
		return numcheck.test(keychar)
	}
	</script><%
End Sub

Sub specialDraw()
	If Not bIsWorkYear then 
		DrawInfo obLanguage("Common","kYearClosed"), False
		bExit = True
	End If
End Sub

Function GetFiltersLabelWidth
	GetFiltersLabelWidth = "col-md-6"
End Function

Function GetFiltersWidth
	GetFiltersWidth = "col-md-6"
End Function

Sub DrawFilters( strForm )
	if Not bIsWorkYear then exit sub
	Call DrawInputRowExt(DB2HTML_BR(obLanguage("Reports","kTimelinessDaysCnt")), nDaysCount, "DCnt", "text", "5", "3", "", "return checkDaysCnt(event);")
End Sub

%>
