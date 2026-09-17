<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterMonths.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim objPayNorms, bEmptyPayNorms
Dim strPayNorms
Dim bList

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arReportsForAllClasses)
End Function

Sub specialRead()
	bList = GetSafeBool(GetSafe("List", false), false)

	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	Call InitMonths( dtYearStart, dtYearEnd )
	Set objPayNorms = objNSNET.GetPayNormsForMonth(strSchoolID, dtMonthStart)
	bEmptyPayNorms = objPayNorms.EOF
	If Not bEmptyPayNorms Then
		strPayNorms = GetSafeStr(Request("NormID"), -1, obTokenMgr.GetData(strToken, stFilterPayNorms))
		If Not IsDull(strPayNorms) Then
			strPayNorms = ", " & strPayNorms & ","
		End If
	End If
End Sub

Sub specialWrite()
	WriteMonth
End Sub

Sub Main()
End Sub

Sub specialHead()
	scriptMonth "Reports", ""
%>
	<script>
$(document).ready(function (){
	$('input[type=checkbox]').first()[0].checked = true;
	$('input[type=checkbox]').on("click",
		function ( e )
		{
			var n = $( "input:checked" ).length;
			if (n>0)
				return true;
			alert(language.Generic.Reports.kCheckNorma);
			return false;
		});
});

	</script><%
End Sub

Sub specialDraw()
	If bEmptyPayNorms Then Exit Sub
End Sub

Sub WriteMoreHiddenTags()
	WriteHiddenTags Array("List", bList)
End Sub

Sub specialFilters( strForm )
	DrawMonths strForm
	DrawPayNorms
End Sub

Sub DrawPayNorms()
	If bEmptyPayNorms Then%>
		<tr><td colspan="2" class="SmallHeader"><%=obLanguage("Reports","kNoPayNormsForMonth")%></td></tr><%
	Else%>
		<div class="form-group">
		<label class="control-label col-md-4"><%=obLanguage("Reports","kPayNorms")%></label>
		<label class="col-md-8 inline"><%Call PopulateCheck(objPayNorms, "NormID", "NORMID", "ABBREV", strPayNorms)%></label>
		</div><%
	End if
End Sub
%>
