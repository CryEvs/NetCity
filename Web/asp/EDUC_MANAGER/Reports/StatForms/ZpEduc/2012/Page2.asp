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
	SumRowAllColsByIndex(1, 1, 1, 11, [2,3,4,5,7,8,11,14,17,18,19,21,23,24,25,26,27,28]);

	ValidateDividedCols(1, 3, [4], 1, 28);
	ValidateIncludedCols(1, 3, [6,7,8], 1, 28);
	ValidateIncludedCols(1, 5, [9,10,11], 1, 28);

	ValidateDividedRows(1, 5, [6], 1, 11);
	ValidateDividedRows(1, 8, [9,10], 1, 11);
	ValidateDividedRows(1, 11, [12,13], 1, 11);
	ValidateDividedRows(1, 14, [15,16], 1, 11);
	ValidateDividedRows(1, 19, [20], 1, 11);
	ValidateDividedRows(1, 21, [22], 1, 11);

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