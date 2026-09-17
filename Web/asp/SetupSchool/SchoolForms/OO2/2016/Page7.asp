<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	ValidateIncludedRows('02.1', 1, [2,3], 3, 5);
	ValidateDividedRows('02.1', 1, [4,5,6,7], 3, 5);
	ValidateDividedCols('02.1', 3, [4,5], 1, 7);
	ValidateIncludedCols('02.1', 4, [5], 1, 7);
	ValidateIncludedRows('02.1', 8, [9], 3, 3);
	ValidateCell('02.2', 1, 3, [1], 4);
	ValidateCell('02.2', 2, 3, [2], 4);
	ValidateCell('02.2', 3, 3, [3], 4);
	ValidateCell('02.2', 4, 3, [4], 4);
	ValidateCell('02.2', 5, 3, [5], 4);
	ValidateCell('02.2', 6, 3, [6], 4);
	ValidateCell('02.2', 7, 3, [7], 4);
	ValidateCell('02.2', 8, 3, [8], 4);
	ValidateCell('02.2', 10, 3, [10], 4);
	ValidateCell('02.2', 11, 3, [11], 4);
	ValidateCell('02.2', 12, 3, [12], 4);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.1_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2.2_inc.asp" -->
	<%
End Sub%>