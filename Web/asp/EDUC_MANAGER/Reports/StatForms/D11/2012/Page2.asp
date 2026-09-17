<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {

	SumColAllRows(1, 4, 2, 148, 5, 10);
	SumColAllRows(1, 11, 2, 148, 12, 17);

	SumRowAllCols(1, 4, 4, 17, 5, 8);
	SumRowAllCols(1, 9, 4, 17, 10, 14);
	SumRowAllCols(1, 15, 4, 17, 16, 17);
	SumRowAllCols(1, 18, 4, 17, 19, 32);
	SumRowAllCols(1, 33, 4, 17, 34, 40);
	SumRowAllColsByIndex(1, 41, 4, 17, [42]);
	SumRowAllColsByIndex(1, 43, 4, 17, [44]);
	SumRowAllCols(1, 45, 4, 17, 46, 47);
	SumRowAllCols(1, 48, 4, 17, 49, 56);
	SumRowAllColsByIndex(1, 57, 4, 17, [58]);
	SumRowAllCols(1, 59, 4, 17, 60, 61);
	SumRowAllCols(1, 62, 4, 17, 63, 64);
	SumRowAllColsByIndex(1, 65, 4, 17, [66]);
	SumRowAllCols(1, 67, 4, 17, 68, 84);
	SumRowAllCols(1, 85, 4, 17, 86, 87);
	SumRowAllCols(1, 88, 4, 17, 89, 92);
	SumRowAllCols(1, 93, 4, 17, 94, 96);
	SumRowAllColsByIndex(1, 97, 4, 17, [98]);
	SumRowAllCols(1, 99, 4, 17, 100, 102);
	SumRowAllCols(1, 103, 4, 17, 104, 106);
	SumRowAllCols(1, 107, 4, 17, 108, 115);
	SumRowAllCols(1, 116, 4, 17, 117, 136);
	SumRowAllCols(1, 137, 4, 17, 138, 147);
	SumRowAllColsByIndex(1, 3, 4, 17, [04,09,15,18,33,41,43,45,48,57,59,62,65,67,85,88,93,97,99,103,107,116,137,148]);

	ValidateIncludedCols(1, 4, [5,6,7,8,9,10], 1, 1) ;
	ValidateIncludedCols(1, 11, [12,13,14,15,16,17], 1, 1) ;

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