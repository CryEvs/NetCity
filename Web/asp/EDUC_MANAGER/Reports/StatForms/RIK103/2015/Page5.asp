<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllColsByIndex(4, 27, 3, 7, [29,30,31]);
	SumRowAllColsByIndex(4, 32, 3, 7, [34,35,36]);

	ValidateDividedCols(4, 3, [4,5], 1, 44);
	ValidateDividedCols(4, 6, [7], 1, 44);

	ValidateDividedRows(4, 1, [2,3,4], 3, 7);
	ValidateDividedRows(4, 5, [6,7,8], 3, 7);
	ValidateDividedRows(4, 9, [10,11,12], 3, 7);
	ValidateDividedRows(4, 13, [14,15,16], 3, 7);
	ValidateDividedRows(4, 17, [18,19,20,21], 3, 7);
	ValidateDividedRows(4, 22, [23], 3, 7);
	ValidateDividedRows(4, 23, [24,25,26], 3, 7);
	ValidateDividedRows(4, 27, [28], 3, 7);
	ValidateDividedRows(4, 32, [33], 3, 7);
	ValidateDividedRows(4, 39, [40,42,43,44], 3, 7);
	ValidateDividedRows(4, 40, [41], 3, 7);

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