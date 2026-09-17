<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>
<script> <!--
	isInfoFormValid();

	function CalculateOSH() {
		ValidateDividedRows(1, 5, [6, 7, 8], 3, 14);
		ValidateDividedRows(1, 5, [6, 7, 8], 16, 16);
		ValidateDividedRows(1, 9, [10, 11, 12], 3, 14);
		ValidateDividedRows(1, 9, [10, 11, 12], 16, 16);
		ValidateDividedRows(1, 13, [14, 15, 18], 3, 14);
		ValidateDividedRows(1, 13, [14, 15, 18], 16, 16);
		ValidateDividedRows(1, 13, [16], 6, 14);
		ValidateDividedRows(1, 13, [16], 16, 16);
		ValidateDividedRows(1, 13, [17], 9, 14);
		ValidateDividedRows(1, 13, [17], 16, 16);
		ValidateIncludedRows(1, 18, [19, 20, 21], 3, 14);
		ValidateIncludedRows(1, 18, [19, 20, 21], 16, 16);
		ValidateDividedRows(1, 22, [23, 24], 7, 14);
		ValidateDividedRows(1, 22, [23, 24], 16, 16);
		ValidateIncludedRows(1, 24, [25, 26, 27], 7, 14);
		ValidateIncludedRows(1, 24, [25, 26, 27], 16, 16);
		ValidateDividedRows(1, 28, [29, 30], 10, 14);
		ValidateDividedRows(1, 28, [29, 30], 16, 16);
		ValidateIncludedRows(1, 30, [31, 32, 33], 10, 14);
		ValidateIncludedRows(1, 30, [31, 32, 33], 16, 16);
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
