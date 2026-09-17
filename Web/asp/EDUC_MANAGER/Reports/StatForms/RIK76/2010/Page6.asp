<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumColForRowRange(4, 11, 1, 17, [3, 7]);
	SumColForRowRange(4, 12, 1, 17, [4, 8]);
	SumColForRowRange(4, 13, 1, 17, [5, 9]);
	SumColForRowRange(4, 14, 1, 17, [6, 10]);

	SumRowAllCols(4,7,3,15,1,6);
	SumRowAllCols(4,13,3,15,8,12);
	SumRowAllCols(4,17,3,15,14,16);
	SumRowAllColsByIndex(4,18,3,15,[7,13,17]);

	ValidateDividedCols(4, 4, [5,6], 1, 6);
	ValidateDividedCols(4, 4, [5,6], 8, 12);
	ValidateDividedCols(4, 4, [5,6], 14, 16);
	ValidateDividedCols(4, 8, [9,10], 1, 6);
	ValidateDividedCols(4, 8, [9,10], 8, 12);
	ValidateDividedCols(4, 8, [9,10], 14, 16);

	ValidateDividedCols(4, 12, [15], 1, 6);
	ValidateDividedCols(4, 12, [15], 8, 12);
	ValidateDividedCols(4, 12, [15], 14, 16);
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

