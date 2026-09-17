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
	SumColForRowRange(2, 5, 2, 30, [3,4]);
	SumColForRowRange(2, 8, 2, 23, [6,7]);

	SumRowAllColsByIndex(2, 1, 3, 8, [2,3,11,12,13,15,16,17]);
	
	ValidateIncludedRows(2, 3, [4,5,6,8,9,10], 3, 8);
	ValidateDividedRows(2, 6, [7], 3, 8);
	ValidateDividedRows(2, 13, [14], 3, 8);
	ValidateDividedRows(2, 19, [20], 3, 8);
	ValidateDividedRows(2, 24, [25,26,27,28,29], 3, 5);
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