<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumColForRowRange(5, 7, 1, 19, [3,5]);
	SumColForRowRange(5, 8, 1, 19, [4,6]);

	SumRowAllCols(5, 20, 3, 13, 1, 19);

	ValidateDividedCols(5, 3, [4], 1, 20);
	ValidateDividedCols(5, 5, [6], 1, 20);
	ValidateDividedCols(5, 7, [8], 1, 20);
	ValidateIncludedCols(5, 7, [9,10,11,12], 1, 20);

	ValidateDividedCols(5, 12, [13], 1, 20);
	
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