<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllColsByIndex(2, 16, 3, 14, [17,18,19,20,21,36,37]);
	SumRowsSpecFor103RicSec2Row39();

	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 1, 5);
	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 7, 37);
	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 39, 41);

	ValidateDividedCols(2, 12, [13,14], 1, 5);
	ValidateDividedCols(2, 12, [13,14], 7, 37);
	ValidateDividedCols(2, 12, [13,14], 39, 41);

	ValidateDividedRows(2, 1, [2,3,4,5], 3, 14);
	ValidateDividedRows(2, 7, [8,12], 3, 14);
	ValidateDividedRows(2, 21, [22, 23], 3, 14);
	ValidateDividedRows(2, 24, [25,26,27,28,29,30,31,32,33,34,35], 3, 14);
	ValidateDividedRows(2, 39, [40, 41], 3, 14);

	ValidateIncludedCells(2, 42, null, [43,44,45], null);
	ValidateIncludedCells(2, 45, null, [47], null);
	ValidateIncludedCells(2, 48, null, [49,50,51], null);
	ValidateIncludedCells(2, 52, null, [53,54,55], null);
	ValidateIncludedCells(2, 56, null, [57,58,59], null);
	ValidateIncludedCells(2, 60, null, [61,62,63], null);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<%
End Sub
%>