<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>
<script> <!--
function CalculateOSH() {
	SumRowByIndex(1, 6, [3], [1,2]);
	SumRowsSpecFor103RicSec1Row30();
	SumRowsSpecFor103RicSec1Row35();

	ValidateDividedRows(1, 2, [3,4,5], 3, 3);
	ValidateDividedRows(1, 6, [7,8,9,10,11,12,20,25,26,27,28,29,40], 3, 3);
	ValidateDividedRows(1, 12, [13,14,15,16], 3, 3);
	ValidateDividedRows(1, 16, [17,18,19], 3, 3);
	ValidateDividedRows(1, 20, [21,22], 3, 3);
	ValidateDividedRows(1, 22, [23,24], 3, 3);
	ValidateDividedRows(1, 30, [31], 3, 3);
	ValidateDividedRows(1, 40, [41], 3, 3);

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