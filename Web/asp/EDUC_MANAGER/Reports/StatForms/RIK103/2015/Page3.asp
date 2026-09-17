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
	SumRowAllColsByIndex(2, 12, 3, 14, [13,14,15,16,17,25,26]);
	SumRowsSpecFor103RicSec2Row28();

	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 1, 3);
	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 5, 26);
	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 28, 30);

	ValidateDividedCols(2, 12, [13,14], 1, 3);
	ValidateDividedCols(2, 12, [13,14], 5, 24);
	ValidateDividedCols(2, 12, [13,14], 26, 27);

	ValidateDividedRows(2, 1, [2,3], 3, 14);
	ValidateDividedRows(2, 5, [6,8], 3, 14);
	ValidateDividedRows(2, 17, [18, 19], 3, 14);
	ValidateDividedRows(2, 20, [21,22,23,24], 3, 14);
	ValidateDividedRows(2, 28, [29, 30], 3, 13);

	ValidateIncludedCells(2, 31, null, [32, 33, 34], null);
	ValidateIncludedCells(2, 35, null, [36], null);
	ValidateIncludedCells(2, 37, null, [38, 39, 40], null);
	ValidateIncludedCells(2, 41, null, [42, 43, 44], null);
	ValidateIncludedCells(2, 45, null, [46, 47, 48], null);
	ValidateIncludedCells(2, 49, null, [50, 51, 52], null);

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