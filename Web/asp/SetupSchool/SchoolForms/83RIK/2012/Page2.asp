<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
	If Not readonly Then%>
	<script> <!--
		isInfoFormValid();

		function CalculateOSH() {
			SumRowAllCols(1, 8, 3, 30, 9, 28);
			SumRowAllColsByIndex(1, 7, 3, 30, [8, 29, 30, 31, 32, 33, 34, 35]);
			SumRowAllCols(1, 2, 3, 30, 3, 6);
			SumRowAllColsByIndex(1, 1, 3, 30, [2, 7, 38, 40]);
			SumRowAllCols(1, 41, 3, 3, 43, 44);
			ValidateDividedRows(1, 7, [36, 37], 3, 30);

			ValidateIncludedRowsWithIncludedRows(1, [7, 38], [39], 3, 30);

			ValidateDividedCols(1, 3, [5, 8], 1, 40);
			ValidateIncludedCols(1, 3, [6, 7], 1, 40);
			ValidateEqIncludedCols(1, 3, [9, 10, 11, 12], 1, 40);
			ValidateDividedCols(1, 13, [14], 1, 40);
			ValidateIncludedCols(1, 3, [15, 17, 19, 20], 1, 40);
			ValidateDividedCols(1, 15, [16], 1, 40);
			ValidateDividedCols(1, 17, [18], 1, 40);
			ValidateIncludedCols(1, 3, [21, 22, 23, 24, 25], 1, 40);
			ValidateIncludedCols(1, 3, [26, 27, 28], 1, 40);
			ValidateDividedCols(1, 28, [29], 1, 40);
			ValidateDividedCols(1, 29, [30], 1, 40);
			ValidateCell(1, 41, null, [42], null);
			ValidateCell(1, 1, 3, [45,46], null);
			return true;
		}
		//--></script>
	<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
	<%
End Sub
%>
