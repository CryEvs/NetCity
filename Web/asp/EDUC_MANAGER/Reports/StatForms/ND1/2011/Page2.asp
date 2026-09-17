<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>
<script> <!--
	isInfoFormValid();

	function CalculateOSH() {
		ValidateDividedRows(1, 5, [6, 7, 8], 3, 16);
		ValidateDividedRows(1, 9, [10, 11, 12], 3, 16);
		ValidateDividedRows(1, 13, [14, 15, 18], 3, 16);
		ValidateDividedRows(1, 13, [16], 6, 16);
		ValidateDividedRows(1, 13, [17], 9, 16);
		ValidateIncludedRows(1, 18, [19, 20, 21], 3, 16);
		ValidateDividedRows(1, 22, [23, 24], 7, 16);
		ValidateIncludedRows(1, 24, [25, 26, 27], 7, 16);
		ValidateDividedRows(1, 28, [29, 30], 10, 16);
		ValidateIncludedRows(1, 30, [31, 32, 33], 10, 16);
		SumColAllRows(1, 15, 3, 34, 3, 14);
		SumRowAllColsByIndex(1, 1, 3, 16, [5, 9, 13, 22, 28]);
		SumRowAllColsByIndex(1, 2, 3, 16, [6, 10, 14, 23, 29]);
		ValidateIncludedCols(1, 15, [16], 1, 34);
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
