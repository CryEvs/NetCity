<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRow(5, 13, [3], 14, 19);
	SumRow(5, 48, [3], 49, 51);

	ValidateDividedRows(5, 1, [2], 3, 3);
	ValidateDividedRows(5, 3, [4], 3, 3);
	ValidateDividedRows(5, 6, [7], 3, 3);
	ValidateDividedRows(5, 8, [9], 3, 3);
	ValidateDividedRows(5, 13, [20], 3, 3);
	ValidateDividedRows(5, 21, [22,23,24,25,26,27,28], 3, 3);
	ValidateDividedRows(5, 28, [29], 3, 3);
	ValidateDividedRows(5, 31, [32], 3, 3);
	ValidateDividedRows(5, 34, [35,39,40], 3, 3);
	ValidateDividedRows(5, 35, [36,37,38], 3, 3);
	ValidateDividedRows(5, 41, [42,46,47], 3, 3);
	ValidateDividedRows(5, 42, [43,44,45], 3, 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<%
End Sub
%>