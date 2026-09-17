<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumColAllRows(3, 3, 1, 34, 4, 7);

	ValidateDividedCols(3, 3, [8], 1, 34);

	ValidateDividedRows(3, 1, [2], 3, 8);
	ValidateDividedRows(3, 3, [4,5], 3, 8);
	ValidateDividedRows(3, 6, [7,8,32], 3, 8);
	ValidateIncludedRows(3, 8, [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], 3, 8);
	
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub
%>