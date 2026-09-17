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
	SumRowByIndex(1, 6, [3], [1,2]);
	SumRowsSpecFor103RicSec1Row31();
	SumRowsSpecFor103RicSec1Row36();

	ValidateDividedRows(1, 2, [3,4,5], 3, 3);
	ValidateDividedRows(1, 6, [7,8,9,10,11,12,20,26,27,28,29,30,41], 3, 3);
	ValidateDividedRows(1, 12, [13,14,15,16], 3, 3);
	ValidateDividedRows(1, 16, [17,18,19], 3, 3);
	ValidateDividedRows(1, 20, [21,22], 3, 3);
	ValidateDividedRows(1, 22, [23,24,25], 3, 3);
	ValidateDividedRows(1, 31, [32], 3, 3);
	ValidateDividedRows(1, 37, [38], 3, 3);
	ValidateDividedRows(1, 41, [42,43], 3, 3);

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