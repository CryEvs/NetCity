<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	ValidateDividedCols(4, 3, [4,5], 1, 33);
	ValidateDividedCols(4, 6, [7], 1, 33);

	ValidateDividedRows(4, 1, [2,3,4], 3, 7);
	ValidateDividedRows(4, 5, [6,7], 3, 7);
	ValidateDividedRows(4, 8, [9,10,11], 3, 7);
	ValidateDividedRows(4, 12, [13,14], 3, 7);
	ValidateDividedRows(4, 15, [16,17,18], 3, 7);
	ValidateDividedRows(4, 19, [20], 3, 7);
	ValidateDividedRows(4, 20, [21,22], 3, 7);
	ValidateDividedRows(4, 23, [24,25,26,27], 3, 7);
	ValidateDividedRows(4, 28, [29,30,31], 3, 7);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
	<%
End Sub
%>