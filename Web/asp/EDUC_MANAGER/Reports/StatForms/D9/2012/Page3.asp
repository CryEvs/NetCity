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
	SumRowAllCols(2, 1, 3, 11, 2, 10);

	ValidateDividedCols(2, 3, [4,8,9], 1, 10);
	ValidateDividedCols(2, 3, [5,6,7], 1, 10);
	ValidateDividedCols(2, 3, [4], 11, 11);
	ValidateDividedCols(2, 3, [4,5], 13, 13);
	ValidateDividedCols(2, 3, [4,6,7,8,9], 14, 14);
	ValidateDividedCols(2, 3, [4,6,7,8], 15, 15);
	ValidateDividedCols(2, 3, [4,6,7,8,9], 17, 17);
	ValidateDividedCols(2, 3, [4,6,7,8,9], 19, 20);
	ValidateDividedCols(2, 3, [4,6,7,8], 21, 21);

	ValidateDividedCols(2, 9, [10,11], 1, 10);
	ValidateDividedCols(2, 9, [10,11], 12, 12);
	ValidateDividedCols(2, 9, [10,11], 14, 14);
	ValidateDividedCols(2, 9, [10,11], 17, 20);

	ValidateDividedRows(2, 1, [12], 5, 11);
	ValidateDividedRows(2, 1, [13], 3, 5);
	ValidateDividedRows(2, 1, [14], 3, 4);
	ValidateDividedRows(2, 1, [14], 6, 11);

	ValidateDividedRows(2, 15, [16], 6, 8);
	
	ValidateDividedRows(2, 17, [18,19,20], 6, 11);
	ValidateDividedRows(2, 17, [19,20], 3, 4);

	ValidateDividedRows(2, 21, [22], 6, 8);

	//ValidateDividedRows(2, 4, [23], null, null);
	//ValidateDividedRows(2, 5, [24], null, null);
	
	ValidateCell(2, 4, 3, [23], null) ;
	ValidateCell(2, 5, 3, [24], null) ;

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