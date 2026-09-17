<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllCols(1, 1, 3, 18, 2, 10);
	
	ValidateDividedCols(1, 3, [4], 1, 11);
	ValidateDividedCols(1, 3, [4], 14, 20);
	ValidateDividedCols(1, 5, [6], 1, 20);
	ValidateDividedCols(1, 7, [8], 1, 20);
	ValidateDividedCols(1, 9, [10], 1, 20);
	ValidateDividedCols(1, 11, [12], 1, 20);
	ValidateDividedCols(1, 13, [14], 1, 9);
	ValidateDividedCols(1, 13, [14], 11, 11);
	ValidateDividedCols(1, 13, [14], 1, 9);
	ValidateDividedCols(1, 13, [14], 13, 13);
	ValidateDividedCols(1, 13, [14], 15, 18);
	ValidateDividedCols(1, 15, [16], 1, 9);
	ValidateDividedCols(1, 15, [16], 13, 13);
	ValidateDividedCols(1, 15, [16], 15, 20);
	ValidateDividedCols(1, 17, [18], 1, 9);
	ValidateDividedCols(1, 17, [18], 11, 11);
	ValidateDividedCols(1, 17, [18], 13, 13);
	ValidateDividedCols(1, 17, [18], 15, 20);

	ValidateDividedCols(1, 3, [13,15], 1, 9);
	ValidateDividedCols(1, 3, [13,15], 11, 11);
	ValidateDividedCols(1, 4, [14,16], 1, 9);
	ValidateDividedCols(1, 4, [14,16], 11, 11);
	ValidateDividedCols(1, 3, [13], 13, 13);
	ValidateDividedCols(1, 4, [14], 13, 13);
	ValidateDividedCols(1, 3, [13,15], 15, 18);
	ValidateDividedCols(1, 4, [14,16], 15, 18);
	ValidateDividedCols(1, 3, [15], 19, 20);
	ValidateDividedCols(1, 4, [16], 19, 20);

	ValidateDividedRows(1, 1, [11], 3, 18);
	ValidateDividedRows(1, 1, [12,13], 5, 12);
	ValidateDividedRows(1, 1, [13], 13, 14);
	ValidateDividedRows(1, 1, [13], 17, 18);
	
	ValidateDividedRows(1, 15, [16,17,18], 3, 18);

	ValidateDividedRows(1, 19, [20], 15, 18);
	ValidateDividedRows(1, 19, [20], 15, 18);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
	<%
End Sub
%>