<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllColsByIndex(2, 10, 3, 14, [11,12,13,14,15,23,24]);
	SumRowsSpecFor103RicSec2Row26();

	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 1, 3);
	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 5, 24);
	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 26, 28);

	ValidateDividedCols(2, 12, [13,14], 1, 3);
	ValidateDividedCols(2, 12, [13,14], 5, 22);
	ValidateDividedCols(2, 12, [13,14], 24, 25);

	ValidateDividedRows(2, 1, [2,3], 3, 14);
	ValidateDividedRows(2, 5, [6,8], 3, 14);
	ValidateDividedRows(2, 15, [16, 17], 3, 14);
	ValidateDividedRows(2, 18, [19,20,21,22], 3, 14);
	ValidateDividedRows(2, 26, [27, 28], 3, 13);

	ValidateIncludedCells(2, 29, null, [30, 31, 32], null);
	ValidateIncludedCells(2, 33, null, [34], null);
	ValidateIncludedCells(2, 35, null, [36, 37, 38], null);
	ValidateIncludedCells(2, 40, null, [39], null);
	ValidateIncludedCells(2, 41, null, [42], null);
	ValidateIncludedCells(2, 43, null, [44, 45, 46], null);

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