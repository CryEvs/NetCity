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
	SumRowAllColsByIndex(2, 10, 3, 13, [11,12,13,14,15,21,22]);
	SumRowsSpecFor103RicSec2Row24();

	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 1, 3);
	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 5, 22);
	ValidateDividedCols(2, 3, [4,5,6,7,8,9,10,11], 24, 25);

	ValidateDividedCols(2, 12, [13], 1, 3);
	ValidateDividedCols(2, 12, [13], 5, 22);
	ValidateDividedCols(2, 12, [13], 24, 25);

	ValidateDividedRows(2, 1, [2,3], 3, 13);
	ValidateDividedRows(2, 1, [2,3], 3, 13);
	ValidateDividedRows(2, 5, [6,8], 3, 13);
	ValidateDividedRows(2, 15, [16], 3, 13);
	ValidateDividedRows(2, 17, [18,19,20], 3, 13);
	ValidateDividedRows(2, 24, [25], 3, 13);

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