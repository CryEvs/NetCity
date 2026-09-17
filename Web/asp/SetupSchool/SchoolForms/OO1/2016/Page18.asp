<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 18
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	ValidateDividedRows("02.3.1", 1, [2,3,4,5,6,7], 3, 14);
	ValidateIncludedRowsWithIncludedRows("02.3.1", [6,7], [8], 3, 14);
	ValidateIncludedRows("02.3.1", 4, [8], 3, 14);
	ValidateIncludedRows("02.3.1", 5, [9], 3, 14);

	ValidateIncludedCols("02.3.1", 3, [4,7,8], 1, 9);
	ValidateDividedCols("02.3.1", 4, [5,6], 1, 9);

	ValidateIncludedCols("02.3.1", 9, [10,13,14], 1, 9);
	ValidateDividedCols("02.3.1", 10, [11,12], 1, 9);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.3.1_inc.asp" -->
	<%
End Sub%>