<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 36
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows('02.6.3', 3, 2, 8, 9, 11);
	SumColAllRows('02.6.3', 3, 10, 22, 9, 11);
	SumColForRowRange('02.6.3', 18, 2, 8, [3,12]);
	SumColForRowRange('02.6.3', 18, 10, 22, [3,12]);

	SumRowAllColsByIndex('02.6.3', 1, 3, 17, [2,4,5]);
	SumRowAllColsByIndex('02.6.3', 1, 18, 24, [2,4,5]);
	SumRowAllCols('02.6.3', 9, 3, 24, 10, 12);
	
	ValidateIncludedRows('02.6.3', 2, [3], 3, 24);
	ValidateIncludedRows('02.6.3', 2, [6], 3, 24);
	ValidateIncludedRows('02.6.3', 10, [13], 3, 24);
	ValidateIncludedRowsWithIncludedRows('02.6.3', [10, 11], [16], 3, 24);
	ValidateIncludedRows('02.6.3', 16, [17], 3, 24);
	ValidateIncludedRows('02.6.3', 17, [18], 3, 24);
	ValidateIncludedRows('02.6.3', 19, [20], 3, 24);

	ValidateDividedCols('02.6.3', 3, [4], 1, 22);
	ValidateDividedCols('02.6.3', 4, [5, 6], 1, 22);
	ValidateDividedCols('02.6.3', 4, [7], 1, 22);
	ValidateDividedCols('02.6.3', 4, [8], 1, 22);
	ValidateDividedCols('02.6.3', 12, [13], 1, 22);
	ValidateDividedCols('02.6.3', 13, [14, 15], 1, 22);
	ValidateDividedCols('02.6.3', 13, [16], 1, 22);
	ValidateDividedCols('02.6.3', 13, [17], 1, 22);
	ValidateDividedCols('02.6.3', 19, [20], 1, 22);
	ValidateDividedCols('02.6.3', 20, [21, 22], 1, 22);
	ValidateDividedCols('02.6.3', 20, [23], 1, 22);
	ValidateDividedCols('02.6.3', 20, [24], 1, 22);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.6.3_inc.asp" -->
	<%
End Sub%>